<template>
  <div class="page-content">
    <!-- Hero Section -->
    <div class="hero-section">
      <div class="hero-icon">✍️</div>
      <h1>주제를 던져서 글 작성하기</h1>
      <p class="hero-desc">스킬이 준비됐으니, 이제 주제만 던지면 글이 완성됩니다.</p>
    </div>

    <!-- 글 작성 요청 -->
    <section class="section-slide">
      <h2 class="section-title">글 작성 요청</h2>
      <p class="section-desc">만들어둔 글쓰기 스킬을 활용해서 주제만 던지면 됩니다.</p>

      <div class="prompt-cards">
        <div class="prompt-card">
          <div class="prompt-badge simple">간단하게</div>
          <div class="code-block good">
            <pre>"AI를 업무에 활용하는 5가지 방법" 이라는 주제로 블로그 글 써줘.
내 글쓰기 스타일대로.</pre>
          </div>
        </div>
        <div class="prompt-card">
          <div class="prompt-badge detail">더 구체적으로</div>
          <div class="code-block good">
            <pre>"재택근무 3년차가 알려주는 생산성 팁" 주제로 블로그 글 써줘.

추가 조건:
- 내 경험담을 넣어서 써줘
- 실제로 쓰는 도구 이름도 포함해줘
- 2,000자 내외로
- 마지막에 핵심 요약 넣어줘</pre>
          </div>
        </div>
      </div>
    </section>

    <!-- 결과물 다듬기 -->
    <section class="section-slide">
      <h2 class="section-title">결과물 다듬기</h2>
      <p class="section-desc">첫 결과가 마음에 안 들면 대화로 수정하세요.</p>

      <div class="edit-grid">
        <div class="edit-card">
          <div class="edit-icon">🎵</div>
          <div class="edit-label">톤 조절</div>
          <div class="edit-example">"좀 더 가볍고 친근하게 바꿔줘"</div>
        </div>
        <div class="edit-card">
          <div class="edit-icon">📏</div>
          <div class="edit-label">길이 조절</div>
          <div class="edit-example">"너무 길어. 1,500자로 줄여줘"</div>
        </div>
        <div class="edit-card">
          <div class="edit-icon">➕</div>
          <div class="edit-label">내용 추가</div>
          <div class="edit-example">"3번째 팁에 구체적인 사례를 하나 더 넣어줘"</div>
        </div>
        <div class="edit-card">
          <div class="edit-icon">🔄</div>
          <div class="edit-label">구조 변경</div>
          <div class="edit-example">"소제목을 질문 형태로 바꿔줘"</div>
        </div>
      </div>
    </section>

    <!-- 파일로 저장 -->
    <section class="section-slide">
      <h2 class="section-title">파일로 저장</h2>
      <p class="section-desc">완성된 글을 파일로 저장해달라고 하면 됩니다.</p>

      <div class="save-card">
        <div class="save-icon">💾</div>
        <div class="save-body">
          <div class="save-label">저장 요청</div>
          <div class="code-block good">
            <pre>이 글을 "완성글" 폴더에 마크다운 파일로 저장해줘.
파일명은 날짜_제목 형식으로.</pre>
          </div>
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

.section-slide { margin-bottom: 48px; }
.section-title { font-size: 1.5rem; font-weight: 700; color: #1e293b; margin-bottom: 12px; }
.section-desc { color: #475569; font-size: 1.05rem; line-height: 1.7; margin-bottom: 20px; }

/* Prompt Cards */
.prompt-cards { display: flex; flex-direction: column; gap: 20px; }
.prompt-card {
  background: #f8fafc;
  border: 1px solid #e2e8f0;
  border-radius: 12px;
  padding: 20px 24px;
  transition: border-color 0.2s;
}
.prompt-card:hover { border-color: #93c5fd; }
.prompt-badge {
  display: inline-block;
  padding: 3px 12px;
  border-radius: 16px;
  font-weight: 700;
  font-size: 0.85rem;
  margin-bottom: 12px;
}
.prompt-badge.simple { background: #dcfce7; color: #15803d; }
.prompt-badge.detail { background: #dbeafe; color: #1d4ed8; }

/* Edit Grid */
.edit-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 16px;
}
.edit-card {
  background: #f8fafc;
  border: 1px solid #e2e8f0;
  border-radius: 12px;
  padding: 22px 20px;
  text-align: center;
  transition: border-color 0.2s, transform 0.2s;
}
.edit-card:hover { border-color: #93c5fd; transform: translateY(-2px); }
.edit-icon { font-size: 1.8rem; margin-bottom: 8px; }
.edit-label { font-weight: 700; color: #1e293b; margin-bottom: 8px; font-size: 1rem; }
.edit-example {
  color: #64748b;
  font-size: 0.9rem;
  line-height: 1.5;
  font-style: italic;
}

/* Save Card */
.save-card {
  display: flex;
  gap: 20px;
  align-items: flex-start;
  background: #f8fafc;
  border: 1px solid #e2e8f0;
  border-radius: 12px;
  padding: 24px;
}
.save-icon { font-size: 2.2rem; flex-shrink: 0; }
.save-body { flex: 1; }
.save-label { font-weight: 700; color: #1e293b; margin-bottom: 12px; font-size: 1.05rem; }

@media (max-width: 768px) {
  .hero-section { padding: 32px 18px 28px; }
  .hero-section h1 { font-size: 1.4rem; }
  .edit-grid { grid-template-columns: 1fr; }
  .save-card { flex-direction: column; gap: 12px; }
}
</style>
