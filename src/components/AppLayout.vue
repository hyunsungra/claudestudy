<script setup>
import { ref, watch, nextTick } from 'vue'
import { useRoute } from 'vue-router'
import AppSidebar from './AppSidebar.vue'

defineProps({
  menu: { type: Object, required: true }
})

const route = useRoute()
const sidebarOpen = ref(false)

function toggleSidebar() {
  sidebarOpen.value = !sidebarOpen.value
}

function closeSidebar() {
  sidebarOpen.value = false
}

function addCopyButtons() {
  document.querySelectorAll('.code-block').forEach(block => {
    if (block.querySelector('.copy-btn')) return
    const pre = block.querySelector('pre')
    if (!pre) return

    const btn = document.createElement('button')
    btn.className = 'copy-btn'
    btn.textContent = '복사'
    btn.addEventListener('click', async () => {
      try {
        await navigator.clipboard.writeText(pre.textContent)
        btn.textContent = '복사됨!'
        btn.classList.add('copied')
        setTimeout(() => {
          btn.textContent = '복사'
          btn.classList.remove('copied')
        }, 2000)
      } catch {
        btn.textContent = '실패'
        setTimeout(() => { btn.textContent = '복사' }, 2000)
      }
    })

    const label = block.querySelector('.code-label')
    if (label) {
      label.style.position = 'relative'
      label.appendChild(btn)
    } else {
      block.style.position = 'relative'
      block.appendChild(btn)
    }
  })
}

watch(() => route.path, () => {
  nextTick(() => {
    setTimeout(addCopyButtons, 100)
  })
}, { immediate: true })
</script>

<template>
  <div class="layout">
    <!-- Mobile header -->
    <header class="mobile-header">
      <button class="menu-btn" @click="toggleSidebar" aria-label="메뉴 열기">
        <span class="hamburger"></span>
      </button>
      <span class="mobile-title">{{ menu.title }}</span>
    </header>

    <!-- Overlay -->
    <div class="overlay" :class="{ visible: sidebarOpen }" @click="closeSidebar"></div>

    <!-- Sidebar -->
    <AppSidebar :menu="menu" :is-open="sidebarOpen" @close="closeSidebar" />

    <!-- Main content -->
    <main class="main-content">
      <div class="content-wrapper">
        <router-view />
      </div>
    </main>
  </div>
</template>

<style scoped>
.layout {
  display: flex;
  min-height: 100vh;
}

.mobile-header {
  display: none;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  height: 56px;
  background: #fff;
  border-bottom: 1px solid #e2e6ea;
  align-items: center;
  padding: 0 16px;
  z-index: 200;
  gap: 12px;
}

.menu-btn {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  border: none;
  background: none;
  cursor: pointer;
  border-radius: 8px;
}

.menu-btn:hover {
  background: #f3f4f6;
}

.hamburger,
.hamburger::before,
.hamburger::after {
  display: block;
  width: 20px;
  height: 2px;
  background: #374151;
  border-radius: 1px;
  position: relative;
}

.hamburger::before,
.hamburger::after {
  content: '';
  position: absolute;
  left: 0;
}

.hamburger::before {
  top: -6px;
}

.hamburger::after {
  top: 6px;
}

.mobile-title {
  font-size: 1rem;
  font-weight: 600;
  color: #1a1a2e;
}

.overlay {
  display: none;
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.4);
  z-index: 50;
  opacity: 0;
  transition: opacity 0.3s;
}

.overlay.visible {
  opacity: 1;
}

.main-content {
  flex: 1;
  min-width: 0;
  background: #fff;
}

.content-wrapper {
  max-width: 960px;
  margin: 0 auto;
  padding: 40px 48px 80px;
}

@media (max-width: 768px) {
  .mobile-header {
    display: flex;
  }

  .overlay {
    display: block;
    pointer-events: none;
  }

  .overlay.visible {
    pointer-events: auto;
  }

  .main-content {
    padding-top: 56px;
  }

  .content-wrapper {
    padding: 24px 20px 60px;
  }
}
</style>
