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
    class="flex font-ibm bg-gradient-to-r from-[#443db8] via-[#7171d2] via-33% to-[#0097ff] to-100% h-fit"
  >
    <router-link to="/projects" class="flex text-white absolute m-8 z-10 arrow"
      ><ArrowLeft :size="40" fillColor="#FBEBD9"></ArrowLeft
    ></router-link>
    <div class="mt-28 ml-20 w-full">
      <h1 class="text-white text-6xl font-semibold title">
        Minimax: TicTacToe Optimized
      </h1>
      <img
        class="w-2/3 h-1/2 object-cover rounded-md mt-8 image"
        src="/tictactoe.jpg"
        alt=""
      />
      <div class="mt-8 w-2/3 text-2xl text text-white">
        <p class="mb-8">
          Created a Tic Tac Toe Player AI using the minimax algorithm. Uses the
          most optimal strategy in order to either win or draw each game. Pygame
          section was used from Harvard's class template.
        </p>
        <p>
          View the source code
          <span class="underline"
            ><a href="https://github.com/zhangj23/TicTacToe">here</a></span
          >
        </p>
      </div>
    </div>
  </div>
</template>
