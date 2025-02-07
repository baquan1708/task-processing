import { ApplicationLogLevel, SystemLogLevel } from 'aws-cdk-lib/aws-lambda'
import { Config } from '../type'

const config: Config = {
  env: 'dev',
  appName: 'task-sfn-interation-map',

  domain: {
    http: 'task-sfn-infra.developer-pionero.mbc-dev.com',
    appsync: 'task-sfn-infra-appsync.developer-pionero.mbc-dev.com',
  },

  userPoolId: 'ap-northeast-1_NfyqKTjPS',

  vpc: {
    id: 'vpc-03c3b0319b2706b49',
    subnetIds: [
      'subnet-0147486eabfc30681',
      'subnet-0459266bd3e78a8c1',
      'subnet-01598295459c4d3d9',
    ],
    securityGroupIds: ['sg-06d0f5fc2d4225f50'],
  },
  rds: {
    accountSsmKey: '/mbc/cqrs/rds-account',
    endpoint: 'db.mbc-net.com',
    dbName: 'dev_cdk_infra',
  },

  logLevel: {
    lambdaSystem: SystemLogLevel.DEBUG,
    lambdaApplication: ApplicationLogLevel.TRACE,
    level: 'verbose',
  },

  frontBaseUrl: 'test-cqrs.developer-pionero.mbc-dev.com',
  fromEmailAddress: 'noreply@developer-pionero.mbc-dev.com',

  // wafArn: '',

  // ecs: {
  //   maxInstances: 1,
  //   minInstances: 1,
  //   cpu: 512,
  //   memory: 1024,
  //   cpuThreshold: 70,
  //   scaleStep: 1,
  //   autoRollback: false,
  // },
}

export default config
