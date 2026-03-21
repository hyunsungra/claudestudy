<template>
  <div class="page-content">
    <!-- Hero Section -->
    <div class="hero-section">
      <div class="hero-icon">⚙️</div>
      <h1>글쓰기 스킬과 참고 자료 세팅</h1>
      <p class="hero-desc">Claude Code에서 글쓰기 스킬을 만들고 참고 자료를 세팅하는 방법입니다.</p>
    </div>

    <!-- 1단계 -->
    <section class="section-slide">
      <div class="step-header">
        <div class="step-circle">1</div>
        <h2 class="section-title">프로젝트 폴더 준비</h2>
      </div>
      <p class="section-desc">블로그 작업용 폴더를 하나 만들고, 내가 쓴 글들을 넣어둡니다.</p>

      <div class="folder-card">
        <div class="folder-title">📁 폴더 구조</div>
        <div class="folder-tree">
          <div class="tree-item root">my-blog/</div>
          <div class="tree-item folder">📁 references/ <span class="tree-note">참고 자료 (내가 쓴 글들)</span></div>
          <div class="tree-item file">📄 글01_AI업무활용.md</div>
          <div class="tree-item file">📄 글02_재택근무팁.md</div>
          <div class="tree-item file">📄 글03_생산성도구.md</div>
          <div class="tree-item file">📄 ...</div>
          <div class="tree-item folder">📁 output/ <span class="tree-note">완성된 글이 저장될 폴더</span></div>
          <div class="tree-item folder">📁 .claude/skills/ <span class="tree-note">글쓰기 스킬이 들어갈 곳</span></div>
        </div>
      </div>
    </section>

    <!-- 2단계 -->
    <section class="section-slide">
      <div class="step-header">
        <div class="step-circle">2</div>
        <h2 class="section-title">Claude Code 실행 후 스킬 생성 요청</h2>
      </div>

      <div class="action-flow">
        <div class="flow-item">
          <div class="flow-label">터미널에서 실행</div>
          <div class="code-block good">
            <pre>cd my-blog
claude</pre>
          </div>
        </div>
        <div class="flow-arrow">↓</div>
        <div class="flow-item">
          <div class="flow-label">Claude에게 요청</div>
          <div class="code-block good">
            <pre>references 폴더에 있는 내 블로그 글들을 전부 읽고,
내 글쓰기 패턴을 분석해줘.

분석할 것:
- 글 구성 패턴 (도입-본문-마무리)
- 문체, 톤, 자주 쓰는 표현
- 소제목 사용 방식
- 한 글의 평균 길이

분석 결과를 바탕으로 블로그 글쓰기 커스텀 스킬을 만들어줘.
스킬 이름은 "blog-write"로.</pre>
          </div>
        </div>
      </div>

      <div class="result-card">
        <span class="result-icon">✅</span>
        <span>Claude가 <code>.claude/skills/blog-write/SKILL.md</code>를 자동으로 만들어줍니다.</span>
      </div>
    </section>

    <!-- 3단계 -->
    <section class="section-slide">
      <div class="step-header">
        <div class="step-circle">3</div>
        <h2 class="section-title">스킬 지침 확인 및 수정</h2>
      </div>
      <p class="section-desc">만들어진 스킬 파일을 확인하고, 빠진 규칙을 추가합니다.</p>

      <div class="prompt-cards">
        <div class="prompt-card">
          <div class="prompt-badge check">확인</div>
          <div class="code-block">
            <pre>blog-write 스킬 내용 보여줘</pre>
          </div>
        </div>
        <div class="prompt-card">
          <div class="prompt-badge edit">수정</div>
          <div class="code-block good">
            <pre>blog-write 스킬에 이 규칙들을 추가해줘:

