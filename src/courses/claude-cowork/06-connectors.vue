<template>
  <div class="page-content">
    <!-- Hero Section -->
    <div class="hero-section">
      <div class="hero-icon">🔌</div>
      <h1>커넥터 (Connectors)</h1>
      <p class="hero-desc">외부 서비스를 Cowork에 연결해서 업무 범위를 확장하는 기능입니다.</p>
    </div>

    <!-- 커넥터란 -->
    <section class="section-slide">
      <h2>커넥터란?</h2>
      <p><strong>커넥터</strong>는 Cowork가 외부 서비스(Google Drive, Slack, Gmail 등)에 접속해서 데이터를 가져오거나, 작업을 수행할 수 있게 해주는 <strong>연결 장치</strong>입니다.</p>

      <div class="analogy-banner">
        <div class="analogy-icon">💡</div>
        <div class="analogy-text">
          <p><strong>비유:</strong> Cowork가 내 컴퓨터 파일만 다룰 수 있던 것에서, 커넥터를 꽂으면 Google Drive, 이메일, Slack까지 손이 닿게 되는 겁니다.</p>
        </div>
      </div>

      <div class="count-badge">현재 <strong>50개 이상</strong>의 커넥터가 제공되고 있으며 계속 추가되고 있습니다.</div>
    </section>

    <!-- 주요 커넥터 - 업무 도구 -->
    <section class="section-slide">
      <h2>🛠️ 주요 커넥터 — 업무 도구</h2>
      <div class="connector-grid">
        <div class="connector-card">
          <div class="connector-icon">📁</div>
          <div class="connector-name">Google Drive</div>
          <div class="connector-desc">드라이브 파일 읽기, 새 문서 생성, 정리</div>
        </div>
        <div class="connector-card">
          <div class="connector-icon">📧</div>
          <div class="connector-name">Gmail</div>
          <div class="connector-desc">이메일 검색, 내용 분석, 답장 초안 작성</div>
        </div>
        <div class="connector-card">
          <div class="connector-icon">📅</div>
          <div class="connector-name">Google Calendar</div>
          <div class="connector-desc">일정 확인, 회의 정보 가져오기</div>
        </div>
        <div class="connector-card">
          <div class="connector-icon">💬</div>
          <div class="connector-name">Slack</div>
          <div class="connector-desc">채널 메시지 조회, 정리, 팀 업무 자동화</div>
        </div>
        <div class="connector-card">
          <div class="connector-icon">📓</div>
          <div class="connector-name">Notion</div>
          <div class="connector-desc">페이지 읽기, 정리, 새 문서 작성</div>
        </div>
        <div class="connector-card">
          <div class="connector-icon">🏢</div>
          <div class="connector-name">Microsoft 365</div>
          <div class="connector-desc">Word, Excel, PowerPoint 파일 작업</div>
        </div>
        <div class="connector-card">
          <div class="connector-icon">🐙</div>
          <div class="connector-name">GitHub</div>
          <div class="connector-desc">이슈, PR 관리, 코드 조회</div>
        </div>
      </div>
    </section>

    <!-- 주요 커넥터 - 전문 분야 -->
    <section class="section-slide">
      <h2>🎯 주요 커넥터 — 전문 분야</h2>
      <div class="connector-grid">
        <div class="connector-card">
          <div class="connector-icon">✍️</div>
          <div class="connector-name">DocuSign</div>
          <div class="connector-desc">계약서 전자 서명</div>
        </div>
        <div class="connector-card">
          <div class="connector-icon">💰</div>
          <div class="connector-name">FactSet / S&amp;P Global</div>
          <div class="connector-desc">금융 데이터 분석</div>
        </div>
        <div class="connector-card">
          <div class="connector-icon">🌐</div>
          <div class="connector-name">WordPress</div>
          <div class="connector-desc">블로그/웹사이트 콘텐츠 관리</div>
        </div>
        <div class="connector-card">
          <div class="connector-icon">📣</div>
          <div class="connector-name">Apollo / Clay / Outreach</div>
          <div class="connector-desc">영업·마케팅 자동화</div>
        </div>
        <div class="connector-card">
          <div class="connector-icon">📊</div>
          <div class="connector-name">SimilarWeb</div>
          <div class="connector-desc">시장 조사, 경쟁사 분석</div>
        </div>
      </div>
    </section>

    <!-- 설정 방법 -->
    <section class="section-slide">
      <h2>⚙️ 커넥터 설정 방법</h2>
      <div class="setup-steps">
        <div class="setup-step">
          <div class="setup-number">1</div>
          <div class="setup-text">Claude Desktop에서 <strong>Settings → Connectors</strong>로 이동합니다</div>
        </div>
        <div class="setup-connector"></div>
        <div class="setup-step">
          <div class="setup-number">2</div>
          <div class="setup-text">커넥터 목록에서 원하는 서비스를 찾습니다</div>
        </div>
        <div class="setup-connector"></div>
        <div class="setup-step">
          <div class="setup-number">3</div>
          <div class="setup-text"><strong>"Add"</strong> 버튼을 눌러 추가합니다</div>
        </div>
        <div class="setup-connector"></div>
        <div class="setup-step">
          <div class="setup-number">4</div>
          <div class="setup-text">해당 서비스 계정으로 <strong>로그인/인증</strong>합니다</div>
        </div>
      </div>
    </section>

    <!-- 권한 설정 -->
    <section class="section-slide">
      <h2>🔐 권한을 세밀하게 조절 가능</h2>
      <p>커넥터를 연결해도 모든 걸 자동으로 하게 두는 건 아닙니다. <strong>각 동작별로 권한을 설정</strong>할 수 있습니다.</p>

      <div class="permission-grid">
        <div class="permission-card allow">
          <div class="permission-header">✅ Allow</div>
          <div class="permission-meaning">자동 실행 (물어보지 않음)</div>
          <div class="permission-example">예: 이메일 검색은 자유롭게</div>
        </div>
        <div class="permission-card ask">
          <div class="permission-header">❓ Ask</div>
          <div class="permission-meaning">실행 전 확인 요청</div>
          <div class="permission-example">예: 파일 수정 전에는 물어보기</div>
        </div>
        <div class="permission-card block">
          <div class="permission-header">🚫 Block</div>
          <div class="permission-meaning">절대 실행 안 됨</div>
          <div class="permission-example">예: 이메일 전송은 차단</div>
        </div>
      </div>

      <div class="permission-example-box">
        <div class="pex-icon">💡</div>
        <p><strong>예시:</strong> Gmail 커넥터를 연결하되, "이메일 검색은 Allow, 이메일 전송은 Block"으로 설정하면 Claude가 이메일을 읽을 수는 있지만 보내지는 못합니다.</p>
      </div>
    </section>

    <!-- 활용 예시 -->
    <section class="section-slide">
      <h2>✨ 활용 예시</h2>

      <div class="prompt-card">
        <div class="prompt-header">
          <span class="prompt-badge">📁 Google Drive + 보고서 작성</span>
        </div>
        <div class="code-block good">
          <pre>Google Drive "프로젝트" 폴더에 있는 회의록 3개를 읽고,
