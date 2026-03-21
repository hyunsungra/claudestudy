<template>
  <div class="page-content">
    <!-- Hero Section -->
    <div class="hero-section">
      <div class="hero-icon">⚡</div>
      <h1>서브에이전트로 대량 작성</h1>
      <p class="hero-desc">주제를 먼저 만들고, 확인 후 여러 글을 동시에 작성하는 방법입니다.</p>
    </div>

    <!-- 흐름 -->
    <section class="section-slide">
      <h2 class="section-title">흐름</h2>
      <div class="process-cards">
        <div class="process-card">
          <div class="process-num">1</div>
          <div class="process-body">
            <div class="process-label">주제 생성 요청</div>
            <div class="process-desc">"이번 달 블로그 주제 5개 만들어줘"</div>
          </div>
        </div>
        <div class="process-card">
          <div class="process-num">2</div>
          <div class="process-body">
            <div class="process-label">사용자 컨펌</div>
            <div class="process-desc">주제 목록을 확인하고 수정/승인</div>
          </div>
        </div>
        <div class="process-card">
          <div class="process-num">3</div>
          <div class="process-body">
            <div class="process-label">병렬 작성</div>
            <div class="process-desc">승인된 주제들을 서브에이전트가 동시에 작성</div>
          </div>
        </div>
        <div class="process-card">
          <div class="process-num">4</div>
          <div class="process-body">
            <div class="process-label">결과 확인</div>
            <div class="process-desc">output 폴더에 5개 글이 한 번에 생성됨</div>
          </div>
        </div>
      </div>
    </section>

    <!-- 실전 사용법 -->
    <section class="section-slide">
      <h2 class="section-title">실전 사용법</h2>

      <div class="prompt-card">
        <div class="prompt-badge step1">1. 주제 먼저 만들기</div>
        <div class="code-block good">
          <pre>"클라우드 업무 도구" 카테고리로
이번 달 블로그 주제 5개를 만들어줘.

조건:
- 검색량이 높을 만한 실용적인 주제
- 내 기존 글과 겹치지 않게 (topics.md 참고)
- 주제마다 핵심 키워드 3개도 같이 정리</pre>
        </div>
      </div>

      <p class="section-desc">Claude가 주제 5개를 제안합니다. 확인하고 수정할 것이 있으면 수정합니다.</p>

      <div class="prompt-card">
        <div class="prompt-badge step2">2. 확인 후 작성 지시</div>
        <div class="code-block good">
          <pre>좋아. 이 5개 주제로 전부 글 써줘.
내 스타일대로, 각각 output 폴더에 저장해줘.
topics.md도 업데이트해줘.</pre>
        </div>
      </div>
    </section>

    <!-- 서브에이전트가 동시에 작성 -->
    <section class="section-slide">
      <h2 class="section-title">서브에이전트가 동시에 작성</h2>

      <div class="parallel-visual">
        <div class="parallel-hub">
          <div class="hub-icon">🤖</div>
          <div class="hub-label">Claude</div>
        </div>
        <div class="parallel-branches">
          <div class="branch-item">
            <div class="branch-line"></div>
            <div class="branch-card">
              <span class="branch-tag">A</span>
              <span>클라우드 스토리지 비교</span>
            </div>
          </div>
          <div class="branch-item">
            <div class="branch-line"></div>
            <div class="branch-card">
              <span class="branch-tag">B</span>
              <span>팀 협업 도구 추천</span>
            </div>
          </div>
          <div class="branch-item">
            <div class="branch-line"></div>
            <div class="branch-card">
              <span class="branch-tag">C</span>
              <span>자동화 도구 활용법</span>
            </div>
          </div>
          <div class="branch-item">
            <div class="branch-line"></div>
            <div class="branch-card">
              <span class="branch-tag">D</span>
              <span>보안 체크리스트</span>
            </div>
          </div>
          <div class="branch-item">
            <div class="branch-line"></div>
            <div class="branch-card">
              <span class="branch-tag">E</span>
              <span>비용 절감 사례</span>
            </div>
          </div>
        </div>
      </div>

      <div class="speed-card">
        <span class="speed-icon">🚀</span>
        <span>하나씩 순서대로 쓰는 게 아니라 <strong>동시에 작성</strong>하기 때문에, 5개를 써도 1개 쓰는 시간과 비슷합니다.</span>
      </div>
    </section>

    <!-- 완성 후 일괄 검토 -->
    <section class="section-slide">
      <h2 class="section-title">완성 후 일괄 검토</h2>

      <div class="prompt-card">
        <div class="prompt-badge review">검토 요청</div>
        <div class="code-block">
          <pre>output 폴더에 오늘 만든 글들을 전부 읽고,
각 글의 품질을 체크해줘.

체크 항목:
- 내 글쓰기 스타일과 맞는지
- 내용이 충분한지
- 오탈자나 어색한 표현은 없는지

