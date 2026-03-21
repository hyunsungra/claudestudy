<template>
  <div class="page-content">
    <div class="hero-section">
      <div class="hero-icon">⚡</div>
      <h1>서브에이전트로 병렬 작성</h1>
      <p class="hero-desc">글 작성부터 검증, 이미지 생성까지 모든 과정을 자동으로 처리하는 에이전트를 만듭니다.</p>
    </div>

    <!-- 에이전트 만들기 -->
    <section>
      <div class="step-header">
        <div class="step-circle">1</div>
        <h2>블로그 자동화 에이전트 만들기</h2>
      </div>
      <p>지금까지 만든 스킬들(글쓰기, 검증, 이미지)을 하나로 묶어서 전체 과정을 자동 처리하는 에이전트를 만듭니다. 아래 프롬프트를 복사해서 코워크에 붙여넣으세요.</p>

      <div class="prompt-card highlight">
        <div class="prompt-label">코워크에 입력 (핵심 프롬프트)</div>
        <div class="code-block good">
          <pre>현재 폴더에 blog-automation이라는 이름의 에이전트를 만들어줘.

에이전트 이름: blog-automation
에이전트 설명: topics.md에서 미작성 주제를 읽어 글 작성, 검증, 이미지 생성까지 자동 처리하는 에이전트

에이전트가 실행되면 다음 순서로 동작해야 해:

1. topics.md에서 미작성 주제 목록을 확인한다
2. 사용자에게 몇 개의 주제를 처리할지 물어본다
3. 선택된 주제들을 서브에이전트로 병렬 처리한다
   - 각 주제마다 독립적인 서브에이전트가 할당됨
4. 각 서브에이전트는 다음을 순서대로 실행한다:
   a. blog-writer 스킬로 글 작성
   b. fact-checker 스킬로 사실 검증 및 수정
   c. image-card-maker 스킬로 이미지 카드 생성
