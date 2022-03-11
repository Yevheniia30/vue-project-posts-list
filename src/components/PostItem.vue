<template>
  <div class="post">
    <div>
      <div><b>Title:</b>{{ post.title }}</div>
      <div>
        <b>Description:</b>
        {{ post.description }}
      </div>
    </div>
    <div>
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
}
/* .pBtn { */
/* color: #fff; */
/* background-color: #cecece; */
/* } */

/* .post:not(:last-child) { */
/* margin-bottom: 10px; */
/* } */
</style>
