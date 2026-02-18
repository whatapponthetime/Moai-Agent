[Skip to Content](https://adk.mo.ai.kr/en/advanced/agent-guide#nextra-skip-nav)

[Advanced](https://adk.mo.ai.kr/en/advanced/skill-guide "Advanced") Agent Guide

Copy page

# Agent Guide

Detailed guide to MoAI-ADK’s agent system.

**One-line summary**: Agents are **expert teams** for each domain. MoAI acts as team leader, delegating tasks to appropriate experts.

## What are Agents? [Permalink for this section](https://adk.mo.ai.kr/en/advanced/agent-guide\#what-are-agents)

Agents are **AI task executors** specialized in specific domains.

Based on Claude Code’s **Sub-agent** system, each agent has an independent context window, custom system prompt, specific tool access, and independent permissions.

Using a company organization analogy: MoAI is the CEO, Manager agents are department heads, Expert agents are experts in each field, and Builder agents are HR teams recruiting new team members.

## MoAI Orchestrator [Permalink for this section](https://adk.mo.ai.kr/en/advanced/agent-guide\#moai-orchestrator)

MoAI is the **top-level coordinator** of MoAI-ADK. It analyzes user requests and delegates tasks to appropriate agents.

### MoAI’s Core Rules [Permalink for this section](https://adk.mo.ai.kr/en/advanced/agent-guide\#moais-core-rules)

| Rule | Description |
| --- | --- |
| Delegation Only | Complex tasks are delegated to expert agents, not performed directly |
| User Interface | Only MoAI handles user interaction (subagents cannot) |
| Parallel Execution | Independent tasks are delegated to multiple agents simultaneously |
| Result Integration | Consolidates agent execution results and reports to user |

### MoAI’s Request Processing Flow [Permalink for this section](https://adk.mo.ai.kr/en/advanced/agent-guide\#moais-request-processing-flow)

## Agent 3-Tier Structure [Permalink for this section](https://adk.mo.ai.kr/en/advanced/agent-guide\#agent-3-tier-structure)

MoAI-ADK agents are organized into **3 tiers**:

## Manager Agent Details [Permalink for this section](https://adk.mo.ai.kr/en/advanced/agent-guide\#manager-agent-details)

Manager agents **coordinate and manage workflows**.

| Agent | Role | Used Skills | Main Tools |
| --- | --- | --- | --- |
| `manager-spec` | SPEC document creation, EARS format requirements | `moai-workflow-spec` | Read, Write, Grep |
| `manager-ddd` | ANALYZE-PRESERVE-IMPROVE cycle execution | `moai-workflow-ddd`, `moai-foundation-core` | Read, Write, Edit, Bash |
| `manager-docs` | Document generation, Nextra integration | `moai-library-nextra`, `moai-docs-generation` | Read, Write, Edit |
| `manager-quality` | TRUST 5 verification, code review | `moai-foundation-quality` | Read, Grep, Bash |
| `manager-strategy` | System design, architecture decisions | `moai-foundation-core`, `moai-foundation-philosopher` | Read, Grep, Glob |
| `manager-project` | Project configuration, initialization | `moai-workflow-project` | Read, Write, Bash |
| `manager-git` | Git branching, merge strategy | `moai-foundation-core` | Bash (git) |

### Manager Agents and Workflow Commands [Permalink for this section](https://adk.mo.ai.kr/en/advanced/agent-guide\#manager-agents-and-workflow-commands)

Manager agents connect directly to major MoAI workflow commands:

```

# Plan phase: manager-spec creates SPEC document
> /moai plan "Implement user authentication system"

# Run phase: manager-ddd executes DDD cycle
> /moai run SPEC-AUTH-001

# Sync phase: manager-docs synchronizes documentation
> /moai sync SPEC-AUTH-001
```

## Expert Agent Details [Permalink for this section](https://adk.mo.ai.kr/en/advanced/agent-guide\#expert-agent-details)

Expert agents perform **actual implementation work** in specific domains.

| Agent | Role | Used Skills | Main Tools |
| --- | --- | --- | --- |
| `expert-backend` | API development, server logic, DB integration | `moai-domain-backend`, language-specific skills | Read, Write, Edit, Bash |
| `expert-frontend` | React components, UI implementation | `moai-domain-frontend`, `moai-lang-typescript` | Read, Write, Edit, Bash |
| `expert-security` | Security analysis, OWASP compliance | `moai-foundation-core` (TRUST 5) | Read, Grep, Bash |
| `expert-devops` | CI/CD, infrastructure, deployment automation | Platform-specific skills | Read, Write, Bash |
| `expert-performance` | Performance optimization, profiling | Domain-specific skills | Read, Grep, Bash |
| `expert-debug` | Debugging, error analysis, problem resolution | Language-specific skills | Read, Grep, Bash |
| `expert-testing` | Test creation, coverage improvement | `moai-workflow-testing` | Read, Write, Bash |
| `expert-refactoring` | Code refactoring, architecture improvement | `moai-workflow-ddd` | Read, Write, Edit |

### Expert Agent Usage Examples [Permalink for this section](https://adk.mo.ai.kr/en/advanced/agent-guide\#expert-agent-usage-examples)

```

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
```

## Builder Agent Details [Permalink for this section](https://adk.mo.ai.kr/en/advanced/agent-guide\#builder-agent-details)

Builder agents create **new components that extend MoAI-ADK**.

| Agent | Role | Output |
| --- | --- | --- |
| `builder-agent` | Create new agent definitions | `.claude/agents/moai/*.md` |
| `builder-skill` | Create new skills | `.claude/skills/my-skills/*/skill.md` |
| `builder-command` | Create new slash commands | `.claude/commands/moai/*.md` |
| `builder-plugin` | Create new plugins | `.claude-plugin/plugin.json` |

For details on builder agents, refer to [Builder Agent Guide](https://adk.mo.ai.kr/advanced/builder-agents).

## Agent Selection Decision Tree [Permalink for this section](https://adk.mo.ai.kr/en/advanced/agent-guide\#agent-selection-decision-tree)

The process by which MoAI analyzes user requests and selects appropriate agents:

### Agent Selection Criteria [Permalink for this section](https://adk.mo.ai.kr/en/advanced/agent-guide\#agent-selection-criteria)

| Task Type | Agent to Select | Example |
| --- | --- | --- |
| Code reading/analysis | Explore | ”Analyze this project’s structure” |
| API development | expert-backend | ”Create REST API endpoints” |
| UI implementation | expert-frontend | ”Create login page” |
| Bug fixing | expert-debug | ”Find cause of this error” |
| Test writing | expert-testing | ”Add tests for this function” |
| Security review | expert-security | ”Check for security vulnerabilities” |
| SPEC creation | manager-spec | `/moai plan "feature description"` |
| DDD implementation | manager-ddd | `/moai run SPEC-XXX` |
| Document generation | manager-docs | `/moai sync SPEC-XXX` |
| Code review | manager-quality | ”Review this PR” |
| Extension creation | builder-\* | “Create new skill” |

## Agent Definition Files [Permalink for this section](https://adk.mo.ai.kr/en/advanced/agent-guide\#agent-definition-files)

Agents are defined as markdown files in the `.claude/agents/moai/` directory.

### File Structure [Permalink for this section](https://adk.mo.ai.kr/en/advanced/agent-guide\#file-structure)

```

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
```

### Agent Definition Format [Permalink for this section](https://adk.mo.ai.kr/en/advanced/agent-guide\#agent-definition-format)

```

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
```

**Caution**: Subagents **cannot directly ask users questions**. All user interaction happens only through MoAI. Collect necessary information before delegating to agents.

## Agent Collaboration Patterns [Permalink for this section](https://adk.mo.ai.kr/en/advanced/agent-guide\#agent-collaboration-patterns)

### Sequential Execution (With Dependencies) [Permalink for this section](https://adk.mo.ai.kr/en/advanced/agent-guide\#sequential-execution-with-dependencies)

```

# 1. manager-spec creates SPEC
# 2. manager-ddd implements based on SPEC
# 3. manager-docs generates documentation
> /moai plan "authentication system"
> /moai run SPEC-AUTH-001
> /moai sync SPEC-AUTH-001
```

### Parallel Execution (Independent Tasks) [Permalink for this section](https://adk.mo.ai.kr/en/advanced/agent-guide\#parallel-execution-independent-tasks)

```

# MoAI delegates independent tasks simultaneously
# - expert-backend: API implementation
# - expert-frontend: UI implementation
# - expert-testing: Test writing
> Create both backend API and frontend UI simultaneously
```

### Agent Chain [Permalink for this section](https://adk.mo.ai.kr/en/advanced/agent-guide\#agent-chain)

For complex tasks, multiple agents work sequentially, handing off to each other.

## Sub-agent System [Permalink for this section](https://adk.mo.ai.kr/en/advanced/agent-guide\#sub-agent-system)

Claude Code’s official Sub-agent system forms the foundation of MoAI-ADK’s agent architecture.

### What are Sub-agents? [Permalink for this section](https://adk.mo.ai.kr/en/advanced/agent-guide\#what-are-sub-agents)

Sub-agents are **AI assistants specialized for specific task types**.

| Feature | Description |
| --- | --- |
| **Independent Context** | Each sub-agent runs in its own context window |
| **Custom Prompts** | Customized system prompts define behavior |
| **Specific Tool Access** | Only necessary tools provided |
| **Independent Permissions** | Individual permission settings |

### Sub-agent vs Agent Teams [Permalink for this section](https://adk.mo.ai.kr/en/advanced/agent-guide\#sub-agent-vs-agent-teams)

| Sub-agent Mode | Agent Teams Mode |
| --- | --- |
| Single sub-agent works sequentially | Multiple team members collaborate in parallel |
| Best for simple tasks | Best for complex multi-phase tasks |
| Faster execution | Requires careful coordination |

## Agent Teams [Permalink for this section](https://adk.mo.ai.kr/en/advanced/agent-guide\#agent-teams)

Agent Teams mode is an advanced workflow where multiple experts **collaborate in parallel**.

**Experimental Feature**: Agent Teams require Claude Code v2.1.32+ with `CLAUDE_CODE_EXPERIMENTAL_AGENT_TEAMS=1` environment variable and `workflow.team.enabled: true` setting.

### Team Mode Settings [Permalink for this section](https://adk.mo.ai.kr/en/advanced/agent-guide\#team-mode-settings)

| Setting | Default | Description |
| --- | --- | --- |
| `workflow.team.enabled` | `false` | Enable Agent Teams mode |
| `workflow.team.max_teammates` | `10` | Maximum number of teammates per team |
| `workflow.team.auto_selection` | `true` | Auto-select mode based on complexity |

### Mode Selection [Permalink for this section](https://adk.mo.ai.kr/en/advanced/agent-guide\#mode-selection)

| Flag | Behavior |
| --- | --- |
| **—team** | Force team mode |
| **—solo** | Force sub-agent mode |
| **No flag** | Auto-select based on complexity thresholds |

### /moai —team Workflow [Permalink for this section](https://adk.mo.ai.kr/en/advanced/agent-guide\#moai---team-workflow)

MoAI’s `--team` flag activates Agent Teams for SPEC workflow.

```

# Plan phase: Team mode for research and analysis
> /moai plan --team "user authentication system"
# researcher, analyst, architect work in parallel

# Run phase: Team mode for implementation
> /moai run --team SPEC-AUTH-001
# backend-dev, frontend-dev, tester work in parallel

# Sync phase: Documentation (always sub-agent)
> /moai sync SPEC-AUTH-001
# manager-docs generates documentation
```

### Team Composition [Permalink for this section](https://adk.mo.ai.kr/en/advanced/agent-guide\#team-composition)

| Role | Plan Phase | Run Phase | Permissions |
| --- | --- | --- | --- |
| **Team Lead** | MoAI | MoAI | Coordinates all work |
| **Researcher** | researcher (haiku) | - | Read-only code analysis |
| **Analyst** | analyst (inherit) | - | Requirements analysis |
| **Architect** | architect (inherit) | - | Technical design |
| **Backend Dev** | - | backend-dev (acceptEdits) | Server-side files |
| **Frontend Dev** | - | frontend-dev (acceptEdits) | Client-side files |
| **Tester** | - | tester (acceptEdits) | Test files |
| **Designer** | - | designer (acceptEdits) | UI/UX design |
| **Quality** | - | quality (plan) | TRUST 5 validation |

### Team File Ownership [Permalink for this section](https://adk.mo.ai.kr/en/advanced/agent-guide\#team-file-ownership)

Agent Teams clearly separate file ownership to prevent conflicts.

| File Type | Ownership |
| --- | --- |
| `.md` docs | All team members |
| `src/` | backend-dev |
| `components/` | frontend-dev |
| `tests/` | tester |
| `*.design.pen` | designer |
| Shared config | All team members |

## Related Documents [Permalink for this section](https://adk.mo.ai.kr/en/advanced/agent-guide\#related-documents)

- [Skill Guide](https://adk.mo.ai.kr/advanced/skill-guide) \- Skill system used by agents
- [Builder Agent Guide](https://adk.mo.ai.kr/advanced/builder-agents) \- Custom agent creation
- [Hooks Guide](https://adk.mo.ai.kr/advanced/hooks-guide) \- Automation before/after agent execution
- [SPEC-based Development](https://adk.mo.ai.kr/core-concepts/spec-based-dev) \- SPEC workflow details

**Tip**: You don’t need to specify agents directly. Just make natural language requests to MoAI and it will automatically select the optimal agent. Say “Create API” and `expert-backend` is automatically called, “Review this code” and `manager-quality` is automatically called.

Last updated onFebruary 12, 2026

[Skill Guide](https://adk.mo.ai.kr/en/advanced/skill-guide "Skill Guide") [Builder Agents Guide](https://adk.mo.ai.kr/en/advanced/builder-agents "Builder Agents Guide")

* * *

* * *

# Extended Technical Reference

# Advanced Agent Patterns - Anthropic Engineering Insights

Sources:
- https://www.anthropic.com/engineering/effective-harnesses-for-long-running-agents
- https://www.anthropic.com/engineering/advanced-tool-use
- https://www.anthropic.com/engineering/code-execution-with-mcp
- https://www.anthropic.com/engineering/building-agents-with-the-claude-agent-sdk
- https://www.anthropic.com/engineering/effective-context-engineering-for-ai-agents
- https://www.anthropic.com/engineering/writing-tools-for-agents
- https://www.anthropic.com/engineering/multi-agent-research-system
- https://www.anthropic.com/engineering/claude-code-best-practices
- https://www.anthropic.com/engineering/claude-think-tool
- https://www.anthropic.com/engineering/building-effective-agents
- https://www.anthropic.com/engineering/contextual-retrieval

Updated: 2026-01-06

## Long-Running Agent Architecture

### Two-Agent Pattern

For complex, multi-session tasks, use a two-agent system:

Initializer Agent (runs once):
- Sets up project structure and environment
- Creates feature registry tracking completion status
- Establishes progress documentation patterns
- Generates initialization scripts for future sessions

Executor Agent (runs repeatedly):
- Consumes environment created by initializer
- Works on single features per session
- Updates progress documentation
- Maintains feature registry state

### Feature Registry Pattern

Maintain a JSON file tracking all functionality:

```json
{
  "features": [
    {"id": "auth-login", "status": "complete", "tested": true},
    {"id": "auth-logout", "status": "in-progress", "tested": false},
    {"id": "user-profile", "status": "pending", "tested": false}
  ]
}
```

This enables:
- Clear work boundaries per session
- Progress tracking across sessions
- Prioritization of incomplete features

### Progress Documentation

Create persistent progress logs (claude-progress.txt):
- Summary of completed work
- Current feature status
- Blockers and decisions made
- Next steps for future sessions

Commit progress with git for history preservation.

### Session Initialization Protocol

At start of each session:
1. Verify correct directory
2. Review progress logs
3. Select priority feature from registry
4. Test existing baseline functionality
5. Begin focused work on single feature

## Dynamic Tool Discovery

### Tool Search Pattern

For large tool libraries, implement discovery mechanism:

Benefits:
- 85% reduction in token consumption
- Tools loaded only when needed
- Reduced context pollution

Implementation approach:
- Register tools with metadata including name, description, and keywords
- Provide search tool that queries registry
- Use defer_loading parameter to hide tools until searched
- Agent searches for relevant tools before use

### Programmatic Tool Orchestration

For complex multi-step workflows:

Benefits:
- 37% token reduction on complex tasks
- Elimination of repeated inference passes
- Parallel operation execution

Pattern:
- Agent generates code orchestrating multiple tool calls
- Code executes in sandbox environment
- Results returned to agent in single response

### Usage Examples for Tool Clarity

JSON schemas alone are insufficient. Provide 3-5 concrete examples:

Minimal invocation: Required parameters only
Partial invocation: Common optional parameters
Complete invocation: All parameters with edge cases

Examples teach API conventions without token overhead.

## Code Execution Efficiency

### Data Processing in Sandbox

Process data before model sees results:

Benefits:
- 98.7% token reduction possible (150K to 2K tokens)
- Deterministic operations executed reliably
- Complex transformations handled efficiently

Pattern:
- Agent writes filtering and aggregation code
- Code executes in sandboxed environment
- Only relevant results returned to model
- Intermediate results persisted for resumable workflows

### Reusable Skills Pattern

Save working code as functions:
- Extract successful patterns into reusable modules
- Reference modules in future sessions
- Build library of proven implementations

## Multi-Agent Coordination

### Orchestrator-Worker Architecture

Lead Agent (higher capability model):
- Analyzes incoming queries
- Decomposes into parallel subtasks
- Spawns specialized worker agents
- Synthesizes results into final output

Worker Agents (cost-effective models):
- Execute specific, focused tasks
- Return condensed summaries (1K-2K tokens)
- Operate with isolated context windows
- Use specialized prompts and tool access

### Hierarchical Communication

Lead to workers:
- Clear task boundaries
- Specific output format requirements
- Guidance on tools and sources
- Prevention of duplicate work

Workers to lead:
- Condensed findings summary
- Source attribution
- Quality indicators
- Error or blocker reports

### Scaling Rules

Simple queries: Single agent with 3-10 tool calls
Complex research: 10+ workers with parallel execution
State persistence: Prevent disruption during updates
Error resilience: Adapt when tools fail rather than restart

## Context Engineering

### Core Principle

Find the smallest possible set of high-signal tokens that maximize likelihood of desired outcome. Treat context as finite, precious resource.

### Information Prioritization

LLMs lose focus as context grows (context rot). Every token depletes attention budget.

Strategies:
- Place critical information at start and end of context
- Use clear section markers (XML tags or Markdown headers)
- Remove redundant or low-signal content
- Summarize when precision not required

### Context Compaction

For long-running tasks:
- Summarize conversation history automatically
- Reinitiate with compressed context
- Preserve architectural decisions and key findings
- Maintain external memory files outside context window

### Just-In-Time Retrieval

Maintain lightweight identifiers and load data dynamically:
- Store file paths, URLs, and IDs
- Load content only when needed
- Combine upfront retrieval for speed with autonomous exploration
- Progressive disclosure mirrors human cognition

## Tool Design Best Practices

### Consolidation Over Proliferation

Combine related functionality into single tools:

Instead of: list_users, list_events, create_event, delete_event
Use: manage_events with action parameter

Benefits:
- Reduced tool selection complexity
- Clearer mental model for agent
- Lower probability of incorrect tool choice

### Context-Aware Responses

Return high-signal information:
- Use natural language names rather than cryptic IDs
- Include relevant metadata in responses
- Format for agent consumption, not human reading

### Parameter Specification

Clear parameter naming:
- user_id not user
- start_date not start
- include_archived not archived

Enable response format control:
- Optional enum for concise or detailed responses
- Agent specifies verbosity based on task needs

### Error Handling

Replace opaque error codes with instructive feedback:
- Explain what went wrong
- Suggest correct usage
- Provide examples of valid parameters
- Encourage token-efficient strategies

### Poka-Yoke Design

Make incorrect usage harder than correct usage:
- Validate parameters before execution
- Return helpful errors for invalid combinations
- Design APIs that guide toward success

## Think Tool Integration

### When to Use Think Tool

High-value scenarios:
- Processing complex tool outputs before proceeding
- Compliance verification with detailed guidelines
- Sequential decision-making where errors are consequential
- Multi-step domains requiring careful consideration

### Performance Characteristics

Measured improvements:
- Airline domain: 54% relative improvement with targeted examples
- Retail scenarios: 81.2% pass-rate
- SWE-bench: 1.6% average improvement

### Implementation Strategy

Pair with optimized domain-specific prompts
Place comprehensive instructions in system prompts
Avoid for non-sequential or simple tasks
Use for reflecting on tool outputs mid-response

## Verification Patterns

### Quality Assurance Approaches

Code verification: Linting and static analysis most effective
Visual feedback: Screenshot outputs for UI tasks
LLM judgment: Fuzzy criteria evaluation (tone, quality)
Human evaluation: Edge cases automation misses

### Diagnostic Questions

When agents underperform:

Missing context? Restructure search APIs for discoverability
Repeated failures? Add formal validation rules in tool definitions
Error-prone approach? Provide alternative tools enabling different strategies
Variable performance? Build representative test sets for programmatic evaluation

## Workflow Pattern: Explore-Plan-Code-Commit

### Phase 1: Explore

Start with exploration without coding:
- Read files to understand structure
- Identify relevant components
- Map dependencies and interfaces

### Phase 2: Plan

Use extended thinking prompts:
- Outline approach before implementation
- Consider alternatives and tradeoffs
- Define clear success criteria

### Phase 3: Code

Implement iteratively:
- Small, testable changes
- Verify each step before proceeding
- Handle edge cases explicitly

### Phase 4: Commit

Meaningful commits:
- Descriptive messages explaining why
- Logical groupings of related changes
- Clean history for future reference

## Hybrid Context Retrieval

### Combined Approach

Semantic embeddings: Capture meaning relationships
BM25 keyword search: Handle exact phrases and error codes

### Context Prepending

Enrich chunks with metadata before encoding:
- Transform isolated statements into fully-contextualized information
- Include surrounding context and relationships
- Improves retrieval precision by 49-67%

### Configuration

Optimal settings from research:
- Top-20 chunks outperform smaller selections
- Domain-specific prompts improve quality
- Reranking adds significant precision gains

## Security Considerations

### Credential Handling

Web-based execution:
- Credentials never enter sandbox
- Proxy services handle authenticated operations
- Branch-level restrictions enforced externally

### Sandboxing Architecture

Dual-layer protection:
- Filesystem isolation: Read/write boundaries
- Network isolation: Domain allowlists via proxy

OS-level enforcement using kernel security features.

### Permission Boundaries

84% reduction in permission prompts through:
- Defined operation boundaries
- Automatic allowlisting of safe operations
- Clear separation of privileged actions
