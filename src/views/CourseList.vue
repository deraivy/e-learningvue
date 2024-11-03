<template>
  <div>
    <!-- banner starts -->
    <div
      class="py-10 flex justify-center items-center relative overflow-hidden h-screen"
    >
      <div class="container mx-auto px-4 md:px-6 lg:px-16">
        <div
          class="grid grid-cols-1 lg:grid-cols-2 gap-6 items-center justify-center"
        >
          <div class="text-center lg:text-left lg:w-10/12 space-y-6">
            <h2
              class="font-bebas-neue uppercase text-5xl sm:text-6xl font-black leading-tight text-gray-800"
            >
              Complete Your Dreams Today!
            </h2>
            <p class="text-gray-600 my-4 text-lg sm:text-xl">
              Learn any coding program from anywhere at an affordable price. You
              won’t be alone in your studies; our support is just a reach away.
            </p>
            <button
              class="bg-black text-white py-3 px-6 rounded-lg shadow-lg hover:bg-gray-800 transition duration-200"
            >
              Get Started
            </button>
          </div>

          <div class="hidden sm:block sm:w-1/2 lg:w-3/5 relative">
            <img
              src="../assets/main-banner3.png"
              class="max-w-full md:max-w-md lg:max-w-lg xl:max-w-xl m-auto"
              alt="Programming Banner"
            />
          </div>
        </div>
      </div>
    </div>
    <!-- banner ends -->

    <!-- about starts -->
    <section id="about" class="container mx-auto my-20 px-4 md:px-6 lg:px-16">
      <div class="grid grid-cols-1 md:grid-cols-2 gap-12">
        <div>
          <img src="../assets/about.jpg" class="w-full rounded-md" />
        </div>
        <div class="flex items-center justify-between">
          <div>
            <h2 class="text-2xl lg:text-4xl font-bold">
              Develop Your Skills, Learn Something New, and Grow Your Skills
              From Anywhere in the World!
            </h2>
            <p class="my-4">
              We understand better that online-based learning can make a
              significant change to reach students from all over the world!
              Giving options to learn better always can offer the best outcomes!
            </p>
            <ul class="space-y-2">
              <li class="flex items-center">
                <img
                  src="/icon/world-2-svgrepo-com (1).svg"
                  alt=""
                  class="w-6 h-6 mr-2"
                />
                <span>Available worldwide</span>
              </li>
              <li class="flex items-center">
                <img src="/icon/remote.svg" alt="" class="w-8 h-8 mr-2" />
                <span>Remote Learning</span>
              </li>
              <li class="flex items-center">
                <img src="/icon/timer.svg" alt="" class="w-5 h-5 mr-2" />
                <span>Lifetime access</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>

    <!-- about ends -->

    <!--  -->
    <section class="bg-[#f8f9f8] p-8 md:p-16 lg:p-26">
      <div class="container mx-auto my-10 md:my-16 px-4 md:px-6 lg:px-16">
        <div>
          <p class="uppercase text-center text-sm text-red-500">
            EDUCATION FOR EVERYONE
          </p>
          <h2
            class="text-2xl text-center md:text-3xl lg:text-4xl font-bold my-4 md:w-8/12 lg:w-5/12 mx-auto"
          >
            Online Coaching Lessons For Remote Learning
          </h2>
          <p
            class="text-center text-sm md:text-base md:w-10/12 lg:w-6/12 mx-auto"
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </div>
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-8">
          <div
            class="bg-white shadow-lg w-full rounded-lg font-[sans-serif] overflow-hidden mx-auto mt-4"
          >
            <div
              class="relative p-6 bg-cover bg-center h-64 bg-no-repeat"
              style="
                background-image: url('/path/to/your/background-image.svg');
              "
            >
              <img
                src="/icon/world-2-svgrepo-com (1).svg"
                alt="World Icon"
                class="mb-4"
              />
              <h3 class="text-lg font-semibold">
                Enjoy Learning From Anywhere
              </h3>
              <p class="mt-2 text-sm leading-relaxed">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                auctor auctor arcu, at fermentum dui. Maecenas
              </p>
            </div>
          </div>
          <div
            class="bg-white shadow-lg w-full rounded-lg font-[sans-serif] overflow-hidden mx-auto mt-4"
          >
            <div class="p-6">
              <img src="/icon/shield.svg" alt="" class="mb-4" />
              <h3 class="text-lg font-semibold">Learn From Industry Experts</h3>
              <p class="mt-2 text-sm text-gray-500 leading-relaxed">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                auctor auctor arcu, at fermentum dui. Maecenas
              </p>
            </div>
          </div>
          <div
            class="bg-white shadow-lg w-full rounded-lg font-[sans-serif] overflow-hidden mx-auto mt-4"
          >
            <div class="p-6">
              <img src="/icon/setting.svg" alt="" class="mb-4" />
              <h3 class="text-lg font-semibold">Learn the Latest Skills</h3>
              <p class="mt-2 text-sm text-gray-500 leading-relaxed">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                auctor auctor arcu, at fermentum dui. Maecenas
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- ends -->

    <!-- courses starts -->
    <section
      id="courses"
      class="container mx-auto my-8 px-4 md:px-6 lg:px-16 mt-20"
    >
      <div class="text-center my-6">
        <p class="text-sm text-red-500 my-2 uppercase">Go at your own pace</p>
        <h2 class="text-2xl lg:text-4xl font-bold my-4">Available Courses</h2>
        <p class="text-center w-6/12 mx-auto">
          Explore all of our courses and pick your suitable ones to enroll and
          start learning with us! We ensure that you will never regret it!
        </p>
      </div>

      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        <AcademyCard
          v-for="course in courses"
          :key="course.id"
          :course="course"
        />
      </div>
    </section>
    <!-- courses end -->
  </div>
</template>

<script>
// import BaseIcon from "@/components/BaseIcon.vue";
import AcademyCard from "../components/AcademyCard.vue";
import AcademyService from "../services/AcademyService";

export default {
  name: "CourseList",
  components: {
    AcademyCard,
    // BaseIcon,
  },
  data() {
    return {
      courses: [],
    };
  },
  created() {
    this.fetchCourses();
  },
  methods: {
    fetchCourses() {
      AcademyService.getCourses()
        .then((response) => {
          this.courses = response.data;
          // console.log(response.data);
        })
        .catch((error) => {
          // console.log("There was an error: ", error.message); // More descriptive error
        });
    },
    getStarted() {
      this.$router.push({ name: "CourseList" }); // Change to your desired route
    },
  },
};
</script>

<style>
.about-container {
  display: flex; /* Use Flexbox for layout */
  align-items: center; /* Center items vertically */
  justify-content: space-between; /* Space out items */
  padding: 20px;
  gap: 28px;
}
</style>
