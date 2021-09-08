const app = Vue.createApp({
    data() {
        return {
            aselected = false,
            bselected = false,
            cselected = false,
        }
    },
    methods: {
        boxSelected(box) {
            if (box === 'a') {
                this.aselected = true
                this.bselected = false
                this.cselected = false
            }
            else if (box === 'b') {
                this.aselected = false
                this.bselected = true
                this.cselected = false
            }
            else if (box === 'c') {
                this.aselected = false
                this.bselected = false
                this.cselected = true
            }
        }
    }
})

app.mount('#styling');