5. 모든 서브에이전트가 완료되면 topics.md를 업데이트한다
6. 최종 처리 결과를 요약해서 보여준다</pre>
        </div>
      </div>

      <div class="checkpoint mini">
        <span class="checkpoint-icon">✅</span>
        <span class="checkpoint-text-inline">.claude/agents/blog-automation.md 파일이 생성되었으면 다음으로</span>
      </div>
    </section>

    <!-- 에이전트 실행 -->
    <section>
      <div class="step-header">
        <div class="step-circle">2</div>
        <h2>에이전트 실행하기</h2>
      </div>
      <p>에이전트를 실행하면 미작성 주제가 자동으로 표시됩니다. 상황에 맞는 프롬프트를 복사해서 사용하세요.</p>

      <div class="prompt-card">
        <div class="prompt-label">기본 실행 — 개수 선택</div>
        <div class="code-block good">
          <pre>미작성 주제 중 하나를 서브에이전트로 작성해줘</pre>
        </div>
      </div>

      <div class="prompt-card">
        <div class="prompt-label">개수 지정 실행</div>
        <div class="code-block good">
          <pre>미작성 주제 중 5개를 서브에이전트로 처리해줘</pre>
        </div>
      </div>

      <div class="prompt-card">
        <div class="prompt-label">전체 실행</div>
        <div class="code-block good">
          <pre>미작성 주제 전부 서브에이전트로 처리해줘</pre>
        </div>
      </div>
    </section>

    <!-- 병렬 처리 시각화 -->
    <section>
      <div class="step-header">
        <div class="step-circle">3</div>
        <h2>병렬 처리 과정</h2>
      </div>
      <p>서브에이전트가 각 주제를 동시에 처리합니다. 하나씩 순서대로 하는 게 아니라 동시에 진행되기 때문에 시간이 크게 절약됩니다.</p>

      <div class="parallel-visual">
        <div class="parallel-hub">
          <div class="hub-icon">🤖</div>
          <div class="hub-label">blog-automation</div>
        </div>
        <div class="parallel-branches">
          <div class="branch-item">
            <div class="branch-line"></div>
            <div class="branch-card">
              <span class="branch-tag">A</span>
              <div class="branch-flow">
                <span class="flow-step-mini">글쓰기</span>
                <span class="flow-arrow-mini">→</span>
                <span class="flow-step-mini">검증</span>
                <span class="flow-arrow-mini">→</span>
                <span class="flow-step-mini">이미지</span>
              </div>
            </div>
          </div>
          <div class="branch-item">
            <div class="branch-line"></div>
            <div class="branch-card">
              <span class="branch-tag">B</span>
              <div class="branch-flow">
                <span class="flow-step-mini">글쓰기</span>
                <span class="flow-arrow-mini">→</span>
                <span class="flow-step-mini">검증</span>
                <span class="flow-arrow-mini">→</span>
                <span class="flow-step-mini">이미지</span>
              </div>
            </div>
          </div>
          <div class="branch-item">
            <div class="branch-line"></div>
            <div class="branch-card">
              <span class="branch-tag">C</span>
              <div class="branch-flow">
                <span class="flow-step-mini">글쓰기</span>
                <span class="flow-arrow-mini">→</span>
                <span class="flow-step-mini">검증</span>
                <span class="flow-arrow-mini">→</span>
                <span class="flow-step-mini">이미지</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="speed-card">
        <span class="speed-icon">🚀</span>
        <span>3개 주제를 처리해도 1개 처리하는 시간과 비슷합니다. 주제가 많을수록 효과가 큽니다.</span>
      </div>
    </section>

    <!-- 결과물 확인 -->
    <section>
      <div class="step-header">
        <div class="step-circle">4</div>
        <h2>결과물 확인</h2>
      </div>
      <p>에이전트가 완료되면 각 주제별로 글, 검증 결과, 이미지 카드가 모두 생성되어 있습니다.</p>

      <div class="result-preview">
        <div class="result-header">
          <span class="result-file">📁 블로그자동화/</span>
        </div>
        <div class="result-body">
          <div class="result-row folder">
            <span class="result-icon">📁</span>
            <span class="result-name">AI_이메일_작성_시간_줄이기/</span>
            <span class="result-tag post">주제 폴더</span>
          </div>
          <div class="result-row sub">
            <span class="result-icon">📄</span>
            <span class="result-name">AI_이메일_작성_시간_줄이기.md</span>
            <span class="result-tag post">글</span>
          </div>
          <div class="result-row sub">
            <span class="result-icon">📄</span>
            <span class="result-name">AI_이메일_작성_시간_줄이기_검증결과.md</span>
            <span class="result-tag review">검증</span>
          </div>
          <div class="result-row sub">
            <span class="result-icon">📁</span>
            <span class="result-name">이미지/</span>
            <span class="result-tag img">이미지</span>
          </div>
          <div class="result-row dim folder">
            <span class="result-icon">📁</span>
            <span class="result-name">회의록_자동_정리하는_방법/</span>
            <span class="result-tag post">주제 폴더</span>
          </div>
          <div class="result-row dim sub">
            <span class="result-icon">📄</span>
            <span class="result-name">회의록_자동_정리하는_방법.md</span>
            <span class="result-tag post">글</span>
          </div>
          <div class="result-row dim sub">
            <span class="result-icon">📄</span>
            <span class="result-name">회의록_자동_정리하는_방법_검증결과.md</span>
            <span class="result-tag review">검증</span>
          </div>
          <div class="result-row dim sub">
            <span class="result-icon">📁</span>
            <span class="result-name">이미지/</span>
            <span class="result-tag img">이미지</span>
          </div>
          <div class="result-row more">
            <span>...</span>
          </div>
        </div>
      </div>

      <div class="tip-card">
        <span class="tip-icon">💡</span>
        <div>topics.md도 자동으로 업데이트되어 있습니다. 처리된 주제는 모두 ✅ 완료 상태로 바뀌어 있습니다.</div>
      </div>
    </section>

    <!-- 최종 체크포인트 -->
    <div class="checkpoint">
      <div class="checkpoint-icon-big">🎉</div>
      <div class="checkpoint-content">
        <strong>블로그 완전 자동화 완성!</strong>
        <p>주제 선택부터 글 작성, 사실 검증, 이미지 생성까지 모든 과정이 자동으로 처리됩니다. 에이전트 한 번 실행으로 여러 편의 블로그 글이 완성됩니다.</p>
      </div>
    </div>
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

