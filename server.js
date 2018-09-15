const { createServer } = require('http')
const path = require('path')
const express = require('express')
const next = require('next')
const compression = require('compression')

const port = parseInt(process.env.PORT, 10) || 3000
const dev = process.env.NODE_ENV !== 'production'
const app = next({ dir: '.', dev })
const handle = app.getRequestHandler()

app.prepare()
  .then(() => {
    const server = express()
    server.use(compression({level: 9}))
    server.get('/sw.js', (req, res) => {
      app.serveStatic(req, res, path.resolve('./static/sw.js'))
    })
    server.get('/sitemap.xml', (req, res) => {
      app.serveStatic(req, res, path.resolve('./static/sitemap.xml'))
    })
    server.get('/browserconfig.xml', (req, res) => {
      app.serveStatic(req, res, path.resolve('./static/browserconfig.xml'))
    })
    server.get('/favicon.ico', (req, res) => {
      app.serveStatic(req, res, path.resolve('./static/favicon.ico'))
    })
    server.get('/apple-touch-icon.png', (req, res) => {
      app.serveStatic(req, res, path.resolve('./static/apple-touch-icon.png'))
    })
    server.get('*', (req, res) => {
      return handle(req, res)
    })

    server.listen(port, (err) => {
      if (err) throw err
      console.log(`> Ready on http://localhost:${port}`)
    })
  })
