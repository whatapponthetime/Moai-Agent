[Skip to Content](https://adk.mo.ai.kr/en/getting-started/init-wizard#nextra-skip-nav)

[Getting Started](https://adk.mo.ai.kr/en/getting-started/introduction "Getting Started") Setup Wizard

Copy page

# Initial Setup

Complete your first setup using MoAI-ADK’s interactive setup wizard. Configure your system for development in 9 steps.

## Starting the Setup Wizard [Permalink for this section](https://adk.mo.ai.kr/en/getting-started/init-wizard\#starting-the-setup-wizard)

### Creating New Project [Permalink for this section](https://adk.mo.ai.kr/en/getting-started/init-wizard\#creating-new-project)

To create and initialize a new project:

```

moai init my-project
```

This creates a `my-project` folder and initializes MoAI-ADK.

### Installing in Current Folder [Permalink for this section](https://adk.mo.ai.kr/en/getting-started/init-wizard\#installing-in-current-folder)

To install MoAI-ADK in an existing project, navigate to that folder and run:

```

cd my-existing-project
moai init
```

`moai init` installs directly in the current folder. For new projects, use `moai init <project-name>`.

## 9-Step Setup Process [Permalink for this section](https://adk.mo.ai.kr/en/getting-started/init-wizard\#9-step-setup-process)

### Step 1: Language Selection [Permalink for this section](https://adk.mo.ai.kr/en/getting-started/init-wizard\#step-1-language-selection)

Select your preferred language. All interactions will be provided in the selected language.

```

? Select language:
  Korean
  English
  Japanese
  Chinese
```

Language can be changed later in `.moai/config/sections/language.yaml`.

### Step 2: Name Entry [Permalink for this section](https://adk.mo.ai.kr/en/getting-started/init-wizard\#step-2-name-entry)

Enter your name. This will be used in commit messages and documentation generation.

```

? Enter your name: [name]
```

Your name is used in the “Co-Authored-By” tag of Git commit messages.

### Step 3: GLM API Key Entry [Permalink for this section](https://adk.mo.ai.kr/en/getting-started/init-wizard\#step-3-glm-api-key-entry)

Enter your z.ai GLM 4.7 API key. Coding plan users can get free API keys from [z.ai](https://z.ai/subscribe?ic=1NDV03BGWU).

```

? Enter GLM API key: [sk-...]
```

GLM 4.7 provides GPT-4 level performance at 70% lower cost. Coding plan users can get free API keys from [z.ai](https://z.ai/subscribe?ic=1NDV03BGWU).

### Step 4: Project Settings [Permalink for this section](https://adk.mo.ai.kr/en/getting-started/init-wizard\#step-4-project-settings)

Enter the default project name. This will be used when creating new projects.

```

? Default project name: [my-project]
```

### Step 5: Git Settings [Permalink for this section](https://adk.mo.ai.kr/en/getting-started/init-wizard\#step-5-git-settings)

Select your Git configuration method.

```

? Git configuration method:
  manual (default)
  personal
  team
```

**manual**: User manually controls Git operations.
**personal**: Auto commit and push for development projects
**team**: Pull Request-based workflow for team collaboration

Git settings are saved in `.moai/config/sections/git-strategy.yaml`. After installation, you can directly modify this file or re-run the setup wizard with `moai update -c` to reconfigure.

### Step 6: GitHub Username [Permalink for this section](https://adk.mo.ai.kr/en/getting-started/init-wizard\#step-6-github-username)

Enter your GitHub username. This will be linked to commits and PRs.

```

? GitHub username: [username]
```

GitHub username is used in `Co-Authored-By: username <noreply@anthropic.com>` format.

### Step 7: Commit Message Language [Permalink for this section](https://adk.mo.ai.kr/en/getting-started/init-wizard\#step-7-commit-message-language)

Select the language for commit messages.

```

? Commit message language:
  korean (default)
  english
```

Commit message language can be set differently from code comment language.

### Step 8: Code Comment Language [Permalink for this section](https://adk.mo.ai.kr/en/getting-started/init-wizard\#step-8-code-comment-language)

Select the language for code comments.

```

? Code comment language:
  english (recommended, default)
  korean
```

For most projects, using English for code comments is recommended.

### Step 9: Documentation Language [Permalink for this section](https://adk.mo.ai.kr/en/getting-started/init-wizard\#step-9-documentation-language)

Select the language for documentation generation.

```

? Documentation language:
  korean (default)
  english
  japanese
  chinese
```

## Setup Completion [Permalink for this section](https://adk.mo.ai.kr/en/getting-started/init-wizard\#setup-completion)

After completing all steps, configuration files will be created:

Check the generated configuration files:

```

cat .moai/config/sections/user.yaml
```

## Configuration Structure [Permalink for this section](https://adk.mo.ai.kr/en/getting-started/init-wizard\#configuration-structure)

## Modifying Configuration [Permalink for this section](https://adk.mo.ai.kr/en/getting-started/init-wizard\#modifying-configuration)

Configuration can be modified at any time:

### Manual Modification [Permalink for this section](https://adk.mo.ai.kr/en/getting-started/init-wizard\#manual-modification)

```

# User settings
vim .moai/config/sections/user.yaml

# Language settings
vim .moai/config/sections/language.yaml

# Quality settings
vim .moai/config/sections/quality.yaml

# Git settings
vim .moai/config/sections/git-strategy.yaml
```

### Reset Configuration [Permalink for this section](https://adk.mo.ai.kr/en/getting-started/init-wizard\#reset-configuration)

Re-run the setup wizard to reconfigure all settings:

```

# Re-run setup wizard (recommended)
moai update -c

# Or complete reset
moai init --reset
```

`moai update -c` allows you to selectively reset only the items you want to change while keeping existing settings.

`moai init --reset` overwrites all existing settings. Backup important settings.

## Configuration Verification [Permalink for this section](https://adk.mo.ai.kr/en/getting-started/init-wizard\#configuration-verification)

Verify that configuration is correctly set up:

```

moai doctor
```

Output example:

```

moai doctor
Running system diagnostics...

┏━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┳━━━━━━━━┓
┃ Check                                    ┃ Status ┃
┡━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━╇━━━━━━━━┩
│ Python >= 3.11                           │   ✓    │
│ Git installed                            │   ✓    │
│ Project structure (.moai/)               │   ✓    │
│ Config file (.moai/config/config.yaml)   │   ✓    │
└──────────────────────────────────────────┴────────┘

✓ All checks passed
```

This command verifies:

- Python >= 3.11 installed
- Git installed
- Project structure (`.moai/` folder)
- Configuration file (`.moai/config/config.yaml`)

## Next Steps [Permalink for this section](https://adk.mo.ai.kr/en/getting-started/init-wizard\#next-steps)

Once setup is complete, follow the [Quick Start](https://adk.mo.ai.kr/en/getting-started/quickstart) guide to create your first project.

```

moai --help
```

You can see all commands and options.

* * *

## Next Steps [Permalink for this section](https://adk.mo.ai.kr/en/getting-started/init-wizard\#next-steps-1)

Learn how to create your first project in [Quick Start](https://adk.mo.ai.kr/en/getting-started/quickstart).

Last updated onFebruary 12, 2026

[Installation](https://adk.mo.ai.kr/en/getting-started/installation "Installation") [Quick Start](https://adk.mo.ai.kr/en/getting-started/quickstart "Quick Start")

* * *