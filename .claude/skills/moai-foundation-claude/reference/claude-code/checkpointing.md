[Skip to Content](https://adk.mo.ai.kr/en/claude-code/checkpointing#nextra-skip-nav)

[Claude Code](https://adk.mo.ai.kr/en/claude-code "Claude Code") Checkpointing

Copy page

# Checkpointing

Claude Code automatically tracks Claude’s file edits while it works, so you can quickly rewind if something goes wrong.

## How Checkpoints Work [Permalink for this section](https://adk.mo.ai.kr/en/claude-code/checkpointing\#how-checkpoints-work)

When working with Claude, checkpoints automatically capture code state before each edit. This safety net ensures you can always return to a previous state when pursuing ambitious, large-scale changes.

### Automatic Tracking [Permalink for this section](https://adk.mo.ai.kr/en/claude-code/checkpointing\#automatic-tracking)

Claude Code tracks everything changed through the file editing tools:

- Each user prompt creates a new checkpoint
- Checkpoints persist between sessions, accessible in resumed conversations
- Automatically cleaned up after 30 days (configurable) with the session

### Rewinding Changes [Permalink for this section](https://adk.mo.ai.kr/en/claude-code/checkpointing\#rewinding-changes)

Press `Escape` twice (`Esc` \+ `Esc`) or use the `/rewind` command to open the rewind menu. You can choose to:

- **Conversation only**: Rewind user messages while keeping code changes
- **Code only**: Revert file changes while keeping conversation
- **Both**: Restore both conversation and code to a previous point

## Common Use Cases [Permalink for this section](https://adk.mo.ai.kr/en/claude-code/checkpointing\#common-use-cases)

Checkpoints are particularly useful for:

- **Exploring alternatives**: Try different implementation approaches without losing your starting point
- **Recovering from mistakes**: Quickly undo changes that introduced bugs or broke functionality
- **Iterating on features**: Experiment with changes knowing you can roll back to a working state

## Limitations [Permalink for this section](https://adk.mo.ai.kr/en/claude-code/checkpointing\#limitations)

### Bash Command Changes Not Tracked [Permalink for this section](https://adk.mo.ai.kr/en/claude-code/checkpointing\#bash-command-changes-not-tracked)

Checkpoints do not track files modified by bash commands. For example, if Claude Code runs:

```

rm file.txt
mv old.txt new.txt
cp source.txt dest.txt
```

These file modifications cannot be undone via rewind. Only direct file edits through Claude’s file editing tools are tracked.

### External Changes Not Tracked [Permalink for this section](https://adk.mo.ai.kr/en/claude-code/checkpointing\#external-changes-not-tracked)

Checkpoints only track files edited in the current session. Manual changes outside of Claude Code, or edits from concurrent sessions, are generally not captured, though they may be captured if they modify the same files as the current session.

### Not a Replacement for Version Control [Permalink for this section](https://adk.mo.ai.kr/en/claude-code/checkpointing\#not-a-replacement-for-version-control)

Checkpoints are designed for fast session-level recovery. Continue to use version control for permanent version history and collaboration:

- Version control (e.g., Git) for commits, branches, and long-term history
- Checkpoints complement but do not replace version control
- Think of checkpoints as “local undo” and Git as “permanent record”

## See Also [Permalink for this section](https://adk.mo.ai.kr/en/claude-code/checkpointing\#see-also)

- [Interactive mode](https://adk.mo.ai.kr/claude-code/interactive-mode) \- Keyboard shortcuts and session controls
- [Built-in commands](https://adk.mo.ai.kr/claude-code/interactive-mode#built-in-commands) \- Access checkpoints via `/rewind`
- [CLI reference](https://adk.mo.ai.kr/claude-code/cli-reference) \- Command-line options

* * *

**Sources:**

- [Checkpointing](https://code.claude.com/docs/en/checkpointing)

Last updated onFebruary 8, 2026

[Interactive Mode](https://adk.mo.ai.kr/en/claude-code/interactive-mode "Interactive Mode") [Extensions](https://adk.mo.ai.kr/en/claude-code/extensions "Extensions")

* * *