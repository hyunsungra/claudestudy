<template>
  <div class="page-content">
    <!-- Hero Section -->
    <div class="hero-section">
      <div class="hero-icon">📝</div>
      <h1>블로그 글을 파일로 만들기</h1>
      <p class="hero-desc">스킬을 실행해서 블로그 글을 파일로 바로 생성하는 방법입니다.</p>
    </div>

    <!-- 스킬로 글 작성하기 -->
    <section class="section-slide">
      <h2 class="section-title">스킬로 글 작성하기</h2>

      <div class="run-card">
        <div class="run-header">
          <span class="run-icon">🚀</span>
          <span class="run-label">스킬 실행</span>
        </div>
        <div class="code-block good">
          <pre>/blog-write</pre>
        </div>
        <p class="run-note">스킬을 실행하면 Claude가 주제를 물어보거나, 주제와 함께 요청할 수 있습니다.</p>
      </div>

      <div class="prompt-card">
        <div class="prompt-badge topic">주제와 함께 요청</div>
        <div class="code-block good">
          <pre>"직장인이 AI를 배워야 하는 이유" 주제로 블로그 글 써줘.
내 스타일대로, output 폴더에 마크다운 파일로 저장해줘.</pre>
        </div>
      </div>
    </section>

    <!-- 결과 확인 및 수정 -->
    <section class="section-slide">
      <h2 class="section-title">결과 확인 및 수정</h2>
      <p class="section-desc">Claude가 글을 작성하고 <code>output/</code> 폴더에 파일로 저장합니다.</p>

      <div class="edit-cards">
        <div class="edit-card">
          <div class="edit-icon">🎵</div>
          <div class="edit-body">
            <div class="edit-label">톤 수정</div>
            <div class="edit-example">방금 쓴 글 톤이 너무 딱딱해. 좀 더 편하게 바꿔줘.</div>
          </div>
        </div>
        <div class="edit-card">
          <div class="edit-icon">➕</div>
          <div class="edit-body">
            <div class="edit-label">내용 추가</div>
            <div class="edit-example">2번째 소제목에 구체적인 도구 이름을 추가해줘.</div>
          </div>
        </div>
        <div class="edit-card">
          <div class="edit-icon">📏</div>
          <div class="edit-body">
            <div class="edit-label">길이 조절</div>
            <div class="edit-example">1,500자로 줄여줘.</div>
          </div>
        </div>
      </div>
    </section>

    <!-- 연속으로 여러 글 작성 -->
    <section class="section-slide">
      <h2 class="section-title">연속으로 여러 글 작성하기</h2>

      <div class="batch-card">
        <div class="batch-header">
          <span class="batch-icon">⚡</span>
          <span class="batch-label">여러 주제를 한 번에</span>
        </div>
        <div class="code-block good">
          <pre>아래 3개 주제로 블로그 글을 각각 써줘.
전부 output 폴더에 저장해줘.

1. "AI 시대, 비개발자도 코딩을 배워야 할까?"
2. "ChatGPT vs Claude, 솔직한 비교"
3. "업무 자동화로 퇴근시간 1시간 앞당긴 방법"</pre>
        </div>
      </div>

      <div class="result-row">
        <div class="result-item">
          <span class="r-icon">📄</span>
          <span>글 1</span>
        </div>
        <div class="result-item">
          <span class="r-icon">📄</span>
          <span>글 2</span>
        </div>
        <div class="result-item">
          <span class="r-icon">📄</span>
          <span>글 3</span>
        </div>
        <div class="result-arrow">→</div>
        <div class="result-item output">
          <span class="r-icon">📂</span>
          <span>output/</span>
        </div>
      </div>

      <div class="tip-card">
        <span class="tip-icon">💡</span>
        <span>Claude가 서브에이전트를 활용해서 여러 글을 동시에 작성할 수 있습니다.</span>
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

.section-slide { margin-bottom: 48px; }
.section-title { font-size: 1.5rem; font-weight: 700; color: #1e293b; margin-bottom: 12px; }
.section-desc { color: #475569; font-size: 1.05rem; line-height: 1.7; margin-bottom: 20px; }

/* Run Card */
.run-card {
  background: #f8fafc;
  border: 1px solid #e2e8f0;
  border-radius: 12px;
  padding: 24px;
  margin-bottom: 20px;
}
.run-header { display: flex; align-items: center; gap: 10px; margin-bottom: 12px; }
.run-icon { font-size: 1.4rem; }
.run-label { font-weight: 700; color: #1e293b; font-size: 1.05rem; }
.run-note { color: #64748b; font-size: 0.93rem; margin-top: 12px; margin-bottom: 0; }

/* Prompt Card */
.prompt-card {
  background: #f8fafc;
  border: 1px solid #e2e8f0;
  border-radius: 12px;
  padding: 20px 24px;
  margin-bottom: 16px;
}
.prompt-badge {
  display: inline-block;
  padding: 3px 12px;
  border-radius: 16px;
  font-weight: 700;
  font-size: 0.85rem;
  margin-bottom: 12px;
}
.prompt-badge.topic { background: #dbeafe; color: #1d4ed8; }

/* Edit Cards */
.edit-cards { display: flex; flex-direction: column; gap: 12px; }
.edit-card {
  display: flex;
  align-items: flex-start;
  gap: 16px;
  background: #f8fafc;
  border: 1px solid #e2e8f0;
  border-radius: 12px;
  padding: 18px 22px;
  transition: border-color 0.2s, transform 0.2s;
}
.edit-card:hover { border-color: #93c5fd; transform: translateY(-2px); }
.edit-icon { font-size: 1.5rem; flex-shrink: 0; margin-top: 2px; }
.edit-body { flex: 1; }
.edit-label { font-weight: 700; color: #1e293b; font-size: 0.95rem; margin-bottom: 4px; }
.edit-example { color: #64748b; font-size: 0.9rem; font-style: italic; }

/* Batch Card */
.batch-card {
  background: #f8fafc;
  border: 1px solid #e2e8f0;
  border-radius: 12px;
  padding: 24px;
  margin-bottom: 20px;
}
.batch-header { display: flex; align-items: center; gap: 10px; margin-bottom: 12px; }
.batch-icon { font-size: 1.4rem; }
.batch-label { font-weight: 700; color: #1e293b; font-size: 1.05rem; }

/* Result Row */
.result-row {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 12px;
  margin-bottom: 16px;
  flex-wrap: wrap;
}
.result-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 4px;
  background: #f8fafc;
  border: 1px solid #e2e8f0;
  border-radius: 10px;
  padding: 12px 18px;
  font-size: 0.9rem;
  font-weight: 600;
  color: #475569;
}
.result-item.output {
  background: linear-gradient(135deg, #eff6ff, #dbeafe);
  border-color: #93c5fd;
  color: #1d4ed8;
}
.r-icon { font-size: 1.3rem; }
.result-arrow { font-size: 1.3rem; color: #94a3b8; font-weight: 700; }

/* Tip Card */
.tip-card {
  display: flex;
  gap: 10px;
  align-items: center;
  background: #eff6ff;
  border: 1px solid #bfdbfe;
  border-radius: 12px;
  padding: 14px 20px;
  color: #1e40af;
  font-size: 0.93rem;
}
.tip-icon { font-size: 1.2rem; flex-shrink: 0; }

@media (max-width: 768px) {
  .hero-section { padding: 32px 18px 28px; }
  .hero-section h1 { font-size: 1.4rem; }
  .edit-card { padding: 14px 16px; gap: 12px; }
  .result-row { gap: 8px; }
  .result-item { padding: 10px 14px; font-size: 0.85rem; }
}
</style>
