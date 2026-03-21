<template>
  <div class="page-content">
    <!-- Hero Section -->
    <div class="hero-section">
      <div class="hero-icon">🧠</div>
      <h1>메모리 시스템</h1>
      <p class="hero-desc">Claude가 대화가 끝나도 중요한 정보를 기억해두는 기능입니다</p>
    </div>

    <!-- 메모리란? -->
    <section class="slide-section">
      <h2 class="section-title">메모리란?</h2>
      <p class="section-desc">보통 AI와의 대화는 창을 닫으면 다 사라집니다. 하지만 Claude Code의 <strong>메모리</strong>를 사용하면, 중요한 정보를 저장해두고 다음 대화에서도 활용할 수 있습니다.</p>

      <div class="vs-cards">
        <div class="vs-card bad">
          <div class="vs-icon">❌</div>
          <h3>일반 대화</h3>
          <p>"칠판" — 지우면 끝</p>
        </div>
        <div class="vs-divider">VS</div>
        <div class="vs-card good">
          <div class="vs-icon">✅</div>
          <h3>메모리</h3>
          <p>"수첩" — 적어두면 다음에도 볼 수 있음</p>
        </div>
      </div>
    </section>

    <!-- 어떤 걸 기억시킬 수 있나? -->
    <section class="slide-section">
      <h2 class="section-title">어떤 걸 기억시킬 수 있나?</h2>
      <div class="memory-card-grid">
        <div class="memory-card">
          <div class="mc-icon">👤</div>
          <h3>내 정보</h3>
          <p>"나는 초보 개발자야", "설명은 쉽게 해줘" 같은 개인 선호를 저장합니다.</p>
        </div>
        <div class="memory-card">
          <div class="mc-icon">💬</div>
          <h3>작업 피드백</h3>
          <p>"그렇게 하지 마", "이 방식 좋았어" 같은 교정/확인을 저장합니다.</p>
        </div>
        <div class="memory-card">
          <div class="mc-icon">📅</div>
          <h3>프로젝트 상황</h3>
          <p>"3월 5일까지 마감", "이 기능은 법적 이유로 변경됨" 같은 맥락을 저장합니다.</p>
        </div>
        <div class="memory-card">
          <div class="mc-icon">🔗</div>
          <h3>참고 자료 위치</h3>
          <p>"버그 트래킹은 Jira에서 해", "디자인 시안은 Figma에 있어" 같은 정보를 저장합니다.</p>
        </div>
      </div>
    </section>

    <!-- 사용 방법 -->
    <section class="slide-section">
      <h2 class="section-title">사용 방법</h2>
      <p class="section-desc">자연스럽게 대화하면서 기억시키면 됩니다.</p>

      <div class="usage-steps">
        <div class="usage-card">
          <div class="usage-header">
            <span class="usage-badge save">저장</span>
            <span class="usage-label">기억시키기</span>
          </div>
          <div class="code-block">
            <pre>나는 프론트엔드 3년차야. 이거 기억해줘.</pre>
          </div>
        </div>
        <div class="usage-card">
          <div class="usage-header">
            <span class="usage-badge check">확인</span>
            <span class="usage-label">기억 확인하기</span>
          </div>
          <div class="code-block">
            <pre>나에 대해 기억하고 있는 거 알려줘</pre>
          </div>
        </div>
        <div class="usage-card">
          <div class="usage-header">
            <span class="usage-badge delete">삭제</span>
            <span class="usage-label">기억 지우기</span>
          </div>
          <div class="code-block">
            <pre>내 역할에 대한 메모리 지워줘</pre>
          </div>
        </div>
        <div class="usage-card">
          <div class="usage-header">
            <span class="usage-badge manage">관리</span>
            <span class="usage-label">메모리 관리 명령어</span>
          </div>
          <div class="code-block">
            <pre>/memory</pre>
          </div>
        </div>
      </div>
    </section>

    <!-- 저장하면 안 되는 것 -->
    <section class="slide-section">
      <h2 class="section-title">메모리에 저장하면 안 되는 것</h2>
      <div class="warning-list">
        <div class="warning-row">
          <span class="warn-icon">🚫</span>
          <div><strong>코드 자체나 파일 구조</strong> — 코드를 직접 보면 되니까</div>
        </div>
        <div class="warning-row">
          <span class="warn-icon">🚫</span>
          <div><strong>일시적인 작업 내용</strong> — 지금 대화에서만 필요한 건 그냥 대화로 하면 됩니다</div>
        </div>
        <div class="warning-row">
          <span class="warn-icon">🚫</span>
          <div><strong>비밀번호, API 키</strong> — 보안에 위험합니다</div>
        </div>
      </div>
    </section>
  </div>
