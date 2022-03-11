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
      <post-button class="pBtn" @click="removePost">Remove post</post-button>
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

/* .post:not(:last-child) { */
/* margin-bottom: 10px; */
/* } */
</style>
