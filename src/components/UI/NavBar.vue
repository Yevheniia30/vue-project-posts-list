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
    </ul>
  </div>
</template>

<script>
export default {
  name: "nav-bar",
};
</script>

<style scoped>
.navbar {
  /* position: fixed; */
  height: 50px;
  background-color: #42b983;
  display: flex;
  align-items: center;
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
</style>
