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
- [Understanding Event Binding](#understanding-event-binding)
		- [Project Files](#project-files)
	- [Functionality](#functionality)
- [Events and Methods](#events-and-methods)
	- [Working with Event Arguments](#working-with-event-arguments)
- [Using Native Event Object](#using-native-event-object)
- [Exploring Event Modifiers](#exploring-event-modifiers)
		- [Other Event Modifiers](#other-event-modifiers)
- [Locking Content with `v-once`](#locking-content-with-v-once)
- [Two way binding](#two-way-binding)
- [Computed Properties](#computed-properties)
- [Working with watchers](#working-with-watchers)
- [Methods vs Computed Properties vs Watchers](#methods-vs-computed-properties-vs-watchers)

## Module Outline

- #Templates
- Outputting Dynamic Content
- Reacting User Input

# Creating and Connecting Vue App Instances

[Project Files for this Lecture](../../Project%20Files/2.1%20basics-01-starting-code/)

```
.
└── 2.1 Basics 01 Starting Code/
    ├── app.js
    ├── index.html
    └── styles.css
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
app.mount("#user-goal");
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

To output data, vue will scan the HTML code and detect a certain #Syntax which it supports. The syntax used for this is `{{ }}`.

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

Another option similiar to `data` for our vue app would be the `methods` option. It allows us to define functions which should execute when they are called or when a user event such as a button click occurs.

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

# Understanding Event Binding

### Project Files

[Here](../Project%20Files/2.../Project%20Files/2.10%20Understanding%20Event%20Binding/) you can find the project files for this module.

```
.
└── 2.10 Understand Event Binding/
    ├── app.js
    ├── index.html
    └── styles.css
```

We would now learn how to react to user input/ events, making pages dynamic. In project's [index.html](../Project%20Files/2.10%20Understanding%20Event%20Binding/index.html) file there is a section with a different ID as well as 2 buttons- add or remove. We also have a paragraph where a counter is outputted (managed in the vue app.)

## Functionality

When the `add` button is clicked, a value of 1 is added to the counter. When the `reduced` button is clicked, 1 is removed from the counter.

In order to do this we can use the `v-bind` directive which is helpful for setting up the value of an attribute, but we can also use the `v-on` directive for event listeners as we want to react to a certain event. In this case our event is a click.

```js
<button v-on:click="counter++"> Add </button>
```

Other events you can listen include but are not limited to:

- mouseenter
- mouseleave

# Events and Methods

It is a bad practice to put login in your HTML code. Logic should go into the js code. So we would require a function. So we would require a methods key.

```js
methods: {
	add() {
		this.counter++;
	}
}
```

This method can be directly called in the vue controlled app like so:

```html
<button v-on:click="add()">Add</button>
```

## Working with Event Arguments

Method arguments work in the same way as normal vanilla javascript event arguments.

```js
methods: {
	add(num) {
		this.counter = this.counter + num;
	}
}
```

```html
<button v-on:click="add(7)">Add</button>
```

# Using Native Event Object

Another directive that we should know about is `v-on:input=""`. And this only available on input elements. With this we can execute some vue code whenever there is some input (for ever keystroke).

> ### Note
>
> The order of methods does not matter similar to the order of methods.

<br>

Here is an example showcasing how the input directive works

![](../Assets/gif/voninput.gif)

# Exploring Event Modifiers

As the name suggests event modifiers basically modify the events. Let's take the example of a form.

```html
<form>
  <input type="text" />
  <button>Submit</button>
</form>
```

The problem here is that once the button is clicked, the entire page will reload which is a default set by the browser. The browser sends an HTTP request to the server and then reloads, however here we have no such server.

If you want to prevent this browser default, and handle it manually, there are two ways of doing that.

- ### Using `v-on:sumbit`

  We can do this with the submit event with the `v-on` directive which points to a method which can look something like-

  ```js
  methods: {
  	submitForm(event) {
  		event.preventDefault(); //Prevents relaoding the page (Vanilla JS)
  		alert('submitted')
  	},
  }
  ```

- ### Using `.prevent` modifiers

  There are certain built-in modifiers which can be connected to events to change the behaviour of that event. You can add modifiers with a `.` like so:

  ```html
  <form v-on:submit.prevent="submitForm"></form>
  ```

### Other Event Modifiers

`click.right/left` - Specify whether the user is right/left clicking

[Here](#using-native-event-object) we looked at how with `v-on:input` runs the mothod with ever keystroke, but if we need to run a method once, that is when we press enter then we should instead use the `v-on:keyup` event along with the `.key` modifier like so-

```html
<input v-on:keyup.enter="mymethod" />
```

You can also listen to `ctrl` or `shift`, etx. All keybaord keys are possible here.

# Locking Content with `v-once`

This is rarely needed but can be useful. If you have some data that changes and you want to preserver its initial state and not reflect any other changes, you can use the `v-once` directive.

```xml
<p v-once>{{ constant_variable }}</p>
```

# Two way binding

`v-model` directive takes the variable you want it to manage. That variable is then managed by vue such that its updated on the input event. And the variable's value is then sent back to that input. This is called two-way binding.

# Computed Properties

Using methods inside of vue tags is not ideal as whenever something updates, vue would have to re-run the code which is not good in terms of performance.

Computed properties are like methods, but vue will be aware of their dependencies and only re-execute them if one of the dependencies change.

Computed is the third configuration option of the vue app which also include `methods` and `data`. Position does not matter. Computed takes an object as a value and in that value you can define a couple of methods. Do note that what you are going to define in `computed` are actually going to be treated like properties and not exactly mothods.

```js
computed: {
  fullname() {
    if (this.name === "") {
      return "";
    }
    return this.name + " Surname";
  },
},
```
This is an example of a computed property. Vue will be aware of its dependencies and execute it whenever its dependency is updated.

```xml
<p> {{ fullname }} </p>
```

**NOTE**: Do note that I am using `fullname` instead of `fullname()` because like I have mentioned earlier we have to treat these computed properties as data properties. And this is why we should also name our computed properties similar to data properties.

# Working with watchers

Watchers are function which you can tell vue to execute when its dependencies change. It is similar to computed properties and you can use watchers instead of that.

Similar to computed properties, we define a bunch of methods inside an object which `watcher` takes in as a value. 

```js
watch: {
	name(newValue, oldValue) {
		this.fullname = oldvalue + ' ' + ' something';
	}
}
```
Watchers are best suited for scenarios like timers, or for sending HTTP requests.

# Methods vs Computed Properties vs Watchers

<table>
	<tr>
		<th>Methods
		<th>Computed
		<th>Watch
	</tr>
	<tr>
		<td>Use with event binding OR data binding
		<td>Use with only data binding.
		<td>Not used directly in template
	</tr>
	<tr>
		<td>Data Binding: Method is executed for every "re-render" cycle of the component.
		<td>Computed properties are only re-evaluated if one of their "used values" changed.
		<td>Allows you to run any code in reaction to some changed data (e.g. send Http request)
	</tr>
	<tr>
		<td>Use for events or data that really needs to be re-evaluated all the time.
		<td>Use for data that depends on other data
		<td>Use for any non-data update you want to make
	</tr>
</table>