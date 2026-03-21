<template>
  <div class="page-content">
    <div class="hero-section">
      <div class="hero-icon">⚙️</div>
      <h1>동작 방식과 차별점</h1>
      <p class="hero-desc">Claude Code가 <strong>프로젝트 전체를 이해</strong>하고 작업하는 방식</p>
      <div class="hero-tags">
        <span class="tag">폴더 탐색</span>
        <span class="tag">자동 분석</span>
        <span class="tag">3가지 모드</span>
        <span class="tag">병렬 처리</span>
      </div>
    </div>

    <section>
      <h2>프로젝트 전체를 이해한다</h2>
      <div class="diff-list">
        <div class="diff-row">
          <div class="diff-before">
            <span class="diff-icon">❌</span>
            <span>일반 AI: 복사한 코드 조각만 봄</span>
          </div>
          <div class="diff-arrow">→</div>
          <div class="diff-after">
            <span class="diff-icon">✅</span>
            <span>Claude Code: <strong>폴더 전체를 탐색</strong>해서 구조 파악</span>
          </div>
        </div>
      </div>
      <p>파일 간의 관계, 구조, 의존성을 파악한 뒤 작업하기 때문에 훨씬 정확합니다.</p>
    </section>

    <section>
      <h2>기본 상호작용 패턴</h2>
      <div class="step-cards">
        <div class="step-card">
          <div class="step-number">1</div>
          <div class="step-body">
            <strong>자연어로 요청</strong>
            <p>"로그인 기능 구현해줘", "에러 원인 분석해줘" 처럼 한국어로 지시</p>
          </div>
        </div>
        <div class="step-card">
          <div class="step-number">2</div>
          <div class="step-body">
            <strong>Claude의 동작</strong>
            <p>현재 폴더 구조 스캔 → 관련 파일 열기 → 수정/생성 계획 수립 → 코드 제안</p>
          </div>
        </div>
        <div class="step-card">
          <div class="step-number">3</div>
          <div class="step-body">
            <strong>승인/실행</strong>
            <p>"이 변경을 적용할까요?" 확인 → 수락하면 파일에 실제 반영</p>
          </div>
        </div>
        <div class="step-card">
          <div class="step-number">4</div>
          <div class="step-body">
            <strong>추가 지시</strong>
            <p>"테스트도 돌려줘", "여기 좀 바꿔줘" 처럼 이어서 대화</p>
          </div>
        </div>
      </div>
      <div class="info-box">
        <p><strong>팁:</strong> <code>@</code> 문법으로 특정 파일·폴더를 콕 집어 컨텍스트에 포함시킬 수 있습니다. "이 파일 기준으로 수정해줘" 같은 세밀한 지시가 가능합니다.</p>
      </div>
    </section>

    <section>
      <h2>3가지 모드</h2>
      <p><code>Shift+Tab</code>으로 전환합니다.</p>
      <div class="mode-cards">
        <div class="mode-card normal">
          <div class="mode-badge">기본값</div>
          <div class="mode-icon">🛡️</div>
          <div class="mode-name">Normal</div>
          <div class="mode-feature">매 변경마다 승인 필요</div>
          <div class="mode-when">처음 쓸 때, 중요한 코드 수정</div>
        </div>
        <div class="mode-card auto">
          <div class="mode-badge">Shift+Tab 1번</div>
          <div class="mode-icon">⚡</div>
          <div class="mode-name">Auto-Accept</div>
          <div class="mode-feature">파일 수정·생성 자동 승인</div>
          <div class="mode-when">대량 리팩토링, 변수명 일괄 변경</div>
        </div>
        <div class="mode-card plan">
          <div class="mode-badge">Shift+Tab 2번</div>
          <div class="mode-icon">📋</div>
          <div class="mode-name">Plan</div>
          <div class="mode-feature">읽기 전용, 계획만 수립</div>
          <div class="mode-when">새 코드베이스 분석, 영향도 파악</div>
        </div>
      </div>
    </section>

    <section>
      <h2>사용하는 내부 도구들</h2>
      <p>Claude Code는 작업을 위해 내부적으로 여러 도구를 사용합니다. 직접 신경 쓸 필요는 없지만, 알아두면 동작을 이해하기 쉽습니다.</p>
      <div class="tool-grid">
        <div class="tool-card">
          <div class="tool-icon">📖</div>
          <div class="tool-name">Read</div>
          <p>파일 내용 읽기</p>
        </div>
        <div class="tool-card">
          <div class="tool-icon">✏️</div>
          <div class="tool-name">Write</div>
          <p>새 파일 만들기</p>
        </div>
        <div class="tool-card">
          <div class="tool-icon">🔧</div>
          <div class="tool-name">Edit</div>
          <p>기존 파일 수정</p>
        </div>
        <div class="tool-card">
          <div class="tool-icon">💻</div>
          <div class="tool-name">Bash</div>
          <p>터미널 명령어 실행</p>
        </div>
        <div class="tool-card">
          <div class="tool-icon">🔍</div>
          <div class="tool-name">Glob / Grep</div>
          <p>파일 찾기, 코드 검색</p>
        </div>
        <div class="tool-card">
          <div class="tool-icon">🤖</div>
          <div class="tool-name">Agent</div>
          <p>서브에이전트로 병렬 처리</p>
        </div>
      </div>
    </section>

    <section>
      <h2>서브에이전트 병렬 처리</h2>
      <p>큰 작업을 하면 Claude Code는 <strong>서브에이전트(보조원)</strong>를 여러 개 띄워서 동시에 처리합니다.</p>
      <div class="parallel-demo">
        <div class="parallel-request">
          <div class="parallel-label">요청</div>
          <p>"이 프로젝트의 API 엔드포인트를 전부 찾아서 문서화해줘"</p>
        </div>
        <div class="parallel-arrow">↓</div>
        <div class="parallel-agents">
          <div class="agent-item">🔍 라우터 파일 검색</div>
          <div class="agent-item">🔍 컨트롤러 파일 분석</div>
          <div class="agent-item">🔍 미들웨어 구조 파악</div>
        </div>
        <div class="parallel-arrow">↓</div>
        <div class="parallel-result">
          <div class="parallel-label result">결과</div>
          <p>API 문서 작성 완료</p>
        </div>
      </div>
      <p>여러 에이전트가 <strong>동시에</strong> 탐색하고 분석하기 때문에 프로젝트가 커도 빠릅니다.</p>
    </section>

    <section>
      <h2>IDE 연동</h2>
      <p>터미널뿐 아니라 <strong>에디터 안에서 바로 Claude Code를 띄울 수도</strong> 있습니다.</p>
      <div class="ide-cards">
        <div class="ide-card">
          <div class="ide-icon">🟦</div>
          <div class="ide-info">
            <strong>VS Code</strong>
            <p>확장 프로그램 "Claude Code" 설치</p>
          </div>
        </div>
        <div class="ide-card">
          <div class="ide-icon">🟧</div>
          <div class="ide-info">
            <strong>IntelliJ / WebStorm</strong>
            <p>전용 플러그인 설치, <code>Command+Esc</code> 등 단축키로 실행</p>
          </div>
        </div>
      </div>
      <p>IDE 플러그인을 설치하면 에디터에서 코드를 보면서 바로 Claude에게 지시할 수 있습니다.</p>
    </section>
  </div>
