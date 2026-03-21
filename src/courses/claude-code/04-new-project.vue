<template>
  <div class="page-content">
    <div class="hero-section">
      <div class="hero-icon">🚀</div>
      <h1>새 프로젝트 만들기</h1>
      <p class="hero-desc">Claude Code에게 <strong>프로젝트를 처음부터</strong> 만들어달라고 시키는 방법</p>
    </div>

    <section>
      <h2>프로젝트 생성도 대화로</h2>
      <p>빈 폴더에서 Claude Code를 실행하고 원하는 프로젝트를 말하면, <strong>폴더 구조부터 코드까지 알아서 만들어줍니다.</strong></p>
      <div class="prompt-cards">
        <div class="prompt-card">
          <div class="prompt-label">
            <span class="prompt-badge">예시 1</span>
            웹사이트 프로젝트 만들기
          </div>
          <div class="code-block good">
            <pre>Vue 3 + Vite로 웹사이트 프로젝트를 만들어줘.
한국어 교육용 사이트야.</pre>
          </div>
        </div>
        <div class="prompt-card">
          <div class="prompt-label">
            <span class="prompt-badge">예시 2</span>
            기획서 기반 구현
          </div>
          <div class="code-block good">
            <pre>이 기획서 내용을 보고
API 엔드포인트, 서비스, 테스트 코드까지 만들어줘.

[기획 내용]
- 사용자 회원가입 (이메일, 비밀번호)
- 로그인 (JWT 토큰 발급)
- 프로필 조회/수정</pre>
          </div>
        </div>
        <div class="prompt-card">
          <div class="prompt-label">
            <span class="prompt-badge">예시 3</span>
            Python 자동화 스크립트
          </div>
          <div class="code-block good">
            <pre>매일 아침 특정 폴더의 엑셀 파일을 읽어서
요약 보고서를 만들어주는 Python 스크립트를 만들어줘.</pre>
          </div>
        </div>
      </div>
    </section>

    <section>
      <h2>만들어진 뒤에 할 것</h2>
      <div class="step-cards">
        <div class="step-card">
          <div class="step-number">1</div>
          <div class="step-body">
            <strong>CLAUDE.md 생성</strong>
            <p><code>/init</code>으로 프로젝트 설정 파일을 만들어줍니다</p>
          </div>
        </div>
        <div class="step-card">
          <div class="step-number">2</div>
          <div class="step-body">
            <strong>실행 확인</strong>
            <p>Claude에게 "실행해봐"라고 하면 직접 돌려서 확인합니다</p>
          </div>
        </div>
        <div class="step-card">
          <div class="step-number">3</div>
          <div class="step-body">
            <strong>기능 추가</strong>
            <p>"여기에 검색 기능 추가해줘"처럼 이어서 요청합니다</p>
          </div>
        </div>
      </div>
    </section>

    <section>
      <h2>기존 프로젝트에서 시작하기</h2>
      <p>이미 있는 프로젝트 폴더에서 Claude Code를 실행하면, <strong>기존 코드를 분석한 뒤</strong> 작업합니다.</p>
      <div class="prompt-card single">
        <div class="prompt-label">
          <span class="prompt-badge">예시</span>
          기존 프로젝트 파악
        </div>
        <div class="code-block good">
          <pre># 기존 프로젝트 폴더에서 실행
cd 기존프로젝트
claude

# 프로젝트 파악 요청
이 프로젝트의 구조와 주요 기능을 설명해줘</pre>
        </div>
      </div>
      <div class="info-box">
        <p><strong>팁:</strong> 처음 만나는 프로젝트라도 Claude가 파일을 전부 읽고 구조를 파악합니다. "이 프로젝트 설명해줘"부터 시작하세요.</p>
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

/* === Prompt Cards === */
.prompt-cards { display: flex; flex-direction: column; gap: 16px; margin: 20px 0; }
.prompt-card { background: #f8fafc; border: 1px solid #e2e8f0; border-radius: 12px; padding: 20px; transition: border-color 0.2s; }
.prompt-card:hover { border-color: #93c5fd; }
.prompt-card.single { margin: 20px 0; }
.prompt-label { font-size: 0.95rem; font-weight: 600; color: #334155; margin-bottom: 12px; display: flex; align-items: center; gap: 10px; }
.prompt-badge { display: inline-block; font-size: 0.72rem; font-weight: 700; padding: 3px 10px; border-radius: 10px; background: linear-gradient(135deg, #3b82f6, #6366f1); color: #fff; }
.prompt-card .code-block { margin: 0 !important; }

/* === Step Cards === */
.step-cards { display: flex; flex-direction: column; gap: 12px; margin: 20px 0; }
.step-card { display: flex; align-items: flex-start; gap: 16px; background: #f8fafc; border: 1px solid #e2e8f0; border-radius: 12px; padding: 20px 24px; transition: border-color 0.2s, transform 0.2s; }
.step-card:hover { border-color: #93c5fd; transform: translateY(-2px); }
.step-number { width: 36px; height: 36px; background: linear-gradient(135deg, #3b82f6, #6366f1); color: #fff; border-radius: 50%; display: flex; align-items: center; justify-content: center; font-weight: 700; font-size: 1rem; flex-shrink: 0; }
.step-body strong { display: block; font-size: 1.05rem; color: #1e293b; margin-bottom: 4px; }
.step-body p { font-size: 0.9rem; color: #64748b; margin: 0 !important; }
.step-body code { background: #eff6ff; color: #1e40af; padding: 2px 6px; border-radius: 4px; font-size: 0.85rem; }

/* === Responsive === */
@media (max-width: 768px) {
  .hero-section { padding: 36px 20px 32px; }
  .hero-section h1 { font-size: 1.6rem; }
}
</style>
