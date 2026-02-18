[Skip to Content](https://adk.mo.ai.kr/en/claude-code/skills#nextra-skip-nav)

[Claude Code](https://adk.mo.ai.kr/en/claude-code "Claude Code") Skills

Copy page

# Skills

Reusable instruction files that extend Claude Code’s capabilities, written in SKILL.md for Claude to automatically utilize.

One-line summary: Skills are markdown files that Claude reads and follows. Creating SKILL.md in a directory adds a new feature to Claude’s toolbox.

## What are Skills? [Permalink for this section](https://adk.mo.ai.kr/en/claude-code/skills\#what-are-skills)

Skills are extensions that add new knowledge or workflows to Claude Code. Metaphorically, skills are like **manuals** handed to Claude. Just as you give a work manual to a new employee who follows it, Claude reads skill files and performs tasks according to those instructions.

Key features of skills:

- **Auto-discovery**: Claude compares user requests with skill descriptions to automatically select appropriate skills
- **Direct invocation**: Users can also invoke directly using slash commands in the form `/skillname`
- **Reusable**: Once written, can be used repeatedly across multiple sessions and projects
- **Markdown-based**: Written in markdown without requiring separate programming languages

### Agent Skills Open Standard [Permalink for this section](https://adk.mo.ai.kr/en/claude-code/skills\#agent-skills-open-standard)

Skills follow the **Agent Skills** open standard developed by Anthropic. This standard works identically across various AI tools:

- Claude Code
- Cursor
- Gemini CLI
- VS Code (GitHub Copilot)
- GitHub

One skill file can be reused across multiple tools.

### Progressive Disclosure Architecture [Permalink for this section](https://adk.mo.ai.kr/en/claude-code/skills\#progressive-disclosure-architecture)

Skills use a 3-level loading system to efficiently use the context window. Loading all skills at once would waste tokens, so they load incrementally as needed.

| Level | When loaded | Content | Token cost |
| --- | --- | --- | --- |
| **Level 1** | Always when Claude starts | name, description | ~100 tokens per skill |
| **Level 2** | When skill is selected | SKILL.md body | ≤5,000 tokens recommended |
| **Level 3** | When reference files needed | Additional files, scripts | Virtually unlimited |

## Create Your First Skill [Permalink for this section](https://adk.mo.ai.kr/en/claude-code/skills\#create-your-first-skill)

Let’s create a skill. Here’s the process for creating a simple skill that explains code.

### Step 1: Create Directory [Permalink for this section](https://adk.mo.ai.kr/en/claude-code/skills\#step-1-create-directory)

To add a skill to your project, create a directory under `.claude/skills/`:

```

mkdir -p .claude/skills/explain-code
```

To create a personal skill (usable across all projects):

```

mkdir -p ~/.claude/skills/explain-code
```

### Step 2: Write SKILL.md [Permalink for this section](https://adk.mo.ai.kr/en/claude-code/skills\#step-2-write-skillmd)

Create a `SKILL.md` file. The file consists of YAML frontmatter and markdown body:

```

---
name: explain-code
description: Explains code in simple Korean for junior developers. Use when the user asks to explain, describe, or break down code.
---

# Code Explanation Skill

## Instructions

1. Read the code file specified by the user
2. Summarize the overall purpose of the code in one sentence
3. Explain the role of each function and class
4. Describe the flow of main logic step by step
5. Additionally explain concepts that beginners might find difficult

## Output Format

- Explain in Korean
- Include English original text for technical terms
- Include code examples in explanations
```

### Step 3: Test [Permalink for this section](https://adk.mo.ai.kr/en/claude-code/skills\#step-3-test)

After restarting Claude Code, you can test in two ways:

- **Auto invocation**: Ask “Please explain the code in this file” and Claude will automatically select the skill
- **Direct invocation**: Type `/explain-code` to invoke explicitly

## Skill Directory Structure [Permalink for this section](https://adk.mo.ai.kr/en/claude-code/skills\#skill-directory-structure)

Skills organize related files in one directory:

```

my-skill/
├── SKILL.md           # Main instruction file (required, under 500 lines)
├── template.md        # Template for Claude to use
├── examples/
│   └── sample.md      # Example outputs
└── scripts/
    └── validate.sh    # Script for Claude to execute
```

Role of each file:

- **SKILL.md** (required): Core instruction file. Consists of frontmatter and markdown body. Keep under 500 lines.
- **template.md**: Template referenced when Claude generates output. For example, for a PR review skill, put the review form template here.
- **examples/**: Provide examples of expected outputs to Claude. Specific examples improve Claude’s output quality.
- **scripts/**: Scripts Claude can execute with bash. Used for validation, transformation, build, etc.

When referencing other files in SKILL.md, keep references to one level deep only. If SKILL.md references advanced.md and advanced.md references details.md, Claude may read incompletely. It’s safest for SKILL.md to directly reference all files.

## Skill Storage Locations [Permalink for this section](https://adk.mo.ai.kr/en/claude-code/skills\#skill-storage-locations)

Skills can be stored in multiple locations, with higher priority taking precedence when names conflict:

| Priority | Location | Path | Scope |
| --- | --- | --- | --- |
| 1 (highest) | **Enterprise** | Managed settings | All users in organization |
| 2 | **Personal** | `~/.claude/skills/<skillname>/SKILL.md` | User’s all projects |
| 3 | **Project** | `.claude/skills/<skillname>/SKILL.md` | That project only |
| 4 | **Plugin** | `<plugin>/skills/<skillname>/SKILL.md` | Where plugin is active |

When the same skill name exists in Enterprise and Personal, the Enterprise skill takes precedence. Plugin skills use `pluginname:skillname` namespace to avoid conflicts.

### Monorepo Auto-Discovery [Permalink for this section](https://adk.mo.ai.kr/en/claude-code/skills\#monorepo-auto-discovery)

In monorepo structures, Claude also auto-discovers skills in nested directories. For example, skills in `packages/api/.claude/skills/` are automatically recognized when working in that directory. Not all loaded at startup, but included when reading files in that sub-tree.

## Skill Types [Permalink for this section](https://adk.mo.ai.kr/en/claude-code/skills\#skill-types)

Skill content is divided into two main types:

### Reference Content [Permalink for this section](https://adk.mo.ai.kr/en/claude-code/skills\#reference-content)

Knowledge that Claude references throughout its work. Includes coding rules, API patterns, style guides, etc.

```

---
name: api-style-guide
description: API design conventions and patterns for this project. Use when designing or reviewing API endpoints.
---
```

```

# API Style Guide

## Endpoint naming conventions
- Use plural form for resource names: `/users`, `/orders`
- Nested resources: `/users/{id}/orders`
- Use HTTP methods instead of verbs

## Response format
- Success: `{ "data": ... }`
- Error: `{ "error": { "code": "...", "message": "..." } }`
```

### Task Content [Permalink for this section](https://adk.mo.ai.kr/en/claude-code/skills\#task-content)

Instructions for Claude to perform specific tasks step by step. Includes deployment, code review, code generation, etc. Task skills typically set `disable-model-invocation: true` to run only when explicitly invoked by users.

```

---
name: deploy
description: Deploy the application to production. Runs build, test, and deployment steps.
disable-model-invocation: true
allowed-tools: Bash, Read, Grep
---
```

```

# Deployment Skill

## Steps
1. Verify current branch is main
2. Run all tests: `npm test`
3. Production build: `npm run build`
4. Execute deployment: `npm run deploy`
5. Verify deployment and report results
```

**Which type to choose?**

- If information needs to be referenced repeatedly across multiple tasks: **Reference Content**
- If there’s a procedure to execute at a specific point: **Task Content**
- Task content is usually invoked directly with `/skillname`

## Frontmatter Settings [Permalink for this section](https://adk.mo.ai.kr/en/claude-code/skills\#frontmatter-settings)

You can finely control skill behavior in the YAML frontmatter of SKILL.md:

| Field | Required | Default | Description |
| --- | --- | --- | --- |
| `name` | No | Directory name | Display name. Use lowercase and hyphens only. Max 64 characters |
| `description` | Recommended | - | Purpose and when to use the skill. Claude reads this and decides when to select the skill. Max 1024 characters |
| `argument-hint` | No | - | Autocomplete hint. Example: `[issue-number]` |
| `disable-model-invocation` | No | `false` | If `true`, Claude cannot auto-invoke. Only users can invoke |
| `user-invocable` | No | `true` | If `false`, hides from slash menu. Only Claude can invoke |
| `allowed-tools` | No | - | Restrict tools Claude can use. Example: `Read, Grep, Glob` |
| `model` | No | Current model | Specify model to use when executing skill |
| `context` | No | - | If set to `fork`, executes in subagent with isolation |
| `agent` | No | `general-purpose` | Agent type when `context: fork`. `Explore`, `Plan`, `general-purpose` |
| `hooks` | No | - | Hooks attached to skill lifecycle |

### String Substitution [Permalink for this section](https://adk.mo.ai.kr/en/claude-code/skills\#string-substitution)

You can use the following variables in frontmatter and body:

| Variable | Description | Example |
| --- | --- | --- |
| `$ARGUMENTS` | All arguments passed | `$ARGUMENTS` is `staging` when `/deploy staging` |
| `$ARGUMENTS[0]` or `$0` | First argument | `$ARGUMENTS[0]` is `PR-123` when `/review PR-123` |
| `$ARGUMENTS[1]` or `$1` | Second argument | Access sequentially |
| `${CLAUDE_SESSION_ID}` | Current session ID | Unique session identifier |

## Invocation Control [Permalink for this section](https://adk.mo.ai.kr/en/claude-code/skills\#invocation-control)

Controlling who can invoke a skill is important. Based on frontmatter settings, the invoking subject changes:

| Frontmatter setting | User invocation | Claude auto invocation | Use case |
| --- | --- | --- | --- |
| (default) | Possible | Possible | General skills |
| `disable-model-invocation: true` | Possible | Impossible | Deployment, dangerous tasks |
| `user-invocable: false` | Impossible | Possible | Internal helper skills |

### Recommended Settings by Use Case [Permalink for this section](https://adk.mo.ai.kr/en/claude-code/skills\#recommended-settings-by-use-case)

- **General skills**: Use defaults. Claude automatically invokes at appropriate times.
- **Dangerous tasks like deployment, data deletion**: Set `disable-model-invocation: true`. Only runs when user explicitly types `/deploy`.
- **Helper skills for other skills**: Set `user-invocable: false`. Not shown in slash menu but Claude uses automatically when needed.

## Passing Arguments [Permalink for this section](https://adk.mo.ai.kr/en/claude-code/skills\#passing-arguments)

You can pass arguments to skills to make them behave dynamically.

### Basic Usage [Permalink for this section](https://adk.mo.ai.kr/en/claude-code/skills\#basic-usage)

```

---
name: review-pr
description: Review a pull request by number.
argument-hint: "[PR number]"
---

# PR Review

Review PR #$ARGUMENTS.
```

When user types `/review-pr 123`, `$ARGUMENTS` is replaced with `123`.

### Position-Based Arguments [Permalink for this section](https://adk.mo.ai.kr/en/claude-code/skills\#position-based-arguments)

When passing multiple arguments, use positional indexes:

```

---
name: compare-branches
description: Compare two git branches.
argument-hint: "[base branch] [compare branch]"
---

# Branch Comparison

Base branch: $0
Compare branch: $1
```

Typing `/compare-branches main develop` replaces `$0` with `main` and `$1` with `develop`.

## Advanced Patterns [Permalink for this section](https://adk.mo.ai.kr/en/claude-code/skills\#advanced-patterns)

### Dynamic Context Injection [Permalink for this section](https://adk.mo.ai.kr/en/claude-code/skills\#dynamic-context-injection)

Backtick blocks starting with `!` execute as shell commands and their output is inserted into the skill body. This allows skills to include fresh runtime information.

```

## Current branch info
!`git branch --show-current`

## Recent commits
!`git log --oneline -5`

## Open issues list
!`gh issue list --limit 5`
```

When Claude loads this skill, each command executes and actual git branch names, recent commit history, and GitHub issue lists are inserted. This allows skills to always reflect current project state.

### Execute in Subagent [Permalink for this section](https://adk.mo.ai.kr/en/claude-code/skills\#execute-in-subagent)

Setting `context: fork` makes the skill execute in an isolated subagent. Subagents have their own context window, so they don’t consume the main conversation’s context.

```

---
name: codebase-analysis
description: Analyze entire codebase structure and generate report.
context: fork
agent: Explore
allowed-tools: Read, Grep, Glob
---
```

You can specify subagent type with the `agent` field:

- **Explore**: Optimized for read-only exploration. Good for code analysis, understanding structure
- **Plan**: Optimized for planning. Good for architecture design, strategy formulation
- **general-purpose** (default): General agent. Both reading and writing possible

Skills executed in subagents are isolated from the main conversation. Subagents don’t know the main conversation’s previous content, and only return results in summary form. Also, subagents cannot create other subagents.

### Permission Restrictions [Permalink for this section](https://adk.mo.ai.kr/en/claude-code/skills\#permission-restrictions)

Use the `allowed-tools` field to restrict which tools a skill can use. This is important for security and safety.

```

---
name: safe-reader
description: Read-only analysis of code files.
allowed-tools:
  - Read
  - Grep
  - Glob
---
```

This skill can only read and search files, not modify files or execute commands.

Recommended permission settings:

- **Read-only skills**: `Read, Grep, Glob` \- Good for analysis, review tasks
- **File modification skills**: `Read, Write, Edit, Grep, Glob` \- Good for refactoring, code generation
- **Build/deploy skills**: `Read, Grep, Glob, Bash` \- Good for build, test, deploy

If `allowed-tools` is not specified, Claude follows standard permission model and asks for tool usage permission as needed.

## Skill Sharing [Permalink for this section](https://adk.mo.ai.kr/en/claude-code/skills\#skill-sharing)

### Project Sharing [Permalink for this section](https://adk.mo.ai.kr/en/claude-code/skills\#project-sharing)

Commit the `.claude/skills/` directory to version control to share the same skills across the entire team:

```

git add .claude/skills/
git commit -m "Add team coding standards skill"
git push
```

### Share as Plugin [Permalink for this section](https://adk.mo.ai.kr/en/claude-code/skills\#share-as-plugin)

To distribute across multiple projects or share publicly, package as a plugin. Put skills in the plugin’s `skills/` directory to access with `pluginname:skillname` namespace.

### Organization-Wide Deployment [Permalink for this section](https://adk.mo.ai.kr/en/claude-code/skills\#organization-wide-deployment)

Deploy skills to all users in an organization via Enterprise managed settings. This is useful for enforcing organization-level rules like security policies and coding standards.

## Tips for Writing Effective Skills [Permalink for this section](https://adk.mo.ai.kr/en/claude-code/skills\#tips-for-writing-effective-skills)

### Writing `description` [Permalink for this section](https://adk.mo.ai.kr/en/claude-code/skills\#writing-description)

The `description` is the key criterion for Claude to select skills. Write well and Claude will use skills at the right times.

**Good examples:**

- “Extract text and tables from PDF files, fill forms, merge documents. Use when working with PDF files or when the user mentions PDFs, forms, or document extraction.”
- “Generate descriptive commit messages by analyzing git diffs. Use when the user asks for help writing commit messages or reviewing staged changes.”

**Bad examples:**

- “Helps with documents” - Too vague
- “Processes data” - Not specific
- “I can help you with files” - Don’t use first person

Writing rules:

- **Write in third person**: “Processes Excel files and generates reports” (O) / “I can help you process” (X)
- **Include both purpose and triggers**: What it does + when to use it
- **Include specific keywords**: Add terms users are likely to mention

### SKILL.md Writing Principles [Permalink for this section](https://adk.mo.ai.kr/en/claude-code/skills\#skillmd-writing-principles)

Claude is already very smart. Only add information to skills that Claude **doesn’t know**:

- Check if you’re repeating explanations Claude already knows
- Review whether each paragraph provides sufficient value for token cost
- Keep under 500 lines, separate detailed content into separate files

## Troubleshooting [Permalink for this section](https://adk.mo.ai.kr/en/claude-code/skills\#troubleshooting)

| Problem | Cause | Solution |
| --- | --- | --- |
| Skill not auto-selected | Lack of trigger keywords in description | Add key terms users might mention to description. Verify behavior by invoking directly with `/skillname` |
| Skill selected too often | Description too general | Make description more specific or set `disable-model-invocation: true` |
| Claude doesn’t recognize some skills | Character budget exceeded | Increase environment variable `SLASH_COMMAND_TOOL_CHAR_BUDGET` (default 15,000) |
| YAML parsing error | Frontmatter syntax error | Check `---` markers, use spaces instead of tabs, check indentation |
| File references don’t work | Deep nested references | Have SKILL.md directly reference all files (one level only) |
| Skill conflicts | Similar descriptions | Use unique trigger keywords in each skill’s description |

If total character count of skills exceeds the default budget of 15,000, some skills may not load. If using many skills, increase the `SLASH_COMMAND_TOOL_CHAR_BUDGET` environment variable.

### Security Notes [Permalink for this section](https://adk.mo.ai.kr/en/claude-code/skills\#security-notes)

Since skills provide new capabilities to Claude, only use skills from trusted sources:

- Skills you wrote yourself
- Official skills provided by Anthropic
- Skills shared by verified teammates

Review all files in SKILL.md and scripts/ directories before using externally sourced skills.

## Related Documents [Permalink for this section](https://adk.mo.ai.kr/en/claude-code/skills\#related-documents)

- [Extensions](https://adk.mo.ai.kr/claude-code/extensions) \- Complete overview of skills, subagents, hooks, MCP, plugins
- [Memory management](https://adk.mo.ai.kr/claude-code/memory) \- Difference between CLAUDE.md and skills, memory hierarchy
- [Interactive mode](https://adk.mo.ai.kr/claude-code/interactive-mode) \- Interactive workflows with slash commands
- [Settings](https://adk.mo.ai.kr/claude-code/settings) \- Skill-related settings and environment variables
- [Troubleshooting](https://adk.mo.ai.kr/claude-code/troubleshooting) \- Additional solutions for skill-related issues

If you’re new to writing skills, start with a simple reference skill. Creating a skill for your project’s coding rules or frequently used commands is a good starting point.

Last updated onFebruary 12, 2026

[Common Workflows](https://adk.mo.ai.kr/en/claude-code/common-workflows "Common Workflows") [Sub Agents](https://adk.mo.ai.kr/en/claude-code/sub-agents "Sub Agents")

* * *

* * *

# Extended Technical Reference

# Claude Code Skills - Official Documentation Reference

Source: https://code.claude.com/docs/en/skills
Related: https://platform.claude.com/docs/en/agents-and-tools/agent-skills/overview
Updated: 2026-01-06

## What are Agent Skills?

Agent Skills are modular extensions that expand Claude's capabilities. They consist of a SKILL.md file with YAML frontmatter and Markdown instructions, plus optional supporting files (scripts, templates, documentation).

Key Characteristic: Skills are model-invoked, meaning Claude autonomously decides when to use them based on user requests and skill descriptions. This differs from slash commands which are user-invoked.

## Skill Types

Three categories of Skills exist:

1. Personal Skills: Located at `~/.claude/skills/skill-name/`, available across all projects
2. Project Skills: Located at `.claude/skills/skill-name/`, shared via git with team members
3. Plugin Skills: Bundled within Claude Code plugins

## Progressive Disclosure Architecture

Skills leverage Claude's VM environment with a three-level loading system that optimizes context window usage:

### Level 1: Metadata (Always Loaded)

The Skill's YAML frontmatter provides discovery information and is pre-loaded into the system prompt at startup. This lightweight approach means many Skills can be installed without context penalty.

Content: `name` and `description` fields from YAML frontmatter
Token Cost: Approximately 100 tokens per Skill

### Level 2: Instructions (Loaded When Triggered)

The main body of SKILL.md contains procedural knowledge including workflows, best practices, and guidance. When a request matches a Skill's description, Claude reads SKILL.md from the filesystem via bash, only then loading this content into the context window.

Content: SKILL.md body with instructions and guidance
Token Cost: Under 5K tokens recommended

### Level 3: Resources and Code (Loaded As Needed)

Skills can bundle additional materials that Claude accesses only when referenced:

- Instructions: Additional markdown files (FORMS.md, REFERENCE.md) containing specialized guidance
- Code: Executable scripts (fill_form.py, validate.py) that Claude runs via bash
- Resources: Reference materials like database schemas, API documentation, templates, or examples

Content: Bundled files executed via bash without loading contents into context
Token Cost: Effectively unlimited since they are accessed on-demand

## SKILL.md Structure and Format

### Directory Organization

skill-name/
- SKILL.md (required, main file, 500 lines or less)
- reference.md (optional, extended documentation)
- examples.md (optional, code examples)
- scripts/ (optional, utility scripts)
- templates/ (optional, file templates)

### YAML Frontmatter Requirements

Required Fields:

- name: Skill identifier (max 64 characters, lowercase letters, numbers, and hyphens only, no XML tags, no reserved words like "anthropic" or "claude")

- description: What the Skill does and when to use it (max 1024 characters, non-empty, no XML tags)

Optional Fields:

- allowed-tools: Tool names to restrict access. Supports comma-separated string or YAML list format. If not specified, Claude follows standard permission model.

- model: Model to use when Skill is active (e.g., `claude-sonnet-4-20250514`). Defaults to the current model.

- context: Set to `fork` to run Skill in isolated sub-agent context with separate conversation history.

- agent: Agent type when `context: fork` is set. Options: `Explore`, `Plan`, `general-purpose`. Defaults to `general-purpose`.

- hooks: Define lifecycle hooks (PreToolUse, PostToolUse, Stop) scoped to the Skill. See Hooks section below.

- user-invocable: Boolean to control slash command menu visibility. Default is `true`. Set to `false` to hide internal Skills from the menu.

### Advanced Frontmatter Examples (2026-01)

#### allowed-tools as YAML List

```yaml
---
name: reading-files-safely
description: Read files without making changes. Use for read-only file access.
allowed-tools:
  - Read
  - Grep
  - Glob
---
```

#### Forked Context with Agent Type

```yaml
---
name: code-analysis
description: Analyze code quality and generate detailed reports. Use for comprehensive code review.
context: fork
agent: Explore
allowed-tools:
  - Read
  - Grep
  - Glob
---
```

#### With Lifecycle Hooks

```yaml
---
name: secure-operations
description: Perform operations with additional security checks.
hooks:
  PreToolUse:
    - matcher: "Bash"
      hooks:
        - type: command
          command: "./scripts/security-check.sh $TOOL_INPUT"
          once: true
  PostToolUse:
    - matcher: "Write|Edit"
      hooks:
        - type: command
          command: "./scripts/verify-write.sh"
---
```

Hook Configuration Fields:
- type: "command" (bash) or "prompt" (LLM evaluation)
- command: Bash command to execute (for type: command)
- prompt: LLM prompt for evaluation (for type: prompt)
- timeout: Timeout in seconds (default: 60)
- matcher: Pattern to match tool names (regex supported)
- once: Boolean, run hook only once per session (Skills only)

#### Hidden from Menu

```yaml
---
name: internal-helper
description: Internal Skill used by other Skills. Not for direct user invocation.
user-invocable: false
allowed-tools:
  - Read
  - Grep
---
```

### Example SKILL.md Structure

```yaml
---
name: your-skill-name
description: Brief description of what this Skill does and when to use it. Include both what it does AND specific triggers for when Claude should use it.
allowed-tools: Read, Grep, Glob
---

# Your Skill Name

## Instructions
Clear, step-by-step guidance for Claude to follow.

## Examples
Concrete examples of using this Skill.
```

## Tool Restrictions with allowed-tools

The `allowed-tools` field restricts which tools Claude can use when a skill is active.

Use Cases for Tool Restrictions:

- Read-only Skills that should not modify files (allowed-tools: Read, Grep, Glob)
- Limited-scope Skills for data analysis only
- Security-sensitive workflows

If `allowed-tools` is not specified, Claude follows the standard permission model and may request tool access as needed.

## Writing Effective Descriptions

The description field enables Skill discovery and should include both what the Skill does and when to use it.

Critical Rules:

- Always write in third person. The description is injected into the system prompt, and inconsistent point-of-view can cause discovery problems.
- Good: "Processes Excel files and generates reports"
- Avoid: "I can help you process Excel files"
- Avoid: "You can use this to process Excel files"

Be Specific and Include Key Terms:

Effective examples:

- PDF Processing: "Extract text and tables from PDF files, fill forms, merge documents. Use when working with PDF files or when the user mentions PDFs, forms, or document extraction."

- Git Commit Helper: "Generate descriptive commit messages by analyzing git diffs. Use when the user asks for help writing commit messages or reviewing staged changes."

Avoid vague descriptions:

- "Helps with documents" (too vague)
- "Processes data" (not specific)
- "Does stuff with files" (unclear triggers)

## Naming Conventions

Recommended format uses gerund form (verb + -ing) for Skill names as this clearly describes the activity or capability:

Good Naming Examples:

- processing-pdfs
- analyzing-spreadsheets
- managing-databases
- testing-code
- writing-documentation

Acceptable Alternatives:

- Noun phrases: pdf-processing, spreadsheet-analysis
- Action-oriented: process-pdfs, analyze-spreadsheets

Avoid:

- Vague names: helper, utils, tools
- Overly generic: documents, data, files
- Reserved words: anthropic-helper, claude-tools
- Inconsistent patterns within skill collection

## Best Practices

### Core Principle: Concise is Key

The context window is a shared resource. Your Skill competes with system prompt, conversation history, other Skills' metadata, and the actual request.

Default Assumption: Claude is already very smart. Only add context Claude does not already have. Challenge each piece of information by asking:

- Does Claude really need this explanation?
- Can I assume Claude knows this?
- Does this paragraph justify its token cost?

### Set Appropriate Degrees of Freedom

Match the level of specificity to the task's fragility and variability.

High Freedom (Text-based instructions):

Use when multiple approaches are valid, decisions depend on context, or heuristics guide the approach.

Medium Freedom (Pseudocode or scripts with parameters):

Use when a preferred pattern exists, some variation is acceptable, or configuration affects behavior.

Low Freedom (Specific scripts, few or no parameters):

Use when operations are fragile and error-prone, consistency is critical, or a specific sequence must be followed.

### Test With All Models You Plan to Use

Skills act as additions to models, so effectiveness depends on the underlying model:

- Claude Haiku (fast, economical): Does the Skill provide enough guidance?
- Claude Sonnet (balanced): Is the Skill clear and efficient?
- Claude Opus (powerful reasoning): Does the Skill avoid over-explaining?

### Build Evaluations First

Create evaluations BEFORE writing extensive documentation to ensure your Skill solves real problems:

1. Identify gaps: Run Claude on representative tasks without a Skill, document specific failures
2. Create evaluations: Build three scenarios that test these gaps
3. Establish baseline: Measure Claude's performance without the Skill
4. Write minimal instructions: Create just enough content to adddess gaps and pass evaluations
5. Iterate: Execute evaluations, compare against baseline, refine

### Develop Skills Iteratively with Claude

Work with one instance of Claude ("Claude A") to create a Skill that will be used by other instances ("Claude B"):

1. Complete a task without a Skill using normal prompting
2. Identify the reusable pattern from the context you provided
3. Ask Claude A to create a Skill capturing that pattern
4. Review for conciseness
5. Improve information architecture
6. Test on similar tasks with Claude B
7. Iterate based on observation

## Progressive Disclosure Patterns

### Pattern 1: High-level Guide with References

Keep SKILL.md as overview pointing Claude to detailed materials:

```markdown
# PDF Processing

## Quick start
Extract text with pdfplumber (brief example)

## Advanced features
**Form filling**: See [FORMS.md](FORMS.md) for complete guide
**API reference**: See [REFERENCE.md](REFERENCE.md) for all methods
**Examples**: See [EXAMPLES.md](EXAMPLES.md) for common patterns
```

Claude loads additional files only when needed.

### Pattern 2: Domain-specific Organization

For Skills with multiple domains, organize content by domain to avoid loading irrelevant context:

```
bigquery-skill/
- SKILL.md (overview and navigation)
- reference/
  - finance.md (revenue metrics)
  - sales.md (pipeline data)
  - product.md (usage analytics)
```

When user asks about revenue, Claude reads only reference/finance.md.

### Pattern 3: Conditional Details

Show basic content, link to advanced content:

```markdown
## Creating documents
Use docx-js for new documents. See [DOCX-JS.md](DOCX-JS.md).

## Editing documents
For simple edits, modify the XML directly.
**For tracked changes**: See [REDLINING.md](REDLINING.md)
```

### Important: Avoid Deeply Nested References

Keep references one level deep from SKILL.md. Claude may partially read files when they are referenced from other referenced files, resulting in incomplete information.

Bad: SKILL.md references advanced.md which references details.md
Good: SKILL.md directly references all files (advanced.md, reference.md, examples.md)

## Where Skills Work

Skills are available across Claude's agent products with different behaviors:

### Claude Code

Custom Skills only. Create Skills as directories with SKILL.md files. Claude discovers and uses them automatically. Skills are filesystem-based and do not require API uploads.

### Claude API

Supports both pre-built Agent Skills and custom Skills. Specify the relevant `skill_id` in the `container` parameter. Custom Skills are shared organization-wide.

### Claude.ai

Supports both pre-built Agent Skills and custom Skills. Upload custom Skills as zip files through Settings, Features. Custom Skills are individual to each user and not shared organization-wide.

### Claude Agent SDK

Supports custom Skills through filesystem-based configuration. Create Skills in `.claude/skills/` and enable by including "Skill" in `allowed_tools` configuration.

## Security Considerations

We strongly recommend using Skills only from trusted sources: those you created yourself or obtained from Anthropic. Skills provide Claude with new capabilities through instructions and code, and a malicious Skill can direct Claude to invoke tools or execute code in ways that do not match the Skill's stated purpose.

Key Security Considerations:

- Audit thoroughly: Review all files bundled in the Skill including SKILL.md, scripts, images, and other resources
- External sources are risky: Skills that fetch data from external URLs pose particular risk
- Tool misuse: Malicious Skills can invoke tools in harmful ways
- Data exposure: Skills with access to sensitive data could leak information to external systems
- Treat like installing software: Only use Skills from trusted sources

## Managing Skills

### View Available Skills

Ask Claude directly: "What Skills are available?"

Or check file system:

- Personal Skills: ls ~/.claude/skills/
- Project Skills: ls .claude/skills/

### Update a Skill

Edit SKILL.md directly. Changes apply on next Claude Code startup.

### Remove a Skill

Personal: rm -rf ~/.claude/skills/my-skill
Project: rm -rf .claude/skills/my-skill && git commit -m "Remove unused Skill"

## Debugging Skills

### Claude Not Using the Skill

Check if description is specific enough:

- Include what it does AND when to use it
- Add key trigger terms users will mention

Check YAML syntax validity:

- Opening and closing --- markers
- Proper indentation
- No tabs (use spaces)

Check correct file location:

- Personal: ~/.claude/skills/*/SKILL.md
- Project: .claude/skills/*/SKILL.md

### Multiple Skills Conflicting

Use distinct trigger terms in descriptions:

Instead of two skills both having "For data analysis" and "For analyzing data", use specific triggers:

- Skill 1: "Analyze sales data in Excel files and CRM exports. Use for sales reports, pipeline analysis, and revenue tracking."
- Skill 2: "Analyze log files and system metrics data. Use for performance monitoring, debugging, and system diagnostics."

## Anti-patterns to Avoid

### Avoid Windows-style Paths

Always use forward slashes in file paths, even on Windows:

- Good: scripts/helper.py, reference/guide.md
- Avoid: scripts\helper.py, reference\guide.md

### Avoid Offering Too Many Options

Do not present multiple approaches unless necessary. Provide a default with an escape hatch for special cases.

### Avoid Time-sensitive Information

Do not include information that will become outdated. Use "old patterns" section for deprecated approaches instead of date-based conditions.

## Checklist for Effective Skills

Before sharing a Skill, verify:

Core Quality:

- Description is specific and includes key terms
- Description includes both what the Skill does and when to use it
- SKILL.md body is under 500 lines
- Additional details are in separate files if needed
- No time-sensitive information
- Consistent terminology throughout
- Examples are concrete, not abstract
- File references are one level deep
- Progressive disclosure used appropriately
- Workflows have clear steps

Testing:

- At least three evaluations created
- Tested with Haiku, Sonnet, and Opus
- Tested with real usage scenarios
- Team feedback incorporated if applicable
