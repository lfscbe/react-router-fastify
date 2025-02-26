import pino from 'pino-http'
import type {Options} from 'pino-http'

import env from './env'

const loggerOptions: Record<'development' | 'production', Options> = {
  development: {
    level: env.server.logLevel,
    autoLogging: false,
    transport: {
      target: 'pino-pretty',
      options: {
        translateTime: 'HH:MM:ss',
        ignore: 'pid,hostname',
      },
    },
  },
  production: {
    level: env.server.logLevel,
  },
}

const opts = loggerOptions[env.server.nodeEnv]
const log = pino(opts).logger

export {log}
