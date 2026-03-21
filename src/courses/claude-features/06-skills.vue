<template>
  <div class="page-content">
    <!-- Hero Section -->
    <div class="hero-section">
      <div class="hero-icon">⚡</div>
      <h1>Skill (커스텀 스킬)</h1>
      <p class="hero-desc">자주 하는 작업을 나만의 스킬로 만들어서 재사용하는 기능입니다</p>
    </div>

    <!-- 커스텀 스킬이란? -->
    <section class="slide-section">
      <h2 class="section-title">커스텀 스킬이란?</h2>
      <p class="section-desc"><strong>Skill</strong>은 내가 자주 시키는 작업을 미리 파일로 저장해두고, <code>/이름</code>으로 바로 실행할 수 있게 만드는 기능입니다.</p>
      <div class="analogy-card">
        <div class="analogy-icon">💡</div>
        <div class="analogy-content">
          <strong>비유:</strong> 매번 "이거 확인하고, 저거 분석하고, 이렇게 정리해줘"라고 긴 말을 할 필요 없이, "이름표"를 붙여서 한 마디로 실행하는 겁니다.
        </div>
      </div>
    </section>

    <!-- 언제 만들면 좋을까? -->
    <section class="slide-section">
      <h2 class="section-title">언제 만들면 좋을까?</h2>
      <div class="usecase-grid">
        <div class="usecase-card">
          <div class="uc-icon">🔁</div>
          <h3>반복되는 요청</h3>
          <p>매번 같은 형태로 요청하는 작업이 있다면 스킬로 만들어두세요.</p>
        </div>
        <div class="usecase-card">
          <div class="uc-icon">👥</div>
          <h3>팀 공유</h3>
          <p>팀원 모두가 같은 방식으로 작업해야 할 때, 스킬을 만들어서 공유할 수 있습니다.</p>
        </div>
        <div class="usecase-card">
          <div class="uc-icon">🧩</div>
          <h3>복잡한 지시</h3>
          <p>여러 단계의 지시가 필요한 작업을 하나로 묶어서 실수를 줄입니다.</p>
        </div>
        <div class="usecase-card">
          <div class="uc-icon">✅</div>
          <h3>일관된 결과</h3>
          <p>매번 같은 품질의 결과를 얻고 싶을 때, 지시사항을 스킬로 고정합니다.</p>
        </div>
      </div>
    </section>

    <!-- 가장 쉽게 만드는 방법 -->
    <section class="slide-section">
      <h2 class="section-title">가장 쉽게 만드는 방법</h2>
      <p class="section-desc">직접 파일을 만들 필요 없이, <strong>Claude에게 대화로 요청</strong>하면 됩니다.</p>

      <div class="step-cards">
        <div class="step-card">
          <div class="step-number">1</div>
          <div class="step-body">
            <h3>간단하게 요청</h3>
            <div class="code-block good">
              <pre>변경사항을 검토해주는 커스텀 스킬을 만들어줘</pre>
            </div>
          </div>
        </div>
        <div class="step-card">
          <div class="step-number">2</div>
          <div class="step-body">
            <h3>구체적으로 요청</h3>
            <div class="code-block good">
              <pre>주간 보고서를 자동으로 만들어주는 스킬을 만들어줘.
이번 주 git 변경 기록을 분석해서 한국어로 요약하는 거야.</pre>
            </div>
          </div>
        </div>
      </div>
      <p style="margin-top: 16px; color: #475569;">Claude가 알아서 폴더를 만들고, <code>SKILL.md</code> 파일을 작성해줍니다. 만들어진 내용을 보고 필요하면 수정만 하면 됩니다.</p>
    </section>

    <!-- 파일 구조 -->
    <section class="slide-section">
      <h2 class="section-title">스킬의 파일 구조</h2>
      <p class="section-desc"><code>.claude/skills/</code> 폴더 안에 스킬 이름으로 폴더를 만들고, 그 안에 <code>SKILL.md</code> 파일을 작성합니다.</p>

      <div class="code-block">
        <p class="code-label">파일 구조</p>
        <pre>.claude/skills/
