<template>
  <div class="page-content">
    <!-- Hero Section -->
    <div class="hero-section">
      <div class="hero-icon">🤖</div>
      <h1>Agents (서브에이전트)</h1>
      <p class="hero-desc">Claude가 복잡한 작업을 팀원처럼 나눠서 처리하는 기능입니다</p>
    </div>

    <!-- 에이전트란? -->
    <section class="slide-section">
      <h2 class="section-title">에이전트란?</h2>
      <p class="section-desc"><strong>에이전트</strong>는 Claude 안에서 돌아가는 <strong>전문 보조원</strong>입니다. 큰 작업을 여러 보조원에게 나눠주면 더 빠르고 정확하게 처리할 수 있습니다.</p>
      <div class="analogy-card">
        <div class="analogy-icon">💡</div>
        <div class="analogy-content">
          <strong>비유:</strong> 팀장(메인 Claude)이 팀원(에이전트)에게 "너는 이거 조사해", "너는 저거 분석해" 하고 나눠준 다음, 결과를 모아서 정리하는 것과 같습니다.
        </div>
      </div>
    </section>

    <!-- 기본 제공 에이전트 -->
    <section class="slide-section">
      <h2 class="section-title">기본 제공 에이전트</h2>
      <div class="agent-type-cards">
        <div class="agent-type-card">
          <div class="at-icon">🔧</div>
          <div class="at-badge general">일반</div>
          <h3>모든 작업 가능</h3>
          <p>복잡한 작업을 자율적으로 처리합니다. 모든 도구를 사용할 수 있습니다.</p>
        </div>
        <div class="agent-type-card">
          <div class="at-icon">🔍</div>
          <div class="at-badge search">탐색</div>
          <h3>파일 찾기 / 검색</h3>
          <p>파일을 찾거나 코드를 검색합니다. 읽기만 가능하고 수정은 불가합니다.</p>
        </div>
        <div class="agent-type-card">
          <div class="at-icon">📋</div>
          <div class="at-badge plan">계획</div>
          <h3>작업 계획 수립</h3>
          <p>작업 계획을 세우고 구조를 분석합니다. 읽기만 가능하고 수정은 불가합니다.</p>
        </div>
      </div>
    </section>

    <!-- 실제 동작 모습 -->
    <section class="slide-section">
      <h2 class="section-title">에이전트가 실제로 동작하는 모습</h2>
      <div class="code-block">
        <p class="code-label">예시</p>
        <pre>나: "이 프로젝트의 모든 API를 찾아서 문서로 정리해줘"

Claude (팀장):
  ├── 탐색 에이전트 1 → 프로젝트 파일 전체 검색
  ├── 탐색 에이전트 2 → API 관련 코드 분석
  └── 결과 종합 → API 문서 작성</pre>
      </div>
      <div class="highlight-note">
        <span class="hn-icon">⚡</span>
        <span>여러 에이전트가 <strong>동시에</strong> 작업하므로 하나씩 하는 것보다 훨씬 빠릅니다.</span>
      </div>
    </section>

    <!-- 가장 쉽게 만드는 방법 -->
    <section class="slide-section">
      <h2 class="section-title">가장 쉽게 만드는 방법</h2>
      <p class="section-desc">직접 파일을 만들 필요 없이, <strong>Claude에게 대화로 요청</strong>하면 됩니다.</p>

      <div class="step-cards">
        <div class="step-card">
          <div class="step-number">1</div>
          <div class="step-body">
            <h3>간단하게 요청</h3>
            <div class="code-block good">
              <pre>코드를 검토해주는 커스텀 에이전트를 만들어줘</pre>
            </div>
          </div>
        </div>
        <div class="step-card">
          <div class="step-number">2</div>
          <div class="step-body">
            <h3>구체적으로 요청</h3>
            <div class="code-block good">
              <pre>변경된 파일과 관련된 테스트를 자동으로 찾아서 실행해주는