전체 결정사항을 정리한 문서를 Drive에 새로 만들어줘.</pre>
        </div>
        <div class="prompt-result">
          <span class="result-arrow">→</span>
          <span>Drive 회의록 3개 분석 + 결정사항 정리 문서 자동 생성</span>
        </div>
      </div>

      <div class="prompt-card">
        <div class="prompt-header">
          <span class="prompt-badge">📧 Gmail + 업무 정리</span>
        </div>
        <div class="code-block good">
          <pre>이번 주 받은 이메일 중에서 거래처에서 온 것만 골라서
발신자, 제목, 핵심 내용을 표로 정리해줘.</pre>
        </div>
        <div class="prompt-result">
          <span class="result-arrow">→</span>
          <span>거래처 이메일 자동 필터링 + 핵심 내용 표 정리</span>
        </div>
      </div>

      <div class="prompt-card">
        <div class="prompt-header">
          <span class="prompt-badge">💬 Slack + 팀 자동화</span>
        </div>
        <div class="code-block good">
          <pre>Slack #마케팅 채널의 이번 주 대화 내용을 요약하고,
결정된 사항과 할 일 목록을 정리해줘.</pre>
        </div>
        <div class="prompt-result">
          <span class="result-arrow">→</span>
          <span>Slack 채널 대화 요약 + 결정사항/할 일 목록 자동 생성</span>
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

