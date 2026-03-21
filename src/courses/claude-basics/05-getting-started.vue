<template>
  <div class="page-content">
    <!-- Hero Section -->
    <div class="hero-section">
      <div class="hero-icon">🚀</div>
      <h1>Claude 시작하기</h1>
      <p class="hero-desc">지금 바로 Claude를 사용해봅시다.</p>
    </div>

    <!-- Claude 소개 -->
    <section>
      <h2>Claude 소개</h2>
      <p><strong>Claude</strong>는 미국 AI 기업 <a href="https://www.anthropic.com" target="_blank" rel="noopener">Anthropic</a>이 개발한 대화형 AI 어시스턴트입니다. 자연어를 이해하고 생성할 수 있는 대규모 언어 모델(LLM)을 기반으로, 글쓰기, 코딩, 분석, 번역 등 다양한 작업을 수행합니다.</p>
      <div class="feature-highlights">
        <div class="highlight-item">
          <span class="highlight-icon">📄</span>
          <div>
            <strong>긴 문맥 처리</strong>
            <p>최대 100만 토큰</p>
          </div>
        </div>
        <div class="highlight-item">
          <span class="highlight-icon">🖼️</span>
          <div>
            <strong>멀티모달 입력</strong>
            <p>이미지, PDF 등 지원</p>
          </div>
        </div>
        <div class="highlight-item">
          <span class="highlight-icon">🛡️</span>
          <div>
            <strong>AI 안전성</strong>
            <p>안전 중심 설계</p>
          </div>
        </div>
      </div>
    </section>

    <!-- 1. 가입하기 -->
    <section>
      <h2>1. 가입하기</h2>
      <div class="step-cards">
        <div class="step-card">
          <div class="step-number">1</div>
          <div class="step-body">
            <strong><a href="https://claude.ai" target="_blank" rel="noopener">claude.ai</a>에 접속합니다.</strong>
          </div>
        </div>
        <div class="step-card">
          <div class="step-number">2</div>
          <div class="step-body">
            <strong>이메일 주소로 회원가입</strong> 또는 Google 계정으로 로그인합니다.
          </div>
        </div>
        <div class="step-card">
          <div class="step-number">3</div>
          <div class="step-body">
            가입 즉시 <strong>무료로 Claude를 사용</strong>할 수 있습니다.
          </div>
        </div>
      </div>
      <div class="tip-box">
        <span class="tip-icon">💡</span>
        <p>무료 계정으로도 Sonnet 모델을 사용할 수 있으며, 일일 사용량 제한이 있습니다.</p>
      </div>
    </section>

    <!-- 2. 첫 대화 시작하기 -->
    <section>
      <h2>2. 첫 대화 시작하기</h2>
      <p>가입 후 바로 대화를 시작할 수 있습니다. 간단한 예시를 따라해보세요:</p>
      <div class="code-block">
        <p class="code-label">프롬프트 예시</p>
        <pre>안녕하세요! 저는 AI를 처음 배우는 직장인입니다.
