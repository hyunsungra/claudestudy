<template>
  <div class="page-content">
    <div class="hero-section">
      <div class="hero-icon">🔍</div>
      <h1>작성한 내용 자동 검증하기</h1>
      <p class="hero-desc">글에 포함된 정보가 사실인지 웹 검색으로 자동 확인하고, 잘못된 부분을 수정합니다.</p>
    </div>

    <!-- 검증 스킬 만들기 -->
    <section>
      <div class="step-header">
        <div class="step-circle">1</div>
        <h2>검증 스킬 만들기</h2>
      </div>
      <p>글의 사실 관계를 자동으로 확인하는 스킬을 만듭니다. 아래 프롬프트를 복사해서 코워크에 붙여넣으세요.</p>

      <div class="prompt-card highlight">
        <div class="prompt-label">코워크에 입력 (핵심 프롬프트)</div>
        <div class="code-block good">
          <pre>현재 폴더에 fact-checker라는 이름의 스킬을 만들어줘.

스킬 이름: fact-checker
스킬 설명: 작성된 글의 사실 관계를 웹 검색으로 검증하고 잘못된 부분을 수정하는 스킬

스킬이 실행되면 다음 순서로 동작해야 해:

1. 요청된 파일의 내용을 읽는다
2. 내용을 분석해서 검증이 필요한 내용을 웹 검색으로 사실 여부를 확인한다
3. 검증 결과를 다음 형식으로 보여준다:
   - ✅ 사실 확인됨: 해당 내용 + 출처
   - ⚠️ 부정확함: 해당 내용 + 올바른 정보 + 출처
   - ❓ 확인 불가: 해당 내용 + 사유
4. 부정확한 항목이 있으면 올바른 정보로 글을 직접 수정한다
5. 수정된 글을 같은 파일에 덮어쓴다
6. 최종 검증 리포트를 원본 파일이 있는 주제명 폴더 안에 "원본파일명_검증결과.md" 파일로 저장한다
   - 예: AI_업무_활용_5가지_방법/AI_업무_활용_5가지_방법_검증결과.md</pre>
        </div>
      </div>

      <div class="checkpoint mini">
        <span class="checkpoint-icon">✅</span>
        <span class="checkpoint-text-inline">.claude/skills/fact-checker/SKILL.md 파일이 생성되었으면 다음으로</span>
      </div>
    </section>

    <!-- 검증 실행 -->
    <section>
      <div class="step-header">
        <div class="step-circle">2</div>
        <h2>검증 실행하기</h2>
      </div>
      <p>글 작성이 완료된 후 검증 스킬을 실행합니다. 상황에 맞는 프롬프트를 복사해서 사용하세요.</p>

      <div class="prompt-card">
        <div class="prompt-label">가장 최근 글 검증</div>
        <div class="code-block good">
          <pre>방금 작성한 글을 검증해줘</pre>
        </div>
      </div>

      <div class="prompt-card">
        <div class="prompt-label">특정 파일 검증</div>
        <div class="code-block good">
          <pre>AI_업무_활용_5가지_방법 내용을 검증해줘</pre>
        </div>
      </div>

      <div class="prompt-card">
        <div class="prompt-label">여러 파일 한꺼번에 검증</div>
        <div class="code-block good">
          <pre>오늘 작성한 글 파일 전부 검증해줘</pre>
        </div>
      </div>
    </section>

    <!-- 검증 결과 예시 -->
    <section>
      <div class="step-header">
        <div class="step-circle">3</div>
        <h2>검증 결과 예시</h2>
      </div>
      <p>검증이 완료되면 이런 형태의 리포트가 나옵니다.</p>

      <div class="report-preview">
        <div class="report-header">
          <span class="report-file">📄 검증 리포트</span>
          <span class="report-notice">실제 결과는 글 내용에 따라 달라집니다</span>
        </div>
        <div class="report-body">
          <div class="report-row ok">
            <span class="report-icon">✅</span>
            <div class="report-content">
              <div class="report-label">사실 확인됨</div>
              <div class="report-text">"ChatGPT는 2022년 11월에 출시되었다"</div>
              <div class="report-source">출처: OpenAI 공식 블로그</div>
            </div>
          </div>
          <div class="report-row wrong">
            <span class="report-icon">⚠️</span>
            <div class="report-content">
              <div class="report-label">부정확함 → 수정 완료</div>
              <div class="report-text">"Claude 3.5 Sonnet은 2024년 3월에 출시" → <strong>2024년 6월이 맞음</strong></div>
              <div class="report-source">출처: Anthropic 공식 발표</div>
            </div>
          </div>
          <div class="report-row unknown">
            <span class="report-icon">❓</span>
            <div class="report-content">
              <div class="report-label">확인 불가</div>
              <div class="report-text">"직장인 73%가 AI를 업무에 활용하고 있다"</div>
              <div class="report-source">사유: 출처 불명, 해당 통계를 찾을 수 없음</div>
            </div>
          </div>
        </div>
      </div>

      <div class="warning-card">
        <span class="warning-icon">⚠️</span>
        <div><strong>⚠️ 부정확</strong>과 <strong>❓ 확인 불가</strong> 항목은 자동으로 수정되거나 삭제됩니다. 수정된 파일을 꼭 한 번 확인하세요.</div>
      </div>
    </section>

    <!-- 글쓰기 스킬에 연결 -->
    <section>
      <div class="step-header">
        <div class="step-circle">4</div>
        <h2>글쓰기 스킬에 검증 연결하기</h2>
      </div>
      <p>글 작성 후 매번 따로 검증하기 번거롭다면, blog-writer 스킬에 자동 검증을 포함시킬 수 있습니다.</p>

      <div class="prompt-card highlight">
        <div class="prompt-label">코워크에 입력 (스킬 수정 프롬프트)</div>
        <div class="code-block good">
          <pre>blog-writer 스킬을 수정해줘.

