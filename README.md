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

## Features

- Random nickname generator
- Send and receive messages
- Display active members and notifications who joined or left the chat room
- Emoji button and extensive emoji library
- Autoexpanding input area with a scrollbar in case of a larger text input

## Setup

1. This application uses a secret key (Channel ID) to connect to Scaledrone, you should provide it manually by creating a .env file (like in .env.example file).
2. `npm install` - Install all the dependencies listed in package.json
3. `npm start:dev`- Serve a development server that provides live reloading, build application using webpack in development mode and compiles scss to css files while watching for changes
4. `npm build`- Build applicaton using Webpack in production mode and compiles scss to css 

## License

[MIT](https://choosealicense.com/licenses/mit/)
