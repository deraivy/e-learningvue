<template>
  <div class="container mx-auto my-8 px-4 md:px-8 lg:px-16">
    <h1 class="text-center text-4xl font-bold mt-20">Oops!</h1>
    <h3 class="text-center py-2 text-2xl font-bold">
      The page you're looking for is not here
    </h3>
    <div class="flex justify-center">
      <router-link
        :to="{ name: 'CourseList' }"
        class="text-red-500 hover:text-white hover:bg-red-500 transition px-4 py-2 rounded border border-red-500"
      >
        Back to Home
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    resource: {
      type: String,
      required: true,
    },
  },
};
</script>

<style scoped>
/* Add styles here if needed */
</style>
