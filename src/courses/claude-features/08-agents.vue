<template>
  <div class="page-content">
    <h1>Agents (서브에이전트)</h1>
    <p class="subtitle">Claude가 복잡한 작업을 팀원처럼 나눠서 처리하는 기능입니다.</p>

    <section>
      <h2>에이전트란?</h2>
      <p><strong>에이전트</strong>는 Claude 안에서 돌아가는 <strong>전문 보조원</strong>입니다. 큰 작업을 여러 보조원에게 나눠주면 더 빠르고 정확하게 처리할 수 있습니다.</p>
      <div class="info-box">
        <p><strong>비유:</strong> 팀장(메인 Claude)이 팀원(에이전트)에게 "너는 이거 조사해", "너는 저거 분석해" 하고 나눠준 다음, 결과를 모아서 정리하는 것과 같습니다.</p>
      </div>
    </section>

    <section>
      <h2>기본 제공 에이전트</h2>
      <table class="comparison-table">
        <thead>
          <tr>
            <th>유형</th>
            <th>하는 일</th>
            <th>특징</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td><strong>일반</strong></td>
            <td>복잡한 작업을 자율적으로 처리</td>
            <td>모든 도구 사용 가능</td>
          </tr>
          <tr>
            <td><strong>탐색</strong></td>
            <td>파일 찾기, 코드 검색</td>
            <td>읽기만 가능 (수정 불가)</td>
          </tr>
          <tr>
            <td><strong>계획</strong></td>
            <td>작업 계획 수립, 구조 분석</td>
            <td>읽기만 가능 (수정 불가)</td>
          </tr>
        </tbody>
      </table>
    </section>

    <section>
      <h2>에이전트가 실제로 동작하는 모습</h2>
      <div class="code-block">
        <p class="code-label">예시</p>
        <pre>나: "이 프로젝트의 모든 API를 찾아서 문서로 정리해줘"

Claude (팀장):
  ├── 탐색 에이전트 1 → 프로젝트 파일 전체 검색
  ├── 탐색 에이전트 2 → API 관련 코드 분석
  └── 결과 종합 → API 문서 작성</pre>
      </div>
      <p>여러 에이전트가 <strong>동시에</strong> 작업하므로 하나씩 하는 것보다 훨씬 빠릅니다.</p>
    </section>

    <section>
      <h2>가장 쉽게 만드는 방법</h2>
      <p>직접 파일을 만들 필요 없이, <strong>Claude에게 대화로 요청</strong>하면 됩니다.</p>
      <div class="code-block good">
        <p class="code-label">대화로 에이전트 만들기</p>
        <pre>코드를 검토해주는 커스텀 에이전트를 만들어줘</pre>
      </div>
      <div class="code-block good">
        <p class="code-label">더 구체적으로 요청하기</p>
        <pre>변경된 파일과 관련된 테스트를 자동으로 찾아서 실행해주는
에이전트를 만들어줘. 결과를 알기 쉽게 정리해주면 좋겠어.</pre>
      </div>
      <p>Claude가 <code>.claude/agents/</code> 폴더에 파일을 자동으로 만들어줍니다.</p>
    </section>

    <section>
      <h2>에이전트 파일 구조</h2>
      <p><code>.claude/agents/</code> 폴더에 파일을 만들면 나만의 전문 보조원을 만들 수 있습니다.</p>
      <div class="code-block good">
        <p class="code-label">예시: .claude/agents/checker/checker.md</p>
        <pre>---
description: 변경된 파일과 관련된 테스트를 찾아서 실행합니다
tools: Bash, Read, Glob, Grep
---

1. 변경된 파일 목록을 확인하세요
2. 관련된 테스트 파일을 찾으세요
3. 해당 테스트만 실행하세요
4. 결과를 알기 쉽게 정리해서 보고하세요</pre>
      </div>
    </section>
  </div>
</template>
