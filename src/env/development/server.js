const express = require('express')
const path = require('path')
const httpProxy = require('http-proxy');

const PORT = process.env.PORT || 5000

const proxy = httpProxy.createProxyServer({ changeOrigin: true });

function assetsHandler(req, res) {
  const target = `http://localhost:4040`;
  console.info('Proxy: %s', target + req.url);
  proxy.web(req, res, { target });
}

express()
  .all('/dist/*', assetsHandler)
  .use(express.static('public'))
  .set('views', 'src/app/views')
  .set('view engine', 'ejs')
  .get('/', (req, res) => res.render('home/index'))
  .listen(PORT, () => console.log(`Listening on ${ PORT }`))
