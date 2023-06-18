<script setup>
import { Icon } from "#components";
</script>
<template>
  <article
    class="group rounded-2xl m-2 border overflow-hidden shadow-lg text-zinc-700"
  >
    <NuxtLink to="/">
      <div
        class="md:h-36 lg:h-48 w-full object-cover object-center hover:scale-[1.05] transition-all duration-500"
      >
        <LogoConfused />
      </div>
      <div class="p-5">
        <h2 class="text-3xl text-black pb-1 group-hover:text-sky-700">
          No Post Available
        </h2>
        <div class="flex items-center text-sky-700 pt-2">
          <p class="mr-2">Back To Home</p>
          <Icon name="fa-solid:arrow-right" />
        </div>
      </div>
    </NuxtLink>
  </article>
</template>
