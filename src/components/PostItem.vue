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
        <div
          style="display: flex; flex-direction: column; justify-content: center"
        >
          <img
            v-if="post.img"
            :src="'http://localhost:7000/' + post.img"
            alt="image"
            width="550"
            height="550"
            style="object-fit: cover; margin: 10px"
          />
          <p>
            {{ isPostOpen ? post.description : post.description.slice(0, 50) }}
            <span
              v-if="post.description.length > 50"
              @click="showMore"
              class="show"
              >{{ isPostOpen ? "hide description" : "show more... " }}
            </span>
          </p>
        </div>

        <!-- <div class="pBtn">
          <p class="pBtn" @click="showMore">
            {{ isPostOpen ? "Hide description" : "Show more..." }}
          </p>
        </div> -->

        <p class="date" style="font-size: 12px">
          {{ post.createdAt.slice(0, 10) + " " + post.createdAt.slice(12, 19) }}
        </p>
      </div>
    </div>
  </div>
</template>

<script>
// import PostButton from "@/components/UI/PostButton.vue";
export default {
  //   components: {
  //     PostButton,
  //   },
  data() {
    return {
      isPostOpen: false,
    };
  },
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
    showMore() {
      this.isPostOpen = !this.isPostOpen;
    },
  },
};
</script>

<style scoped>
.post {
  padding: 10px;
  border: 1px solid #cecece;
  border-radius: 8px;
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
  /* color: aqua; */
}
.edit:hover,
.edit:focus {
  fill: rgb(48, 47, 46);
}

.pBtn:not(:last-child) {
  margin-right: 5px;
}
.date {
  display: flex;
  justify-content: flex-end;
}

.show {
  color: #b8b7b7;
  cursor: pointer;
}
</style>
