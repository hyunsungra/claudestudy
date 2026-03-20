<template>
  <div class="page-content">
    <h1>Plugins (플러그인)</h1>
    <p class="subtitle">다른 사람이 만든 기능을 설치해서 Claude를 확장하는 방법입니다.</p>

    <section>
      <h2>플러그인이란?</h2>
      <p><strong>플러그인</strong>은 다른 사람(또는 회사)이 미리 만들어둔 기능을 설치해서 Claude Code에 추가하는 것입니다. 직접 만들 필요 없이 설치만 하면 바로 사용할 수 있습니다.</p>
      <div class="info-box">
        <p><strong>비유:</strong> 스마트폰의 앱스토어에서 앱을 설치하는 것과 같습니다. 누군가 만들어둔 기능을 내려받아서 쓰면 됩니다.</p>
      </div>
    </section>

    <section>
      <h2>플러그인 vs 스킬 차이</h2>
      <table class="comparison-table">
        <thead>
          <tr>
            <th>항목</th>
            <th>스킬 (Skills)</th>
            <th>플러그인 (Plugins)</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>만드는 사람</td>
            <td>내가 직접 만듦</td>
            <td>다른 사람이 만들어서 공유</td>
          </tr>
          <tr>
            <td>설치 방법</td>
            <td>.claude/skills/ 폴더에 파일 작성</td>
            <td><code>/plugin</code> 명령어로 설치</td>
          </tr>
          <tr>
            <td>저장 위치</td>
            <td>프로젝트 안 (.claude/skills/)</td>
            <td>내 컴퓨터 전역 (~/.claude/plugins/)</td>
          </tr>
          <tr>
            <td>적용 범위</td>
            <td>해당 프로젝트만</td>
            <td>모든 프로젝트에서 사용 가능</td>
          </tr>
        </tbody>
      </table>
    </section>

    <section>
      <h2>가장 쉽게 설치하는 방법</h2>
      <p><strong>Claude에게 대화로 요청</strong>하거나, 명령어를 사용하면 됩니다.</p>
      <div class="code-block good">
        <p class="code-label">대화로 플러그인 설치하기</p>
        <pre>코드 리뷰 플러그인을 설치해줘</pre>
      </div>
      <div class="code-block">
        <p class="code-label">명령어로 관리하기</p>
        <pre># 플러그인 관리 화면 열기
/plugin</pre>
      </div>
      <p><code>/plugin</code> 명령어를 실행하면 플러그인을 검색하고 설치할 수 있는 화면이 열립니다.</p>
    </section>

    <section>
      <h2>플러그인 활용 예시</h2>
      <div class="feature-grid">
        <div class="feature-card">
          <h3>코드 리뷰</h3>
          <p>PR의 변경사항을 자동으로 분석하고 리뷰해주는 플러그인을 설치할 수 있습니다.</p>
        </div>
        <div class="feature-card">
          <h3>문서 생성</h3>
          <p>코드를 분석해서 API 문서나 사용 가이드를 자동으로 만들어주는 플러그인이 있습니다.</p>
        </div>
        <div class="feature-card">
          <h3>테스트 도구</h3>
          <p>코드 변경 후 자동으로 관련 테스트를 찾아서 실행해주는 플러그인을 사용할 수 있습니다.</p>
        </div>
        <div class="feature-card">
          <h3>배포 도우미</h3>
          <p>배포 전 체크리스트를 자동으로 확인하고 배포를 도와주는 플러그인이 있습니다.</p>
        </div>
      </div>
    </section>

    <section>
      <h2>스킬, 에이전트, MCP, 플러그인 — 뭐가 다른 거야?</h2>
      <table class="comparison-table">
        <thead>
          <tr>
            <th>기능</th>
            <th>한마디로</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td><strong>스킬</strong></td>
            <td>내가 만드는 단축 명령어 (<code>/명령어</code>)</td>
          </tr>
          <tr>
            <td><strong>에이전트</strong></td>
            <td>내가 만드는 전문 AI 보조원</td>
          </tr>
          <tr>
            <td><strong>MCP</strong></td>
            <td>외부 서비스 연결 (GitHub, DB 등)</td>
          </tr>
          <tr>
            <td><strong>플러그인</strong></td>
            <td>남이 만들어둔 기능을 설치해서 사용</td>
          </tr>
        </tbody>
      </table>
    </section>
  </div>
</template>
