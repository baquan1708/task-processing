import {
  ITaskQueueEventFactory,
  TaskQueueEvent,
} from '@mbc-cqrs-serverless/task'
import { TestTaskEvent } from 'src/sample/handler/test-task.event'

export class TaskQueueEventFactory implements ITaskQueueEventFactory {
  async transformTask(event: TaskQueueEvent): Promise<any[]> {
    console.log('#@$@#$#', event)
    return [new TestTaskEvent().fromSqsRecord(event)]

    // const taskEvents = event.Records.map((record) => {
    //   if (
    //     record.eventSourceARN.endsWith('tasks') ||
    //     record.eventSourceARN.includes('tasks' + '/stream/')
    //   ) {
    //     if (record.eventName === 'INSERT') {
    //       return new TaskEvent().fromDynamoDBRecord(record)
    //     }
    //   }
    //   return undefined
    // }).filter((event) => !!event)

    // return [...curEvents, ...taskEvents]
  }
}
