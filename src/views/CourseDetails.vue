<template>
  <div>
    <div
      :style="{ backgroundImage: 'url(' + bannerImage + ')' }"
      class="bg-cover bg-center h-96 flex items-center justify-center relative text-center text-white"
    >
      <!-- Overlay for darker background if needed -->
      <div class="absolute inset-0 bg-black opacity-50"></div>

      <!-- Text content overlay -->
      <div class="relative z-10">
        <h1 class="text-3xl font-bold mb-2">{{ course.title }}</h1>
      </div>
    </div>
    <div class="container mx-auto my-8 px-4 md:px-6 lg:px-16">
      <!-- Navigation Links -->
      <div class="mt-10 bg-white py-2">
        <nav class="flex flex-wrap gap-4">
          <a
            href="#"
            @click.prevent="showOverview"
            class="inline-flex whitespace-nowrap border-b-2 border-transparent py-2 px-3 text-lg font-bold text-gray-600 hover:border-b-blue-600 hover:text-blue-600"
          >
            Overview
          </a>
          <a
            href="#"
            @click.prevent="showReview"
            class="inline-flex whitespace-nowrap border-b-2 border-transparent py-2 px-3 text-lg font-bold text-gray-600 hover:border-b-blue-600 hover:text-blue-600"
          >
            Review
          </a>
        </nav>
      </div>

      <section v-if="overviewExpanded" id="overview">
        <h2 class="text-2xl font-bold my-2">Course Description</h2>
        <p class="text-base">{{ course.description }}</p>

        <h2 class="text-2xl font-bold mt-12 py-2">Who is this course for</h2>
        <ul class="text-base">
          <li
            v-for="(audience, index) in course.targetAudience"
            :key="index"
            class="mb-4"
          >
            <strong>{{ audience.group }}:</strong> {{ audience.description }}
          </li>
        </ul>
      </section>

      <!-- Review Section -->
      <section v-if="reviewExpanded" id="review">
        <div
          class="p-4 px-32 mx-auto bg-white rounded-lg shadow-md max-w-2xl sm:p-5 grid grid-cols-1 lg:grid-cols-6 gap-4"
        >
          <div class="lg:col-span-2 col-span-1 mt-16">
            <form action="" method="POST" class="space-y-4">
              <!-- Center and enlarge the "5" rating text -->
              <h2 class="text-8xl font-extrabold text-gray-700 mb-3">5</h2>
              <div class="space-x-1 mb-4">
                <input
                  type="radio"
                  id="5-stars"
                  name="rating"
                  value="5"
                  class="hidden"
                />
                <label
                  for="5-stars"
                  class="text-yellow-500 text-3xl cursor-pointer hover:scale-110"
                  >★</label
                >

                <input
                  type="radio"
                  id="4-stars"
                  name="rating"
                  value="4"
                  class="hidden"
                />
                <label
                  for="4-stars"
                  class="text-yellow-500 text-3xl cursor-pointer hover:scale-110"
                  >★</label
                >

                <input
                  type="radio"
                  id="3-stars"
                  name="rating"
                  value="3"
                  class="hidden"
                />
                <label
                  for="3-stars"
                  class="text-yellow-500 text-3xl cursor-pointer hover:scale-110"
                  >★</label
                >

                <input
                  type="radio"
                  id="2-stars"
                  name="rating"
                  value="2"
                  class="hidden"
                />
                <label
                  for="2-stars"
                  class="text-yellow-500 text-3xl cursor-pointer hover:scale-110"
                  >★</label
                >

                <input
                  type="radio"
                  id="1-star"
                  name="rating"
                  value="1"
                  class="hidden"
                />
                <label
                  for="1-star"
                  class="text-yellow-500 text-3xl cursor-pointer hover:scale-110"
                  >★</label
                >
              </div>
            </form>
          </div>

          <div class="lg:col-span-4 hidden lg:flex flex-col space-y-3">
            <div class="flex items-center">
              <span class="text-yellow-500 text-2xl">★★★★★</span>
              <p class="ml-2 text-lg font-medium text-gray-900">0 out of 0</p>
            </div>
            <p class="text-md font-medium text-gray-500">0 global ratings</p>

            <div class="flex items-center mt-2">
              <span
                class="text-md font-medium text-blue-600 hover:underline shrink-0"
                >5 star</span
              >
              <div class="w-3/4 h-4 mx-2 bg-gray-200 rounded">
                <div class="h-4 bg-yellow-400 rounded" style="width: 50%"></div>
              </div>
              <span class="text-md font-medium text-gray-500">0%</span>
            </div>

            <!-- Additional rating bars with increased text size -->
            <div class="flex items-center">
              <span
                class="text-md font-medium text-blue-600 hover:underline shrink-0"
                >4 star</span
              >
              <div class="w-3/4 h-4 mx-2 bg-gray-200 rounded">
                <div class="h-4 bg-yellow-400 rounded" style="width: 25%"></div>
              </div>
              <span class="text-md font-medium text-gray-500">0%</span>
            </div>

            <div class="flex items-center">
              <span
                class="text-md font-medium text-blue-600 hover:underline shrink-0"
                >3 star</span
              >
              <div class="w-3/4 h-4 mx-2 bg-gray-200 rounded">
                <div class="h-4 bg-yellow-400 rounded" style="width: 10%"></div>
              </div>
              <span class="text-md font-medium text-gray-500">0%</span>
            </div>

            <div class="flex items-center">
              <span
                class="text-md font-medium text-blue-600 hover:underline shrink-0"
                >2 star</span
              >
              <div class="w-3/4 h-4 mx-2 bg-gray-200 rounded">
                <div class="h-4 bg-yellow-400 rounded" style="width: 5%"></div>
              </div>
              <span class="text-md font-medium text-gray-500">0%</span>
            </div>

            <div class="flex items-center">
              <span
                class="text-md font-medium text-blue-600 hover:underline shrink-0"
                >1 star</span
              >
              <div class="w-3/4 h-4 mx-2 bg-gray-200 rounded">
                <div class="h-4 bg-yellow-400 rounded" style="width: 10%"></div>
              </div>
              <span class="text-md font-medium text-gray-500">0%</span>
            </div>
          </div>
        </div>
      </section>

      <!-- end of review section -->

      <!-- Price Container -->
      <div class="grid grid-cols-1 md:grid-cols-3 gap-8 px-8 mt-32">
        <div
          class="bg-[#f8f9f8] w-full font-sans mx-auto py-12 rounded-lg shadow-lg px-4"
        >
          <!-- Duration Section -->
          <div
            class="flex justify-between items-center gap-4 py-4 border-b border-[#e5e5e7]"
          >
            <img src="/icon/time.svg" alt="Time icon" class="w-6 h-6" />
            <div class="flex justify-between w-full items-center">
              <p class="text-md font-medium text-gray-700">Duration</p>
              <p class="text-md font-semibold text-gray-800">
                {{ course.durationone }}
              </p>
            </div>
          </div>
          <!-- Price Section -->
          <div class="flex items-center gap-4 py-4 border-b border-[#e5e5e7]">
            <img src="/icon/tag.svg" alt="Tag icon" class="w-6 h-6" />
            <div class="flex justify-between w-full items-center">
              <h2 class="text-md font-medium text-gray-700">Price</h2>
              <p class="text-md font-semibold text-gray-800">
                {{ course.monthone }}
              </p>
            </div>
          </div>
          <!-- Instructor Section -->
          <div class="flex items-center gap-4 py-4 border-b border-[#e5e5e7]">
            <img
              src="/icon/instructor.svg"
              alt="Instructor icon"
              class="w-6 h-6"
            />
            <div class="flex justify-between w-full items-center">
              <h2 class="text-md font-medium text-gray-700">Instructor</h2>
              <p class="text-md font-semibold text-gray-800">
                {{ course.instructor }}
              </p>
            </div>
          </div>
          <!-- Additional Info Section -->
          <!-- <div class="flex items-center gap-4 py-4 border-b border-[#e5e5e7]">
            <img src="/icon/tag.svg" alt="Additional icon" class="w-6 h-6" />
            <div class="flex justify-between w-full items-center">
              <h2 class="text-md font-medium text-gray-700">Extra Info</h2>
              <p class="text-md font-semibold text-gray-800">
                {{ course.monthone }}
              </p>
            </div>
          </div> -->
          <!-- Enroll Now Button -->
          <router-link
            :to="{ name: 'course-form', params: { id: course.id } }"
            class="decoration-none outline-none"
          >
            <div class="flex justify-center">
              <button
                type="button"
                class="mt-6 px-12 py-3 rounded-lg text-white text-base font-bold tracking-wider bg-[#186ac3] hover:bg-blue-700 shadow-md transition duration-200"
              >
                Enroll Now
              </button>
            </div>
          </router-link>
        </div>
        <!-- section two -->
        <div
          class="bg-[#f8f9f8] w-full font-sans mx-auto py-12 px-4 rounded-lg shadow-lg"
        >
          <!-- Duration Section -->
          <div
            class="flex justify-between items-center gap-4 py-4 border-b border-[#e5e5e7]"
          >
            <img src="/icon/time.svg" alt="Time icon" class="w-6 h-6" />
            <div class="flex justify-between w-full items-center">
              <p class="text-md font-medium text-gray-700">Duration</p>
              <p class="text-md font-semibold text-gray-800">
                {{ course.durationtwo }}
              </p>
            </div>
          </div>
          <!-- Price Section -->
          <div class="flex items-center gap-4 py-4 border-b border-[#e5e5e7]">
            <img src="/icon/tag.svg" alt="Tag icon" class="w-6 h-6" />
            <div class="flex justify-between w-full items-center">
              <h2 class="text-md font-medium text-gray-700">Price</h2>
              <p class="text-md font-semibold text-gray-800">
                {{ course.monthtwo }}
              </p>
            </div>
          </div>
          <!-- Instructor Section -->
          <div class="flex items-center gap-4 py-4 border-b border-[#e5e5e7]">
            <img
              src="/icon/instructor.svg"
              alt="Instructor icon"
              class="w-6 h-6"
            />
            <div class="flex justify-between w-full items-center">
              <h2 class="text-md font-medium text-gray-700">Instructor</h2>
              <p class="text-md font-semibold text-gray-800">
                {{ course.instructor }}
              </p>
            </div>
          </div>
          <!-- Additional Info Section -->
          <!-- <div class="flex items-center gap-4 py-4 border-b border-[#e5e5e7]">
            <img src="/icon/tag.svg" alt="Additional icon" class="w-6 h-6" />
            <div class="flex justify-between w-full items-center">
              <h2 class="text-md font-medium text-gray-700">Extra Info</h2>
              <p class="text-md font-semibold text-gray-800">
                {{ course.monthtwo }}
              </p>
            </div>
          </div> -->
          <!-- Enroll Now Button -->
          <div class="flex justify-center">
            <button
              type="button"
              class="mt-6 px-12 py-3 rounded-lg text-white text-base font-bold tracking-wider bg-[#186ac3] hover:bg-blue-700 shadow-md transition duration-200"
            >
              Enroll Now
            </button>
          </div>
        </div>
        <!-- section 3 -->
        <div
          class="bg-[#f8f9f8] w-full font-sans mx-auto py-12 px-4 rounded-lg shadow-lg"
        >
          <!-- Duration Section -->
          <div
            class="flex justify-between items-center gap-4 py-4 border-b border-[#e5e5e7]"
          >
            <img src="/icon/time.svg" alt="Time icon" class="w-6 h-6" />
            <div class="flex justify-between w-full items-center">
              <p class="text-md font-medium text-gray-700">Duration</p>
              <p class="text-md font-semibold text-gray-800">
                {{ course.durationthree }}
              </p>
            </div>
          </div>
          <!-- Price Section -->
          <div class="flex items-center gap-4 py-4 border-b border-[#e5e5e7]">
            <img src="/icon/tag.svg" alt="Tag icon" class="w-6 h-6" />
            <div class="flex justify-between w-full items-center">
              <h2 class="text-md font-medium text-gray-700">Price</h2>
              <p class="text-md font-semibold text-gray-800">
                {{ course.monththree }}
              </p>
            </div>
          </div>
          <!-- Instructor Section -->
          <div class="flex items-center gap-4 py-4 border-b border-[#e5e5e7]">
            <img
              src="/icon/instructor.svg"
              alt="Instructor icon"
              class="w-6 h-6"
            />
            <div class="flex justify-between w-full items-center">
              <h2 class="text-md font-medium text-gray-700">Instructor</h2>
              <p class="text-md font-semibold text-gray-800">
                {{ course.instructor }}
              </p>
            </div>
          </div>
          <!-- Additional Info Section -->
          <!-- <div class="flex items-center gap-4 py-4 border-b border-[#e5e5e7]">
            <img src="/icon/tag.svg" alt="Additional icon" class="w-6 h-6" />
            <div class="flex justify-between w-full items-center">
              <h2 class="text-md font-medium text-gray-700">Extra Info</h2>
              <p class="text-md font-semibold text-gray-800">
                {{ course.monththree }}
              </p>
            </div>
          </div> -->
          <!-- Enroll Now Button -->
          <div class="flex justify-center">
            <button
              type="button"
              class="mt-6 px-12 py-3 rounded-lg text-white text-base font-bold tracking-wider bg-[#186ac3] hover:bg-blue-700 shadow-md transition duration-200"
            >
              Enroll Now
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import AcademyService from "../services/AcademyService";
export default {
  data() {
    return {
      overviewExpanded: true,
      reviewExpanded: false,
      bannerImage: require("../assets/events-details3.jpg"),
      course: {
        // Initialize course with default empty values
        monthone: "",
        monthtwo: "",
        monththree: "",
        instructor: "",
      },
    };
  },
  methods: {
    showOverview() {
      this.overviewExpanded = true;
      this.reviewExpanded = false;
    },
    showReview() {
      this.reviewExpanded = true;
      this.overviewExpanded = false;
    },
    toggleSection(index) {
      this.sections[index].expanded = !this.sections[index].expanded;
    },
  },
  created() {
    // Get the course ID from route parameters
    const courseId = this.$route.params.id; // Adjust according to your route setup

    // Ensure courseId is defined before making the API call
    if (courseId) {
      AcademyService.getCourse(courseId) // Pass courseId to the API call
        .then((response) => {
          this.course = response.data; // Set course data
        });
    }
  },
};
</script>
