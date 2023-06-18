<script setup>
import { Icon } from "#components";

defineProps({
  title: {
    type: String,
    default: "no-title",
  },
  path: "/",
  date: {
    type: String,
    default: "no-date",
  },
  description: {
    type: String,
    default: "no-description",
  },
  image: {
    type: String,
    default: "/nuxt-blog/no-image_cyyits.png",
  },
  alt: {
    type: String,
    default: "no-alt",
  },
  ogImage: {
    type: String,
    default: "/nuxt-blog/no-image_cyyits.png",
  },
  tags: {
    type: Array,
    default: () => [],
  },
  published: {
    type: Boolean,
    default: false,
  },
});
</script>
<template>
  <article
    class="group border m-2 shadow-sm rounded-2xl overflow-hidden text-zinc-700"
  >
    <nuxt-link :to="path" class="grid grid-cols-1 gap-1 sm:grid-cols-10">
      <div class="sm:col-span-3">
        <NuxtImg
          class="h-full w-full object-cover object-center rounded-t-2xl sm:rounded-l-2xl sm:rounded-t-none shadow-lg group-hover:scale-[1.05] transition-all duration-500"
          :src="image"
        />
      </div>
      <div class="sm:col-span-7 p-5">
        <h2 class="font-semibold text-black text-xl group-hover:text-sky-700">
          {{ title }}
        </h2>
        <p class="text-ellipsis line-clamp-2">
          {{ description }}
        </p>
        <div
          class="text-black text-sm sm:space-y-2 md:space-x-6 pt-2 pb-1 md:flex"
        >
          <div class="flex items-center">
            <Icon name="fa6-solid:calendar" class="mr-2" />
            {{ date }}
          </div>
          <div class="flex flex-wrap gap-1">
            <Icon name="fa6-solid:tag" />
            <template v-for="tag in tags" :key="tag">
              <span>{{ tag }}</span>
            </template>
          </div>
        </div>

        <div class="pt-2">
          <button
            :to="path"
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
