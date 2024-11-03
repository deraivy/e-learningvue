<template>
  <div class="student-details">
    <h2>{{ student.name }} Details</h2>
    <div v-if="student" class="details-card">
      <p><strong>Course:</strong> {{ student.title }}</p>
      <p><strong>Name:</strong> {{ student.name }}</p>
      <p><strong>Email:</strong> {{ student.email }}</p>
      <p><strong>Phone:</strong> {{ student.phone }}</p>
      <p><strong>Gender:</strong> {{ student.gender }}</p>
      <p><strong>DOB:</strong> {{ student.dob }}</p>
      <p><strong>Address:</strong> {{ student.address }}</p>
      <p><strong>City:</strong> {{ student.city }}</p>
      <p><strong>State:</strong> {{ student.state }}</p>
      <p><strong>Nationality:</strong> {{ student.nationality }}</p>
      <p><strong>Educational Level:</strong> {{ student.educationLevel }}</p>
      <p><strong>Duration:</strong> {{ student.duration }}</p>
      <p><strong>Reason:</strong> {{ student.reason }}</p>
    </div>
    <div v-else>
      <p>Loading student details...</p>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  data() {
    return {
      studentId: this.$route.params.id,
    };
  },
  computed: {
    ...mapGetters(["getStudentData"]),
    student() {
      return this.getStudentData;
    },
  },
  mounted() {
    this.$store.dispatch("fetchStudent", this.studentId);
  },
};
</script>

<style scoped>
.student-details {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  font-family: Arial, sans-serif;
}

.student-details h2 {
  font-size: 24px;
  color: #186ac3;
  margin-bottom: 20px;
}

.details-card {
  background-color: #ffffff;
  width: 100%;
  max-width: 600px;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  padding: 20px;
  line-height: 1.6;
  color: #333;
}

.details-card p {
  margin: 10px 0;
}

.details-card strong {
  color: #555;
}

.details-card p:not(:last-child) {
  border-bottom: 1px solid #f0f0f0;
  padding-bottom: 10px;
}
</style>
