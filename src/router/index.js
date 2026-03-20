import { createRouter, createWebHistory } from 'vue-router'
import Home from '../pages/Home.vue'

const coursePages = import.meta.glob('../courses/**/*.vue')

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  ...Object.keys(coursePages).map(path => {
    // "../courses/claude-basics/05-getting-started.vue"
    //  → "/claude-basics/05-getting-started"
    const match = path.match(/\/courses\/([\w-]+)\/([\w-]+)\.vue$/)
    if (!match) return null
    return {
      path: `/${match[1]}/${match[2]}`,
      component: coursePages[path]
    }
  }).filter(Boolean)
]

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior() {
    return { top: 0 }
  }
})

export default router
