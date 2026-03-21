<template>
  <div class="page-content">
    <!-- Hero Section -->
    <div class="hero-section">
      <div class="hero-icon">📝</div>
      <h1>문서 작성과 파일 관리</h1>
      <p class="hero-desc">보고서, 발표 자료 등을 파일로 직접 만들어주는 활용법입니다.</p>
    </div>

    <!-- 채팅과의 차이 -->
    <section class="section-slide">
      <h2>💬 채팅과의 차이</h2>
      <div class="diff-vs">
        <div class="diff-before">
          <div class="diff-badge before-badge">❌ 일반 채팅</div>
          <p>"보고서 써줘"라고 하면 텍스트 답변을 받고 내가 복사해서 워드에 붙여넣어야 합니다.</p>
        </div>
        <div class="diff-arrow">→</div>
        <div class="diff-after">
          <div class="diff-badge after-badge">✅ 코워크</div>
          <p><strong>완성된 파일이 바로 만들어집니다</strong>. 열기만 하면 됩니다.</p>
        </div>
      </div>
    </section>

    <!-- 실전 예시 -->
    <section class="section-slide">
      <h2>✨ 실전 예시</h2>

      <div class="prompt-card">
        <div class="prompt-header">
          <span class="prompt-badge">📊 보고서 파일 생성</span>
        </div>
        <div class="code-block good">
          <pre>"보고서" 폴더에 이번 분기 마케팅 성과 보고서를 만들어줘.

데이터:
- 인스타: 팔로워 5K→8K, 게시물 도달률 12%
- 블로그: 월 방문자 1만→2.5만
- 광고비: 월 300만원
- 전환율: 2.1%→3.4%

워드 파일로 만들어줘. 표와 그래프 설명도 포함해서.</pre>
        </div>
        <div class="prompt-result">
          <span class="result-arrow">→</span>
          <span>표/그래프 포함 마케팅 보고서 워드 파일 생성</span>
        </div>
      </div>

      <div class="prompt-card">
        <div class="prompt-header">
          <span class="prompt-badge">📽️ 발표 자료 만들기</span>
        </div>
        <div class="code-block good">
          <pre>다음 내용으로 발표 자료를 만들어줘.

주제: 신규 프로젝트 제안
대상: 경영진
시간: 15분

내용:
1. 현재 문제점
2. 해결 방안 (우리 프로젝트)
3. 예상 비용과 효과
4. 일정

파워포인트 파일로 만들어줘.</pre>
        </div>
        <div class="prompt-result">
          <span class="result-arrow">→</span>
          <span>4개 섹션 구성의 파워포인트 파일 자동 생성</span>
        </div>
      </div>

      <div class="prompt-card">
        <div class="prompt-header">
          <span class="prompt-badge">📂 파일 정리</span>
        </div>
        <div class="code-block good">
          <pre>"다운로드" 폴더에 파일이 200개 넘게 쌓여있어.
파일 종류별로 폴더를 만들어서 정리해줘.

- 이미지 → "이미지" 폴더
- PDF → "문서" 폴더
- 엑셀/CSV → "데이터" 폴더
- 나머지 → "기타" 폴더</pre>
        </div>
        <div class="prompt-result">
          <span class="result-arrow">→</span>
          <span>200개+ 파일을 종류별 폴더로 자동 분류 정리</span>
        </div>
      </div>
    </section>

    <!-- 활용 팁 -->
    <section class="section-slide">
      <h2>💡 활용 팁</h2>
      <div class="tips-grid">
        <div class="tip-card">
          <div class="tip-icon">📄</div>
          <h4>파일 형식을 지정하세요</h4>
          <p>"엑셀로", "워드로", "파워포인트로" 등</p>
        </div>
        <div class="tip-card">
          <div class="tip-icon">📍</div>
          <h4>저장 위치를 알려주세요</h4>
          <p>"보고서 폴더에 저장해줘"</p>
        </div>
        <div class="tip-card">
          <div class="tip-icon">✏️</div>
          <h4>수정도 시킬 수 있습니다</h4>
          <p>"아까 만든 파일에서 3번 슬라이드 내용 바꿔줘"</p>
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
  .diff-vs {
    flex-direction: column;
  }
  .diff-arrow {
    justify-content: center;
    transform: rotate(90deg);
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
