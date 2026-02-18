[Skip to Content](https://adk.mo.ai.kr/en/advanced/hooks-guide#nextra-skip-nav)

[Advanced](https://adk.mo.ai.kr/en/advanced/skill-guide "Advanced") Hooks Guide

Copy page

# Hooks Guide

Detailed guide to Claude Code’s Hooks system and MoAI-ADK’s default Hook scripts.

**One-line summary**: Hooks are Claude Code’s **automatic reflex nerves**. Automatically format files when saved, block dangerous commands.

## What are Hooks? [Permalink for this section](https://adk.mo.ai.kr/en/advanced/hooks-guide\#what-are-hooks)

Hooks are **scripts that execute automatically** in response to specific events in Claude Code.

To use the analogy of a doctor’s reflex test: when a knee is tapped (event occurs), the leg automatically rises (script executes), just as when Claude Code modifies a file (PostToolUse event), the formatter automatically runs (code cleanup).

## Hook Event Types [Permalink for this section](https://adk.mo.ai.kr/en/advanced/hooks-guide\#hook-event-types)

Claude Code supports **10 event types**.

### Complete Event List [Permalink for this section](https://adk.mo.ai.kr/en/advanced/hooks-guide\#complete-event-list)

| Event | Execution Timing | Main Purpose |
| --- | --- | --- |
| `Setup` | Start with `--init`, `--init-only`, `--maintenance` flags | Initial setup, environment checks |
| `SessionStart` | When session starts | Project info display, environment initialization |
| `SessionEnd` | When session ends | Cleanup, context storage, rank submission |
| `PreCompact` | Before context compact (`/clear` etc) | Backup important context |
| `PreToolUse` | Before tool use | Security validation, block dangerous commands |
| **`PermissionRequest`** | When permission dialog shown | Auto allow/deny decisions |
| `PostToolUse` | After tool use | Code formatting, lint checks, LSP diagnostics |
| **`UserPromptSubmit`** | When user submits prompt | Prompt preprocessing, validation |
| **`Notification`** | When Claude Code sends notification | Customize desktop notifications |
| `Stop` | After response completes | Loop control, completion condition check |
| **`SubagentStop`** | After subagent work completes | Process subtask results |

### Event Details [Permalink for this section](https://adk.mo.ai.kr/en/advanced/hooks-guide\#event-details)

#### 1\. Setup [Permalink for this section](https://adk.mo.ai.kr/en/advanced/hooks-guide\#1-setup)

Executed when Claude Code starts with `--init`, `--init-only`, or `--maintenance` flags. Used for initial setup and environment checks.

#### 2\. SessionStart [Permalink for this section](https://adk.mo.ai.kr/en/advanced/hooks-guide\#2-sessionstart)

Executed when a session starts or resumes an existing session. Used for displaying project status and environment initialization.

#### 3\. SessionEnd [Permalink for this section](https://adk.mo.ai.kr/en/advanced/hooks-guide\#3-sessionend)

Executed when Claude Code session ends. Used for cleanup, context storage, and metrics collection.

#### 4\. PreCompact [Permalink for this section](https://adk.mo.ai.kr/en/advanced/hooks-guide\#4-precompact)

Executed before Claude Code performs context compacting (like `/clear` command). Used to backup important context.

#### 5\. PreToolUse [Permalink for this section](https://adk.mo.ai.kr/en/advanced/hooks-guide\#5-pretooluse)

Executed **before** a tool is called. Can block or modify tool calls. Used for security validation and blocking dangerous commands.

#### 6\. PermissionRequest [Permalink for this section](https://adk.mo.ai.kr/en/advanced/hooks-guide\#6-permissionrequest)

Executed when a permission dialog is displayed to the user. Can automatically allow or deny.

#### 7\. PostToolUse [Permalink for this section](https://adk.mo.ai.kr/en/advanced/hooks-guide\#7-posttooluse)

Executed **after** a tool call completes. Used for code formatting, lint checks, and LSP diagnostics collection.

#### 8\. UserPromptSubmit [Permalink for this section](https://adk.mo.ai.kr/en/advanced/hooks-guide\#8-userpromptsubmit)

Executed when the user submits a prompt, **before** Claude processes it. Used for prompt preprocessing and validation.

#### 9\. Notification [Permalink for this section](https://adk.mo.ai.kr/en/advanced/hooks-guide\#9-notification)

Executed when Claude Code sends a notification. Can be customized for desktop notifications, sound alerts, etc.

#### 10\. Stop [Permalink for this section](https://adk.mo.ai.kr/en/advanced/hooks-guide\#10-stop)

Executed when Claude Code completes a response. Used for loop control and completion condition verification.

#### 11\. SubagentStop [Permalink for this section](https://adk.mo.ai.kr/en/advanced/hooks-guide\#11-subagentstop)

Executed when a subagent’s work is complete. Used to process subtask results.

### Events Implemented in MoAI-ADK [Permalink for this section](https://adk.mo.ai.kr/en/advanced/hooks-guide\#events-implemented-in-moai-adk)

MoAI-ADK has implemented the following events:

| Event | Status | Hook File |
| --- | --- | --- |
| `SessionStart` | ✅ | `session_start__show_project_info.py` |
| `PreToolUse` | ✅ | `pre_tool__security_guard.py` |
| `PostToolUse` | ✅ | `post_tool__code_formatter.py`, `post_tool__linter.py`, `post_tool__ast_grep_scan.py`, `post_tool__lsp_diagnostic.py` |
| `PreCompact` | ✅ | `pre_compact__save_context.py` |
| `SessionEnd` | ✅ | `session_end__auto_cleanup.py`, `session_end__rank_submit.py` |
| `Stop` | ✅ | `stop__loop_controller.py` |
| `Setup` | ⚪ | See official examples |
| `PermissionRequest` | ⚪ | See official examples |
| `UserPromptSubmit` | ⚪ | See official examples |
| `Notification` | ⚪ | See official examples |
| `SubagentStop` | ⚪ | See official examples |

### Event Execution Order [Permalink for this section](https://adk.mo.ai.kr/en/advanced/hooks-guide\#event-execution-order)

The order in which hooks execute during a typical file modification operation:

## Claude Code Official Examples [Permalink for this section](https://adk.mo.ai.kr/en/advanced/hooks-guide\#claude-code-official-examples)

These examples are standard patterns provided in Claude Code’s official documentation.

### Bash Command Logging Hook [Permalink for this section](https://adk.mo.ai.kr/en/advanced/hooks-guide\#bash-command-logging-hook)

Logs all Bash commands to a log file.

```

{
  "hooks": {
    "PreToolUse": [\
      {\
        "matcher": "Bash",\
        "hooks": [\
          {\
            "type": "command",\
            "command": "jq -r '\"\\(.tool_input.command) - \\(.tool_input.description // \"No description\")\"' >> ~/.claude/bash-command-log.txt"\
          }\
        ]\
      }\
    ]
  }
}
```

### TypeScript Formatting Hook [Permalink for this section](https://adk.mo.ai.kr/en/advanced/hooks-guide\#typescript-formatting-hook)

Automatically runs Prettier after editing TypeScript files.

```

{
  "hooks": {
    "PostToolUse": [\
      {\
        "matcher": "Edit|Write",\
        "hooks": [\
          {\
            "type": "command",\
            "command": "jq -r '.tool_input.file_path' | { read file_path; if echo \"$file_path\" | grep -q '\\.ts$'; then npx prettier --write \"$file_path\"; fi; }"\
          }\
        ]\
      }\
    ]
  }
}
```

### Markdown Formatter Hook [Permalink for this section](https://adk.mo.ai.kr/en/advanced/hooks-guide\#markdown-formatter-hook)

Automatically detects and adds language tags to Markdown files.

```

{
  "hooks": {
    "PostToolUse": [\
      {\
        "matcher": "Edit|Write",\
        "hooks": [\
          {\
            "type": "command",\
            "command": "\"$CLAUDE_PROJECT_DIR\"/.claude/hooks/markdown_formatter.py"\
          }\
        ]\
      }\
    ]
  }
}
```

`.claude/hooks/markdown_formatter.py` file:

````

#!/usr/bin/env python3
"""
Markdown formatter for Claude Code output.
Fixes missing language tags and spacing issues while preserving code content.
"""
import json
import sys
import re
import os

def detect_language(code):
    """Best-effort language detection from code content."""
    s = code.strip()

    # JSON detection
    if re.search(r'^\\s*[{\\[]', s):\
        try:\
            json.loads(s)\
            return 'json'\
        except:\
            pass\
\
    # Python detection\
    if re.search(r'^\\s*def\\s+\\w+\\s*\\(', s, re.M) or \\
       re.search(r'^\\s*(import|from)\\s+\\w+', s, re.M):\
        return 'python'\
\
    # JavaScript detection\
    if re.search(r'\\b(function\\s+\\w+\\s*\\(|const\\s+\\w+\\s*=)', s) or \\
       re.search(r'=>|console\\.(log|error)', s):\
        return 'javascript'\
\
    # Bash detection\
    if re.search(r'^#!.*\\b(bash|sh)\\b', s, re.M) or \\
       re.search(r'\\b(if|then|fi|for|in|do|done)\\b', s):\
        return 'bash'\
\
    return 'text'\
\
def format_markdown(content):\
    """Format markdown content with language detection."""\
    # Fix unlabeled code fences\
    def add_lang_to_fence(match):\
        indent, info, body, closing = match.groups()\
        if not info.strip():\
            lang = detect_language(body)\
            return f"{indent}```{lang}\\n{body}{closing}\\n"\
        return match.group(0)\
\
    fence_pattern = r'(?ms)^([ \\t]{0,3})```([^\\n]*)\\n(.*?)(\\n\\1```)\\s*$'\
    content = re.sub(fence_pattern, add_lang_to_fence, content)\
\
    # Fix excessive blank lines\
    content = re.sub(r'\\n{3,}', '\\n\\n', content)\
\
    return content.rstrip() + '\\n'\
\
# Main execution\
try:\
    input_data = json.load(sys.stdin)\
    file_path = input_data.get('tool_input', {}).get('file_path', '')\
\
    if not file_path.endswith(('.md', '.mdx')):\
        sys.exit(0)  # Not a markdown file\
\
    if os.path.exists(file_path):\
        with open(file_path, 'r', encoding='utf-8') as f:\
            content = f.read()\
\
        formatted = format_markdown(content)\
\
        if formatted != content:\
            with open(file_path, 'w', encoding='utf-8') as f:\
                f.write(formatted)\
            print(f"✓ Fixed markdown formatting in {file_path}")\
\
except Exception as e:\
    print(f"Error formatting markdown: {e}", file=sys.stderr)\
    sys.exit(1)\
````\
\
### Desktop Notification Hook [Permalink for this section](https://adk.mo.ai.kr/en/advanced/hooks-guide\#desktop-notification-hook)\
\
Displays a desktop notification when Claude is waiting for input.\
\
```\
\
{\
  "hooks": {\
    "Notification": [\
      {\
        "matcher": "",\
        "hooks": [\
          {\
            "type": "command",\
            "command": "notify-send 'Claude Code' 'Awaiting your input'"\
          }\
        ]\
      }\
    ]\
  }\
}\
```\
\
### File Protection Hook [Permalink for this section](https://adk.mo.ai.kr/en/advanced/hooks-guide\#file-protection-hook)\
\
Blocks modification of sensitive files.\
\
```\
\
{\
  "hooks": {\
    "PreToolUse": [\
      {\
        "matcher": "Edit|Write",\
        "hooks": [\
          {\
            "type": "command",\
            "command": "python3 -c \"import json, sys; data=json.load(sys.stdin); path=data.get('tool_input',{}).get('file_path',''); sys.exit(2 if any(p in path for p in ['.env', 'package-lock.json', '.git/']) else 0)\""\
          }\
        ]\
      }\
    ]\
  }\
}\
```\
\
## MoAI Default Hooks [Permalink for this section](https://adk.mo.ai.kr/en/advanced/hooks-guide\#moai-default-hooks)\
\
MoAI-ADK provides **11 default Hook scripts**.\
\
### Hook List [Permalink for this section](https://adk.mo.ai.kr/en/advanced/hooks-guide\#hook-list)\
\
| Hook File | Event | Matcher | Role | Timeout |\
| --- | --- | --- | --- | --- |\
| `session_start__show_project_info.py` | SessionStart | All | Project status display, update check | 5 sec |\
| `pre_tool__security_guard.py` | PreToolUse | `Write|Edit|Bash` | Block dangerous file modifications/commands | 5 sec |\
| `post_tool__code_formatter.py` | PostToolUse | `Write|Edit` | Auto code formatting | 30 sec |\
| `post_tool__linter.py` | PostToolUse | `Write|Edit` | Auto lint check | 60 sec |\
| `post_tool__ast_grep_scan.py` | PostToolUse | `Write|Edit` | AST-based security scan | 30 sec |\
| `post_tool__lsp_diagnostic.py` | PostToolUse | `Write|Edit` | LSP diagnostics collection | default |\
| `pre_compact__save_context.py` | PreCompact | All | Save context before `/clear` | 3 sec |\
| `session_end__auto_cleanup.py` | SessionEnd | All | Session end cleanup | 5 sec |\
| `session_end__rank_submit.py` | SessionEnd | All | Submit session data to MoAI Rank | default |\
| `stop__loop_controller.py` | Stop | All | Ralph loop control and completion check | default |\
| `quality_gate_with_lsp.py` | Manual | All | LSP-based quality gate validation | default |\
\
### SessionStart: Display Project Info [Permalink for this section](https://adk.mo.ai.kr/en/advanced/hooks-guide\#sessionstart-display-project-info)\
\
When a session starts, shows the current state of the project.\
\
**Displayed Information:**\
\
- MoAI-ADK version and update status\
- Current project name and tech stack\
- Git branch, changes, last commit\
- Git strategy (Github-Flow mode, Auto Branch settings)\
- Language settings (conversation language)\
- Previous session context (SPEC status, task list)\
- Personalized welcome message or setup guide\
\
### PreToolUse: Security Guard [Permalink for this section](https://adk.mo.ai.kr/en/advanced/hooks-guide\#pretooluse-security-guard)\
\
**Protects dangerous operations** before file modification/command execution.\
\
**Protected Files:**\
\
| Category | Protected Files | Reason |\
| --- | --- | --- |\
| Secret storage | `secrets/`, `*.secrets.*`, `*.credentials.*` | Protect sensitive information |\
| SSH keys | `~/.ssh/*`, `id_rsa*`, `id_ed25519*` | Protect server access keys |\
| Certificates | `*.pem`, `*.key`, `*.crt` | Protect certificate files |\
| Cloud credentials | `~/.aws/*`, `~/.gcloud/*`, `~/.azure/*`, `~/.kube/*` | Protect cloud accounts |\
| Git internal | `.git/*` | Git repository integrity |\
| Token files | `*.token`, `.tokens/*`, `auth.json` | Protect auth tokens |\
\
**Note:**`.env` files are NOT protected. Allows developers to edit environment variables.\
\
**Blocking Behavior:**\
\
- Detects Write/Edit attempts on protected files\
- Returns `"permissionDecision": "deny"` response in JSON format\
- Claude Code stops modifying that file\
\
**Dangerous Bash Command Blocking:**\
\
- Database deletion: `supabase db reset`, `neon database delete`\
- Dangerous file deletion: `rm -rf /`, `rm -rf .git`\
- Docker complete removal: `docker system prune -a`\
- Force push: `git push --force origin main`\
- Terraform destroy: `terraform destroy`\
\
### PostToolUse: Code Formatter [Permalink for this section](https://adk.mo.ai.kr/en/advanced/hooks-guide\#posttooluse-code-formatter)\
\
**Automatically cleans up code** after file modification.\
\
**Supported Languages and Formatters:**\
\
| Language | Formatter (priority) | Config File |\
| --- | --- | --- |\
| Python | `ruff format`, `black` | `pyproject.toml` |\
| TypeScript/JavaScript | `biome`, `prettier`, `eslint_d` | `.prettierrc`, `biome.json` |\
| Go | `gofmt`, `goimports` | default |\
| Rust | `rustfmt` | `rustfmt.toml` |\
| Ruby | `prettier` | `.prettierrc` |\
| PHP | `prettier` | `.prettierrc` |\
| Java | `prettier` | `.prettierrc` |\
| Kotlin | `prettier` | `.prettierrc` |\
| Swift | `swiftformat` | `.swiftformat` |\
| C# | `prettier` | `.prettierrc` |\
\
**Exclusions:**\
\
- `.json`, `.lock`, `.min.js`, `.svg`, etc.\
- `node_modules`, `.git`, `dist`, `build` directories\
\
### PostToolUse: Linter [Permalink for this section](https://adk.mo.ai.kr/en/advanced/hooks-guide\#posttooluse-linter)\
\
**Automatically checks code quality** after file modification.\
\
**Supported Languages and Linters:**\
\
| Language | Linter (priority) | Check Items |\
| --- | --- | --- |\
| Python | `ruff check`, `flake8` | PEP 8, type hints, complexity |\
| TypeScript/JavaScript | `eslint`, `biome lint`, `eslint_d` | Coding standards, potential bugs |\
| Go | `golangci-lint` | Code quality, performance |\
| Rust | `clippy` | Rust idioms, performance |\
\
### PostToolUse: AST-grep Scan [Permalink for this section](https://adk.mo.ai.kr/en/advanced/hooks-guide\#posttooluse-ast-grep-scan)\
\
**Scans for structural security vulnerabilities** after file modification.\
\
**Supported Languages:**\
Python, JavaScript/TypeScript, Go, Rust, Java, Kotlin, C/C++, Ruby, PHP\
\
**Sample Scan Patterns:**\
\
- SQL Injection vulnerabilities (string-concatenated queries)\
- Hardcoded secret keys (API keys, tokens)\
- Unsafe function calls\
- Unused imports\
\
**Configuration:**`.claude/skills/moai-tool-ast-grep/rules/sgconfig.yml` or `sgconfig.yml` at project root\
\
### PostToolUse: LSP Diagnostics [Permalink for this section](https://adk.mo.ai.kr/en/advanced/hooks-guide\#posttooluse-lsp-diagnostics)\
\
**Collects LSP (Language Server Protocol) diagnostics** after file modification.\
\
**Supported Languages:**\
Python, TypeScript/JavaScript, Go, Rust, Java, Kotlin, Ruby, PHP, C/C++\
\
**Fallback Diagnostics:**\
When LSP is unavailable, uses command-line tools:\
\
- Python: `ruff check --output-format=json`\
- TypeScript: `tsc --noEmit`\
\
**Configuration:**`.moai/config/sections/ralph.yaml`\
\
```\
\
ralph:\
  enabled: true\
  hooks:\
    post_tool_lsp:\
      enabled: true\
      severity_threshold: error  # error | warning | info\
```\
\
### PreCompact: Save Context [Permalink for this section](https://adk.mo.ai.kr/en/advanced/hooks-guide\#precompact-save-context)\
\
**Saves current context to file** before `/clear` execution.\
\
**Save Location:**`.moai/memory/context-snapshot.json`\
\
**Saved Content:**\
\
- Current active SPEC status (ID, phase, progress)\
- In-progress task list (TodoWrite)\
- Completed task list\
- Modified file list\
- Git status information (branch, uncommitted changes)\
- Key decisions\
\
**Archive:** Previous snapshots are automatically archived to `.moai/memory/context-archive/`.\
\
### SessionEnd: Auto Cleanup [Permalink for this section](https://adk.mo.ai.kr/en/advanced/hooks-guide\#sessionend-auto-cleanup)\
\
Performs the following tasks when session ends:\
\
**P0 Tasks (Required):**\
\
- Save session metrics (files modified, commits made, SPECs worked on)\
- Save work status snapshot (`.moai/memory/last-session-state.json`)\
- Warning for uncommitted changes\
\
**P1 Tasks (Optional):**\
\
- Cleanup temporary files (older than 7 days)\
- Cleanup cache files\
- Scan for root directory documentation violations\
- Generate session summary\
\
### SessionEnd: MoAI Rank Submission [Permalink for this section](https://adk.mo.ai.kr/en/advanced/hooks-guide\#sessionend-moai-rank-submission)\
\
Submits session data to MoAI Rank service.\
\
**Submitted Data:**\
\
- Token usage (input, output, cache)\
- Project path (anonymized with one-way hash)\
- **Excluded:** Code, conversation content, and other sensitive information are NOT sent\
\
**Configuration:**`~/.moai/rank/config.yaml`\
\
```\
\
rank:\
  enabled: true\
  exclude_projects:\
    - "/path/to/private-project"\
    - "*/confidential/*"\
```\
\
**Registration:** Link GitHub account using `moai-adk rank register` command\
\
### Stop: Loop Controller [Permalink for this section](https://adk.mo.ai.kr/en/advanced/hooks-guide\#stop-loop-controller)\
\
Controls Ralph Engine feedback loop.\
\
**Completion Condition Check:**\
\
- LSP error count (0 errors goal)\
- LSP warning count\
- Test pass status\
- Coverage target (default 85%)\
- Completion markers (`<moai>DONE</moai>`, `<moai>COMPLETE</moai>`) detection\
\
**State File:**`.moai/cache/.moai_loop_state.json`\
\
**Configuration:**`.moai/config/sections/ralph.yaml`\
\
```\
\
ralph:\
  enabled: true\
  loop:\
    max_iterations: 10\
    auto_fix: false\
    completion:\
      zero_errors: true\
      zero_warnings: false\
      tests_pass: true\
      coverage_threshold: 85\
```\
\
### Quality Gate with LSP [Permalink for this section](https://adk.mo.ai.kr/en/advanced/hooks-guide\#quality-gate-with-lsp)\
\
Validates quality gates using LSP diagnostics.\
\
**Quality Criteria:**\
\
- Maximum error count: 0 (default)\
- Maximum warning count: 10 (default)\
- Type errors: 0 allowed\
- Lint errors: 0 allowed\
\
**Configuration:**`.moai/config/sections/quality.yaml`\
\
```\
\
constitution:\
  quality_gate:\
    max_errors: 0\
    max_warnings: 10\
    enabled: true\
```\
\
**Result Example:**\
\
```\
\
{\
  "lsp_errors": 0,\
  "lsp_warnings": 2,\
  "type_errors": 0,\
  "lint_errors": 0,\
  "passed": true,\
  "reason": "Quality gate passed: LSP diagnostics clean"\
}\
```\
\
## lib/ Shared Library [Permalink for this section](https://adk.mo.ai.kr/en/advanced/hooks-guide\#lib-shared-library)\
\
MoAI Hooks provides modules in the `lib/` directory for shared functionality.\
\
```\
\
.claude/hooks/moai/lib/\
├── __init__.py\
├── atomic_write.py           # Atomic write operations\
├── checkpoint.py             # Checkpoint management\
├── common.py                 # Common utilities\
├── config.py                 # Configuration management\
├── config_manager.py         # Configuration manager (advanced)\
├── config_validator.py       # Configuration validation\
├── context_manager.py        # Context management (snapshots, archives)\
├── enhanced_output_style_detector.py  # Output style detection\
├── file_utils.py             # File utilities\
├── git_collector.py          # Git data collection\
├── git_operations_manager.py # Git operations manager (optimized)\
├── language_detector.py      # Language detection\
├── language_validator.py     # Language validation\
├── main.py                   # Main entry point\
├── memory_collector.py       # Memory collection\
├── metrics_tracker.py        # Metrics tracking\
├── models.py                 # Data models\
├── path_utils.py             # Path utilities\
├── project.py                # Project-related\
├── renderer.py               # Renderer\
├── timeout.py                # Timeout handling\
├── tool_registry.py          # Tool registry (formatters, linters)\
├── unified_timeout_manager.py # Unified timeout manager\
├── update_checker.py         # Update check\
├── version_reader.py         # Version reading\
├── alfred_detector.py        # Alfred detection\
└── shared/utils/\
    └── announcement_translator.py  # Announcement translation\
```\
\
**Key Modules:**\
\
- **tool\_registry.py**: Auto-detection of formatters/linters for 16 programming languages\
- **git\_operations\_manager.py**: Optimized Git operations with connection pooling and caching\
- **unified\_timeout\_manager.py**: Unified timeout management with graceful degradation\
- **context\_manager.py**: Context snapshots, archives, and Memory MCP payload generation\
\
## Hook Configuration in settings.json [Permalink for this section](https://adk.mo.ai.kr/en/advanced/hooks-guide\#hook-configuration-in-settingsjson)\
\
Hooks are configured in the `hooks` section of the `.claude/settings.json` file.\
\
```\
\
{\
  "hooks": {\
    "SessionStart": [\
      {\
        "matcher": "",\
        "hooks": [\
          {\
            "type": "command",\
            "command": "${SHELL:-/bin/bash} -l -c 'uv run \"$CLAUDE_PROJECT_DIR/.claude/hooks/moai/session_start__show_project_info.py\"'"\
          }\
        ]\
      }\
    ],\
    "PreToolUse": [\
      {\
        "matcher": "Write|Edit",\
        "hooks": [\
          {\
            "type": "command",\
            "command": "${SHELL:-/bin/bash} -l -c 'uv run \"$CLAUDE_PROJECT_DIR/.claude/hooks/moai/pre_tool__security_guard.py\"'",\
            "timeout": 5000\
          }\
        ]\
      }\
    ],\
    "PostToolUse": [\
      {\
        "matcher": "Write|Edit",\
        "hooks": [\
          {\
            "type": "command",\
            "command": "${SHELL:-/bin/bash} -l -c 'uv run \"$CLAUDE_PROJECT_DIR/.claude/hooks/moai/post_tool__code_formatter.py\"'",\
            "timeout": 30000\
          },\
          {\
            "type": "command",\
            "command": "${SHELL:-/bin/bash} -l -c 'uv run \"$CLAUDE_PROJECT_DIR/.claude/hooks/moai/post_tool__linter.py\"'",\
            "timeout": 60000\
          },\
          {\
            "type": "command",\
            "command": "${SHELL:-/bin/bash} -l -c 'uv run \"$CLAUDE_PROJECT_DIR/.claude/hooks/moai/post_tool__ast_grep_scan.py\"'",\
            "timeout": 30000\
          },\
          {\
            "type": "command",\
            "command": "${SHELL:-/bin/bash} -l -c 'uv run \"$CLAUDE_PROJECT_DIR/.claude/hooks/moai/post_tool__lsp_diagnostic.py\"'"\
          }\
        ]\
      }\
    ],\
    "PreCompact": [\
      {\
        "matcher": "",\
        "hooks": [\
          {\
            "type": "command",\
            "command": "${SHELL:-/bin/bash} -l -c 'uv run \"$CLAUDE_PROJECT_DIR/.claude/hooks/moai/pre_compact__save_context.py\"'",\
            "timeout": 5000\
          }\
        ]\
      }\
    ],\
    "SessionEnd": [\
      {\
        "matcher": "",\
        "hooks": [\
          {\
            "type": "command",\
            "command": "${SHELL:-/bin/bash} -l -c 'uv run \"$CLAUDE_PROJECT_DIR/.claude/hooks/moai/session_end__auto_cleanup.py\"'",\
            "timeout": 5000\
          },\
          {\
            "type": "command",\
            "command": "${SHELL:-/bin/bash} -l -c 'uv run \"$CLAUDE_PROJECT_DIR/.claude/hooks/moai/session_end__rank_submit.py\"'"\
          }\
        ]\
      }\
    ],\
    "Stop": [\
      {\
        "matcher": "",\
        "hooks": [\
          {\
            "type": "command",\
            "command": "${SHELL:-/bin/bash} -l -c 'uv run \"$CLAUDE_PROJECT_DIR/.claude/hooks/moai/stop__loop_controller.py\"'"\
          }\
        ]\
      }\
    ]\
  }\
}\
```\
\
### Configuration Structure [Permalink for this section](https://adk.mo.ai.kr/en/advanced/hooks-guide\#configuration-structure)\
\
| Field | Description | Example |\
| --- | --- | --- |\
| `matcher` | Tool name matching pattern (regex) | `"Write|Edit"` |\
| `type` | Hook type | `"command"` |\
| `command` | Command to execute | Shell script path |\
| `timeout` | Execution time limit (milliseconds) | `5000` (5 seconds) |\
\
### Matcher Patterns [Permalink for this section](https://adk.mo.ai.kr/en/advanced/hooks-guide\#matcher-patterns)\
\
| Pattern | Description |\
| --- | --- |\
| `""` (empty string) | Matches all tools |\
| `"Write"` | Matches only Write tool |\
| `"Write|Edit"` | Matches Write or Edit tools |\
| `"Bash"` | Matches only Bash tool |\
\
## Writing Custom Hooks [Permalink for this section](https://adk.mo.ai.kr/en/advanced/hooks-guide\#writing-custom-hooks)\
\
### Basic Template [Permalink for this section](https://adk.mo.ai.kr/en/advanced/hooks-guide\#basic-template)\
\
Custom Hook scripts can be written in Python.\
\
```\
\
#!/usr/bin/env python3\
"""Custom PostToolUse Hook: Perform specific checks after file modification"""\
\
import json\
import sys\
\
\
def main():\
    # Read Hook input data from stdin\
    input_data = json.loads(sys.stdin.read())\
\
    tool_name = input_data.get("tool_name", "")\
    tool_input = input_data.get("tool_input", {})\
    file_path = tool_input.get("file_path", "")\
\
    # Check logic\
    if file_path.endswith(".py"):\
        # Custom check for Python files\
        result = check_python_file(file_path)\
\
        if result["has_issues"]:\
            # Send feedback to Claude Code\
            output = {\
                "hookSpecificOutput": {\
                  "hookEventName": "PostToolUse",\
                  "additionalContext": result["message"]\
                }\
            }\
            print(json.dumps(output))\
            return\
\
    # Suppress output if no issues\
    output = {"suppressOutput": True}\
    print(json.dumps(output))\
\
\
def check_python_file(file_path: str) -> dict:\
    """Custom Python file check"""\
    # Implement check logic\
    return {"has_issues": False, "message": ""}\
\
\
if __name__ == "__main__":\
    main()\
```\
\
### Hook Response Format [Permalink for this section](https://adk.mo.ai.kr/en/advanced/hooks-guide\#hook-response-format)\
\
| Field | Value | Behavior |\
| --- | --- | --- |\
| `suppressOutput` | `true` | Display nothing |\
| `hookSpecificOutput` | object | Provide additional context |\
| `permissionDecision` | `"allow"` | Allow work (PreToolUse) |\
| `permissionDecision` | `"deny"` | Block work (PreToolUse) |\
| `permissionDecision` | `"ask"` | Request user confirmation (PreToolUse) |\
\
### Hook Input Data [Permalink for this section](https://adk.mo.ai.kr/en/advanced/hooks-guide\#hook-input-data)\
\
Hook scripts receive JSON data via standard input (stdin).\
\
```\
\
{\
  "tool_name": "Write",\
  "tool_input": {\
    "file_path": "/path/to/file.py",\
    "content": "File content..."\
  },\
  "tool_output": "File output result (PostToolUse only)"\
}\
```\
\
## Hook Directory Structure [Permalink for this section](https://adk.mo.ai.kr/en/advanced/hooks-guide\#hook-directory-structure)\
\
```\
\
.claude/hooks/moai/\
├── __init__.py                        # Package initialization\
├── session_start__show_project_info.py # Session start\
├── pre_tool__security_guard.py         # Security guard\
├── post_tool__code_formatter.py        # Code formatter\
├── post_tool__linter.py                # Linter\
├── post_tool__ast_grep_scan.py         # AST-grep scan\
├── post_tool__lsp_diagnostic.py        # LSP diagnostics\
├── pre_compact__save_context.py        # Context save\
├── session_end__auto_cleanup.py        # Auto cleanup\
├── session_end__rank_submit.py         # MoAI Rank submit\
├── stop__loop_controller.py            # Loop controller\
├── quality_gate_with_lsp.py            # Quality gate\
└── lib/                                # Shared library\
    ├── atomic_write.py                 # Atomic write\
    ├── checkpoint.py                   # Checkpoint\
    ├── common.py                       # Common utilities\
    ├── config.py                       # Config\
    ├── config_manager.py               # Config manager\
    ├── config_validator.py             # Config validation\
    ├── context_manager.py              # Context management\
    ├── git_operations_manager.py       # Git operations manager\
    ├── tool_registry.py                # Tool registry\
    ├── unified_timeout_manager.py      # Timeout manager\
    └── ...                             # Other modules\
```\
\
**Caution**: Setting hook timeouts too long will slow down Claude Code responses. Recommended: formatter 30 sec, linter 60 sec, security guard 5 sec or less.\
\
## Disabling Hooks with Environment Variables [Permalink for this section](https://adk.mo.ai.kr/en/advanced/hooks-guide\#disabling-hooks-with-environment-variables)\
\
Specific hooks can be disabled with environment variables:\
\
| Hook | Environment Variable |\
| --- | --- |\
| AST-grep scan | `MOAI_DISABLE_AST_GREP_SCAN=1` |\
| LSP diagnostics | `MOAI_DISABLE_LSP_DIAGNOSTIC=1` |\
| Loop controller | `MOAI_DISABLE_LOOP_CONTROLLER=1` |\
\
```\
\
export MOAI_DISABLE_AST_GREP_SCAN=1\
```\
\
## Related Documentation [Permalink for this section](https://adk.mo.ai.kr/en/advanced/hooks-guide\#related-documentation)\
\
- [settings.json Guide](https://adk.mo.ai.kr/advanced/settings-json) \- Hook configuration methods\
- [CLAUDE.md Guide](https://adk.mo.ai.kr/advanced/claude-md-guide) \- Project guideline management\
- [Agent Guide](https://adk.mo.ai.kr/advanced/agent-guide) \- Agent and Hook integration\
\
**Tip**: Hooks are the core of MoAI-ADK quality assurance. Automating code formatting and lint checks allows developers to focus on logic. Add custom hooks to build automation tailored to your project.\
\
Last updated onFebruary 8, 2026\
\
[Builder Agents Guide](https://adk.mo.ai.kr/en/advanced/builder-agents "Builder Agents Guide") [settings.json Guide](https://adk.mo.ai.kr/en/advanced/settings-json "settings.json Guide")\
\
* * *

* * *

# Extended Technical Reference

# Claude Code Hooks - Official Documentation Reference

Source: https://code.claude.com/docs/en/hooks

## Key Concepts

### What are Claude Code Hooks?

Hooks are powerful automation tools that extend Claude Code functionality by executing commands or prompts in response to specific events. They provide deterministic control over Claude Code's behavior through event-driven automation.

Security Warning: Hooks execute arbitrary shell commands with system credentials. Use with extreme caution.

### Hook System Architecture

Event Flow:
```
User Action → Event Trigger → Hook Execution → Result Processing
```

Hook Types:

- Command Hooks: Execute shell commands
- Prompt Hooks: Generate and execute prompts
- Validation Hooks: Validate inputs and outputs
- Notification Hooks: Send notifications or logs

## Core Hook Events

### Tool-Related Events

PreToolUse: Before tool execution
- Can block tool execution
- Perfect for validation and security checks
- Receives tool name and parameters

PostToolUse: After successful tool use
- Cannot block (post-execution)
- Ideal for logging and cleanup
- Receives execution results

PermissionRequest: When permission dialogs appear
- Can auto-approve or deny
- Useful for automation workflows
- Receives permission details

### Session-Related Events

SessionStart: When new session begins
- Initialize session state
- Set up environment variables
- Configure session-specific settings

SessionEnd: When session terminates
- Cleanup temporary files
- Save session state
- Generate session reports

SubagentStop: When sub-agent tasks complete
- Process sub-agent results
- Trigger follow-up actions
- Log completion status

Stop: When main agent finishes
- Final cleanup operations
- Generate completion reports
- Prepare for next session

### User Interaction Events

UserPromptSubmit: When user submits prompts
- Validate user input
- Modify prompts programmatically
- Add contextual information

## Hook Configuration Locations

Hooks can be configured in three locations with different capabilities:

### 1. Settings Files (Global/Project)

- Location: `~/.claude/settings.json` (user) or `.claude/settings.json` (project)
- Scope: All sessions in scope
- Features: Full hook types, matchers, timeouts
- Limitation: `once` field NOT supported

### 2. Skill/Slash Command Frontmatter (Component-scoped)

- Location: SKILL.md or command .md frontmatter
- Scope: Only when the skill/command is active
- Features: Full hook types, matchers, timeouts, `once` field
- Special: `once: true` runs hook only once per session

### 3. Agent Frontmatter (Agent-scoped)

- Location: Agent .md frontmatter
- Scope: Only when the agent is running
- Features: PreToolUse, PostToolUse, Stop hooks
- Limitation: `once` field NOT supported (agents only)

## Skill/Command Frontmatter Hooks (2026-01)

Skills and slash commands can define hooks directly in their YAML frontmatter. This is the ONLY location where the `once` field is supported.

### Basic Skill Hook Example

```yaml
---
name: secure-file-operations
description: File operations with security checks
hooks:
  PreToolUse:
    - matcher: "Write|Edit"
      hooks:
        - type: command
          command: "./scripts/security-check.sh $TOOL_INPUT"
          timeout: 30
  PostToolUse:
    - matcher: "Write"
      hooks:
        - type: command
          command: "./scripts/verify-write.sh"
---
```

### Using once: true (Skills Only)

The `once` field ensures a hook runs only once per session, regardless of how many times the tool is used:

```yaml
---
name: setup-skill
description: Skill with one-time initialization
hooks:
  PreToolUse:
    - matcher: "Bash"
      hooks:
        - type: command
          command: "./init.sh"
          once: true
---
```

IMPORTANT: The `once` field is ONLY supported in skill/slash command frontmatter hooks. It is NOT supported in settings.json or agent frontmatter.

### Slash Command Hook Example

```yaml
---
name: deploy
description: Deploy application with pre-checks
hooks:
  PreToolUse:
    - matcher: "Bash"
      hooks:
        - type: command
          command: "./scripts/deployment-check.sh"
          timeout: 60
          once: true
---
```

### Agent Frontmatter Hooks

Agents can also define hooks, but `once` is NOT supported:

```yaml
---
name: code-reviewer
description: Review code changes
hooks:
  PreToolUse:
    - matcher: "Edit"
      hooks:
        - type: command
          command: "./scripts/pre-edit-check.sh"
  PostToolUse:
    - matcher: "Edit|Write"
      hooks:
        - type: command
          command: "./scripts/run-linter.sh"
          timeout: 45
---
```

## Hook Configuration Structure

### Basic Configuration

Configure hooks in `settings.json`:

```json
{
 "hooks": {
 "PreToolUse": [
 {
 "matcher": "Bash",
 "hooks": [
 {
 "type": "command",
 "command": "echo 'Executing bash command:' >> ~/.claude/hooks.log"
 }
 ]
 }
 ]
 }
}
```

### Advanced Configuration

Multiple Event Handlers:
```json
{
 "hooks": {
 "PreToolUse": [
 {
 "matcher": "Bash",
 "hooks": [
 {
 "type": "command",
 "command": "validate-bash-command \"$COMMAND\"",
 "blocking": true
 },
 {
 "type": "prompt",
 "prompt": "Review bash command for security: $COMMAND"
 }
 ]
 },
 {
 "matcher": "Write",
 "hooks": [
 {
 "type": "command",
 "command": "backup-file \"$TARGET_PATH\""
 }
 ]
 }
 ]
 }
}
```

### Complex Hook Patterns

Conditional Execution:
```json
{
 "hooks": {
 "PreToolUse": [
 {
 "matcher": "Bash",
 "hooks": [
 {
 "type": "command",
 "command": "if [[ \"$COMMAND\" == *\"rm -rf\"* ]]; then exit 1; fi",
 "blocking": true
 }
 ]
 }
 ]
 }
}
```

## Hook Types and Usage

### Command Hooks

Shell Command Execution:
```json
{
 "type": "command",
 "command": "echo \"Tool: $TOOL_NAME, Args: $ARGUMENTS\" >> ~/claude-hooks.log",
 "env": {
 "HOOK_LOG_LEVEL": "debug"
 }
}
```

Available Variables:
- `$TOOL_NAME`: Name of the tool being executed
- `$ARGUMENTS`: Tool arguments as JSON string
- `$SESSION_ID`: Current session identifier
- `$USER_INPUT`: User's original input

### Prompt Hooks

Prompt Generation and Execution:
```json
{
 "type": "prompt",
 "prompt": "Review this command for security risks: $COMMAND\n\nProvide a risk assessment and recommendations.",
 "model": "claude-3-5-sonnet-20241022",
 "max_tokens": 500
}
```

Prompt Variables:
- All command hook variables available
- `$HOOK_CONTEXT`: Current hook execution context
- `$PREVIOUS_RESULTS`: Results from previous hooks

### Validation Hooks

Input/Output Validation:
```json
{
 "type": "validation",
 "pattern": "^[a-zA-Z0-9_\\-\\.]+$",
 "message": "File name contains invalid characters",
 "blocking": true
}
```

## Security Considerations

### Security Best Practices

Principle of Least Privilege:
```json
{
 "hooks": {
 "PreToolUse": [
 {
 "matcher": "Bash",
 "hooks": [
 {
 "type": "command",
 "command": "allowed_commands=(npm python git make)",
 "command": "if [[ ! \" ${allowed_commands[@]} \" =~ \" ${COMMAND%% *} \" ]]; then exit 1; fi",
 "blocking": true
 }
 ]
 }
 ]
 }
}
```

Input Sanitization:
```json
{
 "hooks": {
 "UserPromptSubmit": [
 {
 "hooks": [
 {
 "type": "command",
 "command": "echo \"$USER_INPUT\" | sanitize-input",
 "blocking": true
 }
 ]
 }
 ]
 }
}
```

### Dangerous Pattern Detection

Prevent Dangerous Commands:
```json
{
 "hooks": {
 "PreToolUse": [
 {
 "matcher": "Bash",
 "hooks": [
 {
 "type": "command",
 "command": "dangerous_patterns=(\"rm -rf\" \"sudo\" \"chmod 777\" \"dd\" \"mkfs\")",
 "command": "for pattern in \"${dangerous_patterns[@]}\"; do if [[ \"$COMMAND\" == *\"$pattern\"* ]]; then echo \"Dangerous command detected: $pattern\" >&2; exit 1; fi; done",
 "blocking": true
 }
 ]
 }
 ]
 }
}
```

## Hook Management

### Configuration Management

Using /hooks Command:
```bash
# Open hooks configuration editor
/hooks

# View current hooks configuration
/hooks --list

# Test hook functionality
/hooks --test
```

Settings File Locations:
- Global: `~/.claude/settings.json` (user-wide hooks)
- Project: `.claude/settings.json` (project-specific hooks)
- Local: `.claude/settings.local.json` (local overrides)

### Hook Lifecycle Management

Installation:
```bash
# Add hook to configuration
claude config set hooks.PreToolUse[0].matcher "Bash"
claude config set hooks.PreToolUse[0].hooks[0].type "command"
claude config set hooks.PreToolUse[0].hooks[0].command "echo 'Bash executed' >> hooks.log"

# Validate configuration
claude config validate
```

Testing and Debugging:
```bash
# Test individual hook
claude hooks test --event PreToolUse --tool Bash

# Debug hook execution
claude hooks debug --verbose

# View hook logs
claude hooks logs
```

## Common Hook Patterns

### Pre-Commit Validation

Code Quality Checks:
```json
{
 "hooks": {
 "PreToolUse": [
 {
 "matcher": "Bash",
 "hooks": [
 {
 "type": "command",
 "command": "if [[ \"$COMMAND\" == \"git commit\"* ]]; then npm run lint && npm test; fi",
 "blocking": true
 }
 ]
 }
 ]
 }
}
```

### Auto-Backup System

File Modification Backup:
```json
{
 "hooks": {
 "PreToolUse": [
 {
 "matcher": "Write",
 "hooks": [
 {
 "type": "command",
 "command": "cp \"$TARGET_PATH\" \"$TARGET_PATH.backup.$(date +%s)\""
 }
 ]
 },
 {
 "matcher": "Edit",
 "hooks": [
 {
 "type": "command",
 "command": "cp \"$TARGET_PATH\" \"$TARGET_PATH.backup.$(date +%s)\""
 }
 ]
 }
 ]
 }
}
```

### Session Logging

Comprehensive Activity Logging:
```json
{
 "hooks": {
 "PostToolUse": [
 {
 "hooks": [
 {
 "type": "command",
 "command": "echo \"$(date '+%Y-%m-%d %H:%M:%S') - Tool: $TOOL_NAME, Duration: $DURATION_MS ms, Success: $SUCCESS\" >> ~/.claude/session-logs/$SESSION_ID.log"
 }
 ]
 },
 {
 "matcher": "*",
 "hooks": [
 {
 "type": "command",
 "command": "echo \"$(date '+%Y-%m-%d %H:%M:%S') - Session: $SESSION_ID, Event: $EVENT_TYPE\" >> ~/.claude/activity.log"
 }
 ]
 }
 ]
 }
}
```

## Error Handling and Recovery

### Error Handling Strategies

Graceful Degradation:
```json
{
 "hooks": {
 "PreToolUse": [
 {
 "matcher": "Bash",
 "hooks": [
 {
 "type": "command",
 "command": "if ! validate-command \"$COMMAND\"; then echo \"Command validation failed, proceeding with caution\"; exit 0; fi",
 "blocking": false
 }
 ]
 }
 ]
 }
}
```

Fallback Mechanisms:
```json
{
 "hooks": {
 "PreToolUse": [
 {
 "matcher": "*",
 "hooks": [
 {
 "type": "command",
 "command": "primary-command \"$ARGUMENTS\" || fallback-command \"$ARGUMENTS\"",
 "fallback": {
 "type": "command",
 "command": "echo \"Primary hook failed, using fallback\""
 }
 }
 ]
 }
 ]
 }
}
```

## Performance Optimization

### Hook Performance

Asynchronous Execution:
```json
{
 "hooks": {
 "PostToolUse": [
 {
 "hooks": [
 {
 "type": "command",
 "command": "background-process \"$ARGUMENTS\" &",
 "async": true
 }
 ]
 }
 ]
 }
}
```

Conditional Hook Execution:
```json
{
 "hooks": {
 "PreToolUse": [
 {
 "matcher": "Bash",
 "condition": "$COMMAND != 'git status'",
 "hooks": [
 {
 "type": "command",
 "command": "complex-validation \"$COMMAND\""
 }
 ]
 }
 ]
 }
}
```

## Integration with Other Systems

### External Service Integration

Webhook Integration:
```json
{
 "hooks": {
 "SessionEnd": [
 {
 "hooks": [
 {
 "type": "command",
 "command": "curl -X POST https://api.example.com/webhook -d '{\"session_id\": \"$SESSION_ID\", \"events\": \"$EVENT_COUNT\"}'"
 }
 ]
 }
 ]
 }
}
```

Database Logging:
```json
{
 "hooks": {
 "PostToolUse": [
 {
 "hooks": [
 {
 "type": "command",
 "command": "psql -h localhost -u claude -d hooks -c \"INSERT INTO tool_usage (session_id, tool_name, timestamp) VALUES ('$SESSION_ID', '$TOOL_NAME', NOW())\""
 }
 ]
 }
 ]
 }
}
```

## Best Practices

### Development Guidelines

Hook Development Checklist:
- [ ] Test hooks in isolation before deployment
- [ ] Implement proper error handling and logging
- [ ] Use non-blocking hooks for non-critical operations
- [ ] Validate all inputs and sanitize outputs
- [ ] Document hook dependencies and requirements
- [ ] Implement graceful fallbacks for critical operations
- [ ] Monitor hook performance and resource usage
- [ ] Regular security audits and permission reviews

Performance Guidelines:
- Keep hook execution time under 100ms for critical paths
- Use asynchronous execution for non-blocking operations
- Minimize file I/O operations in hot paths
- Cache frequently used data and configuration
- Implement rate limiting for external API calls

Security Guidelines:
- Never expose sensitive credentials in hook commands
- Validate and sanitize all user inputs
- Use principle of least privilege for file system access
- Implement proper access controls for external integrations
- Regular security reviews and penetration testing

This comprehensive reference provides all the information needed to create, configure, and manage Claude Code Hooks effectively and securely.
