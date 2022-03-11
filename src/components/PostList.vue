<template>
  <div v-if="posts.length">
    <h2>Posts List</h2>
    <post-item
      :post="post"
      :key="post.id"
      v-for="post in posts"
      @remove="$emit('remove', post)"
    />
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
/* .post {
  padding: 10px;
  border: 1px solid #cecece;
  margin-top: 15px;
}
.post:not(:last-child) {
  /* margin-bottom: 10px; */
/* }  */
</style>
