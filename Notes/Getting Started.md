# Table of Contents

- [Table of Contents](#table-of-contents)
- [What is vue.js](#what-is-vuejs)
  - [Why use Vue.js](#why-use-vuejs)
    - [Why Vanilla.js might not be ideal for all kinds of apps](#why-vanillajs-might-not-be-ideal-for-all-kinds-of-apps)
- [Different Ways of Using Vue.js](#different-ways-of-using-vuejs)
- [Eploring Vue Alternatives](#eploring-vue-alternatives)
  - [React.js](#reactjs)
  - [Angular.js](#angularjs)
- [Building an app with JS](#building-an-app-with-js)
  - [Functionality](#functionality)
- [Importing Vue through CDN](#importing-vue-through-cdn)
- [Rebuilding the Goal App with Vue.js](#rebuilding-the-goal-app-with-vuejs)
- [Seting Up Course Developement Environment](#seting-up-course-developement-environment)
    - [IDE](#ide)


# What is vue.js

Vue.js is a #component-based #javascript #framework that makes building interactive and _reactive_ _web #frontend_  easier. 

`Javascript` is a programming language that is supported by all modern browsers. It allows you to manipulate what the user sees on the screen without fetching new page from the server.

`Framework` is a third party #library library which exposes utility and functionality such as methods and tools (Which you don't have to write on your own). Unlike a regular library a framework is a library which also gives you a set of rules, i.e a clear approach that you should follow while writing your application.

`Reactive` means that your app is able to react to user's input, update the screen. Such as to show overlays or input validation errors, etc.

`Web Frontends` means what the user sees. It's basically the how you app looks like. It is not a server side #framework. Helps in providing a rich user interface in the web.

## Why use Vue.js

Traditionally, in a web app, you click a link and wait for a new page to lead. You click a button and wait for some action to complete. And this happens again and again. Like submitting a form. Hence, in a traditional webpage, we wait for responses all the time.

#Javascript, can help us speed things up. It allows us to create a more modern webapp as it has the advantage of running on the loaded page. Which means that we can use this to change that page, without fetching new html. We can manipulate the HTML structure or #DOM (Document Object Model) of a page with #Javascript. So in modern webapps, we don't send requests again and again, instead, we do this once and thereafter we just exchange data behind the scenes and use client side javascript and its #frameworks (Like vue.js) to update what's on the screen.

### Why Vanilla.js might not be ideal for all kinds of apps

In an ideal world, no #framework frameowrk such as vue.js is needed but in such a case 

* we would have to write all of the code and logic on our own and reinvent the wheel all over again
* This makes our code vulnerable to unoptimization, errors and bugs. We may also face security and performance issues. 
* Collaboration might be harder as not everyone might understand our code structure and philosophy of our code.

This is why we use `Vue.js` as it gives us a clear rule set in which everyone has to work. With vue.js we don't have to focus on the small details, instead we can focus on our _core business logic_ with vue and let it do the work of updating the page, etc. 


# Different Ways of Using Vue.js

*   ## Widget approach on a multi-page application.
    
    Vue can be used to control parts of HTML pages and make it a bit more interactive.
    For example, have a chat overlay or a sidebar which loads elements dynamically.

    Some pages are still rendered and served by a backend server.

*   ## (SPA) Single-page Application approach

    Another approach of using vue.js would be to code the entire #frontend in vue.js so every element is rendered and controlled by vue.js.

    In this case, the server sends only one HTML file, thereafter, vue takes over and controls the UI.
    
# Eploring Vue Alternatives
While vuejs is a #component-based UI #framework, it does include all the core features. However, it is a bit less popular than React and Angular.

## React.js
![Pasted image 20210727133707.png](https://github.com/sortedcord/vue-notes/blob/master/Assets/Pasted%20image%2020210727133707.png)

#React is an alternative to vue. It's also a #javascript #framework, though officially, its a #library because it has less features than vue. It only focuses on redering UIs and misses some features like #routing.

However these features can be added via #community-packages. 

## Angular.js
![Pasted image 20210727134101.png](https://github.com/sortedcord/vue-notes/blob/master/Assets/Pasted%20image%2020210727134101.png)

#Angular is another alternative #framework. It has more features than vue and is popular with enterprise solutions. It uses #TypeScript (Vue can also be used with #TypeScript) which can be overkill for smaller projects.

# Building an app with JS

[Directory Tree of the App](../../Project%20Files/5.1%20gs-01-starting-project/)


```
Root folder
|
|-app.js
|-index.html
|-styles.css
```

`index.html` is the basic markup of the application.

`styles.css` is where the styling of our app is stored in.

`app.js` is where the Js code will go to fetch the user input when the button is clicked, create a new list item, and that to the list of items.

## Functionality

This is a basic application, that takes the input from the user and displays it as a "goal" in a list.

* First the user enters some data in the text field and clicks the button
* Js listens to the click event, takes the data entered in the text field and appends to the list.

Next we will try to [Rebuilding a goal app with vuejs](Rebuilding%20a%20goal%20app%20with%20vuejs.md) and see why Vue.js can be more convinient a better aproach than vanilla.js.

# Importing Vue through CDN
For basic usage, one can easily import vue to their webpage by adding the following line-

```html
<script src="https://unpkg.com/vue@next"></script>
```

Add the following script before importing your js script.

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

# Seting Up Course Developement Environment

This is a personal developer environment that I really like to use. In case you want your development environment to be the same as the of the instructor check this section instead.

### IDE

For IDE I use **Visual Studio Code**. Now, the reson why I don't opt for Code-OSS or similiar is because firstly, im lazy. Vscode comes with all of the plugins and settings sync right out of the box and I don't have to configure it to get all of the plugins that I use on a day-to-day basis. 

**Theme**: Synthwave '84'

**Plugins for vue**

* Git Lens - Version Control
* Vue 3 Snippets - Intellisense
* Syntax Highlighting for Vue
* Tabnine - Intellisense
* Live Server
* Prettier - code formatter

