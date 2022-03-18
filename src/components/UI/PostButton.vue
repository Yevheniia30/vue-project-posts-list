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
  border: 1px solid #cecece;
  border-radius: 50px;
  padding: 5px 15px;
  background-color: #fff;
  /* background-color: #cecece; */
  text-transform: uppercase; /* color: #fff; */
  cursor: pointer;
}
.btn:hover {
  background-color: #42b983;
}
</style>
