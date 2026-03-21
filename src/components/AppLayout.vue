<script setup>
import { ref, computed, watch, nextTick } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import AppSidebar from './AppSidebar.vue'

const props = defineProps({
  menu: { type: Object, required: true }
})

const route = useRoute()
const router = useRouter()
const sidebarOpen = ref(false)

// 모든 페이지를 평탄화
const allPages = computed(() => {
  const pages = []
  for (const section of props.menu.sections) {
    for (const item of section.items) {
      pages.push({
        path: `${props.menu.basePath}/${item.path}`,
        title: item.title,
      })
    }
  }
  return pages
})

const currentIndex = computed(() =>
  allPages.value.findIndex(p => p.path === route.path)
)

const prevPage = computed(() =>
  currentIndex.value > 0 ? allPages.value[currentIndex.value - 1] : null
)

const nextPage = computed(() =>
  currentIndex.value < allPages.value.length - 1 ? allPages.value[currentIndex.value + 1] : null
)

function goTo(page) {
  if (page) router.push(page.path)
}

function toggleSidebar() {
  sidebarOpen.value = !sidebarOpen.value
}

function closeSidebar() {
  sidebarOpen.value = false
}

function addCopyButtons() {
  document.querySelectorAll('.code-block').forEach(block => {
    if (block.querySelector('.copy-btn') || block.classList.contains('no-auto-copy')) return
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

        // 진행 표시 추가
        if (!block.nextElementSibling?.classList.contains('copy-progress')) {
          const progress = document.createElement('div')
          progress.className = 'copy-progress'
          progress.innerHTML = '<span class="cp-icon">✅</span><span class="cp-text">복사 완료 — 여기까지 진행했습니다</span>'
          block.parentNode.insertBefore(progress, block.nextSibling)
        }
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

        <!-- 이전 / 다음 네비게이션 -->
        <nav v-if="prevPage || nextPage" class="page-nav">
          <button
            class="nav-btn prev"
            :class="{ invisible: !prevPage }"
            @click="goTo(prevPage)"
          >
            <span class="nav-direction">← 이전</span>
            <span class="nav-title">{{ prevPage?.title }}</span>
          </button>
          <button
            class="nav-btn next"
            :class="{ invisible: !nextPage }"
            @click="goTo(nextPage)"
          >
            <span class="nav-direction">다음 →</span>
            <span class="nav-title">{{ nextPage?.title }}</span>
          </button>
        </nav>
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

/* === Page Navigation === */
.page-nav {
  display: flex;
  justify-content: space-between;
  gap: 16px;
  margin-top: 56px;
  padding-top: 32px;
  border-top: 1px solid #e2e8f0;
}

.nav-btn {
  display: flex;
  flex-direction: column;
  gap: 4px;
  padding: 16px 20px;
  background: #f8fafc;
  border: 1px solid #e2e8f0;
  border-radius: 12px;
  cursor: pointer;
  transition: all 0.15s;
  font-family: inherit;
  max-width: 48%;
}

.nav-btn:hover {
  border-color: #93c5fd;
  background: #eff6ff;
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(59, 130, 246, 0.08);
}

.nav-btn.prev {
  align-items: flex-start;
  text-align: left;
}

.nav-btn.next {
  align-items: flex-end;
  text-align: right;
  margin-left: auto;
}

.nav-btn.invisible {
  visibility: hidden;
}

.nav-direction {
  font-size: 0.8rem;
  font-weight: 600;
  color: #3b82f6;
}

.nav-title {
  font-size: 0.95rem;
  font-weight: 700;
  color: #1e293b;
  line-height: 1.4;
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

  .page-nav {
    margin-top: 40px;
    padding-top: 24px;
    gap: 10px;
  }

  .nav-btn {
    padding: 12px 14px;
  }

  .nav-title {
    font-size: 0.85rem;
  }
}
</style>
