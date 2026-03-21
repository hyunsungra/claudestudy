<template>
  <div class="page-content">
    <div class="hero-section">
      <div class="hero-icon">🚀</div>
      <h1>설치와 첫 실행</h1>
      <p class="hero-desc">3분이면 설치 완료. 터미널에서 바로 시작할 수 있습니다.</p>
    </div>

    <section>
      <h2>설치 전 체크사항</h2>
      <div class="checklist">
        <div class="check-item">
          <div class="check-icon">🖥️</div>
          <div class="check-text">
            <strong>지원 OS</strong>
            <p>macOS, Linux, Windows</p>
          </div>
        </div>
        <div class="check-item">
          <div class="check-icon">📦</div>
          <div class="check-text">
            <strong>Git 설치</strong>
            <p>Windows는 <a href="https://git-scm.com/downloads/win" target="_blank" rel="noopener">Git for Windows</a> 필수</p>
          </div>
        </div>
        <div class="check-item">
          <div class="check-icon">👤</div>
          <div class="check-text">
            <strong>Claude 계정</strong>
            <p><a href="https://claude.ai" target="_blank" rel="noopener">claude.ai</a>에서 가입 (유료 구독 또는 API 키)</p>
          </div>
        </div>
      </div>
    </section>

    <section>
      <h2>설치 방법</h2>

      <div class="install-tabs">
        <div class="install-group">
          <div class="install-badge recommended">권장</div>
          <h3>macOS / Linux</h3>
          <div class="code-block good">
            <p class="code-label">터미널에서 한 줄로 설치</p>
            <pre>curl -fsSL https://claude.ai/install.sh | bash</pre>
          </div>
        </div>

        <div class="install-group">
          <div class="install-badge recommended">권장</div>
          <h3>Windows (PowerShell)</h3>
          <div class="code-block good">
            <p class="code-label">PowerShell에서 설치</p>
            <pre>irm https://claude.ai/install.ps1 | iex</pre>
          </div>
          <div class="code-block">
            <p class="code-label">PATH 환경변수 등록 (설치 후 claude 명령이 안 될 때)</p>
            <pre>[Environment]::SetEnvironmentVariable(
  "PATH",
  "$env:PATH;$env:USERPROFILE\.local\bin",
  [EnvironmentVariableTarget]::User
)</pre>
          </div>
        </div>

        <div class="install-group other">
          <h3>기타 Windows 설치 방법</h3>
          <div class="other-methods">
            <div class="code-block">
              <p class="code-label">명령 프롬프트 (CMD)</p>
              <pre>curl -fsSL https://claude.ai/install.cmd -o install.cmd && install.cmd && del install.cmd</pre>
            </div>
            <div class="code-block">
              <p class="code-label">WinGet</p>
              <pre>winget install Anthropic.ClaudeCode</pre>
            </div>
          </div>
        </div>
      </div>

      <div class="warning-banner">
        <span class="warning-icon">⚠️</span>
        <p>예전에는 <code>npm install</code>로 설치했지만 현재는 <strong>더 이상 권장하지 않습니다</strong>. 위의 공식 설치 방법을 사용하세요.</p>
      </div>
    </section>

    <section>
      <h2>설치 확인</h2>
      <div class="verify-box">
        <div class="code-block">
          <p class="code-label">버전 확인</p>
          <pre>claude --version</pre>
        </div>
        <p class="verify-result">✅ 버전 번호가 출력되면 설치 성공!</p>
      </div>
    </section>

    <section>
      <h2>첫 실행</h2>
      <div class="steps">
        <div class="step">
          <div class="step-number">1</div>
          <div class="step-content">
            <strong>프로젝트 폴더로 이동</strong>
            <p>Claude Code는 "현재 폴더"를 기준으로 파일을 인식합니다</p>
          </div>
        </div>
        <div class="step">
          <div class="step-number">2</div>
          <div class="step-content">
            <strong><code>claude</code> 명령 실행</strong>
            <p>PowerShell, CMD, Git Bash 어디서든 가능</p>
          </div>
        </div>
        <div class="step">
          <div class="step-number">3</div>
          <div class="step-content">
            <strong>로그인</strong>
            <p>처음 실행하면 로그인 화면이 나옵니다. Claude 계정으로 로그인하세요</p>
          </div>
        </div>
      </div>

      <div class="code-block good">
        <p class="code-label">첫 실행</p>
        <pre># 프로젝트 폴더로 이동
cd 내프로젝트폴더

