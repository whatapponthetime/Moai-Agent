[Skip to Content](https://adk.mo.ai.kr/en/advanced/pencil-guide#nextra-skip-nav)

[Advanced](https://adk.mo.ai.kr/en/advanced/skill-guide "Advanced") Pencil Guide

Copy page

# Pencil Guide

Comprehensive guide to using Pencil MCP server for AI-powered UI/UX design generation.

**One-line summary**: Pencil is a **code-first design tool**. Generate UI directly in Claude Code using MCP, manage with .pen files, and export to production code.

## What is Pencil? [Permalink for this section](https://adk.mo.ai.kr/en/advanced/pencil-guide\#what-is-pencil)

Pencil is an **AI-powered design tool** that works directly in your development environment. It bridges the gap between design and code, allowing developers to create consistent UI without separate design tools like Figma.

### Key Features [Permalink for this section](https://adk.mo.ai.kr/en/advanced/pencil-guide\#key-features)

| Feature | Description |
| --- | --- |
| **DNA Code** | Declarative code format for UI (version control friendly) |
| **Text-to-Design** | Generate UI screens from natural language descriptions |
| **.pen Files** | Encrypted design file format |
| **React Export** | Production code with Tailwind CSS |
| **Infinite Canvas** | Support for large-scale design projects |
| **Team Collaboration** | Code-based design reviews |

Pencil uses an **open design format**. .pen files can be managed directly in your codebase. Visit [https://pencil.dev](https://pencil.dev/) for more information.

## Prerequisites [Permalink for this section](https://adk.mo.ai.kr/en/advanced/pencil-guide\#prerequisites)

To use Pencil MCP, you need the following setup.

### Step 1: Install Pencil [Permalink for this section](https://adk.mo.ai.kr/en/advanced/pencil-guide\#step-1-install-pencil)

Pencil is available as an IDE extension and a standalone desktop application.

#### VS Code Extension [Permalink for this section](https://adk.mo.ai.kr/en/advanced/pencil-guide\#vs-code-extension)

1. Open VS Code
2. Go to Extensions (Cmd/Ctrl + Shift + X)
3. Search for “Pencil”
4. Click **Install**

#### Cursor Extension [Permalink for this section](https://adk.mo.ai.kr/en/advanced/pencil-guide\#cursor-extension)

1. Open Cursor
2. Go to Extensions
3. Search for “Pencil”
4. Click **Install**

#### Desktop Application [Permalink for this section](https://adk.mo.ai.kr/en/advanced/pencil-guide\#desktop-application)

**macOS:**

1. Download the latest `.dmg` from the Pencil website
2. Drag Pencil to your Applications folder
3. Launch Pencil (right-click → Open if you see a security warning)

**Linux:**

```

# Example for .deb package
sudo dpkg -i pencil-*.deb

# Example for .AppImage
chmod +x pencil-*.AppImage
./pencil-*.AppImage
```

**Windows**: The desktop app is not currently available. Windows users should use the VS Code or Cursor extension.

### Step 2: Install Claude Code CLI [Permalink for this section](https://adk.mo.ai.kr/en/advanced/pencil-guide\#step-2-install-claude-code-cli)

Pencil’s AI features require Claude Code to be installed and authenticated.

```

# Install Claude Code CLI
npm install -g @anthropic-ai/claude-code-cli

# Or using the official installer
curl https://claude.ai/cli/install.sh | sh
```

### Step 3: Authenticate Claude Code [Permalink for this section](https://adk.mo.ai.kr/en/advanced/pencil-guide\#step-3-authenticate-claude-code)

```

# Login to Claude Code
claude

# Follow the browser authentication flow
```

### Step 4: Complete Pencil Activation [Permalink for this section](https://adk.mo.ai.kr/en/advanced/pencil-guide\#step-4-complete-pencil-activation)

1. Open Pencil (IDE extension or desktop app)
2. Complete the activation process with your email
3. Open the welcome file (Right-click canvas → Open Welcome File)

## MCP Configuration [Permalink for this section](https://adk.mo.ai.kr/en/advanced/pencil-guide\#mcp-configuration)

### What is MCP? [Permalink for this section](https://adk.mo.ai.kr/en/advanced/pencil-guide\#what-is-mcp)

MCP (Model Context Protocol) is a protocol that gives AI assistants tools to interact with your design files. Think of it as an API that lets AI read and modify `.pen` files programmatically.

### How It Works [Permalink for this section](https://adk.mo.ai.kr/en/advanced/pencil-guide\#how-it-works)

1. **Pencil MCP Server runs locally** \- No cloud dependency for design operations
2. **AI assistants connect** via MCP when Pencil is running
3. **AI can use tools** to read, modify, and generate designs
4. **You stay in control** \- AI suggests, you approve

### Automatic Setup [Permalink for this section](https://adk.mo.ai.kr/en/advanced/pencil-guide\#automatic-setup)

The Pencil MCP server starts automatically when you open Pencil. No additional configuration is needed for basic use.

**In Cursor:**

- Open Settings → Tools & MCP
- Verify Pencil appears in the MCP server list

**In Codex CLI:**

1. Run Pencil first
2. Open Codex
3. Run `/mcp`
4. Pencil should appear in the MCP list

### Security & Privacy [Permalink for this section](https://adk.mo.ai.kr/en/advanced/pencil-guide\#security--privacy)

**Local-only Operation**: The Pencil MCP server runs on your machine. Design files stay local, and there is no remote access to your designs.

- **Local-only**: MCP server runs on your machine
- **No remote access**: Design files stay local
- **Repository is private**: Source code not yet public
- **Tool inspection**: View available tools in IDE settings

### settings.json Permission Setup [Permalink for this section](https://adk.mo.ai.kr/en/advanced/pencil-guide\#settingsjson-permission-setup)

If you want to explicitly configure MCP tools in Claude Code:

```

{
  "permissions": {
    "allow": [\
      "mcp__pencil__*"\
    ]
  }
}
```

## Supported AI Assistants [Permalink for this section](https://adk.mo.ai.kr/en/advanced/pencil-guide\#supported-ai-assistants)

Pencil works with multiple AI tools through MCP:

| AI Assistant | Platform | Notes |
| --- | --- | --- |
| **Claude Code** | CLI and IDE | Full support |
| **Claude Desktop** | Desktop App | Full support |
| **Cursor** | AI-powered IDE | Full support with extension |
| **Windsurf IDE** | Codeium | Full support |
| **Codex CLI** | OpenAI | Terminal-based workflow |
| **Antigravity IDE** | IDE | Full support |
| **OpenCode CLI** | CLI | Full support |

## MCP Tool List [Permalink for this section](https://adk.mo.ai.kr/en/advanced/pencil-guide\#mcp-tool-list)

When AI assistants connect to Pencil via MCP, they get access to these tools:

### Design Tools [Permalink for this section](https://adk.mo.ai.kr/en/advanced/pencil-guide\#design-tools)

| Tool | Purpose |
| --- | --- |
| `open_document` | Create new .pen file or open existing file |
| `batch_design` | Create/modify multiple design elements at once |
| `batch_get` | Retrieve multiple node information at once |

### Analysis Tools [Permalink for this section](https://adk.mo.ai.kr/en/advanced/pencil-guide\#analysis-tools)

| Tool | Purpose |
| --- | --- |
| `get_screenshot` | Capture screenshot of .pen file |
| `snapshot_layout` | Analyze layout structure |
| `get_editor_state` | Get current editor context and selection |

### Design Resources [Permalink for this section](https://adk.mo.ai.kr/en/advanced/pencil-guide\#design-resources)

| Tool | Purpose |
| --- | --- |
| `get_guidelines` | Get design guidelines |
| `get_style_guide` | Get style guide |
| `get_style_guide_tags` | Get style guide tags for design inspiration |
| `get_variables` | Extract design tokens and theme values |
| `set_variables` | Update design variables and themes |

### Advanced Tools [Permalink for this section](https://adk.mo.ai.kr/en/advanced/pencil-guide\#advanced-tools)

| Tool | Purpose |
| --- | --- |
| `find_empty_space_on_canvas` | Find empty space for new elements |
| `search_all_unique_properties` | Search for all unique properties |
| `replace_all_matching_properties` | Replace all matching properties |

### Tool Selection Guide [Permalink for this section](https://adk.mo.ai.kr/en/advanced/pencil-guide\#tool-selection-guide)

| Purpose | Tool to Use |
| --- | --- |
| Start new design | `open_document` |
| Create components | `batch_design` |
| Preview design | `get_screenshot` |
| Analyze layout | `snapshot_layout` |
| Reference styles | `get_style_guide` |
| Update theme | `set_variables` |
| Export design | Use Pencil Editor Export |

## Using with Claude Code [Permalink for this section](https://adk.mo.ai.kr/en/advanced/pencil-guide\#using-with-claude-code)

### Basic Workflow [Permalink for this section](https://adk.mo.ai.kr/en/advanced/pencil-guide\#basic-workflow)

1. **Open AI prompt panel**: Press `Cmd/Ctrl + K`
2. **Ask for design help**:
   - “Create a login form with email and password”
   - “Add a navigation bar to this page”
   - “Design a card component for my design system”
3. **AI uses MCP tools** to modify your `.pen` file
4. **See changes** reflected in the canvas immediately

### Example Prompts [Permalink for this section](https://adk.mo.ai.kr/en/advanced/pencil-guide\#example-prompts)

**Creating designs:**

- “Design a dashboard with sidebar and main content area”
- “Create a pricing table with 3 tiers”
- “Add a hero section with heading and CTA button”

**Modifying designs:**

- “Change all primary buttons to blue”
- “Make the sidebar narrower”
- “Add spacing between these elements”

**Design systems:**

- “Create a button component with variants”
- “Generate a color palette based on #3b82f6”
- “Build a typography scale”

**Code integration:**

- “Generate React code for this component”
- “Import the Header from my codebase”
- “Create Tailwind config from these variables”

## Using with Cursor [Permalink for this section](https://adk.mo.ai.kr/en/advanced/pencil-guide\#using-with-cursor)

### Setup [Permalink for this section](https://adk.mo.ai.kr/en/advanced/pencil-guide\#setup)

1. Install Pencil extension in Cursor
2. Complete activation
3. Authenticate Claude Code
4. Verify MCP connection: Settings → Tools & MCP

### Cursor-Specific Features [Permalink for this section](https://adk.mo.ai.kr/en/advanced/pencil-guide\#cursor-specific-features)

**Inline editing:**

- Select elements in Pencil
- Use Cursor’s AI chat to modify
- Changes apply to `.pen` file

**Codebase awareness:**

- Cursor can see both your code and designs
- Ask to sync components between them
- Maintain consistency automatically

### Common Issues [Permalink for this section](https://adk.mo.ai.kr/en/advanced/pencil-guide\#common-issues)

**“Need Cursor Pro”:**

- Some features may require Cursor Pro subscription
- Check Cursor’s pricing for current limitations

**Prompt panel missing:**

- Check activation/login status
- Restart Cursor
- Verify MCP connection in settings

**Extension doesn’t connect:**

- Ensure Claude Code is logged in (`claude` CLI)
- Complete the activation process
- Check that Pencil MCP server is connected

## Using with Codex CLI [Permalink for this section](https://adk.mo.ai.kr/en/advanced/pencil-guide\#using-with-codex-cli)

### Setup [Permalink for this section](https://adk.mo.ai.kr/en/advanced/pencil-guide\#setup-1)

1. **Run Pencil first** \- Start the desktop app or IDE extension
2. **Open Codex** in your terminal
3. **Verify MCP connection**: `/mcp`
4. **Pencil should appear** in the MCP server list

### Working with Codex [Permalink for this section](https://adk.mo.ai.kr/en/advanced/pencil-guide\#working-with-codex)

**Design prompts in terminal:**

```

# In Codex CLI
> Create a button component in design.pen
> Add a hero section to the landing page
> Generate a color scheme based on blue
```

**Benefits:**

- Command-line workflow
- Scriptable design generation
- Integrate with build tools

### Known Issues [Permalink for this section](https://adk.mo.ai.kr/en/advanced/pencil-guide\#known-issues)

**Codex config.toml modifications:**

- Pencil may modify or duplicate the config
- Issue is acknowledged and under investigation
- Backup your config before first use

## DNA Code Format [Permalink for this section](https://adk.mo.ai.kr/en/advanced/pencil-guide\#dna-code-format)

Pencil uses DNA code, a declarative format for expressing UI.

### Basic Structure [Permalink for this section](https://adk.mo.ai.kr/en/advanced/pencil-guide\#basic-structure)

```

// Button component DNA code
component Button {
  variant: primary
  size: medium
  content: "Click me"
  onClick: handleSubmit
}
```

### Layout Structure [Permalink for this section](https://adk.mo.ai.kr/en/advanced/pencil-guide\#layout-structure)

```

// Login form layout
layout LoginForm {
  direction: column
  spacing: 16
  children: [\
    Input {\
      placeholder: "Email"\
      type: email\
    }\
    Input {\
      placeholder: "Password"\
      type: password\
    }\
    Button {\
      variant: primary\
      content: "Sign In"\
    }\
  ]
}
```

### Design Tokens [Permalink for this section](https://adk.mo.ai.kr/en/advanced/pencil-guide\#design-tokens)

```

// Token references
color: primary.500
spacing: md
radius: lg

// Token definitions
tokens {
  primary.500 = #3B82F6
  md = 16px
  lg = 8px
}
```

## Design Generation Workflow [Permalink for this section](https://adk.mo.ai.kr/en/advanced/pencil-guide\#design-generation-workflow)

Three-phase pattern for generating designs with Pencil.

### Practical Example: E-Commerce Card [Permalink for this section](https://adk.mo.ai.kr/en/advanced/pencil-guide\#practical-example-e-commerce-card)

```

# Phase 1: Request design with text prompt
> Create a product card. Product image at top, title and price in middle,
# cart button at bottom. Clean minimal style

# Phase 2: Pencil generates DNA code
# → component ProductCard { ... }

# Phase 3: Render to .pen file
# → open_document then batch_design
```

**Key**: Pencil **manages designs as code**. .pen files can be version controlled with Git and integrated into code review workflows.

## Advanced Workflows [Permalink for this section](https://adk.mo.ai.kr/en/advanced/pencil-guide\#advanced-workflows)

### Automated Design Generation [Permalink for this section](https://adk.mo.ai.kr/en/advanced/pencil-guide\#automated-design-generation)

**Style guides**: Ask AI to follow specific design systems:

```

"Create a dashboard using Material Design principles"
"Design a landing page with modern, minimal aesthetics"
"Build components following our design system in design-system.pen"
```

**Batch operations:**

```

"Create 5 variations of this button component"
"Generate a complete form with all input types"
"Design an entire landing page with hero, features, pricing, and footer"
```

### Design System Management [Permalink for this section](https://adk.mo.ai.kr/en/advanced/pencil-guide\#design-system-management)

**Consistency enforcement:**

```

"Ensure all buttons use the primary color variable"
"Update all headings to use the typography scale"
"Apply 8px spacing grid to all elements"
```

**Component library:**

```

"Create a complete button component with all variants"
"Generate form input components (text, select, checkbox, radio)"
"Build a card component with image, title, description, and actions"
```

### Code-Design Workflows [Permalink for this section](https://adk.mo.ai.kr/en/advanced/pencil-guide\#code-design-workflows)

**Import existing app:**

```

"Recreate all components from src/components in Pencil"
"Import the design system from our Tailwind config"
"Analyze the codebase and create matching designs"
```

**Sync changes:**

```

"Update all React components to match the Pencil designs"
"Apply the new color scheme to both design and code"
"Sync typography variables between CSS and Pencil"
```

## React Component Export [Permalink for this section](https://adk.mo.ai.kr/en/advanced/pencil-guide\#react-component-export)

Export .pen files to React components in Pencil Editor.

### Export Configuration [Permalink for this section](https://adk.mo.ai.kr/en/advanced/pencil-guide\#export-configuration)

```

// pencil.config.js
module.exports = {
  framework: 'react',
  styling: 'tailwind',
  output: './src/components/generated',
  options: {
    typescript: true,
    responsive: true,
    accessibility: true
  }
};
```

### Generated Component Example [Permalink for this section](https://adk.mo.ai.kr/en/advanced/pencil-guide\#generated-component-example)

```

export interface ButtonProps {
  variant?: 'primary' | 'secondary' | 'tertiary';
  size?: 'small' | 'medium' | 'large';
  isLoading?: boolean;
}

export const Button = ({ variant = 'primary', size = 'medium', isLoading, children, ...props }: ButtonProps) => {
  const baseStyles = 'inline-flex items-center justify-center font-medium rounded-md transition-colors';

  const variantStyles = {
    primary: 'bg-blue-600 text-white hover:bg-blue-700',
    secondary: 'bg-gray-200 text-gray-900 hover:bg-gray-300',
    tertiary: 'bg-transparent text-gray-700 hover:bg-gray-100'
  };

  const sizeStyles = {
    small: 'px-3 py-1.5 text-sm',
    medium: 'px-4 py-2 text-base',
    large: 'px-6 py-3 text-lg'
  };

  return (
    <button className={`${baseStyles} ${variantStyles[variant]} ${sizeStyles[size]}`} {...props}>
      {isLoading ? 'Loading...' : children}
    </button>
  );
};
```

## Prompt Writing Guide [Permalink for this section](https://adk.mo.ai.kr/en/advanced/pencil-guide\#prompt-writing-guide)

Structured prompts are key to getting good results with Pencil.

### Good vs Bad Prompts [Permalink for this section](https://adk.mo.ai.kr/en/advanced/pencil-guide\#good-vs-bad-prompts)

| Bad Prompt | Good Prompt |
| --- | --- |
| ”Create a cool button" | "Medium-sized primary button with blue background, ‘Confirm’ text, 16px padding" |
| "Dashboard" | "Analytics dashboard with sidebar nav, 3 metric cards at top (revenue, users, conversion), line chart, table" |
| "Responsive" | "Mobile: vertical stack, desktop: 3-column grid” |

### Effective Prompt Template [Permalink for this section](https://adk.mo.ai.kr/en/advanced/pencil-guide\#effective-prompt-template)

```

Create a [component type].
Include [component list].
Layout as [layout].
Apply [style].
Consider [responsive].
```

### Best Practices for Effective Prompting [Permalink for this section](https://adk.mo.ai.kr/en/advanced/pencil-guide\#best-practices-for-effective-prompting)

**Be specific:**

- ❌ “Make it better”
- ✅ “Increase the button padding to 16px and change color to blue”

**Provide context:**

- ❌ “Add a form”
- ✅ “Add a login form with email, password, remember me checkbox, and submit button”

**Reference design systems:**

- “Use our existing button component”
- “Follow the spacing scale from our variables”
- “Match the style of the header component”

### Iterative Design [Permalink for this section](https://adk.mo.ai.kr/en/advanced/pencil-guide\#iterative-design)

1. **Start broad**: “Create a dashboard layout”
2. **Refine**: “Add a sidebar with navigation items”
3. **Detail**: “Style the nav items with hover states”
4. **Polish**: “Adjust spacing to match 8px grid”

**Golden Rule**: Be **specific** in prompts. Specify colors, spacing, alignment, and interactions clearly.

## Best Practices [Permalink for this section](https://adk.mo.ai.kr/en/advanced/pencil-guide\#best-practices)

| Principle | Description |
| --- | --- |
| **Code First** | Manage designs as code for easier version control and collaboration |
| **Iterative Approach** | Start with basic layout, then add details progressively |
| **Accessibility** | Always specify ARIA labels, keyboard navigation |
| **Responsive** | Always include mobile and desktop behaviors |
| **Design System** | Use consistent tokens and components |

### Progressive Enhancement Strategy [Permalink for this section](https://adk.mo.ai.kr/en/advanced/pencil-guide\#progressive-enhancement-strategy)

Complex screens yield better quality when generated in multiple iterations.

## Troubleshooting [Permalink for this section](https://adk.mo.ai.kr/en/advanced/pencil-guide\#troubleshooting)

### Connection Issues [Permalink for this section](https://adk.mo.ai.kr/en/advanced/pencil-guide\#connection-issues)

**“Claude Code not connected”:**

1. Ensure Claude Code is logged in: `claude`
2. Restart Pencil
3. Open terminal in project directory and run `claude`

**MCP server not appearing:**

1. Verify Pencil is running
2. Check IDE MCP settings
3. Restart both Pencil and the AI assistant

### Permission Issues [Permalink for this section](https://adk.mo.ai.kr/en/advanced/pencil-guide\#permission-issues)

**“Can’t access folders”:**

- Accept permission prompts
- Check system folder permissions
- Run IDE/Pencil with proper permissions

**“Permission prompt never appeared”:**

- Try operation in separate Claude Code session
- Check notification settings
- Verify IDE permissions

### AI Output Issues [Permalink for this section](https://adk.mo.ai.kr/en/advanced/pencil-guide\#ai-output-issues)

**“Invalid API key”:**

- Re-authenticate Claude Code: `claude`
- Check for conflicting auth configs
- Clear environment variables

**AI makes unexpected changes:**

- Be more specific in prompts
- Ask AI to explain before applying
- Use version control to revert if needed

### Extension Issues [Permalink for this section](https://adk.mo.ai.kr/en/advanced/pencil-guide\#extension-issues)

**Extension installed but doesn’t connect:**

- Verify Claude Code is logged in
- Complete the activation process
- Restart your IDE

**Activation email not received:**

- Check spam/junk folder
- Try a different email address
- Reinstall the extension

## Using with MoAI [Permalink for this section](https://adk.mo.ai.kr/en/advanced/pencil-guide\#using-with-moai)

MoAI integrates with Pencil MCP for automated UI design.

```

# MoAI uses Pencil for UI generation
> /moai run --team
# team-designer agent uses Pencil MCP for design generation
```

### Team Mode Design Workflow [Permalink for this section](https://adk.mo.ai.kr/en/advanced/pencil-guide\#team-mode-design-workflow)

## Related Documents [Permalink for this section](https://adk.mo.ai.kr/en/advanced/pencil-guide\#related-documents)

- [MCP Servers Guide](https://adk.mo.ai.kr/advanced/mcp-servers) \- MCP protocol overview
- [settings.json Guide](https://adk.mo.ai.kr/advanced/settings-json) \- MCP server permission setup
- [Agent Guide](https://adk.mo.ai.kr/advanced/agent-guide) \- MoAI agent system
- [Skill Guide](https://adk.mo.ai.kr/advanced/skill-guide) \- moai-design-tools skill

## Sources [Permalink for this section](https://adk.mo.ai.kr/en/advanced/pencil-guide\#sources)

- [Installation - Pencil Documentation](https://docs.pencil.dev/getting-started/installation)
- [AI Integration - Pencil Documentation](https://docs.pencil.dev/getting-started/ai-integration)

**Tip**: The key to maximizing Pencil is **managing designs as code**. Managing .pen files with Git makes design version tracking and collaboration much easier.

Last updated onFebruary 12, 2026

[MCP Servers](https://adk.mo.ai.kr/en/advanced/mcp-servers "MCP Servers") [Google Stitch Guide](https://adk.mo.ai.kr/en/advanced/stitch-guide "Google Stitch Guide")

* * *