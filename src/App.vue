<template>
  <div class="container">
    <RouterView />
  </div>
  <section id="modal" />
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

.container {
  max-width: 96vw;
  margin-left: auto;
  margin-right: auto;
  display: grid;
  grid-template-columns: max-content;
  grid-row-gap: 16px;
  place-content: center;
}
</style>
