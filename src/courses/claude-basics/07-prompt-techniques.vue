<template>
  <div class="page-content">
    <!-- Hero Section -->
    <div class="hero-section">
      <div class="hero-icon">🎯</div>
      <h1>효과적인 프롬프트 작성법</h1>
      <p class="hero-desc">AI에게 좋은 결과를 받는 비결은 딱 하나, <strong>구조</strong>입니다.</p>
    </div>

    <!-- 핵심: 입력 → 처리 → 출력 -->
    <section>
      <h2>핵심은 단 하나: 입력 → 처리 → 출력</h2>
      <p>AI를 잘 쓰는 사람과 못 쓰는 사람의 차이는 이 구조를 아느냐 모르느냐에 달려있습니다. 복잡한 기술이 아닙니다. <strong>입력</strong>(배경 설명) → <strong>처리</strong>(구체적 지시) → <strong>출력</strong>(원하는 형태) — 이 세 가지만 갖추면 AI의 답변 품질이 완전히 달라집니다.</p>

      <div class="highlight-box">
        <p>이 페이지에서 배우는 것은 이 구조 하나뿐입니다. 하지만 이것만 제대로 익히면 <strong>어떤 AI를 쓰든, 어떤 질문을 하든</strong> 원하는 답을 받을 수 있습니다.</p>
      </div>

      <div class="ipo-flow">
        <div class="ipo-card input">
          <div class="ipo-emoji">📥</div>
          <div class="ipo-label">입력 (Input)</div>
          <div class="ipo-title">역할 + 맥락</div>
          <div class="ipo-desc">AI에게 누구인지, 어떤 상황인지 알려줍니다</div>
        </div>
        <div class="ipo-arrow">→</div>
        <div class="ipo-card process">
          <div class="ipo-emoji">⚙️</div>
          <div class="ipo-label">처리 (Process)</div>
          <div class="ipo-title">지시</div>
          <div class="ipo-desc">무엇을 해야 하는지 구체적으로 명령합니다</div>
        </div>
        <div class="ipo-arrow">→</div>
        <div class="ipo-card output">
          <div class="ipo-emoji">📤</div>
          <div class="ipo-label">출력 (Output)</div>
          <div class="ipo-title">출력 형식</div>
          <div class="ipo-desc">결과물의 형태와 조건을 지정합니다</div>
        </div>
      </div>

      <div class="tip-box">
        <span class="tip-icon">💡</span>
        <p>같은 질문이라도 이 3단계를 갖춰서 물으면 훨씬 정확하고 유용한 답변을 받을 수 있습니다. <strong>프롬프트 잘 쓰는 법 = 이 구조를 습관으로 만드는 것</strong>입니다.</p>
      </div>
    </section>

    <!-- 1단계: 입력 -->
    <section>
      <h2>1단계: 입력 — 역할과 맥락 설정</h2>
      <p>AI에게 <strong>배경 정보</strong>를 먼저 제공합니다. "누가" 그리고 "어떤 상황에서" — 이 두 가지가 입력입니다.</p>

      <div class="input-cards">
        <div class="input-card">
          <div class="input-card-header">
            <span class="input-card-icon">🎭</span>
            <strong>역할</strong>
          </div>
          <p class="input-card-role">AI가 어떤 입장에서 답할지 설정</p>
          <div class="input-card-example">"당신은 건강 식단을 잘 아는 영양 상담사입니다"</div>
        </div>
        <div class="input-card">
          <div class="input-card-header">
            <span class="input-card-icon">📋</span>
            <strong>맥락</strong>
          </div>
          <p class="input-card-role">상황과 조건을 설명</p>
          <div class="input-card-example">"저는 혼자 사는 30대 직장인이고, 요리를 잘 못합니다"</div>
        </div>
      </div>

      <div class="code-block good">
        <p class="code-label">입력 예시</p>
        <pre>당신은 건강 식단을 잘 아는 영양 상담사입니다.

