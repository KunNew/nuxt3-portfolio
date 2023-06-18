<script setup>
defineProps({
  title: {
    type: String,
    default: "No title available",
  },
});

// some random color for tags
const colors = ["#dc2626", "#d97706", "#65a30d", "#252525", "#D91B42"];

const getRandomInt = (min, max) => {
  min = Math.ceil(min);
  max = Math.floor(max);

  return Math.floor(Math.random() * (max - min + 1)) + min;
};
const pickColor = ref(`${colors.at(getRandomInt(0, 8))}`);
</script>
<template>
  <div
    class="bg-red-400 rounded px-8 py-2 hover:scale-[1.05] transition-all duration-300"
    :style="{ backgroundColor: '#EDEFF4', color: pickColor }"
  >
    <nuxt-link :to="`/categories/${title}`" class="font-extrabold">
      <span>#{{ title }}</span>
    </nuxt-link>
  </div>
</template>
