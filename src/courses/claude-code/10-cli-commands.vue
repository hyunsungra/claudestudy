<template>
  <div class="page-content">
    <div class="hero-section">
      <div class="hero-icon">⌨️</div>
      <h1>CLI 명령어와 단축키</h1>
      <p class="hero-desc">Claude Code를 <strong>더 빠르게</strong> 사용할 수 있는 명령어와 단축키</p>
    </div>

    <section>
      <h2>Claude Code 실행하기</h2>
      <div class="cmd-cards">
        <div class="cmd-card">
          <div class="cmd-header">
            <code class="cmd-code">claude</code>
            <span class="cmd-desc">대화 시작</span>
          </div>
        </div>
        <div class="cmd-card">
          <div class="cmd-header">
            <code class="cmd-code">claude "질문 내용"</code>
            <span class="cmd-desc">질문과 함께 바로 시작</span>
          </div>
        </div>
        <div class="cmd-card">
          <div class="cmd-header">
            <code class="cmd-code">claude --continue</code>
            <span class="cmd-desc">지난 대화 이어서 하기</span>
          </div>
        </div>
      </div>
    </section>

    <section>
      <h2>자주 쓰는 키보드 단축키</h2>
      <div class="shortcut-grid">
        <div class="shortcut-card">
          <div class="shortcut-key">Enter</div>
          <div class="shortcut-label">메시지 보내기</div>
        </div>
        <div class="shortcut-card">
          <div class="shortcut-key">Shift + Enter</div>
          <div class="shortcut-label">줄바꿈 (보내지 않고 다음 줄로)</div>
        </div>
        <div class="shortcut-card">
          <div class="shortcut-key">Ctrl + C</div>
          <div class="shortcut-label">현재 작업 취소</div>
        </div>
        <div class="shortcut-card">
          <div class="shortcut-key">Ctrl + D</div>
          <div class="shortcut-label">Claude Code 종료</div>
        </div>
        <div class="shortcut-card">
          <div class="shortcut-key">Ctrl + L</div>
          <div class="shortcut-label">화면 깨끗하게 지우기</div>
        </div>
        <div class="shortcut-card">
          <div class="shortcut-key">Esc + Esc</div>
          <div class="shortcut-label">되돌리기</div>
        </div>
        <div class="shortcut-card">
          <div class="shortcut-key-group">
            <span class="shortcut-key small">↑</span>
            <span class="shortcut-key small">↓</span>
          </div>
          <div class="shortcut-label">이전에 입력했던 내용 불러오기</div>
        </div>
      </div>
      <div class="info-box">
        <p><strong>팁:</strong> 대화 중 <code>?</code>를 입력하면 사용 가능한 단축키 목록을 볼 수 있습니다.</p>
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
.hero-desc { color: #94a3b8 !important; font-size: 1.15rem; margin-bottom: 0 !important; }
.hero-desc strong { color: #e2e8f0; }

/* === Command Cards === */
.cmd-cards { display: flex; flex-direction: column; gap: 10px; margin: 20px 0; }
.cmd-card { background: #f8fafc; border: 1px solid #e2e8f0; border-radius: 12px; padding: 16px 20px; transition: border-color 0.2s; }
.cmd-card:hover { border-color: #93c5fd; }
.cmd-header { display: flex; align-items: center; gap: 16px; }
.cmd-code { background: #1e293b; color: #a5b4fc; padding: 6px 14px; border-radius: 8px; font-size: 0.9rem; font-weight: 600; white-space: nowrap; }
.cmd-desc { font-size: 0.92rem; color: #64748b; }

/* === Shortcut Grid === */
.shortcut-grid { display: grid; grid-template-columns: repeat(2, 1fr); gap: 12px; margin: 20px 0; }
.shortcut-card { background: #f8fafc; border: 1px solid #e2e8f0; border-radius: 12px; padding: 20px; display: flex; flex-direction: column; align-items: center; text-align: center; gap: 10px; transition: border-color 0.2s, transform 0.2s; }
.shortcut-card:hover { border-color: #93c5fd; transform: translateY(-2px); }
.shortcut-key { display: inline-block; background: #1e293b; color: #e2e8f0; padding: 8px 16px; border-radius: 8px; font-family: 'Courier New', monospace; font-size: 0.88rem; font-weight: 700; border-bottom: 3px solid #0f172a; min-width: 60px; }
.shortcut-key.small { padding: 6px 12px; font-size: 0.82rem; min-width: auto; }
.shortcut-key-group { display: flex; gap: 6px; }
.shortcut-label { font-size: 0.88rem; color: #475569; }

/* === Responsive === */
@media (max-width: 768px) {
  .hero-section { padding: 36px 20px 32px; }
  .hero-section h1 { font-size: 1.6rem; }
  .shortcut-grid { grid-template-columns: 1fr; }
  .cmd-header { flex-direction: column; align-items: flex-start; gap: 8px; }
}
</style>
