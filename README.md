# React with Redux using Dev tools 

# Three Principles

Redux can be described in three fundamental principles:

### Single source of truth

**The [state](../Glossary.md#state) of your whole application is stored in an object tree within a single [store](../Glossary.md#store).**

This makes it easy to create universal apps, as the state from your server can be serialized and hydrated into the client with no extra coding effort. A single state tree also makes it easier to debug or introspect an application; it also enables you to persist your app's state in development, for a faster development cycle. Some functionality which has been traditionally difficult to implement - Undo/Redo, for example - can suddenly become trivial to implement, if all of your state is stored in a single tree.

```js

export const HELLO_WORLD = 'HELLO_WORLD'

export const helloWorld = () => {
  console.log('helloWorld actions')
  return {
    type: HELLO_WORLD
  }
}


```

### State is read-only

**The only way to change the state is to emit an [action](../Glossary.md#action), an object describing what happened.**

This ensures that neither the views nor the network callbacks will ever write directly to the state. Instead, they express an intent to transform the state. Because all changes are centralized and happen one by one in a strict order, there are no subtle race conditions to watch out for. As actions are just plain objects, they can be logged, serialized, stored, and later replayed for debugging or testing purposes.

```js
import { combineReducers } from 'redux'
import { HELLO_WORLD } from './../actions'

const helloWorld = (state = { message: 'Hello' }, action) => {
  switch (action.type) {
    case HELLO_WORLD:
      console.log('reducer: helloWorld')
      return Object.assign({}, state, { message: 'Hello, World!' })
    default:
      return state
  }
}

const helloReducer = combineReducers({
  helloWorld : helloWorld
})

export default helloReducer
```

### Changes are made with pure functions

**To specify how the state tree is transformed by actions, you write pure [reducers](../Glossary.md#reducer).**

Reducers are just pure functions that take the previous state and an action, and return the next state. Remember to return new state objects, instead of mutating the previous state. You can start with a single reducer, and as your app grows, split it off into smaller reducers that manage specific parts of the state tree. Because reducers are just functions, you can control the order in which they are called, pass additional data, or even make reusable reducers for common tasks such as pagination.
Application setup
==============
- App require NPM Node installed 
- App is using Redux forms for formvalidations
- App is using Node as backend Express

```Javascript

or just add this package json
 "dependencies": {
    "babel-polyfill": "^6.7.4",
    "babel-runtime": "^6.6.1",
    "express": "^4.13.4",
    "isomorphic-fetch": "^2.2.1",
    "react": "^15.0.1",
    "react-dom": "^15.0.1",
    "react-redux": "^4.4.4",
    "redux": "^3.4.0",
    "redux-logger": "^2.6.1",
    "redux-promise": "^0.5.3",
    "redux-thunk": "^2.0.1"
  },
  "devDependencies": {
    "babel-core": "^6.7.6",
    "babel-loader": "^6.2.4",
    "babel-plugin-transform-runtime": "^6.7.5",
    "babel-preset-es2015": "^6.6.0",
    "babel-preset-react": "^6.5.0",
    "babel-preset-react-hmre": "^1.1.1",
    "babel-preset-stage-0": "^6.5.0",
    "babel-register": "^6.7.2",
    "webpack": "^1.12.15",
    "webpack-dev-middleware": "^1.6.1",
    "webpack-hot-middleware": "^2.10.0"
  }
// In webpack.config.js

var path = require('path')
var webpack = require('webpack')

module.exports = {
  devtool: 'cheap-module-eval-source-map',
  entry: [
    'webpack-hot-middleware/client',
    './index'
  ],
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'bundle.js',
    publicPath: '/static/'
  },
  plugins: [
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.HotModuleReplacementPlugin()
  ],
  module: {
    loaders: [{
      test: /\.js$/,
      loaders: ['babel'],
      exclude: /node_modules/,
      include: __dirname
    }]
  }
}


```


React JS 
====================
<a name="README">[<img src="https://avatars2.githubusercontent.com/reactjs-cn" width="50px" height="50px" />](https://github.com/tkssharma/redux-workshop.git)</a>

Contact
====================
[<img src="https://s3-us-west-2.amazonaws.com/martinsocial/MARTIN2.png" />](http://gennexttraining.herokuapp.com/)
[<img src="https://s3-us-west-2.amazonaws.com/martinsocial/github.png" />](https://github.com/tkssharma)
[<img src="https://s3-us-west-2.amazonaws.com/martinsocial/mail.png" />](mailto:tarun.softengg@gmail.com)
[<img src="https://s3-us-west-2.amazonaws.com/martinsocial/linkedin.png" />](https://www.linkedin.com/in/tkssharma)
[<img src="https://s3-us-west-2.amazonaws.com/martinsocial/twitter.png" />](https://twitter.com/tkssharma)