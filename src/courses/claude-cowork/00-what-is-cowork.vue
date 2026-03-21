<template>
  <div class="page-content">
    <!-- Hero Section -->
    <div class="hero-section">
      <div class="hero-icon">🤝</div>
      <h1>코워크란?</h1>
      <p class="hero-desc">Claude가 내 컴퓨터에서 직접 업무를 처리해주는 에이전트 기능입니다.</p>
    </div>

    <!-- 핵심 설명 -->
    <section class="section-slide">
      <h2>코워크(Cowork) = AI 업무 에이전트</h2>
      <p><strong>Claude Cowork</strong>는 기존 채팅 답변을 넘어서, <strong>여러 단계를 스스로 계획하고 실행하는 업무 에이전트</strong>입니다.</p>
      <p>사용자가 지정한 작업 폴더 안의 파일을 직접 읽고, 새로 만들고, 수정하고, 정리할 수 있고, 그 결과를 다시 폴더 구조와 문서로 돌려줍니다.</p>

      <div class="example-banner">
        <div class="example-badge">💡 예시</div>
        <p>"다운로드 폴더 정리해서 계약서/영수증/자료별로 폴더 만들고 이름 규칙 맞춰줘"라고 하면, Cowork가 폴더 구조 설계 → 파일 내용 스캔 → 이동/이름 변경 계획 → 실행까지 알아서 처리합니다.</p>
      </div>
    </section>

    <!-- 어디에 있나 -->
    <section class="section-slide">
      <h2>📍 어디에 있나?</h2>
      <p>Cowork는 <strong>Claude Desktop 앱 안의 별도 탭</strong>으로 제공됩니다. Chat, Code와 나란히 위치해서 일반 채팅과 병행해서 쓸 수 있습니다.</p>

      <div class="image-box">
        <img src="/whatiscowork1.png" alt="Claude Desktop에서 Cowork 탭 위치" />
      </div>
    </section>

    <!-- 일반 채팅 vs 코워크 -->
    <section class="section-slide">
      <h2>💬 일반 채팅 vs 🤝 코워크</h2>
      <div class="vs-grid">
        <div class="vs-card vs-left">
          <div class="vs-header">💬 일반 Claude 채팅</div>
          <div class="vs-row"><span class="vs-icon">❌</span> 답변을 텍스트로 받음</div>
          <div class="vs-row"><span class="vs-icon">❌</span> 내가 복사해서 붙여넣기 해야 함</div>
          <div class="vs-row"><span class="vs-icon">❌</span> 한 번에 한 가지 질문/답변</div>
          <div class="vs-row"><span class="vs-icon">❌</span> 웹 브라우저에서 사용</div>
          <div class="vs-row"><span class="vs-icon">❌</span> 내 컴퓨터 파일에 접근 불가</div>
        </div>
        <div class="vs-card vs-right">
          <div class="vs-header">🤝 코워크</div>
          <div class="vs-row"><span class="vs-icon">✅</span> 결과물을 파일로 직접 만들어줌</div>
          <div class="vs-row"><span class="vs-icon">✅</span> 내 폴더에 파일이 바로 저장됨</div>
          <div class="vs-row"><span class="vs-icon">✅</span> 여러 단계를 계획하고 알아서 처리</div>
          <div class="vs-row"><span class="vs-icon">✅</span> Claude Desktop 앱에서 사용</div>
          <div class="vs-row"><span class="vs-icon">✅</span> 지정한 폴더의 파일을 직접 읽고 수정</div>
        </div>
      </div>
    </section>

    <!-- 뭘 시킬 수 있나 -->
    <section class="section-slide">
      <h2>뭘 시킬 수 있나?</h2>
      <div class="capability-grid">
        <div class="capability-card">
          <div class="capability-icon">📂</div>
          <h3>파일·폴더 정리</h3>
          <p>뒤섞인 폴더를 문서/이미지/계약서 등으로 자동 분류, 이름 규칙 통일, 중복 파일 정리.</p>
        </div>
        <div class="capability-card">
          <div class="capability-icon">📝</div>
          <h3>문서 생성·편집</h3>
          <p>여러 PDF/문서에서 내용을 읽어 보고서, 회의록, 제안서 초안을 파일로 생성.</p>
        </div>
        <div class="capability-card">
          <div class="capability-icon">📊</div>
          <h3>데이터 분석</h3>
          <p>CSV/엑셀 데이터를 읽어서 통계, 인사이트 요약, 분석 리포트 작성.</p>
        </div>
        <div class="capability-card">
          <div class="capability-icon">🔍</div>
          <h3>리서치·자료 종합</h3>
          <p>폴더 안의 자료를 읽고 핵심 정리, 타임라인, To-Do 리스트 등을 자동 생성.</p>
        </div>
      </div>
    </section>

    <!-- 협업 도구 연동 -->
    <section class="section-slide">
      <h2>🔗 협업 도구 연동</h2>
      <div class="connector-banner">
        <div class="connector-icon">⚡</div>
        <div class="connector-text">
          <p>일부 플랜에서는 <strong>Slack 같은 협업 도구와도 연동</strong>되어, 팀 업무 자동화용 "앱"을 만드는 식으로 활용할 수 있습니다. 예를 들어 Slack 채널에서 코워크를 호출해 계약서 검토나 리포트 생성을 반복 실행할 수 있습니다.</p>
        </div>
      </div>
    </section>

    <!-- 사용 조건 -->
    <section class="section-slide">
      <h2>📋 사용 조건</h2>
      <div class="requirement-grid">
        <div class="requirement-card">
          <div class="requirement-icon">💻</div>
          <div class="requirement-label">앱 설치</div>
          <div class="requirement-desc">Claude Desktop 앱 최신 버전 필요 (웹 브라우저가 아닌 앱)</div>
        </div>
        <div class="requirement-card">
          <div class="requirement-icon">💳</div>
          <div class="requirement-label">유료 구독</div>
          <div class="requirement-desc">Pro $20/월 이상</div>
        </div>
        <div class="requirement-card">
          <div class="requirement-icon">🖥️</div>
          <div class="requirement-label">운영체제</div>
          <div class="requirement-desc">macOS 또는 Windows 10/11</div>
        </div>
        <div class="requirement-card">
          <div class="requirement-icon">⚡</div>
          <div class="requirement-label">실행 조건</div>
          <div class="requirement-desc">PC가 켜져 있고 Claude Desktop이 실행 중이어야 작업 진행</div>
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
.hero-icon {
  font-size: 3rem;
  margin-bottom: 12px;
}
.hero-section h1 {
  color: #f1f5f9;
  font-size: 2rem;
  margin-bottom: 12px;
}
.hero-desc {
  color: #94a3b8 !important;
  font-size: 1.15rem;
  margin-bottom: 0 !important;
}

