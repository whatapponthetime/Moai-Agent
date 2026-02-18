[Skip to Content](https://adk.mo.ai.kr/en/claude-code/troubleshooting#nextra-skip-nav)

[Claude Code](https://adk.mo.ai.kr/en/claude-code "Claude Code") Troubleshooting

Copy page

# Troubleshooting

Find solutions to common problems with Claude Code installation and usage.

## Common Installation Issues [Permalink for this section](https://adk.mo.ai.kr/en/claude-code/troubleshooting\#common-installation-issues)

### Windows Installation in WSL: WSL Errors [Permalink for this section](https://adk.mo.ai.kr/en/claude-code/troubleshooting\#windows-installation-in-wsl-wsl-errors)

You may encounter the following issues in WSL:

**OS/Platform Detection Issues**: If installation fails, WSL might be using Windows `npm`. Try:

- Run `npm config set os linux` before installation
- Install with `sudo npm install -g @anthropic-ai/claude-code --force --no-os-check`

**Node Not Found Error**: If running `claude` shows `exec: node: not found`, your WSL environment might be using Node.js from the Windows installation. Check with `which npm` and `which node`. They should start with Linux paths (starting with `/usr/`).

Fix:

- Install Node via your Linux distribution’s package manager or `nvm`

**nvm Version Conflicts**: If you have nvm installed in both WSL and Windows, switching Node versions in WSL may cause version conflicts. This happens because WSL imports the Windows PATH by default.

Identification:

- Run `which npm` and `which node` \- if they start with Windows paths (e.g., `/mnt/c/`), the Windows version is being used
- If functionality breaks after switching to nvm in WSL, this is likely the cause

Resolution:

**Primary Solution: Ensure nvm loads properly in shell**

The most common cause is nvm not loading in non-interactive shells. Add the following to your shell configuration file (`~/.bashrc`, `~/.zshrc`, etc.):

```

# Load nvm if it exists
export NVM_DIR="$HOME/.nvm"
[ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh"
[ -s "$NVM_DIR/bash_completion" ] && \. "$NVM_DIR/bash_completion"
```

Or run directly in your current session:

**Secondary Alternative: Adjust PATH Order**

If nvm loads properly but Windows paths still take priority, explicitly add Linux paths to the front in your shell configuration:

```

export PATH="$HOME/.nvm/versions/node/$(node -v)/bin:$PATH"
```

### Linux and Mac Installation Issues: Permission or Command Not Found Errors [Permalink for this section](https://adk.mo.ai.kr/en/claude-code/troubleshooting\#linux-and-mac-installation-issues-permission-or-command-not-found-errors)

When installing Claude Code with npm, you may not be able to access `claude` due to `PATH` issues.

You may also encounter permission errors if npm’s global prefix is not user-writable (e.g., `/usr` or `/usr/local`).

#### Recommended Solution: Native Claude Code Installation [Permalink for this section](https://adk.mo.ai.kr/en/claude-code/troubleshooting\#recommended-solution-native-claude-code-installation)

Claude Code has a native installation that doesn’t depend on npm or Node.js.

**macOS, Linux, WSL:**

```

# Install stable version (default)
curl -fsSL https://claude.ai/install.sh | bash

# Install latest version
curl -fsSL https://claude.ai/install.sh | bash -s latest

# Install specific version number
curl -fsSL https://claude.ai/install.sh | bash -s 1.0.58
```

**Windows PowerShell:**

```

# Install stable version (default)
irm https://claude.ai/install.ps1 | iex

# Install latest version
& ([scriptblock]::Create((irm https://claude.ai/install.ps1))) latest

# Install specific version number
& ([scriptblock]::Create((irm https://claude.ai/install.ps1))) 1.0.58
```

These commands install the Claude Code build appropriate for your operating system and architecture and add a symlink to `~/.local/bin/claude` (or `%USERPROFILE%\.local\bin\claude.exe` on Windows).

## Permissions and Authentication [Permalink for this section](https://adk.mo.ai.kr/en/claude-code/troubleshooting\#permissions-and-authentication)

### Repeated Permission Prompts [Permalink for this section](https://adk.mo.ai.kr/en/claude-code/troubleshooting\#repeated-permission-prompts)

If you find yourself approving the same command repeatedly, you can use the `/permissions` command to approve specific tools. See the [Permissions](https://code.claude.com/docs/en/settings#permissions) documentation.

### Authentication Issues [Permalink for this section](https://adk.mo.ai.kr/en/claude-code/troubleshooting\#authentication-issues)

If you experience authentication issues:

1. Run `/logout` to completely log out
2. Close Claude Code
3. Restart with `claude` and complete the authentication process

If the browser doesn’t open automatically during login, press `c` to copy the OAuth URL to your clipboard and paste it manually into your browser.

If the problem persists, try:

```

rm -rf ~/.config/claude-code/auth.json
claude
```

This removes stored authentication information and forces a clean login.

## Performance and Stability [Permalink for this section](https://adk.mo.ai.kr/en/claude-code/troubleshooting\#performance-and-stability)

### High CPU or Memory Usage [Permalink for this section](https://adk.mo.ai.kr/en/claude-code/troubleshooting\#high-cpu-or-memory-usage)

Claude Code is designed to work in most development environments, but can consume significant resources when handling large codebases. If you experience performance issues:

1. Use `/compact` regularly to reduce context size
2. Close and restart Claude Code between major tasks
3. Consider adding large build directories to your `.gitignore` file

### Commands Stopping or Hanging [Permalink for this section](https://adk.mo.ai.kr/en/claude-code/troubleshooting\#commands-stopping-or-hanging)

If Claude Code appears unresponsive:

1. Press `Ctrl+C` to attempt to cancel the current operation
2. If unresponsive, you may need to close the terminal and restart

## IDE Integration Issues [Permalink for this section](https://adk.mo.ai.kr/en/claude-code/troubleshooting\#ide-integration-issues)

### JetBrains IDE Not Detected in WSL2 [Permalink for this section](https://adk.mo.ai.kr/en/claude-code/troubleshooting\#jetbrains-ide-not-detected-in-wsl2)

If you get a “No available IDEs” error when using JetBrains IDEs in WSL2, WSL2’s networking configuration or Windows firewall may be blocking the connection.

#### WSL2 Networking Mode [Permalink for this section](https://adk.mo.ai.kr/en/claude-code/troubleshooting\#wsl2-networking-mode)

WSL2 uses NAT networking by default, which can prevent IDE detection. You have two options:

**Option 1: Configure Windows Firewall** (Recommended)

1. Find your WSL2 IP address:



```

wsl hostname -I
# Example output: 172.21.123.456
```

2. Open PowerShell as administrator and create a firewall rule:



```

New-NetFirewallRule -DisplayName "Allow WSL2 Internal Traffic" -Direction Inbound -Protocol TCP -Action Allow -RemoteAddress 172.21.0.0/16 -LocalAddress 172.21.0.0/16
```



(Adjust the IP range to match your WSL2 subnet from step 1)

3. Restart both your IDE and Claude Code


**Option 2: Switch to Mirrored Networking**

Add `.wslconfig` to your Windows user directory:

```

[wsl2]
networkingMode=mirrored
```

Restart WSL by running `wsl --shutdown` (in PowerShell).

For additional JetBrains configuration tips, see the [JetBrains IDE Guide](https://code.claude.com/docs/en/jetbrains).

## Additional Help [Permalink for this section](https://adk.mo.ai.kr/en/claude-code/troubleshooting\#additional-help)

If you experience issues not covered here:

1. Use the `/bug` command within Claude Code to report issues directly to Anthropic
2. Check [GitHub repository](https://github.com/anthropics/claude-code) for known issues
3. Run `/doctor` \- Diagnoses installation type, version, lookup functionality, auto-update status, invalid configuration files, MCP server configuration errors, keybinding configuration issues, context usage warnings, plugin and agent loading errors
4. Ask Claude directly about features and functionality - Claude has built-in access to its own documentation

* * *

**Sources:**

- [Troubleshooting](https://code.claude.com/docs/en/troubleshooting)

Last updated onFebruary 12, 2026

[Chrome Browser Integration](https://adk.mo.ai.kr/en/claude-code/chrome "Chrome Browser Integration") [Best Practices](https://adk.mo.ai.kr/en/claude-code/best-practices "Best Practices")

* * *