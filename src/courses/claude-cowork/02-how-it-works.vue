<template>
  <div class="page-content">
    <!-- Hero Section -->
    <div class="hero-section">
      <div class="hero-icon">🧠</div>
      <h1>코워크 동작 방식</h1>
      <p class="hero-desc">코워크가 일반 AI 채팅과 근본적으로 다른 점을 알아봅시다.</p>
    </div>

    <!-- 핵심 차이 -->
    <section class="section-slide">
      <h2>일반 AI와의 핵심 차이</h2>
      <p>ChatGPT, Gemini 같은 일반 AI 채팅은 <strong>"답변을 텍스트로 보여주는 것"</strong>이 전부입니다. 코워크는 다릅니다. <strong>내 컴퓨터의 파일을 직접 읽고, 만들고, 수정</strong>합니다. 이것이 가장 큰 차별점입니다.</p>

      <div class="diff-grid">
        <div class="diff-card">
          <div class="diff-icon">📖</div>
          <h3>파일을 직접 읽는다</h3>
          <p>폴더 안의 PDF, 엑셀, 문서 파일을 알아서 열어보고 내용을 파악합니다. 내가 일일이 복사해서 붙여넣을 필요가 없습니다.</p>
        </div>
        <div class="diff-card">
          <div class="diff-icon">📄</div>
          <h3>파일을 직접 만든다</h3>
          <p>수식이 들어간 엑셀, 슬라이드가 구성된 파워포인트, 서식이 갖춰진 보고서를 파일로 바로 생성합니다. 복사-붙여넣기가 필요 없습니다.</p>
        </div>
        <div class="diff-card">
          <div class="diff-icon">🔄</div>
          <h3>여러 단계를 알아서 처리</h3>
          <p>"이거 해줘"라고 한 마디 하면, 필요한 단계를 스스로 계획하고 순서대로 실행합니다. 중간중간 지시할 필요 없습니다.</p>
        </div>
        <div class="diff-card">
          <div class="diff-icon">⚡</div>
          <h3>서브에이전트로 병렬 처리</h3>
          <p>큰 작업을 여러 개의 작은 작업으로 쪼개서 동시에 처리합니다. 파일 10개를 분석해야 하면 한꺼번에 읽습니다.</p>
        </div>
      </div>
    </section>

    <!-- 서브에이전트 -->
    <section class="section-slide">
      <h2>⚡ 서브에이전트 병렬 처리란?</h2>
      <p>코워크는 혼자 일하는 게 아닙니다. 내부적으로 <strong>여러 개의 서브에이전트(보조원)</strong>를 동시에 띄워서 작업을 나눠 처리합니다.</p>

      <div class="parallel-comparison">
        <div class="parallel-card slow">
          <div class="parallel-header">
            <span class="parallel-badge slow-badge">🐢 일반 AI (순차 처리)</span>
          </div>
          <div class="parallel-flow">
            <span class="flow-item">PDF 1</span>
            <span class="flow-arrow">→</span>
            <span class="flow-item">PDF 2</span>
            <span class="flow-arrow">→</span>
            <span class="flow-item">PDF 3</span>
            <span class="flow-arrow">→</span>
            <span class="flow-item">...</span>
            <span class="flow-arrow">→</span>
            <span class="flow-item">PDF 10</span>
          </div>
          <div class="parallel-time">⏱ 오래 걸림</div>
        </div>

        <div class="parallel-card fast">
          <div class="parallel-header">
            <span class="parallel-badge fast-badge">🚀 코워크 (병렬 처리)</span>
          </div>
          <div class="agent-lanes">
            <div class="agent-lane">
              <span class="agent-label">에이전트 A</span>
              <div class="agent-items">
                <span>PDF 1</span><span>PDF 2</span><span>PDF 3</span>
              </div>
            </div>
            <div class="agent-lane">
              <span class="agent-label">에이전트 B</span>
              <div class="agent-items">
                <span>PDF 4</span><span>PDF 5</span><span>PDF 6</span>
              </div>
            </div>
            <div class="agent-lane">
              <span class="agent-label">에이전트 C</span>
              <div class="agent-items">
                <span>PDF 7</span><span>PDF 8</span><span>PDF 9</span><span>PDF 10</span>
              </div>
            </div>
          </div>
          <div class="parallel-merge">↓ 결과 종합 → 보고서 작성</div>
          <div class="parallel-time fast-time">⏱ 훨씬 빠름</div>
        </div>
      </div>

      <p style="margin-top: 16px;">파일이 많을수록, 작업이 복잡할수록 이 차이가 크게 벌어집니다.</p>
    </section>

    <!-- 작업 처리 흐름 -->
    <section class="section-slide">
      <h2>📋 작업 처리 흐름</h2>
      <p>코워크에 일을 시키면 이런 순서로 진행됩니다.</p>

      <div class="workflow-steps">
        <div class="workflow-step">
          <div class="workflow-number">1</div>
          <div class="workflow-content">
            <h4>목표 설명</h4>
            <p>자연어로 최종 목표를 적습니다</p>
          </div>
        </div>
        <div class="workflow-connector"></div>
        <div class="workflow-step">
          <div class="workflow-number">2</div>
          <div class="workflow-content">
            <h4>실행 계획 검토</h4>
            <p>Cowork가 단계별 계획을 제안합니다. 마음에 안 들면 수정하거나 범위를 좁힐 수 있습니다</p>
          </div>
        </div>
        <div class="workflow-connector"></div>
        <div class="workflow-step">
          <div class="workflow-number">3</div>
          <div class="workflow-content">
            <h4>승인</h4>
            <p>파일 삭제, 대규모 이동 같은 중요 작업은 별도 승인을 요청합니다. 승인 / 일부만 실행 / 취소 중에서 선택합니다</p>
          </div>
        </div>
        <div class="workflow-connector"></div>
        <div class="workflow-step">
          <div class="workflow-number">4</div>
          <div class="workflow-content">
            <h4>실행 및 모니터링</h4>
            <p>실시간으로 진행 상황을 보여줍니다. 중간에 중지하거나 새 지시를 줄 수 있습니다</p>
          </div>
        </div>
        <div class="workflow-connector"></div>
        <div class="workflow-step">
          <div class="workflow-number">5</div>
          <div class="workflow-content">
            <h4>결과 확인</h4>
            <p>완성된 파일을 폴더에서 직접 열어 확인합니다</p>
          </div>
        </div>
      </div>
    </section>

    <!-- 만들 수 있는 파일 종류 -->
    <section class="section-slide">
      <h2>📁 만들 수 있는 파일 종류</h2>

      <div class="file-grid">
        <div class="file-card">
          <div class="file-icon">📊</div>
          <div class="file-label">엑셀 (.xlsx)</div>
          <div class="file-desc">수식, 차트, 서식이 포함된 실제 엑셀 파일</div>
        </div>
        <div class="file-card">
          <div class="file-icon">📽️</div>
          <div class="file-label">파워포인트 (.pptx)</div>
          <div class="file-desc">슬라이드 구성이 적용된 발표 자료</div>
        </div>
        <div class="file-card">
          <div class="file-icon">📝</div>
          <div class="file-label">워드/텍스트</div>
          <div class="file-desc">보고서, 제안서, 문서 등</div>
        </div>
        <div class="file-card">
          <div class="file-icon">🗂️</div>
          <div class="file-label">CSV, JSON</div>
          <div class="file-desc">정리된 데이터 파일</div>
        </div>
        <div class="file-card">
          <div class="file-icon">📋</div>
          <div class="file-label">마크다운 (.md)</div>
          <div class="file-desc">깔끔하게 정리된 텍스트 문서</div>
        </div>
        <div class="file-card">
          <div class="file-icon">🌐</div>
          <div class="file-label">HTML</div>
          <div class="file-desc">웹페이지, 이메일 템플릿, 간단한 웹 앱</div>
        </div>
      </div>

      <div class="more-info">
        <p>위 목록은 대표적인 예시이며, 이 외에도 <strong>PDF, 이미지(SVG), Python 스크립트, SQL, XML</strong> 등 텍스트 기반 파일이라면 거의 모든 형식을 만들 수 있습니다. "이런 파일도 되나?" 싶으면 일단 요청해보세요.</p>
      </div>
    </section>

    <!-- 안전하게 쓰는 팁 -->
    <section class="section-slide">
      <h2>🛡️ 안전하게 쓰는 팁</h2>
      <div class="tip-grid">
        <div class="tip-card">
          <div class="tip-icon">📋</div>
          <h4>삭제/이동은 리스트를 먼저 확인</h4>
          <p>Cowork가 제안하는 목록을 검토한 다음 "이 항목들만 실행해줘"처럼 범위를 좁혀 지시하세요</p>
        </div>
        <div class="tip-card">
          <div class="tip-icon">🧪</div>
          <h4>테스트 폴더에서 먼저 연습</h4>
          <p>실제 업무 폴더에 적용하기 전, 복사한 테스트 폴더에서 먼저 돌려보세요</p>
        </div>
        <div class="tip-card">
          <div class="tip-icon">🇰🇷</div>
          <h4>한국어 조건 명시</h4>
          <p>"한글 파일 이름 유지해줘", "한국어로 작성해줘"처럼 명시하면 더 안정적입니다</p>
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

