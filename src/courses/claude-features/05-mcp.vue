<template>
  <div class="page-content">
    <!-- Hero Section -->
    <div class="hero-section">
      <div class="hero-icon">🔌</div>
      <h1>MCP (Model Context Protocol)</h1>
      <p class="hero-desc">Claude를 외부 서비스와 연결해주는 "USB 포트" 같은 기능입니다</p>
    </div>

    <!-- MCP란? -->
    <section class="slide-section">
      <h2 class="section-title">MCP란?</h2>
      <p class="section-desc"><strong>MCP</strong>는 Claude가 외부 서비스(GitHub, 데이터베이스, Slack 등)에 접속할 수 있게 해주는 <strong>연결 규격</strong>입니다.</p>
      <div class="analogy-card">
        <div class="analogy-icon">💡</div>
        <div class="analogy-content">
          <strong>비유:</strong> 컴퓨터의 USB 포트처럼, MCP를 통해 다양한 서비스를 Claude에 꽂아서 사용할 수 있습니다.
        </div>
      </div>
    </section>

    <!-- MCP로 뭘 할 수 있나? -->
    <section class="slide-section">
      <h2 class="section-title">MCP로 뭘 할 수 있나?</h2>
      <div class="feature-card-grid">
        <div class="feat-card">
          <div class="fc-icon">🐙</div>
          <h3>GitHub 연동</h3>
          <p>이슈를 조회하거나, 코드 변경사항을 올리거나, PR을 만들 수 있습니다.</p>
        </div>
        <div class="feat-card">
          <div class="fc-icon">🗄️</div>
          <h3>데이터베이스 조회</h3>
          <p>DB에 직접 질문을 보내고 결과를 분석할 수 있습니다.</p>
        </div>
        <div class="feat-card">
          <div class="fc-icon">💬</div>
          <h3>Slack 메시지</h3>
          <p>Slack 채널에 메시지를 보내거나 내용을 가져올 수 있습니다.</p>
        </div>
        <div class="feat-card">
          <div class="fc-icon">🌐</div>
          <h3>웹 브라우저 자동화</h3>
          <p>웹 페이지를 열고, 클릭하고, 데이터를 가져오는 작업을 합니다.</p>
        </div>
      </div>
    </section>

    <!-- 동작 방식 -->
    <section class="slide-section">
      <h2 class="section-title">동작 방식</h2>
      <p class="section-desc">MCP는 <strong>"서버"</strong>라는 중간 다리를 통해 외부 서비스와 연결됩니다.</p>
      <div class="code-block">
        <p class="code-label">연결 구조</p>
        <pre>Claude Code (내가 사용하는 AI)
    │
    ├── MCP 서버: GitHub     → GitHub에서 이슈/PR 관리
    ├── MCP 서버: PostgreSQL → 데이터베이스 조회
    └── MCP 서버: Slack      → Slack 메시지 전송</pre>
      </div>
    </section>

    <!-- 가장 쉽게 연결하는 방법 -->
    <section class="slide-section">
      <h2 class="section-title">가장 쉽게 연결하는 방법</h2>
      <p class="section-desc">직접 설정 파일을 편집할 필요 없이, <strong>Claude에게 대화로 요청</strong>하면 됩니다.</p>

      <div class="step-cards">
        <div class="step-card">
          <div class="step-number">1</div>
          <div class="step-body">
            <h3>대화로 MCP 연결하기</h3>
            <div class="code-block good">
              <pre>GitHub MCP 서버를 연결해줘</pre>
            </div>
          </div>
        </div>
        <div class="step-card">
          <div class="step-number">2</div>
          <div class="step-body">
            <h3>더 구체적으로 요청하기</h3>
            <div class="code-block good">
              <pre>이 프로젝트에서 PostgreSQL 데이터베이스에 접속할 수 있게
