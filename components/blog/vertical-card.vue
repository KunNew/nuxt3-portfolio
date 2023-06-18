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
    class="group border text-zinc-700 rounded-2xl shadow-sm overflow-hidden"
  >
    <nuxt-link :to="path">
      <NuxtImg
        :src="image"
        class="object-cover object-center rounded-t-2xl shadow-lg group-hover:scale-[1.02] transition-all duration-500"
        :alt="alt"
      />

      <div class="px-3 pb-4">
        <div class="text-black pt-3 pb-2">
          <div class="flex items-center">
            <Icon name="fa6-solid:calendar" class="mr-2" />
            {{ date }}
          </div>
          <div class="flex items-center gap-1 flex-wrap">
            <LogoTag />
            <template v-for="tag in tags" :key="tag">
              <span>#{{ tag }}</span>
            </template>
          </div>
        </div>
        <h2
          class="text-xl font-semibold text-black pb-1 group-hover:text-sky-700"
        >
          {{ title }}
        </h2>
        <p class="text-ellipsis line-clamp-2 text-base">
          {{ description }}
        </p>
        <div
          class="text-sky-700 mt-5 inline-block px-6 rounded-sm items-center py-1 border-sky-600 border text-sm hover:bg-sky-700 hover:text-white font-semibold"
        >
          <p>Read More</p>
        </div>
      </div>
    </nuxt-link>
  </article>
</template>
