<template>
  <div>
    <div class="label">{{ label }}</div>
    <input
      :value="value"
      @input="updateValue"
      v-on="listeners"
      v-bind="$attrs"
      class="field"
    />
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
    value: [String, Number], // Corrected type declaration
  },
  computed: {
    listeners() {
      return {
        ...this.$listeners,
        input: this.updateValue,
      };
    },
  },
  methods: {
    updateValue(event) {
      this.$emit("input", event.target.value);
    },
  },
};
</script>
