In this module we are going to explore Vue's core concepts.

# Table of Contents

- [Table of Contents](#table-of-contents)
	- [Module Outline](#module-outline)
- [Creating and Connecting Vue App Instances](#creating-and-connecting-vue-app-instances)
	- [Objective](#objective)
			- [Creating a Vue App](#creating-a-vue-app)
			- [Establishing Connection](#establishing-connection)
- [Interpolation and Data Binding](#interpolation-and-data-binding)
- [Binding Attributes with the v-bind Directive](#binding-attributes-with-the-v-bind-directive)
- [Understanding Methods in Vue Apps](#understanding-methods-in-vue-apps)
- [Working with Data inside of a Vue App](#working-with-data-inside-of-a-vue-app)
- [Ouputting Raw HTML code with v-html](#ouputting-raw-html-code-with-v-html)

## Module Outline
* #Templates
* Outputting Dynamic Content
* Reacting User Input

# Creating and Connecting Vue App Instances

 [Project Files for this Lecture](../../Project%20Files/2.1%20basics-01-starting-code/)

 ```
Root folder
|
|-app.js
|-index.html
|-styles.css
```

 ## Objective

 The objective is to output the desired course goal inside of the paragraph tag using vue which could potentially be changed dynamically.

 #### Creating a Vue App

 First step would be to create a vue app. But now we can store it inside of a constant like so-

 ```js
const app = Vue.createApp();
 ```

#### Establishing Connection

And now we have to let vue know which part of the HTML section should be controlled by it. Since the section `user-goal` will be manipulated, we will use the `mount` #Methods on the `app` #object.

 `mount` method required a string which holds a _CSS Selector_ which uniquely identifies the element in our DOM.

```js
app.mount('#user-goal');
```

We can now use Vue features to manipulate this section by passing an #object to create app. This can be used to configure the various options of this app.

One option that we can set is the `data` option and it requires a function as a value. This data function returns an #object.

```js
data() {
	return {
	};
}
```

In this returned object we can now set up any key value pairs with any key of your choice. Anything that's part of the returned object can now be used in the vue controlled HTML part.

# Interpolation and Data Binding

To output data, vue will scan the HTML code and detect a certain #Syntax  which it supports. The syntax used for this is `{{ }}`.

Between those braces, you can reference your returned data object properties. This syntax is called #interpolation. It means that in this braces you can reference properties of the returned object.

If you use #interpolation outside the mounted portion, it will not work.

# Binding Attributes with the v-bind Directive

If you want to pass a dynamic value to an attribute, such as the `href` attribute, we need to use the #vue-bind syntax.

For that we use a vue #Directive which is a simple instruction we add in the HTML code. We can use such directives on HTML elements.

The directive here is `v-bind` which is a reserved name detected and understood by Vue. It tells vue to set the value of sometihng. We add a colon after `v-bind` and then the attribute's name. For anchor tag and href it will be-

```html
<a v-bind:href="{{ someLink }}">Some Text</a>
```
This directive is the attrubution alternative to #interpolation #Syntax.

# Understanding Methods in Vue Apps

Another option similiar to `data` for our vue app would be the `methods` option. It allows us to define functions  which should execute when they are called or when a user event such as a button click occurs.

We pass a javascript #object in methods instead of a function as seen in `data`. `methods` takes an object which would be full of functions. And these functions can be defined as regular javascript functions.

```js
methods: {
	function1 () {
	}
}
```

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

# Ouputting Raw HTML code with v-html

To output HTML structure we use the `v-html` #directive which tells vue that the content should be interpreted as HTML code and not just text.



