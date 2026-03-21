<template>
  <div class="page-content">
    <!-- Hero Section -->
    <div class="hero-section">
      <div class="hero-icon">📋</div>
      <h1>CLAUDE.md 파일</h1>
      <p class="hero-desc">Claude에게 "이 프로젝트에서는 이렇게 작업해줘"라고 알려주는 지시서입니다</p>
    </div>

    <!-- CLAUDE.md란? -->
    <section class="slide-section">
      <h2 class="section-title">CLAUDE.md란?</h2>
      <p class="section-desc"><strong>CLAUDE.md</strong>는 Claude Code가 프로젝트 작업 시 항상 참고하는 <strong>지시서</strong>입니다. 여기에 적어둔 내용을 Claude가 매번 읽고, 그에 맞게 작업합니다.</p>
      <div class="analogy-card">
        <div class="analogy-icon">💡</div>
        <div class="analogy-content">
          <strong>비유:</strong> 새로운 팀원에게 주는 "업무 가이드"와 같습니다. "우리 팀은 이렇게 일해요"를 한 번 적어두면, 매번 말하지 않아도 됩니다.
        </div>
      </div>
    </section>

    <!-- 뭘 적어두면 좋을까? -->
    <section class="slide-section">
      <h2 class="section-title">뭘 적어두면 좋을까?</h2>
      <div class="icon-card-grid">
        <div class="icon-card">
          <div class="ic-icon">📌</div>
          <h3>프로젝트 소개</h3>
          <p>이 프로젝트가 뭐하는 건지, 어떤 기술을 쓰는지 간단히 적어줍니다.</p>
        </div>
        <div class="icon-card">
          <div class="ic-icon">🔧</div>
          <h3>작업 방법</h3>
          <p>개발 서버 실행법, 테스트 방법 등 자주 하는 작업의 명령어를 적어둡니다.</p>
        </div>
        <div class="icon-card">
          <div class="ic-icon">📏</div>
          <h3>작업 규칙</h3>
          <p>"한국어로 설명해줘", "파일 수정 전에 먼저 물어봐" 같은 규칙을 적습니다.</p>
        </div>
        <div class="icon-card">
          <div class="ic-icon">🚫</div>
          <h3>하지 말아야 할 것</h3>
          <p>"이 폴더는 건드리지 마", "이 파일은 수정하지 마" 같은 금지사항을 적습니다.</p>
        </div>
      </div>
    </section>

    <!-- 작성 예시 -->
    <section class="slide-section">
      <h2 class="section-title">작성 예시</h2>
      <div class="code-block good">
        <p class="code-label">CLAUDE.md 예시</p>
        <pre># 프로젝트 소개
이 프로젝트는 교육용 웹사이트입니다.
Vue 3와 Vite를 사용하고 있습니다.

# 자주 쓰는 명령어
- 개발 서버 실행: npm run dev
- 배포용 파일 생성: npm run build

# 작업 규칙
- 설명은 항상 한국어로 해주세요
- 새 파일을 만들기 전에 먼저 물어봐주세요
- 주석도 한국어로 작성해주세요

# 폴더 안내
- src/courses/ — 강좌 콘텐츠가 들어있는 폴더
- src/components/ — 공통으로 쓰는 화면 조각들
- public/ — 이미지 등 정적 파일

