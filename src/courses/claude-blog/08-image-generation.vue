<template>
  <div class="page-content">
    <!-- Hero Section -->
    <div class="hero-section">
      <div class="hero-icon">🎨</div>
      <h1>API로 첨부 이미지 생성</h1>
      <p class="hero-desc">블로그 글에 들어갈 이미지까지 AI로 자동 생성하는 방법입니다.</p>
    </div>

    <!-- 아이디어 -->
    <section class="section-slide">
      <h2 class="section-title">아이디어</h2>
      <div class="idea-card">
        <div class="idea-flow">
          <div class="idea-item">
            <span class="idea-icon">📝</span>
            <span class="idea-label">글 작성</span>
          </div>
          <div class="idea-arrow">+</div>
          <div class="idea-item">
            <span class="idea-icon">🖼️</span>
            <span class="idea-label">이미지 생성</span>
          </div>
          <div class="idea-arrow">=</div>
          <div class="idea-item result">
            <span class="idea-icon">✨</span>
            <span class="idea-label">완성된 블로그 글</span>
          </div>
        </div>
        <p class="idea-desc">블로그 글을 쓰면 썸네일이나 본문 이미지가 필요합니다. 이미지 생성 API를 연동하면, <strong>글 내용에 맞는 이미지를 자동으로 만들어서 함께 저장</strong>할 수 있습니다.</p>
      </div>
    </section>

    <!-- 이미지 생성 API -->
    <section class="section-slide">
      <h2 class="section-title">이미지 생성 API</h2>
      <p class="section-desc">대표적인 이미지 생성 서비스들입니다.</p>

      <div class="api-cards">
        <div class="api-card">
          <div class="api-icon">🟢</div>
          <div class="api-name">DALL-E (OpenAI)</div>
          <div class="api-desc">텍스트 설명으로 이미지 생성. API로 호출 가능.</div>
        </div>
        <div class="api-card">
          <div class="api-icon">🟣</div>
          <div class="api-name">Stable Diffusion</div>
          <div class="api-desc">오픈소스. 로컬 실행 또는 API 사용 가능.</div>
        </div>
        <div class="api-card">
          <div class="api-icon">🔵</div>
          <div class="api-name">Midjourney</div>
          <div class="api-desc">고품질 이미지. Discord 또는 웹에서 사용.</div>
        </div>
      </div>
    </section>

    <!-- Claude Code에서 연동하기 -->
    <section class="section-slide">
      <h2 class="section-title">Claude Code에서 연동하기</h2>
      <p class="section-desc">Claude Code에게 이미지 생성 스크립트를 만들어달라고 하면 됩니다.</p>

      <div class="prompt-card">
        <div class="prompt-badge auto">이미지 생성 자동화 요청</div>
        <div class="code-block good">
          <pre>블로그 글을 쓴 뒤에 자동으로 썸네일 이미지를 생성하는 기능을 추가해줘.

