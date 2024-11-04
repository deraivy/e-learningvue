<template>
  <div>
    <!-- banner starts -->
    <div
      class="py-10 flex justify-center items-center relative overflow-hidden h-screen"
    >
      <div class="container mx-auto px-4 md:px-6 lg:px-16">
        <div
          class="grid grid-cols-1 lg:grid-cols-2 gap-6 items-center justify-center"
        >
          <div class="text-center lg:text-left lg:w-10/12 space-y-6">
            <h2
              class="font-bebas-neue uppercase text-5xl sm:text-6xl font-black leading-tight text-gray-800"
            >
              Complete Your Dreams Today!
            </h2>
            <p class="text-gray-600 my-4 text-lg sm:text-xl">
              Learn any coding program from anywhere at an affordable price. You
              won’t be alone in your studies; our support is just a reach away.
            </p>
            <button
              class="bg-black text-white py-3 px-6 rounded-lg shadow-lg hover:bg-gray-800 transition duration-200"
              @click="getStarted"
            >
              Get Started
            </button>
          </div>

          <div class="hidden sm:block sm:w-1/2 lg:w-3/5 relative">
            <img
              src="../assets/main-banner3.png"
              class="max-w-full md:max-w-md lg:max-w-lg xl:max-w-xl m-auto"
              alt="Programming Banner"
            />
          </div>
        </div>
      </div>
    </div>
    <!-- banner ends -->

    <!-- about starts -->
    <section id="about" class="container mx-auto my-20 px-4 md:px-6 lg:px-16">
      <div class="grid grid-cols-1 md:grid-cols-2 gap-12">
        <div>
          <img src="../assets/about.jpg" class="w-full rounded-md" />
        </div>
        <div class="flex items-center justify-between">
          <div>
            <h2 class="text-2xl lg:text-4xl font-bold">
              Develop Your Skills, Learn Something New, and Grow Your Skills
              From Anywhere in the World!
            </h2>
            <p class="my-4">
              We understand better that online-based learning can make a
              significant change to reach students from all over the world!
              Giving options to learn better always can offer the best outcomes!
            </p>
            <ul class="space-y-2">
              <li class="flex items-center">
                <!-- <img
                  src="/icon/world-2-svgrepo-com (1).svg"
                  alt=""
                  class="w-6 h-6 mr-2"
                /> -->
                <span>Available worldwide</span>
              </li>
              <li class="flex items-center">
                <!-- <img src="/icon/remote.svg" alt="" class="w-8 h-8 mr-2" /> -->
                <span>Remote Learning</span>
              </li>
              <li class="flex items-center">
                <!-- <img src="/icon/timer.svg" alt="" class="w-5 h-5 mr-2" /> -->
                <span>Lifetime access</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>

    <!-- about ends -->

    <!-- features section -->
    <section class="bg-[#f8f9f8] p-8 md:p-16 lg:p-26">
      <div class="container mx-auto my-10 md:my-16 px-4 md:px-6 lg:px-16">
        <div>
          <p class="uppercase text-center text-sm text-red-500">
            EDUCATION FOR EVERYONE
          </p>
          <h2
            class="text-2xl text-center md:text-3xl lg:text-4xl font-bold my-4 md:w-8/12 lg:w-5/12 mx-auto"
          >
            Online Coaching Lessons For Remote Learning
          </h2>
          <p
            class="text-center text-sm md:text-base md:w-10/12 lg:w-6/12 mx-auto"
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </div>
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-8">
          <div
            class="bg-white shadow-lg w-full rounded-lg font-[sans-serif] overflow-hidden mx-auto mt-4"
          >
            <div
              class="relative p-6 bg-cover bg-center h-64 bg-no-repeat"
              style="
                background-image: url('/path/to/your/background-image.svg');
              "
            >
              <img
                src="/icon/world-2-svgrepo-com (1).svg"
                alt="World Icon"
                class="mb-4"
              />
              <h3 class="text-lg font-semibold">
                Enjoy Learning From Anywhere
              </h3>
              <p class="mt-2 text-sm leading-relaxed">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                auctor auctor arcu, at fermentum dui. Maecenas
              </p>
            </div>
          </div>
          <div
            class="bg-white shadow-lg w-full rounded-lg font-[sans-serif] overflow-hidden mx-auto mt-4"
          >
            <div class="p-6">
              <img src="/icon/shield.svg" alt="" class="mb-4" />
              <h3 class="text-lg font-semibold">Learn From Industry Experts</h3>
              <p class="mt-2 text-sm leading-relaxed">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                auctor auctor arcu, at fermentum dui. Maecenas
              </p>
            </div>
          </div>
          <div
            class="bg-white shadow-lg w-full rounded-lg font-[sans-serif] overflow-hidden mx-auto mt-4"
          >
            <div class="p-6">
              <img src="/icon/setting.svg" alt="" class="mb-4" />
              <h3 class="text-lg font-semibold">Learn the Latest Skills</h3>
              <p class="mt-2 text-sm leading-relaxed">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                auctor auctor arcu, at fermentum dui. Maecenas
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- courses starts -->
    <section
      id="courses"
      class="container mx-auto my-8 px-4 md:px-6 lg:px-16 mt-20"
    >
      <div class="text-center my-6">
        <p class="text-sm text-red-500 my-2 uppercase">Go at your own pace</p>
        <h2 class="text-2xl lg:text-4xl font-bold my-4">Available Courses</h2>
        <p class="text-center w-6/12 mx-auto">
          Explore all of our courses and pick your suitable ones to enroll and
          start learning with us! We ensure that you will never regret it!
        </p>
      </div>

      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        <AcademyCard
          v-for="course in courses"
          :key="course.id"
          :course="course"
        />
      </div>
    </section>
    <!-- courses end -->
  </div>
</template>

<script>
import AcademyCard from "../components/AcademyCard.vue";

export default {
  name: "CourseList",
  components: {
    AcademyCard,
  },
  data() {
    return {
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
    getStarted() {
      this.$router.push({ name: "CourseList" });
    },
  },
};
</script>
