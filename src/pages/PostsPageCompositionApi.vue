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
    <div v-intersection="loadMorePosts" class="observer"></div>
    <div v-if="isLoading" class="loader">
      <dot-loader :loading="loading" :color="color" :size="size"></dot-loader>
    </div>
  </div>
</template>

<script>
// import usePosts from "@/hooks/usePosts";
// import useSortedPosts from "@/hooks/useSortedPosts";
// import useSearchSortedPosts from "@/hooks/useSearchSortedPosts";
// import { ref } from "vue";
// import axios from "axios";
// import { uuid } from "vue-uuid";
// import Pagination from "v-pagination-3";

// import PostList from "@/components/PostList.vue";
// import PostForm from "@/components/PostForm.vue";
// import DotLoader from "vue-spinner/src/DotLoader.vue";

export default {
  components: {
    // PostForm,
    // PostList,
    // DotLoader,
    // Pagination,
  },
  data() {
    return {
      isModalShow: false,
      sortOptions: [
        { value: "title", name: "By title" },
        { value: "description", name: "By description" },
      ],
    };
  },

  setup(props) {
    console.log(props);
    // const { posts, totalPages, total, isLoading } = usePosts({
    //   page: 1,
    //   limit: 10,
    // });
    // const { selectedSort, sortedPosts } = useSortedPosts(posts);
    // const { searchQuery, sortedAndSearch } = useSearchSortedPosts(sortedPosts);
    // console.log(props);
    // return {
    //   posts,
    //   totalPages,
    //   total,
    //   isLoading,
    //   selectedSort,
    //   sortedPosts,
    //   searchQuery,
    //   sortedAndSearch,
    // };
  },
  //   methods: {
  //     createPost(post) {
  //       this.posts.push(post);
  //       this.isModalShow = false;
  //     },
  //     removePost(post) {
  //       this.posts = this.posts.filter((p) => p.id !== post.id);
  //     },
  //     showModal() {
  //       this.isModalShow = true;
  //     },
  //     async getPosts() {
  //       this.isLoading = true;
  //       try {
  //         const response = await axios.get("https://catfact.ninja/facts", {
  //           params: {
  //             page: this.page,
  //             limit: this.limit,
  //           },
  //         });
  //         // console.log(response);
  //         const newPosts = response.data.data.map((item) => {
  //           return {
  //             id: uuid.v1(),
  //             title: "Interesting fact about cats",
  //             description: item.fact,
  //           };
  //         });
  //         // console.log(newPosts);
  //         this.posts = newPosts;
  //         this.total = response.data.total;
  //         this.totalPages = response.data.last_page;
  //         // console.log(this.totalPages);
  //       } catch (err) {
  //         alert("Error!");
  //       } finally {
  //         this.isLoading = false;
  //       }
  //     },

  //     async loadMorePosts() {
  //       // this.isLoading = true;
  //       try {
  //         this.page += 1;
  //         const response = await axios.get("https://catfact.ninja/facts", {
  //           params: {
  //             page: this.page,
  //             limit: this.limit,
  //           },
  //         });
  //         console.log(response);
  //         const newPosts = response.data.data.map((item) => {
  //           return {
  //             id: uuid.v1(),
  //             title: "Interesting fact about cats",
  //             description: item.fact,
  //           };
  //         });
  //         console.log(newPosts);
  //         this.posts = [...this.posts, ...newPosts];
  //         this.total = response.data.total;
  //         this.totalPages = response.data.last_page;
  //         console.log(this.totalPages);
  //       } catch (err) {
  //         alert("Error!");
  //       } finally {
  //         // this.isLoading = false;
  //       }
  //     },
  //   },

  //   watch: {},
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
