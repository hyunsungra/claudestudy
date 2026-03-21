<template>
  <div class="page-content">
    <div class="hero-section">
      <div class="hero-icon">📋</div>
      <h1>주제 관리와 진행 추적</h1>
      <p class="hero-desc">어떤 주제를 썼고 안 썼는지 한눈에 관리하는 시스템을 만듭니다.</p>
    </div>

    <!-- 주제 목록 파일 만들기 -->
    <section>
      <div class="step-header">
        <div class="step-circle">1</div>
        <h2>주제 목록 파일 만들기</h2>
      </div>
      <p>주제를 관리할 파일을 만듭니다. 아래 프롬프트를 복사해서 코워크에 붙여넣으세요.</p>

      <div class="prompt-card highlight">
        <div class="prompt-label">코워크에 입력</div>
        <div class="code-block good">
          <pre>블로그 주제 관리 파일을 만들어줘.

형식:
- 체크박스로 작성 완료 여부 표시
- 주제, 상태(미작성/작성중/완료), 작성일
- topics.md 파일로 저장</pre>
        </div>
      </div>

      <div class="checkpoint mini">
        <span class="checkpoint-icon">✅</span>
        <span class="checkpoint-text-inline">topics.md 파일이 생성되었으면 다음으로</span>
      </div>
    </section>

    <!-- 주제 만들기 -->
    <section>
      <div class="step-header">
        <div class="step-circle">2</div>
        <h2>주제 만들기</h2>
      </div>
      <p>topics.md에 넣을 주제를 Claude에게 만들어달라고 합니다. 아래 예시 중 상황에 맞는 걸 복사해서 사용하세요.</p>

      <div class="prompt-card">
        <div class="prompt-label">카테고리별 주제 생성</div>
        <div class="code-block good">
          <pre>"AI 업무 활용" 카테고리로 블로그 주제 10개를 만들어서 topics.md에 추가해줘</pre>
        </div>
      </div>

      <div class="prompt-card">
        <div class="prompt-label">여러 카테고리 한꺼번에</div>
        <div class="code-block good">
          <pre>다음 카테고리별로 주제를 5개씩 만들어서 topics.md에 추가해줘:
- AI 업무 활용
- 생산성 도구
- 커리어 성장</pre>
        </div>
      </div>

      <div class="prompt-card">
        <div class="prompt-label">트렌드 기반 주제 생성</div>
        <div class="code-block good">
          <pre>2025년 AI 트렌드를 기반으로 블로그 주제 10개를 만들어서 topics.md에 추가해줘</pre>
        </div>
      </div>

      <div class="prompt-card">
        <div class="prompt-label">기존 글 기반으로 확장</div>
        <div class="code-block good">
          <pre>docsample 폴더의 기존 글들을 참고해서, 비슷한 방향의 새 주제 10개를 만들어서 topics.md에 추가해줘</pre>
        </div>
      </div>
    </section>

    <!-- topics.md 예시 -->
    <section>
      <div class="step-header">
        <div class="step-circle">3</div>
        <h2>topics.md 파일 예시</h2>
      </div>
      <p>완성되면 이런 형태의 파일이 만들어집니다.</p>

      <div class="topics-preview">
        <div class="topics-header">
          <span class="topics-file">📄 topics.md</span>
          <span class="topics-notice">실제 주제는 요청에 따라 달라집니다</span>
        </div>
        <div class="topics-body">
          <div class="topics-category">AI 업무 활용</div>
          <div class="topic-row done">
            <span class="topic-check">✅</span>
            <span class="topic-name">직장인이 AI를 배워야 하는 이유</span>
            <span class="topic-state complete">완료</span>
            <span class="topic-date">2026-03-15</span>
          </div>
          <div class="topic-row done">
            <span class="topic-check">✅</span>
            <span class="topic-name">ChatGPT vs Claude 솔직 비교</span>
            <span class="topic-state complete">완료</span>
            <span class="topic-date">2026-03-17</span>
          </div>
          <div class="topic-row">
            <span class="topic-check">⬜</span>
            <span class="topic-name">AI로 이메일 작성 시간 줄이기</span>
            <span class="topic-state pending">미작성</span>
            <span class="topic-date">-</span>
          </div>
          <div class="topic-row">
            <span class="topic-check">⬜</span>
            <span class="topic-name">회의록 자동 정리하는 방법</span>
            <span class="topic-state pending">미작성</span>
            <span class="topic-date">-</span>
          </div>
          <div class="topic-row">
            <span class="topic-check">⬜</span>
            <span class="topic-name">AI 프롬프트 잘 쓰는 5가지 원칙</span>
            <span class="topic-state pending">미작성</span>
            <span class="topic-date">-</span>
          </div>
          <div class="topic-row">
            <span class="topic-check">⬜</span>
            <span class="topic-name">비개발자도 할 수 있는 업무 자동화</span>
            <span class="topic-state pending">미작성</span>
            <span class="topic-date">-</span>
          </div>
        </div>
      </div>

    </section>

    <!-- 글쓰기 스킬 수정하기 -->
    <section>
      <div class="step-header">
        <div class="step-circle">4</div>
        <h2>기존 글쓰기 스킬 수정하기</h2>
      </div>
      <p>Step 3에서 만든 blog-writer 스킬을 업그레이드합니다. topics.md에서 미작성 주제를 자동으로 가져오고, 작성 완료 후 상태도 자동 업데이트되도록 수정합니다.</p>

      <div class="prompt-card highlight">
        <div class="prompt-label">코워크에 입력 (스킬 수정 프롬프트)</div>
        <div class="code-block good">
          <pre>blog-writer 스킬을 수정해줘.

