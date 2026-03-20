<template>
  <div class="page-content">
    <h1>Skill (커스텀 스킬)</h1>
    <p class="subtitle">자주 하는 작업을 나만의 스킬로 만들어서 재사용하는 기능입니다.</p>

    <section>
      <h2>커스텀 스킬이란?</h2>
      <p><strong>Skill</strong>은 내가 자주 시키는 작업을 미리 파일로 저장해두고, <code>/이름</code>으로 바로 실행할 수 있게 만드는 기능입니다.</p>
      <div class="info-box">
        <p><strong>비유:</strong> 매번 "이거 확인하고, 저거 분석하고, 이렇게 정리해줘"라고 긴 말을 할 필요 없이, "이름표"를 붙여서 한 마디로 실행하는 겁니다.</p>
      </div>
    </section>

    <section>
      <h2>언제 만들면 좋을까?</h2>
      <div class="feature-grid">
        <div class="feature-card">
          <h3>반복되는 요청</h3>
          <p>매번 같은 형태로 요청하는 작업이 있다면 스킬로 만들어두세요.</p>
        </div>
        <div class="feature-card">
          <h3>팀 공유</h3>
          <p>팀원 모두가 같은 방식으로 작업해야 할 때, 스킬을 만들어서 공유할 수 있습니다.</p>
        </div>
        <div class="feature-card">
          <h3>복잡한 지시</h3>
          <p>여러 단계의 지시가 필요한 작업을 하나로 묶어서 실수를 줄입니다.</p>
        </div>
        <div class="feature-card">
          <h3>일관된 결과</h3>
          <p>매번 같은 품질의 결과를 얻고 싶을 때, 지시사항을 스킬로 고정합니다.</p>
        </div>
      </div>
    </section>

    <section>
      <h2>가장 쉽게 만드는 방법</h2>
      <p>직접 파일을 만들 필요 없이, <strong>Claude에게 대화로 요청</strong>하면 됩니다.</p>
      <div class="code-block good">
        <p class="code-label">대화로 스킬 만들기</p>
        <pre>변경사항을 검토해주는 커스텀 스킬을 만들어줘</pre>
      </div>
      <div class="code-block good">
        <p class="code-label">더 구체적으로 요청하기</p>
        <pre>주간 보고서를 자동으로 만들어주는 스킬을 만들어줘.
이번 주 git 변경 기록을 분석해서 한국어로 요약하는 거야.</pre>
      </div>
      <p>Claude가 알아서 폴더를 만들고, <code>SKILL.md</code> 파일을 작성해줍니다. 만들어진 내용을 보고 필요하면 수정만 하면 됩니다.</p>
    </section>

    <section>
      <h2>스킬의 파일 구조</h2>
      <p><code>.claude/skills/</code> 폴더 안에 스킬 이름으로 폴더를 만들고, 그 안에 <code>SKILL.md</code> 파일을 작성합니다.</p>

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

      <div class="info-box warning">
        <p><strong>중요:</strong> 각 스킬 폴더 안에 <code>SKILL.md</code> 파일이 반드시 있어야 합니다. 이 파일이 없으면 스킬로 인식하지 않습니다.</p>
      </div>
    </section>

    <section>
      <h2>SKILL.md 작성법</h2>
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

      <p>구조는 간단합니다:</p>
      <ul>
        <li>맨 위 <code>---</code> 사이에 <strong>설명</strong>을 적습니다 (목록에 표시됨)</li>
        <li>아래에는 Claude에게 시킬 <strong>지시 내용</strong>을 적습니다</li>
      </ul>
    </section>

    <section>
      <h2>실전 활용 예시</h2>

      <div class="code-block good">
        <p class="code-label">주간 보고서 자동 생성: .claude/skills/weekly-report/SKILL.md</p>
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

      <div class="code-block good">
        <p class="code-label">배포 전 점검: .claude/skills/deploy-check/SKILL.md</p>
        <pre>---
description: 배포 전에 문제가 없는지 확인합니다
---

배포 전 점검을 해주세요:

1. 빌드가 정상적으로 되는지 확인
2. 커밋하지 않은 변경사항이 있는지 확인
3. 환경 설정 파일에 문제가 없는지 확인

결과를 ✅ / ❌ 로 표시해주세요.</pre>
      </div>
    </section>

    <section>
      <h2>스킬 확인하기</h2>
      <div class="code-block">
        <p class="code-label">현재 사용 가능한 스킬 보기</p>
        <pre>/skills</pre>
      </div>
      <p>또는 대화 중에 <code>/</code>를 입력하면 내가 만든 커스텀 스킬도 자동완성 목록에 뜹니다.</p>
    </section>
  </div>
</template>
