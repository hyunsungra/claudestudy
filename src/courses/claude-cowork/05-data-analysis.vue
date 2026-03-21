<template>
  <div class="page-content">
    <!-- Hero Section -->
    <div class="hero-section">
      <div class="hero-icon">📊</div>
      <h1>데이터 분석과 엑셀 작업</h1>
      <p class="hero-desc">데이터 파일을 분석하고, 수식이 들어간 엑셀을 직접 만들어주는 활용법입니다.</p>
    </div>

    <!-- 채팅과의 차이 -->
    <section class="section-slide">
      <h2>💬 채팅과의 차이</h2>
      <div class="diff-vs">
        <div class="diff-before">
          <div class="diff-badge before-badge">❌ 일반 채팅</div>
          <p>"이 수식을 쓰세요"라고 텍스트로 알려줍니다. 내가 직접 엑셀에 입력해야 합니다.</p>
        </div>
        <div class="diff-arrow">→</div>
        <div class="diff-after">
          <div class="diff-badge after-badge">✅ 코워크</div>
          <p><strong>수식이 들어간 엑셀 파일을 직접 만들어줍니다</strong>. 열면 바로 쓸 수 있는 상태로요.</p>
        </div>
      </div>
    </section>

    <!-- 실전 예시 -->
    <section class="section-slide">
      <h2>✨ 실전 예시</h2>

      <div class="prompt-card">
        <div class="prompt-header">
          <span class="prompt-badge">📈 매출 데이터 분석</span>
        </div>
        <div class="code-block good">
          <pre>"데이터" 폴더에 있는 매출현황.csv 파일을 분석해줘.

분석할 것:
1. 월별 매출 추이
2. 제품별 매출 비중
3. 전년 대비 성장률

결과를 엑셀 파일로 만들어줘.
시트 1: 원본 데이터
시트 2: 분석 결과 (표 + 요약)
수식도 넣어서 나중에 데이터 바꾸면 자동 계산되게.</pre>
        </div>
        <div class="prompt-result">
          <span class="result-arrow">→</span>
          <span>다중 시트 엑셀 + 자동 계산 수식 포함 분석 파일 생성</span>
        </div>
      </div>

      <div class="prompt-card">
        <div class="prompt-header">
          <span class="prompt-badge">📁 여러 파일 합치기</span>
        </div>
        <div class="code-block good">
          <pre>"월별매출" 폴더에 1월.csv, 2월.csv ... 12월.csv가 있어.
전부 합쳐서 연간 매출 통합 엑셀 파일을 만들어줘.

월별 시트 + 연간 종합 시트를 포함해줘.
종합 시트에는 월별 합계, 평균, 증감률 수식 넣어줘.</pre>
        </div>
        <div class="prompt-result">
          <span class="result-arrow">→</span>
          <span>12개 CSV 자동 통합 + 종합 분석 시트 포함 엑셀 생성</span>
        </div>
      </div>

      <div class="prompt-card">
        <div class="prompt-header">
          <span class="prompt-badge">📋 설문 결과 정리</span>
        </div>
        <div class="code-block good">
          <pre>"설문" 폴더에 설문조사 결과 파일이 있어.
응답을 분석해서 결과 보고서를 만들어줘.

- 항목별 응답 비율
- 주요 의견 요약
- 점수가 낮은 항목 Top 5

엑셀 파일 하나, 요약 보고서 파일 하나로 만들어줘.</pre>
        </div>
        <div class="prompt-result">
          <span class="result-arrow">→</span>
          <span>설문 분석 엑셀 + 요약 보고서 2개 파일 자동 생성</span>
        </div>
      </div>
    </section>

    <!-- 주의할 점 -->
    <section class="section-slide">
      <h2>⚠️ 주의할 점</h2>
      <div class="warning-grid">
        <div class="warning-card">
          <div class="warning-icon">🔢</div>
          <h4>숫자는 반드시 확인하세요</h4>
          <p>Claude가 만든 수식이나 계산은 원본과 대조해보세요</p>
        </div>
        <div class="warning-card">
          <div class="warning-icon">🔒</div>
          <h4>민감한 데이터 주의</h4>
          <p>개인정보, 급여 데이터 등은 회사 보안 정책을 확인하세요</p>
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

/* Diff VS */
.diff-vs {
  display: flex;
  align-items: stretch;
  gap: 16px;
  margin-top: 20px;
}
.diff-before, .diff-after {
  flex: 1;
  border-radius: 12px;
  padding: 24px;
}
.diff-before {
  background: #fef2f2;
  border: 1px solid #fecaca;
}
.diff-after {
  background: #f0fdf4;
  border: 1px solid #bbf7d0;
}
.diff-badge {
  display: inline-block;
  font-weight: 700;
  font-size: 0.95rem;
  padding: 4px 12px;
  border-radius: 8px;
  margin-bottom: 12px;
}
.before-badge {
  background: #fee2e2;
  color: #991b1b;
}
.after-badge {
  background: #dcfce7;
  color: #166534;
}
.diff-before p, .diff-after p {
  margin: 0;
  line-height: 1.7;
  font-size: 0.95rem;
}
.diff-arrow {
  display: flex;
  align-items: center;
  font-size: 1.5rem;
  color: #94a3b8;
  font-weight: 700;
  flex-shrink: 0;
}

/* Prompt cards */
.prompt-card {
  background: #f8fafc;
  border: 1px solid #e2e8f0;
  border-radius: 12px;
  padding: 24px;
  margin-top: 20px;
  transition: border-color 0.2s;
}
.prompt-card:hover {
  border-color: #93c5fd;
}
.prompt-header {
  margin-bottom: 16px;
}
.prompt-badge {
  font-weight: 700;
  font-size: 1.05rem;
  color: #1e293b;
}
.prompt-result {
  display: flex;
  align-items: center;
  gap: 10px;
  margin-top: 14px;
  padding: 12px 16px;
  background: #f0fdf4;
  border-radius: 8px;
  font-size: 0.93rem;
  color: #166534;
  font-weight: 500;
}
.result-arrow {
  font-size: 1.2rem;
  font-weight: 700;
  color: #16a34a;
}

/* Warning grid */
.warning-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 16px;
  margin-top: 20px;
}
.warning-card {
  background: #fffbeb;
  border: 1px solid #fde68a;
  border-radius: 12px;
  padding: 24px;
  text-align: center;
  transition: border-color 0.2s, transform 0.2s;
}
.warning-card:hover {
  border-color: #f59e0b;
  transform: translateY(-2px);
}
.warning-icon {
  font-size: 2rem;
  margin-bottom: 10px;
}
.warning-card h4 {
  margin: 0 0 8px;
  font-size: 1rem;
  color: #92400e;
}
.warning-card p {
  margin: 0;
  color: #78350f;
  font-size: 0.9rem;
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
  .diff-vs {
    flex-direction: column;
  }
  .diff-arrow {
    justify-content: center;
    transform: rotate(90deg);
  }
  .warning-grid {
    grid-template-columns: 1fr;
  }
  .section-slide {
    margin-bottom: 32px;
    padding-bottom: 32px;
  }
}
</style>
