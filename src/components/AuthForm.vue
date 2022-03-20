<template>
  <form class="form" @submit.prevent>
    <h2 class="title">Auth</h2>

    <post-input v-focus type="text" placeholder="Email" />
    <post-input v-focus type="password" placeholder="Password" />
    <post-input v-focus type="password" placeholder="Confirm password" />
    <post-button>Sign in</post-button>
  </form>
</template>

<script>
import PostButton from "./UI/PostButton.vue";
export default {
  components: { PostButton },
  //   name: "auth-form",
};
</script>

<style scoped>
.form {
  display: flex;
  flex-direction: column;
}
</style>
