<template>
  <div>
    <label>
      <input
        type="radio"
        :value="value"
        :name="name"
        @change="updateValue"
        v-bind="$attrs"
        class="radio"
      />
      {{ label }}
    </label>
  </div>
</template>

<script>
export default {
  inheritAttrs: false,
  props: {
    label: {
      type: String,
      required: true,
    },
    value: {
      type: [String, Number],
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
  },
  methods: {
    updateValue() {
      // Emit the value prop directly, so v-model receives a String or Number, not an Event
      this.$emit("input", this.value);
    },
  },
};
</script>
