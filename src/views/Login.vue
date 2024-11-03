<template>
  <div>
    <div class="py-16">
      <div
        class="flex bg-white rounded-lg shadow-lg overflow-hidden mx-auto max-w-sm lg:max-w-4xl"
      >
        <div
          class="hidden lg:block lg:w-1/2 bg-cover"
          style="
            background-image: url('https://images.unsplash.com/photo-1546514714-df0ccc50d7bf?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=667&q=80');
          "
        ></div>
        <div class="w-full p-8 lg:w-1/2">
          <p class="text-xl text-gray-600 text-center">Welcome back!</p>
          <div class="mt-4">
            <label class="block text-gray-700 text-sm font-bold mb-2">
              Username
            </label>
            <input
              v-model="username"
              class="bg-gray-200 text-gray-700 focus:outline-none focus:shadow-outline border border-gray-300 rounded py-2 px-4 block w-full appearance-none"
              type="email"
            />
          </div>
          <div class="mt-4">
            <div class="flex justify-between">
              <label class="block text-gray-700 text-sm font-bold mb-2">
                Password
              </label>
              <a href="#" class="text-xs text-gray-500">Forget Password?</a>
            </div>
            <input
              v-model="password"
              class="bg-gray-200 text-gray-700 focus:outline-none focus:shadow-outline border border-gray-300 rounded py-2 px-4 block w-full appearance-none"
              type="password"
            />
          </div>
          <div class="mt-8">
            <button
              @click="login"
              class="bg-gray-700 text-white font-bold py-2 px-4 w-full rounded hover:bg-gray-600"
            >
              Login
            </button>
          </div>
          <div class="mt-4 flex items-center justify-between">
            <span class="border-b w-1/5 md:w-1/4"></span>
            <a href="#" class="text-xs text-gray-500 uppercase">or sign up</a>
            <span class="border-b w-1/5 md:w-1/4"></span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "CourseForm",
  data() {
    return {
      username: "",
      password: "",
    };
  },
  methods: {
    // Simulate a login action
    login() {
      // For demo purposes, check against hardcoded values
      if (this.username === "admin" && this.password === "admin123") {
        const user = { id: 1, name: "Admin", role: "admin" };
        this.$store.commit("setUser", user); // Commit user data to Vuex and localStorage
        this.$router.push("/view-application");
      } else {
        alert("Invalid credentials");
      }
    },

    // Retrieve user data from localStorage
    getUser() {
      const user = JSON.parse(localStorage.getItem("user"));
      if (user) {
        // console.log("Retrieved user data:", user);
        return user;
      } else {
        // console.log("No user data found in localStorage");
        return null;
      }
    },
  },
  created() {
    // Automatically check if user data exists on component mount
    this.getUser();
  },
};
</script>

<style scoped>
/* Add any component-specific styles here */
</style>
