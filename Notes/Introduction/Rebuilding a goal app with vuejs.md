# Rebuilding the Goal App with Vue.js
After importing vuejs as mentioned in [Importing Vue via CDN](Importing%20Vue%20via%20CDN.md) we can now proceed to rebuild the same app with vuejs.

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

Now we can connect this data to the input in the HTML file by using a special #Directive called `v-model`. The value will be the same as that of the property: `enteredValue` like so:

```html
<input type="text" id="goal" v-model="enteredValue" />
```

For the button, we want to make sure that we get what is currently stored in `enteredValue` and add that to goals. To do this we will add another key value to the data object called the `methods` key which holds an #object. In this we can define methods and functions that should be callable from the HTML Code.

Inside the `methods` key we can add an `addGoal` method.
```js
methods: {
	addGoal() {
		this.goals.push(this.enteredValue);
	}
}
```
Here `this` refers to the object that we are returning. And the `push` method appends to the `goals` array.

Instead of adding a click listener like we did with vanilla js, with vue we can add another #directive `v-on:click=""` where click is the name of the event. As the value, we specify the name of the method which should be triggered on clicking the button.
```html
<button v-on:click="addGoal"> Add Goal </button>
```
