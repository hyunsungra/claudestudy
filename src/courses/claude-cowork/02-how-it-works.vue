<template>
  <div class="page-content">
    <h1>코워크 동작 방식</h1>
    <p class="subtitle">코워크가 일반 AI 채팅과 근본적으로 다른 점을 알아봅시다.</p>

    <section>
      <h2>일반 AI와의 핵심 차이</h2>
      <p>ChatGPT, Gemini 같은 일반 AI 채팅은 <strong>"답변을 텍스트로 보여주는 것"</strong>이 전부입니다. 코워크는 다릅니다. <strong>내 컴퓨터의 파일을 직접 읽고, 만들고, 수정</strong>합니다. 이것이 가장 큰 차별점입니다.</p>

      <div class="feature-grid">
        <div class="feature-card">
          <h3>파일을 직접 읽는다</h3>
          <p>폴더 안의 PDF, 엑셀, 문서 파일을 알아서 열어보고 내용을 파악합니다. 내가 일일이 복사해서 붙여넣을 필요가 없습니다.</p>
        </div>
        <div class="feature-card">
          <h3>파일을 직접 만든다</h3>
          <p>수식이 들어간 엑셀, 슬라이드가 구성된 파워포인트, 서식이 갖춰진 보고서를 파일로 바로 생성합니다. 복사-붙여넣기가 필요 없습니다.</p>
        </div>
        <div class="feature-card">
          <h3>여러 단계를 알아서 처리</h3>
          <p>"이거 해줘"라고 한 마디 하면, 필요한 단계를 스스로 계획하고 순서대로 실행합니다. 중간중간 지시할 필요 없습니다.</p>
        </div>
        <div class="feature-card">
          <h3>서브에이전트로 병렬 처리</h3>
          <p>큰 작업을 여러 개의 작은 작업으로 쪼개서 동시에 처리합니다. 파일 10개를 분석해야 하면 한꺼번에 읽습니다.</p>
        </div>
      </div>
    </section>

    <section>
      <h2>서브에이전트 병렬 처리란?</h2>
      <p>코워크는 혼자 일하는 게 아닙니다. 내부적으로 <strong>여러 개의 서브에이전트(보조원)</strong>를 동시에 띄워서 작업을 나눠 처리합니다.</p>

      <div class="code-block">
        <p class="code-label">순차 처리 vs 병렬 처리</p>
        <pre>일반 AI (순차 처리):
  PDF 1 읽기 → PDF 2 읽기 → PDF 3 읽기 → ... → PDF 10 읽기
  ⏱ 오래 걸림

코워크 (병렬 처리):
  ├── 서브에이전트 A → PDF 1, 2, 3 동시 처리
  ├── 서브에이전트 B → PDF 4, 5, 6 동시 처리
  ├── 서브에이전트 C → PDF 7, 8, 9, 10 동시 처리
  └── 결과 종합 → 보고서 작성
  ⏱ 훨씬 빠름</pre>
      </div>

      <p>파일이 많을수록, 작업이 복잡할수록 이 차이가 크게 벌어집니다.</p>
    </section>

    <section>
      <h2>작업 처리 흐름</h2>
      <p>코워크에 일을 시키면 이런 순서로 진행됩니다.</p>

      <div class="code-block">
        <p class="code-label">5단계 워크플로우</p>
        <pre>① 목표 설명
   자연어로 최종 목표를 적습니다

② 실행 계획 검토
   Cowork가 단계별 계획을 제안합니다
   마음에 안 들면 수정하거나 범위를 좁힐 수 있습니다

③ 승인
   파일 삭제, 대규모 이동 같은 중요 작업은 별도 승인을 요청합니다
   승인 / 일부만 실행 / 취소 중에서 선택합니다

④ 실행 및 모니터링
   실시간으로 진행 상황을 보여줍니다
   중간에 중지하거나 새 지시를 줄 수 있습니다

⑤ 결과 확인
   완성된 파일을 폴더에서 직접 열어 확인합니다</pre>
      </div>
    </section>

    <section>
      <h2>만들 수 있는 파일 종류</h2>
      <table class="comparison-table">
        <thead>
          <tr>
            <th>파일 종류</th>
            <th>특징</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td><strong>엑셀 (.xlsx)</strong></td>
            <td>수식, 차트, 서식이 포함된 실제 엑셀 파일</td>
          </tr>
          <tr>
            <td><strong>파워포인트 (.pptx)</strong></td>
            <td>슬라이드 구성이 적용된 발표 자료</td>
          </tr>
          <tr>
            <td><strong>워드/텍스트</strong></td>
            <td>보고서, 제안서, 문서 등</td>
          </tr>
          <tr>
            <td><strong>CSV, JSON</strong></td>
            <td>정리된 데이터 파일</td>
          </tr>
          <tr>
            <td><strong>마크다운 (.md)</strong></td>
            <td>깔끔하게 정리된 텍스트 문서</td>
          </tr>
        </tbody>
      </table>
    </section>

    <section>
      <h2>안전하게 쓰는 팁</h2>
      <div class="info-box">
        <ul>
          <li><strong>삭제/이동은 리스트를 먼저 확인:</strong> Cowork가 제안하는 목록을 검토한 다음 "이 항목들만 실행해줘"처럼 범위를 좁혀 지시하세요</li>
          <li><strong>테스트 폴더에서 먼저 연습:</strong> 실제 업무 폴더에 적용하기 전, 복사한 테스트 폴더에서 먼저 돌려보세요</li>
          <li><strong>한국어 조건 명시:</strong> "한글 파일 이름 유지해줘", "한국어로 작성해줘"처럼 명시하면 더 안정적입니다</li>
        </ul>
      </div>
    </section>
  </div>
</template>
