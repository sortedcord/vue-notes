const app = Vue.createApp({
  data() {
    return {
      courseGoal: "Finish the course and lern vue!",
      courseLink: "https://google.com",
    };
  },
  methods: {
    outputGoal() {
      const randomNumber = Math.random();
      if (randomNumber < 0.5) {
        return "Learn Vue";
      } else {
        return "You are stupid";
      }
    },
  },
});
app.mount("#user-goal");
