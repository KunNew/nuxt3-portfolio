<script setup>
const route = useRoute();

const category = computed(() => {
  return route.params.category || "";
});
const { data } = await useAsyncData("home", () =>
  queryContent("/blogs")
    .where({ tags: { $contains: category.value } })
    .find()
);

const formatedData = computed(() => {
  return data.value?.map((articles) => {
    return {
      path: articles._path,
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
});
</script>
<template>
  <main class="container mx-auto max-w-5xl text-zinc-700">
    <CategoryTopic />
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
      <template v-for="post in formatedData" :key="post.title">
        <BlogVerticalCard
          :path="post.path"
          :title="post.title"
          :date="post.date"
          :description="post.description"
          :image="post.image"
          :alt="post.alt"
          :og-image="post.ogImage"
          :tags="post.tags"
          :published="post.published"
        />
      </template>
    </div>
    <template v-if="data?.length === 0">
      <BlogEmpty />
    </template>
  </main>
</template>
