<template>
  <div class="page-content">
    <h1>반복 작업 자동화</h1>
    <p class="subtitle">매번 하던 반복 작업을 Claude Code로 자동화하는 방법입니다.</p>

    <section>
      <h2>이런 걸 자동화할 수 있다</h2>
      <div class="feature-grid">
        <div class="feature-card">
          <h3>커밋과 PR</h3>
          <p>"커밋해줘", "PR 만들어줘" 한 마디면 변경사항 분석, 메시지 작성, 실행까지.</p>
        </div>
        <div class="feature-card">
          <h3>코드 리뷰</h3>
          <p>변경된 코드를 자동으로 검토하고 문제점을 알려줍니다.</p>
        </div>
        <div class="feature-card">
          <h3>테스트 작성</h3>
          <p>코드를 분석해서 필요한 테스트 코드를 자동으로 만들어줍니다.</p>
        </div>
        <div class="feature-card">
          <h3>문서 업데이트</h3>
          <p>코드가 바뀌면 관련 문서(README 등)도 자동으로 업데이트합니다.</p>
        </div>
      </div>
    </section>

    <section>
      <h2>커스텀 스킬로 자동화하기</h2>
      <p>자주 하는 작업은 <strong>커스텀 스킬</strong>로 만들어두면 <code>/명령어</code> 한 줄로 실행할 수 있습니다.</p>

      <div class="code-block good">
        <p class="code-label">대화로 스킬 만들기</p>
        <pre>매일 아침 변경사항을 확인하고 요약해주는 스킬을 만들어줘.
git log에서 어제 이후 변경사항을 분석하고,
뭐가 바뀌었는지 한국어로 정리해주면 돼.</pre>
      </div>
      <p>만들어진 스킬은 <code>/morning-report</code> 같은 명령어로 매일 실행할 수 있습니다.</p>
    </section>

    <section>
      <h2>파이프라인 자동화</h2>
      <p><code>-p</code> 옵션을 쓰면 다른 도구와 연결해서 완전 자동화할 수 있습니다.</p>

      <div class="code-block good">
        <p class="code-label">자동화 예시</p>
        <pre># 에러 로그를 Claude에게 분석시키기
cat error.log | claude -p "이 에러 원인이 뭐야?"

# 변경사항 자동 리뷰 → 파일로 저장
git diff | claude -p "이 변경사항을 검토해줘" > review.txt

# 커밋 메시지 자동 생성
git diff --staged | claude -p "커밋 메시지 작성해줘"</pre>
      </div>
      <div class="info-box">
        <p><strong>팁:</strong> <code>-p</code> 옵션은 대화 없이 결과만 바로 출력합니다. CI/CD 파이프라인이나 스크립트에서 Claude를 호출할 때 유용합니다.</p>
      </div>
    </section>

    <section>
      <h2>자동화 아이디어</h2>
      <div class="code-block">
        <p class="code-label">이런 것도 가능합니다</p>
        <pre># 매주 금요일 주간 변경사항 보고서 자동 생성
# 코드 푸시 전 자동 보안 검사
# 새 PR이 올라오면 자동 코드 리뷰
# 에러 발생 시 자동 원인 분석
# API 변경 시 문서 자동 업데이트</pre>
      </div>
    </section>
  </div>
</template>