├── review/
│   └── SKILL.md              # → /review 로 실행
├── deploy-check/
│   ├── SKILL.md              # → /deploy-check 으로 실행
│   ├── checklist.md          # 보조 파일 (선택)
│   └── scripts/
│       └── check.sh          # 스크립트 (선택)
└── weekly-report/
    └── SKILL.md              # → /weekly-report 로 실행</pre>
      </div>

      <div class="warning-card">
        <div class="warning-icon">⚠️</div>
        <div class="warning-content">
          <strong>중요:</strong> 각 스킬 폴더 안에 <code>SKILL.md</code> 파일이 반드시 있어야 합니다. 이 파일이 없으면 스킬로 인식하지 않습니다.
        </div>
      </div>
    </section>

    <!-- SKILL.md 작성법 -->
    <section class="slide-section">
      <h2 class="section-title">SKILL.md 작성법</h2>
      <div class="code-block good">
        <p class="code-label">예시: .claude/skills/review/SKILL.md</p>
        <pre>---
description: 변경사항을 검토합니다
---

현재 변경된 내용을 확인하고 검토해주세요.

검토 기준:
1. 실수나 오류가 없는지
2. 빠진 부분이 없는지
3. 더 좋게 만들 수 있는 부분이 있는지

결과를 알기 쉽게 정리해주세요.</pre>
      </div>

      <div class="structure-row">
        <div class="structure-item">
          <span class="struct-badge top">윗부분</span>
          <p><code>---</code> 사이에 <strong>설명</strong>을 적습니다 (목록에 표시됨)</p>
        </div>
        <div class="structure-item">
          <span class="struct-badge bottom">아랫부분</span>
          <p>Claude에게 시킬 <strong>지시 내용</strong>을 적습니다</p>
        </div>
      </div>
    </section>

    <!-- 실전 활용 예시 -->
    <section class="slide-section">
      <h2 class="section-title">실전 활용 예시</h2>

      <div class="example-cards">
        <div class="example-card">
          <div class="ex-header">
            <span class="ex-icon">📊</span>
            <span class="ex-title">주간 보고서 자동 생성</span>
          </div>
          <div class="code-block good">
            <p class="code-label">.claude/skills/weekly-report/SKILL.md</p>
            <pre>---
description: 이번 주 변경사항으로 주간 보고서를 만듭니다
---

이번 주(월~금)의 git 변경 기록을 분석해서
주간 보고서를 작성해주세요.

형식:
1. 이번 주 주요 작업 (3~5줄)
2. 완료된 항목
3. 진행 중인 항목
4. 다음 주 계획

한국어로, 간결하게 작성해주세요.</pre>
          </div>
        </div>

        <div class="example-card">
          <div class="ex-header">
            <span class="ex-icon">🚀</span>
            <span class="ex-title">배포 전 점검</span>
          </div>
          <div class="code-block good">
            <p class="code-label">.claude/skills/deploy-check/SKILL.md</p>
            <pre>---
description: 배포 전에 문제가 없는지 확인합니다
---

배포 전 점검을 해주세요:

1. 빌드가 정상적으로 되는지 확인
2. 커밋하지 않은 변경사항이 있는지 확인
3. 환경 설정 파일에 문제가 없는지 확인

결과를 ✅ / ❌ 로 표시해주세요.</pre>
          </div>
        </div>
      </div>
    </section>

    <!-- 스킬 확인하기 -->
    <section class="slide-section">
      <h2 class="section-title">스킬 확인하기</h2>
      <div class="code-block">
        <p class="code-label">현재 사용 가능한 스킬 보기</p>
        <pre>/skills</pre>
      </div>
      <p style="margin-top: 12px; color: #475569;">또는 대화 중에 <code>/</code>를 입력하면 내가 만든 커스텀 스킬도 자동완성 목록에 뜹니다.</p>
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

