const app = Vue.createApp({
  data() {
    return {
      counter: 0,
      name: "",
      fullname: '',
      lastname: ''
    };
  },
  computed: {
  },
  watch: {
    name(value) {
      if (value === '') {
        this.fullname = ''
      }
      else {
        this.fullname = value + ' ' + this.lastname;
      }
    },
    lastname(value) {
      if (value === '') {
        this.fullname = ''
      }
      else {
        this.fullname = this.name + ' ' + value;
      }
    }
  },
  methods: {
    outputFullname() {
    },
    setName(event) {
      this.name = event.target.value;
    },
    add(num) {
      this.counter = this.counter + num;
    },
    reduce(num) {
      this.counter = this.counter - num;
      // this.counter--;
    },
    resetInput() {
      this.name = "";
    },
  },
});

app.mount("#events");
