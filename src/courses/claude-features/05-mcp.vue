<template>
  <div class="page-content">
    <h1>MCP (Model Context Protocol)</h1>
    <p class="subtitle">Claude를 외부 서비스와 연결해주는 "USB 포트" 같은 기능입니다.</p>

    <section>
      <h2>MCP란?</h2>
      <p><strong>MCP</strong>는 Claude가 외부 서비스(GitHub, 데이터베이스, Slack 등)에 접속할 수 있게 해주는 <strong>연결 규격</strong>입니다.</p>
      <div class="info-box">
        <p><strong>비유:</strong> 컴퓨터의 USB 포트처럼, MCP를 통해 다양한 서비스를 Claude에 꽂아서 사용할 수 있습니다.</p>
      </div>
    </section>

    <section>
      <h2>MCP로 뭘 할 수 있나?</h2>
      <div class="feature-grid">
        <div class="feature-card">
          <h3>GitHub 연동</h3>
          <p>이슈를 조회하거나, 코드 변경사항을 올리거나, PR을 만들 수 있습니다.</p>
        </div>
        <div class="feature-card">
          <h3>데이터베이스 조회</h3>
          <p>DB에 직접 질문을 보내고 결과를 분석할 수 있습니다.</p>
        </div>
        <div class="feature-card">
          <h3>Slack 메시지</h3>
          <p>Slack 채널에 메시지를 보내거나 내용을 가져올 수 있습니다.</p>
        </div>
        <div class="feature-card">
          <h3>웹 브라우저 자동화</h3>
          <p>웹 페이지를 열고, 클릭하고, 데이터를 가져오는 작업을 합니다.</p>
        </div>
      </div>
    </section>

    <section>
      <h2>동작 방식</h2>
      <p>MCP는 <strong>"서버"</strong>라는 중간 다리를 통해 외부 서비스와 연결됩니다.</p>

      <div class="code-block">
        <p class="code-label">연결 구조</p>
        <pre>Claude Code (내가 사용하는 AI)
    │
    ├── MCP 서버: GitHub     → GitHub에서 이슈/PR 관리
    ├── MCP 서버: PostgreSQL → 데이터베이스 조회
    └── MCP 서버: Slack      → Slack 메시지 전송</pre>
      </div>
    </section>

    <section>
      <h2>가장 쉽게 연결하는 방법</h2>
      <p>직접 설정 파일을 편집할 필요 없이, <strong>Claude에게 대화로 요청</strong>하면 됩니다.</p>
      <div class="code-block good">
        <p class="code-label">대화로 MCP 연결하기</p>
        <pre>GitHub MCP 서버를 연결해줘</pre>
      </div>
      <div class="code-block good">
        <p class="code-label">더 구체적으로 요청하기</p>
        <pre>이 프로젝트에서 PostgreSQL 데이터베이스에 접속할 수 있게
MCP 서버를 설정해줘. 주소는 localhost:5432야.</pre>
      </div>
      <p>Claude가 <code>.mcp.json</code> 파일을 자동으로 만들고 설정해줍니다. <code>/mcp</code> 명령어로 현재 연결 상태를 확인할 수도 있습니다.</p>
    </section>

    <section>
      <h2>직접 설정하기</h2>
      <p>프로젝트 루트의 <code>.mcp.json</code> 파일에서 연결할 서비스를 등록합니다.</p>
      <div class="code-block good">
        <p class="code-label">.mcp.json 예시</p>
        <pre>{
  "mcpServers": {
    "github": {
      "command": "npx",
      "args": ["-y", "@modelcontextprotocol/server-github"],
      "env": {
        "GITHUB_TOKEN": "ghp_xxxxxxxxxxxx"
      }
    }
  }
}</pre>
      </div>
      <div class="info-box">
        <p><strong>팁:</strong> Claude Code에서 <code>/mcp</code> 명령어로 현재 연결된 MCP 서버를 확인하고 관리할 수 있습니다.</p>
      </div>
    </section>

    <section>
      <h2>자주 쓰는 MCP 서버</h2>
      <table class="comparison-table">
        <thead>
          <tr>
            <th>서비스</th>
            <th>할 수 있는 것</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>GitHub</td>
            <td>이슈 조회, PR 생성, 코드 관리</td>
          </tr>
          <tr>
            <td>PostgreSQL</td>
            <td>데이터베이스 조회 및 분석</td>
          </tr>
          <tr>
            <td>Slack</td>
            <td>메시지 전송, 채널 정보 조회</td>
          </tr>
          <tr>
            <td>Puppeteer</td>
            <td>웹 브라우저 자동 조작</td>
          </tr>
          <tr>
            <td>Filesystem</td>
            <td>지정한 폴더의 파일 읽기/쓰기</td>
          </tr>
        </tbody>
      </table>
      <p>더 많은 서버는 <a href="https://github.com/modelcontextprotocol/servers" target="_blank" rel="noopener">MCP 공식 저장소</a>에서 확인할 수 있습니다.</p>
    </section>
  </div>
</template>
