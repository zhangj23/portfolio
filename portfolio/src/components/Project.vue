<template>
  <div class="m-auto relative shadow-lg">
    <router-link
      @mouseenter="mOver"
      @mouseleave="mLeave"
      :to="`/projects${path}`"
      class="router overflow-hidden"
      ><img
        :src="image"
        alt=""
        :class="`object-cover w-96 rounded-md h-96 ${id}image`"
      />
      <div
        :class="`${id}text absolute bottom-0 text-[#FFFFFF] opacity-0 hidden overflow-hidden w-full`"
      >
        <h2 class="font-bold text-3xl mb-4 mx-2">{{ name }}</h2>
        <div class="text-lg flex justify-between font-jetbrains">
          <p class="left-5 mb-2 ml-2">{{ languages }}</p>
          <p class="right-5 mb-2 mr-2">{{ date }}</p>
        </div>
      </div>
    </router-link>
  </div>
</template>
<script setup>
import { gsap } from "gsap";

const props = defineProps({
  image: String,
  path: String,
  name: String,
  languages: String,
  date: String,
  id: String,
});

const mOver = () => {
  gsap.fromTo(
    `.${props.id}text`,
    { y: 100 },
    {
      y: 0,
      duration: 0,
      opacity: 100,
      display: "block",
      ease: "power2",
    }
  );
  gsap.to(`.${props.id}image`, {
    duration: 0,
    webkitFilter: "blur(4px) brightness(0.5)",
  });
};

const mLeave = () => {
  gsap.to(`.${props.id}text`, {
    duration: 0,
    opacity: 0,
    display: "none",
    y: 100,
  });
  gsap.to(`.${props.id}image`, {
    duration: 0,
    webkitFilter: "blur(0px)",
  });
};
</script>
