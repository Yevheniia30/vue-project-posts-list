import { createRouter, createWebHistory } from "vue-router";

import MainPage from "@/pages/MainPage";
import PostsPage from "@/pages/PostsPage";
import AboutPage from "@/pages/AboutPage";
import PostPage from "@/pages/PostPage";
import PostsPageWithStore from "@/pages/PostsPageWithStore";
import PostsPageCompositionApi from "@/pages/PostsPageCompositionApi";

const routes = [
  {
    path: "/",
    component: MainPage,
  },
  {
    path: "/posts",
    component: PostsPage,
  },
  {
    path: "/store",
    component: PostsPageWithStore,
  },
  {
    path: "/compositionapi",
    component: PostsPageCompositionApi,
  },
  {
    path: "/about",
    component: AboutPage,
  },
  {
    path: "/posts/:postId",
    component: PostPage,
  },
];

const router = createRouter({
  routes,
  history: createWebHistory(process.env.BASE_URL),
});

export default router;
