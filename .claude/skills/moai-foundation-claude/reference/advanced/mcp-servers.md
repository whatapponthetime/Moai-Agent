[Skip to Content](https://adk.mo.ai.kr/en/advanced/mcp-servers#nextra-skip-nav)

[Advanced](https://adk.mo.ai.kr/en/advanced/skill-guide "Advanced") MCP Servers

Copy page

# MCP Servers Guide

Detailed guide to leveraging Claude Code’s MCP (Model Context Protocol) servers.

**One-line summary**: MCP is the **USB port that connects external tools** to Claude Code. Query up-to-date documentation with Context7, analyze complex problems with Sequential Thinking.

## What is MCP? [Permalink for this section](https://adk.mo.ai.kr/en/advanced/mcp-servers\#what-is-mcp)

MCP (Model Context Protocol) is a standard protocol that **connects external tools and services** to Claude Code.

Claude Code has basic tools like file read/write and terminal commands. Through MCP, you can extend this toolset to add features like library documentation lookup, knowledge graph storage, step-by-step reasoning, and more.

## MCP Servers Used in MoAI [Permalink for this section](https://adk.mo.ai.kr/en/advanced/mcp-servers\#mcp-servers-used-in-moai)

### MCP Server List [Permalink for this section](https://adk.mo.ai.kr/en/advanced/mcp-servers\#mcp-server-list)

| MCP Server | Purpose | Tools | Activation |
| --- | --- | --- | --- |
| **Context7** | Real-time library documentation lookup | `resolve-library-id`, `get-library-docs` | `.mcp.json` |
| **Sequential Thinking** | Step-by-step reasoning, UltraThink | `sequentialthinking` | `.mcp.json` |
| **Google Stitch** | AI-powered UI/UX design generation ( [Detailed Guide](https://adk.mo.ai.kr/advanced/stitch-guide)) | `generate_screen`, `extract_context` etc. | `.mcp.json` |
| **Claude in Chrome** | Browser automation | `navigate`, `screenshot` etc. | `.mcp.json` |

## Using Context7 [Permalink for this section](https://adk.mo.ai.kr/en/advanced/mcp-servers\#using-context7)

Context7 is an MCP server that **queries library official documentation in real-time**.

### Why is it Needed? [Permalink for this section](https://adk.mo.ai.kr/en/advanced/mcp-servers\#why-is-it-needed)

Claude Code’s training data only includes information up to a certain point. With Context7, you can reference **the latest version of official documentation** in real-time to generate accurate code.

| Situation | Without Context7 | With Context7 |
| --- | --- | --- |
| React 19 new features | May not be in training data | Reference latest official docs |
| Next.js 16 setup | May use old version patterns | Apply current version patterns |
| FastAPI latest APIs | May use old syntax | Apply latest syntax |

### How to Use [Permalink for this section](https://adk.mo.ai.kr/en/advanced/mcp-servers\#how-to-use)

Context7 operates in two stages.

**Stage 1: Query Library ID**

```

# Claude Code calls internally
> Write code referencing React's latest documentation

# What Context7 does:
# mcp__context7__resolve-library-id("react")
# → Library ID: /facebook/react
```

**Stage 2: Search Documentation**

```

# Search docs for specific topic
# mcp__context7__get-library-docs("/facebook/react", "useEffect cleanup")
# → Returns useEffect cleanup function related content from React official docs
```

### Real-World Use Cases [Permalink for this section](https://adk.mo.ai.kr/en/advanced/mcp-servers\#real-world-use-cases)

```

# Scenario: Next.js 16 App Router setup
> Set up project with Next.js 16

# Claude Code internal operation:
# 1. Query Next.js latest docs with Context7
# 2. Check App Router setup patterns
# 3. Generate latest config files
# 4. Apply official recommendations
```

### Supported Library Examples [Permalink for this section](https://adk.mo.ai.kr/en/advanced/mcp-servers\#supported-library-examples)

| Category | Libraries |
| --- | --- |
| Frontend | React, Next.js, Vue, Svelte, Angular |
| Backend | FastAPI, Django, Express, NestJS, Spring |
| Database | PostgreSQL, MongoDB, Redis, Prisma |
| Testing | pytest, Jest, Vitest, Playwright |
| Infrastructure | Docker, Kubernetes, Terraform |
| Other | TypeScript, Tailwind CSS, shadcn/ui |

## Sequential Thinking (UltraThink) [Permalink for this section](https://adk.mo.ai.kr/en/advanced/mcp-servers\#sequential-thinking-ultrathink)

Sequential Thinking is an MCP server that **analyzes complex problems step-by-step**.

### Normal Thinking vs Sequential Thinking [Permalink for this section](https://adk.mo.ai.kr/en/advanced/mcp-servers\#normal-thinking-vs-sequential-thinking)

| Aspect | Normal Thinking | Sequential Thinking |
| --- | --- | --- |
| Analysis Depth | Surface | Deep step-by-step analysis |
| Problem Decomposition | Simple | Structured decomposition |
| Revision/Correction | Limited | Can revise previous thoughts |
| Branch Exploration | Single path | Explore multiple paths |

### UltraThink Mode [Permalink for this section](https://adk.mo.ai.kr/en/advanced/mcp-servers\#ultrathink-mode)

Using the `--ultrathink` flag activates enhanced analysis mode.

```

# Architecture analysis with UltraThink mode
> Design an authentication system architecture --ultrathink

# Claude Code uses Sequential Thinking MCP to:
# 1. Decompose problem into sub-problems
# 2. Analyze each sub-problem step-by-step
# 3. Review and revise previous conclusions
# 4. Derive optimal solution
```

### Activation Scenarios [Permalink for this section](https://adk.mo.ai.kr/en/advanced/mcp-servers\#activation-scenarios)

Sequential Thinking automatically activates in the following scenarios:

| Scenario | Example |
| --- | --- |
| Complex problem decomposition | ”Design a microservices architecture” |
| Affecting 3+ files | ”Refactor the entire authentication system” |
| Technology selection comparison | ”JWT vs session authentication, which is better?” |
| Trade-off analysis | ”How to maintain performance while improving maintainability?” |
| Breaking change review | ”What impact will this API change have on existing clients?” |

### Sequential Thinking Stages [Permalink for this section](https://adk.mo.ai.kr/en/advanced/mcp-servers\#sequential-thinking-stages)

## MCP Configuration [Permalink for this section](https://adk.mo.ai.kr/en/advanced/mcp-servers\#mcp-configuration)

### .mcp.json Configuration [Permalink for this section](https://adk.mo.ai.kr/en/advanced/mcp-servers\#mcpjson-configuration)

Configure MCP servers in the `.mcp.json` file at the project root.

```

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
```

### Activation in settings.local.json [Permalink for this section](https://adk.mo.ai.kr/en/advanced/mcp-servers\#activation-in-settingslocaljson)

To personally enable a specific MCP server, add it to `settings.local.json`.

```

{
  "enabledMcpjsonServers": [\
    "context7"\
  ]
}
```

### Permission Allow in settings.json [Permalink for this section](https://adk.mo.ai.kr/en/advanced/mcp-servers\#permission-allow-in-settingsjson)

To use MCP tools, you must register them in `permissions.allow`.

```

{
  "permissions": {
    "allow": [\
      "mcp__context7__resolve-library-id",\
      "mcp__context7__get-library-docs",\
      "mcp__sequential-thinking__*"\
    ]
  }
}
```

## Real-World Examples [Permalink for this section](https://adk.mo.ai.kr/en/advanced/mcp-servers\#real-world-examples)

### Using Context7 for Latest React Documentation [Permalink for this section](https://adk.mo.ai.kr/en/advanced/mcp-servers\#using-context7-for-latest-react-documentation)

```

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
```

### Using UltraThink for Complex Architecture Decisions [Permalink for this section](https://adk.mo.ai.kr/en/advanced/mcp-servers\#using-ultrathink-for-complex-architecture-decisions)

```

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
```

## Related Documentation [Permalink for this section](https://adk.mo.ai.kr/en/advanced/mcp-servers\#related-documentation)

- [settings.json Guide](https://adk.mo.ai.kr/advanced/settings-json) \- MCP server permission configuration
- [Skill Guide](https://adk.mo.ai.kr/advanced/skill-guide) \- Relationship between skills and MCP tools
- [Agent Guide](https://adk.mo.ai.kr/advanced/agent-guide) \- MCP tool utilization by agents
- [CLAUDE.md Guide](https://adk.mo.ai.kr/advanced/claude-md-guide) \- MCP-related configuration references
- [Google Stitch Guide](https://adk.mo.ai.kr/advanced/stitch-guide) \- AI-powered UI/UX design tool detailed usage

**Tip**: Context7 is most useful when referencing the latest library documentation. Activate Context7 when adopting new frameworks or upgrading to the latest version to get accurate code.

Last updated onFebruary 8, 2026

[CLAUDE.md Guide](https://adk.mo.ai.kr/en/advanced/claude-md-guide "CLAUDE.md Guide") [Pencil Guide](https://adk.mo.ai.kr/en/advanced/pencil-guide "Pencil Guide")

* * *