변경사항:
1. 스킬 실행 시 topics.md에서 미작성 주제 목록을 먼저 보여줄 것
2. 사용자가 주제를 선택하면 해당 주제로 글을 작성할 것
3. 글 작성 시 주제명 폴더를 만들고 그 안에 글을 저장할 것
   (예: AI_업무_활용_5가지_방법/ 폴더 안에 AI_업무_활용_5가지_방법.md)
4. 글 작성이 완료되면 topics.md에서 해당 주제의 상태를 완료로 변경하고 작성일을 오늘 날짜로 기입할 것
5. 사용자가 주제를 직접 입력할 수도 있게 할 것</pre>
        </div>
      </div>

      <div class="checkpoint mini">
        <span class="checkpoint-icon">✅</span>
        <span class="checkpoint-text-inline">스킬 수정이 완료되었으면 다음으로</span>
      </div>
    </section>

    <!-- 글 작성 요청 -->
    <section>
      <div class="step-header">
        <div class="step-circle">5</div>
        <h2>글 작성 요청</h2>
      </div>
      <p>수정된 스킬을 실행하면 topics.md의 미작성 주제가 자동으로 표시됩니다.</p>

      <div class="prompt-card">
        <div class="prompt-label">코워크에 입력 — 주제 목록에서 선택</div>
        <div class="code-block good">
          <pre>글 작성해줘</pre>
        </div>
      </div>

      <div class="prompt-card">
        <div class="prompt-label">코워크에 입력 — 주제를 직접 지정</div>
        <div class="code-block good">
          <pre>"AI로 이메일 작성 시간 줄이기" 주제로 글 작성해줘</pre>
        </div>
      </div>

      <div class="prompt-card">
        <div class="prompt-label">코워크에 입력 — 여러 개 한꺼번에</div>
        <div class="code-block good">
          <pre>topics.md에서 미작성 주제 중 위에서 3개를 순서대로 글 작성해줘</pre>
        </div>
      </div>

      <div class="tip-card">
        <span class="tip-icon">💡</span>
        <div>글이 완성되면 topics.md의 상태가 자동으로 ✅ 완료로 바뀝니다. 직접 수정할 필요 없습니다.</div>
      </div>
    </section>

    <!-- 최종 체크포인트 -->
    <div class="checkpoint">
      <div class="checkpoint-icon-big">🎉</div>
      <div class="checkpoint-content">
        <strong>주제 관리 시스템 완성!</strong>
        <p>topics.md로 주제를 체계적으로 관리하면서, 꾸준히 블로그를 운영할 수 있습니다.</p>
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

