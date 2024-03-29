const next = require('next')
const express = require('express')
const enforce = require('express-sslify')

const port = parseInt(process.env.PORT, 10) || 7777
const dev = process.env.NODE_ENV !== 'production'
const app = next({ dev })
const handle = app.getRequestHandler()

app.prepare().then(() => {
  const server = express()

  if (!dev) {
    server.use(enforce.HTTPS({ trustProtoHeader: true })) // eslint-disable-line
  }

  server.get('*', (req, res) => {
    return handle(req, res)
  })

  server.post('*', (req, res) => {
    return handle(req, res)
  })

  server.listen(port, err => {
    if (err) throw err
    console.log(`> Ready on http://localhost:${port}`) //eslint-disable-line
  })
})
