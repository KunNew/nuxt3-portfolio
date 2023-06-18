<script setup>
import { Icon } from "#components";
const { path } = useRoute();
const articles = await queryContent(path).findOne();

const data = computed(() => {
  return {
    title: articles.title || "no-title available",
    description: articles.description || "no-descriptoin available",
    image: articles.image || "/nuxt-blog/no-image_cyyits.png",
    alt: articles.alt || "no alter data available",
    ogImage: articles.ogImage || "/nuxt-blog/no-image_cyyits.png",
    date: articles.date || "not-date-available",
    tags: articles.tags || [],
    published: articles.published || false,
  };
});
</script>
<template>
  <main class="px-6 container max-w-5xl mx-auto">
    <header>
      <h1 class="text-xl sm:text-3xl md:text-4xl m-7 font-bold text-center">
        {{ data.title || "" }}
      </h1>
      <NuxtImg
        :src="data.image || ''"
        :alt="data.alt || ''"
        class="object-cover m-auto rounded-2xl h-52 md:h-96 content-center w-4/5"
      />
      <p
        class="text-xs sm:text-sm text-center mx-auto max-w-3xl my-3 text-zinc-600"
      >
        Here we will learn, How To Create Namespace Subdomain & Connect To
        Vercel App
      </p>
      <div class="flex justify-center w-full my-8 md:text-base text-sm">
        <div class="text-black text-xs gap-8 content-center sm:text-sm md:flex">
          <div class="flex items-center font-semibold">
            <Icon name="fa6-solid:calendar" class="mr-2" />
            <p>{{ data.date || "" }}</p>
          </div>
          <div class="flex items-center gap-2 my-5 flex-wrap">
            <Icon name="fa6-solid:tag" />
            <template v-for="tag in data.tags" :key="tag">
              <span class="bg-gray-200 rounded-md px-2 py-1 font-semibold">{{
                tag
              }}</span>
            </template>
          </div>
        </div>
      </div>
    </header>
    <div
      class="prose prose-pre:max-w-xs sm:prose-pre:max-w-full prose-sm sm:prose-base md:prose-lg prose-h1:no-underline max-w-5xl mx-auto prose-zinc prose-img:rounded-lg"
    >
      <ContentRenderer :value="articles">
        <template #empty>
          <p>No content found.</p>
        </template>
      </ContentRenderer>
    </div>
  </main>
</template>
