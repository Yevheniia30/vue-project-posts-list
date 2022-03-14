import axios from "axios";
import { uuid } from "vue-uuid";

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
        commit("setIsLoading", true);
        const response = await axios.get("https://catfact.ninja/facts", {
          params: {
            page: state.page,
            limit: state.limit,
          },
        });
        // console.log(response);
        const newPosts = response.data.data.map((item) => {
          return {
            id: uuid.v1(),
            title: "Interesting fact about cats",
            description: item.fact,
          };
        });
        // console.log(newPosts);
        commit("setPosts", newPosts);
        commit("setTotal", response.data.total);
        commit("setTotalPages", response.data.last_page);
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
        const response = await axios.get("https://catfact.ninja/facts", {
          params: {
            page: state.page,
            limit: state.limit,
          },
        });
        console.log(response);
        const newPosts = response.data.data.map((item) => {
          return {
            id: uuid.v1(),
            title: "Interesting fact about cats",
            description: item.fact,
          };
        });
        // console.log(newPosts);
        commit("setPosts", [...state.posts, ...newPosts]);

        commit("setTotal", response.data.total);
        commit("setTotalPages", response.data.last_page);
        // console.log(this.totalPages);
      } catch (err) {
        console.log(err);
      }
    },
  },
  namespaced: true,
};
