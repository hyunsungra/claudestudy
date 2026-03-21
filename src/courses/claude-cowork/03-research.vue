<template>
  <div class="page-content">
    <!-- Hero Section -->
    <div class="hero-section">
      <div class="hero-icon">🔍</div>
      <h1>자료 조사와 정리</h1>
      <p class="hero-desc">여러 문서를 읽고 분석해서 정리 보고서를 만들어주는 활용법입니다.</p>
    </div>

    <!-- 이런 상황에서 -->
    <section class="section-slide">
      <div class="situation-banner">
        <div class="situation-icon">💡</div>
        <div class="situation-text">
          <h3>이런 상황에서 쓰세요</h3>
          <p>폴더에 PDF, 문서 파일이 잔뜩 있는데 다 읽을 시간이 없을 때. Claude가 <strong>전부 읽고 핵심만 정리</strong>해줍니다.</p>
        </div>
      </div>
    </section>

    <!-- 실전 예시 -->
    <section class="section-slide">
      <h2>✨ 실전 예시</h2>

      <div class="prompt-card">
        <div class="prompt-header">
          <span class="prompt-badge">📑 여러 문서 비교 분석</span>
        </div>
        <div class="code-block good">
          <pre>"자료" 폴더에 있는 PDF 파일 5개를 전부 읽고,
각 문서의 핵심 내용을 정리한 비교 분석표를 만들어줘.

공통점과 차이점을 정리하고,
결론을 1페이지로 요약해서 별도 파일로 저장해줘.</pre>
        </div>
        <div class="prompt-result">
          <span class="result-arrow">→</span>
          <span>PDF 5개 자동 분석 + 비교표 + 결론 요약 파일 생성</span>
        </div>
      </div>

      <div class="prompt-card">
        <div class="prompt-header">
          <span class="prompt-badge">🏢 제안서 검토 정리</span>
        </div>
        <div class="code-block good">
          <pre>"업체제안" 폴더에 A업체, B업체, C업체 제안서가 있어.
세 업체를 비교하는 표를 만들어줘.

비교 항목:
- 가격
- 납기
- 서비스 범위
- 특이사항

엑셀 파일로 만들어줘.</pre>
        </div>
        <div class="prompt-result">
          <span class="result-arrow">→</span>
          <span>3개 업체 제안서 자동 비교표 엑셀 생성</span>
        </div>
      </div>

      <div class="prompt-card">
        <div class="prompt-header">
          <span class="prompt-badge">📚 논문/보고서 요약</span>
        </div>
        <div class="code-block good">
          <pre>"논문" 폴더에 있는 논문 3편을 읽고,
각 논문별로 다음을 정리해줘:
- 연구 목적
- 주요 결론
- 우리 프로젝트에 참고할 점

한 파일에 정리해서 저장해줘.</pre>
        </div>
        <div class="prompt-result">
          <span class="result-arrow">→</span>
          <span>논문 3편 핵심 정리 + 참고점 통합 문서 생성</span>
        </div>
      </div>
    </section>

    <!-- 활용 팁 -->
    <section class="section-slide">
      <h2>💡 활용 팁</h2>
      <div class="tips-grid">
        <div class="tip-card">
          <div class="tip-icon">📂</div>
          <h4>폴더에 파일을 미리 넣어두세요</h4>
          <p>Claude가 접근할 수 있도록 지정한 폴더에 파일을 준비합니다</p>
        </div>
        <div class="tip-card">
          <div class="tip-icon">📐</div>
          <h4>결과물 형식을 지정하세요</h4>
          <p>"엑셀로", "표로", "1페이지로" 등</p>
        </div>
        <div class="tip-card">
          <div class="tip-icon">⚖️</div>
          <h4>비교 기준을 알려주세요</h4>
          <p>"가격, 기능, A/S 기준으로 비교해줘"</p>
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

/* Situation banner */
.situation-banner {
  display: flex;
  align-items: center;
  gap: 20px;
  background: linear-gradient(135deg, #fefce8 0%, #fef9c3 100%);
  border: 1px solid #fde68a;
  border-radius: 12px;
  padding: 24px;
}
.situation-icon {
  font-size: 2.5rem;
  flex-shrink: 0;
}
.situation-text h3 {
  margin: 0 0 8px;
  color: #92400e;
  font-size: 1.1rem;
}
.situation-text p {
  margin: 0;
  line-height: 1.7;
  color: #451a03;
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

/* Tips grid */
.tips-grid {
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
  .situation-banner {
    flex-direction: column;
    text-align: center;
  }
  .tips-grid {
    grid-template-columns: 1fr;
  }
  .section-slide {
    margin-bottom: 32px;
    padding-bottom: 32px;
  }
}
</style>
