<template>
  <div class="page-content">
    <!-- Hero Section -->
    <div class="hero-section">
      <div class="hero-icon">🤖</div>
      <h1>Claude 모델 종류와 특징</h1>
      <p class="hero-desc">용도에 맞는 Claude 모델을 선택하는 방법을 알아봅시다.</p>
    </div>

    <!-- Model Family Intro -->
    <section>
      <h2>Claude 모델 패밀리</h2>
      <p>Anthropic은 용도와 성능에 따라 여러 Claude 모델을 제공합니다. 현재 최신 모델 패밀리는 <strong>Claude 4.5/4.6</strong> 시리즈입니다.</p>
    </section>

    <!-- Model Comparison Cards -->
    <section>
      <h2>모델 비교</h2>
      <div class="model-cards">
        <div class="model-card opus">
          <div class="model-badge">최고 성능</div>
          <div class="model-icon">🧠</div>
          <h3>Opus</h3>
          <p class="model-trait">복잡한 추론에 특화</p>
          <div class="model-divider"></div>
          <p class="model-use">어려운 코딩, 심층 분석, 연구</p>
        </div>
        <div class="model-card sonnet">
          <div class="model-badge popular">추천</div>
          <div class="model-icon">⚖️</div>
          <h3>Sonnet</h3>
          <p class="model-trait">성능과 속도의 균형</p>
          <div class="model-divider"></div>
          <p class="model-use">일반 업무, 글쓰기, 코딩</p>
        </div>
        <div class="model-card haiku">
          <div class="model-badge">가장 빠름</div>
          <div class="model-icon">⚡</div>
          <h3>Haiku</h3>
          <p class="model-trait">가장 빠르고 저렴</p>
          <div class="model-divider"></div>
          <p class="model-use">간단한 질문, 분류, 대량 처리</p>
        </div>
      </div>
    </section>

    <!-- Model Selection Guide -->
    <section>
      <h2>모델 선택 가이드</h2>
      <div class="guide-cards">
        <div class="guide-card">
          <div class="guide-icon">📊</div>
          <div class="guide-body">
            <strong>복잡한 작업</strong>
            <p>논문 분석, 대규모 코드 리뷰</p>
          </div>
          <div class="guide-arrow">→</div>
          <div class="guide-recommend opus-tag">Opus</div>
        </div>
        <div class="guide-card">
          <div class="guide-icon">✏️</div>
          <div class="guide-body">
            <strong>일상적인 작업</strong>
            <p>이메일 작성, 코드 작성, 요약</p>
          </div>
          <div class="guide-arrow">→</div>
          <div class="guide-recommend sonnet-tag">Sonnet</div>
        </div>
        <div class="guide-card">
          <div class="guide-icon">💬</div>
          <div class="guide-body">
            <strong>빠른 응답이 필요한 작업</strong>
            <p>챗봇, 분류, 짧은 질문</p>
          </div>
          <div class="guide-arrow">→</div>
          <div class="guide-recommend haiku-tag">Haiku</div>
        </div>
      </div>
      <div class="tip-box">
        <span class="tip-icon">💡</span>
        <p>대부분의 경우 <strong>Sonnet</strong>으로 충분하며, 특별히 어려운 작업에만 Opus를 사용하는 것이 비용 효율적입니다.</p>
      </div>
    </section>

    <!-- Pricing Section -->
    <section>
      <h2>요금제</h2>
      <p>Claude는 다음과 같은 방식으로 사용할 수 있습니다:</p>
      <div class="pricing-grid">
        <div class="pricing-card free">
          <div class="pricing-label">무료</div>
          <div class="pricing-price">$0</div>
          <p>claude.ai에서 일일 제한 내 사용</p>
        </div>
        <div class="pricing-card pro">
          <div class="pricing-label">Pro</div>
          <div class="pricing-price">$20<span>/월</span></div>
          <p>더 많은 사용량, Opus 모델 접근</p>
        </div>
        <div class="pricing-card team">
          <div class="pricing-label">Team</div>
          <div class="pricing-price">$25<span>/월/인</span></div>
          <p>팀 협업 기능</p>
        </div>
        <div class="pricing-card api">
          <div class="pricing-label">API</div>
          <div class="pricing-price">종량제</div>
          <p>사용한 토큰만큼 과금</p>
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

