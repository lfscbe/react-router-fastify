import type {Host} from '@shared/types/host'
import type {FastifyInstance} from 'fastify'
import os from 'os'

export const hostsRouter = async (fastify: FastifyInstance) => {
  fastify.get('/hosts', async (request, reply) => {
    // await new Promise(resolve => setTimeout(resolve, 2000))
    const hosts: Host[] = [{name: os.hostname()}]
    reply.status(200).send(hosts)
  })
}
