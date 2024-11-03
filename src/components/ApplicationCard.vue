<template>
  <div class="app">
    <ApplicationCard
      v-for="student in students"
      :key="student.id"
      :student="student"
    />
  </div>
</template>

<script>
import AcademyService from "@/services/AcademyService";
import ApplicationCard from "../components/ApplicationCard.vue";

export default {
  name: "CourseList",
  components: {
    ApplicationCard,
  },
  props: {
    student: Object,
  },
  data() {
    return {
      students: [],
    };
  },
  created() {
    this.fetchStudents();
  },
  methods: {
    fetchStudents() {
      AcademyService.getStudents()
        .then((response) => {
          this.students = response.data;
        })
        .catch((error) => {
          console.error("Error fetching students:", error);
        });
    },
  },
};
</script>

<style scoped>
.student-table table {
  width: 100%;
  border-collapse: collapse;
  margin: 20px 0;
  border: 1px solid #ddd;
  border-radius: 8px;
  overflow: hidden;
}

.student-table th,
.student-table td {
  padding: 12px 15px;
  border: 1px solid #ddd;
  text-align: left;
}

.student-table th {
  background-color: #f7f7f7;
  font-weight: bold;
  color: #333;
}

.student-table td {
  background-color: #fff;
}

.student-table tr:hover td {
  background-color: #f0f0f8; /* Row hover effect */
}

.bold {
  font-weight: bold;
  font-size: 16px;
  color: #555;
}

/* Button Styling */
.apply {
  background-color: #4caf50;
  color: white;
  border: none;
  padding: 8px 16px;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.apply:hover {
  background-color: #45a049;
}

.apply:focus {
  outline: none;
}

.apply:active {
  background-color: #3e8e41;
}
</style>
