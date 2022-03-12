<template>
  <div v-if="posts.length">
    <h2>Posts List</h2>
    <transition-group name="list">
      <post-item
        :post="post"
        :key="post.id"
        v-for="post in posts"
        @remove="$emit('remove', post)"
      />
    </transition-group>
  </div>
  <h2 v-else>Posts list is empty, create the first one please</h2>
</template>

<script>
import PostItem from "@/components/PostItem.vue";
export default {
  components: {
    PostItem,
  },
  props: {
    posts: {
      type: Array,
      required: true,
    },
  },
};
</script>

<style scoped>
.list-item {
  display: inline-block;
  margin-right: 10px;
}
.list-enter-active,
.list-leave-active {
  transition: all 0.5s ease;
}
.list-enter-from {
  opacity: 0;
  transform: translateX(-30px);
}

.list-leave-to {
  opacity: 0;
  transform: translateX(30px);
}
.list-move {
  transition: transform 0.8s ease;
}

/* .post {
  padding: 10px;
  border: 1px solid #cecece;
  margin-top: 15px;
}
.post:not(:last-child) {
  /* margin-bottom: 10px; */
/* }  */
</style>
