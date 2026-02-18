[Skip to Content](https://adk.mo.ai.kr/en/moai-rank#nextra-skip-nav)

[MoAI Rank](https://adk.mo.ai.kr/en/moai-rank/guide "MoAI Rank") MoAI Rank

Copy page

# MoAI Rank

**A New Dimension of Agentic Coding**: Track your coding journey and compete with developers worldwide!

## Overview [Permalink for this section](https://adk.mo.ai.kr/en/moai-rank\#overview)

MoAI Rank is a leaderboard platform that tracks Claude Code users’ token usage and allows you to compete with developers worldwide.

### Key Features [Permalink for this section](https://adk.mo.ai.kr/en/moai-rank\#key-features)

| Feature | Description |
| --- | --- |
| **Token Tracking** | Automatic tracking of AI usage per session |
| **Global Leaderboard** | Daily/Weekly/Monthly/All-time rankings |
| **Coding Style Analysis** | Discover your own development patterns |
| **Dashboard** | Visualized statistics and insights |

### Project Background [Permalink for this section](https://adk.mo.ai.kr/en/moai-rank\#project-background)

This project was created **as an educational example showing actual MoAI-ADK usage**.

- **Purpose**: Provide real AI agent orchestration experience
- **Development Period**: 48-hour hacking project
- **Tech Stack**: Next.js 16, TypeScript 5, Neon PostgreSQL, Upstash Redis
- **Open Source**: All code is public for learning

### Web Dashboard [Permalink for this section](https://adk.mo.ai.kr/en/moai-rank\#web-dashboard)

**[https://rank.mo.ai.kr](https://rank.mo.ai.kr/)**

Information available on the dashboard:

- Token usage trends
- Tool usage statistics
- Model-specific usage analysis
- Weekly/monthly reports

* * *

## Quick Start [Permalink for this section](https://adk.mo.ai.kr/en/moai-rank\#quick-start)

### Step 1: Install MoAI-ADK [Permalink for this section](https://adk.mo.ai.kr/en/moai-rank\#step-1-install-moai-adk)

```

# Quick install (recommended)
curl -LsSf https://adk.mo.ai.kr/install.sh | sh

# Or manual install
curl -LsSf https://astral.sh/uv/install.sh | sh
uv tool install moai-adk
```

### Step 2: GitHub OAuth Registration [Permalink for this section](https://adk.mo.ai.kr/en/moai-rank\#step-2-github-oauth-registration)

```

moai rank login
```

Browser opens for GitHub authentication. After authentication completes, API key is automatically generated and saved.

### Step 3: Sync Session Data [Permalink for this section](https://adk.mo.ai.kr/en/moai-rank\#step-3-sync-session-data)

```

moai rank sync
```

Syncs existing Claude Code session data to MoAI Rank server.

### Step 4: Check Ranking [Permalink for this section](https://adk.mo.ai.kr/en/moai-rank\#step-4-check-ranking)

```

moai rank status
```

Check your current ranking and statistics.

* * *

## CLI Commands [Permalink for this section](https://adk.mo.ai.kr/en/moai-rank\#cli-commands)

```

moai rank [OPTIONS] COMMAND [ARGS]...
```

### Command List [Permalink for this section](https://adk.mo.ai.kr/en/moai-rank\#command-list)

| Command | Description |
| --- | --- |
| `login` | Login with GitHub OAuth (alias: `register`) |
| `status` | Show current ranking and statistics |
| `sync` | Sync session data to server |
| `exclude` | Exclude project from tracking |
| `include` | Re-include excluded project |
| `logout` | Remove stored credentials |

* * *

## Metrics Overview [Permalink for this section](https://adk.mo.ai.kr/en/moai-rank\#metrics-overview)

MoAI Rank collects the following metrics:

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

* * *

## Related Links [Permalink for this section](https://adk.mo.ai.kr/en/moai-rank\#related-links)

- **GitHub**: [modu-ai/moai-rank](https://github.com/modu-ai/moai-rank)
- **Web Dashboard**: [https://rank.mo.ai.kr](https://rank.mo.ai.kr/)
- **MoAI-ADK**: [modu-ai/moai-adk](https://github.com/modu-ai/moai-adk)

Last updated onFebruary 12, 2026

[FAQ](https://adk.mo.ai.kr/en/worktree/faq "FAQ") [Web Dashboard](https://adk.mo.ai.kr/en/moai-rank/dashboard "Web Dashboard")

* * *