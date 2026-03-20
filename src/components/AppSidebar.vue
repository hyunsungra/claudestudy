<script setup>
import { ref, computed } from 'vue'
import { useRoute } from 'vue-router'

const props = defineProps({
  menu: { type: Object, required: true },
  isOpen: { type: Boolean, default: false }
})

const emit = defineEmits(['close'])

const route = useRoute()
const openSections = ref(props.menu.sections.map(() => true))

function toggleSection(index) {
  openSections.value[index] = !openSections.value[index]
}

function isActive(path) {
  return route.path === `${props.menu.basePath}/${path}`
}

function onLinkClick() {
  emit('close')
}
</script>

<template>
  <aside class="sidebar" :class="{ open: isOpen }">
    <router-link to="/" class="sidebar-header" @click="onLinkClick">
      <h2>{{ menu.title }}</h2>
      <span class="home-hint">← 목록으로</span>
    </router-link>
    <nav class="sidebar-nav">
      <div v-for="(section, si) in menu.sections" :key="si" class="nav-section">
        <button class="section-title" @click="toggleSection(si)">
          <span>{{ section.title }}</span>
          <span class="arrow" :class="{ rotated: openSections[si] }">&#9656;</span>
        </button>
        <transition name="slide">
          <ul v-show="openSections[si]">
            <li v-for="item in section.items" :key="item.path">
              <router-link
                :to="`${menu.basePath}/${item.path}`"
                :class="{ active: isActive(item.path) }"
                @click="onLinkClick"
              >
                {{ item.title }}
              </router-link>
            </li>
          </ul>
        </transition>
      </div>
    </nav>
  </aside>
</template>

<style scoped>
.sidebar {
  width: 280px;
  min-width: 280px;
  height: 100vh;
  position: sticky;
  top: 0;
  background: #f8f9fa;
  border-right: 1px solid #e2e6ea;
  overflow-y: auto;
  display: flex;
  flex-direction: column;
  z-index: 100;
}

.sidebar-header {
  display: block;
  padding: 24px 20px 16px;
  border-bottom: 1px solid #e2e6ea;
  text-decoration: none;
  cursor: pointer;
  transition: background 0.15s;
}

.sidebar-header:hover {
  background: #eef1f5;
}

.home-hint {
  display: block;
  font-size: 0.75rem;
  color: #94a3b8;
  margin-top: 4px;
}

.sidebar-header:hover .home-hint {
  color: #2563eb;
}

.sidebar-header h2 {
  font-size: 1.1rem;
  font-weight: 700;
  color: #1a1a2e;
  margin: 0;
  line-height: 1.4;
}

.sidebar-nav {
  padding: 12px 0;
  flex: 1;
}

.nav-section {
  margin-bottom: 4px;
}

.section-title {
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  padding: 10px 20px;
  border: none;
  background: none;
  font-size: 0.85rem;
  font-weight: 700;
  color: #6b7280;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  cursor: pointer;
  transition: color 0.2s;
}

.section-title:hover {
  color: #374151;
}

.arrow {
  font-size: 0.75rem;
  transition: transform 0.2s;
}

.arrow.rotated {
  transform: rotate(90deg);
}

ul {
  list-style: none;
  padding: 0;
  margin: 0;
}

li a {
  display: block;
  padding: 8px 20px 8px 28px;
  color: #4b5563;
  text-decoration: none;
  font-size: 0.92rem;
  line-height: 1.5;
  border-left: 3px solid transparent;
  transition: all 0.15s;
}

li a:hover {
  color: #1a1a2e;
  background: #e8ecf1;
}

li a.active {
  color: #2563eb;
  background: #eff4ff;
  border-left-color: #2563eb;
  font-weight: 600;
}

.slide-enter-active,
.slide-leave-active {
  transition: all 0.2s ease;
  overflow: hidden;
}
.slide-enter-from,
.slide-leave-to {
  opacity: 0;
  max-height: 0;
}
.slide-enter-to,
.slide-leave-from {
  opacity: 1;
  max-height: 500px;
}

@media (max-width: 768px) {
  .sidebar {
    position: fixed;
    left: 0;
    top: 0;
    transform: translateX(-100%);
    transition: transform 0.3s ease;
    box-shadow: none;
  }
  .sidebar.open {
    transform: translateX(0);
    box-shadow: 4px 0 24px rgba(0, 0, 0, 0.15);
  }
}
</style>
