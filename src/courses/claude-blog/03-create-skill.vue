<script setup>
import { ref, computed } from 'vue'

const copyLabel = ref('복사')

const showProgress = ref(false)

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

const postType = ref('블로그')
const postLength = ref('1500자 이내')
const customType = ref('')

const postTypes = ['블로그', '링크드인', '인스타그램', '쓰레드', '자유입력']
const postLengths = ['500자 이내', '1000자 이내', '1500자 이내', '2000자 이내', '2500자 이상']

const displayType = computed(() =>
  postType.value === '자유입력' ? (customType.value || '블로그') : postType.value
)

const hl = (text) => `<span class="dynamic-value">${text}</span>`

const skillPromptHtml = computed(() =>
`현재 폴더에 blog-writer라는 이름의 스킬을 만들어줘.

스킬 이름: blog-writer
스킬 설명: 페르소나를 기반으로 ${hl(displayType.value)} 글을 작성하는 스킬

스킬이 실행되면 다음 순서로 동작해야 해:

1. 사용자에게 글의 주제를 물어본다
2. 현재 폴더의 "페르소나.md" 파일을 읽어서 글쓰기 스타일을 파악한다
3. 페르소나의 문체, 톤, 구성 패턴을 그대로 따라서 글을 작성한다
4. 포스팅 타입: ${hl(displayType.value)}
5. 글 길이: ${hl(postLength.value)}
6. 완성된 글을 주제명 폴더를 만들어서 그 안에 저장한다
   - 예: "AI_업무_활용_5가지_방법" 주제 → AI_업무_활용_5가지_방법/ 폴더 생성 → 그 안에 AI_업무_활용_5가지_방법.md 저장

글 작성 규칙:
- 반드시 페르소나.md의 스타일을 따를 것
- 도입부, 본문, 마무리 구성을 페르소나 패턴대로 할 것
- 페르소나에 정의된 톤 앤 매너를 정확히 지킬 것
- 소제목, 문단 나누기도 페르소나 스타일대로 할 것
- 글 길이는 ${hl(postLength.value)}로 맞출 것
- 저장할 때 파일명은 주제를 요약한 이름으로 할 것
- 주제명 폴더 안에 파일을 저장할 것 (이후 검증 결과, 이미지 등도 같은 폴더에 저장됨)`)

// 복사용 (HTML 태그 제거)
const skillPromptText = computed(() =>
  skillPromptHtml.value.replace(/<span class="dynamic-value">/g, '').replace(/<\/span>/g, '')
)
</script>

<template>
  <div class="page-content">
    <div class="hero-section">
      <div class="hero-icon">⚡</div>
      <h1>글쓰기 스킬 만들기</h1>
      <p class="hero-desc">페르소나를 기반으로 글을 자동 작성하는 스킬을 만듭니다.</p>
    </div>

    <!-- 옵션 선택 -->
    <section>
      <div class="step-header">
        <div class="step-circle">1</div>
        <h2>옵션 선택</h2>
      </div>
      <p>내 상황에 맞게 옵션을 선택하면, 아래 프롬프트가 자동으로 바뀝니다.</p>

      <div class="option-group">
        <div class="option-label">포스팅 타입</div>
        <div class="option-buttons">
          <button
            v-for="t in postTypes"
            :key="t"
            class="option-btn"
            :class="{ active: postType === t }"
            @click="postType = t"
          >{{ t }}</button>
        </div>
        <div v-if="postType === '자유입력'" class="custom-input-wrap">
          <input
            v-model="customType"
            class="custom-input"
            placeholder="포스팅 타입을 직접 입력하세요 (예: 뉴스레터)"
          />
        </div>
      </div>

      <div class="option-group">
        <div class="option-label">포스팅 길이</div>
        <div class="option-buttons">
          <button
            v-for="l in postLengths"
            :key="l"
            class="option-btn"
            :class="{ active: postLength === l }"
            @click="postLength = l"
          >{{ l }}</button>
        </div>
      </div>
    </section>

    <!-- 프롬프트 -->
    <section>
      <div class="step-header">
        <div class="step-circle">2</div>
        <h2>스킬 생성 프롬프트 복사</h2>
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
    </section>

    <!-- 결과 확인 -->
    <section>
      <div class="step-header">
        <div class="step-circle">3</div>
        <h2>결과 확인</h2>
      </div>
      <p>스킬이 잘 만들어졌는지 확인합니다. 작업 폴더 안에 다음과 같은 구조가 생성되어야 합니다.</p>

      <div class="result-preview">
        <div class="result-header">📁 생성된 스킬 폴더 구조</div>
        <div class="result-body">
          <p class="result-line"><strong>.claude/</strong></p>
          <p class="result-line indent">skills/</p>
          <p class="result-line indent2">blog-writer/</p>
          <p class="result-line indent3 file">SKILL.md</p>
        </div>
      </div>

      <div class="tip-card">
        <span class="tip-icon">💡</span>
        <div><code>.claude/skills/blog-writer/SKILL.md</code> 파일이 존재하면 성공입니다. 이 파일 안에 글쓰기 규칙이 모두 들어있습니다.</div>
      </div>
    </section>

    <!-- 최종 체크포인트 -->
    <div class="checkpoint">
      <div class="checkpoint-icon-big">🎉</div>
      <div class="checkpoint-content">
        <strong>blog-writer 스킬 생성 완료!</strong>
        <p>이제 스킬 이름만 불러서 내 스타일의 글을 자동으로 작성할 수 있습니다. 다음 단계에서 본격적으로 글을 작성해봅니다.</p>
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

