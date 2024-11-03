<template>
  <div id="ap">
    <NavBar />
    <router-view />
    <Footer />
  </div>
</template>
<script>
import Footer from "./components/Footer.vue";
import NavBar from "./components/NavBar.vue";

export default {
  components: {
    NavBar,
    Footer,
  },
};
</script>

<style>
/* Base and global styling */
html {
  -webkit-text-size-adjust: 100%;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  scroll-behavior: smooth;
}

body {
  margin: 0;
  font-family: "Montserrat", sans-serif;
  font-size: 16px;
  line-height: 1.5;
}

.app {
  box-sizing: border-box;
  max-width: 1200px;
  padding: 0 20px;
  margin: 0 auto;
}

/* Form Styling */
.form-group {
  margin-bottom: 20px;
}

.field {
  width: 100%;
  padding: 10px;
  font-size: 14px;
  border: 1px solid #ccc; /* Light gray for uniform appearance */
  border-radius: 5px;
  box-sizing: border-box;
}

.field:focus {
  outline: none;
  border-color: #186ac3; /* Highlighted color */
  box-shadow: 0 0 5px rgba(24, 106, 195, 0.3); /* Light shadow */
}

.label {
  color: #1a1919;
  text-transform: uppercase;
  font-size: 14px;
  display: block;
  margin-bottom: 5px;
  font-weight: 600;
}
.radio {
  margin-top: 15px;
}
.radio-label,
.check-label {
  cursor: pointer;
  font-size: 14px;
  display: inline-flex;
  align-items: center;
  font-weight: normal;
  text-transform: none;
}

.radio-label input[type="radio"],
.check-label input[type="checkbox"] {
  margin-right: 8px;
}

/* Error Styling */
.error {
  border: 1px solid red;
}

.errorMessage {
  color: red;
  font-size: 13px;
  margin-top: 5px;
}

/* Centered Form Heading */
.form-name {
  text-align: center;
  margin: 30px auto;
  font-size: 21px;
  font-weight: 700;
  font-family: "Montserrat", sans-serif;
}

/* Responsive Form Layout */
.form-row {
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
}

.form-column {
  flex: 1;
  min-width: 250px;
}
</style>
