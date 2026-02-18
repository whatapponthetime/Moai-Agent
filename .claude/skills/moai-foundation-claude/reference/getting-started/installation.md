[Skip to Content](https://adk.mo.ai.kr/en/getting-started/installation#nextra-skip-nav)

[Getting Started](https://adk.mo.ai.kr/en/getting-started/introduction "Getting Started") Installation

Copy page

# Installation

Learn how to install MoAI-ADK 2.x on your system.

## Prerequisites [Permalink for this section](https://adk.mo.ai.kr/en/getting-started/installation\#prerequisites)

Verify the following before installation:

### 1\. Claude Code [Permalink for this section](https://adk.mo.ai.kr/en/getting-started/installation\#1-claude-code)

MoAI-ADK is an extension framework that runs on top of Claude Code. Claude Code must be installed first.

```

claude --version
```

If not yet installed, refer to the [Claude Code official documentation](https://docs.anthropic.com/en/docs/claude-code).

### 2\. Git (Required) [Permalink for this section](https://adk.mo.ai.kr/en/getting-started/installation\#2-git-required)

MoAI-ADK uses Git-based workflows. Git must be installed on your system.

```

git --version
```

**Windows Users**: You must use **Git Bash** or **WSL**. Command Prompt (cmd.exe) is not supported.

If Git is not installed:

- **Windows**: Install Git for Windows from [git-scm.com](https://git-scm.com/). Git Bash is included.
- **macOS**: `xcode-select --install` or [git-scm.com](https://git-scm.com/)
- **Linux**: `sudo apt install git` (Ubuntu/Debian) or `sudo dnf install git` (Fedora)

### System Requirements [Permalink for this section](https://adk.mo.ai.kr/en/getting-started/installation\#system-requirements)

| Item | Requirement |
| --- | --- |
| **OS** | macOS, Linux, Windows (Git Bash / WSL) |
| **Architecture** | amd64, arm64 |
| **Memory** | Minimum 4GB RAM |
| **Disk** | Minimum 100MB free space |

## Installation Methods [Permalink for this section](https://adk.mo.ai.kr/en/getting-started/installation\#installation-methods)

### Method 1: Quick Install (Recommended) [Permalink for this section](https://adk.mo.ai.kr/en/getting-started/installation\#method-1-quick-install-recommended)

Install the latest version automatically with a single command.

**macOS / Linux / WSL / Git Bash:**

```

curl -fsSL https://raw.githubusercontent.com/modu-ai/moai-adk/main/install.sh | bash
```

**Windows (PowerShell):**

```

irm https://raw.githubusercontent.com/modu-ai/moai-adk/main/install.ps1 | iex
```

The install script automatically detects your platform, downloads the prebuilt binary from GitHub, verifies the SHA256 checksum, and configures PATH. No Python or separate runtime is required.

After installation, verify:

```

moai version
```

#### Install Options [Permalink for this section](https://adk.mo.ai.kr/en/getting-started/installation\#install-options)

```

# Install a specific version
curl -fsSL https://raw.githubusercontent.com/modu-ai/moai-adk/main/install.sh | bash -s -- --version 2.0.0

# Install to a custom directory
curl -fsSL https://raw.githubusercontent.com/modu-ai/moai-adk/main/install.sh | bash -s -- --install-dir /usr/local/bin
```

### Method 2: Build from Source [Permalink for this section](https://adk.mo.ai.kr/en/getting-started/installation\#method-2-build-from-source)

If you have a Go development environment, you can build from source.

```

git clone https://github.com/modu-ai/moai-adk.git
cd moai-adk
make build
```

The built binary will be at `./bin/moai`. Copy it to a directory in your PATH:

```

cp ./bin/moai ~/.local/bin/
```

### Install Locations [Permalink for this section](https://adk.mo.ai.kr/en/getting-started/installation\#install-locations)

The install script determines the installation directory in this order:

| Platform | Priority |
| --- | --- |
| **macOS / Linux** | `$GOBIN` → `$GOPATH/bin` → `~/.local/bin` |
| **Windows** | `%LOCALAPPDATA%\Programs\moai` |

## Migrating from 1.x [Permalink for this section](https://adk.mo.ai.kr/en/getting-started/installation\#migrating-from-1x)

**MoAI-ADK 1.x (Python version) users must uninstall the old version first.**

Both 1.x and 2.x use the same `moai` command, so keeping the old version will cause conflicts.

### Step 1: Remove existing 1.x [Permalink for this section](https://adk.mo.ai.kr/en/getting-started/installation\#step-1-remove-existing-1x)

```

# If installed via uv
uv tool uninstall moai-adk

# If installed via pip
pip uninstall moai-adk
```

### Step 2: Backup existing config (optional) [Permalink for this section](https://adk.mo.ai.kr/en/getting-started/installation\#step-2-backup-existing-config-optional)

```

# If you want to back up existing settings
cp -r ~/.moai ~/.moai-v1-backup
```

### Step 3: Install 2.x [Permalink for this section](https://adk.mo.ai.kr/en/getting-started/installation\#step-3-install-2x)

```

curl -fsSL https://raw.githubusercontent.com/modu-ai/moai-adk/main/install.sh | bash
```

### Step 4: Verify installation [Permalink for this section](https://adk.mo.ai.kr/en/getting-started/installation\#step-4-verify-installation)

```

moai version
# Example output: moai v2.x.x (commit: abc1234, built: 2026-01-15)
```

Version 2.x is a single Go binary with no Python runtime or virtual environment required. Startup time has improved dramatically from ~800ms to ~5ms.

## WSL Support [Permalink for this section](https://adk.mo.ai.kr/en/getting-started/installation\#wsl-support)

Guide for installing and using MoAI-ADK in WSL (Windows Subsystem for Linux) on Windows.

### Installing WSL [Permalink for this section](https://adk.mo.ai.kr/en/getting-started/installation\#installing-wsl)

If WSL is not installed, run the following command in PowerShell (Administrator):

```

wsl --install
```

After installation, restart Windows and Ubuntu will be automatically installed.

### Installing MoAI-ADK in WSL [Permalink for this section](https://adk.mo.ai.kr/en/getting-started/installation\#installing-moai-adk-in-wsl)

Use the same command as Linux in the WSL terminal:

```

curl -fsSL https://raw.githubusercontent.com/modu-ai/moai-adk/main/install.sh | bash
```

### Path Handling [Permalink for this section](https://adk.mo.ai.kr/en/getting-started/installation\#path-handling)

Distinguish between Windows paths and WSL paths:

| Windows Path | WSL Path |
| --- | --- |
| `C:\Users\name\project` | `/mnt/c/Users/name/project` |
| `D:\Projects\myapp` | `/mnt/d/Projects/myapp` |

**Recommended**: Create projects in WSL’s Linux filesystem (`~/projects/`) for 2-5x better I/O performance. Accessing the Windows filesystem (`/mnt/c/`) may result in slower performance.

### WSL Best Practices [Permalink for this section](https://adk.mo.ai.kr/en/getting-started/installation\#wsl-best-practices)

1. **Use Linux filesystem**: Create projects in `~/projects/` directory
2. **Configure Git credentials**: Set up Git credentials separately in WSL from Windows
3. **Recommended terminal**: Use Windows Terminal to manage multiple WSL distributions

### WSL Troubleshooting [Permalink for this section](https://adk.mo.ai.kr/en/getting-started/installation\#wsl-troubleshooting)

#### PATH Not Loaded [Permalink for this section](https://adk.mo.ai.kr/en/getting-started/installation\#path-not-loaded)

```

# Add to ~/.bashrc or ~/.zshrc
source ~/.cargo/env
export PATH="$HOME/.local/bin:$PATH"
```

#### Hook/MCP Server Permission Issues [Permalink for this section](https://adk.mo.ai.kr/en/getting-started/installation\#hookmcp-server-permission-issues)

```

# Grant execute permissions
chmod +x ~/.claude/hooks/moai/*.sh
```

#### Slow Windows Path Access [Permalink for this section](https://adk.mo.ai.kr/en/getting-started/installation\#slow-windows-path-access)

Move the project to the Linux filesystem:

```

# Move from Windows to WSL
cp -r /mnt/c/Users/name/project ~/projects/
cd ~/projects/project
```

## pip and uv Tool Conflict [Permalink for this section](https://adk.mo.ai.kr/en/getting-started/installation\#pip-and-uv-tool-conflict)

A common issue for MoAI-ADK 1.x (Python version) users.

### Problem Description [Permalink for this section](https://adk.mo.ai.kr/en/getting-started/installation\#problem-description)

pip and uv install packages in different locations. Using both tools interchangeably may cause the `moai` command to execute an unexpected version.

### Symptoms [Permalink for this section](https://adk.mo.ai.kr/en/getting-started/installation\#symptoms)

- `moai version` shows 1.x version
- `command not found: moai` error
- `which moai` shows a different path than expected

### Root Cause [Permalink for this section](https://adk.mo.ai.kr/en/getting-started/installation\#root-cause)

1. pip installs to system Python paths
2. uv tool installs to `~/.local/bin` or `~/.cargo/bin`
3. PATH order determines which version runs

### Solutions [Permalink for this section](https://adk.mo.ai.kr/en/getting-started/installation\#solutions)

#### Clean Reinstall [Permalink for this section](https://adk.mo.ai.kr/en/getting-started/installation\#clean-reinstall)

```

# 1. Remove all existing versions
uv tool uninstall moai-adk 2>/dev/null || true
pip uninstall moai-adk -y 2>/dev/null || true

# 2. Check and remove remaining binaries
which moai && rm $(which moai) 2>/dev/null || true
ls ~/.local/bin/moai && rm ~/.local/bin/moai 2>/dev/null || true

# 3. Install 2.x
curl -fsSL https://raw.githubusercontent.com/modu-ai/moai-adk/main/install.sh | bash

# 4. Verify
moai version
```

#### Update Shell Configuration [Permalink for this section](https://adk.mo.ai.kr/en/getting-started/installation\#update-shell-configuration)

```

# Add to ~/.bashrc or ~/.zshrc
export PATH="$HOME/.local/bin:$PATH"

# Apply settings
source ~/.bashrc  # or source ~/.zshrc
```

### Prevention Tips [Permalink for this section](https://adk.mo.ai.kr/en/getting-started/installation\#prevention-tips)

1. MoAI-ADK 2.x is a Python-independent Go binary
2. Uninstall 1.x (Python version) before installing 2.x
3. Do not use pip and uv tool simultaneously

## Troubleshooting [Permalink for this section](https://adk.mo.ai.kr/en/getting-started/installation\#troubleshooting)

### Problem: Command Not Found [Permalink for this section](https://adk.mo.ai.kr/en/getting-started/installation\#problem-command-not-found)

```

command not found: moai
```

**Solution:**

1. Restart your terminal
2. Check your PATH:

```

echo $PATH
```

3. Verify the binary location:

```

which moai || ls ~/.local/bin/moai
```

4. Manually add to PATH:

```

# Bash/Zsh
echo 'export PATH="$HOME/.local/bin:$PATH"' >> ~/.bashrc
source ~/.bashrc
```

### Problem: Permission Denied [Permalink for this section](https://adk.mo.ai.kr/en/getting-started/installation\#problem-permission-denied)

```

Permission denied
```

**Solution:**

```

chmod +x ~/.local/bin/moai
```

### Problem: 1.x and 2.x Conflict [Permalink for this section](https://adk.mo.ai.kr/en/getting-started/installation\#problem-1x-and-2x-conflict)

If the old version of `moai` is being executed:

```

# Check which moai is running
which moai

# Remove 1.x if still present
uv tool uninstall moai-adk
# or
pip uninstall moai-adk

# Restart terminal and verify 2.x
moai version
```

## Next Steps After Installation [Permalink for this section](https://adk.mo.ai.kr/en/getting-started/installation\#next-steps-after-installation)

Once installed, initialize your project:

### Create a New Project [Permalink for this section](https://adk.mo.ai.kr/en/getting-started/installation\#create-a-new-project)

```

moai init my-project
```

### Apply to Existing Project [Permalink for this section](https://adk.mo.ai.kr/en/getting-started/installation\#apply-to-existing-project)

```

cd my-existing-project
moai init
```

## Upgrade [Permalink for this section](https://adk.mo.ai.kr/en/getting-started/installation\#upgrade)

To upgrade to the latest version:

```

moai update
```

### Update Options [Permalink for this section](https://adk.mo.ai.kr/en/getting-started/installation\#update-options)

```

# Check version only (no update)
moai update --check

# Synchronize templates only (skip package upgrade)
moai update --templates-only

# Config edit mode (re-run init wizard)
moai update --config
moai update -c

# Force update without backup
moai update --force

# Auto-approve mode (auto-approve all confirmations)
moai update --yes
```

### Merge Strategy [Permalink for this section](https://adk.mo.ai.kr/en/getting-started/installation\#merge-strategy)

```

# Force auto-merge (default)
moai update --merge

# Force manual merge
moai update --manual
```

**Automatically Preserved Items**: User settings, custom agents, custom commands, custom skills, custom hooks, SPEC documents, and reports are automatically preserved during updates.

See the [Update Guide](https://adk.mo.ai.kr/getting-started/update) for details.

## Uninstall [Permalink for this section](https://adk.mo.ai.kr/en/getting-started/installation\#uninstall)

To completely remove MoAI-ADK:

```

# Remove the binary
rm $(which moai)

# Remove config directory (optional)
rm -rf ~/.moai
```

* * *

## Next Steps [Permalink for this section](https://adk.mo.ai.kr/en/getting-started/installation\#next-steps)

Learn how to configure MoAI-ADK in the [Initial Setup Wizard](https://adk.mo.ai.kr/en/getting-started/init-wizard).

Last updated onFebruary 12, 2026

[Introduction](https://adk.mo.ai.kr/en/getting-started/introduction "Introduction") [Setup Wizard](https://adk.mo.ai.kr/en/getting-started/init-wizard "Setup Wizard")

* * *

* * *

# DevContainers Reference

# Claude Code Dev Containers - Official Documentation Reference

Source: https://code.claude.com/docs/en/devcontainer
Updated: 2026-01-06

## Overview

Claude Code dev containers provide security-hardened development environments using container technology. They enable isolated, reproducible, and secure Claude Code sessions.

## Architecture

### Base Configuration

Dev containers are built on:
- Node.js 20 with essential development tools
- Custom security firewall
- VS Code Dev Containers integration

### Components

1. devcontainer.json: Container configuration and settings
2. Dockerfile: Image definition and tool installation
3. init-firewall.sh: Network security rule initialization

## Security Features

### Network Isolation

Default-deny policy with whitelisted outbound connections:

Allowed by default:
- npm registry (registry.npmjs.org)
- GitHub (github.com, api.github.com)
- Claude API (api.anthropic.com)
- DNS services
- SSH for git operations

All other external connections are blocked.

### Firewall Configuration

The init-firewall.sh script establishes:
- Outbound whitelist rules
- Default-deny for unlisted domains
- Startup verification of firewall status

### Customizing Network Access

Modify init-firewall.sh to add custom allowed domains:

```bash
# Add custom domain to whitelist
iptables -A OUTPUT -d custom.example.com -j ACCEPT
```

## VS Code Integration

### Required Extensions

The devcontainer.json can specify VS Code extensions:

```json
{
  "customizations": {
    "vscode": {
      "extensions": [
        "ms-python.python",
        "esbenp.prettier-vscode"
      ]
    }
  }
}
```

### Settings Override

Container-specific VS Code settings:

```json
{
  "customizations": {
    "vscode": {
      "settings": {
        "editor.formatOnSave": true
      }
    }
  }
}
```

## Volume Mounts

### Default Mounts

Typical dev container mounts:
- Workspace directory
- Git credentials
- SSH keys (optional)

### Custom Mounts

Add custom mounts in devcontainer.json:

```json
{
  "mounts": [
    "source=${localWorkspaceFolder},target=/workspace,type=bind",
    "source=${localEnv:HOME}/.npm,target=/home/node/.npm,type=bind"
  ]
}
```

## Unattended Operation

### Skip Permissions Flag

For fully automated environments:

```bash
claude --dangerously-skip-permissions
```

This bypasses all permission prompts.

### Security Warning

When using --dangerously-skip-permissions:

- Container has full access to mounted volumes
- Malicious code can access Claude Code credentials
- Only use with fully trusted repositories
- Never expose container to untrusted input

### Recommended Use Cases

Safe usage scenarios:
- Controlled CI/CD pipelines
- Isolated testing environments
- Trusted internal repositories

Unsafe scenarios:
- Public code execution
- Untrusted repository analysis
- User-facing automation

## Resource Configuration

### CPU and Memory

Configure resource limits in devcontainer.json:

```json
{
  "hostRequirements": {
    "cpus": 4,
    "memory": "8gb",
    "storage": "32gb"
  }
}
```

### GPU Access

For AI/ML workloads:

```json
{
  "hostRequirements": {
    "gpu": "optional"
  }
}
```

## Shell Configuration

### Default Shell

Set default shell in Dockerfile:

```dockerfile
RUN chsh -s /bin/zsh node
```

### Shell Customization

Add custom shell configuration:

```dockerfile
COPY .zshrc /home/node/.zshrc
```

## Tool Installation

### System Packages

In Dockerfile:

```dockerfile
RUN apt-get update && apt-get install -y \
    git \
    curl \
    jq \
    && rm -rf /var/lib/apt/lists/*
```

### Development Tools

```dockerfile
RUN npm install -g \
    typescript \
    eslint \
    prettier
```

### Language Runtimes

```dockerfile
# Python
RUN apt-get install -y python3 python3-pip

# Go
RUN wget https://go.dev/dl/go1.21.0.linux-amd64.tar.gz && \
    tar -xzf go1.21.0.linux-amd64.tar.gz -C /usr/local
```

## Use Cases

### Client Project Isolation

Isolate client work:
- Separate container per client
- Independent credentials
- No cross-contamination risk

### Team Onboarding

Standardized setup:
- Consistent tool versions
- Pre-configured environment
- Reduced setup time

### CI/CD Mirroring

Match production:
- Same dependencies
- Same security policies
- Reproducible builds

### Development Standardization

Team consistency:
- Shared configurations
- Common tooling
- Unified workflows

## Creating a Dev Container

### Step 1: Create Directory

```bash
mkdir -p .devcontainer
```

### Step 2: Create devcontainer.json

```json
{
  "name": "Claude Code Development",
  "build": {
    "dockerfile": "Dockerfile"
  },
  "customizations": {
    "vscode": {
      "extensions": ["anthropic.claude-code"]
    }
  },
  "postCreateCommand": "npm install"
}
```

### Step 3: Create Dockerfile

```dockerfile
FROM node:20-slim

# Install essential tools
RUN apt-get update && apt-get install -y \
    git \
    curl \
    && rm -rf /var/lib/apt/lists/*

# Install Claude Code
RUN npm install -g @anthropic-ai/claude-code

# Set up non-root user
USER node
WORKDIR /workspace
```

### Step 4: Create Firewall Script

```bash
#!/bin/bash
# init-firewall.sh

# Default deny
iptables -P OUTPUT DROP

# Allow established connections
iptables -A OUTPUT -m state --state ESTABLISHED,RELATED -j ACCEPT

# Allow localhost
iptables -A OUTPUT -o lo -j ACCEPT

# Allow DNS
iptables -A OUTPUT -p udp --dport 53 -j ACCEPT

# Allow HTTPS
iptables -A OUTPUT -p tcp --dport 443 -j ACCEPT

# Allow specific domains (resolve IPs)
# Add your domain allowlist here
```

### Step 5: Open in Container

In VS Code:
1. Install Remote - Containers extension
2. Command Palette: "Dev Containers: Reopen in Container"

## Best Practices

### Security

- Review firewall rules regularly
- Minimize allowed domains
- Audit tool installations
- Use specific image versions

### Performance

- Use volume caching for dependencies
- Pre-build images for common configurations
- Optimize Dockerfile layers

### Maintenance

- Document customizations
- Version control devcontainer configs
- Test container builds regularly
- Update base images periodically

## Troubleshooting

### Container Build Fails

Check:
- Dockerfile syntax
- Network access during build
- Base image availability

### Network Issues

If connectivity problems occur:
- Verify firewall rules
- Check DNS resolution
- Test allowed domains manually

### Permission Issues

If permission denied errors:
- Check user configuration
- Verify volume mount permissions
- Review file ownership

### VS Code Connection Issues

If VS Code cannot connect:
- Verify Docker is running
- Check extension installation
- Review devcontainer.json syntax
