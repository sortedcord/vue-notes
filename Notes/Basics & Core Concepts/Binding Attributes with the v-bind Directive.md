# Binding Attributes with the v-bind Directive

If you want to pass a dynamic value to an attribute, such as the `href` attribute, we need to use the #vue-bind syntax.

For that we use a vue #Directive which is a simple instruction we add in the HTML code. We can use such directives on HTML elements.

The directive here is `v-bind` which is a reserved name detected and understood by Vue. It tells vue to set the value of sometihng. We add a colon after `v-bind` and then the attribute's name. For anchor tag and href it will be-

```html
<a v-bind:href="{{ someLink }}">Some Text</a>
```
This directive is the attrubution alternative to #interpolation #Syntax. 