MCP 서버를 설정해줘. 주소는 localhost:5432야.</pre>
            </div>
          </div>
        </div>
      </div>
      <p style="margin-top: 16px; color: #475569;">Claude가 <code>.mcp.json</code> 파일을 자동으로 만들고 설정해줍니다. <code>/mcp</code> 명령어로 현재 연결 상태를 확인할 수도 있습니다.</p>
    </section>

    <!-- 직접 설정하기 -->
    <section class="slide-section">
      <h2 class="section-title">직접 설정하기</h2>
      <p class="section-desc">프로젝트 루트의 <code>.mcp.json</code> 파일에서 연결할 서비스를 등록합니다.</p>
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
      <div class="analogy-card" style="margin-top: 16px;">
        <div class="analogy-icon">💡</div>
        <div class="analogy-content">
          <strong>팁:</strong> Claude Code에서 <code>/mcp</code> 명령어로 현재 연결된 MCP 서버를 확인하고 관리할 수 있습니다.
        </div>
      </div>
    </section>

    <!-- 자주 쓰는 MCP 서버 -->
    <section class="slide-section">
      <h2 class="section-title">자주 쓰는 MCP 서버</h2>
      <div class="server-card-grid">
        <div class="server-card">
          <div class="sv-icon">🐙</div>
          <strong>GitHub</strong>
          <p>이슈 조회, PR 생성, 코드 관리</p>
        </div>
        <div class="server-card">
          <div class="sv-icon">🗄️</div>
          <strong>PostgreSQL</strong>
          <p>데이터베이스 조회 및 분석</p>
        </div>
        <div class="server-card">
          <div class="sv-icon">💬</div>
          <strong>Slack</strong>
          <p>메시지 전송, 채널 정보 조회</p>
        </div>
        <div class="server-card">
          <div class="sv-icon">🌐</div>
          <strong>Puppeteer</strong>
          <p>웹 브라우저 자동 조작</p>
        </div>
        <div class="server-card">
          <div class="sv-icon">📂</div>
          <strong>Filesystem</strong>
          <p>지정한 폴더의 파일 읽기/쓰기</p>
        </div>
      </div>
      <p style="margin-top: 18px; color: #475569;">더 많은 서버는 <a href="https://github.com/modelcontextprotocol/servers" target="_blank" rel="noopener">MCP 공식 저장소</a>에서 확인할 수 있습니다.</p>
    </section>
  </div>
</template>

<style scoped>
.hero-section {
  background: linear-gradient(135deg, #1e293b 0%, #334155 100%);
  border-radius: 16px;
  padding: 48px 36px 40px;
  text-align: center;
  margin-bottom: 40px;
}
.hero-icon { font-size: 3rem; margin-bottom: 12px; }
.hero-section h1 { color: #f1f5f9; margin-bottom: 12px; }
.hero-desc { color: #94a3b8 !important; font-size: 1.15rem; margin-bottom: 0 !important; }

.slide-section { margin-bottom: 48px; }
.section-title { font-size: 1.5rem; margin-bottom: 12px; }
.section-desc { color: #475569; margin-bottom: 24px; font-size: 1.05rem; }

.analogy-card {
  display: flex;
  align-items: center;
  gap: 14px;
  background: #eff6ff;
  border: 1px solid #bfdbfe;
  border-radius: 12px;
  padding: 18px 22px;
}
.analogy-icon { font-size: 1.5rem; flex-shrink: 0; }
.analogy-content { color: #1e40af; font-size: 0.95rem; line-height: 1.7; }

.feature-card-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 16px;
}
.feat-card {
  background: #f8fafc;
  border: 1px solid #e2e8f0;
  border-radius: 12px;
  padding: 24px 20px;
  text-align: center;
  transition: border-color 0.2s, transform 0.2s;
}
.feat-card:hover { border-color: #93c5fd; transform: translateY(-2px); }
.fc-icon { font-size: 2rem; margin-bottom: 8px; }
.feat-card h3 { margin-bottom: 8px; color: #1e293b; font-size: 1.05rem; }
.feat-card p { color: #475569; font-size: 0.9rem; margin: 0; }

.step-cards { display: flex; flex-direction: column; gap: 20px; }
.step-card {
  display: flex;
  gap: 18px;
  background: #f8fafc;
  border: 1px solid #e2e8f0;
  border-radius: 12px;
  padding: 24px;
  transition: border-color 0.2s;
}
.step-card:hover { border-color: #93c5fd; }
.step-number {
  width: 32px;
  height: 32px;
  background: linear-gradient(135deg, #3b82f6, #2563eb);
  color: #fff;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 800;
  font-size: 0.9rem;
  flex-shrink: 0;
}
.step-body { flex: 1; }
.step-body h3 { margin-bottom: 10px; color: #1e293b; font-size: 1.05rem; }

.server-card-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 14px;
}
.server-card {
  background: #f8fafc;
  border: 1px solid #e2e8f0;
  border-radius: 12px;
  padding: 20px 16px;
  text-align: center;
  transition: border-color 0.2s, transform 0.2s;
}
.server-card:hover { border-color: #93c5fd; transform: translateY(-2px); }
.sv-icon { font-size: 1.8rem; margin-bottom: 6px; }
.server-card strong { display: block; color: #1e293b; margin-bottom: 4px; }
.server-card p { color: #475569; font-size: 0.85rem; margin: 0; }

@media (max-width: 768px) {
  .hero-section { padding: 32px 18px 28px; }
  .hero-icon { font-size: 2.2rem; }
  .hero-section h1 { font-size: 1.4rem; }
  .hero-desc { font-size: 1rem; }
  .feature-card-grid { grid-template-columns: 1fr; }
  .server-card-grid { grid-template-columns: 1fr; }
  .step-card { flex-direction: column; gap: 12px; }
}
</style>
