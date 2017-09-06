# GiphySearch-Choo

Sample Choo app that searches Giphy. 

To run, first get a  Giphy API key, see https://developers.giphy.com/docs/ and run with: `GIPHY_KEY=<your-key> npm start`

## Routes
Route              | File               | Description                     |
-------------------|--------------------|---------------------------------|
`/`                | `pages/main.js`    | The main view
`/*`               | `pages/404.js`     | Display unhandled routes

## Commands
Command                | Description                                      |
-----------------------|--------------------------------------------------|
`$ npm start`        | Start the development server
`$ npm test`         | Lint, validate deps & run tests
`$ npm run build`    | Compile all files into `dist/`
`$ npm run inspect`  | Inspect the bundle's dependencies
