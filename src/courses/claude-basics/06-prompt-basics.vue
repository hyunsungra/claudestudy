<template>
  <div class="page-content">
    <!-- Hero Section -->
    <div class="hero-section">
      <div class="hero-icon">💬</div>
      <h1>프롬프트의 기본 구조</h1>
      <p class="hero-desc">AI에게 원하는 결과를 얻기 위한 질문 작성법의 기초를 배워봅시다.</p>
    </div>

    <!-- 프롬프트란? -->
    <section>
      <h2>프롬프트란?</h2>
      <div class="definition-card">
        <div class="definition-icon">📝</div>
        <div>
          <p><strong>프롬프트(Prompt)</strong>란 AI에게 보내는 입력 텍스트, 즉 <strong>질문이나 지시사항</strong>을 말합니다.</p>
          <p class="definition-sub">프롬프트를 어떻게 작성하느냐에 따라 AI의 응답 품질이 크게 달라집니다.</p>
        </div>
      </div>
    </section>

    <!-- 좋은 프롬프트의 4가지 요소 -->
    <section>
      <h2>좋은 프롬프트의 4가지 요소</h2>
      <div class="element-grid">
        <div class="element-card">
          <div class="element-number">1</div>
          <h3>역할 (Role)</h3>
          <p class="element-desc">AI에게 특정 역할을 부여합니다.</p>
          <div class="element-example">
            <span class="example-label">예시</span>
            "당신은 10년 경력의 마케팅 전문가입니다."
          </div>
        </div>
        <div class="element-card">
          <div class="element-number">2</div>
          <h3>맥락 (Context)</h3>
          <p class="element-desc">배경 정보와 상황을 설명합니다.</p>
          <div class="element-example">
            <span class="example-label">예시</span>
            "우리 회사는 B2B SaaS 스타트업이고, 시리즈A 투자를 준비중입니다."
          </div>
        </div>
        <div class="element-card">
          <div class="element-number">3</div>
          <h3>지시 (Instruction)</h3>
          <p class="element-desc">구체적으로 무엇을 해야 하는지 명확히 합니다.</p>
          <div class="element-example">
            <span class="example-label">예시</span>
            "투자자 대상 회사 소개 이메일을 작성해주세요."
          </div>
        </div>
        <div class="element-card">
          <div class="element-number">4</div>
          <h3>출력 형식 (Format)</h3>
          <p class="element-desc">원하는 결과물의 형태를 지정합니다.</p>
          <div class="element-example">
            <span class="example-label">예시</span>
            "3문단 이내로, 존댓말로 작성해주세요."
          </div>
        </div>
      </div>
    </section>

    <!-- 나쁜 vs 좋은 프롬프트 -->
    <section>
      <h2>나쁜 프롬프트 vs 좋은 프롬프트</h2>
      <div class="compare-container">
        <div class="compare-card bad">
          <div class="compare-header bad-header">
            <span class="compare-icon">❌</span>
            <span>나쁜 예시</span>
          </div>
          <div class="compare-body">
            <pre>마케팅 전략 알려줘</pre>
          </div>
        </div>
        <div class="compare-arrow">→</div>
        <div class="compare-card good">
          <div class="compare-header good-header">
            <span class="compare-icon">✅</span>
            <span>좋은 예시</span>
          </div>
          <div class="compare-body">
            <pre>당신은 디지털 마케팅 전문가입니다.

[상황]
- 월 예산 500만원의 온라인 쇼핑몰 (여성 의류)
- 주요 고객: 25~35세 여성
- 현재 인스타그램 팔로워 5,000명

