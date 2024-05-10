<script setup>
import NavBar from "../components/NavBar.vue";
import { usePathStore } from "../stores/path";
const pathStore = usePathStore();
pathStore.updatePath("/resume");
</script>

<template>
  <div
    class="flex font-ibm bg-gradient-to-r from-[#28333e] via-[#494848] via-33% to-[#636363] to-100% h-fit"
  >
    <NavBar></NavBar>
    <div class="mt-28 mx-auto">
      <h1 class="text-white text-6xl font-semibold text-center">Resume</h1>
      <img class="w-1/2 m-auto my-16 pb-12" src="/resume.jpg" alt="" />
    </div>
  </div>
</template>
