<template>
  <div class="page-content">
    <h1>Claude Code란?</h1>
    <p class="subtitle">터미널에서 claude 명령으로 불러쓰는 AI 코딩 비서입니다.</p>

    <section>
      <h2>Claude Code = AI 코딩 에이전트</h2>
      <p><strong>Claude Code</strong>는 Anthropic이 만든 CLI(명령줄) 도구로, 터미널에서 <code>claude</code> 명령으로 불러쓰는 AI 코딩 비서입니다.</p>
      <p>현재 작업 중인 폴더를 기준으로 파일 구조를 파악하고, 자연어 지시만으로 <strong>코드 생성, 버그 수정, 리팩토링, 문서화, 스크립트 자동화</strong> 등을 수행합니다.</p>
      <div class="info-box">
        <p><strong>핵심 특징:</strong> 로컬 프로젝트 파일을 직접 읽되, 로컬에서만 동작하는 구조라 <strong>코드 유출 걱정을 줄이면서</strong> 개발 보조를 받을 수 있습니다.</p>
      </div>
    </section>

    <section>
      <h2>코워크와 뭐가 다른가?</h2>
      <table class="comparison-table">
        <thead>
          <tr>
            <th>항목</th>
            <th>코워크 (Cowork)</th>
            <th>코드 (Code)</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>대상</td>
            <td>일반 업무 (문서, 데이터, 파일 정리)</td>
            <td>개발 업무 (코딩, 디버깅, 배포)</td>
          </tr>
          <tr>
            <td>실행 환경</td>
            <td>Claude Desktop 앱</td>
            <td>터미널 (명령어 창), Claude Desktop 앱, IDE 플러그인</td>
          </tr>
          <tr>
            <td>IDE 연동</td>
            <td>X</td>
            <td>VS Code, IntelliJ 등 플러그인 지원</td>
          </tr>
          <tr>
            <td>같은 점</td>
            <td colspan="2">둘 다 AI 에이전트. 파일을 직접 다루고, 서브에이전트로 병렬 처리</td>
          </tr>
        </tbody>
      </table>
    </section>

    <section>
      <h2>Claude Code가 할 수 있는 것</h2>
      <div class="feature-grid">
        <div class="feature-card">
          <h3>코드 작성</h3>
          <p>"로그인 페이지 만들어줘"처럼 말하면 프로젝트 구조에 맞게 코드를 작성합니다.</p>
        </div>
        <div class="feature-card">
          <h3>버그 수정</h3>
          <p>에러 로그와 관련 파일을 분석해서 원인을 찾고 코드를 직접 수정합니다.</p>
        </div>
        <div class="feature-card">
          <h3>리팩토링</h3>
          <p>모듈 구조 재설계, 중복 제거, 네이밍 개선을 한 번에 처리합니다.</p>
        </div>
        <div class="feature-card">
          <h3>문서화</h3>
          <p>코드에 주석 추가, README 작성, 아키텍처 요약 문서를 자동 생성합니다.</p>
        </div>
        <div class="feature-card">
          <h3>테스트 코드 작성</h3>
          <p>기존 코드를 분석해서 단위 테스트, 통합 테스트 코드를 만들어줍니다.</p>
        </div>
        <div class="feature-card">
          <h3>Git 관리</h3>
          <p>변경사항 분석, 커밋 메시지 작성, PR 생성까지 자동 처리합니다.</p>
        </div>
      </div>
    </section>

    <section>
      <h2>일반 AI 코딩 도우미와의 차이</h2>
      <table class="comparison-table">
        <thead>
          <tr>
            <th>일반 AI 채팅 (코드 질문)</th>
            <th>Claude Code</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>"이렇게 하면 됩니다" 답변을 줌</td>
            <td>직접 파일을 열어서 코드를 수정함</td>
          </tr>
          <tr>
            <td>내가 코드를 복사해서 붙여넣어야 함</td>
            <td>프로젝트 파일에 바로 반영됨</td>
          </tr>
          <tr>
            <td>한 파일씩 물어봐야 함</td>
            <td>프로젝트 전체를 이해하고 여러 파일을 동시에 수정</td>
          </tr>
          <tr>
            <td>실행은 내가 직접</td>
            <td>명령어 실행, 테스트, 빌드도 대신 해줌</td>
          </tr>
        </tbody>
      </table>
    </section>
  </div>
</template>
