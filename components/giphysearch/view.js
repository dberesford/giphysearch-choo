var html = require('choo/html')
var Microframe = require('microframe')
var nextFrame = Microframe()

module.exports = view
function view (state, emit) {
  emit('log:debug', 'GiphySearch:View')

  return html`
    <div>
    ${SearchInput(state, emit)}
    ${Image(state, emit)}
    ${Url(state, emit)}
    </div>
  `
}

function SearchInput (state, emit) {
  return html`
    <div>Search Giphy:
      <input type="text" name="search" autofocus="autofocus" onkeydown=${search} value="${state.giphySearch.searchText || ''}"/>
    </div>
  `

  function search (e) {
    var value = e.target.value
    if (!value) return
    if (e.keyCode === 13) {
      nextFrame(function () {
        emit('giphy:search', value)
      })
    }
  }
}

function Image (state, emit) {
  if (state.giphySearch.loading === true) {
    return html`<div>Loading Image..</div>`
  }

  return html`
    <div>
      ${state.giphySearch.imageSrc ? html`<img src=${state.giphySearch.imageSrc} />`
      : state.giphySearch.error ? html`<span>${state.giphySearch.error}</span>` : html`<span></span>`
      }
    </div>
  `
}

function Url (state, emit) {
  if (state.giphySearch.imageSrc) {
    return html`<div><span>${state.giphySearch.imageSrc}</span>`
  }
}

