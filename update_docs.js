import fs from 'fs';
import path from 'path';

// Current working directory is expected to be the project root
const docsDir = path.resolve('Docs');
const outputFile = path.resolve('src/data/docsContent.ts');

const mapping = {
    // Getting Started
    '/docs/getting-started/introduction': 'Introduction.md',
    '/docs/getting-started/installation': 'Installation.md',
    '/docs/getting-started/update': 'Update.md',

    // Core Concepts
    '/docs/core-concepts/what-is-moai-adk': 'What is MoAI-ADK.md',
    '/docs/core-concepts/spec-based-dev': 'SPEC-Based Development.md',
    '/docs/core-concepts/ddd': 'MoAI-ADK Development Methodology.md',
    '/docs/core-concepts/trust-5': 'TRUST 5 Quality.md',

    // Workflow Commands
    '/docs/workflow-commands/moai-project': 'moai project.md',
    '/docs/workflow-commands/moai-plan': 'moai plan.md',
    '/docs/workflow-commands/moai-run': 'moai run.md',
    '/docs/workflow-commands/moai-sync': 'moai sync.md',

    // Utility Commands
    '/docs/utility-commands/moai': 'moai.md',
    '/docs/utility-commands/moai-fix': 'moai fix.md',
    '/docs/utility-commands/moai-loop': 'moai loop.md',
    '/docs/utility-commands/moai-feedback': 'moai feedback.md',

    // Claude Code
    '/docs/claude-code/index': 'Claude Code Overview.md',
    '/docs/claude-code/quickstart': 'QuickStart.md',
    '/docs/claude-code/settings': 'Settings.md',
    '/docs/claude-code/skills': 'Skills.md',
    '/docs/claude-code/sub-agents': 'Sub Agents.md',
    '/docs/claude-code/extensions': 'Extensions.md',
    '/docs/claude-code/chrome': 'Chrome Browser Integration.md',

    // Advanced
    '/docs/advanced/agent-guide': 'Agent Guide.md',
    '/docs/advanced/skill-guide': 'Skill Guide.md',
    '/docs/advanced/builder-agents': 'Builder Agents Guide.md',
    '/docs/advanced/hooks-guide': 'Hooks Guide.md',
    '/docs/advanced/settings-json': 'settings.json Guide.md',
    '/docs/advanced/mcp-servers': 'MCP Servers.md',
    '/docs/advanced/stitch-guide': 'Google Stitch Guide.md',

    // MoAI Rank
    '/docs/moai-rank/index': 'MoAI-ADKDocumentation.md',
    '/docs/moai-rank/dashboard': 'Web Dashboard.md',
    '/docs/moai-rank/faq': 'faq_moai.md',

    // Worktree
    '/docs/worktree/index': 'Usage Examples.md',
    '/docs/worktree/faq': 'FAQ_worktree.md',
};

let output = `
export const docsContent: Record<string, string> = {
`;

for (const [route, fileName] of Object.entries(mapping)) {
    const filePath = path.join(docsDir, fileName);
    if (fs.existsSync(filePath)) {
        let content = fs.readFileSync(filePath, 'utf-8');
        // Escape backslashes, backticks and ${}
        content = content.replace(/\\/g, '\\\\').replace(/`/g, '\\`').replace(/\${/g, '\\${');
        output += `  '${route}': \`\n${content}\n\`,\n\n`;
    } else {
        console.warn(`File not found: ${fileName} for route ${route}`);
        output += `  '${route}': \`\n# ${fileName.replace('.md', '')}\n\nFile not found: ${fileName}\n\`,\n\n`;
    }
}

output += `};\n`;

fs.writeFileSync(outputFile, output);
console.log('docsContent.ts updated successfully.');
