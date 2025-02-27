import { Module } from '@nestjs/common'

import { CustomEventFactory } from './event-factory'
import { MyTaskModule } from './my-task/my-task.module'
import { prismaLoggingMiddleware, PrismaModule } from './prisma'
import { SampleModule } from './sample/sample.module'

@Module({
  imports: [
    PrismaModule.forRoot({
      isGlobal: true,
      prismaServiceOptions: {
        middlewares: [prismaLoggingMiddleware()],
        prismaOptions: {
          log:
            process.env.NODE_ENV !== 'local'
              ? ['error']
              : ['info', 'error', 'warn', 'query'],
        },
        explicitConnect: false,
      },
    }),
    SampleModule,
    MyTaskModule,
  ],
  providers: [CustomEventFactory],
})
export class MainModule {}
