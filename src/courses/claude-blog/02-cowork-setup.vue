<template>
  <div class="page-content">
    <!-- Hero Section -->
    <div class="hero-section">
      <div class="hero-icon">📂</div>
      <h1>참고 문서 추가와 스킬 생성</h1>
      <p class="hero-desc">코워크에 내 글을 넣어주고, 글쓰기 스킬을 만드는 과정입니다.</p>
    </div>

    <!-- 1단계 -->
    <section class="section-slide">
      <div class="step-header">
        <div class="step-circle">1</div>
        <h2 class="section-title">작성했던 글 파일 준비</h2>
      </div>
      <p class="section-desc">내가 이전에 쓴 블로그 글을 파일로 준비합니다. 형식은 상관없습니다.</p>

      <div class="folder-card">
        <div class="folder-title">📁 폴더 구조 예시</div>
        <div class="folder-tree">
          <div class="tree-item root">블로그자료/</div>
          <div class="tree-item file">📄 글01_AI업무활용.md</div>
          <div class="tree-item file">📄 글02_재택근무팁.md</div>
          <div class="tree-item file">📄 글03_생산성도구.md</div>
          <div class="tree-item file">📄 글04_커리어전환.md</div>
          <div class="tree-item file last">📄 글05_사이드프로젝트.md</div>
        </div>
      </div>

      <div class="tip-card">
        <span class="tip-icon">💡</span>
        <div>
          <strong>팁:</strong> 글이 많을수록 Claude가 내 스타일을 더 정확하게 파악합니다. 최소 3개, 가능하면 5개 이상 넣어주세요.
        </div>
      </div>
    </section>

    <!-- 2단계 -->
    <section class="section-slide">
      <div class="step-header">
        <div class="step-circle">2</div>
        <h2 class="section-title">코워크에서 작업 폴더 지정</h2>
      </div>
      <div class="action-cards">
        <div class="action-card">
          <div class="action-num">A</div>
          <div class="action-text">Claude Desktop을 열고 <strong>Cowork 탭</strong>으로 이동</div>
        </div>
        <div class="action-card">
          <div class="action-num">B</div>
          <div class="action-text">새 작업 공간을 만들고, 위 글 파일이 있는 <strong>폴더를 작업 폴더로 지정</strong></div>
        </div>
      </div>
    </section>

    <!-- 3단계 -->
    <section class="section-slide">
      <div class="step-header">
        <div class="step-circle">3</div>
        <h2 class="section-title">글쓰기 스킬 생성 요청</h2>
      </div>
      <p class="section-desc">Claude에게 내 글을 분석하고 글쓰기 스킬을 만들어달라고 합니다.</p>

      <div class="prompt-card">
        <div class="prompt-label">💬 코워크에 이렇게 말하세요</div>
        <div class="code-block good">
          <pre>이 폴더에 있는 블로그 글 파일들을 전부 읽고,
내 글쓰기 패턴을 분석해줘.

분석할 것:
- 글의 구성 (도입-본문-마무리 패턴)
- 문체와 톤 (격식체/반말, 유머 정도 등)
- 자주 쓰는 표현이나 말투
- 한 글의 평균 길이
- 소제목 사용 패턴

분석 결과를 바탕으로,
앞으로 내 스타일대로 블로그 글을 작성해주는
글쓰기 스킬을 만들어줘.</pre>
        </div>
      </div>

      <div class="analysis-cards">
        <div class="analysis-title">Claude가 분석하는 것들</div>
        <div class="analysis-grid">
          <div class="analysis-item"><span class="a-icon">📋</span><span>글 구성 패턴</span></div>
          <div class="analysis-item"><span class="a-icon">🗣️</span><span>문체와 톤</span></div>
          <div class="analysis-item"><span class="a-icon">✍️</span><span>자주 쓰는 표현</span></div>
          <div class="analysis-item"><span class="a-icon">📏</span><span>평균 글 길이</span></div>
          <div class="analysis-item"><span class="a-icon">🏷️</span><span>소제목 패턴</span></div>
        </div>
      </div>

      <p class="section-desc">Claude가 글을 전부 읽고 패턴을 파악한 뒤, 글쓰기 규칙이 담긴 스킬을 만들어줍니다.</p>
    </section>

    <!-- 스킬 확인 -->
    <section class="section-slide">
      <h2 class="section-title">만들어진 스킬 확인</h2>
      <p class="section-desc">스킬이 잘 만들어졌는지 확인하고, 필요하면 수정을 요청하세요.</p>

      <div class="prompt-card">
        <div class="prompt-label">🔧 수정 요청 예시</div>
        <div class="code-block">
          <pre>글 도입부에 항상 개인 경험을 넣는 패턴이 빠졌어.
