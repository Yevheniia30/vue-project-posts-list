<template>
  <div class="post">
    <div>
      <div class="post_info">
        <div style="display: flex; justify-content: space-between">
          <div>
            <b>Title:</b>
            {{ post.title }}
          </div>
          <div style="display: flex">
            <BIconPencilFill @click="removePost" class="pBtn edit" />
            <BIconArchiveFill @click="removePost" class="pBtn" />
          </div>
        </div>
        <div>
          <b>Description:</b>
          {{ post.description }}
        </div>
      </div>
    </div>
    <div class="pBtn">
      <post-button class="pBtn" @click="$router.push(`/posts/${post.id}`)"
        >Show more...</post-button
      >
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
  flex-direction: column;
  /* align-items: center; */
  /* justify-content: space-between; */
  /* width: 80%; */
}
/* .post_info {
  width: 90%;
} */
.pBtn {
  display: flex;
  justify-content: flex-end;
  align-items: center;
  cursor: pointer;
  fill: #a8a7a7;
}
.pBtn:hover,
.pBtn:focus {
  fill: rgb(190, 10, 10);
}
.edit:hover,
.edit:focus {
  fill: rgb(253, 217, 12);
}

.pBtn:not(:last-child) {
  margin-right: 5px;
}
</style>
