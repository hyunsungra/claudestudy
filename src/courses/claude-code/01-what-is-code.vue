<template>
  <div class="page-content">
    <div class="hero-section">
      <div class="hero-icon">⌨️</div>
      <h1>Claude Code란?</h1>
      <p class="hero-desc">터미널에서 <code>claude</code> 명령으로 부르는 <strong>AI 코딩 에이전트</strong></p>
      <div class="hero-tags">
        <span class="tag">코드 생성</span>
        <span class="tag">버그 수정</span>
        <span class="tag">리팩토링</span>
        <span class="tag">문서화</span>
        <span class="tag">Git 관리</span>
      </div>
    </div>

    <section>
      <h2>한마디로 요약</h2>
      <div class="summary-cards">
        <div class="summary-card">
          <div class="summary-icon">📂</div>
          <div class="summary-text">
            <strong>내 프로젝트를 직접 이해</strong>
            <p>폴더 구조와 파일을 스스로 파악합니다</p>
          </div>
        </div>
        <div class="summary-card">
          <div class="summary-icon">💬</div>
          <div class="summary-text">
            <strong>말로 시키면 코드로 실행</strong>
            <p>"로그인 만들어줘" → 코드 작성 완료</p>
          </div>
        </div>
        <div class="summary-card">
          <div class="summary-icon">🔒</div>
          <div class="summary-text">
            <strong>내 컴퓨터에서만 동작</strong>
            <p>코드 유출 걱정 없는 로컬 실행 방식</p>
          </div>
        </div>
      </div>
    </section>

    <section>
      <h2>코워크와 뭐가 다른가?</h2>
      <div class="vs-container">
        <div class="vs-card cowork">
          <div class="vs-badge">코워크</div>
          <div class="vs-icon">🗂️</div>
          <div class="vs-title">일반 업무</div>
          <ul>
            <li>문서, 데이터, 파일 정리</li>
            <li>Claude Desktop 앱에서 사용</li>
          </ul>
        </div>
        <div class="vs-divider">VS</div>
        <div class="vs-card code">
          <div class="vs-badge">코드</div>
          <div class="vs-icon">💻</div>
          <div class="vs-title">개발 업무</div>
          <ul>
            <li>코딩, 디버깅, 배포</li>
            <li>터미널, Desktop 앱, IDE 플러그인</li>
          </ul>
        </div>
      </div>
      <div class="vs-common">
        <span>공통점:</span> 둘 다 AI 에이전트 — 파일을 직접 다루고, 여러 작업을 동시에 처리
      </div>
    </section>

    <section>
      <h2>Claude Code가 할 수 있는 것</h2>
      <div class="capability-grid">
        <div class="capability-item">
          <div class="capability-icon">✍️</div>
          <div class="capability-label">코드 작성</div>
        </div>
        <div class="capability-item">
          <div class="capability-icon">🐛</div>
          <div class="capability-label">버그 수정</div>
        </div>
        <div class="capability-item">
          <div class="capability-icon">🔄</div>
          <div class="capability-label">리팩토링</div>
        </div>
        <div class="capability-item">
          <div class="capability-icon">📝</div>
          <div class="capability-label">문서화</div>
        </div>
        <div class="capability-item">
          <div class="capability-icon">🧪</div>
          <div class="capability-label">테스트 작성</div>
        </div>
        <div class="capability-item">
          <div class="capability-icon">📦</div>
          <div class="capability-label">Git 관리</div>
        </div>
      </div>
    </section>

    <section>
      <h2>일반 AI 채팅과의 차이</h2>
      <div class="diff-list">
        <div class="diff-row">
          <div class="diff-before">
            <span class="diff-icon">❌</span>
            <span>"이렇게 하면 됩니다" 답변만 줌</span>
          </div>
          <div class="diff-arrow">→</div>
          <div class="diff-after">
            <span class="diff-icon">✅</span>
            <span>파일을 열어서 <strong>직접 수정</strong></span>
          </div>
        </div>
        <div class="diff-row">
          <div class="diff-before">
            <span class="diff-icon">❌</span>
            <span>코드를 복사해서 붙여넣어야 함</span>
          </div>
          <div class="diff-arrow">→</div>
          <div class="diff-after">
            <span class="diff-icon">✅</span>
            <span>프로젝트에 <strong>바로 반영</strong></span>
          </div>
        </div>
        <div class="diff-row">
          <div class="diff-before">
            <span class="diff-icon">❌</span>
            <span>파일 하나씩 물어봐야 함</span>
          </div>
          <div class="diff-arrow">→</div>
          <div class="diff-after">
            <span class="diff-icon">✅</span>
            <span>프로젝트 전체를 이해하고 <strong>동시 수정</strong></span>
          </div>
        </div>
        <div class="diff-row">
          <div class="diff-before">
            <span class="diff-icon">❌</span>
            <span>실행은 내가 직접</span>
          </div>
          <div class="diff-arrow">→</div>
          <div class="diff-after">
            <span class="diff-icon">✅</span>
            <span>테스트, 빌드도 <strong>대신 실행</strong></span>
          </div>
        </div>
      </div>
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

.hero-icon {
  font-size: 3rem;
  margin-bottom: 12px;
}

.hero-section h1 {
  color: #f1f5f9;
  margin-bottom: 12px;
}

.hero-desc {
  color: #94a3b8 !important;
  font-size: 1.15rem;
  margin-bottom: 24px !important;
}

