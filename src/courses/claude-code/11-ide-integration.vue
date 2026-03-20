<template>
  <div class="page-content">
    <h1>IDE 연동</h1>
    <p class="subtitle">VS Code 같은 편집기 안에서 Claude를 바로 사용하는 방법입니다.</p>

    <section>
      <h2>IDE 연동이란?</h2>
      <p>Claude Code는 터미널(검은 화면)에서만 쓰는 게 아닙니다. <strong>VS Code 같은 편집기 안에서도</strong> Claude를 바로 사용할 수 있습니다.</p>
      <div class="info-box">
        <p><strong>비유:</strong> 터미널에서 쓰는 건 "전화로 대화"하는 것이고, IDE 연동은 "옆자리에 앉아서 같이 화면 보면서 대화"하는 것과 같습니다.</p>
      </div>
    </section>

    <section>
      <h2>지원하는 편집기</h2>
      <div class="feature-grid">
        <div class="feature-card">
          <h3>VS Code</h3>
          <p>가장 많이 쓰는 편집기. 확장 프로그램을 설치하면 바로 사용 가능합니다.</p>
        </div>
        <div class="feature-card">
          <h3>JetBrains</h3>
          <p>IntelliJ, WebStorm, PyCharm 등에서도 사용할 수 있습니다.</p>
        </div>
      </div>
    </section>

    <section>
      <h2>VS Code에서 시작하기</h2>
      <ol>
        <li>VS Code를 엽니다</li>
        <li>왼쪽 사이드바의 확장 프로그램 아이콘을 클릭합니다</li>
        <li>"Claude Code"를 검색하고 설치합니다</li>
        <li>왼쪽 사이드바에 Claude 아이콘이 생깁니다</li>
      </ol>
    </section>

    <section>
      <h2>IDE에서 쓰면 뭐가 좋은가?</h2>
      <div class="feature-grid">
        <div class="feature-card">
          <h3>코드를 바로 보여줄 수 있음</h3>
          <p>코드를 드래그해서 선택한 뒤 "이 부분 설명해줘"라고 하면 됩니다.</p>
        </div>
        <div class="feature-card">
          <h3>변경 내용을 눈으로 확인</h3>
          <p>Claude가 수정한 부분을 색깔로 구분해서 보여줍니다. 마음에 들면 적용, 아니면 취소.</p>
        </div>
        <div class="feature-card">
          <h3>화면 전환이 필요 없음</h3>
          <p>편집기 안에서 코딩과 AI 대화를 동시에 할 수 있습니다.</p>
        </div>
        <div class="feature-card">
          <h3>프로젝트 구조를 자동으로 이해</h3>
          <p>현재 열린 파일과 프로젝트 구조를 Claude가 자동으로 파악합니다.</p>
        </div>
      </div>
    </section>

    <section>
      <h2>터미널 vs IDE, 뭘 쓸까?</h2>
      <table class="comparison-table">
        <thead>
          <tr>
            <th>상황</th>
            <th>추천</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>코드를 직접 보면서 수정하고 싶을 때</td>
            <td>IDE 연동</td>
          </tr>
          <tr>
            <td>간단한 질문, 빠른 작업</td>
            <td>터미널</td>
          </tr>
          <tr>
            <td>자동화 스크립트에 연결할 때</td>
            <td>터미널</td>
          </tr>
          <tr>
            <td>처음 배우는 중일 때</td>
            <td>IDE 연동 (시각적으로 이해하기 쉬움)</td>
          </tr>
        </tbody>
      </table>
    </section>
  </div>
</template>
