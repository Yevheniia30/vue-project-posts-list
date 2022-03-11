<template>
  <div class="app">
    <div class="app_btns">
      <post-button @click="showModal">Create post</post-button>
      <post-select v-model="selectedSort" :options="sortOptions" />
    </div>
    <post-modal v-model:show="isModalShow">
      <post-form @create="createPost" />
    </post-modal>
    <post-list :posts="posts" @remove="removePost" v-if="!isLoading" />
    <div v-if="isLoading" class="loader">
      <dot-loader
        :loading="loading"
        :color="loaderColor"
        :size="size"
      ></dot-loader>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import { uuid } from "vue-uuid";

import PostList from "@/components/PostList.vue";
import PostForm from "@/components/PostForm.vue";
import DotLoader from "vue-spinner/src/DotLoader.vue";

export default {
  components: {
    PostForm,
    PostList,
    DotLoader,
  },
  data() {
    return {
      posts: [
        // { id: 1, title: "Javascript", description: "lorem ipsum" },
        // { id: 2, title: "React", description: "lorem ipsum" },
        // { id: 3, title: "Vue", description: "lorem ipsum" },
      ],
      isModalShow: false,
      modificatorValue: "",
      isLoading: false,
      loaderColor: "#acacac",
      selectedSort: "",
      sortOptions: [
        { value: "title", name: "By title" },
        { value: "description", name: "By description" },
      ],
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
    async getPosts() {
      this.isLoading = true;
      try {
        const response = await axios.get(
          "https://catfact.ninja/facts?limit=10"
        );
        console.log(response);
        const newPosts = response.data.data.map((item) => {
          return {
            id: uuid.v1(),
            title: "Interesting fact about cats",
            description: item.fact,
          };
        });
        console.log(newPosts);
        this.posts = newPosts;
      } catch (err) {
        alert("Error!");
      } finally {
        this.isLoading = false;
      }
    },
  },
  mounted() {
    this.getPosts();
  },
  watch: {
    selectedSort(newValue) {
      this.posts.sort((post1, post2) => {
        return post1[newValue]?.localeCompare(post2[newValue]);
      });
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
  /* display: flex;
  flex-direction: column;
  justify-content: center; */
}
.app_btns {
  display: flex;
  justify-content: space-between;
  margin: 15px 0;
}
.loader {
  display: flex;
  justify-content: center;
}
.title {
  margin-bottom: 10px;
}
</style>