조건:
- 글 제목과 핵심 키워드를 바탕으로 이미지 프롬프트를 만들어줘
- DALL-E API를 사용해서 이미지 생성
- 생성된 이미지를 output 폴더에 글과 같은 이름으로 저장
- API 키는 환경변수에서 읽어오게</pre>
        </div>
      </div>
    </section>

    <!-- 완성된 자동화 흐름 -->
    <section class="section-slide">
      <h2 class="section-title">완성된 자동화 흐름</h2>

      <div class="auto-steps">
        <div class="auto-step">
          <div class="auto-num">1</div>
          <div class="auto-label">주제 선택</div>
          <div class="auto-sub">topics.md에서</div>
        </div>
        <div class="auto-step">
          <div class="auto-num">2</div>
          <div class="auto-label">글 작성</div>
          <div class="auto-sub">서브에이전트 병렬</div>
        </div>
        <div class="auto-step">
          <div class="auto-num">3</div>
          <div class="auto-label">이미지 프롬프트</div>
          <div class="auto-sub">글 내용 기반</div>
        </div>
        <div class="auto-step">
          <div class="auto-num">4</div>
          <div class="auto-label">이미지 생성</div>
          <div class="auto-sub">API 호출</div>
        </div>
        <div class="auto-step">
          <div class="auto-num">5</div>
          <div class="auto-label">함께 저장</div>
          <div class="auto-sub">글 + 이미지</div>
        </div>
        <div class="auto-step">
          <div class="auto-num">6</div>
          <div class="auto-label">상태 업데이트</div>
          <div class="auto-sub">topics.md</div>
        </div>
      </div>

      <div class="output-preview">
        <div class="output-header">
          <span class="output-icon">📂</span>
          <span class="output-label">output/ 결과 폴더</span>
        </div>
        <div class="output-body">
          <div class="output-row">
            <span class="file-icon">📄</span>
            <span>2026-03-20_AI업무활용.md</span>
            <span class="file-tag">글</span>
          </div>
          <div class="output-row">
            <span class="file-icon">🖼️</span>
            <span>2026-03-20_AI업무활용.png</span>
            <span class="file-tag img">썸네일</span>
          </div>
          <div class="output-row">
            <span class="file-icon">📄</span>
            <span>2026-03-20_협업도구추천.md</span>
            <span class="file-tag">글</span>
          </div>
          <div class="output-row">
            <span class="file-icon">🖼️</span>
            <span>2026-03-20_협업도구추천.png</span>
            <span class="file-tag img">썸네일</span>
          </div>
          <div class="output-row more">
            <span>...</span>
          </div>
        </div>
      </div>
    </section>

    <!-- 주의할 점 -->
    <section class="section-slide">
      <h2 class="section-title">주의할 점</h2>
      <div class="warn-cards">
        <div class="warn-card">
          <div class="warn-icon">💰</div>
          <div class="warn-body">
            <div class="warn-label">API 비용</div>
            <div class="warn-desc">이미지 생성 API는 건당 비용이 발생합니다. 대량 생성 시 비용을 확인하세요.</div>
          </div>
        </div>
        <div class="warn-card">
          <div class="warn-icon">⚖️</div>
          <div class="warn-body">
            <div class="warn-label">저작권</div>
            <div class="warn-desc">AI 생성 이미지의 저작권은 서비스마다 다릅니다. 상업적 사용 시 해당 서비스의 이용약관을 확인하세요.</div>
          </div>
        </div>
        <div class="warn-card">
          <div class="warn-icon">🔍</div>
          <div class="warn-body">
            <div class="warn-label">품질 검토</div>
            <div class="warn-desc">생성된 이미지가 글 내용과 맞는지, 어색하지 않은지 직접 확인하세요.</div>
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

