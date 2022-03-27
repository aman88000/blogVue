import { createWebHistory, createRouter } from "vue-router";
import HomeRoute from "./components/HomeRoute.vue";
import AboutROute from "./components/AboutRoute.vue";
import ContactRoute from "./components/ContactRoute.vue";
import ProfileRoute from "./components/ProfileRoute.vue";
import PageNotFound from "./components/PageNotFound.vue";

const routes = [
  {
    name: "HomeRoute",
    path: "/",
    component: HomeRoute,
  },
  {
    name: "AboutROute",
    path: "/about",
    component: AboutROute,
  },
  {
    name: "ContactRoute",
    path: "/contact",
    component: ContactRoute,
  },
  {
    name: "ProfileRoute",
    path: "/profile/:id",
    component: ProfileRoute,
  },
  {
    name: "PageNotFound",
    path: "/:pathMatch(.*)*",
    component: PageNotFound,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
