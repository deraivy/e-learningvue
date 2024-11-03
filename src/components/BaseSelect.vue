<template>
  <div>
    <div class="label">{{ label }}</div>
    <select
      @change="updateValue"
      v-bind="$attrs"
      v-on="$listeners"
      class="field"
    >
      <option disabled value="">Select an option</option>
      <option
        v-for="option in options"
        :value="option"
        :key="option.id"
        :selected="option === value"
      >
        {{ option }}
      </option>
    </select>
  </div>
</template>

<script>
export default {
  inheritAttrs: false,
  props: {
    label: {
      type: String,
      default: "",
    },
    options: {
      type: Array,
      required: true,
    },
    value: {
      value: [String, Number, Event],
      default: "",
    },
  },
  methods: {
    updateValue(event) {
      this.$emit("input", event.target.value);
    },
  },
};
</script>

<style scoped>
.field {
  width: 100%;
  padding: 8px;
  border-radius: 4px;
  border: 1px solid #ccc;
  font-size: 16px;
}
.field.error {
  border-color: red;
}
</style>
