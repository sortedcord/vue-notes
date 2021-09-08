const app = Vue.createApp({
    data() {
        return {
            aselected: false,
            bselected: false,
            cselected: false,
        }
    },
    methods: {
        boxSelected(box) {
            if (box === 'a') {
                this.aselected = !this.aselected
                this.bselected = false
                this.cselected = false
            }
            else if (box === 'b') {
                this.aselected = false
                this.bselected = !this.bselected
                this.cselected = false
            }
            else if (box === 'c') {
                this.aselected = false
                this.bselected = false
                this.cselected = !this.cselected
            }
        }
    }
})

app.mount('#styling');