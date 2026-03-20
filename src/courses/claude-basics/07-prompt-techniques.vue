<template>
  <div class="page-content">
    <h1>효과적인 프롬프트 작성법</h1>
    <p class="subtitle">프로그래밍이든 프롬프트든, 좋은 결과를 만드는 구조는 같습니다.</p>

    <section>
      <h2>입력 → 처리 → 출력</h2>
      <p>모든 프로그램은 이 흐름으로 동작합니다. 데이터를 <strong>입력</strong>받고, 로직으로 <strong>처리</strong>하고, 결과를 <strong>출력</strong>합니다. 프롬프트도 정확히 같습니다.</p>

      <div class="ipo-flow">
        <div class="ipo-card input">
          <div class="ipo-label">입력 (Input)</div>
          <div class="ipo-title">역할 + 맥락</div>
          <div class="ipo-desc">AI에게 누구인지, 어떤 상황인지 알려줍니다</div>
        </div>
        <div class="ipo-arrow">→</div>
        <div class="ipo-card process">
          <div class="ipo-label">처리 (Process)</div>
          <div class="ipo-title">지시</div>
          <div class="ipo-desc">무엇을 해야 하는지 구체적으로 명령합니다</div>
        </div>
        <div class="ipo-arrow">→</div>
        <div class="ipo-card output">
          <div class="ipo-label">출력 (Output)</div>
          <div class="ipo-title">출력 형식</div>
          <div class="ipo-desc">결과물의 형태와 조건을 지정합니다</div>
        </div>
      </div>

      <div class="info-box">
        <p>이 3단계 패턴은 프로그래밍의 함수, API 설계, 데이터 파이프라인 등 어디에나 적용됩니다. <strong>프롬프트도 하나의 프로그램이라고 생각하세요.</strong> 이 구조를 익히면 어떤 AI 도구를 쓰든 좋은 결과를 만들 수 있습니다.</p>
      </div>
    </section>

    <section>
      <h2>1단계: 입력 — 역할과 맥락 설정</h2>
      <p>프로그램에 데이터를 넣듯, AI에게 <strong>배경 정보</strong>를 먼저 제공합니다. "누가" 그리고 "어떤 상황에서" — 이 두 가지가 입력입니다.</p>

      <table class="comparison-table">
        <thead>
          <tr>
            <th>요소</th>
            <th>역할</th>
            <th>예시</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td><strong>역할</strong></td>
            <td>AI의 전문성을 설정</td>
            <td>"당신은 10년 경력의 마케팅 전문가입니다"</td>
          </tr>
          <tr>
            <td><strong>맥락</strong></td>
            <td>상황과 조건을 설명</td>
            <td>"B2B SaaS 스타트업이고 시리즈A를 준비중입니다"</td>
          </tr>
        </tbody>
      </table>

      <div class="code-block good">
        <p class="code-label">입력 예시</p>
        <pre>당신은 시니어 프론트엔드 개발자입니다.

[상황]
- React + TypeScript 프로젝트
- 사용자 인증 기능을 새로 추가해야 합니다
- 백엔드 API는 이미 준비되어 있습니다</pre>
      </div>
      <p>역할과 맥락이 구체적일수록, AI는 더 정확한 관점에서 답변합니다. 마치 함수에 정확한 파라미터를 넘기는 것과 같습니다.</p>
    </section>

    <section>
      <h2>2단계: 처리 — 명확한 지시</h2>
      <p>프로그램의 로직에 해당합니다. <strong>"무엇을 해라"</strong>를 구체적으로 명령합니다. 모호하면 결과도 모호합니다.</p>

      <table class="comparison-table">
        <thead>
          <tr>
            <th>모호한 지시</th>
            <th>구체적인 지시</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>"로그인 기능 만들어줘"</td>
            <td>"JWT 기반 로그인 컴포넌트를 작성해주세요. 이메일/비밀번호 입력 폼, 유효성 검사, 에러 처리를 포함해주세요"</td>
          </tr>
          <tr>
            <td>"마케팅 전략 알려줘"</td>
            <td>"월 500만원 예산으로 인스타그램 중심의 3개월 마케팅 전략을 수립해주세요"</td>
          </tr>
        </tbody>
      </table>

      <div class="code-block good">
        <p class="code-label">처리 예시</p>
        <pre>위 상황에 맞는 로그인 페이지를 작성해주세요.

