import { useState } from 'react';
import { ArrowLeft, Bookmark, Github, Copy, Zap, Shield, Terminal, Play } from 'lucide-react';
import { Skill } from '../data/skills';
import { getSkillContent } from '../hooks/useRepoContent';
import TestDriveModal from './TestDriveModal';
import QuickFlow from './QuickFlow';

interface RepoContent {
  agents: Record<string, string>;
  skills: Record<string, string>;
}

interface SkillDetailProps {
  skill: Skill;
  content: RepoContent | null;
  onBack: () => void;
}

export default function SkillDetail({ skill, content, onBack }: SkillDetailProps) {
  const [showTestDrive, setShowTestDrive] = useState(false);
  const skillContent = getSkillContent(content, skill.id);

  // Parse metadata from skill content
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

  // Parse capabilities from content
  const parseCapabilities = (content: string): string[] => {
    const capabilities: string[] = [];
    const lines = content.split('\n');
    let inCapabilities = false;

    for (const line of lines) {
      if (line.includes('## Capabilities') || line.includes('## Features')) {
        inCapabilities = true;
        continue;
      }
      if (inCapabilities && line.startsWith('## ')) break;
      if (inCapabilities && line.startsWith('- ')) {
        capabilities.push(line.replace('- ', '').trim());
      }
    }

    if (capabilities.length === 0) {
      return [
        'Optimized for Claude Code integration',
        'Supports progressive disclosure',
        'Modular and composable design'
      ];
    }

    return capabilities.slice(0, 5);
  };

  const metadata = parseMetadata(skillContent);
  const capabilities = parseCapabilities(skillContent);

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
  };

  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'foundation': return 'bg-blue-500/20 text-blue-400';
      case 'domain': return 'bg-green-500/20 text-green-400';
      case 'language': return 'bg-purple-500/20 text-purple-400';
      case 'workflow': return 'bg-orange-500/20 text-orange-400';
      case 'platform': return 'bg-cyan-500/20 text-cyan-400';
      case 'tool': return 'bg-yellow-500/20 text-yellow-400';
      case 'library': return 'bg-pink-500/20 text-pink-400';
      case 'framework': return 'bg-red-500/20 text-red-400';
      default: return 'bg-gray-500/20 text-gray-400';
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
          <div className="w-14 h-14 bg-[#1a1a1a] border border-orange-500/30 rounded-xl flex items-center justify-center">
            <Terminal className="w-7 h-7 text-orange-500" />
          </div>
          <div>
            <div className="flex items-center gap-3">
              <h1 className="text-2xl font-bold text-white">{skill.id}</h1>
            </div>
            <div className="flex items-center gap-2 mt-1">
              <span className="text-sm text-gray-500">by MoAI-ADK</span>
              <span className="text-gray-600">•</span>
              <span className={`text-xs px-2 py-0.5 rounded ${getCategoryColor(skill.category)}`}>
                {skill.category.charAt(0).toUpperCase() + skill.category.slice(1)}
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
      <QuickFlow type="skill" id={skill.id} />

      <div className="flex gap-8">
        {/* Main Content */}
        <div className="flex-1">
          {/* Installation */}
          <div className="bg-[#1a1a1a] border border-[#2a2a2a] rounded-xl p-4 mb-6">
            <div className="flex items-center justify-between mb-3">
              <div className="flex items-center gap-2 text-gray-400">
                <Terminal className="w-4 h-4" />
                <span className="text-sm font-medium">INSTALLATION</span>
              </div>
              <button
                onClick={() => copyToClipboard(`npx moai-adk install ${skill.id}`)}
                className="flex items-center gap-1 text-sm text-gray-400 hover:text-orange-500 transition-colors"
              >
                <Copy className="w-4 h-4" />
                Copy
              </button>
            </div>
            <div className="bg-[#0a0a0a] rounded-lg p-3 font-mono text-sm">
              <span className="text-orange-500">$</span>{' '}
              <span className="text-gray-300">npx moai-adk install {skill.id}</span>
            </div>
          </div>

          {/* About */}
          <div className="mb-8">
            <h2 className="text-lg font-semibold text-white mb-3">About this Skill</h2>
            <p className="text-gray-400 leading-relaxed">{skill.description}</p>
          </div>

          {/* Capabilities */}
          <div className="mb-8">
            <h2 className="text-lg font-semibold text-white mb-4">Capabilities</h2>
            <div className="space-y-3">
              {capabilities.map((cap, index) => (
                <div key={index} className="flex items-start gap-3">
                  {index % 2 === 0 ? (
                    <Zap className="w-5 h-5 text-orange-500 mt-0.5" />
                  ) : (
                    <Shield className="w-5 h-5 text-orange-500 mt-0.5" />
                  )}
                  <span className="text-gray-400">{cap}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Code Preview */}
          {skillContent && (
            <div className="mb-8">
              <h2 className="text-lg font-semibold text-white mb-3">Code Preview</h2>
              <div className="bg-[#0a0a0a] border border-[#2a2a2a] rounded-xl p-4 max-h-96 overflow-auto">
                <pre className="text-sm text-gray-400 font-mono whitespace-pre-wrap">
                  {skillContent.slice(0, 2000)}
                  {skillContent.length > 2000 && '\n\n... (truncated)'}
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
            <span className="text-white font-medium">Test Drive Skill</span>
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
                <span className="text-gray-500">Status</span>
                <span className="text-white capitalize">{metadata.status}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-500">Category</span>
                <span className="text-white capitalize">{skill.category}</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Test Drive Modal */}
      {showTestDrive && (
        <TestDriveModal
          title={skill.name}
          type="skill"
          id={skill.id}
          description={skill.description}
          content={skillContent}
          onClose={() => setShowTestDrive(false)}
        />
      )}
    </div>
  );
}
