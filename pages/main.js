const html = require('choo/html')
const Header = require('../components/header').view
const GiphySearchView = require('../components/giphysearch').view
const Footer = require('../components/footer').view

module.exports = page
function page (state, emit) {
  emit('log:debug', 'mainView')

  return html`
    <body>
    ${Header(state, emit)}
    ${GiphySearchView(state, emit)}
    ${Footer(state, emit)}
    </body>
  `
}

