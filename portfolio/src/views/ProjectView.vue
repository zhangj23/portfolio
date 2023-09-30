<script setup>
import NavBar from "../components/Navbar.vue";
import Project from "../components/Project.vue";
const projects = [
  {
    img: "sudoku.jpg",
    path: "/sudoku",
    name: "Sudoku Image Solver",
    languages: "Python, Keras, Pillow",
    date: "07-2021",
  },
  {
    img: "",
    path: "/sudoku",
    name: "dfsdfsdf",
    languages: "Python, Keras, Pillow",
    date: "07-2021",
  },
  {
    img: "",
    path: "/sudoku",
    name: "sdfsdfsdf",
    languages: "Python, Keras, Pillow",
    date: "07-2021",
  },
  {
    img: "",
    path: "/sudoku",
    name: "sdfsdfsdf",
    languages: "Python, Keras, Pillow",
    date: "07-2021",
  },
  {
    img: "",
    path: "/sudoku",
    name: "sssss",
    languages: "Python, Keras, Pillow",
    date: "07-2021",
  },
  {
    img: "",
    path: "/sudoku",
    name: "fffff",
    languages: "Python, Keras, Pillow",
    date: "07-2021",
  },
];
</script>

<template>
  <div
    class="flex font-ibm bg-gradient-to-r from-[#443db8] via-[#7171d2] via-33% to-[#0097ff] to-100% h-fill"
  >
    <NavBar></NavBar>
    <div class="mt-28 mx-auto">
      <h1 class="text-white text-8xl text-center font-semibold">Projects</h1>
      <div class="mt-12 flex flex-wrap justify-center">
        <Project
          v-for="project in projects"
          :key="project.name"
          :image="project.img"
          :path="project.path"
          :name="project.name"
          :languages="project.languages"
          :date="project.date"
        ></Project>
      </div>
    </div>
  </div>
</template>
