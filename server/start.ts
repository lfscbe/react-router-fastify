import {fastify} from 'fastify'
import {reactRouterFastify} from '@mcansh/remix-fastify/react-router'
import getPort, {portNumbers} from 'get-port'
import type {LoggerOptions} from 'pino'

import {usersRouter} from './users.js'

const {NODE_ENV = 'development'} = process.env
const logLevel = process.env.LOG_LEVEL || 'info'
const loggerOptions: Record<'development' | 'production', LoggerOptions> = {
  development: {
    level: logLevel,
    transport: {
      target: 'pino-pretty',
      options: {
        translateTime: 'HH:MM:ss',
        ignore: 'pid,hostname',
      },
    },
  },
  production: {
    level: logLevel,
  },
}

const app = fastify({
  logger: loggerOptions[NODE_ENV],
})

await app.register(reactRouterFastify)
await app.register(usersRouter, {prefix: '/api'})

const desiredPort = Number(process.env.PORT) || 5173
const host = process.env.HOST || 'localhost'
const portToUse = await getPort({
  port: portNumbers(desiredPort, desiredPort + 100),
})
await app.listen({
  port: portToUse,
  host,
  listenTextResolver: (address) => {
    return `✅ server listening on ${address}`
  },
})

if (portToUse !== desiredPort) {
  app.log.info(
    `⚠️  Port ${desiredPort} is not available, using ${portToUse} instead.`,
  )
}
