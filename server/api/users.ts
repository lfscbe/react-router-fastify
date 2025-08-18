import type {User} from '@shared/types/user'
import type {FastifyInstance} from 'fastify'

export const usersRouter = async (fastify: FastifyInstance) => {
  fastify.get('/users', async (request, reply) => {
    // await new Promise(resolve => setTimeout(resolve, 2000))
    const users: User[] = [
      {name: 'Alice', role: 'user'},
      {name: 'Bob', role: 'user'},
      {name: 'Charlie', role: 'admin'},
    ]
    reply.status(200).send(users)
  })
}
