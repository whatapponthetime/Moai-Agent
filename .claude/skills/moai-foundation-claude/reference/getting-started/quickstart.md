[Skip to Content](https://adk.mo.ai.kr/en/getting-started/quickstart#nextra-skip-nav)

[Getting Started](https://adk.mo.ai.kr/en/getting-started/introduction "Getting Started") Quick Start

Copy page

# Quick Start

Create your first project with MoAI-ADK and experience the development workflow.

## Prerequisites [Permalink for this section](https://adk.mo.ai.kr/en/getting-started/quickstart\#prerequisites)

Before starting, ensure the following are complete:

- [x] MoAI-ADK installed ( [Installation Guide](https://adk.mo.ai.kr/en/getting-started/installation))
- [x] Initial setup completed ( [Initial Setup](https://adk.mo.ai.kr/en/getting-started/init-wizard))
- [x] GLM API key obtained

## Creating Your First Project [Permalink for this section](https://adk.mo.ai.kr/en/getting-started/quickstart\#creating-your-first-project)

### Step 1: Project Initialization [Permalink for this section](https://adk.mo.ai.kr/en/getting-started/quickstart\#step-1-project-initialization)

Use the `moai init` command to create a new project:

```

moai init my-first-project
cd my-first-project
```

To initialize MoAI-ADK in an existing project, navigate to that folder and run:

```

cd existing-project
moai init
```

### Step 2: Generate Project Documentation [Permalink for this section](https://adk.mo.ai.kr/en/getting-started/quickstart\#step-2-generate-project-documentation)

Generate basic project documentation. This step is essential for Claude Code to understand the project.

```

> /moai project
```

This command analyzes the project and automatically generates 3 files:

| File | Content |
| --- | --- |
| **product.md** | Project name, description, target users, key features |
| **structure.md** | Directory tree, folder purposes, module composition |
| **tech.md** | Technologies used, frameworks, development environment, build/deploy config |

Run `/moai project` after initial project setup or when structure changes significantly.

### Step 3: Create SPEC Document [Permalink for this section](https://adk.mo.ai.kr/en/getting-started/quickstart\#step-3-create-spec-document)

Create a SPEC document for your first feature. Use EARS format to define clear requirements.

**Why do we need SPEC?** 📝

The biggest problem with **Vibe Coding** is **context loss**:

- While coding with AI, you reach moments like “Wait, what were we trying to do?”
- When session ends or context initializes, **previously discussed requirements disappear**
- Eventually, you repeat explanations or get code that differs from intentions

**SPEC documents solve this problem:**

| Problem | SPEC Solution |
| --- | --- |
| Context loss | Permanently preserve requirements by **saving to files** |
| Ambiguous requirements | Structure clearly with **EARS format** |
| Communication errors | Specify completion conditions with **acceptance criteria** |
| Cannot track progress | Manage work units with **SPEC ID** |

**One-line summary:** SPEC is “documenting conversations with AI.” Even if session ends, you can continue working by reading the SPEC document!

```

> /moai plan "Implement user authentication feature"
```

This command performs the following:

The generated SPEC document is saved at `.moai/specs/SPEC-001/spec.md`.

After SPEC creation, always run `/clear` to save tokens.

### Step 4: Execute DDD Development [Permalink for this section](https://adk.mo.ai.kr/en/getting-started/quickstart\#step-4-execute-ddd-development)

Develop using Domain-Driven Development based on the SPEC document.

**What is DDD?** 🏠

DDD is similar to “home remodeling”:

- **Without destroying the existing house**, improve one room at a time
- **Take photos of current state before remodeling** (= characterization tests)
- **Work on one room at a time, checking each time** (= incremental improvement)

Why do we do this? **To safely improve code.** We don’t want to break existing functionality!

```

> /clear
> /moai run SPEC-001
```

This command runs the **ANALYZE-PRESERVE-IMPROVE** cycle:

**Understanding ANALYZE-PRESERVE-IMPROVE:**

| Phase | Analogy | Actual Work |
| --- | --- | --- |
| **ANALYZE** (Analyze) | 🔍 House inspection | Understand current code structure and problems |
| **PRESERVE** (Preserve) | 📸 Take photos of current state | Record current behavior with characterization tests |
| **IMPROVE** (Improve) | 🔧 Remodel one room at a time | Make incremental improvements while tests pass |

`/moai run` automatically targets 85%+ test coverage. **Tests are insurance for remodeling!**

**Completion Criteria:**

- Test coverage >= 85%
- 0 errors, 0 type errors
- LSP baseline achieved

### Step 5: Document Synchronization [Permalink for this section](https://adk.mo.ai.kr/en/getting-started/quickstart\#step-5-document-synchronization)

When development is complete, automatically generate quality validation and documentation.

```

> /clear
> /moai sync SPEC-001
```

This command performs the following:

## Complete Development Workflow [Permalink for this section](https://adk.mo.ai.kr/en/getting-started/quickstart\#complete-development-workflow)

## Integrated Automation: /moai [Permalink for this section](https://adk.mo.ai.kr/en/getting-started/quickstart\#integrated-automation-moai)

To automatically execute all phases at once:

```

> /moai "Implement user authentication feature"
```

MoAI automatically executes Plan → Run → Sync, providing 3-4x faster analysis with parallel exploration.

## Workflow Selection Guide [Permalink for this section](https://adk.mo.ai.kr/en/getting-started/quickstart\#workflow-selection-guide)

| Situation | Recommended Command | Reason |
| --- | --- | --- |
| New Project | Run `/moai project` first | Basic documentation required |
| Simple Feature | `/moai plan` \+ `/moai run` | Quick execution |
| Complex Feature | `/moai` | Auto optimization |
| Parallel Development | Use `--worktree` flag | Independent environment guarantee |

## Practical Examples [Permalink for this section](https://adk.mo.ai.kr/en/getting-started/quickstart\#practical-examples)

### Example 1: Simple API Endpoint [Permalink for this section](https://adk.mo.ai.kr/en/getting-started/quickstart\#example-1-simple-api-endpoint)

```

# 1. Generate project documentation (first time only)
> /moai project

# 2. Create SPEC
> /moai plan "Implement user list API endpoint"
> /clear

# 3. Implement
> /moai run SPEC-001
> /clear

# 4. Document & PR
> /moai sync SPEC-001
```

### Example 2: Complex Feature (Using MoAI) [Permalink for this section](https://adk.mo.ai.kr/en/getting-started/quickstart\#example-2-complex-feature-using-moai)

```

# If project documentation exists, execute all at once with MoAI
> /moai "Implement JWT authentication middleware"
```

### Example 3: Parallel Development (Using Worktree) [Permalink for this section](https://adk.mo.ai.kr/en/getting-started/quickstart\#example-3-parallel-development-using-worktree)

```

# Parallel development in independent environments
> /moai plan "Implement payment system" --worktree
```

## Understanding File Structure [Permalink for this section](https://adk.mo.ai.kr/en/getting-started/quickstart\#understanding-file-structure)

Standard MoAI-ADK project structure:

```

my-first-project/
├── CLAUDE.md                        # Claude Code project guidelines
├── CLAUDE.local.md                  # Project local settings (personal)
├── .mcp.json                        # MCP server configuration
├── .claude/
│   ├── agents/                      # Claude Code agent definitions
│   ├── commands/                    # Slash command definitions
│   ├── hooks/                       # Hook scripts
│   ├── skills/                      # Reusable skills
│   └── rules/                       # Project rules
├── .moai/
│   ├── config/
│   │   └── sections/
│   │       ├── user.yaml            # User information
│   │       ├── language.yaml        # Language settings
│   │       ├── quality.yaml         # Quality gate settings
│   │       └── git-strategy.yaml    # Git strategy settings
│   ├── project/
│   │   ├── product.md               # Project overview
│   │   ├── structure.md             # Directory structure
│   │   └── tech.md                  # Technology stack
│   ├── specs/
│   │   └── SPEC-001/
│   │       └── spec.md              # Requirements specification
│   └── memory/
│       └── checkpoints/             # Session checkpoints
├── src/
│   └── [project source code]
├── tests/
│   └── [test files]
└── docs/
    └── [generated documentation]
```

## Quality Check [Permalink for this section](https://adk.mo.ai.kr/en/getting-started/quickstart\#quality-check)

Check quality anytime during development:

```

moai doctor
```

This command verifies:

- LSP diagnostics (errors, warnings)
- Test coverage
- Linter status
- Security verification

## Useful Tips [Permalink for this section](https://adk.mo.ai.kr/en/getting-started/quickstart\#useful-tips)

### Token Management [Permalink for this section](https://adk.mo.ai.kr/en/getting-started/quickstart\#token-management)

For large projects, run `/clear` after each phase to save tokens:

```

> /moai plan "Implement complex feature"
> /clear  # Reset session
> /moai run SPEC-001
> /clear
> /moai sync SPEC-001
```

### Bug Fix & Automation [Permalink for this section](https://adk.mo.ai.kr/en/getting-started/quickstart\#bug-fix--automation)

```

# Auto fix
> /moai fix "Fix TypeError in tests"

# Repeat fix until complete
> /moai loop "Fix all linter warnings"
```

* * *

## Next Steps [Permalink for this section](https://adk.mo.ai.kr/en/getting-started/quickstart\#next-steps)

Learn about MoAI-ADK’s advanced features in [Core Concepts](https://adk.mo.ai.kr/core-concepts/what-is-moai-adk).

Last updated onFebruary 8, 2026

[Setup Wizard](https://adk.mo.ai.kr/en/getting-started/init-wizard "Setup Wizard") [Update](https://adk.mo.ai.kr/en/getting-started/update "Update")

* * *