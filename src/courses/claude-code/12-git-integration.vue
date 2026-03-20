<template>
  <div class="page-content">
    <h1>Git 연동</h1>
    <p class="subtitle">Claude가 코드 버전 관리를 도와주는 방식을 알아봅시다.</p>

    <section>
      <h2>Git이란?</h2>
      <p><strong>Git</strong>은 파일의 변경 이력을 관리하는 도구입니다. "언제, 뭘 바꿨는지" 기록을 남기고, 필요하면 이전 상태로 돌아갈 수 있습니다. Claude Code는 Git과 자동으로 연동되어 버전 관리를 도와줍니다.</p>
    </section>

    <section>
      <h2>Claude에게 시킬 수 있는 Git 작업</h2>
      <div class="feature-grid">
        <div class="feature-card">
          <h3>변경사항 확인</h3>
          <p>"뭐가 바뀌었어?" 하면 현재 수정된 파일과 내용을 알려줍니다.</p>
        </div>
        <div class="feature-card">
          <h3>커밋 (기록 남기기)</h3>
          <p>"커밋해줘" 하면 변경 내용을 분석해서 적절한 설명과 함께 기록합니다.</p>
        </div>
        <div class="feature-card">
          <h3>PR 만들기</h3>
          <p>"PR 만들어줘" 하면 변경사항을 정리해서 검토 요청을 자동으로 만듭니다.</p>
        </div>
        <div class="feature-card">
          <h3>이력 조회</h3>
          <p>"최근에 뭐가 바뀌었어?" 하면 최근 변경 기록을 정리해서 알려줍니다.</p>
        </div>
      </div>
    </section>

    <section>
      <h2>Claude의 안전 장치</h2>
      <p>Claude는 Git 작업에서 <strong>실수를 방지하기 위한 규칙</strong>을 따릅니다.</p>
      <table class="comparison-table">
        <thead>
          <tr>
            <th>규칙</th>
            <th>이유</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>코드를 올리기 전에 항상 물어봄</td>
            <td>실수로 미완성 코드가 올라가는 것 방지</td>
          </tr>
          <tr>
            <td>이전 기록을 함부로 덮어쓰지 않음</td>
            <td>다른 사람의 작업이 사라지는 것 방지</td>
          </tr>
          <tr>
            <td>비밀번호 파일은 경고함</td>
            <td>민감한 정보가 공개되는 것 방지</td>
          </tr>
          <tr>
            <td>파일을 하나씩 골라서 기록함</td>
            <td>불필요한 파일이 섞여 들어가는 것 방지</td>
          </tr>
        </tbody>
      </table>
      <div class="info-box">
        <p><strong>안심하세요:</strong> Claude는 위험한 Git 작업(강제 올리기, 기록 삭제 등)은 하지 않습니다. 중요한 작업은 항상 확인을 거칩니다.</p>
      </div>
    </section>
  </div>
</template>
