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