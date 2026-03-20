<template>
  <div class="page-content">
    <h1>API로 첨부 이미지 생성</h1>
    <p class="subtitle">블로그 글에 들어갈 이미지까지 AI로 자동 생성하는 방법입니다.</p>

    <section>
      <h2>아이디어</h2>
      <p>블로그 글을 쓰면 썸네일이나 본문 이미지가 필요합니다. 이미지 생성 API를 연동하면, <strong>글 내용에 맞는 이미지를 자동으로 만들어서 함께 저장</strong>할 수 있습니다.</p>
    </section>

    <section>
      <h2>이미지 생성 API</h2>
      <p>대표적인 이미지 생성 서비스들입니다.</p>
      <table class="comparison-table">
        <thead>
          <tr>
            <th>서비스</th>
            <th>특징</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td><strong>DALL-E (OpenAI)</strong></td>
            <td>텍스트 설명으로 이미지 생성. API로 호출 가능.</td>
          </tr>
          <tr>
            <td><strong>Stable Diffusion</strong></td>
            <td>오픈소스. 로컬 실행 또는 API 사용 가능.</td>
          </tr>
          <tr>
            <td><strong>Midjourney</strong></td>
            <td>고품질 이미지. Discord 또는 웹에서 사용.</td>
          </tr>
        </tbody>
      </table>
    </section>

    <section>
      <h2>Claude Code에서 연동하기</h2>
      <p>Claude Code에게 이미지 생성 스크립트를 만들어달라고 하면 됩니다.</p>

      <div class="code-block good">
        <p class="code-label">이미지 생성 자동화 요청</p>
        <pre>블로그 글을 쓴 뒤에 자동으로 썸네일 이미지를 생성하는 기능을 추가해줘.

조건:
- 글 제목과 핵심 키워드를 바탕으로 이미지 프롬프트를 만들어줘
- DALL-E API를 사용해서 이미지 생성
- 생성된 이미지를 output 폴더에 글과 같은 이름으로 저장
- API 키는 환경변수에서 읽어오게</pre>
      </div>
    </section>

    <section>
      <h2>완성된 자동화 흐름</h2>
      <div class="code-block">
        <p class="code-label">전체 프로세스</p>
        <pre>① 주제 선택 (topics.md에서)
② 블로그 글 작성 (서브에이전트 병렬)
③ 각 글에 맞는 이미지 프롬프트 생성
④ 이미지 API 호출 → 이미지 생성
⑤ output 폴더에 글 + 이미지 함께 저장
⑥ topics.md 상태 업데이트

결과:
output/
├── 2026-03-20_AI업무활용.md        # 글
├── 2026-03-20_AI업무활용.png       # 썸네일
├── 2026-03-20_협업도구추천.md
├── 2026-03-20_협업도구추천.png
└── ...</pre>
      </div>
    </section>

    <section>
      <h2>주의할 점</h2>
      <div class="info-box warning">
        <ul>
          <li><strong>API 비용:</strong> 이미지 생성 API는 건당 비용이 발생합니다. 대량 생성 시 비용을 확인하세요.</li>
          <li><strong>저작권:</strong> AI 생성 이미지의 저작권은 서비스마다 다릅니다. 상업적 사용 시 해당 서비스의 이용약관을 확인하세요.</li>
          <li><strong>품질 검토:</strong> 생성된 이미지가 글 내용과 맞는지, 어색하지 않은지 직접 확인하세요.</li>
        </ul>
      </div>
    </section>
  </div>
</template>
