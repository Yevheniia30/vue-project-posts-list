<template>
  <div>
    <!-- <h2>
      {{
        $store.state.isAuth ? "User is authorized" : "User isn't authorized!"
      }}
    </h2> -->

    <!-- <h2>{{ $store.state.likes }}</h2> -->
    <!-- <h2>{{ $store.getters.doubleLikes }}</h2> -->
    <!-- <post-button
      @click="
        $store.state.isAuth ? $store.commit('exit') : $store.commit('auth')
      "
      >{{ $store.state.isAuth ? "Exit" : "Sigh in" }}
    </post-button> -->

    <!-- <post-button @click="$store.commit('incrementLikes')">Like</post-button> -->

    <post-input
      v-focus
      :model-value="searchQuery"
      @update:model-value="setSearchQuery"
      placeholder="Search"
    />
    <div class="app_btns">
      <post-button @click="showModal">Create post</post-button>
      <post-select
        :model-value="selectedSort"
        @update:model-value="setSelectedSort"
        :options="sortOptions"
      />
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
// import axios from "axios";
// import { uuid } from "vue-uuid";
// import Pagination from "v-pagination-3";
import { mapState, mapGetters, mapMutations, mapActions } from "vuex";

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
      //   posts: [],
      isModalShow: false,
      //   modificatorValue: "",
      //   isLoading: false,
      //   loaderColor: "#acacac",
      //   selectedSort: "",
      //   sortOptions: [
      //     { value: "title", name: "By title" },
      //     { value: "description", name: "By description" },
      //   ],
      //   searchQuery: "",
      //   page: 1,
      //   limit: 10,
      //   totalPages: 0,
      //   total: 0,
    };
  },
  methods: {
    ...mapMutations({
      setPage: "post/setPage",
      setSearchQuery: "post/setSearchQuery",
      setSelectedSort: "post/setSelectedSort",
    }),
    ...mapActions({
      getPosts: "post/getPosts",
      loadMorePosts: "post/loadMorePosts",
    }),
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
    // async getPosts() {
    //   this.isLoading = true;
    //   try {
    //     const response = await axios.get("https://catfact.ninja/facts", {
    //       params: {
    //         page: this.page,
    //         limit: this.limit,
    //       },
    //     });
    //     // console.log(response);
    //     const newPosts = response.data.data.map((item) => {
    //       return {
    //         id: uuid.v1(),
    //         title: "Interesting fact about cats",
    //         description: item.fact,
    //       };
    //     });
    //     // console.log(newPosts);
    //     this.posts = newPosts;
    //     this.total = response.data.total;
    //     this.totalPages = response.data.last_page;
    //     // console.log(this.totalPages);
    //   } catch (err) {
    //     alert("Error!");
    //   } finally {
    //     this.isLoading = false;
    //   }
    // },

    // async loadMorePosts() {
    //   try {
    //     this.page += 1;
    //     const response = await axios.get("https://catfact.ninja/facts", {
    //       params: {
    //         page: this.page,
    //         limit: this.limit,
    //       },
    //     });
    //     console.log(response);
    //     const newPosts = response.data.data.map((item) => {
    //       return {
    //         id: uuid.v1(),
    //         title: "Interesting fact about cats",
    //         description: item.fact,
    //       };
    //     });
    //     console.log(newPosts);
    //     this.posts = [...this.posts, ...newPosts];
    //     this.total = response.data.total;
    //     this.totalPages = response.data.last_page;
    //     console.log(this.totalPages);
    //   } catch (err) {
    //     alert("Error!");
    //   } finally {
    //   }
    // },
  },
  mounted() {
    this.getPosts();
  },
  computed: {
    ...mapState({
      posts: (state) => state.post.posts,
      // isModalShow: false,
      //   modificatorValue: "",
      isLoading: (state) => state.post.isLoading,
      selectedSort: (state) => state.post.selectedSort,
      searchQuery: (state) => state.post.searchQuery,
      page: (state) => state.post.page,
      limit: (state) => state.post.limit,
      sortOptions: (state) => state.post.sortOptions,
      //   limit: 10,
      totalPages: (state) => state.post.totalPages,
      total: (state) => state.post.total,
    }),
    ...mapGetters({
      sortedPosts: "post/sortedPosts",
      sortedAndSearch: "post/sortedAndSearch",
    }),
    // sortedPosts() {
    //   return [...this.posts].sort((post1, post2) =>
    //     post1[this.selectedSort]?.localeCompare(post2[this.selectedSort])
    //   );
    // },
    // sortedAndSearch() {
    //   return this.sortedPosts.filter((post) =>
    //     post.title.toLowerCase().includes(this.searchQuery.toLowerCase())
    //   );
    // },
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
