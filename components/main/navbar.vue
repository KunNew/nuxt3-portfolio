<script setup>
import { Icon } from "#components";
</script>
<template>
  <div class="py-5 border-b font-semibold">
    <div
      class="flex items-baseline justify-between container px-6 max-w-5xl mx-auto"
    >
      <div class="text-lg sm:text-2xl font-extrabold text-gray-800">
        <NuxtLink to="/"
          >Pheak <span class="text-sky-700">Dev <Icon name="🚀" /> </span
        ></NuxtLink>
      </div>
      <ul class="flex items-center text-sm sm:text-lg space-x-3 sm:space-x-6">
        <li>
          <NuxtLink to="/blogs"> Blogs </NuxtLink>
        </li>
        <!-- <li>
          <NuxtLink to="/categories"> Categories </NuxtLink>
        </li> -->
        <li>
          <NuxtLink to="/about"> About </NuxtLink>
        </li>
      </ul>
    </div>
  </div>
</template>
