var choo = require('choo')
var giphyStore = require('./components/giphysearch').store

var app = choo()
if (process.env.NODE_ENV !== 'production') {
  app.use(require('choo-devtools')())
  app.use(require('choo-log')())
}

app.use(giphyStore)

app.route('/', require('./pages/main'))
app.route('/*', require('./pages/404'))

if (!module.parent) app.mount('body')
else module.exports = app
