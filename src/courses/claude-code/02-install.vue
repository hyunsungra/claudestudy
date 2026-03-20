<template>
  <div class="page-content">
    <h1>설치와 첫 실행</h1>
    <p class="subtitle">3분이면 설치 완료. 터미널에서 바로 시작할 수 있습니다.</p>

    <section>
      <h2>설치 전 체크사항</h2>
      <table class="comparison-table">
        <thead>
          <tr>
            <th>항목</th>
            <th>필요한 것</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td><strong>지원 OS</strong></td>
            <td>macOS, Linux, Windows</td>
          </tr>
          <tr>
            <td><strong>Git</strong></td>
            <td>Windows는 <a href="https://git-scm.com/downloads/win" target="_blank" rel="noopener">Git for Windows</a> 필수 설치</td>
          </tr>
          <tr>
            <td><strong>Claude 계정</strong></td>
            <td><a href="https://claude.ai" target="_blank" rel="noopener">claude.ai</a>에서 가입 (유료 구독 또는 API 키)</td>
          </tr>
        </tbody>
      </table>
    </section>

    <section>
      <h2>설치 방법</h2>

      <h3>macOS / Linux</h3>
      <div class="code-block good">
        <p class="code-label">터미널에서 한 줄로 설치</p>
        <pre>curl -fsSL https://claude.ai/install.sh | bash</pre>
      </div>

      <h3>Windows (PowerShell)</h3>
      <div class="code-block good">
        <p class="code-label">PowerShell에서 설치 (권장)</p>
        <pre>irm https://claude.ai/install.ps1 | iex</pre>
      </div>

      <h3>Windows (CMD)</h3>
      <div class="code-block">
        <p class="code-label">명령 프롬프트에서 설치</p>
        <pre>curl -fsSL https://claude.ai/install.cmd -o install.cmd && install.cmd && del install.cmd</pre>
      </div>

      <h3>Windows (WinGet)</h3>
      <div class="code-block">
        <p class="code-label">WinGet으로 설치</p>
        <pre>winget install Anthropic.ClaudeCode</pre>
      </div>

      <div class="info-box warning">
        <p><strong>주의:</strong> 예전에는 <code>npm install</code>로 설치했지만 현재는 <strong>더 이상 권장하지 않습니다</strong>. 위의 공식 설치 방법을 사용하세요. 더 빠르고, 자동 업데이트도 지원됩니다.</p>
      </div>
    </section>

    <section>
      <h2>설치 확인</h2>
      <div class="code-block">
        <p class="code-label">버전 확인으로 설치 검증</p>
        <pre>claude --version</pre>
      </div>
      <p>버전 번호가 출력되면 설치 성공입니다.</p>
    </section>

    <section>
      <h2>첫 실행</h2>
      <ol>
        <li><strong>프로젝트 폴더로 이동합니다.</strong> Claude Code는 "현재 폴더"를 기준으로 파일을 인식합니다.</li>
        <li><code>claude</code> 명령을 실행합니다.</li>
        <li>처음 실행하면 로그인 화면이 나옵니다. Claude 계정으로 로그인합니다.</li>
      </ol>

      <div class="code-block good">
        <p class="code-label">첫 실행</p>
        <pre># 프로젝트 폴더로 이동
cd 내프로젝트폴더

# Claude Code 실행
claude</pre>
      </div>
      <p>Windows에서는 PowerShell, CMD, Git Bash 어디서든 <code>claude</code> 명령을 실행할 수 있습니다.</p>
    </section>

    <section>
      <h2>프로젝트 초기 설정</h2>
      <p>처음 사용하는 프로젝트라면 <code>/init</code>을 실행하세요. 프로젝트를 분석해서 <code>CLAUDE.md</code> 파일을 자동으로 만들어줍니다.</p>
      <div class="code-block good">
        <p class="code-label">초기 설정 자동 생성</p>
        <pre>/init</pre>
      </div>
      <p>이 파일이 있으면 Claude가 프로젝트 소개, 구조, 규칙을 항상 참고해서 작업합니다.</p>
    </section>

    <section>
      <h2>첫 대화 해보기</h2>
      <div class="code-block">
        <p class="code-label">처음 해볼 것들</p>
        <pre># 프로젝트 구조 파악
이 프로젝트가 뭐하는 건지 설명해줘

# 특정 파일 설명 요청
src/App.vue 파일이 뭐하는 건지 알려줘

# 간단한 수정
README 파일에 프로젝트 설명 추가해줘</pre>
      </div>
      <div class="info-box">
        <p><strong>팁:</strong> <code>@</code> 문법을 사용하면 특정 파일을 콕 집어서 컨텍스트에 포함시킬 수 있습니다. 예: <code>@src/router.js 이 파일 기준으로 수정해줘</code></p>
      </div>
    </section>

    <section>
      <h2>다양한 실행 방법</h2>
      <div class="code-block">
        <p class="code-label">상황별 실행법</p>
        <pre># 기본 대화형 실행
claude

# 질문과 함께 바로 실행
claude "이 프로젝트의 폴더 구조를 설명해줘"

# 지난 대화 이어서 하기
claude --continue

# 특정 모델 지정
claude --model opus</pre>
      </div>

      <div class="info-box">
        <p><strong>공식 문서:</strong> OS별 상세 설치 방법은 <a href="https://docs.anthropic.com/en/docs/claude-code/getting-started" target="_blank" rel="noopener">Claude Code 공식 문서</a>에서 확인할 수 있습니다.</p>
      </div>
    </section>
  </div>
</template>