[상황]
- 저는 혼자 사는 30대 직장인입니다
- 요리를 거의 못하고, 간단한 것만 만들 수 있습니다
- 최근 건강검진에서 콜레스테롤 수치가 높다는 결과를 받았습니다</pre>
      </div>
      <p>역할과 맥락이 구체적일수록, AI는 더 정확한 관점에서 답변합니다. 내 상황을 자세히 알려줄수록 나에게 딱 맞는 답을 받을 수 있습니다.</p>
    </section>

    <!-- 2단계: 처리 -->
    <section>
      <h2>2단계: 처리 — 명확한 지시</h2>
      <p>프로그램의 로직에 해당합니다. <strong>"무엇을 해라"</strong>를 구체적으로 명령합니다. 모호하면 결과도 모호합니다.</p>

      <div class="diff-rows">
        <div class="diff-row">
          <div class="diff-cell bad-cell">
            <span class="diff-badge bad-badge">❌ 모호</span>
            "로그인 기능 만들어줘"
          </div>
          <div class="diff-cell good-cell">
            <span class="diff-badge good-badge">✅ 구체적</span>
            "JWT 기반 로그인 컴포넌트를 작성해주세요. 이메일/비밀번호 입력 폼, 유효성 검사, 에러 처리를 포함해주세요"
          </div>
        </div>
        <div class="diff-row">
          <div class="diff-cell bad-cell">
            <span class="diff-badge bad-badge">❌ 모호</span>
            "마케팅 전략 알려줘"
          </div>
          <div class="diff-cell good-cell">
            <span class="diff-badge good-badge">✅ 구체적</span>
            "월 500만원 예산으로 인스타그램 중심의 3개월 마케팅 전략을 수립해주세요"
          </div>
        </div>
      </div>

      <div class="code-block good">
        <p class="code-label">처리 예시</p>
        <pre>위 상황에 맞는 로그인 페이지를 작성해주세요.

[요구사항]
1. 이메일/비밀번호 입력 폼
2. 입력값 유효성 검사 (이메일 형식, 비밀번호 8자 이상)
3. 로그인 API 호출 및 JWT 토큰 저장
4. 에러 발생 시 사용자에게 메시지 표시</pre>
      </div>
    </section>

    <!-- 3단계: 출력 -->
    <section>
      <h2>3단계: 출력 — 결과물 형식 지정</h2>
      <p>AI에게 <strong>결과물의 형태</strong>를 미리 지정합니다. 이걸 빼먹으면 AI가 알아서 형식을 정하기 때문에 원하는 결과가 나오지 않을 수 있습니다.</p>

      <div class="code-block good">
        <p class="code-label">출력 형식 예시</p>
        <pre>[출력 형식]
- 1주일 식단표를 표로 정리해주세요
- 각 식사별 간단한 조리법도 함께 알려주세요
- 장보기 목록을 따로 정리해주세요
- 한 끼 준비 시간이 20분을 넘지 않는 메뉴로 구성해주세요</pre>
      </div>

      <h3>자주 쓰는 출력 형식</h3>
      <div class="format-grid">
        <div class="format-card">
          <div class="format-icon">📝</div>
          <strong>요약이 필요할 때</strong>
          <p>"3줄 이내로 요약", "핵심만 간단히 정리"</p>
        </div>
        <div class="format-card">
          <div class="format-icon">📊</div>
          <strong>비교가 필요할 때</strong>
          <p>"표로 정리", "장단점을 나눠서 비교"</p>
        </div>
        <div class="format-card">
          <div class="format-icon">📅</div>
          <strong>계획 세울 때</strong>
          <p>"주차별로 나눠서", "체크리스트 형태로"</p>
        </div>
        <div class="format-card">
          <div class="format-icon">📄</div>
          <strong>문서 작성</strong>
          <p>"경어체", "A4 1장 분량", "제목-본문-결론 구조"</p>
        </div>
      </div>
    </section>

    <!-- 전체 패턴 조합 예시 -->
    <section>
      <h2>전체 패턴 조합 예시</h2>
      <p>3단계를 하나로 합치면 이렇게 됩니다:</p>

      <div class="compare-container">
        <div class="compare-card bad">
          <div class="compare-header bad-header">
            <span class="compare-icon">❌</span>
            <span>패턴 없이 작성</span>
          </div>
          <div class="compare-body">
            <pre>마케팅 전략 알려줘</pre>
          </div>
        </div>
        <div class="compare-card good">
          <div class="compare-header good-header">
            <span class="compare-icon">✅</span>
            <span>입력 → 처리 → 출력 패턴 적용</span>
          </div>
          <div class="compare-body">
            <pre>[입력 - 역할/맥락]
