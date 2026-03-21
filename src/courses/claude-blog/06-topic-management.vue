<template>
  <div class="page-content">
    <!-- Hero Section -->
    <div class="hero-section">
      <div class="hero-icon">📋</div>
      <h1>주제 관리와 진행 추적</h1>
      <p class="hero-desc">어떤 주제를 썼고 안 썼는지 추적하는 시스템을 만드는 방법입니다.</p>
    </div>

    <!-- 왜 필요한가 -->
    <section class="section-slide">
      <h2 class="section-title">왜 필요한가?</h2>
      <div class="why-cards">
        <div class="why-card">
          <div class="why-icon">🤔</div>
          <div class="why-text">"이 주제 썼던가?"</div>
        </div>
        <div class="why-card">
          <div class="why-icon">😵</div>
          <div class="why-text">"다음에 뭘 쓰지?"</div>
        </div>
        <div class="why-arrow">↓</div>
        <div class="why-card solution">
          <div class="why-icon">✅</div>
          <div class="why-text">주제 목록을 관리하는 md 파일을 만들면, 작성 여부를 체크하면서 체계적으로 운영 가능!</div>
        </div>
      </div>
    </section>

    <!-- 주제 목록 파일 만들기 -->
    <section class="section-slide">
      <h2 class="section-title">주제 목록 파일 만들기</h2>

      <div class="prompt-card">
        <div class="prompt-badge request">Claude에게 요청</div>
        <div class="code-block good">
          <pre>블로그 주제 관리 파일을 만들어줘.

형식:
- 체크박스로 작성 완료 여부 표시
- 주제, 상태(미작성/작성중/완료), 작성일
- topics.md 파일로 저장

일단 "AI 업무 활용" 카테고리로
주제 10개를 만들어줘.</pre>
        </div>
      </div>

      <div class="topics-preview">
        <div class="topics-header">
          <span class="topics-file">📄 topics.md</span>
          <span class="topics-badge">미리보기</span>
        </div>
        <div class="topics-body">
          <div class="topics-category">AI 업무 활용</div>
          <div class="topic-row done">
            <span class="topic-status">✅</span>
            <span class="topic-name">직장인이 AI를 배워야 하는 이유</span>
            <span class="topic-date">2026-03-15</span>
          </div>
          <div class="topic-row done">
            <span class="topic-status">✅</span>
            <span class="topic-name">ChatGPT vs Claude 솔직 비교</span>
            <span class="topic-date">2026-03-17</span>
          </div>
          <div class="topic-row pending">
            <span class="topic-status">⬜</span>
            <span class="topic-name">AI로 이메일 작성 시간 줄이기</span>
            <span class="topic-date">-</span>
          </div>
          <div class="topic-row pending">
            <span class="topic-status">⬜</span>
            <span class="topic-name">회의록 자동 정리하는 방법</span>
            <span class="topic-date">-</span>
          </div>
          <div class="topic-row pending">
            <span class="topic-status">⬜</span>
            <span class="topic-name">AI 프롬프트 잘 쓰는 5가지 원칙</span>
            <span class="topic-date">-</span>
          </div>
          <div class="topic-row pending">
            <span class="topic-status">⬜</span>
            <span class="topic-name">비개발자도 할 수 있는 업무 자동화</span>
            <span class="topic-date">-</span>
          </div>
          <div class="topic-row pending">
            <span class="topic-status">⬜</span>
            <span class="topic-name">AI 시대에 살아남는 직장인의 조건</span>
            <span class="topic-date">-</span>
          </div>
          <div class="topic-row pending">
            <span class="topic-status">⬜</span>
            <span class="topic-name">하루 30분 AI 학습 루틴 만들기</span>
            <span class="topic-date">-</span>
          </div>
          <div class="topic-row pending">
            <span class="topic-status">⬜</span>
            <span class="topic-name">AI로 데이터 분석하는 실전 사례</span>
            <span class="topic-date">-</span>
          </div>
          <div class="topic-row pending">
            <span class="topic-status">⬜</span>
            <span class="topic-name">우리 팀에 AI 도입하기 설득 가이드</span>
            <span class="topic-date">-</span>
          </div>
        </div>
      </div>
    </section>

    <!-- 작업 흐름 -->
    <section class="section-slide">
      <h2 class="section-title">작업 흐름</h2>
      <div class="flow-steps">
        <div class="flow-step">
          <div class="flow-num">1</div>
          <div class="flow-body">
            <div class="flow-label">미작성 주제 확인</div>
            <div class="flow-cmd">"topics.md에서 아직 안 쓴 주제 보여줘"</div>
          </div>
        </div>
        <div class="flow-step">
          <div class="flow-num">2</div>
          <div class="flow-body">
            <div class="flow-label">주제 선택 또는 추천</div>
            <div class="flow-cmd">"이 중에서 지금 쓰기 좋은 주제 추천해줘"</div>
          </div>
        </div>
        <div class="flow-step">
          <div class="flow-num">3</div>
          <div class="flow-body">
            <div class="flow-label">주제 확인 (컨펌)</div>
            <div class="flow-cmd">"3번 주제로 쓰자"</div>
          </div>
        </div>
        <div class="flow-step">
          <div class="flow-num">4</div>
          <div class="flow-body">
            <div class="flow-label">글 작성 후 자동 업데이트</div>
            <div class="flow-cmd">상태: ⬜ → ✅, 작성일 자동 기입</div>
          </div>
        </div>
      </div>
    </section>

    <!-- 자동화 스킬 -->
    <section class="section-slide">
      <h2 class="section-title">자동화 스킬로 만들기</h2>

      <div class="prompt-card">
        <div class="prompt-badge upgrade">주제 관리까지 포함된 스킬 요청</div>
        <div class="code-block good">
          <pre>blog-write 스킬을 업그레이드해줘.

