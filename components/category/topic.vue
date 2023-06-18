<script setup>
const route = useRoute();

const category = computed(() => {
  return route.params.category || "";
});
</script>
<template>
  <div class="container mx-auto">
    <div class="bg-[#EDEFF4] rounded-md p-6 my-4">
      <h1
        class="text-black font-semibold leading-tight text-4xl sm:text-5xl my-5"
      >
        #{{ category }}
      </h1>
    </div>
  </div>
</template>
