<template>
  <div class="page-content">
    <h1>블로그 글을 파일로 만들기</h1>
    <p class="subtitle">스킬을 실행해서 블로그 글을 파일로 바로 생성하는 방법입니다.</p>

    <section>
      <h2>스킬로 글 작성하기</h2>

      <div class="code-block good">
        <p class="code-label">스킬 실행</p>
        <pre>/blog-write</pre>
      </div>
      <p>스킬을 실행하면 Claude가 주제를 물어보거나, 주제와 함께 요청할 수 있습니다.</p>

      <div class="code-block good">
        <p class="code-label">주제와 함께 요청</p>
        <pre>"직장인이 AI를 배워야 하는 이유" 주제로 블로그 글 써줘.
내 스타일대로, output 폴더에 마크다운 파일로 저장해줘.</pre>
      </div>
    </section>

    <section>
      <h2>결과 확인 및 수정</h2>
      <p>Claude가 글을 작성하고 <code>output/</code> 폴더에 파일로 저장합니다.</p>

      <div class="code-block">
        <p class="code-label">수정 요청</p>
        <pre># 톤 수정
방금 쓴 글 톤이 너무 딱딱해. 좀 더 편하게 바꿔줘.

# 내용 추가
2번째 소제목에 구체적인 도구 이름을 추가해줘.

# 길이 조절
1,500자로 줄여줘.</pre>
      </div>
    </section>

    <section>
      <h2>연속으로 여러 글 작성하기</h2>
      <div class="code-block good">
        <p class="code-label">여러 주제를 한 번에</p>
        <pre>아래 3개 주제로 블로그 글을 각각 써줘.
전부 output 폴더에 저장해줘.

1. "AI 시대, 비개발자도 코딩을 배워야 할까?"
2. "ChatGPT vs Claude, 솔직한 비교"
3. "업무 자동화로 퇴근시간 1시간 앞당긴 방법"</pre>
      </div>
      <p>Claude가 서브에이전트를 활용해서 여러 글을 동시에 작성할 수 있습니다.</p>
    </section>
  </div>
</template>
