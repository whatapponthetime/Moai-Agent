
---
title: "Extensions"
description: "Understand when to use CLAUDE.md, Skills, Subagents, Hooks, MCP, and Plugins."
---

# Extensions

Claude Code combines a model that reasons about code with built-in tools for file operations, search, execution, and web access. Built-in tools cover most coding tasks. This guide covers extension layers for customization, extending what Claude knows, connecting to external services, and automating workflows.

**New to Claude Code?** Start with project rules in CLAUDE.md. Add other extensions as needed.

## Overview

Extensions plug into different parts of the agent loop:

- **CLAUDE.md** adds persistent context that Claude sees in every session
- **Skills** add reusable knowledge and callable workflows that Claude can use
- **MCP** connects Claude to external services and tools
- **Subagents** run their own loop in isolated context, returning a summary
- **Hooks** run externally as deterministic scripts on events
- **Plugins** and **marketplaces** package and distribute these capabilities

Skills are the most flexible extension. A skill is a markdown file containing knowledge, a workflow, or instructions. It can be invoked with a slash command like `/deploy` or loaded automatically by Claude. Skills can run in the current conversation or in isolated context via a subagent.

## Match the Feature to Your Goal

Features range from always-available to one-click execution. The table shows what's available and when each is appropriate.

| Feature | Function | When to use | Example |
|------|----------|-------------|--------|
| **CLAUDE.md** | Persistent context loaded every conversation | Project rules, "always X" rules | "Use pnpm, not npm. Run tests before committing" |
| **Skill** | Instructions, knowledge, and workflows Claude can use | Reusable content, reference docs, repeatable tasks | `/review` runs a code review checklist; API doc skill endpoint patterns |
| **Subagent** | Isolated execution context returning summary | Context isolation, parallel work, specialist workers | Investigation tasks that read many files but return only key findings |
| **MCP** | External service connections | External data or actions | Database queries, Slack posting, browser control |
| **Hook** | Deterministic scripts run on events | Predictable automation, no LLM | Run ESLint after every file edit |

**Plugins** are a packaging layer. A plugin bundles skills, hooks, subagents, and MCP servers into a single installable unit. Plugin skills are namespaced (e.g., `/my-plugin:review`) so multiple plugins can coexist. Use plugins to distribute across multiple repositories or to others, or to distribute via a **marketplace**.

### Compare Similar Features

Some features may seem similar. Here's how to think about the differences.

#### Skill vs Subagent

Skills and subagents solve different problems:

- **Skills** are reusable instructions, knowledge, or workflows that can be loaded into context.
- **Subagents** are completely separate workers from the main conversation.

| Aspect | Skill | Subagent |
|------|-------|-----------|
| **What** | Reusable instructions, knowledge, workflows | Isolated worker |
| **Key benefit** | Share content across contexts | Context isolation. Work happens separately, returns only summary |
| **Best for** | Reference material, callable workflows | Tasks that read many files, parallel work, specialist workers |

**Skills can be reference or task.** A reference skill provides knowledge that Claude uses throughout a session (e.g., an API style guide). A task skill tells Claude to do something specific (e.g., run a deployment workflow `/deploy`).

**Use a subagent** when you need context isolation or when your context window is full. Subagents can read dozens of files or run extensive searches, but the main conversation only receives a summary. Subagent work doesn't consume the main context. Custom subagents can have their own instructions and pre-loaded skills.

**You can combine them.** Subagents can pre-load specific skills (via the `skills:` field). Skills can run in isolated context using `context: fork`. See [Skills](/claude-code/skills) for details.

#### CLAUDE.md vs Skills

Both store instructions but differ in how they load and their purpose:

| Aspect | CLAUDE.md | Skills |
|------|-----------|--------|
| **Load** | Every session, automatically | On demand |
| **Can include files** | Yes, via `@path` imports | Yes, via `@path` imports |
| **Can trigger workflow** | No | Yes, via `/<name>` |
| **Best for** | "Always X" rules | Reference material, callable workflows |

**Put in CLAUDE.md**: Things Claude should always know—coding rules, build commands, project structure, "don't do" rules

**Put in Skills**: Reference material Claude needs sometimes (API docs, style guides) or workflows triggered with `/<name>` (deploy, review, release)

