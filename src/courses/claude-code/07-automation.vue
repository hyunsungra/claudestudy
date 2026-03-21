<template>
  <div class="page-content">
    <div class="hero-section">
      <div class="hero-icon">🤖</div>
      <h1>반복 작업 자동화</h1>
      <p class="hero-desc">매번 하던 반복 작업을 <strong>한 마디로 자동화</strong></p>
      <div class="hero-tags">
        <span class="tag">커밋 자동화</span>
        <span class="tag">코드 리뷰</span>
        <span class="tag">커스텀 스킬</span>
        <span class="tag">파이프라인</span>
      </div>
    </div>

    <section>
      <h2>이런 걸 자동화할 수 있다</h2>
      <div class="auto-grid">
        <div class="auto-card">
          <div class="auto-icon">📝</div>
          <strong>커밋과 PR</strong>
          <p>"커밋해줘", "PR 만들어줘" 한 마디면 변경사항 분석, 메시지 작성, 실행까지.</p>
        </div>
        <div class="auto-card">
          <div class="auto-icon">🔍</div>
          <strong>코드 리뷰</strong>
          <p>변경된 코드를 자동으로 검토하고 문제점을 알려줍니다.</p>
        </div>
        <div class="auto-card">
          <div class="auto-icon">🧪</div>
          <strong>테스트 작성</strong>
          <p>코드를 분석해서 필요한 테스트 코드를 자동으로 만들어줍니다.</p>
        </div>
        <div class="auto-card">
          <div class="auto-icon">📄</div>
          <strong>문서 업데이트</strong>
          <p>코드가 바뀌면 관련 문서(README 등)도 자동으로 업데이트합니다.</p>
        </div>
      </div>
    </section>

    <section>
      <h2>커스텀 스킬로 자동화하기</h2>
      <p>자주 하는 작업은 <strong>커스텀 스킬</strong>로 만들어두면 <code>/명령어</code> 한 줄로 실행할 수 있습니다.</p>
      <div class="skill-demo">
        <div class="skill-step request">
          <div class="skill-label">요청</div>
          <div class="code-block good">
            <pre>매일 아침 변경사항을 확인하고 요약해주는 스킬을 만들어줘.
git log에서 어제 이후 변경사항을 분석하고,
뭐가 바뀌었는지 한국어로 정리해주면 돼.</pre>
          </div>
        </div>
        <div class="skill-arrow">↓</div>
        <div class="skill-step result">
          <div class="skill-label done">완성</div>
          <p>만들어진 스킬은 <code>/morning-report</code> 같은 명령어로 매일 실행할 수 있습니다.</p>
        </div>
      </div>
    </section>

    <section>
      <h2>파이프라인 자동화</h2>
      <p><code>-p</code> 옵션을 쓰면 다른 도구와 연결해서 완전 자동화할 수 있습니다.</p>
      <div class="pipeline-cards">
        <div class="pipeline-card">
          <div class="pipeline-icon">📊</div>
          <strong>에러 로그 분석</strong>
          <div class="code-block good">
            <pre>cat error.log | claude -p "이 에러 원인이 뭐야?"</pre>
          </div>
        </div>
        <div class="pipeline-card">
          <div class="pipeline-icon">✅</div>
          <strong>변경사항 자동 리뷰</strong>
          <div class="code-block good">
            <pre>git diff | claude -p "이 변경사항을 검토해줘" > review.txt</pre>
          </div>
        </div>
        <div class="pipeline-card">
          <div class="pipeline-icon">💬</div>
          <strong>커밋 메시지 자동 생성</strong>
          <div class="code-block good">
            <pre>git diff --staged | claude -p "커밋 메시지 작성해줘"</pre>
          </div>
        </div>
      </div>
      <div class="info-box">
        <p><strong>팁:</strong> <code>-p</code> 옵션은 대화 없이 결과만 바로 출력합니다. CI/CD 파이프라인이나 스크립트에서 Claude를 호출할 때 유용합니다.</p>
      </div>
    </section>

    <section>
      <h2>자동화 아이디어</h2>
      <div class="idea-grid">
        <div class="idea-item">📅 매주 금요일 주간 변경사항 보고서 자동 생성</div>
        <div class="idea-item">🔒 코드 푸시 전 자동 보안 검사</div>
        <div class="idea-item">👀 새 PR이 올라오면 자동 코드 리뷰</div>
        <div class="idea-item">🚨 에러 발생 시 자동 원인 분석</div>
        <div class="idea-item">📝 API 변경 시 문서 자동 업데이트</div>
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

/* === Auto Grid === */
.auto-grid { display: grid; grid-template-columns: repeat(2, 1fr); gap: 16px; margin: 20px 0; }
.auto-card { background: #f8fafc; border: 1px solid #e2e8f0; border-radius: 12px; padding: 24px 20px; transition: border-color 0.2s, transform 0.2s; }
.auto-card:hover { border-color: #93c5fd; transform: translateY(-2px); }
.auto-icon { font-size: 1.8rem; margin-bottom: 8px; }
.auto-card strong { display: block; font-size: 1rem; color: #1e293b; margin-bottom: 6px; }
.auto-card p { font-size: 0.88rem; color: #64748b; margin: 0 !important; }

/* === Skill Demo === */
.skill-demo { background: #f8fafc; border: 1px solid #e2e8f0; border-radius: 12px; padding: 24px; margin: 20px 0; text-align: center; }
.skill-step { text-align: left; }
.skill-step.result { background: #f0fdf4; border: 1px solid #86efac; border-radius: 8px; padding: 16px 20px; }
.skill-label { display: inline-block; font-size: 0.75rem; font-weight: 700; padding: 2px 10px; border-radius: 10px; background: #3b82f6; color: #fff; margin-bottom: 8px; }
.skill-label.done { background: #16a34a; }
.skill-step.result p { margin: 0 !important; font-size: 0.9rem; color: #166534; }
.skill-step.result code { background: #dcfce7; color: #166534; padding: 2px 6px; border-radius: 4px; font-size: 0.85rem; }
.skill-arrow { font-size: 1.4rem; color: #94a3b8; padding: 8px 0; text-align: center; }
.skill-step .code-block { margin-bottom: 0 !important; }

/* === Pipeline Cards === */
.pipeline-cards { display: flex; flex-direction: column; gap: 16px; margin: 20px 0; }
.pipeline-card { background: #f8fafc; border: 1px solid #e2e8f0; border-radius: 12px; padding: 20px; transition: border-color 0.2s; }
.pipeline-card:hover { border-color: #93c5fd; }
.pipeline-icon { font-size: 1.4rem; margin-bottom: 8px; }
.pipeline-card strong { display: block; font-size: 0.95rem; color: #1e293b; margin-bottom: 10px; }
.pipeline-card .code-block { margin: 0 !important; }

/* === Idea Grid === */
.idea-grid { display: flex; flex-direction: column; gap: 8px; margin: 20px 0; }
.idea-item { background: #f8fafc; border: 1px solid #e2e8f0; border-radius: 10px; padding: 14px 20px; font-size: 0.92rem; color: #334155; transition: border-color 0.2s, transform 0.2s; }
.idea-item:hover { border-color: #93c5fd; transform: translateX(4px); }

/* === Responsive === */
@media (max-width: 768px) {
  .hero-section { padding: 36px 20px 32px; }
  .hero-section h1 { font-size: 1.6rem; }
  .auto-grid { grid-template-columns: 1fr; }
}
</style>
