<template>
  <div>
    <button
      v-on="$listeners"
      class="button"
      :class="buttonClass"
      :disabled="disabled"
    >
      <slot />
    </button>
  </div>
</template>

<script>
export default {
  props: {
    buttonClass: {
      type: String,
      default: "",
    },
    disabled: {
      type: Boolean,
      default: false,
    },
  },
};
</script>
