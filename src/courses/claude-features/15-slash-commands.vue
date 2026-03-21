<template>
  <div class="page-content">
    <!-- Hero Section -->
    <div class="hero-section">
      <div class="hero-icon">⌨️</div>
      <h1>슬래시 명령어</h1>
      <p class="hero-desc">Claude Code에서 자주 쓰는 <code style="color: #93c5fd; background: rgba(255,255,255,0.1); padding: 2px 6px; border-radius: 4px;">/</code> 명령어 모음입니다</p>
    </div>

    <!-- 슬래시 명령어란? -->
    <section class="slide-section">
      <h2 class="section-title">슬래시 명령어란?</h2>
      <p class="section-desc">Claude Code에서 <code>/</code>로 시작하는 명령어를 입력하면 특정 기능을 바로 실행합니다. 대화 중에 <code>/</code>만 입력하면 사용 가능한 전체 목록이 뜹니다.</p>
    </section>

    <!-- 꼭 알아야 할 명령어 -->
    <section class="slide-section">
      <h2 class="section-title">꼭 알아야 할 명령어</h2>
      <div class="cmd-card-grid">
        <div class="cmd-card">
          <div class="cmd-name"><code>/help</code></div>
          <p>도움말 보기</p>
        </div>
        <div class="cmd-card">
          <div class="cmd-name"><code>/clear</code></div>
          <p>대화 초기화 (새로 시작)</p>
        </div>
        <div class="cmd-card">
          <div class="cmd-name"><code>/compact</code></div>
          <p>대화 내용 요약해서 공간 확보</p>
        </div>
        <div class="cmd-card">
          <div class="cmd-name"><code>/model</code></div>
          <p>AI 모델 변경 (Opus, Sonnet 등)</p>
        </div>
        <div class="cmd-card">
          <div class="cmd-name"><code>/usage</code></div>
          <p>사용량 한도 확인</p>
        </div>
      </div>
    </section>

    <!-- 작업할 때 유용한 명령어 -->
    <section class="slide-section">
      <h2 class="section-title">작업할 때 유용한 명령어</h2>
      <div class="cmd-card-grid">
        <div class="cmd-card">
          <div class="cmd-name"><code>/plan</code></div>
          <p>코드 수정 없이 계획만 세우기</p>
        </div>
        <div class="cmd-card">
          <div class="cmd-name"><code>/diff</code></div>
          <p>변경된 내용 한눈에 보기</p>
        </div>
        <div class="cmd-card">
          <div class="cmd-name"><code>/rewind</code></div>
          <p>이전 상태로 되돌리기</p>
        </div>
        <div class="cmd-card">
          <div class="cmd-name"><code>/resume</code></div>
          <p>이전 대화 이어서 하기</p>
        </div>
        <div class="cmd-card">
          <div class="cmd-name"><code>/copy</code></div>
          <p>마지막 응답을 클립보드에 복사</p>
        </div>
        <div class="cmd-card">
          <div class="cmd-name"><code>/export</code></div>
          <p>대화 내용을 파일로 저장</p>
        </div>
      </div>
    </section>

    <!-- 설정/관리 명령어 -->
    <section class="slide-section">
      <h2 class="section-title">설정/관리 명령어</h2>
      <div class="cmd-card-grid">
        <div class="cmd-card">
          <div class="cmd-name"><code>/init</code></div>
          <p>CLAUDE.md 가이드 파일 자동 생성</p>
        </div>
        <div class="cmd-card">
          <div class="cmd-name"><code>/memory</code></div>
          <p>메모리 확인/편집</p>
        </div>
        <div class="cmd-card">
          <div class="cmd-name"><code>/config</code></div>
          <p>설정 화면 열기</p>
        </div>
        <div class="cmd-card">
          <div class="cmd-name"><code>/permissions</code></div>
          <p>권한 설정 확인/변경</p>
        </div>
        <div class="cmd-card">
          <div class="cmd-name"><code>/mcp</code></div>
          <p>MCP 서버 연결 관리</p>
        </div>
        <div class="cmd-card">
          <div class="cmd-name"><code>/plugin</code></div>
          <p>플러그인 설치/관리</p>
        </div>
        <div class="cmd-card">
          <div class="cmd-name"><code>/skills</code></div>
          <p>사용 가능한 스킬 목록 보기</p>
        </div>
        <div class="cmd-card">
          <div class="cmd-name"><code>/doctor</code></div>
          <p>Claude Code 설치 상태 진단</p>
        </div>
      </div>
    </section>

    <!-- 자주 쓰는 조합 -->
    <section class="slide-section">
      <h2 class="section-title">자주 쓰는 조합</h2>
      <div class="combo-grid">
        <div class="combo-card">
          <div class="combo-flow">
            <span class="combo-cmd">/plan</span>
            <span class="combo-arrow">→</span>
            <span class="combo-label">확인</span>
            <span class="combo-arrow">→</span>
            <span class="combo-label">실행</span>
          </div>
          <p>큰 작업은 먼저 계획을 세운 후, 내용을 확인하고 실행합니다.</p>
        </div>
        <div class="combo-card">
          <div class="combo-flow">
            <span class="combo-cmd">/diff</span>
            <span class="combo-arrow">→</span>
            <span class="combo-cmd">/rewind</span>
          </div>
          <p>변경 내용을 확인하고, 마음에 안 들면 되돌립니다.</p>
        </div>
        <div class="combo-card">
          <div class="combo-flow">
            <span class="combo-cmd">/compact</span>
            <span class="combo-arrow">→</span>
            <span class="combo-label">작업 계속</span>
          </div>
          <p>대화가 길어지면 요약해서 공간을 확보한 뒤 이어서 작업합니다.</p>
        </div>
        <div class="combo-card">
          <div class="combo-flow">
            <span class="combo-cmd">/clear</span>
            <span class="combo-arrow">→</span>
            <span class="combo-label">새 주제 시작</span>
          </div>
          <p>주제가 바뀌면 깨끗하게 초기화하고 새로 시작합니다.</p>
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
.section-title { font-size: 1.5rem; margin-bottom: 16px; }
.section-desc { color: #475569; margin-bottom: 24px; font-size: 1.05rem; }

.cmd-card-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 14px;
}
.cmd-card {
  background: #f8fafc;
  border: 1px solid #e2e8f0;
  border-radius: 12px;
  padding: 18px 16px;
  text-align: center;
  transition: border-color 0.2s, transform 0.2s;
}
.cmd-card:hover { border-color: #93c5fd; transform: translateY(-2px); }
.cmd-name { margin-bottom: 8px; }
.cmd-name code {
  font-size: 1rem;
  font-weight: 700;
  color: #1e40af;
  background: #eff6ff;
  padding: 4px 12px;
  border-radius: 6px;
}
.cmd-card p { color: #475569; font-size: 0.88rem; margin: 0; }

.combo-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 16px;
}
.combo-card {
  background: #f8fafc;
  border: 1px solid #e2e8f0;
  border-radius: 12px;
  padding: 22px 20px;
  transition: border-color 0.2s, transform 0.2s;
}
.combo-card:hover { border-color: #93c5fd; transform: translateY(-2px); }
.combo-flow {
  display: flex;
  align-items: center;
  gap: 8px;
  margin-bottom: 12px;
  flex-wrap: wrap;
}
.combo-cmd {
  background: linear-gradient(135deg, #3b82f6, #2563eb);
  color: #fff;
  font-weight: 700;
  font-size: 0.85rem;
  padding: 4px 12px;
  border-radius: 6px;
}
.combo-arrow { color: #94a3b8; font-weight: 700; }
.combo-label { color: #334155; font-weight: 600; font-size: 0.88rem; }
.combo-card p { color: #475569; font-size: 0.88rem; margin: 0; }

@media (max-width: 768px) {
  .hero-section { padding: 32px 18px 28px; }
  .hero-icon { font-size: 2.2rem; }
  .hero-section h1 { font-size: 1.4rem; }
  .hero-desc { font-size: 1rem; }
  .cmd-card-grid { grid-template-columns: repeat(2, 1fr); }
  .combo-grid { grid-template-columns: 1fr; }
}
</style>
