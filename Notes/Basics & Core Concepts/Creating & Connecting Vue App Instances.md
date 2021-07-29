# Creating and Connecting Vue App Instances

 [Project Files for this Lecture](../../Project%20Files/2.1%20basics-01-starting-code/)
 
 ```
Root folder
|
|-app.js
|-index.html
|-styles.css
```
 
 ### Objective
 
 The objective is to output the desired course goal inside of the paragraph tag using vue which could potentially be changed dynamically.
 
 First step would be to create a vue app. But now we can store it inside of a constant like so-
 
 ```js
 const app = Vue.createApp();
 ```
 
 And now we have to let vue know which part of the HTML section should be controlled by it.