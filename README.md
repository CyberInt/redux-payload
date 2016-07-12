# redux-payload
Higher-order Redux reducer which returns payload for specific actions

## Usage

### Install via NPM

```
npm install redux-payload --save
```

### Import

```javascript
import payload from 'redux-payload'; 
// or
var payload = require('redux-payload');
```

#### If you need ES6 module
```javascript
import payload from 'redux-payload/es6';
```
Use this if you are using [rollup.js](http://rollupjs.org/) or
[webpack 2](http://webpack.github.io/docs/changelog.html#2-1-x-beta), or any
ES2015 modules-compatible bundler which can eliminate unused library code with
[tree-shaking](http://www.2ality.com/2015/12/webpack-tree-shaking.html).

It is recommended to import the library from `redux-payload/es6` instead of
`redux-payload/src` because the source code depends on experimental presets from
babel (stage 1-3) and may be incompatible with your bundler or settings.

### Other environments

Use the Universal Module Definition (UMD)

- [payload.js](dist/payload.js)
- [payload.min.js](dist/payload.min.js) (minified)

## API

```js
payload(
  actionType: String,
  mapResult: ?(resultBefore: any) => resultAfter
): (reducer) => reducer
```

Creates a higher-order reducer which returns the payload of the action
for the given action type. Before returning it maps the payload with `mapResult`
function, which is useful when you deal with immutable data structures in your store.
