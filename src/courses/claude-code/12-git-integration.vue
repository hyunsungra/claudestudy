<template>
  <div class="page-content">
    <div class="hero-section">
      <div class="hero-icon">📦</div>
      <h1>Git 연동</h1>
      <p class="hero-desc">Claude가 <strong>코드 버전 관리</strong>를 도와주는 방식</p>
      <div class="hero-tags">
        <span class="tag">변경사항 확인</span>
        <span class="tag">자동 커밋</span>
        <span class="tag">PR 생성</span>
        <span class="tag">안전 장치</span>
      </div>
    </div>

    <section>
      <h2>Git이란?</h2>
      <div class="key-message">
        <div class="key-icon">💡</div>
        <p><strong>Git</strong>은 파일의 변경 이력을 관리하는 도구입니다. "언제, 뭘 바꿨는지" 기록을 남기고, 필요하면 이전 상태로 돌아갈 수 있습니다. Claude Code는 Git과 자동으로 연동되어 버전 관리를 도와줍니다.</p>
      </div>
    </section>

    <section>
      <h2>Claude에게 시킬 수 있는 Git 작업</h2>
      <div class="git-grid">
        <div class="git-card">
          <div class="git-icon">🔍</div>
          <strong>변경사항 확인</strong>
          <p>"뭐가 바뀌었어?" 하면 현재 수정된 파일과 내용을 알려줍니다.</p>
        </div>
        <div class="git-card">
          <div class="git-icon">💾</div>
          <strong>커밋 (기록 남기기)</strong>
          <p>"커밋해줘" 하면 변경 내용을 분석해서 적절한 설명과 함께 기록합니다.</p>
        </div>
        <div class="git-card">
          <div class="git-icon">📋</div>
          <strong>PR 만들기</strong>
          <p>"PR 만들어줘" 하면 변경사항을 정리해서 검토 요청을 자동으로 만듭니다.</p>
        </div>
        <div class="git-card">
          <div class="git-icon">📜</div>
          <strong>이력 조회</strong>
          <p>"최근에 뭐가 바뀌었어?" 하면 최근 변경 기록을 정리해서 알려줍니다.</p>
        </div>
      </div>
    </section>

    <section>
      <h2>Claude의 안전 장치</h2>
      <p>Claude는 Git 작업에서 <strong>실수를 방지하기 위한 규칙</strong>을 따릅니다.</p>
      <div class="safety-cards">
        <div class="safety-card">
          <div class="safety-left">
            <span class="safety-icon">🛡️</span>
            <strong>코드를 올리기 전에 항상 물어봄</strong>
          </div>
          <div class="safety-reason">실수로 미완성 코드가 올라가는 것 방지</div>
        </div>
        <div class="safety-card">
          <div class="safety-left">
            <span class="safety-icon">🔒</span>
            <strong>이전 기록을 함부로 덮어쓰지 않음</strong>
          </div>
          <div class="safety-reason">다른 사람의 작업이 사라지는 것 방지</div>
        </div>
        <div class="safety-card">
          <div class="safety-left">
            <span class="safety-icon">⚠️</span>
            <strong>비밀번호 파일은 경고함</strong>
          </div>
          <div class="safety-reason">민감한 정보가 공개되는 것 방지</div>
        </div>
        <div class="safety-card">
          <div class="safety-left">
            <span class="safety-icon">🎯</span>
            <strong>파일을 하나씩 골라서 기록함</strong>
          </div>
          <div class="safety-reason">불필요한 파일이 섞여 들어가는 것 방지</div>
        </div>
      </div>
      <div class="info-box">
        <p><strong>안심하세요:</strong> Claude는 위험한 Git 작업(강제 올리기, 기록 삭제 등)은 하지 않습니다. 중요한 작업은 항상 확인을 거칩니다.</p>
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
.hero-icon { font-size: 3rem; margin-bottom: 12px; }
.hero-section h1 { color: #f1f5f9; margin-bottom: 12px; }
.hero-desc { color: #94a3b8 !important; font-size: 1.15rem; margin-bottom: 24px !important; }
.hero-desc strong { color: #e2e8f0; }
.hero-tags { display: flex; justify-content: center; flex-wrap: wrap; gap: 8px; }
.tag { background: rgba(99,102,241,0.15); color: #a5b4fc; padding: 6px 16px; border-radius: 20px; font-size: 0.85rem; font-weight: 500; border: 1px solid rgba(99,102,241,0.25); }

/* === Key Message === */
.key-message { display: flex; align-items: flex-start; gap: 16px; background: #eff6ff; border: 2px solid #93c5fd; border-radius: 12px; padding: 24px; margin: 20px 0; }
.key-icon { font-size: 2rem; flex-shrink: 0; }
.key-message p { margin: 0 !important; font-size: 1rem; color: #334155; line-height: 1.7; }
.key-message strong { color: #1e40af; }

/* === Git Grid === */
.git-grid { display: grid; grid-template-columns: repeat(2, 1fr); gap: 16px; margin: 20px 0; }
.git-card { background: #f8fafc; border: 1px solid #e2e8f0; border-radius: 12px; padding: 24px 20px; transition: border-color 0.2s, transform 0.2s; }
.git-card:hover { border-color: #93c5fd; transform: translateY(-2px); }
.git-icon { font-size: 1.8rem; margin-bottom: 8px; }
.git-card strong { display: block; font-size: 1rem; color: #1e293b; margin-bottom: 6px; }
.git-card p { font-size: 0.88rem; color: #64748b; margin: 0 !important; }

/* === Safety Cards === */
.safety-cards { display: flex; flex-direction: column; gap: 10px; margin: 20px 0; }
.safety-card { display: flex; align-items: center; justify-content: space-between; background: #f8fafc; border: 1px solid #e2e8f0; border-radius: 10px; padding: 16px 20px; transition: border-color 0.2s; }
.safety-card:hover { border-color: #93c5fd; }
.safety-left { display: flex; align-items: center; gap: 10px; }
.safety-icon { font-size: 1.2rem; flex-shrink: 0; }
.safety-left strong { font-size: 0.92rem; color: #1e293b; }
.safety-reason { font-size: 0.82rem; color: #94a3b8; background: #f1f5f9; padding: 4px 12px; border-radius: 6px; flex-shrink: 0; }

/* === Responsive === */
@media (max-width: 768px) {
  .hero-section { padding: 36px 20px 32px; }
  .hero-section h1 { font-size: 1.6rem; }
  .git-grid { grid-template-columns: 1fr; }
  .safety-card { flex-direction: column; align-items: flex-start; gap: 8px; }
  .key-message { flex-direction: column; gap: 12px; }
}
</style>
