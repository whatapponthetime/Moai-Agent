[Skip to Content](https://adk.mo.ai.kr/en/moai-rank/dashboard#nextra-skip-nav)

[MoAI Rank](https://adk.mo.ai.kr/en/moai-rank/guide "MoAI Rank") Web Dashboard

Copy page

# Web Dashboard

MoAI Rank web dashboard visualizes and displays your token usage, activity patterns, and coding style.

## Access Dashboard [Permalink for this section](https://adk.mo.ai.kr/en/moai-rank/dashboard\#access-dashboard)

**[https://rank.mo.ai.kr](https://rank.mo.ai.kr/)**

After logging in with GitHub OAuth, you can view your dashboard.

## Dashboard Features [Permalink for this section](https://adk.mo.ai.kr/en/moai-rank/dashboard\#dashboard-features)

### 1\. Token Usage Tracking [Permalink for this section](https://adk.mo.ai.kr/en/moai-rank/dashboard\#1-token-usage-tracking)

Track token usage in real-time:

- Input vs output token ratio
- Cache token savings
- Hourly usage patterns
- Model-specific usage analysis

### 2\. Activity Heatmap [Permalink for this section](https://adk.mo.ai.kr/en/moai-rank/dashboard\#2-activity-heatmap)

GitHub-style contribution graph:

- Daily activity history
- Consecutive active days (Streak)
- Weekly/monthly patterns

### 3\. Model Usage Analysis [Permalink for this section](https://adk.mo.ai.kr/en/moai-rank/dashboard\#3-model-usage-analysis)

Usage analysis by Claude model:

- **Opus**: Complex tasks, design
- **Sonnet**: General implementation
- **Haiku**: Quick fixes, simple tasks

### 4\. Tool Usage Statistics [Permalink for this section](https://adk.mo.ai.kr/en/moai-rank/dashboard\#4-tool-usage-statistics)

Usage count by Claude Code tool:

- Read: File reading
- Edit: Code modification
- Bash: Terminal commands
- Other tool usage patterns

### 5\. Hourly Activity [Permalink for this section](https://adk.mo.ai.kr/en/moai-rank/dashboard\#5-hourly-activity)

Activity pattern analysis by time of day:

- Most active hours
- Coding session duration
- Turn count trends

### 6\. Weekly Coding Patterns [Permalink for this section](https://adk.mo.ai.kr/en/moai-rank/dashboard\#6-weekly-coding-patterns)

Activity pattern by day of week:

- Weekday vs weekend activity
- Weekly activity trends
- Optimal coding day analysis

* * *

## Leaderboard [Permalink for this section](https://adk.mo.ai.kr/en/moai-rank/dashboard\#leaderboard)

### Public Leaderboard [Permalink for this section](https://adk.mo.ai.kr/en/moai-rank/dashboard\#public-leaderboard)

Compete with developers worldwide:

- **Daily Ranking**: Today’s ranking
- **Weekly Ranking**: This week’s ranking
- **Monthly Ranking**: This month’s ranking
- **All Time Ranking**: All-time combined

### Personal Profile [Permalink for this section](https://adk.mo.ai.kr/en/moai-rank/dashboard\#personal-profile)

Can set your profile to public or private:

- **Public Mode**: Other users can view your profile
- **Private Mode**: Only ranking shown, details private

* * *

## Privacy Mode [Permalink for this section](https://adk.mo.ai.kr/en/moai-rank/dashboard\#privacy-mode)

### Private Participation [Permalink for this section](https://adk.mo.ai.kr/en/moai-rank/dashboard\#private-participation)

Supports privacy mode to protect sensitive projects:

```

# Exclude current project from tracking
moai rank exclude

# Switch to private mode (set in web dashboard)
```

### Data Protection [Permalink for this section](https://adk.mo.ai.kr/en/moai-rank/dashboard\#data-protection)

- Data from excluded projects is not transmitted to server.
- Stored with anonymous project ID, so paths are not exposed.
- Code content and conversations are never collected.

* * *

## Dashboard Settings [Permalink for this section](https://adk.mo.ai.kr/en/moai-rank/dashboard\#dashboard-settings)

### Profile Settings [Permalink for this section](https://adk.mo.ai.kr/en/moai-rank/dashboard\#profile-settings)

- Change username
- Set avatar image
- Switch privacy mode
- Set profile public/private

### Notification Settings [Permalink for this section](https://adk.mo.ai.kr/en/moai-rank/dashboard\#notification-settings)

- Ranking change alerts
- Weekly report emails
- Activity record notifications

* * *

## API [Permalink for this section](https://adk.mo.ai.kr/en/moai-rank/dashboard\#api)

### Public API Endpoints [Permalink for this section](https://adk.mo.ai.kr/en/moai-rank/dashboard\#public-api-endpoints)

Can directly call APIs used by dashboard:

#### Get Leaderboard [Permalink for this section](https://adk.mo.ai.kr/en/moai-rank/dashboard\#get-leaderboard)

```

GET /api/leaderboard?period=weekly&limit=50&offset=0
```

| Parameter | Type | Default | Description |
| --- | --- | --- | --- |
| `period` | string | `weekly` | `daily`, `weekly`, `monthly`, `all_time` |
| `limit` | number | `50` | Result count (1-100) |
| `offset` | number | `0` | Page offset |

#### Get User Profile [Permalink for this section](https://adk.mo.ai.kr/en/moai-rank/dashboard\#get-user-profile)

```

GET /api/users/:username
```

Retrieves specific user’s public profile.

* * *

## Tech Stack [Permalink for this section](https://adk.mo.ai.kr/en/moai-rank/dashboard\#tech-stack)

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

Last updated onFebruary 8, 2026

[Usage Guide](https://adk.mo.ai.kr/en/moai-rank/guide "Usage Guide") [FAQ](https://adk.mo.ai.kr/en/moai-rank/faq "FAQ")

* * *