당신은 디지털 마케팅 전문가입니다.
우리는 월 예산 500만원의 온라인 여성 의류 쇼핑몰이고,
주요 고객은 25~35세 여성, 인스타그램 팔로워 5,000명입니다.

[처리 - 지시]
3개월간의 단계별 마케팅 전략을 수립해주세요.
각 월별 목표, 핵심 채널, 구체적인 실행 방안을 포함해주세요.

[출력 - 형식]
월별로 표로 정리하고, 각 월의 예산 배분도 포함해주세요.
핵심 KPI 3개를 함께 제시해주세요.</pre>
          </div>
        </div>
      </div>
    </section>

    <!-- 이 패턴이 강력한 이유 -->
    <section>
      <h2>이 패턴이 강력한 이유</h2>
      <div class="strength-grid">
        <div class="strength-card">
          <div class="strength-icon">🌍</div>
          <h3>어디에나 적용 가능</h3>
          <p>Claude뿐 아니라 ChatGPT, Gemini 등 어떤 AI 도구에서도 동일하게 작동합니다. 도구가 바뀌어도 패턴은 그대로입니다.</p>
        </div>
        <div class="strength-card">
          <div class="strength-icon">🔍</div>
          <h3>문제 찾기가 쉽다</h3>
          <p>결과가 마음에 안 들면 어느 단계가 문제인지 바로 파악할 수 있습니다. 맥락이 부족한지, 지시가 모호한지, 출력 형식이 빠졌는지.</p>
        </div>
        <div class="strength-card">
          <div class="strength-icon">♻️</div>
          <h3>재사용할 수 있다</h3>
          <p>잘 만든 프롬프트는 템플릿으로 저장해두고 입력값만 바꿔서 재사용할 수 있습니다.</p>
        </div>
        <div class="strength-card">
          <div class="strength-icon">🧩</div>
          <h3>프로그래밍 사고와 동일</h3>
          <p>함수(입력 → 처리 → 반환), API(요청 → 로직 → 응답), 파이프라인(수집 → 변환 → 적재) — 전부 같은 구조입니다.</p>
        </div>
      </div>
    </section>

    <!-- 추가 팁 -->
    <section>
      <h2>추가 팁</h2>

      <!-- 반복 개선하기 -->
      <div class="tip-section">
        <div class="tip-section-header">
          <span class="tip-section-icon">🔄</span>
          <h3>반복 개선하기</h3>
        </div>
        <p>한 번에 완벽할 필요 없습니다. 대화를 이어가며 결과를 다듬으세요.</p>
        <div class="iteration-steps">
          <div class="iteration-step">
            <div class="iter-number">1차</div>
            <div class="iter-text">패턴대로 프롬프트 작성 → 초안 받기</div>
          </div>
          <div class="iteration-step">
            <div class="iter-number">2차</div>
            <div class="iter-text">"더 간결하게 줄여주세요"</div>
          </div>
          <div class="iteration-step">
            <div class="iter-number">3차</div>
            <div class="iter-text">"톤을 좀 더 친근하게 바꿔주세요"</div>
          </div>
          <div class="iteration-step">
            <div class="iter-number">4차</div>
            <div class="iter-text">"표 형식으로 다시 정리해주세요"</div>
          </div>
        </div>
      </div>

      <!-- 부정문보다 긍정문 -->
      <div class="tip-section">
        <div class="tip-section-header">
          <span class="tip-section-icon">✨</span>
          <h3>부정문보다 긍정문</h3>
        </div>
        <p>"하지 마"보다 "이렇게 해"가 AI에게 더 명확합니다.</p>
        <div class="diff-rows">
          <div class="diff-row">
            <div class="diff-cell bad-cell">
              <span class="diff-badge bad-badge">❌ 비추천</span>
              "어려운 용어를 쓰지 마세요"
            </div>
            <div class="diff-cell good-cell">
              <span class="diff-badge good-badge">✅ 추천</span>
              "중학생도 이해할 수 있는 쉬운 말로 설명해주세요"
            </div>
          </div>
          <div class="diff-row">
            <div class="diff-cell bad-cell">
              <span class="diff-badge bad-badge">❌ 비추천</span>
              "길게 쓰지 마세요"
            </div>
            <div class="diff-cell good-cell">
              <span class="diff-badge good-badge">✅ 추천</span>
              "3문장 이내로 작성해주세요"
            </div>
          </div>
        </div>
      </div>

      <!-- Few-shot -->
      <div class="tip-section">
        <div class="tip-section-header">
          <span class="tip-section-icon">📎</span>
          <h3>Few-shot: 예시를 보여주기</h3>
        </div>
        <p>원하는 결과의 <strong>예시를 먼저 보여주면</strong> AI가 패턴을 파악하여 일관된 결과를 만들어냅니다.</p>
        <div class="code-block good">
          <p class="code-label">Few-shot 예시</p>
          <pre>다음 형식으로 제품 설명을 작성해주세요:

