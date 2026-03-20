<template>
  <div class="page-content">
    <h1>버그 찾기와 수정</h1>
    <p class="subtitle">에러가 났을 때 Claude Code에게 원인을 찾고 고쳐달라고 시키는 방법입니다.</p>

    <section>
      <h2>에러 메시지를 그대로 보여주면 된다</h2>
      <p>에러가 나면 복잡하게 생각할 필요 없습니다. <strong>에러 메시지를 그대로 Claude에게 보여주세요.</strong> 원인을 찾아서 코드를 직접 수정해줍니다.</p>
    </section>

    <section>
      <h2>실전 예시</h2>

      <div class="code-block good">
        <p class="code-label">에러 메시지 붙여넣기</p>
        <pre>이 에러가 나는데 고쳐줘:

TypeError: Cannot read properties of undefined (reading 'map')
  at UserList.vue:15</pre>
      </div>
      <p>Claude가 해당 파일을 열어서 15번째 줄을 확인하고, 원인을 파악한 뒤 코드를 수정합니다.</p>

      <div class="code-block good">
        <p class="code-label">증상만 설명해도 된다</p>
        <pre>로그인하면 빈 화면이 나와. 콘솔에 에러는 없는데 화면에 아무것도 안 뜸.</pre>
      </div>

      <div class="code-block good">
        <p class="code-label">특정 상황에서만 발생하는 버그</p>
        <pre>목록에 데이터가 10개 이상이면 스크롤이 안 돼.
9개까지는 잘 되는데 10개부터 멈춰.</pre>
      </div>
    </section>

    <section>
      <h2>Claude가 버그를 고치는 과정</h2>
      <div class="code-block">
        <p class="code-label">내부 동작 흐름</p>
        <pre>1. 에러 메시지에서 관련 파일과 줄 번호 파악
2. 해당 파일을 열어서 코드 확인
3. 관련된 다른 파일도 탐색 (import, 의존성 등)
4. 원인 분석 및 수정 방안 결정
5. 코드 수정 (승인 후)
6. 필요하면 테스트 실행으로 확인</pre>
      </div>
    </section>

    <section>
      <h2>디버깅 팁</h2>
      <div class="info-box">
        <ul>
          <li><strong>에러 메시지 전체를 보여주세요:</strong> 일부만 보여주면 원인을 못 찾을 수 있습니다</li>
          <li><strong>재현 방법을 알려주세요:</strong> "로그인 버튼 누르면 발생", "데이터 10개 이상일 때" 등</li>
          <li><strong>"원인 분석 + 수정 + 테스트까지":</strong> 한 번에 요청하면 됩니다. "에러 원인 분석하고, 수정하고, 회귀 테스트 코드도 작성해줘"</li>
          <li><strong>한 번에 안 되면 추가 정보를 주세요:</strong> "환경은 Windows고, Node 20 쓰고 있어" 등</li>
          <li><strong>Plan 모드로 먼저 분석:</strong> 바로 고치기 불안하면 <code>Shift+Tab</code> 2번 → Plan 모드에서 원인만 먼저 파악한 뒤, Normal로 돌아와서 수정</li>
        </ul>
      </div>
    </section>
  </div>
</template>
