export default {
  title: 'Claude Code 사용하기',
  description: '터미널에서 AI와 함께 코딩하는 Claude Code의 설치부터 실전 활용까지',
  icon: '💻',
  basePath: '/claude-code',
  sections: [
    {
      title: 'Claude Code 시작하기',
      items: [
        { path: '01-what-is-code', title: 'Claude Code란?' },
        { path: '02-install', title: '설치와 첫 실행' },
        { path: '03-how-it-works', title: '동작 방식과 차별점' },
      ]
    },
    {
      title: '활용 환경',
      items: [
        { path: '10-cli-commands', title: 'CLI 명령어와 단축키' },
        { path: '11-ide-integration', title: 'IDE 연동' },
        { path: '12-git-integration', title: 'Git 연동' },
        { path: '13-context-window', title: '컨텍스트 윈도우 관리' },
      ]
    },
    {
      title: '실전 활용',
      items: [
        { path: '04-new-project', title: '새 프로젝트 만들기' },
        { path: '05-fix-bugs', title: '버그 찾기와 수정' },
        { path: '06-refactor', title: '코드 개선과 리팩토링' },
        { path: '07-automation', title: '반복 작업 자동화' },
      ]
    }
  ]
}
