<template>
  <form class="form" @submit.prevent>
    <h2 class="title">Create post</h2>
    <post-input type="text" v-model="post.title" placeholder="Title" />
    <textarea
      v-model="post.description"
      name=""
      id=""
      cols="30"
      rows="10"
      placeholder="Description"
      class="input"
    ></textarea>
    <post-button @click="createPost">Add post</post-button>
  </form>
</template>

<script>
// import PostButton from "@/components/UI/PostButton.vue";
export default {
  //   components: {
  //     PostButton,
  //   },
  data() {
    return {
      post: {
        title: "",
        description: "",
        // fact: "",
      },
    };
  },
  methods: {
    createPost() {
      this.post.id = Date.now();
      this.$emit("create", this.post);
      this.post = {
        title: "",
        description: "",
      };
      // this.title = "";
      // this.description = "";
    },
  },
  // watch: {
  //   post: {
  //     handler(newVal) {
  //       console.log(newVal);
  //     },
  //     deep: true,
  //   },
  // },
};
</script>

<style scoped>
.form {
  /* width: 300px; */
  display: flex;
  flex-direction: column;
}
textarea {
  resize: none;
}
/* .input {
  margin-bottom: 10px;
  padding: 5px;
  border: 1px solid #cecece;
  border-radius: 6px;
} */
/* .btn {
  align-self: flex-end;
  border-radius: 6px;
  border: none;
  padding: 5px 15px;
  background-color: #acacac;
  text-transform: uppercase; /* color: #fff; */
/* }  */
</style>
