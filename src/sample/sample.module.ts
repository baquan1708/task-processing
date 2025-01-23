import { CommandModule } from '@mbc-cqrs-serverless/core'
import { Module } from '@nestjs/common'
import { MyTaskModule } from 'src/my-task/my-task.module'

import { SampleDataSyncRdsHandler } from './handler/sample-rds.handler'
import { SampleController } from './sample.controller'
import { SampleService } from './sample.service'

@Module({
  imports: [
    CommandModule.register({
      tableName: 'sample',
      dataSyncHandlers: [SampleDataSyncRdsHandler],
    }),
    MyTaskModule,
  ],
  controllers: [SampleController],
  providers: [SampleService],
  exports: [SampleService],
})
export class SampleModule {}
