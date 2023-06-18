<script setup>
import { Icon } from "#components";

const setColorTheme = (newTheme) => {
  console.log(newTheme);
  useColorMode().preference = newTheme;
};
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
      <nav class="flex items-center">
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
        <!-- <button
          class="font-semibold ml-4 rounded-lg text-sm p-2.5 hover:bg-gray-100"
          @click="
            setColorTheme($colorMode.preference == 'dark' ? 'light' : 'dark')
          "
        >
          <Icon
            :name="
              $colorMode.preference == 'light'
                ? 'fa6-regular:moon'
                : 'fa6-regular:sun'
            "
            size="20"
          />
        </button> -->
      </nav>
    </div>
  </div>
</template>
