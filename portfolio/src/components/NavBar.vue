<template>
  <div class="w-full absolute flex p-8 justify-between">
    <div class="right-side flex">
      <router-link to="/" class="flex text-white mr-8 link">
        <Home :size="40" fillColor="#FBEBD9"></Home
        ><span class="m-auto text-xl m-2">Home</span>
      </router-link>
      <router-link to="/projects" class="flex text-white mr-8 link">
        <FilePresentationBox
          :size="40"
          fillColor="#FBEBD9"
        ></FilePresentationBox>
        <span class="m-auto text-xl m-2">Projects</span>
      </router-link>
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
      <a class="mx-4" href="https://www.linkedin.com/in/justin-zhang-94a406256/"
        ><Linkedin :size="48" fillColor="#FBEBD9"></Linkedin
      ></a>
      <a class="mx-4" href="https://rpi.joinhandshake.com/stu/users/51963642"
        ><Handshake :size="48" fillColor="#FBEBD9"></Handshake
      ></a>
    </div>
  </div>
</template>
<script setup>
import Home from "vue-material-design-icons/Home.vue";
import FileDocumentOutline from "vue-material-design-icons/FileDocumentOutline.vue";
import Github from "vue-material-design-icons/Github.vue";
import FilePresentationBox from "vue-material-design-icons/FilePresentationBox.vue";
import Linkedin from "vue-material-design-icons/Linkedin.vue";
import EmailOutline from "vue-material-design-icons/EmailOutline.vue";
import Handshake from "vue-material-design-icons/Handshake.vue";
import { useRoute } from "vue-router";
import { ref, onMounted } from "vue";
import gsap from "gsap";

onMounted(() => {
  const route = useRoute();
  console.log(route.path);
  if (route.path == "/") {
    gsap.from(".link", {
      y: -300,
      stagger: 0.2,
      ease: "back",
    });
  }
});

const checkHome = function () {
  console.log();
};
const checkProject = function () {};
const checkResume = function () {};
</script>
