# Working with Data inside of a Vue App

In this lecture we are goin to learn about how to access the data stored inside of the `data` key from the `methods` key. In order to do this we have to use a special #Syntax like so-

```js
const app = Vue.createApp({
data() {
	return {
		x_variable: 'Some data stored here'
	}
	
};
},
methods: {
	getData() {
		hello = this.x_variable
	}
})
```

Here, if we try to use `x_variable`, it would not work as it is not defined in that #namespace. If we want to use it, we would have to get it by using `this` which would refer to the variable defined in the `data` key. All of this is managed by Vue.