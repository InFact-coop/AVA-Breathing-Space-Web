const next = require('next')
const express = require('express')
const enforce = require('express-sslify')

const port = parseInt(process.env.PORT, 10) || 3000
const dev = process.env.NODE_ENV !== 'production'
const app = next({ dev })
const handle = app.getRequestHandler()

app.prepare().then(() => {
  const server = express()

  console.log('not outside dev if statement') // eslint-disable-line

  if (!dev) {
    console.log('not dev') // eslint-disable-line
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
