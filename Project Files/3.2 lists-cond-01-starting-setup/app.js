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
      this.entergoal = ''
    },
    removeGoal(index) {
      this.goals.splice(index, 1);
    }
  }
});

app.mount('#user-goals');
