[Skip to Content](https://adk.mo.ai.kr/en/worktree#nextra-skip-nav)

[Git Worktree](https://adk.mo.ai.kr/en/worktree/guide "Git Worktree") Git Worktree

Copy page

# Git Worktree Overview

Git Worktree is a core feature in MoAI-ADK for parallel development. It provides complete isolation by allowing each SPEC to be developed in an independent environment.

## Why Do We Need Worktree? [Permalink for this section](https://adk.mo.ai.kr/en/worktree\#why-do-we-need-worktree)

### Problem: Shared LLM Settings [Permalink for this section](https://adk.mo.ai.kr/en/worktree\#problem-shared-llm-settings)

In traditional MoAI-ADK, when you use `moai glm` or `moai cc` to change the LLM, **the same LLM is applied to all open sessions**. This causes the following issues:

- **SPEC Interference**: LLM settings affect each other when developing different SPECs
- **No Parallel Development**: Cannot develop multiple SPECs simultaneously
- **Cost Inefficiency**: Must use expensive Opus in all sessions

### Solution: Complete Isolation [Permalink for this section](https://adk.mo.ai.kr/en/worktree\#solution-complete-isolation)

With Git Worktree, each SPEC maintains **completely independent Git state and LLM settings**:

## Core Workflow [Permalink for this section](https://adk.mo.ai.kr/en/worktree\#core-workflow)

### 3-Step Development Process [Permalink for this section](https://adk.mo.ai.kr/en/worktree\#3-step-development-process)

MoAI-ADK development with Git Worktree consists of 3 steps:

### Step-by-Step Details [Permalink for this section](https://adk.mo.ai.kr/en/worktree\#step-by-step-details)

#### Step 1: Plan (Terminal 1) [Permalink for this section](https://adk.mo.ai.kr/en/worktree\#step-1-plan-terminal-1)

Generate a SPEC document using Claude 4.5 Opus:

```

> /moai plan "Add authentication system" --worktree
```

**What happens**:

- Automatic creation of SPEC document in EARS format
- Automatic creation of Worktree for that SPEC
- Automatic creation and checkout of feature branch

**Results**:

- `.moai/specs/SPEC-AUTH-001/spec.md`
- New Worktree directory
- `feature/SPEC-AUTH-001` branch

#### Step 2: Implement (Terminals 2, 3, 4…) [Permalink for this section](https://adk.mo.ai.kr/en/worktree\#step-2-implement-terminals-2-3-4)

Implement using GLM 4.7 or other cost-effective models:

```

# Enter Worktree (new terminal)
$ moai worktree go SPEC-AUTH-001

# Change LLM
$ moai glm

# Start development
$ claude
> /moai run SPEC-AUTH-001
> /moai sync SPEC-AUTH-001
```

**Benefits**:

- Completely isolated working environment
- GLM cost efficiency (70% savings vs Opus)
- Unlimited parallel development without conflicts

#### Step 3: Merge & Cleanup [Permalink for this section](https://adk.mo.ai.kr/en/worktree\#step-3-merge--cleanup)

```

moai worktree done SPEC-AUTH-001              # main → merge → cleanup
moai worktree done SPEC-AUTH-001 --push       # above + push to remote
```

## Worktree Command Reference [Permalink for this section](https://adk.mo.ai.kr/en/worktree\#worktree-command-reference)

| Command | Description | Example |
| --- | --- | --- |
| `moai worktree new SPEC-ID` | Create new Worktree | `moai worktree new SPEC-AUTH-001` |
| `moai worktree go SPEC-ID` | Enter Worktree (open new shell) | `moai worktree go SPEC-AUTH-001` |
| `moai worktree list` | List Worktrees | `moai worktree list` |
| `moai worktree done SPEC-ID` | Merge and cleanup | `moai worktree done SPEC-AUTH-001` |
| `moai worktree remove SPEC-ID` | Remove Worktree | `moai worktree remove SPEC-AUTH-001` |
| `moai worktree status` | Check Worktree status | `moai worktree status` |
| `moai worktree clean` | Cleanup merged Worktrees | `moai worktree clean --merged-only` |
| `moai worktree config` | Check Worktree settings | `moai worktree config root` |

## Key Benefits of Worktree [Permalink for this section](https://adk.mo.ai.kr/en/worktree\#key-benefits-of-worktree)

### 1\. Complete Isolation [Permalink for this section](https://adk.mo.ai.kr/en/worktree\#1-complete-isolation)

Each SPEC maintains independent Git state:

**Benefits**:

- Can commit independently in each Worktree
- Work without branch conflicts
- Only completed SPECs are merged to main

### 2\. LLM Independence [Permalink for this section](https://adk.mo.ai.kr/en/worktree\#2-llm-independence)

Each Worktree maintains separate LLM settings:

### 3\. Unlimited Parallel Development [Permalink for this section](https://adk.mo.ai.kr/en/worktree\#3-unlimited-parallel-development)

Can develop multiple SPECs simultaneously:

```

# Terminal 1: Plan SPEC-AUTH-001
> /moai plan "authentication system" --worktree

# Terminal 2: Implement SPEC-AUTH-002 (GLM)
$ moai worktree go SPEC-AUTH-002
$ moai glm
> /moai run SPEC-AUTH-002

# Terminal 3: Implement SPEC-AUTH-003 (GLM)
$ moai worktree go SPEC-AUTH-003
$ moai glm
> /moai run SPEC-AUTH-003

# Terminal 4: Document SPEC-AUTH-004
$ moai worktree go SPEC-AUTH-004
> /moai sync SPEC-AUTH-004
```

### 4\. Safe Merge [Permalink for this section](https://adk.mo.ai.kr/en/worktree\#4-safe-merge)

Only completed SPECs are merged to main branch:

## Parallel Development Visualization [Permalink for this section](https://adk.mo.ai.kr/en/worktree\#parallel-development-visualization)

Working simultaneously in multiple terminals:

## Next Steps [Permalink for this section](https://adk.mo.ai.kr/en/worktree\#next-steps)

- **[Complete Guide](https://adk.mo.ai.kr/worktree/faq)** \- All Git Worktree commands and detailed usage
- **[Real Examples](https://adk.mo.ai.kr/worktree/faq)** \- Real-world usage examples
- **[FAQ](https://adk.mo.ai.kr/worktree/faq)** \- Frequently asked questions and troubleshooting

## Related Documents [Permalink for this section](https://adk.mo.ai.kr/en/worktree\#related-documents)

- [MoAI-ADK Documentation](https://adk.mo.ai.kr/)
- [SPEC System](https://adk.mo.ai.kr/spec/)
- [DDD Workflow](https://adk.mo.ai.kr/workflow/)

Last updated onFebruary 8, 2026

[Google Stitch Guide](https://adk.mo.ai.kr/en/advanced/stitch-guide "Google Stitch Guide") [Usage Examples](https://adk.mo.ai.kr/en/worktree/examples "Usage Examples")

* * *