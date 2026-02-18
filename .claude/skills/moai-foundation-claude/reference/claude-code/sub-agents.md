[Skip to Content](https://adk.mo.ai.kr/en/claude-code/sub-agents#nextra-skip-nav)

[Claude Code](https://adk.mo.ai.kr/en/claude-code "Claude Code") Sub Agents

Copy page

# Subagents

Learn how to create and utilize specialized AI workers in Claude Code to efficiently handle complex tasks.

One-line summary: Subagents are specialized AI workers for specific tasks that handle delegated work independently without polluting the main conversation’s context.

## What are Subagents? [Permalink for this section](https://adk.mo.ai.kr/en/claude-code/sub-agents\#what-are-subagents)

Subagents are similar to delegating tasks to experts within a team. For example, just as a project manager doesn’t write all code directly but delegates API work to backend developers and UI work to frontend developers, Claude can also delegate specific tasks to specialized subagents.

Each subagent has these elements:

- **Independent context window**: Separate workspace from main conversation (up to 200K tokens)
- **Custom system prompt**: Instructions defining the subagent’s role and behavior
- **Tool access control**: Selectively allowing only necessary tools for enhanced security
- **Independent permission settings**: Individual control over file editing, command execution, etc.

### Benefits of Using Subagents [Permalink for this section](https://adk.mo.ai.kr/en/claude-code/sub-agents\#benefits-of-using-subagents)

- **Context preservation**: Even if a subagent reads dozens of files, only key findings are delivered to the main conversation, keeping context clean
- **Enhanced specialization**: Higher success rates for specific tasks with detailed domain instructions
- **Reusability**: Once created, can be used repeatedly across the entire project
- **Cost reduction**: Can route to lightweight models like Haiku for cost savings
- **Parallel processing**: Multiple subagents can run simultaneously to increase task speed

Key to context preservation: Even if a subagent analyzes 50 files, only key findings are summarized and delivered to the main conversation. The main conversation’s context window isn’t wasted, allowing longer tasks to continue.

## Built-in Subagents [Permalink for this section](https://adk.mo.ai.kr/en/claude-code/sub-agents\#built-in-subagents)

Claude Code includes built-in subagents for frequently used tasks.

| Subagent | Model | Tools | Purpose |
| --- | --- | --- | --- |
| **Explore** | Haiku | Read, Grep, Glob, Bash | Codebase exploration and analysis (read-only) |
| **Plan** | Sonnet (inherit) | Read, Grep, Glob, Bash | Plan mode codebase investigation (read-only) |
| **General-purpose** | inherit | All tools | Complex multi-step tasks |
| **Bash** | inherit | Bash | Command execution only |
| **statusline-setup** | Sonnet | Limited | Status line setup |
| **Claude Code Guide** | Haiku | Limited | Claude Code usage guide |

**Explore** subagent uses Haiku model for fast, inexpensive codebase exploration. Thoroughness can be adjusted to quick, medium, or very thorough. Read-only, so it doesn’t modify code.

**Plan** subagent is automatically invoked in plan mode, used to investigate codebases and create implementation plans. Inherits the main model for powerful analysis capabilities.

**General-purpose** subagent has access to all tools to independently perform complex multi-step tasks.

## Creating Subagents [Permalink for this section](https://adk.mo.ai.kr/en/claude-code/sub-agents\#creating-subagents)

### Using `/agents` Command [Permalink for this section](https://adk.mo.ai.kr/en/claude-code/sub-agents\#using-agents-command)

The easiest way to create a subagent is with the `/agents` command.

1. Type `/agents` in Claude Code conversation
2. Select **Create New Agent**
3. Choose project level (current project only) or user level (all your projects)
4. Describe the subagent’s purpose and when to use it
5. Select necessary tools (leave blank for all tools)
6. Press `e` to edit system prompt in editor

For first-time creators, it’s recommended to ask Claude to generate the system prompt, then customize it based on your needs.

### Create Directly as File [Permalink for this section](https://adk.mo.ai.kr/en/claude-code/sub-agents\#create-directly-as-file)

You can define a subagent directly by including YAML frontmatter in a markdown file.

**File locations:**

- Project subagent: `.claude/agents/agentname.md`
- Personal subagent: `~/.claude/agents/agentname.md`

**File format example:**

```

---
name: code-reviewer
description: "Expert reviewing quality and security after code changes. Automatically use after code modifications."
tools: Read, Grep, Glob, Bash
model: inherit
---

You are a senior code reviewer. Focus on code quality, security, and maintainability.

When called:
1. Check recent changes with git diff
2. Focus analysis on changed files
3. Start review immediately

Review checklist:
- Code is concise and readable
- Function and variable names are appropriate
- No duplicate code
- Error handling is appropriate
- Security vulnerabilities
- Test coverage is sufficient
```

**Each field description:**

- `name`: Unique identifier for the subagent. Use only lowercase and hyphens
- `description`: Describes when Claude should use this subagent. Including expressions like “use PROACTIVELY” or “MUST BE USED” promotes automatic delegation
- `tools`: List of allowed tools, comma-separated. Omit to inherit all tools
- `model`: Specify model to use. Omit to use default (usually sonnet)

### Create with CLI Flag [Permalink for this section](https://adk.mo.ai.kr/en/claude-code/sub-agents\#create-with-cli-flag)

Use the `--agents` flag to define temporary subagents valid only for that session.

```

claude --agents '{
  "quick-reviewer": {
    "description": "Quick code review expert. Auto use after code changes.",
    "prompt": "You are a code review expert. Focus on quality and security.",
    "tools": ["Read", "Grep", "Glob", "Bash"],
    "model": "sonnet"
  }
}'
```

This is useful for CI/CD pipelines or one-off tasks. Subagent definition disappears when session ends.

## Storage Locations and Priority [Permalink for this section](https://adk.mo.ai.kr/en/claude-code/sub-agents\#storage-locations-and-priority)

Subagents can be defined in multiple locations, with only one applying when the same name exists in multiple places based on priority.

| Location | Scope | Priority |
| --- | --- | --- |
| `--agents` CLI flag | Current session only | 1 (highest) |
| `.claude/agents/` | Current project | 2 |
| `~/.claude/agents/` | All projects | 3 |
| Plugin’s `agents/` | Where plugin is active | 4 (lowest) |

Store project-specific subagents in `.claude/agents/` and subagents shared across all projects in `~/.claude/agents/`. Project subagents can be committed to Git and shared with teammates.

## Frontmatter Settings [Permalink for this section](https://adk.mo.ai.kr/en/claude-code/sub-agents\#frontmatter-settings)

All fields available in the YAML frontmatter of subagent files:

| Field | Required | Description | Default |
| --- | --- | --- | --- |
| `name` | Required | Unique identifier (lowercase, hyphens) | - |
| `description` | Required | Describe when Claude should delegate | - |
| `tools` | Optional | Allowed tools list (comma-separated) | Inherit all tools |
| `disallowedTools` | Optional | Disallowed tools list | - |
| `model` | Optional | Model to use: sonnet, opus, haiku, inherit | inherit |
| `permissionMode` | Optional | Permission handling mode | default |
| `skills` | Optional | List of skills to preload at startup | - |
| `hooks` | Optional | Lifecycle Hook definitions | - |

## Tool Control [Permalink for this section](https://adk.mo.ai.kr/en/claude-code/sub-agents\#tool-control)

### Tool Allow and Deny [Permalink for this section](https://adk.mo.ai.kr/en/claude-code/sub-agents\#tool-allow-and-deny)

Use the `tools` field to explicitly specify which tools a subagent can use, or the `disallowedTools` field to block specific tools.

**Read-only agent example:**

```

---
name: analyzer
description: "Code analysis expert. Read-only."
tools: Read, Grep, Glob
---
```

**Can edit files but cannot execute commands example:**

```

---
name: editor
description: "Code editing expert. Does not execute commands."
tools: Read, Write, Edit, Grep, Glob
disallowedTools: Bash
---
```

### Permission Mode [Permalink for this section](https://adk.mo.ai.kr/en/claude-code/sub-agents\#permission-mode)

Control how the subagent handles permissions with the `permissionMode` field.

| Mode | Behavior | When to use |
| --- | --- | --- |
| `default` | Show standard permission prompts | General subagents |
| `acceptEdits` | Auto-approve file edits | Trusted editing tasks |
| `dontAsk` | Auto-deny permission prompts (allowed tools work) | Read-only analysis |
| `bypassPermissions` | Skip all permission checks | Fully trusted environment |
| `plan` | Read-only exploration mode | Codebase investigation |

`bypassPermissions` mode skips all permission checks and poses security risks. Use only in fully trusted environments. In most cases, `acceptEdits` or `default` modes are sufficient.

### Skill Preload [Permalink for this section](https://adk.mo.ai.kr/en/claude-code/sub-agents\#skill-preload)

Use the `skills` field to automatically load specific skills when the subagent starts.

```

---
name: api-builder
description: "API construction expert."
tools: Read, Write, Edit, Bash, Grep, Glob
skills: moai-lang-typescript, moai-domain-backend
---
```

Skills are not inherited from the parent conversation. Skills needed in the subagent must be explicitly specified in the `skills` field. This is different from the skill’s `context: fork` setting; the `skills` field means skill loading at the subagent level.

## Execution Modes [Permalink for this section](https://adk.mo.ai.kr/en/claude-code/sub-agents\#execution-modes)

### Foreground vs Background [Permalink for this section](https://adk.mo.ai.kr/en/claude-code/sub-agents\#foreground-vs-background)

Subagents run in two ways.

**Foreground execution** (default):

- Main conversation waits for subagent completion
- Permission prompts go directly to user
- Results immediately integrated into main conversation

**Background execution**:

- Main conversation continues
- Allowed tool permissions are auto-approved
- Disallowed tool permissions are auto-denied
- Notification on completion
- Convert foreground subagent to background with `Ctrl+B`

Background subagents may have limitations using MCP tools. Subagents requiring MCP tools should run in foreground for safety.

### Automatic Delegation [Permalink for this section](https://adk.mo.ai.kr/en/claude-code/sub-agents\#automatic-delegation)

Claude decides whether to automatically delegate to subagents based on:

- Whether user request matches the subagent’s `description`
- Whether `description` includes expressions like “use PROACTIVELY” or “MUST BE USED”
- Current context and available tools

You can also explicitly request a specific subagent:

- “Review recent changes with the code-reviewer subagent”
- “Investigate this error with the debugger subagent”

**Important limitation: Subagents cannot create other subagents.** This is a fundamental design principle to prevent infinite recursion. All delegation happens only from the main conversation.

## Common Patterns [Permalink for this section](https://adk.mo.ai.kr/en/claude-code/sub-agents\#common-patterns)

### Large Task Isolation [Permalink for this section](https://adk.mo.ai.kr/en/claude-code/sub-agents\#large-task-isolation)

Isolate tasks that analyze dozens of files or process large logs to subagents to protect the main conversation’s context.

“Analyze test run results and identify causes of failed tests”

In this case, the subagent reads and analyzes all test logs, but only key findings are delivered to the main conversation.

### Parallel Research [Permalink for this section](https://adk.mo.ai.kr/en/claude-code/sub-agents\#parallel-research)

Run multiple subagents simultaneously to perform independent investigations in parallel.

“While analyzing backend API structure, also investigate frontend component dependencies”

Two subagents analyze their respective areas simultaneously, then results are integrated into the main conversation.

### Subagent Chaining [Permalink for this section](https://adk.mo.ai.kr/en/claude-code/sub-agents\#subagent-chaining)

Chain subagents sequentially to create complex workflows.

“First use the code-analyzer subagent to find performance issues, then use the optimizer subagent to resolve them”

The first subagent’s results are passed as input to the second subagent.

## Subagent vs Main Conversation [Permalink for this section](https://adk.mo.ai.kr/en/claude-code/sub-agents\#subagent-vs-main-conversation)

| Criterion | Main conversation | Subagent |
| --- | --- | --- |
| **Context** | Share entire conversation | Independent context |
| **User interaction** | Free conversation possible | Cannot communicate directly with user |
| **Suitable tasks** | Frequent feedback, quick fixes | Large analysis, parallel processing |
| **Cost** | Use main model | Can choose lightweight model |
| **Tool access** | All tools | Can be restricted |
| **Result** | Directly integrated into conversation | Return only summary |

Decision criterion: “Does this task read many files or generate long output?” If yes, subagent is suitable. “Is frequent user communication needed?” If yes, main conversation is suitable.

## Context Management [Permalink for this section](https://adk.mo.ai.kr/en/claude-code/sub-agents\#context-management)

### Resuming [Permalink for this section](https://adk.mo.ai.kr/en/claude-code/sub-agents\#resuming)

Each subagent execution is assigned a unique `agentId`. Use this ID to continue working with the subagent’s context intact.

```

"Resume agent abc123 and now analyze the authorization logic"
```

This is useful for long-running investigation tasks, iterative improvement work, or multi-step workflows spanning multiple sessions.

### Auto Compaction [Permalink for this section](https://adk.mo.ai.kr/en/claude-code/sub-agents\#auto-compaction)

When a subagent’s context reaches approximately 95% capacity, auto-compaction is performed. Compaction summarizes previous conversation content to make room for new context.

### Transcript Storage [Permalink for this section](https://adk.mo.ai.kr/en/claude-code/sub-agents\#transcript-storage)

Subagent execution history is automatically saved at:

```

~/.claude/projects/{projectpath}/{sessionID}/subagents/
```

This allows you to later verify what work a subagent performed.

## Hooks Configuration [Permalink for this section](https://adk.mo.ai.kr/en/claude-code/sub-agents\#hooks-configuration)

### Frontmatter Hooks [Permalink for this section](https://adk.mo.ai.kr/en/claude-code/sub-agents\#frontmatter-hooks)

Define hooks that apply only to that agent in the subagent file’s frontmatter. Supported events are `PreToolUse`, `PostToolUse`, `Stop`.

```

---
name: safe-editor
description: "Safe code editing expert."
tools: Read, Edit, Bash, Grep, Glob
hooks:
  PreToolUse:
    - matcher: "Edit"
      hooks:
        - type: command
          command: "./scripts/pre-edit-check.sh"
  PostToolUse:
    - matcher: "Edit|Write"
      hooks:
        - type: command
          command: "./scripts/run-linter.sh"
          timeout: 45
---
```

- `matcher`: Regex pattern for tool names (e.g., `"Edit"`, `"Write|Edit"`, `"Bash"`)
- `type`: Specify `"command"` (shell command) or `"prompt"` (LLM prompt)
- `command`: Shell command to execute
- `timeout`: Timeout in seconds (default 60)

The `once` field is not supported in agent frontmatter hooks. For one-time execution, use skill hooks.

### settings.json Hooks [Permalink for this section](https://adk.mo.ai.kr/en/claude-code/sub-agents\#settingsjson-hooks)

Define hooks in `settings.json` that run at subagent start and end times.

- **SubagentStart**: Runs when subagent starts
- **SubagentStop**: Runs when subagent ends

Set `matcher` on these hooks to apply only to specific named subagents.

## Example Subagents [Permalink for this section](https://adk.mo.ai.kr/en/claude-code/sub-agents\#example-subagents)

### Code Reviewer [Permalink for this section](https://adk.mo.ai.kr/en/claude-code/sub-agents\#code-reviewer)

Read-only subagent that reviews quality and security after code changes.

```

---
name: code-reviewer
description: "Expert reviewing quality, security, and maintainability after code changes. PROACTIVELY use after code modifications."
tools: Read, Grep, Glob, Bash
model: inherit
---

You are a senior code reviewer.

When called:
1. Check recent changes with git diff
2. Focus analysis on changed files
3. Start review immediately

Review checklist:
- Code is concise and readable
- Function and variable names are appropriate
- No duplicate code
- Error handling is appropriate
- No exposed API keys or secrets
- Input validation implemented
- Test coverage is sufficient
- No performance issues
```

### Debugger [Permalink for this section](https://adk.mo.ai.kr/en/claude-code/sub-agents\#debugger)

Subagent specialized in error analysis and problem resolution. Includes file editing permissions.

```

---
name: debugger
description: "Debugging expert investigating errors, test failures, and unexpected behavior. PROACTIVELY use when problems occur."
tools: Read, Edit, Bash, Grep, Glob
---

You are a debugger expert in root cause analysis.

Debugging process:
- Analyze error messages and logs
- Check recent code changes
- Formulate and verify hypotheses
- Add strategic debug logging
- Inspect variable state

Provide for each issue:
- Root cause explanation
- Evidence supporting diagnosis
- Specific code fix
- Testing method
- Prevention recommendations
```

### Data Scientist [Permalink for this section](https://adk.mo.ai.kr/en/claude-code/sub-agents\#data-scientist)

Subagent specialized in SQL queries and data analysis. Explicitly specifies Sonnet model.

```

---
name: data-scientist
description: "SQL query and data analysis expert. PROACTIVELY use for data analysis tasks."
tools: Bash, Read, Write
model: sonnet
---

You are a data scientist expert in SQL and BigQuery analysis.

Key principles:
- Write optimized SQL queries with appropriate filters
- Use appropriate aggregate functions and joins
- Include comments for complex logic
- Format results for readability
- Provide data-driven recommendations
```

### DB Query Validator [Permalink for this section](https://adk.mo.ai.kr/en/claude-code/sub-agents\#db-query-validator)

Subagent that combines Bash tool with PreToolUse Hook to validate SQL queries before execution.

```

---
name: db-query-validator
description: "Expert that validates and safely executes database queries."
tools: Bash, Read
hooks:
  PreToolUse:
    - matcher: "Bash"
      hooks:
        - type: command
          command: "./scripts/validate-sql.sh"
          timeout: 10
---

You are a database query validation expert.

Before all SQL query executions:
- Allow only SELECT statements (block INSERT, UPDATE, DELETE)
- Require LIMIT clause
- Validate table names
- Check query execution plan
```

## Disabling Subagents [Permalink for this section](https://adk.mo.ai.kr/en/claude-code/sub-agents\#disabling-subagents)

To disable a specific subagent, add it to the `deny` list in `settings.json`.

```

{
  "permissions": {
    "deny": ["Task(Explore)", "Task(my-agent)"]
  }
}
```

Or disable via CLI:

```

claude --disallowedTools "Task(Explore)"
```

## Troubleshooting [Permalink for this section](https://adk.mo.ai.kr/en/claude-code/sub-agents\#troubleshooting)

**Cannot find subagent:**

- Verify file is in correct location (`.claude/agents/` or `~/.claude/agents/`)
- Verify `name` field consists only of lowercase letters and hyphens
- Verify YAML frontmatter syntax is correct

**Subagent not automatically invoked:**

- Add “PROACTIVELY” or “MUST BE USED” expressions to `description`
- Check that user request keywords match description keywords

**Permission errors occur:**

- Verify `tools` field includes all necessary tools
- Verify `permissionMode` is appropriate for the task
- Verify necessary tools aren’t in `disallowedTools`

**Context overflow occurs:**

- Reduce amount of data passed (recommend: 20K-50K tokens)
- Replace large datasets with file references
- Auto-compaction works, but passing appropriate context from the start is better

**Subagent tries to call another subagent:**

- This is impossible by design. Subagents cannot create other subagents
- For complex workflows, use chaining patterns in the main conversation

## Related Documents [Permalink for this section](https://adk.mo.ai.kr/en/claude-code/sub-agents\#related-documents)

- [Extensions](https://adk.mo.ai.kr/claude-code/extensions) \- Complete extensions overview including skills, MCP, hooks
- [Settings](https://adk.mo.ai.kr/claude-code/settings) \- settings.json configuration and permission management
- [Memory management](https://adk.mo.ai.kr/claude-code/memory) \- CLAUDE.md and context management
- [Best practices](https://adk.mo.ai.kr/claude-code/best-practices) \- Tips for effective Claude Code usage
- [Troubleshooting](https://adk.mo.ai.kr/claude-code/troubleshooting) \- Common problems and solutions

When creating subagents for the first time, start with a simple read-only agent. After understanding how it works, gradually add tools and permissions for safe subagent utilization.

Last updated onFebruary 12, 2026

[Skills](https://adk.mo.ai.kr/en/claude-code/skills "Skills") [CLI Reference](https://adk.mo.ai.kr/en/claude-code/cli-reference "CLI Reference")

* * *

* * *

# Extended Technical Reference

# Claude Code Sub-agents - Official Documentation Reference

Source: https://code.claude.com/docs/ko/sub-agents
Updated: 2026-01-06

## What are Sub-agents?

Sub-agents are specialized AI assistants that Claude Code can delegate tasks to. Each sub-agent has:

- A specific purpose and domain expertise
- Its own separate context window
- Configurable tools with granular access control
- A custom system prompt that guides behavior

When Claude encounters a task matching a sub-agent's specialty, it can delegate work to that specialized assistant while the main conversation remains focused on high-level goals.

## Key Benefits

Context Preservation: Each sub-agent operates in isolation, preventing main conversation pollution

Specialized Expertise: Fine-tuned with detailed domain instructions for higher success rates

Reusability: Created once, used across projects and shareable with teams

Flexible Permissions: Each can have different tool access levels for security

## Creating Sub-agents

### Quick Start Using /agents Command (Recommended)

Step 1: Open the agents interface by typing /agents

Step 2: Select "Create New Agent" (project or user level)

Step 3: Define the sub-agent:
- Describe its purpose and when to use it
- Select tools (or leave blank to inherit all)
- Press `e` to edit the system prompt in your editor
- Recommended: Have Claude generate it first, then customize

### Direct File Creation

Create markdown files with YAML frontmatter in the appropriate location:

Project Sub-agents: .claude/agents/agent-name.md
Personal Sub-agents: ~/.claude/agents/agent-name.md

## Configuration

### File Format

```yaml
---
name: your-sub-agent-name
description: Description of when this subagent should be invoked
tools: tool1, tool2, tool3
model: sonnet
---

Your subagent's system prompt goes here. This can be multiple paragraphs
and should clearly define the subagent's role, capabilities, and approach
to solving problems.
```

### Configuration Fields

Required Fields:

- name: Unique identifier using lowercase letters and hyphens

- description: Natural language explanation of purpose. Include phrases like "use PROACTIVELY" or "MUST BE USED" to encourage automatic invocation.

Optional Fields:

- tools: Comma-separated tool list. If omitted, inherits all available tools.

- model: Model alias (sonnet, opus, haiku) or 'inherit' to use same model as main conversation. If omitted, uses configured default (usually sonnet).

- permissionMode: Controls permission handling. Valid values: `default`, `acceptEdits`, `dontAsk`, `bypassPermissions`, `plan`, `ignore`.

- skills: Comma-separated list of skill names to auto-load when agent is invoked. Skills are NOT inherited from parent.

- hooks: Define lifecycle hooks scoped to this agent. Supports PreToolUse, PostToolUse, Stop events. Note: `once` field is NOT supported in agent hooks.

### Hooks Configuration (2026-01)

Agents can define hooks in their frontmatter that only run when the agent is active:

```yaml
---
name: code-reviewer
description: Review code changes with quality checks
tools: Read, Grep, Glob, Bash
model: inherit
hooks:
  PreToolUse:
    - matcher: "Edit"
      hooks:
        - type: command
          command: "./scripts/pre-edit-check.sh"
  PostToolUse:
    - matcher: "Edit|Write"
      hooks:
        - type: command
          command: "./scripts/run-linter.sh"
          timeout: 45
---
```

Hook Fields:
- matcher: Regex pattern to match tool names (e.g., "Edit", "Write|Edit", "Bash")
- hooks: Array of hook definitions
  - type: "command" (shell) or "prompt" (LLM)
  - command: Shell command to execute
  - timeout: Timeout in seconds (default: 60)

IMPORTANT: The `once` field is NOT supported in agent hooks. Use skill hooks if you need one-time execution.

### Storage Locations and Priority

Sub-agents are stored as markdown files with YAML frontmatter:

1. Project Level: .claude/agents/ (highest priority)
2. User Level: ~/.claude/agents/ (lower priority)

Project-level definitions take precedence over user-level definitions with the same name.

## Using Sub-agents

### Automatic Delegation

Claude proactively delegates tasks based on:

- Request description matching sub-agent descriptions
- Sub-agent's description field content
- Current context and available tools

Tip: Include phrases like "use PROACTIVELY" or "MUST BE USED" in descriptions to encourage automatic invocation.

### Explicit Invocation

Request specific sub-agents directly:

- "Use the code-reviewer subagent to check my recent changes"
- "Have the debugger subagent investigate this error"

### Sub-agent Chaining

Chain multiple sub-agents for complex workflows:

"First use the code-analyzer subagent to find performance issues, then use the optimizer subagent to fix them"

## Model Selection

Available model options:

- sonnet: Balanced performance and quality (default)
- opus: Highest quality, higher cost
- haiku: Fastest, most cost-effective
- inherit: Use same model as main conversation

If model field is omitted, uses the configured default (usually sonnet).

## Built-in Sub-agents

### Plan Sub-agent

Purpose: Used during plan mode to research codebases
Model: Sonnet (for stronger analysis)
Tools: Read, Glob, Grep, Bash
Auto-invoked: When in plan mode and codebase investigation is needed
Behavior: Prevents infinite nesting of sub-agents while enabling context gathering

## Resumable Agents

Each sub-agent execution gets a unique agentId. Conversations are stored in agent-{agentId}.jsonl format. You can resume previous agent context with full context preserved:

"Resume agent abc123 and now analyze the authorization logic"

Use Cases for Resumable Agents:

- Long-running research tasks
- Iterative improvements
- Multi-step workflows spanning multiple sessions

## CLI-based Configuration

Define sub-agents dynamically via --agents flag:

```bash
claude --agents '{
  "code-reviewer": {
    "description": "Expert code reviewer. Use proactively after code changes.",
    "prompt": "You are a senior code reviewer. Focus on code quality, security, and best practices.",
    "tools": ["Read", "Grep", "Glob", "Bash"],
    "model": "sonnet"
  }
}'
```

Priority Order: CLI definitions have lowest priority, followed by User-level, then Project-level (highest).

## Managing Sub-agents with /agents Command

The /agents command provides an interactive menu to:

- View all available sub-agents (built-in, user, project)
- Create new sub-agents with guided setup
- Edit existing custom sub-agents and tool access
- Delete custom sub-agents
- Manage tool permissions with full available tools list

## Practical Examples

### Code Reviewer

```yaml
---
name: code-reviewer
description: Expert code review specialist. Proactively reviews code for quality, security, and maintainability. Use immediately after writing or modifying code.
tools: Read, Grep, Glob, Bash
model: inherit
---

You are a senior code reviewer ensuring high standards of code quality and security.

When invoked:
1. Run git diff to see recent changes
2. Focus on modified files
3. Begin review immediately

Review checklist:
- Code is simple and readable
- Functions and variables are well-named
- No duplicated code
- Proper error handling
- No exposed secrets or API keys
- Input validation implemented
- Good test coverage
- Performance considerations adddessed
```

### Debugger

```yaml
---
name: debugger
description: Debugging specialist for errors, test failures, and unexpected behavior. Use proactively when encountering any issues.
tools: Read, Edit, Bash, Grep, Glob
---

You are an expert debugger specializing in root cause analysis.

Debugging process:
- Analyze error messages and logs
- Check recent code changes
- Form and test hypotheses
- Add strategic debug logging
- Inspect variable states

For each issue, provide:
- Root cause explanation
- Evidence supporting the diagnosis
- Specific code fix
- Testing approach
- Prevention recommendations
```

### Data Scientist

```yaml
---
name: data-scientist
description: Data analysis expert for SQL queries and data insights. Use proactively for data analysis tasks.
tools: Bash, Read, Write
model: sonnet
---

You are a data scientist specializing in SQL and BigQuery analysis.

Key practices:
- Write optimized SQL queries with proper filters
- Use appropriate aggregations and joins
- Include comments explaining complex logic
- Format results for readability
- Provide data-driven recommendations
```

## Integration Patterns

### Sequential Delegation

Execute tasks in order, passing results between agents:

Phase 1 Analysis: Invoke spec-builder subagent to analyze requirements
Phase 2 Implementation: Invoke backend-expert subagent with analysis results
Phase 3 Validation: Invoke quality-gate subagent to validate implementation

### Parallel Delegation

Execute independent tasks simultaneously:

Invoke backend-expert, frontend-expert, and test-engineer subagents in parallel for independent implementation tasks

### Conditional Delegation

Route based on analysis results:

Based on analysis findings, route to database-expert for database issues or backend-expert for API issues

## Context Management

### Efficient Data Passing

- Pass only essential information between agents
- Use structured data formats for complex information
- Minimize context size for performance optimization
- Include validation metadata when appropriate

### Context Size Guidelines

- Each Task() creates independent context window
- Each sub-agent operates in its own 200K token session
- Recommended context size: 20K-50K tokens maximum for passed data
- Large datasets should be referenced rather than embedded

## Tool Permissions

Security Principle: Apply least privilege by only granting tools necessary for the agent's domain.

Common Tool Categories:

Read Tools: Read, Grep, Glob (file system access)
Write Tools: Write, Edit, MultiEdit (file modification)
System Tools: Bash (command execution)
Communication Tools: AskUserQuestion, WebFetch (interaction)

Available tools include Claude Code's internal tool set plus any connected MCP server tools.

## Critical Limitations

Sub-agents Cannot Spawn Other Sub-agents: This is a fundamental limitation to prevent infinite recursion. All delegation must flow from the main conversation or command.

Sub-agents Cannot Use AskUserQuestion Effectively: Sub-agents operate in isolated, stateless contexts and cannot interact with users directly. All user interaction must happen in the main conversation before delegating to sub-agents.

Required Pattern: All sub-agent delegation must use the Task() function.

## Best Practices

### 1. Start with Claude

Have Claude generate initial sub-agents, then customize based on your needs.

### 2. Single Responsibility

Design focused sub-agents with clear, single purposes. Each agent should excel at one domain.

### 3. Detailed Prompts

Include specific instructions, examples, and constraints in the system prompt.

### 4. Limit Tool Access

Grant only necessary tools for the sub-agent's role following least privilege principle.

### 5. Version Control

Check in project sub-agents to enable team collaboration through git.

### 6. Clear Descriptions

Make description specific and action-oriented. Include trigger scenarios.

## Testing and Validation

Test Categories:

1. Functionality Testing: Agent performs expected tasks correctly
2. Integration Testing: Agent works properly with other agents
3. Security Testing: Agent respects security boundaries
4. Performance Testing: Agent operates efficiently within token limits

Validation Steps:

1. Test agent behavior with various inputs
2. Verify tool usage respects permissions
3. Validate error handling and recovery
4. Check integration with other agents or skills

## Error Handling

Common Error Types:

- Agent Not Found: Incorrect agent name or file not found
- Permission Denied: Insufficient tool permissions
- Context Overflow: Too much context passed between agents
- Infinite Recursion Attempt: Agent tries to spawn another sub-agent

Recovery Strategies:

- Fallback to basic functionality
- User notification with clear error messages
- Graceful degradation of complex features
- Context optimization for retry attempts

## Security Considerations

Access Control:

- Apply principle of least privilege
- Validate all external inputs
- Restrict file system access where appropriate
- Audit tool usage regularly

Data Protection:

- Never pass sensitive credentials between agents
- Sanitize inputs before processing
- Use secure communication channels
- Log agent activities appropriately
