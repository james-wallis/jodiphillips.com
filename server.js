const path = require('path')
const express = require('express')
const next = require('next')
const compression = require('compression')


const port = parseInt(process.env.PORT, 10) || 3001
const dev = process.env.NODE_ENV !== 'production'
const app = next({ dir: '.', dev })
const handle = app.getRequestHandler()

app.prepare()
  .then(() => {
    const server = express()
    
    server.use(compression({level: 9}))
    server.get('/sitemap.xml', (req, res) => {
      app.serveStatic(req, res, path.resolve('./static/sitemap.xml'))
    })
    server.get('/robots.txt', (req, res) => {
      app.serveStatic(req, res, path.resolve('./static/robots.txt'))
    })
    server.get('/browserconfig.xml', (req, res) => {
      app.serveStatic(req, res, path.resolve('./static/browserconfig.xml'))
    })
    server.get('/favicon.ico', (req, res) => {
      app.serveStatic(req, res, path.resolve('./static/images/favicon.ico'))
    })
    server.get('/apple-touch-icon.png', (req, res) => {
      app.serveStatic(req, res, path.resolve('./static/images/apple-touch-icon.png'))
    })
    server.get('*', (req, res) => {
      return handle(req, res)
    })

    server.listen(port, (err) => {
      if (err) throw err
      console.log(`> Ready on http://localhost:${port}`)
    })
  })
