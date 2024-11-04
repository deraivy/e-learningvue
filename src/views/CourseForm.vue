<template>
  <div class="app">
    <div class="bg-gray-50">
      <div class="w-full max-w-xl mx-auto p-6 md:p-8">
        <div class="bg-white p-8 rounded-lg shadow-md border border-gray-300">
          <h1 class="text-2xl font-bold text-gray-800 text-center mb-4">
            Form for {{ course.title }}
          </h1>
          <p class="text-center mb-4">
            Fill out the form carefully for registration
          </p>
          <form @submit.prevent="submitForm">
            <!-- Name Field -->
            <div class="mb-6">
              <label class="text-xs font-bold uppercase mb-1">
                Name
                <span
                  v-if="$v.formData.name.$error && !$v.formData.name.required"
                  class="text-red-500"
                  >*</span
                >
              </label>
              <BaseInput
                v-model="formData.name"
                type="text"
                placeholder="Full name"
                @blur="$v.formData.name.$touch()"
              />
              <span v-if="$v.formData.name.$error" class="text-red-500 text-xs"
                >This field is required.</span
              >
            </div>

            <!-- Email and Phone Fields -->
            <div class="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
              <div>
                <label class="text-xs font-bold uppercase mb-1">
                  Email
                  <span
                    v-if="
                      $v.formData.email.$error && !$v.formData.email.required
                    "
                    class="text-red-500"
                    >*</span
                  >
                </label>
                <BaseInput
                  v-model="formData.email"
                  type="email"
                  placeholder="Enter your email"
                  @blur="$v.formData.email.$touch()"
                />
                <span
                  v-if="$v.formData.email.$error"
                  class="text-red-500 text-xs"
                  >This field is required.</span
                >
              </div>
              <div>
                <label class="text-xs font-bold uppercase mb-1">
                  Number
                  <span
                    v-if="
                      $v.formData.phone.$error && !$v.formData.phone.required
                    "
                    class="text-red-500"
                    >*</span
                  >
                </label>
                <BaseInput
                  v-model="formData.phone"
                  type="tel"
                  placeholder="Enter your phone"
                  @blur="$v.formData.phone.$touch()"
                />
                <span
                  v-if="$v.formData.phone.$error"
                  class="text-red-500 text-xs"
                  >This field is required.</span
                >
              </div>
            </div>

            <!-- Gender and Date Of Birth Fields -->
            <div class="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
              <div>
                <label class="text-xs font-bold uppercase mb-1">
                  Gender
                  <span
                    v-if="
                      $v.formData.gender.$error && !$v.formData.gender.required
                    "
                    class="text-red-500"
                    >*</span
                  >
                </label>
                <BaseSelect
                  :options="genderOptions"
                  v-model="formData.gender"
                  @blur="$v.formData.gender.$touch()"
                />
                <span
                  v-if="$v.formData.gender.$error"
                  class="text-red-500 text-xs"
                  >This field is required.</span
                >
              </div>
              <div>
                <label class="text-xs font-bold uppercase mb-1">
                  Date Of Birth
                  <span
                    v-if="$v.formData.dob.$error && !$v.formData.dob.required"
                    class="text-red-500"
                    >*</span
                  >
                </label>
                <datepicker
                  class="custom-datepicker"
                  v-model="formData.dob"
                  placeholder="Select a dob"
                  @opened="$v.formData.dob.$touch()"
                />
                <span v-if="$v.formData.dob.$error" class="text-red-500 text-xs"
                  >This field is required.</span
                >
              </div>
            </div>

            <!-- Address Field -->
            <div class="mb-6">
              <label class="text-xs font-bold uppercase mb-1">
                Address
                <span
                  v-if="
                    $v.formData.address.$error && !$v.formData.address.required
                  "
                  class="text-red-500"
                  >*</span
                >
              </label>
              <BaseInput
                v-model="formData.address"
                type="text"
                placeholder="Enter your address"
                @blur="$v.formData.address.$touch()"
              />
              <span
                v-if="$v.formData.address.$error"
                class="text-red-500 text-xs"
                >This field is required.</span
              >
            </div>

            <!-- City and State Fields -->
            <div class="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
              <div>
                <label class="text-xs font-bold uppercase mb-1">
                  City
                  <span
                    v-if="$v.formData.city.$error && !$v.formData.city.required"
                    class="text-red-500"
                    >*</span
                  >
                </label>
                <BaseInput
                  v-model="formData.city"
                  type="text"
                  placeholder="Enter your city"
                  @blur="$v.formData.city.$touch()"
                />
                <span
                  v-if="$v.formData.city.$error"
                  class="text-red-500 text-xs"
                  >This field is required.</span
                >
              </div>
              <div>
                <label class="text-xs font-bold uppercase mb-1">
                  State
                  <span
                    v-if="
                      $v.formData.state.$error && !$v.formData.state.required
                    "
                    class="text-red-500"
                    >*</span
                  >
                </label>
                <BaseInput
                  v-model="formData.state"
                  type="text"
                  placeholder="Enter your state"
                  @blur="$v.formData.state.$touch()"
                />
                <span
                  v-if="$v.formData.state.$error"
                  class="text-red-500 text-xs"
                  >This field is required.</span
                >
              </div>
            </div>

            <!-- Nationality Field -->
            <div class="mb-6">
              <label class="text-xs font-bold uppercase mb-1">
                Nationality
                <span
                  v-if="
                    $v.formData.nationality.$error &&
                    !$v.formData.nationality.required
                  "
                  class="text-red-500"
                  >*</span
                >
              </label>
              <BaseInput
                v-model="formData.nationality"
                type="text"
                placeholder="Enter your nationality"
                @blur="$v.formData.nationality.$touch()"
              />
              <span
                v-if="$v.formData.nationality.$error"
                class="text-red-500 text-xs"
                >This field is required.</span
              >
            </div>

            <!-- Level of Education -->
            <div class="mb-6">
              <label class="text-xs font-bold uppercase mb-1">
                Level Of Education
                <span
                  v-if="
                    $v.formData.educationLevel.$error &&
                    !$v.formData.educationLevel.required
                  "
                  class="text-red-500"
                  >*</span
                >
              </label>
              <BaseSelect
                :options="educationOptions"
                v-model="formData.educationLevel"
                @blur="$v.formData.educationLevel.$touch()"
              />
              <span
                v-if="$v.formData.educationLevel.$error"
                class="text-red-500 text-xs"
                >This field is required.</span
              >
            </div>

            <!-- Course Duration -->
            <div class="mb-6">
              <label class="text-xs font-bold uppercase mb-1">
                Course Duration
                <span
                  v-if="
                    $v.formData.duration.$error &&
                    !$v.formData.duration.required
                  "
                  class="text-red-500"
                  >*</span
                >
              </label>
              <BaseSelect
                :options="durationOptions"
                v-model="formData.duration"
                @blur="$v.formData.duration.$touch()"
              />
              <span
                v-if="$v.formData.duration.$error"
                class="text-red-500 text-xs"
                >This field is required.</span
              >
            </div>

            <!-- Reason for Application -->
            <div class="mb-6">
              <label class="text-xs font-bold uppercase mb-1">
                Reason
                <span
                  v-if="
                    $v.formData.reason.$error && !$v.formData.reason.required
                  "
                  class="text-red-500"
                  >*</span
                >
              </label>
              <textarea
                v-model="formData.reason"
                id="comments"
                name="comments"
                rows="5"
                placeholder="Enter your reason for application..."
                class="border p-2 rounded w-full"
                @blur="$v.formData.reason.$touch()"
              ></textarea>
              <span
                v-if="$v.formData.reason.$error"
                class="text-red-500 text-xs"
                >This field is required.</span
              >
            </div>

            <!-- Submit Button -->
            <div class="mt-8 flex justify-end">
              <BaseButton
                type="submit"
                :disabled="$v.$anyError"
                class="p-2 bg-blue-300 rounded"
              >
                Submit
              </BaseButton>
              <p v-if="$v.$anyError" class="text-red-500 ml-4">
                Please fill out the required field(s)
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState, mapActions } from "vuex";
import AcademyService from "@/services/AcademyService";
import BaseSelect from "@/components/BaseSelect.vue";
import BaseInput from "@/components/BaseInput.vue";
import { required } from "vuelidate/lib/validators";
import BaseButton from "@/components/BaseButton.vue";
import Datepicker from "vuejs-datepicker";

