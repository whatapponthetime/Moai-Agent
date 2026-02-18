[Skip to Content](https://adk.mo.ai.kr/en/claude-code/interactive-mode#nextra-skip-nav)

[Claude Code](https://adk.mo.ai.kr/en/claude-code "Claude Code") Interactive Mode

Copy page

# Interactive Mode

Complete reference to keyboard shortcuts, input modes, and interactive features of Claude Code sessions.

## Keyboard Shortcuts [Permalink for this section](https://adk.mo.ai.kr/en/claude-code/interactive-mode\#keyboard-shortcuts)

### General Controls [Permalink for this section](https://adk.mo.ai.kr/en/claude-code/interactive-mode\#general-controls)

| Shortcut | Description | Context |
| --- | --- | --- |
| `Ctrl+C` | Cancel current input or generation | Standard interrupt |
| `Ctrl+D` | Exit Claude Code session | EOF signal |
| `Ctrl+G` | Open in default text editor | Prompt or custom response editing |
| `Ctrl+L` | Clear terminal screen | Keeps conversation history |
| `Ctrl+O` | Toggle detailed output | Show detailed tool usage and executions |
| `Ctrl+R` | Reverse search command history | Interactive search of previous commands |
| `Ctrl+V` or `Cmd+V` (iTerm2) or `Alt+V` (Windows) | Paste image from clipboard | Paste image or image file path |
| `Ctrl+B` | Background running tasks | Send bash commands and agents to background. Press twice for tmux users |
| `Left/Right` arrows | Cycle dialog tabs | Navigate in permission dialogs and menus |
| `Up/Down` arrows | Navigate command history | Recall previous input |
| `Esc` \+ `Esc` | Rewind code/conversation | Restore code and/or conversation to previous point |
| `Shift+Tab` or `Alt+M` (some configurations) | Toggle permission mode | Switch between auto-approve, plan, and normal modes |
| `Option+P` (macOS) or `Alt+P` (Windows/Linux) | Switch model | Change models without clearing prompt |
| `Option+T` (macOS) or `Alt+T` (Windows/Linux) | Toggle extended thinking | Enable or disable extended thinking mode. Run `/terminal-setup` first to enable this shortcut |

### Text Editing [Permalink for this section](https://adk.mo.ai.kr/en/claude-code/interactive-mode\#text-editing)

| Shortcut | Description | Context |
| --- | --- | --- |
| `Ctrl+K` | Delete to end of line | Saves deleted text for pasting |
| `Ctrl+U` | Delete entire line | Saves deleted text for pasting |
| `Ctrl+Y` | Paste deleted text | Paste text deleted with `Ctrl+K` or `Ctrl+U` |
| `Alt+Y` (after `Ctrl+Y`) | Cycle paste history | Cycle through previously deleted text after pasting. Use Option as Meta on macOS |
| `Alt+B` | Move cursor back one word | Word navigation. Use Option as Meta on macOS |
| `Alt+F` | Move cursor forward one word | Word navigation. Use Option as Meta on macOS |

### Theme and Display [Permalink for this section](https://adk.mo.ai.kr/en/claude-code/interactive-mode\#theme-and-display)

| Shortcut | Description | Context |
| --- | --- | --- |
| `Ctrl+T` | Toggle syntax highlighting for code blocks | Only works within `/theme` picker menu. Controls whether code in Claude responses uses syntax colors |

### Multi-line Input [Permalink for this section](https://adk.mo.ai.kr/en/claude-code/interactive-mode\#multi-line-input)

| Method | Shortcut | Context |
| --- | --- | --- |
| Quick escape | `\` \+ `Enter` | Works in all terminals |
| macOS default | `Option+Enter` | Default on macOS |
| Shift+Enter | `Shift+Enter` | Works directly in iTerm2, WezTerm, Ghostty, Kitty |
| Control sequence | `Ctrl+J` | Line break character for multi-line |
| Paste mode | Paste directly | For code blocks, logs |

### Quick Commands [Permalink for this section](https://adk.mo.ai.kr/en/claude-code/interactive-mode\#quick-commands)

| Shortcut | Description | Reference |
| --- | --- | --- |
| Start with `/` | Command or skill | See [Built-in commands](https://adk.mo.ai.kr/en/claude-code/interactive-mode#built-in-commands) and [Skills](https://adk.mo.ai.kr/claude-code/extensions) |
| Start with `!` | Bash mode | Execute commands directly, add command output to session |
| `@` | Mention file path | Trigger file path autocomplete |

## Built-in Commands [Permalink for this section](https://adk.mo.ai.kr/en/claude-code/interactive-mode\#built-in-commands)

Built-in commands are shortcuts for common tasks. The table below covers commonly used commands but not all available options. Type `/` in Claude Code to see the full list, or type `/` followed by characters to filter.

To create custom commands invoked with `/`, see [Skills](https://adk.mo.ai.kr/claude-code/extensions).

| Command | Purpose |
| --- | --- |
| `/clear` | Clear conversation history |
| `/compact [instructions]` | Compact conversation with optional focus instructions |
| `/config` | Open settings interface (Configuration tab) |
| `/context` | Visualize current context usage with color grid |
| `/cost` | Show token usage statistics. See [Cost tracking guide](https://code.claude.com/docs/en/cost-tracking) for subscription-specific details |
| `/doctor` | Check Claude Code installation status |
| `/exit` | Exit REPL |
| `/export [filename]` | Export current conversation to file or clipboard |
| `/help` | Get usage help |
| `/init` | Initialize project with CLAUDE.md guide |
| `/mcp` | Manage MCP server connections and OAuth authentication |
| `/memory` | Edit CLAUDE.md memory file |
| `/model` | Select or change AI model |
| `/permissions` | View or update permissions |
| `/plan` | Enter plan mode directly from prompt |
| `/rename <name>` | Rename current session for easy identification |
| `/resume [session]` | Restart conversation by ID or name, or open conversation chooser |
| `/rewind` | Rewind conversation and/or code |
| `/stats` | Visualize daily usage, session history, streaks, model preferences |
| `/status` | Open settings interface showing version, model, account, connection status (Status tab) |
| `/statusline` | Configure Claude Code status line UI |
| `/tasks` | List and manage background tasks |
| `/teleport` | Resume remote session from claude.ai (subscribers only) |
| `/theme` | Change color theme |
| `/todos` | List current TODO items |
| `/usage` | Subscribers only: Show plan usage limits and rate limit status |

### MCP Prompts [Permalink for this section](https://adk.mo.ai.kr/en/claude-code/interactive-mode\#mcp-prompts)

MCP servers can expose prompts that appear as commands. These prompts use the format `/mcp__<server>__<prompt>` and are dynamically discovered from connected servers. See [MCP prompts](https://code.claude.com/docs/en/mcp#prompts) for details.

## Vim Editor Mode [Permalink for this section](https://adk.mo.ai.kr/en/claude-code/interactive-mode\#vim-editor-mode)

Enable vim-style editing with `/vim` command or configure permanently via `/config`.

### Mode Switching [Permalink for this section](https://adk.mo.ai.kr/en/claude-code/interactive-mode\#mode-switching)

| Command | Action | Mode |
| --- | --- | --- |
| `Esc` | Enter NORMAL mode | INSERT |
| `i` | Insert before cursor | NORMAL |
| `I` | Insert at line start | NORMAL |
| `a` | Append after cursor | NORMAL |
| `A` | Append at line end | NORMAL |
| `o` | Open line below | NORMAL |
| `O` | Open line above | NORMAL |

### Navigation (NORMAL mode) [Permalink for this section](https://adk.mo.ai.kr/en/claude-code/interactive-mode\#navigation-normal-mode)

| Command | Action |
| --- | --- |
| `h`/`j`/`k`/`l` | Move left/down/up/right |
| `w` | Next word |
| `e` | End of word |
| `b` | Previous word |
| `0` | Start of line |
| `$` | End of line |
| `^` | First non-whitespace character |
| `gg` | Start of input |
| `G` | End of input |
| `f{char}` | Move to next occurrence of character |
| `F{char}` | Move to previous occurrence of character |
| `t{char}` | Move just before next occurrence of character |
| `T{char}` | Move just after previous occurrence of character |
| `;` | Repeat last f/F/t/T |
| `,` | Reverse repeat last f/F/t/T |

### Editing (NORMAL mode) [Permalink for this section](https://adk.mo.ai.kr/en/claude-code/interactive-mode\#editing-normal-mode)

| Command | Action |
| --- | --- |
| `x` | Delete character |
| `dd` | Delete line |
| `D` | Delete to end of line |
| `dw`/`de`/`db` | Delete word/end/back |
| `cc` | Change line |
| `C` | Change to end of line |
| `cw`/`ce`/`cb` | Change word/end/back |
| `yy`/`Y` | Yank (copy) line |
| `yw`/`ye`/`yb` | Yank (copy) word/end/back |
| `p` | Paste after cursor |
| `P` | Paste before cursor |
| `>>` | Indent line |
| `<<` | Outdent line |
| `J` | Join lines |
| `.` | Repeat last change |

### Text Objects (NORMAL mode) [Permalink for this section](https://adk.mo.ai.kr/en/claude-code/interactive-mode\#text-objects-normal-mode)

Text objects work with operators like `d`, `c`, `y`:

| Command | Action |
| --- | --- |
| `iw`/`aw` | Inner/around word |
| `iW`/`aW` | Inner/around WORD (whitespace delimited) |
| `i"`/`a"` | Inner/around double quotes |
| `i'`/`a'` | Inner/around single quotes |
| `i(`/`a(` | Inner/around parentheses |
| `i[`/`a[` | Inner/around square brackets |\
| `i{`/`a{` | Inner/around curly braces |\
\
## Command History [Permalink for this section](https://adk.mo.ai.kr/en/claude-code/interactive-mode\#command-history)\
\
Claude Code maintains command history for the current session:\
\
- History is saved per working directory\
- Cleared by `/clear` command\
- Navigate with up/down arrows (see Keyboard shortcuts above)\
- **Note**: History expansion (`!`) is disabled by default\
\
### Reverse Search with Ctrl+R [Permalink for this section](https://adk.mo.ai.kr/en/claude-code/interactive-mode\#reverse-search-with-ctrlr)\
\
Press `Ctrl+R` to interactively search command history:\
\
1. **Start search**: Press `Ctrl+R` to activate reverse history search\
2. **Enter query**: Type text to search from previous commands - search terms are highlighted in matching results\
3. **Navigate matches**: Press `Ctrl+R` again to cycle through older matches\
4. **Accept match**:\
   - Press `Tab` or `Esc` to accept current match and continue editing\
   - Press `Enter` to accept match and immediately execute command\
5. **Cancel search**:\
   - Press `Ctrl+C` to cancel and restore original input\
   - Press `Backspace` on empty search to cancel\
\
Search displays matching commands with search terms highlighted, making it easy to find and reuse previous input.\
\
## Background bash Commands [Permalink for this section](https://adk.mo.ai.kr/en/claude-code/interactive-mode\#background-bash-commands)\
\
Claude Code can run bash commands in the background, allowing you to continue working while long processes run.\
\
### How Backgrounding Works [Permalink for this section](https://adk.mo.ai.kr/en/claude-code/interactive-mode\#how-backgrounding-works)\
\
When Claude Code runs a command in the background, it executes the command asynchronously and immediately returns a background task ID. Claude Code can respond to a new prompt while the command continues running.\
\
To run a command in the background:\
\
- Prompt Claude Code to run a command in the background\
- Press Ctrl+B to send a regular Bash tool call to the background (tmux users must press Ctrl+B twice due to tmux’s prefix key)\
\
**Key features:**\
\
- Output is buffered and Claude can retrieve it using the TaskOutput tool\
- Background tasks have unique IDs for tracking and output retrieval\
- Background tasks are automatically cleaned up when Claude Code exits\
\
To disable all background task functionality, set the `CLAUDE_CODE_DISABLE_BACKGROUND_TASKS` environment variable to `1`. See [Environment variables](https://code.claude.com/docs/en/settings#environment-variables) for details.\
\
**Commands commonly backgrounded:**\
\
- Build tools (webpack, vite, make)\
- Package managers (npm, yarn, pnpm)\
- Test runners (jest, pytest)\
- Development servers\
- Long-running processes (docker, terraform)\
\
### Bash Mode with `!` Prefix [Permalink for this section](https://adk.mo.ai.kr/en/claude-code/interactive-mode\#bash-mode-with--prefix)\
\
Prefix your input with `!` to execute commands directly via bash:\
\
```\
\
! npm test\
! git status\
! ls -la\
```\
\
Bash mode:\
\
- Adds command and output to conversation context\
- Shows real-time progress and output\
- Same `Ctrl+B` backgrounding support for long-running commands\
- No need for Claude to interpret or approve commands\
- Supports history-based autocomplete: type partial command and press `Tab` to complete from previous `!` commands in current project\
\
Useful for quick shell tasks while maintaining conversation context.\
\
## Task List [Permalink for this section](https://adk.mo.ai.kr/en/claude-code/interactive-mode\#task-list)\
\
When working on complex multi-step tasks, Claude creates a task list to track progress. Tasks are displayed in the status area of the terminal with indicators for pending, in-progress, and completed items.\
\
- Press `Ctrl+T` to toggle task list view. Display shows up to 10 tasks at a time\
- To see or clear all tasks, ask Claude directly: “show all tasks” or “clear all tasks”\
- Tasks persist across context compactions, keeping Claude systematic on larger projects\
- To share task lists between sessions, set `CLAUDE_CODE_TASK_LIST_ID` to a named directory in `~/.claude/tasks/`: `CLAUDE_CODE_TASK_LIST_ID=my-project claude`\
- To revert to previous TODO list behavior, set `CLAUDE_CODE_ENABLE_TASKS=false`\
\
## See Also [Permalink for this section](https://adk.mo.ai.kr/en/claude-code/interactive-mode\#see-also)\
\
- [Extensions](https://adk.mo.ai.kr/claude-code/extensions) \- Custom prompts and workflows\
- [Checkpointing](https://adk.mo.ai.kr/claude-code/checkpointing) \- Rewind Claude’s edits and restore previous states\
- [CLI reference](https://adk.mo.ai.kr/claude-code/cli-reference) \- Command-line flags and options\
- [Settings](https://adk.mo.ai.kr/claude-code/settings) \- Configuration options\
- [Memory management](https://adk.mo.ai.kr/claude-code/memory) \- Managing CLAUDE.md files\
\
* * *\
\
**Sources:**\
\
- [Interactive mode](https://code.claude.com/docs/en/interactive-mode)\
\
Last updated onFebruary 12, 2026\
\
[CLI Reference](https://adk.mo.ai.kr/en/claude-code/cli-reference "CLI Reference") [Checkpointing](https://adk.mo.ai.kr/en/claude-code/checkpointing "Checkpointing")\
\
* * *