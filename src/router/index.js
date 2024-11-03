import Vue from "vue";
import store from "@/store";
import VueRouter from "vue-router";
import CourseList from "../views/CourseList.vue";
import MyApplication from "../views/MyApplication.vue";
import ViewApplication from "../views/ViewApplication.vue";
import CourseForm from "../views/CourseForm.vue";
import Login from "../views/Login.vue";
import CourseDetails from "../views/CourseDetails.vue";
import nProgress from "nprogress";
import NotFound from "../views/NotFound.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "CourseList",
    component: CourseList,
    meta: { requiresAuth: false },
  },
  {
    path: "/my-application/:id",
    name: "my-application",
    component: MyApplication,
    meta: { requiresAuth: false },
  },
  {
    path: "/course/:id",
    name: "course-form",
    component: CourseForm,
    meta: { requiresAuth: false },
    props: true,
  },
  {
    path: "/course-details/:id",
    name: "course-details",
    component: CourseDetails,
    meta: { requiresAuth: false },
    props: true,
  },
  {
    path: "/view-application",
    name: "view-application",
    component: ViewApplication,
    meta: { requiresAuth: true, requiresAdmin: true }, // Only for admins
    props: true,
  },
  {
    path: "/login",
    name: "login",
    component: Login,
    meta: { requiresAuth: false },
  },
  {
    path: "/404",
    name: "404",
    component: NotFound,
    props: true,
  },
  {
    path: "*",
    redirect: { name: "404", params: { resource: "page" } },
  },
];

const router = new VueRouter({
  routes,
  mode: "history",

  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition;
    } else {
      return { x: 0, y: 0 };
    }
  },
});

router.beforeEach((to, from, next) => {
  nProgress.start(); // Start nProgress here

  const requiresAuth = to.meta.requiresAuth;
  const requiresAdmin = to.meta.requiresAdmin;

  // Check if route requires authentication and user is not authenticated
  if (requiresAuth && !store.getters.isAuthenticated) {
    next({ name: "login" });
  }
  // Check if route requires admin access and user is not an admin
  else if (requiresAdmin && !store.getters.isAdmin) {
    alert("Access denied: Admins only");
    next({ name: "CourseList" }); // Redirect non-admin users
  } else {
    next();
  }
});

router.afterEach(() => {
  nProgress.done(); // Complete nProgress after navigation
});

export default router;
