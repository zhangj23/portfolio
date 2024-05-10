<script setup>
import ArrowLeft from "vue-material-design-icons/ArrowLeft.vue";
import { usePathStore } from "../stores/path";
import { gsap } from "gsap";
import { ref, onMounted } from "vue";

onMounted(() => {
  window.scrollTo(0, 0);
  gsap.from(".title", {
    x: -500,
    y: 500,
    opacity: 0,
    duration: 0.5,
    scale: 0.2,
  });
  gsap
    .from(".image", {
      x: -200,
      ease: "back",
      duration: 0.3,
      opacity: 0,
    })
    .delay(0.5);
  gsap
    .from(".text", {
      opacity: 0,
      y: 200,
      ease: "back",
      duration: 0.3,
    })
    .delay(0.7);
});

const pathStore = usePathStore();
pathStore.updatePath("/projects/sudoku");
</script>

<template>
  <div
    class="flex font-ibm bg-gradient-to-r from-[#28333e] via-[#333333] via-33% to-[#494848] to-100% h-screen"
  >
    <router-link to="/projects" class="flex text-white absolute m-8 z-10 arrow"
      ><ArrowLeft :size="40" fillColor="#FBEBD9"></ArrowLeft
    ></router-link>
    <div class="mt-28 ml-20 w-full">
      <h1 class="text-white text-6xl font-semibold title">
        Full Stack Developer, ClubHub
      </h1>
      <img
        class="w-2/3 h-1/3 object-cover rounded-md mt-8 image"
        src="/club.jpg"
        alt=""
      />
      <div class="mt-8 w-2/3 text">
        <p class="text-white text-2xl">
          Created a <span class="font-bold">full-stack</span> club planning
          platform with both admin and user login functionality. Used
          <span class="font-bold"> PHP</span> to build the functionality of the
          website and <span class="font-bold">mySQL</span> to store and pull
          login and club data. Specialized in web security using hashing,
          unauthorized redirect, and error handling.
        </p>
      </div>
    </div>
  </div>
</template>
