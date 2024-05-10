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
    class="flex font-ibm bg-gradient-to-r from-[#28333e] via-[#494848] via-33% to-[#333333] to-100% h-fill"
  >
    <router-link to="/projects" class="flex text-white absolute m-8 z-10 arrow"
      ><ArrowLeft :size="40" fillColor="#FBEBD9"></ArrowLeft
    ></router-link>
    <div class="mt-28 ml-20 w-full">
      <h1 class="text-white text-6xl font-semibold title">
        Sudoku Image Solver
      </h1>
      <img
        class="w-2/3 h-1/3 object-cover rounded-md mt-8 image"
        src="/sudoku.jpg"
        alt=""
      />
      <div class="mt-8 w-2/3 text-2xl text text-white">
        <p class="mb-8 font-ibm font-thin">
          Created a python program that uses
          <span class="font-bold">Tensorflow</span> and
          <span class="font-bold">PIL</span> to transform an image of a sudoku
          puzzle to a grid. Also created a model that reads different fonts and
          orientations of numbers. Used python backtracking to solve the sudoku
          puzzle.
        </p>
        <p>
          View the source code
          <span class="underline"
            ><a href="https://github.com/zhangj23/SudokuSavant">here</a></span
          >
        </p>
      </div>
    </div>
  </div>
</template>
