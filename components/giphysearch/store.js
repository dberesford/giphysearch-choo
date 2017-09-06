module.exports = store

const API_KEY = process.env.GIPHY_KEY    // Giphy API key - see https://developers.giphy.com/docs/
const giphyUrl = 'https://api.giphy.com/v1/gifs/random'

function store (state, emitter) {
  state.giphySearch = {}
  state.giphySearch.seachText = ''
  state.giphySearch.loading = false

  emitter.on('DOMContentLoaded', function () {
    emitter.on('giphy:search', search)
  })

  function search (text) {
    const encodedText = encodeURIComponent(text)
    const url = `${giphyUrl}?api_key=${API_KEY}&tag=${encodedText}`

    state.giphySearch.searchText = text
    state.giphySearch.loading = true
    emitter.emit('render')  // - this correct thing to do here? 

    window.fetch(url).then(function (response) {
      if (response.ok) return response
      state.giphySearch.error = 'Bad network request'
    }).then(function (response) {
      return response.json()
    }).then(function (json) {
      state.giphySearch.imageSrc = json.data.fixed_height_downsampled_url
    }).catch(function (error) {
      console.error(error)
      state.giphySearch.error = error.message
    }).then(function () {
      state.giphySearch.loading = false
      emitter.emit('render')
    })
  }
}