/* Idea Card */
.idea-card {
  background: #f8fafc;
  border: 1px solid #e2e8f0;
  border-radius: 12px;
  padding: 28px 24px;
}
.idea-flow {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 14px;
  margin-bottom: 20px;
  flex-wrap: wrap;
}
.idea-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 6px;
  background: #fff;
  border: 1px solid #e2e8f0;
  border-radius: 10px;
  padding: 14px 20px;
  min-width: 100px;
}
.idea-item.result {
  background: linear-gradient(135deg, #eff6ff, #dbeafe);
  border-color: #93c5fd;
}
.idea-icon { font-size: 1.6rem; }
.idea-label { font-weight: 600; color: #1e293b; font-size: 0.9rem; text-align: center; }
.idea-arrow { font-size: 1.4rem; font-weight: 700; color: #3b82f6; }
.idea-desc { color: #475569; font-size: 0.95rem; line-height: 1.7; margin: 0; text-align: center; }

/* API Cards */
.api-cards { display: grid; grid-template-columns: repeat(3, 1fr); gap: 16px; }
.api-card {
  background: #f8fafc;
  border: 1px solid #e2e8f0;
  border-radius: 12px;
  padding: 24px 20px;
  text-align: center;
  transition: border-color 0.2s, transform 0.2s;
}
.api-card:hover { border-color: #93c5fd; transform: translateY(-2px); }
.api-icon { font-size: 2rem; margin-bottom: 10px; }
.api-name { font-weight: 700; color: #1e293b; font-size: 1rem; margin-bottom: 8px; }
.api-desc { color: #64748b; font-size: 0.88rem; line-height: 1.5; }

/* Prompt Card */
.prompt-card {
  background: #f8fafc;
  border: 1px solid #e2e8f0;
  border-radius: 12px;
  padding: 20px 24px;
  margin-bottom: 20px;
}
.prompt-badge {
  display: inline-block;
  padding: 3px 12px;
  border-radius: 16px;
  font-weight: 700;
  font-size: 0.85rem;
  margin-bottom: 12px;
}
.prompt-badge.auto { background: #dbeafe; color: #1d4ed8; }

/* Auto Steps */
.auto-steps {
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  gap: 10px;
  margin-bottom: 24px;
}
.auto-step {
  background: #f8fafc;
  border: 1px solid #e2e8f0;
  border-radius: 10px;
  padding: 16px 10px;
  text-align: center;
  transition: border-color 0.2s, transform 0.2s;
}
.auto-step:hover { border-color: #93c5fd; transform: translateY(-2px); }
.auto-num {
  width: 30px; height: 30px;
  background: linear-gradient(135deg, #3b82f6, #2563eb);
  color: #fff; border-radius: 50%;
  display: flex; align-items: center; justify-content: center;
  font-weight: 700; font-size: 0.85rem;
  margin: 0 auto 8px;
}
.auto-label { font-weight: 700; color: #1e293b; font-size: 0.85rem; margin-bottom: 4px; }
.auto-sub { color: #94a3b8; font-size: 0.78rem; }

/* Output Preview */
.output-preview {
  background: #f8fafc;
  border: 1px solid #e2e8f0;
  border-radius: 12px;
  overflow: hidden;
  margin-bottom: 16px;
}
.output-header {
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 14px 20px;
  background: #f1f5f9;
  border-bottom: 1px solid #e2e8f0;
  font-weight: 700;
  color: #1e293b;
  font-size: 0.95rem;
}
.output-icon { font-size: 1.1rem; }
.output-body { padding: 12px 20px; }
.output-row {
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 8px 4px;
  border-bottom: 1px solid #f1f5f9;
  font-size: 0.9rem;
  color: #334155;
}
.output-row:last-child { border-bottom: none; }
.output-row.more { color: #94a3b8; justify-content: center; }
.file-icon { font-size: 1rem; flex-shrink: 0; }
.file-tag {
  margin-left: auto;
  font-size: 0.75rem;
  padding: 2px 8px;
  border-radius: 8px;
  background: #e0e7ff;
  color: #3730a3;
  font-weight: 600;
}
.file-tag.img { background: #fce7f3; color: #be185d; }

/* Warn Cards */
.warn-cards { display: flex; flex-direction: column; gap: 12px; }
.warn-card {
  display: flex;
  align-items: flex-start;
  gap: 16px;
  background: #fffbeb;
  border: 1px solid #fde68a;
  border-radius: 12px;
  padding: 18px 22px;
}
.warn-icon { font-size: 1.5rem; flex-shrink: 0; margin-top: 2px; }
.warn-body { flex: 1; }
.warn-label { font-weight: 700; color: #92400e; font-size: 0.95rem; margin-bottom: 4px; }
.warn-desc { color: #78716c; font-size: 0.9rem; line-height: 1.6; }

@media (max-width: 768px) {
  .hero-section { padding: 32px 18px 28px; }
  .hero-section h1 { font-size: 1.4rem; }
  .api-cards { grid-template-columns: 1fr; }
  .auto-steps { grid-template-columns: repeat(3, 1fr); }
  .idea-flow { flex-direction: column; gap: 8px; }
  .output-row { font-size: 0.82rem; }
}
</style>
