# Rebuilding the Goal App with Vue.js
After importing vuejs as mentioned [here](Importing%20Vue%20via%20CDN.md) we can now proceed to rebuild the same app with vuejs.

With Vanilla Js we use an #imperative-approach, that is, we define every single step, which should be executed by the browser. 

In vue, we instead define the desired end result and the data we will need for our app and we leave the DOM manipulation upto vue.

First we need to create a vue app by the following code:

```js
vue.createApp({});
```