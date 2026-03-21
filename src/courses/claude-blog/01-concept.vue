<template>
  <div class="page-content">
    <!-- Hero Section -->
    <div class="hero-section">
      <div class="hero-icon">🧠</div>
      <h1>자동화 컨셉 이해하기</h1>
      <p class="hero-desc">내 글쓰기 패턴을 학습시켜서, 나와 비슷한 스타일의 블로그 글을 자동으로 작성하는 구조입니다.</p>
    </div>

    <!-- 핵심 아이디어 -->
    <section class="section-slide">
      <h2 class="section-title">핵심 아이디어</h2>
      <p class="section-desc">블로그 글을 처음부터 AI한테 맡기면 "AI가 쓴 티"가 납니다.<br>하지만 <strong>내가 이전에 쓴 글들을 참고 자료로 넣어주면</strong>, Claude가 내 문체, 구성, 톤을 파악해서 비슷한 스타일로 글을 작성합니다.</p>

      <div class="formula-card">
        <div class="formula-row">
          <div class="formula-item">
            <span class="formula-icon">📝</span>
            <span class="formula-label">내가 쓴 글</span>
            <span class="formula-sub">참고 자료</span>
          </div>
          <div class="formula-op">+</div>
          <div class="formula-item">
            <span class="formula-icon">📐</span>
            <span class="formula-label">글쓰기 규칙</span>
            <span class="formula-sub">스킬</span>
          </div>
          <div class="formula-op">+</div>
          <div class="formula-item">
            <span class="formula-icon">💡</span>
            <span class="formula-label">주제</span>
            <span class="formula-sub">새로운 토픽</span>
          </div>
          <div class="formula-op">=</div>
          <div class="formula-item result">
            <span class="formula-icon">✨</span>
            <span class="formula-label">나와 비슷한 스타일의 새 글</span>
          </div>
        </div>
      </div>
    </section>

    <!-- 전체 흐름 -->
    <section class="section-slide">
      <h2 class="section-title">전체 흐름</h2>
      <div class="step-cards">
        <div class="step-card">
          <div class="step-number">1</div>
          <div class="step-body">
            <div class="step-label">글 파일 준비</div>
            <div class="step-desc">내가 이전에 쓴 블로그 글을 파일로 준비</div>
          </div>
        </div>
        <div class="step-card">
          <div class="step-number">2</div>
          <div class="step-body">
            <div class="step-label">패턴 분석</div>
            <div class="step-desc">Claude에게 내 글쓰기 패턴을 분석시킴</div>
          </div>
        </div>
        <div class="step-card">
          <div class="step-number">3</div>
          <div class="step-body">
            <div class="step-label">스킬 생성</div>
            <div class="step-desc">글쓰기 스킬(규칙)을 만듦</div>
          </div>
        </div>
        <div class="step-card">
          <div class="step-number">4</div>
          <div class="step-body">
            <div class="step-label">자동 작성</div>
            <div class="step-desc">주제만 던지면 내 스타일로 글이 완성됨</div>
          </div>
        </div>
      </div>
    </section>

    <!-- 두 가지 방법 -->
    <section class="section-slide">
      <h2 class="section-title">두 가지 방법</h2>
      <p class="section-desc">코워크와 코드, 어떤 걸로 해도 됩니다. 본인 환경에 맞는 걸 선택하세요.</p>
      <div class="vs-cards">
        <div class="vs-card">
          <div class="vs-badge cowork">코워크</div>
          <div class="vs-feature">
            <span class="vs-icon">🖥️</span>
            <div>
              <div class="vs-label">특징</div>
              <div class="vs-desc">Claude Desktop에서 GUI로 작업. 파일을 드래그해서 넣고 대화로 진행.</div>
            </div>
          </div>
          <div class="vs-feature">
            <span class="vs-icon">👤</span>
            <div>
              <div class="vs-label">추천 대상</div>
              <div class="vs-desc">비개발자, 간단하게 시작하고 싶은 사람</div>
            </div>
          </div>
        </div>
        <div class="vs-divider">VS</div>
        <div class="vs-card">
          <div class="vs-badge code">코드</div>
          <div class="vs-feature">
            <span class="vs-icon">⌨️</span>
            <div>
              <div class="vs-label">특징</div>
              <div class="vs-desc">터미널에서 작업. 스킬 파일을 직접 만들고 세밀하게 제어.</div>
            </div>
          </div>
          <div class="vs-feature">
            <span class="vs-icon">👤</span>
            <div>
              <div class="vs-label">추천 대상</div>
              <div class="vs-desc">개발자, 고도화·자동화까지 가고 싶은 사람</div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- 준비물 -->
    <section class="section-slide">
      <h2 class="section-title">준비물</h2>
      <div class="prep-cards">
        <div class="prep-card">
          <div class="prep-icon">📄</div>
          <div class="prep-label">내가 이전에 쓴 블로그 글 3~5개 이상</div>
          <div class="prep-desc">텍스트 파일, 워드, 마크다운 등 아무 형식이나 OK</div>
        </div>
        <div class="prep-card">
          <div class="prep-icon">💳</div>
          <div class="prep-label">Claude 유료 구독</div>
          <div class="prep-desc">코워크 또는 코드 사용을 위해 필요</div>
        </div>
        <div class="prep-card">
          <div class="prep-icon">💡</div>
          <div class="prep-label">글을 쓸 주제</div>
          <div class="prep-desc">"AI 업무 활용", "재택근무 팁" 같은 주제</div>
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

