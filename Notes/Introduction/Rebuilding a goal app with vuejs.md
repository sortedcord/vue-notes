# Rebuilding the Goal App with Vue.js
After importing vuejs as mentioned [here](Importing%20Vue%20via%20CDN.md) we can now proceed to rebuild the same app with vuejs.

With Vanilla Js we use an #imperative-approach, that is, we define every single step, which should be executed by the browser. 

In vue, we instead define the desired end result and the data we will need for our app and we leave the DOM manipulation upto vue also called a #declarative-approach

First we need to create a vue app by the following code and then write the code.

```js
Vue.createApp({});
```

`CreateApp` takes an #object  `{}`  where we configure the vue app such as setting up what kind of data will be used in our vue app. The data we require are:
* List of Goals
* What the user enters as the name of the goal.

This data is defined by adding a data #property which holds a function as a value.
```js
data: function() {}
```

In modern js, this can be shortened to:
```js
data() {}
```

This function return some #object wherein we can define the data our vueApp should be aware of.

```js
data() {
	return {
		goals: [],
		enteredValue: ''
	}
}
```

Here `goals` is an array which will hold all of the list items and `enteredValue` is string which will contain the name of the goal that the user enters. 

Now we can connect the 