.slide-section { margin-bottom: 48px; }
.section-title { font-size: 1.5rem; margin-bottom: 12px; }
.section-desc { color: #475569; margin-bottom: 24px; font-size: 1.05rem; }

.analogy-card {
  display: flex;
  align-items: center;
  gap: 14px;
  background: #eff6ff;
  border: 1px solid #bfdbfe;
  border-radius: 12px;
  padding: 18px 22px;
}
.analogy-icon { font-size: 1.5rem; flex-shrink: 0; }
.analogy-content { color: #1e40af; font-size: 0.95rem; line-height: 1.7; }

.usecase-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 16px;
}
.usecase-card {
  background: #f8fafc;
  border: 1px solid #e2e8f0;
  border-radius: 12px;
  padding: 24px 20px;
  text-align: center;
  transition: border-color 0.2s, transform 0.2s;
}
.usecase-card:hover { border-color: #93c5fd; transform: translateY(-2px); }
.uc-icon { font-size: 2rem; margin-bottom: 8px; }
.usecase-card h3 { margin-bottom: 8px; color: #1e293b; font-size: 1.05rem; }
.usecase-card p { color: #475569; font-size: 0.9rem; margin: 0; }

.step-cards { display: flex; flex-direction: column; gap: 20px; }
.step-card {
  display: flex;
  gap: 18px;
  background: #f8fafc;
  border: 1px solid #e2e8f0;
  border-radius: 12px;
  padding: 24px;
  transition: border-color 0.2s;
}
.step-card:hover { border-color: #93c5fd; }
.step-number {
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
  flex-shrink: 0;
}
.step-body { flex: 1; }
.step-body h3 { margin-bottom: 10px; color: #1e293b; font-size: 1.05rem; }

.warning-card {
  display: flex;
  align-items: center;
  gap: 14px;
  background: #fef3c7;
  border: 1px solid #fde68a;
  border-radius: 12px;
  padding: 18px 22px;
  margin-top: 16px;
}
.warning-icon { font-size: 1.5rem; flex-shrink: 0; }
.warning-content { color: #92400e; font-size: 0.95rem; line-height: 1.7; }

.structure-row {
  display: flex;
  gap: 16px;
  margin-top: 20px;
}
.structure-item {
  flex: 1;
  background: #f8fafc;
  border: 1px solid #e2e8f0;
  border-radius: 10px;
  padding: 16px;
}
.struct-badge {
  display: inline-block;
  font-size: 0.75rem;
  padding: 2px 10px;
  border-radius: 999px;
  font-weight: 700;
  color: #fff;
  margin-bottom: 8px;
}
.struct-badge.top { background: #8b5cf6; }
.struct-badge.bottom { background: #3b82f6; }
.structure-item p { color: #475569; font-size: 0.9rem; margin: 0; }

.example-cards { display: flex; flex-direction: column; gap: 20px; }
.example-card {
  background: #f8fafc;
  border: 1px solid #e2e8f0;
  border-radius: 12px;
  padding: 24px;
  transition: border-color 0.2s;
}
.example-card:hover { border-color: #93c5fd; }
.ex-header {
  display: flex;
  align-items: center;
  gap: 10px;
  margin-bottom: 16px;
}
.ex-icon { font-size: 1.4rem; }
.ex-title { font-weight: 700; color: #1e293b; font-size: 1.05rem; }

@media (max-width: 768px) {
  .hero-section { padding: 32px 18px 28px; }
  .hero-icon { font-size: 2.2rem; }
  .hero-section h1 { font-size: 1.4rem; }
  .hero-desc { font-size: 1rem; }
  .usecase-grid { grid-template-columns: 1fr; }
  .step-card { flex-direction: column; gap: 12px; }
  .structure-row { flex-direction: column; }
}
</style>
