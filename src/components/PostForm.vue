<template>
  <form class="form" @submit.prevent>
    <h2 class="title">Create post</h2>
    <post-input v-focus type="text" v-model="post.title" placeholder="Title" />
    <textarea
      v-model="post.description"
      name=""
      id=""
      cols="30"
      rows="10"
      placeholder="Description"
      class="input"
    ></textarea>
    <!-- <upload-media> -->
    <form enctype="multipart/form-data">
      <label for="file" class="label"></label>
      <input type="file" ref="file" @change="selectFile" />
    </form>
    <!-- </upload-media> -->
    <!-- <upload-media
      server="/api/upload"
      error="@error('media'){{'error'}}@enderror"
    > -->
    <!-- </upload-media> -->
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
        img: "",
        // fact: "",
      },
      file: "",
    };
  },
  methods: {
    createPost() {
      // this.post.id = Date.now();
      this.$emit("create", this.post, this.file);
      this.post = {
        title: "",
        description: "",
        // img: "",
      };
      // this.title = "";
      // this.description = "";
    },
    selectFile() {
      this.file = this.$refs.file.files[0];
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