# Claude Code 실행
claude</pre>
      </div>
    </section>

    <section>
      <h2>프로젝트 초기 설정</h2>
      <div class="init-box">
        <div class="init-left">
          <div class="init-icon">⚙️</div>
          <p>처음 사용하는 프로젝트라면 <code>/init</code>을 실행하세요</p>
          <p class="init-desc">프로젝트를 분석해서 <code>CLAUDE.md</code> 파일을 자동으로 만들어줍니다. 이 파일이 있으면 Claude가 프로젝트 구조와 규칙을 항상 참고합니다.</p>
        </div>
        <div class="init-right">
          <div class="code-block good">
            <p class="code-label">초기 설정 자동 생성</p>
            <pre>/init</pre>
          </div>
        </div>
      </div>
    </section>

    <section>
      <h2>첫 대화 해보기</h2>
      <div class="try-grid">
        <div class="try-card">
          <div class="try-icon">🔍</div>
          <div class="try-label">프로젝트 파악</div>
          <div class="try-prompt">이 프로젝트가 뭐하는 건지 설명해줘</div>
        </div>
        <div class="try-card">
          <div class="try-icon">📄</div>
          <div class="try-label">파일 설명</div>
          <div class="try-prompt">src/App.vue 파일이 뭐하는 건지 알려줘</div>
        </div>
        <div class="try-card">
          <div class="try-icon">✏️</div>
          <div class="try-label">간단한 수정</div>
          <div class="try-prompt">README 파일에 프로젝트 설명 추가해줘</div>
        </div>
      </div>
      <div class="info-box">
        <p><strong>팁:</strong> <code>@</code> 문법을 사용하면 특정 파일을 콕 집어서 컨텍스트에 포함시킬 수 있습니다. 예: <code>@src/router.js 이 파일 기준으로 수정해줘</code></p>
      </div>
    </section>

    <section>
      <h2>다양한 실행 방법</h2>
      <div class="run-options">
        <div class="run-item">
          <div class="run-label">기본 대화형</div>
          <code>claude</code>
        </div>
        <div class="run-item">
          <div class="run-label">질문과 함께 바로</div>
          <code>claude "폴더 구조 설명해줘"</code>
        </div>
        <div class="run-item">
          <div class="run-label">지난 대화 이어서</div>
          <code>claude --continue</code>
        </div>
        <div class="run-item">
          <div class="run-label">모델 지정</div>
          <code>claude --model opus</code>
        </div>
      </div>
      <div class="info-box">
        <p><strong>공식 문서:</strong> OS별 상세 설치 방법은 <a href="https://docs.anthropic.com/en/docs/claude-code/getting-started" target="_blank" rel="noopener">Claude Code 공식 문서</a>에서 확인할 수 있습니다.</p>
      </div>
    </section>
  </div>
</template>

