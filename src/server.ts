import Fastify from 'fastify'

const app = Fastify({
  logger: true
})

app.get('/', async () => {
  return {
    status: 'ok',
    message: 'API rodando 100% dentro do Docker'
  }
})

const start = async () => {
  try {
    await app.listen({
      host: '0.0.0.0',
      port: 3000
    })
  } catch (error) {
    app.log.error(error)
    process.exit(1)
  }
}

start()