<template>
  <div class="page-content">
    <h1>글쓰기 스킬과 참고 자료 세팅</h1>
    <p class="subtitle">Claude Code에서 글쓰기 스킬을 만들고 참고 자료를 세팅하는 방법입니다.</p>

    <section>
      <h2>1단계: 프로젝트 폴더 준비</h2>
      <p>블로그 작업용 폴더를 하나 만들고, 내가 쓴 글들을 넣어둡니다.</p>
      <div class="code-block">
        <p class="code-label">폴더 구조</p>
        <pre>my-blog/
├── references/                  # 참고 자료 (내가 쓴 글들)
│   ├── 글01_AI업무활용.md
│   ├── 글02_재택근무팁.md
│   ├── 글03_생산성도구.md
│   └── ...
├── output/                      # 완성된 글이 저장될 폴더
└── .claude/
    └── skills/                  # 글쓰기 스킬이 들어갈 곳</pre>
      </div>
    </section>

    <section>
      <h2>2단계: Claude Code 실행 후 스킬 생성 요청</h2>
      <div class="code-block good">
        <p class="code-label">터미널에서 실행</p>
        <pre>cd my-blog
claude</pre>
      </div>

      <div class="code-block good">
        <p class="code-label">Claude에게 요청</p>
        <pre>references 폴더에 있는 내 블로그 글들을 전부 읽고,
내 글쓰기 패턴을 분석해줘.

분석할 것:
- 글 구성 패턴 (도입-본문-마무리)
- 문체, 톤, 자주 쓰는 표현
- 소제목 사용 방식
- 한 글의 평균 길이

분석 결과를 바탕으로 블로그 글쓰기 커스텀 스킬을 만들어줘.
스킬 이름은 "blog-write"로.</pre>
      </div>

      <p>Claude가 <code>.claude/skills/blog-write/SKILL.md</code>를 자동으로 만들어줍니다.</p>
    </section>

    <section>
      <h2>3단계: 스킬 지침 확인 및 수정</h2>
      <p>만들어진 스킬 파일을 확인하고, 빠진 규칙을 추가합니다.</p>

      <div class="code-block">
        <p class="code-label">스킬 확인</p>
        <pre>blog-write 스킬 내용 보여줘</pre>
      </div>

      <div class="code-block good">
        <p class="code-label">수정 요청 예시</p>
        <pre>blog-write 스킬에 이 규칙들을 추가해줘:

- 도입부에 항상 개인 경험이나 에피소드를 넣을 것
- 소제목은 5개 이내로 제한
- 마지막에 "핵심 정리" 섹션 항상 포함
- references 폴더의 글들을 참고해서 문체를 맞출 것</pre>
      </div>
    </section>

    <section>
      <h2>만들어진 스킬 구조</h2>
      <div class="code-block">
        <p class="code-label">완성된 구조</p>
        <pre>my-blog/
├── references/                  # 내 글 참고 자료
├── output/                      # 완성된 글 저장
└── .claude/
    └── skills/
        └── blog-write/
            └── SKILL.md         # /blog-write 로 실행 가능</pre>
      </div>
      <p>이제 <code>/blog-write</code> 명령어로 글쓰기 스킬을 실행할 수 있습니다.</p>
    </section>
  </div>
</template>
