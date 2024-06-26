import { serve } from '@hono/node-server'
import { Hono } from 'hono'
import bookRouter from './book/book.router'

const app = new Hono()

app.get('/', (c) => {
  return c.text('Hello Hono!')
})

app.route('/', bookRouter)


serve({
  fetch: app.fetch,
  port: Number(process.env.PORT)
})
console.log(`Server is running on port ${process.env.PORT} 📢`)
