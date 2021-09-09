const app = Vue.createApp({
    data() {
        return {
            aselected: false,
            bselected: false,
            cselected: false,
        }
    },
    computed: {
        aclasses() {
            return {active: this.aselected};
        },
        bclasses() {
            return {active: this.bselected};
        },
        cclasses() {
            return {active: this.cselected};
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