그것도 규칙에 추가해줘.</pre>
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
.section-title { font-size: 1.5rem; font-weight: 700; color: #1e293b; margin: 0; }
.section-desc { color: #475569; font-size: 1.05rem; line-height: 1.7; margin-bottom: 20px; }

/* Step Header */
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
.folder-tree { padding-left: 8px; }
.tree-item { padding: 4px 0; font-family: 'Pretendard', monospace; font-size: 0.93rem; color: #475569; }
.tree-item.root { font-weight: 700; color: #1e293b; margin-bottom: 4px; }
.tree-item.file { padding-left: 20px; }

/* Tip Card */
.tip-card {
  display: flex;
  gap: 12px;
  align-items: flex-start;
  background: #eff6ff;
  border: 1px solid #bfdbfe;
  border-radius: 12px;
  padding: 16px 20px;
  color: #1e40af;
  font-size: 0.95rem;
  line-height: 1.6;
}
.tip-icon { font-size: 1.3rem; flex-shrink: 0; }

/* Action Cards */
.action-cards { display: flex; flex-direction: column; gap: 12px; }
.action-card {
  display: flex; align-items: center; gap: 16px;
  background: #f8fafc;
  border: 1px solid #e2e8f0;
  border-radius: 12px;
  padding: 18px 22px;
  transition: border-color 0.2s, transform 0.2s;
}
.action-card:hover { border-color: #93c5fd; transform: translateY(-2px); }
.action-num {
  flex-shrink: 0;
  width: 36px; height: 36px;
  background: #e0e7ff; color: #3730a3;
  border-radius: 50%;
  display: flex; align-items: center; justify-content: center;
  font-weight: 700; font-size: 0.95rem;
}
.action-text { color: #334155; font-size: 0.98rem; }

/* Prompt Card */
.prompt-card {
  background: #f8fafc;
  border: 1px solid #e2e8f0;
  border-radius: 12px;
  padding: 20px 24px;
  margin-bottom: 20px;
}
.prompt-label { font-weight: 700; color: #1e293b; margin-bottom: 12px; font-size: 1rem; }

/* Analysis Cards */
.analysis-cards {
  background: #f8fafc;
  border: 1px solid #e2e8f0;
  border-radius: 12px;
  padding: 24px;
  margin-bottom: 20px;
}
.analysis-title { font-weight: 700; color: #1e293b; margin-bottom: 16px; text-align: center; }
.analysis-grid {
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: 12px;
}
.analysis-item {
  display: flex; flex-direction: column; align-items: center; gap: 6px;
  background: #fff;
  border: 1px solid #e2e8f0;
  border-radius: 10px;
  padding: 14px 8px;
  font-size: 0.88rem;
  font-weight: 600;
  color: #334155;
  text-align: center;
  transition: border-color 0.2s, transform 0.2s;
}
.analysis-item:hover { border-color: #93c5fd; transform: translateY(-2px); }
.a-icon { font-size: 1.4rem; }

@media (max-width: 768px) {
  .hero-section { padding: 32px 18px 28px; }
  .hero-section h1 { font-size: 1.4rem; }
  .analysis-grid { grid-template-columns: repeat(2, 1fr); }
  .step-header { gap: 10px; }
  .step-circle { width: 34px; height: 34px; font-size: 0.95rem; }
  .action-card { padding: 14px 16px; }
}
</style>
