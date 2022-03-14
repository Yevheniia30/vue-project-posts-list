import { createStore } from "vuex";
import postModule from "@/store/postModule";
// console.log(postModule);

export default createStore({
  state: {
    isAuth: false,
  },
  modules: {
    post: postModule,
  },
});