</template>

<style scoped>
/* === Hero Section === */
.hero-section {
  background: linear-gradient(135deg, #1e293b 0%, #334155 100%);
  border-radius: 16px;
  padding: 48px 36px 40px;
  text-align: center;
  margin-bottom: 40px;
}
.hero-icon { font-size: 3rem; margin-bottom: 12px; }
.hero-section h1 { color: #f1f5f9; margin-bottom: 12px; }
.hero-desc { color: #94a3b8 !important; font-size: 1.15rem; margin-bottom: 24px !important; }
.hero-desc code { background: rgba(99,102,241,0.25); color: #a5b4fc; padding: 2px 8px; border-radius: 4px; }
.hero-desc strong { color: #e2e8f0; }
.hero-tags { display: flex; justify-content: center; flex-wrap: wrap; gap: 8px; }
.tag { background: rgba(99,102,241,0.15); color: #a5b4fc; padding: 6px 16px; border-radius: 20px; font-size: 0.85rem; font-weight: 500; border: 1px solid rgba(99,102,241,0.25); }

/* === Diff Row === */
.diff-list { display: flex; flex-direction: column; gap: 10px; margin: 20px 0; }
.diff-row { display: flex; align-items: center; background: #f8fafc; border-radius: 10px; overflow: hidden; border: 1px solid #e2e8f0; }
.diff-before { flex: 1; display: flex; align-items: center; gap: 8px; padding: 14px 16px; background: #fef2f2; font-size: 0.9rem; color: #991b1b; }
.diff-arrow { padding: 0 10px; color: #94a3b8; font-weight: 700; font-size: 1.1rem; flex-shrink: 0; }
.diff-after { flex: 1; display: flex; align-items: center; gap: 8px; padding: 14px 16px; background: #f0fdf4; font-size: 0.9rem; color: #166534; }
.diff-after strong { color: #166534; }
.diff-icon { flex-shrink: 0; font-size: 0.85rem; }

/* === Step Cards === */
.step-cards { display: flex; flex-direction: column; gap: 12px; margin: 20px 0; }
.step-card { display: flex; align-items: center; gap: 16px; background: #f8fafc; border: 1px solid #e2e8f0; border-radius: 12px; padding: 20px 24px; transition: border-color 0.2s, transform 0.2s; }
.step-card:hover { border-color: #93c5fd; transform: translateY(-2px); }
.step-number { width: 36px; height: 36px; background: linear-gradient(135deg, #3b82f6, #6366f1); color: #fff; border-radius: 50%; display: flex; align-items: center; justify-content: center; font-weight: 700; font-size: 1rem; flex-shrink: 0; }
.step-body strong { display: block; font-size: 1.05rem; color: #1e293b; margin-bottom: 4px; }
.step-body p { font-size: 0.9rem; color: #64748b; margin: 0 !important; }

/* === Mode Cards === */
.mode-cards { display: grid; grid-template-columns: repeat(3, 1fr); gap: 16px; margin: 20px 0; }
.mode-card { border-radius: 12px; padding: 24px 20px; text-align: center; transition: transform 0.2s; }
.mode-card:hover { transform: translateY(-2px); }
.mode-card.normal { background: #eff6ff; border: 2px solid #93c5fd; }
.mode-card.auto { background: #fef3c7; border: 2px solid #fcd34d; }
.mode-card.plan { background: #f0fdf4; border: 2px solid #86efac; }
.mode-badge { display: inline-block; font-size: 0.7rem; font-weight: 700; padding: 2px 10px; border-radius: 10px; margin-bottom: 8px; background: rgba(0,0,0,0.08); color: #475569; }
.mode-icon { font-size: 2rem; margin: 8px 0; }
.mode-name { font-size: 1.1rem; font-weight: 700; color: #1e293b; margin-bottom: 8px; }
.mode-feature { font-size: 0.88rem; color: #475569; margin-bottom: 8px; font-weight: 600; }
.mode-when { font-size: 0.82rem; color: #94a3b8; }

/* === Tool Grid === */
.tool-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 12px; margin: 20px 0; }
.tool-card { background: #f8fafc; border: 1px solid #e2e8f0; border-radius: 12px; padding: 20px 16px; text-align: center; transition: border-color 0.2s, transform 0.2s; }
.tool-card:hover { border-color: #93c5fd; transform: translateY(-2px); }
.tool-icon { font-size: 1.8rem; margin-bottom: 8px; }
.tool-name { font-size: 0.95rem; font-weight: 700; color: #1e293b; margin-bottom: 4px; }
.tool-card p { font-size: 0.82rem; color: #64748b; margin: 0 !important; }

/* === Parallel Demo === */
.parallel-demo { background: #f8fafc; border: 1px solid #e2e8f0; border-radius: 12px; padding: 24px; margin: 20px 0; text-align: center; }
.parallel-request { background: #eff6ff; border: 1px solid #bfdbfe; border-radius: 8px; padding: 14px 16px; }
.parallel-label { display: inline-block; font-size: 0.75rem; font-weight: 700; padding: 2px 10px; border-radius: 10px; background: #3b82f6; color: #fff; margin-bottom: 8px; }
.parallel-label.result { background: #16a34a; }
.parallel-request p { margin: 0 !important; font-size: 0.9rem; color: #334155; }
.parallel-arrow { font-size: 1.4rem; color: #94a3b8; padding: 8px 0; }
.parallel-agents { display: flex; gap: 8px; justify-content: center; flex-wrap: wrap; }
.agent-item { background: #fef3c7; border: 1px solid #fcd34d; border-radius: 8px; padding: 10px 16px; font-size: 0.85rem; color: #92400e; font-weight: 500; }
.parallel-result { background: #f0fdf4; border: 1px solid #86efac; border-radius: 8px; padding: 14px 16px; }
.parallel-result p { margin: 0 !important; font-size: 0.9rem; color: #166534; font-weight: 600; }

/* === IDE Cards === */
.ide-cards { display: flex; flex-direction: column; gap: 12px; margin: 20px 0; }
.ide-card { display: flex; align-items: center; gap: 16px; background: #f8fafc; border: 1px solid #e2e8f0; border-radius: 12px; padding: 20px 24px; transition: border-color 0.2s; }
.ide-card:hover { border-color: #93c5fd; }
.ide-icon { font-size: 2rem; flex-shrink: 0; }
.ide-info strong { display: block; font-size: 1.05rem; color: #1e293b; margin-bottom: 2px; }
.ide-info p { font-size: 0.9rem; color: #64748b; margin: 0 !important; }
.ide-info code { background: #eff6ff; color: #1e40af; padding: 2px 6px; border-radius: 4px; font-size: 0.85rem; }

/* === Responsive === */
@media (max-width: 768px) {
  .hero-section { padding: 36px 20px 32px; }
  .hero-section h1 { font-size: 1.6rem; }
  .mode-cards { grid-template-columns: 1fr; }
  .tool-grid { grid-template-columns: repeat(2, 1fr); }
  .diff-row { flex-direction: column; }
  .diff-before, .diff-after { width: 100%; }
  .diff-arrow { transform: rotate(90deg); padding: 4px 0; }
  .parallel-agents { flex-direction: column; align-items: center; }
}
</style>