AI가 제 업무에 어떻게 도움이 될 수 있는지
3가지만 간단히 알려주세요.</pre>
      </div>
    </section>

    <!-- 3. 주요 기능 살펴보기 -->
    <section>
      <h2>3. 주요 기능 살펴보기</h2>

      <!-- 대화하기 Mock UI -->
      <div class="mock-feature">
        <div class="feature-header">
          <span class="feature-badge">💬</span>
          <div>
            <h3>대화하기</h3>
            <p>질문을 입력하면 Claude가 답변합니다. 이전 대화 내용을 기억하고 이어서 대화할 수 있습니다.</p>
          </div>
        </div>
        <div class="mock-chat">
          <div class="mock-chat-window">
            <div class="mock-chat-header">
              <span class="mock-dot red"></span>
              <span class="mock-dot yellow"></span>
              <span class="mock-dot green"></span>
              <span class="mock-chat-title">Claude</span>
            </div>
            <div class="mock-chat-body">
              <div class="mock-msg user">
                <div class="mock-avatar user-avatar">나</div>
                <div class="mock-bubble user-bubble">파이썬으로 피보나치 수열 함수 만들어줘</div>
              </div>
              <div class="mock-msg ai">
                <div class="mock-avatar ai-avatar">C</div>
                <div class="mock-bubble ai-bubble">
                  네! 피보나치 수열을 구하는 함수를 만들어 드리겠습니다.<br><br>
                  <code>def fibonacci(n):</code><br>
                  <code>&nbsp;&nbsp;a, b = 0, 1</code><br>
                  <code>&nbsp;&nbsp;for _ in range(n):</code><br>
                  <code>&nbsp;&nbsp;&nbsp;&nbsp;a, b = b, a + b</code><br>
                  <code>&nbsp;&nbsp;return a</code>
                </div>
              </div>
              <div class="mock-msg user">
                <div class="mock-avatar user-avatar">나</div>
                <div class="mock-bubble user-bubble">재귀 방식으로도 보여줘</div>
              </div>
            </div>
            <div class="mock-chat-input">
              <span class="mock-input-placeholder">Claude에게 메시지 보내기...</span>
              <span class="mock-send-btn">&#10148;</span>
            </div>
          </div>
        </div>
      </div>

      <!-- 파일 첨부 Mock UI -->
      <div class="mock-feature">
        <div class="feature-header">
          <span class="feature-badge">📎</span>
          <div>
            <h3>파일 첨부</h3>
            <p>PDF, 이미지, 코드 파일 등을 첨부하여 분석을 요청할 수 있습니다.</p>
          </div>
        </div>
        <div class="mock-upload">
          <div class="mock-chat-window">
            <div class="mock-chat-header">
              <span class="mock-dot red"></span>
              <span class="mock-dot yellow"></span>
              <span class="mock-dot green"></span>
              <span class="mock-chat-title">Claude</span>
            </div>
            <div class="mock-chat-body">
              <div class="mock-msg user">
                <div class="mock-avatar user-avatar">나</div>
                <div class="mock-bubble user-bubble">
                  <div class="mock-file-chips">
                    <span class="mock-file-chip pdf">
                      <span class="file-icon">PDF</span>
                      매출보고서_2024.pdf
                    </span>
                    <span class="mock-file-chip img">
                      <span class="file-icon">IMG</span>
                      차트_캡처.png
                    </span>
                  </div>
                  이 보고서의 핵심 내용을 요약하고, 차트의 트렌드를 분석해주세요.
                </div>
              </div>
              <div class="mock-msg ai">
                <div class="mock-avatar ai-avatar">C</div>
                <div class="mock-bubble ai-bubble">
                  <strong>매출보고서 요약</strong><br>
                  • 2024년 총 매출: 전년 대비 23% 성장<br>
                  • 3분기에 가장 높은 성장률 기록 (+35%)<br>
                  • 온라인 채널 비중이 40% → 58%로 확대<br><br>
                  <strong>차트 분석</strong><br>
                  • 우상향 추세가 뚜렷하며, 특히 7~9월 구간...
                </div>
              </div>
            </div>
            <div class="mock-chat-input">
              <span class="mock-attach-btn">&#128206;</span>
              <span class="mock-input-placeholder">파일을 드래그하거나 클릭하여 첨부...</span>
              <span class="mock-send-btn">&#10148;</span>
            </div>
          </div>
        </div>
      </div>

      <!-- 프로젝트 Mock UI -->
      <div class="mock-feature">
        <div class="feature-header">
          <span class="feature-badge">📁</span>
          <div>
            <h3>프로젝트</h3>
            <p>관련 대화와 파일을 프로젝트로 묶어 체계적으로 관리할 수 있습니다.</p>
          </div>
        </div>
        <div class="mock-projects">
          <div class="mock-project-list">
            <div class="mock-project-item active">
              <div class="mock-project-icon">&#128188;</div>
              <div class="mock-project-info">
                <div class="mock-project-name">마케팅 전략</div>
                <div class="mock-project-desc">Instructions · 파일 3개 · 대화 12개</div>
              </div>
            </div>
            <div class="mock-project-item">
              <div class="mock-project-icon">&#128187;</div>
              <div class="mock-project-info">
                <div class="mock-project-name">웹앱 개발</div>
                <div class="mock-project-desc">Instructions · 파일 8개 · 대화 24개</div>
              </div>
            </div>
            <div class="mock-project-item">
              <div class="mock-project-icon">&#128218;</div>
              <div class="mock-project-info">
                <div class="mock-project-name">논문 리뷰</div>
                <div class="mock-project-desc">Instructions · 파일 5개 · 대화 7개</div>
              </div>
            </div>
            <div class="mock-project-add">+ 새 프로젝트</div>
          </div>
        </div>
      </div>

      <!-- 아티팩트 Mock UI -->
      <div class="mock-feature">
        <div class="feature-header">
          <span class="feature-badge">🎨</span>
          <div>
            <h3>아티팩트</h3>
            <p>Claude가 생성한 코드, 문서, 다이어그램 등을 별도 패널에서 확인하고 편집할 수 있습니다.</p>
          </div>
        </div>
        <div class="mock-artifact">
          <div class="mock-artifact-layout">
            <div class="mock-artifact-chat">
              <div class="mock-msg ai compact">
                <div class="mock-avatar ai-avatar">C</div>
                <div class="mock-bubble ai-bubble">
                  할 일 관리 앱을 만들어 드렸습니다. 오른쪽 패널에서 확인해보세요!
                </div>
              </div>
            </div>
            <div class="mock-artifact-panel">
              <div class="mock-artifact-header">
                <span class="mock-artifact-title">Todo App</span>
                <div class="mock-artifact-tabs">
                  <span class="mock-tab active">미리보기</span>
                  <span class="mock-tab">코드</span>
                </div>
              </div>
              <div class="mock-artifact-body">
                <div class="mock-todo-app">
                  <div class="mock-todo-input-row">
                    <div class="mock-todo-input">새로운 할 일 입력...</div>
                    <div class="mock-todo-add-btn">추가</div>
                  </div>
                  <div class="mock-todo-item done">
                    <span class="mock-check checked">&#10003;</span>
                    <span class="mock-todo-text striked">기획서 작성하기</span>
                  </div>
                  <div class="mock-todo-item done">
                    <span class="mock-check checked">&#10003;</span>
                    <span class="mock-todo-text striked">디자인 시안 검토</span>
                  </div>
                  <div class="mock-todo-item">
                    <span class="mock-check">&#9744;</span>
                    <span class="mock-todo-text">API 연동 개발</span>
                  </div>
                  <div class="mock-todo-item">
                    <span class="mock-check">&#9744;</span>
                    <span class="mock-todo-text">테스트 코드 작성</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- 4. 사용 및 설치 방법 -->
    <section>
      <h2>4. 사용 및 설치 방법</h2>
      <div class="platform-grid">
        <a href="https://claude.ai" target="_blank" rel="noopener" class="platform-card">
          <div class="platform-icon">🌐</div>
          <strong>claude.ai</strong>
          <p>웹 브라우저에서 바로 대화</p>
        </a>
        <a href="https://claude.ai/download" target="_blank" rel="noopener" class="platform-card">
          <div class="platform-icon">🖥️</div>
          <strong>데스크톱 앱</strong>
          <p>Windows / macOS</p>
        </a>
        <div class="platform-card">
          <div class="platform-icon">📱</div>
          <strong>모바일 앱</strong>
          <p><a href="https://apps.apple.com/app/claude/id6473753684" target="_blank" rel="noopener">iOS</a> · <a href="https://play.google.com/store/apps/details?id=com.anthropic.claude" target="_blank" rel="noopener">Android</a></p>
        </div>
        <a href="https://console.anthropic.com" target="_blank" rel="noopener" class="platform-card">
          <div class="platform-icon">⚙️</div>
          <strong>API</strong>
          <p>개발자용 인터페이스</p>
        </a>
        <div class="platform-card">
          <div class="platform-icon">💻</div>
          <strong>Claude Code</strong>
          <p>터미널 코딩 에이전트</p>
        </div>
      </div>
    </section>

    <!-- 5. 실습해보기 -->
    <section>
      <h2>5. 실습해보기</h2>
      <p>아래 프롬프트를 직접 <a href="https://claude.ai" target="_blank" rel="noopener">claude.ai</a>에 입력해보세요:</p>
      <div class="practice-grid">
        <div class="practice-card">
          <div class="practice-header">
            <span class="practice-num">실습 1</span>
            <span class="practice-title">이메일 작성</span>
          </div>
          <div class="code-block">
            <pre>다음 내용을 정중한 비즈니스 이메일로 작성해주세요:
- 받는 사람: 김팀장님
- 내용: 다음 주 월요일 회의를 수요일로 변경 요청
- 이유: 출장 일정 겹침</pre>
          </div>
        </div>
        <div class="practice-card">
          <div class="practice-header">
            <span class="practice-num">실습 2</span>
            <span class="practice-title">텍스트 요약</span>
          </div>
          <div class="code-block">
            <pre>다음 텍스트를 3줄로 요약해주세요:
[여기에 긴 텍스트를 붙여넣으세요]</pre>
          </div>
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

/* === Feature Highlights === */
.feature-highlights {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 16px;
  margin-top: 20px;
}
.highlight-item {
  display: flex;
  align-items: flex-start;
  gap: 12px;
  background: #f8fafc;
  border: 1px solid #e2e8f0;
  border-radius: 12px;
  padding: 18px 16px;
  transition: border-color 0.2s, transform 0.2s;
}
.highlight-item:hover {
  border-color: #93c5fd;
  transform: translateY(-2px);
}
.highlight-icon {
  font-size: 1.5rem;
  flex-shrink: 0;
  line-height: 1;
}
.highlight-item strong {
  display: block;
  font-size: 0.92rem;
  color: #1e293b;
  margin-bottom: 2px;
}
.highlight-item p {
  font-size: 0.82rem;
  color: #64748b;
  margin: 0;
}

