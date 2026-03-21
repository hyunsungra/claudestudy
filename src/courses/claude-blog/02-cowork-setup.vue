<template>
  <div class="page-content">
    <div class="hero-section">
      <div class="hero-icon">🎭</div>
      <h1>페르소나 생성하기</h1>
      <p class="hero-desc">내 글쓰기 스타일을 분석해서 페르소나 문서를 만듭니다.</p>
    </div>

    <!-- 코워크 실행 -->
    <section>
      <div class="step-header">
        <div class="step-circle">1</div>
        <h2>작업 폴더 생성</h2>
      </div>
      <p>블로그 글쓰기 자동화에 사용할 폴더를 <strong>바탕화면</strong>에 만듭니다.</p>

      <div class="manual-action">
        <div class="manual-icon">📁</div>
        <div class="manual-text">
          <strong>직접 할 일</strong>
          <p>바탕화면에 <code>블로그자동화</code> 폴더를 만드세요.</p>
        </div>
      </div>

      <div class="checkpoint mini">
        <span class="checkpoint-icon">✅</span>
        <span class="checkpoint-text-inline">작업 폴더가 만들어졌으면 다음으로</span>
      </div>
    </section>

    <!-- 코워크에 폴더 지정 -->
    <section>
      <div class="step-header">
        <div class="step-circle">2</div>
        <h2>코워크에 작업 폴더 지정</h2>
      </div>
      <p>Claude Desktop 앱을 열고 <strong>Cowork 탭</strong>으로 이동합니다. 방금 만든 폴더를 작업 폴더로 지정하세요.</p>

      <div class="image-box">
        <img src="/coworkfoldersetup.png" alt="코워크에서 작업 폴더 지정하는 방법" />
      </div>

      <div class="checkpoint mini">
        <span class="checkpoint-icon">✅</span>
        <span class="checkpoint-text-inline">코워크에 작업 폴더가 지정되었으면 다음으로</span>
      </div>
    </section>

    <!-- 샘플 글 폴더 생성 -->
    <section>
      <div class="step-header">
        <div class="step-circle">3</div>
        <h2>샘플 글 폴더 만들기</h2>
      </div>
      <p>내 글 파일을 넣을 하위 폴더를 생성합니다. 아래 프롬프트를 복사해서 코워크에 붙여넣으세요.</p>

      <div class="prompt-card">
        <div class="prompt-label">코워크에 입력</div>
        <div class="code-block good">
          <pre>현재 폴더 하위에 docsample 폴더를 생성해줘</pre>
        </div>
      </div>

      <div class="checkpoint mini">
        <span class="checkpoint-icon">✅</span>
        <span class="checkpoint-text-inline">docsample 폴더가 생성되었으면 다음으로</span>
      </div>
    </section>

    <!-- 파일 복사 -->
    <section>
      <div class="step-header">
        <div class="step-circle">4</div>
        <h2>글 파일 넣기</h2>
      </div>
      <p>Step 1에서 준비한 <strong>txt 파일 3~5개</strong>를 방금 만든 <code>docsample</code> 폴더에 복사해서 넣으세요.</p>

      <div class="manual-action">
        <div class="manual-icon">📂</div>
        <div class="manual-text">
          <strong>직접 할 일</strong>
          <p>파일 탐색기에서 txt 파일들을 <code>docsample</code> 폴더로 복사합니다.</p>
        </div>
      </div>

      <div class="folder-preview">
        <div class="folder-title">docsample/</div>
        <div class="folder-files">
          <span class="file-tag">📄 글01_AI업무활용.txt</span>
          <span class="file-tag">📄 글02_재택근무팁.txt</span>
          <span class="file-tag">📄 글03_생산성도구.txt</span>
        </div>
      </div>

      <div class="checkpoint mini">
        <span class="checkpoint-icon">✅</span>
        <span class="checkpoint-text-inline">docsample 폴더에 txt 파일이 들어있으면 다음으로</span>
      </div>
    </section>

    <!-- 페르소나 생성 -->
    <section>
      <div class="step-header">
        <div class="step-circle">5</div>
        <h2>페르소나 생성 요청</h2>
      </div>
      <p>이제 Claude에게 내 글을 분석해서 페르소나 문서를 만들어달라고 합니다. 아래 프롬프트를 복사해서 코워크에 붙여넣으세요.</p>

      <div class="prompt-card highlight">
        <div class="prompt-label">코워크에 입력 (핵심 프롬프트)</div>
        <div class="code-block good">
          <pre>docsample 폴더에 있는 모든 파일을 읽고 분석해줘.

