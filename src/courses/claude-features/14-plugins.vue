<template>
  <div class="page-content">
    <!-- Hero Section -->
    <div class="hero-section">
      <div class="hero-icon">🧩</div>
      <h1>Plugins (플러그인)</h1>
      <p class="hero-desc">다른 사람이 만든 기능을 설치해서 Claude를 확장하는 방법입니다</p>
    </div>

    <!-- 플러그인이란? -->
    <section class="slide-section">
      <h2 class="section-title">플러그인이란?</h2>
      <p class="section-desc"><strong>플러그인</strong>은 다른 사람(또는 회사)이 미리 만들어둔 기능을 설치해서 Claude Code에 추가하는 것입니다. 직접 만들 필요 없이 설치만 하면 바로 사용할 수 있습니다.</p>
      <div class="analogy-card">
        <div class="analogy-icon">💡</div>
        <div class="analogy-content">
          <strong>비유:</strong> 스마트폰의 앱스토어에서 앱을 설치하는 것과 같습니다. 누군가 만들어둔 기능을 내려받아서 쓰면 됩니다.
        </div>
      </div>
    </section>

    <!-- 플러그인 vs 스킬 -->
    <section class="slide-section">
      <h2 class="section-title">플러그인 vs 스킬 차이</h2>
      <div class="vs-container">
        <div class="vs-side">
          <div class="vs-header skill">⚡ 스킬 (Skills)</div>
          <div class="vs-rows">
            <div class="vs-row">
              <span class="vs-label">만드는 사람</span>
              <span class="vs-value">내가 직접 만듦</span>
            </div>
            <div class="vs-row">
              <span class="vs-label">설치 방법</span>
              <span class="vs-value">.claude/skills/ 폴더에 파일 작성</span>
            </div>
            <div class="vs-row">
              <span class="vs-label">저장 위치</span>
              <span class="vs-value">프로젝트 안</span>
            </div>
            <div class="vs-row">
              <span class="vs-label">적용 범위</span>
              <span class="vs-value">해당 프로젝트만</span>
            </div>
          </div>
        </div>
        <div class="vs-divider">VS</div>
        <div class="vs-side">
          <div class="vs-header plugin">🧩 플러그인 (Plugins)</div>
          <div class="vs-rows">
            <div class="vs-row">
              <span class="vs-label">만드는 사람</span>
              <span class="vs-value">다른 사람이 만들어서 공유</span>
            </div>
            <div class="vs-row">
              <span class="vs-label">설치 방법</span>
              <span class="vs-value"><code>/plugin</code> 명령어로 설치</span>
            </div>
            <div class="vs-row">
              <span class="vs-label">저장 위치</span>
              <span class="vs-value">내 컴퓨터 전역</span>
            </div>
            <div class="vs-row">
              <span class="vs-label">적용 범위</span>
              <span class="vs-value">모든 프로젝트에서 사용 가능</span>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- 가장 쉽게 설치하는 방법 -->
    <section class="slide-section">
      <h2 class="section-title">가장 쉽게 설치하는 방법</h2>
      <p class="section-desc"><strong>Claude에게 대화로 요청</strong>하거나, 명령어를 사용하면 됩니다.</p>

      <div class="step-cards">
        <div class="step-card">
          <div class="step-number">1</div>
          <div class="step-body">
            <h3>대화로 플러그인 설치하기</h3>
            <div class="code-block good">
              <pre>코드 리뷰 플러그인을 설치해줘</pre>
            </div>
          </div>
        </div>
        <div class="step-card">
          <div class="step-number">2</div>
          <div class="step-body">
            <h3>명령어로 관리하기</h3>
            <div class="code-block">
              <p class="code-label">플러그인 관리 화면 열기</p>
              <pre>/plugin</pre>
            </div>
            <p><code>/plugin</code> 명령어를 실행하면 플러그인을 검색하고 설치할 수 있는 화면이 열립니다.</p>
          </div>
        </div>
      </div>
    </section>

    <!-- 플러그인 활용 예시 -->
    <section class="slide-section">
      <h2 class="section-title">플러그인 활용 예시</h2>
      <div class="plugin-grid">
        <div class="plugin-card">
          <div class="pg-icon">🔍</div>
          <h3>코드 리뷰</h3>
          <p>PR의 변경사항을 자동으로 분석하고 리뷰해주는 플러그인을 설치할 수 있습니다.</p>
        </div>
        <div class="plugin-card">
          <div class="pg-icon">📝</div>
          <h3>문서 생성</h3>
          <p>코드를 분석해서 API 문서나 사용 가이드를 자동으로 만들어주는 플러그인이 있습니다.</p>
        </div>
        <div class="plugin-card">
          <div class="pg-icon">🧪</div>
          <h3>테스트 도구</h3>
          <p>코드 변경 후 자동으로 관련 테스트를 찾아서 실행해주는 플러그인을 사용할 수 있습니다.</p>
        </div>
        <div class="plugin-card">
          <div class="pg-icon">🚀</div>
          <h3>배포 도우미</h3>
          <p>배포 전 체크리스트를 자동으로 확인하고 배포를 도와주는 플러그인이 있습니다.</p>
        </div>
      </div>
    </section>

    <!-- 비교 정리 -->
    <section class="slide-section">
      <h2 class="section-title">스킬, 에이전트, MCP, 플러그인 — 뭐가 다른 거야?</h2>
      <div class="compare-cards">
        <div class="compare-card">
          <div class="cp-icon">⚡</div>
          <strong>스킬</strong>
          <p>내가 만드는 단축 명령어 (<code>/명령어</code>)</p>
        </div>
        <div class="compare-card">
          <div class="cp-icon">🤖</div>
          <strong>에이전트</strong>
          <p>내가 만드는 전문 AI 보조원</p>
        </div>
        <div class="compare-card">
          <div class="cp-icon">🔌</div>
          <strong>MCP</strong>
          <p>외부 서비스 연결 (GitHub, DB 등)</p>
        </div>
        <div class="compare-card">
          <div class="cp-icon">🧩</div>
          <strong>플러그인</strong>
          <p>남이 만들어둔 기능을 설치해서 사용</p>
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