/* === Step Cards === */
.step-cards {
  display: flex;
  flex-direction: column;
  gap: 12px;
  margin-top: 16px;
  margin-bottom: 20px;
}
.step-card {
  display: flex;
  align-items: center;
  gap: 16px;
  background: #f8fafc;
  border: 1px solid #e2e8f0;
  border-radius: 12px;
  padding: 16px 20px;
  transition: border-color 0.2s;
}
.step-card:hover {
  border-color: #93c5fd;
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
.step-body {
  font-size: 0.95rem;
  color: #374151;
  line-height: 1.6;
}
.step-body a {
  color: #2563eb;
  text-decoration: none;
  font-weight: 600;
}
.step-body a:hover {
  text-decoration: underline;
}

/* === Tip Box === */
.tip-box {
  display: flex;
  align-items: flex-start;
  gap: 12px;
  background: #eff6ff;
  border: 1px solid #bfdbfe;
  border-radius: 12px;
  padding: 16px 20px;
}
.tip-icon {
  font-size: 1.3rem;
  flex-shrink: 0;
  line-height: 1.6;
}
.tip-box p {
  margin: 0;
  font-size: 0.95rem;
  color: #1e40af;
  line-height: 1.6;
}

/* === Feature Header (for mock sections) === */
.feature-header {
  display: flex;
  align-items: flex-start;
  gap: 14px;
  margin-bottom: 16px;
}
.feature-badge {
  font-size: 1.6rem;
  flex-shrink: 0;
  width: 48px;
  height: 48px;
  background: #f0f7ff;
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
}
.feature-header h3 {
  font-size: 1.15rem;
  font-weight: 700;
  color: #1e293b;
  margin-bottom: 4px;
}
.feature-header p {
  color: #64748b;
  font-size: 0.92rem;
  margin: 0;
}

/* === Mock Feature Block === */
.mock-feature {
  background: #fff;
  border: 1px solid #e2e8f0;
  border-radius: 16px;
  padding: 24px;
  margin-bottom: 24px;
  transition: border-color 0.2s;
}
.mock-feature:hover {
  border-color: #93c5fd;
}

/* === Shared Mock Window === */
.mock-chat-window {
  border: 1px solid #e2e8f0;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 2px 12px rgba(0,0,0,0.06);
  background: #fff;
}
.mock-chat-header {
  background: #f8fafc;
  padding: 10px 16px;
  display: flex;
  align-items: center;
  gap: 6px;
  border-bottom: 1px solid #e2e8f0;
}
.mock-dot {
  width: 10px;
  height: 10px;
  border-radius: 50%;
}
.mock-dot.red { background: #ef4444; }
.mock-dot.yellow { background: #f59e0b; }
.mock-dot.green { background: #22c55e; }
.mock-chat-title {
  margin-left: 8px;
  font-weight: 600;
  font-size: 0.85rem;
  color: #64748b;
}
.mock-chat-body {
  padding: 20px 16px;
  background: #fafbfc;
  max-height: 320px;
  overflow: hidden;
}
.mock-chat-input {
  padding: 12px 16px;
  background: #fff;
  border-top: 1px solid #e2e8f0;
  display: flex;
  align-items: center;
  gap: 10px;
}
.mock-input-placeholder {
  flex: 1;
  color: #9ca3af;
  font-size: 0.9rem;
}
.mock-send-btn {
  color: #2563eb;
  font-size: 1.2rem;
  cursor: default;
}
.mock-attach-btn {
  font-size: 1.2rem;
  color: #6b7280;
  cursor: default;
}

/* === Chat Messages === */
.mock-msg {
  display: flex;
  gap: 10px;
  margin-bottom: 16px;
  align-items: flex-start;
}
.mock-msg:last-child { margin-bottom: 0; }
.mock-msg.compact { margin-bottom: 0; }
.mock-avatar {
  width: 32px;
  height: 32px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 0.75rem;
  font-weight: 700;
  flex-shrink: 0;
}
.user-avatar {
  background: #dbeafe;
  color: #2563eb;
}
.ai-avatar {
  background: #d4a574;
  color: #fff;
}
.mock-bubble {
  padding: 10px 14px;
  border-radius: 12px;
  font-size: 0.88rem;
  line-height: 1.6;
  max-width: 85%;
}
.user-bubble {
  background: #eff6ff;
  color: #1e3a5f;
}
.ai-bubble {
  background: #fff;
  border: 1px solid #e5e7eb;
  color: #374151;
}
.ai-bubble code {
  background: #f1f5f9;
  padding: 1px 4px;
  border-radius: 3px;
  font-size: 0.82rem;
  color: #1e40af;
  font-family: 'JetBrains Mono', 'Fira Code', monospace;
}
.ai-bubble strong {
  color: #1e293b;
}

/* === File Chips === */
.mock-file-chips {
  display: flex;
  gap: 8px;
  margin-bottom: 10px;
  flex-wrap: wrap;
}
.mock-file-chip {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  padding: 6px 12px;
  border-radius: 8px;
  font-size: 0.78rem;
  font-weight: 500;
  background: #f1f5f9;
  color: #475569;
  border: 1px solid #e2e8f0;
}
.mock-file-chip .file-icon {
  font-size: 0.65rem;
  font-weight: 800;
  padding: 2px 5px;
  border-radius: 4px;
  line-height: 1;
}
.mock-file-chip.pdf .file-icon {
  background: #fee2e2;
  color: #dc2626;
}
.mock-file-chip.img .file-icon {
  background: #dbeafe;
  color: #2563eb;
}

/* === Project List === */
.mock-projects {
  border: 1px solid #e2e8f0;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 2px 12px rgba(0,0,0,0.06);
}
.mock-project-list {
  background: #fff;
}
.mock-project-item {
  display: flex;
  align-items: center;
  gap: 14px;
  padding: 14px 20px;
  border-bottom: 1px solid #f1f5f9;
  cursor: default;
  transition: background 0.15s;
}
.mock-project-item:hover {
  background: #f8fafc;
}
.mock-project-item.active {
  background: #eff6ff;
  border-left: 3px solid #2563eb;
}
.mock-project-icon {
  font-size: 1.4rem;
}
.mock-project-name {
  font-weight: 600;
  font-size: 0.95rem;
  color: #1e293b;
}
.mock-project-desc {
  font-size: 0.78rem;
  color: #94a3b8;
  margin-top: 2px;
}
.mock-project-add {
  padding: 14px 20px;
  color: #2563eb;
  font-size: 0.9rem;
  font-weight: 500;
  cursor: default;
  border-top: 1px solid #f1f5f9;
}

/* === Artifact Layout === */
.mock-artifact-layout {
  display: flex;
  border: 1px solid #e2e8f0;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 2px 12px rgba(0,0,0,0.06);
  min-height: 260px;
}
.mock-artifact-chat {
  flex: 0 0 40%;
  background: #fafbfc;
  padding: 16px;
  border-right: 1px solid #e2e8f0;
  display: flex;
  align-items: flex-start;
}
.mock-artifact-panel {
  flex: 1;
  background: #fff;
  display: flex;
  flex-direction: column;
}
.mock-artifact-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px 16px;
  border-bottom: 1px solid #e2e8f0;
  background: #f8fafc;
}
.mock-artifact-title {
  font-weight: 600;
  font-size: 0.9rem;
  color: #1e293b;
}
.mock-artifact-tabs {
  display: flex;
  gap: 4px;
}
.mock-tab {
  padding: 4px 12px;
  font-size: 0.75rem;
  border-radius: 6px;
  color: #64748b;
  cursor: default;
}
.mock-tab.active {
  background: #2563eb;
  color: #fff;
}
.mock-artifact-body {
  padding: 16px;
  flex: 1;
}

/* === Todo App Mock === */
.mock-todo-app {
  font-size: 0.85rem;
}
.mock-todo-input-row {
  display: flex;
  gap: 8px;
  margin-bottom: 14px;
}
.mock-todo-input {
  flex: 1;
  padding: 8px 12px;
  border: 1px solid #d1d5db;
  border-radius: 8px;
  color: #9ca3af;
  font-size: 0.82rem;
}
.mock-todo-add-btn {
  padding: 8px 16px;
  background: #2563eb;
  color: #fff;
  border-radius: 8px;
  font-size: 0.82rem;
  font-weight: 600;
  cursor: default;
}
.mock-todo-item {
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 8px 4px;
  border-bottom: 1px solid #f3f4f6;
}
.mock-check {
  font-size: 1rem;
  color: #d1d5db;
  width: 20px;
  text-align: center;
}
.mock-check.checked {
  color: #22c55e;
}
.mock-todo-text {
  color: #374151;
  font-size: 0.85rem;
}
.mock-todo-text.striked {
  text-decoration: line-through;
  color: #9ca3af;
}

/* === Platform Grid === */
.platform-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 14px;
  margin-top: 16px;
}
.platform-card {
  background: #f8fafc;
  border: 1px solid #e2e8f0;
  border-radius: 12px;
  padding: 20px 16px;
  text-align: center;
  transition: border-color 0.2s, transform 0.2s;
  text-decoration: none;
  color: inherit;
  display: block;
}
.platform-card:hover {
  border-color: #93c5fd;
  transform: translateY(-2px);
}
.platform-icon {
  font-size: 1.8rem;
  margin-bottom: 8px;
}
.platform-card strong {
  display: block;
  font-size: 0.95rem;
  color: #1e293b;
  margin-bottom: 4px;
}
.platform-card p {
  font-size: 0.82rem;
  color: #64748b;
  margin: 0;
}
.platform-card p a {
  color: #2563eb;
  text-decoration: none;
}
.platform-card p a:hover {
  text-decoration: underline;
}

/* === Practice Grid === */
.practice-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 20px;
  margin-top: 16px;
}
.practice-card {
  background: #f8fafc;
  border: 1px solid #e2e8f0;
  border-radius: 14px;
  overflow: hidden;
  transition: border-color 0.2s, transform 0.2s;
}
.practice-card:hover {
  border-color: #93c5fd;
  transform: translateY(-2px);
}
.practice-header {
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 14px 18px;
  background: linear-gradient(135deg, #1e293b 0%, #334155 100%);
}
.practice-num {
  background: rgba(255,255,255,0.15);
  color: #93c5fd;
  padding: 4px 10px;
  border-radius: 6px;
  font-size: 0.75rem;
  font-weight: 700;
}
.practice-title {
  color: #f1f5f9;
  font-weight: 600;
  font-size: 0.95rem;
}
.practice-card .code-block {
  margin: 0;
  border: none;
  border-radius: 0;
}

/* === Responsive === */
@media (max-width: 768px) {
  .hero-section {
    padding: 36px 20px 32px;
  }
  .hero-icon {
    font-size: 2.4rem;
  }
  .feature-highlights {
    grid-template-columns: 1fr;
    gap: 10px;
  }
  .mock-artifact-layout {
    flex-direction: column;
  }
  .mock-artifact-chat {
    flex: none;
    border-right: none;
    border-bottom: 1px solid #e2e8f0;
    padding: 12px;
  }
  .mock-file-chips {
    flex-direction: column;
  }
  .platform-grid {
    grid-template-columns: repeat(2, 1fr);
    gap: 10px;
  }
  .practice-grid {
    grid-template-columns: 1fr;
  }
  .mock-feature {
    padding: 16px;
  }
  .feature-header {
    flex-direction: column;
    gap: 10px;
  }
  .feature-badge {
    width: 40px;
    height: 40px;
    font-size: 1.3rem;
  }
}
</style>