분석 내용:
1. 글쓴이의 문체 특징 (격식체/반말체, 톤, 유머 정도)
2. 글의 구성 패턴 (도입-본문-마무리를 어떻게 쓰는지)
3. 자주 사용하는 표현, 말투, 습관적으로 쓰는 단어
4. 소제목과 문단 나누는 스타일
5. 한 글의 평균 길이와 깊이

분석이 끝나면, 이 글쓴이의 스타일을 완벽하게 재현할 수 있도록
"페르소나.md" 파일을 만들어줘.

페르소나.md에는 다음이 포함되어야 해:
- 글쓰기 스타일 요약
- 톤 앤 매너 규칙
- 문장 구성 규칙
- 꼭 지켜야 할 특징
- 피해야 할 것들</pre>
        </div>
      </div>

    </section>

    <!-- 결과 확인 -->
    <section>
      <div class="step-header">
        <div class="step-circle">6</div>
        <h2>결과 확인</h2>
      </div>
      <p>작업이 끝나면 폴더에 <code>페르소나.md</code> 파일이 생성되어 있습니다. 열어서 내 스타일이 잘 정리되었는지 확인하세요.</p>

      <div class="result-preview">
        <div class="result-header">📄 페르소나.md (예시) <span class="result-notice">실제 내용은 내 글 스타일에 따라 달라집니다</span></div>
        <div class="result-body">
          <p class="result-line"><strong># 글쓰기 페르소나</strong></p>
          <p class="result-line dimmed">## 스타일 요약</p>
          <p class="result-line dimmed">친근하면서도 전문적인 톤. 개인 경험을 도입부에 넣어 공감을 이끌고...</p>
          <p class="result-line dimmed">## 톤 앤 매너</p>
          <p class="result-line dimmed">- 해요체 사용 (~~합니다 체 아님)</p>
          <p class="result-line dimmed">- 적절한 유머와 비유 활용...</p>
        </div>
      </div>

      <div class="tip-card">
        <span class="tip-icon">💡</span>
        <div>페르소나가 마음에 안 들면 <strong>"페르소나를 좀 더 캐주얼하게 수정해줘"</strong>처럼 꼭 <strong>페르소나를</strong> 붙여서 요청하세요. 여러 번 다듬을수록 정확해집니다.</div>
      </div>
    </section>

    <!-- 최종 체크포인트 -->
    <div class="checkpoint">
      <div class="checkpoint-icon-big">🎉</div>
      <div class="checkpoint-content">
        <strong>페르소나.md 파일 생성 완료!</strong>
        <p>내 글쓰기 스타일이 문서로 정리되었습니다. 다음 단계에서 이 페르소나를 활용해서 실제로 글을 작성합니다.</p>
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
  flex-wrap: wrap;
  gap: 8px;
}
.file-tag {
  background: #fff;
  border: 1px solid #e2e8f0;
  border-radius: 8px;
  padding: 6px 12px;
  font-size: 0.85rem;
  color: #475569;
}

/* Wait Card */
.wait-card {
  display: flex;
  align-items: center;
  gap: 14px;
  background: #f0f9ff;
  border: 1px solid #bae6fd;
  border-radius: 12px;
  padding: 18px 22px;
  margin-top: 16px;
}
.wait-icon { font-size: 1.6rem; flex-shrink: 0; }
.wait-text strong { display: block; color: #0c4a6e; margin-bottom: 4px; }
.wait-text p { color: #0369a1; font-size: 0.9rem; margin: 0 !important; line-height: 1.5; }

/* Result Preview */
.result-preview {
  background: #f8fafc;
  border: 1px solid #e2e8f0;
  border-radius: 12px;
  overflow: hidden;
  margin: 16px 0;
}
.result-header {
  display: flex;
  align-items: center;
  gap: 10px;
  flex-wrap: wrap;
  background: #f1f5f9;
  border-bottom: 1px solid #e2e8f0;
  padding: 12px 20px;
  font-weight: 700;
  color: #334155;
  font-size: 0.92rem;
}
.result-notice {
  background: #fef3c7;
  color: #92400e;
  font-size: 0.75rem;
  font-weight: 600;
  padding: 3px 10px;
  border-radius: 6px;
  border: 1px solid #fcd34d;
}
.result-body {
  padding: 16px 20px;
}
.result-line {
  font-size: 0.88rem;
  color: #1e293b;
  margin-bottom: 6px !important;
  font-family: 'JetBrains Mono', 'Fira Code', monospace;
  line-height: 1.5;
}
.result-line.dimmed {
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
  padding: 16px 20px;
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
  .folder-files { flex-direction: column; }
}
</style>
