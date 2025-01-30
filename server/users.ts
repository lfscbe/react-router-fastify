import {FastifyInstance} from 'fastify'

export async function usersRouter(fastify: FastifyInstance) {
  fastify.get('/users', async (request, reply) => {
    reply.send({users: ['Alice', 'Bob', 'Charlie']})
  })
}