export default {
  name: "CourseForm",
  components: {
    BaseSelect,
    BaseInput,
    BaseButton,
    Datepicker,
  },
  props: ["id"],
  data() {
    return {
      course: {},
      formData: {
        id: "",
        title: "",
        name: "",
        email: "",
        phone: "",
        gender: "",
        dob: "",
        address: "",
        city: "",
        state: "",
        nationality: "",
        educationLevel: "",
        duration: "",
        reason: "",
      },
    };
  },
  validations: {
    formData: {
      name: { required },
      email: { required },
      phone: { required },
      gender: { required },
      dob: { required },
      address: { required },
      city: { required },
      state: { required },
      nationality: { required },
      educationLevel: { required },
      duration: { required },
      reason: { required },
    },
  },
  computed: {
    ...mapState(["educationOptions", "genderOptions", "durationOptions"]),
  },
  created() {
    this.loadCourse();
    this.fetchOptions(); // Call to fetch options
  },
  methods: {
    ...mapActions([
      "fetchEducationOptions",
      "fetchGenderOptions",
      "fetchDurationOptions",
    ]),

    fetchOptions() {
      this.fetchEducationOptions();
      this.fetchGenderOptions();
      this.fetchDurationOptions();
    },

    loadCourse() {
      AcademyService.getCourse(this.id)
        .then((response) => {
          this.course = response.data;
          this.formData.title = this.course.title;
        })
        .catch((error) => {
          //
          // console.log("Error fetching course:", error);
        });
    },
    submitForm() {
      this.$v.$touch();

      if (!this.$v.$invalid) {
        AcademyService.postStudent(this.formData)
          .then(() => {
            this.resetForm();
          })
          .catch((error) => {
            alert("Error submitting form. Please try again.");
          });
      } else {
        this.logValidationErrors(); // Log each field's validation state for debugging
      }
    },

    resetForm() {
      this.formData = {
        id: "",
        title: this.course.title,
        name: "",
        email: "",
        phone: "",
        gender: "",
        dob: "",
        address: "",
        city: "",
        state: "",
        nationality: "",
        educationLevel: "",
        duration: "",
        reason: "",
      };
    },
  },
};
</script>

<style scoped>
.required-asterisk {
  color: red;
}
.custom-datepicker >>> .inner-datepicker-class {
  border: 1px solid #d1d5db; /* Adjust the border as desired */
  border-radius: 0.25rem; /* Tailwind equivalent for rounded */
}
</style>