.step-header { display: flex; align-items: center; gap: 14px; margin-bottom: 12px; }
.step-circle {
  flex-shrink: 0; width: 40px; height: 40px;
  background: linear-gradient(135deg, #3b82f6, #2563eb);
  color: #fff; border-radius: 50%;
  display: flex; align-items: center; justify-content: center;
  font-size: 1.1rem; font-weight: 700;
}
.step-header h2 { margin: 0; font-size: 1.3rem; }

.prompt-card {
  background: #f8fafc; border: 1px solid #e2e8f0;
  border-radius: 12px; padding: 20px 24px; margin: 16px 0;
}
.prompt-card.highlight { background: #fffbeb; border-color: #fcd34d; }
.prompt-label { font-weight: 700; color: #1e293b; margin-bottom: 12px; font-size: 0.92rem; }

/* Parallel Visual */
.parallel-visual {
  display: flex; align-items: center; gap: 24px;
  margin: 20px 0; padding: 24px;
  background: #f8fafc; border: 1px solid #e2e8f0; border-radius: 12px;
}
.parallel-hub {
  display: flex; flex-direction: column; align-items: center;
  gap: 6px; flex-shrink: 0;
}
.hub-icon { font-size: 2.2rem; }
.hub-label { font-weight: 700; color: #1e293b; font-size: 0.85rem; }
.parallel-branches { flex: 1; display: flex; flex-direction: column; gap: 10px; }
.branch-item { display: flex; align-items: center; gap: 8px; }
.branch-line { width: 30px; height: 2px; background: #cbd5e1; flex-shrink: 0; }
.branch-card {
  display: flex; align-items: center; gap: 12px;
  background: #fff; border: 1px solid #e2e8f0;
  border-radius: 8px; padding: 12px 16px; flex: 1;
  transition: border-color 0.2s;
}
.branch-card:hover { border-color: #93c5fd; }
.branch-tag {
  flex-shrink: 0; width: 26px; height: 26px;
  background: #e0e7ff; color: #3730a3; border-radius: 50%;
  display: flex; align-items: center; justify-content: center;
  font-weight: 700; font-size: 0.78rem;
}
.branch-flow { display: flex; align-items: center; gap: 6px; }
.flow-step-mini {
  font-size: 0.8rem; font-weight: 600; color: #475569;
  background: #f1f5f9; padding: 3px 8px; border-radius: 6px;
}
.flow-arrow-mini { color: #94a3b8; font-size: 0.75rem; }

.speed-card {
  display: flex; gap: 10px; align-items: center;
  background: linear-gradient(135deg, #eff6ff, #dbeafe);
  border: 1px solid #93c5fd; border-radius: 12px;
  padding: 18px 22px; font-size: 0.95rem; color: #1e40af;
}
.speed-icon { font-size: 1.3rem; flex-shrink: 0; }

/* Result Preview */
.result-preview {
  background: #f8fafc; border: 1px solid #e2e8f0;
  border-radius: 12px; overflow: hidden; margin: 16px 0;
}
.result-header {
  display: flex; align-items: center; gap: 10px;
  padding: 14px 20px; background: #f1f5f9; border-bottom: 1px solid #e2e8f0;
}
.result-file { font-weight: 700; color: #1e293b; font-size: 0.95rem; }
.result-body { padding: 12px 20px; }
.result-row {
  display: flex; align-items: center; gap: 10px;
  padding: 8px 4px; border-bottom: 1px solid #f1f5f9;
  font-size: 0.88rem; color: #334155;
}
.result-row:last-child { border-bottom: none; }
.result-row.sub { padding-left: 28px; }
.result-row.folder { font-weight: 700; }
.result-row.dim { color: #94a3b8; }
.result-row.more { color: #94a3b8; justify-content: center; }
.result-icon { font-size: 1rem; flex-shrink: 0; }
.result-name { flex: 1; }
.result-tag {
  margin-left: auto; font-size: 0.72rem; padding: 2px 8px;
  border-radius: 8px; font-weight: 600; flex-shrink: 0;
}
.result-tag.post { background: #dbeafe; color: #1d4ed8; }
.result-tag.review { background: #dcfce7; color: #166534; }
.result-tag.img { background: #fce7f3; color: #be185d; }

.tip-card {
  display: flex; gap: 12px; align-items: center;
  background: #eff6ff; border: 1px solid #bfdbfe;
  border-radius: 12px; padding: 18px 22px;
  color: #1e40af; font-size: 0.95rem; line-height: 1.6;
}
.tip-icon { font-size: 1.3rem; flex-shrink: 0; }

.checkpoint.mini {
  display: flex; align-items: center; gap: 10px;
  background: #f0fdf4; border: 1px solid #bbf7d0;
  border-radius: 10px; padding: 12px 18px; margin: 16px 0;
}
.checkpoint.mini .checkpoint-icon { font-size: 1.2rem; }
.checkpoint-text-inline { color: #166534; font-size: 0.9rem; font-weight: 600; }

.checkpoint {
  display: flex; align-items: center; gap: 16px;
  background: linear-gradient(135deg, #f0fdf4 0%, #dcfce7 100%);
  border: 2px solid #86efac; border-radius: 12px;
  padding: 24px; margin-top: 32px;
}
.checkpoint-icon-big { font-size: 2.2rem; flex-shrink: 0; }
.checkpoint-content strong { display: block; color: #166534; font-size: 1.1rem; margin-bottom: 4px; }
.checkpoint-content p { color: #15803d; font-size: 0.9rem; margin: 0 !important; line-height: 1.5; }

@media (max-width: 768px) {
  .hero-section { padding: 32px 18px 28px; }
  .hero-section h1 { font-size: 1.4rem; }
  .step-header h2 { font-size: 1.1rem; }
  .step-circle { width: 34px; height: 34px; font-size: 0.95rem; }
  .parallel-visual { flex-direction: column; gap: 16px; }
  .parallel-hub { flex-direction: row; gap: 10px; }
  .branch-line { width: 20px; }
  .flow-step-mini { font-size: 0.72rem; }
  .result-row.sub { padding-left: 16px; }
  .result-tag { display: none; }
}
</style>
