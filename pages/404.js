var html = require('choo/html')

module.exports = view

function view (state, emit) {
  return html`
    <body class="sans-serif">
      <h1 class="">
        404 - route not found
      </h1>
      <a href="/" class="">
        Back to main
      </a>
    </body>
  `
}
