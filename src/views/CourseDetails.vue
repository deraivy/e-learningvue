<template>
  <div>
    <div
      :style="{ backgroundImage: 'url(' + bannerImage + ')' }"
      class="bg-cover bg-center h-96 flex items-center justify-center relative text-center text-white"
    >
      <!-- Overlay for darker background if needed -->
      <div class="absolute inset-0 bg-black opacity-50"></div>

      <!-- Text content overlay -->
      <div class="relative z-10">
        <h1 class="text-3xl font-bold mb-2">{{ course.title }}</h1>
      </div>
    </div>
    <div class="container mx-auto my-8 px-4 md:px-6 lg:px-16">
      <!-- Navigation Links -->
      <div class="mt-10 bg-white py-2">
        <nav class="flex flex-wrap gap-4">
          <a
            href="#"
            @click.prevent="showOverview"
            class="inline-flex whitespace-nowrap border-b-2 border-transparent py-2 px-3 text-lg font-bold text-gray-600 hover:border-b-blue-600 hover:text-blue-600"
          >
            Overview
          </a>
          <a
            href="#"
            @click.prevent="showReview"
            class="inline-flex whitespace-nowrap border-b-2 border-transparent py-2 px-3 text-lg font-bold text-gray-600 hover:border-b-blue-600 hover:text-blue-600"
          >
            Review
          </a>
        </nav>
      </div>

      <section v-if="overviewExpanded" id="overview">
        <h2 class="text-2xl font-bold my-2">Course Description</h2>
        <p class="text-base">{{ course.description }}</p>

        <h2 class="text-2xl font-bold mt-12 py-2">Who is this course for</h2>
        <ul class="text-base">
          <li
            v-for="(audience, index) in course.targetAudience"
            :key="index"
            class="mb-4"
          >
            <strong>{{ audience.group }}:</strong> {{ audience.description }}
          </li>
        </ul>
      </section>

      <!-- Review Section -->
      <section v-if="reviewExpanded" id="review">
        <div
          class="p-4 px-32 mx-auto bg-white rounded-lg shadow-md max-w-2xl sm:p-5 grid grid-cols-1 lg:grid-cols-6 gap-4"
        >
          <div class="lg:col-span-2 col-span-1 mt-16">
            <form action="" method="POST" class="space-y-4">
              <!-- Center and enlarge the "5" rating text -->
              <h2 class="text-8xl font-extrabold text-gray-700 mb-3">5</h2>
              <div class="space-x-1 mb-4">
                <input
                  type="radio"
                  id="5-stars"
                  name="rating"
                  value="5"
                  class="hidden"
                />
                <label
                  for="5-stars"
                  class="text-yellow-500 text-3xl cursor-pointer hover:scale-110"
                  >★</label
                >

                <input
                  type="radio"
                  id="4-stars"
                  name="rating"
                  value="4"
                  class="hidden"
                />
                <label
                  for="4-stars"
                  class="text-yellow-500 text-3xl cursor-pointer hover:scale-110"
                  >★</label
                >

                <input
                  type="radio"
                  id="3-stars"
                  name="rating"
                  value="3"
                  class="hidden"
                />
                <label
                  for="3-stars"
                  class="text-yellow-500 text-3xl cursor-pointer hover:scale-110"
                  >★</label
                >

                <input
                  type="radio"
                  id="2-stars"
                  name="rating"
                  value="2"
                  class="hidden"
                />
                <label
                  for="2-stars"
                  class="text-yellow-500 text-3xl cursor-pointer hover:scale-110"
                  >★</label
                >

                <input
                  type="radio"
                  id="1-star"
                  name="rating"
                  value="1"
                  class="hidden"
                />
                <label
                  for="1-star"
                  class="text-yellow-500 text-3xl cursor-pointer hover:scale-110"
                  >★</label
                >
              </div>
            </form>
          </div>

          <div class="lg:col-span-4 hidden lg:flex flex-col space-y-3">
            <div class="flex items-center">
              <span class="text-yellow-500 text-2xl">★★★★★</span>
              <p class="ml-2 text-lg font-medium text-gray-900">0 out of 0</p>
            </div>
            <p class="text-md font-medium text-gray-500">0 global ratings</p>

            <div class="flex items-center mt-2">
              <span
                class="text-md font-medium text-blue-600 hover:underline shrink-0"
                >5 star</span
              >
              <div class="w-3/4 h-4 mx-2 bg-gray-200 rounded">
                <div class="h-4 bg-yellow-400 rounded" style="width: 50%"></div>
              </div>
              <span class="text-md font-medium text-gray-500">0%</span>
            </div>

            <!-- Additional rating bars with increased text size -->
            <div class="flex items-center">
              <span
                class="text-md font-medium text-blue-600 hover:underline shrink-0"
                >4 star</span
              >
              <div class="w-3/4 h-4 mx-2 bg-gray-200 rounded">
                <div class="h-4 bg-yellow-400 rounded" style="width: 25%"></div>
              </div>
              <span class="text-md font-medium text-gray-500">0%</span>
            </div>

            <div class="flex items-center">
              <span
                class="text-md font-medium text-blue-600 hover:underline shrink-0"
                >3 star</span
              >
              <div class="w-3/4 h-4 mx-2 bg-gray-200 rounded">
                <div class="h-4 bg-yellow-400 rounded" style="width: 10%"></div>
              </div>
              <span class="text-md font-medium text-gray-500">0%</span>
            </div>

            <div class="flex items-center">
              <span
                class="text-md font-medium text-blue-600 hover:underline shrink-0"
                >2 star</span
              >
              <div class="w-3/4 h-4 mx-2 bg-gray-200 rounded">
                <div class="h-4 bg-yellow-400 rounded" style="width: 5%"></div>
              </div>
              <span class="text-md font-medium text-gray-500">0%</span>
            </div>

            <div class="flex items-center">
              <span
                class="text-md font-medium text-blue-600 hover:underline shrink-0"
                >1 star</span
              >
              <div class="w-3/4 h-4 mx-2 bg-gray-200 rounded">
                <div class="h-4 bg-yellow-400 rounded" style="width: 10%"></div>
              </div>
              <span class="text-md font-medium text-gray-500">0%</span>
            </div>
          </div>
        </div>
      </section>

      <!-- end of review section -->

      <!-- Price Container -->
      <div class="grid grid-cols-1 md:grid-cols-3 gap-8 px-8 mt-32">
        <div
          class="bg-[#f8f9f8] w-full font-sans mx-auto py-12 rounded-lg shadow-lg px-4"
        >
          <!-- Duration Section -->
          <div
            class="flex justify-between items-center gap-4 py-4 border-b border-[#e5e5e7]"
          >
            <img src="/icon/time.svg" alt="Time icon" class="w-6 h-6" />
            <div class="flex justify-between w-full items-center">
              <p class="text-md font-medium text-gray-700">Duration</p>
              <p class="text-md font-semibold text-gray-800">
                {{ course.durationone }}
              </p>
            </div>
          </div>
          <!-- Price Section -->
          <div class="flex items-center gap-4 py-4 border-b border-[#e5e5e7]">
            <img src="/icon/tag.svg" alt="Tag icon" class="w-6 h-6" />
            <div class="flex justify-between w-full items-center">
              <h2 class="text-md font-medium text-gray-700">Price</h2>
              <p class="text-md font-semibold text-gray-800">
                {{ course.monthone }}
              </p>
            </div>
          </div>
          <!-- Instructor Section -->
          <div class="flex items-center gap-4 py-4 border-b border-[#e5e5e7]">
            <img
              src="/icon/instructor.svg"
              alt="Instructor icon"
              class="w-6 h-6"
            />
            <div class="flex justify-between w-full items-center">
              <h2 class="text-md font-medium text-gray-700">Instructor</h2>
              <p class="text-md font-semibold text-gray-800">
                {{ course.instructor }}
              </p>
            </div>
          </div>
          <!-- Additional Info Section -->
          <!-- <div class="flex items-center gap-4 py-4 border-b border-[#e5e5e7]">
            <img src="/icon/tag.svg" alt="Additional icon" class="w-6 h-6" />
            <div class="flex justify-between w-full items-center">
              <h2 class="text-md font-medium text-gray-700">Extra Info</h2>
              <p class="text-md font-semibold text-gray-800">
                {{ course.monthone }}
              </p>
            </div>
          </div> -->
          <!-- Enroll Now Button -->
          <router-link
            :to="{ name: 'course-form', params: { id: course.id } }"
            class="decoration-none outline-none"
          >
            <div class="flex justify-center">
              <button
                type="button"
                class="mt-6 px-12 py-3 rounded-lg text-white text-base font-bold tracking-wider bg-[#186ac3] hover:bg-blue-700 shadow-md transition duration-200"
              >
                Enroll Now
              </button>
            </div>
          </router-link>
        </div>
        <!-- section two -->
        <div
          class="bg-[#f8f9f8] w-full font-sans mx-auto py-12 px-4 rounded-lg shadow-lg"
        >
          <!-- Duration Section -->
          <div
            class="flex justify-between items-center gap-4 py-4 border-b border-[#e5e5e7]"
          >
            <img src="/icon/time.svg" alt="Time icon" class="w-6 h-6" />
            <div class="flex justify-between w-full items-center">
              <p class="text-md font-medium text-gray-700">Duration</p>
              <p class="text-md font-semibold text-gray-800">
                {{ course.durationtwo }}
              </p>
            </div>
          </div>
          <!-- Price Section -->
          <div class="flex items-center gap-4 py-4 border-b border-[#e5e5e7]">
            <img src="/icon/tag.svg" alt="Tag icon" class="w-6 h-6" />
            <div class="flex justify-between w-full items-center">
              <h2 class="text-md font-medium text-gray-700">Price</h2>
              <p class="text-md font-semibold text-gray-800">
                {{ course.monthtwo }}
              </p>
            </div>
          </div>
          <!-- Instructor Section -->
          <div class="flex items-center gap-4 py-4 border-b border-[#e5e5e7]">
            <img
              src="/icon/instructor.svg"
              alt="Instructor icon"
              class="w-6 h-6"
            />
            <div class="flex justify-between w-full items-center">
              <h2 class="text-md font-medium text-gray-700">Instructor</h2>
              <p class="text-md font-semibold text-gray-800">
                {{ course.instructor }}
              </p>
            </div>
          </div>
          <!-- Additional Info Section -->
          <!-- <div class="flex items-center gap-4 py-4 border-b border-[#e5e5e7]">
            <img src="/icon/tag.svg" alt="Additional icon" class="w-6 h-6" />
            <div class="flex justify-between w-full items-center">
              <h2 class="text-md font-medium text-gray-700">Extra Info</h2>
              <p class="text-md font-semibold text-gray-800">
                {{ course.monthtwo }}
              </p>
            </div>
          </div> -->
          <!-- Enroll Now Button -->
          <div class="flex justify-center">
            <button
              type="button"
              class="mt-6 px-12 py-3 rounded-lg text-white text-base font-bold tracking-wider bg-[#186ac3] hover:bg-blue-700 shadow-md transition duration-200"
            >
              Enroll Now
            </button>
          </div>
        </div>
        <!-- section 3 -->
        <div
          class="bg-[#f8f9f8] w-full font-sans mx-auto py-12 px-4 rounded-lg shadow-lg"
        >
          <!-- Duration Section -->
          <div
            class="flex justify-between items-center gap-4 py-4 border-b border-[#e5e5e7]"
          >
            <img src="/icon/time.svg" alt="Time icon" class="w-6 h-6" />
            <div class="flex justify-between w-full items-center">
              <p class="text-md font-medium text-gray-700">Duration</p>
              <p class="text-md font-semibold text-gray-800">
                {{ course.durationthree }}
              </p>
            </div>
          </div>
          <!-- Price Section -->
          <div class="flex items-center gap-4 py-4 border-b border-[#e5e5e7]">
            <img src="/icon/tag.svg" alt="Tag icon" class="w-6 h-6" />
            <div class="flex justify-between w-full items-center">
              <h2 class="text-md font-medium text-gray-700">Price</h2>
              <p class="text-md font-semibold text-gray-800">
                {{ course.monththree }}
              </p>
            </div>
          </div>
          <!-- Instructor Section -->
          <div class="flex items-center gap-4 py-4 border-b border-[#e5e5e7]">
            <img
              src="/icon/instructor.svg"
              alt="Instructor icon"
              class="w-6 h-6"
            />
            <div class="flex justify-between w-full items-center">
              <h2 class="text-md font-medium text-gray-700">Instructor</h2>
              <p class="text-md font-semibold text-gray-800">
                {{ course.instructor }}
              </p>
            </div>
          </div>
          <!-- Additional Info Section -->
          <!-- <div class="flex items-center gap-4 py-4 border-b border-[#e5e5e7]">
            <img src="/icon/tag.svg" alt="Additional icon" class="w-6 h-6" />
            <div class="flex justify-between w-full items-center">
              <h2 class="text-md font-medium text-gray-700">Extra Info</h2>
              <p class="text-md font-semibold text-gray-800">
                {{ course.monththree }}
              </p>
            </div>
          </div> -->
          <!-- Enroll Now Button -->
          <div class="flex justify-center">
            <button
              type="button"
              class="mt-6 px-12 py-3 rounded-lg text-white text-base font-bold tracking-wider bg-[#186ac3] hover:bg-blue-700 shadow-md transition duration-200"
            >
              Enroll Now
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      overviewExpanded: true,
      reviewExpanded: false,
      bannerImage: require("../assets/events-details3.jpg"),
      courses: [
        {
          id: "1",
          title: "Frontend Development",
          subtitle:
            "Crafting designs that enhance user interaction, deliver intuitive experiences, and adapt seamlessly across devices.",
          monthone: 120000,
          monthtwo: 160000,
          monththree: 220000,
          instructor: "Olamide",
          lessons: "4",
          image: "course-img1.jpg",
          durationone: "3 months",
          durationtwo: "6 months",
          durationthree: "9 months",
          lessonone: "7",
          lessontwo: "24",
          lessonthree: "32",
          description:
            "This course covers the essentials of building responsive and interactive web interfaces using HTML, CSS, and JavaScript. Students will learn about user experience (UX) design principles and how to implement modern frameworks such as React or Vue.js. The curriculum includes hands-on projects that simulate real-world scenarios, allowing students to apply their skills in creating dynamic web applications.",
          targetAudience: [
            {
              group: "Beginners in Web Development",
              description:
                "Individuals with little to no prior experience in coding or web design who want to start their journey in building websites and web applications.",
            },
            {
              group: "Aspiring Web Designers",
              description:
                "Creative professionals looking to enhance their skills in designing user interfaces (UIs) and user experiences (UX). This course will help them understand how to turn their designs into functional web applications.",
            },
            {
              group: "Current Developers Seeking to Upskill",
              description:
                "Developers who have experience in backend development or other programming areas but want to broaden their skill set by learning frontend technologies like HTML, CSS, and JavaScript.",
            },
            {
              group: "Students in Computer Science or Related Fields",
              description:
                "College or university students pursuing degrees in computer science, information technology, or digital media who want practical skills to complement their academic learning.",
            },
            {
              group: "Professionals in Digital Marketing or Product Management",
              description:
                "Individuals working in digital marketing, product management, or project management who need to understand frontend development concepts to collaborate effectively with development teams.",
            },
            {
              group: "Entrepreneurs and Business Owners",
              description:
                "Business owners or entrepreneurs who want to create and manage their websites or web applications without relying solely on external developers. This knowledge empowers them to make informed decisions about their web presence.",
            },
            {
              group: "Career Changers",
              description:
                "Professionals from non-technical backgrounds looking to transition into technology and web development. This course provides foundational knowledge and practical skills to facilitate that change.",
            },
          ],
        },
        {
          id: "2",
          title: "Backend Development",
          subtitle:
            "Building robust systems with efficient data handling, secure user authentication, and seamless integrations for performance.",
          monthone: 500,
          monthtwo: 500,
          monththree: 500,
          instructor: "Jane Doe",
          lessons: "5",
          image: "course-img2.jpg",
          durationone: "3 months",
          durationtwo: "6 months",
          durationthree: "9 months",
          lessonone: "10",
          lessontwo: "20",
          lessonthree: "30",
          description:
            "This course provides an in-depth understanding of backend development, focusing on server-side programming, database management, and API design. Students will learn to build and maintain the technology that powers the client-side of applications, ensuring data integrity and security while delivering high performance. The curriculum includes practical exercises that prepare students for real-world backend development challenges.",
          targetAudience: [
            {
              group: "Beginners in Programming",
              description:
                "Individuals who have minimal programming experience but are eager to learn the fundamentals of server-side development.",
            },
            {
              group: "Aspiring Backend Developers",
              description:
                "Those who wish to specialize in backend development and understand the principles of building and managing server-side applications.",
            },
            {
              group: "Developers Seeking to Expand Skills",
              description:
                "Frontend developers or those in other programming roles looking to gain knowledge of backend technologies and frameworks.",
            },
            {
              group: "Computer Science Students",
              description:
                "Students pursuing degrees in computer science or software engineering who want to enhance their understanding of backend architecture and design.",
            },
            {
              group: "Tech Professionals",
              description:
                "Individuals working in IT or related fields who wish to deepen their knowledge of backend systems to enhance their career prospects.",
            },
            {
              group: "Entrepreneurs",
              description:
                "Business owners interested in understanding backend processes to better manage their web applications and software products.",
            },
            {
              group: "Career Switchers",
              description:
                "Professionals from non-technical backgrounds looking to transition into backend development and the tech industry.",
            },
          ],
        },
        {
          id: "3",
          title: "Fullstack Development",
          subtitle:
            "Developing applications that combine user-centric interfaces and effective server logic for seamless, end-to-end experiences.",
          monthone: 600,
          monthtwo: 800,
          monththree: 1000,
          instructor: "Alice Johnson",
          lessons: "6",
          image: "course-img3.jpg",
          durationone: "3 months",
          durationtwo: "6 months",
          durationthree: "9 months",
          lessonone: "8",
          lessontwo: "25",
          lessonthree: "35",
          description:
            "This course offers a comprehensive introduction to fullstack development, covering both frontend and backend technologies. Students will learn to build complete web applications from the ground up, gaining expertise in server-side programming, database management, and user interface design. The curriculum includes real-world projects that enable students to create functional applications while mastering essential frameworks and tools.",
          targetAudience: [
            {
              group: "Aspiring Fullstack Developers",
              description:
                "Individuals interested in becoming fullstack developers who wish to learn both frontend and backend skills.",
            },
            {
              group: "Current Developers",
              description:
                "Frontend or backend developers looking to expand their skill set to include both sides of web development.",
            },
            {
              group: "Tech Students",
              description:
                "Students pursuing degrees in computer science, software engineering, or related fields who want to acquire practical fullstack development skills.",
            },
            {
              group: "Entrepreneurs",
              description:
                "Business owners wanting to understand the entire web development process to effectively manage their projects.",
            },
            {
              group: "Career Changers",
              description:
                "Professionals from various backgrounds looking to transition into tech and gain a versatile skill set in web development.",
            },
            {
              group: "Tech Enthusiasts",
              description:
                "Individuals passionate about technology who want to gain a holistic view of web development.",
            },
          ],
        },
        {
          id: "4",
          title: "Data Analysis",
          subtitle:
            "Analyzing data trends, creating visual insights, and leveraging predictive models to enable strategic decision-making.",
          monthone: 6000,
          monthtwo: 7000,
          monththree: 85000,
          durationone: "3 months",
          durationtwo: "6 months",
          durationthree: "9 months",
          instructor: "John",
          image: "course-img2.jpg",
          description:
            "This course provides a comprehensive overview of data analysis techniques, focusing on how to interpret complex data sets and derive actionable insights. Students will learn to use popular data analysis tools and programming languages such as Python and R, as well as data visualization tools like Tableau and Power BI. The curriculum includes hands-on projects that help students apply their analytical skills to real-world data scenarios.",
          targetAudience: [
            {
              group: "Aspiring Data Analysts",
              description:
                "Individuals looking to start a career in data analysis and gain the skills needed to interpret and analyze data effectively.",
            },
            {
              group: "Business Professionals",
              description:
                "Professionals in marketing, finance, and other fields who want to leverage data analysis to make informed business decisions.",
            },
            {
              group: "Students in Related Fields",
              description:
                "Students studying statistics, data science, or business who want to enhance their understanding of data analysis techniques.",
            },
            {
              group: "Entrepreneurs",
              description:
                "Business owners who wish to use data analysis to inform their business strategies and improve operational efficiency.",
            },
            {
              group: "Career Changers",
              description:
                "Individuals from non-technical backgrounds looking to transition into data analysis roles in the tech industry.",
            },
            {
              group: "Tech Enthusiasts",
              description:
                "Individuals interested in data science and analytics who want to learn how to work with data effectively.",
            },
          ],
        },
        {
          id: "5",
          title: "Artificial Intelligence",
          subtitle:
            "Applying machine learning and vision to develop technologies that mimic cognition, drive innovation, and assist decisions.",
          monthone: 6000,
          monthtwo: 7000,
          monththree: 85000,
          durationone: "3 months",
          durationtwo: "6 months",
          durationthree: "9 months",
          instructor: "Chidera",
          image: "course-img2.jpg",
          description:
            "This course covers foundational and advanced concepts in artificial intelligence, including machine learning, neural networks, and natural language processing. Students will gain experience with popular AI tools and frameworks, such as TensorFlow and PyTorch, and work on projects that simulate real-world applications of AI in fields like healthcare, finance, and robotics.",
          targetAudience: [
            {
              group: "Aspiring AI Engineers",
              description:
                "Individuals aiming to build a career in AI, seeking skills in machine learning, neural networks, and data-driven decision-making.",
            },
            {
              group: "Data Scientists and Analysts",
              description:
                "Professionals looking to extend their data skills into AI for predictive analytics and automated decision-making.",
            },
            {
              group: "Software Developers",
              description:
                "Developers interested in integrating AI functionalities, such as recommendation engines or chatbots, into their applications.",
            },
            {
              group: "Business Leaders",
              description:
                "Executives and managers who want to understand AI to make informed business decisions and lead AI initiatives.",
            },
            {
              group: "Researchers and Academics",
              description:
                "Individuals in academia or research fields seeking knowledge in advanced AI concepts and methodologies for research applications.",
            },
            {
              group: "Tech Enthusiasts",
              description:
                "Individuals passionate about AI who want to learn how to build intelligent systems and stay ahead in the tech industry.",
            },
          ],
        },
        {
          id: "6",
          title: "Cyber Security",
          subtitle:
            "Ensuring privacy, trust, and data protection with strategies and measures that safeguard sensitive information online.",
          monthone: 6000,
          monthtwo: 7000,
          monththree: 85000,
          durationone: "3 months",
          durationtwo: "6 months",
          durationthree: "9 months",
          instructor: "Dr. Sarah Lee",
          image: "course-img2.jpg",
          description:
            "This course offers an in-depth exploration of cybersecurity concepts, covering areas such as network security, ethical hacking, risk management, and threat mitigation. Students will work hands-on with tools like Wireshark, Kali Linux, and Metasploit to understand vulnerabilities, practice ethical hacking, and implement effective defense strategies. The curriculum includes real-world case studies, simulations, and projects designed to prepare students for roles in cybersecurity.",
          targetAudience: [
            {
              group: "Aspiring Cybersecurity Specialists",
              description:
                "Individuals aiming to start a career in cybersecurity, including ethical hacking, threat analysis, and system protection.",
            },
            {
              group: "IT Professionals",
              description:
                "System administrators and network engineers looking to strengthen their security skills and protect their organizations.",
            },
            {
              group: "Business Executives",
              description:
                "Managers and executives interested in understanding cybersecurity risks to make informed decisions and protect their assets.",
            },
            {
              group: "Students in Computer Science",
              description:
                "Students studying computer science, information systems, or related fields who want to specialize in cybersecurity.",
            },
            {
              group: "Compliance Officers",
              description:
                "Professionals responsible for ensuring company policies align with cybersecurity laws, standards, and best practices.",
            },
            {
              group: "Tech Enthusiasts",
              description:
                "Individuals with a passion for security who want to learn how to protect systems and data from potential threats.",
            },
          ],
        },
      ],
    };
  },
  methods: {
    showOverview() {
      this.overviewExpanded = true;
      this.reviewExpanded = false;
    },
    showReview() {
      this.reviewExpanded = true;
      this.overviewExpanded = false;
    },
    toggleSection(index) {
      this.sections[index].expanded = !this.sections[index].expanded;
    },
  },
  mounted() {
    const courseId = this.$route.params.id;
    const foundCourse = this.courseList.find(
      (course) => course.id === courseId
    );
    if (foundCourse) {
      this.course = foundCourse;
    }
  },
};
</script>
