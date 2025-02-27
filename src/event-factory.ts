import {
  EventFactory,
  IEvent,
  StepFunctionsEvent,
} from '@mbc-cqrs-serverless/core'
import { EventFactoryAddedTask, TaskEvent } from '@mbc-cqrs-serverless/task'
import { Logger } from '@nestjs/common'
import { DynamoDBStreamEvent } from 'aws-lambda'

@EventFactory()
export class CustomEventFactory extends EventFactoryAddedTask {
  private readonly logger = new Logger(CustomEventFactory.name)
  async transformDynamodbStream(event: DynamoDBStreamEvent): Promise<IEvent[]> {
    const curEvents = await super.transformDynamodbStream(event)
    const taskEvents = event.Records.map((record) => {
      if (
        record.eventSourceARN.endsWith('tasks') ||
        record.eventSourceARN.includes('tasks' + '/stream/')
      ) {
        if (record.eventName === 'INSERT') {
          return new TaskEvent().fromDynamoDBRecord(record)
        }
      }
      return undefined
    })
      .filter((event) => !!event)
      .filter((event) => event.taskEntity.sk.split('#').length < 3)

    return [...curEvents, ...taskEvents]
  }

  // async transformStepFunction(
  //   event: StepFunctionsEvent<any>,
  // ): Promise<IEvent[]> {
  //   console.log('@$@#$@#$@', event)
  //   if (event.context.StateMachine.Name.includes('employee-import')) {
  //     console.log('@$#$@#$@!#$!@$#TASK@#$@#$')
  //     return []
  //   }
  //   return super.transformStepFunction(event)
  // }
}