에이전트를 만들어줘. 결과를 알기 쉽게 정리해주면 좋겠어.</pre>
            </div>
          </div>
        </div>
      </div>
      <p style="margin-top: 16px; color: #475569;">Claude가 <code>.claude/agents/</code> 폴더에 파일을 자동으로 만들어줍니다.</p>
    </section>

    <!-- 에이전트 파일 구조 -->
    <section class="slide-section">
      <h2 class="section-title">에이전트 파일 구조</h2>
      <p class="section-desc"><code>.claude/agents/</code> 폴더에 파일을 만들면 나만의 전문 보조원을 만들 수 있습니다.</p>
      <div class="code-block good">
        <p class="code-label">예시: .claude/agents/checker/checker.md</p>
        <pre>---
description: 변경된 파일과 관련된 테스트를 찾아서 실행합니다
tools: Bash, Read, Glob, Grep
---

1. 변경된 파일 목록을 확인하세요
2. 관련된 테스트 파일을 찾으세요
3. 해당 테스트만 실행하세요
4. 결과를 알기 쉽게 정리해서 보고하세요</pre>
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

.analogy-card {
  display: flex;
  align-items: flex-start;
  gap: 14px;
  background: #eff6ff;
  border: 1px solid #bfdbfe;
  border-radius: 12px;
  padding: 18px 22px;
}
.analogy-icon { font-size: 1.5rem; flex-shrink: 0; }
.analogy-content { color: #1e40af; font-size: 0.95rem; line-height: 1.7; }

.agent-type-cards {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 16px;
}
.agent-type-card {
  background: #f8fafc;
  border: 1px solid #e2e8f0;
  border-radius: 12px;
  padding: 24px 18px;
  text-align: center;
  transition: border-color 0.2s, transform 0.2s;
}
.agent-type-card:hover { border-color: #93c5fd; transform: translateY(-2px); }
.at-icon { font-size: 2rem; margin-bottom: 8px; }
.at-badge {
  display: inline-block;
  font-size: 0.72rem;
  padding: 3px 12px;
  border-radius: 999px;
  font-weight: 700;
  color: #fff;
  margin-bottom: 10px;
}
.at-badge.general { background: #3b82f6; }
.at-badge.search { background: #22c55e; }
.at-badge.plan { background: #8b5cf6; }
.agent-type-card h3 { margin-bottom: 8px; color: #1e293b; font-size: 1rem; }
.agent-type-card p { color: #475569; font-size: 0.88rem; margin: 0; }

.highlight-note {
  display: flex;
  align-items: center;
  gap: 10px;
  background: #fef3c7;
  border: 1px solid #fde68a;
  border-radius: 10px;
  padding: 14px 18px;
  margin-top: 14px;
  color: #92400e;
  font-size: 0.93rem;
}
.hn-icon { font-size: 1.2rem; flex-shrink: 0; }

.step-cards { display: flex; flex-direction: column; gap: 20px; }
.step-card {
  display: flex;
  gap: 18px;
  background: #f8fafc;
  border: 1px solid #e2e8f0;
  border-radius: 12px;
  padding: 24px;
  transition: border-color 0.2s;
}
.step-card:hover { border-color: #93c5fd; }
.step-number {
  width: 32px;
  height: 32px;
  background: linear-gradient(135deg, #3b82f6, #2563eb);
  color: #fff;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 800;
  font-size: 0.9rem;
  flex-shrink: 0;
}
.step-body { flex: 1; }
.step-body h3 { margin-bottom: 10px; color: #1e293b; font-size: 1.05rem; }

@media (max-width: 768px) {
  .hero-section { padding: 32px 18px 28px; }
  .hero-icon { font-size: 2.2rem; }
  .hero-section h1 { font-size: 1.4rem; }
  .hero-desc { font-size: 1rem; }
  .agent-type-cards { grid-template-columns: 1fr; }
  .step-card { flex-direction: column; gap: 12px; }
}
</style>
