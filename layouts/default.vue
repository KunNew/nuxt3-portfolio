<template>
  <div class="grid-container font-spacegrotesk">
    <div class="bg-white fixed w-full z-10">
      <MainNavbar />
    </div>
    <main>
      <div class="p-12" />
      <slot />
    </main>
    <footer>
      <MainFooter />
    </footer>
  </div>
</template>

<style>
.grid-container {
  display: grid;
  grid-template-rows: 1fr auto;
  min-height: 100vh;
}
</style>
