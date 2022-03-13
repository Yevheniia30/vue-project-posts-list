<template>
  <div class="modal" v-if="show" @click="closeModal">
    <div @click.stop class="modal_content">
      <slot></slot>
    </div>
  </div>
</template>

<script>
import toggleMixin from "@/mixins/toggleMixin";
export default {
  name: "post-modal",
  mixins: [toggleMixin],
  // props: {
  //   show: {
  //     type: Boolean,
  //     default: false,
  //   },
  // },
  // methods: {
  //   closeModal() {
  //     this.$emit("update:show", false);
  //   },
  // },
};
</script>

<style scoped>
.modal {
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  background: rgba(0, 0, 0, 0.5);
  position: fixed;
  display: flex;
  justify-content: center;
  /* align-items: center; */
}
.modal_content {
  margin: auto;
  background: #fff;
  border-radius: 12px;
  min-height: 100px;
  min-width: 400px;
  padding: 15px;
}
</style>