[요구사항]
1. 이메일/비밀번호 입력 폼
2. 입력값 유효성 검사 (이메일 형식, 비밀번호 8자 이상)
3. 로그인 API 호출 및 JWT 토큰 저장
4. 에러 발생 시 사용자에게 메시지 표시</pre>
      </div>
    </section>

    <section>
      <h2>3단계: 출력 — 결과물 형식 지정</h2>
      <p>프로그램이 <code>return</code> 값의 타입을 정하듯, AI의 <strong>결과물 형태</strong>를 미리 지정합니다. 이걸 빼먹으면 AI가 알아서 형식을 정하기 때문에 원하는 결과가 나오지 않을 수 있습니다.</p>

      <div class="code-block good">
        <p class="code-label">출력 형식 예시</p>
        <pre>[출력 형식]
- 코드는 TypeScript로 작성
- 컴포넌트 하나의 파일로 작성
- 주요 로직에 한글 주석 추가
- 사용한 라이브러리가 있다면 설치 명령어도 포함</pre>
      </div>

      <p>자주 쓰는 출력 형식 지정:</p>
      <table class="comparison-table">
        <thead>
          <tr>
            <th>상황</th>
            <th>출력 형식 지정</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>요약이 필요할 때</td>
            <td>"3줄 이내로 요약", "불릿 포인트로 정리"</td>
          </tr>
          <tr>
            <td>데이터 정리</td>
            <td>"표로 정리", "CSV 형식으로 출력"</td>
          </tr>
          <tr>
            <td>코드 요청</td>
            <td>"Python으로 작성", "주석 포함", "테스트 코드 포함"</td>
          </tr>
          <tr>
            <td>문서 작성</td>
            <td>"경어체", "A4 1장 분량", "제목-본문-결론 구조"</td>
          </tr>
        </tbody>
      </table>
    </section>

    <section>
      <h2>전체 패턴 조합 예시</h2>
      <p>3단계를 하나로 합치면 이렇게 됩니다:</p>

      <div class="code-block bad">
        <p class="code-label">패턴 없이 작성</p>
        <pre>마케팅 전략 알려줘</pre>
      </div>

      <div class="code-block good">
        <p class="code-label">입력 → 처리 → 출력 패턴 적용</p>
        <pre>[입력 - 역할/맥락]
당신은 디지털 마케팅 전문가입니다.
우리는 월 예산 500만원의 온라인 여성 의류 쇼핑몰이고,
주요 고객은 25~35세 여성, 인스타그램 팔로워 5,000명입니다.

[처리 - 지시]
3개월간의 단계별 마케팅 전략을 수립해주세요.
각 월별 목표, 핵심 채널, 구체적인 실행 방안을 포함해주세요.

