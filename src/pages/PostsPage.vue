<template>
  <div>
    <post-input v-focus v-model="searchQuery" placeholder="Search" />
    <div class="app_btns">
      <post-button @click="showModal">Create post</post-button>
      <post-select v-model="selectedSort" :options="sortOptions" />
    </div>
    <post-modal v-model:show="isModalShow">
      <post-form @create="createPost" />
    </post-modal>
    <post-list
      :posts="sortedAndSearch"
      @remove="removePost"
      v-if="!isLoading"
    />
    <div v-else class="loader">
      <dot-loader :loading="loading" :color="color" :size="size"></dot-loader>
    </div>
    <div v-intersection="loadMorePosts" class="observer"></div>

    <!-- <pagination
      v-model="page"
      :records="total"
      :per-page="limit"
      :totalPages="totalPages"
      @paginate="getPosts"
      class="pagination"
    /> -->
  </div>
</template>

<script>
import axios from "axios";
// import { uuid } from "vue-uuid";
// import Pagination from "v-pagination-3";

import PostList from "@/components/PostList.vue";
import PostForm from "@/components/PostForm.vue";
import DotLoader from "vue-spinner/src/DotLoader.vue";

export default {
  components: {
    PostForm,
    PostList,
    DotLoader,
    // Pagination,
  },
  data() {
    return {
      posts: [],
      isModalShow: false,
      modificatorValue: "",
      isLoading: false,
      loaderColor: "#acacac",
      selectedSort: "",
      sortOptions: [
        { value: "title", name: "By title" },
        { value: "description", name: "By description" },
      ],
      searchQuery: "",
      page: 1,
      limit: 10,
      totalPages: 0,
      total: 0,
    };
  },
  methods: {
    async createPost(post) {
      console.log("post", post);
      let response = {};
      // this.isLoading = true;

      try {
        response = await axios.post(
          "http://localhost:7000/api/posts/create",
          post
        );
        console.log("resposne", response);
        this.posts.push(response.data);
      } catch (error) {
        console.log(error);
      } finally {
        this.isModalShow = false;
        // this.isLoading = false;
      }
      // this.posts.push({
      //   title: response.title,
      //   description: response.description,
      // });
    },
    async removePost(post) {
      // this.posts = this.posts.filter((p) => p.id !== post.id);

      try {
        await axios.delete(
          `http://localhost:7000/api/posts/${post.id}`
          // {
          //   params: {
          //     page: this.page,
          //     limit: this.limit,
          //   },
          // }
        );
        this.posts = this.posts.filter((p) => p.id !== post.id);
      } catch (error) {
        console.log(error);
      }
    },
    showModal() {
      this.isModalShow = true;
    },
    async getPosts() {
      // console.log("getPosts");
      this.isLoading = true;
      try {
        const response = await axios.get("http://localhost:7000/api/posts", {
          params: {
            page: this.page,
            limit: this.limit,
          },
        });
        // console.log(response);
        // const newPosts = response.data.data.map((item) => {
        //   return {
        //     id: uuid.v1(),
        //     title: "Interesting fact about cats",
        //     description: item.fact,
        //   };
        // });
        // console.log(newPosts);
        this.posts = response.data.rows;
        this.total = response.data.count;
        this.totalPages = Math.ceil(response.data.count / this.limit);
        // console.log(this.totalPages);
      } catch (err) {
        console.log(err);
      } finally {
        this.isLoading = false;
      }
    },

    async loadMorePosts() {
      // console.log("loadMorePosts");
      try {
        this.page += 1;
        const response = await axios.get("http://localhost:7000/api/posts", {
          params: {
            page: this.page,
            limit: this.limit,
          },
        });
        // console.log(response);
        // const newPosts = response.data.data.map((item) => {
        //   return {
        //     id: uuid.v1(),
        //     title: "Interesting fact about cats",
        //     description: item.fact,
        //   };
        // });
        // console.log(newPosts);
        this.posts = [...this.posts, ...response.data.rows];
        this.total = response.data.count;
        this.totalPages = Math.ceil(response.data.count / this.limit);
        // console.log(this.totalPages);
      } catch (err) {
        console.log(err);
      }
    },
  },
  mounted() {
    this.getPosts();
  },
  computed: {
    sortedPosts() {
      return [...this.posts].sort((post1, post2) =>
        post1[this.selectedSort]?.localeCompare(post2[this.selectedSort])
      );
    },
    sortedAndSearch() {
      return this.sortedPosts.filter((post) =>
        post.title.toLowerCase().includes(this.searchQuery.toLowerCase())
      );
    },
  },
  watch: {},
};
</script>

<style>
/* * {
  margin: 0;
  padding: 0;
}
.app {
  padding: 20px;
} */
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
.pagination {
  display: flex;
  justify-content: center;
  margin: 15px;
  list-style-type: none;
}
.pagination:not(:last-child) {
  margin-right: 10px;
}
.VuePagination__pagination-item {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 25px;
  height: 25px;
  margin-right: 10px;
  /* padding: 5px; */
  text-decoration: none;
  cursor: pointer;

  border-radius: 50%;
  background-color: #cecece;
}
.active {
  background-color: #42b983;
}

.page-link {
  border: none;
  background-color: transparent;
}
</style>
