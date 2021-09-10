const app = Vue.createApp({
  data() {
    return { 
      goals: [], 
      entergoal: ''
    };
  },
  methods: {
    addGoal() {
      this.goals.push(this.entergoal);
    }
  }
});

app.mount('#user-goals');
