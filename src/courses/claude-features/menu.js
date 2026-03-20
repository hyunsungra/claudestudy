export default {
  title: 'Claude의 기능들',
  description: 'Claude Code의 프로젝트 구조와 핵심 기능들을 체계적으로 알아보는 과정',
  icon: '⚙️',
  basePath: '/claude-features',
  sections: [
    {
      title: '프로젝트 구조',
      items: [
        { path: '01-project-structure', title: '프로젝트 폴더 구조' },
        { path: '02-claude-md', title: 'CLAUDE.md 파일' },
      ]
    },
    {
      title: '핵심 기능',
      items: [
        { path: '06-skills', title: 'Skill (커스텀 스킬)' },
        { path: '08-agents', title: 'Agents (서브에이전트)' },
        { path: '07-hooks', title: 'Hooks (자동화)' },
        { path: '05-mcp', title: 'MCP (외부 서비스 연결)' },
        { path: '14-plugins', title: 'Plugins (플러그인)' },
        { path: '04-memory', title: '메모리 시스템' },
        { path: '15-slash-commands', title: '슬래시 명령어' },
      ]
    }
  ]
}
