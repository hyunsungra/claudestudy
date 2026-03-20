export default {
  title: 'Claude 코워크 사용하기',
  description: 'Claude Desktop에서 복잡한 업무를 자율적으로 처리하는 코워크 기능 알아보기',
  icon: '🤝',
  basePath: '/claude-cowork',
  sections: [
    {
      title: '코워크 시작하기',
      items: [
        { path: '00-what-is-cowork', title: '코워크란?' },
        { path: '01-setup', title: '설치와 시작 방법' },
        { path: '02-how-it-works', title: '코워크 동작 방식' },
      ]
    },
    {
      title: '실무 활용',
      items: [
        { path: '03-research', title: '자료 조사와 정리' },
        { path: '04-documents', title: '문서 작성과 파일 관리' },
        { path: '05-data-analysis', title: '데이터 분석과 엑셀 작업' },
        { path: '06-connectors', title: '커넥터 (외부 서비스 연동)' },
      ]
    }
  ]
}
