<template>
  <div class="app">
    <post-button @click="showModal">Create post</post-button>
    <post-modal v-model:show="isModalShow">
      <post-form @create="createPost" />
    </post-modal>
    <post-list :posts="posts" @remove="removePost" />
  </div>
</template>

<script>
import PostList from "@/components/PostList.vue";
import PostForm from "@/components/PostForm.vue";
export default {
  components: {
    PostForm,
    PostList,
  },
  data() {
    return {
      posts: [
        { id: 1, title: "Javascript", description: "lorem ipsum" },
        { id: 2, title: "React", description: "lorem ipsum" },
        { id: 3, title: "Vue", description: "lorem ipsum" },
      ],
      isModalShow: false,
      // title: "",
      // description: "",
    };
  },
  methods: {
    createPost(post) {
      this.posts.push(post);
      this.isModalShow = false;
    },
    removePost(post) {
      this.posts = this.posts.filter((p) => p.id !== post.id);
    },
    showModal() {
      this.isModalShow = true;
    },
  },
};
</script>

<style>
* {
  margin: 0;
  padding: 0;
}
.app {
  padding: 20px;
}
.title {
  margin-bottom: 10px;
}
</style>