/* Analogy banner */
.analogy-banner {
  display: flex;
  align-items: center;
  gap: 16px;
  background: linear-gradient(135deg, #eff6ff 0%, #f0f9ff 100%);
  border: 1px solid #bfdbfe;
  border-radius: 12px;
  padding: 20px 24px;
  margin-top: 16px;
}
.analogy-icon {
  font-size: 2rem;
  flex-shrink: 0;
}
.analogy-text p {
  margin: 0;
  line-height: 1.7;
  color: #334155;
}

.count-badge {
  margin-top: 16px;
  padding: 12px 20px;
  background: #f8fafc;
  border: 1px solid #e2e8f0;
  border-radius: 10px;
  font-size: 0.95rem;
  color: #475569;
  text-align: center;
}

/* Connector grid */
.connector-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 14px;
  margin-top: 20px;
}
.connector-card {
  background: #f8fafc;
  border: 1px solid #e2e8f0;
  border-radius: 12px;
  padding: 20px;
  text-align: center;
  transition: border-color 0.2s, transform 0.2s;
}
.connector-card:hover {
  border-color: #93c5fd;
  transform: translateY(-2px);
}
.connector-icon {
  font-size: 2rem;
  margin-bottom: 8px;
}
.connector-name {
  font-weight: 700;
  font-size: 0.95rem;
  color: #1e293b;
  margin-bottom: 6px;
}
.connector-desc {
  color: #64748b;
  font-size: 0.85rem;
  line-height: 1.5;
}

/* Setup steps */
.setup-steps {
  margin-top: 20px;
}
.setup-step {
  display: flex;
  gap: 16px;
  align-items: center;
}
.setup-number {
  width: 40px;
  height: 40px;
  background: linear-gradient(135deg, #3b82f6, #2563eb);
  color: white;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.1rem;
  font-weight: 700;
  flex-shrink: 0;
}
.setup-text {
  font-size: 0.95rem;
  line-height: 1.6;
}
.setup-connector {
  width: 2px;
  height: 16px;
  background: #cbd5e1;
  margin-left: 19px;
}

/* Permission grid */
.permission-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 14px;
  margin-top: 20px;
}
.permission-card {
  border-radius: 12px;
  padding: 20px;
  text-align: center;
  transition: transform 0.2s;
}
.permission-card:hover {
  transform: translateY(-2px);
}
.permission-card.allow {
  background: #f0fdf4;
  border: 1px solid #bbf7d0;
}
.permission-card.ask {
  background: #fefce8;
  border: 1px solid #fde68a;
}
.permission-card.block {
  background: #fef2f2;
  border: 1px solid #fecaca;
}
.permission-header {
  font-weight: 700;
  font-size: 1.1rem;
  margin-bottom: 8px;
}
.permission-meaning {
  font-size: 0.9rem;
  color: #475569;
  margin-bottom: 8px;
  font-weight: 500;
}
.permission-example {
  font-size: 0.85rem;
  color: #64748b;
  font-style: italic;
}

.permission-example-box {
  display: flex;
  align-items: flex-start;
  gap: 12px;
  margin-top: 16px;
  padding: 16px 20px;
  background: #f0f9ff;
  border: 1px solid #bfdbfe;
  border-radius: 10px;
}
.pex-icon {
  font-size: 1.3rem;
  flex-shrink: 0;
}
.permission-example-box p {
  margin: 0;
  line-height: 1.7;
  font-size: 0.93rem;
  color: #334155;
}

/* Prompt cards */
.prompt-card {
  background: #f8fafc;
  border: 1px solid #e2e8f0;
  border-radius: 12px;
  padding: 24px;
  margin-top: 20px;
  transition: border-color 0.2s;
}
.prompt-card:hover {
  border-color: #93c5fd;
}
.prompt-header {
  margin-bottom: 16px;
}
.prompt-badge {
  font-weight: 700;
  font-size: 1.05rem;
  color: #1e293b;
}
.prompt-result {
  display: flex;
  align-items: center;
  gap: 10px;
  margin-top: 14px;
  padding: 12px 16px;
  background: #f0fdf4;
  border-radius: 8px;
  font-size: 0.93rem;
  color: #166534;
  font-weight: 500;
}
.result-arrow {
  font-size: 1.2rem;
  font-weight: 700;
  color: #16a34a;
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
  .connector-grid {
    grid-template-columns: 1fr 1fr;
  }
  .permission-grid {
    grid-template-columns: 1fr;
  }
  .analogy-banner {
    flex-direction: column;
    text-align: center;
  }
  .section-slide {
    margin-bottom: 32px;
    padding-bottom: 32px;
  }
}
</style>
