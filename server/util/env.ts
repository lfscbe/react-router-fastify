const nodeEnv = process.env.NODE_ENV || 'development'
const host = process.env.HOST || 'localhost'
const port = process.env.port || '5173'
const logLevel = process.env.LOG_LEVEL || 'info'

export default {
  server: {
    host,
    isProduction: nodeEnv === 'production',
    logLevel,
    nodeEnv,
    port,
  },
}
