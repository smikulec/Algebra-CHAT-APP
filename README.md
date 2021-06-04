# CHAT APPLICATION

This chat application is the final project for Algebra's Frontend developer course using Scaledrone realtime messaging service.

## Demo/preview

![chat-App-Preview.jpg](https://i.postimg.cc/T3B1V3vd/chat-App-Preview.jpg)

## Technologies

- HTML
- SaSS
- vanillaJS
- Node.js
- Webpack
- Netlify

## Features

- Random nickname generator
- Send and receive messages
- Display active members and notifications who joined or left the chat room
- Emoji button and extensive emoji library
- Autoexpanding input area with a scrollbar in case of a larger text input

## Setup

1. This application uses a secret key (Channel ID) to connect to Scaledrone that is provided by running netlify serverless functions. However, you can provide it manually in the main script, just follow the steps written there.
2. `npm install` - Install all the dependencies listed in package.json
3. `npm run build`- Compile .scss to .css files and build application using Webpack
4. `npm start`- Serve a development server that provides live reloading

### Other scripts

- `npm run compileSass` - Compile .scss to .css files while watching for changes
- `npm run build-js` - Build application using Webpack
- `npm run dev-js` - Build application using Webpack while watching the files and recompiling with every change

## License

[MIT](https://choosealicense.com/licenses/mit/)
