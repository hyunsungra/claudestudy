<script setup>
import { ref, computed } from 'vue'

const cardRatio = ref('16:9 (1200x675)')
const cardRatios = ['16:9 (1200x675)', '1:1 (1080x1080)', '9:16 (1080x1920)', '4:3 (1200x900)']

const copyLabel = ref('복사')
const showProgress = ref(false)

const ratioMap = {
  '16:9 (1200x675)': { width: 1200, height: 675 },
  '1:1 (1080x1080)': { width: 1080, height: 1080 },
  '9:16 (1080x1920)': { width: 1080, height: 1920 },
  '4:3 (1200x900)': { width: 1200, height: 900 },
}

const selectedSize = computed(() => ratioMap[cardRatio.value])

const hl = (text) => `<span class="dynamic-value">${text}</span>`

const skillPromptHtml = computed(() =>
`현재 폴더에 image-card-maker라는 이름의 스킬을 만들어줘.

스킬 이름: image-card-maker
스킬 설명: 블로그 글을 분석해서 이미지 카드를 생성하는 스킬

스킬이 실행되면 다음 순서로 동작해야 해:

1. 사용자가 지정한 .md 파일을 읽는다
2. 글 내용을 분석해서 이미지 카드 기획을 한다
   - 몇 장의 슬라이드로 나눌지 결정
   - 각 슬라이드의 제목, 핵심 내용, 배치 구성을 정리
   - 전체 색상 테마와 디자인 방향을 결정
3. 기획 내용을 주제명 폴더 안에 "원본파일명_카드기획.md" 파일로 저장한다
4. 기획대로 모든 슬라이드를 하나의 HTML 파일로 코딩한다
   - 모든 카드를 하나의 HTML 파일에 포함
   - 각 카드는 ${hl(selectedSize.value.width + 'x' + selectedSize.value.height + 'px')} 크기의 개별 섹션으로 구성
   - HTML의 viewport 메타 태그를 반드시 설정할 것:
     &lt;meta name="viewport" content="width=${hl(String(selectedSize.value.width))}"&gt;
   - 깔끔하고 읽기 쉬운 디자인
   - 한국어 웹폰트 적용 (Pretendard 또는 Noto Sans KR)
   - 각 카드 섹션에 고유한 id를 부여 (slide-1, slide-2, ...)
5. HTML 파일에서 각 카드 섹션을 개별 이미지(PNG)로 캡처해서 저장한다
6. 최종 결과물을 주제명 폴더 안의 "이미지/" 폴더에 정리한다
   - cards.html (전체 HTML)
   - slide_01.png, slide_02.png, ... (개별 이미지)`)

const skillPromptText = computed(() =>
  skillPromptHtml.value.replace(/<span class="dynamic-value">/g, '').replace(/<\/span>/g, '').replace(/&lt;/g, '<').replace(/&gt;/g, '>')
)

async function copyPrompt() {
  try {
    await navigator.clipboard.writeText(skillPromptText.value)
    copyLabel.value = '복사됨!'
    showProgress.value = true
    setTimeout(() => { copyLabel.value = '복사' }, 2000)
  } catch {
    copyLabel.value = '실패'
    setTimeout(() => { copyLabel.value = '복사' }, 2000)
  }
}
</script>

