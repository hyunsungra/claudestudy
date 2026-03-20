<template>
  <div class="page-content">
    <h1>참고 문서 추가와 스킬 생성</h1>
    <p class="subtitle">코워크에 내 글을 넣어주고, 글쓰기 스킬을 만드는 과정입니다.</p>

    <section>
      <h2>1단계: 작성했던 글 파일 준비</h2>
      <p>내가 이전에 쓴 블로그 글을 파일로 준비합니다. 형식은 상관없습니다.</p>
      <div class="code-block">
        <p class="code-label">폴더 구조 예시</p>
        <pre>블로그자료/
├── 글01_AI업무활용.md
├── 글02_재택근무팁.md
├── 글03_생산성도구.md
├── 글04_커리어전환.md
└── 글05_사이드프로젝트.md</pre>
      </div>
      <div class="info-box">
        <p><strong>팁:</strong> 글이 많을수록 Claude가 내 스타일을 더 정확하게 파악합니다. 최소 3개, 가능하면 5개 이상 넣어주세요.</p>
      </div>
    </section>

    <section>
      <h2>2단계: 코워크에서 작업 폴더 지정</h2>
      <ol>
        <li>Claude Desktop을 열고 <strong>Cowork 탭</strong>으로 이동</li>
        <li>새 작업 공간을 만들고, 위 글 파일이 있는 <strong>폴더를 작업 폴더로 지정</strong></li>
      </ol>
    </section>

    <section>
      <h2>3단계: 글쓰기 스킬 생성 요청</h2>
      <p>Claude에게 내 글을 분석하고 글쓰기 스킬을 만들어달라고 합니다.</p>

      <div class="code-block good">
        <p class="code-label">코워크에 이렇게 말하세요</p>
        <pre>이 폴더에 있는 블로그 글 파일들을 전부 읽고,
내 글쓰기 패턴을 분석해줘.

분석할 것:
- 글의 구성 (도입-본문-마무리 패턴)
- 문체와 톤 (격식체/반말, 유머 정도 등)
- 자주 쓰는 표현이나 말투
- 한 글의 평균 길이
- 소제목 사용 패턴

분석 결과를 바탕으로,
앞으로 내 스타일대로 블로그 글을 작성해주는
글쓰기 스킬을 만들어줘.</pre>
      </div>

      <p>Claude가 글을 전부 읽고 패턴을 파악한 뒤, 글쓰기 규칙이 담긴 스킬을 만들어줍니다.</p>
    </section>

    <section>
      <h2>만들어진 스킬 확인</h2>
      <p>스킬이 잘 만들어졌는지 확인하고, 필요하면 수정을 요청하세요.</p>
      <div class="code-block">
        <p class="code-label">수정 요청 예시</p>
        <pre>글 도입부에 항상 개인 경험을 넣는 패턴이 빠졌어.
그것도 규칙에 추가해줘.</pre>
      </div>
    </section>
  </div>
</template>
