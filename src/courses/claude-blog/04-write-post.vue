<template>
  <div class="page-content">
    <div class="hero-section">
      <div class="hero-icon">✍️</div>
      <h1>실제 사용하기</h1>
      <p class="hero-desc">페르소나와 스킬이 준비됐으니, 이제 주제만 던지면 글이 완성됩니다.</p>
    </div>

    <!-- 글 작성 요청 -->
    <section>
      <div class="step-header">
        <div class="step-circle">1</div>
        <h2>글 작성 요청</h2>
      </div>
      <p>코워크에서 만들어둔 스킬을 실행합니다. 아래 프롬프트를 복사해서 붙여넣으세요.</p>

      <div class="prompt-card">
        <div class="prompt-label">코워크에 입력 — 이 중 하나를 복사해서 주제만 바꿔 쓰세요</div>
        <div class="code-block good">
          <pre>"AI를 업무에 활용하는 5가지 방법" 주제로 글을 작성해줘</pre>
        </div>
        <div class="code-block good">
          <pre>"재택근무 3년차가 알려주는 집중력 유지 방법"에 대해 블로그 글 써줘</pre>
        </div>
        <div class="code-block good">
          <pre>"사이드 프로젝트를 시작하는 현실적인 방법" 주제로 글 작성해줘. 개인 경험을 많이 넣어서 써줘</pre>
        </div>
        <div class="code-block good">
          <pre>"2025년 주목할 AI 트렌드 5가지"에 대해 글 써줘. 각 트렌드마다 실제 활용 사례도 포함해줘</pre>
        </div>
      </div>

      <div class="tip-card">
        <span class="tip-icon">💡</span>
        <div>주제를 더 구체적으로 쓸수록 좋은 글이 나옵니다. 추가 조건(경험담 포함, 사례 포함 등)을 붙이면 더 원하는 결과가 나옵니다.</div>
      </div>
    </section>

    <!-- 결과물 확인 -->
    <section>
      <div class="step-header">
        <div class="step-circle">2</div>
        <h2>결과물 확인</h2>
      </div>
      <p>글 작성이 끝나면 작업 폴더에 <strong>마크다운(.md) 파일</strong>이 저장되어 있습니다.</p>

      <div class="manual-action">
        <div class="manual-icon">📂</div>
        <div class="manual-text">
          <strong>직접 할 일</strong>
          <p>파일 탐색기에서 작업 폴더를 열고, 새로 생성된 .md 파일을 확인하세요.</p>
        </div>
      </div>

      <div class="folder-preview">
        <div class="folder-title">블로그자동화/</div>
        <div class="folder-files">
          <span class="file-tag dim">📄 페르소나.md</span>
          <span class="file-tag dim">📁 docsample/</span>
          <span class="file-tag dim">📁 .claude/</span>
          <span class="file-tag new">📁 AI_업무_활용_5가지_방법/ ← 주제명 폴더 새로 생성!</span>
          <span class="file-tag new sub">📄 AI_업무_활용_5가지_방법.md ← 본문</span>
        </div>
      </div>

      <div class="tip-card">
        <span class="tip-icon">💡</span>
        <div>.md 파일은 메모장으로도 열 수 있고, VS Code나 노션에 붙여넣으면 서식이 자동으로 적용됩니다.</div>
      </div>

      <div class="checkpoint mini">
        <span class="checkpoint-icon">✅</span>
        <span class="checkpoint-text-inline">파일이 생성되어 있으면 성공입니다</span>
      </div>
    </section>

    <!-- 결과물 다듬기 -->
    <section>
      <div class="step-header">
        <div class="step-circle">3</div>
        <h2>결과물 다듬기</h2>
      </div>
      <p>결과가 마음에 안 들 때 수정하는 방법은 <strong>두 가지</strong>입니다.</p>

      <!-- 이번 글만 수정 -->
      <div class="edit-type-card">
        <div class="edit-type-header content-type">
          <span class="edit-type-badge">방법 1</span>
          <h3>이번 글만 수정하기</h3>
        </div>
        <p class="edit-type-desc">지금 작성된 글의 내용만 바꾸고 싶을 때. 스킬 규칙은 그대로 유지됩니다.</p>
        <div class="edit-prompts">
          <div class="edit-prompt-card">
            <div class="edit-icon">🎵</div>
            <div class="edit-info">
              <div class="edit-label">톤 조절</div>
              <div class="code-block good">
                <pre>방금 작성한 글을 좀 더 가볍고 친근하게 바꿔줘</pre>
              </div>
            </div>
          </div>
          <div class="edit-prompt-card">
            <div class="edit-icon">📏</div>
            <div class="edit-info">
              <div class="edit-label">길이 조절</div>
              <div class="code-block good">
                <pre>방금 작성한 글이 너무 길어. 1,500자로 줄여줘</pre>
              </div>
            </div>
          </div>
          <div class="edit-prompt-card">
            <div class="edit-icon">➕</div>
            <div class="edit-info">
              <div class="edit-label">내용 추가</div>
              <div class="code-block good">
                <pre>3번째 팁에 구체적인 사례를 하나 더 넣어줘</pre>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- 스킬 자체를 수정 -->
      <div class="edit-type-card">
        <div class="edit-type-header skill-type">
          <span class="edit-type-badge">방법 2</span>
          <h3>스킬 규칙 자체를 수정하기</h3>
        </div>
        <p class="edit-type-desc">앞으로 작성하는 <strong>모든 글</strong>에 적용할 변경사항이 있을 때. 스킬의 규칙이 바뀝니다.</p>
        <div class="edit-prompts">
          <div class="edit-prompt-card">
            <div class="edit-icon">📐</div>
            <div class="edit-info">
              <div class="edit-label">기본 길이 변경</div>
              <div class="code-block good">
                <pre>blog-writer 스킬에서 기본 글 길이를 2000자로 수정해줘</pre>
              </div>
            </div>
          </div>
          <div class="edit-prompt-card">
            <div class="edit-icon">🔄</div>
            <div class="edit-info">
              <div class="edit-label">구성 패턴 변경</div>
              <div class="code-block good">
                <pre>blog-writer 스킬에서 항상 마지막에 핵심 요약 3줄을 넣도록 수정해줘</pre>
              </div>
            </div>
          </div>
          <div class="edit-prompt-card">
            <div class="edit-icon">✍️</div>
            <div class="edit-info">
              <div class="edit-label">문체 규칙 추가</div>
              <div class="code-block good">
                <pre>blog-writer 스킬에서 도입부에 항상 개인 경험을 넣도록 규칙을 추가해줘</pre>
              </div>
            </div>
          </div>
        </div>
        <div class="tip-card">
          <span class="tip-icon">💡</span>
          <div>스킬을 수정할 때는 반드시 <strong>"blog-writer 스킬에서"</strong>를 붙여서 요청하세요. 안 붙이면 이번 글만 수정됩니다.</div>
        </div>
        <div class="warning-card">
          <span class="warning-icon">⚠️</span>
          <div>스킬 수정 후에는 <strong>"같은 주제로 글을 다시 작성해줘"</strong>라고 요청해야 변경된 규칙이 반영된 결과를 볼 수 있습니다.</div>
        </div>
      </div>
    </section>

    <!-- 최종 체크포인트 -->
    <div class="checkpoint">
      <div class="checkpoint-icon-big">🎉</div>
      <div class="checkpoint-content">
        <strong>첫 블로그 글 작성 완료!</strong>
        <p>주제만 바꿔서 같은 방법으로 계속 글을 작성할 수 있습니다. 다음 단계에서는 주제를 체계적으로 관리하는 방법을 알아봅니다.</p>
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
.prompt-label {
  font-weight: 700;
  color: #1e293b;
  margin-bottom: 12px;
  font-size: 0.92rem;
}

