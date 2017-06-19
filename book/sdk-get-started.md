# Getting JavaScript SDK into your front-end pipeline

JavaScript SDK in version 2.x is distributed as a standalone, minified bundle.
It contains all the css and assets in the 60KB bundle.

When you add the egnyte.min.js to a page as a
```html
<script src="egnyte.min.js"></script>
```
 it'll be available in a global namespace as "Egnyte" or `window.Egnyte`

If you wish to `require` or `import` the SDK for front-end, you can't just require the `engyte-js-sdk` unless you're using browserify and are ready to set up all necessary transforms.

Instead, you should:
```js
require('egnyte-js-sdk/dist/egnyte.min')
```

See also: [Browser examples](https://github.com/egnyte/for-integrators/tree/master/examples/javascript/browser). One of the examples shows a webpack setup.

Webpack will warn that you're bundling a minified file, but that's really a problem only if you didn't mean to (might mean you included something from your build results creating a recursive build...)


Version 3 of egnyte-js-sdk package will introduce more means of including certain components of the SDK in webpack and alike.
