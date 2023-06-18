<script setup>
const { data } = await useAsyncData("home", () =>
  queryContent("/blogs").sort({ _id: -1 }).find()
);
const formatedData = computed(() => {
  return data.value.map((articles) => {
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
  <div class="container max-w-5xl mx-auto text-zinc-600">
    <BlogHero />
    <div>
      <template v-for="post in formatedData" :key="post.title">
        <BlogCard
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
  </div>
</template>
