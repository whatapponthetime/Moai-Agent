export interface Skill {
  id: string;
  name: string;
  category: 'foundation' | 'domain' | 'language' | 'workflow' | 'platform' | 'tool' | 'library' | 'framework';
  description: string;
  filePath: string;
}

export const skills: Skill[] = [
  // Foundation Skills
  { id: 'moai-foundation-claude', name: 'Claude Foundation', category: 'foundation', description: 'Core Claude Code integration and base capabilities for all agents.', filePath: '.claude/skills/moai-foundation-claude' },
  { id: 'moai-foundation-core', name: 'Core Foundation', category: 'foundation', description: 'Essential utilities and patterns used across all MoAI components.', filePath: '.claude/skills/moai-foundation-core' },
  { id: 'moai-foundation-context', name: 'Context Foundation', category: 'foundation', description: 'Context management and memory capabilities for agents.', filePath: '.claude/skills/moai-foundation-context' },
  { id: 'moai-foundation-philosopher', name: 'Philosopher Foundation', category: 'foundation', description: 'Strategic thinking and decision-making patterns.', filePath: '.claude/skills/moai-foundation-philosopher' },
  { id: 'moai-foundation-quality', name: 'Quality Foundation', category: 'foundation', description: 'TRUST 5 quality framework implementation.', filePath: '.claude/skills/moai-foundation-quality' },

  // Domain Skills
  { id: 'moai-domain-backend', name: 'Backend Domain', category: 'domain', description: 'Backend architecture patterns, API design, and server implementation.', filePath: '.claude/skills/moai-domain-backend' },
  { id: 'moai-domain-frontend', name: 'Frontend Domain', category: 'domain', description: 'Frontend development patterns, component design, and UI implementation.', filePath: '.claude/skills/moai-domain-frontend' },
  { id: 'moai-domain-database', name: 'Database Domain', category: 'domain', description: 'Database design, query optimization, and data modeling.', filePath: '.claude/skills/moai-domain-database' },
  { id: 'moai-domain-uiux', name: 'UI/UX Domain', category: 'domain', description: 'User interface and experience design patterns.', filePath: '.claude/skills/moai-domain-uiux' },

  // Language Skills
  { id: 'moai-lang-go', name: 'Go Language', category: 'language', description: 'Go programming language expertise and best practices.', filePath: '.claude/skills/moai-lang-go' },
  { id: 'moai-lang-typescript', name: 'TypeScript Language', category: 'language', description: 'TypeScript programming with type safety and modern patterns.', filePath: '.claude/skills/moai-lang-typescript' },
  { id: 'moai-lang-javascript', name: 'JavaScript Language', category: 'language', description: 'JavaScript programming with ES6+ features.', filePath: '.claude/skills/moai-lang-javascript' },
  { id: 'moai-lang-python', name: 'Python Language', category: 'language', description: 'Python programming with modern practices.', filePath: '.claude/skills/moai-lang-python' },
  { id: 'moai-lang-rust', name: 'Rust Language', category: 'language', description: 'Rust programming with memory safety and performance.', filePath: '.claude/skills/moai-lang-rust' },
  { id: 'moai-lang-java', name: 'Java Language', category: 'language', description: 'Java programming with enterprise patterns.', filePath: '.claude/skills/moai-lang-java' },
  { id: 'moai-lang-csharp', name: 'C# Language', category: 'language', description: 'C# programming with .NET framework.', filePath: '.claude/skills/moai-lang-csharp' },
  { id: 'moai-lang-php', name: 'PHP Language', category: 'language', description: 'PHP programming with modern frameworks.', filePath: '.claude/skills/moai-lang-php' },
  { id: 'moai-lang-ruby', name: 'Ruby Language', category: 'language', description: 'Ruby programming with Rails patterns.', filePath: '.claude/skills/moai-lang-ruby' },
  { id: 'moai-lang-swift', name: 'Swift Language', category: 'language', description: 'Swift programming for Apple platforms.', filePath: '.claude/skills/moai-lang-swift' },
  { id: 'moai-lang-kotlin', name: 'Kotlin Language', category: 'language', description: 'Kotlin programming for JVM and Android.', filePath: '.claude/skills/moai-lang-kotlin' },
  { id: 'moai-lang-scala', name: 'Scala Language', category: 'language', description: 'Scala programming with functional patterns.', filePath: '.claude/skills/moai-lang-scala' },
  { id: 'moai-lang-elixir', name: 'Elixir Language', category: 'language', description: 'Elixir programming with OTP patterns.', filePath: '.claude/skills/moai-lang-elixir' },
  { id: 'moai-lang-flutter', name: 'Flutter/Dart', category: 'language', description: 'Flutter and Dart for cross-platform development.', filePath: '.claude/skills/moai-lang-flutter' },
  { id: 'moai-lang-cpp', name: 'C++ Language', category: 'language', description: 'C++ programming with modern standards.', filePath: '.claude/skills/moai-lang-cpp' },
  { id: 'moai-lang-r', name: 'R Language', category: 'language', description: 'R programming for statistical computing.', filePath: '.claude/skills/moai-lang-r' },

  // Workflow Skills
  { id: 'moai-workflow-tdd', name: 'TDD Workflow', category: 'workflow', description: 'Test-Driven Development workflow (RED-GREEN-REFACTOR).', filePath: '.claude/skills/moai-workflow-tdd' },
  { id: 'moai-workflow-ddd', name: 'DDD Workflow', category: 'workflow', description: 'Domain-Driven Design workflow (ANALYZE-PRESERVE-IMPROVE).', filePath: '.claude/skills/moai-workflow-ddd' },
  { id: 'moai-workflow-testing', name: 'Testing Workflow', category: 'workflow', description: 'Comprehensive testing patterns and strategies.', filePath: '.claude/skills/moai-workflow-testing' },
  { id: 'moai-workflow-spec', name: 'Spec Workflow', category: 'workflow', description: 'Specification creation and management workflow.', filePath: '.claude/skills/moai-workflow-spec' },
  { id: 'moai-workflow-project', name: 'Project Workflow', category: 'workflow', description: 'Project management and orchestration workflow.', filePath: '.claude/skills/moai-workflow-project' },
  { id: 'moai-workflow-loop', name: 'Loop Workflow', category: 'workflow', description: 'Ralph Engine autonomous development loop.', filePath: '.claude/skills/moai-workflow-loop' },
  { id: 'moai-workflow-worktree', name: 'Worktree Workflow', category: 'workflow', description: 'Git worktree management workflow.', filePath: '.claude/skills/moai-workflow-worktree' },
  { id: 'moai-workflow-team', name: 'Team Workflow', category: 'workflow', description: 'Agent Teams workflow management. Handles team creation, task decomposition, inter-agent messaging, and parallel execution.', filePath: '.claude/skills/moai/moai-workflow-team' },
  { id: 'moai-workflow-jit-docs', name: 'JIT Docs Workflow', category: 'workflow', description: 'Just-in-time documentation generation.', filePath: '.claude/skills/moai-workflow-jit-docs' },
  { id: 'moai-workflow-templates', name: 'Templates Workflow', category: 'workflow', description: 'Template management and generation workflow.', filePath: '.claude/skills/moai-workflow-templates' },
  { id: 'moai-workflow-thinking', name: 'Thinking Workflow', category: 'workflow', description: 'Sequential thinking and analysis workflow.', filePath: '.claude/skills/moai-workflow-thinking' },

  // Platform Skills
  { id: 'moai-platform-auth', name: 'Auth Platform', category: 'platform', description: 'Authentication and authorization patterns.', filePath: '.claude/skills/moai-platform-auth' },
  { id: 'moai-platform-deployment', name: 'Deployment Platform', category: 'platform', description: 'CI/CD and deployment automation.', filePath: '.claude/skills/moai-platform-deployment' },
  { id: 'moai-platform-chrome-extension', name: 'Chrome Extension', category: 'platform', description: 'Chrome extension development with Manifest V3.', filePath: '.claude/skills/moai-platform-chrome-extension' },
  { id: 'moai-platform-database-cloud', name: 'Cloud Database', category: 'platform', description: 'Cloud database services integration.', filePath: '.claude/skills/moai-platform-database-cloud' },

  // Tool Skills
  { id: 'moai-tool-ast-grep', name: 'AST-grep Tool', category: 'tool', description: 'AST-based code analysis and transformation.', filePath: '.claude/skills/moai-tool-ast-grep' },
  { id: 'moai-tool-svg', name: 'SVG Tool', category: 'tool', description: 'SVG generation and manipulation.', filePath: '.claude/skills/moai-tool-svg' },

  // Library Skills
  { id: 'moai-library-shadcn', name: 'shadcn/ui Library', category: 'library', description: 'shadcn/ui component library integration.', filePath: '.claude/skills/moai-library-shadcn' },
  { id: 'moai-library-mermaid', name: 'Mermaid Library', category: 'library', description: 'Mermaid diagram generation.', filePath: '.claude/skills/moai-library-mermaid' },
  { id: 'moai-library-nextra', name: 'Nextra Library', category: 'library', description: 'Nextra documentation framework.', filePath: '.claude/skills/moai-library-nextra' },

  // Framework Skills
  { id: 'moai-framework-electron', name: 'Electron Framework', category: 'framework', description: 'Electron desktop application development.', filePath: '.claude/skills/moai-framework-electron' },

  // Additional Skills
  { id: 'moai-design-tools', name: 'Design Tools', category: 'tool', description: 'UI/UX design tools and patterns.', filePath: '.claude/skills/moai-design-tools' },
  { id: 'moai-docs-generation', name: 'Docs Generation', category: 'tool', description: 'Documentation generation tools.', filePath: '.claude/skills/moai-docs-generation' },
  { id: 'moai-formats-data', name: 'Data Formats', category: 'tool', description: 'Data format handling (JSON, YAML, etc.).', filePath: '.claude/skills/moai-formats-data' },
];

export const skillCategories = [
  { id: 'foundation', name: 'Foundation', count: skills.filter(s => s.category === 'foundation').length },
  { id: 'domain', name: 'Domain', count: skills.filter(s => s.category === 'domain').length },
  { id: 'language', name: 'Languages', count: skills.filter(s => s.category === 'language').length },
  { id: 'workflow', name: 'Workflows', count: skills.filter(s => s.category === 'workflow').length },
  { id: 'platform', name: 'Platforms', count: skills.filter(s => s.category === 'platform').length },
  { id: 'tool', name: 'Tools', count: skills.filter(s => s.category === 'tool').length },
  { id: 'library', name: 'Libraries', count: skills.filter(s => s.category === 'library').length },
  { id: 'framework', name: 'Frameworks', count: skills.filter(s => s.category === 'framework').length },
];