**Rule of thumb**: Keep CLAUDE.md under ~500 lines. When it grows, move reference content into skills.

#### MCP vs Skills

MCP connects Claude to external services. Skills extend what Claude knows, including how to effectively use external services.

| Aspect | MCP | Skills |
|------|-----|--------|
| **What** | Protocol for external service connections | Knowledge, workflows, reference material |
| **Provides** | Tools and data access | Knowledge, workflows, reference material |
| **Example** | Slack integration, database queries, browser control | Code review checklist, deployment workflow, API style guide |

They solve different problems and work well together:

**MCP** gives Claude the ability to interact with external systems. Without MCP, Claude can't query databases or post to Slack.

**Skills** teach Claude how to use those tools effectively and give it knowledge about your team's data model, common query patterns, which tables to use for different tasks.

Example: An MCP server connects Claude to a database. A skill teaches Claude the data model, common query patterns, and which tables to use for various tasks.

## Understand How Features Combine

Features can be defined at multiple levels. User-wide, per-project, via plugins, or through managed policies. You can also nest CLAUDE.md files in subdirectories or place skills in specific packages of a monorepo. When the same feature exists at multiple levels, they layer as follows:

- **CLAUDE.md files** are additive: content from all levels contributes simultaneously to Claude's context. Files in the working directory and above are loaded at startup, files in subdirectories are only included when working with files in that subtree. When instructions conflict, Claude uses judgment to reconcile, with more specific instructions generally taking precedence. See [How Claude looks up memories](/claude-code/memory).
- **Skills and Subagents** are overridden by name: when the same name exists at multiple levels, one definition wins based on priority (managed > user > project for skills; managed > CLI flag > project > user > plugin for subagents). Plugin skills are namespaced to avoid conflicts (e.g., `/my-plugin:review`). See [Skill discovery](/claude-code/skills) and [Subagent scope](https://code.claude.com/docs/en/subagents#subagent-scope).
- **MCP servers** are overridden by name: local > project > user. See [MCP scope](https://code.claude.com/docs/en/mcp#mcp-scope).
- **Hooks** are merged: all registered hooks run regardless for matching events. See [Hooks](/advanced/hooks-guide).

### Feature Combinations

Each extension solves a different problem. CLAUDE.md handles always-on context, skills handle on-demand knowledge and workflows, MCP handles external connections, subagents handle isolation, and hooks handle automation. Real setups combine things that handle each of these concerns.

For example, you might use CLAUDE.md for project rules, a skill for deployment workflows, MCP for database connections, and a hook to run lint after every edit.

| Pattern | How it works | Example |
|------|-------------|--------|
| **Skill + MCP** | MCP provides connection; skill teaches how to use it well | MCP connects to database; skill documents schema and query patterns |
| **Skill + Subagent** | Skill launches subagents for parallel work | `/review` skill launches security, performance, and style subagents |
| **CLAUDE.md + Skill** | CLAUDE.md for always-on rules; skill loads reference on demand | CLAUDE.md: "Follow API conventions"; skill: full API style guide |
| **Hook + MCP** | Hook triggers external action via MCP | Edit hook sends Slack notification (via MCP) |

## Understand Context Costs

Every feature you add consumes a bit of Claude's context. Too many can fill the context window and may add noise, making Claude less effective. Understanding these tradeoffs helps you build an effective setup.

### Context Cost by Feature

Each feature has different loading strategies and context costs:

| Feature | When loaded | What loads | Context cost |
|------|------------|------------|--------------|
| **CLAUDE.md** | Session start | Full content | Every request |
| **Skills** | Session start + use | Description at start, full content when used | Low (description per request)* |
| **MCP servers** | Session start | All tool definitions and JSON schemas | Every request |
| **Subagents** | Creation | Fresh context with specified skills | Isolated from main session |
| **Hooks** | When triggered | None by default (run externally) | 0, unless hook returns additional messages |

*By default, skill descriptions are loaded at session start so Claude can decide when to use them. For manually invoked skills, you can set `disable-model-invocation: true` to hide descriptions until needed. This reduces the context cost to zero for skills only you invoke.

For details on how each available feature loads, see [Extensions overview](/claude-code/extensions).

---

**Sources:**
- [Extend Claude Code](/claude-code/extensions)