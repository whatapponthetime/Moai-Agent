[Skip to Content](https://adk.mo.ai.kr/en/worktree/faq#nextra-skip-nav)

[Git Worktree](https://adk.mo.ai.kr/en/worktree/guide "Git Worktree") FAQ

Copy page

# Git Worktree FAQ

Common problems and solutions when using Git Worktree.

## Table of Contents [Permalink for this section](https://adk.mo.ai.kr/en/worktree/faq\#table-of-contents)

1. [Basic Concepts](https://adk.mo.ai.kr/en/worktree/faq#basic-concepts)
2. [Usage](https://adk.mo.ai.kr/en/worktree/faq#usage)
3. [Troubleshooting](https://adk.mo.ai.kr/en/worktree/faq#troubleshooting)
4. [Performance & Optimization](https://adk.mo.ai.kr/en/worktree/faq#performance--optimization)
5. [Team Collaboration](https://adk.mo.ai.kr/en/worktree/faq#team-collaboration)

* * *

## Basic Concepts [Permalink for this section](https://adk.mo.ai.kr/en/worktree/faq\#basic-concepts)

### Q: What’s the difference between Git Worktree and regular branches? [Permalink for this section](https://adk.mo.ai.kr/en/worktree/faq\#q-whats-the-difference-between-git-worktree-and-regular-branches)

**A**: Git Worktree allows you to work in **physically separated directories**:

**Key Differences**:

| Feature | Regular Branch | Git Worktree |
| --- | --- | --- |
| Working Directory | 1 shared | N independent |
| Branch Switch | `git checkout` needed | Just directory move |
| Simultaneous Work | Not possible | Possible |
| LLM Settings | Shared | Independent |
| Conflict Possibility | High | Low |

* * *

### Q: Why should I use Worktree? [Permalink for this section](https://adk.mo.ai.kr/en/worktree/faq\#q-why-should-i-use-worktree)

**A**: We recommend using Worktree for the following reasons:

1. **LLM Settings Independence**: Can use different LLMs for each SPEC
   - Plan phase: Opus (high quality)
   - Implement phase: GLM (low cost)
   - Document phase: Sonnet (medium)
2. **Parallel Development**: Can develop multiple SPECs simultaneously

3. **Conflict Prevention**: Minimizes conflicts with isolated workspaces

4. **Cost Savings**: 70% cost savings with GLM


* * *

### Q: Is Worktree required in MoAI-ADK? [Permalink for this section](https://adk.mo.ai.kr/en/worktree/faq\#q-is-worktree-required-in-moai-adk)

**A**: No, it’s not required but **strongly recommended**:

- **Single SPEC Development**: Possible without Worktree
- **Multiple SPEC Development**: Worktree essential
- **Team Collaboration**: Prevent conflicts with Worktree
- **Cost Optimization**: Separate LLMs with Worktree

* * *

## Usage [Permalink for this section](https://adk.mo.ai.kr/en/worktree/faq\#usage)

### Q: How do I create a Worktree? [Permalink for this section](https://adk.mo.ai.kr/en/worktree/faq\#q-how-do-i-create-a-worktree)

**A**: There are two methods:

**Method 1: Automatic Creation (Recommended)**

```

# Automatically create during SPEC planning phase
> /moai plan "feature description" --worktree

# Automatically:
# 1. Create SPEC document
# 2. Create Worktree
# 3. Create feature branch
```

**Method 2: Manual Creation**

```

# Manually create Worktree
moai worktree new SPEC-AUTH-001

# Create from specific branch
moai worktree new SPEC-AUTH-001 --from develop
```

* * *

### Q: How do I enter a Worktree? [Permalink for this section](https://adk.mo.ai.kr/en/worktree/faq\#q-how-do-i-enter-a-worktree)

**A**: Use the `moai worktree go` command:

```

# Enter Worktree
moai worktree go SPEC-AUTH-001

# New terminal opens and moves to Worktree
# Prompt changes
(SPEC-AUTH-001) $
```

**Workflow after entering**:

* * *

### Q: Can I use multiple Worktrees simultaneously? [Permalink for this section](https://adk.mo.ai.kr/en/worktree/faq\#q-can-i-use-multiple-worktrees-simultaneously)

**A**: Yes, unlimited:

```

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
```

**Parallel work visualization**:

* * *

### Q: How do I complete a Worktree? [Permalink for this section](https://adk.mo.ai.kr/en/worktree/faq\#q-how-do-i-complete-a-worktree)

**A**: Use the `moai worktree done` command:

```

# Basic completion (merge + cleanup)
moai worktree done SPEC-AUTH-001

# Including push to remote
moai worktree done SPEC-AUTH-001 --push

# Remove only without merging
moai worktree done SPEC-AUTH-001 --no-merge
```

**Completion process**:

* * *

## Troubleshooting [Permalink for this section](https://adk.mo.ai.kr/en/worktree/faq\#troubleshooting)

### Q: Worktree conflict occurred [Permalink for this section](https://adk.mo.ai.kr/en/worktree/faq\#q-worktree-conflict-occurred)

**A**: Resolve with the following steps:

**Real example**:

```

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
```

* * *

### Q: Worktree is corrupted [Permalink for this section](https://adk.mo.ai.kr/en/worktree/faq\#q-worktree-is-corrupted)

**A**: Recover with the following steps:

```

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
```

* * *

### Q: Insufficient disk space [Permalink for this section](https://adk.mo.ai.kr/en/worktree/faq\#q-insufficient-disk-space)

**A**: Clean up old Worktrees:

```

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
```

**Cleanup strategy**:

* * *

### Q: LLM not working as expected [Permalink for this section](https://adk.mo.ai.kr/en/worktree/faq\#q-llm-not-working-as-expected)

**A**: Check Worktree-specific LLM settings:

```

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
```

* * *

### Q: Git commands not working [Permalink for this section](https://adk.mo.ai.kr/en/worktree/faq\#q-git-commands-not-working)

**A**: Check if you’re in the correct directory:

```

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
```

* * *

## Performance & Optimization [Permalink for this section](https://adk.mo.ai.kr/en/worktree/faq\#performance--optimization)

### Q: Does Worktree affect performance? [Permalink for this section](https://adk.mo.ai.kr/en/worktree/faq\#q-does-worktree-affect-performance)

**A**: Minimal impact:

**Advantages**:

- Each Worktree is independent, so cache efficient
- Fast Git operations (local branches)
- Leverages file system cache

**Disadvantages**:

- Disk space usage (duplicated per Worktree)
- Initial Worktree creation takes time

**Optimization tips**:

```

# 1. Remove unnecessary Worktrees
moai worktree clean --merged-only

# 2. Git garbage collection
git gc --aggressive --prune=now

# 3. Worktree pruning
git worktree prune
```

* * *

### Q: How many Worktrees can I create? [Permalink for this section](https://adk.mo.ai.kr/en/worktree/faq\#q-how-many-worktrees-can-i-create)

**A**: Theoretically unlimited, but practically limited by:

**Limiting factors**:

1. **Disk Space**: Each Worktree uses ~100MB-1GB
2. **Memory**: Open sessions in each Worktree
3. **File System**: Number of files open simultaneously

**Recommendations**:

- **Small projects**: 5-10 Worktrees
- **Medium projects**: 3-5 Worktrees
- **Large projects**: 2-3 Worktrees

* * *

### Q: Can I automatically clean Worktrees? [Permalink for this section](https://adk.mo.ai.kr/en/worktree/faq\#q-can-i-automatically-clean-worktrees)

**A**: Yes, use periodic cleanup scripts:

```

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
```

**Set up cron job**:

```

# Run every Sunday at 2 AM
0 2 * * 0 /path/to/clean-worktrees.sh >> /var/log/worktree-cleanup.log 2>&1
```

* * *

## Team Collaboration [Permalink for this section](https://adk.mo.ai.kr/en/worktree/faq\#team-collaboration)

### Q: How does the team use Worktree? [Permalink for this section](https://adk.mo.ai.kr/en/worktree/faq\#q-how-does-the-team-use-worktree)

**A**: We recommend the following workflow:

**Team collaboration guide**:

1. **Worktree naming convention**: `SPEC-{category}-{number}`
2. **Regular sync**: `git pull origin main`
3. **Before PR review**: Complete testing locally
4. **Conflict prevention**: Sync with `main` frequently

* * *

### Q: How do I sync Worktree with remote repository? [Permalink for this section](https://adk.mo.ai.kr/en/worktree/faq\#q-how-do-i-sync-worktree-with-remote-repository)

**A**: Run `git pull` regularly:

```

# Sync in each Worktree
moai worktree go SPEC-AUTH-001
(SPEC-AUTH-001) $ git pull origin main

# Or sync all Worktrees
for spec in $(moai worktree list --porcelain | awk '{print $1}'); do
    cd ~/.moai/worktrees/$spec
    echo "Syncing $spec..."
    git pull origin main
done
```

* * *

### Q: How do I manage Worktree during PR review? [Permalink for this section](https://adk.mo.ai.kr/en/worktree/faq\#q-how-do-i-manage-worktree-during-pr-review)

**A**: Use the following strategy:

```

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
```

* * *

## Additional Questions [Permalink for this section](https://adk.mo.ai.kr/en/worktree/faq\#additional-questions)

### Q: Can I use MoAI-ADK without Worktree? [Permalink for this section](https://adk.mo.ai.kr/en/worktree/faq\#q-can-i-use-moai-adk-without-worktree)

**A**: Yes, but not recommended:

```

# Use without Worktree
> /moai plan "feature description"
# Skip Worktree creation step

# But the following problems occur:
# 1. Same LLM applied to all sessions
# 2. No parallel development possible
# 3. Context switching cost
```

* * *

### Q: Do I need to backup Worktree? [Permalink for this section](https://adk.mo.ai.kr/en/worktree/faq\#q-do-i-need-to-backup-worktree)

**A**: Worktree is managed by Git, so no separate backup needed:

```

# Worktree is part of Git
# Automatic backup when pushed to remote

# Push to remote regularly
git push origin feature/SPEC-AUTH-001

# Recover after Worktree loss
git fetch origin
git worktree add SPEC-AUTH-001 origin/feature/SPEC-AUTH-001
```

* * *

## Related Documents [Permalink for this section](https://adk.mo.ai.kr/en/worktree/faq\#related-documents)

- [Git Worktree Overview](https://adk.mo.ai.kr/worktree/index)
- [Complete Guide](https://adk.mo.ai.kr/en/worktree/guide)
- [Real Usage Examples](https://adk.mo.ai.kr/en/worktree/examples)

## Need More Help? [Permalink for this section](https://adk.mo.ai.kr/en/worktree/faq\#need-more-help)

- [GitHub Issues](https://github.com/MoAI-ADK/moai-adk/issues)
- [Discord Community](https://discord.gg/moai-adk)
- [Email Support](mailto:support@moai-adk.org)

Last updated onFebruary 12, 2026

[Usage Examples](https://adk.mo.ai.kr/en/worktree/examples "Usage Examples") [Usage Guide](https://adk.mo.ai.kr/en/moai-rank/guide "Usage Guide")

* * *