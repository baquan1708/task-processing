import { TaskModule } from '@mbc-cqrs-serverless/task'
import { Module } from '@nestjs/common'
import { TestTaskEventHandler } from 'src/sample/handler/test-task.handler'

import { TaskQueueEventFactory } from './task-queue-event-factory'

@Module({
  imports: [
    TaskModule.register({
      taskQueueEventFactory: TaskQueueEventFactory,
    }),
  ],
  providers: [TestTaskEventHandler],
  exports: [TaskModule],
})
export class MyTaskModule {}