/* Step Header */
.step-header { display: flex; align-items: center; gap: 14px; margin-bottom: 12px; }
.step-circle {
  flex-shrink: 0;
  width: 40px; height: 40px;
  background: linear-gradient(135deg, #3b82f6, #2563eb);
  color: #fff; border-radius: 50%;
  display: flex; align-items: center; justify-content: center;
  font-size: 1.1rem; font-weight: 700;
}
.step-header h2 { margin: 0; font-size: 1.3rem; }

/* Option Group */
.option-group {
  background: #f8fafc;
  border: 1px solid #e2e8f0;
  border-radius: 12px;
  padding: 20px 24px;
  margin: 16px 0;
}
.option-label {
  font-weight: 700;
  color: #1e293b;
  font-size: 0.95rem;
  margin-bottom: 12px;
}
.option-buttons {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
}
.option-btn {
  padding: 8px 18px;
  border: 2px solid #e2e8f0;
  border-radius: 10px;
  background: #fff;
  color: #475569;
  font-size: 0.9rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.15s;
  font-family: inherit;
}
.option-btn:hover {
  border-color: #93c5fd;
  background: #eff6ff;
}
.option-btn.active {
  border-color: #3b82f6;
  background: #2563eb;
  color: #fff;
}
.custom-input-wrap {
  margin-top: 12px;
}
.custom-input {
  width: 100%;
  padding: 10px 16px;
  border: 2px solid #e2e8f0;
  border-radius: 10px;
  font-size: 0.9rem;
  font-family: inherit;
  color: #1e293b;
  outline: none;
  transition: border-color 0.15s;
}
.custom-input:focus {
  border-color: #3b82f6;
}
.custom-input::placeholder {
  color: #94a3b8;
}

/* Dynamic Value (in prompt) */
:deep(.dynamic-value) {
  background: #dcfce7;
  color: #166534;
  padding: 1px 6px;
  border-radius: 4px;
  font-weight: 700;
}

.dynamic-value-inline {
  background: #dcfce7;
  color: #166534;
  padding: 1px 6px;
  border-radius: 4px;
  font-weight: 600;
}

/* Manual Copy Button */
.copy-btn-manual {
  position: absolute;
  right: 12px;
  top: 12px;
  padding: 4px 12px;
  border: 1px solid #64748b;
  border-radius: 6px;
  background: #475569;
  color: #e2e8f0;
  font-size: 0.75rem;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.15s;
  line-height: 1.4;
  font-family: inherit;
}
.copy-btn-manual:hover {
  background: #64748b;
  border-color: #94a3b8;
}
.copy-btn-manual.copied {
  background: #166534;
  border-color: #22c55e;
  color: #bbf7d0;
}

/* Prompt Card */
.prompt-card {
  background: #f8fafc;
  border: 1px solid #e2e8f0;
  border-radius: 12px;
  padding: 20px 24px;
  margin: 16px 0;
}
.prompt-card.highlight {
  background: #fffbeb;
  border-color: #fcd34d;
}
.prompt-label {
  font-weight: 700;
  color: #1e293b;
  margin-bottom: 12px;
  font-size: 0.92rem;
}

/* Result Preview */
.result-preview {
  background: #f8fafc;
  border: 1px solid #e2e8f0;
  border-radius: 12px;
  overflow: hidden;
  margin: 16px 0;
}
.result-header {
  display: flex;
  align-items: center;
  gap: 10px;
  background: #f1f5f9;
  border-bottom: 1px solid #e2e8f0;
  padding: 12px 20px;
  font-weight: 700;
  color: #334155;
  font-size: 0.92rem;
}
.result-body {
  padding: 16px 20px;
}
.result-line {
  font-size: 0.9rem;
  color: #1e293b;
  margin-bottom: 4px !important;
  font-family: 'JetBrains Mono', 'Fira Code', monospace;
  line-height: 1.5;
}
.result-line.indent { padding-left: 20px; color: #475569; }
.result-line.indent2 { padding-left: 40px; color: #475569; }
.result-line.indent3 { padding-left: 60px; }
.result-line.file { color: #2563eb; font-weight: 600; }

/* Tip Card */
.tip-card {
  display: flex;
  gap: 12px;
  align-items: center;
  background: #eff6ff;
  border: 1px solid #bfdbfe;
  border-radius: 12px;
  padding: 16px 20px;
  color: #1e40af;
  font-size: 0.95rem;
  line-height: 1.6;
}
.tip-icon { font-size: 1.3rem; flex-shrink: 0; }

/* Final Checkpoint */
.checkpoint {
  display: flex;
  align-items: center;
  gap: 16px;
  background: linear-gradient(135deg, #f0fdf4 0%, #dcfce7 100%);
  border: 2px solid #86efac;
  border-radius: 12px;
  padding: 24px;
  margin-top: 32px;
}
.checkpoint-icon-big { font-size: 2.2rem; flex-shrink: 0; }
.checkpoint-content strong {
  display: block;
  color: #166534;
  font-size: 1.1rem;
  margin-bottom: 4px;
}
.checkpoint-content p {
  color: #15803d;
  font-size: 0.9rem;
  margin: 0 !important;
  line-height: 1.5;
}

@media (max-width: 768px) {
  .hero-section { padding: 32px 18px 28px; }
  .hero-section h1 { font-size: 1.4rem; }
  .step-header h2 { font-size: 1.1rem; }
  .step-circle { width: 34px; height: 34px; font-size: 0.95rem; }
  .option-buttons { flex-direction: column; }
  .option-btn { width: 100%; text-align: center; }
}
</style>
