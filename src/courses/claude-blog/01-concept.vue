<template>
  <div class="page-content">
    <div class="hero-section">
      <div class="hero-icon">🧠</div>
      <h1>자동화 컨셉 이해하기</h1>
      <p class="hero-desc">주제만 던지면 내 스타일로 블로그 글이 완성되는 자동화를 만듭니다.</p>
    </div>

    <!-- 우리가 만들어낼 결과물 -->
    <section>
      <h2>우리가 만들어낼 결과물</h2>
      <p>이 튜토리얼을 끝까지 따라하면, 아래와 같은 자동화가 완성됩니다.</p>

      <!-- 파이프라인 -->
      <div class="pipeline">
        <!-- 입력 -->
        <div class="pipe-stage input-stage">
          <div class="pipe-badge">입력</div>
          <div class="pipe-card">
            <div class="pipe-icon">💬</div>
            <div class="pipe-title">주제 전달</div>
            <div class="pipe-example">"AI 업무 활용법으로 글 써줘"</div>
          </div>
        </div>

        <div class="pipe-connector">
          <div class="pipe-line"></div>
          <div class="pipe-dot"></div>
        </div>

        <!-- 처리 -->
        <div class="pipe-stage process-stage">
          <div class="pipe-badge">자동 처리</div>
          <div class="pipe-double">
            <div class="pipe-card-mini">
              <div class="pipe-icon-sm">🎭</div>
              <div class="pipe-title-sm">페르소나 확인</div>
              <div class="pipe-desc-sm">내 문체·톤·구성 패턴 적용</div>
            </div>
            <div class="pipe-plus">+</div>
            <div class="pipe-card-mini">
              <div class="pipe-icon-sm">⚡</div>
              <div class="pipe-title-sm">글쓰기 스킬 실행</div>
              <div class="pipe-desc-sm">규칙에 따라 글 작성</div>
            </div>
          </div>
        </div>

        <div class="pipe-connector">
          <div class="pipe-line"></div>
          <div class="pipe-dot"></div>
        </div>

        <!-- 결과 -->
        <div class="pipe-stage output-stage">
          <div class="pipe-badge">결과</div>
          <div class="pipe-card result-card">
            <div class="pipe-icon">📄</div>
            <div class="pipe-title">블로그 글 파일 저장</div>
            <div class="pipe-file">
              <span class="file-icon">📝</span>
              <span class="file-name">AI_업무_활용법.md</span>
            </div>
          </div>
        </div>
      </div>

    </section>

    <section>
      <h2>우리가 만들어야 할 것들</h2>
        <div class="todo-cards">
          <div class="todo-card">
            <div class="todo-step">Step 2</div>
            <div class="todo-icon">🎭</div>
            <div class="todo-info">
              <div class="todo-label">페르소나</div>
              <div class="todo-desc">내 글쓰기 스타일을 정리한 문서</div>
            </div>
          </div>
          <div class="todo-card">
            <div class="todo-step">Step 3</div>
            <div class="todo-icon">⚡</div>
            <div class="todo-info">
              <div class="todo-label">글쓰기 스킬</div>
              <div class="todo-desc">페르소나를 기반으로 글을 작성하는 규칙</div>
            </div>
          </div>
        </div>
    </section>

    <!-- 준비물 -->
    <section>
      <h2>준비물</h2>
      <div class="prep-cards">
        <div class="prep-card main">
          <div class="prep-icon">📝</div>
          <div class="prep-info">
            <strong>내가 작성했던 글 3~5개</strong>
            <p>블로그, 브런치, 노션 등 어디에 쓴 글이든 상관없습니다. <strong>txt 파일</strong>로 복사해서 준비하세요.</p>
          </div>
        </div>
        <div class="prep-card">
          <div class="prep-icon">💳</div>
          <div class="prep-info">
            <strong>Claude 유료 구독</strong>
            <p>코워크 기능을 사용하려면 Pro 이상 필요</p>
          </div>
        </div>
      </div>

      <div class="tip-card">
        <span class="tip-icon">💡</span>
        <div>글이 많을수록 내 스타일을 더 정확하게 파악합니다. 최소 3개, 가능하면 5개 이상 준비하세요.</div>
      </div>
    </section>

    <!-- 준비 완료 체크 -->
    <div class="checkpoint">
      <div class="checkpoint-icon">✅</div>
      <div class="checkpoint-text">
        <strong>txt 파일 준비 완료!</strong>
        <p>글 파일이 준비되었으면 다음 단계로 넘어가세요.</p>
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

/* Pipeline */
.pipeline {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 28px 0;
  gap: 0;
}

.pipe-stage {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  width: 100%;
  max-width: 480px;
}

.pipe-badge {
  font-size: 0.85rem;
  font-weight: 800;
  letter-spacing: 0.04em;
  padding: 5px 16px;
  border-radius: 20px;
}

