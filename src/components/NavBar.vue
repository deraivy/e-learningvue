<template>
  <div id="nav" class="container mx-auto my-8 px-4 md:px-8 lg:px-16">
    <div class="flex justify-between items-center">
      <router-link to="/" class="font-bold text-2xl hover:text-pink-500"
        >Speed Academy</router-link
      >

      <!-- Mobile menu button -->
      <button
        @click="toggleMobileMenu"
        class="md:hidden text-lg focus:outline-none"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M4 6h16M4 12h16m-7 6h7"
          />
        </svg>
      </button>

      <!-- Desktop Navigation -->
      <nav class="hidden md:flex space-x-4">
        <a
          href="#about"
          class="text-lg font-bold hover:text-pink-500"
          @click.prevent="scrollToSection('about')"
          >About Us</a
        >
        <a
          href="#courses"
          @click.prevent="scrollToSection('courses')"
          class="text-lg font-bold hover:text-pink-500"
          >Courses</a
        >

        <router-link
          v-if="isAdmin"
          :to="{ name: 'view-application' }"
          class="text-lg font-bold hover:text-pink-500"
          >View Application</router-link
        >

        <router-link
          v-if="!isLoggedIn"
          :to="{ name: 'login' }"
          class="text-lg font-bold hover:text-pink-500"
          >Login</router-link
        >

        <button
          v-if="isAdmin"
          @click="logout"
          class="text-lg font-bold hover:text-pink-500"
        >
          Logout
        </button>
      </nav>
    </div>

    <!-- Mobile Menu -->
    <div v-if="!isMobileMenuHidden" class="md:hidden mt-2 p-4">
      <nav class="flex flex-col space-y-2">
        <a
          href="#about"
          class="text-lg font-bold hover:text-pink-500"
          @click.prevent="scrollToSection('about')"
          >About Us</a
        >
        <a
          href="#courses"
          @click.prevent="scrollToSection('courses')"
          class="text-lg font-bold hover:text-pink-500"
          >Courses</a
        >
        <router-link
          v-if="isAdmin"
          :to="{ name: 'view-application' }"
          class="text-lg font-bold hover:text-pink-500"
          >View Application</router-link
        >
        <router-link
          v-if="!isLoggedIn"
          :to="{ name: 'login' }"
          class="text-lg font-bold hover:text-pink-500"
          >Login</router-link
        >
        <button
          v-if="isAdmin"
          @click="logout"
          class="text-lg font-bold hover:text-pink-500"
        >
          Logout
        </button>
      </nav>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  data() {
    return {
      isMobileMenuHidden: true, // Mobile menu visibility state
    };
  },
  computed: {
    ...mapGetters(["isAdmin", "isLoggedIn"]), // Use Vuex getters for auth state
  },
  methods: {
    toggleMobileMenu() {
      this.isMobileMenuHidden = !this.isMobileMenuHidden; // Toggle mobile menu visibility
    },
    scrollToSection(sectionId) {
      const target = document.getElementById(sectionId);
      if (target) {
        target.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }
    },
    logout() {
      this.$store.commit("clearUser"); // Clear user from Vuex and localStorage
      this.$router.push("/login"); // Redirect to login after logout
    },
  },
};
</script>

<style>
/* Additional styles if needed */
</style>
