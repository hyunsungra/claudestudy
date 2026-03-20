<template>
  <div class="page-content">
    <h1>동작 방식과 차별점</h1>
    <p class="subtitle">Claude Code가 어떻게 프로젝트 전체를 이해하고 작업하는지 알아봅시다.</p>

    <section>
      <h2>프로젝트 전체를 이해한다</h2>
      <p>일반 AI 채팅에 코드를 복사해서 붙여넣으면, AI는 그 코드 조각만 봅니다. Claude Code는 다릅니다. <strong>프로젝트 폴더 전체를 탐색</strong>해서 파일 간의 관계, 구조, 의존성을 파악한 뒤 작업합니다.</p>
    </section>

    <section>
      <h2>기본 상호작용 패턴</h2>
      <div class="code-block">
        <p class="code-label">작업 흐름</p>
        <pre>① 자연어로 요청
   "로그인 기능 구현해줘", "에러 원인 분석해줘" 처럼 한국어로 지시

② Claude의 동작
   현재 폴더 구조 스캔 → 관련 파일 열기 → 수정/생성 계획 수립 → 코드 제안

③ 승인/실행
   "이 변경을 적용할까요?" 확인 → 수락하면 파일에 실제 반영

④ 추가 지시
   "테스트도 돌려줘", "여기 좀 바꿔줘" 처럼 이어서 대화</pre>
      </div>
      <div class="info-box">
        <p><strong>팁:</strong> <code>@</code> 문법으로 특정 파일·폴더를 콕 집어 컨텍스트에 포함시킬 수 있습니다. "이 파일 기준으로 수정해줘" 같은 세밀한 지시가 가능합니다.</p>
      </div>
    </section>

    <section>
      <h2>3가지 모드</h2>
      <p>Claude Code에는 작업 자율성을 조절하는 <strong>3가지 모드</strong>가 있습니다. <code>Shift+Tab</code>으로 전환합니다.</p>

      <table class="comparison-table">
        <thead>
          <tr>
            <th>모드</th>
            <th>특징</th>
            <th>추천 상황</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td><strong>Normal</strong></td>
            <td>매 변경마다 승인 필요</td>
            <td>처음 쓸 때, 중요한 코드 수정</td>
          </tr>
          <tr>
            <td><strong>Auto-Accept</strong></td>
            <td>파일 수정·생성 자동 승인</td>
            <td>대량 리팩토링, 변수명 일괄 변경</td>
          </tr>
          <tr>
            <td><strong>Plan</strong></td>
            <td>읽기 전용, 계획만 수립</td>
            <td>새 코드베이스 분석, 영향도 파악</td>
          </tr>
        </tbody>
      </table>

      <div class="info-box">
        <ul>
          <li><strong>Normal:</strong> 하나하나 변경 내역을 보고 승인. 안전하게 쓰고 싶을 때 (기본값)</li>
          <li><strong>Auto-Accept:</strong> 믿고 맡길 수 있는 반복 작업에 적합. <code>Shift+Tab</code> 1번으로 전환</li>
          <li><strong>Plan:</strong> 코드 수정 없이 분석·계획만. 먼저 설계를 검토하고 싶을 때. <code>Shift+Tab</code> 2번으로 전환</li>
        </ul>
      </div>
    </section>

    <section>
      <h2>사용하는 내부 도구들</h2>
      <p>Claude Code는 작업을 위해 내부적으로 여러 도구를 사용합니다. 직접 신경 쓸 필요는 없지만, 알아두면 동작을 이해하기 쉽습니다.</p>
      <table class="comparison-table">
        <thead>
          <tr>
            <th>도구</th>
            <th>하는 일</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td><strong>Read</strong></td>
            <td>파일 내용 읽기</td>
          </tr>
          <tr>
            <td><strong>Write</strong></td>
            <td>새 파일 만들기</td>
          </tr>
          <tr>
            <td><strong>Edit</strong></td>
            <td>기존 파일 수정</td>
          </tr>
          <tr>
            <td><strong>Bash</strong></td>
            <td>터미널 명령어 실행 (설치, 빌드, 테스트 등)</td>
          </tr>
          <tr>
            <td><strong>Glob / Grep</strong></td>
            <td>파일 찾기, 코드 검색</td>
          </tr>
          <tr>
            <td><strong>Agent</strong></td>
            <td>서브에이전트를 띄워 병렬 처리</td>
          </tr>
        </tbody>
      </table>
    </section>

    <section>
      <h2>서브에이전트 병렬 처리</h2>
      <p>큰 작업을 하면 Claude Code는 <strong>서브에이전트(보조원)</strong>를 여러 개 띄워서 동시에 처리합니다.</p>

      <div class="code-block">
        <p class="code-label">병렬 처리 예시</p>
        <pre>나: "이 프로젝트의 API 엔드포인트를 전부 찾아서 문서화해줘"

Claude Code:
  ├── 탐색 에이전트 → 라우터 파일 검색
  ├── 탐색 에이전트 → 컨트롤러 파일 분석
  ├── 탐색 에이전트 → 미들웨어 구조 파악
  └── 결과 종합 → API 문서 작성</pre>
      </div>
      <p>여러 에이전트가 <strong>동시에</strong> 탐색하고 분석하기 때문에 프로젝트가 커도 빠릅니다.</p>
    </section>

    <section>
      <h2>IDE 연동</h2>
      <p>터미널뿐 아니라 <strong>에디터 안에서 바로 Claude Code를 띄울 수도</strong> 있습니다.</p>
      <table class="comparison-table">
        <thead>
          <tr>
            <th>IDE</th>
            <th>연동 방법</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td><strong>VS Code</strong></td>
            <td>확장 프로그램 "Claude Code" 설치</td>
          </tr>
          <tr>
            <td><strong>IntelliJ / WebStorm</strong></td>
            <td>전용 플러그인 설치, <code>Command+Esc</code> 등 단축키로 실행</td>
          </tr>
        </tbody>
      </table>
      <p>IDE 플러그인을 설치하면 에디터에서 코드를 보면서 바로 Claude에게 지시할 수 있습니다.</p>
    </section>
  </div>
</template>
