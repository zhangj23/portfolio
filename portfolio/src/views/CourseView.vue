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
    class="flex font-ibm bg-gradient-to-r from-[#443db8] via-[#7171d2] via-33% to-[#0097ff] to-100% h-screen"
  >
    <router-link to="/projects" class="flex text-white absolute m-8 z-10 arrow"
      ><ArrowLeft :size="40" fillColor="#FBEBD9"></ArrowLeft
    ></router-link>
    <div class="mt-28 ml-20 w-full">
      <h1 class="text-white text-6xl font-semibold title">
        Backend Developer, Course Selection
      </h1>
      <img
        class="w-2/3 h-1/3 object-cover rounded-md mt-8 image"
        src="/course.jpg"
        alt=""
      />
      <div class="mt-8 w-2/3 text">
        <p class="text-white text-2xl">
          Pioneered a new <span class="font-bold">full-stack</span> course
          selection platform for the school to be used by 1300+ students
          annually. Worked with <span class="font-bold">Django</span> as the
          main framework while using <span class="font-bold">GraphQL</span> and
          <span class="font-bold">Postgres</span> to store user and school data.
          Optimized server costs using
          <span class="font-bold">dataloaders</span> and created front-end
          animations.
        </p>
      </div>
    </div>
  </div>
</template>
