<template>
  <select :value="modelValue" @change="changeOptions" class="input">
    <option disabled value="">Sort by...</option>
    <option v-for="option in options" :key="option.value" :value="option.value">
      {{ option.name }}
    </option>
  </select>
</template>

<script>
export default {
  name: "post-select",
  props: {
    modelValue: {
      type: String,
    },
    options: {
      type: Array,
      default: () => [],
    },
  },
  methods: {
    changeOptions(event) {
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