[예시]
제품: 무선 이어폰
설명: 일상에 음악을 더하다. 가벼운 착용감과 깊은 사운드로
어디서든 나만의 음악 세계에 빠져보세요.

[작성 요청]
제품: 노트북 거치대</pre>
        </div>
      </div>
    </section>

    <!-- 실습 -->
    <section>
      <h2>실습</h2>
      <div class="practice-box">
        <div class="practice-header">
          <span class="practice-icon">🎯</span>
          <div>
            <strong>입력 → 처리 → 출력 패턴을 적용해보세요</strong>
            <p>아래 프롬프트를 개선해보세요.</p>
          </div>
        </div>
        <div class="compare-card bad" style="margin-bottom: 20px;">
          <div class="compare-header bad-header">
            <span class="compare-icon">❌</span>
            <span>개선 전</span>
          </div>
          <div class="compare-body">
            <pre>자기소개서 써줘</pre>
          </div>
        </div>
        <div class="hint-box">
          <span class="hint-label">💡 힌트</span>
          <div class="hint-items">
            <div class="hint-item">
              <strong>입력</strong> — 어떤 회사, 어떤 직무에 지원하는지? 본인의 경력은?
            </div>
            <div class="hint-item">
              <strong>처리</strong> — 어떤 내용을 강조할지, 어떤 구조로 작성할지?
            </div>
            <div class="hint-item">
              <strong>출력</strong> — 분량, 어투, 형식은?
            </div>
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
  margin-bottom: 0 !important;
}
.hero-desc strong {
  color: #e2e8f0;
}