위 상황에 맞는 3개월 마케팅 전략을 수립해주세요.
각 월별로 목표, 채널, 예산 배분을 표로 정리해주세요.</pre>
          </div>
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
            <strong>나쁜 프롬프트를 개선해보세요</strong>
            <p>4가지 요소를 활용하여 좋은 프롬프트로 바꿔보세요.</p>
          </div>
        </div>
        <div class="code-block">
          <p class="code-label">개선해보기</p>
          <pre>자기소개서 써줘</pre>
        </div>
        <div class="hint-box">
          <span class="hint-label">💡 힌트</span>
          <p>어떤 회사에 지원하는지, 본인의 경력은 어떤지, 어떤 톤으로 작성할지 등을 추가해보세요.</p>
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

/* === Definition Card === */
.definition-card {
  display: flex;
  align-items: flex-start;
  gap: 18px;
  background: #f0f7ff;
  border: 1px solid #bfdbfe;
  border-radius: 14px;
  padding: 24px;
  margin-top: 12px;
}
.definition-icon {
  font-size: 2rem;
  flex-shrink: 0;
}
.definition-card p {
  margin: 0 0 4px;
  font-size: 1rem;
  color: #1e293b;
  line-height: 1.7;
}
.definition-sub {
  color: #475569 !important;
  font-size: 0.92rem !important;
}

/* === Element Grid (4 elements) === */
.element-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 16px;
  margin-top: 20px;
}
.element-card {
  background: #f8fafc;
  border: 1px solid #e2e8f0;
  border-radius: 14px;
  padding: 24px 20px;
  position: relative;
  transition: border-color 0.2s, transform 0.2s;
}
.element-card:hover {
  border-color: #93c5fd;
  transform: translateY(-2px);
}
.element-number {
  width: 32px;
  height: 32px;
  background: linear-gradient(135deg, #3b82f6, #2563eb);
  color: #fff;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 800;
  font-size: 0.9rem;
  margin-bottom: 12px;
}
.element-card h3 {
  font-size: 1.05rem;
  font-weight: 700;
  color: #1e293b;
  margin-bottom: 6px;
}
.element-desc {
  font-size: 0.9rem;
  color: #64748b;
  margin-bottom: 12px;
}
.element-example {
  background: #fff;
  border: 1px solid #e2e8f0;
  border-radius: 8px;
  padding: 10px 14px;
  font-size: 0.85rem;
  color: #475569;
  line-height: 1.5;
  font-style: italic;
}
.example-label {
  display: inline-block;
  background: #dbeafe;
  color: #1d4ed8;
  font-size: 0.7rem;
  font-weight: 700;
  padding: 2px 8px;
  border-radius: 4px;
  margin-right: 8px;
  font-style: normal;
  text-transform: uppercase;
}

/* === Compare Container === */
.compare-container {
  display: flex;
  align-items: stretch;
  gap: 16px;
  margin-top: 20px;
}
.compare-card {
  flex: 1;
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
.compare-arrow {
  display: flex;
  align-items: center;
  font-size: 1.5rem;
  color: #94a3b8;
  font-weight: 700;
  flex-shrink: 0;
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
  align-items: flex-start;
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
.hint-box {
  background: #fffbeb;
  border: 1px solid #fde68a;
  border-radius: 10px;
  padding: 14px 18px;
  margin-top: 16px;
}
.hint-label {
  font-weight: 700;
  font-size: 0.88rem;
  color: #b45309;
  display: block;
  margin-bottom: 4px;
}
.hint-box p {
  margin: 0;
  font-size: 0.9rem;
  color: #92400e;
  line-height: 1.6;
}

/* === Responsive === */
@media (max-width: 768px) {
  .hero-section {
    padding: 36px 20px 32px;
  }
  .hero-icon {
    font-size: 2.4rem;
  }
  .definition-card {
    flex-direction: column;
    gap: 12px;
  }
  .element-grid {
    grid-template-columns: 1fr;
  }
  .compare-container {
    flex-direction: column;
    gap: 12px;
  }
  .compare-arrow {
    justify-content: center;
    transform: rotate(90deg);
    font-size: 1.3rem;
  }
  .practice-header {
    flex-direction: column;
    gap: 10px;
  }
}
</style>