.section-slide { margin-bottom: 48px; }
.section-title { font-size: 1.5rem; font-weight: 700; margin-bottom: 12px; color: #1e293b; }
.section-desc { color: #475569; font-size: 1.05rem; line-height: 1.7; margin-bottom: 24px; }

/* Formula Card */
.formula-card {
  background: #f8fafc;
  border: 1px solid #e2e8f0;
  border-radius: 16px;
  padding: 32px 24px;
}
.formula-row {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 12px;
  flex-wrap: wrap;
}
.formula-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  background: #fff;
  border: 1px solid #e2e8f0;
  border-radius: 12px;
  padding: 16px 20px;
  min-width: 100px;
  transition: border-color 0.2s, transform 0.2s;
}
.formula-item:hover { border-color: #93c5fd; transform: translateY(-2px); }
.formula-item.result {
  background: linear-gradient(135deg, #eff6ff 0%, #dbeafe 100%);
  border-color: #93c5fd;
}
.formula-icon { font-size: 1.8rem; margin-bottom: 6px; }
.formula-label { font-weight: 600; color: #1e293b; font-size: 0.95rem; text-align: center; }
.formula-sub { color: #94a3b8; font-size: 0.8rem; margin-top: 2px; }
.formula-op { font-size: 1.5rem; font-weight: 700; color: #3b82f6; }

/* Step Cards */
.step-cards { display: flex; flex-direction: column; gap: 16px; }
.step-card {
  display: flex;
  align-items: center;
  gap: 20px;
  background: #f8fafc;
  border: 1px solid #e2e8f0;
  border-radius: 12px;
  padding: 20px 24px;
  transition: border-color 0.2s, transform 0.2s;
}
.step-card:hover { border-color: #93c5fd; transform: translateY(-2px); }
.step-number {
  flex-shrink: 0;
  width: 44px; height: 44px;
  background: linear-gradient(135deg, #3b82f6, #2563eb);
  color: #fff;
  border-radius: 50%;
  display: flex; align-items: center; justify-content: center;
  font-size: 1.2rem; font-weight: 700;
}
.step-body { flex: 1; }
.step-label { font-weight: 700; color: #1e293b; font-size: 1.05rem; margin-bottom: 4px; }
.step-desc { color: #64748b; font-size: 0.95rem; }

/* VS Cards */
.vs-cards { display: flex; gap: 20px; align-items: stretch; }
.vs-card {
  flex: 1;
  background: #f8fafc;
  border: 1px solid #e2e8f0;
  border-radius: 12px;
  padding: 24px;
  transition: border-color 0.2s, transform 0.2s;
}
.vs-card:hover { border-color: #93c5fd; transform: translateY(-2px); }
.vs-badge {
  display: inline-block;
  padding: 4px 14px;
  border-radius: 20px;
  font-weight: 700;
  font-size: 0.95rem;
  margin-bottom: 16px;
}
.vs-badge.cowork { background: #dbeafe; color: #1d4ed8; }
.vs-badge.code { background: #fce7f3; color: #be185d; }
.vs-divider {
  flex-shrink: 0;
  display: flex; align-items: center;
  font-weight: 800; font-size: 1.1rem; color: #94a3b8;
}
.vs-feature { display: flex; gap: 12px; margin-bottom: 14px; align-items: flex-start; }
.vs-icon { font-size: 1.3rem; flex-shrink: 0; margin-top: 2px; }
.vs-label { font-weight: 600; color: #1e293b; font-size: 0.95rem; }
.vs-desc { color: #64748b; font-size: 0.9rem; line-height: 1.6; }

/* Prep Cards */
.prep-cards { display: grid; grid-template-columns: repeat(3, 1fr); gap: 16px; }
.prep-card {
  background: #f8fafc;
  border: 1px solid #e2e8f0;
  border-radius: 12px;
  padding: 24px 20px;
  text-align: center;
  transition: border-color 0.2s, transform 0.2s;
}
.prep-card:hover { border-color: #93c5fd; transform: translateY(-2px); }
.prep-icon { font-size: 2rem; margin-bottom: 10px; }
.prep-label { font-weight: 700; color: #1e293b; font-size: 0.95rem; margin-bottom: 6px; }
.prep-desc { color: #64748b; font-size: 0.85rem; line-height: 1.5; }

/* Responsive */
@media (max-width: 768px) {
  .hero-section { padding: 32px 18px 28px; }
  .hero-section h1 { font-size: 1.4rem; }
  .formula-row { flex-direction: column; gap: 8px; }
  .formula-op { font-size: 1.2rem; }
  .vs-cards { flex-direction: column; }
  .vs-divider { justify-content: center; padding: 4px 0; }
  .prep-cards { grid-template-columns: 1fr; }
  .step-card { padding: 16px; gap: 14px; }
}
</style>
