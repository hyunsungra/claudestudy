<template>
  <div class="page-content">
    <div class="hero-section">
      <div class="hero-icon">🔄</div>
      <h1>코드 개선과 리팩토링</h1>
      <p class="hero-desc">동작은 그대로, 코드를 <strong>더 깔끔하고 효율적</strong>으로</p>
      <div class="hero-tags">
        <span class="tag">코드 정리</span>
        <span class="tag">성능 개선</span>
        <span class="tag">구조 변경</span>
        <span class="tag">코드 리뷰</span>
      </div>
    </div>

    <section>
      <h2>리팩토링이란?</h2>
      <div class="key-message">
        <div class="key-icon">💡</div>
        <p><strong>리팩토링</strong>은 동작은 그대로 유지하면서 코드를 더 깔끔하고 효율적으로 바꾸는 작업입니다. Claude Code는 프로젝트 전체를 이해한 상태에서 리팩토링하기 때문에, 한 파일만 보고 수정하는 것보다 훨씬 안전합니다.</p>
      </div>
    </section>

    <section>
      <h2>실전 예시</h2>
      <div class="prompt-cards">
        <div class="prompt-card">
          <div class="prompt-header">
            <div class="prompt-icon">🧹</div>
            <div>
              <strong>코드 정리 요청</strong>
            </div>
          </div>
          <div class="code-block good">
            <pre>src/utils/ 폴더의 코드를 정리해줘.
중복되는 함수가 있으면 합치고, 사용하지 않는 건 지워줘.</pre>
          </div>
        </div>
        <div class="prompt-card">
          <div class="prompt-header">
            <div class="prompt-icon">⚡</div>
            <div>
              <strong>성능 개선</strong>
            </div>
          </div>
          <div class="code-block good">
            <pre>이 페이지가 느린데, 원인을 찾아서 개선해줘.
특히 목록을 불러오는 부분이 느린 것 같아.</pre>
          </div>
        </div>
        <div class="prompt-card">
          <div class="prompt-header">
            <div class="prompt-icon">📦</div>
            <div>
              <strong>구조 변경</strong>
            </div>
          </div>
          <div class="code-block good">
            <pre>지금 모든 로직이 App.vue 한 파일에 들어있는데,
기능별로 파일을 분리해줘.</pre>
          </div>
        </div>
        <div class="prompt-card">
          <div class="prompt-header">
            <div class="prompt-icon">🔍</div>
            <div>
              <strong>코드 리뷰 요청</strong>
            </div>
          </div>
          <div class="code-block good">
            <pre>내가 오늘 작성한 코드를 리뷰해줘.
문제가 있거나 더 좋게 만들 수 있는 부분을 알려줘.</pre>
          </div>
        </div>
      </div>
    </section>

    <section>
      <h2>리팩토링 시 주의할 점</h2>
      <div class="caution-cards">
        <div class="caution-card">
          <div class="caution-icon">💾</div>
          <strong>리팩토링 전에 커밋해두세요</strong>
          <p>"먼저 현재 상태를 커밋해줘" → 이후 리팩토링. 문제가 생기면 되돌릴 수 있습니다</p>
        </div>
        <div class="caution-card">
          <div class="caution-icon">🎯</div>
          <strong>범위를 한정하세요</strong>
          <p>"전체 프로젝트 리팩토링해줘"보다 "이 파일/폴더만"이 안전합니다</p>
        </div>
        <div class="caution-card">
          <div class="caution-icon">🧪</div>
          <strong>테스트를 같이 시키세요</strong>
          <p>"리팩토링하고 테스트도 돌려줘"</p>
        </div>
      </div>
    </section>
  </div>
</template>

<style scoped>
/* === Hero Section === */
.hero-section {
  background: linear-gradient(135deg, #1e293b 0%, #334155 100%);
  border-radius: 16px;
  padding: 48px 36px 40px;
  text-align: center;
  margin-bottom: 40px;
}
.hero-icon { font-size: 3rem; margin-bottom: 12px; }
.hero-section h1 { color: #f1f5f9; margin-bottom: 12px; }
.hero-desc { color: #94a3b8 !important; font-size: 1.15rem; margin-bottom: 24px !important; }
.hero-desc strong { color: #e2e8f0; }
.hero-tags { display: flex; justify-content: center; flex-wrap: wrap; gap: 8px; }
.tag { background: rgba(99,102,241,0.15); color: #a5b4fc; padding: 6px 16px; border-radius: 20px; font-size: 0.85rem; font-weight: 500; border: 1px solid rgba(99,102,241,0.25); }

/* === Key Message === */
.key-message { display: flex; align-items: flex-start; gap: 16px; background: #eff6ff; border: 2px solid #93c5fd; border-radius: 12px; padding: 24px; margin: 20px 0; }
.key-icon { font-size: 2rem; flex-shrink: 0; }
.key-message p { margin: 0 !important; font-size: 1rem; color: #334155; line-height: 1.7; }
.key-message strong { color: #1e40af; }

/* === Prompt Cards === */
.prompt-cards { display: flex; flex-direction: column; gap: 16px; margin: 20px 0; }
.prompt-card { background: #f8fafc; border: 1px solid #e2e8f0; border-radius: 12px; padding: 20px; transition: border-color 0.2s; }
.prompt-card:hover { border-color: #93c5fd; }
.prompt-header { display: flex; align-items: center; gap: 12px; margin-bottom: 12px; }
.prompt-icon { font-size: 1.6rem; flex-shrink: 0; }
.prompt-header strong { font-size: 1.05rem; color: #1e293b; }
.prompt-card .code-block { margin: 0 !important; }

/* === Caution Cards === */
.caution-cards { display: grid; grid-template-columns: repeat(3, 1fr); gap: 16px; margin: 20px 0; }
.caution-card { background: #fffbeb; border: 1px solid #fcd34d; border-radius: 12px; padding: 20px; text-align: center; transition: transform 0.2s; }
.caution-card:hover { transform: translateY(-2px); }
.caution-icon { font-size: 1.8rem; margin-bottom: 8px; }
.caution-card strong { display: block; font-size: 0.95rem; color: #92400e; margin-bottom: 8px; }
.caution-card p { font-size: 0.85rem; color: #78716c; margin: 0 !important; }

/* === Responsive === */
@media (max-width: 768px) {
  .hero-section { padding: 36px 20px 32px; }
  .hero-section h1 { font-size: 1.6rem; }
  .caution-cards { grid-template-columns: 1fr; }
  .key-message { flex-direction: column; gap: 12px; }
}
</style>
