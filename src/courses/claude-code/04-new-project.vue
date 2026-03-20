<template>
  <div class="page-content">
    <h1>새 프로젝트 만들기</h1>
    <p class="subtitle">Claude Code에게 프로젝트를 처음부터 만들어달라고 시키는 방법입니다.</p>

    <section>
      <h2>프로젝트 생성도 대화로</h2>
      <p>빈 폴더에서 Claude Code를 실행하고 원하는 프로젝트를 말하면, <strong>폴더 구조부터 코드까지 알아서 만들어줍니다.</strong></p>

      <div class="code-block good">
        <p class="code-label">웹사이트 프로젝트 만들기</p>
        <pre>Vue 3 + Vite로 웹사이트 프로젝트를 만들어줘.
한국어 교육용 사이트야.</pre>
      </div>

      <div class="code-block good">
        <p class="code-label">기획서 기반 구현</p>
        <pre>이 기획서 내용을 보고
API 엔드포인트, 서비스, 테스트 코드까지 만들어줘.

[기획 내용]
- 사용자 회원가입 (이메일, 비밀번호)
- 로그인 (JWT 토큰 발급)
- 프로필 조회/수정</pre>
      </div>

      <div class="code-block good">
        <p class="code-label">Python 자동화 스크립트</p>
        <pre>매일 아침 특정 폴더의 엑셀 파일을 읽어서
요약 보고서를 만들어주는 Python 스크립트를 만들어줘.</pre>
      </div>
    </section>

    <section>
      <h2>만들어진 뒤에 할 것</h2>
      <ol>
        <li><strong>CLAUDE.md 생성:</strong> <code>/init</code>으로 프로젝트 설정 파일을 만들어줍니다</li>
        <li><strong>실행 확인:</strong> Claude에게 "실행해봐"라고 하면 직접 돌려서 확인합니다</li>
        <li><strong>기능 추가:</strong> "여기에 검색 기능 추가해줘"처럼 이어서 요청합니다</li>
      </ol>
    </section>

    <section>
      <h2>기존 프로젝트에서 시작하기</h2>
      <p>이미 있는 프로젝트 폴더에서 Claude Code를 실행하면, <strong>기존 코드를 분석한 뒤</strong> 작업합니다.</p>

      <div class="code-block good">
        <p class="code-label">기존 프로젝트 파악</p>
        <pre># 기존 프로젝트 폴더에서 실행
cd 기존프로젝트
claude

# 프로젝트 파악 요청
이 프로젝트의 구조와 주요 기능을 설명해줘</pre>
      </div>
      <div class="info-box">
        <p><strong>팁:</strong> 처음 만나는 프로젝트라도 Claude가 파일을 전부 읽고 구조를 파악합니다. "이 프로젝트 설명해줘"부터 시작하세요.</p>
      </div>
    </section>
  </div>
</template>
