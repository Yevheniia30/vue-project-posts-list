import { createStore } from "vuex";
import postModule from "@/store/postModule";
// console.log(postModule);

export default createStore({
  modules: {
    post: postModule,
  },
});
