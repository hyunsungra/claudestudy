<template>
  <div class="page-content">
    <div class="hero-section">
      <div class="hero-icon">🐛</div>
      <h1>버그 찾기와 수정</h1>
      <p class="hero-desc">에러가 나면 <strong>그대로 보여주세요</strong> — Claude가 찾아서 고칩니다</p>
      <div class="hero-tags">
        <span class="tag">에러 분석</span>
        <span class="tag">자동 수정</span>
        <span class="tag">테스트 검증</span>
      </div>
    </div>

    <section>
      <h2>에러 메시지를 그대로 보여주면 된다</h2>
      <div class="key-message">
        <div class="key-icon">💡</div>
        <p>에러가 나면 복잡하게 생각할 필요 없습니다. <strong>에러 메시지를 그대로 Claude에게 보여주세요.</strong> 원인을 찾아서 코드를 직접 수정해줍니다.</p>
      </div>
    </section>

    <section>
      <h2>실전 예시</h2>
      <div class="prompt-cards">
        <div class="prompt-card">
          <div class="prompt-label">
            <span class="prompt-badge">상황 1</span>
            에러 메시지 붙여넣기
          </div>
          <div class="code-block good">
            <pre>이 에러가 나는데 고쳐줘:

TypeError: Cannot read properties of undefined (reading 'map')
  at UserList.vue:15</pre>
          </div>
          <div class="prompt-result">Claude가 해당 파일을 열어서 15번째 줄을 확인하고, 원인을 파악한 뒤 코드를 수정합니다.</div>
        </div>
        <div class="prompt-card">
          <div class="prompt-label">
            <span class="prompt-badge">상황 2</span>
            증상만 설명해도 된다
          </div>
          <div class="code-block good">
            <pre>로그인하면 빈 화면이 나와. 콘솔에 에러는 없는데 화면에 아무것도 안 뜸.</pre>
          </div>
        </div>
        <div class="prompt-card">
          <div class="prompt-label">
            <span class="prompt-badge">상황 3</span>
            특정 상황에서만 발생하는 버그
          </div>
          <div class="code-block good">
            <pre>목록에 데이터가 10개 이상이면 스크롤이 안 돼.
9개까지는 잘 되는데 10개부터 멈춰.</pre>
          </div>
        </div>
      </div>
    </section>

    <section>
      <h2>Claude가 버그를 고치는 과정</h2>
      <div class="step-cards">
        <div class="step-card">
          <div class="step-number">1</div>
          <div class="step-body">
            <strong>에러 위치 파악</strong>
            <p>에러 메시지에서 관련 파일과 줄 번호를 확인</p>
          </div>
        </div>
        <div class="step-card">
          <div class="step-number">2</div>
          <div class="step-body">
            <strong>코드 확인</strong>
            <p>해당 파일을 열어서 코드를 분석</p>
          </div>
        </div>
        <div class="step-card">
          <div class="step-number">3</div>
          <div class="step-body">
            <strong>관련 파일 탐색</strong>
            <p>연결된 다른 파일도 함께 확인 (import, 의존성 등)</p>
          </div>
        </div>
        <div class="step-card">
          <div class="step-number">4</div>
          <div class="step-body">
            <strong>원인 분석 및 수정</strong>
            <p>원인을 파악하고 수정 방안을 결정한 뒤 코드 수정 (승인 후)</p>
          </div>
        </div>
        <div class="step-card">
          <div class="step-number">5</div>
          <div class="step-body">
            <strong>테스트로 확인</strong>
            <p>필요하면 테스트를 실행해서 수정이 잘 되었는지 검증</p>
          </div>
        </div>
      </div>
    </section>

    <section>
      <h2>디버깅 팁</h2>
      <div class="tip-grid">
        <div class="tip-card">
          <div class="tip-icon">📋</div>
          <strong>에러 메시지 전체를 보여주세요</strong>
          <p>일부만 보여주면 원인을 못 찾을 수 있습니다</p>
        </div>
        <div class="tip-card">
          <div class="tip-icon">🔁</div>
          <strong>재현 방법을 알려주세요</strong>
          <p>"로그인 버튼 누르면 발생", "데이터 10개 이상일 때" 등</p>
        </div>
        <div class="tip-card">
          <div class="tip-icon">🎯</div>
          <strong>한 번에 요청하면 됩니다</strong>
          <p>"에러 원인 분석하고, 수정하고, 테스트 코드도 작성해줘"</p>
        </div>
        <div class="tip-card">
          <div class="tip-icon">💻</div>
          <strong>추가 정보를 주세요</strong>
          <p>"환경은 Windows고, Node 20 쓰고 있어" 등</p>
        </div>
        <div class="tip-card">
          <div class="tip-icon">📋</div>
          <strong>Plan 모드로 먼저 분석</strong>
          <p>바로 고치기 불안하면 <code>Shift+Tab</code> 2번으로 원인만 먼저 파악</p>
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

