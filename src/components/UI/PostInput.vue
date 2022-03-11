<template>
  <input :value="modelValue" @input="updateInput" class="input" />
</template>

<script>
export default {
  name: "post-input",
  props: {
    modelValue: [String, Number],
  },
  methods: {
    updateInput(event) {
      this.$emit("update:modelValue", event.target.value);
    },
  },
};
</script>

<style scoped>
.input {
  margin-bottom: 10px;
  padding: 5px;
  border: 1px solid #cecece;
  border-radius: 6px;
}
</style>
