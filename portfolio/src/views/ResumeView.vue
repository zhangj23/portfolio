<script setup>
import NavBar from "../components/Navbar.vue";
import { usePathStore } from "../stores/path";
const pathStore = usePathStore();
pathStore.updatePath("/resume");
</script>

<template>
  <div
    class="flex font-ibm bg-gradient-to-r from-[#443db8] via-[#7171d2] via-33% to-[#0097ff] to-100% h-fit"
  >
    <NavBar></NavBar>
    <div class="mt-28 mx-auto">
      <h1 class="text-white text-6xl font-semibold text-center">Resume</h1>
      <img class="w-1/2 m-auto my-16 pb-12" src="resume.jpg" alt="" />
    </div>
  </div>
</template>
