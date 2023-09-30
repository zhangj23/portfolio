<template>
  <div class="m-4">
    <img :src="image" alt="" class="w-96 rounded-md h-96" />
  </div>
</template>
<script setup>
const props = defineProps({
  image: String,
  path: String,
  name: String,
  languages: String,
  date: String,
});
</script>
