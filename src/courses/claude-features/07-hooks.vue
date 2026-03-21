<template>
  <div class="page-content">
    <!-- Hero Section -->
    <div class="hero-section">
      <div class="hero-icon">🪝</div>
      <h1>Hooks (자동화)</h1>
      <p class="hero-desc">특정 상황이 되면 자동으로 작업을 실행시키는 기능입니다</p>
    </div>

    <!-- Hooks란? -->
    <section class="slide-section">
      <h2 class="section-title">Hooks란?</h2>
      <p class="section-desc"><strong>Hooks</strong>는 "이런 일이 생기면, 자동으로 이것도 해줘"라는 규칙입니다. Claude가 특정 작업을 할 때 전/후로 원하는 동작을 자동 실행합니다.</p>
      <div class="analogy-card">
        <div class="analogy-icon">💡</div>
        <div class="analogy-content">
          <strong>비유:</strong> "문을 열면 자동으로 불이 켜지는 센서"와 같습니다. 매번 직접 스위치를 누를 필요 없이 자동으로 처리됩니다.
        </div>
      </div>
    </section>

    <!-- 언제 자동 실행되나? -->
    <section class="slide-section">
      <h2 class="section-title">언제 자동 실행되나?</h2>
      <div class="timing-cards">
        <div class="timing-card">
          <div class="timing-header">
            <span class="timing-badge before">실행 전</span>
          </div>
          <h3>작업 실행 전</h3>
          <p class="timing-desc">Claude가 도구를 쓰기 직전</p>
          <span class="timing-example">예: 위험한 명령 자동 차단</span>
        </div>
        <div class="timing-card">
          <div class="timing-header">
            <span class="timing-badge after">실행 후</span>
          </div>
          <h3>작업 실행 후</h3>
          <p class="timing-desc">Claude가 도구를 쓴 직후</p>
          <span class="timing-example">예: 파일 저장 후 자동 정리</span>
        </div>
        <div class="timing-card">
          <div class="timing-header">
            <span class="timing-badge notify">알림 시</span>
          </div>
          <h3>알림 발생 시</h3>
          <p class="timing-desc">알림이 발생할 때</p>
          <span class="timing-example">예: 긴 작업 완료 시 알림 보내기</span>
        </div>
        <div class="timing-card">
          <div class="timing-header">
            <span class="timing-badge done">완료 시</span>
          </div>
          <h3>응답 완료 시</h3>
          <p class="timing-desc">Claude의 답변이 끝났을 때</p>
          <span class="timing-example">예: 작업 완료 후 자동 검사</span>
        </div>
      </div>
    </section>

    <!-- 가장 쉽게 만드는 방법 -->
    <section class="slide-section">
      <h2 class="section-title">가장 쉽게 만드는 방법</h2>
      <p class="section-desc">직접 설정 파일을 편집할 필요 없이, <strong>Claude에게 대화로 요청</strong>하면 됩니다.</p>

      <div class="step-cards">
        <div class="step-card">
          <div class="step-number">1</div>
          <div class="step-body">
            <h3>대화로 Hook 만들기</h3>
            <div class="code-block good">
              <pre>파일을 수정할 때마다 자동으로 코드 정리해주는 Hook을 만들어줘</pre>
            </div>
          </div>
        </div>
        <div class="step-card">
          <div class="step-number">2</div>
          <div class="step-body">
            <h3>더 구체적으로 요청하기</h3>
            <div class="code-block good">
              <pre>파일에 비밀번호나 API 키가 포함되면 자동으로 경고해주는 Hook을 설정해줘</pre>
            </div>
          </div>
        </div>
      </div>
      <p style="margin-top: 16px; color: #475569;">Claude가 <code>settings.json</code>에 Hook 설정을 자동으로 추가해줍니다.</p>
    </section>

    <!-- 직접 설정하기 -->
    <section class="slide-section">
      <h2 class="section-title">직접 설정하기</h2>
      <p class="section-desc">Hooks는 <code>settings.json</code> 파일 안에서 정의합니다. 별도의 폴더가 있는 것이 아닙니다.</p>
      <div class="code-block good">
        <p class="code-label">예시: 파일 수정 후 자동으로 정리해주기</p>
        <pre>{
  "hooks": {
    "PostToolUse": [
      {
        "matcher": "Write|Edit",
        "command": "npx prettier --write \"$CLAUDE_FILE_PATH\""
      }
    ]
  }
}</pre>
      </div>
      <p style="margin-top: 12px; color: #475569;">위 설정은 "Claude가 파일을 수정할 때마다, 자동으로 코드를 깔끔하게 정리해줘"라는 뜻입니다.</p>
    </section>

    <!-- 실용적인 활용 -->
    <section class="slide-section">
      <h2 class="section-title">실용적인 활용</h2>
      <div class="use-grid">
        <div class="use-card">
          <div class="use-icon">✨</div>
          <h3>자동 코드 정리</h3>
          <p>파일을 수정할 때마다 자동으로 줄 맞춤, 띄어쓰기 등을 깔끔하게 정리합니다.</p>
        </div>
        <div class="use-card">
          <div class="use-icon">🔔</div>
          <h3>완료 알림</h3>
          <p>오래 걸리는 작업이 끝나면 알림을 보내줍니다.</p>
        </div>
        <div class="use-card">
          <div class="use-icon">🔍</div>
          <h3>자동 검사</h3>
          <p>코드 변경 후 자동으로 오류가 없는지 확인합니다.</p>
        </div>
        <div class="use-card">
          <div class="use-icon">🛡️</div>
          <h3>보안 검사</h3>
          <p>파일에 비밀번호 같은 민감 정보가 실수로 들어가지 않았는지 확인합니다.</p>
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
  align-items: center;
  gap: 14px;
  background: #eff6ff;
  border: 1px solid #bfdbfe;
  border-radius: 12px;
  padding: 18px 22px;
}
.analogy-icon { font-size: 1.5rem; flex-shrink: 0; }
.analogy-content { color: #1e40af; font-size: 0.95rem; line-height: 1.7; }

.timing-cards {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 16px;
}
.timing-card {
  background: #f8fafc;
  border: 1px solid #e2e8f0;
  border-radius: 12px;
  padding: 22px 20px;
  transition: border-color 0.2s, transform 0.2s;
}
.timing-card:hover { border-color: #93c5fd; transform: translateY(-2px); }
.timing-header { margin-bottom: 10px; }
.timing-badge {
  display: inline-block;
  font-size: 0.72rem;
  padding: 3px 10px;
  border-radius: 999px;
  font-weight: 700;
  color: #fff;
}
.timing-badge.before { background: #f59e0b; }
.timing-badge.after { background: #3b82f6; }
.timing-badge.notify { background: #8b5cf6; }
.timing-badge.done { background: #22c55e; }
.timing-card h3 { margin-bottom: 6px; color: #1e293b; font-size: 1rem; }
.timing-desc { color: #475569; font-size: 0.9rem; margin: 0 0 8px 0; }
.timing-example { color: #64748b; font-size: 0.83rem; font-style: italic; }

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

.use-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 16px;
}
.use-card {
  background: #f8fafc;
  border: 1px solid #e2e8f0;
  border-radius: 12px;
  padding: 24px 20px;
  text-align: center;
  transition: border-color 0.2s, transform 0.2s;
}
.use-card:hover { border-color: #93c5fd; transform: translateY(-2px); }
.use-icon { font-size: 2rem; margin-bottom: 8px; }
.use-card h3 { margin-bottom: 8px; color: #1e293b; font-size: 1.05rem; }
.use-card p { color: #475569; font-size: 0.9rem; margin: 0; }

@media (max-width: 768px) {
  .hero-section { padding: 32px 18px 28px; }
  .hero-icon { font-size: 2.2rem; }
  .hero-section h1 { font-size: 1.4rem; }
  .hero-desc { font-size: 1rem; }
  .timing-cards { grid-template-columns: 1fr; }
  .use-grid { grid-template-columns: 1fr; }
  .step-card { flex-direction: column; gap: 12px; }
}
</style>