[출력 - 형식]
월별로 표로 정리하고, 각 월의 예산 배분도 포함해주세요.
핵심 KPI 3개를 함께 제시해주세요.</pre>
      </div>
    </section>

    <section>
      <h2>이 패턴이 강력한 이유</h2>
      <div class="feature-grid">
        <div class="feature-card">
          <h3>어디에나 적용 가능</h3>
          <p>Claude뿐 아니라 ChatGPT, Gemini 등 어떤 AI 도구에서도 동일하게 작동합니다. 도구가 바뀌어도 패턴은 그대로입니다.</p>
        </div>
        <div class="feature-card">
          <h3>디버깅이 쉽다</h3>
          <p>결과가 마음에 안 들면 어느 단계가 문제인지 바로 파악할 수 있습니다. 맥락이 부족한지, 지시가 모호한지, 출력 형식이 빠졌는지.</p>
        </div>
        <div class="feature-card">
          <h3>재사용할 수 있다</h3>
          <p>잘 만든 프롬프트는 템플릿으로 저장해두고 입력값만 바꿔서 재사용할 수 있습니다. 함수처럼요.</p>
        </div>
        <div class="feature-card">
          <h3>프로그래밍 사고와 동일</h3>
          <p>함수(입력 → 처리 → 반환), API(요청 → 로직 → 응답), 파이프라인(수집 → 변환 → 적재) — 전부 같은 구조입니다.</p>
        </div>
      </div>
    </section>

    <section>
      <h2>추가 팁</h2>

      <h3>반복 개선하기</h3>
      <p>한 번에 완벽할 필요 없습니다. 대화를 이어가며 결과를 다듬으세요.</p>
      <div class="info-box">
        <ul>
          <li>1차: 패턴대로 프롬프트 작성 → 초안 받기</li>
          <li>2차: "더 간결하게 줄여주세요"</li>
          <li>3차: "톤을 좀 더 친근하게 바꿔주세요"</li>
          <li>4차: "표 형식으로 다시 정리해주세요"</li>
        </ul>
      </div>

      <h3>부정문보다 긍정문</h3>
      <p>"하지 마"보다 "이렇게 해"가 AI에게 더 명확합니다.</p>
      <table class="comparison-table">
        <thead>
          <tr>
            <th>비추천</th>
            <th>추천</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>"어려운 용어를 쓰지 마세요"</td>
            <td>"중학생도 이해할 수 있는 쉬운 말로 설명해주세요"</td>
          </tr>
          <tr>
            <td>"길게 쓰지 마세요"</td>
            <td>"3문장 이내로 작성해주세요"</td>
          </tr>
        </tbody>
      </table>

      <h3>Few-shot: 예시를 보여주기</h3>
      <p>원하는 결과의 <strong>예시를 먼저 보여주면</strong> AI가 패턴을 파악하여 일관된 결과를 만들어냅니다.</p>
      <div class="code-block good">
        <p class="code-label">Few-shot 예시</p>
        <pre>다음 형식으로 제품 설명을 작성해주세요:

[예시]
제품: 무선 이어폰
설명: 일상에 음악을 더하다. 가벼운 착용감과 깊은 사운드로
어디서든 나만의 음악 세계에 빠져보세요.

[작성 요청]
제품: 노트북 거치대</pre>
      </div>
    </section>

    <section>
      <h2>실습</h2>
      <p>아래 프롬프트에 <strong>입력 → 처리 → 출력</strong> 패턴을 적용하여 개선해보세요:</p>
      <div class="code-block bad">
        <p class="code-label">개선 전</p>
        <pre>자기소개서 써줘</pre>
      </div>
      <p><strong>힌트:</strong></p>
      <ul>
        <li><strong>입력</strong> — 어떤 회사, 어떤 직무에 지원하는지? 본인의 경력은?</li>
        <li><strong>처리</strong> — 어떤 내용을 강조할지, 어떤 구조로 작성할지?</li>
        <li><strong>출력</strong> — 분량, 어투, 형식은?</li>
      </ul>
    </section>
  </div>
</template>

<style scoped>
/* === IPO Flow Diagram === */
.ipo-flow {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  margin: 28px 0;
  flex-wrap: wrap;
}

.ipo-card {
  flex: 1;
  min-width: 180px;
  max-width: 260px;
  padding: 20px;
  border-radius: 14px;
  text-align: center;
  border: 2px solid;
}

.ipo-card.input {
  background: #eff6ff;
  border-color: #93c5fd;
}

.ipo-card.process {
  background: #fef3c7;
  border-color: #fcd34d;
}

.ipo-card.output {
  background: #ecfdf5;
  border-color: #6ee7b7;
}

.ipo-label {
  font-size: 0.72rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  margin-bottom: 6px;
}

.ipo-card.input .ipo-label { color: #2563eb; }
.ipo-card.process .ipo-label { color: #d97706; }
.ipo-card.output .ipo-label { color: #059669; }

.ipo-title {
  font-size: 1.15rem;
  font-weight: 800;
  color: #1e293b;
  margin-bottom: 6px;
}

.ipo-desc {
  font-size: 0.82rem;
  color: #64748b;
  line-height: 1.5;
}

.ipo-arrow {
  font-size: 1.6rem;
  color: #94a3b8;
  font-weight: 700;
  flex-shrink: 0;
}

@media (max-width: 768px) {
  .ipo-flow {
    flex-direction: column;
    gap: 4px;
  }
  .ipo-card {
    max-width: 100%;
  }
  .ipo-arrow {
    transform: rotate(90deg);
    font-size: 1.3rem;
  }
}
</style>
