# Rebuilding the Goal App with Vue.js
After importing vuejs as mentioned [here](Importing%20Vue%20via%20CDN.md) we can now proceed to rebuild the same app with vuejs.

With Vanilla Js we use an #imperative-approach, that is, we define every single step, which should be executed by the browser. 

In vue, we instead define the desired end result and the data we will need for our app and we leave the DOM manipulation upto vue also called a #declarative-approach

First we need to create a vue app by the following code and then write the code.

```js
Vue.createApp({
	data() {
		return {
			goals: [],
			enteredValue: ''
		};
	},
	
	methods: {
		addGoal() {
			this.goals.push(this.enteredValue);
			this.enteredValue = ''; // Resets the state
		}
	}
}).mount('#app');
```

`CreateApp` takes an #object where we configure the vue app such as setting up what kind of data will be used in our vue app. The data we reu
