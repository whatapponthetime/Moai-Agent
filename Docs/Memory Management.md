---
title: "Memory Management"
description: "Learn how to manage Claude Code's memory across sessions through various memory locations and best practices."
---

# Memory Management

Claude Code can remember things across sessions, such as coding style guidelines, common commands for workflows, and project-specific settings.

## Determine Memory Type

Claude Code provides 4 memory locations in a hierarchy, each serving different purposes:

| Memory Type | Location | Purpose | Usage Example | Shared With |
|------|----------|---------|--------------|-------------|
| **Managed Policy** | • macOS: `/Library/Application Support/ClaudeCode/CLAUDE.md`<br />• Linux: `/etc/claude-code/CLAUDE.md`<br />• Windows: `C:\Program Files\ClaudeCode\CLAUDE.md` | Organization-wide guidelines managed by IT/DevOps | Company coding standards, security policies, compliance requirements | All users in organization |
| **Project Memory** | `./CLAUDE.md` or `./.claude/CLAUDE.md` | Team-shared guidelines for project | Project architecture, coding standards, common workflows | Team members via source control |
| **Project Rules** | `./.claude/rules/*.md` | Modular topical project guidelines | Language-specific guidelines, testing rules, API standards | Team members via source control |
| **User Memory** | `~/.claude/CLAUDE.md` | Personal preferences for all projects | Personal code styling preferences, tool shortcuts | User only (all projects) |
| **Project Memory (Local)** | `./CLAUDE.local.md` | Personal project-specific preferences | Sandbox URLs, preferred test data | User only (current project) |

All memory files are automatically loaded into Claude Code's context when Claude Code starts. Higher-level memory in the hierarchy loads first, providing a foundation for more specific memory to build upon.

## CLAUDE.md Imports

CLAUDE.md files can import additional files using the `@path/to/import` syntax. The following example imports 3 files:

```markdown
Reference project overview from @README and available npm commands from @package.json.

# Additional instructions
- git workflow @docs/git-instructions.md
```

Both relative and absolute paths are allowed. Importing files in your home directory is particularly convenient for providing individual instructions to teammates that aren't committed to the repository. It serves as an alternative to CLAUDE.local.md and works better across multiple git worktrees.

```markdown
# Individual preferences
- @~/.claude/my-project-instructions.md
```

To prevent conflicts, imports are not evaluated inside markdown code fences and code blocks:

```markdown
This code span is not processed as an import: `@anthropic-ai/claude-code`
```

Imported files can recursively import up to 5 hops deep. Run `/memory` to see which memory files were loaded.

## How Claude Looks Up Memory

Claude Code reads memory recursively. Starting from cwd, it recurses up to the root directory `/` (not included) and reads all CLAUDE.md or CLAUDE.local.md files it finds. This is particularly useful when working in large repositories where both `foo/CLAUDE.md` and `foo/bar/CLAUDE.md` have memory while running Claude Code in `foo/bar/`.

Claude also discovers CLAUDE.md nested in sub-trees below the current working directory. These are only included when reading files in that sub-tree, not loaded at startup.

## Edit Memory Directly with `/memory`

During a session, use the `/memory` command to open all memory files in your system editor for broader additions or configuration.

## Set Up Project Memory

To set up a CLAUDE.md file that stores important information, rules, and frequently used commands for your project:

Project memory can be stored in `./CLAUDE.md` or `./.claude/CLAUDE.md`.

Bootstrap a CLAUDE.md for your codebase with:

```bash
/init
```

## Modular Rules with `.claude/rules/`

For larger projects, use the `.claude/rules/` directory to organize instructions into multiple files. This allows teams to maintain focused, well-organized rule files instead of one large CLAUDE.md.

### Basic Structure

Place markdown files in your project's `.claude/rules/` directory:

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

### Path-Specific Rules

Rules can be scoped to specific files using the `paths` field in YAML frontmatter. These conditional rules only apply when Claude works with files matching those patterns.

```yaml
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

### Glob Patterns

The `paths` field supports standard glob patterns:

| Pattern | Matches |
|---------|---------|
| `**/*.ts` | TypeScript files in all directories |
| `src/**/*` | All files under `src/` directory |
| `*.md` | Markdown files in project root |
| `src/components/*.tsx` | React components in specific directory |

Multiple patterns can be specified:

```yaml
---
paths:
  - "src/**/*.ts"
  - "lib/**/*.ts"
  - "tests/**/*.test.ts"
---

# TypeScript/React rules
```

Brace expansion is supported for matching multiple extensions or directories:

```yaml
---
paths:
  - "src/**/*.{ts,tsx}"
  - "{src,lib}/**/*.ts"
---

# TypeScript/React rules
```

This expands `src/**/*.{ts,tsx}` to match both `.ts` and `.tsx` files.

### Subdirectories

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

### Symbolic Links

The `.claude/rules/` directory supports symbolic links, allowing multiple projects to share common rules:

```bash
# Symbolic link to shared rules directory
ln -s ~/shared-claude-rules .claude/rules/shared

# Symbolic link to individual rule file
ln -s ~/company-standards/security.md .claude/rules/security.md
```

Symbolic links are resolved and content loaded normally. Circular symbolic links are handled gracefully.

### User-Level Rules

Create personal rules in `~/.claude/rules/` that apply to all your projects:

```
~/.claude/rules/
├── preferences.md    # Personal coding preferences
└── workflows.md      # Preferred workflows
```

User-level rules load before project rules, giving project rules higher priority.

## Organization-Level Memory Management

Organizations can deploy centralized CLAUDE.md files that apply to all users.

To set up organization-level memory management:

1. Create managed memory files in the **Managed Policy** locations shown in the memory type table above
2. Deploy via configuration management systems (MDM, Group Policy, Ansible, etc.) for consistent deployment across all developer machines

## Memory Best Practices

- **Be specific**: "Use 2-space indentation" is better than "format code properly"
- **Organize by structure**: Format each individual memory item as a bullet and group related items under descriptive markdown headings
- **Review regularly**: Update memory as your project progresses so Claude always has current information and context

---

**Sources:**
- [Memory management](/claude-code/memory)