
export const docsContent: Record<string, string> = {
  '/docs/getting-started/introduction': `
import { Callout } from 'nextra/components'

# Introduction

MoAI-ADK is an AI-based development environment, a comprehensive toolkit for efficiently generating high-quality code.

## Notation Guide

In this documentation, command prefixes indicate the execution environment:

- **Claude Code** commands entered in the chat window
  \`\`\`bash
  > /moai plan "feature description"
  \`\`\`

- **Terminal** commands entered in the terminal
  \`\`\`bash
  moai init my-project
  \`\`\`

## Core Concepts

MoAI-ADK is based on **SPEC-First DDD** (Domain-Driven Development) methodology and ensures code quality through the **TRUST 5** quality framework.

### What is SPEC? (Easy Understanding)

**SPEC** (Specification) is "documenting conversations with AI."

The biggest problem with **Vibe Coding** is **context loss**:
- 😰 Content discussed with AI for 1 hour **disappears** when the session ends
- 😰 To continue work the next day, you must **explain from the beginning**
- 😰 For complex features, **results differ from intentions**

**SPEC solves this problem:**
- ✅ Permanently preserve requirements by **saving them to files**
- ✅ Can **continue work** by reading just the SPEC even if session ends
- ✅ Define clearly without ambiguity using **EARS format**

<Callout type="tip">
**One-line summary:** Yesterday's discussion about "JWT authentication + 1 hour expiration + refresh token" - no need to re-explain today. Just \`/moai run SPEC-AUTH-001\` and start implementation immediately!
</Callout>

### What is DDD? (Easy Understanding)

**DDD** (Domain-Driven Development) is "a safe code improvement method."

Using home remodeling as an analogy:
- 🏠 **Without destroying the existing house**, improve one room at a time
- 📸 **Take photos of the current state before remodeling** (= characterization tests)
- 🔧 **Work on one room at a time, checking each time** (= incremental improvement)

MoAI-ADK automates this process with the **ANALYZE-PRESERVE-IMPROVE** cycle:

| Phase | Meaning | What it does |
|------|---------|--------------|
| **ANALYZE** | Analyze | Understand current code structure and problems |
| **PRESERVE** | Preserve | Record current behavior with tests (safety net) |
| **IMPROVE** | Improve | Make incremental improvements while tests pass |

### TRUST 5 Quality Framework

TRUST 5 is based on 5 core principles:

| Principle | Description |
|-----------|-------------|
| **T**ested | 85% coverage, characterization tests, behavior preservation |
| **R**eadable | Clear naming conventions, consistent formatting |
| **U**nified | Unified style guide, auto-formatting |
| **S**ecured | OWASP compliance, security verification, vulnerability analysis |
| **T**rackable | Structured commits, change history tracking |

## Key Features

MoAI-ADK provides 20 specialized AI agents and 52 skills to automate and optimize the entire development workflow.

- 🧠 **Sequential Thinking MCP**: Structured problem-solving with step-by-step reasoning
- 🔗 **Ralph-Style LSP Integration** (NEW v1.9.0): LSP-based autonomous workflow with real-time quality feedback

### Agent Categories

| Category | Count | Key Agents |
|----------|-------|------------|
| **Manager** | 7 | spec, ddd, docs, quality, project, strategy, git |
| **Expert** | 9 | backend, frontend, security, devops, performance, debug, testing, refactoring, chrome-extension |
| **Builder** | 4 | agent, command, skill, plugin |

### SPEC-First DDD Workflow

MoAI-ADK follows a 3-phase development workflow:

\`\`\`mermaid
flowchart TB
    A[Phase 1: SPEC<br><br>/moai plan] -->|Define requirements in<br>EARS format| B[Phase 2: DDD<br><br>/moai run]
    B -->|ANALYZE-PRESERVE-IMPROVE| C[Phase 3: Docs<br><br>/moai sync]
    C -->|Documentation & Deployment| D[Complete]
\`\`\`

## Multilingual Support

MoAI-ADK supports 4 languages:

- 🇰🇷 **Korean** (Korean)
- 🇺🇸 **English** (English)
- 🇯🇵 **Japanese** (Japanese)
- 🇨🇳 **Chinese** (Chinese)

You can select your preferred language in the installation wizard or change it directly in the configuration file.

## LSP Integration (v1.9.0)

MoAI-ADK integrates Language Server Protocol (LSP) for autonomous workflow management:

- **LSP-based completion marker auto-detection**: Automatically detects when work is complete
- **Real-time regression detection**: Catches errors before they become problems
- **Auto-completion trigger**: Automatically completes when 0 errors, 0 type errors, 85% coverage achieved

## 🎁 MoAI-ADK Sponsor: z.ai GLM 4.7

**💎 Optimal Solution for Cost-Effective AI Development**

MoAI-ADK partners with **z.ai GLM 4.7** to provide developers with an economical AI development environment.

### 🚀 GLM 4.7 Special Benefits

| Benefit | Description |
|---------|-------------|
| **💰 70% Cost Savings** | 1/7 the price of Claude with equivalent performance |
| **⚡ Fast Response Speed** | Low-latency responses with optimized infrastructure |
| **🔄 Compatibility** | Fully compatible with Claude Code, no code modification needed |
| **📈 Unlimited Usage** | Use freely without daily/weekly token limits |

### 🎁 Sign-Up Special Discount

If you don't have a GLM account yet, sign up through the link below to receive an **additional 10% discount**.

**👉 [GLM 4.7 Sign Up (10% Additional Discount)](https://z.ai/subscribe?ic=1NDV03BGWU)**

<Callout type="tip">
By signing up through this link, you'll receive an additional 10% discount. Rewards generated from link sign-ups are used for **MoAI open source development**. 🙏
</Callout>

### Switching to GLM

Easily switch to the GLM backend in MoAI-ADK:

\`\`\`bash
# Switch to GLM backend
moai glm

# Return to Claude backend
moai cc
\`\`\`

## Getting Started

To start your MoAI-ADK journey:

1. **[Installation](/getting-started/installation)** - Install MoAI-ADK on your system
2. **[Initial Setup](/getting-started/installation)** - Run the interactive setup wizard
3. **[Quick Start](/getting-started/quickstart)** - Create your first project
4. **[Core Concepts](/core-concepts/what-is-moai-adk)** - Deepen your understanding of MoAI-ADK

## Key Benefits

| Benefit | Description |
|---------|-------------|
| **Quality Assurance** | Maintain consistent quality with TRUST 5 framework |
| **Productivity** | Reduce development time with AI agent automation |
| **Cost Efficiency** | 70% cost savings with GLM 4.7 |
| **Scalable** | Flexible scaling with modular architecture |
| **Multilingual** | Support for 4 languages |

## Additional Resources

- [GitHub Repository](https://github.com/modu-ai/moai-adk)
- [Documentation Site](https://adk.mo.ai.kr)
- [Community Forum](https://github.com/modu-ai/moai-adk/discussions)

---

## Next Steps

Learn about MoAI-ADK installation in the [Installation Guide](./installation).
`,

  '/docs/getting-started/installation': `
import { Callout } from 'nextra/components'

# Installation

Learn how to install MoAI-ADK 2.x on your system.

## Prerequisites

Verify the following before installation:

### 1. Claude Code

MoAI-ADK is an extension framework that runs on top of Claude Code. Claude Code must be installed first.

\`\`\`bash
claude --version
\`\`\`

If not yet installed, refer to the [Claude Code official documentation](https://docs.anthropic.com/en/docs/claude-code).

### 2. Git (Required)

MoAI-ADK uses Git-based workflows. Git must be installed on your system.

\`\`\`bash
git --version
\`\`\`

<Callout type="warning">
**Windows Users**: You must use **Git Bash** or **WSL**. Command Prompt (cmd.exe) is not supported.

If Git is not installed:
- **Windows**: Install Git for Windows from [git-scm.com](https://git-scm.com). Git Bash is included.
- **macOS**: \`xcode-select --install\` or [git-scm.com](https://git-scm.com)
- **Linux**: \`sudo apt install git\` (Ubuntu/Debian) or \`sudo dnf install git\` (Fedora)
</Callout>

### System Requirements

| Item | Requirement |
|------|------------|
| **OS** | macOS, Linux, Windows (Git Bash / WSL) |
| **Architecture** | amd64, arm64 |
| **Memory** | Minimum 4GB RAM |
| **Disk** | Minimum 100MB free space |

## Installation Methods

### Method 1: Quick Install (Recommended)

Install the latest version automatically with a single command.

**macOS / Linux / WSL / Git Bash:**

\`\`\`bash
curl -fsSL https://raw.githubusercontent.com/modu-ai/moai-adk/main/install.sh | bash
\`\`\`

**Windows (PowerShell):**

\`\`\`powershell
irm https://raw.githubusercontent.com/modu-ai/moai-adk/main/install.ps1 | iex
\`\`\`

<Callout type="tip">
The install script automatically detects your platform, downloads the prebuilt binary from GitHub, verifies the SHA256 checksum, and configures PATH. No Python or separate runtime is required.
</Callout>

After installation, verify:

\`\`\`bash
moai version
\`\`\`

#### Install Options

\`\`\`bash
# Install a specific version
curl -fsSL https://raw.githubusercontent.com/modu-ai/moai-adk/main/install.sh | bash -s -- --version 2.0.0

# Install to a custom directory
curl -fsSL https://raw.githubusercontent.com/modu-ai/moai-adk/main/install.sh | bash -s -- --install-dir /usr/local/bin
\`\`\`

### Method 2: Build from Source

If you have a Go development environment, you can build from source.

\`\`\`bash
git clone https://github.com/modu-ai/moai-adk.git
cd moai-adk
make build
\`\`\`

The built binary will be at \`./bin/moai\`. Copy it to a directory in your PATH:

\`\`\`bash
cp ./bin/moai ~/.local/bin/
\`\`\`

### Install Locations

The install script determines the installation directory in this order:

| Platform | Priority |
|----------|---------|
| **macOS / Linux** | \`$GOBIN\` → \`$GOPATH/bin\` → \`~/.local/bin\` |
| **Windows** | \`%LOCALAPPDATA%\\Programs\\moai\` |

## Migrating from 1.x

<Callout type="error">
**MoAI-ADK 1.x (Python version) users must uninstall the old version first.**

Both 1.x and 2.x use the same \`moai\` command, so keeping the old version will cause conflicts.
</Callout>

### Step 1: Remove existing 1.x

\`\`\`bash
# If installed via uv
uv tool uninstall moai-adk

# If installed via pip
pip uninstall moai-adk
\`\`\`

### Step 2: Backup existing config (optional)

\`\`\`bash
# If you want to back up existing settings
cp -r ~/.moai ~/.moai-v1-backup
\`\`\`

### Step 3: Install 2.x

\`\`\`bash
curl -fsSL https://raw.githubusercontent.com/modu-ai/moai-adk/main/install.sh | bash
\`\`\`

### Step 4: Verify installation

\`\`\`bash
moai version
# Example output: moai v2.x.x (commit: abc1234, built: 2026-01-15)
\`\`\`

<Callout type="info">
Version 2.x is a single Go binary with no Python runtime or virtual environment required. Startup time has improved dramatically from ~800ms to ~5ms.
</Callout>

## WSL Support

Guide for installing and using MoAI-ADK in WSL (Windows Subsystem for Linux) on Windows.

### Installing WSL

If WSL is not installed, run the following command in PowerShell (Administrator):

\`\`\`powershell
wsl --install
\`\`\`

After installation, restart Windows and Ubuntu will be automatically installed.

### Installing MoAI-ADK in WSL

Use the same command as Linux in the WSL terminal:

\`\`\`bash
curl -fsSL https://raw.githubusercontent.com/modu-ai/moai-adk/main/install.sh | bash
\`\`\`

### Path Handling

Distinguish between Windows paths and WSL paths:

| Windows Path | WSL Path |
|-------------|----------|
| \`C:\\Users\\name\\project\` | \`/mnt/c/Users/name/project\` |
| \`D:\\Projects\\myapp\` | \`/mnt/d/Projects/myapp\` |

<Callout type="tip">
**Recommended**: Create projects in WSL's Linux filesystem (\`~/projects/\`) for 2-5x better I/O performance. Accessing the Windows filesystem (\`/mnt/c/\`) may result in slower performance.
</Callout>

### WSL Best Practices

1. **Use Linux filesystem**: Create projects in \`~/projects/\` directory
2. **Configure Git credentials**: Set up Git credentials separately in WSL from Windows
3. **Recommended terminal**: Use Windows Terminal to manage multiple WSL distributions

### WSL Troubleshooting

#### PATH Not Loaded

\`\`\`bash
# Add to ~/.bashrc or ~/.zshrc
source ~/.cargo/env
export PATH="$HOME/.local/bin:$PATH"
\`\`\`

#### Hook/MCP Server Permission Issues

\`\`\`bash
# Grant execute permissions
chmod +x ~/.claude/hooks/moai/*.sh
\`\`\`

#### Slow Windows Path Access

Move the project to the Linux filesystem:

\`\`\`bash
# Move from Windows to WSL
cp -r /mnt/c/Users/name/project ~/projects/
cd ~/projects/project
\`\`\`

## pip and uv Tool Conflict

A common issue for MoAI-ADK 1.x (Python version) users.

### Problem Description

pip and uv install packages in different locations. Using both tools interchangeably may cause the \`moai\` command to execute an unexpected version.

### Symptoms

- \`moai version\` shows 1.x version
- \`command not found: moai\` error
- \`which moai\` shows a different path than expected

### Root Cause

1. pip installs to system Python paths
2. uv tool installs to \`~/.local/bin\` or \`~/.cargo/bin\`
3. PATH order determines which version runs

### Solutions

#### Clean Reinstall

\`\`\`bash
# 1. Remove all existing versions
uv tool uninstall moai-adk 2>/dev/null || true
pip uninstall moai-adk -y 2>/dev/null || true

# 2. Check and remove remaining binaries
which moai && rm $(which moai) 2>/dev/null || true
ls ~/.local/bin/moai && rm ~/.local/bin/moai 2>/dev/null || true

# 3. Install 2.x
curl -fsSL https://raw.githubusercontent.com/modu-ai/moai-adk/main/install.sh | bash

# 4. Verify
moai version
\`\`\`

#### Update Shell Configuration

\`\`\`bash
# Add to ~/.bashrc or ~/.zshrc
export PATH="$HOME/.local/bin:$PATH"

# Apply settings
source ~/.bashrc  # or source ~/.zshrc
\`\`\`

### Prevention Tips

1. MoAI-ADK 2.x is a Python-independent Go binary
2. Uninstall 1.x (Python version) before installing 2.x
3. Do not use pip and uv tool simultaneously

## Troubleshooting

### Problem: Command Not Found

\`\`\`bash
command not found: moai
\`\`\`

**Solution:**

1. Restart your terminal
2. Check your PATH:

\`\`\`bash
echo $PATH
\`\`\`

3. Verify the binary location:

\`\`\`bash
which moai || ls ~/.local/bin/moai
\`\`\`

4. Manually add to PATH:

\`\`\`bash
# Bash/Zsh
echo 'export PATH="$HOME/.local/bin:$PATH"' >> ~/.bashrc
source ~/.bashrc
\`\`\`

### Problem: Permission Denied

\`\`\`bash
Permission denied
\`\`\`

**Solution:**

\`\`\`bash
chmod +x ~/.local/bin/moai
\`\`\`

### Problem: 1.x and 2.x Conflict

If the old version of \`moai\` is being executed:

\`\`\`bash
# Check which moai is running
which moai

# Remove 1.x if still present
uv tool uninstall moai-adk
# or
pip uninstall moai-adk

# Restart terminal and verify 2.x
moai version
\`\`\`

## Next Steps After Installation

Once installed, initialize your project:

### Create a New Project

\`\`\`bash
moai init my-project
\`\`\`

### Apply to Existing Project

\`\`\`bash
cd my-existing-project
moai init
\`\`\`

## Upgrade

To upgrade to the latest version:

\`\`\`bash
moai update
\`\`\`

### Update Options

\`\`\`bash
# Check version only (no update)
moai update --check

# Synchronize templates only (skip package upgrade)
moai update --templates-only

# Config edit mode (re-run init wizard)
moai update --config
moai update -c

# Force update without backup
moai update --force

# Auto-approve mode (auto-approve all confirmations)
moai update --yes
\`\`\`

### Merge Strategy

\`\`\`bash
# Force auto-merge (default)
moai update --merge

# Force manual merge
moai update --manual
\`\`\`

<Callout type="info">
**Automatically Preserved Items**: User settings, custom agents, custom commands, custom skills, custom hooks, SPEC documents, and reports are automatically preserved during updates.
</Callout>

See the [Update Guide](https://adk.mo.ai.kr/getting-started/update) for details.

## Uninstall

To completely remove MoAI-ADK:

\`\`\`bash
# Remove the binary
rm $(which moai)

# Remove config directory (optional)
rm -rf ~/.moai
\`\`\`

---

## Next Steps

Learn how to configure MoAI-ADK in the [Initial Setup Wizard](./init-wizard).
`,

  '/docs/getting-started/update': `
import { Callout } from 'nextra/components'

# Update

Keep MoAI-ADK up to date and perform smooth upgrades with the smart update workflow.

## Update Command

To update MoAI-ADK to the latest version:

\`\`\`bash
moai update
\`\`\`

This command runs a 3-phase smart update workflow.

## 3-Phase Smart Update Workflow

\`\`\`mermaid
flowchart TD
    A[Run moai update] --> B[Stage 1: Check Package Version]
    B --> C[Check latest version]
    C --> D[Update available?]

    D -->|Yes| E[Stage 2: Compare Config Versions]
    D -->|No| F[Already up to date]

    E --> G[Config format changed?]
    G -->|Yes| H[Config migration]
    G -->|No| I[Preserve config]

    H --> J[Stage 3: Template Sync]
    I --> J

    J --> K[Update template files]
    K --> L[Completion report]
\`\`\`

### Stage 1: Check Package Version

First, compare the currently installed version with the latest version on PyPI.

\`\`\`bash
# Check current version
moai --version

# Check available updates
moai update --check-only
\`\`\`

**Items Checked:**

- Currently installed version
- PyPI latest version
- Changelog (new features, bug fixes, compatibility)

**Output Example:**

\`\`\`
Current version: 1.2.0
Latest version: 1.3.0

Release notes:
- Add new expert-performance agent
- Improve token optimization
- Fix SPEC validation issues

Update available! Run 'moai update' to upgrade.
\`\`\`

### Stage 2: Compare Config Versions

Check configuration file format and compatibility.

\`\`\`mermaid
sequenceDiagram
    participant Update as Update Command
    participant Current as Current Config
    participant Schema as Config Schema
    participant Backup as Backup

    Update->>Current: Read current config
    Current->>Schema: Compare versions
    alt Compatibility issue
        Schema->>Backup: Auto backup
        Backup-->>Update: Backup complete
        Update->>Schema: Run migration
        Schema-->>Update: Migration complete
    else Compatible
        Schema-->>Update: No changes
    end
\`\`\`

**Files Checked:**

- \`.moai/config/sections/user.yaml\`
- \`.moai/config/sections/language.yaml\`
- \`.moai/config/sections/quality.yaml\`

**Migration Example:**

\`\`\`yaml
# Old config (v1.2.0)
development_mode: ddd
test_coverage_target: 85

# New config (v1.3.0)
development_mode: ddd
test_coverage_target: 85
ddd_settings:
  require_existing_tests: true
  characterization_tests: true
\`\`\`

<Callout type="tip">
Configuration files in \`.moai/config/\` are always backed up before migration.
</Callout>

### Stage 3: Template Sync

Synchronize project templates and base files to the latest version.

\`\`\`mermaid
graph TD
    A[Template Sync] --> B[SKILL.md templates]
    A --> C[Agent templates]
    A --> D[Document templates]

    B --> E[Detect changes]
    C --> E
    D --> E

    E --> F{User changes?}

    F -->|No| G[Auto update]
    F -->|Yes| H[Offer merge options]

    G --> I[Sync complete]
    H --> J[User selection]
    J --> I
\`\`\`

**Files Synced:**

- \`.moai/templates/\` - Project templates
- \`.claude/skills/\` - Skill templates
- \`.claude/agents/\` - Agent templates

<Callout type="info">
User-modified template files are preserved, with merge options offered for new versions.
</Callout>

## Update Options

### Operation Modes

| Command | Binary Update | Template Sync |
|---------|----------------|---------------|
| \`moai update\` | O | O |
| \`moai update --binary\` | O | X |
| \`moai update --templates-only\` | X | O |

### Binary-Only Update

Update the MoAI-ADK binary only without syncing templates:

\`\`\`bash
$ moai update --binary
\`\`\`

**Use cases:**
- When you have manually modified templates
- When you want to skip template synchronization
- When only binary update is needed

### Template-Only Sync

Sync templates only without updating the binary:

\`\`\`bash
$ moai update --templates-only
\`\`\`

**Use cases:**
- Apply latest skill and agent templates
- Keep binary version while updating templates
- When template sync is needed across multiple projects

### Check Only

Check available versions without actual update:

\`\`\`bash
$ moai update --check-only
\`\`\`

### Auto Update

Automatically update without confirmation:

\`\`\`bash
$ moai update --yes
\`\`\`

### Specific Version

Update to a specific version:

\`\`\`bash
$ moai update --version 1.2.0
\`\`\`

### Keep Backup

Preserve backup for recovery if update fails:

\`\`\`bash
$ moai update --keep-backup
\`\`\`

## Post-Update Procedures

### Step 1: Check Version

\`\`\`bash
moai --version
\`\`\`

### Step 2: Verify Configuration

\`\`\`bash
moai doctor
\`\`\`

### Step 3: Check New Features

\`\`\`bash
moai --help
\`\`\`

Check for newly added commands or options.

## Troubleshooting

### Problem: Update Failed

\`\`\`bash
Error: Update failed - permission denied
\`\`\`

**Solution:**

\`\`\`bash
# Manual update with uv
uv tool install moai-adk --force-reinstall

# Or manual update with pip
pip install --upgrade moai-adk
\`\`\`

### Problem: Config Migration Error

\`\`\`bash
Error: Config migration failed
\`\`\`

**Solution:**

\`\`\`bash
# Restore from backup
cp -r .moai/config.bak .moai/config

# Manual migration
vim .moai/config/sections/quality.yaml
\`\`\`

### Problem: Template Conflicts

\`\`\`bash
Warning: Template conflicts detected
\`\`\`

**Solution:**

\`\`\`bash
# Auto merge (preserve user changes)
$ moai update --merge

# Manual merge (preserve backup, create merge guide)
$ moai update --manual

# Force update (no backup)
$ moai update --force
\`\`\`

## Personal Settings Management

When updating MoAI-ADK, **CLAUDE.md** and **settings.json** are overwritten with new versions. If you have personal modifications, manage them as follows.

### Using .local Files

Store personal settings in separate files to prevent overwriting during updates:

| File | Location | Purpose |
|------|----------|---------|
| \`CLAUDE.md\` | Project root | MoAI-ADK managed (changed on update) |
| \`settings.json\` | \`.claude/\` | MoAI-ADK managed (changed on update) |
| \`CLAUDE.local.md\` | Project root | ✅ Project personal settings (not affected by update) |
| \`.claude/settings.local.json\` | Project | ✅ Project personal settings (not affected by update) |

**Personal Settings Example (Project Local):**

\`\`\`markdown
# CLAUDE.local.md

## User Information

- Name: John Developer
- Role: Senior Software Engineer
- Expertise: Backend Development, DevOps

## Development Preferences

- Languages: Python, TypeScript
- Frameworks: FastAPI, React
- Testing: pytest, Jest
- Documentation: Markdown, OpenAPI
\`\`\`

**Personal Settings Example (settings):**

\`\`\`json
// .claude/settings.local.json
{
  "env": {
    "ANTHROPIC_AUTH_TOKEN": "YOUR-API-KEY",
    "ANTHROPIC_BASE_URL": "https://api.z.ai/api/anthropic",
    "ANTHROPIC_DEFAULT_HAIKU_MODEL": "glm-4.7-flashx",
    "ANTHROPIC_DEFAULT_SONNET_MODEL": "glm-4.7",
    "ANTHROPIC_DEFAULT_OPUS_MODEL": "glm-4.7"
  },
  "permissions": {
    "allow": [
      "Bash(bun run typecheck:*)",
      "Bash(bun install)",
      "Bash(bun run build)"
    ]
  },
  "enabledMcpjsonServers": [
    "context7"
  ],
  "companyAnnouncements": [
    "🗿 MoAI-ADK: 20 Specialized Agents + 52 Skills with SPEC-First DDD",
    "⚡ /moai: One-stop Plan→Run→Sync automation with intelligent routing",
    "🌳 moai worktree: Parallel SPEC development in isolated worktree environments",
    "🤖 Expert Agents (9): backend, frontend, security, devops, debug, performance, refactoring, testing, chrome-extension",
    "🤖 Manager Agents (7): git, spec, ddd, docs, quality, project, strategy",
    "🤖 Builder Agents (4): agent, skill, command, plugin",
    "🤖 Team Agents (8, experimental): researcher, analyst, architect, designer, backend-dev, frontend-dev, tester, quality",
    "📋 Workflow: /moai plan (SPEC) → /moai run (DDD) → /moai sync (Docs)",
    "🚀 Options: --team (parallel Agent Teams), --ultrathink (deep analysis via Sequential Thinking MCP), --loop (iterative auto-fix)",
    "✅ Quality: TRUST 5 + ≥85% coverage + Ralph Engine (LSP + AST-grep)",
    "🔄 Git Strategy: 3-Mode (Manual/Personal/Team) with Smart Merge config updates",
    "📚 Tip: moai update --templates-only syncs latest skills and agents to your project",
    "📚 Tip: moai worktree new SPEC-XXX creates isolated worktree for parallel development",
    "⚙️ moai update -c: Configure Model availability (high/medium/low) based on your Claude plan tier",
    "💡 Hybrid Mode: Plan with Claude (Opus/Sonnet), Run/Sync with GLM-5 for cost savings",
    "💡 Parallel Dev: Terminal 1 runs Claude, Terminal 2+ run 'moai glm && claude' for parallel execution",
    "💎 GLM-5 Sponsor: z.ai partnership - cost-effective AI with equivalent performance",
    "🏆 moai rank: Track your Claude token usage and compete on rank.mo.ai.kr leaderboard"
  ],
  "_meta": {
    "description": "User-specific Claude Code settings (gitignored - never commit)",
    "created_at": "2026-01-27T18:15:26.175926Z",
    "note": "Edit this file to customize your local development environment"
  }
}
\`\`\`

<Callout type="info">
**Configuration Priority:** Local > Project > User > Enterprise<br />
<code>settings.local.json</code> overrides project settings.
</Callout>

### moai Folder Structure

MoAI-ADK only manages files in the following folders:

\`\`\`
.claude/
├── agents/
│   └── moai/                # MoAI-ADK agents (update target)
│
├── hooks/
│   └── moai/                # MoAI-ADK hook scripts (update target)
│
├── skills/
│   ├── moai-*               # MoAI-ADK skills (moai- prefix, update target)
│   │
│   └── my-skills/           # ✅ Personal skills (not updated)
│
└── rules/
    └── moai/                # Rule files (moai managed)
        ├── core/            # Core principles and constitution
        ├── development/     # Development guidelines and standards
        ├── languages/       # Language-specific rules (16 languages)
        └── workflow/        # Workflow phase definitions
\`\`\`

**Naming Conventions:**

| Type | Location | Update Impact |
|------|----------|---------------|
| **Agents** | \`agents/moai/\` | ⚠️ **Changed on update** |
| **Hooks** | \`hooks/moai/\` | ⚠️ **Changed on update** |
| **Skills** | \`skills/moai-*\` | ⚠️ **Changed on update** |
| **Rules** | \`rules/moai/\` | ⚠️ **Changed on update** |
| **Personal Agents** | \`agents/my-agents/\` | ✅ **Not affected by update** |
| **Personal Skills** | \`skills/my-skills/\` | ✅ **Not affected by update** |

<Callout type="warning">
**Important:** Skills with \`moai-*\` prefix are managed by MoAI-ADK. Use \`my-*\` folders or separate prefixes for personal additions or modifications.
</Callout>

<Callout type="warning">
**Important:** Files in \`moai/\` folders may be overwritten during updates. Use separate folders for personal additions or modifications.
</Callout>

### How to Organize Files

\`\`\`bash
# Move personal agents (example)
mv .claude/agents/my-agent.md .claude/my-agents/

# Move personal skills (example)
mv .claude/skills/my-skill.md .claude/my-skills/
\`\`\`

### Changelog

Check [GitHub Releases](https://github.com/modu-ai/moai-adk/releases) for recent changes.

## Rollback

If problems occur after update, you can rollback to a previous version:

\`\`\`bash
# Rollback to specific version
uv tool install moai-adk==1.2.0 --force-reinstall

# Or restore from backup
cp -r .moai/config.bak .moai/config
\`\`\`

<Callout type="warning">
Commit your work before rollback.
</Callout>

## Next Steps

After completing update:

1. **[Check Changelog](/getting-started/update)** - Learn new features
2. **[Core Concepts](/core-concepts/what-is-moai-adk)** - Master new agents and features
3. **[Quick Start](/getting-started/quickstart)** - Apply new features to your project

---

Update regularly to take advantage of the latest features and improvements in MoAI-ADK!
`,

  '/docs/core-concepts/what-is-moai-adk': `
import { Callout } from 'nextra/components'

# What is MoAI-ADK?

MoAI-ADK is a high-quality code generation framework for AI-based development. With 20 specialized agents and 52 skills, it provides a systematic and safe development workflow.

<Callout type="tip">
**One-line summary:** MoAI-ADK is an AI development framework that "documents conversations with AI (SPEC), safely improves code (DDD), and automatically validates quality (TRUST 5)."
</Callout>

## MoAI-ADK Introduction

**MoAI** means "MoAI" (MoAI - Everybody's AI). **ADK** stands for Agentic Development Kit, a toolkit where AI agents lead the development process.

MoAI-ADK is an **Agentic Development Kit** that enables AI agents to interact with each other within Claude Code to perform agent coding. Just like an AI development team collaborating to complete a project, MoAI-ADK's AI agents perform development work in their respective areas of expertise while collaborating with each other.

| AI Development Team | MoAI-ADK | Role |
|---------------------|----------|------|
| Product Owner | User (Developer) | Decide what to build |
| Team Lead / Tech Lead | MoAI Orchestrator | Coordinate overall work and delegate to team members |
| Planner / Spec Writer | manager-spec | Document requirements |
| Developers / Engineers | expert-backend, expert-frontend | Implement actual code |
| QA / Code Reviewer | manager-quality | Validate quality standards |

## Why MoAI-ADK?

### Problems with Vibe Coding

**Vibe Coding** is a method of writing code while naturally conversing with AI. You say "create this feature" and AI generates code. It's intuitive and fast, but causes serious problems in practice.

\`\`\`mermaid
flowchart TD
    A["Write code while talking to AI"] --> B["Get good results"]
    B --> C["Session ends or<br>context initializes"]
    C --> D["Context loss"]
    D --> E["Explain from the beginning"]
    E --> A
\`\`\`

**Specific Problems in Practice:**

| Problem | Situation Example | Result |
|---------|-------------------|--------|
| **Context Loss** | Have to re-explain authentication method discussed for 1 hour yesterday | Time waste, inconsistent quality |
| **Quality Inconsistency** | AI sometimes generates good code, sometimes bad code | Unpredictable code quality |
| **Breaking Existing Code** | Said "fix this part" but broke other features | Bugs, rollback needed |
| **Repeated Explanations** | Have to explain project structure and coding rules every time | Reduced productivity |
| **No Validation** | No way to verify if AI-generated code is safe | Security vulnerabilities, missing tests |

### MoAI-ADK Solutions

| Problem | MoAI-ADK Solution |
|---------|-------------------|
| Context loss | Permanently preserve requirements with **SPEC documents** |
| Quality inconsistency | Apply consistent quality standards with **TRUST 5 framework** |
| Breaking existing code | Protect existing functionality with **DDD** characterization tests |
| Repeated explanations | Automatically load project context with **CLAUDE.md and skill system** |
| No validation | Automatically validate code quality with **LSP quality gates** |

## Core Philosophy

<Callout type="warning">
**"The purpose of Vibe Coding is not fast productivity, but code quality."**

MoAI-ADK is not a tool for quickly churning out code. The goal is to create **higher quality** code than humans write directly, while leveraging AI. Fast speed is a secondary effect that naturally follows while maintaining quality.
</Callout>

This philosophy is concretized in three principles:

1. **SPEC-First**: Before writing code, clearly define what to make in a document
2. **Safe Improvement (DDD)**: Incrementally improve while preserving existing code behavior
3. **Auto Quality Validation (TRUST 5)**: Automatically validate all code with 5 quality principles

## Key Components

MoAI-ADK is composed of three axes: **agents**, **skills**, and **commands**.

### Agents (20)

Agents are experts in specific fields. Users don't need to call agents directly; MoAI orchestrator automatically selects and delegates to the appropriate agent.

| Type | Count | Role | Examples |
|------|-------|------|----------|
| **Manager** Agents | 7 | Workflow management and coordination | manager-spec, manager-ddd, manager-docs |
| **Expert** Agents | 9 | Specialized domain implementation | expert-backend, expert-frontend, expert-security, expert-chrome-extension |
| **Builder** Agents | 4 | Create new components | builder-agent, builder-skill, builder-command |

\`\`\`mermaid
flowchart TD
    MoAI["MoAI Orchestrator<br>Analyze user requests and delegate"]

    subgraph Managers["Manager Agents (7)"]
        M1["manager-spec<br>Create SPEC documents"]
        M2["manager-ddd<br>Manage DDD implementation"]
        M3["manager-docs<br>Create documentation"]
        M4["manager-quality<br>Quality validation"]
        M5["manager-strategy<br>Design strategy"]
        M6["manager-project<br>Project management"]
        M7["manager-git<br>Git operations"]
    end

    subgraph Experts["Expert Agents (9)"]
        E1["expert-backend<br>API, Server"]
        E2["expert-frontend<br>UI, React"]
        E3["expert-security<br>Security analysis"]
        E4["expert-testing<br>Create tests"]
        E5["expert-chrome-extension<br>Browser extensions"]
        E6["Other expert agents"]
    end

    subgraph Builders["Builder Agents (4)"]
        B1["builder-agent<br>Create agents"]
        B2["builder-skill<br>Create skills"]
        B3["builder-command<br>Create commands"]
        B4["builder-plugin<br>Create plugins"]
    end

    MoAI --> Managers
    MoAI --> Experts
    MoAI --> Builders
\`\`\`

### Skills (52)

Skills are **expert knowledge modules** that agents use. They contain best practices and patterns for programming languages, platforms, and frameworks.

| Category | Count | Description | Examples |
|----------|-------|-------------|----------|
| **Foundation** | Foundation Skills | MoAI core principles and patterns | moai-foundation-core, moai-foundation-claude |
| **Workflow** | Workflows | Development process management | moai-workflow-spec, moai-workflow-ddd |
| **Domain** | Domains | Backend, frontend, DB expertise | moai-domain-backend, moai-domain-frontend |
| **Language** | Languages | Support for 16 programming languages | moai-lang-python, moai-lang-typescript |
| **Platform** | Platforms | Cloud and infrastructure | moai-platform-vercel, moai-platform-supabase |
| **Library** | Libraries | Frameworks and libraries | moai-library-nextra, moai-library-mermaid |
| **Tool** | Tools | Development tool integration | moai-tool-ast-grep, moai-tool-svg |
| **Framework** | Frameworks | Application frameworks | moai-framework-electron |

### Commands (8)

Commands are **slash commands** that users execute directly in Claude Code.

**Workflow Commands (4):**

| Command | Role | Phase |
|---------|------|-------|
| \`/moai project\` | Project initialization and documentation generation | Preparation |
| \`/moai plan\` | Create SPEC document | Plan |
| \`/moai run\` | Implement with DDD | Run |
| \`/moai sync\` | Document sync and PR creation | Sync |

**Utility Commands (4):**

| Command | Role |
|---------|------|
| \`/moai\` | Autonomous execution from SPEC to code (full workflow) |
| \`/moai fix\` | One-time auto fix (parallel scan and fix) |
| \`/moai loop\` | Autonomous repeat fix loop (repeat until complete) |
| \`/moai feedback\` | Submit feedback to MoAI-ADK |

## 3-Phase Development Workflow

All MoAI-ADK development follows the **Plan - Run - Sync** 3-phase process. This flow is similar to cooking.

| Phase | Cooking Analogy | MoAI-ADK | Responsible Agent |
|-------|-----------------|----------|-------------------|
| **Plan** | Write recipe | Define requirements in SPEC document | manager-spec |
| **Run** | Cook food | Implement code with DDD | manager-ddd |
| **Sync** | Take photos and share | Generate documentation and create PR | manager-docs |

\`\`\`mermaid
flowchart TD
    Start(["Development Start"]) --> Plan

    subgraph Plan["1. Plan Phase"]
        P1["User requests feature"] --> P2["manager-spec converts to<br>EARS format"]
        P2 --> P3["Create SPEC document<br>.moai/specs/SPEC-XXX/spec.md"]
    end

    Plan --> Run

    subgraph Run["2. Run Phase"]
        R1["ANALYZE<br>Analyze code structure"] --> R2["PRESERVE<br>Create characterization tests"]
        R2 --> R3["IMPROVE<br>Incremental code improvement"]
    end

    Run --> Sync

    subgraph Sync["3. Sync Phase"]
        S1["Create API documentation"] --> S2["Update CHANGELOG"]
        S2 --> S3["Create Pull Request"]
    end

    Sync --> Done(["Development Complete"])
\`\`\`

**Actual Usage Example:**

\`\`\`bash
# 1. Plan: Define requirements
> /moai plan "Implement JWT-based user authentication"

# 2. Run: Implement with DDD
> /moai run SPEC-AUTH-001

# 3. Sync: Generate documentation and PR
> /moai sync SPEC-AUTH-001
\`\`\`

## MoAI Orchestrator

MoAI is the **central coordinator** of MoAI-ADK. It analyzes all user requests and delegates work to the most appropriate agent. Users only need to talk to MoAI, and it assigns experts automatically.

\`\`\`mermaid
flowchart TD
    User["User Request"] --> Analysis["1. Analyze Request<br>Evaluate complexity and scope"]
    Analysis --> Routing["2. Routing<br>Select optimal agent"]
    Routing --> Decision{"Complex task?"}

    Decision -->|"Simple task"| Direct["Handle with tools directly"]
    Decision -->|"Complex task"| Delegate["Delegate to expert agent"]

    Delegate --> Execute["3. Execute Agent<br>Parallel or sequential"]
    Direct --> Report
    Execute --> Report["4. Report Results<br>Integrate and report to user"]
\`\`\`

**MoAI's Core Roles:**

1. **Request Analysis**: Understand user intent and detect technical keywords
2. **Agent Selection**: Select optimal agent using 5-step decision tree
3. **Parallel Execution**: Process up to 10 independent tasks in parallel
4. **Result Integration**: Integrate results from multiple agents into one report

<Callout type="info">
**Agent Selection Criteria:** MoAI selects agents in the following order:

1. Need codebase exploration? --> Explore agent
2. Need external document research? --> Web search tools
3. Need domain expertise? --> Expert agent
4. Need workflow coordination? --> Manager agent
5. Complex multi-step task? --> manager-strategy agent
</Callout>

## Project Structure

When you install MoAI-ADK, the following structure is created in your project:

\`\`\`
my-project/
├── CLAUDE.md                  # MoAI execution guidelines
├── .claude/
│   ├── agents/moai/           # 20 AI agent definitions
│   ├── skills/moai-*/         # 52 skill modules
│   ├── hooks/moai/            # Automation hook scripts
│   └── rules/moai/            # Coding rules and standards
└── .moai/
    ├── config/                # MoAI configuration files
    │   └── sections/
    │       └── quality.yaml   # TRUST 5 quality settings
    ├── specs/                 # SPEC document storage
    │   └── SPEC-XXX/
    │       └── spec.md
    └── memory/                # Cross-session context persistence
\`\`\`

**Key File Descriptions:**

| File/Directory | Role |
|----------------|------|
| \`CLAUDE.md\` | Execution guidelines that MoAI reads. Contains project rules, agent catalog, workflow definitions |
| \`.claude/agents/\` | Define each agent's expertise and tool permissions |
| \`.claude/skills/\` | Knowledge modules containing best practices for programming languages, platforms |
| \`.moai/specs/\` | Where SPEC documents are stored. Each feature has its own directory |
| \`.moai/config/\` | Manages project settings like TRUST 5 quality standards, DDD settings |

## Multilingual Support

MoAI-ADK supports 4 languages. When users request in Korean, it responds in Korean; when requested in English, it responds in English.

| Language | Code | Support Range |
|----------|------|---------------|
| Korean | ko | Conversation, documentation, commands, error messages |
| English | en | Conversation, documentation, commands, error messages |
| Japanese | ja | Conversation, documentation, commands, error messages |
| Chinese | zh | Conversation, documentation, commands, error messages |

<Callout type="info">
**Language Settings:** In \`.moai/config/sections/language.yaml\`, you can set conversation language, code comment language, and commit message language separately. For example, you can converse in Korean while writing code comments and commit messages in English.
</Callout>

## Next Steps

Now that you understand the big picture of MoAI-ADK, it's time to learn each core concept in detail.

- [SPEC-Based Development](/core-concepts/spec-based-dev) -- Learn how to define requirements as documents
- [Domain-Driven Development](/core-concepts/ddd) -- Learn how to safely improve existing code
- [TRUST 5 Quality](/core-concepts/trust-5) -- Learn how to automatically validate code quality
`,

  '/docs/core-concepts/spec-based-dev': `
import { Callout } from "nextra/components";

# SPEC-Based Development

Detailed guide to MoAI-ADK's SPEC-based development methodology.

<Callout type="tip">
  **One-line summary:** SPEC is "documenting conversations with AI." Even if session ends, you can continue working anytime with just the SPEC.
</Callout>

<Callout type="info">
  **SPEC is for Agents:** SPEC is not for developers to memorize or learn. It's a document that agents reference when performing work. Just understanding SPEC principles conceptually is sufficient.
</Callout>

## What is SPEC?

**SPEC** (Specification) is a document that defines project requirements in a structured format.

Using a daily life analogy, SPEC is like a **recipe for cooking**. When cooking from memory alone, it's easy to miss ingredients or forget the order. But if you write down the recipe, anyone can cook the same dish accurately.

| Cooking Recipe | SPEC Document | Common Points |
|----------------|---------------|---------------|
| List of required ingredients | List of requirements | Define what's needed |
| Cooking order | Implementation order | Define the sequence |
| Finished photo | Acceptance criteria | Define what the finished result looks like |
| No vague expressions like "a little salt" | Clear with EARS format | Remove ambiguity |

## Why Do We Need SPEC?

### Vibe Coding's Context Loss Problem

When writing code while conversing with AI, the biggest problem is **context loss**.

\`\`\`mermaid
flowchart TD
    A["Converse with AI for 1 hour<br>Discuss auth, DB schema, API design"] --> B["Reach good conclusion<br>Decide on JWT + Redis session management"]
    B --> C["Session ends<br>Token limit exceeded, resume next day etc."]
    C --> D["Context loss<br>AI doesn't remember yesterday's discussion"]
    D --> E["Explain from the beginning<br>Discuss again whether to use JWT or sessions"]
    E --> A
\`\`\`

**Specific Situations Where Context Loss Occurs:**

| Situation | What Happens | Result |
|-----------|--------------|--------|
| Session timeout | Previous conversation disappears after some time | Lost decisions |
| \`/clear\` executed | Initialize context to save tokens | Entire previous context lost |
| Token limit exceeded | Long conversations cut old content | Lost early decisions |
| Resume next day | New session doesn't know yesterday's conversation | Must re-explain everything |

### Solving Problems with SPEC

SPEC fundamentally solves these problems by **saving conversations to files**.

\`\`\`mermaid
flowchart TD
    A["Converse with AI<br>Discuss feature requirements"] --> B["Reach good conclusion"]
    B --> C["Auto-generate SPEC document<br>.moai/specs/SPEC-AUTH-001/spec.md"]
    C --> D["Session ends"]
    D --> E["Read SPEC and resume work<br>/moai run SPEC-AUTH-001"]
    E --> F["Continue implementation<br>All previous decisions preserved"]
\`\`\`

**Difference with and without SPEC:**

<Callout type="info">
**Working without SPEC:**

Assume you discussed "user authentication feature" with AI for 1 hour yesterday. JWT or sessions? Token expiration time? Where to store refresh token? You must discuss all this again.

**With SPEC:**

Just one line to start implementing yesterday's decision:

\`\`\`bash
> /moai run SPEC-AUTH-001
\`\`\`

</Callout>

## EARS Format

**EARS** (Easy Approach to Requirements Syntax) is a method for writing clear requirements. Removes natural language ambiguity and converts requirements to testable format.

EARS provides 5 types of requirement patterns.

### 1. Ubiquitous (Always True)

Requirements the system must **always** comply with. Apply unconditionally.

**Format:** "The system shall ~"

**Example:**

\`\`\`yaml
- id: REQ-001
  type: ubiquitous
  priority: HIGH
  text: "The system shall validate all user inputs"
  acceptance_criteria:
    - "Perform type validation for all input values"
    - "Use parameterized queries to prevent SQL Injection"
    - "Output escaping to prevent XSS"
\`\`\`

**Daily Analogy:** Like "always wear seatbelt when driving." No special conditions, always follow.

### 2. Event-driven (Event-Based)

Defines how the system should respond when a specific event occurs.

**Format:** "WHEN ~, IF ~, THEN ~"

\`\`\`mermaid
flowchart TD
    A["WHEN<br>Event occurs"] --> B{"IF<br>Check condition"}
    B -->|Condition met| C["THEN<br>Expected behavior"]
    B -->|Condition not met| D["ELSE<br>Alternative behavior"]
\`\`\`

**Example:**

\`\`\`yaml
- id: REQ-002
  type: event-driven
  priority: HIGH
  text: |
    WHEN user clicks login button,
    IF email and password are valid,
    THEN the system shall issue JWT token and redirect to dashboard
  acceptance_criteria:
    - given: "Registered user account exists"
      when: "Login with correct email and password"
      then: "200 response with JWT token issued"
      and: "Token expiration time is 1 hour"
\`\`\`

**Daily Analogy:** Like "When doorbell rings (WHEN), check monitor to see if I know them (IF), then open the door (THEN)."

### 3. State-driven (State-Based)

Defines how the system should behave while a specific state is maintained.

**Format:** "WHILE ~, the system shall ~"

**Example:**

\`\`\`yaml
- id: REQ-003
  type: state-driven
  priority: MEDIUM
  text: |
    WHILE user is logged in,
    the system shall refresh session every 5 minutes
  acceptance_criteria:
    - "Auto refresh 5 minutes after last activity"
    - "Show notification 5 minutes before session expires"
    - "Auto logout after 30 minutes of inactivity"
\`\`\`

**Daily Analogy:** Like "While air conditioner is on (WHILE), maintain room temperature at 25°C."

### 4. Unwanted (Prohibited)

Defines what the system must **never** do. Mainly used for security requirements.

**Format:** "The system shall not ~"

**Example:**

\`\`\`yaml
- id: REQ-004
  type: unwanted
  priority: CRITICAL
  text: "The system shall not store passwords in plain text"
  acceptance_criteria:
    - "Password hashed with bcrypt (cost factor 12)"
    - "Unhashed password not included in logs"
    - "Cannot store plain text password in database"

- id: REQ-005
  type: unwanted
  priority: CRITICAL
  text: "The system shall not use hardcoded secret keys"
  acceptance_criteria:
    - "All secret keys use environment variables or secret manager"
    - "No secret keys included in code"
    - "Prevent secret keys in Git commits"
\`\`\`

**Daily Analogy:** Like "Don't hide house key under doormat." Explicitly states what NOT to do.

### 5. Optional (Nice-to-Have)

Features recommended but not required for implementation.

**Format:** "Where possible, the system shall ~"

**Example:**

\`\`\`yaml
- id: REQ-006
  type: optional
  priority: LOW
  text: "Where possible, the system shall send email notification on login"
  acceptance_criteria:
    - "Only works if email server is configured"
    - "Provide option to disable notifications"
\`\`\`

**Daily Analogy:** Like "Make dessert if time permits." Nice to have but not required.

### EARS at a Glance

| Type | Format | Purpose | Priority |
|---------------|--------------------------|------------------|----------|
| **Ubiquitous** | "The system shall ~" | Always-applicable rules | Usually HIGH |
| **Event-driven** | "WHEN ~, THEN ~" | Define event responses | Varies by feature |
| **State-driven** | "WHILE ~, the system shall ~" | State-maintaining behavior | Usually MEDIUM |
| **Unwanted** | "The system shall not ~" | Prohibitions (security) | Usually CRITICAL |
| **Optional** | "Where possible, the system shall ~" | Optional features | Usually LOW |

## SPEC Document Structure

SPEC documents are automatically created by **manager-spec agent**. Developers don't need to memorize EARS format; just request in natural language and the agent converts it.

**Complete SPEC Document Structure:**

\`\`\`yaml
---
id: SPEC-AUTH-001               # Unique identifier
title: User Authentication System # Clear and concise title
priority: HIGH                  # HIGH, MEDIUM, LOW
status: ACTIVE                  # DRAFT, ACTIVE, IN_PROGRESS, COMPLETED
created: 2025-01-12             # Creation date
updated: 2025-01-12             # Last modified date
author: Development Team         # Author
version: 1.0.0                  # Document version
---

# User Authentication System

## Overview
Implement JWT-based user authentication system

## Requirements
### Ubiquitous
- The system shall require authentication for all API requests

### Event-driven
- WHEN user logs in, THEN the system shall issue JWT

### Unwanted
- The system shall not store passwords in plain text

## Acceptance Criteria
- 200 response with JWT token for valid credentials
- 401 response for invalid credentials

## Constraints
- API response time within 500ms
- Password bcrypt hashing (cost factor 12)

## Dependencies
- Redis (session management)
- PostgreSQL (user data)
\`\`\`

## SPEC Workflow

SPEC creation starts with a single \`/moai plan\` command.

\`\`\`mermaid
flowchart TD
    A["User Request<br>Describe feature in natural language"] --> B["manager-spec agent execution"]
    B --> C["Analyze requirements<br>Ask about ambiguous parts"]
    C --> D["Convert to EARS format<br>Classify into 5 types"]
    D --> E["Write acceptance criteria<br>Given-When-Then format"]
    E --> F["Create SPEC document<br>.moai/specs/SPEC-XXX/spec.md"]
    F --> G["Request review<br>Confirm with user"]
\`\`\`

**Execution Method:**

\`\`\`bash
# SPEC creation command
> /moai plan "Implement user authentication feature"
\`\`\`

This automatically proceeds with:

1. **Requirements Analysis**: manager-spec analyzes what "user authentication feature" means
2. **Clarification Questions**: Asks user about ambiguous parts (e.g., "Do you prefer JWT or sessions?")
3. **EARS Conversion**: Automatically classifies natural language into 5 EARS types
4. **Document Creation**: Creates \`.moai/specs/SPEC-AUTH-001/spec.md\` file
5. **Review Request**: Shows generated SPEC to user for confirmation

<Callout type="warning">
  **Important:** Always review SPEC documents created by agents at least once. AI may misinterpret requirements or miss items. Especially check if acceptance criteria are testable and priorities are appropriate.
</Callout>

## Related Documents

- [What is MoAI-ADK?](/core-concepts/what-is-moai-adk) -- Understand the overall structure of MoAI-ADK
- [Domain-Driven Development](/core-concepts/ddd) -- Learn how to safely implement code based on SPEC
- [TRUST 5 Quality](/core-concepts/trust-5) -- Learn quality validation criteria for implemented code
`,

  '/docs/core-concepts/ddd': `
import { Callout } from 'nextra/components'

# MoAI-ADK Development Methodology

Detailed guide to MoAI-ADK's Hybrid (TDD + DDD) methodology and DDD's ANALYZE-PRESERVE-IMPROVE cycle.

<Callout type="tip">
**One-line summary:** MoAI-ADK automatically applies **Hybrid (TDD + DDD) for new projects** and **DDD for existing projects**. Like home remodeling, record the current state and safely change one room at a time.
</Callout>

## Methodology Overview

MoAI-ADK automatically selects the optimal development methodology based on your project's state.

\`\`\`mermaid
flowchart TD
    A["🔍 Project Analysis"] --> B{"New Project?"}
    B -->|"Yes"| C["Hybrid<br>TDD + DDD"]
    B -->|"No"| D{"Test Coverage ≥ 50%?"}
    D -->|"Yes"| C
    D -->|"No"| E["DDD<br>ANALYZE-PRESERVE-IMPROVE"]
    C --> F["New Code → TDD"]
    C --> G["Existing Code → DDD"]
    E --> H["Safe Legacy Improvement"]

    style C fill:#4CAF50,color:#fff
    style E fill:#2196F3,color:#fff
\`\`\`

| Project Type | Methodology | Cycle | Description |
|-------------|-------------|-------|-------------|
| **New Project** | **Hybrid** | TDD + DDD | New code uses TDD, existing code modifications use DDD |
| **Existing Project** (Coverage ≥ 50%) | **Hybrid** | TDD + DDD | Sufficient test base enables TDD |
| **Existing Project** (Coverage < 50%) | **DDD** | ANALYZE → PRESERVE → IMPROVE | Safe incremental improvement |

## What is DDD?

DDD (Domain-Driven Development) is a **safe code improvement method**. An approach that incrementally improves while respecting existing code.

### Home Remodeling Analogy

Let me explain DDD using a **home remodeling** analogy for those new to it. Imagine remodeling a 10-year-old house.

| Home Remodeling Stage | DDD Stage | What It Does | Why It Matters |
|-----------------------|-----------|--------------|----------------|
| Inspect the house | **ANALYZE** (Analyze) | Check for wall cracks, plumbing condition, electrical wiring | Can't fix what you don't understand |
| Take photos of current state | **PRESERVE** (Preserve) | Photograph every room to record | Later when confused "was there a wall here?" you can check |
| Remodel one room at a time | **IMPROVE** (Improve) | Work on one room at a time, verify each time | If you do everything at once, you won't know where problems started |

**Wrong vs Right Approach:**

\`\`\`
Wrong: "Let's change all the code at once!"
  --> High risk of breaking existing functionality
  --> Hard to identify where problems occurred

Right: "Record current behavior with tests, then change incrementally!"
  --> Tests immediately tell if existing functionality breaks
  --> Just rollback last change if problems occur
\`\`\`

## ANALYZE-PRESERVE-IMPROVE Cycle

MoAI-ADK's DDD proceeds as a cycle of three repeated phases.

\`\`\`mermaid
flowchart TD
    A["ANALYZE\\nAnalyze code structure\\nIdentify problems"] --> B["PRESERVE\\nCreate characterization tests\\nRecord current behavior"]
    B --> C["IMPROVE\\nIncremental code improvement\\nVerify tests pass"]
    C --> D{"All tests\\npass?"}
    D -->|"Pass"| E["Commit and\\nproceed to next improvement"]
    D -->|"Fail"| F["Rollback last change"]
    F --> C
    E --> G{"All requirements\\nimplemented?"}
    G -->|"Remaining"| A
    G -->|"Complete"| H["Implementation Complete"]
\`\`\`

### Phase 1: ANALYZE (Analyze)

Thoroughly analyze the existing code structure. Like a doctor examining a patient.

**Analysis Items:**

| Analysis Target | What to Check | Analogy |
|-----------------|---------------|---------|
| File Structure | What files exist and how they're connected | Check house blueprints |
| Dependencies | Which modules depend on which | Check plumbing and electrical wiring |
| Test Status | How many existing tests | Check existing insurance |
| Problems | Duplicate code, security vulnerabilities, performance bottlenecks | Check for cracked walls, leaks |

**Example Analysis Report by manager-ddd:**

\`\`\`markdown
## Code Analysis Report

- Target: src/auth/ (authentication module)
- Files: 8 Python files
- Code Lines: 1,850 lines
- Test Coverage: 45%

## Discovered Problems
1. Duplicate authentication logic (same code repeated in 3 places)
2. Hardcoded secret key (written directly in config.py)
3. SQL Injection vulnerability (user_repository.py)
4. Insufficient tests (45%, target 85%)
\`\`\`

### Phase 2: PRESERVE (Preserve)

Build a **safety net** to preserve existing behavior. The core of this phase is creating **characterization tests**.

<Callout type="info">
**What are characterization tests?**

Like **taking photos before home remodeling**.

Regular tests check "is this working correctly?" But characterization tests record "how is this currently working?"

They don't judge right/wrong, but **record the fact that "it originally worked like this."** Later if tests fail after code changes, you immediately know existing behavior changed.
</Callout>

**Characterization Test Example:**

\`\`\`python
class TestExistingLoginBehavior:
    """Characterization test recording current login function behavior"""

    def test_valid_login_returns_token(self):
        """
        GIVEN: Registered user exists
        WHEN: Login with correct password
        THEN: Record response returned by current implementation
        """
        user = create_test_user(
            email="test@example.com",
            password="password123"
        )

        result = login_service.login("test@example.com", "password123")

        # Record current behavior as-is (not judging right/wrong)
        assert result["status"] == "success"
        assert result["token"] is not None
        assert result["expires_in"] == 3600  # Current expiration time

    def test_wrong_password_returns_error(self):
        """Record current behavior for login with wrong password"""
        create_test_user(email="test@example.com", password="password123")

        result = login_service.login("test@example.com", "wrongpassword")

        assert result["status"] == "error"
        assert result["code"] == 401
\`\`\`

**Test Writing Strategy:**

\`\`\`mermaid
flowchart TD
    A["Analyze existing code"] --> B["List key behaviors"]
    B --> C["Write characterization test<br>for each behavior"]
    C --> D["Run all tests"]
    D --> E{"All tests<br>pass?"}
    E -->|"Pass"| F["Safety net established<br>Ready to refactor"]
    E -->|"Fail"| G["Fix tests<br>Adjust to current behavior"]
    G --> D
\`\`\`

### Phase 3: IMPROVE (Improve)

Once characterization tests are in place, you can safely improve the code. The core principle is **divide changes into small steps**.

**Improvement Process:**

\`\`\`python
# BEFORE: Code before improvement
def login(email, password):
    # SQL Injection vulnerability
    user = db.query("SELECT * FROM users WHERE email = '" + email + "'")
    if user and check_password(user.password, password):
        token = generate_token(user.id)
        return {"status": "success", "token": token}
    return {"status": "error", "code": 401}

# ====================================

# AFTER: Code after improvement (completed in 3 iterations)
def login(email: str, password: str) -> LoginResult:
    """Process user login."""
    # Iteration 1: Use parameterized query to prevent SQL Injection
    user = user_repository.find_by_email(email)

    if not user:
        return LoginResult.failure("Invalid credentials")

    # Iteration 2: Centralize authentication logic
    if not auth_service.verify_password(user, password):
        return LoginResult.failure("Invalid credentials")

    # Iteration 3: Separate token service
    token = token_service.generate(user.id)
    return LoginResult.success(token)
\`\`\`

**Incremental Improvement Steps:**

\`\`\`mermaid
flowchart TD
    S1["Iteration 1: Small change<br>Fix SQL Injection"] --> T1["Run tests<br>156/156 pass"]
    T1 --> C1["Commit: Save safe state"]
    C1 --> S2["Iteration 2: Small change<br>Centralize auth logic"]
    S2 --> T2["Run tests<br>156/156 pass"]
    T2 --> C2["Commit: Save safe state"]
    C2 --> S3["Iteration 3: Small change<br>Separate token service"]
    S3 --> T3["Run tests<br>156/156 pass"]
    T3 --> C3["Commit: Improvement complete"]
\`\`\`

<Callout type="warning">
**Core Principle:** Always run tests after each change. If tests fail, just rollback the last change. This is the power of "small steps." If you change too much at once, it's hard to identify where problems occurred.
</Callout>

## Hybrid Mode (TDD + DDD)

Hybrid mode combines TDD (Test-Driven Development) and DDD methodologies, applying each based on the code context.

### When to Use Hybrid Mode

| Project State | Test Coverage | Recommendation |
|--------------|---------------|----------------|
| Greenfield (new) | N/A | Hybrid |
| Brownfield | 10-49% | Hybrid |
| Brownfield | >= 50% | TDD |
| Brownfield | < 10% | DDD |

### How Hybrid Mode Works

Hybrid mode applies **different methodologies based on code type**:

\`\`\`mermaid
flowchart TD
    A["Start Code Change"] --> B{"What is<br>the target?"}
    B -->|"New File"| C["Apply TDD<br>RED-GREEN-REFACTOR"]
    B -->|"New Function<br>in Existing File"| C
    B -->|"Modify Existing<br>Code"| D["Apply DDD<br>ANALYZE-PRESERVE-IMPROVE"]
    B -->|"Delete Code"| E["Verify Characterization<br>Tests Pass"]

    C --> F["Coverage Target: 85%+ for new code"]
    D --> G["Coverage Target: 85%+ for modified code"]
    E --> G
\`\`\`

<Callout type="info">
**Classification Rules:**

- **New files**: TDD rules (strict test-first)
- **New functions in existing files**: TDD rules for those functions
- **Modified existing files**: DDD rules (characterization tests first)
- **Deleted code**: Verify characterization tests still pass
</Callout>

### Hybrid Mode Workflow

**For NEW code** (new files, new functions):
- Apply TDD workflow (RED-GREEN-REFACTOR)
- Strict test-first requirement
- Coverage target: 85% for new code

**For EXISTING code** (modifications, refactoring):
- Apply DDD workflow (ANALYZE-PRESERVE-IMPROVE)
- Characterization tests before changes
- Coverage target: 85% for modified code

### Success Criteria

- All SPEC requirements implemented
- New code has TDD-level coverage (85%+)
- Modified code has characterization tests
- Overall coverage improvement trend
- TRUST 5 quality gates passed

### Hybrid Mode Configuration

\`\`\`yaml
constitution:
  development_mode: hybrid  # Use Hybrid methodology

  hybrid_settings:
    new_features: tdd              # Use TDD for new code
    legacy_refactoring: ddd        # Use DDD for existing code
    min_coverage_new: 90           # Coverage target for new code
    min_coverage_legacy: 85        # Coverage target for modified code
    preserve_refactoring: true     # Preserve behavior during refactoring

  test_coverage_target: 85
\`\`\`

<Callout type="tip">
**When to use Hybrid mode:**

- Projects with partial test coverage (10-49%)
- Teams adding new features to existing codebases
- Migrations from legacy to modern code
- Any project with mixed new and existing code
</Callout>

### Methodology Comparison

| Aspect | DDD | TDD | Hybrid |
|--------|-----|-----|--------|
| **Test timing** | After analysis (PRESERVE) | Before code (RED) | Mixed |
| **Coverage approach** | Gradual improvement | Strict per-commit | Unified 85% target |
| **Best for** | Legacy refactoring only | Isolated modules (rare) | All development work |
| **Risk level** | Low (preserves behavior) | Medium (requires discipline) | Medium |
| **Coverage exemptions** | Allowed | Not allowed | Allowed for legacy only |
| **Run Phase cycle** | ANALYZE-PRESERVE-IMPROVE | RED-GREEN-REFACTOR | Both (per change type) |

## Why DDD?

### Why Improve Without Breaking Existing Code

When you tell AI "fix this code," AI modifies it with good intentions. But **if other code depends on it**, the modified code can break existing functionality.

| Approach | Pros | Cons |
|----------|------|------|
| **Change all at once** | Can be faster | High risk of breaking existing functionality, hard to rollback |
| **DDD incremental improvement** | Preserve existing functionality, can rollback anytime | More steps |

DDD is "a method to go fast by going slow." Because you verify safety at each step, it ultimately greatly reduces bug-fix time.

## What are Characterization Tests?

Characterization tests are DDD's core tool. Let's learn more.

### Difference from Regular Tests

| Aspect | Regular Tests | Characterization Tests |
|---------|---------------|------------------------|
| **Purpose** | "Is this working correctly?" | "How is this currently working?" |
| **When Written** | Before/after writing new code | Before refactoring existing code |
| **Criteria** | Requirements (specification) | Current actual behavior |
| **Analogy** | Check if built according to blueprint | Take photos of current house state |

### Writing Principles

1. **Record only, don't judge**: Even if current code has bugs, record that behavior
2. **Include edge cases**: Record all exceptional cases, not just normal ones
3. **Make reproducible**: Tests should produce same results every time
4. **Make fast**: Characterization tests must run fast to verify after each change

## How to Execute DDD

### /moai run Command

Once SPEC document is ready, execute DDD cycle with the following command:

\`\`\`bash
# Execute DDD
> /moai run SPEC-AUTH-001
\`\`\`

This command automatically causes **manager-ddd agent** to:

\`\`\`mermaid
flowchart TD
    A["Read SPEC document<br>SPEC-AUTH-001"] --> B["ANALYZE<br>Analyze code structure<br>Understand dependencies"]
    B --> C["PRESERVE<br>Create characterization tests<br>Establish baseline"]
    C --> D["IMPROVE<br>Iteration 1: Centralize auth logic<br>Verify tests pass"]
    D --> E["IMPROVE<br>Iteration 2: Environment variable for secret key<br>Verify tests pass"]
    E --> F["IMPROVE<br>Iteration 3: Fix SQL Injection<br>Verify tests pass"]
    F --> G["Final verification<br>Confirm 85%+ coverage<br>Pass TRUST 5 gates"]
    G --> H["Implementation complete<br>Ready to move to Sync phase"]
\`\`\`

**Example Execution Log:**

\`\`\`markdown
## ANALYZE Phase Complete
- Target files: 8
- Test coverage: 45%
- Problems found: 2 SQL Injections, hardcoded secret key

## PRESERVE Phase Complete
- Characterization tests: 156 written
- Current behavior capture: 100%
- All tests pass

## IMPROVE Phase Complete
- Iteration 1: Centralize auth logic (156/156 tests pass)
- Iteration 2: Environment variable for secret key (156/156 tests pass)
- Iteration 3: Fix SQL Injection (156/156 tests pass)

## Final Result
- Coverage: 45% --> 87%
- Behavior preservation: 100%
- Security vulnerabilities: 0
\`\`\`

## DDD Configuration

Adjust DDD-related settings in \`.moai/config/sections/quality.yaml\` file.

\`\`\`yaml
constitution:
  development_mode: ddd  # Use DDD methodology

  ddd_settings:
    require_existing_tests: true    # Require existing tests before refactoring
    characterization_tests: true    # Auto-generate characterization tests
    behavior_snapshots: true        # Use snapshot tests
    max_transformation_size: small  # Limit change size

  test_coverage_target: 85          # Target coverage
\`\`\`

**Key Setting Descriptions:**

| Setting | Default | Description |
|---------|---------|-------------|
| \`require_existing_tests\` | \`true\` | Existing tests required before refactoring |
| \`characterization_tests\` | \`true\` | Auto-generate characterization tests if insufficient |
| \`behavior_snapshots\` | \`true\` | Record complex outputs with snapshot tests |
| \`max_transformation_size\` | \`small\` | Limit size of code changed at once |

**max_transformation_size Options:**

| Value | Change Scope | Recommended Situation |
|-------|--------------|----------------------|
| \`small\` | 1-2 files, simple refactoring | General code improvement (recommended) |
| \`medium\` | 3-5 files, medium complexity | Module structure changes |
| \`large\` | 10+ files, complex changes | Architecture changes (use caution) |

<Callout type="warning">
Setting \`max_transformation_size\` to \`large\` changes many files at once, making it hard to identify problem sources. Keep it at \`small\` when possible.
</Callout>

## Practical Example: Legacy Code Refactoring

Scenario for refactoring an authentication module written 3 years ago.

### Situation

\`\`\`
Problems:
- 2 SQL Injection vulnerabilities
- Hardcoded secret key
- 3 places with duplicate authentication logic
- Test coverage 45%
- High code complexity
\`\`\`

### Execution Process

\`\`\`bash
# Phase 1: SPEC creation (Plan)
> /moai plan "Refactor legacy authentication system. Fix SQL Injection, environment variable for secret key, centralize authentication logic"

# manager-spec creates SPEC-AUTH-REFACTOR-001
\`\`\`

\`\`\`bash
# Phase 2: DDD execution (Run)
> /moai run SPEC-AUTH-REFACTOR-001

# manager-ddd executes ANALYZE-PRESERVE-IMPROVE cycle
# ANALYZE: Analyze code, list problems
# PRESERVE: Write 156 characterization tests
# IMPROVE: 3 iterations of incremental improvement
\`\`\`

\`\`\`bash
# Phase 3: Document sync (Sync)
> /moai sync SPEC-AUTH-REFACTOR-001

# manager-docs updates API docs, creates refactoring report
\`\`\`

### Results

| Metric | Before | After | Change |
|--------|--------|-------|--------|
| Test Coverage | 45% | 87% | +42% |
| SQL Injection Vulnerabilities | 2 | 0 | Removed |
| Hardcoded Secret Key | Yes | No | Environment variable |
| Duplicate Code | 3 | 0 | Centralized |
| Code Complexity | High | 35% reduction | Structure improved |

<Callout type="info">
**Key Point:** During refactoring, not a single existing behavior changed. All 156 characterization tests passed in each iteration, greatly improving code quality without affecting existing users.
</Callout>

## Related Documents

- [SPEC-Based Development](/core-concepts/spec-based-dev) -- Need SPEC document before starting DDD
- [TRUST 5 Quality](/core-concepts/trust-5) -- Check quality validation criteria after DDD completion
`,

  '/docs/core-concepts/trust-5': `
import { Callout } from "nextra/components";

# TRUST 5 Quality Framework

Detailed guide to 5 quality principles that all MoAI-ADK code must pass.

<Callout type="tip">
  **One-line summary:** TRUST 5 is an automated quality gate that verifies "is code tested, readable, consistent, secure, and trackable?"
</Callout>

## What is TRUST 5?

TRUST 5 is **5 quality principles** that MoAI-ADK applies to all code. Both AI-generated and human-written code must pass these standards.

Using a daily life analogy, it's like building inspection for buildings. You must check structural safety, electrical wiring, plumbing, fire safety, and building permit documents before you can move in. Code is the same.

| Building Inspection | TRUST 5 | What's Checked |
|---------------------|---------|----------------|
| Structural safety | **T** (Tested) | Verify code works correctly with tests |
| Electrical/plumbing blueprints | **R** (Readable) | Can other developers understand the code |
| Building code compliance | **U** (Unified) | Matches project coding standards |
| Fire/security systems | **S** (Secured) | No security vulnerabilities |
| Permit documents | **T** (Trackable) | Change history clearly recorded |

\`\`\`mermaid
flowchart TD
    Code["Code written"] --> T1["T: Tested<br>Test verification"]
    T1 --> R["R: Readable<br>Readability verification"]
    R --> U["U: Unified<br>Consistency verification"]
    U --> S["S: Secured<br>Security verification"]
    S --> T2["T: Trackable<br>Traceability verification"]
    T2 --> Deploy["Ready to deploy"]

    T1 -.- T1D["85%+ coverage<br>0 LSP type errors"]
    R -.- RD["Clear names<br>0 LSP lint errors"]
    U -.- UD["Consistent style<br>LSP warnings < 10"]
    S -.- SD["OWASP Top 10<br>0 LSP security warnings"]
    T2 -.- T2D["Conventional Commits<br>Issue tracking"]
\`\`\`

## T - Tested (Tested)

**Core:** All code must be verified with tests.

### What's Checked

| Check Item | Criteria | Description |
|------------|----------|-------------|
| Test Coverage | 85% or more | 85%+ of all code must be verified by tests |
| Characterization Tests | Protect existing code | Tests to preserve existing behavior during refactoring |
| LSP Type Errors | 0 | No type checking errors |
| LSP Diagnostic Errors | 0 | No language server diagnostic errors |

### Why 85%?

There's a reason we don't require 100%.

| Coverage | Realistic Meaning |
|----------|-------------------|
| Under 60% | Major features may not be tested |
| 60-84% | Basic features tested but edge cases may be missing |
| **85-95%** | **Core logic and most edge cases verified (recommended)** |
| 95-100% | Test maintenance cost starts to exceed benefits |

### Best Practices

\`\`\`python
def calculate_discount(price: float, discount_rate: float) -> float:
    """Calculate discounted price.

    Args:
        price: Original price (0 or more)
        discount_rate: Discount rate (0.0 ~ 1.0)

    Returns:
        Discounted price

    Raises:
        ValueError: For invalid input values
    """
    if price < 0:
        raise ValueError("Price cannot be less than 0")
    if not 0 <= discount_rate <= 1:
        raise ValueError("Discount rate must be between 0.0 and 1.0")
    return price * (1 - discount_rate)


# Tests verify both normal and exception cases
def test_calculate_discount_normal():
    assert calculate_discount(10000, 0.1) == 9000
    assert calculate_discount(5000, 0.5) == 2500
    assert calculate_discount(0, 0.5) == 0

def test_calculate_discount_invalid_price():
    with pytest.raises(ValueError, match="Price cannot"):
        calculate_discount(-1000, 0.1)

def test_calculate_discount_invalid_rate():
    with pytest.raises(ValueError, match="Discount rate"):
        calculate_discount(10000, 1.5)
\`\`\`

---

## R - Readable (Readable)

**Core:** Code must be clear and easy to understand.

### What's Checked

| Check Item | Criteria | Description |
|------------|----------|-------------|
| Naming Rules | Reveals intent | Variable, function, class names must be clear |
| Code Comments | Explain complex logic | Comments explaining "why" (not "what") |
| LSP Lint Errors | 0 | Pass all linter rules |
| Function Length | Appropriate size | Functions shouldn't be too long |

### Best Practices

\`\`\`python
# Bad: Can't tell what it does from the name
def calc(d, r):
    return d * (1 - r)

# Good: Can understand the role just by reading the name
def calculate_discounted_price(original_price: float, discount_rate: float) -> float:
    """Calculate price discounted by discount_rate from original_price."""
    return original_price * (1 - discount_rate)
\`\`\`

<Callout type="info">
  **Readability Tip:** Ask yourself "can I understand this 6 months from now?" If not, rename or add comments.
</Callout>

---

## U - Unified (Unified)

**Core:** Maintain consistent code style across the entire project.

### What's Checked

| Check Item | Criteria | Description |
|------------|----------|-------------|
| Code Format | Auto-formatter applied | Python: ruff/black, JS: prettier |
| Naming Rules | Follow project standards | No mixing snake_case, camelCase etc. |
| Error Handling | Consistent pattern | Use same error handling approach everywhere |
| LSP Warnings | Under 10 | Language server warnings under threshold |

### Best Practices

\`\`\`python
# Unified error handling pattern
class AppError(Exception):
    """Application base error"""
    def __init__(self, message: str, code: int = 500):
        self.message = message
        self.code = code

class NotFoundError(AppError):
    """Resource not found"""
    def __init__(self, resource: str, id: str):
        super().__init__(f"{resource} '{id}' not found", code=404)

class ValidationError(AppError):
    """Input validation failed"""
    def __init__(self, field: str, reason: str):
        super().__init__(f"'{field}' validation failed: {reason}", code=400)

# Use same pattern in all services
def get_user(user_id: str) -> User:
    user = user_repository.find_by_id(user_id)
    if not user:
        raise NotFoundError("User", user_id)
    return user
\`\`\`

---

## S - Secured (Secured)

**Core:** All code must pass security verification.

### What's Checked

| Check Item | Criteria | Description |
|------------|----------|-------------|
| OWASP Top 10 | Full compliance | Prevent most common web security vulnerabilities |
| Dependency Scan | No vulnerable packages | Don't use libraries with known vulnerabilities |
| Encryption Policy | Protect sensitive data | Passwords, tokens must be encrypted |
| LSP Security Warnings | 0 | No security-related warnings |

### Major Security Checks

| Vulnerability | Prevention Method | Example |
|---------------|-------------------|---------|
| **SQL Injection** | Parameterized queries | \`db.execute("SELECT * FROM users WHERE id = %s", (id,))\` |
| **XSS** | Output escaping | Auto-escape HTML output |
| **Password Exposure** | bcrypt hashing | \`bcrypt.hashpw(password, salt)\` |
| **Hardcoded Secret Keys** | Environment variables | \`os.environ["SECRET_KEY"]\` |
| **CSRF** | Token verification | Include CSRF token in all state-changing requests |

### Best Practices

\`\`\`python
# Bad: SQL Injection vulnerability
def get_user(username: str) -> dict:
    query = f"SELECT * FROM users WHERE username = '{username}'"
    return db.execute(query)

# Good: Safe with parameterized queries
def get_user(username: str) -> dict:
    query = "SELECT * FROM users WHERE username = %s"
    return db.execute(query, (username,))
\`\`\`

---

## T - Trackable (Trackable)

**Core:** All changes must be clearly traceable.

### What's Checked

| Check Item | Criteria | Description |
|------------|----------|-------------|
| Commit Messages | Conventional Commits | \`feat:\`, \`fix:\`, \`refactor:\` etc. standard format |
| Issue Links | GitHub Issues reference | Include related issue numbers in commits |
| CHANGELOG | Maintain change log | Record changes shown to users |
| LSP State Tracking | Record diagnostic history | Track LSP state changes to detect regression |

### Conventional Commits Format

\`\`\`bash
# Structure: <type>(<scope>): <description>
# Examples:

# Add new feature
$ git commit -m "feat(auth): Add JWT login API"

# Fix bug
$ git commit -m "fix(auth): Fix token expiration time calculation error"

# Refactor
$ git commit -m "refactor(auth): Separate auth logic into AuthService"

# Security improvement
$ git commit -m "security(db): Prevent SQL Injection with parameterized queries"
\`\`\`

**Commit Types:**

| Type | Description | Example |
|------|-------------|---------|
| \`feat\` | New feature | \`feat(api): Add user list API\` |
| \`fix\` | Bug fix | \`fix(auth): Fix login error message\` |
| \`refactor\` | Code improvement (no behavior change) | \`refactor(db): Optimize queries\` |
| \`security\` | Security improvement | \`security(auth): Environment variable for secret key\` |
| \`docs\` | Documentation change | \`docs(readme): Update installation guide\` |
| \`test\` | Test add/modify | \`test(auth): Add login test cases\` |

---

## LSP Quality Gates

MoAI-ADK uses **LSP** (Language Server Protocol) to verify code quality in real-time. LSP is the system that shows errors with red underlines in your IDE.

### Phase-by-Phase LSP Thresholds

Different LSP standards apply to Plan, Run, and Sync phases.

| Phase | Error Allowance | Type Error Allowance | Lint Error Allowance | Warning Allowance | Regression Allowance |
|-------|-----------------|---------------------|---------------------|------------------|---------------------|
| **Plan** | Capture baseline | Capture baseline | Capture baseline | - | - |
| **Run** | 0 | 0 | 0 | - | Not allowed |
| **Sync** | 0 | - | - | Max 10 | Not allowed |

**Meaning of Each Phase:**

- **Plan Phase**: Capture current code's LSP state as "baseline." This becomes the reference.
- **Run Phase**: LSP errors must be 0 at implementation completion. Errors shouldn't increase from baseline (no regression).
- **Sync Phase**: LSP must be clean before documentation and PR creation. Warnings allowed up to 10.

\`\`\`mermaid
flowchart TD
    P["Plan Phase<br>Capture LSP baseline"] --> R["Run Phase<br>0 errors, 0 type errors, 0 lint errors<br>No regression"]
    R --> S["Sync Phase<br>0 errors, warnings under 10<br>Clean LSP state"]
    S --> Deploy["Ready to deploy"]

    R -.- RCheck{"Error increase<br>from baseline?"}
    RCheck -->|"Increase"| Block["Block: Regression detected"]
    RCheck -->|"Same or decrease"| Pass["Pass"]
\`\`\`

## Ralph Engine Integration

**Ralph Engine** is MoAI-ADK's autonomous quality verification loop. Automatically detects and fixes code issues based on LSP diagnostic results.

\`\`\`mermaid
flowchart TD
    A["Code change"] --> B["Run LSP diagnostics"]
    B --> C{"TRUST 5<br>all items pass?"}
    C -->|"All pass"| D["Verification complete<br>Ready to deploy"]
    C -->|"Some fail"| E["Ralph Engine<br>Auto fix attempt"]
    E --> F["Fixed code"]
    F --> B
\`\`\`

**How It Works:**

1. When code changes, LSP runs diagnostics
2. If items don't meet TRUST 5 standards, Ralph Engine attempts auto-fix
3. Run LSP diagnostics again after fix to verify pass
4. Repeat until pass (max 3 retries)

**Related Commands:**

\`\`\`bash
# Run auto fix
> /moai fix

# Repeat auto fix until complete
> /moai loop
\`\`\`

## quality.yaml Configuration

Manage TRUST 5 related settings in \`.moai/config/sections/quality.yaml\` file.

### Key Settings

\`\`\`yaml
constitution:
  # Enable TRUST 5 quality verification
  enforce_quality: true

  # Target test coverage
  test_coverage_target: 85

  # LSP quality gate settings
  lsp_quality_gates:
    enabled: true

    plan:
      require_baseline: true # Capture baseline at Plan start

    run:
      max_errors: 0 # Error allowance in Run phase: 0
      max_type_errors: 0 # Type error allowance: 0
      max_lint_errors: 0 # Lint error allowance: 0
      allow_regression: false # No regression from baseline

    sync:
      max_errors: 0 # Error allowance in Sync phase: 0
      max_warnings: 10 # Warning allowance: max 10
      require_clean_lsp: true # Require clean LSP state

    cache_ttl_seconds: 5 # LSP diagnostic cache time
    timeout_seconds: 3 # LSP diagnostic timeout
\`\`\`

## Related Documents

- [What is MoAI-ADK?](/core-concepts/what-is-moai-adk) -- Understand the overall structure of MoAI-ADK
- [SPEC-Based Development](/core-concepts/spec-based-dev) -- Learn Plan phase where TRUST 5 is applied
- [Domain-Driven Development](/core-concepts/ddd) -- Learn Run phase where TRUST 5 is applied
`,

  '/docs/workflow-commands/moai-project': `
import { Callout } from "nextra/components";

# /moai project

Analyzes your project's codebase to automatically generate foundational documents that AI needs to understand your project.

<Callout type="info">

**New Command Format**

\`/moai:0-project\` has been changed to \`/moai project\`.

</Callout>

## Overview

\`/moai project\` is the **project document generation** command of the MoAI-ADK workflow. It analyzes the project's source code, configuration files, and directory structure to help AI quickly understand the project.

<Callout type="tip">
**Why do you need project documents?**

Claude Code knows nothing about your project when starting a new conversation.
Through documents created by \`/moai project\`, AI will understand:

- What the project **does** (product.md)
- How the code **is structured** (structure.md)
- What **technologies are used** (tech.md)

Only with these documents can AI perform accurate tasks appropriate for the project context in subsequent commands like \`/moai plan\` and \`/moai run\`.

</Callout>

## Usage

\`\`\`bash
> /moai project
\`\`\`

When executed without separate arguments or options, it automatically analyzes the current project directory.

## Generated Documents

\`/moai project\` creates 3 documents under the \`.moai/project/\` directory:

\`\`\`
.moai/
└── project/
    ├── product.md      # Project overview
    ├── structure.md    # Directory structure analysis
    └── tech.md         # Technology stack information
\`\`\`

### product.md - Project Overview

Contains the core information of the project:

| Item            | Description                      | Example                           |
| --------------- | -------------------------------- | --------------------------------- |
| **Project Name** | Official name of the project     | "MoAI-ADK"                         |
| **Description**  | What the project does            | "AI-based development toolkit"     |
| **Target Users** | Who the project is for           | "Developers using Claude Code"     |
| **Key Features** | List of main features            | "SPEC creation, DDD implementation, documentation automation" |
| **Project Status**| Current development stage        | "v1.1.0, Production"              |

### structure.md - Directory Structure

Analyzes the file and folder composition of the project:

| Item               | Description                                      |
| ------------------ | ------------------------------------------------ |
| **Directory Tree** | Visualizes the entire folder structure           |
| **Main Folder Purpose** | Describes the role of each folder        |
| **Module Composition** | Relationships between core modules        |
| **Entry Points**    | Program start files (main.py, index.ts, etc.) |

### tech.md - Technology Stack

Organizes technology information used in the project:

| Item              | Description             | Example                          |
| ----------------- | ------------------------ | -------------------------------- |
| **Programming Languages** | Languages and versions used | "Python 3.12, TypeScript 5.5" |
| **Frameworks**     | Major frameworks         | "FastAPI 0.115, React 19"         |
| **Databases**     | DB types and ORM         | "PostgreSQL 16, SQLAlchemy"       |
| **Build Tools**   | Build and package management | "Poetry, Vite"               |
| **Deployment Environment** | Hosting and CI/CD    | "Docker, GitHub Actions"          |

## Execution Process

\`/moai project\` runs different workflows depending on the project type.

### New Project vs Existing Project

\`\`\`mermaid
flowchart TD
    Start["Execute /moai project"] --> Q1{Project Type?}

    Q1 -->|New Project| New["Phase 0.5: Information Collection"]
    Q1 -->|Existing Project| Exist["Phase 1: Codebase Analysis"]

    New --> NewQ["Project Purpose"]
    New --> NewL["Main Language"]
    New --> NewD["Project Description"]

    NewQ --> Gen["Phase 3: Document Generation"]
    NewL --> Gen
    NewD --> Gen

    Exist --> Exp["Explore Agent<br/>Codebase Analysis"]
    Exp --> Conf["Phase 2: User Confirmation"]

    Conf -->|Approve| Gen
    Conf -->|Cancel| End["Exit"]

    Gen --> LSP["Phase 3.5: LSP Check"]
    LSP --> Complete["Phase 4: Complete"]
\`\`\`

## Detailed Workflow

### Phase 0: Project Type Detection

First, check the project type.

<Callout type="warning">
  **[HARD] Rule**: Must ask project type first. Before analyzing codebase, confirm project situation with the user.
</Callout>

**Question**: What type of project is this?

| Option            | Description                                                   |
| ----------------- | ------------------------------------------------------------ |
| **New Project**   | Project starting from scratch. Proceeds with information collection format |
| **Existing Project** | Project with existing code. Automatically analyzes code    |

### Phase 0.5: New Project Information Collection

For new projects, collect the following information:

**Question 1 - Project Purpose**:

- **Web Application**: Frontend, backend, or full-stack web app
- **API Service**: REST API, GraphQL, or microservices
- **CLI Tool**: Command-line utility or automation tool
- **Library/Package**: Reusable code library or SDK

**Question 2 - Main Language**:

- **Python**: Backend, data science, automation
- **TypeScript/JavaScript**: Web, Node.js, frontend
- **Go**: High-performance services, CLI tools
- **Other**: Rust, Java, Ruby, etc. (detailed questions)

**Question 3 - Project Description** (free input):

- Project name
- Main features or goals
- Target users

Based on collected information, generate initial documents and move to Phase 4.

### Phase 1: Codebase Analysis (Existing Project)

For existing projects, delegate analysis to the **Explore agent**.

<Callout type="info">
  **Agent Delegation**: Codebase analysis is performed by the Explore subagent. MoAI only collects results and presents them to the user.
</Callout>

**Analysis Goals**:

- **Project Structure**: Main directories, entry points, architecture patterns
- **Technology Stack**: Languages, frameworks, core dependencies
- **Core Features**: Main features and business logic locations
- **Build System**: Build tools, package managers, scripts

**Explore Agent Output**:

- Detected primary language
- Identified frameworks
- Architecture patterns (MVC, Clean Architecture, Microservices, etc.)
- Main directory mapping (source, tests, config, docs)
- Dependency catalog
- Entry point identification

### Phase 2: User Confirmation

Show analysis results to the user and get approval.

**Displayed Content**:

- Detected language
- Frameworks
- Architecture
- Core feature list

**Options**:

- **Proceed**: Continue with document generation
- **Detailed Review**: Review analysis details first
- **Cancel**: Adjust project setup

### Phase 3: Document Generation

Delegate document generation to the **manager-docs agent**.

**Passed Content**:

- Phase 1 analysis results (or Phase 0.5 user input)
- Phase 2 user confirmation
- Output directory: \`.moai/project/\`
- Language: conversation_language from config

**Generated Files**:

| File          | Content                                                                     |
| ------------- | --------------------------------------------------------------------------- |
| **product.md** | Project name, description, target users, key features, use cases           |
| **structure.md**| Directory tree, purpose of each directory, key file locations, module composition |
| **tech.md**   | Technology stack overview, framework selection rationale, development environment requirements, build/deployment configuration |

### Phase 3.5: Development Environment Check

Checks if appropriate LSP servers are installed for the detected technology stack.

**Language-specific LSP Mapping** (16 languages supported):

| Language               | LSP Server                   | Check Command                      |
| ---------------------- | ---------------------------- | ---------------------------------- |
| Python                 | pyright or pylsp             | \`which pyright\`                    |
| TypeScript/JavaScript  | typescript-language-server   | \`which typescript-language-server\` |
| Go                     | gopls                        | \`which gopls\`                      |
| Rust                   | rust-analyzer                | \`which rust-analyzer\`              |
| Java                   | jdtls (Eclipse JDT)          | -                                  |
| Ruby                   | solargraph                   | \`which solargraph\`                 |
| PHP                    | intelephense                 | Check via npm                      |
| C/C++                  | clangd                       | \`which clangd\`                     |
| Kotlin                 | kotlin-language-server       | -                                  |
| Scala                  | metals                       | -                                  |
| Swift                  | sourcekit-lsp                | -                                  |
| Elixir                 | elixir-ls                    | -                                  |
| Dart/Flutter           | dart language-server         | Built into Dart SDK                |
| C#                     | OmniSharp or csharp-ls       | -                                  |
| R                      | languageserver (R package)   | -                                  |
| Lua                    | lua-language-server          | -                                  |

**Options when LSP Not Installed**:

- **Continue without LSP**: Proceed to completion
- **Show Installation Guide**: Display setup guide for detected language
- **Auto Install Now**: Install via expert-devops agent (requires confirmation)

### Phase 4: Completion

Displays completion message in the user's language.

- List of generated files
- Location: \`.moai/project/\`
- Status: Success or partial completion

**Next Step Options**:

- **Write SPEC**: Define feature specification with \`/moai plan\`
- **Review Documents**: Open and review generated files
- **Start New Session**: Clear context and start fresh

## When to Use?

### Must Run

- **First time applying MoAI-ADK to a new project** - Foundation documents needed for AI to understand the project
- **Introducing MoAI-ADK to an existing project** - Automatically generates documents even for projects with existing code

### Good to Run Again

- **After major project structure changes** - When directory structure or technology stack has changed
- **After introducing new major technologies** - e.g., database changes, framework additions
- **When new team members join the project** - Onboarding based on latest documents

<Callout type="warning">
  \`/moai project\` **overwrites** existing documents. If you have manual modifications, back up before running.
</Callout>

## Practical Examples

### Example 1: Starting with a New Project

#### Step 1: Execute Command

First, initialize the project in the terminal and run Claude Code.

\`\`\`bash
# Initialize project in terminal
$ moai init my-api-project
$ cd my-api-project

# Generate project documents in Claude Code
> /moai project
\`\`\`

#### Step 2: Select Project Type

Since this is a new project, select "New Project".

\`\`\`bash
AI: Please select the project type:
1. New Project (starting from scratch)
2. Existing Project (code exists)

User: 1
\`\`\`

AI switches to new project information collection mode.

#### Step 3: Select Project Purpose

Select the purpose of the project.

\`\`\`bash
AI: Please select the project purpose:
1. Web Application
2. API Service
3. CLI Tool
4. Library/Package

User: 2
\`\`\`

Select API Service to specify this is a REST API server project.

#### Step 4: Select Main Language

Select the programming language to use.

\`\`\`bash
AI: Please select the main language:
1. Python
2. TypeScript/JavaScript
3. Go
4. Other

User: 1
\`\`\`

Select Python to configure a backend API server development environment.

#### Step 5: Enter Project Details

Enter detailed information about the project.

\`\`\`bash
AI: Please describe the project (name, goals, target users):

User: REST API server. Has user authentication and data management features. Tool for developers.
\`\`\`

This information is used to create the \`product.md\` document.

#### Step 6: Document Generation Complete

AI automatically generates documents based on collected information.

\`\`\`bash
[Generating documents...]

Complete! 3 documents have been created in the .moai/project/ directory.
\`\`\`

Generated documents:

- \`.moai/project/product.md\` - Project overview
- \`.moai/project/structure.md\` - Directory structure
- \`.moai/project/tech.md\` - Technology stack

### Example 2: Introducing MoAI-ADK to Existing Project

#### Step 1: Navigate to Project Directory and Initialize

Navigate to a project with existing code and initialize MoAI-ADK.

\`\`\`bash
# Navigate to existing project directory
$ cd ~/projects/existing-api

# Initialize MoAI-ADK
$ moai init

# Generate project documents in Claude Code
> /moai project
\`\`\`

#### Step 2: Select Project Type

Select that this is an existing project.

\`\`\`bash
AI: Please select the project type:
1. New Project (starting from scratch)
2. Existing Project (code exists)

User: 2
\`\`\`

Proceed with existing project mode to start codebase analysis.

#### Step 3: Automatic Codebase Analysis

Explore agent automatically analyzes the project.

\`\`\`bash
[Explore agent analyzing codebase...]

Analysis Results:
- Language: Python 3.12
- Framework: FastAPI 0.115
- Database: PostgreSQL 16
- Architecture: Clean Architecture
- Core Features:
  * User authentication
  * Data CRUD
  * API endpoint management
\`\`\`

The agent automatically identifies project structure, dependencies, and patterns.

#### Step 4: Confirm Analysis Results

Review analysis results and approve document generation.

\`\`\`bash
Do you want to generate documents with this analysis?
1. Proceed
2. Detailed Review
3. Cancel

User: 1
\`\`\`

If the analysis is accurate, select "Proceed" to continue with document generation.

#### Step 5: Document Generation

manager-docs agent generates documents based on analysis results.

\`\`\`bash
[manager-docs agent generating documents...]

Complete! The following files have been created:
- .moai/project/product.md
- .moai/project/structure.md
- .moai/project/tech.md
\`\`\`

Each document documents a different aspect of the project.

#### Step 6: LSP Check and Completion

Verify that the development environment is properly configured.

\`\`\`bash
LSP server 'pyright' is installed.

Please select the next step:
1. Write SPEC (/moai plan)
2. Review Documents
3. Start New Session
\`\`\`

Since the LSP server is installed, you can start development immediately.

### Example 3: Workflow Progression After Project Document Generation

#### Step 1: Generate Project Documents (First Time Only)

Generate documents when first setting up the project.

\`\`\`bash
> /moai project
\`\`\`

This step only needs to be done once per project.

#### Step 2: Create SPEC

Once project documents are generated, AI understands the project.

\`\`\`bash
> /moai plan "Implement user authentication feature"
\`\`\`

Since AI already knows the project's technology stack and structure, it can create more accurate SPECs.

<Callout type="tip">
  \`/moai project\` typically only needs to be run **1-2 times** per project. You don't need to run it every time; only run it again when the project structure changes significantly.
</Callout>

## Agent Chain

\`\`\`mermaid
flowchart TD
    Start["Execute /moai project"] --> Phase0["Phase 0: Type Detection"]
    Phase0 --> Phase05["Phase 0.5: Information Collection<br/>(New Project)"]
    Phase0 --> Phase1["Phase 1: Codebase Analysis<br/>(Existing Project)"]

    Phase1 --> Explore["Explore Subagent<br/>Delegate Code Analysis"]
    Explore --> Phase2["Phase 2: User Confirmation"]

    Phase05 --> Phase3["Phase 3: Document Generation"]
    Phase2 -->|Approve| Phase3

    Phase3 --> Docs["manager-docs Subagent<br/>Delegate Document Generation"]
    Docs --> Phase35["Phase 3.5: LSP Check"]

    Phase35 --> DevOps["expert-devops Subagent<br/>Install LSP (Optional)"]
    DevOps --> Phase4["Phase 4: Complete"]
\`\`\`

## Frequently Asked Questions

### Q: What happens if I run \`/moai plan\` without project documents?

You can create a SPEC, but AI may make **inaccurate technical judgments** without knowing the project's technology stack or structure. Always recommend running \`/moai project\` first.

### Q: Do you analyze private code too?

\`/moai project\` only operates **locally**. Code is not transmitted to external servers, and generated documents are also stored locally in the \`.moai/project/\` directory.

### Q: Does it work with monorepo projects?

Yes, monorepo structure is also supported. Running from the root directory analyzes the entire project structure.

### Q: What happens if there's no LSP server?

Document generation proceeds even without an LSP server. However, code quality diagnosis in the subsequent \`/moai run\` phase may be limited. Phase 3.5 provides LSP installation guidance.

## Related Documents

- [Quick Start](/getting-started/quickstart) - Complete workflow tutorial
- [/moai plan](./moai-1-plan) - Next step: SPEC document creation
- [SPEC-based Development](/core-concepts/spec-based-dev) - Detailed SPEC methodology explanation
- [Subagent Catalog](/advanced/agent-guide) - Explore, manager-docs agent details
`,

  '/docs/workflow-commands/moai-plan': `
import { Callout } from "nextra/components";

# /moai plan

Creates clear SPEC documents in EARS format, turning your conversations with AI into permanent requirement documents.

<Callout type="info">

**New Command Format**

\`/moai:1-plan\` has been changed to \`/moai plan\`.

</Callout>

## Overview

\`/moai plan\` is the **Phase 1 (Plan)** command of the MoAI-ADK workflow. It converts natural language feature requests into structured **SPEC** documents in **EARS** (Easy Approach to Requirements Syntax) format. Internally, the **manager-spec** agent analyzes requirements and generates unambiguous specifications.

<Callout type="info">

**Why do you need a SPEC?**

The biggest problem with **Vibe Coding** is **context loss**.

When your session with AI ends, **all previous discussions disappear**. When you exceed the token limit, **old conversations get cut off**. When you resume work the next day, **you don't remember yesterday's decisions**.

**SPEC documents solve this problem.**

They **save requirements to files** for permanent preservation. They structure them **unambiguously** in EARS format. Even if the session is interrupted, you can **continue working** just by reading the SPEC.

</Callout>

## Usage

Enter the following in the Claude Code conversation:

\`\`\`bash
> /moai plan "Description of the feature you want to implement"
\`\`\`

**Usage Examples:**

\`\`\`bash
# Simple feature
> /moai plan "User login feature"

# Detailed feature description
> /moai plan "JWT-based user authentication: login, signup, token refresh API"

# Refactoring request
> /moai plan "Refactor legacy authentication system to JWT-based"
\`\`\`

## Supported Flags

| Flag                | Description                        | Example                                |
| ------------------- | ---------------------------------- | -------------------------------------- |
| \`--worktree\`        | Auto-create worktree (highest)     | \`/moai plan "feature" --worktree\`      |
| \`--branch\`          | Create traditional branch          | \`/moai plan "feature" --branch\`        |
| \`--resume SPEC-XXX\` | Resume interrupted SPEC work       | \`/moai plan --resume SPEC-AUTH-001\`    |
| \`--team\`            | Force Agent Teams mode             | \`/moai plan "feature" --team\`          |
| \`--solo\`            | Force sub-agent mode               | \`/moai plan "feature" --solo\`          |
| \`--seq\`             | Sequential diagnosis instead of parallel | \`/moai plan "feature" --seq\`    |
| \`--ultrathink\`      | Enable Sequential Thinking MCP     | \`/moai plan "feature" --ultrathink\`    |

### Flag Priority

When multiple flags are specified, they are applied in the following order:

1. **--worktree** (highest): Creates an independent Git worktree
2. **--branch** (alternative): Creates a traditional feature branch
3. **No flags** (default): Create SPEC only, create branch based on user selection

### --worktree Flag

Creates an **independent Git worktree** along with the SPEC to prepare for parallel development:

\`\`\`bash
> /moai plan "Implement payment system" --worktree
\`\`\`

When using this option:

1. Creates a SPEC document
2. Commits the SPEC (required for worktree creation)
3. Creates a worktree on the \`feature/SPEC-{ID}\` branch
4. Allows independent development without affecting main code

<Callout type="tip">
  The \`--worktree\` option is useful when **developing multiple features simultaneously**. Each SPEC works in an independent worktree, so they don't conflict with each other.
</Callout>

## EARS Format Requirements

SPEC documents define requirements using **EARS** (Easy Approach to Requirements Syntax) format. There are 5 patterns, and the manager-spec agent automatically converts natural language to the appropriate pattern.

| Pattern         | Format                          | Purpose              | Example                                                |
| --------------- | ------------------------------- | -------------------- | ------------------------------------------------------ |
| **Ubiquitous**  | "The system SHALL ~"            | Always-applied rules | "The system SHALL log all API requests"                |
| **Event-driven**| "WHEN ~, THEN the system SHALL ~"| Event response       | "WHEN logging in, THEN the system SHALL issue a JWT"   |
| **State-driven**| "WHILE ~, the system SHALL ~"   | State-based behavior | "WHILE logged in, the system SHALL maintain session"   |
| **Unwanted**    | "The system SHALL NOT ~"        | Prohibitions         | "The system SHALL NOT store passwords in plain text"   |
| **Optional**    | "WHERE PRACTICAL, the system SHALL ~" | Optional features  | "WHERE PRACTICAL, the system SHALL support 2FA"        |

<Callout type="tip">
  You don't need to memorize EARS format. The manager-spec agent **automatically converts** natural language. Just describe the feature you want naturally.
</Callout>

## Execution Process

The process that \`/moai plan\` performs internally:

\`\`\`mermaid
flowchart TD
    A["User Request<br/>/moai plan 'feature description'"] --> B{Is clear?}
    B -->|No| C["Explore Subagent<br/>Project Analysis"]
    B -->|Yes| D["Call manager-spec Agent"]
    C --> D
    D --> E["Requirements Analysis<br/>Feature scope, complexity assessment"]
    E --> F{"Clarification needed?"}
    F -->|Yes| G["Ask User<br/>Confirm details"]
    G --> E
    F -->|No| H["Convert to EARS Format<br/>Apply 5 patterns"]
    H --> I["Define Acceptance Criteria<br/>Given-When-Then"]
    I --> J["Create SPEC Document<br/>spec.md, plan.md, acceptance.md"]
    J --> K{"User Approval"}
    K -->|Approved| L["Git Environment Setup"]
    K -->|Revision Requested| E
    K -->|Cancel| M["Exit"]
    L --> N{"Check Flags"}
    N -->|--worktree| O["Create Worktree"]
    N -->|--branch| P["Create Branch"]
    N -->|No flags| Q["User Selection"]
    O --> R["Complete"]
    P --> R
    Q --> R
\`\`\`

**Key Points:**

- If the request is unclear, the **Explore subagent** analyzes the project
- If requirements are unclear, the manager-spec agent **asks the user additional questions**
- Automatically generates **Given-When-Then format acceptance criteria** for all requirements
- Generated SPEC documents are finalized after receiving **user approval**

## SPEC Creation Phases

### Phase 1A: Project Analysis (Optional)

Executed when the request is ambiguous or project situation needs to be understood:

| Execution Condition         | Skip Condition             |
| --------------------------- | -------------------------- |
| Unclear request             | Clear SPEC title           |
| Need to find existing files/patterns | Resume scenario        |
| Project status uncertain    | Existing SPEC context exists |

### Phase 1B: SPEC Planning

The **manager-spec** agent performs the following tasks:

- Project document analysis (product.md, structure.md, tech.md)
- Propose 1-3 SPEC candidates and naming
- Check for duplicate SPECs (.moai/specs/)
- Design EARS structure
- Identify implementation plan and technical constraints
- Verify library versions (stable only, exclude beta/alpha)

### Phase 1.5: Pre-validation Gate

Prevents common errors before SPEC creation:

**Step 1 - Document Type Classification:**

- Detect SPEC, Report, Documentation keywords
- Route reports to .moai/reports/
- Route documentation to .moai/docs/

**Step 2 - SPEC ID Validation (All checks must pass):**

- **ID Format**: \`SPEC-domain-number\` pattern (e.g., \`SPEC-AUTH-001\`)
- **Domain Name**: Approved domain list (AUTH, API, UI, DB, REFACTOR, FIX, UPDATE, PERF, TEST, DOCS, INFRA, DEVOPS, SECURITY, etc.)
- **ID Uniqueness**: Check for duplicates in .moai/specs/
- **Directory Structure**: Must create directory, flat files prohibited

**Compound Domain Rule:** Maximum 2 domains recommended (e.g., UPDATE-REFACTOR-001), maximum 3 allowed.

### Phase 2: SPEC Document Creation

Three files are created simultaneously:

**spec.md:**

- YAML frontmatter (7 required fields: id, version, status, created, updated, author, priority)
- HISTORY section (immediately after frontmatter)
- Complete EARS structure (5 requirement types)
- Content written in conversation_language

**plan.md:**

- Implementation plan with task decomposition
- Technology stack specification and dependencies
- Risk analysis and mitigation strategies

**acceptance.md:**

- Minimum 2 Given/When/Then scenarios
- Edge case test scenarios
- Performance and quality gate criteria

**Quality Constraints:**

- Requirement modules: Maximum 5 per SPEC
- Acceptance criteria: Minimum 2 Given/When/Then scenarios
- Technical terms and function names remain in English

### Phase 3: Git Environment Setup (Conditional)

**Execution Condition:** Phase 2 complete AND one of the following:

- --worktree flag provided
- --branch flag provided or user selected branch creation
- Branch creation allowed in settings (git_strategy config)

**Skip Point:** develop_direct workflow, no flags and selected "use current branch"

## Output

SPEC documents are saved in the \`.moai/specs/\` directory:

\`\`\`
.moai/
└── specs/
    └── SPEC-AUTH-001/
        ├── spec.md          # EARS requirements
        ├── plan.md          # Implementation plan
        └── acceptance.md     # Acceptance criteria
\`\`\`

**Basic structure of SPEC document:**

\`\`\`yaml
---
id: SPEC-AUTH-001
version: 1.0.0
status: ACTIVE
created: 2026-01-28
updated: 2026-01-28
author: Development Team
priority: HIGH
---
\`\`\`

## SPEC Status Management

SPEC documents have the following status lifecycle:

\`\`\`mermaid
flowchart TD
    A["DRAFT<br/>Drafting"] --> B["ACTIVE<br/>Approved"]
    B --> C["IN_PROGRESS<br/>Implementing"]
    C --> D["COMPLETED<br/>Completed"]
    B --> E["REJECTED<br/>Rejected"]
\`\`\`

| Status       | Description                  | Can run \`/moai run\` |
| ------------ | ---------------------------- | ------------------- |
| \`DRAFT\`      | Still being drafted          | No                  |
| \`ACTIVE\`     | Approved, waiting for impl   | **Yes**             |
| \`IN_PROGRESS\`| Currently being implemented  | Yes (resume)        |
| \`COMPLETED\`  | Implementation and verification complete | No  |
| \`REJECTED\`   | Rejected, needs rewriting    | No                  |

## Practical Examples

### Example: Creating JWT Authentication SPEC

**Step 1: Execute Command**

\`\`\`bash
> /moai plan "JWT-based user authentication system: signup, login, token refresh"
\`\`\`

**Step 2: manager-spec Asks Questions** (if needed)

The manager-spec agent may ask questions to confirm details:

- "What is the minimum password length?"
- "What should the token expiration time be?"
- "Does it include social login?"

**Step 3: SPEC Document Creation Result**

A SPEC document with the following structure is created:

\`\`\`yaml
---
id: SPEC-AUTH-001
title: JWT-based user authentication system
priority: HIGH
status: ACTIVE
---
\`\`\`

\`\`\`markdown
# Requirements (EARS Format)

## Ubiquitous

- The system SHALL hash all passwords with bcrypt for storage
- The system SHALL log all authentication requests

## Event-driven

- WHEN logging in with valid credentials, THEN the system SHALL issue a JWT access token (1 hour) and refresh token (7 days)

## Unwanted

- The system SHALL NOT store passwords in plain text
- The system SHALL NOT allow API access with expired tokens
\`\`\`

**Step 4: Git Environment Setup After User Approval**

\`\`\`bash
# When using --worktree flag
> /moai plan "JWT authentication" --worktree

# Result:
# 1. Create SPEC document (.moai/specs/SPEC-AUTH-001/)
# 2. Commit SPEC (feat(spec): Add SPEC-AUTH-001)
# 3. Create worktree (.git/worktrees/SPEC-AUTH-001)
# 4. Display worktree path
\`\`\`

**Step 5: Execute \`/clear\` Then Move to Implementation Phase**

\`\`\`bash
# Clear tokens
> /clear

# Start implementation
> /moai run SPEC-AUTH-001
\`\`\`

## Frequently Asked Questions

### Q: Can I manually edit SPEC documents?

Yes, you can directly edit the \`.moai/specs/SPEC-XXX/spec.md\` file. If you add requirements or modify acceptance criteria and then run \`/moai run\`, the changes will be reflected.

### Q: Can I write code directly without a SPEC?

You can write code directly in Claude Code, but working without a SPEC means you lose context whenever the session ends. **For complex features, creating a SPEC first is more efficient.**

### Q: What rules are used to generate SPEC IDs?

It follows the format \`SPEC-domain-number\` (e.g., \`SPEC-AUTH-001\`)

- \`SPEC-AUTH-001\`: First authentication-related SPEC
- \`SPEC-PAYMENT-002\`: Second payment-related SPEC

The domain is automatically determined by manager-spec based on the feature area.

### Q: What's the difference between \`/moai plan\` and \`/moai\`?

\`/moai plan\` is only responsible for **SPEC document creation**. \`/moai\` automatically performs the **entire workflow** from SPEC creation to implementation and documentation.

### Q: What's the difference between --worktree and --branch?

**--worktree** creates an independent working directory for a completely isolated environment. **--branch** creates a new branch in the current repository. If developing multiple features simultaneously, --worktree is recommended.

## Related Documents

- [SPEC-Based Development](/core-concepts/spec-based-dev) - Detailed explanation of EARS format
- [/moai run](./moai-2-run) - Next step: DDD implementation
- [/moai sync](./moai-3-sync) - Final step: Documentation synchronization
`,

  '/docs/workflow-commands/moai-run': `
import { Callout } from "nextra/components";

# /moai run

Implements code using DDD (Domain-Driven Development) methodology based on SPEC documents.

<Callout type="info">

**New Command Format**

\`/moai:2-run\` has been changed to \`/moai run\`.

</Callout>

## Overview

\`/moai run\` is the **Phase 2 (Run)** command of the MoAI-ADK workflow. It reads the SPEC document created in Phase 1 and safely implements code through the **ANALYZE-PRESERVE-IMPROVE** cycle without breaking existing functionality. Internally, the **manager-ddd** agent manages the entire process.

<Callout type="info">
**Understanding DDD through Home Renovation**

The DDD ANALYZE-PRESERVE-IMPROVE cycle is like **home renovation**:

| Phase        | Analogy            | Actual Work                       |
| ------------ | ------------------ | --------------------------------- |
| **ANALYZE**  | Home inspection    | Understand current code structure and problems |
| **PRESERVE** | Take photos        | Record existing behavior with characterization tests |
| **IMPROVE**  | Remodel room by room| Make small improvements while tests pass |

Just as demolishing the entire house at once is dangerous, it's safer to **change code gradually while verifying each time**.

</Callout>

## Usage

Pass the SPEC ID created in the Plan phase as an argument:

\`\`\`bash
# Must run /clear after Plan phase completion
> /clear

# Start implementation by specifying SPEC ID
> /moai run SPEC-AUTH-001
\`\`\`

<Callout type="warning">
  Make sure to run \`/clear\` before executing \`/moai run\`. You need to clean up tokens used in the Plan phase to fully utilize **200K tokens** in the Run phase.
</Callout>

## Supported Flags

| Flag                | Description                  | Example                             |
| ------------------- | ---------------------------- | ----------------------------------- |
| \`--resume SPEC-XXX\` | Resume interrupted implementation | \`/moai run --resume SPEC-AUTH-001\` |
| \`--team\`            | Force Agent Teams mode       | \`/moai run SPEC-AUTH-001 --team\`     |
| \`--solo\`            | Force sub-agent mode         | \`/moai run SPEC-AUTH-001 --solo\`     |

**Resume Function:**

When re-executing, continues work from the last successful phase checkpoint.

## DDD Cycle

\`/moai run\` executes three phases in order: **ANALYZE -> PRESERVE -> IMPROVE**. Let's look at what happens in each phase in detail.

### 1. ANALYZE (Analyze)

Read existing code and compare with SPEC requirements to understand what needs to be done.

**Analysis Items:**

| Item        | Description                 | Example                                   |
| ----------- | -------------------------- | ----------------------------------------- |
| Code Structure | Files, modules, dependencies | "auth.py depends on user_service.py"      |
| Domain Boundaries | Scope of business logic   | "Separate authentication and user domains" |
| Test Status | Existing test coverage     | "Currently 45% coverage"                  |
| Technical Debt | Parts needing improvement  | "SQL Injection vulnerability found"       |

### 2. PRESERVE (Preserve)

Records the current behavior of existing code as **characterization tests**. These tests serve as a **safety net** to ensure existing functionality still works after refactoring.

<Callout type="tip">
**What are Characterization Tests?**

Rather than judging "whether this code is right or wrong," it's about **recording "this is how it currently behaves."**

For example, if an existing login function returns \`{"status": "success"}\` on success, this behavior is recorded as a test. Later, if you change the code and this test fails, you immediately know that "existing behavior has changed."

</Callout>

### 3. IMPROVE (Improve)

Makes **small changes** to code according to SPEC requirements, running tests each time to verify existing behavior is preserved.

**Core Principle: Small Changes + Verify Each Time**

\`\`\`mermaid
flowchart TD
    A["Small Code Change"] --> B["Run Tests"]
    B --> C{"All Tests Pass?"}
    C -->|Yes| D["Commit"]
    D --> E{"More Changes<br/>Needed?"}
    E -->|Yes| A
    E -->|No| F["Implementation Complete"]
    C -->|No| G["Rollback Change"]
    G --> A
\`\`\`

## Execution Process

The entire process that \`/moai run\` performs internally:

\`\`\`mermaid
flowchart TD
    A["Execute Command<br/>/moai run SPEC-XXX"] --> B["Call manager-strategy"]
    B --> C["Create Strategic Plan"]

    C --> D{"User Approval"}
    D -->|No| E["Exit"]
    D -->|Yes| F["Decompose Work<br/>Max 10 tasks"]

    F --> G["Call manager-ddd"]
    G --> H["ANALYZE<br/>Analyze code structure"]
    H --> I["Map Dependencies"]
    I --> J["Check Existing Tests"]

    J --> K["PRESERVE<br/>Write Characterization Tests"]
    K --> L["Capture Existing Behavior"]
    L --> M["Establish Test Baseline"]

    M --> N["IMPROVE<br/>Start Implementation"]
    N --> O["Apply Small Change"]
    O --> P["Run Tests"]
    P --> Q{"Pass?"}
    Q -->|Yes| R["Commit"]
    R --> S{"All Requirements<br/>Implemented?"}
    S -->|No| O
    S -->|Yes| T["Call manager-quality"]

    Q -->|No| U["Rollback"]
    U --> O

    T --> V{"TRUST 5<br/>Quality Gates"}
    V -->|CRITICAL| W["Report Quality<br/>Issues to User"]
    V -->|PASS/WARNING| X["Git Operations"]

    W --> Y{"Retry Fix?"}
    Y -->|Yes| N
    Y -->|No| Z["Exit"]

    X --> AA["Call manager-git"]
    AA --> AB{"Auto Branch?"}
    AB -->|Yes| AC["Create Feature Branch"]
    AB -->|No| AD["Commit to Current Branch"]
    AC --> AE["Complete"]
    AD --> AE
\`\`\`

## Phase-by-Phase Details

### Phase 1: Analysis and Planning

The **manager-strategy** subagent performs the following tasks:

- Complete SPEC document analysis
- Extract requirements and success criteria
- Identify implementation phases and individual tasks
- Determine technology stack and dependency requirements
- Estimate complexity and effort
- Create detailed execution strategy with phased approach

**Output:** Execution plan including plan_summary, requirements list, success_criteria, effort_estimate

### Phase 1.5: Work Decomposition

Decompose approved execution plan into atomic and reviewable tasks:

**Task Structure:**

- **Task ID**: Sequential within SPEC (TASK-001, TASK-002, etc.)
- **Description**: Clear task statement
- **Requirement Mapping**: SPEC requirements satisfied
- **Dependencies**: List of prerequisite tasks
- **Acceptance Criteria**: Method to verify completion

**Constraint:** Maximum 10 tasks per SPEC. If more needed, recommend splitting SPEC.

### Phase 2: DDD Implementation

The **manager-ddd** subagent executes the ANALYZE-PRESERVE-IMPROVE cycle:

**Requirements:**

- Initialize task tracking
- Execute complete ANALYZE-PRESERVE-IMPROVE cycle
- Verify existing tests pass after each transformation
- Create characterization tests for code paths without coverage
- Achieve 85% or higher test coverage

**Output:** files_modified, characterization_tests_created, test_results, behavior_preserved, structural_metrics

### Phase 2.5: Quality Validation

The **manager-quality** subagent performs TRUST 5 validation:

| TRUST 5 Pillar | Validation Items                     |
| -------------- | ------------------------------------ |
| **Tested**     | Tests exist and pass, DDD discipline maintained |
| **Readable**   | Follows project rules, includes documentation |
| **Unified**    | Follows existing project patterns    |
| **Secured**    | No security vulnerabilities, OWASP compliant |
| **Trackable**  | Clear commit messages, supports history analysis |

**Additional Validation:**

- Test coverage 85% or higher
- Behavior preservation: Pass existing tests without changes
- Characterization tests pass: Behavior snapshots match
- Structural improvement: Coupling and cohesion metrics improved

**Output:** trust_5_validation results, coverage_percentage, overall_status (PASS/WARNING/CRITICAL), issues_found

### Phase 3: Git Operations (Conditional)

The **manager-git** subagent performs Git automation:

**Execution Conditions:**

- quality_status is PASS or WARNING
- If git_strategy.automation.auto_branch is true, create feature branch
- If auto_branch is false, commit directly to current branch

### Phase 4: Completion and Guidance

Present the following options to the user:

| Option          | Description                                   |
| --------------- | --------------------------------------------- |
| Document Sync   | Run \`/moai sync\` to create docs and PR        |
| Implement Other Feature | Run \`/moai plan\` to create additional SPECs |
| Review Results | Check implementation and test coverage locally |
| Complete        | End session                                   |

## Quality Gates

When implementation is complete, all following quality criteria must be met:

| Item           | Criteria       | Description                              |
| -------------- | -------------- | ---------------------------------------- |
| LSP Errors     | **0**          | No type checker, linter errors           |
| Type Errors    | **0**          | No type errors from pyright, mypy, tsc, etc. |
| Lint Errors    | **0**          | No linter errors from ruff, eslint, etc. |
| Test Coverage  | **85% or higher** | Code test coverage target             |
| Behavior Preservation | **100%**   | All characterization tests pass         |

<Callout type="info">

**Why 85% coverage?**

Reasons for targeting 85% instead of 100%

**100% is unrealistic** and may add meaningless tests. **85% covers most core logic**. The remaining 15% is difficult-to-test code like config files and error handlers.

</Callout>

## Practical Examples

### Example: Implementing SPEC-AUTH-001

**Step 1: SPEC Creation Complete in Plan Phase**

\`\`\`bash
> /moai plan "JWT-based user authentication: signup, login, token refresh"
# SPEC-AUTH-001 creation complete
\`\`\`

**Step 2: Clear Tokens Then Start Implementation**

\`\`\`bash
> /clear
> /moai run SPEC-AUTH-001
\`\`\`

**Step 3: Tasks Automatically Performed by manager-ddd**

The 4 Phases that manager-ddd agent performs to implement the SPEC.

---

#### Phase 1: Strategic Planning

Analyze the SPEC document and create implementation strategy.

\`\`\`bash
Phase 1: Strategic Planning
- SPEC document analysis complete
- Extracted 5 requirements
- Decomposed into 7 tasks (TASK-001 ~ TASK-007)
- Estimated complexity: Medium
\`\`\`

---

#### Phase 1.5: Work Decomposition

Break down implementation work into detailed units.

\`\`\`bash
Phase 1.5: Work Decomposition
- TASK-001: Define user model
- TASK-002: Password hashing utility
- TASK-003: JWT token generation/validation
- TASK-004: Signup API
- TASK-005: Login API
- TASK-006: Token refresh API
- TASK-007: Input validation middleware
\`\`\`

---

#### Phase 2: DDD Implementation

Implement safely using the ANALYZE-PRESERVE-IMPROVE cycle.

**ANALYZE Phase** - Understand existing code:

\`\`\`bash
ANALYZE Phase:
- Existing code structure analysis: src/auth/ (4 files)
- Test coverage check: Currently 32%
- Dependency mapping: bcrypt, PyJWT, SQLAlchemy
\`\`\`

**PRESERVE Phase** - Protect existing behavior:

\`\`\`bash
PRESERVE Phase:
- Wrote 12 characterization tests
- Existing behavior capture complete
- Test baseline established: 32%
\`\`\`

**IMPROVE Phase** - Implement gradually:

\`\`\`bash
IMPROVE Phase:
- Iteration 1: TASK-001 User model (tests pass)
- Iteration 2: TASK-002 Password hashing (tests pass)
- Iteration 3: TASK-003 JWT tokens (tests pass)
- Iteration 4: TASK-004 Signup API (tests pass)
- Iteration 5: TASK-005 Login API (tests pass)
- Iteration 6: TASK-006 Token refresh (tests pass)
- Iteration 7: TASK-007 Input validation (tests pass)
\`\`\`

---

#### Phase 2.5: Quality Validation

Validate quality with TRUST 5 pillars.

\`\`\`bash
Phase 2.5: Quality Validation
- All TRUST 5 pillars passed
- Test coverage: 89%
- LSP errors: 0
- Type errors: 0
- Characterization tests: 12/12 passed
- New tests: 24/24 passed
- Status: PASS
\`\`\`

---

#### Phase 3: Git Operations

Create commits with Conventional Commits.

\`\`\`bash
Phase 3: Git Operations
- Branch: feature/SPEC-AUTH-001
- Created 7 commits (Conventional Commits)
\`\`\`

---

#### Phase 4: Completion

When implementation is complete, guide to the next step.

\`\`\`bash
Phase 4: Completion
- Implementation complete
- Next step: /moai sync
\`\`\`

**Step 4: After Implementation Complete, Move to Sync Phase**

\`\`\`bash
> /clear
> /moai sync SPEC-AUTH-001
\`\`\`

## Frequently Asked Questions

### Q: What happens to the PRESERVE phase if there's no existing code in a new project?

The PRESERVE phase **passes quickly** if there's no existing code. Tests for new code are written together in the IMPROVE phase.

### Q: What if tokens run out during implementation?

The manager-ddd agent **automatically saves progress**. After \`/clear\`, run \`/moai run SPEC-XXX\` again to continue work based on the SPEC document.

### Q: What if it's difficult to achieve 85% test coverage?

You can adjust the coverage target in \`quality.yaml\`, but **this is not recommended**.
85% is the minimum standard to ensure core logic is tested. If coverage is insufficient, manager-ddd automatically adds missing tests.

### Q: What if CRITICAL status appears in Phase 2.5?

The quality issues are reported to the user, and asked whether to retry fixes. Selecting "Yes" returns to the IMPROVE phase to continue fixes.

### Q: What's the difference between \`/moai run\` and \`/moai\`?

\`/moai run\` only performs **implementation based on an already created SPEC**. \`/moai\` automatically performs the **entire workflow** from SPEC creation to implementation and documentation.

## Related Documents

- [Domain-Driven Development](/core-concepts/ddd) - Detailed ANALYZE-PRESERVE-IMPROVE cycle explanation
- [TRUST 5 Quality System](/core-concepts/trust-5) - Detailed quality gates explanation
- [/moai plan](./moai-1-plan) - Previous phase: SPEC document creation
- [/moai sync](./moai-3-sync) - Next phase: Documentation synchronization and PR
`,

  '/docs/workflow-commands/moai-sync': `
import { Callout } from "nextra/components";

# /moai sync

Synchronizes documentation for completed implementation code and prepares for deployment through Git automation.

<Callout type="info">

**New Command Format**

\`/moai:3-sync\` has been changed to \`/moai sync\`.

</Callout>

## Overview

\`/moai sync\` is the **Phase 3 (Sync)** command of the MoAI-ADK workflow. It analyzes code implemented in Phase 2 to automatically generate documentation, and creates Git commits and PRs (Pull Requests) to complete deployment preparation. Internally, the **manager-docs** agent manages the entire process.

<Callout type="info">
**Why is documentation synchronization needed?**

Writing documentation separately after writing code is tedious, and code and documentation easily become inconsistent. \`/moai sync\` solves this problem:

- **Analyze code** to **automatically generate** API documentation
- **Automatically update** README and CHANGELOG
- **Automatically create** Git commits and PRs

Since code changes and documentation are always synchronized, the problem of "outdated documentation" disappears.

</Callout>

## Usage

Execute after the Run phase is complete:

\`\`\`bash
# Run /clear after Run phase completion (recommended)
> /clear

# Document synchronization and PR creation
> /moai sync
\`\`\`

## Supported Modes

| Mode         | Description                   | When to Use               |
| ------------ | ----------------------------- | ------------------------- |
| \`auto\` (default) | Smart sync of changed files only | Daily development      |
| \`force\`      | Regenerate all documents      | Error recovery, major refactoring |
| \`status\`     | Read-only status check        | Quick health check        |
| \`project\`    | Update entire project docs    | Milestone completion, periodic sync |

### Usage by Mode

\`\`\`bash
# Default mode (changed files only)
> /moai sync

# Full regeneration
> /moai sync --mode force

# Status check only
> /moai sync --mode status

# Update entire project
> /moai sync --mode project
\`\`\`

## Supported Flags

| Flag     | Description              | Example                 |
| -------- | ------------------------ | ----------------------- |
| \`--merge\`| Auto-merge PR after completion | \`/moai sync --merge\` |
| \`--team\` | Force Agent Teams mode   | \`/moai sync --team\`     |
| \`--solo\` | Force sub-agent mode     | \`/moai sync --solo\`     |

### --merge Flag

Automatically merges PR and cleans up branches after Sync completion:

\`\`\`bash
> /moai sync --merge
\`\`\`

**Workflow:**

1. Check CI/CD status (gh pr checks)
2. Check merge conflicts (gh pr view --json mergeable)
3. When passing and mergeable: Auto merge (gh pr merge --squash --delete-branch)
4. Checkout to develop branch, pull, delete local branch

<Callout type="tip">
  The \`--merge\` option only auto-merges PRs **when CI/CD has passed**. Ensures safe automation.
</Callout>

**Token Efficiency Strategy:**

- Load only metadata and summaries from SPEC documents
- Cache and reuse the list of changed files from previous phases
- Use document templates to reduce generation time

## Execution Process

The entire process that \`/moai sync\` performs internally:

\`\`\`mermaid
flowchart TD
    A["Execute Command<br/>/moai sync"] --> B["Phase 0.5<br/>Quality Validation"]

    B --> C["Detect Project Language"]
    C --> D["Run Parallel Diagnostics"]

    subgraph D["Parallel Diagnostics"]
        D1["Run Tests"]
        D2["Run Linter"]
        D3["Type Check"]
    end

    D --> E{"Tests Failed?"}
    E -->|Yes| F["Ask User<br/>Continue or Not"]
    F -->|Abort| G["Exit"]
    F -->|Continue| H["Continue Phase 1"]

    E -->|No| H["Phase 1<br/>Analysis and Planning"]

    H --> I["Check Prerequisites"]
    I --> J["Analyze Git Changes"]
    J --> K["Verify Project Status"]
    K --> L["Call manager-docs<br/>Create Sync Plan"]

    L --> M{"User Approval"}
    M -->|No| N["Exit"]
    M -->|Yes| O["Phase 2<br/>Execute Document Sync"]

    O --> P["Create Safe Backup"]
    P --> Q["Call manager-docs<br/>Generate Documents"]
    Q --> R["Generate API Documentation"]
    R --> S["Update README"]
    S --> T["Sync Architecture Documentation"]
    T --> U["Update SPEC Status"]

    U --> V["Call manager-quality<br/>Quality Validation"]
    V --> W{"Quality Gates?"}
    W -->|FAIL| G
    W -->|PASS| X["Phase 3<br/>Git Operations"]

    X --> Y["Call manager-git<br/>Stage Changed Files"]
    Y --> Z["Create Commit"]
    Z --> AA{"--merge Flag?"}
    AA -->|Yes| AB["Check PR Status"]
    AB --> AC["Auto Merge"]
    AB --> AD["Skip Merge"]
    AC --> AE["Complete"]
    AD --> AE
    AA -->|No| AF{"Team Mode?"}
    AF -->|Yes| AG["Convert to PR Ready"]
    AF -->|No| AE
    AG --> AE
\`\`\`

## Phase-by-Phase Details

### Phase 0.5: Quality Validation (Parallel Diagnostics)

Validates project quality before document synchronization.

**Step 1 - Detect Project Language:**

| Language         | Indicator Files                                    |
| ---------------- | --------------------------------------------------- |
| Python           | pyproject.toml, setup.py, requirements.txt           |
| TypeScript       | tsconfig.json, package.json (typescript)             |
| JavaScript       | package.json (no tsconfig)                          |
| Go               | go.mod, go.sum                                      |
| Rust             | Cargo.toml, Cargo.lock                              |
| Other 11 languages supported |

**Step 2 - Parallel Diagnostics:**

Three tools run simultaneously:

| Diagnostic Tool | Purpose           | Timeout |
| --------------- | ----------------- | ------- |
| Test Run        | Detect test failures | 180 seconds |
| Linter          | Check code style  | 120 seconds |
| Type Check      | Check type errors | 120 seconds |

**Step 3 - Handle Test Failures:**

When tests fail, present options to the user:

- **Continue**: Continue regardless of failures
- **Abort**: Stop and exit

**Step 4 - Code Review:**

The **manager-quality** subagent performs TRUST 5 quality validation and generates a comprehensive report.

**Step 5 - Generate Quality Report:**

Aggregate status of test-runner, linter, type-checker, code-review and determine overall status (PASS or WARN).

### Phase 1: Analysis and Planning

The **manager-docs** subagent creates synchronization strategy.

**Output:** documents_to_update, specs_requiring_sync, project_improvements_needed, estimated_scope

### Phase 2: Execute Document Synchronization

**Step 1 - Create Safe Backup:**

Create a backup before modifications:

- Create timestamp
- Backup directory: \`.moai-backups/sync-{timestamp}/\`
- Copy important files: README.md, docs/, .moai/specs/
- Verify backup integrity

**Step 2 - Document Synchronization:**

The **manager-docs** subagent performs the following tasks:

- Reflect changed code in Living Documents
- Automatically generate and update API documentation
- Update README if needed
- Synchronize architecture documentation
- Fix project issues and recover broken references
- Ensure SPEC documents match implementation
- Detect changed domains and create domain-specific updates
- Generate synchronization report: \`.moai/reports/sync-report-{timestamp}.md\`

**Step 3 - Post-Sync Quality Validation:**

The **manager-quality** subagent validates synchronization quality against TRUST 5 criteria:

- All project links complete
- Documents well formatted
- All documents consistent
- No credential exposures
- All SPECs properly linked

**Step 4 - Update SPEC Status:**

Batch update completed SPECs to "completed" status, recording version changes and status transitions.

### Phase 3: Git Operations and PR

The **manager-git** subagent performs Git operations:

**Step 1 - Create Commit:**

- Stage all changed documents, reports, README, docs/ files
- Create single commit listing synchronized documents, project fixes, SPEC updates
- Verify commit with git log

**Step 2 - Convert to PR Ready (Team Mode Only):**

- Check settings in git_strategy.mode
- If Team mode: Convert from Draft PR to Ready (gh pr ready)
- Assign reviewers and labels if configured
- If Personal mode: Skip

**Step 3 - Auto Merge (--merge flag only):**

- Check CI/CD status with gh pr checks
- Check merge conflicts with gh pr view --json mergeable
- When passing and mergeable: Run gh pr merge --squash --delete-branch
- Checkout to develop, pull, delete local branch

### Phase 4: Completion and Next Steps

**Standard Completion Report:**

Summarize and display the following:

- mode, scope, number of updated/created files
- Project improvements
- Updated documents
- Generated reports
- Backup location

**Worktree Mode Next Steps (auto-detected from git context):**

| Option              | Description                        |
| ------------------- | ---------------------------------- |
| Return to Main Dir  | Exit worktree and go to main       |
| Continue in Worktree| Continue working in current worktree |
| Switch to Other Worktree | Select another worktree       |
| Remove This Worktree| Clean up worktree                  |

**Branch Mode Next Steps (auto-detected from git context):**

| Option                  | Description                       |
| ----------------------- | --------------------------------- |
| Commit and Push Changes | Upload changes to remote         |
| Return to Main Branch   | To develop or main               |
| Create PR               | Create Pull Request              |
| Continue on Branch      | Continue working on current branch |

**Standard Next Steps:**

| Option           | Description                     |
| ---------------- | ------------------------------- |
| Create Next SPEC | Run \`/moai plan\`               |
| Start New Session| Run \`/clear\`                   |
| Review PR        | Team mode: gh pr view           |
| Continue Dev     | Personal mode: continue working |

## Generated Documents

Documents that \`/moai sync\` automatically generates or updates:

### API Documentation

Analyzes API endpoints, function signatures, and class structures from implemented code to create documentation.

| Document Type | Content                     | Generation Condition          |
| ------------- | --------------------------- | ----------------------------- |
| API Reference | Endpoints, request/response schemas | When REST API is included |
| Function Docs | Parameters, return values, exceptions | When public functions included |
| Class Docs    | Properties, methods, inheritance relationships | When classes included |

### README Update

Updates the project's README.md as follows:

- **Usage Section**: Usage examples for newly added features
- **API Section**: Add list of new endpoints
- **Dependencies Section**: Reflect newly added libraries

### CHANGELOG Writing

Records change history in [Keep a Changelog](https://keepachangelog.com) format:

\`\`\`markdown
## [Unreleased]

### Added

- JWT-based user authentication system (SPEC-AUTH-001)
  - POST /api/auth/register - Signup
  - POST /api/auth/login - Login
  - POST /api/auth/refresh - Token refresh
\`\`\`

## Git Automation

\`/moai sync\` automatically performs Git operations after document generation.

### Commit Message Format

MoAI-ADK follows [Conventional Commits](https://www.conventionalcommits.org/) format:

| Prefix     | Purpose    | Example                                        |
| ---------- | ---------- | ---------------------------------------------- |
| \`feat\`     | New feature| \`feat(auth): add JWT authentication\`           |
| \`fix\`      | Bug fix    | \`fix(auth): resolve token expiration issue\`    |
| \`docs\`     | Documentation | \`docs(auth): update API documentation\`    |
| \`refactor\` | Refactoring | \`refactor(auth): centralize auth logic\`    |
| \`test\`     | Testing    | \`test(auth): add characterization tests\`       |

## Quality Gates

Sync phase quality criteria are more documentation-focused than Run phase:

| Item       | Criteria       | Description                      |
| ---------- | -------------- | -------------------------------- |
| LSP Errors | **0**          | Code must have no errors         |
| Warnings   | **Maximum 10** | Some warnings allowed during doc generation |
| LSP Status | **Clean**      | Overall clean state              |

<Callout type="warning">
  If quality gates fail, document generation and PR creation are **blocked**. First go back to \`/moai run\` to fix code issues, or use \`/moai fix\` for quick error fixes.
</Callout>

## Practical Examples

### Example: Document Synchronization and PR Creation

**Step 1: Confirm Run Phase Complete**

\`\`\`bash
# Check that Run phase is complete
# manager-ddd should have output "DONE" or "COMPLETE" marker
\`\`\`

**Step 2: Clear Tokens Then Run Sync**

\`\`\`bash
> /clear
> /moai sync
\`\`\`

**Step 3: Tasks Automatically Performed by manager-docs**

The 4 Phases that manager-docs agent performs for document synchronization.

---

#### Phase 0.5: Quality Validation

Verify project status before document generation.

\`\`\`bash
Phase 0.5: Quality Validation
  Project language: Python
  Tests: 36/36 passed
  Linter: 0 errors
  Type check: 0 errors
  Coverage: 89%
  Overall status: PASS
\`\`\`

---

#### Phase 1: Analysis and Planning

Analyze Git changes and create synchronization plan.

\`\`\`bash
Phase 1: Analysis and Planning
  Git changes: 12 files modified
  Sync plan: 1 API doc, README update, add CHANGELOG
  User approval: Complete
\`\`\`

---

#### Phase 2: Document Synchronization

Generate necessary documents and update existing documents.

\`\`\`bash
Phase 2: Document Synchronization
  Create backup: .moai-backups/sync-20260128-143052/
  API documentation: docs/api/auth.md (new)
  README.md: Update usage section
  CHANGELOG.md: Add v1.1.0 entries
  SPEC-AUTH-001 status: ACTIVE → COMPLETED

  Quality validation: All items passed
\`\`\`

---

#### Phase 3: Git Operations

Create commit and open PR.

\`\`\`bash
Phase 3: Git Operations
  Create commit: docs(auth): synchronize documentation for SPEC-AUTH-001
  PR status: Draft → Ready (Team mode)
\`\`\`

**Step 4: Review Created PR**

\`\`\`bash
# Check PR in terminal
$ gh pr view 42
\`\`\`

The created PR automatically includes SPEC requirements, list of changed files, and test results.

## Frequently Asked Questions

### Q: What if I don't want to automatically create a PR?

Set \`auto_pr: false\` in \`git-strategy.yaml\` to only automatically perform up to commit. You can create a PR at your preferred time.

### Q: Can I change the CHANGELOG format?

Currently [Keep a Changelog](https://keepachangelog.com) format is used by default. Custom format support is planned for the future.

### Q: What if I only want to generate documents without Git operations?

Set \`auto_commit: false\` in \`git-strategy.yaml\` to only perform document generation. You can manually perform Git operations.

### Q: What to do when quality gates fail?

There are two ways:

\`\`\`bash
# Method 1: Quick fix with /moai fix
> /moai fix "Fix lint errors"

# Method 2: Re-implement with /moai run
> /moai run SPEC-AUTH-001
\`\`\`

After fixing, run \`/moai sync\` again.

### Q: What's the difference between \`/moai sync\` and \`/moai\`?

\`/moai sync\` is only responsible for **documenting completed implementation code**. \`/moai\` automatically performs the **entire workflow** from SPEC creation to implementation and documentation.

## Related Documents

- [/moai run](/workflow-commands/moai-run) - Previous phase: DDD implementation
- [TRUST 5 Quality System](/core-concepts/trust-5) - Detailed quality gates explanation
- [Quick Start](/getting-started/quickstart) - Complete workflow tutorial
`,

  '/docs/utility-commands/moai': `
import { Callout } from "nextra/components";

# /moai

Fully autonomous automation command. When you provide a goal, MoAI autonomously executes the **plan → run → sync** pipeline.

<Callout type="tip">
  **One-line summary**: \`/moai\` is a "fully autonomous automation" command. You just describe the feature you want in natural language, and MoAI automatically performs **the entire process** from SPEC creation to implementation and documentation.
</Callout>

## Overview

\`/moai\` is the **fully autonomous automation workflow** command of MoAI-ADK. There's no need to execute subcommands separately - the entire development process is automated with a single command:

1. **SPEC Creation** (manager-spec)
2. **DDD Implementation** (manager-ddd)
3. **Documentation Synchronization** (manager-docs)

## Usage

\`\`\`bash
# Basic usage
> /moai "Description of the feature you want to implement"

# With worktree
> /moai "feature description" --worktree

# With branch
> /moai "feature description" --branch

# Enable loop mode
> /moai "feature description" --loop

# Resume existing SPEC
> /moai --resume SPEC-AUTH-001
\`\`\`

## Supported Flags

| Flag                | Description                             | Example                           |
| ------------------- | --------------------------------------- | --------------------------------- |
| \`--loop\`            | Enable automatic iterative fixing       | \`/moai "feature" --loop\`          |
| \`--max N\`           | Specify maximum iterations (default 100) | \`/moai "feature" --loop --max 10\` |
| \`--branch\`          | Auto-create feature branch              | \`/moai "feature" --branch\`        |
| \`--pr\`              | Auto-create PR after completion         | \`/moai "feature" --pr\`            |
| \`--resume SPEC-XXX\` | Resume existing SPEC work                | \`/moai --resume SPEC-AUTH-001\`     |
| \`--team\`            | Force Agent Teams mode                  | \`/moai "feature" --team\`          |
| \`--solo\`            | Force sub-agent mode                    | \`/moai "feature" --solo\`          |

### --loop Flag

Automatically executes iterative fixing after implementation to resolve all errors:

\`\`\`bash
> /moai "JWT authentication system" --loop
\`\`\`

When using this option:

1. Create SPEC
2. DDD implementation
3. **Auto-run loop** (resolve LSP errors, test failures, coverage issues)
4. Document synchronization
5. PR creation

<Callout type="tip">
  The \`--loop\` option **completely automates post-implementation cleanup** to maximize productivity.
</Callout>

## Execution Process

The entire process that \`/moai\` performs internally:

\`\`\`mermaid
flowchart TD
    A["Execute Command<br/>/moai 'feature description'"] --> B{--resume?}
    B -->|Yes| C["Load SPEC<br/>Continue work"]
    B -->|No| D["Phase 0<br/>Parallel Exploration"]

    subgraph D["Phase 0: Parallel Exploration (15-30s)"]
        D1["Explore Subagent<br/>Codebase analysis"]
        D2["Research Subagent<br/>External documentation research"]
        D3["Quality Subagent<br/>Quality baseline check"]
    end

    D --> E{"Single Domain?"}
    E -->|Yes| F["Delegate directly to<br/>expert agent"]
    E -->|No| G["Continue Phase 1"]

    C --> G["Phase 1<br/>SPEC Creation"]
    G --> H["Call manager-spec"]
    H --> I["Create EARS format SPEC"]
    I --> J[".moai/specs/SPEC-XXX/spec.md"]

    J --> K["Phase 2<br/>DDD Implementation"]

    K --> L["Call manager-strategy<br/>Strategic planning"]
    L --> M["Call manager-ddd<br/>ANALYZE-PRESERVE-IMPROVE"]
    M --> N{"Implementation complete?"}
    N -->|No| M
    N -->|Yes| O{"--loop?"}

    O -->|Yes| P["Run auto loop"]
    P --> Q["Resolve all issues"]
    O -->|No| Q

    Q --> R["Phase 3<br/>Document Sync"]

    R --> S["Call manager-docs<br/>Generate documents"]
    S --> T{"--pr?"}
    T -->|Yes| U["Create PR"]
    T -->|No| V["Completion marker"]
    U --> V
\`\`\`

**Key Points:**

- **Phase 0 (Parallel Exploration)**: Three agents run simultaneously for 2-3x speed improvement
- **Single Domain Routing**: Simple tasks are delegated directly to expert agents, skipping SPEC
- **Completion Marker**: Outputs \`<moai>DONE</moai>\` or \`<moai>COMPLETE</moai>\` when work is complete

## Phase-by-Phase Details

### Phase 0: Parallel Exploration (Optional)

Three agents run **simultaneously** to quickly understand project context:

| Agent    | Role              | Tasks                                           |
| -------- | ----------------- | ---------------------------------------------- |
| **Explore**  | Codebase analysis | Find related files, architecture patterns, existing implementations |
| **Research** | External doc research | Official docs, API docs, similar implementation examples |
| **Quality**  | Quality baseline  | Test coverage, lint status, technical debt    |

**Speed Improvement**: Parallel execution is 2-3x faster than sequential (15-30s vs 45-90s)

**Single Domain Routing:**

- Single domain tasks (e.g., "SQL optimization"): Delegate directly to domain expert agent without SPEC creation
- Multi-domain tasks: Proceed with full workflow

### Phase 1: SPEC Creation

The **manager-spec** subagent creates EARS format SPEC documents:

- .moai/specs/SPEC-XXX/spec.md
- EARS format requirements
- Given-When-Then acceptance criteria
- Content written in conversation_language

### Phase 2: DDD Implementation Loop

**[HARD] Agent Delegation Rule**: All implementation work must be delegated to specialized agents. Direct implementation is prohibited even after auto-compact.

**Expert Agent Selection:**

| Task Type          | Agent                         |
| ------------------ | ----------------------------- |
| Backend logic      | expert-backend subagent       |
| Frontend components| expert-frontend subagent      |
| Test creation      | expert-testing subagent       |
| Bug fixing         | expert-debug subagent         |
| Refactoring        | expert-refactoring subagent   |
| Security fixes     | expert-security subagent      |

**Loop Behavior (when --loop or ralph.yaml loop.enabled is true):**

\`\`\`
problem exists AND iteration < max:
  1. Run diagnostics (parallel by default)
  2. Delegate fix to appropriate expert agent
  3. Verify fix results
  4. Check for completion marker
  5. Exit loop when marker found
\`\`\`

### Phase 3: Document Synchronization

The **manager-docs** subagent synchronizes implementation with documentation:

- Generate API documentation
- Update README
- Add to CHANGELOG
- Add completion marker on success

## TODO Management

**[HARD] TodoWrite Tool Required**: Must use TodoWrite for all task tracking

- When issue found: TodoWrite (pending status)
- Before starting work: TodoWrite (in_progress status)
- After completing work: TodoWrite (completed status)
- Prohibit printing TODO list as text

## Completion Markers

AI adds markers when work is complete:

- \`<moai>DONE</moai>\` - Task complete
- \`<moai>COMPLETE</moai>\` - Fully complete
- \`<moai:done />\` - XML format

## LLM Mode Routing

Automatic routing based on llm.yaml settings:

| Mode          | Plan Phase     | Run Phase      |
| ------------- | -------------- | -------------- |
| \`claude-only\` | Claude         | Claude         |
| \`hybrid\`      | Claude         | GLM (worktree) |
| \`glm-only\`    | GLM (worktree) | GLM (worktree) |

## Practical Examples

### Example: Full Automation of JWT Authentication System

**Step 1: Execute Command**

\`\`\`bash
> /moai "JWT-based user authentication system: signup, login, token refresh" --worktree --loop --pr
\`\`\`

**Step 2: Phase 0 - Parallel Exploration**

\`\`\`
[Starting parallel exploration]
  Explore subagent: Analyzing src/auth/...
  Research subagent: Researching JWT best practices...
  Quality subagent: Confirming test coverage 32%...

[Exploration complete - 23s]
  Files found: 4
  Recommended libraries: PyJWT, bcrypt
  Baseline: LSP 0 errors, coverage 32%
\`\`\`

**Step 3: Phase 1 - SPEC Creation**

\`\`\`
[Calling manager-spec]
  SPEC ID: SPEC-AUTH-001
  Requirements: 5 (EARS format)
  Acceptance criteria: 3 scenarios

  User approval: Complete
\`\`\`

**Step 4: Phase 2 - DDD Implementation**

\`\`\`
[manager-strategy]
  Work decomposition: 7 tasks
  Strategic planning complete

[manager-ddd]
  ANALYZE: Code structure analysis complete
  PRESERVE: Wrote 12 characterization tests
  IMPROVE: 7 tasks implementation complete

[manager-quality]
  TRUST 5: All pillars passed
  Coverage: 89%
  Status: PASS
\`\`\`

**Step 5: Auto Loop (--loop)**

\`\`\`
[Starting loop - iteration 1/100]
  Diagnostics: Found 2 type errors
  Fix: Delegated to expert-backend subagent
  Verify: All errors resolved

[Loop complete - 1 iteration]
  Completion conditions met!
\`\`\`

**Step 6: Phase 3 - Document Synchronization**

\`\`\`
[manager-docs]
  API documentation: docs/api/auth.md created
  README: Updated usage section
  CHANGELOG: Added v1.1.0 entries
  SPEC-AUTH-001: ACTIVE → COMPLETED
\`\`\`

**Step 7: Complete**

\`\`\`
[Complete]
  SPEC: SPEC-AUTH-001
  Commits: 7
  Tests: 36/36 passed
  Coverage: 89%
  PR: #42 created (Draft → Ready)

<moai:COMPLETE />
\`\`\`

## Frequently Asked Questions

### Q: What's the difference between \`/moai\` and subcommands?

| Command       | Scope          | When to Use                     |
| ------------- | -------------- | ------------------------------- |
| \`/moai\`       | Full automation| Want quick full automation      |
| \`/moai plan\`  | SPEC only      | Want to review SPEC first        |
| \`/moai run\`   | Implementation only| SPEC already exists        |
| \`/moai sync\`  | Documentation only| Update docs after implementation |

### Q: When should I use the --loop flag?

Use when you want to automatically fix all errors after implementation. Especially useful for cleanup after large refactoring.

### Q: What is single domain routing?

Single domain tasks (e.g., "SQL query optimization") are delegated directly to the domain expert agent without SPEC creation, saving time.

## Related Documents

- [/moai plan](/workflow-commands/moai-plan) - SPEC creation details
- [/moai run](/workflow-commands/moai-run) - DDD implementation details
- [/moai sync](/workflow-commands/moai-sync) - Document synchronization details
- [/moai loop](/utility-commands/moai-loop) - Iterative fixing loop details
- [/moai fix](/utility-commands/moai-fix) - One-shot auto-fix details
`,

  '/docs/utility-commands/moai-fix': `
import { Callout } from 'nextra/components'

# /moai fix

One-shot auto-fix command. **Parallel scans** code errors then **fixes all at once**.

<Callout type="tip">
**One-line summary**: \`/moai fix\` is a "quick cleanup tool". It fixes lint errors and type errors accumulated in code **all at once**.
</Callout>

## Overview

During development, import ordering breaks, types don't match, and lint warnings accumulate. Instead of finding and fixing each problem one by one, run \`/moai fix\` and AI will automatically find and fix issues.

Unlike \`/moai loop\`, it runs **only once**, making it suitable when you want to quickly clean up the current state.

## Usage

\`\`\`bash
> /moai fix
\`\`\`

When executed without separate arguments, it scans the current project for errors and auto-fixes what's possible.

## Supported Flags

| Flag | Description | Example |
|------|-------------|---------|
| \`--dry\` (or \`--dry-run\`) | Show results only without fixing | \`/moai fix --dry\` |
| \`--sequential\` (or \`--seq\`) | Sequential scan instead of parallel | \`/moai fix --sequential\` |
| \`--level N\` | Specify maximum fix level (default 3) | \`/moai fix --level 2\` |
| \`--errors\` (or \`--errors-only\`) | Fix errors only, skip warnings | \`/moai fix --errors\` |
| \`--security\` (or \`--include-security\`) | Include security issues | \`/moai fix --security\` |
| \`--no-fmt\` (or \`--no-format\`) | Skip formatting fixes | \`/moai fix --no-fmt\` |
| \`--resume [ID]\` (or \`--resume-from\`) | Resume from snapshot (latest for latest) | \`/moai fix --resume\` |
| \`--team\` | Force Agent Teams mode | \`/moai fix --team\` |
| \`--solo\` | Force sub-agent mode | \`/moai fix --solo\` |

### --dry Flag

Preview what changes will be made without fixing:

\`\`\`bash
> /moai fix --dry
\`\`\`

With this option, no actual code modifications are made - only discovered issues and expected changes are displayed.

### --level Flag

Limit the fix level:

\`\`\`bash
# Fix Level 1-2 only (formatting, lint)
> /moai fix --level 2

# Fix Level 1 only (formatting only)
> /moai fix --level 1
\`\`\`

## Execution Process

\`/moai fix\` runs in 5 phases:

\`\`\`mermaid
flowchart TD
    Start["Execute /moai fix"] --> Scan

    subgraph Scan["Phase 1: Parallel Scan"]
        S1["LSP Scan<br/>Check type errors"]
        S2["AST-grep Scan<br/>Check structural patterns"]
        S3["Linter Scan<br/>Check code style"]
    end

    Scan --> Collect["Phase 2: Collect Issues"]
    Collect --> Classify["Phase 3: Classify Levels<br/>(Level 1~4)"]
    Classify --> Fix["Phase 4: Auto/Approve Fix"]
    Fix --> Verify["Phase 5: Verify"]
    Verify --> Done["Complete"]
\`\`\`

### Phase 1: Parallel Scan

Three tools scan code **simultaneously**.

| Scan Tool | Checks | Problems Found |
|-----------|--------|----------------|
| **LSP** | Type system | Type mismatches, undefined variables, wrong argument counts |
| **AST-grep** | Code structure | Unused code, dangerous patterns, inefficient structures |
| **Linter** | Code style | Import ordering, indentation, naming rule violations |

### Phase 2: Issue Collection

Merges scan results into a single list.

\`\`\`
Discovered Issues (example):
  [Level 1] src/api/router.py:3 - Import ordering needed
  [Level 1] src/models/user.py:15 - Unnecessary whitespace
  [Level 2] src/utils/helper.py:8 - Unused variable "temp"
  [Level 2] src/auth/service.py:22 - Unnecessary else statement
  [Level 3] src/auth/service.py:45 - Missing error handling
  [Level 4] src/db/connection.py:12 - SQL Injection possibility
\`\`\`

### Phase 3: Level Classification

Collected issues are **classified into 4 levels by risk**. Whether auto-fix is applied depends on level.

\`\`\`mermaid
flowchart TD
    Issue[Discovered Issue] --> L1{Level 1?}
    L1 -->|Yes| Auto1["Auto Fix<br/>No approval needed"]
    L1 -->|No| L2{Level 2?}
    L2 -->|Yes| Auto2["Auto Fix<br/>Log only"]
    L2 -->|No| L3{Level 3?}
    L3 -->|Yes| Approve3["User approve then<br/>fix"]
    L3 -->|No| Approve4["User approval required<br/>Manual review recommended"]
\`\`\`

## Issue Level Details

### Level 1: Formatting Errors

Formal issues that **don't affect code behavior**. AI fixes automatically.

| Item | Content |
|------|---------|
| **Risk** | Very low |
| **Approval** | Not needed (auto fix) |
| **Examples** | Import ordering, trailing whitespace removal, line break unification, indentation fixes |
| **Fix Tools** | black, isort, prettier |

**Actual Fix Example:**

\`\`\`python
# Before fix (Level 1 issue)
import os
import sys
from pathlib import Path
import json

# After fix (auto fixed)
import json
import os
import sys
from pathlib import Path
\`\`\`

### Level 2: Lint Warnings

**Minor** issues affecting code quality. AI fixes automatically and logs.

| Item | Content |
|------|---------|
| **Risk** | Low |
| **Approval** | Not needed (auto fix, log recorded) |
| **Examples** | Unused variables, unnecessary else, duplicate code, naming rule violations |
| **Fix Tools** | ruff, eslint, golangci-lint |

**Actual Fix Example:**

\`\`\`python
# Before fix (Level 2 issue)
def get_user(user_id):
    result = db.query(user_id)
    if result:
        return result
    else:           # Unnecessary else
        return None

# After fix (auto fixed)
def get_user(user_id):
    result = db.query(user_id)
    if result:
        return result
    return None
\`\`\`

### Level 3: Logic Errors

Issues that **can change code behavior**. Fixed after user approval.

| Item | Content |
|------|---------|
| **Risk** | Medium |
| **Approval** | Needed (fix after user confirmation) |
| **Examples** | Missing error handling, wrong conditionals, unhandled edge cases, async errors |
| **Fix Method** | Show changes to user and request approval |

**Content Shown to User:**

\`\`\`
[Level 3] src/auth/service.py:45
  Issue: Error handling missing on authentication failure
  Proposal: Add try-except block to return appropriate error response on authentication failure

  Approve? (y/n)
\`\`\`

### Level 4: Security Vulnerabilities

**Serious issues affecting security**. Requires user approval and manual review is recommended.

| Item | Content |
|------|---------|
| **Risk** | High |
| **Approval** | Required (manual review strongly recommended) |
| **Examples** | SQL Injection, XSS vulnerabilities, hardcoded secrets, unsafe deserialization |
| **Fix Method** | Explain problem and solution in detail, request user review |

<Callout type="warning">
**When Level 4 issues are found**, AI doesn't fix automatically. Security vulnerabilities can create bigger problems if fixed incorrectly, so please review and fix manually.
</Callout>

## Difference from /moai loop

| Comparison Item | \`/moai fix\` | \`/moai loop\` |
|-----------------|-------------|--------------|
| **Execution Count** | Once | Repeats until complete |
| **Level Classification** | Yes (Level 1-4) | No |
| **Approval Process** | Level 3-4 needs approval | Handles autonomously |
| **Time Required** | Short (1-2 min) | Can be long (5-30 min) |
| **Best For** | Simple error cleanup | Large-scale problem resolution |

<Callout type="tip">
**Selection Guide**:
- "Want to quickly clean lint errors before commit" → \`/moai fix\`
- "Many test failures, want to fix all" → \`/moai loop\`
</Callout>

## Agent Delegation Chain

The agent delegation flow for the \`/moai fix\` command:

\`\`\`mermaid
flowchart TD
    User["User Request"] --> Orchestrator["MoAI Orchestrator"]
    Orchestrator --> Parallel["Parallel Scan"]

    Parallel --> LSP["LSP Scan"]
    Parallel --> AST["AST-grep Scan"]
    Parallel --> Linter["Linter Scan"]

    LSP --> Collect["Collect Issues"]
    AST --> Collect
    Linter --> Collect

    Collect --> Classify["Classify Levels"]
    Classify --> Fix["Execute Fix"]

    Fix --> Level12["Level 1-2<br/>Auto Fix"]
    Fix --> Level34["Level 3-4<br/>Approval Needed"]

    Level12 --> Verify["Verify"]
    Level34 --> UserApprove["User Approval"]
    UserApprove --> Verify

    Verify --> Complete["Complete"]
\`\`\`

**Agent Roles:**

| Agent | Role | Main Tasks |
|-------|------|------------|
| **MoAI Orchestrator** | Coordinate parallel scan |
| **expert-backend** | Backend fixes (Level 1-2) |
| **expert-frontend** | Frontend fixes (Level 1-2) |
| **expert-debug** | Logic error fixes (Level 3-4) |
| **manager-quality** | Quality verification | Verify fix results |

## Practical Examples

### Situation: Code cleanup before commit

After implementing a new feature, you want to clean up code before committing.

\`\`\`bash
# Check current status
$ ruff check src/
# Found 12 lint warnings

# Run fix
> /moai fix
\`\`\`

**Execution Log:**

\`\`\`
[Parallel Scan]
  LSP: Found 2 errors
  AST-grep: Found 3 pattern violations
  Linter: Found 12 warnings

[Issue Classification]
  Level 1 (formatting): 7 → Auto fix
  Level 2 (lint): 8 → Auto fix
  Level 3 (logic): 2 → Approval needed
  Level 4 (security): 0

[Level 1-2 Auto Fix Complete]
  - Import ordering: 5 fixes
  - Trailing whitespace removal: 2 fixes
  - Unused variable removal: 3 fixes
  - Unnecessary else removal: 2 fixes
  - Type hint fixes: 2 fixes
  - Naming rule fixes: 1 fix

[Level 3 Approval Request]
  Issue 1: src/auth/service.py:45
    Problem: Error handling missing on token expiration
    Proposal: Add TokenExpiredError exception handling
    → Approved: Fix complete

  Issue 2: src/api/router.py:78
    Problem: Input validation missing
    Proposal: Add input validation with Pydantic model
    → Approved: Fix complete

[Verification]
  LSP errors: 0
  Linter warnings: 0
  All fixes verified.

Complete: 17 issues fixed
\`\`\`

## Frequently Asked Questions

### Q: Do I need to approve all Level 3-4 issues?

Yes, each Level 3-4 issue requires approval. However, you can check with \`--dry\` first and only approve important ones.

### Q: What if problems occur after \`/moai fix\`?

You can revert with Git. It's good to commit before fixing, or backup with \`git stash\`.

### Q: What if I want to fix only specific files?

Use the \`--path\` flag:

\`\`\`bash
> /moai fix --path src/auth/
\`\`\`

### Q: What's the difference between \`/moai fix\` and \`/moai\`?

\`/moai fix\` is only responsible for **error fixing**. \`/moai\` automatically performs the **entire workflow** from SPEC creation to implementation and documentation.

## Related Documents

- [/moai loop - Iterative Fixing Loop](/utility-commands/moai-loop)
- [/moai - Full Autonomous Automation](/utility-commands/moai)
- [TRUST 5 Quality System](/core-concepts/trust-5)
`,

  '/docs/utility-commands/moai-loop': `
import { Callout } from "nextra/components";

# /moai loop

Autonomous iterative fixing loop command. AI automatically repeats the process of **diagnosing, fixing, and verifying** problems until **all errors are resolved**.

<Callout type="tip">
  **One-line summary**: \`/moai loop\` is the "Ralph Engine" autonomous fixing engine.
  It repeats **diagnose → fix → verify** to automatically resolve all code problems.
</Callout>

## Overview

When writing code, multiple issues can occur simultaneously: type errors, lint warnings, test failures. Instead of fixing each manually, run \`/moai loop\` and AI will **automatically iteratively fix** all problems.

Unlike \`/moai fix\` which fixes **only once**, \`/moai loop\` continues until **completion conditions are met**.

## Usage

\`\`\`bash
> /moai loop
\`\`\`

When executed without separate arguments, it automatically finds and fixes all problems in the current project.

## Supported Flags

| Flag                                   | Description                             | Example                          |
| -------------------------------------- | --------------------------------------- | -------------------------------- |
| \`--max N\` (or \`--max-iterations\`)      | Limit maximum iterations (default 100) | \`/moai loop --max 10\`            |
| \`--path <path>\`                        | Target only specific path               | \`/moai loop --path src/auth/\`     |
| \`--stop-on {level}\`                    | Stop at specific level or above        | \`/moai loop --stop-on 3\`          |
| \`--auto\` (or \`--auto-fix\`)             | Enable auto-fix (default Level 1)      | \`/moai loop --auto-fix\`           |
| \`--sequential\` (or \`--seq\`)            | Sequential diagnosis instead of parallel| \`/moai loop --sequential\`       |
| \`--errors\` (or \`--errors-only\`)        | Fix errors only, skip warnings         | \`/moai loop --errors\`             |
| \`--coverage\` (or \`--include-coverage\`) | Include coverage (default 85%)         | \`/moai loop --coverage\`           |
| \`--memory-check\`                       | Enable memory pressure detection       | \`/moai loop --memory-check\`       |
| \`--resume ID\` (or \`--resume-from\`)     | Resume from snapshot                  | \`/moai loop --resume latest\`      |

### --max Flag

Limit the number of iterations:

\`\`\`bash
# Maximum 10 iterations only
> /moai loop --max 10
\`\`\`

<Callout type="warning">
  To prevent infinite loops, the default is 100 iterations. Most cases complete within 10 iterations.
</Callout>

## Execution Process

\`/moai loop\` goes through the following process each iteration:

\`\`\`mermaid
flowchart TD
    Start["Execute /moai loop"] --> Diag

    subgraph Diag["Phase 1: Parallel Diagnosis"]
        D1["LSP Diagnosis<br/>Check type errors"]
        D2["AST-grep Diagnosis<br/>Check structural patterns"]
        D3["Test Run<br/>Detect failing tests"]
        D4["Coverage Measure<br/>Check below 85%"]
    end

    Diag --> Collect["Phase 2: Collect Issues"]
    Collect --> Todo["Phase 3: Create TODO<br/>Fix task list"]
    Todo --> Fix["Phase 4: Sequential Fix<br/>Fix one by one safely"]
    Fix --> Verify["Phase 5: Verify<br/>Check fix results"]
    Verify --> Check{Completion<br/>conditions met?}
    Check -->|No| Diag
    Check -->|Yes| Done["Output completion marker"]
\`\`\`

### Phase 1: Parallel Diagnosis

Four diagnostic tools run **simultaneously** to quickly identify all project problems:

| Diagnostic Tool | Checks | Example Problems Found |
| --------------- | ------- | ------------------------ |
| **LSP**         | Type system | Type mismatches, undefined variables, wrong arguments |
| **AST-grep**    | Code structure | Unused imports, dangerous patterns, code smells |
| **Tests**       | Test execution | Failing tests, errors occurring |
| **Coverage**    | Coverage measurement | Modules below 85% |

<Callout type="info">
  **What is parallel diagnosis?** Running 4 diagnostics **simultaneously** is about 4x faster than running them sequentially. Collected problems are merged into a single list.
</Callout>

### Phase 2: Issue Collection

Organizes all problems found by parallel diagnosis into a single list:

\`\`\`
Discovered Issues (example):
  [LSP] src/auth/service.py:42 - Cannot assign "int" to "str" type
  [LSP] src/auth/router.py:15 - Undefined type "User"
  [AST] src/utils/helper.py:3 - Unused import "os"
  [TEST] tests/test_auth.py::test_login - AssertionError
  [COV] src/auth/service.py - Coverage 62% (target 85%)
\`\`\`

### Phase 3: TODO Creation

Automatically creates fix task list (TODO) based on collected issues. Considers **dependency order** to determine fix sequence.

For example, if a type definition is missing, that type is added first before fixing code that uses it.

### Phase 4: Sequential Fix

Fixes items in the TODO list **one by one sequentially**. Parallel fixing could cause conflicts, so processes safely one at a time.

### Phase 5: Verification

After fixes, runs diagnosis again to verify problems are resolved. If problems remain, returns to Phase 1 and repeats.

## Loop Prevention Mechanism

Two safety measures prevent infinite loops:

\`\`\`mermaid
flowchart TD
    A[Iteration running] --> B{Max iterations<br/>exceeded?}
    B -->|Yes: Over 100| C["Force terminate<br/>Report to user"]
    B -->|No| D{5 consecutive<br/>no progress?}
    D -->|Yes: Same error repeating| E["Deadlock detected<br/>Request user intervention"]
    D -->|No| F[Continue next iteration]
\`\`\`

| Safety Measure       | Condition             | Action                                           |
| -------------------- | --------------------- | ------------------------------------------------ |
| **Max iteration limit** | Over 100 iterations   | Force terminate loop and report current state    |
| **No progress detection** | Same error 5 times consecutively | Consider deadlock and request user intervention |

<Callout type="warning">
  **When deadlock occurs?** If AI fails to fix the same error 5 times consecutively, it automatically stops and requests user intervention. In this case, please check the error content directly or provide hints.
</Callout>

## Completion Conditions

\`/moai loop\` terminates the loop when all **three conditions** are met:

| Condition            | Criteria         | Description                              |
| -------------------- | ---------------- | ---------------------------------------- |
| **zero_errors**      | 0 LSP errors      | No type errors or syntax errors          |
| **tests_pass**       | All tests pass   | No failing tests                         |
| **coverage >= 85%**  | Coverage 85%+    | Meets TRUST 5 quality standards           |

## Difference from /moai fix

\`/moai fix\` and \`/moai loop\` look similar but have key differences:

\`\`\`mermaid
flowchart TD
    subgraph Fix["/moai fix (One-shot)"]
        F1[Parallel Scan] --> F2[Collect Issues]
        F2 --> F3[Classify Levels]
        F3 --> F4[Fix]
        F4 --> F5[Verify]
        F5 --> F6[Complete]
    end

    subgraph Loop["/moai loop (Iterative)"]
        L1[Parallel Diagnosis] --> L2[Collect Issues]
        L2 --> L3[Create TODO]
        L3 --> L4[Sequential Fix]
        L4 --> L5[Verify]
        L5 --> L6{Complete?}
        L6 -->|No| L1
        L6 -->|Yes| L7[Complete]
    end
\`\`\`

| Comparison Item | \`/moai fix\`           | \`/moai loop\`            |
| ---------------- | --------------------- | ----------------------- |
| **Execution Count**| Once                  | Repeats until complete  |
| **Goal**          | Fix currently visible errors | Completely resolve all errors |
| **Level Classification** | Yes (Level 1-4)  | No (handle all issues)   |
| **Approval Needed**| Level 3-4 needs approval| Handles autonomously     |
| **Time Required**  | Short (1-2 min)       | Can be long (5-30 min)   |
| **Usage Timing**   | Simple fixes          | After large refactoring  |

<Callout type="tip">
  **Selection Guide**: Use \`/moai fix\` for quick resolution when there are few errors. \`/moai loop\` is more effective when there are many errors or interconnected problems.
</Callout>

## Agent Delegation Chain

The agent delegation flow for the \`/moai loop\` command:

\`\`\`mermaid
flowchart TD
    User["User Request"] --> Orchestrator["MoAI Orchestrator"]
    Orchestrator --> ManagerDDD["manager-ddd Agent"]

    ManagerDDD --> Diagnose["Parallel Diagnosis"]
    Diagnose --> LSP["LSP"]
    Diagnose --> AST["AST-grep"]
    Diagnose --> Test["Tests"]
    Diagnose --> Cov["Coverage"]

    LSP --> Todo["Create TODO"]
    AST --> Todo
    Test --> Todo
    Cov --> Todo

    Todo --> Loop["Start Loop"]

    Loop --> Fix["Delegate to<br/>expert agents"]
    Fix --> Verify["manager-quality<br/>Verify"]

    Verify --> Complete{"Completion conditions?"}
    Complete -->|No| Loop
    Complete -->|Yes| Done["Complete"]
\`\`\`

**Agent Roles:**

| Agent                | Role        | Main Tasks          |
| -------------------- | ----------- | ------------------- |
| **MoAI Orchestrator** | Loop coordination |
| **manager-ddd**       | Loop management | Create TODO, coordinate fixes |
| **expert-\\***         | Execute fixes | Actual code modification |
| **manager-quality**   | Quality verification | Check completion conditions |

## Practical Examples

### Situation: Multiple errors after DDD implementation

After implementing code with \`/moai run\`, assume multiple errors remain.

\`\`\`bash
# Check current status
$ pytest --tb=short
# 3 test failures
# Coverage: 71%

# Check LSP errors
# 5 type errors, 2 undefined references

# Run loop
> /moai loop
\`\`\`

**Execution Log:**

\`\`\`
[Iteration 1/100]
  Diagnosis: 5 LSP errors, 3 test failures, coverage 71%
  TODO: 7 fix tasks created
  Fix: Resolved 5 type errors
  Verify: 0 LSP errors, 2 test failures, coverage 71%

[Iteration 2/100]
  Diagnosis: 2 test failures, coverage 71%
  TODO: 2 fix tasks created
  Fix: 2 test logic fixes
  Verify: 0 LSP errors, 0 test failures, coverage 74%

[Iteration 3/100]
  Diagnosis: coverage 74% (target 85%)
  TODO: 3 test addition tasks created
  Fix: Add missing test cases
  Verify: 0 LSP errors, 0 test failures, coverage 87%

Completion conditions met!
  - LSP errors: 0
  - Tests: All passed
  - Coverage: 87%

DONE
\`\`\`

In this example, \`/moai loop\` resolved all problems in just 3 iterations. Manually, you would have had to check and fix each error one by one.

## Frequently Asked Questions

### Q: What if \`/moai loop\` runs too long?

You can limit iterations with the \`--max\` flag, or interrupt with \`Ctrl+C\`. Current state is saved so you can resume later.

### Q: What if I want to fix only specific error types?

Use the \`--stop-on\` flag:

\`\`\`bash
# Stop at Level 3 or above (handle security, logic errors manually)
> /moai loop --stop-on 3
\`\`\`

### Q: What's the difference between \`/moai loop\` and \`/moai\`?

\`/moai loop\` is only responsible for the **error fixing loop**. \`/moai\` automatically performs the **entire workflow** from SPEC creation to implementation and documentation.

### Q: What if the loop falls into deadlock?

If AI repeats the same error 5 times consecutively, it automatically stops and requests user intervention. In this case, please check the code directly or provide hints.

## Related Documents

- [/moai fix - One-shot Auto Fix](/utility-commands/moai-fix)
- [/moai - Full Autonomous Automation](/utility-commands/moai)
- [TRUST 5 Quality System](/core-concepts/trust-5)
- [Domain-Driven Development](/core-concepts/ddd)
`,

  '/docs/utility-commands/moai-feedback': `
import { Callout } from 'nextra/components'

# /moai feedback

Command to submit feedback or bug reports for MoAI-ADK.

<Callout type="info">

**New Command Format**

\`/moai:9-feedback\` has been changed to \`/moai feedback\`.

</Callout>

<Callout type="tip">
**One-line summary**: \`/moai feedback\` is a command that **automatically creates GitHub issues** for improvement suggestions or bug reports about MoAI-ADK itself.
</Callout>

## Overview

Use this command when you find a bug while using MoAI-ADK, need a new feature, or have an improvement idea. You don't need to visit GitHub directly - you can submit feedback right from within Claude Code.

<Callout type="info">
**Important**: This command is **not for modifying your project code**. It's for conveying feedback about the MoAI-ADK tool itself to the development team.
</Callout>

## Usage

\`\`\`bash
# Standard form
> /moai feedback

# Short aliases
> /moai fb
> /moai bug
> /moai issue
\`\`\`

When you execute the command, you'll be guided through selecting feedback type and entering content.

## Supported Flags

| Flag | Description | Example |
|------|-------------|---------|
| \`--type {bug,feature,question}\` | Directly specify feedback type | \`/moai feedback --type bug\` |
| \`--title "<title>"\` | Directly specify title | \`/moai feedback --title "Error report"\` |
| \`--dry-run\` | Check content only without creating issue | \`/moai feedback --dry-run\` |

## How It Works

When you run \`/moai feedback\`, the following process occurs:

\`\`\`mermaid
flowchart TD
    A["Execute /moai feedback"] --> B["Select feedback type"]
    B --> C["Write content"]
    C --> D["Auto-collect environment info"]
    D --> E["Auto-create GitHub issue"]
    E --> F["Return issue URL"]
\`\`\`

### Automatically Collected Information

When submitting feedback, the following information is automatically included to help the development team quickly understand the problem.

| Collected Item | Description | Example |
|----------------|-------------|---------|
| MoAI-ADK Version | Currently installed version | v10.8.0 |
| OS Information | Operating system and version | macOS 15.2 |
| Claude Code Version | Claude Code version in use | 1.0.30 |
| Current SPEC | SPEC ID being worked on | SPEC-AUTH-001 |
| Error Log | Recent errors (if any) | TypeError: ... |

## Feedback Types

### Bug Report

Report errors or unexpected behavior encountered while using MoAI-ADK.

\`\`\`bash
> /moai feedback
# Type selection: Bug Report
# Title: Characterization tests not created during /moai run
# Description: I ran /moai run for SPEC-AUTH-001, but characterization tests
#        weren't created in the PRESERVE phase and it went straight to IMPROVE.
# Reproduction: Run /moai run SPEC-AUTH-001
\`\`\`

### Feature Request

Suggest new features you'd like to see added to MoAI-ADK.

\`\`\`bash
> /moai feedback
# Type selection: Feature Request
# Title: Add option to target specific files only in /moai loop
# Description: It would be great if /moai loop could target only specific directories or
#        files instead of the entire project.
# Example: /moai loop --path src/auth/
\`\`\`

### Improvement Proposal

Propose ideas for improving existing features.

\`\`\`bash
> /moai feedback
# Type selection: Improvement Proposal
# Title: Show before/after diff in /moai fix execution results
# Description: If /moai fix showed its automatic fixes in diff format,
#        we could see at a glance what changes were made.
\`\`\`

## Agent Delegation Chain

The agent delegation flow for the \`/moai feedback\` command:

\`\`\`mermaid
flowchart TD
    User["User Request"] --> Orchestrator["MoAI Orchestrator"]
    Orchestrator --> Collect["Collect Environment Info"]

    Collect --> Info1["MoAI-ADK Version"]
    Collect --> Info2["OS Information"]
    Collect --> Info3["Claude Code Version"]
    Collect --> Info4["Current SPEC"]
    Collect --> Info5["Error Log"]

    Info1 --> Format["Format Issue"]
    Info2 --> Format
    Info3 --> Format
    Info4 --> Format
    Info5 --> Format

    Format --> GitHub["manager-quality Agent<br/>Create GitHub Issue"]
    GitHub --> Complete["Return Issue URL"]
\`\`\`

**Agent Roles:**

| Agent | Role | Main Tasks |
|-------|------|------------|
| **MoAI Orchestrator** | Guide feedback process |
| **manager-quality** | GitHub integration | Create issue, return URL |

## Practical Examples

### Situation: Unexpected error during command execution

\`\`\`bash
# Situation with error
> /moai "Implement payment feature" --branch
# Error: Branch creation failed - permission denied

# Submit feedback
> /moai feedback
\`\`\`

MoAI Orchestrator asks for feedback type, title, and description in sequence. When you enter your answers, a GitHub issue is automatically created and the issue URL is returned.

\`\`\`
GitHub issue has been created:
https://github.com/anthropics/moai-adk/issues/1234

The development team will respond after review.
\`\`\`

<Callout type="info">
**Feedback is always welcome!** Even minor inconveniences - please submit feedback as it helps improve MoAI-ADK.
</Callout>

## Frequently Asked Questions

### Q: Can I edit or delete feedback content?

Yes, you can edit or close the issue directly on GitHub. Since the issue URL is provided, you can access it anytime.

### Q: Can I report the same problem multiple times?

Don't worry - GitHub checks for duplicate issues. If the problem has already been reported, you'll be guided to the existing issue.

### Q: When will I receive a response to my feedback?

The development team reviews and comments on issues weekly. Complex problems may take time to resolve.

### Q: What's the difference between \`/moai feedback\` and creating GitHub issues directly?

\`/moai feedback\` automatically collects environment information, helping the development team understand problems faster. It's more efficient than manually creating issues.

## Related Documents

- [/moai - Full Autonomous Automation](/utility-commands/moai)
- [/moai loop - Iterative Fixing Loop](/utility-commands/moai-loop)
- [/moai fix - One-shot Auto Fix](/utility-commands/moai-fix)
`,

  '/docs/claude-code/index': `
---
title: "Claude Code Overview"
description: "Introduces Claude Code - an AI coding tool that runs in your terminal, helping you quickly turn ideas into code."
---

# Claude Code Overview

Claude Code is an AI-powered coding tool developed by Anthropic that runs directly in your terminal, allowing you to quickly turn ideas into code.

## Get Started in 30 Seconds

### Prerequisites

- Claude subscription (Pro, Max, Teams, Enterprise) or Claude Console account

### Install Claude Code

**Native Install (Recommended)**

**macOS, Linux, WSL:**

\`\`\`bash
curl -fsSL https://claude.ai/install.sh | bash
\`\`\`

**Windows PowerShell:**

\`\`\`powershell
irm https://claude.ai/install.ps1 | iex
\`\`\`

**Windows CMD:**

\`\`\`cmd
curl -fsSL https://claude.ai/install.cmd -o install.cmd && install.cmd && del install.cmd
\`\`\`

**Homebrew:**

\`\`\`bash
brew install --cask claude-code
\`\`\`

**WinGet:**

\`\`\`powershell
winget install Anthropic.ClaudeCode
\`\`\`

### Start Using Claude Code

You'll be prompted to log in the first time you use it. That's it!

## What Claude Code Does

### From Features to Implementation

Describe what you want in plain language. Claude Code will plan, write code, and verify it works.

### Debug and Fix Bugs

Describe a bug or paste an error message. Claude Code analyzes your codebase, identifies the problem, and implements the fix.

### Explore Any Codebase

Ask questions about your team's codebase and get thoughtful answers. Claude Code is aware of your entire project structure, can find up-to-date information on the web, and can pull data from external sources like Google Drive, Figma, and Slack through MCP.

### Automate Tedious Tasks

Fix lint issues, resolve merge conflicts, write release notes, and more—run from your dev machine as a one-off command or automatically in CI.

## Why Developers Love Claude Code

### Runs in Your Terminal

Not another chat window. Not another IDE. Claude Code works where you already work, with tools you already love.

### Direct Action

Claude Code can directly edit files, run commands, and create commits. Need more functionality? With MCP, Claude can read design docs from Google Drive, update tickets in Jira, use custom developer tools, and more.

### Unix Philosophy

Claude Code is composable and scriptable.

\`\`\`bash
tail -f app.log | claude -p "Let me know if you see anything suspicious in this log stream, notify me on Slack"
\`\`\`

This command actually works. CI can run:

\`\`\`bash
claude -p "If there's new French text strings, translate them and open a PR for review to @lang-fr-team"
\`\`\`

### Enterprise Ready

Use the Claude API or host on AWS or GCP. Enterprise-grade security, privacy, and compliance built in.

## Use Claude Code Everywhere

Claude Code works across your entire development environment: terminal, IDE, cloud, and Slack.

### Available Environments

| Environment | Description |
|------|------|
| **Terminal (CLI)** | The core Claude Code experience. Run \`claude\` in any terminal |
| **Claude Code on the Web** | Use via browser at claude.ai/code or Claude iOS app, no local setup required |
| **Desktop App** | Standalone app with diff review, parallel sessions, and cloud session launch features |
| **VS Code** | Native extension with inline diff, @-mentions, and plan review |
| **JetBrains IDE** | Plugin with IDE diff view and context sharing |
| **GitHub Actions** | Automated code review, issue triage in CI/CD with \`@claude\` mentions |
| **GitLab CI/CD** | Event-based automation for GitLab merge requests and issues |
| **Slack** | Mention Claude in Slack to route coding tasks to Claude Code web and get PR review |
| **Chrome** | Connect to your browser for live debugging, design verification, and web app testing |

## Next Steps

- [Quickstart](/claude-code/quickstart) - Start using Claude Code in 5 minutes
- [How It Works](/claude-code/how-it-works) - Understand the agent loop, tools, and project interaction
- [Common Workflows](/claude-code/common-workflows) - Explore codebases, fix bugs, refactor

## Additional Resources

- [Official Documentation](https://code.claude.com/docs)
- [GitHub Repository](https://github.com/anthropics/claude-code)    
`,

  '/docs/claude-code/quickstart': `
import { Callout } from 'nextra/components'

# Quick Start

Create your first project with MoAI-ADK and experience the development workflow.

## Prerequisites

Before starting, ensure the following are complete:

- [x] MoAI-ADK installed ([Installation Guide](./installation))
- [x] Initial setup completed ([Initial Setup](./init-wizard))
- [x] GLM API key obtained

## Creating Your First Project

### Step 1: Project Initialization

Use the \`moai init\` command to create a new project:

\`\`\`bash
moai init my-first-project
cd my-first-project
\`\`\`

To initialize MoAI-ADK in an existing project, navigate to that folder and run:

\`\`\`bash
cd existing-project
moai init
\`\`\`

### Step 2: Generate Project Documentation

Generate basic project documentation. This step is essential for Claude Code to understand the project.

\`\`\`bash
> /moai project
\`\`\`

This command analyzes the project and automatically generates 3 files:

\`\`\`mermaid
flowchart TB
    A["Project Analysis"] --> B["product.md<br>Project Information"]
    A --> C["structure.md<br>Directory Structure"]
    A --> D["tech.md<br>Technology Stack"]

    B --> E[".moai/project/"]
    C --> E
    D --> E
\`\`\`

| File | Content |
|------|---------|
| **product.md** | Project name, description, target users, key features |
| **structure.md** | Directory tree, folder purposes, module composition |
| **tech.md** | Technologies used, frameworks, development environment, build/deploy config |

<Callout type="tip">
Run \`/moai project\` after initial project setup or when structure changes significantly.
</Callout>

### Step 3: Create SPEC Document

Create a SPEC document for your first feature. Use EARS format to define clear requirements.

<Callout type="info">
**Why do we need SPEC?** 📝

The biggest problem with **Vibe Coding** is **context loss**:

- While coding with AI, you reach moments like "Wait, what were we trying to do?"
- When session ends or context initializes, **previously discussed requirements disappear**
- Eventually, you repeat explanations or get code that differs from intentions

**SPEC documents solve this problem:**

| Problem | SPEC Solution |
|---------|---------------|
| Context loss | Permanently preserve requirements by **saving to files** |
| Ambiguous requirements | Structure clearly with **EARS format** |
| Communication errors | Specify completion conditions with **acceptance criteria** |
| Cannot track progress | Manage work units with **SPEC ID** |

**One-line summary:** SPEC is "documenting conversations with AI." Even if session ends, you can continue working by reading the SPEC document!
</Callout>

\`\`\`bash
> /moai plan "Implement user authentication feature"
\`\`\`

This command performs the following:

\`\`\`mermaid
flowchart TB
    A["Requirement Input"] --> B["EARS Format Analysis"]
    B --> C["Generate SPEC Document"]
    C --> D["Save SPEC-001"]
    D --> E["Verify Requirements"]
\`\`\`

The generated SPEC document is saved at \`.moai/specs/SPEC-001/spec.md\`.

<Callout type="warning">
After SPEC creation, always run \`/clear\` to save tokens.
</Callout>

### Step 4: Execute DDD Development

Develop using Domain-Driven Development based on the SPEC document.

<Callout type="info">
**What is DDD?** 🏠

DDD is similar to "home remodeling":
- **Without destroying the existing house**, improve one room at a time
- **Take photos of current state before remodeling** (= characterization tests)
- **Work on one room at a time, checking each time** (= incremental improvement)

Why do we do this? **To safely improve code.** We don't want to break existing functionality!
</Callout>

\`\`\`bash
> /clear
> /moai run SPEC-001
\`\`\`

This command runs the **ANALYZE-PRESERVE-IMPROVE** cycle:

**Understanding ANALYZE-PRESERVE-IMPROVE:**

| Phase | Analogy | Actual Work |
|-------|---------|-------------|
| **ANALYZE** (Analyze) | 🔍 House inspection | Understand current code structure and problems |
| **PRESERVE** (Preserve) | 📸 Take photos of current state | Record current behavior with characterization tests |
| **IMPROVE** (Improve) | 🔧 Remodel one room at a time | Make incremental improvements while tests pass |

\`\`\`mermaid
flowchart TD
    A["ANALYZE<br>Analyze current code"] --> B["Identify problems"]
    B --> C["PRESERVE<br>Record current behavior with tests"]
    C --> D["Safety net established"]
    D --> E["IMPROVE<br>Make incremental improvements"]
    E --> F["Run tests"]
    F --> G{"Pass?"}
    G -->|Yes| H["Next improvement"]
    G -->|No| I["Rollback and retry"]
    H --> J["Quality gate passed"]
\`\`\`

<Callout type="tip">
\`/moai run\` automatically targets 85%+ test coverage. **Tests are insurance for remodeling!**
</Callout>

**Completion Criteria:**
- Test coverage >= 85%
- 0 errors, 0 type errors
- LSP baseline achieved

### Step 5: Document Synchronization

When development is complete, automatically generate quality validation and documentation.

\`\`\`bash
> /clear
> /moai sync SPEC-001
\`\`\`

This command performs the following:

\`\`\`mermaid
graph TD
    A["Quality Validation"] --> B["Run Tests"]
    A --> C["Lint Check"]
    A --> D["Type Check"]

    B --> E["Generate Documentation"]
    C --> E
    D --> E

    E --> F["API Documentation"]
    E --> G["Architecture Diagrams"]
    E --> H["README/CHANGELOG"]

    F --> I["Git Commit & PR"]
    G --> I
    H --> I
\`\`\`

## Complete Development Workflow

\`\`\`mermaid
sequenceDiagram
    participant Dev as Developer
    participant Project as "/moai project"
    participant Plan as "/moai plan"
    participant Run as "/moai run"
    participant Sync as "/moai sync"
    participant Git as "Git Repository"

    Dev->>Project: Project initialization
    Project->>Project: Generate basic documentation
    Project-->>Dev: product/structure/tech.md

    Dev->>Plan: Input feature requirements
    Plan->>Plan: Analyze in EARS format
    Plan-->>Dev: SPEC-001 document

    Note over Dev: Run /clear

    Dev->>Run: Execute SPEC-001
    Run->>Run: ANALYZE-PRESERVE-IMPROVE
    Run->>Run: Generate tests (85%+)
    Run-->>Dev: Implementation complete

    Note over Dev: Run /clear

    Dev->>Sync: Request documentation
    Sync->>Sync: Quality validation & documentation generation
    Sync-->>Dev: Documentation complete

    Dev->>Git: Commit & create PR
\`\`\`

## Integrated Automation: /moai

To automatically execute all phases at once:

\`\`\`bash
> /moai "Implement user authentication feature"
\`\`\`

MoAI automatically executes Plan → Run → Sync, providing 3-4x faster analysis with parallel exploration.

\`\`\`mermaid
flowchart TB
    A["/moai"] --> B[Parallel Exploration]
    B --> C["Explore Agent<br>Analyze codebase"]
    B --> D["Research Agent<br>Research technical docs"]
    B --> E["Quality Agent<br>Evaluate quality status"]

    C --> F[Integrated Analysis]
    D --> F
    E --> F

    F --> G["Auto execute Plan → Run → Sync"]
\`\`\`

## Workflow Selection Guide

| Situation | Recommended Command | Reason |
|-----------|---------------------|--------|
| New Project | Run \`/moai project\` first | Basic documentation required |
| Simple Feature | \`/moai plan\` + \`/moai run\` | Quick execution |
| Complex Feature | \`/moai\` | Auto optimization |
| Parallel Development | Use \`--worktree\` flag | Independent environment guarantee |

## Practical Examples

### Example 1: Simple API Endpoint

\`\`\`bash
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
\`\`\`

### Example 2: Complex Feature (Using MoAI)

\`\`\`bash
# If project documentation exists, execute all at once with MoAI
> /moai "Implement JWT authentication middleware"
\`\`\`

### Example 3: Parallel Development (Using Worktree)

\`\`\`bash
# Parallel development in independent environments
> /moai plan "Implement payment system" --worktree
\`\`\`

## Understanding File Structure

Standard MoAI-ADK project structure:

\`\`\`
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
\`\`\`

## Quality Check

Check quality anytime during development:

\`\`\`bash
moai doctor
\`\`\`

This command verifies:

- LSP diagnostics (errors, warnings)
- Test coverage
- Linter status
- Security verification

\`\`\`mermaid
graph TD
    A["moai doctor"] --> B["LSP Diagnostics"]
    A --> C["Test Coverage"]
    A --> D["Linter Status"]
    A --> E["Security Verification"]

    B --> F["Comprehensive Report"]
    C --> F
    D --> F
    E --> F
\`\`\`

## Useful Tips

### Token Management

For large projects, run \`/clear\` after each phase to save tokens:

\`\`\`bash
> /moai plan "Implement complex feature"
> /clear  # Reset session
> /moai run SPEC-001
> /clear
> /moai sync SPEC-001
\`\`\`

### Bug Fix & Automation

\`\`\`bash
# Auto fix
> /moai fix "Fix TypeError in tests"

# Repeat fix until complete
> /moai loop "Fix all linter warnings"
\`\`\`

---

## Next Steps

Learn about MoAI-ADK's advanced features in [Core Concepts](/core-concepts/what-is-moai-adk).
`,

  '/docs/claude-code/settings': `
---
title: "Settings"
description: "Configure Claude Code with global and project-level settings, environment variables."
---

# Settings

Claude Code provides a variety of settings to configure behavior to your needs. When using the interactive REPL, run the \`/config\` command to configure. This command opens a tabbed settings interface where you can view status information and modify configuration options.

## Configuration Scopes

Claude Code uses a **scope system** that determines where configuration applies and who it's shared with. Understanding scopes helps you decide how to configure Claude Code for personal use, team collaboration, or enterprise deployment.

### Available Scopes

| Scope | Location | Who it affects | Share with team? |
|------|----------|----------------|-----------|
| **Managed** | System-level \`managed-settings.json\` | All users on system | Yes (deployed by IT) |
| **User** | \`~/.claude/\` directory | User across all projects | No |
| **Project** | \`.claude/\` in repo | All collaborators in this repo | Yes (committed to git) |
| **Local** | \`.claude/*.local.*\` files | Only user in this repo | No (gitignored) |

### When to Use Each Scope

**Managed scope** is best for:

- Security policies that must be enforced across an organization
- Compliance requirements that cannot be overridden
- Standardized configurations deployed by IT/DevOps

**User scope** is best for:

- Personal preferences you want in all projects (theme, editor settings)
- Tools and plugins you use across all projects
- API keys and authentication stored securely

**Project scope** is best for:

- Team-shared settings (permissions, hooks, MCP servers)
- Plugins that the entire team should have
- Tool standardization across collaborators

**Local scope** is best for:

- Personal overrides for specific projects
- Testing configurations before sharing with team
- Machine-specific settings that won't work for others

### How Scopes Interact

When the same setting is configured in multiple scopes, the more specific scope takes precedence:

1. **Managed** (highest) - Cannot be overridden by anything else
2. **Command-line arguments** - Temporary overrides for specific sessions
3. **Local** - Overrides project and user settings
4. **Project** - Overrides user settings
5. **User** (lowest) - Applies when nothing else specifies the setting

For example, if permissions are allowed in user settings but denied in project settings, the project settings take precedence and the permission is blocked.

### Using Scopes

Scopes apply to many Claude Code features:

| Feature | User location | Project location | Local location |
|------|---------------|------------------|----------------|
| **Settings** | \`~/.claude/settings.json\` | \`.claude/settings.json\` | \`.claude/settings.local.json\` |
| **Subagents** | \`~/.claude/agents/\` | \`.claude/agents/\` | — |
| **MCP servers** | \`~/.claude.json\` | \`.mcp.json\` | \`~/.claude.json\` (project-specific) |
| **Plugins** | \`~/.claude/settings.json\` | \`.claude/settings.json\` | \`.claude/settings.local.json\` |
| **CLAUDE.md** | \`~/.claude/CLAUDE.md\` | \`CLAUDE.md\` or \`.claude/CLAUDE.md\` | \`CLAUDE.local.md\` |

---

## Settings Files

The \`settings.json\` file is the official mechanism to configure Claude Code through hierarchical settings:

- **User settings** are defined in \`~/.claude/settings.json\` and apply to all projects.
- **Project settings** are stored in the project directory:
  - \`.claude/settings.json\` - Settings committed to source control and shared with the team
  - \`.claude/settings.local.json\` - Non-committed settings, for personal preferences and experimentation. When created, Claude Code configures git to ignore this file.
- **Managed settings**: For organizations that need centralized control, Claude Code supports \`managed-settings.json\` and \`managed-mcp.json\` files that can be deployed to system directories:
  - macOS: \`/Library/Application Support/ClaudeCode/\`
  - Linux and WSL: \`/etc/claude-code/\`
  - Windows: \`C:\\Program Files\\ClaudeCode\\\`

See [Managed settings](https://code.claude.com/docs/en/settings#managed-settings) and [Managed MCP configuration](https://code.claude.com/docs/en/settings#managed-mcp-configuration) for details.

- **Other configuration** is stored in \`~/.claude.json\`. This file contains preferences (theme, notification settings, editor mode), OAuth sessions, MCP server configuration for user and local scopes, project-specific state (allowed tools, trust settings), and various caches. Project-scope MCP servers are stored separately in \`.mcp.json\`.

\`\`\`json
{
  "permissions": {
    "allow": [
      "Bash(npm run lint)",
      "Bash(npm run test:*)",
      "Read(~/.zshrc)"
    ],
    "deny": [
      "Bash(curl:*)",
      "Read(./.env)",
      "Read(./.env.*)",
      "Read(./secrets/**)"
    ]
  },
  "env": {
    "CLAUDE_CODE_ENABLE_TELEMETRY": "1",
    "OTEL_METRICS_EXPORTER": "otlp"
  },
  "companyAnnouncements": [
    "Welcome to Acme Corp! Please review our coding guidelines at docs.acme.com",
    "Reminder that all PRs require code review",
    "New security policy in effect"
  ]
}
\`\`\`

### Available Settings

\`settings.json\` supports many options:

| Key | Description | Example |
|------|-------------|---------|
| \`apiKeyHelper\` | Custom script to run to generate auth value (run in \`/bin/sh\`) | \`/bin/generate_temp_api_key.sh\` |
| \`cleanupPeriodDays\` | Delete inactive sessions older than this period on startup. Set to \`0\` to delete all sessions immediately (default: 30 days) | \`20\` |
| \`companyAnnouncements\` | Announcements to show users on startup. Multiple announcements cycle randomly | \`["Welcome to Acme Corp!"]\` |
| \`env\` | Environment variables to apply to all sessions | \`{"FOO": "bar"}\` |
| \`attribution\` | Custom attribution user for git commits and pull requests | \`{"commit": "Generated with Claude Code", "pr": ""}\` |
| \`includeCoAuthoredBy\` | **Deprecated**: Use \`attribution\` instead. Whether to include "Co-Authored-By Claude" byline in git commits and pull requests (default: \`true\`) | \`false\` |
| \`permissions\` | See permissions settings table below for structure | |
| \`hooks\` | Configure custom commands to run before/after tool execution. See [Hooks documentation](/advanced/hooks-guide) | \`{"PreToolUse": {"Bash": "echo 'Running command...'"}}\` |
| \`disableAllHooks\` | Disable all hooks | \`true\` |
| \`allowManagedHooksOnly\` | (Managed settings only) Prevent loading user, project, and plugin hooks. Only allow managed hooks and SDK hooks. See [Hook configuration](https://code.claude.com/docs/en/settings#hook-configuration) | \`true\` |
| \`model\` | Override default model for Claude Code | \`"claude-sonnet-4-5-20250929"\` |
| \`otelHeadersHelper\` | Script for dynamic OpenTelemetry header generation. Run at startup and periodically (see dynamic headers) | \`/bin/generate_otel_headers.sh\` |
| \`statusLine\` | Configure custom status line to display context. See \`statusLine\` documentation | \`{"type": "command", "command": "~/.claude/statusline.sh"}\` |
| \`fileSuggestion\` | Configure custom script for \`@\` file autocompletion. See [File suggestion settings](https://code.claude.com/docs/en/settings#file-suggestion-settings) | \`{"type": "command", "command": "~/.claude/file-suggestion.sh"}\` |
| \`respectGitignore\` | Control whether \`@\` file picker respects \`.gitignore\` patterns. When \`true\` (default), files matching \`.gitignore\` patterns are excluded from suggestions | \`false\` |
| \`forceLoginMethod\` | Set to \`claudeai\` to restrict login to Claude.ai accounts, or \`console\` to restrict to Claude Console (API usage billed) accounts | \`claudeai\` |
| \`language\` | Configure Claude's preferred response language (e.g., \`"japanese"\`, \`"spanish"\`, \`"french"\`). Claude will respond in this language by default | \`"japanese"\` |

### Permissions Settings

| Key | Description | Example |
|------|-------------|---------|
| \`allow\` | Array of permission rules to allow tool usage. See permission rule syntax for pattern matching details | \`[ "Bash(git diff:*)" ]\` |
| \`ask\` | Array of permission rules to ask for confirmation on tool usage. See permission rule syntax | \`[ "Bash(git push:*)" ]\` |
| \`deny\` | Array of permission rules to deny tool usage. Use to exclude sensitive files from Claude Code access. See permission rule syntax and Bash permission caveats | \`[ "WebFetch", "Bash(curl:*)", "Read(./.env)", "Read(./secrets/**)" ]\` |
| \`additionalDirectories\` | Additional working directories Claude can access | \`[ "../docs/" ]\` |
| \`defaultMode\` | Default permission mode when Claude Code opens | \`"acceptEdits"\` |
| \`disableBypassPermissionsMode\` | Set to \`"disable"\` to prevent activating \`bypassPermissions\` mode. Disables the \`--dangerously-skip-permissions\` command-line flag. See [Managed settings](https://code.claude.com/docs/en/settings#managed-settings) | \`"disable"\` |

### Permission Rule Syntax

Permission rules follow the format \`Tool\` or \`Tool(specifier)\`. Understanding the syntax helps you write rules that match exactly what you want.

#### Rule Evaluation Order

When multiple rules could match the same tool usage, rules are evaluated in this order:

1. **Deny** rules are checked first
2. **Ask** rules are checked second
3. **Allow** rules are checked last

The first matching rule determines the behavior. This means a deny rule always takes precedence over an allow rule, even when both rules match.

#### Match All Uses of a Tool

To match all uses of a tool, use just the tool name without parentheses:

| Rule | Effect |
|------|--------|
| \`Bash\` | Matches **all** Bash commands |
| \`WebFetch\` | Matches **all** web fetch requests |
| \`Read\` | Matches **all** file reads |

\`Bash(*)\` is equivalent to \`Bash\` and matches all Bash commands. Both syntaxes can be used interchangeably.

#### Add Specifiers for Fine Control

Add a specifier in parentheses to match specific tool usages:

| Rule | Effect |
|------|--------|
| \`Bash(npm run build)\` | Matches exact command \`npm run build\` |
| \`Read(./.env)\` | Matches reading the \`.env\` file in the current directory |
| \`WebFetch(domain:example.com)\` | Matches fetch requests for example.com |

#### Wildcard Patterns

Bash rules have two wildcard syntaxes:

| Wildcard | Location | Behavior | Example |
|----------|----------|----------|---------|
| \`:*\` | End of pattern only | **Prefix match** with word boundaries. Must have space or end of string after prefix | \`Bash(ls:*)\` matches \`ls -la\` but not \`lsof\` |
| \`*\` | Anywhere in pattern | **Glob match** without word boundaries. Matches any character sequence at that position | \`Bash(ls*)\` matches both \`ls -la\` and \`lsof\` |

**Prefix match with \`:*\`**

The \`:*\` suffix matches all commands starting with the specified prefix. This works with multi-word commands. The following configuration allows npm and git commit commands but blocks git push and rm -rf:

\`\`\`json
{
  "permissions": {
    "allow": [
      "Bash(npm run:*)",
      "Bash(git commit:*)",
      "Bash(docker compose:*)"
    ],
    "deny": [
      "Bash(git push:*)",
      "Bash(rm -rf:*)"
    ]
  }
}
\`\`\`

**Glob match with \`*\`**

The \`*\` wildcard can appear at the start, middle, or end of a pattern. The following configuration allows git commands targeting main (e.g., \`git checkout main\`, \`git merge main\`) and all version-checking commands (e.g., \`node --version\`, \`npm --version\`):

\`\`\`json
{
  "permissions": {
    "allow": [
      "Bash(git * main)",
      "Bash(* --version)"
    ]
  }
}
\`\`\`

---

## Environment Variables

Claude Code supports the following environment variables to control behavior:

| Variable | Purpose |
|------|---------|
| \`ANTHROPIC_API_KEY\` | API key sent as \`X-Api-Key\` header, primarily for Claude SDK (run \`/login\` for interactive use) |
| \`ANTHROPIC_AUTH_TOKEN\` | Custom value for \`Authorization\` header (your value is prefixed with \`Bearer\`) |
| \`CLAUDE_DEFAULT_HAIKU_MODEL\` | See [Model configuration](https://code.claude.com/docs/en/settings#model-configuration) |
| \`CLAUDE_DEFAULT_OPUS_MODEL\` | See [Model configuration](https://code.claude.com/docs/en/settings#model-configuration) |
| \`CLAUDE_DEFAULT_SONNET_MODEL\` | See [Model configuration](https://code.claude.com/docs/en/settings#model-configuration) |
| \`BASH_DEFAULT_TIMEOUT_MS\` | Default timeout for long-running bash commands |
| \`BASH_MAX_OUTPUT_LENGTH\` | Maximum character count for bash output before mid-stream truncation |
| \`CLAUDE_AUTOCOMPACT_PCT_OVERRIDE\` | Set context capacity percentage (1-100) at which auto-compaction triggers. By default, auto-compaction triggers at about 95% capacity. Lower values like \`50\` compact earlier. Values higher than the default threshold have no effect |
| \`CLAUDE_CODE_ENABLE_TELEMETRY\` | Set to \`1\` to enable OpenTelemetry data collection for metrics and logging. Must be enabled first to configure OTel exporters. See [Monitoring](https://code.claude.com/docs/en/settings#monitoring) |
| \`CLAUDE_CODE_HIDE_ACCOUNT_INFO\` | Set to \`1\` to hide your email address and organization name in the Claude Code UI. Useful when streaming or recording |
| \`CLAUDE_CODE_SHELL\` | Override automatic shell detection. Useful when your login shell differs from your working shell (e.g., \`bash\` vs \`zsh\`) |
| \`DISABLE_AUTOUPDATER\` | Set to \`1\` to disable automatic updates |
| \`DISABLE_BUG_COMMAND\` | Set to \`1\` to disable the \`/bug\` command |
| \`DISABLE_ERROR_REPORTING\` | Set to \`1\` to opt out of Sentry error reporting |
| \`ENABLE_TOOL_SEARCH\` | Control MCP tool search. Values: \`auto\` (default, enabled at 10% context), \`auto:N\` (custom threshold, e.g., \`auto:5\` for 5%), \`true\` (always on), \`false\` (disabled) |

For the complete list of environment variables, see [official documentation](https://code.claude.com/docs/en/settings#environment-variables).

---

**Sources:**
- [Claude Code settings](https://code.claude.com/docs/en/settings)
`,

  '/docs/claude-code/skills': `
import { Callout } from 'nextra/components'

# Skills

Reusable instruction files that extend Claude Code's capabilities, written in SKILL.md for Claude to automatically utilize.

<Callout type="tip">
One-line summary: Skills are markdown files that Claude reads and follows. Creating SKILL.md in a directory adds a new feature to Claude's toolbox.
</Callout>

## What are Skills?

Skills are extensions that add new knowledge or workflows to Claude Code. Metaphorically, skills are like **manuals** handed to Claude. Just as you give a work manual to a new employee who follows it, Claude reads skill files and performs tasks according to those instructions.

Key features of skills:

- **Auto-discovery**: Claude compares user requests with skill descriptions to automatically select appropriate skills
- **Direct invocation**: Users can also invoke directly using slash commands in the form \`/skillname\`
- **Reusable**: Once written, can be used repeatedly across multiple sessions and projects
- **Markdown-based**: Written in markdown without requiring separate programming languages

### Agent Skills Open Standard

Skills follow the **Agent Skills** open standard developed by Anthropic. This standard works identically across various AI tools:

- Claude Code
- Cursor
- Gemini CLI
- VS Code (GitHub Copilot)
- GitHub

One skill file can be reused across multiple tools.

### Progressive Disclosure Architecture

Skills use a 3-level loading system to efficiently use the context window. Loading all skills at once would waste tokens, so they load incrementally as needed.

\`\`\`mermaid
flowchart TD
    A["Level 1: Metadata<br/>name + description<br/>~100 tokens"] --> B{"User request<br/>related to skill?"}
    B -->|"Yes"| C["Level 2: Load body<br/>SKILL.md content<br/>≤5,000 tokens recommended"]
    B -->|"No"| D["Don't load<br/>Save tokens"]
    C --> E{"Additional files<br/>needed?"}
    E -->|"Yes"| F["Level 3: Load resources<br/>reference.md, scripts/<br/>As needed"]
    E -->|"No"| G["Execute task"]
    F --> G
\`\`\`

| Level | When loaded | Content | Token cost |
|-------|------------|---------|------------|
| **Level 1** | Always when Claude starts | name, description | ~100 tokens per skill |
| **Level 2** | When skill is selected | SKILL.md body | ≤5,000 tokens recommended |
| **Level 3** | When reference files needed | Additional files, scripts | Virtually unlimited |

## Create Your First Skill

Let's create a skill. Here's the process for creating a simple skill that explains code.

\`\`\`mermaid
flowchart TD
    A["1. Create directory"] --> B["2. Write SKILL.md"]
    B --> C["3. Write frontmatter"]
    C --> D["4. Write instruction body"]
    D --> E["5. Restart Claude Code"]
    E --> F{"Test"}
    F -->|"Auto invoke"| G["Ask Claude for related task"]
    F -->|"Direct invoke"| H["Type /explain-code"]
    G --> I["Verify skill works correctly"]
    H --> I
\`\`\`

### Step 1: Create Directory

To add a skill to your project, create a directory under \`.claude/skills/\`:

\`\`\`bash
mkdir -p .claude/skills/explain-code
\`\`\`

To create a personal skill (usable across all projects):

\`\`\`bash
mkdir -p ~/.claude/skills/explain-code
\`\`\`

### Step 2: Write SKILL.md

Create a \`SKILL.md\` file. The file consists of YAML frontmatter and markdown body:

\`\`\`markdown
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
\`\`\`

### Step 3: Test

After restarting Claude Code, you can test in two ways:

- **Auto invocation**: Ask "Please explain the code in this file" and Claude will automatically select the skill
- **Direct invocation**: Type \`/explain-code\` to invoke explicitly

## Skill Directory Structure

Skills organize related files in one directory:

\`\`\`
my-skill/
├── SKILL.md           # Main instruction file (required, under 500 lines)
├── template.md        # Template for Claude to use
├── examples/
│   └── sample.md      # Example outputs
└── scripts/
    └── validate.sh    # Script for Claude to execute
\`\`\`

Role of each file:

- **SKILL.md** (required): Core instruction file. Consists of frontmatter and markdown body. Keep under 500 lines.
- **template.md**: Template referenced when Claude generates output. For example, for a PR review skill, put the review form template here.
- **examples/**: Provide examples of expected outputs to Claude. Specific examples improve Claude's output quality.
- **scripts/**: Scripts Claude can execute with bash. Used for validation, transformation, build, etc.

<Callout type="info">
When referencing other files in SKILL.md, keep references to one level deep only. If SKILL.md references advanced.md and advanced.md references details.md, Claude may read incompletely. It's safest for SKILL.md to directly reference all files.
</Callout>

## Skill Storage Locations

Skills can be stored in multiple locations, with higher priority taking precedence when names conflict:

| Priority | Location | Path | Scope |
|----------|----------|------|-------|
| 1 (highest) | **Enterprise** | Managed settings | All users in organization |
| 2 | **Personal** | \`~/.claude/skills/<skillname>/SKILL.md\` | User's all projects |
| 3 | **Project** | \`.claude/skills/<skillname>/SKILL.md\` | That project only |
| 4 | **Plugin** | \`<plugin>/skills/<skillname>/SKILL.md\` | Where plugin is active |

<Callout type="info">
When the same skill name exists in Enterprise and Personal, the Enterprise skill takes precedence. Plugin skills use \`pluginname:skillname\` namespace to avoid conflicts.
</Callout>

### Monorepo Auto-Discovery

In monorepo structures, Claude also auto-discovers skills in nested directories. For example, skills in \`packages/api/.claude/skills/\` are automatically recognized when working in that directory. Not all loaded at startup, but included when reading files in that sub-tree.

## Skill Types

Skill content is divided into two main types:

### Reference Content

Knowledge that Claude references throughout its work. Includes coding rules, API patterns, style guides, etc.

\`\`\`yaml
---
name: api-style-guide
description: API design conventions and patterns for this project. Use when designing or reviewing API endpoints.
---
\`\`\`

\`\`\`markdown
# API Style Guide

## Endpoint naming conventions
- Use plural form for resource names: \`/users\`, \`/orders\`
- Nested resources: \`/users/{id}/orders\`
- Use HTTP methods instead of verbs

## Response format
- Success: \`{ "data": ... }\`
- Error: \`{ "error": { "code": "...", "message": "..." } }\`
\`\`\`

### Task Content

Instructions for Claude to perform specific tasks step by step. Includes deployment, code review, code generation, etc. Task skills typically set \`disable-model-invocation: true\` to run only when explicitly invoked by users.

\`\`\`yaml
---
name: deploy
description: Deploy the application to production. Runs build, test, and deployment steps.
disable-model-invocation: true
allowed-tools: Bash, Read, Grep
---
\`\`\`

\`\`\`markdown
# Deployment Skill

## Steps
1. Verify current branch is main
2. Run all tests: \`npm test\`
3. Production build: \`npm run build\`
4. Execute deployment: \`npm run deploy\`
5. Verify deployment and report results
\`\`\`

**Which type to choose?**

- If information needs to be referenced repeatedly across multiple tasks: **Reference Content**
- If there's a procedure to execute at a specific point: **Task Content**
- Task content is usually invoked directly with \`/skillname\`

## Frontmatter Settings

You can finely control skill behavior in the YAML frontmatter of SKILL.md:

| Field | Required | Default | Description |
|-------|----------|---------|-------------|
| \`name\` | No | Directory name | Display name. Use lowercase and hyphens only. Max 64 characters |
| \`description\` | Recommended | - | Purpose and when to use the skill. Claude reads this and decides when to select the skill. Max 1024 characters |
| \`argument-hint\` | No | - | Autocomplete hint. Example: \`[issue-number]\` |
| \`disable-model-invocation\` | No | \`false\` | If \`true\`, Claude cannot auto-invoke. Only users can invoke |
| \`user-invocable\` | No | \`true\` | If \`false\`, hides from slash menu. Only Claude can invoke |
| \`allowed-tools\` | No | - | Restrict tools Claude can use. Example: \`Read, Grep, Glob\` |
| \`model\` | No | Current model | Specify model to use when executing skill |
| \`context\` | No | - | If set to \`fork\`, executes in subagent with isolation |
| \`agent\` | No | \`general-purpose\` | Agent type when \`context: fork\`. \`Explore\`, \`Plan\`, \`general-purpose\` |
| \`hooks\` | No | - | Hooks attached to skill lifecycle |

### String Substitution

You can use the following variables in frontmatter and body:

| Variable | Description | Example |
|----------|-------------|---------|
| \`$ARGUMENTS\` | All arguments passed | \`$ARGUMENTS\` is \`staging\` when \`/deploy staging\` |
| \`$ARGUMENTS[0]\` or \`$0\` | First argument | \`$ARGUMENTS[0]\` is \`PR-123\` when \`/review PR-123\` |
| \`$ARGUMENTS[1]\` or \`$1\` | Second argument | Access sequentially |
| \`\${CLAUDE_SESSION_ID}\` | Current session ID | Unique session identifier |

## Invocation Control

Controlling who can invoke a skill is important. Based on frontmatter settings, the invoking subject changes:

\`\`\`mermaid
flowchart TD
    A["Skill invocation request"] --> B{"Who invokes?"}
    B -->|"User (/command)"| C{"user-invocable<br/>setting check"}
    B -->|"Claude auto"| D{"disable-model-invocation<br/>setting check"}
    C -->|"true (default)"| E["Allow invocation"]
    C -->|"false"| F["Hidden from slash menu"]
    D -->|"false (default)"| G["Allow auto invocation"]
    D -->|"true"| H["Block auto invocation"]
    E --> I["Execute skill"]
    G --> I
    F --> J["Only Claude can use"]
    J --> I
    H --> K["Only user can invoke"]
    K --> I
\`\`\`

| Frontmatter setting | User invocation | Claude auto invocation | Use case |
|---------------------|----------------|------------------------|----------|
| (default) | Possible | Possible | General skills |
| \`disable-model-invocation: true\` | Possible | Impossible | Deployment, dangerous tasks |
| \`user-invocable: false\` | Impossible | Possible | Internal helper skills |

### Recommended Settings by Use Case

- **General skills**: Use defaults. Claude automatically invokes at appropriate times.
- **Dangerous tasks like deployment, data deletion**: Set \`disable-model-invocation: true\`. Only runs when user explicitly types \`/deploy\`.
- **Helper skills for other skills**: Set \`user-invocable: false\`. Not shown in slash menu but Claude uses automatically when needed.

## Passing Arguments

You can pass arguments to skills to make them behave dynamically.

### Basic Usage

\`\`\`markdown
---
name: review-pr
description: Review a pull request by number.
argument-hint: "[PR number]"
---

# PR Review

Review PR #$ARGUMENTS.
\`\`\`

When user types \`/review-pr 123\`, \`$ARGUMENTS\` is replaced with \`123\`.

### Position-Based Arguments

When passing multiple arguments, use positional indexes:

\`\`\`markdown
---
name: compare-branches
description: Compare two git branches.
argument-hint: "[base branch] [compare branch]"
---

# Branch Comparison

Base branch: $0
Compare branch: $1
\`\`\`

Typing \`/compare-branches main develop\` replaces \`$0\` with \`main\` and \`$1\` with \`develop\`.

## Advanced Patterns

### Dynamic Context Injection

Backtick blocks starting with \`!\` execute as shell commands and their output is inserted into the skill body. This allows skills to include fresh runtime information.

\`\`\`markdown
## Current branch info
!\`git branch --show-current\`

## Recent commits
!\`git log --oneline -5\`

## Open issues list
!\`gh issue list --limit 5\`
\`\`\`

When Claude loads this skill, each command executes and actual git branch names, recent commit history, and GitHub issue lists are inserted. This allows skills to always reflect current project state.

### Execute in Subagent

Setting \`context: fork\` makes the skill execute in an isolated subagent. Subagents have their own context window, so they don't consume the main conversation's context.

\`\`\`yaml
---
name: codebase-analysis
description: Analyze entire codebase structure and generate report.
context: fork
agent: Explore
allowed-tools: Read, Grep, Glob
---
\`\`\`

You can specify subagent type with the \`agent\` field:

- **Explore**: Optimized for read-only exploration. Good for code analysis, understanding structure
- **Plan**: Optimized for planning. Good for architecture design, strategy formulation
- **general-purpose** (default): General agent. Both reading and writing possible

<Callout type="warning">
Skills executed in subagents are isolated from the main conversation. Subagents don't know the main conversation's previous content, and only return results in summary form. Also, subagents cannot create other subagents.
</Callout>

### Permission Restrictions

Use the \`allowed-tools\` field to restrict which tools a skill can use. This is important for security and safety.

\`\`\`yaml
---
name: safe-reader
description: Read-only analysis of code files.
allowed-tools:
  - Read
  - Grep
  - Glob
---
\`\`\`

This skill can only read and search files, not modify files or execute commands.

Recommended permission settings:

- **Read-only skills**: \`Read, Grep, Glob\` - Good for analysis, review tasks
- **File modification skills**: \`Read, Write, Edit, Grep, Glob\` - Good for refactoring, code generation
- **Build/deploy skills**: \`Read, Grep, Glob, Bash\` - Good for build, test, deploy

If \`allowed-tools\` is not specified, Claude follows standard permission model and asks for tool usage permission as needed.

## Skill Sharing

### Project Sharing

Commit the \`.claude/skills/\` directory to version control to share the same skills across the entire team:

\`\`\`bash
git add .claude/skills/
git commit -m "Add team coding standards skill"
git push
\`\`\`

### Share as Plugin

To distribute across multiple projects or share publicly, package as a plugin. Put skills in the plugin's \`skills/\` directory to access with \`pluginname:skillname\` namespace.

### Organization-Wide Deployment

Deploy skills to all users in an organization via Enterprise managed settings. This is useful for enforcing organization-level rules like security policies and coding standards.

## Tips for Writing Effective Skills

### Writing \`description\`

The \`description\` is the key criterion for Claude to select skills. Write well and Claude will use skills at the right times.

**Good examples:**

- "Extract text and tables from PDF files, fill forms, merge documents. Use when working with PDF files or when the user mentions PDFs, forms, or document extraction."
- "Generate descriptive commit messages by analyzing git diffs. Use when the user asks for help writing commit messages or reviewing staged changes."

**Bad examples:**

- "Helps with documents" - Too vague
- "Processes data" - Not specific
- "I can help you with files" - Don't use first person

Writing rules:

- **Write in third person**: "Processes Excel files and generates reports" (O) / "I can help you process" (X)
- **Include both purpose and triggers**: What it does + when to use it
- **Include specific keywords**: Add terms users are likely to mention

### SKILL.md Writing Principles

Claude is already very smart. Only add information to skills that Claude **doesn't know**:

- Check if you're repeating explanations Claude already knows
- Review whether each paragraph provides sufficient value for token cost
- Keep under 500 lines, separate detailed content into separate files

## Troubleshooting

| Problem | Cause | Solution |
|---------|-------|----------|
| Skill not auto-selected | Lack of trigger keywords in description | Add key terms users might mention to description. Verify behavior by invoking directly with \`/skillname\` |
| Skill selected too often | Description too general | Make description more specific or set \`disable-model-invocation: true\` |
| Claude doesn't recognize some skills | Character budget exceeded | Increase environment variable \`SLASH_COMMAND_TOOL_CHAR_BUDGET\` (default 15,000) |
| YAML parsing error | Frontmatter syntax error | Check \`---\` markers, use spaces instead of tabs, check indentation |
| File references don't work | Deep nested references | Have SKILL.md directly reference all files (one level only) |
| Skill conflicts | Similar descriptions | Use unique trigger keywords in each skill's description |

<Callout type="warning">
If total character count of skills exceeds the default budget of 15,000, some skills may not load. If using many skills, increase the \`SLASH_COMMAND_TOOL_CHAR_BUDGET\` environment variable.
</Callout>

### Security Notes

Since skills provide new capabilities to Claude, only use skills from trusted sources:

- Skills you wrote yourself
- Official skills provided by Anthropic
- Skills shared by verified teammates

Review all files in SKILL.md and scripts/ directories before using externally sourced skills.

## Related Documents

- [Extensions](/claude-code/extensions) - Complete overview of skills, subagents, hooks, MCP, plugins
- [Memory management](/claude-code/memory) - Difference between CLAUDE.md and skills, memory hierarchy
- [Interactive mode](/claude-code/interactive-mode) - Interactive workflows with slash commands
- [Settings](/claude-code/settings) - Skill-related settings and environment variables
- [Troubleshooting](/claude-code/troubleshooting) - Additional solutions for skill-related issues

<Callout type="tip">
If you're new to writing skills, start with a simple reference skill. Creating a skill for your project's coding rules or frequently used commands is a good starting point.
</Callout>
`,

  '/docs/claude-code/sub-agents': `
import { Callout } from 'nextra/components'

# Subagents

Learn how to create and utilize specialized AI workers in Claude Code to efficiently handle complex tasks.

<Callout type="tip">
One-line summary: Subagents are specialized AI workers for specific tasks that handle delegated work independently without polluting the main conversation's context.
</Callout>

## What are Subagents?

Subagents are similar to delegating tasks to experts within a team. For example, just as a project manager doesn't write all code directly but delegates API work to backend developers and UI work to frontend developers, Claude can also delegate specific tasks to specialized subagents.

Each subagent has these elements:

- **Independent context window**: Separate workspace from main conversation (up to 200K tokens)
- **Custom system prompt**: Instructions defining the subagent's role and behavior
- **Tool access control**: Selectively allowing only necessary tools for enhanced security
- **Independent permission settings**: Individual control over file editing, command execution, etc.

### Benefits of Using Subagents

- **Context preservation**: Even if a subagent reads dozens of files, only key findings are delivered to the main conversation, keeping context clean
- **Enhanced specialization**: Higher success rates for specific tasks with detailed domain instructions
- **Reusability**: Once created, can be used repeatedly across the entire project
- **Cost reduction**: Can route to lightweight models like Haiku for cost savings
- **Parallel processing**: Multiple subagents can run simultaneously to increase task speed

\`\`\`mermaid
flowchart TD
    A[User request] --> B[Claude main conversation]
    B --> C{Analyze task}
    C -->|Expert task needed| D[Delegate to subagent]
    C -->|Can handle directly| E[Claude handles directly]
    D --> F[Subagent executes independently]
    F --> G[Return summary result]
    G --> H[Integrate into main conversation]
    E --> H
    H --> I[Respond to user]
\`\`\`

<Callout type="info">
Key to context preservation: Even if a subagent analyzes 50 files, only key findings are summarized and delivered to the main conversation. The main conversation's context window isn't wasted, allowing longer tasks to continue.
</Callout>

## Built-in Subagents

Claude Code includes built-in subagents for frequently used tasks.

| Subagent | Model | Tools | Purpose |
|---|---|---|---|
| **Explore** | Haiku | Read, Grep, Glob, Bash | Codebase exploration and analysis (read-only) |
| **Plan** | Sonnet (inherit) | Read, Grep, Glob, Bash | Plan mode codebase investigation (read-only) |
| **General-purpose** | inherit | All tools | Complex multi-step tasks |
| **Bash** | inherit | Bash | Command execution only |
| **statusline-setup** | Sonnet | Limited | Status line setup |
| **Claude Code Guide** | Haiku | Limited | Claude Code usage guide |

\`\`\`mermaid
flowchart TD
    A[Claude receives task] --> B{Determine task type}
    B -->|Fast code search| C[Explore subagent]
    B -->|Plan mode| D[Plan subagent]
    B -->|Complex implementation| E[General-purpose subagent]
    B -->|Command execution| F[Bash subagent]
    C --> G[Process quickly with Haiku model]
    D --> H[Deep analysis with Sonnet model]
    E --> I[Complete task with inherited model]
    F --> J[Return command result]
    G --> K[Return summary result]
    H --> K
    I --> K
    J --> K
\`\`\`

**Explore** subagent uses Haiku model for fast, inexpensive codebase exploration. Thoroughness can be adjusted to quick, medium, or very thorough. Read-only, so it doesn't modify code.

**Plan** subagent is automatically invoked in plan mode, used to investigate codebases and create implementation plans. Inherits the main model for powerful analysis capabilities.

**General-purpose** subagent has access to all tools to independently perform complex multi-step tasks.

## Creating Subagents

### Using \`/agents\` Command

The easiest way to create a subagent is with the \`/agents\` command.

1. Type \`/agents\` in Claude Code conversation
2. Select **Create New Agent**
3. Choose project level (current project only) or user level (all your projects)
4. Describe the subagent's purpose and when to use it
5. Select necessary tools (leave blank for all tools)
6. Press \`e\` to edit system prompt in editor

<Callout type="tip">
For first-time creators, it's recommended to ask Claude to generate the system prompt, then customize it based on your needs.
</Callout>

### Create Directly as File

You can define a subagent directly by including YAML frontmatter in a markdown file.

**File locations:**
- Project subagent: \`.claude/agents/agentname.md\`
- Personal subagent: \`~/.claude/agents/agentname.md\`

**File format example:**

\`\`\`markdown
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
\`\`\`

**Each field description:**

- \`name\`: Unique identifier for the subagent. Use only lowercase and hyphens
- \`description\`: Describes when Claude should use this subagent. Including expressions like "use PROACTIVELY" or "MUST BE USED" promotes automatic delegation
- \`tools\`: List of allowed tools, comma-separated. Omit to inherit all tools
- \`model\`: Specify model to use. Omit to use default (usually sonnet)

### Create with CLI Flag

Use the \`--agents\` flag to define temporary subagents valid only for that session.

\`\`\`bash
claude --agents '{
  "quick-reviewer": {
    "description": "Quick code review expert. Auto use after code changes.",
    "prompt": "You are a code review expert. Focus on quality and security.",
    "tools": ["Read", "Grep", "Glob", "Bash"],
    "model": "sonnet"
  }
}'
\`\`\`

This is useful for CI/CD pipelines or one-off tasks. Subagent definition disappears when session ends.

## Storage Locations and Priority

Subagents can be defined in multiple locations, with only one applying when the same name exists in multiple places based on priority.

| Location | Scope | Priority |
|---|---|---|
| \`--agents\` CLI flag | Current session only | 1 (highest) |
| \`.claude/agents/\` | Current project | 2 |
| \`~/.claude/agents/\` | All projects | 3 |
| Plugin's \`agents/\` | Where plugin is active | 4 (lowest) |

<Callout type="info">
Store project-specific subagents in \`.claude/agents/\` and subagents shared across all projects in \`~/.claude/agents/\`. Project subagents can be committed to Git and shared with teammates.
</Callout>

## Frontmatter Settings

All fields available in the YAML frontmatter of subagent files:

| Field | Required | Description | Default |
|---|---|---|---|
| \`name\` | Required | Unique identifier (lowercase, hyphens) | - |
| \`description\` | Required | Describe when Claude should delegate | - |
| \`tools\` | Optional | Allowed tools list (comma-separated) | Inherit all tools |
| \`disallowedTools\` | Optional | Disallowed tools list | - |
| \`model\` | Optional | Model to use: sonnet, opus, haiku, inherit | inherit |
| \`permissionMode\` | Optional | Permission handling mode | default |
| \`skills\` | Optional | List of skills to preload at startup | - |
| \`hooks\` | Optional | Lifecycle Hook definitions | - |

## Tool Control

### Tool Allow and Deny

Use the \`tools\` field to explicitly specify which tools a subagent can use, or the \`disallowedTools\` field to block specific tools.

**Read-only agent example:**

\`\`\`yaml
---
name: analyzer
description: "Code analysis expert. Read-only."
tools: Read, Grep, Glob
---
\`\`\`

**Can edit files but cannot execute commands example:**

\`\`\`yaml
---
name: editor
description: "Code editing expert. Does not execute commands."
tools: Read, Write, Edit, Grep, Glob
disallowedTools: Bash
---
\`\`\`

### Permission Mode

Control how the subagent handles permissions with the \`permissionMode\` field.

| Mode | Behavior | When to use |
|---|---|---|
| \`default\` | Show standard permission prompts | General subagents |
| \`acceptEdits\` | Auto-approve file edits | Trusted editing tasks |
| \`dontAsk\` | Auto-deny permission prompts (allowed tools work) | Read-only analysis |
| \`bypassPermissions\` | Skip all permission checks | Fully trusted environment |
| \`plan\` | Read-only exploration mode | Codebase investigation |

<Callout type="warning">
\`bypassPermissions\` mode skips all permission checks and poses security risks. Use only in fully trusted environments. In most cases, \`acceptEdits\` or \`default\` modes are sufficient.
</Callout>

### Skill Preload

Use the \`skills\` field to automatically load specific skills when the subagent starts.

\`\`\`yaml
---
name: api-builder
description: "API construction expert."
tools: Read, Write, Edit, Bash, Grep, Glob
skills: moai-lang-typescript, moai-domain-backend
---
\`\`\`

Skills are not inherited from the parent conversation. Skills needed in the subagent must be explicitly specified in the \`skills\` field. This is different from the skill's \`context: fork\` setting; the \`skills\` field means skill loading at the subagent level.

## Execution Modes

### Foreground vs Background

Subagents run in two ways.

\`\`\`mermaid
flowchart TD
    A[Subagent execution] --> B{Execution mode}
    B -->|Foreground| C[Block main conversation]
    B -->|Background| D[Continue main conversation]
    C --> E[Permission prompts to user]
    D --> F[Allowed tools: auto approve]
    D --> G[Disallowed tools: auto deny]
    E --> H[Resume main conversation after result return]
    F --> I[Notify on complete]
    G --> I
    H --> J[User verifies result]
    I --> J
\`\`\`

**Foreground execution** (default):
- Main conversation waits for subagent completion
- Permission prompts go directly to user
- Results immediately integrated into main conversation

**Background execution**:
- Main conversation continues
- Allowed tool permissions are auto-approved
- Disallowed tool permissions are auto-denied
- Notification on completion
- Convert foreground subagent to background with \`Ctrl+B\`

<Callout type="info">
Background subagents may have limitations using MCP tools. Subagents requiring MCP tools should run in foreground for safety.
</Callout>

### Automatic Delegation

Claude decides whether to automatically delegate to subagents based on:

- Whether user request matches the subagent's \`description\`
- Whether \`description\` includes expressions like "use PROACTIVELY" or "MUST BE USED"
- Current context and available tools

You can also explicitly request a specific subagent:

- "Review recent changes with the code-reviewer subagent"
- "Investigate this error with the debugger subagent"

**Important limitation: Subagents cannot create other subagents.** This is a fundamental design principle to prevent infinite recursion. All delegation happens only from the main conversation.

## Common Patterns

### Large Task Isolation

Isolate tasks that analyze dozens of files or process large logs to subagents to protect the main conversation's context.

"Analyze test run results and identify causes of failed tests"

In this case, the subagent reads and analyzes all test logs, but only key findings are delivered to the main conversation.

### Parallel Research

Run multiple subagents simultaneously to perform independent investigations in parallel.

"While analyzing backend API structure, also investigate frontend component dependencies"

Two subagents analyze their respective areas simultaneously, then results are integrated into the main conversation.

### Subagent Chaining

Chain subagents sequentially to create complex workflows.

"First use the code-analyzer subagent to find performance issues, then use the optimizer subagent to resolve them"

The first subagent's results are passed as input to the second subagent.

## Subagent vs Main Conversation

| Criterion | Main conversation | Subagent |
|---|---|---|
| **Context** | Share entire conversation | Independent context |
| **User interaction** | Free conversation possible | Cannot communicate directly with user |
| **Suitable tasks** | Frequent feedback, quick fixes | Large analysis, parallel processing |
| **Cost** | Use main model | Can choose lightweight model |
| **Tool access** | All tools | Can be restricted |
| **Result** | Directly integrated into conversation | Return only summary |

<Callout type="tip">
Decision criterion: "Does this task read many files or generate long output?" If yes, subagent is suitable. "Is frequent user communication needed?" If yes, main conversation is suitable.
</Callout>

## Context Management

### Resuming

Each subagent execution is assigned a unique \`agentId\`. Use this ID to continue working with the subagent's context intact.

\`\`\`bash
"Resume agent abc123 and now analyze the authorization logic"
\`\`\`

This is useful for long-running investigation tasks, iterative improvement work, or multi-step workflows spanning multiple sessions.

### Auto Compaction

When a subagent's context reaches approximately 95% capacity, auto-compaction is performed. Compaction summarizes previous conversation content to make room for new context.

### Transcript Storage

Subagent execution history is automatically saved at:

\`\`\`
~/.claude/projects/{projectpath}/{sessionID}/subagents/
\`\`\`

This allows you to later verify what work a subagent performed.

## Hooks Configuration

### Frontmatter Hooks

Define hooks that apply only to that agent in the subagent file's frontmatter. Supported events are \`PreToolUse\`, \`PostToolUse\`, \`Stop\`.

\`\`\`yaml
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
\`\`\`

- \`matcher\`: Regex pattern for tool names (e.g., \`"Edit"\`, \`"Write|Edit"\`, \`"Bash"\`)
- \`type\`: Specify \`"command"\` (shell command) or \`"prompt"\` (LLM prompt)
- \`command\`: Shell command to execute
- \`timeout\`: Timeout in seconds (default 60)

<Callout type="warning">
The \`once\` field is not supported in agent frontmatter hooks. For one-time execution, use skill hooks.
</Callout>

### settings.json Hooks

Define hooks in \`settings.json\` that run at subagent start and end times.

- **SubagentStart**: Runs when subagent starts
- **SubagentStop**: Runs when subagent ends

Set \`matcher\` on these hooks to apply only to specific named subagents.

## Example Subagents

### Code Reviewer

Read-only subagent that reviews quality and security after code changes.

\`\`\`markdown
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
\`\`\`

### Debugger

Subagent specialized in error analysis and problem resolution. Includes file editing permissions.

\`\`\`markdown
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
\`\`\`

### Data Scientist

Subagent specialized in SQL queries and data analysis. Explicitly specifies Sonnet model.

\`\`\`markdown
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
\`\`\`

### DB Query Validator

Subagent that combines Bash tool with PreToolUse Hook to validate SQL queries before execution.

\`\`\`markdown
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
\`\`\`

## Disabling Subagents

To disable a specific subagent, add it to the \`deny\` list in \`settings.json\`.

\`\`\`json
{
  "permissions": {
    "deny": ["Task(Explore)", "Task(my-agent)"]
  }
}
\`\`\`

Or disable via CLI:

\`\`\`bash
claude --disallowedTools "Task(Explore)"
\`\`\`

## Troubleshooting

**Cannot find subagent:**
- Verify file is in correct location (\`.claude/agents/\` or \`~/.claude/agents/\`)
- Verify \`name\` field consists only of lowercase letters and hyphens
- Verify YAML frontmatter syntax is correct

**Subagent not automatically invoked:**
- Add "PROACTIVELY" or "MUST BE USED" expressions to \`description\`
- Check that user request keywords match description keywords

**Permission errors occur:**
- Verify \`tools\` field includes all necessary tools
- Verify \`permissionMode\` is appropriate for the task
- Verify necessary tools aren't in \`disallowedTools\`

**Context overflow occurs:**
- Reduce amount of data passed (recommend: 20K-50K tokens)
- Replace large datasets with file references
- Auto-compaction works, but passing appropriate context from the start is better

**Subagent tries to call another subagent:**
- This is impossible by design. Subagents cannot create other subagents
- For complex workflows, use chaining patterns in the main conversation

## Related Documents

- [Extensions](/claude-code/extensions) - Complete extensions overview including skills, MCP, hooks
- [Settings](/claude-code/settings) - settings.json configuration and permission management
- [Memory management](/claude-code/memory) - CLAUDE.md and context management
- [Best practices](/claude-code/best-practices) - Tips for effective Claude Code usage
- [Troubleshooting](/claude-code/troubleshooting) - Common problems and solutions

<Callout type="tip">
When creating subagents for the first time, start with a simple read-only agent. After understanding how it works, gradually add tools and permissions for safe subagent utilization.
</Callout>
`,

  '/docs/claude-code/extensions': `

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

Skills are the most flexible extension. A skill is a markdown file containing knowledge, a workflow, or instructions. It can be invoked with a slash command like \`/deploy\` or loaded automatically by Claude. Skills can run in the current conversation or in isolated context via a subagent.

## Match the Feature to Your Goal

Features range from always-available to one-click execution. The table shows what's available and when each is appropriate.

| Feature | Function | When to use | Example |
|------|----------|-------------|--------|
| **CLAUDE.md** | Persistent context loaded every conversation | Project rules, "always X" rules | "Use pnpm, not npm. Run tests before committing" |
| **Skill** | Instructions, knowledge, and workflows Claude can use | Reusable content, reference docs, repeatable tasks | \`/review\` runs a code review checklist; API doc skill endpoint patterns |
| **Subagent** | Isolated execution context returning summary | Context isolation, parallel work, specialist workers | Investigation tasks that read many files but return only key findings |
| **MCP** | External service connections | External data or actions | Database queries, Slack posting, browser control |
| **Hook** | Deterministic scripts run on events | Predictable automation, no LLM | Run ESLint after every file edit |

**Plugins** are a packaging layer. A plugin bundles skills, hooks, subagents, and MCP servers into a single installable unit. Plugin skills are namespaced (e.g., \`/my-plugin:review\`) so multiple plugins can coexist. Use plugins to distribute across multiple repositories or to others, or to distribute via a **marketplace**.

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

**Skills can be reference or task.** A reference skill provides knowledge that Claude uses throughout a session (e.g., an API style guide). A task skill tells Claude to do something specific (e.g., run a deployment workflow \`/deploy\`).

**Use a subagent** when you need context isolation or when your context window is full. Subagents can read dozens of files or run extensive searches, but the main conversation only receives a summary. Subagent work doesn't consume the main context. Custom subagents can have their own instructions and pre-loaded skills.

**You can combine them.** Subagents can pre-load specific skills (via the \`skills:\` field). Skills can run in isolated context using \`context: fork\`. See [Skills](/claude-code/skills) for details.

#### CLAUDE.md vs Skills

Both store instructions but differ in how they load and their purpose:

| Aspect | CLAUDE.md | Skills |
|------|-----------|--------|
| **Load** | Every session, automatically | On demand |
| **Can include files** | Yes, via \`@path\` imports | Yes, via \`@path\` imports |
| **Can trigger workflow** | No | Yes, via \`/<name>\` |
| **Best for** | "Always X" rules | Reference material, callable workflows |

**Put in CLAUDE.md**: Things Claude should always know—coding rules, build commands, project structure, "don't do" rules

**Put in Skills**: Reference material Claude needs sometimes (API docs, style guides) or workflows triggered with \`/<name>\` (deploy, review, release)

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
- **Skills and Subagents** are overridden by name: when the same name exists at multiple levels, one definition wins based on priority (managed > user > project for skills; managed > CLI flag > project > user > plugin for subagents). Plugin skills are namespaced to avoid conflicts (e.g., \`/my-plugin:review\`). See [Skill discovery](/claude-code/skills) and [Subagent scope](https://code.claude.com/docs/en/subagents#subagent-scope).
- **MCP servers** are overridden by name: local > project > user. See [MCP scope](https://code.claude.com/docs/en/mcp#mcp-scope).
- **Hooks** are merged: all registered hooks run regardless for matching events. See [Hooks](/advanced/hooks-guide).

### Feature Combinations

Each extension solves a different problem. CLAUDE.md handles always-on context, skills handle on-demand knowledge and workflows, MCP handles external connections, subagents handle isolation, and hooks handle automation. Real setups combine things that handle each of these concerns.

For example, you might use CLAUDE.md for project rules, a skill for deployment workflows, MCP for database connections, and a hook to run lint after every edit.

| Pattern | How it works | Example |
|------|-------------|--------|
| **Skill + MCP** | MCP provides connection; skill teaches how to use it well | MCP connects to database; skill documents schema and query patterns |
| **Skill + Subagent** | Skill launches subagents for parallel work | \`/review\` skill launches security, performance, and style subagents |
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

*By default, skill descriptions are loaded at session start so Claude can decide when to use them. For manually invoked skills, you can set \`disable-model-invocation: true\` to hide descriptions until needed. This reduces the context cost to zero for skills only you invoke.

For details on how each available feature loads, see [Extensions overview](/claude-code/extensions).

---

**Sources:**
- [Extend Claude Code](/claude-code/extensions)
`,

  '/docs/claude-code/chrome': `
import { Callout } from 'nextra/components'

# Chrome Browser Integration

Control Chrome browser directly from Claude Code CLI to perform web app testing, debugging, and automation without switching between terminal and browser.

<Callout type="tip">
One-line summary: Running Claude Code with \`claude --chrome\` command allows you to open Chrome browser tabs and perform tasks like reading page content, filling forms, and checking console errors directly from the terminal.
</Callout>

## What is Chrome Integration?

### Understanding the Concept

During web development, you repeatedly modify code, switch to the browser to check results, and return to the terminal to check logs. Chrome integration eliminates this repetitive process. Since Claude Code can control Chrome browser directly from the terminal, you can handle code modification and browser verification in a single flow.

To use an analogy, the traditional approach is like a chef preparing ingredients and going to another room each time to taste. Chrome integration is like placing a tasting tool next to the chef, allowing everything to be handled in one place.

### Architecture Overview

Let's examine the communication structure of Chrome integration with a diagram.

\`\`\`mermaid
flowchart TD
    A[Claude Code CLI] -->|Send command| B[Native Messaging API]
    B -->|Deliver message| C[Claude in Chrome extension]
    C -->|Control tab| D[Chrome browser tab]
    D -->|Return result| C
    C -->|Send response| B
    B -->|Receive result| A
\`\`\`

### Data Flow Details

Let's explain each step of the above diagram in detail.

1. **Claude Code CLI**: Claude Code running in the terminal generates browser operation commands. For example, it handles requests like "open localhost:3000 and test the login form."

2. **Native Messaging API**: This is Chrome's official communication protocol. It's a standard interface provided by Chrome for secure data exchange with external programs. It enables external programs to communicate with Chrome extensions.

3. **Claude in Chrome Extension**: An extension installed from the Chrome Web Store. It receives commands from the CLI and converts them into actual browser actions. It performs actions like opening new tabs, reading page content, clicking, and inputting text.

4. **Chrome Browser Tab**: The actual space where web pages are displayed. Under the extension's guidance, it loads pages, returns DOM state, and collects console logs.

This process is bidirectional. When Claude Code sends a command, the result returns via the same path in reverse order. All this happens in milliseconds, so users barely feel any delay.

## Key Features

Chrome integration provides 7 core features. Each feature represents tasks frequently needed in real development situations.

| Feature | Description | Specific Examples |
|---------|-------------|-------------------|
| **Real-time Debugging** | Read console errors and DOM state, modify code | Detect TypeError shown in console, find and fix cause code |
| **Design Verification** | Implement UI based on Figma mockups, verify in browser | Check if implemented button color, size, spacing match design |
| **Web App Testing** | Test form validation, visual regression, user flows | Verify error message displays when entering invalid email in signup form |
| **Authenticated Web App Access** | Access logged-in services like Google Docs, Gmail, Notion | Write text directly in Google Docs or read Notion page content |
| **Data Extraction** | Extract structured information from web pages | Extract product names, prices, ratings from product list page to CSV |
| **Task Automation** | Automate data entry, form filling, multi-site workflows | Enter customer information from CSV file into CRM system one by one |
| **Session Recording** | Record browser interactions as GIF | Create GIF for feature demo, attach to PR or documentation |

<Callout type="info">
**What is Authenticated Web App Access?** Normally, accessing services like Google Docs or Gmail programmatically requires complex processes like OAuth token issuance, API key setup, SDK installation, etc. Chrome integration requires none of these processes. It uses the state where the user is already logged in Chrome browser as-is. If you're logged into Gmail in your browser, Claude Code can also access that Gmail. This means you can interact with various web services without separate API connectors.
</Callout>

## Prerequisites

Here's what you need to use Chrome integration. All items must be properly configured for normal operation.

| Requirement | Minimum Version | Description |
|-------------|-----------------|-------------|
| Google Chrome browser | Latest stable version | Official Chrome required, not Chromium-based browsers |
| Claude in Chrome extension | v1.0.36 or higher | Install from Chrome Web Store |
| Claude Code CLI | v2.0.73 or higher | Check with \`claude --version\` in terminal |
| Claude paid plan | - | Requires Pro, Team, or Enterprise plan |

<Callout type="warning">
**Paid Plan Required**: Chrome integration is not available on free plans. You must be subscribed to Pro, Team, or Enterprise plan. If not yet subscribed, upgrade your plan at claude.ai.
</Callout>

### Detailed Description of Each Item

**Google Chrome Browser**: Chrome integration uses Chrome's Native Messaging API, so Google's official Chrome browser is required. It may not work on Chromium-based browsers like Brave, Edge, Arc, etc. If Chrome is not installed, download it from google.com/chrome.

**Claude in Chrome Extension**: Search for "Claude in Chrome" in the Chrome Web Store and install it. This extension acts as a bridge between the CLI and browser. After installation, check its activation status in the extension icon next to the Chrome address bar.

**Claude Code CLI**: A command-line tool for running Claude Code in the terminal. You can check the current version with the following command.

\`\`\`bash
claude --version
\`\`\`

If the version is lower than v2.0.73, an update is required.

**Claude Paid Plan**: Chrome integration features are activated only on paid plans. You can check your current plan in your account settings at claude.ai.

## Setup Method

Chrome integration setup completes in 3 steps. Follow each step in order.

\`\`\`mermaid
flowchart TD
    A[Step 1: Update Claude Code] --> B[Step 2: Run with --chrome flag]
    B --> C[Step 3: Verify connection with /chrome command]
    C --> D{Connection successful?}
    D -->|Yes| E[Setup complete - Ready to use]
    D -->|No| F[Refer to Troubleshooting section]
\`\`\`

### Step 1: Update Claude Code

First, update Claude Code CLI to the latest version. Chrome integration is supported in v2.0.73 and above.

\`\`\`bash
claude update
\`\`\`

Check the version after update.

\`\`\`bash
claude --version
\`\`\`

### Step 2: Run with Chrome Flag

Run Claude Code with the \`--chrome\` flag added. This flag activates Chrome browser tools.

\`\`\`bash
claude --chrome
\`\`\`

When you run this command, Claude Code attempts to connect to the Chrome extension. Chrome browser must be running, and the Claude in Chrome extension must be installed and activated.

### Step 3: Verify Connection

Enter the \`/chrome\` command within the Claude Code session to check connection status.

\`\`\`
/chrome
\`\`\`

If the connection is normal, a message indicating Chrome integration is activated will be displayed. You can now request browser-related tasks to Claude Code.

### Default Activation Settings

To always use Chrome integration without entering the \`--chrome\` flag each time, you can set it to default activation.

Run the \`/chrome\` command within the Claude Code session and select the "Enabled by default" option. From then on, Chrome tools will automatically load with just the \`claude\` command.

<Callout type="info">
**Context Usage Trade-off**: When Chrome integration is set to default activation, browser tools are always loaded, increasing context usage. Even in general coding sessions that don't require browser tasks, additional context is consumed. If browser tasks are frequently needed, default activation is convenient, but if not, we recommend using the \`--chrome\` flag only when needed. Site permissions are inherited from Chrome extension settings.
</Callout>

## Usage Examples

Here are 7 representative usage scenarios for Chrome integration. Each example includes a situation a junior developer might actually encounter, the command to input, and expected results.

### 1. Local Web App Testing

**Situation**: Developing a React app running on \`localhost:3000\`. Want to verify that login form validation works correctly.

**Input to Claude Code**:

\`\`\`
Open localhost:3000 and test the login form.
Test with empty email, incorrectly formatted email, and correct email,
and verify that error messages display correctly.
\`\`\`

**Process**:

1. Claude Code opens \`localhost:3000\` in Chrome as a new tab
2. Finds the login form and identifies the email field
3. Presses submit button in empty state to verify "Please enter email" error message
4. Enters "abc" to verify "Not a valid email format" error
5. Enters "user@example.com" to verify normal operation
6. Summarizes test results and reports to terminal

**Expected Result**: Test case pass/fail status and discovered issues are displayed organized in the terminal.

### 2. Console Log Debugging

**Situation**: Clicking a button in the web app produces no response. Opening browser developer tools shows there might be an error in the console, but it's difficult to grasp exactly what error.

**Input to Claude Code**:

\`\`\`
Open localhost:3000/dashboard and click the "Generate Report" button.
If there's an error in the console, read it, analyze the cause, and fix the code.
\`\`\`

**Process**:

1. Claude Code opens the page and starts console monitoring
2. Finds and clicks the "Generate Report" button
3. Detects \`TypeError: Cannot read property 'map' of undefined\` error in console
4. Tracks the file and line where the error occurred
5. Analyzes the cause. Example: Attempting to iterate data before API response arrives
6. Adds appropriate null check to code and fixes it

**Expected Result**: Error cause analysis along with immediate application of fixed code. After fix, clicks button again to verify the problem is resolved.

### 3. Automatic Form Entry

**Situation**: Have a CSV file with 100 customer information entries that need to be entered one by one into a CRM web app's customer registration form. Manual work would take several hours.

**Input to Claude Code**:

\`\`\`
Read the customers.csv file and register each customer
into the CRM system (localhost:8080/customers/new).
Fill in the name, email, phone number fields and press the save button.
\`\`\`

**Process**:

1. Claude Code reads the \`customers.csv\` file and parses customer data
2. Opens the CRM system's customer registration page
3. Enters the first customer's name, email, phone number in each field
4. Clicks save button and verifies success message
5. Moves to next customer and repeats the process
6. Reports progress to terminal

**Expected Result**: All customer data is registered in CRM, and success/failure counts are summarized and displayed.

### 4. Writing Content to Google Docs

**Situation**: Need to write a technical design document for the project in Google Docs. Already logged into Google account in Chrome.

**Input to Claude Code**:

\`\`\`
Create a new document in Google Docs and write the API design document
for the current project. Analyze and document endpoints in the src/api/ directory.
\`\`\`

**Process**:

1. Claude Code first analyzes the \`src/api/\` directory to understand API endpoints
2. Opens Google Docs and creates a new document
3. Writes title, overview, and description of each endpoint
4. Includes request/response format, parameter descriptions
5. When document writing is complete, reports URL to terminal

**Expected Result**: API design document is created in Google Docs, and document link is displayed in terminal. Utilizes browser's login session without separate API key setup or OAuth authentication.

### 5. Web Page Data Extraction

**Situation**: Need to collect product name, price, rating information from a competitor's product page to create analysis materials.

**Input to Claude Code**:

\`\`\`
Open the https://example-store.com/products page and
extract all product names, prices, ratings and save to products.csv file.
\`\`\`

**Process**:

1. Claude Code opens the page in a new tab
2. Analyzes page DOM structure to identify elements containing product information
3. Extracts name, price, rating for each product
4. If pagination exists, moves to next page and continues collection
5. Structures collected data in CSV format and saves to file

**Expected Result**: \`products.csv\` file is created, and number of extracted products with data preview is displayed in terminal.

### 6. Multi-Site Workflow

**Situation**: Need to check this week's meeting schedule in Google Calendar, collect LinkedIn profile information of meeting attendees, and create meeting preparation document.

**Input to Claude Code**:

\`\`\`
Check this week's meeting schedule in Google Calendar,
look up each meeting attendee's LinkedIn profile,
and create a meeting preparation summary document as meeting-prep.md.
\`\`\`

**Process**:

1. Opens Google Calendar page and checks this week's schedule
2. Collects attendee names and emails for each meeting
3. Searches LinkedIn for each attendee and collects title, company, key experience
4. Organizes collected information by meeting and creates Markdown document

**Expected Result**: \`meeting-prep.md\` file is created with attendee information and background organized for each meeting.

### 7. GIF Demo Recording

**Situation**: Need to create a feature demo GIF to attach to a PR. Want to show the newly implemented dark mode toggle feature.

**Input to Claude Code**:

\`\`\`
Open localhost:3000 and record a GIF demonstrating the dark mode toggle feature.
Start in light mode, click the toggle button, and show the transition to dark mode.
\`\`\`

**Process**:

1. Claude Code starts session recording
2. Opens page in light mode state
3. Finds dark mode toggle button and clicks it
4. Records theme transition process
5. Ends recording and saves as GIF file

**Expected Result**: GIF file showing dark mode transition process is created and can be directly attached to PR or documentation.

## Detailed Operation

Understanding Chrome integration's internal operation in more detail allows for effective utilization.

### Browser Interaction Flow

A diagram representing the entire process of Claude Code interacting with the browser.

\`\`\`mermaid
flowchart TD
    A[User requests browser task] --> B[Claude Code interprets command]
    B --> C[Send command to Chrome extension]
    C --> D[Open new tab]
    D --> E[Wait for page load complete]
    E --> F[Read and analyze DOM]
    F --> G{Task type}
    G -->|Read| H[Extract page content]
    G -->|Write| I[Click element or input text]
    G -->|Debug| J[Collect console logs]
    H --> K[Return result to CLI]
    I --> K
    J --> K
    K --> L[Claude Code analyzes result]
    L --> M{Additional work needed?}
    M -->|Yes| C
    M -->|No| N[Report result to user]
\`\`\`

### Core Operation Principles

**Use New Tabs**: Claude Code always opens new tabs for work. It doesn't take or disturb tabs the user already has open. This is a design to protect the user's work environment.

**Share Login State**: Claude Code uses cookies and sessions stored in the browser as-is. If the user is logged into Google, GitHub, Notion, etc. in Chrome, Claude Code can also access those services. No separate authentication process is needed.

**Visible Browser Required**: Chrome integration doesn't support headless mode. In other words, the Chrome browser window must be visible on screen. This is so users can verify Claude Code's browser actions in real-time. Operating invisibly in the background is not supported.

### Login and CAPTCHA Handling

While navigating websites, login screens or CAPTCHAs may appear. Claude Code automatically detects these situations and asks the user to handle them.

\`\`\`mermaid
flowchart TD
    A[Navigating page] --> B{Login or CAPTCHA detected?}
    B -->|No| C[Continue normal operation]
    B -->|Yes| D[Claude Code pauses]
    D --> E[Display message requesting user handling]
    E --> F[User handles directly in browser]
    F --> G[User notifies completion]
    G --> H[Claude Code resumes operation]
    H --> C
\`\`\`

This approach considers both security and user experience. Since Claude Code doesn't enter passwords or solve CAPTCHAs, sensitive credentials aren't exposed to AI. After the user handles it directly, Claude Code continues the operation.

## Best Practices

Best practices for effective Chrome integration usage.

| Item | Recommendation | Avoid |
|------|----------------|--------|
| **Tab Management** | Use a new tab for each session | Don't reuse tabs from previous sessions |
| **Console Output** | Filter console output with specific patterns | Don't indiscriminately collect all console output |
| **Page Loading** | Start work after page is fully loaded | Don't work without waiting for async loading in SPAs |
| **Error Handling** | Check specific error messages when errors occur | Don't ignore errors and continue |
| **Session Separation** | Separate independent tasks into distinct sessions | Don't mix unrelated tasks in one session |
| **Browser State** | Keep Chrome window visible | Don't minimize or hide browser |

<Callout type="warning">
**Modal Dialog Warning**: When modal dialogs like JavaScript's \`alert()\`, \`confirm()\`, \`prompt()\` appear, all browser events are blocked. In this state, Claude Code also can't communicate with the browser. When modal dialogs appear, the user must close them directly in the browser. If your app under development uses \`alert()\`, replacing it with \`console.log()\` is better for Chrome integration compatibility.
</Callout>

## Troubleshooting

Common problems that may occur while using Chrome integration and their solutions.

| Problem | Cause | Solution |
|---------|-------|----------|
| Extension not found | Claude in Chrome extension not installed or disabled | Install and activate extension from Chrome Web Store |
| Version compatibility error | CLI or extension version too low | Update CLI with \`claude update\` and update extension to latest version |
| Browser unresponsive | Modal dialog blocking browser | Close open modal dialogs in browser |
| Connection lost | Chrome terminated or extension deactivated | Restart Chrome and check extension activation status |
| Page access denied | Extension lacks site access permission | Allow site access permission in Chrome extension settings |
| Tab not opening | Native Messaging Host not installed | See "First-time Setup Notes" below |

### Extension Detection Failure

The most common problem. Check in the following order.

1. Verify Chrome browser is running
2. Enter \`chrome://extensions\` in address bar and verify Claude in Chrome extension is installed
3. Verify extension is activated (toggle on)
4. Verify extension version is v1.0.36 or higher
5. Verify Claude Code CLI version is v2.0.73 or higher (\`claude --version\`)
6. If all above are normal, restart both Chrome and Claude Code

### Browser Unresponsive

If Claude Code sent a command to the browser but there's no response, check the following.

1. Check for and close any modal dialogs (\`alert\`, \`confirm\`, \`prompt\`)
2. If the problem occurred in an existing tab, create a new tab for the task
3. Deactivate and reactivate the Chrome extension
4. If above doesn't resolve, completely terminate and restart Chrome

### First-time Setup Notes

When setting up Chrome integration for the first time, Native Messaging Host installation is required. Native Messaging Host is a system-level component that enables Chrome extensions and external programs (Claude Code CLI) to communicate.

Generally, installing the Claude in Chrome extension automatically configures it. If automatic configuration doesn't work, try the following.

1. Completely terminate Chrome (all windows and processes)
2. Restart Chrome
3. When Claude in Chrome extension requests Native Messaging Host installation, allow it
4. Run Claude Code again with \`claude --chrome\`

On macOS, system security settings may block Native Messaging Host installation. In this case, you may need to allow it in Privacy & Security in system settings.

## Related Documents

Documents useful to reference along with Chrome integration.

- [CLI Reference](/claude-code/cli-reference) - Complete list of Claude Code command-line options
- [Common Workflows](/claude-code/common-workflows) - Step-by-step guides by development task
- [Settings](/claude-code/settings) - Claude Code configuration and environment setup
- [Troubleshooting](/claude-code/troubleshooting) - Comprehensive guide to common problems
- [Best Practices](/claude-code/best-practices) - Effective Claude Code usage
- [Extensions](/claude-code/extensions) - Extension systems including Skills, MCP, Hooks
`,

  '/docs/advanced/agent-guide': `
import { Callout } from 'nextra/components'

# Agent Guide

Detailed guide to MoAI-ADK's agent system.

<Callout type="tip">
**One-line summary**: Agents are **expert teams** for each domain. MoAI acts as team leader, delegating tasks to appropriate experts.
</Callout>

## What are Agents?

Agents are **AI task executors** specialized in specific domains.

Based on Claude Code's **Sub-agent** system, each agent has an independent context window, custom system prompt, specific tool access, and independent permissions.

Using a company organization analogy: MoAI is the CEO, Manager agents are department heads, Expert agents are experts in each field, and Builder agents are HR teams recruiting new team members.

## MoAI Orchestrator

MoAI is the **top-level coordinator** of MoAI-ADK. It analyzes user requests and delegates tasks to appropriate agents.

### MoAI's Core Rules

| Rule | Description |
|------|-------------|
| Delegation Only | Complex tasks are delegated to expert agents, not performed directly |
| User Interface | Only MoAI handles user interaction (subagents cannot) |
| Parallel Execution | Independent tasks are delegated to multiple agents simultaneously |
| Result Integration | Consolidates agent execution results and reports to user |

### MoAI's Request Processing Flow

\`\`\`mermaid
flowchart TD
    USER[User Request] --> ANALYZE[1. Analyze Request]
    ANALYZE --> ROUTE[2. Routing Decision]

    ROUTE -->|Read-only| EXPLORE["Explore Agent"]
    ROUTE -->|Domain Expertise| EXPERT["Expert Agent"]
    ROUTE -->|Workflow Coordination| MANAGER["Manager Agent"]
    ROUTE -->|Extension Creation| BUILDER["Builder Agent"]

    EXPLORE --> RESULT[3. Integrate Results]
    EXPERT --> RESULT
    MANAGER --> RESULT
    BUILDER --> RESULT

    RESULT --> REPORT["4. Report to User"]
\`\`\`

## Agent 3-Tier Structure

MoAI-ADK agents are organized into **3 tiers**:

\`\`\`mermaid
flowchart TD
    MOAI["MoAI<br/>Orchestrator"]

    subgraph TIER1["Tier 1: Manager Agents (7)"]
        MS["manager-spec<br/>SPEC Creation"]
        MD["manager-ddd<br/>DDD Implementation"]
        MDOC["manager-docs<br/>Document Generation"]
        MQ["manager-quality<br/>Quality Verification"]
        MST["manager-strategy<br/>Strategy Design"]
        MP["manager-project<br/>Project Management"]
        MG["manager-git<br/>Git Management"]
    end

    subgraph TIER2["Tier 2: Expert Agents (9)"]
        EB["expert-backend<br/>Backend"]
        EF["expert-frontend<br/>Frontend"]
        ES["expert-security<br/>Security"]
        ED["expert-devops<br/>DevOps"]
        EP["expert-performance<br/>Performance"]
        EDB["expert-debug<br/>Debugging"]
        ET["expert-testing<br/>Testing"]
        ER["expert-refactoring<br/>Refactoring"]
        ECE["expert-chrome-extension<br/>Chrome Extension"]
    end

    subgraph TIER3["Tier 3: Builder Agents (4)"]
        BA["builder-agent<br/>Agent Creation"]
        BS["builder-skill<br/>Skill Creation"]
        BC["builder-command<br/>Command Creation"]
        BP["builder-plugin<br/>Plugin Creation"]
    end

    MOAI --> TIER1
    MOAI --> TIER2
    MOAI --> TIER3
\`\`\`

## Manager Agent Details

Manager agents **coordinate and manage workflows**.

| Agent | Role | Used Skills | Main Tools |
|--------|------|-------------|------------|
| \`manager-spec\` | SPEC document creation, EARS format requirements | \`moai-workflow-spec\` | Read, Write, Grep |
| \`manager-ddd\` | ANALYZE-PRESERVE-IMPROVE cycle execution | \`moai-workflow-ddd\`, \`moai-foundation-core\` | Read, Write, Edit, Bash |
| \`manager-docs\` | Document generation, Nextra integration | \`moai-library-nextra\`, \`moai-docs-generation\` | Read, Write, Edit |
| \`manager-quality\` | TRUST 5 verification, code review | \`moai-foundation-quality\` | Read, Grep, Bash |
| \`manager-strategy\` | System design, architecture decisions | \`moai-foundation-core\`, \`moai-foundation-philosopher\` | Read, Grep, Glob |
| \`manager-project\` | Project configuration, initialization | \`moai-workflow-project\` | Read, Write, Bash |
| \`manager-git\` | Git branching, merge strategy | \`moai-foundation-core\` | Bash (git) |

### Manager Agents and Workflow Commands

Manager agents connect directly to major MoAI workflow commands:

\`\`\`bash
# Plan phase: manager-spec creates SPEC document
> /moai plan "Implement user authentication system"

# Run phase: manager-ddd executes DDD cycle
> /moai run SPEC-AUTH-001

# Sync phase: manager-docs synchronizes documentation
> /moai sync SPEC-AUTH-001
\`\`\`

## Expert Agent Details

Expert agents perform **actual implementation work** in specific domains.

| Agent | Role | Used Skills | Main Tools |
|--------|------|-------------|------------|
| \`expert-backend\` | API development, server logic, DB integration | \`moai-domain-backend\`, language-specific skills | Read, Write, Edit, Bash |
| \`expert-frontend\` | React components, UI implementation | \`moai-domain-frontend\`, \`moai-lang-typescript\` | Read, Write, Edit, Bash |
| \`expert-security\` | Security analysis, OWASP compliance | \`moai-foundation-core\` (TRUST 5) | Read, Grep, Bash |
| \`expert-devops\` | CI/CD, infrastructure, deployment automation | Platform-specific skills | Read, Write, Bash |
| \`expert-performance\` | Performance optimization, profiling | Domain-specific skills | Read, Grep, Bash |
| \`expert-debug\` | Debugging, error analysis, problem resolution | Language-specific skills | Read, Grep, Bash |
| \`expert-testing\` | Test creation, coverage improvement | \`moai-workflow-testing\` | Read, Write, Bash |
| \`expert-refactoring\` | Code refactoring, architecture improvement | \`moai-workflow-ddd\` | Read, Write, Edit |

### Expert Agent Usage Examples

\`\`\`bash
# Backend API development request
> Create a user CRUD API with FastAPI
# → MoAI delegates to expert-backend
# → Activates moai-lang-python + moai-domain-backend skills

# Security analysis request
> Analyze security vulnerabilities in this code
# → MoAI delegates to expert-security
# → Analyzes based on OWASP Top 10 criteria

# Performance optimization request
> This query is slow, optimize it
# → MoAI delegates to expert-performance
# → Profiling and optimization recommendations
\`\`\`

## Builder Agent Details

Builder agents create **new components that extend MoAI-ADK**.

| Agent | Role | Output |
|--------|------|--------|
| \`builder-agent\` | Create new agent definitions | \`.claude/agents/moai/*.md\` |
| \`builder-skill\` | Create new skills | \`.claude/skills/my-skills/*/skill.md\` |
| \`builder-command\` | Create new slash commands | \`.claude/commands/moai/*.md\` |
| \`builder-plugin\` | Create new plugins | \`.claude-plugin/plugin.json\` |

<Callout type="info">
For details on builder agents, refer to [Builder Agent Guide](/advanced/builder-agents).
</Callout>

## Agent Selection Decision Tree

The process by which MoAI analyzes user requests and selects appropriate agents:

\`\`\`mermaid
flowchart TD
    START[User Request] --> Q1{Read-only<br/>code exploration?}

    Q1 -->|Yes| EXPLORE["Explore Subagent<br/>Understand code structure"]
    Q1 -->|No| Q2{External docs/API<br/>research needed?}

    Q2 -->|Yes| WEB["WebSearch / WebFetch<br/>Context7 MCP"]
    Q2 -->|No| Q3{Domain expertise<br/>needed?}

    Q3 -->|Yes| EXPERT["expert-* Agent<br/>Domain-specific implementation"]
    Q3 -->|No| Q4{Workflow<br/>coordination?}

    Q4 -->|Yes| MANAGER["manager-* Agent<br/>Process management"]
    Q4 -->|No| Q5{Complex<br/>multi-step?}

    Q5 -->|Yes| STRATEGY["manager-strategy<br/>Design strategy then distribute"]
    Q5 -->|No| DIRECT["MoAI direct handling<br/>Simple tasks"]
\`\`\`

### Agent Selection Criteria

| Task Type | Agent to Select | Example |
|-----------|-----------------|---------|
| Code reading/analysis | Explore | "Analyze this project's structure" |
| API development | expert-backend | "Create REST API endpoints" |
| UI implementation | expert-frontend | "Create login page" |
| Bug fixing | expert-debug | "Find cause of this error" |
| Test writing | expert-testing | "Add tests for this function" |
| Security review | expert-security | "Check for security vulnerabilities" |
| SPEC creation | manager-spec | \`/moai plan "feature description"\` |
| DDD implementation | manager-ddd | \`/moai run SPEC-XXX\` |
| Document generation | manager-docs | \`/moai sync SPEC-XXX\` |
| Code review | manager-quality | "Review this PR" |
| Extension creation | builder-* | "Create new skill" |

## Agent Definition Files

Agents are defined as markdown files in the \`.claude/agents/moai/\` directory.

### File Structure

\`\`\`
.claude/agents/moai/
├── expert-backend.md
├── expert-frontend.md
├── expert-security.md
├── expert-devops.md
├── expert-performance.md
├── expert-debug.md
├── expert-testing.md
├── expert-refactoring.md
├── manager-spec.md
├── manager-ddd.md
├── manager-docs.md
├── manager-quality.md
├── manager-strategy.md
├── manager-project.md
├── manager-git.md
├── builder-agent.md
├── builder-skill.md
├── builder-command.md
└── builder-plugin.md
\`\`\`

### Agent Definition Format

\`\`\`markdown
---
name: expert-backend
description: >
  Backend API development expert. Handles API design, server logic, database integration.
  PROACTIVELY use for automatic delegation during backend implementation tasks.
tools: Read, Write, Edit, Grep, Glob, Bash, TodoWrite
model: sonnet
---

You are a backend development expert.

## Role
- REST/GraphQL API design and implementation
- Database schema design
- Authentication/authorization system implementation
- Server-side business logic

## Used Skills
- moai-domain-backend
- moai-lang-python (for Python projects)
- moai-lang-typescript (for TypeScript projects)

## Quality Standards
- TRUST 5 framework compliance
- 85%+ test coverage
- OWASP Top 10 security standards
\`\`\`

<Callout type="warning">
**Caution**: Subagents **cannot directly ask users questions**. All user interaction happens only through MoAI. Collect necessary information before delegating to agents.
</Callout>

## Agent Collaboration Patterns

### Sequential Execution (With Dependencies)

\`\`\`bash
# 1. manager-spec creates SPEC
# 2. manager-ddd implements based on SPEC
# 3. manager-docs generates documentation
> /moai plan "authentication system"
> /moai run SPEC-AUTH-001
> /moai sync SPEC-AUTH-001
\`\`\`

### Parallel Execution (Independent Tasks)

\`\`\`bash
# MoAI delegates independent tasks simultaneously
# - expert-backend: API implementation
# - expert-frontend: UI implementation
# - expert-testing: Test writing
> Create both backend API and frontend UI simultaneously
\`\`\`

### Agent Chain

For complex tasks, multiple agents work sequentially, handing off to each other.

\`\`\`mermaid
flowchart TD
    A["1. manager-spec<br/>Define requirements"] --> B["2. manager-strategy<br/>System design"]
    B --> C["3. expert-backend<br/>API implementation"]
    B --> D["4. expert-frontend<br/>UI implementation"]
    C --> E["5. manager-quality<br/>Quality verification"]
    D --> E
    E --> F["6. manager-docs<br/>Document generation"]
\`\`\`

## Sub-agent System

Claude Code's official Sub-agent system forms the foundation of MoAI-ADK's agent architecture.

### What are Sub-agents?

Sub-agents are **AI assistants specialized for specific task types**.

| Feature | Description |
|---------|-------------|
| **Independent Context** | Each sub-agent runs in its own context window |
| **Custom Prompts** | Customized system prompts define behavior |
| **Specific Tool Access** | Only necessary tools provided |
| **Independent Permissions** | Individual permission settings |

### Sub-agent vs Agent Teams

| Sub-agent Mode | Agent Teams Mode |
|-----------------|------------------|
| Single sub-agent works sequentially | Multiple team members collaborate in parallel |
| Best for simple tasks | Best for complex multi-phase tasks |
| Faster execution | Requires careful coordination |

## Agent Teams

Agent Teams mode is an advanced workflow where multiple experts **collaborate in parallel**.

<Callout type="info">
**Experimental Feature**: Agent Teams require Claude Code v2.1.32+ with \`CLAUDE_CODE_EXPERIMENTAL_AGENT_TEAMS=1\` environment variable and \`workflow.team.enabled: true\` setting.
</Callout>

### Team Mode Settings

| Setting | Default | Description |
|---------|---------|-------------|
| \`workflow.team.enabled\` | \`false\` | Enable Agent Teams mode |
| \`workflow.team.max_teammates\` | \`10\` | Maximum number of teammates per team |
| \`workflow.team.auto_selection\` | \`true\` | Auto-select mode based on complexity |

### Mode Selection

| Flag | Behavior |
|------|----------|
| **--team** | Force team mode |
| **--solo** | Force sub-agent mode |
| **No flag** | Auto-select based on complexity thresholds |

### /moai --team Workflow

MoAI's \`--team\` flag activates Agent Teams for SPEC workflow.

\`\`\`bash
# Plan phase: Team mode for research and analysis
> /moai plan --team "user authentication system"
# researcher, analyst, architect work in parallel

# Run phase: Team mode for implementation
> /moai run --team SPEC-AUTH-001
# backend-dev, frontend-dev, tester work in parallel

# Sync phase: Documentation (always sub-agent)
> /moai sync SPEC-AUTH-001
# manager-docs generates documentation
\`\`\`

### Team Composition

| Role | Plan Phase | Run Phase | Permissions |
|------|------------|-----------|-------------|
| **Team Lead** | MoAI | MoAI | Coordinates all work |
| **Researcher** | researcher (haiku) | - | Read-only code analysis |
| **Analyst** | analyst (inherit) | - | Requirements analysis |
| **Architect** | architect (inherit) | - | Technical design |
| **Backend Dev** | - | backend-dev (acceptEdits) | Server-side files |
| **Frontend Dev** | - | frontend-dev (acceptEdits) | Client-side files |
| **Tester** | - | tester (acceptEdits) | Test files |
| **Designer** | - | designer (acceptEdits) | UI/UX design |
| **Quality** | - | quality (plan) | TRUST 5 validation |

### Team File Ownership

Agent Teams clearly separate file ownership to prevent conflicts.

| File Type | Ownership |
|----------|-----------|
| \`.md\` docs | All team members |
| \`src/\` | backend-dev |
| \`components/\` | frontend-dev |
| \`tests/\` | tester |
| \`*.design.pen\` | designer |
| Shared config | All team members |

## Related Documents

- [Skill Guide](/advanced/skill-guide) - Skill system used by agents
- [Builder Agent Guide](/advanced/builder-agents) - Custom agent creation
- [Hooks Guide](/advanced/hooks-guide) - Automation before/after agent execution
- [SPEC-based Development](/core-concepts/spec-based-dev) - SPEC workflow details

<Callout type="tip">
**Tip**: You don't need to specify agents directly. Just make natural language requests to MoAI and it will automatically select the optimal agent. Say "Create API" and \`expert-backend\` is automatically called, "Review this code" and \`manager-quality\` is automatically called.
</Callout>
`,

  '/docs/advanced/skill-guide': `
import { Callout } from "nextra/components";

# Skill Guide

Detailed guide to MoAI-ADK's skill system.

<Callout type="tip">

**What is a Skill?**

Remember the helicopter scene from the 1999 movie **The Matrix**? Neo asks Trinity
if she knows how to fly a helicopter, and she calls headquarters to tell them the
helicopter model and asks them to send the operating manual.

<p align="center">
  <iframe
    width="720"
    height="360"
    src="https://www.youtube.com/embed/9Luu4itC-Zs"
    title="The Matrix Helicopter Scene"
    frameBorder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
    allowFullScreen
  ></iframe>
</p>

**Claude Code's skills** **(are that **operating manual**. They load only the
necessary knowledge at the moment it's needed, allowing the AI to immediately act
like an expert.

</Callout>

## What is a Skill?

A skill is a **knowledge module** that provides Claude Code with specialized
knowledge in a specific domain.

To use a school analogy: Claude Code is the student and skills are textbooks.
Just as you open a math textbook for math class and a science textbook for
science class, Claude Code loads the Python skill when writing Python code and
the Frontend skill when creating React UIs.

\`\`\`mermaid
flowchart TD
    USER[User Request] --> DETECT[Keyword Detection]
    DETECT --> TRIGGER{Trigger Matching}
    TRIGGER -->|Python Related| PY["moai-lang-python<br>Python Expertise"]
    TRIGGER -->|React Related| FE["moai-domain-frontend<br>Frontend Expertise"]
    TRIGGER -->|Security Related| SEC["moai-foundation-core<br>TRUST 5 Security Principles"]
    TRIGGER -->|DB Related| DB["moai-domain-database<br>Database Expertise"]

    PY --> AGENT[Inject Knowledge into Agent]
    FE --> AGENT
    SEC --> AGENT
    DB --> AGENT
\`\`\`

**Without skills**: Claude Code responds with only general knowledge. **With
skills**: Applies MoAI-ADK's rules, patterns, and best practices to respond.

## Skill Categories

MoAI-ADK has a total of **52 skills** classified into 9 categories.

### Foundation (Core Philosophy) - 5 skills

| Skill Name                    | Description                                           |
| ----------------------------- | ----------------------------------------------------- |
| \`moai-foundation-core\`        | SPEC-First DDD, TRUST 5 framework, execution rules    |
| \`moai-foundation-claude\`      | Claude Code extension patterns (Skills, Agents, etc.) |
| \`moai-foundation-philosopher\` | Strategic thinking framework, decision analysis       |
| \`moai-foundation-quality\`     | Automatic code quality validation, TRUST 5 validation  |
| \`moai-foundation-context\`     | Token budget management, session state maintenance    |

### Workflow (Automation Workflows) - 11 skills

| Skill Name                | Description                                     |
| ------------------------- | ------------------------------------------------ |
| \`moai-workflow-spec\`      | SPEC document creation, EARS format, analysis   |
| \`moai-workflow-project\`   | Project initialization, docs creation, language |
| \`moai-workflow-ddd\`       | ANALYZE-PRESERVE-IMPROVE cycle                  |
| \`moai-workflow-tdd\`       | RED-GREEN-REFACTOR test-driven development      |
| \`moai-workflow-testing\`   | Test creation, debugging, code review           |
| \`moai-workflow-worktree\`  | Git worktree based parallel development         |
| \`moai-workflow-thinking\`  | Sequential Thinking, UltraThink mode            |
| \`moai-workflow-loop\`      | Ralph Engine autonomous loop, LSP integration   |
| \`moai-workflow-jit-docs\`  | Just-in-time document loading, smart search     |
| \`moai-workflow-templates\` | Code boilerplates, project templates            |
| \`moai-docs-generation\`     | Technical docs, API docs, user guides           |

### Domain (Domain Expertise) - 4 skills

| Skill Name            | Description                                             |
| --------------------- | ------------------------------------------------------- |
| \`moai-domain-backend\` | API design, microservices, database integration         |
| \`moai-domain-frontend\`| React 19, Next.js 16, Vue 3.5, component architecture   |
| \`moai-domain-database\`| PostgreSQL, MongoDB, Redis, advanced data patterns      |
| \`moai-domain-uiux\`     | Design systems, accessibility, theme integration        |

### Language (Programming Languages) - 16 skills

| Skill Name              | Target Language                           |
| ----------------------- | ----------------------------------------- |
| \`moai-lang-python\`      | Python 3.13+, FastAPI, Django             |
| \`moai-lang-typescript\`  | TypeScript 5.9+, React 19, Next.js 16     |
| \`moai-lang-javascript\`  | JavaScript ES2024+, Node.js 22, Bun, Deno |
| \`moai-lang-go\`          | Go 1.23+, Fiber, Gin, GORM (consolidated) |
| \`moai-lang-rust\`        | Rust 1.92+, Axum, Tokio (consolidated)    |
| \`moai-lang-flutter\`     | Flutter 3.24+, Dart 3.5+, Riverpod (consolidated) |
| \`moai-lang-java\`        | Java 21 LTS, Spring Boot 3.3              |
| \`moai-lang-cpp\`         | C++23/C++20, CMake, RAII                  |
| \`moai-lang-ruby\`        | Ruby 3.3+, Rails 7.2                      |
| \`moai-lang-php\`         | PHP 8.3+, Laravel 11, Symfony 7           |
| \`moai-lang-kotlin\`      | Kotlin 2.0+, Ktor, Compose Multiplatform  |
| \`moai-lang-csharp\`      | C# 12, .NET 8, ASP.NET Core               |
| \`moai-lang-scala\`       | Scala 3.4+, Akka, ZIO                     |
| \`moai-lang-elixir\`      | Elixir 1.17+, Phoenix 1.7, LiveView       |
| \`moai-lang-swift\`       | Swift 6+, SwiftUI, Combine                |
| \`moai-lang-r\`           | R 4.4+, tidyverse, ggplot2, Shiny         |

### Platform (Cloud/BaaS) - 4 skills

| Skill Name                     | Target Platform                                  |
| ----------------------------- | ------------------------------------------------ |
| \`moai-platform-auth\`          | Auth0, Clerk, Firebase-auth integrated auth      |
| \`moai-platform-database-cloud\`| Neon, Supabase, Firestore integrated database    |
| \`moai-platform-deployment\`    | Vercel, Railway, Convex integrated deployment    |
| \`moai-platform-chrome-extension\`| Chrome Extension Manifest V3 development      |

### Library (Special Libraries) - 4 skills

| Skill Name            | Description                            |
| --------------------- | -------------------------------------- |
| \`moai-library-shadcn\` | shadcn/ui component implementation      |
| \`moai-library-mermaid\`| Mermaid 11.12 diagram generation        |
| \`moai-library-nextra\` | Nextra documentation site framework     |
| \`moai-formats-data\`   | TOON encoding, JSON/YAML optimization   |

### Tool (Development Tools) - 2 skills

| Skill Name            | Description                                  |
| --------------------- | -------------------------------------------- |
| \`moai-tool-ast-grep\`  | AST-based structural code search, security   |
| \`moai-tool-svg\`       | SVG generation, optimization, icon system    |

### Framework (App Frameworks) - 1 skill

| Skill Name                 | Description                          |
| ------------------------- | ------------------------------------- |
| \`moai-framework-electron\` | Electron 33+ desktop app development |

### Design Tools - 1 skill

| Skill Name                 | Description                          |
| ------------------------- | ------------------------------------- |
| \`moai-design-tools\`       | Figma, Pencil integrated design tools |

## Progressive Disclosure System

MoAI-ADK's skills use a **3-level progressive disclosure** system. Loading all
skills at once would waste tokens, so only the necessary amount is loaded
incrementally.

\`\`\`mermaid
flowchart TD
    subgraph L1["Level 1: Metadata (~100 tokens)"]
        M1["Name, description, trigger keywords"]
        M2["Always loaded"]
    end

    subgraph L2["Level 2: Body (~5,000 tokens)"]
        B1["Full skill documentation"]
        B2["Code examples, patterns"]
    end

    subgraph L3["Level 3: Bundled (unlimited)"]
        R1["modules/ directory"]
        R2["reference.md, examples.md"]
    end

    L1 -->|"On trigger match"| L2
    L2 -->|"When deep info needed"| L3

\`\`\`

### Role of Each Level

| Level  | Tokens | Load Timing | Content                                  |
| ------ | ------ | ----------- | ---------------------------------------- |
| Level 1 | ~100   | Always      | Skill name, description, trigger keywords |
| Level 2 | ~5,000 | On trigger  | Full documentation, code examples, patterns |
| Level 3 | Unlimited| On demand | modules/, reference.md, examples.md       |

### Token Savings

- **Old method**: Load all 52 skills = ~260,000 tokens (impossible)
- **Progressive disclosure**: Load only metadata = ~5,200 tokens (97% savings)
- **On-demand load**: Only 2-3 skills needed for task = ~15,000 additional tokens

## Skill Trigger Mechanism

Skills are automatically loaded via **4 trigger conditions**.

\`\`\`mermaid
flowchart TD
    REQ[User Request Analysis] --> KW{Keyword Detection}
    REQ --> AG{Agent Invocation}
    REQ --> PH{Workflow Phase}
    REQ --> LN{Language Detection}

    KW -->|"api, database"| SKILL1[moai-domain-backend]
    AG -->|"expert-backend"| SKILL1
    PH -->|"run phase"| SKILL2[moai-workflow-ddd]
    LN -->|"Python file"| SKILL3[moai-lang-python]

    SKILL1 --> LOAD[Skill Load Complete]
    SKILL2 --> LOAD
    SKILL3 --> LOAD
\`\`\`

### Trigger Configuration Example

\`\`\`yaml
# Define triggers in skill frontmatter
triggers:
  keywords: ["api", "database", "authentication"] # Keyword matching
  agents: ["manager-spec", "expert-backend"] # On agent invocation
  phases: ["plan", "run"] # Workflow phases
  languages: ["python", "typescript"] # Programming languages
\`\`\`

**Trigger Priority:**

1. **Keywords**: Load immediately when keyword detected in user message
2. **Agents**: Auto-load when specific agent is invoked
3. **Phases**: Load according to Plan/Run/Sync phase
4. **Languages**: Load based on programming language of files being worked on

## Skill Usage

### Explicit Invocation

You can directly invoke skills in Claude Code conversations.

\`\`\`bash
# Invoke skills in Claude Code
> Skill("moai-lang-python")
> Skill("moai-domain-backend")
> Skill("moai-library-mermaid")
\`\`\`

### Auto Load

In most cases, skills are **automatically loaded** via the trigger mechanism.
Users don't need to invoke them directly; the conversation context is analyzed
to activate appropriate skills.

## Skill Directory Structure

Skill files are located in the \`.claude/skills/\` directory.

\`\`\`
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
\`\`\`

<Callout type="warning">
  **Warning**: Skills with \`moai-*\` prefix are overwritten on MoAI-ADK updates.
  Personal skills must be created in \`.claude/skills/my-skills/\` directory.
</Callout>

### Skill File Structure

Each skill's \`skill.md\` follows this structure.

\`\`\`markdown
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
\`\`\`

## Real-World Examples

### Auto Skill Load in Python Project

Scenario where user is working on a Python FastAPI project.

\`\`\`bash
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
\`\`\`

### Skill Collaboration

Process where multiple skills collaborate on a single task.

\`\`\`mermaid
flowchart TD
    REQ["User: Create full-stack app<br>with Supabase + Next.js"] --> ANALYZE[Request Analysis]

    ANALYZE --> S1["moai-lang-typescript<br>TypeScript patterns"]
    ANALYZE --> S2["moai-domain-frontend<br>React/Next.js patterns"]
    ANALYZE --> S3["moai-platform-supabase<br>Supabase integration patterns"]
    ANALYZE --> S4["moai-foundation-core<br>TRUST 5 quality"]

    S1 --> IMPL[Integrated Implementation]
    S2 --> IMPL
    S3 --> IMPL
    S4 --> IMPL

    IMPL --> RESULT["Type-safe<br>full-stack app"]
\`\`\`

## Related Documentation

- [Agent Guide](/advanced/agent-guide) - Agent system that uses skills
- [Builder Agents Guide](/advanced/builder-agents) - Custom skill creation
- [CLAUDE.md Guide](/advanced/claude-md-guide) - Skill configuration and rules

<Callout type="tip">
  **Tip**: The key to using skills effectively is **using appropriate keywords**.
  Requesting "Create a REST API with Python" will automatically activate the
  \`moai-lang-python\` and \`moai-domain-backend\` skills to generate optimal code.
</Callout>
`,

  '/docs/advanced/builder-agents': `
import { Callout } from "nextra/components";

# Builder Agents Guide

Detailed guide to the 4 builder agents that extend MoAI-ADK.

<Callout type="tip">
  **One-line summary**: Builder agents are the **extension toolkit factory** of MoAI-ADK. You can customize the system by creating skills, agents, commands, and plugins.
</Callout>

## What are Builder Agents?

In addition to the 52 built-in skills and 20 agents, MoAI-ADK provides 4 builder agents that users can use to extend the system.

\`\`\`mermaid
flowchart TD
    BUILDER["Builder Agents"]

    BUILDER --> BS["builder-skill<br>Create Skills"]
    BUILDER --> BA["builder-agent<br>Create Agents"]
    BUILDER --> BC["builder-command<br>Create Commands"]
    BUILDER --> BP["builder-plugin<br>Create Plugins"]

    BS --> S_OUT[".claude/skills/my-skills/"]
    BA --> A_OUT[".claude/agents/"]
    BC --> C_OUT[".claude/commands/"]
    BP --> P_OUT[".claude-plugin/"]

\`\`\`

### 4 Types of Extensions

| Type   | Builder            | Purpose                              | Invocation Method            |
| ------ | ------------------ | ------------------------------------ | ----------------------------- |
| Skill  | \`builder-skill\`    | Provide new expertise to AI          | Auto trigger / \`Skill()\`      |
| Agent  | \`builder-agent\`    | Define new expert roles              | Alfred delegates              |
| Command| \`builder-command\`  | Create user shortcut commands        | \`/command\`                    |
| Plugin | \`builder-plugin\`   | Bundle deploy: skill+agent+command   | \`plugin install\`              |

## Creating Skills (builder-skill)

### What is a Skill?

A skill is a document that provides **specific domain expertise** to Claude Code. When a skill is loaded, Claude Code learns the best practices, patterns, and rules of that domain.

### YAML Frontmatter Schema

The \`SKILL.md\` file of a skill must begin with YAML frontmatter.

\`\`\`yaml
---
# Official Fields
name: my-custom-skill # Skill identifier (kebab-case, max 64 characters)
description: > # Purpose description (50-1024 characters, 3rd person)
  Description of custom skill. What tasks it's used for, what expertise it provides,
  written in 3rd person.
allowed-tools: # Allowed tools (comma-separated or list)
  - Read
  - Grep
  - Glob
model: claude-sonnet-4-20250514 # Model to use (defaults to current model if omitted)
context: fork # Execute in subagent context
agent: general-purpose # Agent to use when context: fork
hooks: # Skill lifecycle hooks
  PreToolUse: ...
user-invocable: true # Show in slash command menu
disable-model-invocation: false # If false, Claude can also invoke directly
argument-hint: "[issue-number]" # Autocomplete hint

# MoAI-ADK Extended Fields
version: 1.0.0 # Semantic version (MAJOR.MINOR.PATCH)
category: domain # One of 8 categories
modularized: false # Whether to use modules/ directory
status: active # active | experimental | deprecated
updated: "2025-01-28" # Last modified date
tags: # Array of tags for discovery
  - graphql
  - api
related-skills: # Related skills
  - moai-domain-backend
  - moai-lang-typescript
context7-libraries: # MCP Context7 library IDs
  - graphql
aliases: # Alternative names
  - graphql-expert
author: YourName # Author
---
\`\`\`

### Frontmatter Field Details

| Field                      | Required | Description                                        | Example                       |
| -------------------------- | -------- | -------------------------------------------------- | ----------------------------- |
| \`name\`                     | Optional| kebab-case identifier (max 64 characters)          | \`my-graphql-patterns\`         |
| \`description\`              | Recommended | 50-1024 characters, 3rd person, for discovery | "Provides GraphQL API patterns..." |
| \`allowed-tools\`            | Optional | Tools allowed when skill is active                 | \`["Read", "Grep"]\`            |
| \`model\`                    | Optional | Model to use                                       | \`claude-sonnet-4-20250514\`    |
| \`context\`                  | Optional | Run in subagent when \`fork\` is set                 | \`fork\`                        |
| \`agent\`                    | Optional | Agent to use when \`context: fork\`                   | \`general-purpose\`             |
| \`hooks\`                    | Optional | Skill lifecycle hooks                               | \`PreToolUse: ...\`             |
| \`user-invocable\`           | Optional | Show in slash menu (default: true)                  | \`true\`                        |
| \`disable-model-invocation\` | Optional | If true, only user can invoke                      | \`false\`                       |
| \`argument-hint\`            | Optional | Autocomplete hint                                  | \`"[issue-number]"\`            |
| \`version\`                  | MoAI     | Semantic version                                   | \`1.0.0\`                       |
| \`category\`                 | MoAI     | Category                                           | \`domain\`                      |
| \`modularized\`              | MoAI     | Whether modularized                                | \`false\`                       |
| \`status\`                   | MoAI     | Active status                                      | \`active\`                      |

### Skill Directory Structure

\`\`\`text
.claude/skills/my-skills/
└── my-graphql-patterns/
    ├── SKILL.md            # Main skill document (under 500 lines)
    ├── modules/            # In-depth documentation (unlimited)
    │   ├── schema-design.md
    │   └── resolver-patterns.md
    ├── examples.md         # Real-world examples
    └── reference.md        # External references
\`\`\`

<Callout type="warning">
  **Important**: The filename must use **uppercase** \`SKILL.md\`. Create user custom skills in the \`.claude/skills/my-skills/\` directory. The \`moai-*\` prefix is reserved for MoAI-ADK official skills only.
</Callout>

### String Substitutions

The following runtime substitutions can be used in the skill body.

| Substitution              | Description                   | Example                         |
| ------------------------- | ----------------------------- | ------------------------------- |
| \`$ARGUMENTS\`              | All arguments when invoking skill | \`/skill foo bar\` → \`foo bar\` |
| \`$ARGUMENTS[N]\` or \`$N\`   | Nth argument (0-indexed)      | \`$0\`, \`$1\`                      |
| \`\${CLAUDE_SESSION_ID}\`    | Current session ID            | For session tracking            |

### Dynamic Context Injection

You can execute shell commands before loading the skill and inject their output using the \`!\`command\`\` syntax.

\`\`\`markdown
---
# YAML
---

# Project Information

Project name: !basename $(pwd)
Git branch: !git branch --show-current
\`\`\`

### Invocation Control Modes

There are three invocation modes.

| Mode    | Setting                             | Description                           | Purpose                  |
| ------- | ----------------------------------- | ------------------------------------- | ------------------------ |
| Default | Omit both fields                    | Both user and Claude can invoke       | General skills           |
| User-only | \`disable-model-invocation: true\` | Only user can invoke with \`/name\`     | Deployment, commit workflows |
| Claude-only | \`user-invocable: false\`        | Hidden from menu, only Claude invokes | Background knowledge     |

### Repository Priority

When skills are defined in duplicate locations, the priority is as follows:

1. **Enterprise**: Managed settings (highest priority)
2. **Personal**: \`~/.claude/skills/\` (individual)
3. **Project**: \`.claude/skills/\` (team shared, version controlled)
4. **Plugin**: Installed plugin bundles (lowest priority)

### Creating Skills

\`\`\`bash
# Invoke builder-skill in Claude Code
> Create a custom skill for GraphQL API design patterns
\`\`\`

Generated file: \`.claude/skills/my-skills/my-graphql-patterns/SKILL.md\`

\`\`\`markdown
---
name: my-graphql-patterns
description: >
  GraphQL API design expert. Provides schema design, resolver patterns, N+1 problem
  resolution, DataLoader patterns. Use when developing GraphQL APIs.
version: 1.0.0
category: domain
status: active
triggers:
  keywords: ["graphql", "schema", "resolver", "dataloader"]
  agents: ["expert-backend"]
allowed-tools: ["Read", "Grep", "Glob"]
---

# GraphQL API Design Expert

## Quick Reference

- Schema-first design
- DataLoader essential for preventing N+1 problems
- Use Relay Cursor pagination

## Implementation Guide

(Detailed implementation guide)

## Advanced Patterns

(Advanced patterns)

## Works Well With

- moai-domain-backend
- moai-lang-typescript
\`\`\`

<Callout type="warning">
  **Constraint**: **NEVER use the \`moai-\` prefix** for user skill names. This namespace is reserved for MoAI-ADK system skills. Exceptions are only granted for admin mode (system skill) requests.
</Callout>

## Creating Agents (builder-agent)

### Agent Definition Structure

Agents are defined as markdown files with metadata in YAML frontmatter.

\`\`\`markdown
---
name: my-data-analyst
description: >
  Data analysis expert. Responsible for data pipeline design, ETL processes,
  analytics query optimization. PROACTIVELY use for automatic delegation
  during data analysis tasks.
tools: Read, Write, Edit, Grep, Glob, Bash, TodoWrite
disallowedTools: Task, Skill # Optional: tools to exclude
model: sonnet # sonnet | opus | haiku | inherit
permissionMode: default # Permission mode
skills: # Skills to preload
  - moai-lang-python
  - moai-domain-database
hooks: # Agent lifecycle hooks
  PostToolUse:
    - matcher: "Write|Edit"
      hooks:
        - type: command
          command: "echo 'File modified'"
---

You are a data analysis expert.

## Primary Mission

Provide data-driven insights through data pipeline design and implementation.

## Core Capabilities

- Data pipeline design and implementation
- ETL process automation
- Analytics query optimization
- Data visualization

## Scope Boundaries

IN SCOPE:
- Data analysis and visualization
- ETL process design
- Query performance optimization

OUT OF SCOPE:
- ML model development (delegate to expert-data-science)
- Infrastructure configuration (delegate to expert-devops)

## Delegation Protocol

- For ML model needs: expert-data-science
- For infrastructure setup: expert-devops

## Quality Standards

- Follow TRUST 5 framework
- Verify data integrity
- Optimize query performance
\`\`\`

### Agent Frontmatter Field Details

| Field              | Required | Description                                                       |
| ------------------ | -------- | ------------------------------------------------------------------ |
| \`name\`             | Required | Agent identifier (kebab-case, max 64 characters)                  |
| \`description\`      | Required | Role description. Including \`PROACTIVELY\` keyword enables auto delegation |
| \`tools\`            | Optional | Allowed tools (comma-separated, inherits all if omitted)          |
| \`disallowedTools\`  | Optional | Tools to exclude (removed from inherited tools)                   |
| \`model\`            | Optional | \`sonnet\`, \`opus\`, \`haiku\`, \`inherit\` (default: configured model)  |
| \`permissionMode\`   | Optional | Permission mode (see below)                                       |
| \`skills\`          | Optional | List of skills to preload (not inherited)                         |
| \`hooks\`           | Optional | Agent lifecycle hooks                                              |

### Permission Modes

5 permission modes control tool approval behavior.

| Mode                | Description                    | Purpose                      |
| ------------------- | ------------------------------ | ---------------------------- |
| \`default\`           | Standard permission prompts    | General agents               |
| \`acceptEdits\`       | Auto-approve file edits        | Edit-focused tasks           |
| \`dontAsk\`           | Auto-deny all prompts          | Only use pre-approved tools  |
| \`bypassPermissions\` | Skip all permission checks     | Trusted agents only          |
| \`plan\`              | Read-only exploration mode     | When modification prevention needed |

### Ways to Create Agents

There are 4 ways to create agents.

| Method           | Description                    | Location              |
| ---------------- | ------------------------------ | --------------------- |
| \`/agents\` command | Interactive interface          | Project/Personal      |
| Manual file creation | Direct markdown file editing | \`.claude/agents/\`     |
| CLI flag         | \`--agents\` JSON definition     | Session-only          |
| Plugin distribution | Plugin bundle               | Installed plugins     |

### Agent Repository Priority

When the same agent name is defined in multiple locations:

1. **Project level**: \`.claude/agents/\` (highest priority, version controlled)
2. **User level**: \`~/.claude/agents/\` (individual, non-versioned)
3. **CLI flag**: \`--agents\` JSON (session-only)
4. **Plugin**: Installed plugins (lowest priority)

### Built-in Agent Types

Claude Code includes several built-in agents.

| Agent            | Model    | Characteristics                               |
| ---------------- | -------- | --------------------------------------------- |
| \`Explore\`        | haiku    | Read-only tools, optimized for codebase search |
| \`Plan\`           | inherit  | plan permission mode, read-only tools         |
| \`general-purpose\`| inherit  | All tools, complex multi-step tasks            |
| \`Bash\`           | inherit  | Execute terminal commands                     |
| \`Claude Code Guide\` | haiku | Q&A about Claude Code features               |

### Skills Preloading

Skills listed in the \`skills\` field have their **full content injected** at agent startup.

- Does **not inherit** skills from parent conversation
- Full content of each skill is injected into system prompt
- List only essential skills to minimize token consumption
- Order matters: higher priority skills first

### Hooks Configuration

Agents can define lifecycle hooks in their frontmatter.

| Event        | Description                              |
| ------------ | ---------------------------------------- |
| \`PreToolUse\`  | Before tool execution (validation, pre-checks) |
| \`PostToolUse\` | After tool completion (lint, formatting, logging) |
| \`Stop\`        | When agent execution completes           |

### Key Constraints

| Constraint              | Description                                                       |
| ----------------------- | ------------------------------------------------------------------ |
| Cannot create subagents | Subagents cannot spawn other subagents                            |
| AskUserQuestion limited | Subagents cannot interact directly with users                     |
| Skills not inherited    | Does not inherit skills from parent conversation                  |
| MCP tools restricted    | MCP tools cannot be used in background subagents                  |
| Independent context     | Each subagent has independent 200K token context                  |

## Creating Plugins (builder-plugin)

### What is a Plugin?

A plugin is a **distribution unit that bundles** skills, agents, commands, Hooks, and MCP servers into a single package.

<Callout type="warning">
  **Important constraint**: The commands/, agents/, skills/, hooks/ directories must be located at the **plugin root**. They should not be placed inside .claude-plugin/.
</Callout>

### Plugin Directory Structure

\`\`\`text
my-plugin/
├── .claude-plugin/
│   └── plugin.json         # Plugin manifest
├── commands/               # Slash commands (root level!)
│   └── analyze.md
├── agents/                 # Agent definitions (root level!)
│   └── data-expert.md
├── skills/                 # Skill definitions (root level!)
│   └── my-skill/
│       └── SKILL.md
├── hooks/                  # Hooks configuration (root level!)
│   └── hooks.json
├── .mcp.json               # MCP server configuration
├── .lsp.json               # LSP server configuration
├── LICENSE
├── CHANGELOG.md
└── README.md
\`\`\`

<Callout type="warning">
  **Wrong example**: .claude-plugin/commands/ (commands inside .claude-plugin)
  **Correct example**: commands/ (commands at plugin root)
</Callout>

### Plugin Manifest (plugin.json)

\`\`\`json
{
  "name": "my-data-plugin",
  "version": "1.0.0",
  "description": "Comprehensive plugin for data analysis tasks",
  "author": {
    "name": "My Team",
    "email": "team@example.com",
    "url": "https://example.com"
  },
  "homepage": "https://example.com/docs",
  "repository": {
    "type": "git",
    "url": "https://github.com/owner/repo"
  },
  "license": "MIT",
  "keywords": ["data", "analytics", "etl"],
  "commands": ["./commands/"],
  "agents": ["./agents/"],
  "skills": ["./skills/"],
  "hooks": "./hooks/hooks.json",
  "mcpServers": "./.mcp.json",
  "lspServers": "./.lsp.json",
  "outputStyles": "./output-styles/"
}
\`\`\`

### Field Details

| Field          | Required | Description                               |
| -------------- | -------- | ----------------------------------------- |
| \`name\`         | Required | kebab-case plugin identifier              |
| \`version\`      | Required | Semantic version (e.g., "1.0.0")          |
| \`description\`  | Required | Clear purpose description                 |
| \`author\`       | Optional | name, email, url properties               |
| \`homepage\`     | Optional | Documentation or project URL              |
| \`repository\`   | Optional | Source code repository URL                |
| \`license\`      | Optional | SPDX license identifier                    |
| \`keywords\`     | Optional | Array of keywords for discovery           |
| \`commands\`     | Optional | Command path (must start with "./")        |
| \`agents\`       | Optional | Agent path (must start with "./")          |
| \`skills\`       | Optional | Skill path (must start with "./")          |
| \`hooks\`        | Optional | Hooks path (must start with "./")          |
| \`mcpServers\`   | Optional | MCP server configuration path             |
| \`lspServers\`   | Optional | LSP server configuration path             |

### Path Rules

- All paths are relative to the plugin root
- All paths must start with **"./"**
- Available environment variables: \`\${CLAUDE_PLUGIN_ROOT}\`, \`\${CLAUDE_PROJECT_DIR}\`

### Marketplace Setup (marketplace.json)

To distribute multiple plugins, create a marketplace.json.

\`\`\`json
{
  "name": "my-marketplace",
  "owner": {
    "name": "My Organization",
    "email": "plugins@example.com"
  },
  "plugins": [
    {
      "name": "plugin-one",
      "source": "./plugins/plugin-one"
    },
    {
      "name": "plugin-two",
      "source": {
        "type": "github",
        "repo": "owner/repo"
      }
    }
  ]
}
\`\`\`

### Installation Scopes

| Scope   | Location                          | Description                          |
| ------- | --------------------------------- | ------------------------------------ |
| \`user\`  | \`~/.claude/settings.json\`        | Personal plugins (default)           |
| \`project\`| \`.claude/settings.json\`          | Team shared (version controlled)     |
| \`local\` | \`.claude/settings.local.json\`    | Developer-only (gitignored)          |
| \`managed\`| \`managed-settings.json\`          | Enterprise managed (read-only)       |

### Plugin Installation and Management

\`\`\`bash
# Install plugin from GitHub
$ /plugin install owner/repo

# Validate local plugin
$ /plugin validate .

# Enable plugin
$ /plugin enable my-data-plugin

# Add marketplace
$ /plugin marketplace add ./path/to/marketplace

# List installed plugins
$ /plugin list
\`\`\`

### Plugin Caching and Security

**Caching behavior**:

- Plugins are copied to a cache directory for security and validation
- All relative paths are resolved within the cached plugin directory
- Path traversal like \`../shared-utils\` will not work

**Security warning**:

- Verify the source before installing plugins
- Anthropic does not control MCP servers, files, or software from third-party plugins
- Review plugin source code before installation

### Real-World Plugin Creation Example

\`\`\`bash
# Plugin creation request
> Create a data analysis plugin.
> Include skills, agents, and commands.
\`\`\`

## Custom Preservation Locations

Locations where user custom files are preserved during MoAI-ADK updates.

| Type     | Preserved Locations            | Overwritten Locations        |
| -------- | ------------------------------ | ---------------------------- |
| Skills   | \`.claude/skills/my-skills/\`    | \`.claude/skills/moai-*/\`     |
| Agents   | User-defined agents             | \`.claude/agents/moai/\`       |
| Commands | User-defined commands           | \`.claude/commands/moai/\`     |
| Hooks    | User-defined Hooks              | \`.claude/hooks/moai/\`        |
| Rules    | \`.claude/rules/local/\`          | \`.claude/rules/moai/\`        |
| Settings | \`.claude/settings.local.json\`   | \`.claude/settings.json\`      |
| Guidelines | \`CLAUDE.local.md\`              | \`CLAUDE.md\`                  |

<Callout type="info">
  **Recommendation**: Always create personal extensions in \`my-skills/\` or \`local/\` directories. They are safely preserved during MoAI-ADK updates.
</Callout>

## How to Invoke Builder Agents

Builder agents are automatically invoked when you request them in natural language to Alfred.

\`\`\`bash
# Create skill
> @"builder-skill (agent)" Create a custom skill for GraphQL patterns

# Create agent
> @"builder-agent (agent)" Create a data analysis expert agent

# Create plugin
> @"builder-plugin (agent)" Create a comprehensive data analysis plugin
\`\`\`

## Key Constraints

| Constraint              | Description                                                           |
| ----------------------- | --------------------------------------------------------------------- |
| Cannot create subagents | Subagents cannot spawn other subagents                                |
| User interaction limited| Subagents cannot interact directly with users (only Alfred can)      |
| Skills not inherited    | Does not inherit skills from parent conversation (explicit listing needed) |
| Independent context     | Each subagent has independent 200K token context                      |
| moai- prefix prohibited | User skills/agents cannot use \`moai-\` prefix                          |
| SKILL.md naming         | Skill main file must use uppercase \`SKILL.md\`                         |
| Plugin component location| Plugin's commands/, agents/, skills/ must be at root                 |

## Related Documentation

- [Skill Guide](/advanced/skill-guide) - Skill system details
- [Agent Guide](/advanced/agent-guide) - Agent system details
- [Hooks Guide](/advanced/hooks-guide) - Event automation
- [settings.json Guide](/advanced/settings-json) - Configuration management

<Callout type="tip">
  **Tip**: We recommend starting with **skill creation**. Skills are the lightest and fastest way to extend MoAI-ADK.
</Callout>
`,

  '/docs/advanced/hooks-guide': `
import { Callout } from 'nextra/components'

# Hooks Guide

Detailed guide to Claude Code's Hooks system and MoAI-ADK's default Hook scripts.

<Callout type="tip">
**One-line summary**: Hooks are Claude Code's **automatic reflex nerves**. Automatically format files when saved, block dangerous commands.
</Callout>

## What are Hooks?

Hooks are **scripts that execute automatically** in response to specific events in Claude Code.

To use the analogy of a doctor's reflex test: when a knee is tapped (event occurs), the leg automatically rises (script executes), just as when Claude Code modifies a file (PostToolUse event), the formatter automatically runs (code cleanup).

\`\`\`mermaid
flowchart TD
    EVENT["Claude Code Event Occurs"] --> MATCH{Matcher Check}

    MATCH -->|Matched| HOOK["Hook Script Executes"]
    MATCH -->|Not Matched| SKIP["Pass Through"]

    HOOK --> RESULT{Execution Result}
    RESULT -->|Success| CONTINUE["Continue Work"]
    RESULT -->|Blocked| BLOCK["Stop Work"]
    RESULT -->|Warning| WARN["Warning Then Continue"]
\`\`\`

## Hook Event Types

Claude Code supports **10 event types**.

### Complete Event List

| Event | Execution Timing | Main Purpose |
|--------|------------------|--------------|
| \`Setup\` | Start with \`--init\`, \`--init-only\`, \`--maintenance\` flags | Initial setup, environment checks |
| \`SessionStart\` | When session starts | Project info display, environment initialization |
| \`SessionEnd\` | When session ends | Cleanup, context storage, rank submission |
| \`PreCompact\` | Before context compact (\`/clear\` etc) | Backup important context |
| \`PreToolUse\` | Before tool use | Security validation, block dangerous commands |
| **\`PermissionRequest\`** | When permission dialog shown | Auto allow/deny decisions |
| \`PostToolUse\` | After tool use | Code formatting, lint checks, LSP diagnostics |
| **\`UserPromptSubmit\`** | When user submits prompt | Prompt preprocessing, validation |
| **\`Notification\`** | When Claude Code sends notification | Customize desktop notifications |
| \`Stop\` | After response completes | Loop control, completion condition check |
| **\`SubagentStop\`** | After subagent work completes | Process subtask results |

### Event Details

#### 1. Setup
Executed when Claude Code starts with \`--init\`, \`--init-only\`, or \`--maintenance\` flags. Used for initial setup and environment checks.

#### 2. SessionStart
Executed when a session starts or resumes an existing session. Used for displaying project status and environment initialization.

#### 3. SessionEnd
Executed when Claude Code session ends. Used for cleanup, context storage, and metrics collection.

#### 4. PreCompact
Executed before Claude Code performs context compacting (like \`/clear\` command). Used to backup important context.

#### 5. PreToolUse
Executed **before** a tool is called. Can block or modify tool calls. Used for security validation and blocking dangerous commands.

#### 6. PermissionRequest
Executed when a permission dialog is displayed to the user. Can automatically allow or deny.

#### 7. PostToolUse
Executed **after** a tool call completes. Used for code formatting, lint checks, and LSP diagnostics collection.

#### 8. UserPromptSubmit
Executed when the user submits a prompt, **before** Claude processes it. Used for prompt preprocessing and validation.

#### 9. Notification
Executed when Claude Code sends a notification. Can be customized for desktop notifications, sound alerts, etc.

#### 10. Stop
Executed when Claude Code completes a response. Used for loop control and completion condition verification.

#### 11. SubagentStop
Executed when a subagent's work is complete. Used to process subtask results.

### Events Implemented in MoAI-ADK

MoAI-ADK has implemented the following events:

| Event | Status | Hook File |
|--------|--------|------------|
| \`SessionStart\` | ✅ | \`session_start__show_project_info.py\` |
| \`PreToolUse\` | ✅ | \`pre_tool__security_guard.py\` |
| \`PostToolUse\` | ✅ | \`post_tool__code_formatter.py\`, \`post_tool__linter.py\`, \`post_tool__ast_grep_scan.py\`, \`post_tool__lsp_diagnostic.py\` |
| \`PreCompact\` | ✅ | \`pre_compact__save_context.py\` |
| \`SessionEnd\` | ✅ | \`session_end__auto_cleanup.py\`, \`session_end__rank_submit.py\` |
| \`Stop\` | ✅ | \`stop__loop_controller.py\` |
| \`Setup\` | ⚪ | See official examples |
| \`PermissionRequest\` | ⚪ | See official examples |
| \`UserPromptSubmit\` | ⚪ | See official examples |
| \`Notification\` | ⚪ | See official examples |
| \`SubagentStop\` | ⚪ | See official examples |

### Event Execution Order

The order in which hooks execute during a typical file modification operation:

\`\`\`mermaid
flowchart TD
    A["Claude Code attempts<br>file modification"] --> B["PreToolUse<br>Security validation"]

    B -->|Allow| C["Write/Edit<br>Execute file modification"]
    B -->|Block| BLOCK["Stop work<br>Protect dangerous files"]

    C --> D["PostToolUse<br>Code formatter"]
    D --> E["PostToolUse<br>Linter check"]
    E --> F["PostToolUse<br>AST-grep scan"]
    F --> G["PostToolUse<br>LSP diagnostics"]

    G --> H{Result}
    H -->|Clean| I["Work complete"]
    H -->|Issues found| J["Send feedback to<br>Claude Code"]
    J --> K["Attempt auto-fix"]
\`\`\`

## Claude Code Official Examples

These examples are standard patterns provided in Claude Code's official documentation.

### Bash Command Logging Hook

Logs all Bash commands to a log file.

\`\`\`json
{
  "hooks": {
    "PreToolUse": [
      {
        "matcher": "Bash",
        "hooks": [
          {
            "type": "command",
            "command": "jq -r '\\"\\\\(.tool_input.command) - \\\\(.tool_input.description // \\"No description\\")\\"' >> ~/.claude/bash-command-log.txt"
          }
        ]
      }
    ]
  }
}
\`\`\`

### TypeScript Formatting Hook

Automatically runs Prettier after editing TypeScript files.

\`\`\`json
{
  "hooks": {
    "PostToolUse": [
      {
        "matcher": "Edit|Write",
        "hooks": [
          {
            "type": "command",
            "command": "jq -r '.tool_input.file_path' | { read file_path; if echo \\"$file_path\\" | grep -q '\\\\.ts$'; then npx prettier --write \\"$file_path\\"; fi; }"
          }
        ]
      }
    ]
  }
}
\`\`\`

### Markdown Formatter Hook

Automatically detects and adds language tags to Markdown files.

\`\`\`json
{
  "hooks": {
    "PostToolUse": [
      {
        "matcher": "Edit|Write",
        "hooks": [
          {
            "type": "command",
            "command": "\\"$CLAUDE_PROJECT_DIR\\"/.claude/hooks/markdown_formatter.py"
          }
        ]
      }
    ]
  }
}
\`\`\`

\`.claude/hooks/markdown_formatter.py\` file:

\`\`\`python
#!/usr/bin/env python3
"""
Markdown formatter for Claude Code output.
Fixes missing language tags and spacing issues while preserving code content.
"""
import json
import sys
import re
import os

def detect_language(code):
    """Best-effort language detection from code content."""
    s = code.strip()

    # JSON detection
    if re.search(r'^\\\\s*[{\\\\[]', s):
        try:
            json.loads(s)
            return 'json'
        except:
            pass

    # Python detection
    if re.search(r'^\\\\s*def\\\\s+\\\\w+\\\\s*\\\\(', s, re.M) or \\
       re.search(r'^\\\\s*(import|from)\\\\s+\\\\w+', s, re.M):
        return 'python'

    # JavaScript detection
    if re.search(r'\\\\b(function\\\\s+\\\\w+\\\\s*\\\\(|const\\\\s+\\\\w+\\\\s*=)', s) or \\
       re.search(r'=>|console\\\\.(log|error)', s):
        return 'javascript'

    # Bash detection
    if re.search(r'^#!.*\\\\b(bash|sh)\\\\b', s, re.M) or \\
       re.search(r'\\\\b(if|then|fi|for|in|do|done)\\\\b', s):
        return 'bash'

    return 'text'

def format_markdown(content):
    """Format markdown content with language detection."""
    # Fix unlabeled code fences
    def add_lang_to_fence(match):
        indent, info, body, closing = match.groups()
        if not info.strip():
            lang = detect_language(body)
            return f"{indent}\`\`\`{lang}\\\\n{body}{closing}\\\\n"
        return match.group(0)

    fence_pattern = r'(?ms)^([ \\\\t]{0,3})\`\`\`([^\\\\n]*)\\\\n(.*?)(\\\\n\\\\1\`\`\`)\\\\s*$'
    content = re.sub(fence_pattern, add_lang_to_fence, content)

    # Fix excessive blank lines
    content = re.sub(r'\\\\n{3,}', '\\\\n\\\\n', content)

    return content.rstrip() + '\\\\n'

# Main execution
try:
    input_data = json.load(sys.stdin)
    file_path = input_data.get('tool_input', {}).get('file_path', '')

    if not file_path.endswith(('.md', '.mdx')):
        sys.exit(0)  # Not a markdown file

    if os.path.exists(file_path):
        with open(file_path, 'r', encoding='utf-8') as f:
            content = f.read()

        formatted = format_markdown(content)

        if formatted != content:
            with open(file_path, 'w', encoding='utf-8') as f:
                f.write(formatted)
            print(f"✓ Fixed markdown formatting in {file_path}")

except Exception as e:
    print(f"Error formatting markdown: {e}", file=sys.stderr)
    sys.exit(1)
\`\`\`

### Desktop Notification Hook

Displays a desktop notification when Claude is waiting for input.

\`\`\`json
{
  "hooks": {
    "Notification": [
      {
        "matcher": "",
        "hooks": [
          {
            "type": "command",
            "command": "notify-send 'Claude Code' 'Awaiting your input'"
          }
        ]
      }
    ]
  }
}
\`\`\`

### File Protection Hook

Blocks modification of sensitive files.

\`\`\`json
{
  "hooks": {
    "PreToolUse": [
      {
        "matcher": "Edit|Write",
        "hooks": [
          {
            "type": "command",
            "command": "python3 -c \\"import json, sys; data=json.load(sys.stdin); path=data.get('tool_input',{}).get('file_path',''); sys.exit(2 if any(p in path for p in ['.env', 'package-lock.json', '.git/']) else 0)\\""
          }
        ]
      }
    ]
  }
}
\`\`\`

## MoAI Default Hooks

MoAI-ADK provides **11 default Hook scripts**.

### Hook List

| Hook File | Event | Matcher | Role | Timeout |
|-----------|-------|---------|------|---------|
| \`session_start__show_project_info.py\` | SessionStart | All | Project status display, update check | 5 sec |
| \`pre_tool__security_guard.py\` | PreToolUse | \`Write\\|Edit\\|Bash\` | Block dangerous file modifications/commands | 5 sec |
| \`post_tool__code_formatter.py\` | PostToolUse | \`Write\\|Edit\` | Auto code formatting | 30 sec |
| \`post_tool__linter.py\` | PostToolUse | \`Write\\|Edit\` | Auto lint check | 60 sec |
| \`post_tool__ast_grep_scan.py\` | PostToolUse | \`Write\\|Edit\` | AST-based security scan | 30 sec |
| \`post_tool__lsp_diagnostic.py\` | PostToolUse | \`Write\\|Edit\` | LSP diagnostics collection | default |
| \`pre_compact__save_context.py\` | PreCompact | All | Save context before \`/clear\` | 3 sec |
| \`session_end__auto_cleanup.py\` | SessionEnd | All | Session end cleanup | 5 sec |
| \`session_end__rank_submit.py\` | SessionEnd | All | Submit session data to MoAI Rank | default |
| \`stop__loop_controller.py\` | Stop | All | Ralph loop control and completion check | default |
| \`quality_gate_with_lsp.py\` | Manual | All | LSP-based quality gate validation | default |

### SessionStart: Display Project Info

When a session starts, shows the current state of the project.

**Displayed Information:**
- MoAI-ADK version and update status
- Current project name and tech stack
- Git branch, changes, last commit
- Git strategy (Github-Flow mode, Auto Branch settings)
- Language settings (conversation language)
- Previous session context (SPEC status, task list)
- Personalized welcome message or setup guide

### PreToolUse: Security Guard

**Protects dangerous operations** before file modification/command execution.

**Protected Files:**

| Category | Protected Files | Reason |
|----------|----------------|--------|
| Secret storage | \`secrets/\`, \`*.secrets.*\`, \`*.credentials.*\` | Protect sensitive information |
| SSH keys | \`~/.ssh/*\`, \`id_rsa*\`, \`id_ed25519*\` | Protect server access keys |
| Certificates | \`*.pem\`, \`*.key\`, \`*.crt\` | Protect certificate files |
| Cloud credentials | \`~/.aws/*\`, \`~/.gcloud/*\`, \`~/.azure/*\`, \`~/.kube/*\` | Protect cloud accounts |
| Git internal | \`.git/*\` | Git repository integrity |
| Token files | \`*.token\`, \`.tokens/*\`, \`auth.json\` | Protect auth tokens |

**Note:** \`.env\` files are NOT protected. Allows developers to edit environment variables.

**Blocking Behavior:**
- Detects Write/Edit attempts on protected files
- Returns \`"permissionDecision": "deny"\` response in JSON format
- Claude Code stops modifying that file

**Dangerous Bash Command Blocking:**
- Database deletion: \`supabase db reset\`, \`neon database delete\`
- Dangerous file deletion: \`rm -rf /\`, \`rm -rf .git\`
- Docker complete removal: \`docker system prune -a\`
- Force push: \`git push --force origin main\`
- Terraform destroy: \`terraform destroy\`

### PostToolUse: Code Formatter

**Automatically cleans up code** after file modification.

**Supported Languages and Formatters:**

| Language | Formatter (priority) | Config File |
|----------|---------------------|-------------|
| Python | \`ruff format\`, \`black\` | \`pyproject.toml\` |
| TypeScript/JavaScript | \`biome\`, \`prettier\`, \`eslint_d\` | \`.prettierrc\`, \`biome.json\` |
| Go | \`gofmt\`, \`goimports\` | default |
| Rust | \`rustfmt\` | \`rustfmt.toml\` |
| Ruby | \`prettier\` | \`.prettierrc\` |
| PHP | \`prettier\` | \`.prettierrc\` |
| Java | \`prettier\` | \`.prettierrc\` |
| Kotlin | \`prettier\` | \`.prettierrc\` |
| Swift | \`swiftformat\` | \`.swiftformat\` |
| C# | \`prettier\` | \`.prettierrc\` |

**Exclusions:**
- \`.json\`, \`.lock\`, \`.min.js\`, \`.svg\`, etc.
- \`node_modules\`, \`.git\`, \`dist\`, \`build\` directories

### PostToolUse: Linter

**Automatically checks code quality** after file modification.

**Supported Languages and Linters:**

| Language | Linter (priority) | Check Items |
|----------|-------------------|-------------|
| Python | \`ruff check\`, \`flake8\` | PEP 8, type hints, complexity |
| TypeScript/JavaScript | \`eslint\`, \`biome lint\`, \`eslint_d\` | Coding standards, potential bugs |
| Go | \`golangci-lint\` | Code quality, performance |
| Rust | \`clippy\` | Rust idioms, performance |

### PostToolUse: AST-grep Scan

**Scans for structural security vulnerabilities** after file modification.

**Supported Languages:**
Python, JavaScript/TypeScript, Go, Rust, Java, Kotlin, C/C++, Ruby, PHP

**Sample Scan Patterns:**
- SQL Injection vulnerabilities (string-concatenated queries)
- Hardcoded secret keys (API keys, tokens)
- Unsafe function calls
- Unused imports

**Configuration:** \`.claude/skills/moai-tool-ast-grep/rules/sgconfig.yml\` or \`sgconfig.yml\` at project root

### PostToolUse: LSP Diagnostics

**Collects LSP (Language Server Protocol) diagnostics** after file modification.

**Supported Languages:**
Python, TypeScript/JavaScript, Go, Rust, Java, Kotlin, Ruby, PHP, C/C++

**Fallback Diagnostics:**
When LSP is unavailable, uses command-line tools:
- Python: \`ruff check --output-format=json\`
- TypeScript: \`tsc --noEmit\`

**Configuration:** \`.moai/config/sections/ralph.yaml\`

\`\`\`yaml
ralph:
  enabled: true
  hooks:
    post_tool_lsp:
      enabled: true
      severity_threshold: error  # error | warning | info
\`\`\`

### PreCompact: Save Context

**Saves current context to file** before \`/clear\` execution.

**Save Location:** \`.moai/memory/context-snapshot.json\`

**Saved Content:**
- Current active SPEC status (ID, phase, progress)
- In-progress task list (TodoWrite)
- Completed task list
- Modified file list
- Git status information (branch, uncommitted changes)
- Key decisions

**Archive:** Previous snapshots are automatically archived to \`.moai/memory/context-archive/\`.

### SessionEnd: Auto Cleanup

Performs the following tasks when session ends:

**P0 Tasks (Required):**
- Save session metrics (files modified, commits made, SPECs worked on)
- Save work status snapshot (\`.moai/memory/last-session-state.json\`)
- Warning for uncommitted changes

**P1 Tasks (Optional):**
- Cleanup temporary files (older than 7 days)
- Cleanup cache files
- Scan for root directory documentation violations
- Generate session summary

### SessionEnd: MoAI Rank Submission

Submits session data to MoAI Rank service.

**Submitted Data:**
- Token usage (input, output, cache)
- Project path (anonymized with one-way hash)
- **Excluded:** Code, conversation content, and other sensitive information are NOT sent

**Configuration:** \`~/.moai/rank/config.yaml\`

\`\`\`yaml
rank:
  enabled: true
  exclude_projects:
    - "/path/to/private-project"
    - "*/confidential/*"
\`\`\`

**Registration:** Link GitHub account using \`moai-adk rank register\` command

### Stop: Loop Controller

Controls Ralph Engine feedback loop.

**Completion Condition Check:**
- LSP error count (0 errors goal)
- LSP warning count
- Test pass status
- Coverage target (default 85%)
- Completion markers (\`<moai>DONE</moai>\`, \`<moai>COMPLETE</moai>\`) detection

**State File:** \`.moai/cache/.moai_loop_state.json\`

**Configuration:** \`.moai/config/sections/ralph.yaml\`

\`\`\`yaml
ralph:
  enabled: true
  loop:
    max_iterations: 10
    auto_fix: false
    completion:
      zero_errors: true
      zero_warnings: false
      tests_pass: true
      coverage_threshold: 85
\`\`\`

### Quality Gate with LSP

Validates quality gates using LSP diagnostics.

**Quality Criteria:**
- Maximum error count: 0 (default)
- Maximum warning count: 10 (default)
- Type errors: 0 allowed
- Lint errors: 0 allowed

**Configuration:** \`.moai/config/sections/quality.yaml\`

\`\`\`yaml
constitution:
  quality_gate:
    max_errors: 0
    max_warnings: 10
    enabled: true
\`\`\`

**Result Example:**
\`\`\`json
{
  "lsp_errors": 0,
  "lsp_warnings": 2,
  "type_errors": 0,
  "lint_errors": 0,
  "passed": true,
  "reason": "Quality gate passed: LSP diagnostics clean"
}
\`\`\`

## lib/ Shared Library

MoAI Hooks provides modules in the \`lib/\` directory for shared functionality.

\`\`\`
.claude/hooks/moai/lib/
├── __init__.py
├── atomic_write.py           # Atomic write operations
├── checkpoint.py             # Checkpoint management
├── common.py                 # Common utilities
├── config.py                 # Configuration management
├── config_manager.py         # Configuration manager (advanced)
├── config_validator.py       # Configuration validation
├── context_manager.py        # Context management (snapshots, archives)
├── enhanced_output_style_detector.py  # Output style detection
├── file_utils.py             # File utilities
├── git_collector.py          # Git data collection
├── git_operations_manager.py # Git operations manager (optimized)
├── language_detector.py      # Language detection
├── language_validator.py     # Language validation
├── main.py                   # Main entry point
├── memory_collector.py       # Memory collection
├── metrics_tracker.py        # Metrics tracking
├── models.py                 # Data models
├── path_utils.py             # Path utilities
├── project.py                # Project-related
├── renderer.py               # Renderer
├── timeout.py                # Timeout handling
├── tool_registry.py          # Tool registry (formatters, linters)
├── unified_timeout_manager.py # Unified timeout manager
├── update_checker.py         # Update check
├── version_reader.py         # Version reading
├── alfred_detector.py        # Alfred detection
└── shared/utils/
    └── announcement_translator.py  # Announcement translation
\`\`\`

**Key Modules:**

- **tool_registry.py**: Auto-detection of formatters/linters for 16 programming languages
- **git_operations_manager.py**: Optimized Git operations with connection pooling and caching
- **unified_timeout_manager.py**: Unified timeout management with graceful degradation
- **context_manager.py**: Context snapshots, archives, and Memory MCP payload generation

## Hook Configuration in settings.json

Hooks are configured in the \`hooks\` section of the \`.claude/settings.json\` file.

\`\`\`json
{
  "hooks": {
    "SessionStart": [
      {
        "matcher": "",
        "hooks": [
          {
            "type": "command",
            "command": "\${SHELL:-/bin/bash} -l -c 'uv run \\"$CLAUDE_PROJECT_DIR/.claude/hooks/moai/session_start__show_project_info.py\\"'"
          }
        ]
      }
    ],
    "PreToolUse": [
      {
        "matcher": "Write|Edit",
        "hooks": [
          {
            "type": "command",
            "command": "\${SHELL:-/bin/bash} -l -c 'uv run \\"$CLAUDE_PROJECT_DIR/.claude/hooks/moai/pre_tool__security_guard.py\\"'",
            "timeout": 5000
          }
        ]
      }
    ],
    "PostToolUse": [
      {
        "matcher": "Write|Edit",
        "hooks": [
          {
            "type": "command",
            "command": "\${SHELL:-/bin/bash} -l -c 'uv run \\"$CLAUDE_PROJECT_DIR/.claude/hooks/moai/post_tool__code_formatter.py\\"'",
            "timeout": 30000
          },
          {
            "type": "command",
            "command": "\${SHELL:-/bin/bash} -l -c 'uv run \\"$CLAUDE_PROJECT_DIR/.claude/hooks/moai/post_tool__linter.py\\"'",
            "timeout": 60000
          },
          {
            "type": "command",
            "command": "\${SHELL:-/bin/bash} -l -c 'uv run \\"$CLAUDE_PROJECT_DIR/.claude/hooks/moai/post_tool__ast_grep_scan.py\\"'",
            "timeout": 30000
          },
          {
            "type": "command",
            "command": "\${SHELL:-/bin/bash} -l -c 'uv run \\"$CLAUDE_PROJECT_DIR/.claude/hooks/moai/post_tool__lsp_diagnostic.py\\"'"
          }
        ]
      }
    ],
    "PreCompact": [
      {
        "matcher": "",
        "hooks": [
          {
            "type": "command",
            "command": "\${SHELL:-/bin/bash} -l -c 'uv run \\"$CLAUDE_PROJECT_DIR/.claude/hooks/moai/pre_compact__save_context.py\\"'",
            "timeout": 5000
          }
        ]
      }
    ],
    "SessionEnd": [
      {
        "matcher": "",
        "hooks": [
          {
            "type": "command",
            "command": "\${SHELL:-/bin/bash} -l -c 'uv run \\"$CLAUDE_PROJECT_DIR/.claude/hooks/moai/session_end__auto_cleanup.py\\"'",
            "timeout": 5000
          },
          {
            "type": "command",
            "command": "\${SHELL:-/bin/bash} -l -c 'uv run \\"$CLAUDE_PROJECT_DIR/.claude/hooks/moai/session_end__rank_submit.py\\"'"
          }
        ]
      }
    ],
    "Stop": [
      {
        "matcher": "",
        "hooks": [
          {
            "type": "command",
            "command": "\${SHELL:-/bin/bash} -l -c 'uv run \\"$CLAUDE_PROJECT_DIR/.claude/hooks/moai/stop__loop_controller.py\\"'"
          }
        ]
      }
    ]
  }
}
\`\`\`

### Configuration Structure

| Field | Description | Example |
|------|-------------|---------|
| \`matcher\` | Tool name matching pattern (regex) | \`"Write\\|Edit"\` |
| \`type\` | Hook type | \`"command"\` |
| \`command\` | Command to execute | Shell script path |
| \`timeout\` | Execution time limit (milliseconds) | \`5000\` (5 seconds) |

### Matcher Patterns

| Pattern | Description |
|---------|-------------|
| \`""\` (empty string) | Matches all tools |
| \`"Write"\` | Matches only Write tool |
| \`"Write\\|Edit"\` | Matches Write or Edit tools |
| \`"Bash"\` | Matches only Bash tool |

## Writing Custom Hooks

### Basic Template

Custom Hook scripts can be written in Python.

\`\`\`python
#!/usr/bin/env python3
"""Custom PostToolUse Hook: Perform specific checks after file modification"""

import json
import sys


def main():
    # Read Hook input data from stdin
    input_data = json.loads(sys.stdin.read())

    tool_name = input_data.get("tool_name", "")
    tool_input = input_data.get("tool_input", {})
    file_path = tool_input.get("file_path", "")

    # Check logic
    if file_path.endswith(".py"):
        # Custom check for Python files
        result = check_python_file(file_path)

        if result["has_issues"]:
            # Send feedback to Claude Code
            output = {
                "hookSpecificOutput": {
                  "hookEventName": "PostToolUse",
                  "additionalContext": result["message"]
                }
            }
            print(json.dumps(output))
            return

    # Suppress output if no issues
    output = {"suppressOutput": True}
    print(json.dumps(output))


def check_python_file(file_path: str) -> dict:
    """Custom Python file check"""
    # Implement check logic
    return {"has_issues": False, "message": ""}


if __name__ == "__main__":
    main()
\`\`\`

### Hook Response Format

| Field | Value | Behavior |
|------|-------|----------|
| \`suppressOutput\` | \`true\` | Display nothing |
| \`hookSpecificOutput\` | object | Provide additional context |
| \`permissionDecision\` | \`"allow"\` | Allow work (PreToolUse) |
| \`permissionDecision\` | \`"deny"\` | Block work (PreToolUse) |
| \`permissionDecision\` | \`"ask"\` | Request user confirmation (PreToolUse) |

### Hook Input Data

Hook scripts receive JSON data via standard input (stdin).

\`\`\`json
{
  "tool_name": "Write",
  "tool_input": {
    "file_path": "/path/to/file.py",
    "content": "File content..."
  },
  "tool_output": "File output result (PostToolUse only)"
}
\`\`\`

## Hook Directory Structure

\`\`\`
.claude/hooks/moai/
├── __init__.py                        # Package initialization
├── session_start__show_project_info.py # Session start
├── pre_tool__security_guard.py         # Security guard
├── post_tool__code_formatter.py        # Code formatter
├── post_tool__linter.py                # Linter
├── post_tool__ast_grep_scan.py         # AST-grep scan
├── post_tool__lsp_diagnostic.py        # LSP diagnostics
├── pre_compact__save_context.py        # Context save
├── session_end__auto_cleanup.py        # Auto cleanup
├── session_end__rank_submit.py         # MoAI Rank submit
├── stop__loop_controller.py            # Loop controller
├── quality_gate_with_lsp.py            # Quality gate
└── lib/                                # Shared library
    ├── atomic_write.py                 # Atomic write
    ├── checkpoint.py                   # Checkpoint
    ├── common.py                       # Common utilities
    ├── config.py                       # Config
    ├── config_manager.py               # Config manager
    ├── config_validator.py             # Config validation
    ├── context_manager.py              # Context management
    ├── git_operations_manager.py       # Git operations manager
    ├── tool_registry.py                # Tool registry
    ├── unified_timeout_manager.py      # Timeout manager
    └── ...                             # Other modules
\`\`\`

<Callout type="warning">
**Caution**: Setting hook timeouts too long will slow down Claude Code responses. Recommended: formatter 30 sec, linter 60 sec, security guard 5 sec or less.
</Callout>

## Disabling Hooks with Environment Variables

Specific hooks can be disabled with environment variables:

| Hook | Environment Variable |
|------|---------------------|
| AST-grep scan | \`MOAI_DISABLE_AST_GREP_SCAN=1\` |
| LSP diagnostics | \`MOAI_DISABLE_LSP_DIAGNOSTIC=1\` |
| Loop controller | \`MOAI_DISABLE_LOOP_CONTROLLER=1\` |

\`\`\`bash
export MOAI_DISABLE_AST_GREP_SCAN=1
\`\`\`

## Related Documentation

- [settings.json Guide](/advanced/settings-json) - Hook configuration methods
- [CLAUDE.md Guide](/advanced/claude-md-guide) - Project guideline management
- [Agent Guide](/advanced/agent-guide) - Agent and Hook integration

<Callout type="tip">
**Tip**: Hooks are the core of MoAI-ADK quality assurance. Automating code formatting and lint checks allows developers to focus on logic. Add custom hooks to build automation tailored to your project.
</Callout>
`,

  '/docs/advanced/settings-json': `
import { Callout } from 'nextra/components'

# settings.json Guide

A comprehensive guide to Claude Code's configuration file system.

<Callout type="tip">
**One-line summary**: \`settings.json\` is the **control tower** of Claude Code. It manages permissions, environment variables, hooks, and security policies in one place.
</Callout>

## Configuration Scopes

Claude Code uses a **scope system** to determine where settings apply and who they are shared with.

### Four Scope Types

| Scope | Location | Affects | Team Shared | Priority |
|-------|----------|---------|-------------|----------|
| **Managed** | System-level \`managed-settings.json\` | All users on machine | ✅ (IT deployed) | Highest |
| **User** | \`~/.claude/\` | User personal (all projects) | ❌ | Low |
| **Project** | \`.claude/\` | All collaborators in repo | ✅ (Git tracked) | Medium |
| **Local** | \`.claude/*.local.*\` | User (this repo only) | ❌ | High |

### Priority by Scope

When the same setting exists in multiple scopes, the more specific scope takes precedence:

\`\`\`mermaid
flowchart TD
    A[Setting request] --> B{Managed setting<br>exists?}
    B -->|Yes| C[Use Managed<br>cannot override]
    B -->|No| D{Local setting<br>exists?}
    D -->|Yes| E[Use Local<br>override Project/User]
    D -->|No| F{Project setting<br>exists?}
    F -->|Yes| G[Use Project<br>override User]
    F -->|No| H[Use User<br>default]
\`\`\`

**Priority:** Managed > Command-line args > Local > Project > User

### Uses for Each Scope

**Managed Scope** - Use for:
- Organization-wide security policies
- Non-overridable compliance requirements
- Standardized configurations deployed by IT/DevOps

**User Scope** - Use for:
- Personal preferences across all projects (themes, editor settings)
- Tools and plugins used across all projects
- API keys and authentication (stored securely)

**Project Scope** - Use for:
- Team-shared settings (permissions, hooks, MCP servers)
- Plugins that the team should have
- Tool standardization across collaborators

**Local Scope** - Use for:
- Personal overrides for specific projects
- Testing settings before sharing with team
- Machine-specific settings that don't work for others

## File Locations

MoAI-ADK uses four settings file locations.

| File | Location | Purpose | Git Tracked |
|------|----------|---------|-------------|
| \`managed-settings.json\` | System-level* | Managed settings (IT deployed) | No |
| \`settings.json\` (User) | \`~/.claude/settings.json\` | Personal global settings | No |
| \`settings.json\` (Project) | \`.claude/settings.json\` | Team shared settings | Yes |
| \`settings.local.json\` | \`.claude/settings.local.json\` | Personal project settings | No |

**System-level locations:**
- macOS: \`/Library/Application Support/ClaudeCode/\`
- Linux/WSL: \`/etc/claude-code/\`
- Windows: \`C:\\Program Files\\ClaudeCode\\\`

<Callout type="warning">
**Warning**: \`.claude/settings.json\` is overwritten during MoAI-ADK updates. Always write personal settings in \`settings.local.json\` or \`~/.claude/settings.json\`.
</Callout>

## What is settings.json?

\`settings.json\` is Claude Code's **global configuration file**. It defines which commands are automatically allowed, which are blocked, which hooks to execute, and what environment variables to set.

## Overall Structure

\`\`\`json
{
  "model": "",
  "language": "",
  "attribution": {},
  "companyAnnouncements": [],
  "autoUpdatesChannel": "",
  "spinnerTipsEnabled": true,
  "terminalProgressBarEnabled": true,
  "sandbox": {},
  "hooks": {},
  "permissions": {},
  "enabledPlugins": {},
  "extraKnownMarketplaces": {},
  "enableAllProjectMcpServers": false,
  "enabledMcpjsonServers": [],
  "disabledMcpjsonServers": [],
  "fileSuggestion": {},
  "alwaysThinkingEnabled": false,
  "maxThinkingTokens": 0,
  "statusLine": {},
  "outputStyle": "",
  "cleanupPeriodDays": 30,
  "env": {}
}
\`\`\`

## Core Settings Reference

### model

Overrides the default model to use.

\`\`\`json
{
  "model": "claude-sonnet-4-5-20250929"
}
\`\`\`

### language

Sets Claude's default response language.

\`\`\`json
{
  "language": "korean"
}
\`\`\`

Supported languages: \`"korean"\`, \`"japanese"\`, \`"spanish"\`, \`"french"\`, etc.

### cleanupPeriodDays

Deletes inactive sessions older than this period on startup. Set to \`0\` to delete all sessions immediately. (default: 30 days)

\`\`\`json
{
  "cleanupPeriodDays": 20
}
\`\`\`

### autoUpdatesChannel

Release channel to follow for updates.

\`\`\`json
{
  "autoUpdatesChannel": "stable"
}
\`\`\`

- \`"stable"\`: Versions about a week old, skips major regressions
- \`"latest"\` (default): Most recent release

### spinnerTipsEnabled

Whether to show tips in the spinner while Claude is working. Set to \`false\` to disable tips. (default: \`true\`)

\`\`\`json
{
  "spinnerTipsEnabled": false
}
\`\`\`

### terminalProgressBarEnabled

Enables terminal progress bar displaying progress in supported terminals like Windows Terminal and iTerm2. (default: \`true\`)

\`\`\`json
{
  "terminalProgressBarEnabled": false
}
\`\`\`

### showTurnDuration

Displays turn duration message after responses (e.g., "Cooked for 1m 6s"). Set to \`false\` to hide this message.

\`\`\`json
{
  "showTurnDuration": true
}
\`\`\`

### respectGitignore

Controls whether the \`@\` file selector respects \`.gitignore\` patterns. When \`true\` (default), files matching \`.gitignore\` patterns are excluded from suggestions.

\`\`\`json
{
  "respectGitignore": false
}
\`\`\`

### plansDirectory

Customizes where plan files are stored. Path is relative to project root. Default: \`~/.claude/plans\`

\`\`\`json
{
  "plansDirectory": "./plans"
}
\`\`\`

## Permissions Settings

Manages permissions for commands that Claude Code can execute.

### Permissions Structure

\`\`\`json
{
  "permissions": {
    "defaultMode": "default",
    "allow": [],
    "ask": [],
    "deny": [],
    "additionalDirectories": [],
    "disableBypassPermissionsMode": "disable"
  }
}
\`\`\`

### defaultMode

Default permission mode when opening Claude Code.

| Value | Description |
|-------|-------------|
| \`"acceptEdits"\` | Automatically allow file edits |
| \`"allowEdits"\` | Allow file edits |
| \`"rejectEdits"\` | Reject file edits |
| \`"default"\` | Default behavior |

<Callout type="info">
**Note**: Current MoAI-ADK settings use \`"defaultMode": "default"\`. This may be a legacy value.
</Callout>

### allow (Auto-Allow)

List of commands that are **immediately allowed to execute** without user confirmation.

**Default Allowed Command Categories:**

| Category | Example Commands | Count |
|----------|------------------|-------|
| File Tools | \`Read\`, \`Write\`, \`Edit\`, \`Glob\`, \`Grep\` | 7 |
| Git Commands | \`git add\`, \`git commit\`, \`git diff\`, \`git log\`, etc. | 15+ |
| Package Managers | \`npm\`, \`pip\`, \`uv\`, \`npx\` | 4 |
| Build/Test | \`pytest\`, \`make\`, \`node\`, \`python\` | 10+ |
| Code Quality | \`ruff\`, \`black\`, \`prettier\`, \`eslint\` | 6+ |
| Exploration Tools | \`ls\`, \`find\`, \`tree\`, \`cat\`, \`head\` | 10+ |
| GitHub CLI | \`gh issue\`, \`gh pr\`, \`gh repo view\` | 3 |
| MCP Tools | \`mcp__context7__*\`, \`mcp__sequential-thinking__*\` | 3 |
| Other | \`AskUserQuestion\`, \`Task\`, \`Skill\`, \`TodoWrite\` | 4 |

**allow Format Examples:**

\`\`\`json
{
  "allow": [
    "Read",                          // Tool name only
    "Bash(git add:*)",               // Bash + command pattern
    "Bash(pytest:*)",                // Wildcard
    "mcp__context7__resolve-library-id",  // MCP tool
    "Bash(npm run *)",               // Space-separated (new format)
    "WebFetch(domain:example.com)"   // Domain pattern
  ]
}
\`\`\`

### ask (Confirm Before Execution)

List of commands that **request user confirmation before executing**.

\`\`\`json
{
  "ask": [
    "Bash(chmod:*)",       // Change file permissions
    "Bash(chown:*)",       // Change ownership
    "Bash(rm:*)",          // Delete files
    "Bash(sudo:*)",        // Admin privileges
    "Read(./.env)",        // Read env file
    "Read(./.env.*)"       // Read env files
  ]
}
\`\`\`

**ask Behavior:**
1. Claude Code attempts to execute the command
2. Prompts user "Run this command?"
3. Executes if approved, aborts if rejected

### deny (Always Block)

List of commands that are **never executed under any circumstances**.

**Blocked Categories:**

| Category | Blocked Patterns | Reason |
|----------|------------------|--------|
| Sensitive File Access | \`Read(./secrets/**)\`, \`Write(~/.ssh/**)\` | Protect security credentials |
| Cloud Credentials | \`Read(~/.aws/**)\`, \`Read(~/.config/gcloud/**)\` | Protect cloud accounts |
| System Destruction | \`Bash(rm -rf /:*)\`, \`Bash(rm -rf ~:*)\` | System protection |
| Dangerous Git | \`Bash(git push --force:*)\`, \`Bash(git reset --hard:*)\` | Code protection |
| Disk Format | \`Bash(dd:*)\`, \`Bash(mkfs:*)\`, \`Bash(fdisk:*)\` | Disk protection |
| System Commands | \`Bash(reboot:*)\`, \`Bash(shutdown:*)\` | System stability |
| DB Deletion | \`Bash(DROP DATABASE:*)\`, \`Bash(TRUNCATE:*)\` | Data protection |

**deny Format Examples:**

\`\`\`json
{
  "deny": [
    "Read(./secrets/**)",           // Block reading secrets dir
    "Write(~/.ssh/**)",             // Block modifying SSH keys
    "Bash(git push --force:*)",     // Block force push
    "Bash(rm -rf /:*)",            // Block root deletion
    "Bash(DROP DATABASE:*)"        // Block DB deletion
  ]
}
\`\`\`

### additionalDirectories

Additional working directories that Claude can access.

\`\`\`json
{
  "permissions": {
    "additionalDirectories": [
      "../docs/"
    ]
  }
}
\`\`\`

### disableBypassPermissionsMode

Prevents \`bypassPermissions\` mode from being enabled. Disables the \`--dangerously-skip-permissions\` command-line flag.

\`\`\`json
{
  "permissions": {
    "disableBypassPermissionsMode": "disable"
  }
}
\`\`\`

## Permission Rule Syntax

Permission rules follow the format \`Tool\` or \`Tool(specifier)\`.

### Rule Evaluation Order

When multiple rules match the same tool usage, rules are evaluated in this order:

1. **Deny** rules are checked first
2. **Ask** rules are checked second
3. **Allow** rules are checked last

The first matching rule determines the behavior. This means deny rules always take precedence over allow rules.

### Matching All Usages of a Tool

To match all usages of a tool, use the tool name without parentheses:

| Rule | Effect |
|------|--------|
| \`Bash\` | Matches **all** Bash commands |
| \`WebFetch\` | Matches **all** web fetch requests |
| \`Read\` | Matches **all** file reads |

\`Bash(*)\` is equivalent to \`Bash\` and matches all Bash commands. Both syntaxes can be used interchangeably.

### Using Specifiers for Fine Control

Add specifiers in parentheses to match specific tool usages:

| Rule | Effect |
|------|--------|
| \`Bash(npm run build)\` | Matches exact command \`npm run build\` |
| \`Read(./.env)\` | Matches reading \`.env\` file in current directory |
| \`WebFetch(domain:example.com)\` | Matches fetch requests for example.com |

### Wildcard Patterns

Bash rules support glob patterns with \`*\`. Wildcards can appear at the beginning, middle, or end of commands.

\`\`\`json
{
  "permissions": {
    "allow": [
      "Bash(npm run *)",
      "Bash(git commit *)",
      "Bash(git * main)",
      "Bash(* --version)",
      "Bash(* --help *)"
    ],
    "deny": [
      "Bash(git push *)"
    ]
  }
}
\`\`\`

**Important:** Space before \`*\` matters:
- \`Bash(ls *)\` matches \`ls -la\` but not \`lsof\`
- \`Bash(ls*)\` matches both

**Legacy Syntax:** The \`:*\` suffix syntax (e.g., \`Bash(npm run:*)\`) is equivalent to \`*\` but is deprecated.

### Domain-Specific Patterns

For tools like WebFetch, you can use domain-specific patterns:

\`\`\`json
{
  "permissions": {
    "allow": [
      "WebFetch(domain:docs.anthropic.com)",
      "WebFetch(domain:github.com)"
    ],
    "deny": [
      "WebFetch(domain:malicious-site.com)"
    ]
  }
}
\`\`\`

### Permission Priority Diagram

\`\`\`mermaid
flowchart TD
    CMD["Command execution attempt"] --> CHECK_DENY{deny list<br>check}

    CHECK_DENY -->|match| BLOCK["Blocked<br>never execute"]
    CHECK_DENY -->|no match| CHECK_ALLOW{allow list<br>check}

    CHECK_ALLOW -->|match| EXEC["Execute immediately"]
    CHECK_ALLOW -->|no match| CHECK_ASK{ask list<br>check}

    CHECK_ASK -->|match| ASK["Request user confirmation"]
    CHECK_ASK -->|no match| DEFAULT["Default behavior<br>(defaultMode)"]

    ASK -->|approve| EXEC
    ASK -->|reject| BLOCK
\`\`\`

**Priority:** \`deny\` > \`ask\` > \`allow\` > \`defaultMode\`

## Sandbox Settings

Configures advanced sandboxing behavior. Sandboxing isolates bash commands from the filesystem and network.

<Callout type="warning">
**Important:** Filesystem and network restrictions are configured through Read, Edit, WebFetch permission rules, not through sandbox settings.
</Callout>

\`\`\`json
{
  "sandbox": {
    "enabled": true,
    "autoAllowBashIfSandboxed": true,
    "excludedCommands": ["docker"],
    "allowUnsandboxedCommands": false,
    "network": {
      "allowUnixSockets": [
        "/var/run/docker.sock"
      ],
      "allowLocalBinding": true,
      "httpProxyPort": 8080,
      "socksProxyPort": 8081
    },
    "enableWeakerNestedSandbox": false
  }
}
\`\`\`

### Sandbox Settings Reference

| Key | Description | Example |
|-----|-------------|---------|
| \`enabled\` | Enable bash sandboxing (macOS, Linux, WSL2). Default: false | \`true\` |
| \`autoAllowBashIfSandboxed\` | Auto-approve sandboxed bash commands. Default: true | \`true\` |
| \`excludedCommands\` | Commands that must run outside the sandbox | \`["docker", "git"]\` |
| \`allowUnsandboxedCommands\` | Allow commands to run outside sandbox via \`dangerouslyDisableSandbox\` parameter. Default: true | \`false\` |
| \`network.allowUnixSockets\` | Unix socket paths accessible from sandbox (e.g., SSH agent) | \`["~/.ssh/agent-socket"]\` |
| \`network.allowLocalBinding\` | Allow binding to localhost ports (macOS only). Default: false | \`true\` |
| \`network.httpProxyPort\` | HTTP proxy port if you bring your own proxy | \`8080\` |
| \`network.socksProxyPort\` | SOCKS5 proxy port if you bring your own proxy | \`8081\` |
| \`enableWeakerNestedSandbox\` | Enable weaker sandbox for unprivileged Docker environments (Linux, WSL2 only). **Reduces security**. Default: false | \`true\` |

## Attribution Settings

Claude Code adds attribution to git commits and pull requests. These are configured separately.

\`\`\`json
{
  "attribution": {
    "commit": "Custom attribution text\\n\\nCo-Authored-By: AI <email@example.com>",
    "pr": ""
  }
}
\`\`\`

### Attribution Settings Reference

| Key | Description |
|-----|-------------|
| \`commit\` | Attribution for git commits (including trailers). Empty string hides commit attribution |
| \`pr\` | Attribution for pull request descriptions. Empty string hides PR attribution |

### Default Commit Attribution

\`\`\`
🤖 Generated with [Claude Code](https://claude.com/claude-code)

Co-Authored-By: Claude Sonnet 4.5 <noreply@anthropic.com>
\`\`\`

### Default PR Attribution

\`\`\`
🤖 Generated with [Claude Code](https://claude.com/claude-code)
\`\`\`

## Hooks Settings

Registers scripts that react to Claude Code events.

\`\`\`json
{
  "hooks": {
    "SessionStart": [
      {
        "matcher": "",
        "hooks": [
          {
            "type": "command",
            "command": "script path"
          }
        ]
      }
    ],
    "PreToolUse": [
      {
        "matcher": "Write|Edit",
        "hooks": [
          {
            "type": "command",
            "command": "security guard script path",
            "timeout": 5000
          }
        ]
      }
    ],
    "PostToolUse": [
      {
        "matcher": "Write|Edit",
        "hooks": [
          {
            "type": "command",
            "command": "formatter script path",
            "timeout": 30000
          },
          {
            "type": "command",
            "command": "linter script path",
            "timeout": 60000
          }
        ]
      }
    ]
  }
}
\`\`\`

### Hook Event Types

| Event | Description |
|-------|-------------|
| \`SessionStart\` | Run on session start |
| \`SessionEnd\` | Run on session end |
| \`PreToolUse\` | Run before tool use |
| \`PostToolUse\` | Run after tool use |
| \`PreCompact\` | Run before context compacting |

<Callout type="info">
See [Hooks Guide](/advanced/hooks-guide) for detailed hook configuration.
</Callout>

## Plugin Settings

Plugin-related settings.

\`\`\`json
{
  "enabledPlugins": {
    "formatter@acme-tools": true,
    "deployer@acme-tools": true,
    "analyzer@security-plugins": false
  },
  "extraKnownMarketplaces": {
    "acme-tools": {
      "source": {
        "source": "github",
        "repo": "acme-corp/claude-plugins"
      }
    }
  }
}
\`\`\`

### enabledPlugins

Controls which plugins are enabled. Format: \`"plugin-name@marketplace-name": true/false\`

**Scopes:**
- **User settings** (\`~/.claude/settings.json\`): Personal plugin preferences
- **Project settings** (\`.claude/settings.json\`): Project-specific plugins shared with team
- **Local settings** (\`.claude/settings.local.json\`): Machine-specific overrides (not committed)

### extraKnownMarketplaces

Defines additional marketplaces to make available in the repository. Typically used in repository-level settings to ensure team members have access to required plugin sources.

## MCP Settings

Settings for MCP (Model Context Protocol) servers.

\`\`\`json
{
  "enableAllProjectMcpServers": true,
  "enabledMcpjsonServers": ["memory", "github"],
  "disabledMcpjsonServers": ["filesystem"]
}
\`\`\`

### MCP Settings Reference

| Key | Description | Example |
|-----|-------------|---------|
| \`enableAllProjectMcpServers\` | Auto-approve all MCP servers defined in project \`.mcp.json\` file | \`true\` |
| \`enabledMcpjsonServers\` | List of specific MCP servers to approve | \`["memory", "github"]\` |
| \`disabledMcpjsonServers\` | List of specific MCP servers to deny | \`["filesystem"]\` |
| \`allowedMcpServers\` | Used only in managed-settings.json. MCP server allowlist | \`[{ "serverName": "github" }]\` |
| \`deniedMcpServers\` | Used only in managed-settings.json. MCP server blocklist (takes precedence) | \`[{ "serverName": "filesystem" }]\` |

## File Suggestion Settings

Configures custom commands for \`@\` file path autocompletion.

\`\`\`json
{
  "fileSuggestion": {
    "type": "command",
    "command": "~/.claude/file-suggestion.sh"
  }
}
\`\`\`

Built-in file suggestions use fast filesystem traversal, but large monorepos may benefit from project-specific indexing (e.g., pre-built file indices or custom tools).

## Extended Thinking Settings

Settings for Extended Thinking.

\`\`\`json
{
  "alwaysThinkingEnabled": true,
  "maxThinkingTokens": 10000
}
\`\`\`

### Extended Thinking Settings Reference

| Key | Description | Example |
|-----|-------------|---------|
| \`alwaysThinkingEnabled\` | Enable extended thinking by default in all sessions | \`true\` |
| \`maxThinkingTokens\` | Override thinking token budget (default: 31999, 0 = disabled) | \`10000\` |

Can also be set via environment variables:
- \`MAX_THINKING_TOKENS=10000\`: Thinking token limit
- \`MAX_THINKING_TOKENS=0\`: Disable thinking

## Company Announcements

Announcements to display to users on startup. When multiple announcements are provided, they rotate randomly.

\`\`\`json
{
  "companyAnnouncements": [
    "Welcome to Acme Corp! Review our code guidelines at docs.acme.com",
    "Reminder: Code reviews required for all PRs",
    "New security policy in effect"
  ]
}
\`\`\`

## Status Line Settings

Configures the status line displayed at the bottom of Claude Code.

\`\`\`json
{
  "statusLine": {
    "type": "command",
    "command": "\${SHELL:-/bin/bash} -l -c 'uv run --no-sync moai-adk statusline'",
    "padding": 0,
    "refreshInterval": 300
  }
}
\`\`\`

| Field | Description |
|-------|-------------|
| \`type\` | \`"command"\` (execute command) |
| \`command\` | Command to run (returns status information) |
| \`padding\` | Padding size |
| \`refreshInterval\` | Refresh interval (milliseconds) |

## Output Style Settings

\`\`\`json
{
  "outputStyle": "R2-D2"
}
\`\`\`

Output style determines Claude Code's response format. Change to your preferred style in \`settings.local.json\`.

## Environment Variables Settings

Set environment variables that control Claude Code's behavior in the \`env\` section.

### MoAI-ADK Environment Variables

<Callout type="info">
**MoAI-ADK Extension**: These settings are specific to MoAI-ADK and not part of official Claude Code.
</Callout>

\`\`\`json
{
  "env": {
    "MOAI_CONFIG_SOURCE": "sections"
  }
}
\`\`\`

| Variable | Value | Description |
|----------|-------|-------------|
| \`MOAI_CONFIG_SOURCE\` | \`"sections"\` | MoAI configuration source mode |

### Official Claude Code Environment Variables

\`\`\`json
{
  "env": {
    "ENABLE_TOOL_SEARCH": "auto:5",
    "MAX_THINKING_TOKENS": "31999",
    "CLAUDE_CODE_FILE_READ_MAX_OUTPUT_TOKENS": "64000",
    "CLAUDE_CODE_MAX_OUTPUT_TOKENS": "32000",
    "CLAUDE_AUTOCOMPACT_PCT_OVERRIDE": "50"
  }
}
\`\`\`

### Key Environment Variables Reference

| Variable | Value | Description |
|----------|-------|-------------|
| \`ENABLE_TOOL_SEARCH\` | \`"auto"\`, \`"auto:N"\`, \`"true"\`, \`"false"\` | Control MCP tool search |
| \`MAX_THINKING_TOKENS\` | \`0\`-\`31999\` | Thinking token limit (0=disabled) |
| \`CLAUDE_CODE_MAX_OUTPUT_TOKENS\` | \`1\`-\`64000\` | Maximum output tokens (default: 32000) |
| \`CLAUDE_CODE_FILE_READ_MAX_OUTPUT_TOKENS\` | number | File read max output tokens |
| \`CLAUDE_AUTOCOMPACT_PCT_OVERRIDE\` | \`1\`-\`100\` | Auto-compact trigger percentage (default: ~95%) |
| \`CLAUDE_CODE_ENABLE_TELEMETRY\` | \`"1"\` | Enable OpenTelemetry data collection |
| \`CLAUDE_CODE_DISABLE_BACKGROUND_TASKS\` | \`"1"\` | Disable background tasks |
| \`DISABLE_AUTOUPDATER\` | \`"1"\` | Disable auto-updater |
| \`HTTP_PROXY\` | URL | HTTP proxy server |
| \`HTTPS_PROXY\` | URL | HTTPS proxy server |

<Callout type="tip">
**Tip**: \`ENABLE_TOOL_SEARCH\` value \`"auto:5"\` enables tool search when context usage is at 5%. \`"auto"\` defaults to 10%, \`"true"\` is always on, \`"false"\` is always off.
</Callout>

### Tool Search Details

\`ENABLE_TOOL_SEARCH\` controls MCP tool search:

| Value | Description |
|-------|-------------|
| \`"auto"\` (default) | Enable at 10% context |
| \`"auto:N"\` | Custom threshold (e.g., \`"auto:5"\` is 5%) |
| \`"true"\` | Always enabled |
| \`"false"\` | Disabled |

## settings.json vs settings.local.json

| Item | settings.json | settings.local.json |
|------|---------------|---------------------|
| Managed by | MoAI-ADK | User |
| Git tracked | Tracked | .gitignore |
| On update | Overwritten | Preserved |
| Purpose | Team shared settings | Personal settings |
| Priority | Default | Override (takes precedence) |

### settings.local.json Usage Example

\`\`\`json
{
  "permissions": {
    "allow": [
      "Bash(bun:*)",     // Personal tools
      "Bash(bun add:*)"
    ]
  },
  "enabledMcpjsonServers": [
    "context7"          // Personally enabled MCP server
  ],
  "outputStyle": "Mr.Alfred"  // Personal preferred output style
}
\`\`\`

<Callout type="info">
Settings in \`settings.local.json\` are **merged** with \`settings.json\`. When the same key exists, \`settings.local.json\` takes precedence.
</Callout>

## MoAI-Specific Settings

<Callout type="info">
**MoAI-ADK Extension**: Settings in this section are specific to MoAI-ADK and not included in official Claude Code documentation.
</Callout>

### MoAI Custom statusLine

MoAI-ADK provides a custom status line:

\`\`\`json
{
  "statusLine": {
    "type": "command",
    "command": "\${SHELL:-/bin/bash} -l -c 'uv run --no-sync moai-adk statusline'",
    "padding": 0,
    "refreshInterval": 300
  }
}
\`\`\`

### MoAI Custom Hooks

MoAI-ADK provides the following custom hooks:

\`\`\`json
{
  "hooks": {
    "SessionStart": [
      {
        "matcher": "",
        "hooks": [
          {
            "type": "command",
            "command": "/bin/zsh -l -c 'uv run \\"$CLAUDE_PROJECT_DIR/.claude/hooks/moai/session_start__show_project_info.py\\"'"
          }
        ]
      }
    ],
    "PreCompact": [
      {
        "matcher": "",
        "hooks": [
          {
            "type": "command",
            "command": "/bin/zsh -l -c 'uv run \\"$CLAUDE_PROJECT_DIR/.claude/hooks/moai/pre_compact__save_context.py\\"'",
            "timeout": 5000
          }
        ]
      }
    ],
    "SessionEnd": [
      {
        "matcher": "",
        "hooks": [
          {
            "type": "command",
            "command": "/bin/zsh -l -c 'uv run \\"$CLAUDE_PROJECT_DIR/.claude/hooks/moai/session_end__auto_cleanup.py\\" &'"
          }
        ]
      }
    ],
    "PreToolUse": [
      {
        "matcher": "Write|Edit",
        "hooks": [
          {
            "type": "command",
            "command": "/bin/zsh -l -c 'uv run \\"$CLAUDE_PROJECT_DIR/.claude/hooks/moai/pre_tool__security_guard.py\\"'",
            "timeout": 5000
          }
        ]
      }
    ],
    "PostToolUse": [
      {
        "matcher": "Write|Edit",
        "hooks": [
          {
            "type": "command",
            "command": "/bin/zsh -l -c 'uv run \\"$CLAUDE_PROJECT_DIR/.claude/hooks/moai/post_tool__code_formatter.py\\"'",
            "timeout": 30000
          },
          {
            "type": "command",
            "command": "/bin/zsh -l -c 'uv run \\"$CLAUDE_PROJECT_DIR/.claude/hooks/moai/post_tool__linter.py\\"'",
            "timeout": 60000
          },
          {
            "type": "command",
            "command": "/bin/zsh -l -c 'uv run \\"$CLAUDE_PROJECT_DIR/.claude/hooks/moai/post_tool__ast_grep_scan.py\\"'",
            "timeout": 30000
          }
        ]
      }
    ]
  }
}
\`\`\`

### MoAI Output Style

\`\`\`json
{
  "outputStyle": "Mr.Alfred"
}
\`\`\`

This style provides Alfred AI orchestrator's unique response format.

## Practical Examples: Customizing Settings

### Adding New Tool Allow

If your project uses \`bun\`, add it to \`settings.local.json\`.

\`\`\`json
{
  "permissions": {
    "allow": [
      "Bash(bun:*)",
      "Bash(bun add:*)",
      "Bash(bun remove:*)",
      "Bash(bun run:*)"
    ]
  }
}
\`\`\`

### Enabling MCP Server

Enable the Context7 MCP server.

\`\`\`json
{
  "enabledMcpjsonServers": [
    "context7"
  ]
}
\`\`\`

### Enabling Sandbox

Enable sandbox for security and exclude Docker.

\`\`\`json
{
  "sandbox": {
    "enabled": true,
    "autoAllowBashIfSandboxed": true,
    "excludedCommands": ["docker"],
    "network": {
      "allowUnixSockets": [
        "/var/run/docker.sock"
      ]
    }
  },
  "permissions": {
    "deny": [
      "Read(.envrc)",
      "Read(~/.aws/**)"
    ]
  }
}
\`\`\`

### Adding Custom Hook

Register a personal hook.

\`\`\`json
{
  "hooks": {
    "PostToolUse": [
      {
        "matcher": "Write|Edit",
        "hooks": [
          {
            "type": "command",
            "command": "python3 .claude/hooks/my-hooks/custom_check.py",
            "timeout": 10000
          }
        ]
      }
    ]
  }
}
\`\`\`

### Customizing Attribution

\`\`\`json
{
  "attribution": {
    "commit": "Generated with AI\\n\\nCo-Authored-By: AI <email@example.com>",
    "pr": ""
  }
}
\`\`\`

## Related Documentation

- [Claude Code Official Settings Documentation](https://code.claude.com/docs/en/settings) - Official Claude Code settings
- [Hooks Guide](/advanced/hooks-guide) - Detailed hook configuration
- [CLAUDE.md Guide](/advanced/claude-md-guide) - Project instructions configuration
- [MCP Server Usage](/advanced/mcp-servers) - MCP server setup guide
- [IAM Documentation](https://code.claude.com/docs/en/iam) - Permissions system overview

<Callout type="tip">
**Tip**: After changing settings, restart Claude Code for changes to take effect. \`settings.local.json\` is not tracked by Git, so feel free to modify it for your personal environment.
</Callout>
`,

  '/docs/advanced/mcp-servers': `
import { Callout } from 'nextra/components'

# MCP Servers Guide

Detailed guide to leveraging Claude Code's MCP (Model Context Protocol) servers.

<Callout type="tip">
**One-line summary**: MCP is the **USB port that connects external tools** to Claude Code. Query up-to-date documentation with Context7, analyze complex problems with Sequential Thinking.
</Callout>

## What is MCP?

MCP (Model Context Protocol) is a standard protocol that **connects external tools and services** to Claude Code.

Claude Code has basic tools like file read/write and terminal commands. Through MCP, you can extend this toolset to add features like library documentation lookup, knowledge graph storage, step-by-step reasoning, and more.

\`\`\`mermaid
flowchart TD
    CC["Claude Code"] --> MCP_LAYER["MCP Protocol Layer"]

    MCP_LAYER --> C7["Context7<br>Library Documentation Lookup"]
    MCP_LAYER --> ST["Sequential Thinking<br>Step-by-step Reasoning"]
    MCP_LAYER --> STITCH["Google Stitch<br>UI/UX Design"]
    MCP_LAYER --> CHROME["Claude in Chrome<br>Browser Automation"]

    C7 --> C7_OUT["Latest React, FastAPI<br>Official Documentation"]
    ST --> ST_OUT["Architecture Decisions<br>Complex Analysis"]
    STITCH --> STITCH_OUT["AI-powered<br>UI Design Generation"]
    CHROME --> CHROME_OUT["Web Page<br>Automation Testing"]
\`\`\`

## MCP Servers Used in MoAI

### MCP Server List

| MCP Server | Purpose | Tools | Activation |
|------------|---------|-------|------------|
| **Context7** | Real-time library documentation lookup | \`resolve-library-id\`, \`get-library-docs\` | \`.mcp.json\` |
| **Sequential Thinking** | Step-by-step reasoning, UltraThink | \`sequentialthinking\` | \`.mcp.json\` |
| **Google Stitch** | AI-powered UI/UX design generation ([Detailed Guide](/advanced/stitch-guide)) | \`generate_screen\`, \`extract_context\` etc. | \`.mcp.json\` |
| **Claude in Chrome** | Browser automation | \`navigate\`, \`screenshot\` etc. | \`.mcp.json\` |

## Using Context7

Context7 is an MCP server that **queries library official documentation in real-time**.

### Why is it Needed?

Claude Code's training data only includes information up to a certain point. With Context7, you can reference **the latest version of official documentation** in real-time to generate accurate code.

| Situation | Without Context7 | With Context7 |
|-----------|-----------------|---------------|
| React 19 new features | May not be in training data | Reference latest official docs |
| Next.js 16 setup | May use old version patterns | Apply current version patterns |
| FastAPI latest APIs | May use old syntax | Apply latest syntax |

### How to Use

Context7 operates in two stages.

**Stage 1: Query Library ID**

\`\`\`bash
# Claude Code calls internally
> Write code referencing React's latest documentation

# What Context7 does:
# mcp__context7__resolve-library-id("react")
# → Library ID: /facebook/react
\`\`\`

**Stage 2: Search Documentation**

\`\`\`bash
# Search docs for specific topic
# mcp__context7__get-library-docs("/facebook/react", "useEffect cleanup")
# → Returns useEffect cleanup function related content from React official docs
\`\`\`

### Real-World Use Cases

\`\`\`bash
# Scenario: Next.js 16 App Router setup
> Set up project with Next.js 16

# Claude Code internal operation:
# 1. Query Next.js latest docs with Context7
# 2. Check App Router setup patterns
# 3. Generate latest config files
# 4. Apply official recommendations
\`\`\`

### Supported Library Examples

| Category | Libraries |
|----------|-----------|
| Frontend | React, Next.js, Vue, Svelte, Angular |
| Backend | FastAPI, Django, Express, NestJS, Spring |
| Database | PostgreSQL, MongoDB, Redis, Prisma |
| Testing | pytest, Jest, Vitest, Playwright |
| Infrastructure | Docker, Kubernetes, Terraform |
| Other | TypeScript, Tailwind CSS, shadcn/ui |

## Sequential Thinking (UltraThink)

Sequential Thinking is an MCP server that **analyzes complex problems step-by-step**.

### Normal Thinking vs Sequential Thinking

| Aspect | Normal Thinking | Sequential Thinking |
|--------|----------------|---------------------|
| Analysis Depth | Surface | Deep step-by-step analysis |
| Problem Decomposition | Simple | Structured decomposition |
| Revision/Correction | Limited | Can revise previous thoughts |
| Branch Exploration | Single path | Explore multiple paths |

### UltraThink Mode

Using the \`--ultrathink\` flag activates enhanced analysis mode.

\`\`\`bash
# Architecture analysis with UltraThink mode
> Design an authentication system architecture --ultrathink

# Claude Code uses Sequential Thinking MCP to:
# 1. Decompose problem into sub-problems
# 2. Analyze each sub-problem step-by-step
# 3. Review and revise previous conclusions
# 4. Derive optimal solution
\`\`\`

### Activation Scenarios

Sequential Thinking automatically activates in the following scenarios:

| Scenario | Example |
|----------|---------|
| Complex problem decomposition | "Design a microservices architecture" |
| Affecting 3+ files | "Refactor the entire authentication system" |
| Technology selection comparison | "JWT vs session authentication, which is better?" |
| Trade-off analysis | "How to maintain performance while improving maintainability?" |
| Breaking change review | "What impact will this API change have on existing clients?" |

### Sequential Thinking Stages

\`\`\`mermaid
flowchart TD
    Q["Complex Question"] --> T1["Thought 1: Problem Decomposition"]
    T1 --> T2["Thought 2: Analyze Each Part"]
    T2 --> T3["Thought 3: Compare Options"]
    T3 --> REV{"Need Review?"}

    REV -->|Yes| T2_REV["Thought 2 Revise:<br>Complement Previous Analysis"]
    REV -->|No| T4["Thought 4: Derive Conclusion"]

    T2_REV --> T3
    T4 --> T5["Thought 5: Verification"]
    T5 --> ANSWER["Final Answer"]
\`\`\`

## MCP Configuration

### .mcp.json Configuration

Configure MCP servers in the \`.mcp.json\` file at the project root.

\`\`\`json
{
  "context7": {
    "command": "npx",
    "args": ["-y", "@anthropic/context7-mcp-server"]
  },
  "sequential-thinking": {
    "command": "npx",
    "args": ["-y", "@anthropic/sequential-thinking-mcp-server"]
  }
}
\`\`\`

### Activation in settings.local.json

To personally enable a specific MCP server, add it to \`settings.local.json\`.

\`\`\`json
{
  "enabledMcpjsonServers": [
    "context7"
  ]
}
\`\`\`

### Permission Allow in settings.json

To use MCP tools, you must register them in \`permissions.allow\`.

\`\`\`json
{
  "permissions": {
    "allow": [
      "mcp__context7__resolve-library-id",
      "mcp__context7__get-library-docs",
      "mcp__sequential-thinking__*"
    ]
  }
}
\`\`\`

## Real-World Examples

### Using Context7 for Latest React Documentation

\`\`\`bash
# 1. User requests to use React 19's new features
> Implement data fetching using React 19's use() hook

# 2. Claude Code internal operation
# a) Query React library ID with Context7
#    → resolve-library-id("react") → "/facebook/react"
#
# b) Search React 19 use() related documentation
#    → get-library-docs("/facebook/react", "use hook data fetching")
#
# c) Generate code based on latest official documentation
#    → Apply correct use() hook usage
#    → Use with Suspense boundary
#    → Include error boundary handling

# 3. Result: Accurate code generation reflecting latest patterns
\`\`\`

### Using UltraThink for Complex Architecture Decisions

\`\`\`bash
# Architecture decision needed
> Analyze whether to use JWT or session for our service authentication --ultrathink

# Steps Sequential Thinking performs:
# Thought 1: Basic concepts of both approaches
# Thought 2: Analyze our service characteristics (SPA, mobile app support needed)
# Thought 3: JWT pros and cons analysis
# Thought 4: Session pros and cons analysis
# Thought 5: Security perspective comparison
# Thought 6: Scalability perspective comparison
# Thought 7: Revise previous thought - review hybrid approach
# Thought 8: Final conclusion and implementation strategy
\`\`\`

## Related Documentation

- [settings.json Guide](/advanced/settings-json) - MCP server permission configuration
- [Skill Guide](/advanced/skill-guide) - Relationship between skills and MCP tools
- [Agent Guide](/advanced/agent-guide) - MCP tool utilization by agents
- [CLAUDE.md Guide](/advanced/claude-md-guide) - MCP-related configuration references
- [Google Stitch Guide](/advanced/stitch-guide) - AI-powered UI/UX design tool detailed usage

<Callout type="tip">
**Tip**: Context7 is most useful when referencing the latest library documentation. Activate Context7 when adopting new frameworks or upgrading to the latest version to get accurate code.
</Callout>
`,

  '/docs/advanced/stitch-guide': `
import { Callout } from 'nextra/components'

# Google Stitch Guide

Detailed guide to generating AI-powered UI/UX designs using the Google Stitch MCP server.

<Callout type="tip">
**One-line summary**: Google Stitch is an **AI design tool that generates UI screens from text descriptions**. Through the MCP server, you can directly generate UI in Claude Code, extract design context, and export to production code.
</Callout>

## What is Google Stitch?

Google Stitch is an AI-powered UI/UX design generation tool developed by Google Labs. It uses the Gemini AI model to transform natural language descriptions into professional-grade UI screens.

Even in development environments without designers, you can quickly prototype UIs while maintaining a consistent design system.

\`\`\`mermaid
flowchart TD
    A["Text Description Input"] --> B["Google Stitch AI<br>Gemini Model Based"]
    B --> C["UI Design Generation"]
    C --> D["Export Code<br>HTML/CSS/JS"]
    C --> E["Export Image<br>High-res PNG"]
    C --> F["Extract Design DNA<br>Colors, Fonts, Layout"]
\`\`\`

### Key Features

| Feature | Description |
|---------|-------------|
| **AI Design Generation** | Generate complete UI screens from text prompts |
| **Design DNA Extraction** | Extract colors, fonts, layout patterns from existing screens |
| **Code Export** | Generate production-ready HTML/CSS/JavaScript code |
| **Image Export** | Download high-resolution PNG screenshots |
| **Project Management** | Organize and manage screens as projects |
| **Figma Integration** | Copy generated designs to Figma |

<Callout type="info">
Google Stitch is available **for free**. Standard Mode allows 350 generations per month, Experimental Mode allows 50 generations per month. Only requires a Google account.
</Callout>

## Prerequisites

To use the Google Stitch MCP, you need the following 4-step setup.

### Step 1: Create Google Cloud Project

Create a new project in Google Cloud Console or select an existing one.

\`\`\`bash
# If you don't have gcloud CLI, install it first
# https://cloud.google.com/sdk/docs/install

# Google Cloud authentication
gcloud auth login

# Set project (if using existing project)
gcloud config set project YOUR_PROJECT_ID
\`\`\`

### Step 2: Enable Stitch API

\`\`\`bash
# Install beta component (first time only)
gcloud components install beta

# Enable Stitch API
gcloud beta services mcp enable stitch.googleapis.com --project=YOUR_PROJECT_ID
\`\`\`

### Step 3: Configure Application Default Credentials

\`\`\`bash
# Application default credentials login
gcloud auth application-default login

# Set quota project
gcloud auth application-default set-quota-project YOUR_PROJECT_ID
\`\`\`

### Step 4: Set Environment Variable

\`\`\`bash
# Add to .bashrc or .zshrc
export GOOGLE_CLOUD_PROJECT="YOUR_PROJECT_ID"
\`\`\`

<Callout type="warning">
**Google Cloud project must have billing enabled**. Stitch itself is free, but requires a project with billing configured for API calls. The project must also have the \`roles/serviceusage.serviceUsageConsumer\` IAM role assigned.
</Callout>

## MCP Configuration

### .mcp.json Configuration

Add the Stitch MCP server to the \`.mcp.json\` file at the project root.

\`\`\`json
{
  "mcpServers": {
    "stitch": {
      "command": "\${SHELL:-/bin/bash}",
      "args": ["-l", "-c", "exec npx -y stitch-mcp"],
      "env": {
        "GOOGLE_CLOUD_PROJECT": "YOUR_PROJECT_ID"
      }
    }
  }
}
\`\`\`

Replace \`YOUR_PROJECT_ID\` with your actual Google Cloud project ID.

### settings.json Permission Configuration

To use MCP tools, you must register them in \`permissions.allow\`.

\`\`\`json
{
  "permissions": {
    "allow": [
      "mcp__stitch__*"
    ]
  }
}
\`\`\`

### Activation in settings.local.json

Enable Stitch MCP in your personal environment.

\`\`\`json
{
  "enabledMcpjsonServers": ["stitch"]
}
\`\`\`

### Verify Connection

After configuration is complete, verify the connection by querying the project list in Claude Code.

\`\`\`bash
# Run in Claude Code
> Show me the Stitch project list
\`\`\`

## MCP Tool List

Stitch MCP provides 9 tools.

### Complete Tool List

| Tool | Purpose |
|------|---------|
| \`create_project\` | Create new Stitch project (workspace) |
| \`get_project\` | Query project metadata details |
| \`list_projects\` | List all accessible projects |
| \`list_screens\` | List all screens in a project |
| \`get_screen\` | Query individual screen metadata |
| \`generate_screen_from_text\` | Generate new UI screen from text prompt |
| \`fetch_screen_code\` | Download screen's HTML/CSS/JS code |
| \`fetch_screen_image\` | Download screen's high-res screenshot |
| \`extract_design_context\` | Extract screen's design DNA (colors, fonts, layout) |

### Tool Selection Guide

| Purpose | Tool to Use |
|---------|-------------|
| Want to create new design | \`generate_screen_from_text\` |
| Want to analyze existing design | \`extract_design_context\` |
| Want to export design as code | \`fetch_screen_code\` |
| Need design image | \`fetch_screen_image\` |
| Want to manage multiple designs as projects | \`create_project\`, \`list_projects\` |

## Designer Flow Workflow

The biggest problem when generating multiple screens with AI agents is **design consistency**. When each screen is generated independently, fonts, colors, and layouts become inconsistent.

**Designer Flow** is a 3-phase pattern that solves this problem.

\`\`\`mermaid
flowchart TD
    subgraph P1["Phase 1: Extract Design Context"]
        EC["extract_design_context<br>Extract design DNA from existing screen"]
    end

    subgraph P2["Phase 2: Generate New Screen"]
        GS["generate_screen_from_text<br>Generate with extracted context"]
    end

    subgraph P3["Phase 3: Export Results"]
        FC["fetch_screen_code<br>HTML/CSS/JS code"]
        FI["fetch_screen_image<br>High-res PNG"]
    end

    P1 --> P2
    P2 --> P3
\`\`\`

### Real-World Example: E-Commerce App

\`\`\`bash
# Phase 1: Extract design context from existing home screen
> Extract the design context from the home screen
# → extract_design_context(screen_id="home-screen-001")
# → Extract color palette, fonts, spacing patterns

# Phase 2: Generate product listing screen with extracted context
> Generate a product listing page. 3-column grid, left filter sidebar,
#   each card includes image/title/price/cart button
# → generate_screen_from_text(prompt=..., design_context=extracted context)

# Phase 3: Export code and images
> Export the code and images for the generated screen
# → fetch_screen_code(screen_id="product-listing-001")
# → fetch_screen_image(screen_id="product-listing-001")
\`\`\`

<Callout type="tip">
**Key**: Before generating any new screen, **always** run \`extract_design_context\` on an existing screen. This maintains consistent design across the entire project.
</Callout>

## Prompt Writing Guide

To get good results with Stitch, structured prompts are important.

### 5-Part Prompt Structure

| Order | Element | Description | Example |
|-------|---------|-------------|---------|
| 1 | **Context** | Screen purpose and target users | "E-commerce product listing page" |
| 2 | **Design** | Overall visual style | "Minimalist modern, light background" |
| 3 | **Components** | Complete list of all UI elements needed | "Header, search, filter, card grid" |
| 4 | **Layout** | How components are arranged | "3-column grid, left filter sidebar" |
| 5 | **Style** | Colors, fonts, visual attributes | "Blue primary, Inter font" |

### Good Prompts vs Bad Prompts

| Bad Prompt | Good Prompt |
|------------|-------------|
| "Create a cool login page" | "Login screen: email/password inputs, login button (blue primary), social login (Google, Apple), forgot password link. Center card layout, mobile vertical stack" |
| "Create a dashboard" | "Analytics dashboard: top 3 metric cards (revenue, users, conversion), line chart below, bottom recent transactions table. Sidebar navigation. Mobile: hide sidebar, vertical card layout" |
| "375px width button" | "Mobile full-width button, large touch area" |

### Effective Prompt Templates

\`\`\`
Create a [Screen Type]. Include [Component List].
Arrange with [Layout Type] and apply [Content Hierarchy].
Include [Interactive Elements] and [Responsive Behavior].
Apply [Design Style/Context].
\`\`\`

<Callout type="info">
**Golden Rule**: Request **one screen per prompt** and **one or two adjustments** only. Keep prompts **under 500 characters**. For complex screens, start with basic layout and iteratively improve.
</Callout>

## Best Practices

| Principle | Description |
|-----------|-------------|
| **Consistency First** | Always run \`extract_design_context\` before generating new screens to maintain design consistency |
| **Incremental Approach** | Start with basic layout, then add interactions and details with follow-up prompts |
| **Include Accessibility** | Always specify ARIA labels, keyboard navigation, focus indicators |
| **Specify Responsive** | Always include mobile and desktop behavior in prompts |
| **Semantic HTML** | Request semantic elements like header, main, section, nav, footer |
| **Organize Projects** | Group related screens in the same project for management |

### Incremental Improvement Strategy

Complex screens yield better quality when generated in multiple iterations.

\`\`\`mermaid
flowchart TD
    I1["Iteration 1<br>Basic layout with core components"] --> I2["Iteration 2<br>Add interactive elements<br>hover, focus, active states"]
    I2 --> I3["Iteration 3<br>Improve spacing and alignment"]
    I3 --> I4["Iteration 4<br>Add polish<br>animations, transitions"]
\`\`\`

## Anti-Patterns to Avoid

<Callout type="warning">
Avoid these patterns for better results:

- **Over-specification**: Instead of pixel-specific values like "375px width", "48px height button", use relative terms like "mobile width", "large touch area"
- **Vague prompts**: Instead of "cool login page", explicitly specify component list, layout, and content hierarchy
- **Ignoring design context**: If existing screens exist, always extract with \`extract_design_context\` first, then pass along
- **Mixed concerns**: Don't mix layout changes and component additions in one prompt like "add sidebar and also fix header"
- **Long prompts**: Over 500 characters produces unstable results. Include only key elements and improve incrementally
- **Unspecified responsive**: Stitch doesn't auto-optimize for mobile. Always specify mobile/desktop behavior
</Callout>

## Troubleshooting

| Problem | Cause | Solution |
|---------|-------|----------|
| Authentication error | Incomplete ADC setup | Re-run \`gcloud auth application-default login\` |
| API disabled | Stitch API inactive | Run \`gcloud beta services mcp enable stitch.googleapis.com\` |
| Permission denied | IAM role not assigned | Verify project has Owner or Editor role, check billing enabled |
| Quota exceeded | Daily/monthly usage limit | Wait for quota reset (Standard: 350/month, Experimental: 50/month) |
| Poor generation quality | Vague prompt | Add component list, layout type, content hierarchy |
| Inconsistency | design_context not used | Run \`extract_design_context\` on existing screen first |

### Authentication Troubleshooting

\`\`\`bash
# 1. Re-authenticate
gcloud auth application-default login

# 2. Check API enabled
gcloud services list --enabled | grep stitch

# 3. Verify project ID
echo $GOOGLE_CLOUD_PROJECT

# 4. Enable API (if inactive)
gcloud beta services mcp enable stitch.googleapis.com --project=YOUR_PROJECT_ID
\`\`\`

## Related Documentation

- [MCP Servers Guide](/advanced/mcp-servers) - MCP protocol overview and other MCP servers
- [settings.json Guide](/advanced/settings-json) - MCP server permission configuration
- [Skill Guide](/advanced/skill-guide) - Using moai-platform-stitch skill
- [Agent Guide](/advanced/agent-guide) - Integration with agent system

<Callout type="tip">
**Tip**: The key to maximizing Google Stitch is the **Designer Flow pattern**. Extract design context from existing screens before generating new ones to maintain consistent design across the project.
</Callout>
`,

  '/docs/moai-rank/index': `
# MoAI-ADK Documentation

MoAI-ADK (Agentic Development Kit) is a strategic orchestration framework for Claude Code.

![MoAI-ADK](/og.png)

## Key Features

- **Alfred Orchestrator**: Task delegation through specialized agents
- **SPEC-First DDD**: Specification-driven domain-driven development workflow
- **TRUST 5 Framework**: 5 core principles for quality assurance
- **Progressive Disclosure**: Tiered disclosure system for token efficiency

## Getting Started

To start with MoAI-ADK, see the [Getting Started](/getting-started) section.

## Documentation Structure

- [Getting Started](/getting-started) - Installation, basic setup, quick start
- [Core Concepts](/core-concepts) - SPEC format, agents, workflows
- [Advanced](/advanced) - Advanced patterns, skill usage, performance optimization
- [Git Worktree](/worktree) - Complete Git Worktree CLI guide
`,

  '/docs/moai-rank/dashboard': `
# Web Dashboard

MoAI Rank web dashboard visualizes and displays your token usage, activity patterns, and coding style.

## Access Dashboard

**[https://rank.mo.ai.kr](https://rank.mo.ai.kr)**

After logging in with GitHub OAuth, you can view your dashboard.

## Dashboard Features

### 1. Token Usage Tracking

Track token usage in real-time:

- Input vs output token ratio
- Cache token savings
- Hourly usage patterns
- Model-specific usage analysis

### 2. Activity Heatmap

GitHub-style contribution graph:

- Daily activity history
- Consecutive active days (Streak)
- Weekly/monthly patterns

### 3. Model Usage Analysis

Usage analysis by Claude model:

- **Opus**: Complex tasks, design
- **Sonnet**: General implementation
- **Haiku**: Quick fixes, simple tasks

### 4. Tool Usage Statistics

Usage count by Claude Code tool:

- Read: File reading
- Edit: Code modification
- Bash: Terminal commands
- Other tool usage patterns

### 5. Hourly Activity

Activity pattern analysis by time of day:

- Most active hours
- Coding session duration
- Turn count trends

### 6. Weekly Coding Patterns

Activity pattern by day of week:

- Weekday vs weekend activity
- Weekly activity trends
- Optimal coding day analysis

---

## Leaderboard

### Public Leaderboard

Compete with developers worldwide:

- **Daily Ranking**: Today's ranking
- **Weekly Ranking**: This week's ranking
- **Monthly Ranking**: This month's ranking
- **All Time Ranking**: All-time combined

### Personal Profile

Can set your profile to public or private:

- **Public Mode**: Other users can view your profile
- **Private Mode**: Only ranking shown, details private

---

## Privacy Mode

### Private Participation

Supports privacy mode to protect sensitive projects:

\`\`\`bash
# Exclude current project from tracking
moai rank exclude

# Switch to private mode (set in web dashboard)
\`\`\`

### Data Protection

- Data from excluded projects is not transmitted to server.
- Stored with anonymous project ID, so paths are not exposed.
- Code content and conversations are never collected.

---

## Dashboard Settings

### Profile Settings

- Change username
- Set avatar image
- Switch privacy mode
- Set profile public/private

### Notification Settings

- Ranking change alerts
- Weekly report emails
- Activity record notifications

---

## API

### Public API Endpoints

Can directly call APIs used by dashboard:

#### Get Leaderboard

\`\`\`bash
GET /api/leaderboard?period=weekly&limit=50&offset=0
\`\`\`

| Parameter | Type | Default | Description |
| --- | --- | --- | --- |
| \`period\` | string | \`weekly\` | \`daily\`, \`weekly\`, \`monthly\`, \`all_time\` |
| \`limit\` | number | \`50\` | Result count (1-100) |
| \`offset\` | number | \`0\` | Page offset |

#### Get User Profile

\`\`\`bash
GET /api/users/:username
\`\`\`

Retrieves specific user's public profile.

---

## Tech Stack

MoAI Rank dashboard is built with the following technologies:

| Category | Technology | Purpose |
| --- | --- | --- |
| Framework | Next.js 16 | Full-stack React framework |
| Language | TypeScript 5 | Type-safe development |
| Database | Neon (PostgreSQL) | Serverless PostgreSQL |
| ORM | Drizzle ORM | Type-safe DB queries |
| Cache | Upstash Redis | Distributed caching and rate limiting |
| Authentication | Clerk | GitHub OAuth authentication |
| UI | Tailwind CSS 4 | Styling |
| Components | Radix UI | Accessible UI primitives |
| Charts | Recharts | Data visualization |
| i18n | next-intl | Multi-language support |
| Validation | Zod | Runtime type validation |
`,

  '/docs/moai-rank/faq': `
# Frequently Asked Questions

Frequently asked questions and answers about using MoAI Rank.

---

## General Questions

### Is MoAI Rank free?

Yes, MoAI Rank is completely free. It only automatically collects session data without any additional cost.

### What data is collected?

| Metric | Description | Collected |
| --- | --- | --- |
| **Token Usage** | Input/output tokens, cache tokens | O |
| **Tool Usage** | Read, Edit, Bash usage count | O |
| **Model Usage** | Opus, Sonnet, Haiku classification | O |
| **Code Metrics** | Added/deleted lines, modified files | O |
| **Session Info** | Duration, turn count, timestamps | O |
| **Code Content** | Actual code content | X |
| **File Paths** | File paths within project | X |
| **Prompts** | Conversation with Claude | X |

**Guarantee**: Collected data **only includes numeric metrics**; code content or conversations are never transmitted.

### Is my code exposed?

No, code content is not collected at all. Only the following is collected:

- Number of modified files
- Number of added/deleted lines
- Tool types used and their counts

Actual code content, file paths, and prompts are not transmitted.

---

## Account & Authentication

### Do I need a GitHub account?

Yes, we authenticate via GitHub OAuth. You need to sign up if you don't have a GitHub account.

### Can I delete my account?

Yes, you can delete your account using the following methods:

1. **Logout from CLI**:
   \`\`\`bash
   moai rank logout
   \`\`\`

2. **Delete account from web dashboard**: Can delete account from profile settings

### Can I export my data?

Yes, can download from web dashboard:

- Export all session data in JSON format
- Export statistics data in CSV format

---

## Privacy

### How do I exclude sensitive projects from tracking?

\`\`\`bash
# Exclude current project
moai rank exclude

# Exclude specific path
moai rank exclude /path/to/private

# Wildcard pattern
moai rank exclude "*/confidential/*"

# Check excluded project list
moai rank list-excluded

# Re-include
moai rank include /path/to/project
\`\`\`

### What is private mode?

When you enable private mode:

- Display anonymously on leaderboard
- Profile information not public
- Only ranking shown, details private

Can switch from settings in web dashboard.

### Is it safe to use in company projects?

We recommend excluding sensitive projects using the \`exclude\` command:

\`\`\`bash
# Exclude company project
moai rank exclude /path/to/company/project
\`\`\`

Data from excluded projects is not transmitted to server.

---

## Synchronization

### When does synchronization run?

Automatically runs:

- **Session End Hook**: Automatically submit when Claude Code session ends
- **Manual Sync**: Batch submit existing sessions with \`moai rank sync\`

### What if sync fails?

Automatically retries, and failed sessions are retried on next sync:

\`\`\`bash
# Manually retry
moai rank sync
\`\`\`

### What if I work offline?

Offline sessions are stored locally and automatically synced on next connection.

---

## Ranking

### How is score calculated?

\`\`\`text
Score = (Token * 0.40) + (Efficiency * 0.25) + (Session * 0.20) + (Streak * 0.15)

Calculation:
- Token = min(1, log10(totalTokens + 1) / 10)
- Efficiency = min(outputTokens / inputTokens, 2) / 2
- Session = min(1, log10(sessions + 1) / 3)
- Streak = min(streak, 30) / 30

Final Score = Weighted Sum * 1000
\`\`\`

### What are score ranks?

| Rank | Score Range |
| --- | --- |
| Diamond | 800+ |
| Platinum | 600-799 |
| Gold | 400-599 |
| Silver | 200-399 |
| Bronze | 0-199 |

### When is ranking updated?

- **Real-time**: Reflected immediately upon session submission
- **Daily/Weekly/Monthly**: Calculated at midnight daily
- **All Time**: Real-time cumulative

---

## Technical Questions

### What tech stack do you use?

| Category | Technology | Purpose |
| --- | --- | --- |
| Framework | Next.js 16 | Full-stack React framework |
| Language | TypeScript 5 | Type-safe development |
| Database | Neon (PostgreSQL) | Serverless PostgreSQL |
| Cache | Upstash Redis | Distributed caching |
| Authentication | Clerk | GitHub OAuth |

### Is source code public?

Yes, completely open source:

**[https://github.com/modu-ai/moai-rank](https://github.com/modu-ai/moai-rank)**

### Can I self-host?

Yes, you can fork the source code and deploy to your own server. See GitHub repository for details.

---

## Troubleshooting

### Can't login?

1. Check if browser is not blocked
2. Check if GitHub authentication is complete
3. Try again: \`moai rank login\`

### Sync stuck?

\`\`\`bash
# Force interrupt and retry
Ctrl+C
moai rank sync
\`\`\`

### Ranking not displaying?

1. Check if logged in: \`moai rank status\`
2. Check if session data exists: \`moai rank sync\`
3. Check on web dashboard: https://rank.mo.ai.kr

---

## Other

### Why did you create MoAI Rank?

This project was created **as an educational example showing actual MoAI-ADK usage**:

- Real AI agent orchestration experience
- SPEC-First DDD implementation
- Scalable architecture
- Open source contribution

### Where can I leave feedback?

Please leave feedback on GitHub Issues:

**[https://github.com/modu-ai/moai-rank/issues](https://github.com/modu-ai/moai-rank/issues)**

Improvements and bug reports are welcome!
`,

  '/docs/worktree/index': `
# Git Worktree Real Usage Examples

Learn how to apply Git Worktree in real projects through concrete examples.

## Table of Contents

1. [Single SPEC Development](#single-spec-development)
2. [Parallel SPEC Development](#parallel-spec-development)
3. [Team Collaboration Scenarios](#team-collaboration-scenarios)
4. [Troubleshooting Cases](#troubleshooting-cases)

---

## Single SPEC Development

### Scenario: Implement User Authentication System

#### Step 1: SPEC Planning (Terminal 1)

\`\`\`bash
# In project root
$ cd /Users/goos/MoAI/moai-project

# Create SPEC plan
> /moai plan "Implement JWT-based user authentication system" --worktree

# Output
✓ MoAI-ADK SPEC Manager v2.0
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Analyzing SPEC...
  - Feature requirements: 8 found
  - Technical requirements: 5 found
  - API endpoints: 6 identified

Creating SPEC document...
  ✓ .moai/specs/SPEC-AUTH-001/spec.md
  ✓ .moai/specs/SPEC-AUTH-001/requirements.md
  ✓ .moai/specs/SPEC-AUTH-001/api-design.md

Creating Worktree...
  ✓ Branch created: feature/SPEC-AUTH-001
  ✓ Worktree created: /Users/goos/MoAI/moai-project/.moai/worktrees/SPEC-AUTH-001
  ✓ Branch checkout complete

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Next steps:
  1. Run in new terminal: moai worktree go SPEC-AUTH-001
  2. Change LLM: moai glm
  3. Start Claude: claude
  4. Start development: /moai run SPEC-AUTH-001

Cost saving tip: Use 'moai glm' for 70% cost savings during implementation!
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
\`\`\`

#### Step 2: Enter Worktree and Implement (Terminal 2)

\`\`\`bash
# Open new terminal
$ moai worktree go SPEC-AUTH-001

# New terminal opens and moves to Worktree
# Prompt changes
(SPEC-AUTH-001) ~/moai-project/.moai/worktrees/SPEC-AUTH-001

# Change LLM to low-cost model
(SPEC-AUTH-001) $ moai glm
✓ LLM changed: GLM 4.7 (70% cost savings)

# Start Claude Code
(SPEC-AUTH-001) $ claude
Claude Code v1.0.0
Type 'help' for available commands

# Start DDD implementation
> /moai run SPEC-AUTH-001

# Output
✓ MoAI-ADK DDD Executor v2.0
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Phase 1: ANALYZE
  ✓ Requirement analysis complete
  ✓ Existing code analysis complete
  ✓ Test coverage target: 85%

Phase 2: PRESERVE
  ✓ Created 12 characterization tests
  ✓ Existing behavior preserved

Phase 3: IMPROVE
  ✓ JWT authentication middleware implemented
  ✓ Refresh token rotation implemented
  ✓ Token invalidation on logout implemented

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Implementation complete!
  - Commit: 4f3a2b1 (feat: JWT authentication middleware)
  - Commit: 7c8d9e0 (feat: refresh token rotation)
  - Commit: 2a1b3c4 (feat: token invalidation on logout)

Next steps:
  1. Run tests: pytest tests/auth/
  2. Document: /moai sync SPEC-AUTH-001
  3. Complete: moai worktree done SPEC-AUTH-001
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
\`\`\`

#### Step 3: Documentation (same Terminal 2)

\`\`\`bash
# Run documentation
> /moai sync SPEC-AUTH-001

# Output
✓ MoAI-ADK Documentation Generator v2.0
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Generating documentation...
  ✓ API docs: docs/api/auth.md
  ✓ Architecture diagram: docs/diagrams/auth-flow.mmd
  ✓ User guide: docs/guides/authentication.md

Commit complete:
  ✓ b5e6f7a (docs: authentication documentation)

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Documentation complete!
Next step: moai worktree done SPEC-AUTH-001 --push
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
\`\`\`

#### Step 4: Complete and Merge (Terminal 1)

\`\`\`bash
# Return to project root
$ cd /Users/goos/MoAI/moai-project

# Complete Worktree
$ moai worktree done SPEC-AUTH-001 --push

# Output
✓ MoAI-ADK Worktree Manager v2.0
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Completing Worktree: SPEC-AUTH-001

1. Switching to main branch...
   ✓ Switched to branch 'main'

2. Merging feature branch...
   ✓ Merge 'feature/SPEC-AUTH-001' into main

3. Pushing to remote repository...
   ✓ github.com:username/repo.git
   ✓ Branch 'main' set up to track remote branch 'main'

4. Cleaning Worktree...
   ✓ Remove Worktree: .moai/worktrees/SPEC-AUTH-001
   ✓ Remove branch: feature/SPEC-AUTH-001

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
✓ SPEC-AUTH-001 complete!

Total commits: 4
  - 2e9b4c3 docs: authentication documentation
  - 7c8d9e0 feat: refresh token rotation
  - 4f3a2b1 feat: JWT authentication middleware
  - b5e6f7a feat: token invalidation on logout

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
\`\`\`

---

## Parallel SPEC Development

### Scenario: Develop 3 SPECs Simultaneously

\`\`\`mermaid
graph TB
    subgraph T1["Terminal 1: Planning (Opus)"]
        P1[/moai plan<br/>AUTH-001/]
        P2[/moai plan<br/>LOG-002/]
        P3[/moai plan<br/>API-003/]
    end

    subgraph T2["Terminal 2: Implement (GLM)"]
        I1[moai worktree go AUTH-001<br/>/moai run/]
    end

    subgraph T3["Terminal 3: Implement (GLM)"]
        I2[moai worktree go LOG-002<br/>/moai run/]
    end

    subgraph T4["Terminal 4: Implement (GLM)"]
        I3[moai worktree go API-003<br/>/moai run/]
    end

    P1 --> I1
    P2 --> I2
    P3 --> I3
\`\`\`

#### Terminal 1: Planning (all SPECs)

\`\`\`bash
# SPEC 1: Authentication
> /moai plan "JWT authentication system" --worktree
✓ SPEC-AUTH-001 creation complete

# SPEC 2: Logging
> /moai plan "Structured logging system" --worktree
✓ SPEC-LOG-002 creation complete

# SPEC 3: API
> /moai plan "REST API v2" --worktree
✓ SPEC-API-003 creation complete

# Check Worktrees
moai worktree list
SPEC-AUTH-001  feature/SPEC-AUTH-001  /path/to/SPEC-AUTH-001
SPEC-LOG-002   feature/SPEC-LOG-002   /path/to/SPEC-LOG-002
SPEC-API-003   feature/SPEC-API-003   /path/to/SPEC-API-003
\`\`\`

#### Terminal 2: AUTH-001 Implementation

\`\`\`bash
$ moai worktree go SPEC-AUTH-001
(SPEC-AUTH-001) $ moai glm
(SPEC-AUTH-001) $ claude
> /moai run SPEC-AUTH-001
# ... implementation in progress ...
\`\`\`

#### Terminal 3: LOG-002 Implementation

\`\`\`bash
$ moai worktree go SPEC-LOG-002
(SPEC-LOG-002) $ moai glm
(SPEC-LOG-002) $ claude
> /moai run SPEC-LOG-002
# ... implementation in progress ...
\`\`\`

#### Terminal 4: API-003 Implementation

\`\`\`bash
$ moai worktree go SPEC-API-003
(SPEC-API-003) $ moai glm
(SPEC-API-003) $ claude
> /moai run SPEC-API-003
# ... implementation in progress ...
\`\`\`

#### Monitor Parallel Progress

\`\`\`bash
# Check all Worktree status in Terminal 1
$ moai worktree status --verbose

Worktree: SPEC-AUTH-001
Branch: feature/SPEC-AUTH-001
Status: 3 commits ahead of main
LLM: GLM 4.7
Last activity: 5 minutes ago

Worktree: SPEC-LOG-002
Branch: feature/SPEC-LOG-002
Status: 2 commits ahead of main
LLM: GLM 4.7
Last activity: 3 minutes ago

Worktree: SPEC-API-003
Branch: feature/SPEC-API-003
Status: 4 commits ahead of main
LLM: GLM 4.7
Last activity: 7 minutes ago
\`\`\`

---

## Team Collaboration Scenarios

### Scenario: 2 Developers Collaborating

\`\`\`mermaid
graph TB
    subgraph Dev1["Developer A (Frontend)"]
        F1[SPEC-FE-001<br/>Login UI]
        F2[SPEC-FE-002<br/>Dashboard]
    end

    subgraph Dev2["Developer B (Backend)"]
        B1[SPEC-BE-001<br/>API Design]
        B2[SPEC-BE-002<br/>Auth Service]
    end

    subgraph Remote["Remote Repository"]
        R[main branch]
    end

    F1 --> R
    F2 --> R
    B1 --> R
    B2 --> R
\`\`\`

#### Developer A: Frontend Development

\`\`\`bash
# On Developer A's machine
git clone https://github.com/team/project.git
cd project

# Create Frontend SPEC
> /moai plan "Login UI component" --worktree
✓ SPEC-FE-001 created

# Develop in Worktree
moai worktree go SPEC-FE-001
(SPEC-FE-001) $ moai glm
(SPEC-FE-001) $ claude
> /moai run SPEC-FE-001

# After implementation, push to remote
(SPEC-FE-001) $ exit
moai worktree done SPEC-FE-001 --push
✓ Complete and PR created
\`\`\`

#### Developer B: Backend Development

\`\`\`bash
# On Developer B's machine
git clone https://github.com/team/project.git
cd project

# Create Backend SPEC
> /moai plan "Authentication API service" --worktree
✓ SPEC-BE-001 created

# Develop in Worktree
moai worktree go SPEC-BE-001
(SPEC-BE-001) $ moai glm
(SPEC-BE-001) $ claude
> /moai run SPEC-BE-001

# After implementation, push to remote
(SPEC-BE-001) $ exit
moai worktree done SPEC-BE-001 --push
✓ Complete and PR created
\`\`\`

#### PR Merge and Integration

\`\`\`bash
# By team lead or CI system
gh pr list
# FE-001  Login UI Component          Ready
# BE-001  Authentication API Service  Ready

# Merge PRs
gh pr merge FE-001 --merge
gh pr merge BE-001 --merge

# All developers stay up to date
git pull origin main
\`\`\`

---

## Troubleshooting Cases

### Case 1: Resolve Merge Conflict

\`\`\`bash
$ moai worktree done SPEC-AUTH-001 --push

# Output
✗ Merge conflict occurred!
Conflict files:
  - src/auth/jwt.ts
  - tests/auth.test.ts

Resolution steps:
1. Edit conflict files to resolve
2. git add <file>
3. git commit
4. Re-run moai worktree done SPEC-AUTH-001 --push
\`\`\`

**Resolution process**:

\`\`\`mermaid
flowchart TD
    A[Conflict detected] --> B[Check conflict files]
    B --> C[Open jwt.ts]
    C --> D[Find conflict markers]
    D --> E[Manual merge]
    E --> F[git add jwt.ts]
    F --> G[git commit]
    G --> H[Re-run moai worktree done]
    H --> I[Success!]
\`\`\`

\`\`\`bash
# Resolve conflict
cd .moai/worktrees/SPEC-AUTH-001
code src/auth/jwt.ts

# Check conflict markers
<<<<<<< HEAD
const secret = process.env.JWT_SECRET;
=======
const secret = config.jwt.secret;
>>>>>>> feature/SPEC-AUTH-001

# Manually merge
const secret = process.env.JWT_SECRET || config.jwt.secret;

# Stage and commit
git add src/auth/jwt.ts
git commit -m "fix: resolve merge conflict in JWT config"

# Retry completion
cd /Users/goos/MoAI/moai-project
moai worktree done SPEC-AUTH-001 --push
✓ Complete!
\`\`\`

### Case 2: Recover Corrupted Worktree

\`\`\`bash
$ moai worktree go SPEC-AUTH-001
✗ Worktree is corrupted.

# Diagnose
$ moai worktree status SPEC-AUTH-001
✗ Worktree directory does not exist

# Recover
$ moai worktree remove SPEC-AUTH-001 --force
✓ Removed existing Worktree

$ moai worktree new SPEC-AUTH-001
✓ Worktree recreation complete
\`\`\`

### Case 3: Insufficient Disk Space

\`\`\`bash
$ df -h
Filesystem      Size  Used Avail Use%
/dev/disk1     500G  480G   20G  96%

# Clean old Worktrees
$ moai worktree clean --older-than 14

# Worktrees to be cleaned:
  - SPEC-OLD-001 (30 days ago)
  - SPEC-OLD-002 (45 days ago)
  - SPEC-OLD-003 (60 days ago)

Continue? [y/N] y

✓ 3 Worktrees cleaned
✓ 12GB disk space freed
\`\`\`

---

## Real Project Workflow

### Complete Development Cycle Example

\`\`\`mermaid
sequenceDiagram
    participant Dev as Developer
    participant T1 as Terminal 1<br/>Plan
    participant T2 as Terminal 2<br/>Implement
    participant T3 as Terminal 3<br/>Document
    participant Git as Git Repository
    participant Remote as GitHub

    Dev->>T1: /moai plan "feedback system"
    T1->>Git: Create feature/SPEC-FB-001
    Git->>Git: SPEC document commit
    T1->>Dev: Worktree creation complete

    Dev->>T2: moai worktree go SPEC-FB-001
    Dev->>T2: moai glm
    T2->>Git: DDD implementation commits
    Note over T2: 4f3a2b1, 7c8d9e0

    Dev->>T3: moai worktree go SPEC-FB-001
    T3->>Git: Documentation commit
    Note over T3: b5e6f7a

    Dev->>T1: moai worktree done SPEC-FB-001
    T1->>Git: Merge to main
    Git->>Remote: Push
    Remote-->>Dev: PR created
\`\`\`

---

## Success Stories

### Case: Startup Application

\`\`\`bash
# Situation: Need to develop 3 features simultaneously
# Time: 1 week
# Developers: 2

# Day 1: Plan all SPECs
> /moai plan "User management" --worktree
> /moai plan "Payment system" --worktree
> /moai plan "Notification system" --worktree

# Days 2-4: Parallel implementation
# Terminal 1: User management
$ moai worktree go SPEC-USER-001 && moai glm
# Terminal 2: Payment system
$ moai worktree go SPEC-PAY-001 && moai glm
# Terminal 3: Notification system
$ moai worktree go SPEC-NOTIF-001 && moai glm

# Days 5-6: Documentation and testing
# Run /moai sync in each Worktree

# Day 7: Merge
$ moai worktree done SPEC-USER-001 --push
$ moai worktree done SPEC-PAY-001 --push
$ moai worktree done SPEC-NOTIF-001 --push

# Results
# - All 3 features completed
# - 66% time savings with parallel development
# - 70% cost savings with GLM
\`\`\`

---

## Tips and Tricks

### Tip 1: Terminal Management

\`\`\`bash
# Use tmux for session management
tmux new-session -d -s spec-user 'moai worktree go SPEC-USER-001'
tmux new-session -d -s spec-pay 'moai worktree go SPEC-PAY-001'

# List sessions
tmux ls
spec-user: 1 windows
spec-pay: 1 windows

# Switch sessions
tmux attach-session -t spec-user
\`\`\`

### Tip 2: Progress Tracking

\`\`\`bash
# All Worktree progress
for spec in $(moai worktree list --porcelain | awk '{print $1}'); do
    echo "=== $spec ==="
    cd ~/.moai/worktrees/$spec
    git log --oneline -5
    echo ""
done
\`\`\`

### Tip 3: Automation Script

\`\`\`bash
#!/bin/bash
# auto-workflow.sh

SPEC_ID=$1

echo "1. Creating SPEC plan..."
> /moai plan "$2" --worktree

echo "2. Entering Worktree..."
moai worktree go $SPEC_ID

echo "3. Changing LLM..."
moai glm

echo "4. Starting Claude..."
claude

# Usage
# ./auto-workflow.sh SPEC-AUTH-001 "authentication system"
\`\`\`

## Related Documents

- [Git Worktree Overview](./index)
- [Complete Guide](./guide)
- [FAQ](./faq)
`,

  '/docs/worktree/faq': `
# Git Worktree FAQ

Common problems and solutions when using Git Worktree.

## Table of Contents

1. [Basic Concepts](#basic-concepts)
2. [Usage](#usage)
3. [Troubleshooting](#troubleshooting)
4. [Performance & Optimization](#performance--optimization)
5. [Team Collaboration](#team-collaboration)

---

## Basic Concepts

### Q: What's the difference between Git Worktree and regular branches?

**A**: Git Worktree allows you to work in **physically separated directories**:

\`\`\`mermaid
graph TB
    subgraph Traditional["Regular Branch Method"]
        T1[Single directory]
        T2[Switch branches with<br/>git checkout]
        T3[Context switching cost occurs]
    end

    subgraph Worktree["Worktree Method"]
        W1[Directory 1<br/>feature/A]
        W2[Directory 2<br/>feature/B]
        W3[Directory 3<br/>main]
        W4[Can work on multiple branches simultaneously]
    end

    Traditional -.->|Inefficient| Worktree
\`\`\`

**Key Differences**:

| Feature          | Regular Branch         | Git Worktree    |
| ------------- | ------------------- | --------------- |
| Working Directory | 1 shared            | N independent        |
| Branch Switch   | \`git checkout\` needed | Just directory move |
| Simultaneous Work | Not possible      | Possible            |
| LLM Settings      | Shared              | Independent          |
| Conflict Possibility   | High                | Low            |

---

### Q: Why should I use Worktree?

**A**: We recommend using Worktree for the following reasons:

1. **LLM Settings Independence**: Can use different LLMs for each SPEC
   - Plan phase: Opus (high quality)
   - Implement phase: GLM (low cost)
   - Document phase: Sonnet (medium)

2. **Parallel Development**: Can develop multiple SPECs simultaneously
3. **Conflict Prevention**: Minimizes conflicts with isolated workspaces
4. **Cost Savings**: 70% cost savings with GLM

\`\`\`mermaid
graph TB
    A[Not using Worktree] --> B[Same LLM applied<br/>to all sessions]
    B --> C[High cost<br/>Only Opus used]

    D[Using Worktree] --> E[Independent LLM<br/>for each Worktree]
    E --> F[70% cost savings<br/>Can use GLM]
\`\`\`

---

### Q: Is Worktree required in MoAI-ADK?

**A**: No, it's not required but **strongly recommended**:

- **Single SPEC Development**: Possible without Worktree
- **Multiple SPEC Development**: Worktree essential
- **Team Collaboration**: Prevent conflicts with Worktree
- **Cost Optimization**: Separate LLMs with Worktree

---

## Usage

### Q: How do I create a Worktree?

**A**: There are two methods:

**Method 1: Automatic Creation (Recommended)**

\`\`\`bash
# Automatically create during SPEC planning phase
> /moai plan "feature description" --worktree

# Automatically:
# 1. Create SPEC document
# 2. Create Worktree
# 3. Create feature branch
\`\`\`

**Method 2: Manual Creation**

\`\`\`bash
# Manually create Worktree
moai worktree new SPEC-AUTH-001

# Create from specific branch
moai worktree new SPEC-AUTH-001 --from develop
\`\`\`

---

### Q: How do I enter a Worktree?

**A**: Use the \`moai worktree go\` command:

\`\`\`bash
# Enter Worktree
moai worktree go SPEC-AUTH-001

# New terminal opens and moves to Worktree
# Prompt changes
(SPEC-AUTH-001) $
\`\`\`

**Workflow after entering**:

\`\`\`mermaid
flowchart TD
    A[moai worktree go SPEC-ID] --> B[New terminal opens]
    B --> C[Move to Worktree directory]
    C --> D{Change LLM?}
    D -->|Yes| E[moai glm]
    D -->|No| F[Start Claude]
    E --> F
    F --> G["/moai run SPEC-ID"]
\`\`\`

---

### Q: Can I use multiple Worktrees simultaneously?

**A**: Yes, unlimited:

\`\`\`bash
# Terminal 1
moai worktree go SPEC-AUTH-001
(SPEC-AUTH-001) $ moai glm

# Terminal 2
moai worktree go SPEC-LOG-002
(SPEC-LOG-002) $ moai glm

# Terminal 3
moai worktree go SPEC-API-003
(SPEC-API-003) $ moai glm

# All can work simultaneously
\`\`\`

**Parallel work visualization**:

\`\`\`mermaid
graph TB
    subgraph Time["Time Progress"]
        T1[09:00]
        T2[10:00]
        T3[11:00]
        T4[12:00]
    end

    subgraph Worktree1["SPEC-AUTH-001"]
        W1A[Plan]
        W1B[Implement]
        W1C[Done]
    end

    subgraph Worktree2["SPEC-LOG-002"]
        W2A[Plan]
        W2B[Implement]
    end

    subgraph Worktree3["SPEC-API-003"]
        W3A[Plan]
    end

    T1 --> W1A
    T1 --> W2A
    T1 --> W3A

    T2 --> W1B
    T2 --> W2B

    T3 --> W1C
    T3 --> W2B
\`\`\`

---

### Q: How do I complete a Worktree?

**A**: Use the \`moai worktree done\` command:

\`\`\`bash
# Basic completion (merge + cleanup)
moai worktree done SPEC-AUTH-001

# Including push to remote
moai worktree done SPEC-AUTH-001 --push

# Remove only without merging
moai worktree done SPEC-AUTH-001 --no-merge
\`\`\`

**Completion process**:

\`\`\`mermaid
flowchart TD
    A[moai worktree done SPEC-ID] --> B{--no-merge?}
    B -->|Yes| C[Only remove Worktree]
    B -->|No| D[Switch to main]
    D --> E[Merge feature]
    E --> F{Conflict?}
    F -->|Yes| G[Manual resolution needed]
    F -->|No| H{--push?}
    H -->|Yes| I[Push to remote]
    H -->|No| J[Remove Worktree]
    I --> J
    C --> K[Complete]
    J --> K
    G --> L[User intervention needed]
\`\`\`

---

## Troubleshooting

### Q: Worktree conflict occurred

**A**: Resolve with the following steps:

\`\`\`mermaid
flowchart TD
    A[Conflict occurred] --> B[Check conflict files]
    B --> C[Open conflict files]
    C --> D[Find conflict markers <<<<<<<]
    D --> E[Manual merge]
    E --> F[git add]
    F --> G[git commit]
    G --> H[Re-run moai worktree done]
\`\`\`

**Real example**:

\`\`\`bash
moai worktree done SPEC-AUTH-001
✗ Merge conflict occurred!

# 1. Check conflict files
cd .moai/worktrees/SPEC-AUTH-001
git status
# Conflict file: src/auth/jwt.ts

# 2. Resolve conflict
code src/auth/jwt.ts

# 3. Check and edit conflict markers
<<<<<<< HEAD
const secret = process.env.JWT_SECRET;
=======
const secret = config.jwt.secret;
>>>>>>> feature/SPEC-AUTH-001

# 4. Merge
const secret = process.env.JWT_SECRET || config.jwt.secret;

# 5. Commit
git add src/auth/jwt.ts
git commit -m "fix: resolve merge conflict"

# 6. Retry completion
cd /path/to/project
moai worktree done SPEC-AUTH-001
✓ Complete!
\`\`\`

---

### Q: Worktree is corrupted

**A**: Recover with the following steps:

\`\`\`bash
# 1. Diagnose
moai worktree status SPEC-AUTH-001
✗ Worktree directory does not exist

# 2. Remove existing Worktree
moai worktree remove SPEC-AUTH-001 --force

# 3. Recreate Worktree
moai worktree new SPEC-AUTH-001

# 4. Verify recovery
moai worktree status SPEC-AUTH-001
✓ Worktree is normal
\`\`\`

---

### Q: Insufficient disk space

**A**: Clean up old Worktrees:

\`\`\`bash
# 1. Check disk usage
$ du -sh .moai/worktrees/*
2.5G    .moai/worktrees/SPEC-AUTH-001
1.8G    .moai/worktrees/SPEC-LOG-002
3.2G    .moai/worktrees/SPEC-API-003

# 2. Clean old Worktrees
$ moai worktree clean --older-than 14

# Worktrees to be cleaned:
#   - SPEC-OLD-001 (30 days ago, 2.1GB)
#   - SPEC-OLD-002 (45 days ago, 1.7GB)

Continue? [y/N] y

✓ 2 Worktrees cleaned
✓ 3.8GB disk space freed
\`\`\`

**Cleanup strategy**:

\`\`\`mermaid
graph TD
    A[Worktree cleanup needed] --> B{Merge complete?}
    B -->|Yes| C[moai worktree done]
    B -->|No| D{Over 14 days?}
    D -->|Yes| E[Check work status]
    D -->|No| F[Keep]
    E --> G{Not needed?}
    G -->|Yes| H[moai worktree remove]
    G -->|No| F
    C --> I[Cleanup complete]
    H --> I
    F --> I
\`\`\`

---

### Q: LLM not working as expected

**A**: Check Worktree-specific LLM settings:

\`\`\`bash
# Check current LLM
moai config
Current LLM: GLM 4.7

# Change LLM in Worktree
moai worktree go SPEC-AUTH-001
(SPEC-AUTH-001) $ moai cc
→ Changed to Claude Opus

# Other Worktree unaffected
(SPEC-AUTH-001) $ exit
moai worktree go SPEC-LOG-002
(SPEC-LOG-002) $ moai config
Current LLM: GLM 4.7 (no change)
\`\`\`

---

### Q: Git commands not working

**A**: Check if you're in the correct directory:

\`\`\`bash
# Check Worktree directory
pwd
/Users/goos/MoAI/moai-project/.moai/worktrees/SPEC-AUTH-001

# Check Git status
git status
On branch feature/SPEC-AUTH-001
nothing to commit, working tree clean

# If Git error occurs
git fetch --all
git rebase origin/feature/SPEC-AUTH-001
\`\`\`

---

## Performance & Optimization

### Q: Does Worktree affect performance?

**A**: Minimal impact:

**Advantages**:

- Each Worktree is independent, so cache efficient
- Fast Git operations (local branches)
- Leverages file system cache

**Disadvantages**:

- Disk space usage (duplicated per Worktree)
- Initial Worktree creation takes time

**Optimization tips**:

\`\`\`bash
# 1. Remove unnecessary Worktrees
moai worktree clean --merged-only

# 2. Git garbage collection
git gc --aggressive --prune=now

# 3. Worktree pruning
git worktree prune
\`\`\`

---

### Q: How many Worktrees can I create?

**A**: Theoretically unlimited, but practically limited by:

**Limiting factors**:

1. **Disk Space**: Each Worktree uses ~100MB-1GB
2. **Memory**: Open sessions in each Worktree
3. **File System**: Number of files open simultaneously

**Recommendations**:

- **Small projects**: 5-10 Worktrees
- **Medium projects**: 3-5 Worktrees
- **Large projects**: 2-3 Worktrees

\`\`\`mermaid
graph TD
    A[Determine Worktree count] --> B{Project size?}
    B -->|Small| C[5-10]
    B -->|Medium| D[3-5]
    B -->|Large| E[2-3]

    C --> F[Disk: 500MB-1GB]
    D --> G[Disk: 1.5GB-2.5GB]
    E --> H[Disk: 2GB-3GB]
\`\`\`

---

### Q: Can I automatically clean Worktrees?

**A**: Yes, use periodic cleanup scripts:

\`\`\`bash
#!/bin/bash
# clean-worktrees.sh

# Clean merged Worktrees
moai worktree clean --merged-only

# Clean Worktrees older than 30 days
moai worktree clean --older-than 30

# Git garbage collection
cd /path/to/project
git gc --aggressive --prune=now

echo "Worktree cleanup complete"
\`\`\`

**Set up cron job**:

\`\`\`bash
# Run every Sunday at 2 AM
0 2 * * 0 /path/to/clean-worktrees.sh >> /var/log/worktree-cleanup.log 2>&1
\`\`\`

---

## Team Collaboration

### Q: How does the team use Worktree?

**A**: We recommend the following workflow:

\`\`\`mermaid
graph TB
    subgraph DevA["Developer A"]
        A1[Create Worktree]
        A2[Develop]
        A3[Complete and PR]
    end

    subgraph DevB["Developer B"]
        B1[Create Worktree]
        B2[Develop]
        B3[Complete and PR]
    end

    subgraph Remote["Remote Repository"]
        R[main branch]
    end

    A1 --> A2 --> A3 --> R
    B1 --> B2 --> B3 --> R
\`\`\`

**Team collaboration guide**:

1. **Worktree naming convention**: \`SPEC-{category}-{number}\`
2. **Regular sync**: \`git pull origin main\`
3. **Before PR review**: Complete testing locally
4. **Conflict prevention**: Sync with \`main\` frequently

---

### Q: How do I sync Worktree with remote repository?

**A**: Run \`git pull\` regularly:

\`\`\`bash
# Sync in each Worktree
moai worktree go SPEC-AUTH-001
(SPEC-AUTH-001) $ git pull origin main

# Or sync all Worktrees
for spec in $(moai worktree list --porcelain | awk '{print $1}'); do
    cd ~/.moai/worktrees/$spec
    echo "Syncing $spec..."
    git pull origin main
done
\`\`\`

---

### Q: How do I manage Worktree during PR review?

**A**: Use the following strategy:

\`\`\`bash
# Before PR creation
moai worktree status SPEC-AUTH-001
# Check status

git log main..feature/SPEC-AUTH-001
# Check changes

# During PR review
# Keep Worktree (waiting for merge)

# After PR approval
moai worktree done SPEC-AUTH-001 --push
# Merge and cleanup

# After PR rejection
cd .moai/worktrees/SPEC-AUTH-001
# Continue revision work
\`\`\`

---

## Additional Questions

### Q: Can I use MoAI-ADK without Worktree?

**A**: Yes, but not recommended:

\`\`\`bash
# Use without Worktree
> /moai plan "feature description"
# Skip Worktree creation step

# But the following problems occur:
# 1. Same LLM applied to all sessions
# 2. No parallel development possible
# 3. Context switching cost
\`\`\`

---

### Q: Do I need to backup Worktree?

**A**: Worktree is managed by Git, so no separate backup needed:

\`\`\`bash
# Worktree is part of Git
# Automatic backup when pushed to remote

# Push to remote regularly
git push origin feature/SPEC-AUTH-001

# Recover after Worktree loss
git fetch origin
git worktree add SPEC-AUTH-001 origin/feature/SPEC-AUTH-001
\`\`\`

---

## Related Documents

- [Git Worktree Overview](/worktree/index)
- [Complete Guide](./guide)
- [Real Usage Examples](./examples)

## Need More Help?

- [GitHub Issues](https://github.com/MoAI-ADK/moai-adk/issues)
- [Discord Community](https://discord.gg/moai-adk)
- [Email Support](mailto:support@moai-adk.org)
`,

};
