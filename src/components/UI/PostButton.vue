<template>
  <button class="btn"><slot></slot></button>
</template>

<script>
export default {
  name: "post-button",
};
</script>

<style scoped>
.btn {
  align-self: flex-end;
  border-radius: 6px;
  border: none;
  padding: 5px 15px;
  background-color: #cecece;
  text-transform: uppercase; /* color: #fff; */
  cursor: pointer;
}
</style>
