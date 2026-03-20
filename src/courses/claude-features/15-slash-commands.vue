<template>
  <div class="page-content">
    <h1>슬래시 명령어</h1>
    <p class="subtitle">Claude Code에서 자주 쓰는 <code>/</code> 명령어 모음입니다.</p>

    <section>
      <h2>슬래시 명령어란?</h2>
      <p>Claude Code에서 <code>/</code>로 시작하는 명령어를 입력하면 특정 기능을 바로 실행합니다. 대화 중에 <code>/</code>만 입력하면 사용 가능한 전체 목록이 뜹니다.</p>
    </section>

    <section>
      <h2>꼭 알아야 할 명령어</h2>
      <table class="comparison-table">
        <thead>
          <tr>
            <th>명령어</th>
            <th>하는 일</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td><code>/help</code></td>
            <td>도움말 보기</td>
          </tr>
          <tr>
            <td><code>/clear</code></td>
            <td>대화 초기화 (새로 시작)</td>
          </tr>
          <tr>
            <td><code>/compact</code></td>
            <td>대화 내용 요약해서 공간 확보</td>
          </tr>
          <tr>
            <td><code>/model</code></td>
            <td>AI 모델 변경 (Opus, Sonnet 등)</td>
          </tr>
          <tr>
            <td><code>/usage</code></td>
            <td>사용량 한도 확인</td>
          </tr>
        </tbody>
      </table>
    </section>

    <section>
      <h2>작업할 때 유용한 명령어</h2>
      <table class="comparison-table">
        <thead>
          <tr>
            <th>명령어</th>
            <th>하는 일</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td><code>/plan</code></td>
            <td>코드 수정 없이 계획만 세우기</td>
          </tr>
          <tr>
            <td><code>/diff</code></td>
            <td>변경된 내용 한눈에 보기</td>
          </tr>
          <tr>
            <td><code>/rewind</code></td>
            <td>이전 상태로 되돌리기</td>
          </tr>
          <tr>
            <td><code>/resume</code></td>
            <td>이전 대화 이어서 하기</td>
          </tr>
          <tr>
            <td><code>/copy</code></td>
            <td>마지막 응답을 클립보드에 복사</td>
          </tr>
          <tr>
            <td><code>/export</code></td>
            <td>대화 내용을 파일로 저장</td>
          </tr>
        </tbody>
      </table>
    </section>

    <section>
      <h2>설정/관리 명령어</h2>
      <table class="comparison-table">
        <thead>
          <tr>
            <th>명령어</th>
            <th>하는 일</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td><code>/init</code></td>
            <td>CLAUDE.md 가이드 파일 자동 생성</td>
          </tr>
          <tr>
            <td><code>/memory</code></td>
            <td>메모리 확인/편집</td>
          </tr>
          <tr>
            <td><code>/config</code></td>
            <td>설정 화면 열기</td>
          </tr>
          <tr>
            <td><code>/permissions</code></td>
            <td>권한 설정 확인/변경</td>
          </tr>
          <tr>
            <td><code>/mcp</code></td>
            <td>MCP 서버 연결 관리</td>
          </tr>
          <tr>
            <td><code>/plugin</code></td>
            <td>플러그인 설치/관리</td>
          </tr>
          <tr>
            <td><code>/skills</code></td>
            <td>사용 가능한 스킬 목록 보기</td>
          </tr>
          <tr>
            <td><code>/doctor</code></td>
            <td>Claude Code 설치 상태 진단</td>
          </tr>
        </tbody>
      </table>
    </section>

    <section>
      <h2>자주 쓰는 조합</h2>
      <div class="feature-grid">
        <div class="feature-card">
          <h3>/plan → 확인 → 실행</h3>
          <p>큰 작업은 먼저 계획을 세운 후, 내용을 확인하고 실행합니다.</p>
        </div>
        <div class="feature-card">
          <h3>/diff → /rewind</h3>
          <p>변경 내용을 확인하고, 마음에 안 들면 되돌립니다.</p>
        </div>
        <div class="feature-card">
          <h3>/compact → 작업 계속</h3>
          <p>대화가 길어지면 요약해서 공간을 확보한 뒤 이어서 작업합니다.</p>
        </div>
        <div class="feature-card">
          <h3>/clear → 새 주제 시작</h3>
          <p>주제가 바뀌면 깨끗하게 초기화하고 새로 시작합니다.</p>
        </div>
      </div>
    </section>
  </div>
</template>
