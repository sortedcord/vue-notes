# Understanding Methods in Vue Apps

Another option similiar to `data` for our vue app would be the `methods` option. It allows us to define functions  which should execute when they are called or when a user event such as a button click occurs.

We pass a javascript #object in methods instead of a function as seen in `data`. `methods` takes an object which would be full of functions. And these functions can be defined as regular javascript functions.

```js
methods: {
	function1 () {
	}
}
```