.input-stage .pipe-badge { background: #dbeafe; color: #1d4ed8; }
.process-stage .pipe-badge { background: #fef3c7; color: #92400e; }
.output-stage .pipe-badge { background: #dcfce7; color: #166534; }

.pipe-card {
  background: #fff;
  border: 2px solid #e2e8f0;
  border-radius: 14px;
  padding: 28px 20px;
  text-align: center;
  width: 100%;
  transition: border-color 0.2s, transform 0.2s, box-shadow 0.2s;
}
.pipe-card:hover {
  transform: translateY(-3px);
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.06);
}

.input-stage .pipe-card { border-color: #93c5fd; background: linear-gradient(180deg, #eff6ff 0%, #fff 100%); }
.result-card { border-color: #86efac !important; background: linear-gradient(180deg, #f0fdf4 0%, #fff 100%) !important; }

.pipe-icon { font-size: 2.4rem; margin-bottom: 8px; }
.pipe-title { font-weight: 800; color: #1e293b; font-size: 1.15rem; margin-bottom: 6px; }
.pipe-example {
  background: #1e293b;
  color: #a5b4fc;
  font-size: 0.88rem;
  padding: 8px 16px;
  border-radius: 8px;
  font-family: 'JetBrains Mono', 'Fira Code', monospace;
  display: inline-block;
  margin-top: 6px;
}

/* Pipe Double (process) */
.pipe-double {
  display: flex;
  align-items: center;
  gap: 8px;
  width: 100%;
}
.pipe-card-mini {
  flex: 1;
  background: #fff;
  border: 2px solid #fcd34d;
  border-radius: 14px;
  padding: 22px 16px;
  text-align: center;
  transition: border-color 0.2s, transform 0.2s, box-shadow 0.2s;
  background: linear-gradient(180deg, #fffbeb 0%, #fff 100%);
}
.pipe-card-mini:hover {
  transform: translateY(-3px);
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.06);
}
.pipe-icon-sm { font-size: 2rem; margin-bottom: 6px; }
.pipe-title-sm { font-weight: 800; color: #1e293b; font-size: 1.05rem; margin-bottom: 4px; }
.pipe-desc-sm { color: #475569; font-size: 0.92rem; line-height: 1.5; }
.pipe-plus { font-size: 1.5rem; font-weight: 800; color: #d97706; flex-shrink: 0; }

/* Pipe File */
.pipe-file {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  background: #f0fdf4;
  border: 1px solid #bbf7d0;
  padding: 6px 14px;
  border-radius: 8px;
  margin-top: 8px;
}
.file-icon { font-size: 0.9rem; }
.file-name { font-size: 0.82rem; font-weight: 600; color: #166534; font-family: 'JetBrains Mono', monospace; }

/* Connector */
.pipe-connector {
  display: flex;
  flex-direction: column;
  align-items: center;
  flex-shrink: 0;
  height: 36px;
  position: relative;
}
.pipe-line {
  width: 2px;
  height: 100%;
  background: linear-gradient(180deg, #cbd5e1, #94a3b8);
}
.pipe-dot {
  position: absolute;
  bottom: -3px;
  width: 0;
  height: 0;
  border-left: 5px solid transparent;
  border-right: 5px solid transparent;
  border-top: 8px solid #94a3b8;
}

/* Todo Cards */
.todo-cards {
  display: flex;
  flex-direction: column;
  gap: 16px;
  max-width: 480px;
  margin: 0 auto;
}
.todo-card {
  display: flex;
  align-items: center;
  gap: 18px;
  background: #fff;
  border: 2px solid #e2e8f0;
  border-radius: 14px;
  padding: 22px 24px;
  transition: border-color 0.2s, transform 0.2s, box-shadow 0.2s;
}
.todo-card:hover {
  border-color: #93c5fd;
  transform: translateY(-3px);
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.06);
}
.todo-step {
  background: linear-gradient(135deg, #3b82f6, #2563eb);
  color: #fff;
  font-size: 0.78rem;
  font-weight: 800;
  padding: 4px 14px;
  border-radius: 20px;
  white-space: nowrap;
  flex-shrink: 0;
}
.todo-icon { font-size: 2.2rem; flex-shrink: 0; }
.todo-info { flex: 1; }
.todo-label { font-size: 1.1rem; font-weight: 800; color: #1e293b; margin-bottom: 2px; }
.todo-desc { font-size: 0.92rem; color: #64748b; line-height: 1.5; }

/* Prep Cards */
.prep-cards {
  display: flex;
  flex-direction: column;
  gap: 12px;
  margin: 20px 0;
}
.prep-card {
  display: flex;
  align-items: center;
  gap: 16px;
  background: #f8fafc;
  border: 1px solid #e2e8f0;
  border-radius: 12px;
  padding: 20px;
}
.prep-card.main {
  background: #fffbeb;
  border-color: #fcd34d;
}
.prep-icon { font-size: 1.8rem; flex-shrink: 0; }
.prep-info strong {
  display: block;
  color: #1e293b;
  font-size: 1rem;
  margin-bottom: 4px;
}
.prep-info p {
  color: #64748b;
  font-size: 0.9rem;
  margin: 0 !important;
  line-height: 1.5;
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

/* Checkpoint */
.checkpoint {
  display: flex;
  align-items: center;
  gap: 16px;
  background: linear-gradient(135deg, #f0fdf4 0%, #dcfce7 100%);
  border: 2px solid #86efac;
  border-radius: 12px;
  padding: 20px 24px;
  margin-top: 32px;
}
.checkpoint-icon { font-size: 2rem; flex-shrink: 0; }
.checkpoint-text strong {
  display: block;
  color: #166534;
  font-size: 1.05rem;
  margin-bottom: 2px;
}
.checkpoint-text p {
  color: #15803d;
  font-size: 0.9rem;
  margin: 0 !important;
}

@media (max-width: 768px) {
  .hero-section { padding: 32px 18px 28px; }
  .hero-section h1 { font-size: 1.4rem; }
  .pipe-double { flex-direction: column; gap: 8px; }
}
</style>
