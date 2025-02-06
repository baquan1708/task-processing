import {
  EventHandler,
  IEventHandler,
  StepFunctionService,
} from '@mbc-cqrs-serverless/core'
import { TaskService } from '@mbc-cqrs-serverless/task'
import { Logger } from '@nestjs/common'
import { ConfigService } from '@nestjs/config'

import { TestTaskEvent } from './test-task.event'

@EventHandler(TestTaskEvent)
export class TestTaskEventHandler implements IEventHandler<TestTaskEvent> {
  private readonly logger = new Logger(TestTaskEventHandler.name)
  private readonly sfnTaskArn: string

  constructor(
    private readonly taskService: TaskService,
    private readonly sfnService: StepFunctionService,
    private readonly configService: ConfigService,
  ) {
    this.sfnTaskArn = this.configService.get<string>(
      'SFN_EMPLOYEE_IMPORT_ARN',
      '',
    )
  }

  async execute(event: TestTaskEvent): Promise<any> {
    console.log('@$@#$@sfnTaskArn', this.sfnTaskArn)
    this.logger.debug(
      `Begin processing the task: ${event.taskEvent.eventID}`,
      event,
    )
    // create sub pk, sk for each item in input -> update parent attrs and insert sub task
    // await sleep(3000) // Long running task
    await this.sfnService.startExecution(
      this.sfnTaskArn,

      [
        { key: 'value1' },
        { key: 'value2' },
        { key: 'value3' },
        { key: 'value4' },
        { key: 'value5' },
        { key: 'value6' },
      ],

      'test' + Math.random() * 10000,
    )

    this.logger.debug(`Process task completed: ${event.taskEvent.eventID}`)
    return 'Result after process'
  }
}
