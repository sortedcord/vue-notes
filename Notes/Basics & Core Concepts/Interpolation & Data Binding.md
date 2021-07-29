# Interpolation and Data Binding

To output data, vue will scan the HTML code and detect a certain #Syntax  which it supports. The syntax used for this is `{{ }}`. 

Between those braces, you can reference your returned data object properties. This syntax is called #interpolation. It means that in this braces you can reference properties of the returned object.

If you use #interpolation outside the mounted portion, it will not work.