변경사항:
글 작성이 완료되면 자동으로 fact-checker 스킬을 실행해서
사실 관계를 검증하고 잘못된 부분을 수정한 뒤 저장할 것</pre>
        </div>
      </div>

      <div class="tip-card">
        <span class="tip-icon">💡</span>
        <div>이렇게 연결하면 <strong>글 작성 → 사실 검증 → 수정 → 저장</strong>이 한 번에 자동으로 진행됩니다.</div>
      </div>
    </section>

    <!-- 최종 체크포인트 -->
    <div class="checkpoint">
      <div class="checkpoint-icon-big">🎉</div>
      <div class="checkpoint-content">
        <strong>자동 검증 시스템 완성!</strong>
        <p>이제 작성된 글의 사실 관계가 자동으로 검증됩니다. 잘못된 정보가 포함된 글이 게시되는 걸 방지할 수 있습니다.</p>
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

/* Report Preview */
.report-preview {
  background: #f8fafc;
  border: 1px solid #e2e8f0;
  border-radius: 12px;
  overflow: hidden;
  margin: 16px 0;
}
.report-header {
  display: flex;
  align-items: center;
  gap: 10px;
  flex-wrap: wrap;
  padding: 14px 20px;
  background: #f1f5f9;
  border-bottom: 1px solid #e2e8f0;
}
.report-file { font-weight: 700; color: #1e293b; font-size: 0.95rem; }
.report-notice {
  background: #fef3c7;
  color: #92400e;
  font-size: 0.75rem;
  font-weight: 600;
  padding: 3px 10px;
  border-radius: 6px;
  border: 1px solid #fcd34d;
}
.report-body { padding: 16px 20px; }
.report-row {
  display: flex;
  align-items: flex-start;
  gap: 14px;
  padding: 14px 16px;
  border-radius: 10px;
  margin-bottom: 10px;
}
.report-row:last-child { margin-bottom: 0; }
.report-row.ok { background: #f0fdf4; border: 1px solid #bbf7d0; }
.report-row.wrong { background: #fffbeb; border: 1px solid #fde68a; }
.report-row.unknown { background: #f1f5f9; border: 1px solid #e2e8f0; }
.report-icon { font-size: 1.3rem; flex-shrink: 0; margin-top: 2px; }
.report-content { flex: 1; }
.report-label {
  font-weight: 700;
  font-size: 0.85rem;
  margin-bottom: 4px;
}
.report-row.ok .report-label { color: #166534; }
.report-row.wrong .report-label { color: #92400e; }
.report-row.unknown .report-label { color: #475569; }
.report-text {
  font-size: 0.9rem;
  color: #334155;
  line-height: 1.5;
  margin-bottom: 4px;
}
.report-source {
  font-size: 0.8rem;
  color: #94a3b8;
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
  margin-top: 16px;
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
  .report-row { flex-direction: column; gap: 8px; }
}
</style>
