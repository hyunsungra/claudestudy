<template>
  <div class="page-content">
    <h1>코드 개선과 리팩토링</h1>
    <p class="subtitle">기존 코드를 더 좋게 만들어달라고 시키는 방법입니다.</p>

    <section>
      <h2>리팩토링이란?</h2>
      <p><strong>리팩토링</strong>은 동작은 그대로 유지하면서 코드를 더 깔끔하고 효율적으로 바꾸는 작업입니다. Claude Code는 프로젝트 전체를 이해한 상태에서 리팩토링하기 때문에, 한 파일만 보고 수정하는 것보다 훨씬 안전합니다.</p>
    </section>

    <section>
      <h2>실전 예시</h2>

      <div class="code-block good">
        <p class="code-label">코드 정리 요청</p>
        <pre>src/utils/ 폴더의 코드를 정리해줘.
중복되는 함수가 있으면 합치고, 사용하지 않는 건 지워줘.</pre>
      </div>

      <div class="code-block good">
        <p class="code-label">성능 개선</p>
        <pre>이 페이지가 느린데, 원인을 찾아서 개선해줘.
특히 목록을 불러오는 부분이 느린 것 같아.</pre>
      </div>

      <div class="code-block good">
        <p class="code-label">구조 변경</p>
        <pre>지금 모든 로직이 App.vue 한 파일에 들어있는데,
기능별로 파일을 분리해줘.</pre>
      </div>

      <div class="code-block good">
        <p class="code-label">코드 리뷰 요청</p>
        <pre>내가 오늘 작성한 코드를 리뷰해줘.
문제가 있거나 더 좋게 만들 수 있는 부분을 알려줘.</pre>
      </div>
    </section>

    <section>
      <h2>리팩토링 시 주의할 점</h2>
      <div class="info-box">
        <ul>
          <li><strong>리팩토링 전에 커밋해두세요:</strong> "먼저 현재 상태를 커밋해줘" → 이후 리팩토링. 문제가 생기면 되돌릴 수 있습니다</li>
          <li><strong>범위를 한정하세요:</strong> "전체 프로젝트 리팩토링해줘"보다 "이 파일/폴더만"이 안전합니다</li>
          <li><strong>테스트를 같이 시키세요:</strong> "리팩토링하고 테스트도 돌려줘"</li>
        </ul>
      </div>
    </section>
  </div>
</template>
