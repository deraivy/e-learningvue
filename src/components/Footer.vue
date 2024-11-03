<!-- src/components/Footer.vue -->
<template>
  <footer class="pt-8 bg-gray-100 border-t-2 border-gray-300 mt-32">
    <div class="container mx-auto px-4 md:px-6 lg:px-16">
      <div
        class="grid gap-10 row-gap-8 mb-8 sm:grid-cols-2 lg:grid-cols-4 py-16"
      >
        <div class="sm:col-span-2">
          <a href="#" class="inline-flex items-center">
            <span class="text-2xl font-bold tracking-wide text-gray-800"
              >Speed Academy</span
            >
          </a>
          <div class="mt-6 lg:max-w-xl">
            <p class="text-sm text-gray-700">
              Speed Academy is an innovative online educational platform
              designed to provide learners with high-quality courses in various
              fields, primarily focused on technology and digital skills. The
              academy aims to empower individuals by equipping them with the
              essential knowledge and practical skills needed to excel in
              today's competitive job market.
            </p>
          </div>
        </div>

        <div class="flex flex-col gap-4 text-sm">
          <p class="text-base font-bold tracking-wide text-gray-900">
            Popular Courses
          </p>
          <a
            href="#"
            class="text-gray-600 hover:text-pink-500 transition-colors duration-300"
            >Frontend Development</a
          >
          <a
            href="#"
            class="text-gray-600 hover:text-pink-500 transition-colors duration-300"
            >Data Analysis</a
          >
          <a
            href="#"
            class="text-gray-600 hover:text-pink-500 transition-colors duration-300"
            >Artificial Intelligence</a
          >
        </div>

        <div>
          <p class="text-base font-bold tracking-wide text-gray-900">
            Find Us On
          </p>
          <div class="flex items-center gap-2 mt-2">
            <a href="#" class="w-1/2">
              <img
                src="https://mcqmate.com/public/images/icons/playstore.svg"
                alt="Playstore Button"
                class="h-10"
              />
            </a>
            <a
              href="https://www.youtube.com/channel/UCo8tEi6SrGFP8XG9O0ljFgA"
              class="w-1/2"
            >
              <img
                src="https://mcqmate.com/public/images/icons/youtube.svg"
                alt="Youtube Button"
                class="h-10"
              />
            </a>
          </div>
          <p class="text-base font-bold tracking-wide text-gray-900 mt-4">
            Contact Us
          </p>
          <div class="flex mt-2">
            <p class="mr-1 text-gray-800">Email:</p>
            <a
              href="mailto:speedacademy@gmail.com"
              class="text-gray-600 hover:text-pink-500 transition-colors duration-300"
              >speedacademy@gmail.com</a
            >
          </div>
        </div>
      </div>

      <div
        class="flex flex-col-reverse justify-between pt-5 pb-10 border-t border-gray-300 lg:flex-row"
      >
        <p class="text-sm text-gray-600">
          © Copyright Speed Academy. All rights reserved.
        </p>
        <ul
          class="flex flex-col mb-3 space-y-2 lg:mb-0 sm:space-y-0 sm:space-x-5 sm:flex-row"
        >
          <li>
            <a
              href="#"
              class="text-sm text-gray-600 transition-colors duration-300 hover:text-pink-500"
              >Privacy &amp; Cookies Policy</a
            >
          </li>
          <li>
            <a
              href="#"
              class="text-sm text-gray-600 transition-colors duration-300 hover:text-pink-500"
              >Disclaimer</a
            >
          </li>
        </ul>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: "SiteFooter",
};
</script>
