import {reactRouterFastify} from '@mcansh/remix-fastify/react-router'
import {fastify} from 'fastify'
import getPort, {portNumbers} from 'get-port'
import {usersRouter} from './api/users'
import env from './util/env'
import {log} from './util/log'

const app = fastify({
  loggerInstance: log,
  disableRequestLogging: !env.server.isProduction,
})

app.register(reactRouterFastify)
app.register(usersRouter, {prefix: '/api'})

const startServer = async () => {
  const desiredPort = Number(env.server.port)
  const portToUse = await getPort({
    port: portNumbers(desiredPort, desiredPort + 100),
  })

  try {
    const address = await app.listen({port: portToUse, host: env.server.host})
    log.info(`🚀 Server started in ${env.server.nodeEnv} mode at ${address}`)
    log.info(`🤖 Log level: "${env.server.logLevel}"`)

    if (portToUse !== desiredPort) {
      log.warn(
        `! Port ${desiredPort} is not available, using ${portToUse} instead.`,
      )
    }
  } catch (error) {
    log.error(error instanceof Error ? error.message : 'Failed to start server')
    process.exit(1)
  }
}

await startServer()
