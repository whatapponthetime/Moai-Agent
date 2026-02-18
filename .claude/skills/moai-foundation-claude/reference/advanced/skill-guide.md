[Skip to Content](https://adk.mo.ai.kr/en/advanced/skill-guide#nextra-skip-nav)

AdvancedSkill Guide

Copy page

# Skill Guide

Detailed guide to MoAI-ADK’s skill system.

**What is a Skill?**

Remember the helicopter scene from the 1999 movie **The Matrix**? Neo asks Trinity
if she knows how to fly a helicopter, and she calls headquarters to tell them the
helicopter model and asks them to send the operating manual.

매트릭스 지식전송 헬기 조정법 The Matrix \_ sosa - YouTube

[Photo image of 이진우](https://www.youtube.com/channel/UCfr2xxDMtqZUNmtZPNN0OkQ?embeds_referring_euri=https%3A%2F%2Fadk.mo.ai.kr%2F)

이진우

1.85K subscribers

[매트릭스 지식전송 헬기 조정법 The Matrix \_ sosa](https://www.youtube.com/watch?v=9Luu4itC-Zs)

이진우

Search

Watch later

Share

Copy link

Info

Shopping

Tap to unmute

If playback doesn't begin shortly, try restarting your device.

More videos

## More videos

You're signed out

Videos you watch may be added to the TV's watch history and influence TV recommendations. To avoid this, cancel and sign in to YouTube on your computer.

CancelConfirm

Share

Include playlist

An error occurred while retrieving sharing information. Please try again later.

[Watch on](https://www.youtube.com/watch?v=9Luu4itC-Zs&embeds_referring_euri=https%3A%2F%2Fadk.mo.ai.kr%2F)

0:00

0:00 / 0:48

•Live

•

**Claude Code’s skills** \*\*(are that **operating manual**. They load only the
necessary knowledge at the moment it’s needed, allowing the AI to immediately act
like an expert.

## What is a Skill? [Permalink for this section](https://adk.mo.ai.kr/en/advanced/skill-guide\#what-is-a-skill)

A skill is a **knowledge module** that provides Claude Code with specialized
knowledge in a specific domain.

To use a school analogy: Claude Code is the student and skills are textbooks.
Just as you open a math textbook for math class and a science textbook for
science class, Claude Code loads the Python skill when writing Python code and
the Frontend skill when creating React UIs.

**Without skills**: Claude Code responds with only general knowledge. **With**
**skills**: Applies MoAI-ADK’s rules, patterns, and best practices to respond.

## Skill Categories [Permalink for this section](https://adk.mo.ai.kr/en/advanced/skill-guide\#skill-categories)

MoAI-ADK has a total of **52 skills** classified into 9 categories.

### Foundation (Core Philosophy) - 5 skills [Permalink for this section](https://adk.mo.ai.kr/en/advanced/skill-guide\#foundation-core-philosophy---5-skills)

| Skill Name | Description |
| --- | --- |
| `moai-foundation-core` | SPEC-First DDD, TRUST 5 framework, execution rules |
| `moai-foundation-claude` | Claude Code extension patterns (Skills, Agents, etc.) |
| `moai-foundation-philosopher` | Strategic thinking framework, decision analysis |
| `moai-foundation-quality` | Automatic code quality validation, TRUST 5 validation |
| `moai-foundation-context` | Token budget management, session state maintenance |

### Workflow (Automation Workflows) - 11 skills [Permalink for this section](https://adk.mo.ai.kr/en/advanced/skill-guide\#workflow-automation-workflows---11-skills)

| Skill Name | Description |
| --- | --- |
| `moai-workflow-spec` | SPEC document creation, EARS format, analysis |
| `moai-workflow-project` | Project initialization, docs creation, language |
| `moai-workflow-ddd` | ANALYZE-PRESERVE-IMPROVE cycle |
| `moai-workflow-tdd` | RED-GREEN-REFACTOR test-driven development |
| `moai-workflow-testing` | Test creation, debugging, code review |
| `moai-workflow-worktree` | Git worktree based parallel development |
| `moai-workflow-thinking` | Sequential Thinking, UltraThink mode |
| `moai-workflow-loop` | Ralph Engine autonomous loop, LSP integration |
| `moai-workflow-jit-docs` | Just-in-time document loading, smart search |
| `moai-workflow-templates` | Code boilerplates, project templates |
| `moai-docs-generation` | Technical docs, API docs, user guides |

### Domain (Domain Expertise) - 4 skills [Permalink for this section](https://adk.mo.ai.kr/en/advanced/skill-guide\#domain-domain-expertise---4-skills)

| Skill Name | Description |
| --- | --- |
| `moai-domain-backend` | API design, microservices, database integration |
| `moai-domain-frontend` | React 19, Next.js 16, Vue 3.5, component architecture |
| `moai-domain-database` | PostgreSQL, MongoDB, Redis, advanced data patterns |
| `moai-domain-uiux` | Design systems, accessibility, theme integration |

### Language (Programming Languages) - 16 skills [Permalink for this section](https://adk.mo.ai.kr/en/advanced/skill-guide\#language-programming-languages---16-skills)

| Skill Name | Target Language |
| --- | --- |
| `moai-lang-python` | Python 3.13+, FastAPI, Django |
| `moai-lang-typescript` | TypeScript 5.9+, React 19, Next.js 16 |
| `moai-lang-javascript` | JavaScript ES2024+, Node.js 22, Bun, Deno |
| `moai-lang-go` | Go 1.23+, Fiber, Gin, GORM (consolidated) |
| `moai-lang-rust` | Rust 1.92+, Axum, Tokio (consolidated) |
| `moai-lang-flutter` | Flutter 3.24+, Dart 3.5+, Riverpod (consolidated) |
| `moai-lang-java` | Java 21 LTS, Spring Boot 3.3 |
| `moai-lang-cpp` | C++23/C++20, CMake, RAII |
| `moai-lang-ruby` | Ruby 3.3+, Rails 7.2 |
| `moai-lang-php` | PHP 8.3+, Laravel 11, Symfony 7 |
| `moai-lang-kotlin` | Kotlin 2.0+, Ktor, Compose Multiplatform |
| `moai-lang-csharp` | C# 12, .NET 8, ASP.NET Core |
| `moai-lang-scala` | Scala 3.4+, Akka, ZIO |
| `moai-lang-elixir` | Elixir 1.17+, Phoenix 1.7, LiveView |
| `moai-lang-swift` | Swift 6+, SwiftUI, Combine |
| `moai-lang-r` | R 4.4+, tidyverse, ggplot2, Shiny |

### Platform (Cloud/BaaS) - 4 skills [Permalink for this section](https://adk.mo.ai.kr/en/advanced/skill-guide\#platform-cloudbaas---4-skills)

| Skill Name | Target Platform |
| --- | --- |
| `moai-platform-auth` | Auth0, Clerk, Firebase-auth integrated auth |
| `moai-platform-database-cloud` | Neon, Supabase, Firestore integrated database |
| `moai-platform-deployment` | Vercel, Railway, Convex integrated deployment |
| `moai-platform-chrome-extension` | Chrome Extension Manifest V3 development |

### Library (Special Libraries) - 4 skills [Permalink for this section](https://adk.mo.ai.kr/en/advanced/skill-guide\#library-special-libraries---4-skills)

| Skill Name | Description |
| --- | --- |
| `moai-library-shadcn` | shadcn/ui component implementation |
| `moai-library-mermaid` | Mermaid 11.12 diagram generation |
| `moai-library-nextra` | Nextra documentation site framework |
| `moai-formats-data` | TOON encoding, JSON/YAML optimization |

### Tool (Development Tools) - 2 skills [Permalink for this section](https://adk.mo.ai.kr/en/advanced/skill-guide\#tool-development-tools---2-skills)

| Skill Name | Description |
| --- | --- |
| `moai-tool-ast-grep` | AST-based structural code search, security |
| `moai-tool-svg` | SVG generation, optimization, icon system |

### Framework (App Frameworks) - 1 skill [Permalink for this section](https://adk.mo.ai.kr/en/advanced/skill-guide\#framework-app-frameworks---1-skill)

| Skill Name | Description |
| --- | --- |
| `moai-framework-electron` | Electron 33+ desktop app development |

### Design Tools - 1 skill [Permalink for this section](https://adk.mo.ai.kr/en/advanced/skill-guide\#design-tools---1-skill)

| Skill Name | Description |
| --- | --- |
| `moai-design-tools` | Figma, Pencil integrated design tools |

## Progressive Disclosure System [Permalink for this section](https://adk.mo.ai.kr/en/advanced/skill-guide\#progressive-disclosure-system)

MoAI-ADK’s skills use a **3-level progressive disclosure** system. Loading all
skills at once would waste tokens, so only the necessary amount is loaded
incrementally.

### Role of Each Level [Permalink for this section](https://adk.mo.ai.kr/en/advanced/skill-guide\#role-of-each-level)

| Level | Tokens | Load Timing | Content |
| --- | --- | --- | --- |
| Level 1 | ~100 | Always | Skill name, description, trigger keywords |
| Level 2 | ~5,000 | On trigger | Full documentation, code examples, patterns |
| Level 3 | Unlimited | On demand | modules/, reference.md, examples.md |

### Token Savings [Permalink for this section](https://adk.mo.ai.kr/en/advanced/skill-guide\#token-savings)

- **Old method**: Load all 52 skills = ~260,000 tokens (impossible)
- **Progressive disclosure**: Load only metadata = ~5,200 tokens (97% savings)
- **On-demand load**: Only 2-3 skills needed for task = ~15,000 additional tokens

## Skill Trigger Mechanism [Permalink for this section](https://adk.mo.ai.kr/en/advanced/skill-guide\#skill-trigger-mechanism)

Skills are automatically loaded via **4 trigger conditions**.

### Trigger Configuration Example [Permalink for this section](https://adk.mo.ai.kr/en/advanced/skill-guide\#trigger-configuration-example)

```

# Define triggers in skill frontmatter
triggers:
  keywords: ["api", "database", "authentication"] # Keyword matching
  agents: ["manager-spec", "expert-backend"] # On agent invocation
  phases: ["plan", "run"] # Workflow phases
  languages: ["python", "typescript"] # Programming languages
```

**Trigger Priority:**

1. **Keywords**: Load immediately when keyword detected in user message
2. **Agents**: Auto-load when specific agent is invoked
3. **Phases**: Load according to Plan/Run/Sync phase
4. **Languages**: Load based on programming language of files being worked on

## Skill Usage [Permalink for this section](https://adk.mo.ai.kr/en/advanced/skill-guide\#skill-usage)

### Explicit Invocation [Permalink for this section](https://adk.mo.ai.kr/en/advanced/skill-guide\#explicit-invocation)

You can directly invoke skills in Claude Code conversations.

```

# Invoke skills in Claude Code
> Skill("moai-lang-python")
> Skill("moai-domain-backend")
> Skill("moai-library-mermaid")
```

### Auto Load [Permalink for this section](https://adk.mo.ai.kr/en/advanced/skill-guide\#auto-load)

In most cases, skills are **automatically loaded** via the trigger mechanism.
Users don’t need to invoke them directly; the conversation context is analyzed
to activate appropriate skills.

## Skill Directory Structure [Permalink for this section](https://adk.mo.ai.kr/en/advanced/skill-guide\#skill-directory-structure)

Skill files are located in the `.claude/skills/` directory.

```

.claude/skills/
├── moai-foundation-core/       # Foundation category
│   ├── skill.md                # Main skill document (under 500 lines)
│   ├── modules/                # Deep documentation (unlimited)
│   │   ├── trust-5-framework.md
│   │   ├── spec-first-ddd.md
│   │   └── delegation-patterns.md
│   ├── examples.md             # Real-world examples
│   └── reference.md            # External reference links
│
├── moai-lang-python/           # Language category
│   ├── skill.md
│   └── modules/
│       ├── fastapi-patterns.md
│       └── testing-pytest.md
│
└── my-skills/                  # User custom skills (excluded from updates)
    └── my-custom-skill/
        └── skill.md
```

**Warning**: Skills with `moai-*` prefix are overwritten on MoAI-ADK updates.
Personal skills must be created in `.claude/skills/my-skills/` directory.

### Skill File Structure [Permalink for this section](https://adk.mo.ai.kr/en/advanced/skill-guide\#skill-file-structure)

Each skill’s `skill.md` follows this structure.

```

---
name: moai-lang-python
description: >
  Python 3.13+ development expert. FastAPI, Django, pytest patterns provided.
  Use for Python API, web app, data pipeline development.
version: 3.0.0
category: language
status: active
triggers:
  keywords: ["python", "fastapi", "django", "pytest"]
  languages: ["python"]
allowed-tools: ["Read", "Grep", "Glob", "Bash", "Context7 MCP"]
---

# Python Development Expert

## Quick Reference

(Quick reference - 30 seconds)

## Implementation Guide

(Implementation guide - 5 minutes)

## Advanced Patterns

(Advanced patterns - 10 minutes+)

## Works Well With

(Related skills/agents)
```

## Real-World Examples [Permalink for this section](https://adk.mo.ai.kr/en/advanced/skill-guide\#real-world-examples)

### Auto Skill Load in Python Project [Permalink for this section](https://adk.mo.ai.kr/en/advanced/skill-guide\#auto-skill-load-in-python-project)

Scenario where user is working on a Python FastAPI project.

```

# 1. User requests API development
> Create a user authentication API with FastAPI

# 2. Keywords automatically detected by MoAI-ADK
# "FastAPI" → moai-lang-python trigger
# "authentication" → moai-domain-backend trigger
# "API" → moai-domain-backend trigger

# 3. Auto-loaded skills
# - moai-lang-python (Level 2): FastAPI patterns, pytest tests
# - moai-domain-backend (Level 2): API design patterns, auth strategy
# - moai-foundation-core (Level 1): TRUST 5 quality standards

# 4. Agent uses skill knowledge for implementation
# - Apply FastAPI router patterns
# - Apply JWT authentication best practices
# - Auto-generate pytest tests
# - Meet TRUST 5 quality standards
```

### Skill Collaboration [Permalink for this section](https://adk.mo.ai.kr/en/advanced/skill-guide\#skill-collaboration)

Process where multiple skills collaborate on a single task.

## Related Documentation [Permalink for this section](https://adk.mo.ai.kr/en/advanced/skill-guide\#related-documentation)

- [Agent Guide](https://adk.mo.ai.kr/advanced/agent-guide) \- Agent system that uses skills
- [Builder Agents Guide](https://adk.mo.ai.kr/advanced/builder-agents) \- Custom skill creation
- [CLAUDE.md Guide](https://adk.mo.ai.kr/advanced/claude-md-guide) \- Skill configuration and rules

**Tip**: The key to using skills effectively is **using appropriate keywords**.
Requesting “Create a REST API with Python” will automatically activate the
`moai-lang-python` and `moai-domain-backend` skills to generate optimal code.

Last updated onFebruary 8, 2026

[/moai feedback](https://adk.mo.ai.kr/en/utility-commands/moai-feedback "/moai feedback") [Agent Guide](https://adk.mo.ai.kr/en/advanced/agent-guide "Agent Guide")

* * *