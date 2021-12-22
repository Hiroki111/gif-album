# gif-album

Displaying Gif images/thumbnails that are provided Giphy.

## How to run this app

1. Obtain a Gihpy API key (https://developers.giphy.com/dashboard)
2. Make sure yarn is available on your machine
3. Run the following commands

```
git clone https://github.com/Hiroki111/gif-album.git

cd gif-album

yarn install
```
4. create `.env` at the root of the project and set your Giphy API key into `REACT_APP_GIPHY_APi_KEY=` (refer to `.env.example`)
5. use the following commands

### `yarn start`

Runs the app on the development mode

### `yarn test`

Runs unit tests

### `yarn build`

Builds the app for production to the `build` folder

### `npx serve -s build`

Runs the production-ready app on your local machine (Please run `yarn build` first)