<template>
  <div class="page-content">
    <div class="hero-section">
      <div class="hero-icon">🎨</div>
      <h1>첨부 이미지 만들기</h1>
      <p class="hero-desc">블로그 글 내용을 이미지 카드로 자동 변환하는 스킬을 만듭니다.</p>
    </div>

    <!-- 옵션 선택 -->
    <section>
      <div class="step-header">
        <div class="step-circle">1</div>
        <h2>옵션 선택</h2>
      </div>
      <p>이미지 카드의 비율과 크기를 선택하세요. 선택하면 아래 프롬프트가 자동으로 바뀝니다.</p>

      <div class="option-group">
        <div class="option-label">카드 비율 / 크기</div>
        <div class="option-buttons">
          <button
            v-for="r in cardRatios"
            :key="r"
            class="option-btn"
            :class="{ active: cardRatio === r }"
            @click="cardRatio = r"
          >{{ r }}</button>
        </div>
        <div class="option-hint">
          <span class="hint-item">16:9 — 블로그 썸네일, 유튜브</span>
          <span class="hint-item">1:1 — 인스타그램, 링크드인</span>
          <span class="hint-item">9:16 — 인스타 스토리, 쇼츠</span>
          <span class="hint-item">4:3 — 프레젠테이션</span>
        </div>
      </div>
    </section>

    <!-- 스킬 만들기 -->
    <section>
      <div class="step-header">
        <div class="step-circle">2</div>
        <h2>이미지 카드 스킬 만들기</h2>
      </div>
      <p>아래 프롬프트를 복사해서 코워크에 붙여넣으세요. 위에서 선택한 옵션이 <span class="dynamic-value-inline">초록색 부분</span>에 반영되어 있습니다.</p>

      <div class="prompt-card highlight">
        <div class="prompt-label">코워크에 입력 (핵심 프롬프트)</div>
        <div class="code-block good no-auto-copy" style="position: relative;">
          <pre v-html="skillPromptHtml"></pre>
          <button class="copy-btn-manual" :class="{ copied: copyLabel === '복사됨!' }" @click="copyPrompt">{{ copyLabel }}</button>
        </div>
        <div v-if="showProgress" class="copy-progress">
          <span class="cp-icon">✅</span>
          <span class="cp-text">복사 완료 — 여기까지 진행했습니다</span>
        </div>
      </div>

      <div class="checkpoint mini">
        <span class="checkpoint-icon">✅</span>
        <span class="checkpoint-text-inline">.claude/skills/image-card-maker/SKILL.md 파일이 생성되었으면 다음으로</span>
      </div>
    </section>

    <!-- 이미지 카드 생성 실행 -->
    <section>
      <div class="step-header">
        <div class="step-circle">3</div>
        <h2>이미지 카드 생성하기</h2>
      </div>
      <p>스킬을 실행해서 글의 이미지 카드를 만듭니다. 상황에 맞는 프롬프트를 복사해서 사용하세요.</p>

      <div class="prompt-card">
        <div class="prompt-label">기본 요청</div>
        <div class="code-block good">
          <pre>AI_업무_활용_5가지_방법 이미지 카드 만들어줘</pre>
        </div>
      </div>

      <div class="prompt-card">
        <div class="prompt-label">슬라이드 수 지정</div>
        <div class="code-block good">
          <pre>AI_업무_활용_5가지_방법 이미지 카드 5장으로 만들어줘</pre>
        </div>
      </div>

      <div class="prompt-card">
        <div class="prompt-label">스타일 지정</div>
        <div class="code-block good">
          <pre>AI_업무_활용_5가지_방법 이미지 카드 만들어줘. 파란색 테마로, 아이콘 많이 사용해줘</pre>
        </div>
      </div>
    </section>

    <!-- 결과물 확인 -->
    <section>
      <div class="step-header">
        <div class="step-circle">4</div>
        <h2>결과물 확인</h2>
      </div>
      <p>스킬이 실행되면 다음과 같은 파일들이 생성됩니다.</p>

      <div class="result-preview">
        <div class="result-header">
          <span class="result-file">📁 생성된 파일 구조</span>
          <span class="result-notice">실제 파일 수는 슬라이드 수에 따라 달라집니다</span>
        </div>
        <div class="result-body">
          <div class="result-row folder">
            <span class="result-icon">📁</span>
            <span class="result-name">AI_업무_활용_5가지_방법/</span>
            <span class="result-tag topic">주제 폴더</span>
          </div>
          <div class="result-row sub">
            <span class="result-icon">📄</span>
            <span class="result-name">AI_업무_활용_5가지_방법.md</span>
            <span class="result-tag plan">본문</span>
          </div>
          <div class="result-row sub">
            <span class="result-icon">📄</span>
            <span class="result-name">AI_업무_활용_5가지_방법_카드기획.md</span>
            <span class="result-tag plan">기획서</span>
          </div>
          <div class="result-row sub folder">
            <span class="result-icon">📁</span>
            <span class="result-name">이미지/</span>
          </div>
          <div class="result-row sub2">
            <span class="result-icon">🌐</span>
            <span class="result-name">cards.html</span>
            <span class="result-tag html">전체 HTML</span>
          </div>
          <div class="result-row sub2">
            <span class="result-icon">🖼️</span>
            <span class="result-name">slide_01.png</span>
            <span class="result-tag img">이미지</span>
          </div>
          <div class="result-row sub2">
            <span class="result-icon">🖼️</span>
            <span class="result-name">slide_02.png</span>
            <span class="result-tag img">이미지</span>
          </div>
          <div class="result-row sub2 more">
            <span>...</span>
          </div>
        </div>
      </div>

      <div class="tip-card">
        <span class="tip-icon">💡</span>
        <div>cards.html 파일을 브라우저에서 열면 모든 이미지 카드를 한눈에 미리 볼 수 있습니다. 수정이 필요하면 <strong>"2번 슬라이드 제목을 바꿔줘"</strong>처럼 요청하세요.</div>
      </div>
    </section>

    <!-- 글쓰기 스킬에 연결 -->
    <section>
      <div class="step-header">
        <div class="step-circle">5</div>
        <h2>글쓰기 스킬에 연결하기</h2>
      </div>
      <p>글 작성 후 매번 따로 이미지를 만들기 번거롭다면, blog-writer 스킬에 자동으로 이미지 카드를 만들도록 연결할 수 있습니다.</p>

      <div class="prompt-card highlight">
        <div class="prompt-label">코워크에 입력 (스킬 수정 프롬프트)</div>
        <div class="code-block good">
          <pre>blog-writer 스킬을 수정해줘.

