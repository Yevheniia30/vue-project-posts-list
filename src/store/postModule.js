import axios from "axios";
// import { uuid } from "vue-uuid";

export default {
  state: () => ({
    posts: [],
    // isModalShow: false,
    modificatorValue: "",
    isLoading: false,
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
  }),
  getters: {
    sortedPosts(state) {
      return [...state.posts].sort((post1, post2) =>
        post1[state.selectedSort]?.localeCompare(post2[state.selectedSort])
      );
    },
    sortedAndSearch(state, getters) {
      return getters.sortedPosts.filter(
        (post) =>
          post.title.toLowerCase().includes(state.searchQuery.toLowerCase()) ||
          post.description
            .toLowerCase()
            .includes(state.searchQuery.toLowerCase())
      );
    },
  },
  mutations: {
    setPosts(state, posts) {
      state.posts = posts;
    },
    setIsLoading(state, bool) {
      state.isLoading = bool;
    },
    setSelectedSort(state, selectedSort) {
      state.selectedSort = selectedSort;
    },
    setSearchQuery(state, searchQuery) {
      state.searchQuery = searchQuery;
    },
    setPage(state, page) {
      state.page = page;
    },
    setTotalPages(state, totalPages) {
      state.totalPages = totalPages;
    },
    setTotal(state, total) {
      state.total = total;
    },
  },
  actions: {
    async getPosts({ state, commit }) {
      try {
        commit("setPage", 1);
        commit("setIsLoading", true);
        const response = await axios.get("http://localhost:7000/api/posts", {
          params: {
            page: state.page,
            limit: state.limit,
          },
        });
        // console.log(response);
        commit("setPosts", response.data.rows);
        commit("setTotal", response.data.count);
        commit("setTotalPages", response.data.count / state.limit);
        // console.log(this.totalPages);
      } catch (err) {
        console.log(err);
      } finally {
        commit("setIsLoading", false);
      }
    },

    async loadMorePosts({ state, commit }) {
      try {
        commit("setPage", state.page + 1);
        const response = await axios.get("http://localhost:7000/api/posts", {
          params: {
            page: state.page,
            limit: state.limit,
          },
        });
        // console.log(response);
        commit("setPosts", [...state.posts, ...response.data.rows]);

        commit("setTotal", response.data.count);
        commit("setTotalPages", response.data.count / state.limit);
        // console.log(this.totalPages);
      } catch (err) {
        console.log(err);
      }
    },
  },
  namespaced: true,
};