# 주의사항
- src/courses/index.js는 새 강좌 추가 시 수정 필요
- .claude/ 폴더 안의 설정은 함부로 바꾸지 마세요</pre>
      </div>
    </section>

    <!-- 가장 쉽게 만드는 방법 -->
    <section class="slide-section">
      <h2 class="section-title">가장 쉽게 만드는 방법</h2>
      <p class="section-desc">직접 작성할 필요 없이, <strong>Claude에게 만들어달라고</strong> 하면 됩니다.</p>

      <div class="step-cards">
        <div class="step-card">
          <div class="step-number">1</div>
          <div class="step-body">
            <h3>명령어로 자동 생성</h3>
            <div class="code-block good">
              <p class="code-label">방법 1</p>
              <pre>/init</pre>
            </div>
            <p><code>/init</code>을 실행하면 Claude가 프로젝트를 분석해서 CLAUDE.md를 자동으로 만들어줍니다.</p>
          </div>
        </div>
        <div class="step-card">
          <div class="step-number">2</div>
          <div class="step-body">
            <h3>대화로 요청</h3>
            <div class="code-block good">
              <p class="code-label">방법 2</p>
              <pre>이 프로젝트에 맞는 CLAUDE.md 파일을 만들어줘</pre>
            </div>
            <p>Claude가 프로젝트 구조, 사용 기술, 파일 구성 등을 파악해서 알아서 작성해줍니다. 생성된 내용을 보고 필요한 부분만 수정하면 됩니다.</p>
          </div>
        </div>
      </div>
    </section>

    <!-- 어디에 놓을 수 있나? -->
    <section class="slide-section">
      <h2 class="section-title">어디에 놓을 수 있나?</h2>
      <div class="location-cards">
        <div class="location-card">
          <div class="loc-icon">📂</div>
          <div class="loc-body">
            <strong>프로젝트 폴더</strong> (<code>CLAUDE.md</code>)
            <p>이 프로젝트 전체에 적용</p>
            <span class="loc-example">"이 프로젝트는 Vue로 만들고 있어"</span>
          </div>
        </div>
        <div class="location-card">
          <div class="loc-icon">📁</div>
          <div class="loc-body">
            <strong>하위 폴더</strong> (<code>src/CLAUDE.md</code>)
            <p>해당 폴더에만 적용</p>
            <span class="loc-example">"이 폴더의 파일은 TypeScript로 작성해"</span>
          </div>
        </div>
      </div>
      <div class="analogy-card" style="margin-top: 16px;">
        <div class="analogy-icon">💡</div>
        <div class="analogy-content">
          하위 폴더의 CLAUDE.md는 상위 내용에 <strong>추가</strong>로 적용됩니다. 상위 내용을 덮어쓰지 않습니다.
        </div>
      </div>
      <p style="margin-top: 14px; color: #475569;">참고로 모든 프로젝트에 공통 적용하고 싶은 규칙이 있다면, 전역 설정 폴더에도 CLAUDE.md를 넣을 수 있습니다. 자세한 위치는 <strong>프로젝트 폴더 구조</strong> 페이지를 참고하세요.</p>
    </section>

    <!-- 잘 쓰는 팁 -->
    <section class="slide-section">
      <h2 class="section-title">잘 쓰는 팁</h2>
      <div class="tip-list">
        <div class="tip-row">
          <span class="tip-emoji">🚀</span>
          <div><strong>먼저 Claude에게 만들어달라고 하세요:</strong> <code>/init</code> 또는 "CLAUDE.md 만들어줘"가 가장 빠릅니다</div>
        </div>
        <div class="tip-row">
          <span class="tip-emoji">🎯</span>
          <div><strong>구체적으로 쓰세요:</strong> "잘 해줘"보다 "한국어로, 존댓말로, 3줄 이내로"가 좋습니다</div>
        </div>
        <div class="tip-row">
          <span class="tip-emoji">🔁</span>
          <div><strong>자주 반복하는 말을 적어두세요:</strong> 매번 같은 지시를 안 해도 됩니다</div>
        </div>
        <div class="tip-row">
          <span class="tip-emoji">⛔</span>
          <div><strong>금지사항도 적으세요:</strong> 하면 안 되는 것을 명확히 해두면 실수가 줄어듭니다</div>
        </div>
        <div class="tip-row">
          <span class="tip-emoji">📐</span>
          <div><strong>너무 길게 쓰지 마세요:</strong> Claude가 읽는 데도 용량이 소모됩니다</div>
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

.icon-card-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 16px;
}
.icon-card {
  background: #f8fafc;
  border: 1px solid #e2e8f0;
  border-radius: 12px;
  padding: 24px 20px;
  text-align: center;
  transition: border-color 0.2s, transform 0.2s;
}
.icon-card:hover { border-color: #93c5fd; transform: translateY(-2px); }
.ic-icon { font-size: 2rem; margin-bottom: 8px; }
.icon-card h3 { margin-bottom: 8px; color: #1e293b; font-size: 1.05rem; }
.icon-card p { color: #475569; font-size: 0.9rem; margin: 0; }

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
.step-body p { color: #475569; font-size: 0.93rem; margin-top: 8px; }

.location-cards { display: flex; gap: 16px; }
.location-card {
  flex: 1;
  display: flex;
  gap: 14px;
  background: #f8fafc;
  border: 1px solid #e2e8f0;
  border-radius: 12px;
  padding: 22px 20px;
  transition: border-color 0.2s, transform 0.2s;
}
.location-card:hover { border-color: #93c5fd; transform: translateY(-2px); }
.loc-icon { font-size: 1.8rem; flex-shrink: 0; }
.loc-body strong { color: #1e293b; display: block; margin-bottom: 4px; }
.loc-body p { color: #475569; font-size: 0.9rem; margin: 0 0 6px 0; }
.loc-example { color: #64748b; font-size: 0.85rem; font-style: italic; }

.tip-list { display: flex; flex-direction: column; gap: 12px; }
.tip-row {
  display: flex;
  align-items: flex-start;
  gap: 12px;
  background: #f8fafc;
  border: 1px solid #e2e8f0;
  border-radius: 10px;
  padding: 14px 18px;
  transition: border-color 0.2s;
}
.tip-row:hover { border-color: #93c5fd; }
.tip-emoji { font-size: 1.3rem; flex-shrink: 0; }
.tip-row div { color: #334155; font-size: 0.93rem; line-height: 1.6; }

@media (max-width: 768px) {
  .hero-section { padding: 32px 18px 28px; }
  .hero-icon { font-size: 2.2rem; }
  .hero-section h1 { font-size: 1.4rem; }
  .hero-desc { font-size: 1rem; }
  .icon-card-grid { grid-template-columns: 1fr; }
  .location-cards { flex-direction: column; }
  .step-card { flex-direction: column; gap: 12px; }
}
</style>
