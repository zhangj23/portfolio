import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import ProjectView from "../views/ProjectView.vue";
import ResumeView from "../views/ResumeView.vue";
import EmailView from "../views/EmailView.vue";
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/resume",
      name: "resume",
      component: ResumeView,
    },
    {
      path: "/projects",
      name: "project",
      component: ProjectView,
    },
    {
      path: "/email",
      name: "email",
      component: EmailView,
    },
  ],
});

export default router;
