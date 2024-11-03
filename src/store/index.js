import Vue from "vue";
import Vuex from "vuex";
import AcademyService from "@/services/AcademyService";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    user: JSON.parse(localStorage.getItem("user")) || null,
    userData: {},
    studentData: null,
    educationOptions: [
      "High School",
      "HND",
      "OND",
      "Degree",
      "Master's Degree",
      "Ph.D.",
    ],
    genderOptions: ["Male", "Female"],
    durationOptions: ["3-months", "6-months", "9-months"],
  },

  getters: {
    isLoggedIn: (state) => !!state.user,
    isAuthenticated: (state) => !!state.user,
    isAdmin: (state) => state.user && state.user.role === "admin",
    getUserData: (state) => state.userData,
    getStudentData(state) {
      return state.studentData;
    },

    getEducationOptions: (state) => state.educationOptions,
    getGenderOptions: (state) => state.genderOptions,
    durationOptions: (state) => state.durationOptions,
  },

  mutations: {
    setUser(state, user) {
      state.user = user;
      localStorage.setItem("user", JSON.stringify(user));
    },
    clearUser(state) {
      state.user = null;
      localStorage.removeItem("user");
    },
    setUserData(state, data) {
      state.userData = data;
    },
    setStudentData(state, student) {
      state.studentData = student;
    },
    setEducationOptions(state, options) {
      state.educationOptions = options;
    },
    setGenderOptions(state, options) {
      state.genderOptions = options;
    },
    setDurationOptions(state, options) {
      state.durationOptions = options;
    },
  },

  actions: {
    submitCourseForm({}, formData) {
      return AcademyService.postCourseForm(formData)
        .then(() => {
          console.log("Form submitted successfully");
        })
        .catch((error) => {
          console.error("Error submitting form:", error);
        });
    },

    fetchStudent({ commit }, id) {
      return AcademyService.getStudent(id)
        .then((response) => {
          commit("setStudentData", response.data);
        })
        .catch((error) => {
          console.error("Error fetching student data:", error);
        });
    },

    fetchEducationOptions({ commit }) {
      const options = [
        "High School",
        "HND",
        "OND",
        "Degree",
        "Master's Degree",
        "Ph.D.",
      ];
      commit("setEducationOptions", options);
    },

    fetchGenderOptions({ commit }) {
      const options = ["Male", "Female"];
      commit("setGenderOptions", options);
    },

    fetchDurationOptions({ commit }) {
      const options = ["3-months", "6-months", "9-months"];
      commit("setDurationOptions", options);
    },
  },

  actions: {
    submitCourseForm({}, formData) {
      return AcademyService.postCourseForm(formData)
        .then(() => {
          console.log("Form submitted successfully");
        })
        .catch((error) => {
          console.error("Error submitting form:", error);
        });
    },

    fetchStudent({ commit }, id) {
      return AcademyService.getStudent(id)
        .then((response) => {
          commit("setStudentData", response.data);
        })
        .catch((error) => {
          console.error("Error fetching student data:", error);
        });
    },

    fetchCourses({ commit }, id) {
      return AcademyService.getCourses(id)
        .then((response) => {
          commit("setCoursesData", response.data); // Commit fetched data
          return response.data; // Return data for further use
        })
        .catch((error) => {
          console.error("Error fetching courses data:", error);
          throw error; // Rethrow the error to be handled in the router
        });
    },

    fetchEducationOptions({ commit }) {
      const options = [
        "High School",
        "HND",
        "OND",
        "Degree",
        "Master's Degree",
        "Ph.D.",
      ];
      commit("setEducationOptions", options);
    },

    fetchGenderOptions({ commit }) {
      const options = ["Male", "Female"];
      commit("setGenderOptions", options);
    },

    fetchDurationOptions({ commit }) {
      const options = ["3-months", "6-months", "9-months"];
      commit("setDurationOptions", options);
    },
  },
  // getters: {
  //   isLoggedIn: (state) => state.admin,
  //   isAdmin: (state) => state.role === "admin",
  // },
});
