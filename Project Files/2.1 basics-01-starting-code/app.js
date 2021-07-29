const app = Vue.createApp({
  data() {
    return {
        courseGoal: 'Finish the course and lern vue!',
        courseLink : 'https://google.com'
    };
  },
});

app.mount("#user-goal");
