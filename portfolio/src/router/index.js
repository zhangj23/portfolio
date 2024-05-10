import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import ProjectView from "../views/ProjectView.vue";
import ResumeView from "../views/ResumeView.vue";
import EmailView from "../views/EmailView.vue";
import SudokuView from "../views/SudokuView.vue";
import CourseView from "../views/CourseView.vue";
import OpggView from "../views/OpggView.vue";
import TicTacToeView from "../views/TicTacToeView.vue";
import ClubView from "../views/ClubView.vue";
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
    {
      path: "/projects/course-selection",
      component: CourseView,
      name: "course",
    },
    {
      path: "/projects/opgg",
      component: OpggView,
      name: "Opgg",
    },
    {
      path: "/projects/tictactoe",
      component: TicTacToeView,
      name: "TicTacToe",
    },
    {
      path: "/projects/club",
      component: ClubView,
      name: "Club",
    },
  ],
});

export default router;
