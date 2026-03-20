<template>
  <div class="page-content">
    <h1>프롬프트의 기본 구조</h1>
    <p class="subtitle">AI에게 원하는 결과를 얻기 위한 질문 작성법의 기초를 배워봅시다.</p>

    <section>
      <h2>프롬프트란?</h2>
      <p><strong>프롬프트(Prompt)</strong>란 AI에게 보내는 입력 텍스트, 즉 <strong>질문이나 지시사항</strong>을 말합니다. 프롬프트를 어떻게 작성하느냐에 따라 AI의 응답 품질이 크게 달라집니다.</p>
    </section>

    <section>
      <h2>좋은 프롬프트의 4가지 요소</h2>
      <div class="feature-grid">
        <div class="feature-card">
          <h3>1. 역할 (Role)</h3>
          <p>AI에게 특정 역할을 부여합니다.</p>
          <p class="example">"당신은 10년 경력의 마케팅 전문가입니다."</p>
        </div>
        <div class="feature-card">
          <h3>2. 맥락 (Context)</h3>
          <p>배경 정보와 상황을 설명합니다.</p>
          <p class="example">"우리 회사는 B2B SaaS 스타트업이고, 시리즈A 투자를 준비중입니다."</p>
        </div>
        <div class="feature-card">
          <h3>3. 지시 (Instruction)</h3>
          <p>구체적으로 무엇을 해야 하는지 명확히 합니다.</p>
          <p class="example">"투자자 대상 회사 소개 이메일을 작성해주세요."</p>
        </div>
        <div class="feature-card">
          <h3>4. 출력 형식 (Format)</h3>
          <p>원하는 결과물의 형태를 지정합니다.</p>
          <p class="example">"3문단 이내로, 존댓말로 작성해주세요."</p>
        </div>
      </div>
    </section>

    <section>
      <h2>나쁜 프롬프트 vs 좋은 프롬프트</h2>
      <div class="code-block bad">
        <p class="code-label">나쁜 예시</p>
        <pre>마케팅 전략 알려줘</pre>
      </div>
      <div class="code-block good">
        <p class="code-label">좋은 예시</p>
        <pre>당신은 디지털 마케팅 전문가입니다.

[상황]
- 월 예산 500만원의 온라인 쇼핑몰 (여성 의류)
- 주요 고객: 25~35세 여성
- 현재 인스타그램 팔로워 5,000명

위 상황에 맞는 3개월 마케팅 전략을 수립해주세요.
각 월별로 목표, 채널, 예산 배분을 표로 정리해주세요.</pre>
      </div>
    </section>

    <section>
      <h2>실습</h2>
      <p>아래 나쁜 프롬프트를 4가지 요소를 활용하여 좋은 프롬프트로 개선해보세요:</p>
      <div class="code-block">
        <p class="code-label">개선해보기</p>
        <pre>자기소개서 써줘</pre>
      </div>
      <p><strong>힌트:</strong> 어떤 회사에 지원하는지, 본인의 경력은 어떤지, 어떤 톤으로 작성할지 등을 추가해보세요.</p>
    </section>
  </div>
</template>
