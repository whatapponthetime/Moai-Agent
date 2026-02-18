import { useState } from 'react';
import { ArrowLeft, Bookmark, Github, Copy, Users, Shield, Terminal, Play, Puzzle, Wrench } from 'lucide-react';
import { Agent } from '../data/agents';
import { getAgentContent } from '../hooks/useRepoContent';
import TestDriveModal from './TestDriveModal';
import QuickFlow from './QuickFlow';

interface RepoContent {
  agents: Record<string, string>;
  skills: Record<string, string>;
}

interface AgentDetailProps {
  agent: Agent;
  content: RepoContent | null;
  onBack: () => void;
}

export default function AgentDetail({ agent, content, onBack }: AgentDetailProps) {
  const [showTestDrive, setShowTestDrive] = useState(false);
  const agentContent = getAgentContent(content, agent.id);

  // Parse metadata from agent content
  const parseMetadata = (content: string) => {
    const metadata: Record<string, string> = {
      version: '1.0.0',
      license: 'Apache-2.0',
      updated: '2026-02-07',
      status: 'stable'
    };

    const versionMatch = content.match(/version:\s*["']?([^"'\n]+)/);
    const licenseMatch = content.match(/license:\s*["']?([^"'\n]+)/);
    const updatedMatch = content.match(/updated:\s*["']?([^"'\n]+)/);
    const statusMatch = content.match(/status:\s*["']?([^"'\n]+)/);

    if (versionMatch) metadata.version = versionMatch[1].trim();
    if (licenseMatch) metadata.license = licenseMatch[1].trim();
    if (updatedMatch) metadata.updated = updatedMatch[1].trim();
    if (statusMatch) metadata.status = statusMatch[1].trim();

    return metadata;
  };

  const metadata = parseMetadata(agentContent);

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
  };

  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'manager': return 'bg-blue-500/20 text-blue-400';
      case 'expert': return 'bg-green-500/20 text-green-400';
      case 'builder': return 'bg-purple-500/20 text-purple-400';
      case 'team': return 'bg-orange-500/20 text-orange-400';
      default: return 'bg-gray-500/20 text-gray-400';
    }
  };

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'manager': return <Users className="w-7 h-7 text-blue-400" />;
      case 'expert': return <Shield className="w-7 h-7 text-green-400" />;
      case 'builder': return <Wrench className="w-7 h-7 text-purple-400" />;
      case 'team': return <Users className="w-7 h-7 text-orange-400" />;
      default: return <Terminal className="w-7 h-7 text-gray-400" />;
    }
  };

  return (
    <div className="animate-fadeIn">
      {/* Back Button */}
      <button
        onClick={onBack}
        className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors mb-6"
      >
        <ArrowLeft className="w-4 h-4" />
        Back to Browse
      </button>

      {/* Header */}
      <div className="flex items-start justify-between mb-8">
        <div className="flex items-center gap-4">
          <div className="w-14 h-14 bg-[#1a1a1a] border border-[#2a2a2a] rounded-xl flex items-center justify-center">
            {getCategoryIcon(agent.category)}
          </div>
          <div>
            <div className="flex items-center gap-3">
              <h1 className="text-2xl font-bold text-white">{agent.id}</h1>
            </div>
            <div className="flex items-center gap-2 mt-1">
              <span className="text-sm text-gray-500">by MoAI-ADK</span>
              <span className="text-gray-600">•</span>
              <span className={`text-xs px-2 py-0.5 rounded ${getCategoryColor(agent.category)}`}>
                {agent.category.charAt(0).toUpperCase() + agent.category.slice(1)}
              </span>
            </div>
          </div>
        </div>

        <div className="flex gap-3">
          <button className="flex items-center gap-2 px-4 py-2 bg-[#1a1a1a] hover:bg-[#252525] border border-[#2a2a2a] rounded-lg text-white transition-colors">
            <Bookmark className="w-4 h-4" />
            Save
          </button>
          <a
            href="https://github.com/modu-ai/moai-adk"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-4 py-2 bg-[#1a1a1a] hover:bg-[#252525] border border-[#2a2a2a] rounded-lg text-white transition-colors"
          >
            <Github className="w-4 h-4" />
            GitHub
          </a>
        </div>
      </div>

      {/* Quick Flow */}
      <QuickFlow type="agent" id={agent.id} />

      <div className="flex gap-8">
        {/* Main Content */}
        <div className="flex-1">
          {/* Installation */}
          <div className="bg-[#1a1a1a] border border-[#2a2a2a] rounded-xl p-4 mb-6">
            <div className="flex items-center justify-between mb-3">
              <div className="flex items-center gap-2 text-gray-400">
                <Terminal className="w-4 h-4" />
                <span className="text-sm font-medium">USAGE</span>
              </div>
              <button
                onClick={() => copyToClipboard(`moai @${agent.id}`)}
                className="flex items-center gap-1 text-sm text-gray-400 hover:text-orange-500 transition-colors"
              >
                <Copy className="w-4 h-4" />
                Copy
              </button>
            </div>
            <div className="bg-[#0a0a0a] rounded-lg p-3 font-mono text-sm">
              <span className="text-orange-500">$</span>{' '}
              <span className="text-gray-300">moai @{agent.id}</span>
            </div>
          </div>

          {/* About */}
          <div className="mb-8">
            <h2 className="text-lg font-semibold text-white mb-3">About this Agent</h2>
            <p className="text-gray-400 leading-relaxed">{agent.description}</p>
          </div>

          {/* Skills */}
          <div className="mb-8">
            <h2 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
              <Puzzle className="w-5 h-5 text-orange-500" />
              Attached Skills
            </h2>
            <div className="flex flex-wrap gap-2">
              {agent.skills.map((skill) => (
                <span
                  key={skill}
                  className="px-3 py-1.5 bg-orange-500/10 text-orange-400 rounded-lg text-sm border border-orange-500/30"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>

          {/* Tools */}
          <div className="mb-8">
            <h2 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
              <Wrench className="w-5 h-5 text-blue-400" />
              Available Tools
            </h2>
            <div className="flex flex-wrap gap-2">
              {agent.tools.map((tool) => (
                <span
                  key={tool}
                  className="px-3 py-1.5 bg-blue-500/10 text-blue-400 rounded-lg text-sm border border-blue-500/30"
                >
                  {tool}
                </span>
              ))}
            </div>
          </div>

          {/* Code Preview */}
          {agentContent && (
            <div className="mb-8">
              <h2 className="text-lg font-semibold text-white mb-3">Code Preview</h2>
              <div className="bg-[#0a0a0a] border border-[#2a2a2a] rounded-xl p-4 max-h-96 overflow-auto">
                <pre className="text-sm text-gray-400 font-mono whitespace-pre-wrap">
                  {agentContent.slice(0, 2000)}
                  {agentContent.length > 2000 && '\n\n... (truncated)'}
                </pre>
              </div>
            </div>
          )}
        </div>

        {/* Sidebar */}
        <div className="w-72 shrink-0">
          {/* Test Drive Card */}
          <button
            id="test-drive-section"
            onClick={() => setShowTestDrive(true)}
            className="w-full bg-[#1a1a1a] border border-[#2a2a2a] hover:border-orange-500/50 rounded-xl p-6 mb-4 text-center transition-all group"
          >
            <div className="w-16 h-16 bg-white group-hover:bg-orange-500 rounded-xl flex items-center justify-center mx-auto mb-4 transition-colors">
              <Play className="w-8 h-8 text-[#0a0a0a] group-hover:text-white ml-1 transition-colors" />
            </div>
            <span className="text-white font-medium">Test Drive Agent</span>
          </button>

          {/* Metadata Card */}
          <div className="bg-[#1a1a1a] border border-[#2a2a2a] rounded-xl p-4">
            <h3 className="text-white font-semibold mb-4">Metadata</h3>
            <div className="space-y-4">
              <div className="flex justify-between">
                <span className="text-gray-500">Version</span>
                <span className="text-white">{metadata.version}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-500">License</span>
                <span className="text-white">{metadata.license}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-500">Updated</span>
                <span className="text-white">{metadata.updated}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-500">Category</span>
                <span className="text-white capitalize">{agent.category}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-500">Skills</span>
                <span className="text-white">{agent.skills.length}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-500">Tools</span>
                <span className="text-white">{agent.tools.length}</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Test Drive Modal */}
      {showTestDrive && (
        <TestDriveModal
          title={agent.name}
          type="agent"
          id={agent.id}
          description={agent.description}
          content={agentContent}
          onClose={() => setShowTestDrive(false)}
        />
      )}
    </div>
  );
}
