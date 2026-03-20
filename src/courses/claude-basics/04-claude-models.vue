<template>
  <div class="page-content">
    <h1>Claude 모델 종류와 특징</h1>
    <p class="subtitle">용도에 맞는 Claude 모델을 선택하는 방법을 알아봅시다.</p>

    <section>
      <h2>Claude 모델 패밀리</h2>
      <p>Anthropic은 용도와 성능에 따라 여러 Claude 모델을 제공합니다. 현재 최신 모델 패밀리는 <strong>Claude 4.5/4.6</strong> 시리즈입니다.</p>
    </section>

    <section>
      <h2>모델 비교</h2>
      <table class="comparison-table">
        <thead>
          <tr>
            <th>모델</th>
            <th>특징</th>
            <th>추천 용도</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td><strong>Opus</strong></td>
            <td>최고 성능, 복잡한 추론</td>
            <td>어려운 코딩, 심층 분석, 연구</td>
          </tr>
          <tr>
            <td><strong>Sonnet</strong></td>
            <td>성능과 속도의 균형</td>
            <td>일반 업무, 글쓰기, 코딩</td>
          </tr>
          <tr>
            <td><strong>Haiku</strong></td>
            <td>가장 빠르고 저렴</td>
            <td>간단한 질문, 분류, 대량 처리</td>
          </tr>
        </tbody>
      </table>
    </section>

    <section>
      <h2>모델 선택 가이드</h2>
      <div class="info-box">
        <ul>
          <li><strong>복잡한 작업</strong> (논문 분석, 대규모 코드 리뷰) → <strong>Opus</strong></li>
          <li><strong>일상적인 작업</strong> (이메일 작성, 코드 작성, 요약) → <strong>Sonnet</strong></li>
          <li><strong>빠른 응답이 필요한 작업</strong> (챗봇, 분류, 짧은 질문) → <strong>Haiku</strong></li>
        </ul>
      </div>
      <p>대부분의 경우 <strong>Sonnet</strong>으로 충분하며, 특별히 어려운 작업에만 Opus를 사용하는 것이 비용 효율적입니다.</p>
    </section>

    <section>
      <h2>요금제</h2>
      <p>Claude는 다음과 같은 방식으로 사용할 수 있습니다:</p>
      <ul>
        <li><strong>무료</strong> — claude.ai에서 일일 제한 내 사용</li>
        <li><strong>Pro ($20/월)</strong> — 더 많은 사용량, Opus 모델 접근</li>
        <li><strong>Team ($25/월/인)</strong> — 팀 협업 기능</li>
        <li><strong>API</strong> — 사용한 토큰만큼 과금 (종량제)</li>
      </ul>
    </section>
  </div>
</template>
