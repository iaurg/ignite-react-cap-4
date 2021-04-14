import { createServer, Factory, Model } from 'miragejs'
import faker from 'faker'

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

    factories: {
      user: Factory.extend({
        email() { return faker.internet.email().toLowerCase() },
        name() { return faker.name.firstName() },
        createdAt() { return faker.date.recent(10) },
      })
    },

    seeds(server) {
      server.createList('user', 10)
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