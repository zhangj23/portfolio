<script setup>
import NavBar from "../components/NavBar.vue";
import gsap from "gsap";
import { ref, onMounted } from "vue";
import { usePathStore } from "../stores/path";
const pathStore = usePathStore();
pathStore.updatePath("/");
console.log(pathStore.getPrevious);
onMounted(() => {
  gsap.from(".heading", {
    x: -1000,
    ease: "back",
  });
  gsap
    .from(".caption", {
      opacity: 0,
      duration: 2,
    })
    .delay(1);
});
</script>

<template>
  <div
    class="flex bg-gradient-to-r from-[#28333e] via-[#333333] via-33% to-[#494848] to-100% h-full"
  >
    <NavBar></NavBar>
    <div class="text-[#FBEBD9] w-4/5 md:w-3/4 xl:w-1/2 m-auto">
      <h1 class="text-3xl md:text-5xl mb-2 font-bold font-ibm heading">
        Hello,
      </h1>
      <h1 class="text-3xl md:text-5xl font-bold font-ibm heading">
        I'm Justin Zhang
      </h1>
      <h3 class="mt-10 font-jetbrains caption">
        I'm a sophomore at Renesslaer Polytechnic Institute pursuing a major in
        Computer Science and ITWS. Take a look around!
      </h3>
    </div>
  </div>
</template>