/* Manual Action */
.manual-action {
  display: flex;
  align-items: center;
  gap: 14px;
  background: #fef3c7;
  border: 1px solid #fcd34d;
  border-radius: 12px;
  padding: 18px 22px;
  margin: 16px 0;
}
.manual-icon { font-size: 1.6rem; flex-shrink: 0; }
.manual-text strong { display: block; color: #92400e; margin-bottom: 4px; }
.manual-text p { color: #a16207; font-size: 0.9rem; margin: 0 !important; line-height: 1.5; }

/* Folder Preview */
.folder-preview {
  background: #f8fafc;
  border: 1px solid #e2e8f0;
  border-radius: 12px;
  padding: 18px 22px;
  margin: 16px 0;
}
.folder-title {
  font-weight: 700;
  color: #1e293b;
  margin-bottom: 10px;
  font-size: 0.95rem;
}
.folder-files {
  display: flex;
  flex-direction: column;
  gap: 6px;
}
.file-tag {
  background: #fff;
  border: 1px solid #e2e8f0;
  border-radius: 8px;
  padding: 8px 14px;
  font-size: 0.88rem;
  color: #475569;
}
.file-tag.dim {
  color: #94a3b8;
}
.file-tag.new {
  background: #f0fdf4;
  border-color: #86efac;
  color: #166534;
  font-weight: 600;
}
.file-tag.sub {
  margin-left: 24px;
}

/* Edit Type Card */
.edit-type-card {
  background: #fff;
  border: 2px solid #e2e8f0;
  border-radius: 14px;
  padding: 24px;
  margin: 16px 0;
}
.edit-type-header {
  display: flex;
  align-items: center;
  gap: 12px;
  margin-bottom: 8px;
}
.edit-type-header h3 {
  font-size: 1.1rem;
  font-weight: 700;
  color: #1e293b;
  margin: 0;
}
.edit-type-badge {
  font-size: 0.75rem;
  font-weight: 700;
  padding: 3px 12px;
  border-radius: 20px;
  flex-shrink: 0;
}
.content-type .edit-type-badge {
  background: #dbeafe;
  color: #1d4ed8;
}
.skill-type .edit-type-badge {
  background: #fef3c7;
  color: #92400e;
}
.edit-type-desc {
  color: #64748b;
  font-size: 0.92rem;
  margin-bottom: 16px !important;
  line-height: 1.5;
}

/* Edit Prompts */
.edit-prompts {
  display: flex;
  flex-direction: column;
  gap: 14px;
  margin: 12px 0;
}
.edit-prompt-card {
  display: flex;
  align-items: center;
  gap: 16px;
  background: #f8fafc;
  border: 1px solid #e2e8f0;
  border-radius: 12px;
  padding: 18px 22px;
  transition: border-color 0.2s;
}
.edit-prompt-card:hover { border-color: #93c5fd; }
.edit-icon { font-size: 1.6rem; flex-shrink: 0; margin-top: 2px; }
.edit-info { flex: 1; }
.edit-label {
  font-weight: 700;
  color: #1e293b;
  font-size: 0.95rem;
  margin-bottom: 8px;
}

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

/* Warning Card */
.warning-card {
  display: flex;
  gap: 12px;
  align-items: center;
  background: #fffbeb;
  border: 1px solid #fcd34d;
  border-left: 4px solid #f59e0b;
  border-radius: 12px;
  padding: 18px 22px;
  color: #92400e;
  font-size: 0.95rem;
  line-height: 1.6;
  margin-top: 10px;
}
.warning-icon { font-size: 1.3rem; flex-shrink: 0; }

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
  .edit-prompt-card { flex-direction: column; gap: 10px; }
}
</style>
