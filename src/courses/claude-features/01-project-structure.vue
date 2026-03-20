<template>
  <div class="page-content">
    <h1>프로젝트 폴더 구조</h1>
    <p class="subtitle">Claude Code가 내 프로젝트를 어떤 구조로 관리하는지 알아봅시다.</p>

    <section>
      <h2>전체 구조 한눈에 보기</h2>
      <p>Claude Code를 프로젝트 폴더에서 실행하면, 자동으로 <strong>2가지</strong>가 만들어집니다.</p>

      <div class="feature-grid">
        <div class="feature-card">
          <h3>CLAUDE.md</h3>
          <p>"이 프로젝트에서는 이렇게 작업해줘"라는 <strong>지시서</strong>입니다. Claude가 매번 읽고 참고합니다.</p>
        </div>
        <div class="feature-card">
          <h3>.claude/ 폴더</h3>
          <p>Claude의 <strong>도구 상자</strong>입니다. 설정, 스킬, 에이전트, 메모리 등이 들어있습니다.</p>
        </div>
      </div>

      <div class="code-block">
        <p class="code-label">프로젝트 안의 Claude 관련 파일들</p>
        <pre>내 프로젝트/
├── CLAUDE.md                     # 프로젝트 지시서
├── .mcp.json                     # 외부 서비스 연결 설정
│
└── .claude/                      # Claude 도구 상자
    ├── settings.json             # 설정 파일
    ├── settings.local.json       # 내 PC 전용 설정
    │
    ├── rules/                    # 상황별 규칙 모음
    ├── skills/                   # 나만의 명령어 모음
    ├── agents/                   # 나만의 AI 보조원 모음
    ├── agent-memory/             # Claude가 기억하는 내용
    └── agent-memory-local/       # 내 PC에서만 기억하는 내용</pre>
      </div>
    </section>

    <section>
      <h2>각 폴더/파일이 하는 일</h2>
      <table class="comparison-table">
        <thead>
          <tr>
            <th>이름</th>
            <th>쉽게 말하면</th>
            <th>팀원과 공유</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td><code>CLAUDE.md</code></td>
            <td>프로젝트 작업 지시서 (어떻게 작업할지 안내)</td>
            <td>O</td>
          </tr>
          <tr>
            <td><code>.mcp.json</code></td>
            <td>외부 서비스 연결 정보 (GitHub, DB 등)</td>
            <td>O</td>
          </tr>
          <tr>
            <td><code>settings.json</code></td>
            <td>Claude의 동작 설정 (허용/차단할 작업 등)</td>
            <td>O</td>
          </tr>
          <tr>
            <td><code>settings.local.json</code></td>
            <td>내 컴퓨터에서만 쓰는 개인 설정</td>
            <td>X</td>
          </tr>
          <tr>
            <td><code>rules/</code></td>
            <td>특정 상황에서만 적용되는 세부 규칙</td>
            <td>O</td>
          </tr>
          <tr>
            <td><code>skills/</code></td>
            <td>내가 만든 단축 명령어 (예: <code>/리뷰</code>)</td>
            <td>O</td>
          </tr>
          <tr>
            <td><code>agents/</code></td>
            <td>내가 만든 전문 AI 보조원</td>
            <td>O</td>
          </tr>
          <tr>
            <td><code>agent-memory/</code></td>
            <td>Claude가 다음에도 기억할 내용</td>
            <td>O</td>
          </tr>
        </tbody>
      </table>
    </section>

    <section>
      <h2>내 PC 전용 vs 팀 공유</h2>
      <p>Git으로 프로젝트를 관리한다면, 어떤 파일을 공유하고 어떤 파일은 나만 쓸지 구분이 필요합니다.</p>
      <div class="info-box">
        <p><strong>팀과 공유하는 것:</strong> CLAUDE.md, settings.json, rules/, skills/, agents/ — 팀 전체가 같은 규칙으로 작업</p>
        <p><strong>나만 쓰는 것:</strong> settings.local.json, agent-memory-local/ — 내 개인 설정, 내 PC에서만 적용</p>
      </div>
    </section>

    <section>
      <h2>전역 설정도 있어요</h2>
      <p>프로젝트마다 설정하기 번거로운 것은 <strong>전역 설정</strong>으로 한 번만 해두면 모든 프로젝트에 적용됩니다.</p>

      <div class="code-block">
        <p class="code-label">전역 설정 위치</p>
        <pre># Windows
C:\Users\사용자이름\.claude\

# Mac/Linux
~/.claude/</pre>
      </div>

      <p>이 안에도 프로젝트와 동일하게 <code>CLAUDE.md</code>, <code>settings.json</code>, <code>rules/</code>, <code>skills/</code> 등을 넣을 수 있습니다.</p>

      <div class="info-box">
        <p><strong>우선순위:</strong> 프로젝트 설정이 전역 설정보다 우선합니다. 같은 항목이 있으면 프로젝트 쪽이 적용됩니다.</p>
      </div>
    </section>
  </div>
</template>
