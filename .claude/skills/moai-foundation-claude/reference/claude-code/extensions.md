[Skip to Content](https://adk.mo.ai.kr/en/claude-code/extensions#nextra-skip-nav)

[Claude Code](https://adk.mo.ai.kr/en/claude-code "Claude Code") Extensions

Copy page

# Extensions

Claude Code combines a model that reasons about code with built-in tools for file operations, search, execution, and web access. Built-in tools cover most coding tasks. This guide covers extension layers for customization, extending what Claude knows, connecting to external services, and automating workflows.

**New to Claude Code?** Start with project rules in CLAUDE.md. Add other extensions as needed.

## Overview [Permalink for this section](https://adk.mo.ai.kr/en/claude-code/extensions\#overview)

Extensions plug into different parts of the agent loop:

- **CLAUDE.md** adds persistent context that Claude sees in every session
- **Skills** add reusable knowledge and callable workflows that Claude can use
- **MCP** connects Claude to external services and tools
- **Subagents** run their own loop in isolated context, returning a summary
- **Hooks** run externally as deterministic scripts on events
- **Plugins** and **marketplaces** package and distribute these capabilities

Skills are the most flexible extension. A skill is a markdown file containing knowledge, a workflow, or instructions. It can be invoked with a slash command like `/deploy` or loaded automatically by Claude. Skills can run in the current conversation or in isolated context via a subagent.

## Match the Feature to Your Goal [Permalink for this section](https://adk.mo.ai.kr/en/claude-code/extensions\#match-the-feature-to-your-goal)

Features range from always-available to one-click execution. The table shows what’s available and when each is appropriate.

| Feature | Function | When to use | Example |
| --- | --- | --- | --- |
| **CLAUDE.md** | Persistent context loaded every conversation | Project rules, “always X” rules | ”Use pnpm, not npm. Run tests before committing” |
| **Skill** | Instructions, knowledge, and workflows Claude can use | Reusable content, reference docs, repeatable tasks | `/review` runs a code review checklist; API doc skill endpoint patterns |
| **Subagent** | Isolated execution context returning summary | Context isolation, parallel work, specialist workers | Investigation tasks that read many files but return only key findings |
| **MCP** | External service connections | External data or actions | Database queries, Slack posting, browser control |
| **Hook** | Deterministic scripts run on events | Predictable automation, no LLM | Run ESLint after every file edit |

**Plugins** are a packaging layer. A plugin bundles skills, hooks, subagents, and MCP servers into a single installable unit. Plugin skills are namespaced (e.g., `/my-plugin:review`) so multiple plugins can coexist. Use plugins to distribute across multiple repositories or to others, or to distribute via a **marketplace**.

### Compare Similar Features [Permalink for this section](https://adk.mo.ai.kr/en/claude-code/extensions\#compare-similar-features)

Some features may seem similar. Here’s how to think about the differences.

#### Skill vs Subagent [Permalink for this section](https://adk.mo.ai.kr/en/claude-code/extensions\#skill-vs-subagent)

Skills and subagents solve different problems:

- **Skills** are reusable instructions, knowledge, or workflows that can be loaded into context.
- **Subagents** are completely separate workers from the main conversation.

| Aspect | Skill | Subagent |
| --- | --- | --- |
| **What** | Reusable instructions, knowledge, workflows | Isolated worker |
| **Key benefit** | Share content across contexts | Context isolation. Work happens separately, returns only summary |
| **Best for** | Reference material, callable workflows | Tasks that read many files, parallel work, specialist workers |

**Skills can be reference or task.** A reference skill provides knowledge that Claude uses throughout a session (e.g., an API style guide). A task skill tells Claude to do something specific (e.g., run a deployment workflow `/deploy`).

**Use a subagent** when you need context isolation or when your context window is full. Subagents can read dozens of files or run extensive searches, but the main conversation only receives a summary. Subagent work doesn’t consume the main context. Custom subagents can have their own instructions and pre-loaded skills.

**You can combine them.** Subagents can pre-load specific skills (via the `skills:` field). Skills can run in isolated context using `context: fork`. See [Skills](https://adk.mo.ai.kr/claude-code/skills) for details.

#### CLAUDE.md vs Skills [Permalink for this section](https://adk.mo.ai.kr/en/claude-code/extensions\#claudemd-vs-skills)

Both store instructions but differ in how they load and their purpose:

| Aspect | CLAUDE.md | Skills |
| --- | --- | --- |
| **Load** | Every session, automatically | On demand |
| **Can include files** | Yes, via `@path` imports | Yes, via `@path` imports |
| **Can trigger workflow** | No | Yes, via `/<name>` |
| **Best for** | ”Always X” rules | Reference material, callable workflows |

**Put in CLAUDE.md**: Things Claude should always know—coding rules, build commands, project structure, “don’t do” rules

**Put in Skills**: Reference material Claude needs sometimes (API docs, style guides) or workflows triggered with `/<name>` (deploy, review, release)

**Rule of thumb**: Keep CLAUDE.md under ~500 lines. When it grows, move reference content into skills.

#### MCP vs Skills [Permalink for this section](https://adk.mo.ai.kr/en/claude-code/extensions\#mcp-vs-skills)

MCP connects Claude to external services. Skills extend what Claude knows, including how to effectively use external services.

| Aspect | MCP | Skills |
| --- | --- | --- |
| **What** | Protocol for external service connections | Knowledge, workflows, reference material |
| **Provides** | Tools and data access | Knowledge, workflows, reference material |
| **Example** | Slack integration, database queries, browser control | Code review checklist, deployment workflow, API style guide |

They solve different problems and work well together:

**MCP** gives Claude the ability to interact with external systems. Without MCP, Claude can’t query databases or post to Slack.

**Skills** teach Claude how to use those tools effectively and give it knowledge about your team’s data model, common query patterns, which tables to use for different tasks.

Example: An MCP server connects Claude to a database. A skill teaches Claude the data model, common query patterns, and which tables to use for various tasks.

## Understand How Features Combine [Permalink for this section](https://adk.mo.ai.kr/en/claude-code/extensions\#understand-how-features-combine)

Features can be defined at multiple levels. User-wide, per-project, via plugins, or through managed policies. You can also nest CLAUDE.md files in subdirectories or place skills in specific packages of a monorepo. When the same feature exists at multiple levels, they layer as follows:

- **CLAUDE.md files** are additive: content from all levels contributes simultaneously to Claude’s context. Files in the working directory and above are loaded at startup, files in subdirectories are only included when working with files in that subtree. When instructions conflict, Claude uses judgment to reconcile, with more specific instructions generally taking precedence. See [How Claude looks up memories](https://adk.mo.ai.kr/claude-code/memory).
- **Skills and Subagents** are overridden by name: when the same name exists at multiple levels, one definition wins based on priority (managed > user > project for skills; managed > CLI flag > project > user > plugin for subagents). Plugin skills are namespaced to avoid conflicts (e.g., `/my-plugin:review`). See [Skill discovery](https://adk.mo.ai.kr/claude-code/skills) and [Subagent scope](https://code.claude.com/docs/en/subagents#subagent-scope).
- **MCP servers** are overridden by name: local > project > user. See [MCP scope](https://code.claude.com/docs/en/mcp#mcp-scope).
- **Hooks** are merged: all registered hooks run regardless for matching events. See [Hooks](https://adk.mo.ai.kr/advanced/hooks-guide).

### Feature Combinations [Permalink for this section](https://adk.mo.ai.kr/en/claude-code/extensions\#feature-combinations)

Each extension solves a different problem. CLAUDE.md handles always-on context, skills handle on-demand knowledge and workflows, MCP handles external connections, subagents handle isolation, and hooks handle automation. Real setups combine things that handle each of these concerns.

For example, you might use CLAUDE.md for project rules, a skill for deployment workflows, MCP for database connections, and a hook to run lint after every edit.

| Pattern | How it works | Example |
| --- | --- | --- |
| **Skill + MCP** | MCP provides connection; skill teaches how to use it well | MCP connects to database; skill documents schema and query patterns |
| **Skill + Subagent** | Skill launches subagents for parallel work | `/review` skill launches security, performance, and style subagents |
| **CLAUDE.md + Skill** | CLAUDE.md for always-on rules; skill loads reference on demand | CLAUDE.md: “Follow API conventions”; skill: full API style guide |
| **Hook + MCP** | Hook triggers external action via MCP | Edit hook sends Slack notification (via MCP) |

## Understand Context Costs [Permalink for this section](https://adk.mo.ai.kr/en/claude-code/extensions\#understand-context-costs)

Every feature you add consumes a bit of Claude’s context. Too many can fill the context window and may add noise, making Claude less effective. Understanding these tradeoffs helps you build an effective setup.

### Context Cost by Feature [Permalink for this section](https://adk.mo.ai.kr/en/claude-code/extensions\#context-cost-by-feature)

Each feature has different loading strategies and context costs:

| Feature | When loaded | What loads | Context cost |
| --- | --- | --- | --- |
| **CLAUDE.md** | Session start | Full content | Every request |
| **Skills** | Session start + use | Description at start, full content when used | Low (description per request)\* |
| **MCP servers** | Session start | All tool definitions and JSON schemas | Every request |
| **Subagents** | Creation | Fresh context with specified skills | Isolated from main session |
| **Hooks** | When triggered | None by default (run externally) | 0, unless hook returns additional messages |

\*By default, skill descriptions are loaded at session start so Claude can decide when to use them. For manually invoked skills, you can set `disable-model-invocation: true` to hide descriptions until needed. This reduces the context cost to zero for skills only you invoke.

For details on how each available feature loads, see [Extensions overview](https://adk.mo.ai.kr/claude-code/extensions).

* * *

**Sources:**

- [Extend Claude Code](https://adk.mo.ai.kr/claude-code/extensions)

Last updated onFebruary 12, 2026

[Checkpointing](https://adk.mo.ai.kr/en/claude-code/checkpointing "Checkpointing") [Memory Management](https://adk.mo.ai.kr/en/claude-code/memory "Memory Management")

* * *

* * *

# Extended Technical Reference

# Claude Code Plugins - Official Documentation Reference

Source: https://code.claude.com/docs/en/plugins
Related: https://code.claude.com/docs/en/plugins-reference
Related: https://code.claude.com/docs/en/discover-plugins
Related: https://code.claude.com/docs/en/plugin-marketplaces
Updated: 2026-01-06

## What are Claude Code Plugins?

Plugins are reusable extensions that bundle Claude Code configurations for distribution across projects. Unlike standalone configurations in `.claude/` directories, plugins can be installed via marketplaces, shared across teams, and version-controlled independently.

## Plugin vs Standalone Configuration

Standalone Configuration (`.claude/` directory):

- Scope: Single project only
- Sharing: Manual copy or git submodules
- Updates: Manual synchronization
- Best for: Project-specific customizations

Plugin Configuration:

- Scope: Reusable across multiple projects
- Sharing: Installable via marketplaces or git URLs
- Updates: Automatic or manual via plugin manager
- Best for: Team standards, reusable workflows, community tools

## Plugin Directory Structure

A plugin is a directory with the following structure:

```
my-plugin/
- .claude-plugin/
  - plugin.json (ONLY file in this directory)
- commands/ (slash commands, markdown files)
- agents/ (custom sub-agents, markdown files)
- skills/ (agent skills with SKILL.md)
- hooks/
  - hooks.json (hook definitions)
- .mcp.json (MCP server configurations)
- .lsp.json (LSP server configurations)
```

Critical Rule: Only plugin.json belongs in the .claude-plugin/ directory. All other components are at the plugin root level.

## Plugin Manifest (plugin.json)

The plugin manifest defines metadata and component locations.

### Required Fields

- name: Unique identifier in kebab-case format

### Recommended Fields

- description: Shown in plugin manager and marketplaces
- version: Semantic versioning (MAJOR.MINOR.PATCH)
- author: Object with name field, optionally email and url
- homepage: URL to plugin documentation or landing page
- repository: Git URL for source code
- license: SPDX license identifier

### Optional Path Overrides

- commands: Path to commands directory (default: commands/)
- agents: Path to agents directory (default: agents/)
- skills: Path to skills directory (default: skills/)
- hooks: Path to hooks configuration
- mcpServers: Path to MCP server configuration
- lspServers: Path to LSP server configuration
- outputStyles: Path to output styles directory

### Discovery Keywords

- keywords: Array of discovery tags for finding plugins in marketplaces

Example:

```json
{
  "keywords": ["deployment", "ci-cd", "automation", "devops"]
}
```

Keywords help users discover plugins through search. Use relevant, descriptive terms that reflect the plugin's functionality and domain.

### Example Plugin Manifest

```json
{
  "name": "my-team-plugin",
  "description": "Team development standards and workflows",
  "version": "1.0.0",
  "author": {
    "name": "Development Team"
  },
  "homepage": "https://github.com/org/my-team-plugin",
  "repository": "https://github.com/org/my-team-plugin.git",
  "license": "MIT",
  "keywords": ["team-standards", "workflow", "development"]
}
```

## Plugin Components

### Commands

Slash commands are markdown files in the commands/ directory:

```
commands/
- review.md (becomes /my-plugin:review)
- deploy/
  - staging.md (becomes /my-plugin:deploy/staging)
  - production.md (becomes /my-plugin:deploy/production)
```

Plugin commands use the namespace prefix pattern: /plugin-name:command-name

Command File Structure:

```markdown
---
description: Command description for discovery
---

Command instructions and prompt content.

Arguments: $ARGUMENTS (all), $1, $2 (positional)
File references: @path/to/file.md
```

Frontmatter Fields:

- description (required): Command purpose for help display

Argument Handling:

- `$ARGUMENTS` - All arguments as single string
- `$1`, `$2`, `$3` - Individual positional arguments
- `@file.md` - File content injection

### Agents

Custom sub-agents with markdown definitions:

```
agents/
- code-reviewer.md
- security-analyst.md
```

Agent File Structure:

```markdown
---
name: my-agent
description: Agent purpose and capabilities
tools: Read, Write, Edit, Grep, Glob, Bash
model: sonnet
permissionMode: default
skills:
  - skill-name-one
  - skill-name-two
---

Agent system prompt and instructions.
```

Frontmatter Fields:

- name (required): Agent identifier
- description: Agent purpose
- tools: Comma-separated tool list
- model: sonnet, opus, haiku, inherit
- permissionMode: default, bypassPermissions, plan, passthrough
- skills: Array of skill names to load

Available Tools:

- Read, Write, Edit - File operations
- Grep, Glob - Search operations
- Bash - Command execution
- WebFetch, WebSearch - Web access
- Task - Sub-agent delegation
- TodoWrite - Task management

### Skills

Agent skills following the standard SKILL.md structure:

```
skills/
- my-skill/
  - SKILL.md
  - reference.md
  - examples.md
```

### Hooks

Hook definitions in hooks/hooks.json:

```json
{
  "hooks": {
    "PreToolUse": [
      {
        "matcher": "Write",
        "hooks": [
          {
            "type": "command",
            "command": "${CLAUDE_PLUGIN_ROOT}/scripts/validate.sh"
          }
        ]
      }
    ]
  }
}
```

Use ${CLAUDE_PLUGIN_ROOT} for absolute paths within the plugin.

Available Hook Events:

- PreToolUse, PostToolUse, PostToolUseFailure - Tool execution lifecycle
- PermissionRequest, UserPromptSubmit, Notification, Stop - User interaction
- SubagentStart, SubagentStop - Sub-agent lifecycle
- SessionStart, SessionEnd, PreCompact - Session lifecycle

Hook Types:

- command: Execute bash command
- prompt: Send prompt to LLM
- agent: Invoke custom agent

Matcher Patterns: Exact name ("Write"), wildcard ("\*"), tool-specific filtering

### MCP Servers

MCP server configurations in .mcp.json:

```json
{
  "mcpServers": {
    "my-server": {
      "command": "${CLAUDE_PLUGIN_ROOT}/mcp-server/run.sh",
      "args": ["--config", "${CLAUDE_PLUGIN_ROOT}/config.json"]
    }
  }
}
```

### LSP Servers

Language server configurations in .lsp.json for code intelligence features.

LSP Server Structure:

```json
{
  "lspServers": {
    "python": {
      "command": "pylsp",
      "args": [],
      "extensionToLanguage": {
        ".py": "python",
        ".pyi": "python"
      },
      "env": {
        "PYTHONPATH": "${CLAUDE_PROJECT_DIR}"
      }
    }
  }
}
```

Required Fields:

- command: LSP server executable
- extensionToLanguage: File extension to language mapping

Optional Fields: args, env, transport, initializationOptions, settings, workspaceFolder, startupTimeout, shutdownTimeout, restartOnCrash, maxRestarts, loggingConfig

## Installation Scopes

Plugins can be installed at different scopes:

### User Scope (default)

- Location: ~/.claude/plugins/
- Availability: All projects for current user
- Use case: Personal productivity tools

### Project Scope

- Location: .claude/settings.json (reference only, not copied)
- Availability: Current project only
- Version controlled: Yes, shareable via git
- Use case: Project-specific requirements

### Local Scope

- Location: Interactive selection via /plugin command
- Availability: Current session only
- Version controlled: No
- Use case: Testing and evaluation

### Managed Scope

- Location: Enterprise configuration
- Availability: Enforced across organization
- Use case: Compliance and security requirements

## Official Anthropic Marketplace

Anthropic maintains an official plugin marketplace with curated, verified plugins.

Marketplace Name: claude-plugins-official

Availability: Automatically available in Claude Code without additional configuration.

Installation Syntax:
/plugin install plugin-name@claude-plugins-official

The official marketplace contains plugins that have been reviewed for quality and security. For a complete catalog of available plugins, see the discover-plugins reference documentation.

## Interactive Plugin Manager

Access the interactive plugin manager using the /plugin command.

The plugin manager provides four navigation tabs:

- Discover: Browse and search available plugins from configured marketplaces
- Installed: View and manage currently installed plugins
- Marketplaces: Configure and manage plugin marketplace sources
- Errors: View and troubleshoot plugin-related errors

Navigation Controls:

- Tab key: Cycle forward through tabs
- Shift+Tab: Cycle backward through tabs
- Arrow keys: Navigate within tab content
- Enter: Select or confirm action

## Plugin Management Commands

### Installation

Install from marketplace:
/plugin install plugin-name

Install from official Anthropic marketplace:
/plugin install plugin-name@claude-plugins-official

Install from GitHub:
/plugin install owner/repo

Install from git URL:
/plugin install https://github.com/owner/repo.git

Install with scope:
/plugin install plugin-name --scope project

### Other Commands

Uninstall: /plugin uninstall plugin-name
Enable: /plugin enable plugin-name
Disable: /plugin disable plugin-name
Update: /plugin update plugin-name
Update all: /plugin update
List installed: /plugin list
Validate: /plugin validate . (in plugin directory)

## Reserved Names

The following name patterns are reserved and cannot be used:

- claude-code-\*
- anthropic-\*
- official-\*

## Environment Variables in Plugins

Use these variables for path resolution:

- ${CLAUDE_PLUGIN_ROOT}: Absolute path to plugin installation directory

Example usage:

```json
{
  "command": "${CLAUDE_PLUGIN_ROOT}/scripts/my-script.sh"
}
```

## Plugin Caching Behavior

When a plugin is installed:

1. Plugin files are copied to the cache directory
2. Symlinks within the plugin are honored
3. Path traversal (../) does not work post-installation
4. Updates require re-installation or /plugin update command

## Creating a Plugin

### Step 1: Create Directory Structure

Create the plugin directory with required structure:

```
mkdir -p my-plugin/.claude-plugin
mkdir -p my-plugin/commands
mkdir -p my-plugin/agents
mkdir -p my-plugin/skills
mkdir -p my-plugin/hooks
```

### Step 2: Create Plugin Manifest

Create .claude-plugin/plugin.json with required metadata.

### Step 3: Add Components

Add commands, agents, skills, hooks, or server configurations as needed.

### Step 4: Validate

Run validation in the plugin directory:
/plugin validate .

Or via CLI:
claude plugin validate .

### Step 5: Test Locally

Install from local path for testing:
/plugin install /path/to/my-plugin

### Step 6: Distribute

Push to git repository and share via:

- GitHub repository URL
- Custom marketplace
- Direct git URL

## Plugin Distribution

### Via GitHub

1. Create a GitHub repository for the plugin
2. Ensure .claude-plugin/plugin.json exists at root
3. Share the repository URL: owner/repo

### Via Custom Marketplace

1. Create marketplace.json in .claude-plugin/ directory
2. List plugins with relative paths or git URLs
3. Add marketplace to team settings

### Via Direct Git URL

Share the full git URL including protocol:

- HTTPS: https://github.com/owner/repo.git
- SSH: git@github.com:owner/repo.git

## Best Practices

### Naming

- Use descriptive, unique names
- Follow kebab-case convention
- Avoid reserved prefixes

### Versioning

- Use semantic versioning
- Update version on each release
- Document changes in CHANGELOG

### Documentation

- Include comprehensive README
- Document all commands and their purposes
- Provide usage examples

### Security

- Review all scripts before distribution
- Avoid hardcoded credentials
- Use environment variables for sensitive data
- Document required permissions

### Testing

- Test on fresh installations
- Verify all components load correctly
- Test across different operating systems
- Validate plugin structure before publishing

## Troubleshooting

### Plugin Not Loading

Check plugin.json is valid JSON
Verify plugin is enabled: /plugin list
Check for naming conflicts

### Commands Not Appearing

Verify commands/ directory exists
Check markdown files have correct format
Ensure plugin is enabled

### Hooks Not Executing

Verify hooks.json syntax
Check script permissions
Use ${CLAUDE_PLUGIN_ROOT} for absolute paths

### MCP Servers Not Connecting

Verify .mcp.json syntax
Check server command exists
Review server logs for errors

## Development Workflow

### Local Development

```bash
# Test single plugin
claude --plugin-dir ./my-plugin

# Test multiple plugins
claude --plugin-dir ./plugin-one --plugin-dir ./plugin-two
```

### Testing Components

- Commands: `/plugin-name:command-name` invocation
- Agents: `/agents` to list, then invoke by name
- Skills: Ask questions relevant to skill domain
- Hooks: Trigger events and check debug logs

### Debugging

```bash
# Enable debug mode
claude --debug

# Validate plugin structure
claude plugin validate

# View plugin errors
/plugin errors
```

## Creating Custom Marketplaces

### marketplace.json Structure

```json
{
  "name": "my-marketplace",
  "owner": {
    "name": "Organization Name",
    "email": "contact@example.com"
  },
  "metadata": {
    "description": "Custom plugins for our team",
    "version": "1.0.0",
    "pluginRoot": "./plugins"
  },
  "plugins": [
    {
      "name": "my-plugin",
      "source": "./plugins/my-plugin",
      "description": "Plugin description",
      "version": "1.0.0",
      "category": "development",
      "keywords": ["automation", "workflow"]
    }
  ]
}
```

### Required Fields

- name: Marketplace identifier in kebab-case
- owner: Object with name (required) and email (optional)
- plugins: Array of plugin entries

### Plugin Source Types

- Relative paths: `"source": "./plugins/my-plugin"`
- GitHub: `{"source": "github", "repo": "owner/repo"}`
- Git URL: `{"source": "url", "url": "https://gitlab.com/org/plugin.git"}`

### Reserved Marketplace Names

Cannot be used:

- claude-code-marketplace, claude-code-plugins, claude-plugins-official
- anthropic-marketplace, anthropic-plugins
- agent-skills, life-sciences

### Marketplace Hosting Options

- GitHub repository (recommended): Users add via `/plugin marketplace add owner/repo`
- Other Git services: Full URL with `/plugin marketplace add https://...`
- Local testing: `/plugin marketplace add ./path/to/marketplace`

## Security Best Practices

### Path Security

- Always use `${CLAUDE_PLUGIN_ROOT}` for plugin-relative paths
- Never hardcode absolute paths
- Validate all inputs in hook scripts
- Prevent path traversal attacks

### Permission Guidelines

- Apply least privilege for tool access
- Limit agent permissions to required operations
- Validate hook command inputs
- Sanitize environment variables

## Related Reference Files

For comprehensive plugin ecosystem documentation, see:

- claude-code-discover-plugins-official.md - Plugin discovery and installation guide
- claude-code-plugin-marketplaces-official.md - Creating and hosting custom marketplaces
