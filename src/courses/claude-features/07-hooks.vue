<template>
  <div class="page-content">
    <h1>Hooks (자동화)</h1>
    <p class="subtitle">특정 상황이 되면 자동으로 작업을 실행시키는 기능입니다.</p>

    <section>
      <h2>Hooks란?</h2>
      <p><strong>Hooks</strong>는 "이런 일이 생기면, 자동으로 이것도 해줘"라는 규칙입니다. Claude가 특정 작업을 할 때 전/후로 원하는 동작을 자동 실행합니다.</p>
      <div class="info-box">
        <p><strong>비유:</strong> "문을 열면 자동으로 불이 켜지는 센서"와 같습니다. 매번 직접 스위치를 누를 필요 없이 자동으로 처리됩니다.</p>
      </div>
    </section>

    <section>
      <h2>언제 자동 실행되나?</h2>
      <table class="comparison-table">
        <thead>
          <tr>
            <th>시점</th>
            <th>설명</th>
            <th>활용 예시</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td><strong>작업 실행 전</strong></td>
            <td>Claude가 도구를 쓰기 직전</td>
            <td>위험한 명령 자동 차단</td>
          </tr>
          <tr>
            <td><strong>작업 실행 후</strong></td>
            <td>Claude가 도구를 쓴 직후</td>
            <td>파일 저장 후 자동 정리</td>
          </tr>
          <tr>
            <td><strong>알림 발생 시</strong></td>
            <td>알림이 발생할 때</td>
            <td>긴 작업 완료 시 알림 보내기</td>
          </tr>
          <tr>
            <td><strong>응답 완료 시</strong></td>
            <td>Claude의 답변이 끝났을 때</td>
            <td>작업 완료 후 자동 검사</td>
          </tr>
        </tbody>
      </table>
    </section>

    <section>
      <h2>가장 쉽게 만드는 방법</h2>
      <p>직접 설정 파일을 편집할 필요 없이, <strong>Claude에게 대화로 요청</strong>하면 됩니다.</p>
      <div class="code-block good">
        <p class="code-label">대화로 Hook 만들기</p>
        <pre>파일을 수정할 때마다 자동으로 코드 정리해주는 Hook을 만들어줘</pre>
      </div>
      <div class="code-block good">
        <p class="code-label">더 구체적으로 요청하기</p>
        <pre>파일에 비밀번호나 API 키가 포함되면 자동으로 경고해주는 Hook을 설정해줘</pre>
      </div>
      <p>Claude가 <code>settings.json</code>에 Hook 설정을 자동으로 추가해줍니다.</p>
    </section>

    <section>
      <h2>직접 설정하기</h2>
      <p>Hooks는 <code>settings.json</code> 파일 안에서 정의합니다. 별도의 폴더가 있는 것이 아닙니다.</p>
      <div class="code-block good">
        <p class="code-label">예시: 파일 수정 후 자동으로 정리해주기</p>
        <pre>{
  "hooks": {
    "PostToolUse": [
      {
        "matcher": "Write|Edit",
        "command": "npx prettier --write \"$CLAUDE_FILE_PATH\""
      }
    ]
  }
}</pre>
      </div>
      <p>위 설정은 "Claude가 파일을 수정할 때마다, 자동으로 코드를 깔끔하게 정리해줘"라는 뜻입니다.</p>
    </section>

    <section>
      <h2>실용적인 활용</h2>
      <div class="feature-grid">
        <div class="feature-card">
          <h3>자동 코드 정리</h3>
          <p>파일을 수정할 때마다 자동으로 줄 맞춤, 띄어쓰기 등을 깔끔하게 정리합니다.</p>
        </div>
        <div class="feature-card">
          <h3>완료 알림</h3>
          <p>오래 걸리는 작업이 끝나면 알림을 보내줍니다.</p>
        </div>
        <div class="feature-card">
          <h3>자동 검사</h3>
          <p>코드 변경 후 자동으로 오류가 없는지 확인합니다.</p>
        </div>
        <div class="feature-card">
          <h3>보안 검사</h3>
          <p>파일에 비밀번호 같은 민감 정보가 실수로 들어가지 않았는지 확인합니다.</p>
        </div>
      </div>
    </section>
  </div>
</template>
