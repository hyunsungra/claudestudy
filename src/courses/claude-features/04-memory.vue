<template>
  <div class="page-content">
    <h1>메모리 시스템</h1>
    <p class="subtitle">Claude가 대화가 끝나도 중요한 정보를 기억해두는 기능입니다.</p>

    <section>
      <h2>메모리란?</h2>
      <p>보통 AI와의 대화는 창을 닫으면 다 사라집니다. 하지만 Claude Code의 <strong>메모리</strong>를 사용하면, 중요한 정보를 저장해두고 다음 대화에서도 활용할 수 있습니다.</p>
      <div class="info-box">
        <p><strong>비유:</strong> 일반 대화는 "칠판" — 지우면 끝. 메모리는 "수첩" — 적어두면 다음에도 볼 수 있습니다.</p>
      </div>
    </section>

    <section>
      <h2>어떤 걸 기억시킬 수 있나?</h2>
      <div class="feature-grid">
        <div class="feature-card">
          <h3>내 정보</h3>
          <p>"나는 초보 개발자야", "설명은 쉽게 해줘" 같은 개인 선호를 저장합니다.</p>
        </div>
        <div class="feature-card">
          <h3>작업 피드백</h3>
          <p>"그렇게 하지 마", "이 방식 좋았어" 같은 교정/확인을 저장합니다.</p>
        </div>
        <div class="feature-card">
          <h3>프로젝트 상황</h3>
          <p>"3월 5일까지 마감", "이 기능은 법적 이유로 변경됨" 같은 맥락을 저장합니다.</p>
        </div>
        <div class="feature-card">
          <h3>참고 자료 위치</h3>
          <p>"버그 트래킹은 Jira에서 해", "디자인 시안은 Figma에 있어" 같은 정보를 저장합니다.</p>
        </div>
      </div>
    </section>

    <section>
      <h2>사용 방법</h2>
      <p>자연스럽게 대화하면서 기억시키면 됩니다.</p>

      <div class="code-block">
        <p class="code-label">기억시키기</p>
        <pre>나는 프론트엔드 3년차야. 이거 기억해줘.</pre>
      </div>

      <div class="code-block">
        <p class="code-label">기억 확인하기</p>
        <pre>나에 대해 기억하고 있는 거 알려줘</pre>
      </div>

      <div class="code-block">
        <p class="code-label">기억 지우기</p>
        <pre>내 역할에 대한 메모리 지워줘</pre>
      </div>

      <div class="code-block">
        <p class="code-label">메모리 관리 명령어</p>
        <pre>/memory</pre>
      </div>
    </section>

    <section>
      <h2>메모리에 저장하면 안 되는 것</h2>
      <div class="info-box">
        <ul>
          <li>코드 자체나 파일 구조 — 코드를 직접 보면 되니까</li>
          <li>일시적인 작업 내용 — 지금 대화에서만 필요한 건 그냥 대화로 하면 됩니다</li>
          <li>비밀번호, API 키 — 보안에 위험합니다</li>
        </ul>
      </div>
    </section>
  </div>
</template>
