#! /usr/bin/env node
const path = require('path')
const glob = require('glob')
const fs = require('fs')

const SITE_ROOT = process.env.SITE_ROOT || 'https://artistjodi.com'
const SOURCE = process.env.SOURCE || path.join(__dirname, '..', 'pages', '/**/!(_*).js')
const DESTINATION = process.env.DESTINATION || path.join(__dirname, '..', 'static', 'sitemap.xml')

let diskPages = glob.sync(SOURCE)

let xml = ''
xml += '<?xml version="1.0" encoding="UTF-8"?>'
xml += '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">'

diskPages.forEach((page) => {
  let stats = fs.statSync(page)
  let modDate = new Date(stats.mtime)
  let lastMod = `${modDate.getFullYear()}-${('0' + (modDate.getMonth() + 1)).slice(-2)}-${('0' + modDate.getDate()).slice(-2)}`

  page = page.replace(path.join(__dirname, '..', 'pages'), '')
  page = page.replace(/.js$/, '')
  let url = `${SITE_ROOT}${page}`
  if (url.match(/.*\/index$/)) {
    url = url.replace(/(.*)index$/, '$1')
  }
  xml += '<url>'
  xml += `<loc>${url}</loc>`
  xml += `<lastmod>${lastMod}</lastmod>`
  xml += `<changefreq>weekly</changefreq>`
  if (page === '/index') {
    xml += `<priority>1.00</priority>`
  } else {
    xml += `<priority>0.80</priority>`
  }
  xml += '</url>'
})

xml += '</urlset>'

fs.writeFileSync(DESTINATION, xml)

console.log(`Wrote sitemap for ${diskPages.length} pages to ${DESTINATION}`)