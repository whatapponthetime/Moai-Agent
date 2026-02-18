import { useState } from 'react';
import { X, Maximize2, Terminal, HelpCircle, Copy, Check } from 'lucide-react';

interface TestDriveModalProps {
  title: string;
  type: 'skill' | 'agent';
  id: string;
  description: string;
  content: string;
  onClose: () => void;
}

export default function TestDriveModal({ title, type, id, description, content, onClose }: TestDriveModalProps) {
  const [copied, setCopied] = useState<string | null>(null);
  const [command, setCommand] = useState('');

  const copyToClipboard = (text: string, key: string) => {
    navigator.clipboard.writeText(text);
    setCopied(key);
    setTimeout(() => setCopied(null), 2000);
  };

  // Parse commands from skill/agent content
  const parseCommands = () => {
    const commands: { section: string; items: { cmd: string; desc: string }[] }[] = [];

    if (type === 'skill') {
      // Installation commands
      commands.push({
        section: '🔧 Installation',
        items: [
          { cmd: `npx moai-adk install ${id}`, desc: 'Install this skill to your project' },
          { cmd: `npx moai-adk list skills`, desc: 'List all available skills' },
        ]
      });

      // Usage commands
      commands.push({
        section: '🚀 Usage',
        items: [
          { cmd: `moai --skill ${id}`, desc: 'Enable this skill for the current session' },
          { cmd: `moai config skills.${id}.enabled true`, desc: 'Enable skill in configuration' },
        ]
      });

      // Extract triggers from content if available
      const triggersMatch = content.match(/triggers:\s*\n\s*keywords:\s*\[(.*?)\]/s);
      if (triggersMatch) {
        const keywords = triggersMatch[1].replace(/"/g, '').split(',').map(k => k.trim());
        commands.push({
          section: '🎯 Trigger Keywords',
          items: keywords.slice(0, 5).map(kw => ({
            cmd: kw,
            desc: `Use "${kw}" in your prompt to activate this skill`
          }))
        });
      }

      // Extract allowed tools
      const toolsMatch = content.match(/allowed-tools:\s*(.+)/);
      if (toolsMatch) {
        const tools = toolsMatch[1].split(/\s+/).filter(t => t.length > 0);
        commands.push({
          section: '🛠️ Available Tools',
          items: tools.slice(0, 6).map(tool => ({
            cmd: tool,
            desc: `Tool: ${tool}`
          }))
        });
      }
    } else {
      // Agent commands
      commands.push({
        section: '🤖 Invoke Agent',
        items: [
          { cmd: `moai @${id}`, desc: 'Start an interactive session with this agent' },
          { cmd: `moai @${id} "your task here"`, desc: 'Run agent with a specific task' },
        ]
      });

      commands.push({
        section: '⚙️ Configuration',
        items: [
          { cmd: `moai config agents.default ${id}`, desc: 'Set as default agent' },
          { cmd: `moai agents list`, desc: 'List all available agents' },
          { cmd: `moai agents info ${id}`, desc: 'Show agent details' },
        ]
      });

      // Team mode if applicable
      if (id.startsWith('team-')) {
        commands.push({
          section: '👥 Team Mode',
          items: [
            { cmd: `moai --team @${id}`, desc: 'Run in team collaboration mode' },
            { cmd: `moai team spawn ${id}`, desc: 'Spawn agent as teammate' },
          ]
        });
      }
    }

    return commands;
  };

  const commands = parseCommands();

  const handleCommand = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && command.trim()) {
      // Simulate command execution (just show help)
      setCommand('');
    }
  };

  return (
    <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4">
      <div className="bg-[#0a0a0a] border border-[#2a2a2a] rounded-xl w-full max-w-2xl max-h-[80vh] flex flex-col overflow-hidden">
        {/* Header */}
        <div className="flex items-center justify-between px-4 py-3 border-b border-[#2a2a2a] bg-[#111]">
          <div className="flex items-center gap-2">
            <Terminal className="w-4 h-4 text-orange-500" />
            <span className="text-white font-medium">Test Drive: {title}</span>
          </div>
          <div className="flex items-center gap-2">
            <button className="p-1 hover:bg-[#2a2a2a] rounded transition-colors">
              <Maximize2 className="w-4 h-4 text-gray-400" />
            </button>
            <button onClick={onClose} className="p-1 hover:bg-[#2a2a2a] rounded transition-colors">
              <X className="w-4 h-4 text-gray-400" />
            </button>
          </div>
        </div>

        {/* Content */}
        <div className="flex-1 overflow-auto p-4">
          {/* Help Button */}
          <div className="flex justify-end mb-4">
            <button className="flex items-center gap-1 px-3 py-1.5 bg-orange-500 hover:bg-orange-600 text-white rounded text-sm font-medium transition-colors">
              <HelpCircle className="w-4 h-4" />
              HELP
            </button>
          </div>

          {/* Title */}
          <div className="mb-6">
            <div className="text-xs text-orange-500 font-mono tracking-wider mb-2">{id.toUpperCase()}</div>
            <p className="text-gray-300">
              Here's a <span className="text-white font-semibold">detailed breakdown</span> of all available commands with examples:
            </p>
          </div>

          <hr className="border-[#2a2a2a] mb-6" />

          {/* Commands Sections */}
          {commands.map((section, idx) => (
            <div key={idx} className="mb-6">
              <h3 className="text-white font-semibold mb-3">{section.section}</h3>
              <div className="space-y-3">
                {section.items.map((item, itemIdx) => (
                  <div key={itemIdx} className="group">
                    <div className="flex items-center gap-2 mb-1">
                      <div className="flex-1 bg-[#1a1a1a] rounded-lg p-2 font-mono text-sm flex items-center justify-between">
                        <code className="text-orange-400">{item.cmd}</code>
                        <button
                          onClick={() => copyToClipboard(item.cmd, `${idx}-${itemIdx}`)}
                          className="p-1 hover:bg-[#2a2a2a] rounded opacity-0 group-hover:opacity-100 transition-opacity"
                        >
                          {copied === `${idx}-${itemIdx}` ? (
                            <Check className="w-4 h-4 text-green-500" />
                          ) : (
                            <Copy className="w-4 h-4 text-gray-500" />
                          )}
                        </button>
                      </div>
                    </div>
                    <p className="text-sm text-gray-500 ml-2">• {item.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}

          {/* Description */}
          <div className="mt-6 p-4 bg-[#1a1a1a] rounded-lg border border-[#2a2a2a]">
            <h4 className="text-white font-medium mb-2">📝 About</h4>
            <p className="text-gray-400 text-sm">{description}</p>
          </div>
        </div>

        {/* Command Input */}
        <div className="border-t border-[#2a2a2a] p-3 bg-[#111]">
          <div className="flex items-center gap-2 bg-[#0a0a0a] border border-[#2a2a2a] rounded-lg px-3 py-2">
            <span className="text-orange-500">$</span>
            <input
              type="text"
              value={command}
              onChange={(e) => setCommand(e.target.value)}
              onKeyDown={handleCommand}
              placeholder="Type a command..."
              className="flex-1 bg-transparent text-white placeholder-gray-600 focus:outline-none font-mono text-sm"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