변경사항:
글 작성이 완료되면 자동으로 image-card-maker 스킬을 실행해서
이미지 카드를 생성하고 해당 주제명 폴더 안의 이미지/ 폴더에 저장할 것</pre>
        </div>
      </div>

      <div class="tip-card">
        <span class="tip-icon">💡</span>
        <div>이렇게 연결하면 <strong>글 작성 → 사실 검증 → 이미지 카드 생성 → 저장</strong>이 한 번에 자동으로 진행됩니다.</div>
      </div>
    </section>

    <!-- 최종 체크포인트 -->
    <div class="checkpoint">
      <div class="checkpoint-icon-big">🎉</div>
      <div class="checkpoint-content">
        <strong>이미지 카드 자동 생성 완성!</strong>
        <p>이제 글을 쓰면 첨부 이미지까지 자동으로 만들어집니다.</p>
      </div>
    </div>
  </div>
</template>

<style scoped>
.hero-section {
  background: linear-gradient(135deg, #1e293b 0%, #334155 100%);
  border-radius: 16px;
  padding: 48px 36px 40px;
  text-align: center;
  margin-bottom: 40px;
}
.hero-icon { font-size: 3rem; margin-bottom: 12px; }
.hero-section h1 { color: #f1f5f9; margin-bottom: 12px; }
.hero-desc { color: #94a3b8 !important; font-size: 1.15rem; margin-bottom: 0 !important; }

.step-header { display: flex; align-items: center; gap: 14px; margin-bottom: 12px; }
.step-circle {
  flex-shrink: 0; width: 40px; height: 40px;
  background: linear-gradient(135deg, #3b82f6, #2563eb);
  color: #fff; border-radius: 50%;
  display: flex; align-items: center; justify-content: center;
  font-size: 1.1rem; font-weight: 700;
}
.step-header h2 { margin: 0; font-size: 1.3rem; }

/* Option Group */
.option-group {
  background: #f8fafc; border: 1px solid #e2e8f0;
  border-radius: 12px; padding: 20px 24px; margin: 16px 0;
}
.option-label { font-weight: 700; color: #1e293b; font-size: 0.95rem; margin-bottom: 12px; }
.option-buttons { display: flex; flex-wrap: wrap; gap: 8px; margin-bottom: 12px; }
.option-btn {
  padding: 8px 18px; border: 2px solid #e2e8f0; border-radius: 10px;
  background: #fff; color: #475569; font-size: 0.9rem; font-weight: 600;
  cursor: pointer; transition: all 0.15s; font-family: inherit;
}
.option-btn:hover { border-color: #93c5fd; background: #eff6ff; }
.option-btn.active { border-color: #3b82f6; background: #2563eb; color: #fff; }
.option-hint { display: flex; flex-wrap: wrap; gap: 6px 16px; }
.hint-item { font-size: 0.8rem; color: #94a3b8; }

/* Dynamic Value */
:deep(.dynamic-value) {
  background: #dcfce7; color: #166534;
  padding: 1px 6px; border-radius: 4px; font-weight: 700;
}
.dynamic-value-inline {
  background: #dcfce7; color: #166534;
  padding: 1px 6px; border-radius: 4px; font-weight: 600;
}

/* Copy Button */
.copy-btn-manual {
  position: absolute; right: 12px; top: 12px;
  padding: 4px 12px; border: 1px solid #64748b; border-radius: 6px;
  background: #475569; color: #e2e8f0; font-size: 0.75rem; font-weight: 500;
  cursor: pointer; transition: all 0.15s; line-height: 1.4; font-family: inherit;
}
.copy-btn-manual:hover { background: #64748b; border-color: #94a3b8; }
.copy-btn-manual.copied { background: #166534; border-color: #22c55e; color: #bbf7d0; }

.prompt-card {
  background: #f8fafc; border: 1px solid #e2e8f0;
  border-radius: 12px; padding: 20px 24px; margin: 16px 0;
}
.prompt-card.highlight { background: #fffbeb; border-color: #fcd34d; }
.prompt-label { font-weight: 700; color: #1e293b; margin-bottom: 12px; font-size: 0.92rem; }

.result-preview {
  background: #f8fafc; border: 1px solid #e2e8f0;
  border-radius: 12px; overflow: hidden; margin: 16px 0;
}
.result-header {
  display: flex; align-items: center; gap: 10px; flex-wrap: wrap;
  padding: 14px 20px; background: #f1f5f9; border-bottom: 1px solid #e2e8f0;
}
.result-file { font-weight: 700; color: #1e293b; font-size: 0.95rem; }
.result-notice {
  background: #fef3c7; color: #92400e; font-size: 0.75rem;
  font-weight: 600; padding: 3px 10px; border-radius: 6px; border: 1px solid #fcd34d;
}
.result-body { padding: 12px 20px; }
.result-row {
  display: flex; align-items: center; gap: 10px;
  padding: 8px 4px; border-bottom: 1px solid #f1f5f9;
  font-size: 0.9rem; color: #334155;
}
.result-row:last-child { border-bottom: none; }
.result-row.sub { padding-left: 28px; }
.result-row.sub2 { padding-left: 56px; }
.result-row.folder { font-weight: 700; }
.result-row.more { color: #94a3b8; }
.result-icon { font-size: 1rem; flex-shrink: 0; }
.result-name { flex: 1; }
.result-tag {
  margin-left: auto; font-size: 0.75rem; padding: 2px 8px;
  border-radius: 8px; font-weight: 600; flex-shrink: 0;
}
.result-tag.topic { background: #f3e8ff; color: #7c3aed; }
.result-tag.plan { background: #e0e7ff; color: #3730a3; }
.result-tag.html { background: #dbeafe; color: #1d4ed8; }
.result-tag.img { background: #fce7f3; color: #be185d; }

.tip-card {
  display: flex; gap: 12px; align-items: center;
  background: #eff6ff; border: 1px solid #bfdbfe;
  border-radius: 12px; padding: 18px 22px;
  color: #1e40af; font-size: 0.95rem; line-height: 1.6;
}
.tip-icon { font-size: 1.3rem; flex-shrink: 0; }

.checkpoint.mini {
  display: flex; align-items: center; gap: 10px;
  background: #f0fdf4; border: 1px solid #bbf7d0;
  border-radius: 10px; padding: 12px 18px; margin: 16px 0;
}
.checkpoint.mini .checkpoint-icon { font-size: 1.2rem; }
.checkpoint-text-inline { color: #166534; font-size: 0.9rem; font-weight: 600; }

.checkpoint {
  display: flex; align-items: center; gap: 16px;
  background: linear-gradient(135deg, #f0fdf4 0%, #dcfce7 100%);
  border: 2px solid #86efac; border-radius: 12px;
  padding: 24px; margin-top: 32px;
}
.checkpoint-icon-big { font-size: 2.2rem; flex-shrink: 0; }
.checkpoint-content strong { display: block; color: #166534; font-size: 1.1rem; margin-bottom: 4px; }
.checkpoint-content p { color: #15803d; font-size: 0.9rem; margin: 0 !important; line-height: 1.5; }

@media (max-width: 768px) {
  .hero-section { padding: 32px 18px 28px; }
  .hero-section h1 { font-size: 1.4rem; }
  .step-header h2 { font-size: 1.1rem; }
  .step-circle { width: 34px; height: 34px; font-size: 0.95rem; }
  .option-buttons { flex-direction: column; }
  .option-btn { width: 100%; text-align: center; }
  .result-row.sub { padding-left: 16px; }
  .result-row.sub2 { padding-left: 32px; }
  .result-tag { display: none; }
}
</style>
