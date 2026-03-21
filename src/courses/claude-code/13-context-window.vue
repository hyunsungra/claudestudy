<template>
  <div class="page-content">
    <div class="hero-section">
      <div class="hero-icon">🧠</div>
      <h1>컨텍스트 윈도우 관리</h1>
      <p class="hero-desc">Claude가 한 번에 기억할 수 있는 양과 <strong>효율적으로 쓰는 방법</strong></p>
      <div class="hero-tags">
        <span class="tag">기억 용량</span>
        <span class="tag">자동 요약</span>
        <span class="tag">공간 절약</span>
      </div>
    </div>

    <section>
      <h2>컨텍스트 윈도우란?</h2>
      <div class="analogy-box">
        <div class="analogy-icon">🪑</div>
        <div class="analogy-content">
          <strong>작업 책상이라고 생각하세요</strong>
          <p>책상이 넓으면 많은 자료를 펼쳐놓고 일할 수 있지만, 무한히 넓지는 않습니다. 책상이 가득 차면 오래된 자료를 정리해야 새 자료를 올려놓을 수 있습니다.</p>
        </div>
      </div>
    </section>

    <section>
      <h2>모델별 용량</h2>
      <div class="model-cards">
        <div class="model-card opus">
          <div class="model-badge">가장 큰 용량</div>
          <div class="model-name">Opus</div>
          <div class="model-capacity">최대 100만 토큰</div>
          <div class="model-desc">소설 3~4권 분량을 한 번에 처리</div>
        </div>
        <div class="model-card sonnet">
          <div class="model-name">Sonnet</div>
          <div class="model-capacity">20만 토큰</div>
          <div class="model-desc">소설 1권 정도</div>
        </div>
        <div class="model-card haiku">
          <div class="model-name">Haiku</div>
          <div class="model-capacity">20만 토큰</div>
          <div class="model-desc">소설 1권 정도, 대신 빠름</div>
        </div>
      </div>
    </section>

    <section>
      <h2>공간이 부족해지면?</h2>
      <p>대화가 길어지면 공간이 가득 찹니다. 이때 Claude는 자동으로 <strong>이전 대화를 요약</strong>해서 공간을 확보합니다.</p>
      <div class="progress-steps">
        <div class="progress-step">
          <div class="progress-bar" style="width: 30%">
            <div class="progress-fill good"></div>
          </div>
          <div class="progress-info">
            <strong>대화 시작</strong>
            <span class="progress-status ok">공간 여유 있음</span>
          </div>
        </div>
        <div class="progress-step">
          <div class="progress-bar" style="width: 70%">
            <div class="progress-fill warning"></div>
          </div>
          <div class="progress-info">
            <strong>대화 계속</strong>
            <span class="progress-status warn">70% 사용, 아직 괜찮음</span>
          </div>
        </div>
        <div class="progress-step">
          <div class="progress-bar" style="width: 90%">
            <div class="progress-fill danger"></div>
          </div>
          <div class="progress-info">
            <strong>공간 부족</strong>
            <span class="progress-status alert">90% 사용, 자동 요약 시작</span>
          </div>
        </div>
        <div class="progress-step">
          <div class="progress-bar" style="width: 40%">
            <div class="progress-fill good"></div>
          </div>
          <div class="progress-info">
            <strong>요약 완료</strong>
            <span class="progress-status ok">40%로 복구, 대화 계속 가능</span>
          </div>
        </div>
      </div>
    </section>

    <section>
      <h2>공간을 아끼는 방법</h2>
      <div class="save-grid">
        <div class="save-card">
          <div class="save-icon">📦</div>
          <strong>/compact 사용</strong>
          <p>대화를 직접 요약해서 공간을 확보합니다. 부족해지기 전에 미리 해두면 좋습니다.</p>
        </div>
        <div class="save-card">
          <div class="save-icon">🔄</div>
          <strong>/clear로 새로 시작</strong>
          <p>주제가 완전히 바뀌면 새 대화를 시작하는 게 효율적입니다.</p>
        </div>
        <div class="save-card">
          <div class="save-icon">🎯</div>
          <strong>구체적으로 질문하기</strong>
          <p>"전체 파일 다 읽어줘"보다 "이 파일의 30번째 줄 설명해줘"가 공간을 아낍니다.</p>
        </div>
        <div class="save-card">
          <div class="save-icon">📝</div>
          <strong>CLAUDE.md 활용</strong>
          <p>매번 반복하는 지시는 CLAUDE.md에 적어두면 대화 공간을 아낄 수 있습니다.</p>
        </div>
      </div>
    </section>

    <section>
      <h2>사용량 확인하기</h2>
      <div class="usage-cards">
        <div class="usage-card">
          <code class="usage-cmd">/usage</code>
          <span class="usage-desc">사용량 한도 확인</span>
        </div>
        <div class="usage-card">
          <code class="usage-cmd">/context</code>
          <span class="usage-desc">컨텍스트 사용량 시각적으로 보기</span>
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
.hero-icon { font-size: 3rem; margin-bottom: 12px; }
.hero-section h1 { color: #f1f5f9; margin-bottom: 12px; }
.hero-desc { color: #94a3b8 !important; font-size: 1.15rem; margin-bottom: 24px !important; }
.hero-desc strong { color: #e2e8f0; }
.hero-tags { display: flex; justify-content: center; flex-wrap: wrap; gap: 8px; }
.tag { background: rgba(99,102,241,0.15); color: #a5b4fc; padding: 6px 16px; border-radius: 20px; font-size: 0.85rem; font-weight: 500; border: 1px solid rgba(99,102,241,0.25); }

/* === Analogy Box === */
.analogy-box { display: flex; align-items: flex-start; gap: 16px; background: #eff6ff; border: 2px solid #93c5fd; border-radius: 12px; padding: 24px; margin: 20px 0; }
.analogy-box > .analogy-icon { font-size: 2rem; flex-shrink: 0; }
.analogy-content strong { display: block; font-size: 1.05rem; color: #1e40af; margin-bottom: 6px; }
.analogy-content p { margin: 0 !important; font-size: 0.95rem; color: #334155; line-height: 1.7; }

/* === Model Cards === */
.model-cards { display: grid; grid-template-columns: repeat(3, 1fr); gap: 16px; margin: 20px 0; }
.model-card { border-radius: 12px; padding: 24px 20px; text-align: center; transition: transform 0.2s; position: relative; }
.model-card:hover { transform: translateY(-2px); }
.model-card.opus { background: linear-gradient(135deg, #eff6ff, #dbeafe); border: 2px solid #3b82f6; }
.model-card.sonnet { background: #f8fafc; border: 2px solid #e2e8f0; }
.model-card.haiku { background: #f8fafc; border: 2px solid #e2e8f0; }
.model-badge { display: inline-block; font-size: 0.7rem; font-weight: 700; padding: 2px 10px; border-radius: 10px; background: #3b82f6; color: #fff; margin-bottom: 10px; }
.model-name { font-size: 1.3rem; font-weight: 800; color: #1e293b; margin-bottom: 8px; }
.model-capacity { font-size: 1.1rem; font-weight: 700; color: #3b82f6; margin-bottom: 8px; }
.model-card.sonnet .model-capacity,
.model-card.haiku .model-capacity { color: #64748b; }
.model-desc { font-size: 0.85rem; color: #94a3b8; }

/* === Progress Steps === */
.progress-steps { display: flex; flex-direction: column; gap: 14px; margin: 20px 0; }
.progress-step { display: flex; align-items: center; gap: 16px; background: #f8fafc; border: 1px solid #e2e8f0; border-radius: 10px; padding: 16px 20px; }
.progress-bar { height: 10px; background: #e2e8f0; border-radius: 5px; overflow: hidden; min-width: 100px; }
.progress-fill { height: 100%; border-radius: 5px; width: 100%; }
.progress-fill.good { background: linear-gradient(90deg, #86efac, #4ade80); }
.progress-fill.warning { background: linear-gradient(90deg, #fde047, #facc15); }
.progress-fill.danger { background: linear-gradient(90deg, #fca5a5, #f87171); }
.progress-info { flex: 1; }
.progress-info strong { display: block; font-size: 0.92rem; color: #1e293b; margin-bottom: 2px; }
.progress-status { font-size: 0.82rem; }
.progress-status.ok { color: #16a34a; }
.progress-status.warn { color: #ca8a04; }
.progress-status.alert { color: #dc2626; }

/* === Save Grid === */
.save-grid { display: grid; grid-template-columns: repeat(2, 1fr); gap: 16px; margin: 20px 0; }
.save-card { background: #f8fafc; border: 1px solid #e2e8f0; border-radius: 12px; padding: 24px 20px; transition: border-color 0.2s, transform 0.2s; }
.save-card:hover { border-color: #93c5fd; transform: translateY(-2px); }
.save-icon { font-size: 1.8rem; margin-bottom: 8px; }
.save-card strong { display: block; font-size: 0.95rem; color: #1e293b; margin-bottom: 6px; }
.save-card p { font-size: 0.85rem; color: #64748b; margin: 0 !important; }

/* === Usage Cards === */
.usage-cards { display: flex; flex-direction: column; gap: 10px; margin: 20px 0; }
.usage-card { display: flex; align-items: center; gap: 16px; background: #f8fafc; border: 1px solid #e2e8f0; border-radius: 12px; padding: 16px 20px; transition: border-color 0.2s; }
.usage-card:hover { border-color: #93c5fd; }
.usage-cmd { background: #1e293b; color: #a5b4fc; padding: 6px 14px; border-radius: 8px; font-size: 0.9rem; font-weight: 600; white-space: nowrap; }
.usage-desc { font-size: 0.92rem; color: #64748b; }

/* === Responsive === */
@media (max-width: 768px) {
  .hero-section { padding: 36px 20px 32px; }
  .hero-section h1 { font-size: 1.6rem; }
  .model-cards { grid-template-columns: 1fr; }
  .save-grid { grid-template-columns: 1fr; }
  .analogy-box { flex-direction: column; gap: 12px; }
  .progress-step { flex-direction: column; align-items: flex-start; gap: 8px; }
  .progress-bar { width: 100% !important; min-width: unset; }
}
</style>
