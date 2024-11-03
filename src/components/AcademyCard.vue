<template>
  <router-link
    :to="{ name: 'course-details', params: { id: course.id } }"
    class="decoration-none outline-none"
  >
    <div
      class="bg-white shadow-lg w-full max-w-sm rounded-lg overflow-hidden mx-auto mt-8"
    >
      <div class="min-h-[256px]">
        <img
          :src="require(`@/assets/${course.image}`)"
          alt="Course Image"
          class="w-full"
        />
      </div>

      <div class="p-6">
        <h3 class="text-gray-800 text-xl font-bold">{{ course.title }}</h3>
        <p class="mt-4 text-sm text-gray-500 leading-relaxed">
          {{ course.subtitle }}
        </p>
        <button
          type="button"
          class="mt-6 px-5 py-2.5 rounded-lg text-white text-sm tracking-wider border-none outline-none bg-[#186ac3] hover:bg-blue-700 active:bg-blue-600"
        >
          View
        </button>
      </div>
    </div>
  </router-link>
</template>

<script>
export default {
  name: "AcademyCard",
  props: {
    course: {
      type: Object,
      required: true,
    },
  },
};
</script>
