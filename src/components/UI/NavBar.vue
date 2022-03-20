<template>
  <div class="navbar">
    <ul class="navlist">
      <li class="navlink">
        <router-link class="link" to="/">Home</router-link>
      </li>

      <li class="navlink">
        <router-link class="link" to="/about">About app</router-link>
      </li>
      <li class="navlink">
        <router-link class="link" to="/posts">Posts</router-link>
      </li>
      <li class="navlink">
        <router-link class="link" to="/store">Posts with Vuex</router-link>
      </li>
      <li class="navlink">
        <router-link class="link" to="/compositionapi"
          >Posts with Composition Api</router-link
        >
      </li>
    </ul>
    <div v-if="!isAuth">
      <post-button class="authBtn" @click="showModal">Log in</post-button>
      <post-button class="authBtn" @click="showModal">Sign up</post-button>
    </div>
    <div v-else>
      <post-button class="authBtn" @click="showModal">Exit</post-button>
    </div>
    <post-modal v-model:show="isModalShow">
      <auth-form @create="createPost" />
    </post-modal>
  </div>
</template>

<script>
import AuthForm from "@/components/AuthForm.vue";

export default {
  components: {
    AuthForm,
  },
  name: "nav-bar",
  data() {
    return {
      isModalShow: false,
    };
  },
  methods: {
    showModal() {
      this.isModalShow = true;
    },
  },
};
</script>

<style scoped>
.navbar {
  /* position: fixed; */
  height: 50px;
  background-color: #42b983;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 25px;
}
.navlist {
  display: flex;
  list-style-type: none;
  /* justify-content: flex-start; */
  /* align-items: center; */
}
.navlink {
  margin-right: 20px;
}
.link {
  text-decoration: none;
  color: #000;
}
.router-link-active {
  color: rgb(106, 23, 216);
}
.authBtn {
  background-color: transparent;
  border: none;
}
.authBtn:hover,
.authBtn:focus {
  color: rgb(106, 23, 216);
}
</style>
