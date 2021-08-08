# Ouputting Raw HTML code with v-html

To output HTML structure we use the `v-html` #directive which tells vue that the content should be interpreted as HTML code and not just text.

| HTML                                   | Vue.js                                                                                            |
| -------------------------------------- | ------------------------------------------------------------------------------------------------- |
| `html <p v-html> {{ output() }} </p> ` | `js data() { return { code: '<h2>Big Text</h2>' } }, methods: { output() { return this.code } } ` |

Here, the `p` tag will display the text in a bigger font.