/* === Model Cards === */
.model-cards {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
  margin-top: 20px;
}
.model-card {
  background: #f8fafc;
  border: 1px solid #e2e8f0;
  border-radius: 14px;
  padding: 28px 20px;
  text-align: center;
  position: relative;
  transition: border-color 0.2s, transform 0.2s;
}
.model-card:hover {
  border-color: #93c5fd;
  transform: translateY(-2px);
}
.model-badge {
  display: inline-block;
  padding: 4px 12px;
  border-radius: 20px;
  font-size: 0.72rem;
  font-weight: 700;
  background: #f1f5f9;
  color: #64748b;
  margin-bottom: 12px;
}
.model-badge.popular {
  background: linear-gradient(135deg, #3b82f6, #2563eb);
  color: #fff;
}
.model-icon {
  font-size: 2.2rem;
  margin-bottom: 10px;
}
.model-card h3 {
  font-size: 1.25rem;
  font-weight: 800;
  color: #1e293b;
  margin-bottom: 6px;
}
.model-trait {
  font-size: 0.92rem;
  color: #64748b;
  margin-bottom: 0;
}
.model-divider {
  width: 40px;
  height: 2px;
  background: #e2e8f0;
  margin: 14px auto;
  border-radius: 2px;
}
.model-use {
  font-size: 0.85rem;
  color: #475569;
  margin-bottom: 0;
}
.model-card.sonnet {
  border-color: #93c5fd;
  background: #f0f7ff;
}

/* === Guide Cards === */
.guide-cards {
  display: flex;
  flex-direction: column;
  gap: 12px;
  margin-top: 16px;
  margin-bottom: 20px;
}
.guide-card {
  display: flex;
  align-items: center;
  gap: 14px;
  background: #f8fafc;
  border: 1px solid #e2e8f0;
  border-radius: 12px;
  padding: 16px 20px;
  transition: border-color 0.2s, transform 0.2s;
}
.guide-card:hover {
  border-color: #93c5fd;
  transform: translateY(-1px);
}
.guide-icon {
  font-size: 1.5rem;
  flex-shrink: 0;
}
.guide-body {
  flex: 1;
}
.guide-body strong {
  color: #1e293b;
  font-size: 0.95rem;
}
.guide-body p {
  color: #64748b;
  font-size: 0.85rem;
  margin: 2px 0 0;
}
.guide-arrow {
  color: #94a3b8;
  font-size: 1.2rem;
  font-weight: 700;
  flex-shrink: 0;
}
.guide-recommend {
  padding: 6px 16px;
  border-radius: 8px;
  font-weight: 700;
  font-size: 0.88rem;
  flex-shrink: 0;
}
.opus-tag {
  background: #fef3c7;
  color: #b45309;
}
.sonnet-tag {
  background: #dbeafe;
  color: #1d4ed8;
}
.haiku-tag {
  background: #d1fae5;
  color: #047857;
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
  margin-top: 8px;
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

/* === Pricing Grid === */
.pricing-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 16px;
  margin-top: 20px;
}
.pricing-card {
  background: #f8fafc;
  border: 1px solid #e2e8f0;
  border-radius: 14px;
  padding: 24px 16px;
  text-align: center;
  transition: border-color 0.2s, transform 0.2s;
}
.pricing-card:hover {
  border-color: #93c5fd;
  transform: translateY(-2px);
}
.pricing-label {
  font-size: 0.78rem;
  font-weight: 700;
  text-transform: uppercase;
  color: #64748b;
  letter-spacing: 0.05em;
  margin-bottom: 8px;
}
.pricing-price {
  font-size: 1.5rem;
  font-weight: 800;
  color: #1e293b;
  margin-bottom: 8px;
}
.pricing-price span {
  font-size: 0.82rem;
  font-weight: 500;
  color: #64748b;
}
.pricing-card p {
  font-size: 0.82rem;
  color: #64748b;
  margin: 0;
  line-height: 1.5;
}
.pricing-card.pro {
  border-color: #93c5fd;
  background: #f0f7ff;
}

/* === Responsive === */
@media (max-width: 768px) {
  .hero-section {
    padding: 36px 20px 32px;
  }
  .hero-icon {
    font-size: 2.4rem;
  }
  .model-cards {
    grid-template-columns: 1fr;
    gap: 14px;
  }
  .guide-card {
    flex-wrap: wrap;
    gap: 10px;
  }
  .guide-arrow {
    display: none;
  }
  .guide-recommend {
    margin-left: auto;
  }
  .pricing-grid {
    grid-template-columns: repeat(2, 1fr);
    gap: 12px;
  }
}
</style>