/* Diff grid */
.diff-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 16px;
  margin-top: 20px;
}
.diff-card {
  background: #f8fafc;
  border: 1px solid #e2e8f0;
  border-radius: 12px;
  padding: 24px;
  transition: border-color 0.2s, transform 0.2s;
}
.diff-card:hover {
  border-color: #93c5fd;
  transform: translateY(-2px);
}
.diff-icon {
  font-size: 2rem;
  margin-bottom: 12px;
}
.diff-card h3 {
  margin: 0 0 8px;
  font-size: 1.05rem;
  color: #1e293b;
}
.diff-card p {
  margin: 0;
  color: #64748b;
  font-size: 0.93rem;
  line-height: 1.6;
}

/* Parallel comparison */
.parallel-comparison {
  display: flex;
  flex-direction: column;
  gap: 16px;
  margin-top: 20px;
}
.parallel-card {
  border-radius: 12px;
  padding: 24px;
  border: 1px solid #e2e8f0;
}
.parallel-card.slow {
  background: #fef2f2;
  border-color: #fecaca;
}
.parallel-card.fast {
  background: #f0fdf4;
  border-color: #bbf7d0;
}
.parallel-header {
  margin-bottom: 16px;
}
.parallel-badge {
  font-weight: 700;
  font-size: 1.05rem;
  padding: 4px 12px;
  border-radius: 8px;
}
.slow-badge {
  background: #fee2e2;
  color: #991b1b;
}
.fast-badge {
  background: #dcfce7;
  color: #166534;
}
.parallel-flow {
  display: flex;
  align-items: center;
  gap: 8px;
  flex-wrap: wrap;
}
.flow-item {
  background: white;
  padding: 6px 14px;
  border-radius: 8px;
  font-size: 0.9rem;
  border: 1px solid #e2e8f0;
}
.flow-arrow {
  color: #94a3b8;
  font-weight: 700;
}
.parallel-time {
  margin-top: 12px;
  font-weight: 600;
  color: #991b1b;
}
.fast-time {
  color: #166534;
}