.vs-container {
  display: flex;
  align-items: stretch;
  gap: 16px;
}
.vs-side {
  flex: 1;
  background: #f8fafc;
  border: 1px solid #e2e8f0;
  border-radius: 12px;
  overflow: hidden;
}
.vs-header {
  padding: 14px 18px;
  font-weight: 700;
  font-size: 1rem;
  color: #fff;
  text-align: center;
}
.vs-header.skill { background: linear-gradient(135deg, #3b82f6, #2563eb); }
.vs-header.plugin { background: linear-gradient(135deg, #8b5cf6, #7c3aed); }
.vs-rows { padding: 6px 0; }
.vs-row {
  display: flex;
  justify-content: space-between;
  padding: 10px 18px;
  border-bottom: 1px solid #f1f5f9;
  font-size: 0.9rem;
}
.vs-row:last-child { border-bottom: none; }
.vs-label { color: #64748b; font-weight: 500; }
.vs-value { color: #334155; font-weight: 600; text-align: right; }
.vs-divider {
  display: flex;
  align-items: center;
  font-weight: 800;
  font-size: 1rem;
  color: #94a3b8;
  flex-shrink: 0;
}

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

.plugin-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 16px;
}
.plugin-card {
  background: #f8fafc;
  border: 1px solid #e2e8f0;
  border-radius: 12px;
  padding: 24px 20px;
  text-align: center;
  transition: border-color 0.2s, transform 0.2s;
}
.plugin-card:hover { border-color: #93c5fd; transform: translateY(-2px); }
.pg-icon { font-size: 2rem; margin-bottom: 8px; }
.plugin-card h3 { margin-bottom: 8px; color: #1e293b; font-size: 1.05rem; }
.plugin-card p { color: #475569; font-size: 0.9rem; margin: 0; }

.compare-cards {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 14px;
}
.compare-card {
  background: #f8fafc;
  border: 1px solid #e2e8f0;
  border-radius: 12px;
  padding: 20px 14px;
  text-align: center;
  transition: border-color 0.2s, transform 0.2s;
}
.compare-card:hover { border-color: #93c5fd; transform: translateY(-2px); }
.cp-icon { font-size: 1.8rem; margin-bottom: 6px; }
.compare-card strong { display: block; color: #1e293b; margin-bottom: 6px; }
.compare-card p { color: #475569; font-size: 0.83rem; margin: 0; }

@media (max-width: 768px) {
  .hero-section { padding: 32px 18px 28px; }
  .hero-icon { font-size: 2.2rem; }
  .hero-section h1 { font-size: 1.4rem; }
  .hero-desc { font-size: 1rem; }
  .vs-container { flex-direction: column; }
  .vs-divider { justify-content: center; padding: 4px 0; }
  .plugin-grid { grid-template-columns: 1fr; }
  .compare-cards { grid-template-columns: repeat(2, 1fr); }
  .step-card { flex-direction: column; gap: 12px; }
}
</style>
