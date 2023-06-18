<script setup>
const topics = [
  "javascript",
  "typescript",
  "git",
  "docker",
  "vue",
  "nuxt",
  "pinia",
  "vuex",
  "firebase",
  "supabse",
  "vercel",
  "namecheap",
];
</script>
<template>
  <div class="container max-w-5xl mx-auto text-zinc-600">
    <CategoryHero />
    <div class="px-6 mt-12 flex flex-wrap gap-3">
      <template v-for="topic in topics" :key="topic">
        <CategoryCard :title="topic" />
      </template>
    </div>
  </div>
</template>