문제가 있는 부분만 알려줘.</pre>
        </div>
      </div>

      <div class="check-grid">
        <div class="check-item">
          <span class="check-icon">🎨</span>
          <span class="check-label">스타일 일치</span>
        </div>
        <div class="check-item">
          <span class="check-icon">📊</span>
          <span class="check-label">내용 충분</span>
        </div>
        <div class="check-item">
          <span class="check-icon">✏️</span>
          <span class="check-label">맞춤법/표현</span>
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
.section-title { font-size: 1.5rem; font-weight: 700; color: #1e293b; margin-bottom: 16px; }
.section-desc { color: #475569; font-size: 1.05rem; line-height: 1.7; margin-bottom: 20px; }

/* Process Cards */
.process-cards { display: grid; grid-template-columns: repeat(4, 1fr); gap: 14px; }
.process-card {
  background: #f8fafc;
  border: 1px solid #e2e8f0;
  border-radius: 12px;
  padding: 20px 16px;
  text-align: center;
  transition: border-color 0.2s, transform 0.2s;
}
.process-card:hover { border-color: #93c5fd; transform: translateY(-2px); }
.process-num {
  width: 36px; height: 36px;
  background: linear-gradient(135deg, #3b82f6, #2563eb);
  color: #fff; border-radius: 50%;
  display: flex; align-items: center; justify-content: center;
  font-weight: 700; font-size: 0.95rem;
  margin: 0 auto 12px;
}
.process-label { font-weight: 700; color: #1e293b; font-size: 0.95rem; margin-bottom: 6px; }
.process-desc { color: #64748b; font-size: 0.85rem; line-height: 1.5; }

/* Prompt Card */
.prompt-card {
  background: #f8fafc;
  border: 1px solid #e2e8f0;
  border-radius: 12px;
  padding: 20px 24px;
  margin-bottom: 20px;
}
.prompt-badge {
  display: inline-block;
  padding: 3px 12px;
  border-radius: 16px;
  font-weight: 700;
  font-size: 0.85rem;
  margin-bottom: 12px;
}
.prompt-badge.step1 { background: #dbeafe; color: #1d4ed8; }
.prompt-badge.step2 { background: #dcfce7; color: #15803d; }
.prompt-badge.review { background: #fef3c7; color: #92400e; }

/* Parallel Visual */
.parallel-visual {
  display: flex;
  align-items: flex-start;
  gap: 24px;
  margin-bottom: 20px;
  padding: 24px;
  background: #f8fafc;
  border: 1px solid #e2e8f0;
  border-radius: 12px;
}
.parallel-hub {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 6px;
  flex-shrink: 0;
  padding-top: 40px;
}
.hub-icon { font-size: 2.2rem; }
.hub-label { font-weight: 700; color: #1e293b; font-size: 0.95rem; }
.parallel-branches {
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 8px;
}
.branch-item { display: flex; align-items: center; gap: 8px; }
.branch-line {
  width: 30px;
  height: 2px;
  background: #cbd5e1;
  flex-shrink: 0;
}
.branch-card {
  display: flex;
  align-items: center;
  gap: 10px;
  background: #fff;
  border: 1px solid #e2e8f0;
  border-radius: 8px;
  padding: 10px 16px;
  flex: 1;
  font-size: 0.9rem;
  color: #334155;
  transition: border-color 0.2s;
}
.branch-card:hover { border-color: #93c5fd; }
.branch-tag {
  flex-shrink: 0;
  width: 26px; height: 26px;
  background: #e0e7ff;
  color: #3730a3;
  border-radius: 50%;
  display: flex; align-items: center; justify-content: center;
  font-weight: 700; font-size: 0.78rem;
}

/* Speed Card */
.speed-card {
  display: flex;
  gap: 10px;
  align-items: center;
  background: linear-gradient(135deg, #eff6ff, #dbeafe);
  border: 1px solid #93c5fd;
  border-radius: 12px;
  padding: 16px 20px;
  font-size: 0.95rem;
  color: #1e40af;
}
.speed-icon { font-size: 1.3rem; flex-shrink: 0; }

/* Check Grid */
.check-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 14px;
}
.check-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  background: #f8fafc;
  border: 1px solid #e2e8f0;
  border-radius: 12px;
  padding: 20px 14px;
  transition: border-color 0.2s, transform 0.2s;
}
.check-item:hover { border-color: #93c5fd; transform: translateY(-2px); }
.check-icon { font-size: 1.6rem; }
.check-label { font-weight: 700; color: #1e293b; font-size: 0.9rem; }

@media (max-width: 768px) {
  .hero-section { padding: 32px 18px 28px; }
  .hero-section h1 { font-size: 1.4rem; }
  .process-cards { grid-template-columns: repeat(2, 1fr); }
  .parallel-visual { flex-direction: column; align-items: center; gap: 16px; }
  .parallel-hub { padding-top: 0; flex-direction: row; gap: 10px; }
  .branch-line { width: 20px; }
  .check-grid { grid-template-columns: 1fr; }
}
</style>
