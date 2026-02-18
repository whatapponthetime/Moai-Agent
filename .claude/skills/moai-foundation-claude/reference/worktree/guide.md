[Skip to Content](https://adk.mo.ai.kr/en/worktree/guide#nextra-skip-nav)

Git WorktreeComplete Guide

Copy page

# Git Worktree Complete Guide

This guide provides detailed explanations of all aspects of MoAI-ADK parallel development using Git Worktree.

## Table of Contents [Permalink for this section](https://adk.mo.ai.kr/en/worktree/guide\#table-of-contents)

1. [Worktree Basics](https://adk.mo.ai.kr/en/worktree/guide#worktree-basics)
2. [Command Reference](https://adk.mo.ai.kr/en/worktree/guide#command-reference)
3. [Workflow Guide](https://adk.mo.ai.kr/en/worktree/guide#workflow-guide)
4. [Advanced Features](https://adk.mo.ai.kr/en/worktree/guide#advanced-features)
5. [Best Practices](https://adk.mo.ai.kr/en/worktree/guide#best-practices)

* * *

## Worktree Basics [Permalink for this section](https://adk.mo.ai.kr/en/worktree/guide\#worktree-basics)

### What is Git Worktree? [Permalink for this section](https://adk.mo.ai.kr/en/worktree/guide\#what-is-git-worktree)

Git Worktree is a Git feature that allows you to **work on the same Git repository in multiple directories simultaneously**.

### Worktree in MoAI-ADK [Permalink for this section](https://adk.mo.ai.kr/en/worktree/guide\#worktree-in-moai-adk)

MoAI-ADK uses Git Worktree to enable **completely independent environments** for each SPEC:

- **Independent Git State**: Each Worktree maintains its own branch and commit history
- **Separate LLM Settings**: Can use different LLMs in each Worktree
- **Isolated Workspace**: Complete separation at file system level

* * *

## Command Reference [Permalink for this section](https://adk.mo.ai.kr/en/worktree/guide\#command-reference)

### moai worktree new [Permalink for this section](https://adk.mo.ai.kr/en/worktree/guide\#moai-worktree-new)

Creates a new Worktree.

#### Syntax [Permalink for this section](https://adk.mo.ai.kr/en/worktree/guide\#syntax)

```

moai worktree new SPEC-ID [options]
```

#### Parameters [Permalink for this section](https://adk.mo.ai.kr/en/worktree/guide\#parameters)

- **SPEC-ID** (required): ID of the SPEC to create (e.g., `SPEC-AUTH-001`)

#### Options [Permalink for this section](https://adk.mo.ai.kr/en/worktree/guide\#options)

- `-b, --branch BRANCH`: Specify branch name to use (default: `feature/SPEC-ID`)
- `--from BASE`: Specify base branch (default: `main`)
- `--force`: Force recreation if Worktree already exists

#### Usage Examples [Permalink for this section](https://adk.mo.ai.kr/en/worktree/guide\#usage-examples)

```

# Basic usage
moai worktree new SPEC-AUTH-001

# Create from specific branch
moai worktree new SPEC-AUTH-001 --from develop

# Force recreation
moai worktree new SPEC-AUTH-001 --force
```

#### Operation Process [Permalink for this section](https://adk.mo.ai.kr/en/worktree/guide\#operation-process)

* * *

### moai worktree go [Permalink for this section](https://adk.mo.ai.kr/en/worktree/guide\#moai-worktree-go)

Enters a Worktree and starts a new shell session.

#### Syntax [Permalink for this section](https://adk.mo.ai.kr/en/worktree/guide\#syntax-1)

```

moai worktree go SPEC-ID
```

#### Parameters [Permalink for this section](https://adk.mo.ai.kr/en/worktree/guide\#parameters-1)

- **SPEC-ID** (required): ID of the Worktree to enter

#### Usage Examples [Permalink for this section](https://adk.mo.ai.kr/en/worktree/guide\#usage-examples-1)

```

# Enter Worktree
moai worktree go SPEC-AUTH-001

# After entering, change LLM
moai glm

# Start Claude Code
claude

# Start work
> /moai run SPEC-AUTH-001
```

#### Operation Process [Permalink for this section](https://adk.mo.ai.kr/en/worktree/guide\#operation-process-1)

* * *

### moai worktree list [Permalink for this section](https://adk.mo.ai.kr/en/worktree/guide\#moai-worktree-list)

Lists all Worktrees.

#### Syntax [Permalink for this section](https://adk.mo.ai.kr/en/worktree/guide\#syntax-2)

```

moai worktree list [options]
```

#### Options [Permalink for this section](https://adk.mo.ai.kr/en/worktree/guide\#options-1)

- `-v, --verbose`: Include detailed information
- `--porcelain`: Output in parseable format

#### Usage Examples [Permalink for this section](https://adk.mo.ai.kr/en/worktree/guide\#usage-examples-2)

```

# Basic list
moai worktree list

# Detailed information
moai worktree list --verbose

# Output example
SPEC-AUTH-001  feature/SPEC-AUTH-001  /path/to/worktree/SPEC-AUTH-001  [active]
SPEC-AUTH-002  feature/SPEC-AUTH-002  /path/to/worktree/SPEC-AUTH-002
SPEC-AUTH-003  feature/SPEC-AUTH-003  /path/to/worktree/SPEC-AUTH-003
```

* * *

### moai worktree done [Permalink for this section](https://adk.mo.ai.kr/en/worktree/guide\#moai-worktree-done)

Completes Worktree work and merges then cleans up.

#### Syntax [Permalink for this section](https://adk.mo.ai.kr/en/worktree/guide\#syntax-3)

```

moai worktree done SPEC-ID [options]
```

#### Parameters [Permalink for this section](https://adk.mo.ai.kr/en/worktree/guide\#parameters-2)

- **SPEC-ID** (required): ID of the Worktree to complete

#### Options [Permalink for this section](https://adk.mo.ai.kr/en/worktree/guide\#options-2)

- `--push`: Push to remote repository after merging
- `--no-merge`: Only remove Worktree without merging
- `--force`: Force merge even if there are conflicts

#### Usage Examples [Permalink for this section](https://adk.mo.ai.kr/en/worktree/guide\#usage-examples-3)

```

# Basic merge and cleanup
moai worktree done SPEC-AUTH-001

# Push to remote
moai worktree done SPEC-AUTH-001 --push

# Remove only without merging
moai worktree done SPEC-AUTH-001 --no-merge
```

#### Operation Process [Permalink for this section](https://adk.mo.ai.kr/en/worktree/guide\#operation-process-2)

* * *

### moai worktree remove [Permalink for this section](https://adk.mo.ai.kr/en/worktree/guide\#moai-worktree-remove)

Removes a Worktree (without merging).

#### Syntax [Permalink for this section](https://adk.mo.ai.kr/en/worktree/guide\#syntax-4)

```

moai worktree remove SPEC-ID [options]
```

#### Parameters [Permalink for this section](https://adk.mo.ai.kr/en/worktree/guide\#parameters-3)

- **SPEC-ID** (required): ID of the Worktree to remove

#### Options [Permalink for this section](https://adk.mo.ai.kr/en/worktree/guide\#options-3)

- `--force`: Force remove even if there are changes
- `--keep-branch`: Keep branch and only remove Worktree

#### Usage Examples [Permalink for this section](https://adk.mo.ai.kr/en/worktree/guide\#usage-examples-4)

```

# Basic removal
moai worktree remove SPEC-AUTH-001

# Force removal
moai worktree remove SPEC-AUTH-001 --force

# Keep branch
moai worktree remove SPEC-AUTH-001 --keep-branch
```

* * *

### moai worktree status [Permalink for this section](https://adk.mo.ai.kr/en/worktree/guide\#moai-worktree-status)

Checks the status of a Worktree.

#### Syntax [Permalink for this section](https://adk.mo.ai.kr/en/worktree/guide\#syntax-5)

```

moai worktree status [SPEC-ID]
```

#### Parameters [Permalink for this section](https://adk.mo.ai.kr/en/worktree/guide\#parameters-4)

- **SPEC-ID** (optional): Check status of specific Worktree (shows all if not specified)

#### Usage Examples [Permalink for this section](https://adk.mo.ai.kr/en/worktree/guide\#usage-examples-5)

```

# All Worktree status
moai worktree status

# Specific Worktree status
moai worktree status SPEC-AUTH-001

# Output example
Worktree: SPEC-AUTH-001
Branch: feature/SPEC-AUTH-001
Path: /path/to/worktree/SPEC-AUTH-001
Status: Clean (2 commits ahead of main)
LLM: GLM 4.7
```

* * *

### moai worktree clean [Permalink for this section](https://adk.mo.ai.kr/en/worktree/guide\#moai-worktree-clean)

Cleans up merged or completed Worktrees.

#### Syntax [Permalink for this section](https://adk.mo.ai.kr/en/worktree/guide\#syntax-6)

```

moai worktree clean [options]
```

#### Options [Permalink for this section](https://adk.mo.ai.kr/en/worktree/guide\#options-4)

- `--merged-only`: Clean only merged Worktrees
- `--older-than DAYS`: Clean only Worktrees older than N days
- `--dry-run`: Show only without actually removing

#### Usage Examples [Permalink for this section](https://adk.mo.ai.kr/en/worktree/guide\#usage-examples-6)

```

# Clean merged Worktrees
moai worktree clean --merged-only

# Clean Worktrees older than 7 days
moai worktree clean --older-than 7

# Preview
moai worktree clean --dry-run
```

* * *

### moai worktree config [Permalink for this section](https://adk.mo.ai.kr/en/worktree/guide\#moai-worktree-config)

Checks or modifies Worktree settings.

#### Syntax [Permalink for this section](https://adk.mo.ai.kr/en/worktree/guide\#syntax-7)

```

moai worktree config [key] [value]
```

#### Parameters [Permalink for this section](https://adk.mo.ai.kr/en/worktree/guide\#parameters-5)

- **key** (optional): Setting key
- **value** (optional): Setting value

#### Usage Examples [Permalink for this section](https://adk.mo.ai.kr/en/worktree/guide\#usage-examples-7)

```

# Show all settings
moai worktree config

# Check specific setting
moai worktree config root

# Change setting
moai worktree config root /new/path/to/worktrees
```

* * *

## Workflow Guide [Permalink for this section](https://adk.mo.ai.kr/en/worktree/guide\#workflow-guide)

### Complete Development Cycle [Permalink for this section](https://adk.mo.ai.kr/en/worktree/guide\#complete-development-cycle)

### Step 1: SPEC Planning (Phase 1) [Permalink for this section](https://adk.mo.ai.kr/en/worktree/guide\#step-1-spec-planning-phase-1)

```

# In Terminal 1
> /moai plan "Implement user authentication system" --worktree
```

**Output**:

```

✓ SPEC document created: .moai/specs/SPEC-AUTH-001/spec.md
✓ Worktree created: /path/to/.moai/worktrees/SPEC-AUTH-001
✓ Branch created: feature/SPEC-AUTH-001
✓ Branch checkout complete

Next steps:
1. Run in new terminal: moai worktree go SPEC-AUTH-001
2. Change LLM: moai glm
3. Start development: claude
```

### Step 2: Implementation (Phase 2) [Permalink for this section](https://adk.mo.ai.kr/en/worktree/guide\#step-2-implementation-phase-2)

```

# In Terminal 2
moai worktree go SPEC-AUTH-001

# After entering Worktree, prompt changes
(SPEC-AUTH-001) $ moai glm
→ Changed to GLM 4.7

(SPEC-AUTH-001) $ claude
> /moai run SPEC-AUTH-001
```

**Workflow**:

### Step 3: Completion and Merge (Phase 3) [Permalink for this section](https://adk.mo.ai.kr/en/worktree/guide\#step-3-completion-and-merge-phase-3)

```

# After completing work in Terminal 2
exit

# In Terminal 1
moai worktree done SPEC-AUTH-001 --push
```

**Process**:

* * *

## Advanced Features [Permalink for this section](https://adk.mo.ai.kr/en/worktree/guide\#advanced-features)

### Parallel Work Strategies [Permalink for this section](https://adk.mo.ai.kr/en/worktree/guide\#parallel-work-strategies)

#### Strategy 1: Separate Plan and Implement [Permalink for this section](https://adk.mo.ai.kr/en/worktree/guide\#strategy-1-separate-plan-and-implement)

#### Strategy 2: Simultaneous Development [Permalink for this section](https://adk.mo.ai.kr/en/worktree/guide\#strategy-2-simultaneous-development)

```

# Terminal 1: SPEC-001 Plan
> /moai plan "authentication" --worktree

# Terminal 2: SPEC-002 Plan (after completion)
> /moai plan "logging" --worktree

# Terminal 3, 4, 5: Parallel implementation
moai worktree go SPEC-001 && moai glm  # Terminal 3
moai worktree go SPEC-002 && moai glm  # Terminal 4
moai worktree go SPEC-003 && moai glm  # Terminal 5
```

### Switching Between Worktrees [Permalink for this section](https://adk.mo.ai.kr/en/worktree/guide\#switching-between-worktrees)

```

# Check current Worktree
moai worktree status

# Switch to different Worktree
moai worktree go SPEC-AUTH-002

# Or navigate directly
cd ~/.moai/worktrees/SPEC-AUTH-002
```

### Conflict Resolution [Permalink for this section](https://adk.mo.ai.kr/en/worktree/guide\#conflict-resolution)

* * *

## Best Practices [Permalink for this section](https://adk.mo.ai.kr/en/worktree/guide\#best-practices)

### 1\. Worktree Naming Convention [Permalink for this section](https://adk.mo.ai.kr/en/worktree/guide\#1-worktree-naming-convention)

```

# Good examples
moai worktree new SPEC-AUTH-001      # Clear SPEC ID
moai worktree new SPEC-FRONTEND-007  # Include category

# Avoid
moai worktree new feature-branch     # No SPEC ID
moai worktree new temp               # Ambiguous name
```

### 2\. Regular Cleanup [Permalink for this section](https://adk.mo.ai.kr/en/worktree/guide\#2-regular-cleanup)

```

# Run weekly
moai worktree clean --merged-only

# Run monthly
moai worktree clean --older-than 30
```

### 3\. LLM Selection Guide [Permalink for this section](https://adk.mo.ai.kr/en/worktree/guide\#3-llm-selection-guide)

### 4\. Commit Message Convention [Permalink for this section](https://adk.mo.ai.kr/en/worktree/guide\#4-commit-message-convention)

```

# When committing in Worktree
git commit -m "feat(SPEC-AUTH-001): Implement JWT-based authentication

- Add JWT token generation/validation logic
- Implement refresh token rotation
- Invalidate tokens on logout

Co-Authored-By: Claude <noreply@anthropic.com>"
```

### 5\. Terminal Management [Permalink for this section](https://adk.mo.ai.kr/en/worktree/guide\#5-terminal-management)

```

# Use separate terminal for each Worktree
# Recommend iTerm2, VS Code, or tmux

# tmux example
tmux new-session -d -s spec-001 'moai worktree go SPEC-001'
tmux new-session -d -s spec-002 'moai worktree go SPEC-002'

# Switch sessions
tmux attach-session -t spec-001
```

### 6\. Progress Tracking [Permalink for this section](https://adk.mo.ai.kr/en/worktree/guide\#6-progress-tracking)

```

# Check all Worktree status
moai worktree status --verbose

# Check Git log
cd .moai/worktrees/SPEC-AUTH-001
git log --oneline --graph --all

# Check changes
git diff main
```

## Related Documents [Permalink for this section](https://adk.mo.ai.kr/en/worktree/guide\#related-documents)

- [Git Worktree Overview](https://adk.mo.ai.kr/en/worktree/index)
- [Real Usage Examples](https://adk.mo.ai.kr/en/worktree/examples)
- [FAQ](https://adk.mo.ai.kr/en/worktree/faq)

Last updated onFebruary 12, 2026

[Google Stitch Guide](https://adk.mo.ai.kr/en/advanced/stitch-guide "Google Stitch Guide") [Usage Examples](https://adk.mo.ai.kr/en/worktree/examples "Usage Examples")

* * *