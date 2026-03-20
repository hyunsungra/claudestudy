<script setup>
import HelloWorld from './components/HelloWorld.vue'
</script>

<template>
  <header>
    <div class="wrapper">
      <h1>Claude Study</h1>
    </div>
  </header>

  <main>
    <HelloWorld msg="You did it!" />
  </main>
</template>

<style scoped>
header {
  line-height: 1.5;
}

h1 {
  font-weight: 500;
  font-size: 2.6rem;
  text-align: center;
}

main {
  display: flex;
  justify-content: center;
  padding: 2rem;
}
</style>
