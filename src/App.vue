<script setup>
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import AppLayout from './components/AppLayout.vue'
import courses from './courses/index.js'

const route = useRoute()
const isHome = computed(() => route.path === '/')

const currentMenu = computed(() => {
  return courses.find(c => route.path.startsWith(c.basePath))
})
</script>

<template>
  <router-view v-if="isHome" />
  <AppLayout v-else-if="currentMenu" :menu="currentMenu" />
</template>
