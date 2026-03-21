<template>
  <div class="page-content">
    <!-- Hero Section -->
    <div class="hero-section">
      <div class="hero-icon">📁</div>
      <h1>프로젝트 폴더 구조</h1>
      <p class="hero-desc">Claude Code가 내 프로젝트를 어떤 구조로 관리하는지 알아봅시다</p>
    </div>

    <!-- 자동 생성되는 2가지 -->
    <section class="slide-section">
      <h2 class="section-title">전체 구조 한눈에 보기</h2>
      <p class="section-desc">Claude Code를 프로젝트 폴더에서 실행하면, 자동으로 <strong>2가지</strong>가 만들어집니다.</p>

      <div class="two-card-grid">
        <div class="highlight-card">
          <div class="highlight-icon">📄</div>
          <h3>CLAUDE.md</h3>
          <p>"이 프로젝트에서는 이렇게 작업해줘"라는 <strong>지시서</strong>입니다. Claude가 매번 읽고 참고합니다.</p>
        </div>
        <div class="highlight-card">
          <div class="highlight-icon">🧰</div>
          <h3>.claude/ 폴더</h3>
          <p>Claude의 <strong>도구 상자</strong>입니다. 설정, 스킬, 에이전트, 메모리 등이 들어있습니다.</p>
        </div>
      </div>

      <div class="code-block">
        <p class="code-label">프로젝트 안의 Claude 관련 파일들</p>
        <pre>내 프로젝트/
├── CLAUDE.md                     # 프로젝트 지시서
├── .mcp.json                     # 외부 서비스 연결 설정
│
└── .claude/                      # Claude 도구 상자
    ├── settings.json             # 설정 파일
    ├── settings.local.json       # 내 PC 전용 설정
    │
    ├── rules/                    # 상황별 규칙 모음
    ├── skills/                   # 나만의 명령어 모음
    ├── agents/                   # 나만의 AI 보조원 모음
    ├── agent-memory/             # Claude가 기억하는 내용
    └── agent-memory-local/       # 내 PC에서만 기억하는 내용</pre>
      </div>
    </section>

    <!-- 각 폴더/파일 역할 - 카드로 변환 -->
    <section class="slide-section">
      <h2 class="section-title">각 폴더/파일이 하는 일</h2>
      <div class="role-card-grid">
        <div class="role-card">
          <div class="role-header">
            <span class="role-icon">📄</span>
            <strong>CLAUDE.md</strong>
            <span class="share-badge shared">공유 O</span>
          </div>
          <p>프로젝트 작업 지시서 (어떻게 작업할지 안내)</p>
        </div>
        <div class="role-card">
          <div class="role-header">
            <span class="role-icon">🔌</span>
            <strong>.mcp.json</strong>
            <span class="share-badge shared">공유 O</span>
          </div>
          <p>외부 서비스 연결 정보 (GitHub, DB 등)</p>
        </div>
        <div class="role-card">
          <div class="role-header">
            <span class="role-icon">⚙️</span>
            <strong>settings.json</strong>
            <span class="share-badge shared">공유 O</span>
          </div>
          <p>Claude의 동작 설정 (허용/차단할 작업 등)</p>
        </div>
        <div class="role-card">
          <div class="role-header">
            <span class="role-icon">🔒</span>
            <strong>settings.local.json</strong>
            <span class="share-badge private">공유 X</span>
          </div>
          <p>내 컴퓨터에서만 쓰는 개인 설정</p>
        </div>
        <div class="role-card">
          <div class="role-header">
            <span class="role-icon">📏</span>
            <strong>rules/</strong>
            <span class="share-badge shared">공유 O</span>
          </div>
          <p>특정 상황에서만 적용되는 세부 규칙</p>
        </div>
        <div class="role-card">
          <div class="role-header">
            <span class="role-icon">⚡</span>
            <strong>skills/</strong>
            <span class="share-badge shared">공유 O</span>
          </div>
          <p>내가 만든 단축 명령어 (예: <code>/리뷰</code>)</p>
        </div>
        <div class="role-card">
          <div class="role-header">
            <span class="role-icon">🤖</span>
            <strong>agents/</strong>
            <span class="share-badge shared">공유 O</span>
          </div>
          <p>내가 만든 전문 AI 보조원</p>
        </div>
        <div class="role-card">
          <div class="role-header">
            <span class="role-icon">🧠</span>
            <strong>agent-memory/</strong>
            <span class="share-badge shared">공유 O</span>
          </div>
          <p>Claude가 다음에도 기억할 내용</p>
        </div>
      </div>
    </section>

    <!-- 전역 설정 -->
    <section class="slide-section">
      <h2 class="section-title">전역 설정도 있어요</h2>
      <p class="section-desc">프로젝트마다 설정하기 번거로운 것은 <strong>전역 설정</strong>으로 한 번만 해두면 모든 프로젝트에 적용됩니다.</p>

      <div class="code-block">
        <p class="code-label">전역 설정 위치</p>
        <pre># Windows
