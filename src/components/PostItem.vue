<template>
  <div class="post">
    <div class="post_info">
      <div><b>Title:</b>{{ post.title }}</div>
      <div>
        <b>Description:</b>
        {{ post.description }}
      </div>
    </div>
    <div class="pBtn">
      <post-button class="pBtn" @click="$router.push(`/posts/${post.id}`)"
        >Open</post-button
      >

      <post-button class="pBtn" @click="removePost">Remove</post-button>
    </div>
  </div>
</template>

<script>
// import PostButton from "@/components/UI/PostButton.vue";
export default {
  //   components: {
  //     PostButton,
  //   },
  props: {
    post: {
      type: Object,
      required: true,
    },
  },
  methods: {
    removePost() {
      this.$emit("remove", this.post);
    },
  },
};
</script>

<style scoped>
.post {
  padding: 10px;
  border: 1px solid #cecece;
  margin-top: 15px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  /* width: 80%; */
}
.post_info {
  width: 80%;
}
.pBtn {
  display: flex;
  align-items: center;
}

.pBtn:not(:last-child) {
  margin-right: 5px;
}
</style>
