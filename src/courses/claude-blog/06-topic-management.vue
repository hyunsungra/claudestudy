<template>
  <div class="page-content">
    <h1>주제 관리와 진행 추적</h1>
    <p class="subtitle">어떤 주제를 썼고 안 썼는지 추적하는 시스템을 만드는 방법입니다.</p>

    <section>
      <h2>왜 필요한가?</h2>
      <p>블로그 글을 계속 쓰다 보면 "이 주제 썼던가?", "다음에 뭘 쓰지?" 하는 고민이 생깁니다. Claude Code로 <strong>주제 목록을 관리하는 md 파일</strong>을 만들면, 작성 여부를 체크하면서 체계적으로 운영할 수 있습니다.</p>
    </section>

    <section>
      <h2>주제 목록 파일 만들기</h2>
      <div class="code-block good">
        <p class="code-label">Claude에게 요청</p>
        <pre>블로그 주제 관리 파일을 만들어줘.

형식:
- 체크박스로 작성 완료 여부 표시
- 주제, 상태(미작성/작성중/완료), 작성일
- topics.md 파일로 저장

일단 "AI 업무 활용" 카테고리로
주제 10개를 만들어줘.</pre>
      </div>

      <div class="code-block">
        <p class="code-label">만들어지는 topics.md 예시</p>
        <pre># 블로그 주제 관리

## AI 업무 활용

| 상태 | 주제 | 작성일 |
|------|------|--------|
| ✅ | 직장인이 AI를 배워야 하는 이유 | 2026-03-15 |
| ✅ | ChatGPT vs Claude 솔직 비교 | 2026-03-17 |
| ⬜ | AI로 이메일 작성 시간 줄이기 | - |
| ⬜ | 회의록 자동 정리하는 방법 | - |
| ⬜ | AI 프롬프트 잘 쓰는 5가지 원칙 | - |
| ⬜ | 비개발자도 할 수 있는 업무 자동화 | - |
| ⬜ | AI 시대에 살아남는 직장인의 조건 | - |
| ⬜ | 하루 30분 AI 학습 루틴 만들기 | - |
| ⬜ | AI로 데이터 분석하는 실전 사례 | - |
| ⬜ | 우리 팀에 AI 도입하기 설득 가이드 | - |</pre>
      </div>
    </section>

    <section>
      <h2>작업 흐름</h2>
      <div class="code-block">
        <p class="code-label">실제 사용 흐름</p>
        <pre>① "topics.md에서 아직 안 쓴 주제 보여줘"
   → 미작성 주제 목록 표시

② 주제를 고르거나 Claude에게 추천받기
   → "이 중에서 지금 쓰기 좋은 주제 추천해줘"

③ 사용자가 주제 확인 (컨펌)
   → "3번 주제로 쓰자"

④ 글 작성 완료 후 자동으로 topics.md 업데이트
   → 상태: ⬜ → ✅, 작성일 자동 기입</pre>
      </div>
    </section>

    <section>
      <h2>자동화 스킬로 만들기</h2>
      <div class="code-block good">
        <p class="code-label">주제 관리까지 포함된 스킬 요청</p>
        <pre>blog-write 스킬을 업그레이드해줘.

실행하면 이 순서로 동작:
1. topics.md에서 미작성 주제 목록을 보여줌
2. 사용자가 주제를 선택하거나 새 주제를 입력
3. 선택된 주제로 블로그 글 작성
4. output 폴더에 파일 저장
5. topics.md의 해당 주제 상태를 ✅로 업데이트</pre>
      </div>
    </section>
  </div>
</template>
