<template>
  <div class="page-content">
    <h1>서브에이전트로 대량 작성</h1>
    <p class="subtitle">주제를 먼저 만들고, 확인 후 여러 글을 동시에 작성하는 방법입니다.</p>

    <section>
      <h2>흐름</h2>
      <div class="code-block">
        <p class="code-label">대량 작성 프로세스</p>
        <pre>① 주제 생성 요청
   "이번 달 블로그 주제 5개 만들어줘"

② 사용자 컨펌
   주제 목록을 확인하고 수정/승인

③ 병렬 작성
   승인된 주제들을 서브에이전트가 동시에 작성

④ 결과 확인
   output 폴더에 5개 글이 한 번에 생성됨</pre>
      </div>
    </section>

    <section>
      <h2>실전 사용법</h2>

      <div class="code-block good">
        <p class="code-label">1. 주제 먼저 만들기</p>
        <pre>"클라우드 업무 도구" 카테고리로
이번 달 블로그 주제 5개를 만들어줘.

조건:
- 검색량이 높을 만한 실용적인 주제
- 내 기존 글과 겹치지 않게 (topics.md 참고)
- 주제마다 핵심 키워드 3개도 같이 정리</pre>
      </div>

      <p>Claude가 주제 5개를 제안합니다. 확인하고 수정할 것이 있으면 수정합니다.</p>

      <div class="code-block good">
        <p class="code-label">2. 확인 후 작성 지시</p>
        <pre>좋아. 이 5개 주제로 전부 글 써줘.
내 스타일대로, 각각 output 폴더에 저장해줘.
topics.md도 업데이트해줘.</pre>
      </div>
    </section>

    <section>
      <h2>서브에이전트가 동시에 작성</h2>
      <div class="code-block">
        <p class="code-label">내부 동작</p>
        <pre>Claude:
  ├── 서브에이전트 A → "클라우드 스토리지 비교" 글 작성
  ├── 서브에이전트 B → "팀 협업 도구 추천" 글 작성
  ├── 서브에이전트 C → "자동화 도구 활용법" 글 작성
  ├── 서브에이전트 D → "보안 체크리스트" 글 작성
  └── 서브에이전트 E → "비용 절감 사례" 글 작성

→ 5개 글이 거의 동시에 완성</pre>
      </div>
      <p>하나씩 순서대로 쓰는 게 아니라 <strong>동시에 작성</strong>하기 때문에, 5개를 써도 1개 쓰는 시간과 비슷합니다.</p>
    </section>

    <section>
      <h2>완성 후 일괄 검토</h2>
      <div class="code-block">
        <p class="code-label">검토 요청</p>
        <pre>output 폴더에 오늘 만든 글들을 전부 읽고,
각 글의 품질을 체크해줘.

체크 항목:
- 내 글쓰기 스타일과 맞는지
- 내용이 충분한지
- 오탈자나 어색한 표현은 없는지

문제가 있는 부분만 알려줘.</pre>
      </div>
    </section>
  </div>
</template>