.section-slide {
  margin-bottom: 48px;
  padding-bottom: 48px;
  border-bottom: 1px solid #e2e8f0;
}
.section-slide:last-child {
  border-bottom: none;
  padding-bottom: 0;
}

/* Example banner */
.example-banner {
  background: linear-gradient(135deg, #eff6ff 0%, #f0f9ff 100%);
  border: 1px solid #bfdbfe;
  border-radius: 12px;
  padding: 20px 24px;
  margin-top: 20px;
}
.example-badge {
  font-weight: 700;
  font-size: 0.95rem;
  margin-bottom: 8px;
  color: #1e40af;
}
.example-banner p {
  margin: 0;
  color: #334155;
  line-height: 1.7;
}

/* VS comparison cards */
.vs-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 20px;
  margin-top: 20px;
}
.vs-card {
  border-radius: 12px;
  padding: 24px;
  border: 1px solid #e2e8f0;
}
.vs-left {
  background: #fef2f2;
  border-color: #fecaca;
}
.vs-right {
  background: #f0fdf4;
  border-color: #bbf7d0;
}
.vs-header {
  font-weight: 700;
  font-size: 1.1rem;
  margin-bottom: 16px;
  padding-bottom: 12px;
  border-bottom: 2px solid rgba(0,0,0,0.08);
}
.vs-row {
  display: flex;
  align-items: flex-start;
  gap: 8px;
  padding: 8px 0;
  font-size: 0.95rem;
  line-height: 1.5;
}
.vs-icon {
  flex-shrink: 0;
  font-size: 1rem;
}

/* Capability grid */
.capability-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 16px;
  margin-top: 20px;
}
.capability-card {
  background: #f8fafc;
  border: 1px solid #e2e8f0;
  border-radius: 12px;
  padding: 24px;
  transition: border-color 0.2s, transform 0.2s;
}
.capability-card:hover {
  border-color: #93c5fd;
  transform: translateY(-2px);
}
.capability-icon {
  font-size: 2rem;
  margin-bottom: 12px;
}
.capability-card h3 {
  margin: 0 0 8px;
  font-size: 1.05rem;
  color: #1e293b;
}
.capability-card p {
  margin: 0;
  color: #64748b;
  font-size: 0.93rem;
  line-height: 1.6;
}

/* Connector banner */
.connector-banner {
  display: flex;
  align-items: center;
  gap: 20px;
  background: linear-gradient(135deg, #faf5ff 0%, #f5f3ff 100%);
  border: 1px solid #ddd6fe;
  border-radius: 12px;
  padding: 24px;
  margin-top: 16px;
}
.connector-icon {
  font-size: 2.5rem;
  flex-shrink: 0;
}
.connector-text p {
  margin: 0;
  line-height: 1.7;
  color: #334155;
}

/* Requirement grid */
.requirement-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 16px;
  margin-top: 20px;
}
.requirement-card {
  background: #f8fafc;
  border: 1px solid #e2e8f0;
  border-radius: 12px;
  padding: 20px;
  text-align: center;
  transition: border-color 0.2s, transform 0.2s;
}
.requirement-card:hover {
  border-color: #93c5fd;
  transform: translateY(-2px);
}
.requirement-icon {
  font-size: 2rem;
  margin-bottom: 8px;
}
.requirement-label {
  font-weight: 700;
  font-size: 1rem;
  color: #1e293b;
  margin-bottom: 6px;
}
.requirement-desc {
  color: #64748b;
  font-size: 0.9rem;
  line-height: 1.5;
}

@media (max-width: 768px) {
  .hero-section {
    padding: 32px 20px 28px;
  }
  .hero-icon {
    font-size: 2.5rem;
  }
  .hero-section h1 {
    font-size: 1.5rem;
  }
  .hero-desc {
    font-size: 1rem;
  }
  .vs-grid {
    grid-template-columns: 1fr;
  }
  .capability-grid {
    grid-template-columns: 1fr;
  }
  .requirement-grid {
    grid-template-columns: 1fr;
  }
  .connector-banner {
    flex-direction: column;
    text-align: center;
  }
  .section-slide {
    margin-bottom: 32px;
    padding-bottom: 32px;
  }
}
</style>
