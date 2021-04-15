import { createServer, Factory, Model, Response } from 'miragejs'
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
      server.createList('user', 200)
    },

    routes() {
      this.namespace = 'api'
      this.timing = 750
      this.get('/users', function(schema, request) {
        const { page = 1, per_page = 10} = request.queryParams

        const total = schema.all('user').length

        const pageStart = (Number(page) - 1) * Number(per_page)
        const pageEnd = pageStart + Number(per_page)

        const users = this.serialize(schema.all('user')).users.slice(pageStart, pageEnd)

        return new Response(
          200,
          { 'x-total-count': String(total)},
          { users }
        )
      })
      this.post('/users')
      this.namespace = '' // Reinicia namespace para não da conflito com /api do next.js
      this.passthrough() // Após executar tudo do mirage ele continua as rotas normais do app
    }
  })

  return server
}