<style scoped>
/* === Hero === */
.hero-section {
  background: linear-gradient(135deg, #1e293b 0%, #334155 100%);
  border-radius: 16px;
  padding: 48px 36px 40px;
  text-align: center;
  margin-bottom: 40px;
}

.hero-icon {
  font-size: 3rem;
  margin-bottom: 12px;
}

.hero-section h1 {
  color: #f1f5f9;
  margin-bottom: 12px;
}

.hero-desc {
  color: #94a3b8 !important;
  font-size: 1.15rem;
  margin-bottom: 0 !important;
}

/* === Checklist === */
.checklist {
  display: flex;
  gap: 12px;
  margin: 20px 0;
}

.check-item {
  flex: 1;
  display: flex;
  align-items: center;
  gap: 12px;
  background: #f8fafc;
  border: 1px solid #e2e8f0;
  border-radius: 12px;
  padding: 18px;
}

.check-icon {
  font-size: 1.6rem;
  flex-shrink: 0;
}

.check-text strong {
  display: block;
  font-size: 0.95rem;
  color: #1e293b;
  margin-bottom: 2px;
}

.check-text p {
  font-size: 0.85rem;
  color: #64748b;
  margin: 0 !important;
}

.check-text a {
  color: #2563eb;
}

/* === Install Groups === */
.install-tabs {
  display: flex;
  flex-direction: column;
  gap: 24px;
  margin: 20px 0;
}

.install-group {
  position: relative;
  background: #f8fafc;
  border: 1px solid #e2e8f0;
  border-radius: 12px;
  padding: 24px;
}

.install-group h3 {
  margin-top: 0;
}

.install-group .code-block {
  margin-bottom: 8px;
}

.install-group .code-block:last-child {
  margin-bottom: 0;
}

.install-badge {
  display: inline-block;
  font-size: 0.72rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  padding: 2px 10px;
  border-radius: 10px;
  margin-bottom: 8px;
}

.install-badge.recommended {
  background: #dcfce7;
  color: #166534;
}

.install-group.other {
  background: #f1f5f9;
  border-color: #cbd5e1;
}

.other-methods {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 12px;
}

/* === Warning Banner === */
.warning-banner {
  display: flex;
  align-items: center;
  gap: 12px;
  background: #fffbeb;
  border: 1px solid #fde68a;
  border-left: 4px solid #f59e0b;
  border-radius: 8px;
  padding: 14px 18px;
  margin: 16px 0;
}

.warning-icon {
  font-size: 1.3rem;
  flex-shrink: 0;
}

.warning-banner p {
  margin: 0 !important;
  font-size: 0.9rem;
  color: #92400e;
}

/* === Verify === */
.verify-box {
  background: #f8fafc;
  border: 1px solid #e2e8f0;
  border-radius: 12px;
  padding: 20px;
}

.verify-result {
  margin: 8px 0 0 !important;
  font-weight: 600;
  color: #166534 !important;
  font-size: 0.95rem;
}

/* === Steps === */
.steps {
  display: flex;
  gap: 16px;
  margin: 20px 0;
}

.step {
  flex: 1;
  display: flex;
  gap: 14px;
  align-items: center;
  background: #f8fafc;
  border: 1px solid #e2e8f0;
  border-radius: 12px;
  padding: 20px;
}

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

.step-content strong {
  display: block;
  font-size: 0.95rem;
  color: #1e293b;
  margin-bottom: 2px;
}

.step-content p {
  font-size: 0.85rem;
  color: #64748b;
  margin: 0 !important;
}

/* === Init Box === */
.init-box {
  display: flex;
  gap: 24px;
  align-items: center;
  background: #f8fafc;
  border: 1px solid #e2e8f0;
  border-radius: 12px;
  padding: 24px;
  margin: 16px 0;
}

.init-left {
  flex: 1;
}

.init-icon {
  font-size: 2rem;
  margin-bottom: 8px;
}

.init-left p {
  font-size: 0.95rem;
  margin-bottom: 4px !important;
}

.init-desc {
  font-size: 0.85rem !important;
  color: #64748b !important;
}

.init-right {
  flex-shrink: 0;
  min-width: 200px;
}

/* === Try Grid === */
.try-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 12px;
  margin: 20px 0;
}

.try-card {
  background: #f8fafc;
  border: 1px solid #e2e8f0;
  border-radius: 12px;
  padding: 20px;
  text-align: center;
  transition: border-color 0.2s, transform 0.2s;
}

.try-card:hover {
  border-color: #93c5fd;
  transform: translateY(-2px);
}

.try-icon {
  font-size: 1.8rem;
  margin-bottom: 8px;
}

.try-label {
  font-weight: 700;
  color: #1e293b;
  font-size: 0.95rem;
  margin-bottom: 8px;
}

.try-prompt {
  background: #1e293b;
  color: #a5b4fc;
  font-size: 0.8rem;
  padding: 8px 12px;
  border-radius: 6px;
  font-family: 'JetBrains Mono', 'Fira Code', monospace;
}

/* === Run Options === */
.run-options {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 10px;
  margin: 20px 0;
}

.run-item {
  display: flex;
  align-items: center;
  gap: 12px;
  background: #f8fafc;
  border: 1px solid #e2e8f0;
  border-radius: 10px;
  padding: 14px 18px;
}

.run-label {
  font-size: 0.82rem;
  font-weight: 600;
  color: #64748b;
  white-space: nowrap;
  min-width: 100px;
}

.run-item code {
  font-size: 0.85rem;
}

/* === Responsive === */
@media (max-width: 768px) {
  .hero-section {
    padding: 36px 20px 32px;
  }

  .hero-section h1 {
    font-size: 1.6rem;
  }

  .checklist {
    flex-direction: column;
  }

  .steps {
    flex-direction: column;
  }

  .other-methods {
    grid-template-columns: 1fr;
  }

  .init-box {
    flex-direction: column;
  }

  .init-right {
    min-width: 100%;
  }

  .try-grid {
    grid-template-columns: 1fr;
  }

  .run-options {
    grid-template-columns: 1fr;
  }
}
</style>
