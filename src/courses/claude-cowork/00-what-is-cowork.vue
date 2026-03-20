<template>
  <div class="page-content">
    <h1>코워크란?</h1>
    <p class="subtitle">Claude가 내 컴퓨터에서 직접 업무를 처리해주는 에이전트 기능입니다.</p>

    <section>
      <h2>코워크(Cowork) = AI 업무 에이전트</h2>
      <p><strong>Claude Cowork</strong>는 기존 채팅 답변을 넘어서, <strong>여러 단계를 스스로 계획하고 실행하는 업무 에이전트</strong>입니다.</p>
      <p>사용자가 지정한 작업 폴더 안의 파일을 직접 읽고, 새로 만들고, 수정하고, 정리할 수 있고, 그 결과를 다시 폴더 구조와 문서로 돌려줍니다.</p>

      <div class="info-box">
        <p><strong>예시:</strong> "다운로드 폴더 정리해서 계약서/영수증/자료별로 폴더 만들고 이름 규칙 맞춰줘"라고 하면, Cowork가 폴더 구조 설계 → 파일 내용 스캔 → 이동/이름 변경 계획 → 실행까지 알아서 처리합니다.</p>
      </div>
    </section>

    <section>
      <h2>어디에 있나?</h2>
      <p>Cowork는 <strong>Claude Desktop 앱 안의 별도 탭</strong>으로 제공됩니다. Chat, Code와 나란히 위치해서 일반 채팅과 병행해서 쓸 수 있습니다.</p>

      <div class="code-block">
        <p class="code-label">Claude Desktop 탭 구조</p>
        <pre>┌─────────────────────────────────────┐
│  [ Chat ]  [ Cowork ]  [ Code ]    │
│                                     │
│  ← 일반 채팅과 나란히 위치          │
│     탭을 눌러 전환                  │
└─────────────────────────────────────┘</pre>
      </div>
    </section>

    <section>
      <h2>일반 채팅 vs 코워크</h2>
      <table class="comparison-table">
        <thead>
          <tr>
            <th>일반 Claude 채팅</th>
            <th>코워크</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>답변을 텍스트로 받음</td>
            <td>결과물을 파일로 직접 만들어줌</td>
          </tr>
          <tr>
            <td>내가 복사해서 붙여넣기 해야 함</td>
            <td>내 폴더에 파일이 바로 저장됨</td>
          </tr>
          <tr>
            <td>한 번에 한 가지 질문/답변</td>
            <td>여러 단계를 계획하고 알아서 처리</td>
          </tr>
          <tr>
            <td>웹 브라우저에서 사용</td>
            <td>Claude Desktop 앱에서 사용</td>
          </tr>
          <tr>
            <td>내 컴퓨터 파일에 접근 불가</td>
            <td>지정한 폴더의 파일을 직접 읽고 수정</td>
          </tr>
        </tbody>
      </table>
    </section>

    <section>
      <h2>뭘 시킬 수 있나?</h2>
      <div class="feature-grid">
        <div class="feature-card">
          <h3>파일·폴더 정리</h3>
          <p>뒤섞인 폴더를 문서/이미지/계약서 등으로 자동 분류, 이름 규칙 통일, 중복 파일 정리.</p>
        </div>
        <div class="feature-card">
          <h3>문서 생성·편집</h3>
          <p>여러 PDF/문서에서 내용을 읽어 보고서, 회의록, 제안서 초안을 파일로 생성.</p>
        </div>
        <div class="feature-card">
          <h3>데이터 분석</h3>
          <p>CSV/엑셀 데이터를 읽어서 통계, 인사이트 요약, 분석 리포트 작성.</p>
        </div>
        <div class="feature-card">
          <h3>리서치·자료 종합</h3>
          <p>폴더 안의 자료를 읽고 핵심 정리, 타임라인, To-Do 리스트 등을 자동 생성.</p>
        </div>
      </div>
    </section>

    <section>
      <h2>협업 도구 연동</h2>
      <p>일부 플랜에서는 <strong>Slack 같은 협업 도구와도 연동</strong>되어, 팀 업무 자동화용 "앱"을 만드는 식으로 활용할 수 있습니다. 예를 들어 Slack 채널에서 코워크를 호출해 계약서 검토나 리포트 생성을 반복 실행할 수 있습니다.</p>
    </section>

    <section>
      <h2>사용 조건</h2>
      <div class="info-box">
        <ul>
          <li><strong>Claude Desktop 앱</strong> 최신 버전 필요 (웹 브라우저가 아닌 앱)</li>
          <li><strong>유료 구독</strong> 필요 (Pro $20/월 이상)</li>
          <li><strong>macOS</strong> 또는 <strong>Windows 10/11</strong></li>
          <li>PC가 켜져 있고 Claude Desktop이 실행 중이어야 작업이 진행됩니다</li>
        </ul>
      </div>
    </section>
  </div>
</template>
