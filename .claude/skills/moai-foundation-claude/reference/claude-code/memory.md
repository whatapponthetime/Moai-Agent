[Skip to Content](https://adk.mo.ai.kr/en/claude-code/memory#nextra-skip-nav)

[Claude Code](https://adk.mo.ai.kr/en/claude-code "Claude Code") Memory Management

Copy page

# Memory Management

Claude Code can remember things across sessions, such as coding style guidelines, common commands for workflows, and project-specific settings.

## Determine Memory Type [Permalink for this section](https://adk.mo.ai.kr/en/claude-code/memory\#determine-memory-type)

Claude Code provides 4 memory locations in a hierarchy, each serving different purposes:

| Memory Type | Location | Purpose | Usage Example | Shared With |
| --- | --- | --- | --- | --- |
| **Managed Policy** | • macOS: `/Library/Application Support/ClaudeCode/CLAUDE.md`<br>• Linux: `/etc/claude-code/CLAUDE.md`<br>• Windows: `C:\Program Files\ClaudeCode\CLAUDE.md` | Organization-wide guidelines managed by IT/DevOps | Company coding standards, security policies, compliance requirements | All users in organization |
| **Project Memory** | `./CLAUDE.md` or `./.claude/CLAUDE.md` | Team-shared guidelines for project | Project architecture, coding standards, common workflows | Team members via source control |
| **Project Rules** | `./.claude/rules/*.md` | Modular topical project guidelines | Language-specific guidelines, testing rules, API standards | Team members via source control |
| **User Memory** | `~/.claude/CLAUDE.md` | Personal preferences for all projects | Personal code styling preferences, tool shortcuts | User only (all projects) |
| **Project Memory (Local)** | `./CLAUDE.local.md` | Personal project-specific preferences | Sandbox URLs, preferred test data | User only (current project) |

All memory files are automatically loaded into Claude Code’s context when Claude Code starts. Higher-level memory in the hierarchy loads first, providing a foundation for more specific memory to build upon.

## CLAUDE.md Imports [Permalink for this section](https://adk.mo.ai.kr/en/claude-code/memory\#claudemd-imports)

CLAUDE.md files can import additional files using the `@path/to/import` syntax. The following example imports 3 files:

```

Reference project overview from @README and available npm commands from @package.json.

# Additional instructions
- git workflow @docs/git-instructions.md
```

Both relative and absolute paths are allowed. Importing files in your home directory is particularly convenient for providing individual instructions to teammates that aren’t committed to the repository. It serves as an alternative to CLAUDE.local.md and works better across multiple git worktrees.

```

# Individual preferences
- @~/.claude/my-project-instructions.md
```

To prevent conflicts, imports are not evaluated inside markdown code fences and code blocks:

```

This code span is not processed as an import: `@anthropic-ai/claude-code`
```

Imported files can recursively import up to 5 hops deep. Run `/memory` to see which memory files were loaded.

## How Claude Looks Up Memory [Permalink for this section](https://adk.mo.ai.kr/en/claude-code/memory\#how-claude-looks-up-memory)

Claude Code reads memory recursively. Starting from cwd, it recurses up to the root directory `/` (not included) and reads all CLAUDE.md or CLAUDE.local.md files it finds. This is particularly useful when working in large repositories where both `foo/CLAUDE.md` and `foo/bar/CLAUDE.md` have memory while running Claude Code in `foo/bar/`.

Claude also discovers CLAUDE.md nested in sub-trees below the current working directory. These are only included when reading files in that sub-tree, not loaded at startup.

## Edit Memory Directly with `/memory` [Permalink for this section](https://adk.mo.ai.kr/en/claude-code/memory\#edit-memory-directly-with-memory)

During a session, use the `/memory` command to open all memory files in your system editor for broader additions or configuration.

## Set Up Project Memory [Permalink for this section](https://adk.mo.ai.kr/en/claude-code/memory\#set-up-project-memory)

To set up a CLAUDE.md file that stores important information, rules, and frequently used commands for your project:

Project memory can be stored in `./CLAUDE.md` or `./.claude/CLAUDE.md`.

Bootstrap a CLAUDE.md for your codebase with:

```

/init
```

## Modular Rules with `.claude/rules/` [Permalink for this section](https://adk.mo.ai.kr/en/claude-code/memory\#modular-rules-with-clauderules)

For larger projects, use the `.claude/rules/` directory to organize instructions into multiple files. This allows teams to maintain focused, well-organized rule files instead of one large CLAUDE.md.

### Basic Structure [Permalink for this section](https://adk.mo.ai.kr/en/claude-code/memory\#basic-structure)

Place markdown files in your project’s `.claude/rules/` directory:

```

your-project/
├── .claude/
│   ├── CLAUDE.md           # Main project guidelines
│   └── rules/
│       ├── code-style.md   # Code style guidelines
│       ├── testing.md      # Testing rules
│       └── security.md     # Security requirements
```

All `.md` files in `.claude/rules/` are automatically loaded as project memory with the same priority as `.claude/CLAUDE.md`.

### Path-Specific Rules [Permalink for this section](https://adk.mo.ai.kr/en/claude-code/memory\#path-specific-rules)

Rules can be scoped to specific files using the `paths` field in YAML frontmatter. These conditional rules only apply when Claude works with files matching those patterns.

```

---
paths:
  - "src/api/**/*.ts"
---

# API development rules

- All API endpoints must include input validation
- Use standard error response format
- Include OpenAPI documentation comments
```

Rules without a `paths` field are loaded unconditionally and apply to all files.

### Glob Patterns [Permalink for this section](https://adk.mo.ai.kr/en/claude-code/memory\#glob-patterns)

The `paths` field supports standard glob patterns:

| Pattern | Matches |
| --- | --- |
| `**/*.ts` | TypeScript files in all directories |
| `src/**/*` | All files under `src/` directory |
| `*.md` | Markdown files in project root |
| `src/components/*.tsx` | React components in specific directory |

Multiple patterns can be specified:

```

---
paths:
  - "src/**/*.ts"
  - "lib/**/*.ts"
  - "tests/**/*.test.ts"
---

# TypeScript/React rules
```

Brace expansion is supported for matching multiple extensions or directories:

```

---
paths:
  - "src/**/*.{ts,tsx}"
  - "{src,lib}/**/*.ts"
---

# TypeScript/React rules
```

This expands `src/**/*.{ts,tsx}` to match both `.ts` and `.tsx` files.

### Subdirectories [Permalink for this section](https://adk.mo.ai.kr/en/claude-code/memory\#subdirectories)

Rules can be organized into subdirectories for better structure:

```

.claude/rules/
├── frontend/
│   ├── react.md
│   └── styles.md
├── backend/
│   ├── api.md
│   └── database.md
└── general.md
```

All `.md` files are discovered recursively.

### Symbolic Links [Permalink for this section](https://adk.mo.ai.kr/en/claude-code/memory\#symbolic-links)

The `.claude/rules/` directory supports symbolic links, allowing multiple projects to share common rules:

```

# Symbolic link to shared rules directory
ln -s ~/shared-claude-rules .claude/rules/shared

# Symbolic link to individual rule file
ln -s ~/company-standards/security.md .claude/rules/security.md
```

Symbolic links are resolved and content loaded normally. Circular symbolic links are handled gracefully.

### User-Level Rules [Permalink for this section](https://adk.mo.ai.kr/en/claude-code/memory\#user-level-rules)

Create personal rules in `~/.claude/rules/` that apply to all your projects:

```

~/.claude/rules/
├── preferences.md    # Personal coding preferences
└── workflows.md      # Preferred workflows
```

User-level rules load before project rules, giving project rules higher priority.

## Organization-Level Memory Management [Permalink for this section](https://adk.mo.ai.kr/en/claude-code/memory\#organization-level-memory-management)

Organizations can deploy centralized CLAUDE.md files that apply to all users.

To set up organization-level memory management:

1. Create managed memory files in the **Managed Policy** locations shown in the memory type table above
2. Deploy via configuration management systems (MDM, Group Policy, Ansible, etc.) for consistent deployment across all developer machines

## Memory Best Practices [Permalink for this section](https://adk.mo.ai.kr/en/claude-code/memory\#memory-best-practices)

- **Be specific**: “Use 2-space indentation” is better than “format code properly”
- **Organize by structure**: Format each individual memory item as a bullet and group related items under descriptive markdown headings
- **Review regularly**: Update memory as your project progresses so Claude always has current information and context

* * *

**Sources:**

- [Memory management](https://adk.mo.ai.kr/claude-code/memory)

Last updated onFebruary 12, 2026

[Extensions](https://adk.mo.ai.kr/en/claude-code/extensions "Extensions") [Settings](https://adk.mo.ai.kr/en/claude-code/settings "Settings")

* * *

* * *

# Extended Technical Reference

# Claude Code Memory System - Official Documentation Reference

Source: https://code.claude.com/docs/en/memory

## Key Concepts

### What is Claude Code Memory?

Claude Code Memory provides a hierarchical context management system that allows agents to maintain persistent information across sessions, projects, and organizations. It enables consistent behavior, knowledge retention, and context-aware interactions.

### Memory Architecture

Three-Tier Hierarchy:

1. Enterprise Policy: Organization-wide policies and standards
2. Project Memory: Project-specific knowledge and context
3. User Memory: Personal preferences and individual knowledge

Memory Flow:

```
Enterprise Policy → Project Memory → User Memory
 (Highest) (Project) (Personal)
 ↓ ↓ ↓
 Overrides Overrides Overrides
```

## Memory Storage and Access

### File-Based Memory System

Memory File Locations:

- Enterprise: `/etc/claude/policies/` (system-wide)
- Project: `./CLAUDE.md` (project-specific)
- User: `~/.claude/CLAUDE.md` (personal preferences)
- Local: `.claude/memory/` (project metadata)

File Types and Purpose:

```
Project Root/
 CLAUDE.md # Main project memory (highest priority in project)
 .claude/memory/ # Structured project metadata
 execution-rules.md # Execution constraints and rules
 agents.md # Agent catalog and capabilities
 commands.md # Command references and patterns
 delegation-patterns.md # Agent delegation strategies
 token-optimization.md # Token budget management
 .moai/
 config/ # Configuration management
 config.json # Project settings
 cache/ # Memory cache and optimization
```

### Memory Import Syntax

Direct Import Pattern:

```markdown
# In CLAUDE.md files

@path/to/import.md # Import external memory file
@.claude/memory/agents.md # Import agent reference
@.claude/memory/commands.md # Import command reference
@memory/delegation-patterns.md # Relative import from memory directory
```

Conditional Import:

```markdown
# Import based on environment or configuration

<!-- @if environment == "production" -->

@memory/production-rules.md

<!-- @endif -->

<!-- @if features.security == "enabled" -->

@memory/security-policies.md

<!-- @endif -->
```

## Memory Content Types

### Policy and Rules Memory

Execution Rules (`memory/execution-rules.md`):

```markdown
# Execution Rules and Constraints

## Core Principles

- Agent-first mandate: Always delegate to specialized agents
- Security sandbox: All operations in controlled environment
- Token budget management: Phase-based allocation strategy

## Agent Delegation Rules

- Required tools: Task(), AskUserQuestion(), Skill()
- Forbidden tools: Read(), Write(), Edit(), Bash(), Grep(), Glob()
- Delegation pattern: Sequential → Parallel → Conditional

## Security Constraints

- Forbidden paths: .env\*, .vercel/, .github/workflows/secrets
- Forbidden commands: rm -rf, sudo, chmod 777, dd, mkfs
- Input validation: Required before all processing
```

Agent Catalog (`memory/agents.md`):

```markdown
# Agent Reference Catalog

## Planning & Specification

- spec-builder: SPEC generation in EARS format
- plan: Decompose complex tasks step-by-step

## Implementation

- ddd-implementer: Execute DDD cycle (ANALYZE-PRESERVE-IMPROVE)
- backend-expert: Backend architecture and API development
- frontend-expert: Frontend UI component development

## Usage Patterns

- Simple tasks (1-2 files): Sequential execution
- Medium tasks (3-5 files): Mixed sequential/parallel
- Complex tasks (10+ files): Parallel with integration phase
```

### Configuration Memory

Settings Management (`config/config.json`):

```json
{
  "user": {
    "name": "Developer Name",
    "preferences": {
      "language": "en",
      "timezone": "UTC"
    }
  },
  "project": {
    "name": "Project Name",
    "type": "web-application",
    "documentation_mode": "comprehensive"
  },
  "constitution": {
    "test_coverage_target": 90,
    "enforce_tdd": true,
    "quality_gates": [
      "test-first",
      "readable",
      "unified",
      "secured",
      "trackable"
    ]
  },
  "git_strategy": {
    "mode": "team",
    "workflow": "github-flow",
    "auto_pr": true
  }
}
```

### Process Memory

Command References (`memory/commands.md`):

```markdown
# Command Reference Guide

## Core MoAI Commands

- /moai:0-project: Initialize project structure
- /moai:1-plan: Generate SPEC document
- /moai:2-run: Execute DDD implementation
- /moai:3-sync: Generate documentation
- /moai:9-feedback: Collect improvement feedback

## Command Execution Rules

- After /moai:1-plan: Execute /clear (mandatory)
- Token threshold: Execute /clear at >150K tokens
- Error handling: Use /moai:9-feedback for all issues
```

## Memory Management Strategies

### Memory Initialization

Project Bootstrap:

```bash
# Initialize project memory structure
/moai:0-project

# Creates:
# - .moai/config/config.yaml
# - .moai/memory/ directory
# - CLAUDE.md template
# - Memory structure files
```

Manual Memory Setup:

```bash
# Create memory directory structure
mkdir -p .claude/memory
mkdir -p .moai/config
mkdir -p .moai/cache

# Create initial memory files
touch .claude/memory/agents.md
touch .claude/memory/commands.md
touch .claude/memory/execution-rules.md
touch CLAUDE.md
```

### Memory Synchronization

Import Resolution:

```python
# Memory import resolution order
def resolve_memory_import(import_path, base_path):
 """
 Resolve @import paths in memory files
 1. Check relative to current file
 2. Check in .claude/memory/ directory
 3. Check in project root
 4. Check in user memory directory
 """
 candidates = [
 os.path.join(base_path, import_path),
 os.path.join(".claude/memory", import_path),
 os.path.join(".", import_path),
 os.path.expanduser(os.path.join("~/.claude", import_path))
 ]

 for candidate in candidates:
 if os.path.exists(candidate):
 return candidate
 return None
```

Memory Cache Management:

```bash
# Memory cache operations
claude memory cache clear # Clear all memory cache
claude memory cache list # List cached memory files
claude memory cache refresh # Refresh memory from files
claude memory cache status # Show cache statistics
```

### Memory Optimization

Token Efficiency Strategies:

```markdown
# Memory optimization techniques

## Progressive Loading

- Load core memory first (2000 tokens)
- Load detailed memory on-demand (5000 tokens each)
- Cache frequently accessed memory files

## Content Prioritization

- Priority 1: Execution rules and agent catalog (must load)
- Priority 2: Project-specific configurations (conditional)
- Priority 3: Historical data and examples (on-demand)

## Memory Compression

- Use concise bullet points over paragraphs
- Implement cross-references instead of duplication
- Group related information in structured sections
```

## Memory Access Patterns

### Agent Memory Access

Agent Memory Loading:

```python
# Agent memory access pattern
class AgentMemory:
 def __init__(self, session_id):
 self.session_id = session_id
 self.memory_cache = {}
 self.load_base_memory()

 def load_base_memory(self):
 """Load essential memory for agent operation"""
 essential_files = [
 ".claude/memory/execution-rules.md",
 ".claude/memory/agents.md",
 ".moai/config/config.yaml"
 ]

 for file_path in essential_files:
 self.memory_cache[file_path] = self.load_memory_file(file_path)

 def get_memory(self, key):
 """Get memory value with fallback hierarchy"""
 # 1. Check session cache
 if key in self.memory_cache:
 return self.memory_cache[key]

 # 2. Load from file system
 memory_value = self.load_memory_file(key)
 if memory_value:
 self.memory_cache[key] = memory_value
 return memory_value

 # 3. Return default or None
 return None
```

Context-Aware Memory:

```python
# Context-aware memory selection
def select_relevant_memory(context, available_memory):
 """
 Select memory files relevant to current context
 """
 relevant_memory = []

 # Analyze context keywords
 context_keywords = extract_keywords(context)

 # Match memory files by content relevance
 for memory_file in available_memory:
 relevance_score = calculate_relevance(memory_file, context_keywords)
 if relevance_score > 0.7: # Threshold
 relevant_memory.append((memory_file, relevance_score))

 # Sort by relevance and return top N
 relevant_memory.sort(key=lambda x: x[1], reverse=True)
 return [memory[0] for memory in relevant_memory[:5]]
```

## Memory Configuration

### Environment-Specific Memory

Development Environment:

```json
{
  "memory": {
    "mode": "development",
    "cache_size": "100MB",
    "auto_refresh": true,
    "debug_memory": true,
    "memory_files": [
      ".claude/memory/execution-rules.md",
      ".claude/memory/agents.md",
      ".claude/memory/commands.md"
    ]
  }
}
```

Production Environment:

```json
{
  "memory": {
    "mode": "production",
    "cache_size": "50MB",
    "auto_refresh": false,
    "debug_memory": false,
    "memory_files": [
      ".claude/memory/execution-rules.md",
      ".claude/memory/production-policies.md"
    ],
    "memory_restrictions": {
      "max_file_size": "1MB",
      "allowed_extensions": [".md", ".json"],
      "forbidden_patterns": ["password", "secret", "key"]
    }
  }
}
```

### User Preference Memory

Personal Memory Structure (`~/.claude/CLAUDE.md`):

```markdown
# Personal Claude Code Preferences

## User Information

- Name: John Developer
- Role: Senior Software Engineer
- Expertise: Backend Development, DevOps

## Development Preferences

- Language: Python, TypeScript
- Frameworks: FastAPI, React
- Testing: pytest, Jest
- Documentation: Markdown, OpenAPI

## Workflow Preferences

- Git strategy: feature branches
- Code review: required for PRs
- Testing coverage: >90%
- Documentation: comprehensive

## Tool Preferences

- Editor: VS Code
- Shell: bash
- Package manager: npm, pip
- Container: Docker
```

## Memory Maintenance

### Memory Updates and Synchronization

Automatic Memory Updates:

```bash
# Update memory from templates
claude memory update --from-templates

# Synchronize memory across team
claude memory sync --team

# Validate memory structure
claude memory validate --strict
```

Memory Version Control:

```bash
# Track memory changes in Git
git add .claude/memory/ CLAUDE.md
git commit -m "docs: Update project memory and agent catalog"

# Tag memory versions
git tag -a "memory-v1.2.0" -m "Memory version 1.2.0"
```

### Memory Cleanup

Cache Cleanup:

```bash
# Clear expired cache entries
claude memory cache cleanup --older-than 7d

# Remove unused memory files
claude memory cleanup --unused

# Optimize memory file size
claude memory optimize --compress
```

Memory Audit:

```bash
# Audit memory usage
claude memory audit --detailed

# Check for duplicate memory
claude memory audit --duplicates

# Validate memory references
claude memory audit --references
```

## Advanced Memory Features

### Memory Templates

Template-Based Memory Initialization:

```markdown
<!-- memory/project-template.md -->

# Project Memory Template

## Project Structure

- Name: {{project.name}}
- Type: {{project.type}}
- Language: {{project.language}}

## Team Configuration

- Team size: {{team.size}}
- Workflow: {{team.workflow}}
- Review policy: {{team.review_policy}}

## Quality Standards

- Test coverage: {{quality.test_coverage}}%
- Documentation: {{quality.documentation_level}}
- Security: {{quality.security_level}}
```

Template Instantiation:

```bash
# Create memory from template
claude memory init --template web-app --config project.json

# Variables in project.json:
# {
# "project": {"name": "MyApp", "type": "web-app", "language": "TypeScript"},
# "team": {"size": 5, "workflow": "github-flow", "review_policy": "required"},
# "quality": {"test_coverage": 90, "documentation_level": "comprehensive", "security_level": "high"}
# }
```

### Memory Sharing and Distribution

Team Memory Distribution:

```bash
# Export memory for team sharing
claude memory export --team --format archive

# Import shared memory
claude memory import --team --file team-memory.tar.gz

# Merge memory updates
claude memory merge --base current --update team-updates
```

Memory Distribution Channels:

- Git Repository: Version-controlled memory files
- Package Distribution: Memory bundled with tools/libraries
- Network Share: Centralized memory server
- Cloud Storage: Distributed memory storage

## Best Practices

### Memory Organization

Structural Guidelines:

- Keep memory files focused on single topics
- Use consistent naming conventions
- Implement clear hierarchy and relationships
- Maintain cross-references and links

Content Guidelines:

- Write memory content in clear, concise language
- Use structured formats (markdown, JSON, YAML)
- Include examples and use cases
- Provide context and usage instructions

### Performance Optimization

Memory Loading Optimization:

- Load memory files on-demand when possible
- Implement caching for frequently accessed memory
- Use compression for large memory files
- Preload critical memory files

Memory Access Patterns:

- Group related memory access operations
- Minimize memory file loading frequency
- Use memory references instead of duplication
- Implement lazy loading for optional memory

### Security and Privacy

Memory Security:

- Never store sensitive credentials in memory files
- Implement access controls for memory files
- Use encryption for confidential memory content
- Regular security audits of memory content

Privacy Considerations:

- Separate personal and project memory appropriately
- Use anonymization for sensitive data in shared memory
- Implement data retention policies for memory content
- Respect user privacy preferences in memory usage

This comprehensive reference provides all the information needed to effectively implement, manage, and optimize Claude Code Memory systems for projects of any scale and complexity.