</template>

<style scoped>
.hero-section {
  background: linear-gradient(135deg, #1e293b 0%, #334155 100%);
  border-radius: 16px;
  padding: 48px 36px 40px;
  text-align: center;
  margin-bottom: 40px;
}
.hero-icon { font-size: 3rem; margin-bottom: 12px; }
.hero-section h1 { color: #f1f5f9; margin-bottom: 12px; }
.hero-desc { color: #94a3b8 !important; font-size: 1.15rem; margin-bottom: 0 !important; }

.slide-section { margin-bottom: 48px; }
.section-title { font-size: 1.5rem; margin-bottom: 12px; }
.section-desc { color: #475569; margin-bottom: 24px; font-size: 1.05rem; }

.vs-cards {
  display: flex;
  align-items: center;
  gap: 16px;
  margin-top: 24px;
}
.vs-card {
  flex: 1;
  border-radius: 12px;
  padding: 28px 20px;
  text-align: center;
  transition: transform 0.2s;
}
.vs-card:hover { transform: translateY(-2px); }
.vs-card.bad { background: #fef2f2; border: 1px solid #fecaca; }
.vs-card.good { background: #f0fdf4; border: 1px solid #bbf7d0; }
.vs-icon { font-size: 2rem; margin-bottom: 8px; }
.vs-card h3 { margin-bottom: 6px; color: #1e293b; }
.vs-card p { color: #475569; font-size: 0.93rem; margin: 0; }
.vs-divider {
  font-weight: 800;
  font-size: 1rem;
  color: #94a3b8;
  flex-shrink: 0;
}

.memory-card-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 16px;
}
.memory-card {
  background: #f8fafc;
  border: 1px solid #e2e8f0;
  border-radius: 12px;
  padding: 24px 20px;
  text-align: center;
  transition: border-color 0.2s, transform 0.2s;
}
.memory-card:hover { border-color: #93c5fd; transform: translateY(-2px); }
.mc-icon { font-size: 2rem; margin-bottom: 8px; }
.memory-card h3 { margin-bottom: 8px; color: #1e293b; font-size: 1.05rem; }
.memory-card p { color: #475569; font-size: 0.9rem; margin: 0; }

.usage-steps { display: flex; flex-direction: column; gap: 16px; }
.usage-card {
  background: #f8fafc;
  border: 1px solid #e2e8f0;
  border-radius: 12px;
  padding: 20px;
  transition: border-color 0.2s;
}
.usage-card:hover { border-color: #93c5fd; }
.usage-header {
  display: flex;
  align-items: center;
  gap: 10px;
  margin-bottom: 12px;
}
.usage-badge {
  font-size: 0.75rem;
  padding: 3px 10px;
  border-radius: 999px;
  font-weight: 700;
  color: #fff;
}
.usage-badge.save { background: #3b82f6; }
.usage-badge.check { background: #22c55e; }
.usage-badge.delete { background: #ef4444; }
.usage-badge.manage { background: #8b5cf6; }
.usage-label { font-weight: 600; color: #334155; font-size: 0.95rem; }

.warning-list { display: flex; flex-direction: column; gap: 12px; }
.warning-row {
  display: flex;
  align-items: flex-start;
  gap: 12px;
  background: #fef2f2;
  border: 1px solid #fecaca;
  border-radius: 10px;
  padding: 14px 18px;
}
.warn-icon { font-size: 1.2rem; flex-shrink: 0; }
.warning-row div { color: #991b1b; font-size: 0.93rem; line-height: 1.6; }

@media (max-width: 768px) {
  .hero-section { padding: 32px 18px 28px; }
  .hero-icon { font-size: 2.2rem; }
  .hero-section h1 { font-size: 1.4rem; }
  .hero-desc { font-size: 1rem; }
  .vs-cards { flex-direction: column; }
  .vs-divider { display: none; }
  .memory-card-grid { grid-template-columns: 1fr; }
}
</style>
