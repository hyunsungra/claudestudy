export default {
  title: 'Claude로 블로그 글 작성하기',
  description: 'Claude를 활용해서 블로그 글을 작성하는 실전 활용법',
  icon: '✍️',
  basePath: '/claude-blog',
  sections: [
    {
      title: '준비',
      items: [
        { path: '01-concept', title: '자동화 컨셉 이해하기' },
      ]
    },
    {
      title: '코워크로 만들기',
      items: [
        { path: '02-cowork-setup', title: '참고 문서 추가와 스킬 생성' },
        { path: '03-cowork-write', title: '주제를 던져서 글 작성하기' },
      ]
    },
    {
      title: '코드로 만들기',
      items: [
        { path: '04-code-setup', title: '글쓰기 스킬과 참고 자료 세팅' },
        { path: '05-code-write', title: '블로그 글을 파일로 만들기' },
      ]
    },
    {
      title: '기능 고도화',
      items: [
        { path: '06-topic-management', title: '주제 관리와 진행 추적' },
        { path: '07-parallel-writing', title: '서브에이전트로 대량 작성' },
        { path: '08-image-generation', title: 'API로 첨부 이미지 생성' },
      ]
    }
  ]
}
