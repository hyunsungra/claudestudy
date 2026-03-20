<template>
  <div class="page-content">
    <h1>데이터 분석과 엑셀 작업</h1>
    <p class="subtitle">데이터 파일을 분석하고, 수식이 들어간 엑셀을 직접 만들어주는 활용법입니다.</p>

    <section>
      <h2>채팅과의 차이</h2>
      <p>일반 채팅에서는 "이 수식을 쓰세요"라고 텍스트로 알려줍니다. 코워크에서는 <strong>수식이 들어간 엑셀 파일을 직접 만들어줍니다</strong>. 열면 바로 쓸 수 있는 상태로요.</p>
    </section>

    <section>
      <h2>실전 예시</h2>

      <div class="code-block good">
        <p class="code-label">매출 데이터 분석</p>
        <pre>"데이터" 폴더에 있는 매출현황.csv 파일을 분석해줘.

분석할 것:
1. 월별 매출 추이
2. 제품별 매출 비중
3. 전년 대비 성장률

결과를 엑셀 파일로 만들어줘.
시트 1: 원본 데이터
시트 2: 분석 결과 (표 + 요약)
수식도 넣어서 나중에 데이터 바꾸면 자동 계산되게.</pre>
      </div>

      <div class="code-block good">
        <p class="code-label">여러 파일 합치기</p>
        <pre>"월별매출" 폴더에 1월.csv, 2월.csv ... 12월.csv가 있어.
전부 합쳐서 연간 매출 통합 엑셀 파일을 만들어줘.

월별 시트 + 연간 종합 시트를 포함해줘.
종합 시트에는 월별 합계, 평균, 증감률 수식 넣어줘.</pre>
      </div>

      <div class="code-block good">
        <p class="code-label">설문 결과 정리</p>
        <pre>"설문" 폴더에 설문조사 결과 파일이 있어.
응답을 분석해서 결과 보고서를 만들어줘.

- 항목별 응답 비율
- 주요 의견 요약
- 점수가 낮은 항목 Top 5

엑셀 파일 하나, 요약 보고서 파일 하나로 만들어줘.</pre>
      </div>
    </section>

    <section>
      <h2>주의할 점</h2>
      <div class="info-box warning">
        <ul>
          <li><strong>숫자는 반드시 확인하세요:</strong> Claude가 만든 수식이나 계산은 원본과 대조해보세요</li>
          <li><strong>민감한 데이터 주의:</strong> 개인정보, 급여 데이터 등은 회사 보안 정책을 확인하세요</li>
        </ul>
      </div>
    </section>
  </div>
</template>
