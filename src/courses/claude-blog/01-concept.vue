<template>
  <div class="page-content">
    <h1>자동화 컨셉 이해하기</h1>
    <p class="subtitle">내 글쓰기 패턴을 학습시켜서, 나와 비슷한 스타일의 블로그 글을 자동으로 작성하는 구조입니다.</p>

    <section>
      <h2>핵심 아이디어</h2>
      <p>블로그 글을 처음부터 AI한테 맡기면 "AI가 쓴 티"가 납니다. 하지만 <strong>내가 이전에 쓴 글들을 참고 자료로 넣어주면</strong>, Claude가 내 문체, 구성, 톤을 파악해서 비슷한 스타일로 글을 작성합니다.</p>

      <div class="info-box">
        <p><strong>핵심 공식:</strong> 내가 쓴 글 (참고 자료) + 글쓰기 규칙 (스킬) + 주제 = 나와 비슷한 스타일의 새 글</p>
      </div>
    </section>

    <section>
      <h2>전체 흐름</h2>
      <div class="code-block">
        <p class="code-label">자동화 단계</p>
        <pre>1단계: 내가 이전에 쓴 블로그 글을 파일로 준비
2단계: Claude에게 내 글쓰기 패턴을 분석시킴
3단계: 글쓰기 스킬(규칙)을 만듦
4단계: 주제만 던지면 내 스타일로 글이 완성됨</pre>
      </div>
    </section>

    <section>
      <h2>두 가지 방법</h2>
      <p>코워크와 코드, 어떤 걸로 해도 됩니다. 본인 환경에 맞는 걸 선택하세요.</p>
      <table class="comparison-table">
        <thead>
          <tr>
            <th>방법</th>
            <th>특징</th>
            <th>추천 대상</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td><strong>코워크</strong></td>
            <td>Claude Desktop에서 GUI로 작업. 파일을 드래그해서 넣고 대화로 진행.</td>
            <td>비개발자, 간단하게 시작하고 싶은 사람</td>
          </tr>
          <tr>
            <td><strong>코드</strong></td>
            <td>터미널에서 작업. 스킬 파일을 직접 만들고 세밀하게 제어.</td>
            <td>개발자, 고도화·자동화까지 가고 싶은 사람</td>
          </tr>
        </tbody>
      </table>
    </section>

    <section>
      <h2>준비물</h2>
      <div class="info-box">
        <ul>
          <li><strong>내가 이전에 쓴 블로그 글 3~5개 이상</strong> — 텍스트 파일, 워드, 마크다운 등 아무 형식이나 OK</li>
          <li><strong>Claude 유료 구독</strong> — 코워크 또는 코드 사용을 위해 필요</li>
          <li><strong>글을 쓸 주제</strong> — "AI 업무 활용", "재택근무 팁" 같은 주제</li>
        </ul>
      </div>
    </section>
  </div>
</template>
