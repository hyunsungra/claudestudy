<template>
  <div class="page-content">
    <h1>자료 조사와 정리</h1>
    <p class="subtitle">여러 문서를 읽고 분석해서 정리 보고서를 만들어주는 활용법입니다.</p>

    <section>
      <h2>이런 상황에서 쓰세요</h2>
      <p>폴더에 PDF, 문서 파일이 잔뜩 있는데 다 읽을 시간이 없을 때. Claude가 <strong>전부 읽고 핵심만 정리</strong>해줍니다.</p>
    </section>

    <section>
      <h2>실전 예시</h2>

      <div class="code-block good">
        <p class="code-label">여러 문서 비교 분석</p>
        <pre>"자료" 폴더에 있는 PDF 파일 5개를 전부 읽고,
각 문서의 핵심 내용을 정리한 비교 분석표를 만들어줘.

공통점과 차이점을 정리하고,
결론을 1페이지로 요약해서 별도 파일로 저장해줘.</pre>
      </div>

      <div class="code-block good">
        <p class="code-label">제안서 검토 정리</p>
        <pre>"업체제안" 폴더에 A업체, B업체, C업체 제안서가 있어.
세 업체를 비교하는 표를 만들어줘.

비교 항목:
- 가격
- 납기
- 서비스 범위
- 특이사항

엑셀 파일로 만들어줘.</pre>
      </div>

      <div class="code-block good">
        <p class="code-label">논문/보고서 요약</p>
        <pre>"논문" 폴더에 있는 논문 3편을 읽고,
각 논문별로 다음을 정리해줘:
- 연구 목적
- 주요 결론
- 우리 프로젝트에 참고할 점

한 파일에 정리해서 저장해줘.</pre>
      </div>
    </section>

    <section>
      <h2>활용 팁</h2>
      <div class="info-box">
        <ul>
          <li><strong>폴더에 파일을 미리 넣어두세요:</strong> Claude가 접근할 수 있도록 지정한 폴더에 파일을 준비합니다</li>
          <li><strong>결과물 형식을 지정하세요:</strong> "엑셀로", "표로", "1페이지로" 등</li>
          <li><strong>비교 기준을 알려주세요:</strong> "가격, 기능, A/S 기준으로 비교해줘"</li>
        </ul>
      </div>
    </section>
  </div>
</template>