/* === Key Message === */
.key-message { display: flex; align-items: center; gap: 16px; background: #eff6ff; border: 2px solid #93c5fd; border-radius: 12px; padding: 24px; margin: 20px 0; }
.key-icon { font-size: 2rem; flex-shrink: 0; }
.key-message p { margin: 0 !important; font-size: 1rem; color: #334155; line-height: 1.7; }
.key-message strong { color: #1e40af; }

/* === Prompt Cards === */
.prompt-cards { display: flex; flex-direction: column; gap: 16px; margin: 20px 0; }
.prompt-card { background: #f8fafc; border: 1px solid #e2e8f0; border-radius: 12px; padding: 20px; transition: border-color 0.2s; }
.prompt-card:hover { border-color: #93c5fd; }
.prompt-label { font-size: 0.95rem; font-weight: 600; color: #334155; margin-bottom: 12px; display: flex; align-items: center; gap: 10px; }
.prompt-badge { display: inline-block; font-size: 0.72rem; font-weight: 700; padding: 3px 10px; border-radius: 10px; background: linear-gradient(135deg, #3b82f6, #6366f1); color: #fff; }
.prompt-card .code-block { margin: 0 !important; }
.prompt-result { margin-top: 12px; font-size: 0.88rem; color: #64748b; padding-left: 4px; }

/* === Step Cards === */
.step-cards { display: flex; flex-direction: column; gap: 12px; margin: 20px 0; }
.step-card { display: flex; align-items: center; gap: 16px; background: #f8fafc; border: 1px solid #e2e8f0; border-radius: 12px; padding: 20px 24px; transition: border-color 0.2s, transform 0.2s; }
.step-card:hover { border-color: #93c5fd; transform: translateY(-2px); }
.step-number { width: 36px; height: 36px; background: linear-gradient(135deg, #3b82f6, #6366f1); color: #fff; border-radius: 50%; display: flex; align-items: center; justify-content: center; font-weight: 700; font-size: 1rem; flex-shrink: 0; }
.step-body strong { display: block; font-size: 1.05rem; color: #1e293b; margin-bottom: 4px; }
.step-body p { font-size: 0.9rem; color: #64748b; margin: 0 !important; }

/* === Tip Grid === */
.tip-grid { display: grid; grid-template-columns: repeat(2, 1fr); gap: 12px; margin: 20px 0; }
.tip-card { background: #f8fafc; border: 1px solid #e2e8f0; border-radius: 12px; padding: 20px; transition: border-color 0.2s, transform 0.2s; }
.tip-card:hover { border-color: #93c5fd; transform: translateY(-2px); }
.tip-icon { font-size: 1.6rem; margin-bottom: 8px; }
.tip-card strong { display: block; font-size: 0.95rem; color: #1e293b; margin-bottom: 6px; }
.tip-card p { font-size: 0.85rem; color: #64748b; margin: 0 !important; }
.tip-card code { background: #eff6ff; color: #1e40af; padding: 2px 6px; border-radius: 4px; font-size: 0.82rem; }

/* === Responsive === */
@media (max-width: 768px) {
  .hero-section { padding: 36px 20px 32px; }
  .hero-section h1 { font-size: 1.6rem; }
  .tip-grid { grid-template-columns: 1fr; }
  .key-message { flex-direction: column; gap: 12px; }
}
</style>