/* Step Header */
.step-header { display: flex; align-items: center; gap: 14px; margin-bottom: 12px; }
.step-circle {
  flex-shrink: 0;
  width: 40px; height: 40px;
  background: linear-gradient(135deg, #3b82f6, #2563eb);
  color: #fff; border-radius: 50%;
  display: flex; align-items: center; justify-content: center;
  font-size: 1.1rem; font-weight: 700;
}
.step-header h2 { margin: 0; font-size: 1.3rem; }

/* Prompt Card */
.prompt-card {
  background: #f8fafc;
  border: 1px solid #e2e8f0;
  border-radius: 12px;
  padding: 20px 24px;
  margin: 16px 0;
}
.prompt-card.highlight {
  background: #fffbeb;
  border-color: #fcd34d;
}
.prompt-label {
  font-weight: 700;
  color: #1e293b;
  margin-bottom: 12px;
  font-size: 0.92rem;
}

/* Topics Preview */
.topics-preview {
  background: #f8fafc;
  border: 1px solid #e2e8f0;
  border-radius: 12px;
  overflow: hidden;
  margin: 16px 0;
}
.topics-header {
  display: flex;
  align-items: center;
  gap: 10px;
  flex-wrap: wrap;
  padding: 14px 20px;
  background: #f1f5f9;
  border-bottom: 1px solid #e2e8f0;
}
.topics-file { font-weight: 700; color: #1e293b; font-size: 0.95rem; }
.topics-notice {
  background: #fef3c7;
  color: #92400e;
  font-size: 0.75rem;
  font-weight: 600;
  padding: 3px 10px;
  border-radius: 6px;
  border: 1px solid #fcd34d;
}
.topics-body { padding: 16px 20px; }
.topics-category {
  font-weight: 700;
  color: #1e293b;
  font-size: 1.05rem;
  margin-bottom: 12px;
  padding-bottom: 8px;
  border-bottom: 1px solid #e2e8f0;
}
.topic-row {
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 10px 4px;
  border-bottom: 1px solid #f1f5f9;
  font-size: 0.93rem;
}
.topic-row:last-child { border-bottom: none; }
.topic-check { font-size: 1rem; flex-shrink: 0; }
.topic-name { flex: 1; color: #334155; }
.topic-row.done .topic-name { color: #94a3b8; text-decoration: line-through; }
.topic-state {
  font-size: 0.78rem;
  font-weight: 600;
  padding: 2px 10px;
  border-radius: 10px;
  flex-shrink: 0;
}
.topic-state.complete { background: #dcfce7; color: #166534; }
.topic-state.pending { background: #f1f5f9; color: #64748b; }
.topic-date { color: #94a3b8; font-size: 0.82rem; min-width: 80px; text-align: right; }

/* Tip Card */
.tip-card {
  display: flex;
  gap: 12px;
  align-items: center;
  background: #eff6ff;
  border: 1px solid #bfdbfe;
  border-radius: 12px;
  padding: 18px 22px;
  color: #1e40af;
  font-size: 0.95rem;
  line-height: 1.6;
}
.tip-icon { font-size: 1.3rem; flex-shrink: 0; }

/* Mini Checkpoint */
.checkpoint.mini {
  display: flex;
  align-items: center;
  gap: 10px;
  background: #f0fdf4;
  border: 1px solid #bbf7d0;
  border-radius: 10px;
  padding: 12px 18px;
  margin: 16px 0;
}
.checkpoint.mini .checkpoint-icon { font-size: 1.2rem; }
.checkpoint-text-inline {
  color: #166534;
  font-size: 0.9rem;
  font-weight: 600;
}

/* Final Checkpoint */
.checkpoint {
  display: flex;
  align-items: center;
  gap: 16px;
  background: linear-gradient(135deg, #f0fdf4 0%, #dcfce7 100%);
  border: 2px solid #86efac;
  border-radius: 12px;
  padding: 24px;
  margin-top: 32px;
}
.checkpoint-icon-big { font-size: 2.2rem; flex-shrink: 0; }
.checkpoint-content strong {
  display: block;
  color: #166534;
  font-size: 1.1rem;
  margin-bottom: 4px;
}
.checkpoint-content p {
  color: #15803d;
  font-size: 0.9rem;
  margin: 0 !important;
  line-height: 1.5;
}

@media (max-width: 768px) {
  .hero-section { padding: 32px 18px 28px; }
  .hero-section h1 { font-size: 1.4rem; }
  .step-header h2 { font-size: 1.1rem; }
  .step-circle { width: 34px; height: 34px; font-size: 0.95rem; }
  .topic-date { display: none; }
  .topic-state { display: none; }
}
</style>
