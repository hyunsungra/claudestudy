import claudeBasics from './claude-basics/menu.js'
import claudeFeatures from './claude-features/menu.js'
import claudeCowork from './claude-cowork/menu.js'
import claudeCode from './claude-code/menu.js'
import claudeBlog from './claude-blog/menu.js'

export const categories = [
  {
    id: 'basics',
    title: '기본 개념',
    description: 'Claude를 처음 시작하는 분을 위한 핵심 개념과 기능 소개',
    courses: [claudeBasics, claudeFeatures, claudeCowork, claudeCode],
  },
  {
    id: 'tutorial',
    title: '따라하기 튜토리얼',
    description: '프롬프트를 복사해서 바로 따라할 수 있는 실전 가이드',
    courses: [claudeBlog],
  },
]

export default [
  claudeBasics,
  claudeFeatures,
  claudeCowork,
  claudeCode,
  claudeBlog,
]
