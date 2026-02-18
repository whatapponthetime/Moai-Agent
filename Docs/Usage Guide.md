# MoAI Rank Usage Guide

This guide explains how to use the MoAI Rank CLI to track Claude Code sessions and participate in the leaderboard.

## Prerequisites

- **MoAI-ADK Installed**: MoAI-ADK must be installed to use MoAI Rank.
- **GitHub Account**: GitHub account required for OAuth authentication.

## Step 1: Login

### GitHub OAuth Registration

```bash
moai rank login
```

Or use alias:

```bash
moai rank register
```

### How It Works

1. Browser opens for GitHub OAuth authentication.
2. After successful authentication, API key is automatically generated and saved.
3. Global hook is installed to start automatic session tracking.
4. API key is securely stored in `~/.moai/rank/credentials.json`.

### Execution Example

```bash
❯ moai rank login

╭──────────────────────────────── Login ───────────────────────────────╮
│ MoAI Rank Login                                                      │
│                                                                      │
│ This will open your browser to authorize with GitHub.                │
│ After authorization, your API key will be stored securely.           │
╰──────────────────────────────────────────────────────────────────────╯

Opening browser for GitHub authorization...
Waiting for authorization (timeout: 5 minutes)...

╭─────────────────────────── Login Complete ───────────────────────────╮
│ Successfully logged in as your-github-id                             │
│                                                                      │
│ API Key: moai_rank_a9011fac_c...                                     │
│ Stored in: ~/.moai/rank/credentials.json                             │
╰──────────────────────────────────────────────────────────────────────╯

╭───────────────────────── Global Hook Installed ──────────────────────╮
│ Session tracking hook installed globally.                            │
│                                                                      │
│ Your Claude Code sessions will be automatically tracked.             │
│ Hook location: ~/.claude/hooks/moai/session_end__rank_submit.py      │
│                                                                      │
│ To exclude specific projects:                                        │
│   moai rank exclude /path/to/project                                 │
╰──────────────────────────────────────────────────────────────────────╯
```

---

## Step 2: Sync Session Data

### Upload Local Session Data

```bash
moai rank sync
```

This command syncs local Claude Code session data to the MoAI Rank server.

### How It Works

1. Parse session transcripts (20 parallel workers)
2. Submit session data to server (batch mode)
3. Display results after sync completion

### Execution Example

```bash
❯ moai rank sync

Syncing 2577 session(s) to MoAI Rank
Phase 1: Parsing transcripts (parallel: 20 workers)

Parsing transcripts ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ 100% (2577/2577)

Phase 2: Submitting 1873 session(s) (batch mode)
Batch size: 100 | Batches: 19

Submitting batches ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ 100% (19/19)

Sync Complete
✓ Submitted: 1169
○ Skipped:   704 (no usage or duplicate)
✗ Failed:    0
```

---

## Step 3: Check Ranking

### Check Current Ranking

```bash
moai rank status
```

### How It Works

- Call `/api/v1/rank` endpoint using stored API key
- Retrieve user-specific ranking data from server
- Display daily/weekly/monthly/all-time rankings and statistics

### Execution Example

```bash
❯ moai rank status

╭────────────────────────────── MoAI Rank ─────────────────────────────╮
│ your-github-id                                                       │
│                                                                      │
│ 🏆 Global Rank: #42                                                  │
╰──────────────────────────────────────────────────────────────────────╯
╭───── Daily ──────╮  ╭───── Weekly ─────╮  ╭──── Monthly ─────╮  ╭──── All Time ────╮
│ #12              │  │ #28              │  │ #42              │  │ #156             │
╰──────────────────╯  ╰──────────────────╯  ╰──────────────────╯  ╰──────────────────╯
╭─────────────────────────── Token Usage ──────────────────────────────╮
│ 1,247,832 total tokens                                               │
│                                                                      │
│ Input  ██████████████░░░░░░ 847,291 (68%)                            │
│ Output ██████░░░░░░░░░░░░░░ 400,541 (32%)                            │
│                                                                      │
│ Sessions: 47                                                         │
╰──────────────────────────────────────────────────────────────────────╯

● Hook: Installed  |  https://rank.mo.ai.kr
```

---

## Project Management

### Exclude Project from Tracking

```bash
# Exclude current project
moai rank exclude

# Exclude specific path
moai rank exclude /path/to/private

# Wildcard pattern
moai rank exclude "*/confidential/*"

# List excluded projects
moai rank list-excluded
```

### Re-include Excluded Project

```bash
moai rank include /path/to/project
```

### Protection Features

- Can exclude sensitive projects from tracking.
- Data from excluded projects is not transmitted to server.

---

## Logout

### Remove Credentials

```bash
moai rank logout
```

### What Happens

- Remove stored API key
- Remove global hook
- Stop all tracking

---

## Composite Score Algorithm

### Score Calculation

```text
Score = (Token * 0.40) + (Efficiency * 0.25) + (Session * 0.20) + (Streak * 0.15)

Calculation:
- Token = min(1, log10(totalTokens + 1) / 10)
- Efficiency = min(outputTokens / inputTokens, 2) / 2
- Session = min(1, log10(sessions + 1) / 3)
- Streak = min(streak, 30) / 30

Final Score = Weighted Sum * 1000
```

### Score Ranks

| Rank | Score Range |
| --- | --- |
| Diamond | 800+ |
| Platinum | 600-799 |
| Gold | 400-599 |
| Silver | 200-399 |
| Bronze | 0-199 |

---

## Coding Style Analysis

Discover your own coding style through AI analysis:

- **Explorer**: Focus on code exploration and system understanding
- **Creator**: Focus on new features and code generation
- **Refactorer**: Excellence in improving existing code
- **Automator**: Task automation and workflow orchestration