export interface Agent {
  id: string;
  name: string;
  category: 'manager' | 'expert' | 'builder' | 'team';
  description: string;
  skills: string[];
  tools: string[];
  filePath: string;
}

export const agents: Agent[] = [
  // Managers (8)
  {
    id: 'manager-spec',
    name: 'Spec Manager',
    category: 'manager',
    description: 'Specification and requirements management. Creates detailed technical specifications from user requirements.',
    skills: ['moai-workflow-spec', 'moai-foundation-core'],
    tools: ['Read', 'Write', 'Edit', 'Grep', 'Glob', 'TodoWrite'],
    filePath: '.claude/agents/moai/manager-spec.md'
  },
  {
    id: 'manager-ddd',
    name: 'DDD Manager',
    category: 'manager',
    description: 'Domain-Driven Design expert. Analyzes existing code and improves architecture using DDD patterns.',
    skills: ['moai-workflow-ddd', 'moai-foundation-core'],
    tools: ['Read', 'Write', 'Edit', 'Grep', 'Glob', 'TodoWrite'],
    filePath: '.claude/agents/moai/manager-ddd.md'
  },
  {
    id: 'manager-tdd',
    name: 'TDD Manager',
    category: 'manager',
    description: 'Test-Driven Development expert. Implements RED-GREEN-REFACTOR methodology for new code.',
    skills: ['moai-workflow-tdd', 'moai-workflow-testing'],
    tools: ['Read', 'Write', 'Edit', 'Bash', 'TodoWrite'],
    filePath: '.claude/agents/moai/manager-tdd.md'
  },
  {
    id: 'manager-docs',
    name: 'Docs Manager',
    category: 'manager',
    description: 'Documentation specialist. Creates and maintains comprehensive project documentation.',
    skills: ['moai-docs-generation', 'moai-workflow-jit-docs'],
    tools: ['Read', 'Write', 'Edit', 'Grep', 'Glob'],
    filePath: '.claude/agents/moai/manager-docs.md'
  },
  {
    id: 'manager-quality',
    name: 'Quality Manager',
    category: 'manager',
    description: 'Code quality enforcer. Ensures TRUST 5 framework compliance (Tested, Readable, Unified, Secured, Trackable).',
    skills: ['moai-foundation-quality', 'moai-workflow-testing'],
    tools: ['Read', 'Grep', 'Glob', 'Bash', 'TodoWrite'],
    filePath: '.claude/agents/moai/manager-quality.md'
  },
  {
    id: 'manager-project',
    name: 'Project Manager',
    category: 'manager',
    description: 'Project orchestration expert. Manages project lifecycle, dependencies, and team coordination.',
    skills: ['moai-workflow-project', 'moai-foundation-core'],
    tools: ['Read', 'Write', 'Edit', 'Bash', 'TodoWrite', 'Task'],
    filePath: '.claude/agents/moai/manager-project.md'
  },
  {
    id: 'manager-strategy',
    name: 'Strategy Manager',
    category: 'manager',
    description: 'Strategic planning expert. Defines development strategies and architectural decisions.',
    skills: ['moai-foundation-philosopher', 'moai-foundation-core'],
    tools: ['Read', 'Write', 'TodoWrite', 'Task'],
    filePath: '.claude/agents/moai/manager-strategy.md'
  },
  {
    id: 'manager-git',
    name: 'Git Manager',
    category: 'manager',
    description: 'Git operations specialist. Manages branches, commits, merges, and git workflows.',
    skills: ['moai-workflow-worktree', 'moai-foundation-core'],
    tools: ['Read', 'Write', 'Bash', 'Grep'],
    filePath: '.claude/agents/moai/manager-git.md'
  },

  // Experts (9)
  {
    id: 'expert-backend',
    name: 'Backend Expert',
    category: 'expert',
    description: 'Backend architecture and database specialist. Designs APIs, authentication, database modeling, and server implementation.',
    skills: ['moai-domain-backend', 'moai-domain-database', 'moai-lang-go', 'moai-lang-python'],
    tools: ['Read', 'Write', 'Edit', 'Grep', 'Glob', 'Bash', 'WebFetch'],
    filePath: '.claude/agents/moai/expert-backend.md'
  },
  {
    id: 'expert-frontend',
    name: 'Frontend Expert',
    category: 'expert',
    description: 'Frontend development specialist. Builds responsive UIs with React, Vue, and modern frameworks.',
    skills: ['moai-domain-frontend', 'moai-domain-uiux', 'moai-lang-typescript', 'moai-library-shadcn'],
    tools: ['Read', 'Write', 'Edit', 'Grep', 'Glob', 'Bash'],
    filePath: '.claude/agents/moai/expert-frontend.md'
  },
  {
    id: 'expert-security',
    name: 'Security Expert',
    category: 'expert',
    description: 'Security specialist. Implements authentication, authorization, and security best practices.',
    skills: ['moai-platform-auth', 'moai-foundation-quality'],
    tools: ['Read', 'Write', 'Edit', 'Grep', 'Glob', 'Bash'],
    filePath: '.claude/agents/moai/expert-security.md'
  },
  {
    id: 'expert-devops',
    name: 'DevOps Expert',
    category: 'expert',
    description: 'DevOps and infrastructure specialist. Manages CI/CD, containers, and deployment pipelines.',
    skills: ['moai-platform-deployment', 'moai-workflow-project'],
    tools: ['Read', 'Write', 'Edit', 'Bash', 'Grep'],
    filePath: '.claude/agents/moai/expert-devops.md'
  },
  {
    id: 'expert-performance',
    name: 'Performance Expert',
    category: 'expert',
    description: 'Performance optimization specialist. Analyzes and improves application performance.',
    skills: ['moai-foundation-quality', 'moai-tool-ast-grep'],
    tools: ['Read', 'Grep', 'Glob', 'Bash'],
    filePath: '.claude/agents/moai/expert-performance.md'
  },
  {
    id: 'expert-debug',
    name: 'Debug Expert',
    category: 'expert',
    description: 'Debugging specialist. Diagnoses and fixes complex bugs and issues.',
    skills: ['moai-tool-ast-grep', 'moai-foundation-core'],
    tools: ['Read', 'Grep', 'Glob', 'Bash', 'Edit'],
    filePath: '.claude/agents/moai/expert-debug.md'
  },
  {
    id: 'expert-testing',
    name: 'Testing Expert',
    category: 'expert',
    description: 'Testing specialist. Creates comprehensive test suites and ensures code coverage.',
    skills: ['moai-workflow-testing', 'moai-workflow-tdd'],
    tools: ['Read', 'Write', 'Edit', 'Bash', 'Grep'],
    filePath: '.claude/agents/moai/expert-testing.md'
  },
  {
    id: 'expert-refactoring',
    name: 'Refactoring Expert',
    category: 'expert',
    description: 'Code refactoring specialist. Improves code structure without changing behavior.',
    skills: ['moai-tool-ast-grep', 'moai-foundation-quality'],
    tools: ['Read', 'Write', 'Edit', 'Grep', 'Glob'],
    filePath: '.claude/agents/moai/expert-refactoring.md'
  },
  {
    id: 'expert-chrome-extension',
    name: 'Chrome Extension Expert',
    category: 'expert',
    description: 'Chrome extension development specialist. Builds browser extensions with Manifest V3.',
    skills: ['moai-platform-chrome-extension', 'moai-lang-typescript'],
    tools: ['Read', 'Write', 'Edit', 'Bash', 'Grep'],
    filePath: '.claude/agents/moai/expert-chrome-extension.md'
  },

  // Builders (3)
  {
    id: 'builder-agent',
    name: 'Agent Builder',
    category: 'builder',
    description: 'Creates new AI agents for the MoAI ecosystem with proper configuration and skills.',
    skills: ['moai-foundation-claude', 'moai-foundation-core'],
    tools: ['Read', 'Write', 'Edit', 'Grep', 'Glob'],
    filePath: '.claude/agents/moai/builder-agent.md'
  },
  {
    id: 'builder-skill',
    name: 'Skill Builder',
    category: 'builder',
    description: 'Creates new skills that can be attached to agents for specialized capabilities.',
    skills: ['moai-foundation-claude', 'moai-foundation-core'],
    tools: ['Read', 'Write', 'Edit', 'Grep'],
    filePath: '.claude/agents/moai/builder-skill.md'
  },
  {
    id: 'builder-plugin',
    name: 'Plugin Builder',
    category: 'builder',
    description: 'Creates MCP plugins and integrations for extending MoAI functionality.',
    skills: ['moai-foundation-claude', 'moai-lang-typescript'],
    tools: ['Read', 'Write', 'Edit', 'Bash', 'Grep'],
    filePath: '.claude/agents/moai/builder-plugin.md'
  },

  // Teams (8)
  {
    id: 'team-researcher',
    name: 'Researcher',
    category: 'team',
    description: 'Research specialist. Gathers information and analyzes requirements.',
    skills: ['moai-foundation-core'],
    tools: ['Read', 'WebFetch', 'WebSearch', 'Grep'],
    filePath: '.claude/agents/moai/team-researcher.md'
  },
  {
    id: 'team-analyst',
    name: 'Analyst',
    category: 'team',
    description: 'Analysis specialist. Analyzes codebases and provides insights.',
    skills: ['moai-foundation-core', 'moai-tool-ast-grep'],
    tools: ['Read', 'Grep', 'Glob'],
    filePath: '.claude/agents/moai/team-analyst.md'
  },
  {
    id: 'team-architect',
    name: 'Architect',
    category: 'team',
    description: 'Architecture specialist. Designs system architecture and patterns.',
    skills: ['moai-foundation-core', 'moai-workflow-ddd'],
    tools: ['Read', 'Write', 'Grep', 'Glob'],
    filePath: '.claude/agents/moai/team-architect.md'
  },
  {
    id: 'team-designer',
    name: 'Designer',
    category: 'team',
    description: 'UI/UX design specialist. Creates user interfaces and experiences.',
    skills: ['moai-domain-uiux', 'moai-design-tools'],
    tools: ['Read', 'Write', 'Edit'],
    filePath: '.claude/agents/moai/team-designer.md'
  },
  {
    id: 'team-backend-dev',
    name: 'Backend Developer',
    category: 'team',
    description: 'Backend development team member. Implements server-side logic.',
    skills: ['moai-domain-backend', 'moai-lang-go'],
    tools: ['Read', 'Write', 'Edit', 'Bash'],
    filePath: '.claude/agents/moai/team-backend-dev.md'
  },
  {
    id: 'team-frontend-dev',
    name: 'Frontend Developer',
    category: 'team',
    description: 'Frontend development team member. Implements client-side interfaces.',
    skills: ['moai-domain-frontend', 'moai-lang-typescript'],
    tools: ['Read', 'Write', 'Edit', 'Bash'],
    filePath: '.claude/agents/moai/team-frontend-dev.md'
  },
  {
    id: 'team-tester',
    name: 'Tester',
    category: 'team',
    description: 'Testing team member. Writes and executes tests.',
    skills: ['moai-workflow-testing'],
    tools: ['Read', 'Write', 'Edit', 'Bash'],
    filePath: '.claude/agents/moai/team-tester.md'
  },
  {
    id: 'team-quality',
    name: 'Quality Assurance',
    category: 'team',
    description: 'QA team member. Ensures code quality and standards compliance.',
    skills: ['moai-foundation-quality'],
    tools: ['Read', 'Grep', 'Glob', 'Bash'],
    filePath: '.claude/agents/moai/team-quality.md'
  }
];

export const agentCategories = [
  { id: 'manager', name: 'Managers', count: agents.filter(a => a.category === 'manager').length },
  { id: 'expert', name: 'Experts', count: agents.filter(a => a.category === 'expert').length },
  { id: 'builder', name: 'Builders', count: agents.filter(a => a.category === 'builder').length },
  { id: 'team', name: 'Teams', count: agents.filter(a => a.category === 'team').length },
];
