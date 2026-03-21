<template>
  <div class="page-content">
    <div class="hero-section">
      <div class="hero-icon">🖥️</div>
      <h1>IDE 연동</h1>
      <p class="hero-desc">VS Code 같은 편집기 안에서 <strong>Claude를 바로 사용</strong>하는 방법</p>
      <div class="hero-tags">
        <span class="tag">VS Code</span>
        <span class="tag">JetBrains</span>
        <span class="tag">시각적 편집</span>
      </div>
    </div>

    <section>
      <h2>IDE 연동이란?</h2>
      <div class="analogy-box">
        <div class="analogy-side">
          <div class="analogy-icon">📞</div>
          <strong>터미널에서 사용</strong>
          <p>"전화로 대화"하는 것</p>
        </div>
        <div class="analogy-vs">VS</div>
        <div class="analogy-side highlight">
          <div class="analogy-icon">🤝</div>
          <strong>IDE에서 사용</strong>
          <p>"옆자리에 앉아서 같이 화면 보면서 대화"</p>
        </div>
      </div>
    </section>

    <section>
      <h2>지원하는 편집기</h2>
      <div class="editor-cards">
        <div class="editor-card vscode">
          <div class="editor-icon">🟦</div>
          <strong>VS Code</strong>
          <p>가장 많이 쓰는 편집기. 확장 프로그램을 설치하면 바로 사용 가능합니다.</p>
        </div>
        <div class="editor-card jetbrains">
          <div class="editor-icon">🟧</div>
          <strong>JetBrains</strong>
          <p>IntelliJ, WebStorm, PyCharm 등에서도 사용할 수 있습니다.</p>
        </div>
      </div>
    </section>

    <section>
      <h2>VS Code에서 시작하기</h2>
      <div class="step-cards">
        <div class="step-card">
          <div class="step-number">1</div>
          <div class="step-body">
            <strong>VS Code를 엽니다</strong>
          </div>
        </div>
        <div class="step-card">
          <div class="step-number">2</div>
          <div class="step-body">
            <strong>확장 프로그램 열기</strong>
            <p>왼쪽 사이드바의 확장 프로그램 아이콘을 클릭합니다</p>
          </div>
        </div>
        <div class="step-card">
          <div class="step-number">3</div>
          <div class="step-body">
            <strong>"Claude Code" 검색 후 설치</strong>
          </div>
        </div>
        <div class="step-card">
          <div class="step-number">4</div>
          <div class="step-body">
            <strong>사용 시작</strong>
            <p>왼쪽 사이드바에 Claude 아이콘이 생깁니다</p>
          </div>
        </div>
      </div>
    </section>

    <section>
      <h2>IDE에서 쓰면 뭐가 좋은가?</h2>
      <div class="benefit-grid">
        <div class="benefit-card">
          <div class="benefit-icon">👆</div>
          <strong>코드를 바로 보여줄 수 있음</strong>
          <p>코드를 드래그해서 선택한 뒤 "이 부분 설명해줘"라고 하면 됩니다.</p>
        </div>
        <div class="benefit-card">
          <div class="benefit-icon">🎨</div>
          <strong>변경 내용을 눈으로 확인</strong>
          <p>Claude가 수정한 부분을 색깔로 구분해서 보여줍니다. 마음에 들면 적용, 아니면 취소.</p>
        </div>
        <div class="benefit-card">
          <div class="benefit-icon">🔄</div>
          <strong>화면 전환이 필요 없음</strong>
          <p>편집기 안에서 코딩과 AI 대화를 동시에 할 수 있습니다.</p>
        </div>
        <div class="benefit-card">
          <div class="benefit-icon">📂</div>
          <strong>프로젝트 구조를 자동으로 이해</strong>
          <p>현재 열린 파일과 프로젝트 구조를 Claude가 자동으로 파악합니다.</p>
        </div>
      </div>
    </section>

    <section>
      <h2>터미널 vs IDE, 뭘 쓸까?</h2>
      <div class="compare-rows">
        <div class="compare-row">
          <div class="compare-situation">코드를 직접 보면서 수정하고 싶을 때</div>
          <div class="compare-badge ide">IDE 연동</div>
        </div>
        <div class="compare-row">
          <div class="compare-situation">간단한 질문, 빠른 작업</div>
          <div class="compare-badge terminal">터미널</div>
        </div>
        <div class="compare-row">
          <div class="compare-situation">자동화 스크립트에 연결할 때</div>
          <div class="compare-badge terminal">터미널</div>
        </div>
        <div class="compare-row">
          <div class="compare-situation">처음 배우는 중일 때</div>
          <div class="compare-badge ide">IDE 연동</div>
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

