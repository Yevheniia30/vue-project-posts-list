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
      <post-button class="authBtn" @click="showModal(1)">Log in</post-button>
      <post-button class="authBtn" @click="showModal(2)">Sign up</post-button>
    </div>
    <div v-else class="navlist">
      <BIconPersonCircle class="userIcon" />
      <p class="authBtn">{{ currentUser.email }}</p>
      <post-button class="authBtn" @click="showModal(3)">Exit</post-button>
    </div>
    <post-modal v-model:show="isModalShow">
      <auth-form @authHandler="authHandler" />
    </post-modal>
  </div>
</template>

<script>
import axios from "axios";
import AuthForm from "@/components/AuthForm.vue";

export default {
  components: {
    AuthForm,
  },
  name: "nav-bar",
  data() {
    return {
      currentUser: {},
      isModalShow: false,
      // errorText: "",
      isAuth: false,
      isLogin: false,
      isRegister: false,
    };
  },
  methods: {
    showModal(stage) {
      console.log("stage", stage);
      this.isModalShow = true;
      if (stage === 1) {
        this.isLogin = true;
        this.isRegister = false;
      }
      if (stage === 2) {
        this.isRegister = true;
        this.isLogin = false;
      }
    },
    async authHandler(user) {
      try {
        let response = {};
        if (this.isRegister) {
          response = await axios.post(
            "http://localhost:7000/api/user/register",
            user
          );
          console.log("reg response", response.data);
        }
        if (this.isLogin) {
          response = await axios.post(
            "http://localhost:7000/api/user/login",
            user
          );
          console.log("log response", response.data);
        }

        if (response.data.user) {
          this.currentUser = response.data.user;
          this.isAuth = true;
          console.log("currentUser", this.currentUser);
        }
      } catch (error) {
        console.log("auth error", error);
        // this.errorText = error.message;
        // console.log("errorText", this.errorText);
        // this.$emit("showError", error.message);
      } finally {
        this.isModalShow = false;
        this.isRegister = false;
        this.isLogin = false;
      }
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
  align-items: center;
}
.navlink {
  margin-right: 20px;
}
.userIcon {
  margin-right: 10px;
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
