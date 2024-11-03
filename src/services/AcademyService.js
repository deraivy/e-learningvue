// apiClient.js
import axios from "axios";
import nProgress from "nprogress";
import "nprogress/nprogress.css"; // Make sure to import the CSS globally

// Create an instance of axios with custom settings
const apiClient = axios.create({
  baseURL: "http://localhost:3000",
  withCredentials: false,
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
  },
  timeout: 10000,
});

// Start NProgress before each request
apiClient.interceptors.request.use((config) => {
  nProgress.start();
  return config;
});

// Stop NProgress after each response or error
apiClient.interceptors.response.use(
  (response) => {
    nProgress.done();
    return response;
  },
  (error) => {
    nProgress.done();
    return Promise.reject(error);
  }
);

export default {
  getCourses() {
    return apiClient.get("/courses");
  },
  getCourse(id) {
    return apiClient.get(`/courses/${id}`);
  },
  postStudent(student) {
    return apiClient.post("/students", student);
  },
  getStudents() {
    return apiClient.get("/students");
  },
  getStudent(id) {
    return apiClient.get(`/students/${id}`);
  },
};
