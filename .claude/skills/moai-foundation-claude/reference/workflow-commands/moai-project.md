[Skip to Content](https://adk.mo.ai.kr/en/workflow-commands/moai-project#nextra-skip-nav)

Workflow Commands/moai project

Copy page

# /moai project

Analyzes your project’s codebase to automatically generate foundational documents that AI needs to understand your project.

**New Command Format**

`/moai:0-project` has been changed to `/moai project`.

## Overview [Permalink for this section](https://adk.mo.ai.kr/en/workflow-commands/moai-project\#overview)

`/moai project` is the **project document generation** command of the MoAI-ADK workflow. It analyzes the project’s source code, configuration files, and directory structure to help AI quickly understand the project.

**Why do you need project documents?**

Claude Code knows nothing about your project when starting a new conversation.
Through documents created by `/moai project`, AI will understand:

- What the project **does** (product.md)
- How the code **is structured** (structure.md)
- What **technologies are used** (tech.md)

Only with these documents can AI perform accurate tasks appropriate for the project context in subsequent commands like `/moai plan` and `/moai run`.

## Usage [Permalink for this section](https://adk.mo.ai.kr/en/workflow-commands/moai-project\#usage)

```

> /moai project
```

When executed without separate arguments or options, it automatically analyzes the current project directory.

## Generated Documents [Permalink for this section](https://adk.mo.ai.kr/en/workflow-commands/moai-project\#generated-documents)

`/moai project` creates 3 documents under the `.moai/project/` directory:

```

.moai/
└── project/
    ├── product.md      # Project overview
    ├── structure.md    # Directory structure analysis
    └── tech.md         # Technology stack information
```

### product.md - Project Overview [Permalink for this section](https://adk.mo.ai.kr/en/workflow-commands/moai-project\#productmd---project-overview)

Contains the core information of the project:

| Item | Description | Example |
| --- | --- | --- |
| **Project Name** | Official name of the project | ”MoAI-ADK” |
| **Description** | What the project does | ”AI-based development toolkit” |
| **Target Users** | Who the project is for | ”Developers using Claude Code” |
| **Key Features** | List of main features | ”SPEC creation, DDD implementation, documentation automation” |
| **Project Status** | Current development stage | ”v1.1.0, Production” |

### structure.md - Directory Structure [Permalink for this section](https://adk.mo.ai.kr/en/workflow-commands/moai-project\#structuremd---directory-structure)

Analyzes the file and folder composition of the project:

| Item | Description |
| --- | --- |
| **Directory Tree** | Visualizes the entire folder structure |
| **Main Folder Purpose** | Describes the role of each folder |
| **Module Composition** | Relationships between core modules |
| **Entry Points** | Program start files (main.py, index.ts, etc.) |

### tech.md - Technology Stack [Permalink for this section](https://adk.mo.ai.kr/en/workflow-commands/moai-project\#techmd---technology-stack)

Organizes technology information used in the project:

| Item | Description | Example |
| --- | --- | --- |
| **Programming Languages** | Languages and versions used | ”Python 3.12, TypeScript 5.5” |
| **Frameworks** | Major frameworks | ”FastAPI 0.115, React 19” |
| **Databases** | DB types and ORM | ”PostgreSQL 16, SQLAlchemy” |
| **Build Tools** | Build and package management | ”Poetry, Vite” |
| **Deployment Environment** | Hosting and CI/CD | ”Docker, GitHub Actions” |

## Execution Process [Permalink for this section](https://adk.mo.ai.kr/en/workflow-commands/moai-project\#execution-process)

`/moai project` runs different workflows depending on the project type.

### New Project vs Existing Project [Permalink for this section](https://adk.mo.ai.kr/en/workflow-commands/moai-project\#new-project-vs-existing-project)

## Detailed Workflow [Permalink for this section](https://adk.mo.ai.kr/en/workflow-commands/moai-project\#detailed-workflow)

### Phase 0: Project Type Detection [Permalink for this section](https://adk.mo.ai.kr/en/workflow-commands/moai-project\#phase-0-project-type-detection)

First, check the project type.

**\[HARD\] Rule**: Must ask project type first. Before analyzing codebase, confirm project situation with the user.

**Question**: What type of project is this?

| Option | Description |
| --- | --- |
| **New Project** | Project starting from scratch. Proceeds with information collection format |
| **Existing Project** | Project with existing code. Automatically analyzes code |

### Phase 0.5: New Project Information Collection [Permalink for this section](https://adk.mo.ai.kr/en/workflow-commands/moai-project\#phase-05-new-project-information-collection)

For new projects, collect the following information:

**Question 1 - Project Purpose**:

- **Web Application**: Frontend, backend, or full-stack web app
- **API Service**: REST API, GraphQL, or microservices
- **CLI Tool**: Command-line utility or automation tool
- **Library/Package**: Reusable code library or SDK

**Question 2 - Main Language**:

- **Python**: Backend, data science, automation
- **TypeScript/JavaScript**: Web, Node.js, frontend
- **Go**: High-performance services, CLI tools
- **Other**: Rust, Java, Ruby, etc. (detailed questions)

**Question 3 - Project Description** (free input):

- Project name
- Main features or goals
- Target users

Based on collected information, generate initial documents and move to Phase 4.

### Phase 1: Codebase Analysis (Existing Project) [Permalink for this section](https://adk.mo.ai.kr/en/workflow-commands/moai-project\#phase-1-codebase-analysis-existing-project)

For existing projects, delegate analysis to the **Explore agent**.

**Agent Delegation**: Codebase analysis is performed by the Explore subagent. MoAI only collects results and presents them to the user.

**Analysis Goals**:

- **Project Structure**: Main directories, entry points, architecture patterns
- **Technology Stack**: Languages, frameworks, core dependencies
- **Core Features**: Main features and business logic locations
- **Build System**: Build tools, package managers, scripts

**Explore Agent Output**:

- Detected primary language
- Identified frameworks
- Architecture patterns (MVC, Clean Architecture, Microservices, etc.)
- Main directory mapping (source, tests, config, docs)
- Dependency catalog
- Entry point identification

### Phase 2: User Confirmation [Permalink for this section](https://adk.mo.ai.kr/en/workflow-commands/moai-project\#phase-2-user-confirmation)

Show analysis results to the user and get approval.

**Displayed Content**:

- Detected language
- Frameworks
- Architecture
- Core feature list

**Options**:

- **Proceed**: Continue with document generation
- **Detailed Review**: Review analysis details first
- **Cancel**: Adjust project setup

### Phase 3: Document Generation [Permalink for this section](https://adk.mo.ai.kr/en/workflow-commands/moai-project\#phase-3-document-generation)

Delegate document generation to the **manager-docs agent**.

**Passed Content**:

- Phase 1 analysis results (or Phase 0.5 user input)
- Phase 2 user confirmation
- Output directory: `.moai/project/`
- Language: conversation\_language from config

**Generated Files**:

| File | Content |
| --- | --- |
| **product.md** | Project name, description, target users, key features, use cases |
| **structure.md** | Directory tree, purpose of each directory, key file locations, module composition |
| **tech.md** | Technology stack overview, framework selection rationale, development environment requirements, build/deployment configuration |

### Phase 3.5: Development Environment Check [Permalink for this section](https://adk.mo.ai.kr/en/workflow-commands/moai-project\#phase-35-development-environment-check)

Checks if appropriate LSP servers are installed for the detected technology stack.

**Language-specific LSP Mapping** (16 languages supported):

| Language | LSP Server | Check Command |
| --- | --- | --- |
| Python | pyright or pylsp | `which pyright` |
| TypeScript/JavaScript | typescript-language-server | `which typescript-language-server` |
| Go | gopls | `which gopls` |
| Rust | rust-analyzer | `which rust-analyzer` |
| Java | jdtls (Eclipse JDT) | - |
| Ruby | solargraph | `which solargraph` |
| PHP | intelephense | Check via npm |
| C/C++ | clangd | `which clangd` |
| Kotlin | kotlin-language-server | - |
| Scala | metals | - |
| Swift | sourcekit-lsp | - |
| Elixir | elixir-ls | - |
| Dart/Flutter | dart language-server | Built into Dart SDK |
| C# | OmniSharp or csharp-ls | - |
| R | languageserver (R package) | - |
| Lua | lua-language-server | - |

**Options when LSP Not Installed**:

- **Continue without LSP**: Proceed to completion
- **Show Installation Guide**: Display setup guide for detected language
- **Auto Install Now**: Install via expert-devops agent (requires confirmation)

### Phase 4: Completion [Permalink for this section](https://adk.mo.ai.kr/en/workflow-commands/moai-project\#phase-4-completion)

Displays completion message in the user’s language.

- List of generated files
- Location: `.moai/project/`
- Status: Success or partial completion

**Next Step Options**:

- **Write SPEC**: Define feature specification with `/moai plan`
- **Review Documents**: Open and review generated files
- **Start New Session**: Clear context and start fresh

## When to Use? [Permalink for this section](https://adk.mo.ai.kr/en/workflow-commands/moai-project\#when-to-use)

### Must Run [Permalink for this section](https://adk.mo.ai.kr/en/workflow-commands/moai-project\#must-run)

- **First time applying MoAI-ADK to a new project** \- Foundation documents needed for AI to understand the project
- **Introducing MoAI-ADK to an existing project** \- Automatically generates documents even for projects with existing code

### Good to Run Again [Permalink for this section](https://adk.mo.ai.kr/en/workflow-commands/moai-project\#good-to-run-again)

- **After major project structure changes** \- When directory structure or technology stack has changed
- **After introducing new major technologies** \- e.g., database changes, framework additions
- **When new team members join the project** \- Onboarding based on latest documents

`/moai project` **overwrites** existing documents. If you have manual modifications, back up before running.

## Practical Examples [Permalink for this section](https://adk.mo.ai.kr/en/workflow-commands/moai-project\#practical-examples)

### Example 1: Starting with a New Project [Permalink for this section](https://adk.mo.ai.kr/en/workflow-commands/moai-project\#example-1-starting-with-a-new-project)

#### Step 1: Execute Command [Permalink for this section](https://adk.mo.ai.kr/en/workflow-commands/moai-project\#step-1-execute-command)

First, initialize the project in the terminal and run Claude Code.

```

# Initialize project in terminal
$ moai init my-api-project
$ cd my-api-project

# Generate project documents in Claude Code
> /moai project
```

#### Step 2: Select Project Type [Permalink for this section](https://adk.mo.ai.kr/en/workflow-commands/moai-project\#step-2-select-project-type)

Since this is a new project, select “New Project”.

```

AI: Please select the project type:
1. New Project (starting from scratch)
2. Existing Project (code exists)

User: 1
```

AI switches to new project information collection mode.

#### Step 3: Select Project Purpose [Permalink for this section](https://adk.mo.ai.kr/en/workflow-commands/moai-project\#step-3-select-project-purpose)

Select the purpose of the project.

```

AI: Please select the project purpose:
1. Web Application
2. API Service
3. CLI Tool
4. Library/Package

User: 2
```

Select API Service to specify this is a REST API server project.

#### Step 4: Select Main Language [Permalink for this section](https://adk.mo.ai.kr/en/workflow-commands/moai-project\#step-4-select-main-language)

Select the programming language to use.

```

AI: Please select the main language:
1. Python
2. TypeScript/JavaScript
3. Go
4. Other

User: 1
```

Select Python to configure a backend API server development environment.

#### Step 5: Enter Project Details [Permalink for this section](https://adk.mo.ai.kr/en/workflow-commands/moai-project\#step-5-enter-project-details)

Enter detailed information about the project.

```

AI: Please describe the project (name, goals, target users):

User: REST API server. Has user authentication and data management features. Tool for developers.
```

This information is used to create the `product.md` document.

#### Step 6: Document Generation Complete [Permalink for this section](https://adk.mo.ai.kr/en/workflow-commands/moai-project\#step-6-document-generation-complete)

AI automatically generates documents based on collected information.

```

[Generating documents...]

Complete! 3 documents have been created in the .moai/project/ directory.
```

Generated documents:

- `.moai/project/product.md` \- Project overview
- `.moai/project/structure.md` \- Directory structure
- `.moai/project/tech.md` \- Technology stack

### Example 2: Introducing MoAI-ADK to Existing Project [Permalink for this section](https://adk.mo.ai.kr/en/workflow-commands/moai-project\#example-2-introducing-moai-adk-to-existing-project)

#### Step 1: Navigate to Project Directory and Initialize [Permalink for this section](https://adk.mo.ai.kr/en/workflow-commands/moai-project\#step-1-navigate-to-project-directory-and-initialize)

Navigate to a project with existing code and initialize MoAI-ADK.

```

# Navigate to existing project directory
$ cd ~/projects/existing-api

# Initialize MoAI-ADK
$ moai init

# Generate project documents in Claude Code
> /moai project
```

#### Step 2: Select Project Type [Permalink for this section](https://adk.mo.ai.kr/en/workflow-commands/moai-project\#step-2-select-project-type-1)

Select that this is an existing project.

```

AI: Please select the project type:
1. New Project (starting from scratch)
2. Existing Project (code exists)

User: 2
```

Proceed with existing project mode to start codebase analysis.

#### Step 3: Automatic Codebase Analysis [Permalink for this section](https://adk.mo.ai.kr/en/workflow-commands/moai-project\#step-3-automatic-codebase-analysis)

Explore agent automatically analyzes the project.

```

[Explore agent analyzing codebase...]

Analysis Results:
- Language: Python 3.12
- Framework: FastAPI 0.115
- Database: PostgreSQL 16
- Architecture: Clean Architecture
- Core Features:
  * User authentication
  * Data CRUD
  * API endpoint management
```

The agent automatically identifies project structure, dependencies, and patterns.

#### Step 4: Confirm Analysis Results [Permalink for this section](https://adk.mo.ai.kr/en/workflow-commands/moai-project\#step-4-confirm-analysis-results)

Review analysis results and approve document generation.

```

Do you want to generate documents with this analysis?
1. Proceed
2. Detailed Review
3. Cancel

User: 1
```

If the analysis is accurate, select “Proceed” to continue with document generation.

#### Step 5: Document Generation [Permalink for this section](https://adk.mo.ai.kr/en/workflow-commands/moai-project\#step-5-document-generation)

manager-docs agent generates documents based on analysis results.

```

[manager-docs agent generating documents...]

Complete! The following files have been created:
- .moai/project/product.md
- .moai/project/structure.md
- .moai/project/tech.md
```

Each document documents a different aspect of the project.

#### Step 6: LSP Check and Completion [Permalink for this section](https://adk.mo.ai.kr/en/workflow-commands/moai-project\#step-6-lsp-check-and-completion)

Verify that the development environment is properly configured.

```

LSP server 'pyright' is installed.

Please select the next step:
1. Write SPEC (/moai plan)
2. Review Documents
3. Start New Session
```

Since the LSP server is installed, you can start development immediately.

### Example 3: Workflow Progression After Project Document Generation [Permalink for this section](https://adk.mo.ai.kr/en/workflow-commands/moai-project\#example-3-workflow-progression-after-project-document-generation)

#### Step 1: Generate Project Documents (First Time Only) [Permalink for this section](https://adk.mo.ai.kr/en/workflow-commands/moai-project\#step-1-generate-project-documents-first-time-only)

Generate documents when first setting up the project.

```

> /moai project
```

This step only needs to be done once per project.

#### Step 2: Create SPEC [Permalink for this section](https://adk.mo.ai.kr/en/workflow-commands/moai-project\#step-2-create-spec)

Once project documents are generated, AI understands the project.

```

> /moai plan "Implement user authentication feature"
```

Since AI already knows the project’s technology stack and structure, it can create more accurate SPECs.

`/moai project` typically only needs to be run **1-2 times** per project. You don’t need to run it every time; only run it again when the project structure changes significantly.

## Agent Chain [Permalink for this section](https://adk.mo.ai.kr/en/workflow-commands/moai-project\#agent-chain)

## Frequently Asked Questions [Permalink for this section](https://adk.mo.ai.kr/en/workflow-commands/moai-project\#frequently-asked-questions)

### Q: What happens if I run `/moai plan` without project documents? [Permalink for this section](https://adk.mo.ai.kr/en/workflow-commands/moai-project\#q-what-happens-if-i-run-moai-plan-without-project-documents)

You can create a SPEC, but AI may make **inaccurate technical judgments** without knowing the project’s technology stack or structure. Always recommend running `/moai project` first.

### Q: Do you analyze private code too? [Permalink for this section](https://adk.mo.ai.kr/en/workflow-commands/moai-project\#q-do-you-analyze-private-code-too)

`/moai project` only operates **locally**. Code is not transmitted to external servers, and generated documents are also stored locally in the `.moai/project/` directory.

### Q: Does it work with monorepo projects? [Permalink for this section](https://adk.mo.ai.kr/en/workflow-commands/moai-project\#q-does-it-work-with-monorepo-projects)

Yes, monorepo structure is also supported. Running from the root directory analyzes the entire project structure.

### Q: What happens if there’s no LSP server? [Permalink for this section](https://adk.mo.ai.kr/en/workflow-commands/moai-project\#q-what-happens-if-theres-no-lsp-server)

Document generation proceeds even without an LSP server. However, code quality diagnosis in the subsequent `/moai run` phase may be limited. Phase 3.5 provides LSP installation guidance.

## Related Documents [Permalink for this section](https://adk.mo.ai.kr/en/workflow-commands/moai-project\#related-documents)

- [Quick Start](https://adk.mo.ai.kr/getting-started/quickstart) \- Complete workflow tutorial
- [/moai plan](https://adk.mo.ai.kr/en/workflow-commands/moai-1-plan) \- Next step: SPEC document creation
- [SPEC-based Development](https://adk.mo.ai.kr/core-concepts/spec-based-dev) \- Detailed SPEC methodology explanation
- [Subagent Catalog](https://adk.mo.ai.kr/advanced/agent-guide) \- Explore, manager-docs agent details

Last updated onFebruary 12, 2026

[TRUST 5 Quality](https://adk.mo.ai.kr/en/core-concepts/trust-5 "TRUST 5 Quality") [/moai plan](https://adk.mo.ai.kr/en/workflow-commands/moai-plan "/moai plan")

* * *