C:\Users\사용자이름\.claude\

# Mac/Linux
~/.claude/</pre>
      </div>

      <p>이 안에도 프로젝트와 동일하게 <code>CLAUDE.md</code>, <code>settings.json</code>, <code>rules/</code>, <code>skills/</code> 등을 넣을 수 있습니다.</p>

      <div class="tip-card">
        <div class="tip-icon">💡</div>
        <div class="tip-content">
          <strong>우선순위:</strong> 프로젝트 설정이 전역 설정보다 우선합니다. 같은 항목이 있으면 프로젝트 쪽이 적용됩니다.
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

.slide-section { margin-bottom: 48px; }
.section-title { font-size: 1.5rem; margin-bottom: 12px; }
.section-desc { color: #475569; margin-bottom: 24px; font-size: 1.05rem; }

.two-card-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 20px;
  margin-bottom: 28px;
}
.highlight-card {
  background: #f8fafc;
  border: 1px solid #e2e8f0;
  border-radius: 12px;
  padding: 28px 24px;
  text-align: center;
  transition: border-color 0.2s, transform 0.2s;
}
.highlight-card:hover { border-color: #93c5fd; transform: translateY(-2px); }
.highlight-icon { font-size: 2.2rem; margin-bottom: 10px; }
.highlight-card h3 { margin-bottom: 8px; color: #1e293b; }
.highlight-card p { color: #475569; font-size: 0.95rem; margin: 0; }

.role-card-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 14px;
}
.role-card {
  background: #f8fafc;
  border: 1px solid #e2e8f0;
  border-radius: 12px;
  padding: 18px 20px;
  transition: border-color 0.2s, transform 0.2s;
}
.role-card:hover { border-color: #93c5fd; transform: translateY(-2px); }
.role-header {
  display: flex;
  align-items: center;
  gap: 8px;
  margin-bottom: 8px;
  flex-wrap: wrap;
}
.role-icon { font-size: 1.3rem; }
.role-header strong { color: #1e293b; font-size: 0.95rem; }
.share-badge {
  font-size: 0.72rem;
  padding: 2px 8px;
  border-radius: 999px;
  font-weight: 600;
  margin-left: auto;
}
.share-badge.shared { background: #dbeafe; color: #1d4ed8; }
.share-badge.private { background: #fef3c7; color: #92400e; }
.role-card p { color: #475569; font-size: 0.9rem; margin: 0; }

.tip-card {
  display: flex;
  align-items: center;
  gap: 14px;
  background: #eff6ff;
  border: 1px solid #bfdbfe;
  border-radius: 12px;
  padding: 18px 22px;
  margin-top: 18px;
}
.tip-icon { font-size: 1.5rem; flex-shrink: 0; }
.tip-content { color: #1e40af; font-size: 0.95rem; }

@media (max-width: 768px) {
  .hero-section { padding: 32px 18px 28px; }
  .hero-icon { font-size: 2.2rem; }
  .hero-section h1 { font-size: 1.4rem; }
  .hero-desc { font-size: 1rem; }
  .two-card-grid { grid-template-columns: 1fr; }
  .role-card-grid { grid-template-columns: 1fr; }
  .highlight-card { padding: 20px 16px; }
}
</style>
