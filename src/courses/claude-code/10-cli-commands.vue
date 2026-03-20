<template>
  <div class="page-content">
    <h1>CLI 명령어와 단축키</h1>
    <p class="subtitle">Claude Code를 더 빠르게 사용할 수 있는 명령어와 단축키입니다.</p>

    <section>
      <h2>Claude Code 실행하기</h2>
      <div class="code-block">
        <p class="code-label">기본 사용법</p>
        <pre># 대화 시작
claude

# 질문과 함께 바로 시작
claude "이 프로젝트가 뭐하는 건지 설명해줘"

# 지난 대화 이어서 하기
claude --continue</pre>
      </div>
    </section>

    <section>
      <h2>자주 쓰는 키보드 단축키</h2>
      <table class="comparison-table">
        <thead>
          <tr>
            <th>단축키</th>
            <th>하는 일</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td><code>Enter</code></td>
            <td>메시지 보내기</td>
          </tr>
          <tr>
            <td><code>Shift + Enter</code></td>
            <td>줄바꿈 (보내지 않고 다음 줄로)</td>
          </tr>
          <tr>
            <td><code>Ctrl + C</code></td>
            <td>현재 작업 취소</td>
          </tr>
          <tr>
            <td><code>Ctrl + D</code></td>
            <td>Claude Code 종료</td>
          </tr>
          <tr>
            <td><code>Ctrl + L</code></td>
            <td>화면 깨끗하게 지우기</td>
          </tr>
          <tr>
            <td><code>Esc + Esc</code></td>
            <td>되돌리기</td>
          </tr>
          <tr>
            <td><code>↑ / ↓</code></td>
            <td>이전에 입력했던 내용 불러오기</td>
          </tr>
        </tbody>
      </table>
      <div class="info-box">
        <p><strong>팁:</strong> 대화 중 <code>?</code>를 입력하면 사용 가능한 단축키 목록을 볼 수 있습니다.</p>
      </div>
    </section>

  </div>
</template>
