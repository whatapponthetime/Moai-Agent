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

```bash
# Exclude current project from tracking
moai rank exclude

# Switch to private mode (set in web dashboard)
```

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

```bash
GET /api/leaderboard?period=weekly&limit=50&offset=0
```

| Parameter | Type | Default | Description |
| --- | --- | --- | --- |
| `period` | string | `weekly` | `daily`, `weekly`, `monthly`, `all_time` |
| `limit` | number | `50` | Result count (1-100) |
| `offset` | number | `0` | Page offset |

#### Get User Profile

```bash
GET /api/users/:username
```

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