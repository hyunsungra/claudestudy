<script setup>
import { useRouter } from 'vue-router'
import courses from '../courses/index.js'

const router = useRouter()

function goToCourse(course) {
  const firstItem = course.sections[0]?.items[0]
  if (firstItem) {
    router.push(`${course.basePath}/${firstItem.path}`)
  }
}

function getTotalCount(course) {
  return course.sections.reduce((sum, s) => sum + s.items.length, 0)
}
</script>

<template>
  <div class="home">
    <header class="home-hero">
      <h1 class="home-title">Claude Study</h1>
      <p class="home-desc">AI 시대의 필수 역량, Claude를 제대로 배워봅시다.</p>
    </header>

    <div class="home-body">
      <div class="course-grid">
        <button
          v-for="course in courses"
          :key="course.basePath"
          class="course-card"
          @click="goToCourse(course)"
        >
          <span class="course-icon">{{ course.icon }}</span>
          <div class="course-info">
            <h2 class="course-title">{{ course.title }}</h2>
            <p class="course-desc">{{ course.description }}</p>
            <div class="course-meta">
              <span class="meta-item">{{ course.sections.length }}개 섹션</span>
              <span class="meta-dot">·</span>
              <span class="meta-item">{{ getTotalCount(course) }}개 주제</span>
            </div>
          </div>
          <span class="course-arrow">→</span>
        </button>
      </div>
    </div>

    <footer class="home-footer">
      <div class="footer-inner">
        <div class="footer-sns">
          <a href="https://www.instagram.com/ra_hyunsung" target="_blank" rel="noopener" title="Instagram" class="sns-link">
            <svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/></svg>
          </a>
          <a href="https://www.linkedin.com/in/rahyunsung" target="_blank" rel="noopener" title="LinkedIn" class="sns-link">
            <svg viewBox="0 0 24 24" fill="currentColor"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
          </a>
          <a href="https://www.threads.com/@ra_hyunsung" target="_blank" rel="noopener" title="Threads" class="sns-link">
            <svg viewBox="0 0 16 16" fill="currentColor"><path d="M6.321 6.016c-.27-.18-1.166-.802-1.166-.802.756-1.081 1.753-1.502 3.132-1.502.975 0 1.803.327 2.394.948s.928 1.509 1.005 2.644q.492.207.905.484c1.109.745 1.719 1.86 1.719 3.137 0 2.716-2.226 5.075-6.256 5.075C4.594 16 1 13.987 1 7.994 1 2.034 4.482 0 8.044 0 9.69 0 13.55.243 15 5.036l-1.36.353C12.516 1.974 10.163 1.43 8.006 1.43c-3.565 0-5.582 2.171-5.582 6.79 0 4.143 2.254 6.343 5.63 6.343 2.777 0 4.847-1.443 4.847-3.556 0-1.438-1.208-2.127-1.27-2.127-.236 1.234-.868 3.31-3.644 3.31-1.618 0-3.013-1.118-3.013-2.582 0-2.09 1.984-2.847 3.55-2.847.586 0 1.294.04 1.663.114 0-.637-.54-1.728-1.9-1.728-1.25 0-1.566.405-1.967.868ZM8.716 8.19c-2.04 0-2.304.87-2.304 1.416 0 .878 1.043 1.168 1.6 1.168 1.02 0 2.067-.282 2.232-2.423a6.2 6.2 0 0 0-1.528-.161"/></svg>
          </a>
          <a href="https://www.rocketpunch.com/@hyunsung" target="_blank" rel="noopener" title="로켓펀치" class="sns-link sns-text">R</a>
          <a href="https://www.youtube.com/channel/UCaWkOPFdNklgNouqArBAYMQ" target="_blank" rel="noopener" title="YouTube" class="sns-link">
            <svg viewBox="0 0 24 24" fill="currentColor"><path d="M23.498 6.186a3.016 3.016 0 00-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 00.502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 002.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 002.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg>
          </a>
        </div>
        <p class="footer-copy">© 2026 Claude Study. All rights reserved.</p>
        <p class="footer-notice">본 자료는 교육 목적으로 제작되었으며, Anthropic 공식 문서가 아닙니다.</p>
      </div>
    </footer>
  </div>
