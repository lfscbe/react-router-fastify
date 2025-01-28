export async function usersRouter(fastify) {
  fastify.get('/users', async (request, reply) => {
    reply.send({users: ['Alice', 'Bob', 'Charlie']})
  })
}
