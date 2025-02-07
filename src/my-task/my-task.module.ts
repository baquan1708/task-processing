import { TaskModule } from '@mbc-cqrs-serverless/task'
import { Module } from '@nestjs/common'
import { TestSfnTaskEventHandler } from 'src/sample/handler/test-sfn-task.handler'

import { TaskQueueEventFactory } from './task-queue-event-factory'

@Module({
  imports: [
    TaskModule.register({
      taskQueueEventFactory: TaskQueueEventFactory,
    }),
  ],
  providers: [
    TestSfnTaskEventHandler
  ],
  exports: [TaskModule],
})
export class MyTaskModule {}