/* === Analogy Box === */
.analogy-box { display: flex; align-items: stretch; gap: 0; margin: 20px 0; }
.analogy-side { flex: 1; padding: 24px 20px; border-radius: 12px; text-align: center; background: #f8fafc; border: 1px solid #e2e8f0; }
.analogy-side.highlight { background: #eff6ff; border: 2px solid #93c5fd; }
.analogy-icon { font-size: 2rem; margin-bottom: 8px; }
.analogy-side strong { display: block; font-size: 1rem; color: #1e293b; margin-bottom: 6px; }
.analogy-side p { font-size: 0.88rem; color: #64748b; margin: 0 !important; }
.analogy-vs { display: flex; align-items: center; justify-content: center; font-size: 1rem; font-weight: 800; color: #94a3b8; padding: 0 12px; flex-shrink: 0; }

/* === Editor Cards === */
.editor-cards { display: grid; grid-template-columns: repeat(2, 1fr); gap: 16px; margin: 20px 0; }
.editor-card { border-radius: 12px; padding: 24px 20px; text-align: center; transition: transform 0.2s; }
.editor-card:hover { transform: translateY(-2px); }
.editor-card.vscode { background: #eff6ff; border: 2px solid #93c5fd; }
.editor-card.jetbrains { background: #fef3c7; border: 2px solid #fcd34d; }
.editor-icon { font-size: 2.2rem; margin-bottom: 8px; }
.editor-card strong { display: block; font-size: 1.1rem; color: #1e293b; margin-bottom: 8px; }
.editor-card p { font-size: 0.88rem; color: #64748b; margin: 0 !important; }

/* === Step Cards === */
.step-cards { display: flex; flex-direction: column; gap: 12px; margin: 20px 0; }
.step-card { display: flex; align-items: flex-start; gap: 16px; background: #f8fafc; border: 1px solid #e2e8f0; border-radius: 12px; padding: 20px 24px; transition: border-color 0.2s, transform 0.2s; }
.step-card:hover { border-color: #93c5fd; transform: translateY(-2px); }
.step-number { width: 36px; height: 36px; background: linear-gradient(135deg, #3b82f6, #6366f1); color: #fff; border-radius: 50%; display: flex; align-items: center; justify-content: center; font-weight: 700; font-size: 1rem; flex-shrink: 0; }
.step-body strong { display: block; font-size: 1.05rem; color: #1e293b; margin-bottom: 4px; }
.step-body p { font-size: 0.9rem; color: #64748b; margin: 0 !important; }

/* === Benefit Grid === */
.benefit-grid { display: grid; grid-template-columns: repeat(2, 1fr); gap: 16px; margin: 20px 0; }
.benefit-card { background: #f8fafc; border: 1px solid #e2e8f0; border-radius: 12px; padding: 24px 20px; transition: border-color 0.2s, transform 0.2s; }
.benefit-card:hover { border-color: #93c5fd; transform: translateY(-2px); }
.benefit-icon { font-size: 1.8rem; margin-bottom: 8px; }
.benefit-card strong { display: block; font-size: 0.95rem; color: #1e293b; margin-bottom: 6px; }
.benefit-card p { font-size: 0.85rem; color: #64748b; margin: 0 !important; }

/* === Compare Rows === */
.compare-rows { display: flex; flex-direction: column; gap: 8px; margin: 20px 0; }
.compare-row { display: flex; align-items: center; justify-content: space-between; background: #f8fafc; border: 1px solid #e2e8f0; border-radius: 10px; padding: 14px 20px; transition: border-color 0.2s; }
.compare-row:hover { border-color: #93c5fd; }
.compare-situation { font-size: 0.92rem; color: #334155; }
.compare-badge { font-size: 0.78rem; font-weight: 700; padding: 4px 14px; border-radius: 20px; flex-shrink: 0; }
.compare-badge.ide { background: #eff6ff; color: #2563eb; border: 1px solid #93c5fd; }
.compare-badge.terminal { background: #f0fdf4; color: #16a34a; border: 1px solid #86efac; }

/* === Responsive === */
@media (max-width: 768px) {
  .hero-section { padding: 36px 20px 32px; }
  .hero-section h1 { font-size: 1.6rem; }
  .analogy-box { flex-direction: column; gap: 8px; }
  .analogy-vs { padding: 4px 0; }
  .editor-cards { grid-template-columns: 1fr; }
  .benefit-grid { grid-template-columns: 1fr; }
  .compare-row { flex-direction: column; align-items: flex-start; gap: 8px; }
}
</style>