.hero-desc code {
  background: rgba(99, 102, 241, 0.25);
  color: #a5b4fc;
  padding: 2px 8px;
  border-radius: 4px;
}

.hero-desc strong {
  color: #e2e8f0;
}

.hero-tags {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 8px;
}

.tag {
  background: rgba(99, 102, 241, 0.15);
  color: #a5b4fc;
  padding: 6px 16px;
  border-radius: 20px;
  font-size: 0.85rem;
  font-weight: 500;
  border: 1px solid rgba(99, 102, 241, 0.25);
}

/* === Summary Cards === */
.summary-cards {
  display: flex;
  flex-direction: column;
  gap: 12px;
  margin: 20px 0;
}

.summary-card {
  display: flex;
  align-items: center;
  gap: 16px;
  background: #f8fafc;
  border: 1px solid #e2e8f0;
  border-radius: 12px;
  padding: 20px 24px;
  transition: border-color 0.2s, box-shadow 0.2s;
}

.summary-card:hover {
  border-color: #93c5fd;
  box-shadow: 0 2px 8px rgba(59, 130, 246, 0.08);
}

.summary-icon {
  font-size: 2rem;
  flex-shrink: 0;
}

.summary-text strong {
  display: block;
  font-size: 1.05rem;
  color: #1e293b;
  margin-bottom: 2px;
}

.summary-text p {
  font-size: 0.9rem;
  color: #64748b;
  margin: 0 !important;
}

/* === VS Comparison === */
.vs-container {
  display: flex;
  align-items: stretch;
  gap: 0;
  margin: 20px 0 12px;
}

.vs-card {
  flex: 1;
  padding: 24px 20px;
  border-radius: 12px;
  text-align: center;
}

.vs-card.cowork {
  background: #fef3c7;
  border: 2px solid #fcd34d;
}

.vs-card.code {
  background: #eff6ff;
  border: 2px solid #93c5fd;
}

.vs-badge {
  display: inline-block;
  font-size: 0.75rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  padding: 2px 10px;
  border-radius: 10px;
  margin-bottom: 8px;
}

.vs-card.cowork .vs-badge {
  background: #f59e0b;
  color: #fff;
}

.vs-card.code .vs-badge {
  background: #3b82f6;
  color: #fff;
}

.vs-icon {
  font-size: 2.2rem;
  margin: 8px 0;
}

.vs-title {
  font-size: 1.1rem;
  font-weight: 700;
  color: #1e293b;
  margin-bottom: 10px;
}

.vs-card ul {
  list-style: none;
  padding: 0;
  margin: 0;
  text-align: left;
}

.vs-card li {
  font-size: 0.88rem;
  color: #475569;
  padding: 3px 0;
  padding-left: 14px;
  position: relative;
}

.vs-card li::before {
  content: '·';
  position: absolute;
  left: 2px;
  font-weight: 700;
  color: #94a3b8;
}

.vs-divider {
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1rem;
  font-weight: 800;
  color: #94a3b8;
  padding: 0 12px;
  flex-shrink: 0;
}

.vs-common {
  background: #f1f5f9;
  border-radius: 8px;
  padding: 12px 16px;
  font-size: 0.88rem;
  color: #64748b;
  text-align: center;
}

.vs-common span {
  font-weight: 700;
  color: #475569;
}

/* === Capability Grid === */
.capability-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 12px;
  margin: 20px 0;
}

.capability-item {
  background: #f8fafc;
  border: 1px solid #e2e8f0;
  border-radius: 12px;
  padding: 24px 16px;
  text-align: center;
  transition: border-color 0.2s, transform 0.2s;
}

.capability-item:hover {
  border-color: #93c5fd;
  transform: translateY(-2px);
}

.capability-icon {
  font-size: 2rem;
  margin-bottom: 8px;
}

.capability-label {
  font-size: 0.95rem;
  font-weight: 600;
  color: #334155;
}

/* === Diff List === */
.diff-list {
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin: 20px 0;
}

.diff-row {
  display: flex;
  align-items: center;
  gap: 0;
  background: #f8fafc;
  border-radius: 10px;
  overflow: hidden;
  border: 1px solid #e2e8f0;
}

.diff-before {
  flex: 1;
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 14px 16px;
  background: #fef2f2;
  font-size: 0.9rem;
  color: #991b1b;
}

.diff-arrow {
  padding: 0 10px;
  color: #94a3b8;
  font-weight: 700;
  font-size: 1.1rem;
  flex-shrink: 0;
}

.diff-after {
  flex: 1;
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 14px 16px;
  background: #f0fdf4;
  font-size: 0.9rem;
  color: #166534;
}

.diff-after strong {
  color: #166534;
}

.diff-icon {
  flex-shrink: 0;
  font-size: 0.85rem;
}

/* === Responsive === */
@media (max-width: 768px) {
  .hero-section {
    padding: 36px 20px 32px;
  }

  .hero-section h1 {
    font-size: 1.6rem;
  }

  .vs-container {
    flex-direction: column;
    gap: 8px;
  }

  .vs-divider {
    padding: 4px 0;
  }

  .capability-grid {
    grid-template-columns: repeat(2, 1fr);
  }

  .diff-row {
    flex-direction: column;
  }

  .diff-before,
  .diff-after {
    width: 100%;
  }

  .diff-arrow {
    transform: rotate(90deg);
    padding: 4px 0;
  }
}
</style>
