<template>
  <div class="page-content">
    <h1>커넥터 (Connectors)</h1>
    <p class="subtitle">외부 서비스를 Cowork에 연결해서 업무 범위를 확장하는 기능입니다.</p>

    <section>
      <h2>커넥터란?</h2>
      <p><strong>커넥터</strong>는 Cowork가 외부 서비스(Google Drive, Slack, Gmail 등)에 접속해서 데이터를 가져오거나, 작업을 수행할 수 있게 해주는 <strong>연결 장치</strong>입니다.</p>
      <div class="info-box">
        <p><strong>비유:</strong> Cowork가 내 컴퓨터 파일만 다룰 수 있던 것에서, 커넥터를 꽂으면 Google Drive, 이메일, Slack까지 손이 닿게 되는 겁니다.</p>
      </div>
      <p>현재 <strong>50개 이상</strong>의 커넥터가 제공되고 있으며 계속 추가되고 있습니다.</p>
    </section>

    <section>
      <h2>주요 커넥터 목록</h2>

      <h3>업무 도구</h3>
      <table class="comparison-table">
        <thead>
          <tr>
            <th>커넥터</th>
            <th>할 수 있는 것</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td><strong>Google Drive</strong></td>
            <td>드라이브 파일 읽기, 새 문서 생성, 정리</td>
          </tr>
          <tr>
            <td><strong>Gmail</strong></td>
            <td>이메일 검색, 내용 분석, 답장 초안 작성</td>
          </tr>
          <tr>
            <td><strong>Google Calendar</strong></td>
            <td>일정 확인, 회의 정보 가져오기</td>
          </tr>
          <tr>
            <td><strong>Slack</strong></td>
            <td>채널 메시지 조회, 정리, 팀 업무 자동화</td>
          </tr>
          <tr>
            <td><strong>Notion</strong></td>
            <td>페이지 읽기, 정리, 새 문서 작성</td>
          </tr>
          <tr>
            <td><strong>Microsoft 365</strong></td>
            <td>Word, Excel, PowerPoint 파일 작업</td>
          </tr>
          <tr>
            <td><strong>GitHub</strong></td>
            <td>이슈, PR 관리, 코드 조회</td>
          </tr>
        </tbody>
      </table>

      <h3>전문 분야</h3>
      <table class="comparison-table">
        <thead>
          <tr>
            <th>커넥터</th>
            <th>분야</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td><strong>DocuSign</strong></td>
            <td>계약서 전자 서명</td>
          </tr>
          <tr>
            <td><strong>FactSet / S&P Global</strong></td>
            <td>금융 데이터 분석</td>
          </tr>
          <tr>
            <td><strong>WordPress</strong></td>
            <td>블로그/웹사이트 콘텐츠 관리</td>
          </tr>
          <tr>
            <td><strong>Apollo / Clay / Outreach</strong></td>
            <td>영업·마케팅 자동화</td>
          </tr>
          <tr>
            <td><strong>SimilarWeb</strong></td>
            <td>시장 조사, 경쟁사 분석</td>
          </tr>
        </tbody>
      </table>
    </section>

    <section>
      <h2>커넥터 설정 방법</h2>
      <ol>
        <li>Claude Desktop에서 <strong>Settings → Connectors</strong>로 이동합니다</li>
        <li>커넥터 목록에서 원하는 서비스를 찾습니다</li>
        <li><strong>"Add"</strong> 버튼을 눌러 추가합니다</li>
        <li>해당 서비스 계정으로 <strong>로그인/인증</strong>합니다</li>
      </ol>
    </section>

    <section>
      <h2>권한을 세밀하게 조절 가능</h2>
      <p>커넥터를 연결해도 모든 걸 자동으로 하게 두는 건 아닙니다. <strong>각 동작별로 권한을 설정</strong>할 수 있습니다.</p>
      <table class="comparison-table">
        <thead>
          <tr>
            <th>설정</th>
            <th>의미</th>
            <th>예시</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td><strong>Allow</strong></td>
            <td>자동 실행 (물어보지 않음)</td>
            <td>이메일 검색은 자유롭게</td>
          </tr>
          <tr>
            <td><strong>Ask</strong></td>
            <td>실행 전 확인 요청</td>
            <td>파일 수정 전에는 물어보기</td>
          </tr>
          <tr>
            <td><strong>Block</strong></td>
            <td>절대 실행 안 됨</td>
            <td>이메일 전송은 차단</td>
          </tr>
        </tbody>
      </table>
      <div class="info-box">
        <p><strong>예시:</strong> Gmail 커넥터를 연결하되, "이메일 검색은 Allow, 이메일 전송은 Block"으로 설정하면 Claude가 이메일을 읽을 수는 있지만 보내지는 못합니다.</p>
      </div>
    </section>

    <section>
      <h2>활용 예시</h2>
      <div class="code-block good">
        <p class="code-label">Google Drive + 보고서 작성</p>
        <pre>Google Drive "프로젝트" 폴더에 있는 회의록 3개를 읽고,
전체 결정사항을 정리한 문서를 Drive에 새로 만들어줘.</pre>
      </div>

      <div class="code-block good">
        <p class="code-label">Gmail + 업무 정리</p>
        <pre>이번 주 받은 이메일 중에서 거래처에서 온 것만 골라서
발신자, 제목, 핵심 내용을 표로 정리해줘.</pre>
      </div>

      <div class="code-block good">
        <p class="code-label">Slack + 팀 자동화</p>
        <pre>Slack #마케팅 채널의 이번 주 대화 내용을 요약하고,
결정된 사항과 할 일 목록을 정리해줘.</pre>
      </div>
    </section>
  </div>
</template>