/* === Highlight Box === */
.highlight-box {
  background: linear-gradient(135deg, #fef3c7 0%, #fde68a 100%);
  border: 2px solid #f59e0b;
  border-radius: 12px;
  padding: 18px 22px;
  margin: 20px 0 8px;
  text-align: center;
}
.highlight-box p {
  margin: 0;
  font-size: 1.02rem;
  color: #92400e;
  line-height: 1.7;
}

/* === IPO Flow Diagram === */
.ipo-flow {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  margin: 28px 0;
  flex-wrap: wrap;
}
.ipo-card {
  flex: 1;
  min-width: 180px;
  max-width: 260px;
  padding: 24px 20px;
  border-radius: 14px;
  text-align: center;
  border: 2px solid;
  transition: transform 0.2s;
}
.ipo-card:hover {
  transform: translateY(-3px);
}
.ipo-card.input {
  background: #eff6ff;
  border-color: #93c5fd;
}
.ipo-card.process {
  background: #fef3c7;
  border-color: #fcd34d;
}
.ipo-card.output {
  background: #ecfdf5;
  border-color: #6ee7b7;
}
.ipo-emoji {
  font-size: 1.8rem;
  margin-bottom: 8px;
}
.ipo-label {
  font-size: 0.72rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  margin-bottom: 6px;
}
.ipo-card.input .ipo-label { color: #2563eb; }
.ipo-card.process .ipo-label { color: #d97706; }
.ipo-card.output .ipo-label { color: #059669; }
.ipo-title {
  font-size: 1.15rem;
  font-weight: 800;
  color: #1e293b;
  margin-bottom: 6px;
}
.ipo-desc {
  font-size: 0.82rem;
  color: #64748b;
  line-height: 1.5;
}
.ipo-arrow {
  font-size: 1.6rem;
  color: #94a3b8;
  font-weight: 700;
  flex-shrink: 0;
}

/* === Tip Box === */
.tip-box {
  display: flex;
  align-items: center;
  gap: 12px;
  background: #eff6ff;
  border: 1px solid #bfdbfe;
  border-radius: 12px;
  padding: 16px 20px;
  margin-top: 16px;
}
.tip-icon {
  font-size: 1.3rem;
  flex-shrink: 0;
  line-height: 1.6;
}
.tip-box p {
  margin: 0;
  font-size: 0.95rem;
  color: #1e40af;
  line-height: 1.6;
}

/* === Input Cards (role/context) === */
.input-cards {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 16px;
  margin: 20px 0;
}
.input-card {
  background: #f8fafc;
  border: 1px solid #e2e8f0;
  border-radius: 14px;
  padding: 20px;
  transition: border-color 0.2s, transform 0.2s;
}
.input-card:hover {
  border-color: #93c5fd;
  transform: translateY(-2px);
}
.input-card-header {
  display: flex;
  align-items: center;
  gap: 10px;
  margin-bottom: 8px;
}
.input-card-icon {
  font-size: 1.4rem;
}
.input-card-header strong {
  font-size: 1rem;
  color: #1e293b;
}
.input-card-role {
  font-size: 0.88rem;
  color: #64748b;
  margin-bottom: 12px;
}
.input-card-example {
  background: #fff;
  border: 1px solid #e2e8f0;
  border-radius: 8px;
  padding: 10px 14px;
  font-size: 0.85rem;
  color: #475569;
  font-style: italic;
  line-height: 1.5;
}

/* === Diff Rows (comparison) === */
.diff-rows {
  display: flex;
  flex-direction: column;
  gap: 12px;
  margin: 16px 0;
}
.diff-row {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 12px;
}
.diff-cell {
  padding: 14px 16px;
  border-radius: 10px;
  font-size: 0.88rem;
  line-height: 1.6;
  color: #374151;
}
.bad-cell {
  background: #fef2f2;
  border: 1px solid #fecaca;
}
.good-cell {
  background: #f0fdf4;
  border: 1px solid #bbf7d0;
}
.diff-badge {
  display: inline-block;
  font-size: 0.72rem;
  font-weight: 700;
  padding: 2px 8px;
  border-radius: 4px;
  margin-right: 6px;
  margin-bottom: 4px;
}
.bad-badge {
  background: #fee2e2;
  color: #dc2626;
}
.good-badge {
  background: #dcfce7;
  color: #16a34a;
}

/* === Format Grid === */
.format-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 14px;
  margin-top: 16px;
}
.format-card {
  background: #f8fafc;
  border: 1px solid #e2e8f0;
  border-radius: 12px;
  padding: 18px 16px;
  transition: border-color 0.2s, transform 0.2s;
}
.format-card:hover {
  border-color: #93c5fd;
  transform: translateY(-2px);
}
.format-icon {
  font-size: 1.5rem;
  margin-bottom: 8px;
}
.format-card strong {
  display: block;
  font-size: 0.92rem;
  color: #1e293b;
  margin-bottom: 4px;
}
.format-card p {
  font-size: 0.82rem;
  color: #64748b;
  margin: 0;
  line-height: 1.5;
}

/* === Compare Container === */
.compare-container {
  display: flex;
  flex-direction: column;
  gap: 16px;
  margin-top: 20px;
}
.compare-card {
  border-radius: 14px;
  overflow: hidden;
  border: 1px solid #e2e8f0;
  transition: transform 0.2s;
}
.compare-card:hover {
  transform: translateY(-2px);
}
.compare-header {
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 12px 18px;
  font-weight: 700;
  font-size: 0.92rem;
}
.bad-header {
  background: #fef2f2;
  color: #dc2626;
}
.good-header {
  background: #f0fdf4;
  color: #16a34a;
}
.compare-icon {
  font-size: 1.1rem;
}
.compare-body {
  padding: 16px 18px;
  background: #f8fafc;
}
.compare-body pre {
  margin: 0;
  font-size: 0.85rem;
  line-height: 1.6;
  color: #374151;
  white-space: pre-wrap;
  font-family: 'JetBrains Mono', 'Fira Code', monospace;
}

/* === Strength Grid === */
.strength-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 16px;
  margin-top: 20px;
}
.strength-card {
  background: #f8fafc;
  border: 1px solid #e2e8f0;
  border-radius: 14px;
  padding: 24px 20px;
  transition: border-color 0.2s, transform 0.2s;
}
.strength-card:hover {
  border-color: #93c5fd;
  transform: translateY(-2px);
}
.strength-icon {
  font-size: 1.8rem;
  margin-bottom: 10px;
}
.strength-card h3 {
  font-size: 1rem;
  font-weight: 700;
  color: #1e293b;
  margin-bottom: 8px;
}
.strength-card p {
  font-size: 0.88rem;
  color: #64748b;
  margin: 0;
  line-height: 1.6;
}

/* === Tip Sections === */
.tip-section {
  background: #fff;
  border: 1px solid #e2e8f0;
  border-radius: 16px;
  padding: 24px;
  margin-bottom: 20px;
  transition: border-color 0.2s;
}
.tip-section:hover {
  border-color: #93c5fd;
}
.tip-section-header {
  display: flex;
  align-items: center;
  gap: 12px;
  margin-bottom: 12px;
}
.tip-section-icon {
  font-size: 1.4rem;
}
.tip-section-header h3 {
  font-size: 1.1rem;
  font-weight: 700;
  color: #1e293b;
  margin: 0;
}
.tip-section > p {
  font-size: 0.95rem;
  color: #475569;
  margin-bottom: 16px;
}

/* === Iteration Steps === */
.iteration-steps {
  display: flex;
  flex-direction: column;
  gap: 8px;
}
.iteration-step {
  display: flex;
  align-items: center;
  gap: 14px;
  padding: 12px 16px;
  background: #f8fafc;
  border: 1px solid #e2e8f0;
  border-radius: 10px;
}
.iter-number {
  background: linear-gradient(135deg, #3b82f6, #2563eb);
  color: #fff;
  padding: 4px 12px;
  border-radius: 6px;
  font-size: 0.78rem;
  font-weight: 700;
  flex-shrink: 0;
}
.iter-text {
  font-size: 0.9rem;
  color: #374151;
}

/* === Practice Box === */
.practice-box {
  background: #f8fafc;
  border: 1px solid #e2e8f0;
  border-radius: 16px;
  padding: 24px;
  margin-top: 12px;
}
.practice-header {
  display: flex;
  align-items: center;
  gap: 14px;
  margin-bottom: 20px;
}
.practice-icon {
  font-size: 1.6rem;
  flex-shrink: 0;
}
.practice-header strong {
  display: block;
  font-size: 1.05rem;
  color: #1e293b;
  margin-bottom: 4px;
}
.practice-header p {
  margin: 0;
  font-size: 0.92rem;
  color: #64748b;
}

/* === Hint Box === */
.hint-box {
  background: #fffbeb;
  border: 1px solid #fde68a;
  border-radius: 10px;
  padding: 14px 18px;
}
.hint-label {
  font-weight: 700;
  font-size: 0.88rem;
  color: #b45309;
  display: block;
  margin-bottom: 10px;
}
.hint-items {
  display: flex;
  flex-direction: column;
  gap: 6px;
}
.hint-item {
  font-size: 0.88rem;
  color: #92400e;
  line-height: 1.5;
}
.hint-item strong {
  color: #78350f;
}

/* === Responsive === */
@media (max-width: 768px) {
  .hero-section {
    padding: 36px 20px 32px;
  }
  .hero-icon {
    font-size: 2.4rem;
  }
  .ipo-flow {
    flex-direction: column;
    gap: 4px;
  }
  .ipo-card {
    max-width: 100%;
  }
  .ipo-arrow {
    transform: rotate(90deg);
    font-size: 1.3rem;
  }
  .input-cards {
    grid-template-columns: 1fr;
  }
  .diff-row {
    grid-template-columns: 1fr;
  }
  .format-grid {
    grid-template-columns: 1fr;
  }
  .strength-grid {
    grid-template-columns: 1fr;
  }
  .tip-section {
    padding: 18px;
  }
  .practice-header {
    flex-direction: column;
    gap: 10px;
  }
}
</style>