.agent-lanes {
  display: flex;
  flex-direction: column;
  gap: 10px;
}
.agent-lane {
  display: flex;
  align-items: center;
  gap: 12px;
}
.agent-label {
  font-weight: 600;
  font-size: 0.85rem;
  color: #166534;
  white-space: nowrap;
  min-width: 80px;
}
.agent-items {
  display: flex;
  gap: 6px;
  flex-wrap: wrap;
}
.agent-items span {
  background: white;
  padding: 4px 12px;
  border-radius: 6px;
  font-size: 0.85rem;
  border: 1px solid #bbf7d0;
}
.parallel-merge {
  margin-top: 14px;
  text-align: center;
  font-weight: 600;
  color: #166534;
  font-size: 0.95rem;
}

/* Workflow steps */
.workflow-steps {
  margin-top: 24px;
}
.workflow-step {
  display: flex;
  gap: 20px;
  align-items: flex-start;
}
.workflow-number {
  width: 44px;
  height: 44px;
  background: linear-gradient(135deg, #3b82f6, #2563eb);
  color: white;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.2rem;
  font-weight: 700;
  flex-shrink: 0;
}
.workflow-content {
  flex: 1;
  padding-top: 2px;
}
.workflow-content h4 {
  margin: 0 0 4px;
  font-size: 1.05rem;
  color: #1e293b;
}
.workflow-content p {
  margin: 0;
  color: #64748b;
  font-size: 0.93rem;
  line-height: 1.6;
}
.workflow-connector {
  width: 2px;
  height: 20px;
  background: #cbd5e1;
  margin-left: 21px;
}

/* File grid */
.file-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 14px;
  margin-top: 20px;
}
.file-card {
  background: #f8fafc;
  border: 1px solid #e2e8f0;
  border-radius: 12px;
  padding: 20px;
  text-align: center;
  transition: border-color 0.2s, transform 0.2s;
}
.file-card:hover {
  border-color: #93c5fd;
  transform: translateY(-2px);
}
.file-icon {
  font-size: 2rem;
  margin-bottom: 8px;
}
.file-label {
  font-weight: 700;
  font-size: 0.95rem;
  color: #1e293b;
  margin-bottom: 6px;
}
.file-desc {
  color: #64748b;
  font-size: 0.85rem;
  line-height: 1.5;
}

.more-info {
  margin-top: 16px;
  background: #f0f9ff;
  border: 1px solid #bfdbfe;
  border-radius: 10px;
  padding: 16px 20px;
}
.more-info p {
  margin: 0;
  line-height: 1.7;
  font-size: 0.93rem;
  color: #334155;
}

/* Tip grid */
.tip-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 14px;
  margin-top: 20px;
}
.tip-card {
  background: #f8fafc;
  border: 1px solid #e2e8f0;
  border-radius: 12px;
  padding: 20px;
  text-align: center;
  transition: border-color 0.2s, transform 0.2s;
}
.tip-card:hover {
  border-color: #93c5fd;
  transform: translateY(-2px);
}
.tip-icon {
  font-size: 2rem;
  margin-bottom: 10px;
}
.tip-card h4 {
  margin: 0 0 8px;
  font-size: 0.95rem;
  color: #1e293b;
}
.tip-card p {
  margin: 0;
  color: #64748b;
  font-size: 0.88rem;
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
  .diff-grid {
    grid-template-columns: 1fr;
  }
  .file-grid {
    grid-template-columns: 1fr 1fr;
  }
  .tip-grid {
    grid-template-columns: 1fr;
  }
  .agent-lane {
    flex-direction: column;
    align-items: flex-start;
    gap: 6px;
  }
  .section-slide {
    margin-bottom: 32px;
    padding-bottom: 32px;
  }
}
</style>