</template>

<style scoped>
.home {
  min-height: 100vh;
  background: #f8fafc;
}

/* === Hero === */
.home-hero {
  background: linear-gradient(135deg, #1e293b 0%, #334155 100%);
  padding: 60px 24px;
  text-align: center;
}

.home-title {
  font-size: 2.4rem;
  font-weight: 800;
  color: #fff;
  margin-bottom: 12px;
}

.home-desc {
  font-size: 1.15rem;
  color: #94a3b8;
  margin: 0;
}

/* === Body === */
.home-body {
  max-width: 880px;
  margin: 0 auto;
  padding: 48px 24px 80px;
}

/* === Course Grid === */
.course-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 16px;
}

.course-card {
  display: flex;
  align-items: center;
  gap: 20px;
  padding: 28px 28px;
  background: #fff;
  border: 1px solid #e2e8f0;
  border-radius: 16px;
  cursor: pointer;
  transition: all 0.15s;
  text-align: left;
  width: 100%;
  font-family: inherit;
}

.course-card:hover {
  border-color: #93c5fd;
  box-shadow: 0 6px 24px rgba(59, 130, 246, 0.1);
  transform: translateY(-2px);
}

.course-card:active {
  transform: translateY(0);
}

.course-icon {
  font-size: 2.4rem;
  flex-shrink: 0;
}

.course-info {
  flex: 1;
  min-width: 0;
}

.course-title {
  font-size: 1.25rem;
  font-weight: 700;
  color: #1e293b;
  margin-bottom: 6px;
}

.course-desc {
  font-size: 0.92rem;
  color: #64748b;
  margin-bottom: 10px;
  line-height: 1.5;
}

.course-meta {
  display: flex;
  align-items: center;
  gap: 6px;
  font-size: 0.8rem;
  color: #94a3b8;
}

.meta-dot {
  color: #cbd5e1;
}

.course-arrow {
  font-size: 1.4rem;
  color: #cbd5e1;
  flex-shrink: 0;
  transition: color 0.15s, transform 0.15s;
}

.course-card:hover .course-arrow {
  color: #2563eb;
  transform: translateX(4px);
}

/* === Responsive === */
@media (max-width: 768px) {
  .home-hero {
    padding: 40px 20px;
  }

  .home-title {
    font-size: 1.7rem;
  }

  .home-desc {
    font-size: 1rem;
  }

  .home-body {
    padding: 24px 16px 60px;
  }

  .course-grid {
    grid-template-columns: 1fr;
  }

  .course-card {
    padding: 20px;
    gap: 14px;
  }

  .course-icon {
    font-size: 2rem;
  }

  .course-title {
    font-size: 1.1rem;
  }
}

/* === Footer === */
.home-footer {
  background: #1e293b;
  padding: 40px 24px;
  margin-top: 20px;
}

.footer-inner {
  max-width: 880px;
  margin: 0 auto;
  text-align: center;
}

.footer-sns {
  display: flex;
  justify-content: center;
  gap: 16px;
  margin-bottom: 20px;
}

.sns-link {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background: #334155;
  color: #94a3b8;
  text-decoration: none;
  transition: all 0.15s;
}

.sns-link:hover {
  background: #2563eb;
  color: #fff;
}

.sns-link svg {
  width: 18px;
  height: 18px;
}


.sns-text {
  font-size: 0.9rem;
  font-weight: 800;
}

.footer-copy {
  font-size: 0.85rem;
  color: #94a3b8;
  margin-bottom: 6px;
}

.footer-notice {
  font-size: 0.75rem;
  color: #64748b;
  margin: 0;
}
</style>
