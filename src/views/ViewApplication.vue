<template>
  <div class="app">
    <div class="mx-auto max-w-screen-lg px-4 py-8 sm:px-8">
      <div class="flex items-center justify-between pb-6">
        <div>
          <h2 class="font-semibold text-gray-700">User Accounts</h2>
          <span class="text-xs text-gray-500"
            >View accounts of registered users</span
          >
        </div>
      </div>
      <div class="overflow-y-hidden rounded-lg border">
        <div class="overflow-x-auto">
          <table class="w-full">
            <thead>
              <tr
                class="bg-blue-600 text-left text-xs font-semibold uppercase tracking-widest text-white"
              >
                <th class="px-5 py-3">Course</th>
                <th class="px-5 py-3">Full Name</th>
                <th class="px-5 py-3">Email</th>
                <th class="px-5 py-3">Phone</th>
                <th class="px-5 py-3">Gender</th>
                <th class="px-5 py-3">State</th>
                <th class="px-5 py-3">Duration</th>
                <th></th>
              </tr>
            </thead>
            <tbody class="text-gray-500">
              <tr v-for="student in students" :key="student.id">
                <td class="border-b border-gray-200 bg-white px-5 py-5 text-sm">
                  <p class="whitespace-no-wrap">{{ student.title }}</p>
                </td>
                <td class="border-b border-gray-200 bg-white px-5 py-5 text-sm">
                  <p class="whitespace-no-wrap">{{ student.name }}</p>
                </td>
                <td class="border-b border-gray-200 bg-white px-5 py-5 text-sm">
                  <p class="whitespace-no-wrap">{{ student.email }}</p>
                </td>
                <td class="border-b border-gray-200 bg-white px-5 py-5 text-sm">
                  <p class="whitespace-no-wrap">{{ student.phone }}</p>
                </td>
                <td class="border-b border-gray-200 bg-white px-5 py-5 text-sm">
                  <p class="whitespace-no-wrap">{{ student.gender }}</p>
                </td>
                <td class="border-b border-gray-200 bg-white px-5 py-5 text-sm">
                  <p class="whitespace-no-wrap">{{ student.state }}</p>
                </td>
                <td class="border-b border-gray-200 bg-white px-5 py-5 text-sm">
                  <p class="whitespace-no-wrap">{{ student.duration }}</p>
                </td>
                <td class="border-b border-gray-200 bg-white px-5 py-5 text-sm">
                  <router-link
                    :to="{ name: 'my-application', params: { id: student.id } }"
                  >
                    <div
                      class="rounded-full bg-red-200 px-3 py-1 text-xs font-semibold text-green-900"
                    >
                      view
                    </div>
                  </router-link>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import AcademyService from "@/services/AcademyService";

export default {
  name: "CourseList",
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
  border-radius: 8px;
  overflow: hidden;
  margin-top: 60px;
}

.student-table th,
.student-table td {
  padding: 12px 15px;
  text-align: left;
}

.student-table th {
  background-color: #186ac3;
  font-weight: bold;
  color: #fff;
}

.student-table td {
  background-color: #fff;
}

.student-table tr:hover td {
  background-color: #eaf3fc;
}

.bold {
  font-weight: bold;
  font-size: 16px;
  color: #555;
}
.apply {
  color: black;
  font-size: 16px;
  font-weight: 700;
}
</style>
