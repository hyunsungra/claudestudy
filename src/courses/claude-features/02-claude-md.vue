<template>
  <div class="page-content">
    <h1>CLAUDE.md 파일</h1>
    <p class="subtitle">Claude에게 "이 프로젝트에서는 이렇게 작업해줘"라고 알려주는 지시서입니다.</p>

    <section>
      <h2>CLAUDE.md란?</h2>
      <p><strong>CLAUDE.md</strong>는 Claude Code가 프로젝트 작업 시 항상 참고하는 <strong>지시서</strong>입니다. 여기에 적어둔 내용을 Claude가 매번 읽고, 그에 맞게 작업합니다.</p>
      <div class="info-box">
        <p><strong>비유:</strong> 새로운 팀원에게 주는 "업무 가이드"와 같습니다. "우리 팀은 이렇게 일해요"를 한 번 적어두면, 매번 말하지 않아도 됩니다.</p>
      </div>
    </section>

    <section>
      <h2>뭘 적어두면 좋을까?</h2>
      <div class="feature-grid">
        <div class="feature-card">
          <h3>프로젝트 소개</h3>
          <p>이 프로젝트가 뭐하는 건지, 어떤 기술을 쓰는지 간단히 적어줍니다.</p>
        </div>
        <div class="feature-card">
          <h3>작업 방법</h3>
          <p>개발 서버 실행법, 테스트 방법 등 자주 하는 작업의 명령어를 적어둡니다.</p>
        </div>
        <div class="feature-card">
          <h3>작업 규칙</h3>
          <p>"한국어로 설명해줘", "파일 수정 전에 먼저 물어봐" 같은 규칙을 적습니다.</p>
        </div>
        <div class="feature-card">
          <h3>하지 말아야 할 것</h3>
          <p>"이 폴더는 건드리지 마", "이 파일은 수정하지 마" 같은 금지사항을 적습니다.</p>
        </div>
      </div>
    </section>

    <section>
      <h2>작성 예시</h2>
      <div class="code-block good">
        <p class="code-label">CLAUDE.md 예시</p>
        <pre># 프로젝트 소개
이 프로젝트는 교육용 웹사이트입니다.
Vue 3와 Vite를 사용하고 있습니다.

# 자주 쓰는 명령어
- 개발 서버 실행: npm run dev
- 배포용 파일 생성: npm run build

# 작업 규칙
- 설명은 항상 한국어로 해주세요
- 새 파일을 만들기 전에 먼저 물어봐주세요
- 주석도 한국어로 작성해주세요

# 폴더 안내
- src/courses/ — 강좌 콘텐츠가 들어있는 폴더
- src/components/ — 공통으로 쓰는 화면 조각들
- public/ — 이미지 등 정적 파일

# 주의사항
- src/courses/index.js는 새 강좌 추가 시 수정 필요
- .claude/ 폴더 안의 설정은 함부로 바꾸지 마세요</pre>
      </div>
    </section>

    <section>
      <h2>가장 쉽게 만드는 방법</h2>
      <p>직접 작성할 필요 없이, <strong>Claude에게 만들어달라고</strong> 하면 됩니다.</p>
      <div class="code-block good">
        <p class="code-label">방법 1: 명령어로 자동 생성</p>
        <pre>/init</pre>
      </div>
      <p><code>/init</code>을 실행하면 Claude가 프로젝트를 분석해서 CLAUDE.md를 자동으로 만들어줍니다.</p>

      <div class="code-block good">
        <p class="code-label">방법 2: 대화로 요청</p>
        <pre>이 프로젝트에 맞는 CLAUDE.md 파일을 만들어줘</pre>
      </div>
      <p>Claude가 프로젝트 구조, 사용 기술, 파일 구성 등을 파악해서 알아서 작성해줍니다. 생성된 내용을 보고 필요한 부분만 수정하면 됩니다.</p>
    </section>

    <section>
      <h2>어디에 놓을 수 있나?</h2>
      <table class="comparison-table">
        <thead>
          <tr>
            <th>위치</th>
            <th>적용 범위</th>
            <th>예시</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>프로젝트 폴더 (<code>CLAUDE.md</code>)</td>
            <td>이 프로젝트 전체</td>
            <td>"이 프로젝트는 Vue로 만들고 있어"</td>
          </tr>
          <tr>
            <td>하위 폴더 (<code>src/CLAUDE.md</code>)</td>
            <td>해당 폴더만</td>
            <td>"이 폴더의 파일은 TypeScript로 작성해"</td>
          </tr>
        </tbody>
      </table>
      <div class="info-box">
        <p>하위 폴더의 CLAUDE.md는 상위 내용에 <strong>추가</strong>로 적용됩니다. 상위 내용을 덮어쓰지 않습니다.</p>
      </div>
      <p>참고로 모든 프로젝트에 공통 적용하고 싶은 규칙이 있다면, 전역 설정 폴더에도 CLAUDE.md를 넣을 수 있습니다. 자세한 위치는 <strong>프로젝트 폴더 구조</strong> 페이지를 참고하세요.</p>
    </section>

    <section>
      <h2>잘 쓰는 팁</h2>
      <ul>
        <li><strong>먼저 Claude에게 만들어달라고 하세요:</strong> <code>/init</code> 또는 "CLAUDE.md 만들어줘"가 가장 빠릅니다</li>
        <li><strong>구체적으로 쓰세요:</strong> "잘 해줘"보다 "한국어로, 존댓말로, 3줄 이내로"가 좋습니다</li>
        <li><strong>자주 반복하는 말을 적어두세요:</strong> 매번 같은 지시를 안 해도 됩니다</li>
        <li><strong>금지사항도 적으세요:</strong> 하면 안 되는 것을 명확히 해두면 실수가 줄어듭니다</li>
        <li><strong>너무 길게 쓰지 마세요:</strong> Claude가 읽는 데도 용량이 소모됩니다</li>
      </ul>
    </section>
  </div>
</template>
