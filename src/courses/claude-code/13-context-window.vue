<template>
  <div class="page-content">
    <h1>컨텍스트 윈도우 관리</h1>
    <p class="subtitle">Claude가 한 번에 기억할 수 있는 양과, 이를 효율적으로 쓰는 방법입니다.</p>

    <section>
      <h2>컨텍스트 윈도우란?</h2>
      <p><strong>컨텍스트 윈도우</strong>는 Claude가 하나의 대화에서 기억할 수 있는 <strong>최대 정보량</strong>입니다.</p>
      <div class="info-box">
        <p><strong>비유:</strong> 작업 책상이라고 생각하세요. 책상이 넓으면 많은 자료를 펼쳐놓고 일할 수 있지만, 무한히 넓지는 않습니다. 책상이 가득 차면 오래된 자료를 정리해야 새 자료를 올려놓을 수 있습니다.</p>
      </div>
    </section>

    <section>
      <h2>모델별 용량</h2>
      <table class="comparison-table">
        <thead>
          <tr>
            <th>모델</th>
            <th>용량</th>
            <th>쉽게 말하면</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Opus</td>
            <td>최대 100만 토큰</td>
            <td>소설 3~4권 분량을 한 번에 처리</td>
          </tr>
          <tr>
            <td>Sonnet</td>
            <td>20만 토큰</td>
            <td>소설 1권 정도</td>
          </tr>
          <tr>
            <td>Haiku</td>
            <td>20만 토큰</td>
            <td>소설 1권 정도, 대신 빠름</td>
          </tr>
        </tbody>
      </table>
    </section>

    <section>
      <h2>공간이 부족해지면?</h2>
      <p>대화가 길어지면 공간이 가득 찹니다. 이때 Claude는 자동으로 <strong>이전 대화를 요약</strong>해서 공간을 확보합니다.</p>
      <div class="code-block">
        <p class="code-label">동작 흐름</p>
        <pre>대화 시작   → 공간 여유 있음, 정상 동작
대화 계속   → 공간 70% 사용, 아직 괜찮음
대화 계속   → 공간 90% ⚠️ 자동으로 요약 시작
요약 완료   → 공간 40%로 복구, 대화 계속 가능</pre>
      </div>
    </section>

    <section>
      <h2>공간을 아끼는 방법</h2>
      <div class="feature-grid">
        <div class="feature-card">
          <h3>/compact 사용</h3>
          <p>대화를 직접 요약해서 공간을 확보합니다. 부족해지기 전에 미리 해두면 좋습니다.</p>
        </div>
        <div class="feature-card">
          <h3>/clear로 새로 시작</h3>
          <p>주제가 완전히 바뀌면 새 대화를 시작하는 게 효율적입니다.</p>
        </div>
        <div class="feature-card">
          <h3>구체적으로 질문하기</h3>
          <p>"전체 파일 다 읽어줘"보다 "이 파일의 30번째 줄 설명해줘"가 공간을 아낍니다.</p>
        </div>
        <div class="feature-card">
          <h3>CLAUDE.md 활용</h3>
          <p>매번 반복하는 지시는 CLAUDE.md에 적어두면 대화 공간을 아낄 수 있습니다.</p>
        </div>
      </div>
    </section>

    <section>
      <h2>사용량 확인하기</h2>
      <div class="code-block">
        <p class="code-label">확인 명령어</p>
        <pre># 사용량 한도 확인
/usage

# 컨텍스트 사용량 시각적으로 보기
/context</pre>
      </div>
    </section>
  </div>
</template>
