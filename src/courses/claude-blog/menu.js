export default {
  title: 'Claude로 블로그 글 작성하기',
  description: 'Claude를 활용해서 블로그 글을 작성하는 실전 활용법',
  icon: '✍️',
  basePath: '/claude-blog',
  tags: ['코워크'],
  sections: [
    {
      title: '따라하기',
      items: [
        { path: '01-concept', title: 'Step 1. 자동화 컨셉 이해하기' },
        { path: '02-cowork-setup', title: 'Step 2. 페르소나 생성하기' },
        { path: '03-create-skill', title: 'Step 3. 글쓰기 스킬 만들기' },
        { path: '04-write-post', title: 'Step 4. 실제 사용하기' },
      ]
    },
    {
      title: '더 활용하기',
      items: [
        { path: '06-topic-management', title: '주제 관리와 진행 추적' },
        { path: '09-auto-review', title: '작성한 내용 자동 검증하기' },
        { path: '08-image-generation', title: '첨부 이미지 만들기' },
        { path: '07-parallel-writing', title: '서브에이전트로 병렬 작성' },
      ]
    }
  ]
}
