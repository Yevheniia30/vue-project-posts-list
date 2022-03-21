<template>
  <form class="form" @submit.prevent>
    <h2 class="title">Auth</h2>

    <post-input v-focus type="text" v-model="user.email" placeholder="Email" />
    <post-input
      v-focus
      type="password"
      v-model="user.password"
      placeholder="Password"
    />
    <!-- <post-input v-focus type="password" placeholder="Confirm password" /> -->
    <p v-if="errorText">{{ errorText }}</p>
    <post-button @click="authHandler">Sign up</post-button>
  </form>
</template>

<script>
// import PostButton from "./UI/PostButton.vue";
export default {
  // components: { PostButton },
  data() {
    return {
      user: {
        email: "",
        password: "",
      },
      // errorText: "",
    };
  },
  //   name: "auth-form",
  methods: {
    // showError(text) {
    //   console.log("text", text);
    //   if (text) {
    //     this.errorText = text;
    //   }
    //   console.log("this.errorText", this.errorText);
    // },

    authHandler() {
      this.$emit("authHandler", this.user);
      this.user = {
        email: "",
        password: "",
      };
      // this.showError();
    },
  },
};
</script>

<style scoped>
.form {
  display: flex;
  flex-direction: column;
}
</style>