실행하면 이 순서로 동작:
1. topics.md에서 미작성 주제 목록을 보여줌
2. 사용자가 주제를 선택하거나 새 주제를 입력
3. 선택된 주제로 블로그 글 작성
4. output 폴더에 파일 저장
5. topics.md의 해당 주제 상태를 ✅로 업데이트</pre>
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

/* Why Cards */
.why-cards { display: flex; flex-direction: column; align-items: center; gap: 12px; }
.why-card {
  display: flex;
  align-items: center;
  gap: 12px;
  background: #f8fafc;
  border: 1px solid #e2e8f0;
  border-radius: 12px;
  padding: 16px 24px;
  width: 100%;
  max-width: 480px;
  transition: border-color 0.2s;
}
.why-card:hover { border-color: #93c5fd; }
.why-card.solution {
  background: linear-gradient(135deg, #f0fdf4, #dcfce7);
  border-color: #86efac;
  max-width: 100%;
}
.why-icon { font-size: 1.5rem; flex-shrink: 0; }
.why-text { color: #334155; font-size: 1rem; }
.why-arrow { font-size: 1.3rem; color: #94a3b8; }

/* Prompt Card */
.prompt-card {
  background: #f8fafc;
  border: 1px solid #e2e8f0;
  border-radius: 12px;
  padding: 20px 24px;
  margin-bottom: 24px;
}
.prompt-badge {
  display: inline-block;
  padding: 3px 12px;
  border-radius: 16px;
  font-weight: 700;
  font-size: 0.85rem;
  margin-bottom: 12px;
}
.prompt-badge.request { background: #dbeafe; color: #1d4ed8; }
.prompt-badge.upgrade { background: #fce7f3; color: #be185d; }

/* Topics Preview */
.topics-preview {
  background: #f8fafc;
  border: 1px solid #e2e8f0;
  border-radius: 12px;
  overflow: hidden;
}
.topics-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 14px 20px;
  background: #f1f5f9;
  border-bottom: 1px solid #e2e8f0;
}
.topics-file { font-weight: 700; color: #1e293b; font-size: 0.95rem; }
.topics-badge {
  font-size: 0.78rem;
  padding: 2px 10px;
  background: #e0e7ff;
  color: #3730a3;
  border-radius: 10px;
  font-weight: 600;
}
.topics-body { padding: 16px 20px; }
.topics-category {
  font-weight: 700;
  color: #1e293b;
  font-size: 1.05rem;
  margin-bottom: 12px;
  padding-bottom: 8px;
  border-bottom: 1px solid #e2e8f0;
}
.topic-row {
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 8px 4px;
  border-bottom: 1px solid #f1f5f9;
  font-size: 0.93rem;
}
.topic-row:last-child { border-bottom: none; }
.topic-status { font-size: 1rem; flex-shrink: 0; }
.topic-name { flex: 1; color: #334155; }
.topic-date { color: #94a3b8; font-size: 0.85rem; min-width: 80px; text-align: right; }
.topic-row.done .topic-name { color: #6b7280; }

/* Flow Steps */
.flow-steps { display: flex; flex-direction: column; gap: 14px; }
.flow-step {
  display: flex;
  align-items: flex-start;
  gap: 16px;
  background: #f8fafc;
  border: 1px solid #e2e8f0;
  border-radius: 12px;
  padding: 18px 22px;
  transition: border-color 0.2s, transform 0.2s;
}
.flow-step:hover { border-color: #93c5fd; transform: translateY(-2px); }
.flow-num {
  flex-shrink: 0;
  width: 36px; height: 36px;
  background: linear-gradient(135deg, #3b82f6, #2563eb);
  color: #fff; border-radius: 50%;
  display: flex; align-items: center; justify-content: center;
  font-weight: 700; font-size: 0.95rem;
}
.flow-body { flex: 1; }
.flow-label { font-weight: 700; color: #1e293b; font-size: 0.98rem; margin-bottom: 4px; }
.flow-cmd { color: #64748b; font-size: 0.9rem; font-style: italic; }

@media (max-width: 768px) {
  .hero-section { padding: 32px 18px 28px; }
  .hero-section h1 { font-size: 1.4rem; }
  .why-card { max-width: 100%; }
  .topic-date { display: none; }
  .flow-step { padding: 14px 16px; gap: 12px; }
}
</style>
