[Skip to Content](https://adk.mo.ai.kr/en/claude-code/cli-reference#nextra-skip-nav)

[Claude Code](https://adk.mo.ai.kr/en/claude-code "Claude Code") CLI Reference

Copy page

# CLI Reference

Complete reference to the Claude Code command-line interface, including commands and flags.

## CLI Commands [Permalink for this section](https://adk.mo.ai.kr/en/claude-code/cli-reference\#cli-commands)

| Command | Description | Example |
| --- | --- | --- |
| `claude` | Start interactive REPL | `claude` |
| `claude "query"` | Start REPL with initial prompt | `claude "project overview"` |
| `claude -p "query"` | Query via SDK then exit | `claude -p "explain this function"` |
| `cat file | claude -p "query"` | Process piped content | `cat logs.txt | claude -p "explain"` |
| `claude -c` | Continue recent conversation in current directory | `claude -c` |
| `claude -c -p "query"` | Continue via SDK | `claude -c -p "check formatting errors"` |
| `claude -r "<session>" "query"` | Resume session by ID or name | `claude -r "auth-refactor" "PR complete"` |
| `claude update` | Update to latest version | `claude update` |
| `claude mcp` | Configure Model Context Protocol (MCP) servers | See [Claude Code MCP documentation](https://code.claude.com/docs/en/mcp) |

## CLI Flags [Permalink for this section](https://adk.mo.ai.kr/en/claude-code/cli-reference\#cli-flags)

Customize Claude Code behavior with the following command-line flags:

| Flag | Description | Example |
| --- | --- | --- |
| `--add-dir` | Add additional working directories Claude can access (ensure each path exists as a directory) | `claude --add-dir ../apps ../lib` |
| `--agent` | Specify agent for current session (overrides `agent` setting) | `claude --agent my-custom-agent` |
| `--agents` | Dynamically define custom subagents in JSON (see format below) | `claude --agents '{"reviewer":{"description":"code review","prompt":"be a code reviewer"}}'` |
| `--allowedTools` | Tools to run without permission prompts. See [Permission rule syntax](https://code.claude.com/docs/en/settings#permission-rule-syntax). Use `--tools` instead to restrict available tools | `"Bash(git log:*)" "Bash(git diff:*)" "Read"` |
| `--continue`, `-c` | Load recent conversation in current directory | `claude --continue` |
| `--dangerously-skip-permissions` | Skip all permission prompts (use with caution) | `claude --dangerously-skip-permissions` |
| `--debug` | Enable debug mode with optional category filtering (e.g., `"api,hooks"` or `"!statsig,!file"`) | `claude --debug "api,mcp"` |
| `--disable-slash-commands` | Disable all skills and slash commands for this session | `claude --disable-slash-commands` |
| `--disallowedTools` | Tools removed from model’s context and unavailable | `"Bash(git log:*)" "Bash(git diff:*)" "Edit"` |
| `--fork-session` | Create new session ID on resume (use with `--resume` or `--continue`) | `claude --resume abc123 --fork-session` |
| `--model` | Set model for current session as an alias (`sonnet` or `opus`) or the model’s full name | `claude --model claude-sonnet-4-5-20250929` |
| `--output-format` | Specify output format in print mode (options: `text`, `json`, `stream-json`) | `claude -p "query" --output-format json` |
| `--permission-mode` | Start with specified permission mode | `claude --permission-mode plan` |
| `--print`, `-p` | Print response without interactive mode (see SDK documentation for programmatic usage) | `claude -p "query"` |
| `--resume`, `-r` | Resume specific session by ID or name, or open conversation chooser | `claude --resume auth-refactor` |
| `--session-id` | Use specific session ID for conversation (must be valid UUID) | `claude --session-id "550e8400-e29b-41d4-a716-446655440000"` |
| `--system-prompt` | Replace entire system prompt with custom text (works in both interactive and print modes) | `claude --system-prompt "Python expert"` |
| `--append-system-prompt` | Append custom text to end of default prompt (works in both interactive and print modes) | `claude --append-system-prompt "always use TypeScript"` |
| `--tools` | Control built-in tools Claude can use. Use `""` for none, `"default"` for all, or tool names like `"Bash,Edit,Read"` | `claude --tools "Bash,Edit,Read"` |
| `--verbose` | Enable verbose logging, showing turn-by-turn output (useful for debugging in both print and interactive modes) | `claude --verbose` |
| `--version`, `-v` | Print version number | `claude -v` |

## System Prompt Flags [Permalink for this section](https://adk.mo.ai.kr/en/claude-code/cli-reference\#system-prompt-flags)

Claude Code provides 4 flags for customizing the system prompt, each serving different purposes:

| Flag | Behavior | Mode | Use case |
| --- | --- | --- | --- |
| `--system-prompt` | **Replace** entire default prompt | Interactive + Print | Complete control over Claude’s behavior and instructions |
| `--system-prompt-file` | **Replace** with file contents | Print only | Load prompts from files for reproducibility and version control |
| `--append-system-prompt` | **Append** to default prompt | Interactive + Print | Add specific instructions while preserving Claude Code defaults |
| `--append-system-prompt-file` | **Append** file contents to default prompt | Print only | Load versioned additions from files while preserving defaults |

**When to use each:**

- **`--system-prompt`**: Use when you need complete control over Claude’s system prompt. Removes all default Claude Code instructions, providing a clean slate.



```

claude --system-prompt "Python expert who only writes code with type annotations"
```

- **`--system-prompt-file`**: Useful when you need custom prompts from files for team consistency or version-controlled prompt templates.



```

claude -p --system-prompt-file ./prompts/code-review.txt "review PR"
```

- **`--append-system-prompt`**: Safest option for adding specific instructions while keeping Claude Code’s default functionality. Recommended for most use cases.



```

claude --append-system-prompt "always include TypeScript and JSDoc comments"
```

- **`--append-system-prompt-file`**: Useful for loading additional instructions from files while preserving defaults.



```

claude -p --append-system-prompt-file ./prompts/style-rules.txt "review PR"
```


For most use cases, `--append-system-prompt` or `--append-system-prompt-file` are recommended because they preserve Claude Code’s built-in functionality while adding your custom requirements. Use `--system-prompt` or `--system-prompt-file` only when you need complete control over the system prompt.

## See Also [Permalink for this section](https://adk.mo.ai.kr/en/claude-code/cli-reference\#see-also)

- [Chrome extension](https://adk.mo.ai.kr/claude-code/chrome) \- Browser automation and web testing
- [Interactive mode](https://adk.mo.ai.kr/claude-code/interactive-mode) \- Keyboard shortcuts, input modes, interactive features
- [Quickstart](https://adk.mo.ai.kr/claude-code/quickstart) \- Get started with Claude Code
- [Common workflows](https://adk.mo.ai.kr/claude-code/common-workflows) \- Advanced workflows and patterns
- [Settings](https://adk.mo.ai.kr/claude-code/settings) \- Configuration options
- [SDK documentation](https://code.claude.com/docs/en/sdk) \- Programmatic usage and integration

* * *

**Sources:**

- [CLI reference](https://adk.mo.ai.kr/claude-code/cli-reference)

Last updated onFebruary 12, 2026

[Sub Agents](https://adk.mo.ai.kr/en/claude-code/sub-agents "Sub Agents") [Interactive Mode](https://adk.mo.ai.kr/en/claude-code/interactive-mode "Interactive Mode")

* * *

* * *

# Extended Technical Reference

# Claude Code CLI Reference - Official Documentation Reference

Source: https://code.claude.com/docs/en/cli-reference
Updated: 2026-01-06

## Overview

The Claude Code CLI provides command-line access to Claude's capabilities with comprehensive options for customization, automation, and integration.

## Basic Commands

### Interactive Mode

```bash
claude
```

Starts Claude Code in interactive terminal mode.

### Direct Query

```bash
claude "Your question or task"
```

Sends a single query and enters interactive mode.

### Prompt Mode

```bash
claude -p "Your prompt"
```

Runs prompt, outputs response, and exits.

### Continue Conversation

```bash
claude -c "Follow-up"
```

Continues the most recent conversation.

### Resume Session

```bash
claude -r session_id "Continue task"
```

Resumes a specific session by ID.

### Update CLI

```bash
claude update
```

Updates Claude Code to the latest version.

## System Prompt Options

### Replace System Prompt

```bash
claude -p "Task" --system-prompt "Custom instructions"
```

Warning: Removes Claude Code default capabilities.

### Append to System Prompt

```bash
claude -p "Task" --append-system-prompt "Additional context"
```

Recommended: Preserves Claude Code functionality.

### Load from File

```bash
claude -p "Task" --system-prompt-file prompt.txt
```

Loads system prompt from external file.

## Tool Management

### Specify Tools

```bash
claude -p "Task" --tools "Read,Write,Bash"
```

Explicitly lists available tools.

### Allow Tools (Auto-approve)

```bash
claude -p "Task" --allowedTools "Read,Grep,Glob"
```

Auto-approves specified tools without prompts.

### Tool Pattern Matching

```bash
claude -p "Task" --allowedTools "Bash(git:*)"
```

Allow specific command patterns only.

### Multiple Patterns

```bash
claude -p "Task" --allowedTools "Bash(npm:*),Bash(git:*),Read"
```

### Disallow Tools

```bash
claude -p "Task" --disallowedTools "Bash,Write"
```

Prevents Claude from using specified tools.

## Output Options

### Output Format

```bash
claude -p "Task" --output-format text
claude -p "Task" --output-format json
claude -p "Task" --output-format stream-json
```

Available formats: text (default), json, stream-json

### JSON Schema Validation

```bash
claude -p "Extract data" --json-schema '{"type": "object"}'
```

Validates output against JSON schema.

### Schema from File

```bash
claude -p "Task" --json-schema-file schema.json
```

## Session Management

### Fork Session

```bash
claude -p "Alternative approach" --fork-session session_id
```

Creates a new branch from existing session.

### Maximum Turns

```bash
claude -p "Complex task" --max-turns 15
```

Limits conversation turns.

## Agent Configuration

### Use Specific Agent

```bash
claude -p "Review code" --agent code-reviewer
```

Uses defined sub-agent.

### Dynamic Agent Definition

```bash
claude -p "Task" --agents '{
  "my-agent": {
    "description": "Agent purpose",
    "prompt": "System prompt",
    "tools": ["Read", "Grep"],
    "model": "sonnet"
  }
}'
```

Defines agents inline via JSON.

## Settings

### Override Settings

```bash
claude -p "Task" --settings '{"model": "opus"}'
```

Overrides settings for this invocation.

### Show Setting Sources

```bash
claude --setting-sources
```

Displays origin of each setting value.

## Browser Integration

### Enable Chrome

```bash
claude -p "Browse task" --chrome
```

Enables browser automation.

### Disable Chrome

```bash
claude -p "Code task" --no-chrome
```

Disables browser features.

## MCP Server Commands

### Add MCP Server

HTTP transport:
```bash
claude mcp add --transport http server-name https://url
```

Stdio transport:
```bash
claude mcp add --transport stdio server-name command args
```

SSE transport (deprecated):
```bash
claude mcp add --transport sse server-name https://url
```

### List MCP Servers

```bash
claude mcp list
```

### Get Server Details

```bash
claude mcp get server-name
```

### Remove MCP Server

```bash
claude mcp remove server-name
```

## Plugin Commands

### Install Plugin

```bash
claude plugin install plugin-name
claude plugin install owner/repo
claude plugin install https://github.com/owner/repo.git
claude plugin install plugin-name --scope project
```

### Uninstall Plugin

```bash
claude plugin uninstall plugin-name
```

### Enable/Disable Plugin

```bash
claude plugin enable plugin-name
claude plugin disable plugin-name
```

### Update Plugin

```bash
claude plugin update plugin-name
claude plugin update  # Update all
```

### List Plugins

```bash
claude plugin list
```

### Validate Plugin

```bash
claude plugin validate .
```

## Environment Variables

### Configuration Variables

- CLAUDE_API_KEY: API authentication key
- CLAUDE_MODEL: Default model selection
- CLAUDE_OUTPUT_FORMAT: Default output format
- CLAUDE_TIMEOUT: Request timeout in seconds

### Runtime Variables

- CLAUDE_PROJECT_DIR: Current project directory
- CLAUDE_CODE_REMOTE: Indicates remote execution
- CLAUDE_ENV_FILE: Path to environment file

### MCP Variables

- MAX_MCP_OUTPUT_TOKENS: Maximum MCP output (default: 25000)
- MCP_TIMEOUT: MCP server timeout in milliseconds

### Update Control

- DISABLE_AUTOUPDATER: Disable automatic updates

## Exit Codes

- 0: Success
- 1: General error
- 2: Permission denied or blocked operation

## Complete Examples

### CI/CD Code Review

```bash
claude -p "Review this PR for security issues" \
  --allowedTools "Read,Grep,Glob" \
  --append-system-prompt "Focus on OWASP Top 10 vulnerabilities" \
  --output-format json \
  --max-turns 5
```

### Automated Documentation

```bash
claude -p "Generate API documentation for src/" \
  --allowedTools "Read,Glob,Write" \
  --json-schema-file docs-schema.json
```

### Structured Data Extraction

```bash
claude -p "Extract all function signatures from codebase" \
  --allowedTools "Read,Grep,Glob" \
  --json-schema '{"type":"array","items":{"type":"object","properties":{"name":{"type":"string"},"params":{"type":"array"},"returns":{"type":"string"}}}}'
```

### Git Commit Message

```bash
git diff --staged | claude -p "Generate commit message" \
  --allowedTools "Read" \
  --output-format text
```

### Multi-Agent Workflow

```bash
claude -p "Analyze and refactor this module" \
  --agents '{
    "analyzer": {
      "description": "Code analyzer",
      "tools": ["Read", "Grep"],
      "model": "haiku"
    },
    "refactorer": {
      "description": "Code refactorer",
      "tools": ["Read", "Write", "Edit"],
      "model": "sonnet"
    }
  }'
```

## Best Practices

### Security

- Use --allowedTools to restrict capabilities
- Avoid --dangerously-skip-permissions in untrusted environments
- Validate input before passing to Claude

### Performance

- Use appropriate --max-turns for task complexity
- Consider haiku model for simple tasks
- Use --output-format json for programmatic parsing

### Debugging

- Use --setting-sources to troubleshoot configuration
- Check exit codes for error handling
- Use --output-format json for detailed response metadata

### Automation

- Always specify --allowedTools in scripts
- Use --output-format json for reliable parsing
- Handle errors with exit code checks
- Log session IDs for debugging


* * *

# Headless Mode Reference

# Claude Code Headless Mode - Official Documentation Reference

Source: https://code.claude.com/docs/en/headless
Updated: 2026-01-06

## Overview

Headless mode allows programmatic interaction with Claude Code without an interactive terminal interface. This enables CI/CD integration, automated workflows, and script-based usage.

## Basic Usage

### Simple Prompt

```bash
claude -p "Your prompt here"
```

The -p flag runs Claude with the given prompt and exits after completion.

### Continue Previous Conversation

```bash
claude -c "Follow-up question"
```

The -c flag continues the most recent conversation.

### Resume Specific Session

```bash
claude -r session_id "Continue this task"
```

The -r flag resumes a specific session by ID.

## Output Formats

### Plain Text (default)

```bash
claude -p "Explain this code" --output-format text
```

Returns response as plain text.

### JSON Output

```bash
claude -p "Analyze this" --output-format json
```

Returns structured JSON:
```json
{
  "result": "Response text",
  "session_id": "abc123",
  "usage": {
    "input_tokens": 100,
    "output_tokens": 200
  },
  "structured_output": null
}
```

### Streaming JSON

```bash
claude -p "Long task" --output-format stream-json
```

Returns JSON objects as they are generated, useful for real-time processing.

## Structured Output

### JSON Schema Validation

```bash
claude -p "Extract data" --json-schema '{"type": "object", "properties": {"name": {"type": "string"}}}'
```

Claude validates output against the provided JSON schema.

### Schema from File

```bash
claude -p "Process this" --json-schema-file schema.json
```

Loads schema from a file for complex structures.

## Tool Management

### Allow Specific Tools

```bash
claude -p "Build the project" --allowedTools "Bash,Read,Write"
```

Auto-approves the specified tools without prompts.

### Tool Pattern Matching

```bash
claude -p "Check git status" --allowedTools "Bash(git:*)"
```

Allow only specific command patterns.

### Multiple Patterns

```bash
claude -p "Review changes" --allowedTools "Bash(git diff:*),Bash(git status:*),Read"
```

Combine multiple tool patterns.

### Disallow Specific Tools

```bash
claude -p "Analyze code" --disallowedTools "Bash,Write"
```

Prevent Claude from using specified tools.

## System Prompt Configuration

### Replace System Prompt

```bash
claude -p "Task" --system-prompt "You are a code reviewer"
```

Completely replaces the default system prompt.

Warning: This removes Claude Code capabilities. Use --append-system-prompt instead unless you have specific requirements.

### Append to System Prompt

```bash
claude -p "Task" --append-system-prompt "Focus on security issues"
```

Adds instructions while preserving Claude Code functionality.

### System Prompt from File

```bash
claude -p "Task" --system-prompt-file prompt.txt
```

Loads system prompt from a file.

## Session Management

### Get Session ID

JSON output includes session_id for later reference:

```bash
result=$(claude -p "Start task" --output-format json)
session_id=$(echo $result | jq -r '.session_id')
```

### Fork Session

```bash
claude -p "Alternative approach" --fork-session abc123
```

Creates a new conversation branch from an existing session.

## Advanced Options

### Maximum Turns

```bash
claude -p "Complex task" --max-turns 10
```

Limits the number of conversation turns.

### Custom Agents

```bash
claude -p "Review code" --agent code-reviewer
```

Uses a specific sub-agent for the task.

### Dynamic Agent Definition

```bash
claude -p "Task" --agents '{
  "reviewer": {
    "description": "Code review specialist",
    "prompt": "You are an expert code reviewer",
    "tools": ["Read", "Grep", "Glob"],
    "model": "sonnet"
  }
}'
```

Defines sub-agents dynamically via JSON.

### Settings Override

```bash
claude -p "Task" --settings '{"model": "opus"}'
```

Overrides settings for this invocation.

### Show Setting Sources

```bash
claude --setting-sources
```

Displays where each setting value comes from.

## Browser Integration

### Enable Chrome Integration

```bash
claude -p "Browse this page" --chrome
```

Enables browser automation capabilities.

### Disable Chrome Integration

```bash
claude -p "Code task" --no-chrome
```

Explicitly disables browser features.

## CI/CD Integration Examples

### GitHub Actions

```yaml
- name: Code Review
  run: |
    claude -p "Review the changes in this PR" \
      --allowedTools "Read,Grep,Glob" \
      --output-format json > review.json
```

### Automated Commit Messages

```bash
git diff --staged | claude -p "Generate commit message for these changes" \
  --allowedTools "Read" \
  --append-system-prompt "Output only the commit message, no explanation"
```

### PR Description Generation

```bash
claude -p "Generate PR description" \
  --allowedTools "Bash(git diff:*),Bash(git log:*),Read" \
  --output-format json
```

### Structured Data Extraction

```bash
claude -p "Extract API endpoints from this codebase" \
  --allowedTools "Read,Grep,Glob" \
  --json-schema '{"type": "array", "items": {"type": "object", "properties": {"path": {"type": "string"}, "method": {"type": "string"}}}}'
```

## Agent SDK

For more programmatic control, use the Agent SDK:

### Python

```python
from anthropic import Claude

agent = Claude()
result = agent.run("Your task", tools=["Read", "Write"])
```

### TypeScript

```typescript
import { Claude } from '@anthropic-ai/sdk';

const agent = new Claude();
const result = await agent.run("Your task", { tools: ["Read", "Write"] });
```

### SDK Features

- Native structured outputs
- Tool approval callbacks
- Stream-based real-time output
- Full programmatic control
- Error handling and retry logic

## Environment Variables

### Configuration via Environment

```bash
export CLAUDE_MODEL=opus
export CLAUDE_OUTPUT_FORMAT=json
claude -p "Task"
```

### Available Variables

- CLAUDE_MODEL: Default model selection
- CLAUDE_OUTPUT_FORMAT: Default output format
- CLAUDE_TIMEOUT: Request timeout in seconds
- CLAUDE_API_KEY: API authentication

## Best Practices

### Use Append for System Prompts

Prefer --append-system-prompt over --system-prompt to retain Claude Code capabilities.

### Specify Tool Restrictions

Always use --allowedTools in CI/CD to prevent unintended actions.

### Handle Errors

Check exit codes and parse JSON output for error handling:

```bash
result=$(claude -p "Task" --output-format json 2>&1)
if [ $? -ne 0 ]; then
  echo "Error: $result"
  exit 1
fi
```

### Use Structured Output

For data extraction, use --json-schema to ensure consistent output format.

### Log Sessions

Store session IDs for debugging and continuity:

```bash
session_id=$(claude -p "Task" --output-format json | jq -r '.session_id')
echo "Session: $session_id" >> sessions.log
```

## Troubleshooting

### Command Hangs

If headless mode appears to hang:
- Check for permission prompts (use --allowedTools)
- Verify network connectivity
- Check API key configuration

### Unexpected Output Format

If output format is wrong:
- Verify --output-format flag spelling
- Check for conflicting environment variables
- Ensure JSON schema is valid if using --json-schema

### Tool Permission Denied

If tools are blocked:
- Verify tool names in --allowedTools
- Check pattern syntax for command restrictions
- Review enterprise policy restrictions
