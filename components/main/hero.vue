<script setup>
import { Icon } from "#components";
</script>
<template>
  <div class="container mx-auto">
    <div class="grid grid-cols-1 sm:grid-cols-2 items-center">
      <div class="p-6">
        <h1
          class="text-black font-semibold leading-tight text-4xl md:text-5xl mb-6"
        >
          Welcome To <span class="text-sky-600">Pheak Dev</span>
        </h1>

        <p class="text-black/80">
          Get Web Development, Javascript, Typescript, NodeJs, Vue, and Nuxt JS,
          Related Articles, Tips, Learning resources and more.
        </p>
        <div class="py-3">
          <button
            class="bg-sky-600 flex items-center text-white font-bold text-sm rounded py-2 px-8"
          >
            Download CV
            <Icon
              name="fa-solid:arrow-alt-circle-down"
              class="ml-2"
              size="20"
            />
          </button>
        </div>
      </div>
      <div class="px-6 justify-self-center">
        <img
          class="object-cover w-[350px] rounded-3xl"
          src="~/assets/images/avatar.dcc53a5c.jpg"
        />
      </div>
    </div>
  </div>
</template>
