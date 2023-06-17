<script setup></script>
<template>
  <div class="py-5">
    <div class="container sm:grid px-6 py-5 grid-cols-8 max-w-5xl mx-auto">
      <div class="max-w-md col-span-5">
        <div class="flex justify-between">
          <div>
            <h1 class="text-xl sm:text-4xl font-bold pb-2">Nong Noreakun</h1>
            <div class="flex items-center pb-10 space-x-3">
              <NuxtLink
                to="https://github.com/KunNew"
                target="_blank"
                class="p-2 bg-gray-300 rounded-md"
                aria-label="Github"
              >
                <Icon name="fa:github" size="1em" />
              </NuxtLink>
              <div>
                <NuxtLink
                  to="https://www.instagram.com/pheakk05"
                  target="_blank"
                  class="p-2 bg-gray-300 rounded-md"
                  aria-label="Github"
                >
                  <Icon name="fa:instagram" size="1em" />
                </NuxtLink>
              </div>
              <div>
                <NuxtLink
                  to="https://web.facebook.com/ph.eak.56027"
                  target="_blank"
                  class="p-2 bg-gray-300 rounded-md"
                  aria-label="Github"
                >
                  <Icon name="fa:facebook" size="1em" />
                </NuxtLink>
              </div>
            </div>
          </div>
          <div class="sm:hidden block col-span-3 pb-5">
            <NuxtImg
              src="/profile.jpeg"
              width="125"
              height="115"
              quality="50"
              class="rounded-md"
            />
          </div>
        </div>
        <h3 class="text-base sm:text-3xl font-semibold pb-6 sm:pb-12">
          Web Developer at
          <span class="text-orange-500 font-bold">Rabbit Technology</span>
        </h3>
        <p>
          Hello, I'm Kun! I'm a web developer who create any system for client.
        </p>
      </div>
      <div class="hidden sm:block col-span-3">
        <NuxtImg
          src="/profile.jpeg"
          width="450"
          height="500"
          quality="50"
          class="rounded-md"
        />
      </div>
    </div>
  </div>
</template>
