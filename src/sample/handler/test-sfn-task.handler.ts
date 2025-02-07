// import {
//   EventHandler,
//   IEventHandler,
//   StepFunctionService,
// } from '@mbc-cqrs-serverless/core'
// import { TaskService } from '@mbc-cqrs-serverless/task'
// import { Logger } from '@nestjs/common'
// import { ConfigService } from '@nestjs/config'

// import { TestSfnTaskEvent } from './test-sfn-task.event'

// function sleep(ms) {
//   return new Promise((resolve) => setTimeout(resolve, ms))
// }

// @EventHandler(TestSfnTaskEvent)
// export class TestSfnTaskEventHandler
//   implements IEventHandler<TestSfnTaskEvent>
// {
//   private readonly logger = new Logger(TestSfnTaskEventHandler.name)

//   constructor() {}

//   async execute(event: TestSfnTaskEvent): Promise<any> {
//     const time = Math.random() * 20000
//     console.log('@$@#$event@$@#$', time)

//     await sleep(time) // Sleep for 2 seconds
//     // if (Math.random() > 0.5) {
//     //   throw new Error('Error after process')
//     // }

//     // this.logger.debug(`Process task completed: ${event.taskEvent.eventID}`)
//     return `Result after process ${time}`
//   }
// }