- 도입부에 항상 개인 경험이나 에피소드를 넣을 것
- 소제목은 5개 이내로 제한
- 마지막에 "핵심 정리" 섹션 항상 포함
- references 폴더의 글들을 참고해서 문체를 맞출 것</pre>
          </div>
        </div>
      </div>
    </section>

    <!-- 완성된 구조 -->
    <section class="section-slide">
      <h2 class="section-title">만들어진 스킬 구조</h2>

      <div class="final-structure">
        <div class="struct-card">
          <div class="struct-icon">📁</div>
          <div class="struct-label">references/</div>
          <div class="struct-desc">내 글 참고 자료</div>
        </div>
        <div class="struct-card">
          <div class="struct-icon">📂</div>
          <div class="struct-label">output/</div>
          <div class="struct-desc">완성된 글 저장</div>
        </div>
        <div class="struct-card highlight">
          <div class="struct-icon">🛠️</div>
          <div class="struct-label">blog-write/SKILL.md</div>
          <div class="struct-desc">/blog-write 로 실행 가능</div>
        </div>
      </div>

      <div class="result-card">
        <span class="result-icon">🎉</span>
        <span>이제 <code>/blog-write</code> 명령어로 글쓰기 스킬을 실행할 수 있습니다.</span>
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
.section-title { font-size: 1.5rem; font-weight: 700; color: #1e293b; margin: 0; }
.section-desc { color: #475569; font-size: 1.05rem; line-height: 1.7; margin-bottom: 20px; }

.step-header { display: flex; align-items: center; gap: 14px; margin-bottom: 16px; }
.step-circle {
  flex-shrink: 0;
  width: 40px; height: 40px;
  background: linear-gradient(135deg, #3b82f6, #2563eb);
  color: #fff; border-radius: 50%;
  display: flex; align-items: center; justify-content: center;
  font-size: 1.1rem; font-weight: 700;
}

/* Folder Card */
.folder-card {
  background: #f8fafc;
  border: 1px solid #e2e8f0;
  border-radius: 12px;
  padding: 20px 24px;
  margin-bottom: 16px;
}
.folder-title { font-weight: 700; color: #1e293b; margin-bottom: 12px; font-size: 1rem; }
.folder-tree { padding-left: 4px; }
.tree-item { padding: 3px 0; font-size: 0.93rem; color: #475569; }
.tree-item.root { font-weight: 700; color: #1e293b; margin-bottom: 4px; }
.tree-item.folder { font-weight: 600; color: #334155; padding-left: 16px; margin-top: 6px; }
.tree-item.file { padding-left: 36px; }
.tree-note { color: #94a3b8; font-size: 0.85rem; font-weight: 400; }

/* Action Flow */
.action-flow { display: flex; flex-direction: column; gap: 4px; margin-bottom: 20px; }
.flow-label { font-weight: 700; color: #1e293b; margin-bottom: 8px; font-size: 0.95rem; }
.flow-arrow { text-align: center; font-size: 1.3rem; color: #94a3b8; }

/* Result Card */
.result-card {
  display: flex;
  align-items: center;
  gap: 12px;
  background: #f0fdf4;
  border: 1px solid #bbf7d0;
  border-radius: 12px;
  padding: 16px 20px;
  font-size: 0.98rem;
  color: #166534;
  margin-top: 16px;
}
.result-icon { font-size: 1.3rem; flex-shrink: 0; }
.result-card code {
  background: #dcfce7;
  padding: 2px 6px;
  border-radius: 4px;
  font-size: 0.9rem;
  color: #166534;
}

/* Prompt Cards */
.prompt-cards { display: flex; flex-direction: column; gap: 16px; }
.prompt-card {
  background: #f8fafc;
  border: 1px solid #e2e8f0;
  border-radius: 12px;
  padding: 20px 24px;
}
.prompt-badge {
  display: inline-block;
  padding: 3px 12px;
  border-radius: 16px;
  font-weight: 700;
  font-size: 0.85rem;
  margin-bottom: 12px;
}
.prompt-badge.check { background: #e0e7ff; color: #3730a3; }
.prompt-badge.edit { background: #fef3c7; color: #92400e; }

/* Final Structure */
.final-structure {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 16px;
  margin-bottom: 8px;
}
.struct-card {
  background: #f8fafc;
  border: 1px solid #e2e8f0;
  border-radius: 12px;
  padding: 22px 16px;
  text-align: center;
  transition: border-color 0.2s, transform 0.2s;
}
.struct-card:hover { border-color: #93c5fd; transform: translateY(-2px); }
.struct-card.highlight {
  background: linear-gradient(135deg, #eff6ff, #dbeafe);
  border-color: #93c5fd;
}
.struct-icon { font-size: 1.8rem; margin-bottom: 8px; }
.struct-label { font-weight: 700; color: #1e293b; font-size: 0.92rem; margin-bottom: 4px; }
.struct-desc { color: #64748b; font-size: 0.85rem; }

@media (max-width: 768px) {
  .hero-section { padding: 32px 18px 28px; }
  .hero-section h1 { font-size: 1.4rem; }
  .final-structure { grid-template-columns: 1fr; }
  .step-header { gap: 10px; }
  .step-circle { width: 34px; height: 34px; font-size: 0.95rem; }
}
</style>
