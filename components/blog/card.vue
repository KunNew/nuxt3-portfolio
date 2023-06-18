<script setup>
import { Icon } from "#components";
</script>
<template>
  <article
    class="group border m-2 shadow-sm rounded-2xl overflow-hidden text-zinc-700"
  >
    <nuxt-link to="/blogs/123" class="grid grid-cols-1 gap-1 sm:grid-cols-10">
      <div class="sm:col-span-3">
        <NuxtImg
          class="h-full w-full object-cover object-center rounded-t-2xl sm:rounded-l-2xl sm:rounded-t-none shadow-lg group-hover:scale-[1.05] transition-all duration-500"
          src="/blogs-img/blog3.webp"
        />
      </div>
      <div class="sm:col-span-7 p-5">
        <h2 class="font-semibold text-black text-xl group-hover:text-sky-700">
          How To Create Namespace Subdomain & Connect To Vercel App
        </h2>
        <p class="text-ellipsis line-clamp-2">
          Vue.js is a popular JavaScript framework for building web
          applications. In this blog post, we will introduce you to some of the
          awesome libraries for Vue.js in different...
        </p>
        <div
          class="text-black text-sm sm:space-y-2 md:space-x-6 pt-2 pb-1 md:flex"
        >
          <div class="flex items-center">
            <Icon name="fa6-solid:calendar" class="mr-2" />
            {{ new Date() }}
          </div>
          <div class="flex flex-wrap gap-1">
            <Icon name="fa6-solid:tag" />
            <span>Nuxt</span>
          </div>
        </div>

        <div class="pt-2">
          <button
            class="bg-[#D91B42] flex items-center font-semibold rounded text-white py-1 px-8 text-sm hover:rotate-2"
          >
            <span class="mr-2">Read More</span>
            <Icon name="fa6-solid:arrow-right" />
          </button>
        </div>
      </div>
    </nuxt-link>
  </article>
</template>
