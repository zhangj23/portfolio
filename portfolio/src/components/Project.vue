<template>
  <div class="m-4">
    <router-link :to="`/projects${path}`"
      ><img :src="image" alt="" class="object-cover w-96 rounded-md h-96"
    /></router-link>
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
});
</script>
