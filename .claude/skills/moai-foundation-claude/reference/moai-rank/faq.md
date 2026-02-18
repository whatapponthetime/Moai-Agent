[Skip to Content](https://adk.mo.ai.kr/en/moai-rank/faq#nextra-skip-nav)

[MoAI Rank](https://adk.mo.ai.kr/en/moai-rank/guide "MoAI Rank") FAQ

Copy page

# Frequently Asked Questions

Frequently asked questions and answers about using MoAI Rank.

* * *

## General Questions [Permalink for this section](https://adk.mo.ai.kr/en/moai-rank/faq\#general-questions)

### Is MoAI Rank free? [Permalink for this section](https://adk.mo.ai.kr/en/moai-rank/faq\#is-moai-rank-free)

Yes, MoAI Rank is completely free. It only automatically collects session data without any additional cost.

### What data is collected? [Permalink for this section](https://adk.mo.ai.kr/en/moai-rank/faq\#what-data-is-collected)

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

### Is my code exposed? [Permalink for this section](https://adk.mo.ai.kr/en/moai-rank/faq\#is-my-code-exposed)

No, code content is not collected at all. Only the following is collected:

- Number of modified files
- Number of added/deleted lines
- Tool types used and their counts

Actual code content, file paths, and prompts are not transmitted.

* * *

## Account & Authentication [Permalink for this section](https://adk.mo.ai.kr/en/moai-rank/faq\#account--authentication)

### Do I need a GitHub account? [Permalink for this section](https://adk.mo.ai.kr/en/moai-rank/faq\#do-i-need-a-github-account)

Yes, we authenticate via GitHub OAuth. You need to sign up if you don’t have a GitHub account.

### Can I delete my account? [Permalink for this section](https://adk.mo.ai.kr/en/moai-rank/faq\#can-i-delete-my-account)

Yes, you can delete your account using the following methods:

1. **Logout from CLI**:



```

moai rank logout
```

2. **Delete account from web dashboard**: Can delete account from profile settings


### Can I export my data? [Permalink for this section](https://adk.mo.ai.kr/en/moai-rank/faq\#can-i-export-my-data)

Yes, can download from web dashboard:

- Export all session data in JSON format
- Export statistics data in CSV format

* * *

## Privacy [Permalink for this section](https://adk.mo.ai.kr/en/moai-rank/faq\#privacy)

### How do I exclude sensitive projects from tracking? [Permalink for this section](https://adk.mo.ai.kr/en/moai-rank/faq\#how-do-i-exclude-sensitive-projects-from-tracking)

```

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
```

### What is private mode? [Permalink for this section](https://adk.mo.ai.kr/en/moai-rank/faq\#what-is-private-mode)

When you enable private mode:

- Display anonymously on leaderboard
- Profile information not public
- Only ranking shown, details private

Can switch from settings in web dashboard.

### Is it safe to use in company projects? [Permalink for this section](https://adk.mo.ai.kr/en/moai-rank/faq\#is-it-safe-to-use-in-company-projects)

We recommend excluding sensitive projects using the `exclude` command:

```

# Exclude company project
moai rank exclude /path/to/company/project
```

Data from excluded projects is not transmitted to server.

* * *

## Synchronization [Permalink for this section](https://adk.mo.ai.kr/en/moai-rank/faq\#synchronization)

### When does synchronization run? [Permalink for this section](https://adk.mo.ai.kr/en/moai-rank/faq\#when-does-synchronization-run)

Automatically runs:

- **Session End Hook**: Automatically submit when Claude Code session ends
- **Manual Sync**: Batch submit existing sessions with `moai rank sync`

### What if sync fails? [Permalink for this section](https://adk.mo.ai.kr/en/moai-rank/faq\#what-if-sync-fails)

Automatically retries, and failed sessions are retried on next sync:

```

# Manually retry
moai rank sync
```

### What if I work offline? [Permalink for this section](https://adk.mo.ai.kr/en/moai-rank/faq\#what-if-i-work-offline)

Offline sessions are stored locally and automatically synced on next connection.

* * *

## Ranking [Permalink for this section](https://adk.mo.ai.kr/en/moai-rank/faq\#ranking)

### How is score calculated? [Permalink for this section](https://adk.mo.ai.kr/en/moai-rank/faq\#how-is-score-calculated)

```

Score = (Token * 0.40) + (Efficiency * 0.25) + (Session * 0.20) + (Streak * 0.15)

Calculation:
- Token = min(1, log10(totalTokens + 1) / 10)
- Efficiency = min(outputTokens / inputTokens, 2) / 2
- Session = min(1, log10(sessions + 1) / 3)
- Streak = min(streak, 30) / 30

Final Score = Weighted Sum * 1000
```

### What are score ranks? [Permalink for this section](https://adk.mo.ai.kr/en/moai-rank/faq\#what-are-score-ranks)

| Rank | Score Range |
| --- | --- |
| Diamond | 800+ |
| Platinum | 600-799 |
| Gold | 400-599 |
| Silver | 200-399 |
| Bronze | 0-199 |

### When is ranking updated? [Permalink for this section](https://adk.mo.ai.kr/en/moai-rank/faq\#when-is-ranking-updated)

- **Real-time**: Reflected immediately upon session submission
- **Daily/Weekly/Monthly**: Calculated at midnight daily
- **All Time**: Real-time cumulative

* * *

## Technical Questions [Permalink for this section](https://adk.mo.ai.kr/en/moai-rank/faq\#technical-questions)

### What tech stack do you use? [Permalink for this section](https://adk.mo.ai.kr/en/moai-rank/faq\#what-tech-stack-do-you-use)

| Category | Technology | Purpose |
| --- | --- | --- |
| Framework | Next.js 16 | Full-stack React framework |
| Language | TypeScript 5 | Type-safe development |
| Database | Neon (PostgreSQL) | Serverless PostgreSQL |
| Cache | Upstash Redis | Distributed caching |
| Authentication | Clerk | GitHub OAuth |

### Is source code public? [Permalink for this section](https://adk.mo.ai.kr/en/moai-rank/faq\#is-source-code-public)

Yes, completely open source:

**[https://github.com/modu-ai/moai-rank](https://github.com/modu-ai/moai-rank)**

### Can I self-host? [Permalink for this section](https://adk.mo.ai.kr/en/moai-rank/faq\#can-i-self-host)

Yes, you can fork the source code and deploy to your own server. See GitHub repository for details.

* * *

## Troubleshooting [Permalink for this section](https://adk.mo.ai.kr/en/moai-rank/faq\#troubleshooting)

### Can’t login? [Permalink for this section](https://adk.mo.ai.kr/en/moai-rank/faq\#cant-login)

1. Check if browser is not blocked
2. Check if GitHub authentication is complete
3. Try again: `moai rank login`

### Sync stuck? [Permalink for this section](https://adk.mo.ai.kr/en/moai-rank/faq\#sync-stuck)

```

# Force interrupt and retry
Ctrl+C
moai rank sync
```

### Ranking not displaying? [Permalink for this section](https://adk.mo.ai.kr/en/moai-rank/faq\#ranking-not-displaying)

1. Check if logged in: `moai rank status`
2. Check if session data exists: `moai rank sync`
3. Check on web dashboard: [https://rank.mo.ai.kr](https://rank.mo.ai.kr/)

* * *

## Other [Permalink for this section](https://adk.mo.ai.kr/en/moai-rank/faq\#other)

### Why did you create MoAI Rank? [Permalink for this section](https://adk.mo.ai.kr/en/moai-rank/faq\#why-did-you-create-moai-rank)

This project was created **as an educational example showing actual MoAI-ADK usage**:

- Real AI agent orchestration experience
- SPEC-First DDD implementation
- Scalable architecture
- Open source contribution

### Where can I leave feedback? [Permalink for this section](https://adk.mo.ai.kr/en/moai-rank/faq\#where-can-i-leave-feedback)

Please leave feedback on GitHub Issues:

**[https://github.com/modu-ai/moai-rank/issues](https://github.com/modu-ai/moai-rank/issues)**

Improvements and bug reports are welcome!

Last updated onFebruary 8, 2026

[Web Dashboard](https://adk.mo.ai.kr/en/moai-rank/dashboard "Web Dashboard") [Claude Code Overview](https://adk.mo.ai.kr/en/claude-code "Claude Code Overview")

* * *