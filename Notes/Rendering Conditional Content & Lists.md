# Rendering Conditional Content & Lists

In this module, we will learn

- how to render content conditionally i.e render some parts of the page only if certain conditions are met.
- How to render a list of content
- A first look behind the scenes (optimizations)

- [Rendering Conditional Content & Lists](#rendering-conditional-content--lists)
- [Conditional Rendering](#conditional-rendering)
    - [`v-show`](#v-show)
- [Rendering Lists of data](#rendering-lists-of-data)

# Conditional Rendering

Conditional rendering refers to showing content based on some certain condition.

For this, vue has a directive called `v-if`.

```html
<p v-if="goals.length === 0">Length is 0</p>
```

Other directives such as `v-else` and `v-else-if` also work in the same way.

### `v-show`

`v-show` is another alternative to `v-if` which has the same functionality as that of the if statement however, it doesn't work with the else and else-if directives.

The main difference is that with v-show the entire html element is not rendered at all. That means you wouldn't find it in the HTML document when viewing the webpage's source code. However, with v-show, a 'display:none' style property is added. So that means that it is in the HTML document and its rendered but its just not visible.

You should use only use `v-show` to an element whose visibility changes a lot.

# Rendering Lists of data

In order to render lists of data and outputting repeated content, you can use the `v-for` directive.

```html
<li @click="" v-for="goal in goals">{{goal}}</li>
```

`goal` can be named whatever you want and it will hold every value of goal in goals for every iteration (If that makes sense...).

You can also get the index of the item in the array. (Exclusively supported by vue)

```html
<li @click="" v-for="(goal, index) in goals">{{index}} . {{goal}}</li>
```
