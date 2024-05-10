<script setup>
import Project from "../components/Project.vue";
import gsap from "gsap";
import { onMounted, onUnmounted, ref } from "vue";
import Home from "vue-material-design-icons/Home.vue";
import FileDocumentOutline from "vue-material-design-icons/FileDocumentOutline.vue";
import Github from "vue-material-design-icons/Github.vue";
import FilePresentationBox from "vue-material-design-icons/FilePresentationBox.vue";
import Linkedin from "vue-material-design-icons/Linkedin.vue";
import EmailOutline from "vue-material-design-icons/EmailOutline.vue";
import Handshake from "vue-material-design-icons/Handshake.vue";
import ArrowLeft from "vue-material-design-icons/ArrowLeft.vue";
import { useRouter } from "vue-router";
import { usePathStore } from "../stores/path";

const router = useRouter();

const cards = ref();
onMounted(() => {
  const pathStore = usePathStore();
  console.log(pathStore.getPrevious);
  if (pathStore.getPrevious == "/" || pathStore.getPrevious == "/resume") {
    gsap.from(".title", {
      x: -400,
      duration: 1,
      y: -100,
      scale: 1 / 4,
      ease: "power4",
    });
  }
  gsap.to(".link", { y: -10000 });

  gsap
    .from(".arrow", {
      x: -100,
      duration: 0.5,
      ease: "back",
    })
    .delay(0.8);
  gsap
    .from(".project-card", {
      opacity: 0,
      y: 300,
      stagger: 0.2,
      ease: "back",
      duration: 0.3,
    })
    .delay(0.4);
  pathStore.updatePath("/projects");
});

const projects = [
  {
    id: "sudoku",
    img: "sudoku.jpg",
    path: "/sudoku",
    name: "Sudoku Image Solver",
    languages: "Python, Keras, Pillow",
    date: "07-2021",
  },
  {
    id: "course",
    img: "course.jpg",
    path: "/course-selection",
    name: "Course Selection Website",
    languages: "Vue3, Django, GraphQL",
    date: "06-2023",
  },
  {
    id: "opgg",
    img: "opgg.jpg",
    path: "/opgg",
    name: "User authentication and APIs",
    languages: "Firebase, Vue2, GSAP",
    date: "04-2022",
  },
  {
    id: "tictactoe",
    img: "tictactoe.jpg",
    path: "/tictactoe",
    name: "Minimax: TicTacToe Optimized",
    languages: "Python, Pygame",
    date: "07-2021",
  },
  {
    id: "club",
    img: "club.jpg",
    path: "/club",
    name: "SQL login system: ClubHub",
    languages: "PHP, mySQL",
    date: "04-2024",
  },
];
</script>

<template>
  <div
    class="flex font-ibm bg-gradient-to-r from-[#28333e] via-[#333333] via-33% to-[#494848] to-100% h-fill"
  >
    <router-view></router-view>
    <router-link to="/" class="flex text-white absolute m-8 z-10 arrow"
      ><ArrowLeft :size="40" fillColor="#FBEBD9"></ArrowLeft
    ></router-link>
    <div class="w-full absolute flex p-8 justify-between">
      <div class="right-side flex" ref="right">
        <router-link to="/" class="flex text-white mr-8 link">
          <Home :size="40" fillColor="#FBEBD9"></Home
          ><span class="m-auto text-xl m-2">Home</span>
        </router-link>
        <div class="flex text-white mr-8">
          <FilePresentationBox
            :size="40"
            fillColor="#FBEBD9"
            class="link"
          ></FilePresentationBox>
          <!-- <span class="m-auto text-xl m-2">Projects</span> -->
        </div>
        <router-link to="/resume" class="flex text-white link">
          <FileDocumentOutline
            :size="40"
            fillColor="#FBEBD9"
          ></FileDocumentOutline>
          <span class="m-auto text-xl m-2">Resume</span>
        </router-link>
      </div>
      <div class="socials flex">
        <h2 class="text-white text-xl font-semibold m-auto mr-4">
          Connect with me:
        </h2>
        <!-- <router-link to="/email" class="mx-4"
          ><EmailOutline :size="48" fillColor="#FBEBD9"></EmailOutline
        ></router-link> -->
        <a class="mx-4" href="https://github.com/zhangj23"
          ><Github :size="48" fillColor="#FBEBD9"></Github
        ></a>
        <a
          class="mx-4"
          href="https://www.linkedin.com/in/justin-zhang-94a406256/"
          ><Linkedin :size="48" fillColor="#FBEBD9"></Linkedin
        ></a>
        <a class="mx-4" href="https://rpi.joinhandshake.com/stu/users/51963642"
          ><Handshake :size="48" fillColor="#FBEBD9"></Handshake
        ></a>
      </div>
    </div>

    <div class="mt-28 flex justify-center flex-col m-auto">
      <h1 class="text-white text-8xl text-center font-semibold title">
        Projects
      </h1>
      <div class="grid-cols-3 grid gap-8 my-12">
        <Project
          v-for="project in projects"
          :key="project.name"
          :image="project.img"
          :path="project.path"
          :name="project.name"
          :languages="project.languages"
          :date="project.date"
          :id="project.id"
          class="project-card"
          ref="cards"
        ></Project>
      </div>
    </div>
  </div>
</template>
