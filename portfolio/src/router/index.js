import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import ProjectView from "../views/ProjectView.vue";
import ResumeView from "../views/ResumeView.vue";
import EmailView from "../views/EmailView.vue";
import SudokuView from "../views/SudokuView.vue";
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
    {
      path: "/projects/sudoku",
      component: SudokuView,
      name: "sudoku",
    },
  ],
});

export default router;
