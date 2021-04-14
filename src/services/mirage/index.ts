import { createServer, Model } from 'miragejs'

type User = {
  email: string
  name: string
  created_at: string
}

export function makeServer() {
  const server = createServer({
    models: {
      user: Model.extend<Partial<User>>({})
    },

    routes() {
      this.namespace = 'api'
      this.timing = 750
      this.get('/users')
      this.post('/users')
      this.namespace = '' // Reinicia namespace para não da conflito com /api do next.js
      this.passthrough() // Após executar tudo do mirage ele continua as rotas normais do app
    }
  })

  return server
}