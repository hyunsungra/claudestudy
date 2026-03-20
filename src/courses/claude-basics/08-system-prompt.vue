<template>
  <div class="page-content">
    <h1>시스템 프롬프트 활용</h1>
    <p class="subtitle">AI의 전체적인 행동 방식을 제어하는 시스템 프롬프트를 배워봅시다.</p>

    <section>
      <h2>시스템 프롬프트란?</h2>
      <p><strong>시스템 프롬프트(System Prompt)</strong>는 AI의 역할, 성격, 규칙을 미리 설정하는 특별한 지시입니다. 일반 대화 이전에 설정되어 모든 응답에 영향을 미칩니다.</p>
      <div class="info-box">
        <p><strong>비유:</strong> 일반 프롬프트가 "오늘 할 일"이라면, 시스템 프롬프트는 "업무 매뉴얼"과 같습니다.</p>
      </div>
    </section>

    <section>
      <h2>시스템 프롬프트 설정 방법</h2>
      <p>Claude에서 시스템 프롬프트를 설정하는 방법:</p>
      <ul>
        <li><a href="https://claude.ai" target="_blank" rel="noopener"><strong>claude.ai</strong></a> — 프로젝트 기능에서 "Instructions" 설정</li>
        <li><a href="https://docs.anthropic.com/en/api/messages" target="_blank" rel="noopener"><strong>API</strong></a> — <code>system</code> 파라미터로 전달</li>
        <li><strong>Claude Code</strong> — <code>CLAUDE.md</code> 파일에 작성</li>
      </ul>
    </section>

    <section>
      <h2>시스템 프롬프트 예시</h2>
      <div class="code-block good">
        <p class="code-label">고객 상담 챗봇용</p>
        <pre>당신은 "테크샵"의 고객 상담 직원입니다.

[규칙]
- 항상 존댓말을 사용합니다
- 고객의 이름을 불러주며 친근하게 대응합니다
- 환불/교환 관련 문의는 1588-1234로 안내합니다
- 기술적 문제는 단계별로 해결 방법을 안내합니다
- 경쟁사 제품에 대한 비교 질문에는 답하지 않습니다

[톤]
친절하고 전문적이며, 이모지를 적절히 사용합니다.</pre>
      </div>

      <div class="code-block good">
        <p class="code-label">코드 리뷰어용</p>
        <pre>당신은 시니어 소프트웨어 엔지니어입니다.

[역할]
- 코드 리뷰를 수행합니다
- 버그, 보안 취약점, 성능 이슈를 찾아냅니다
- 개선 사항을 구체적인 코드와 함께 제안합니다

[규칙]
- 항상 이유를 설명합니다 (왜 이 변경이 필요한지)
- 좋은 부분도 칭찬합니다
- 심각도를 표시합니다: 🔴 필수 수정 / 🟡 권장 / 🟢 선택</pre>
      </div>
    </section>

    <section>
      <h2>Claude 프로젝트에서 활용하기</h2>
      <p><a href="https://claude.ai" target="_blank" rel="noopener">claude.ai</a>의 <strong>프로젝트</strong> 기능을 사용하면:</p>
      <ol>
        <li>프로젝트를 생성합니다</li>
        <li>"Set project instructions"에 시스템 프롬프트를 입력합니다</li>
        <li>관련 파일(회사 가이드, 코드 등)을 업로드합니다</li>
        <li>해당 프로젝트에서 대화하면 설정이 자동 적용됩니다</li>
      </ol>
      <div class="info-box">
        <p><strong>활용 팁:</strong> 반복적인 업무(주간 보고서, 코드 리뷰 등)마다 프로젝트를 만들어두면 매번 같은 지시를 입력할 필요가 없습니다.</p>
      </div>
    </section>
  </div>
</template>
