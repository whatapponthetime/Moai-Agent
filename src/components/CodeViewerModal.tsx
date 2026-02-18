import { X, Copy, Check } from 'lucide-react';
import { useState } from 'react';

interface CodeViewerModalProps {
  title: string;
  filePath: string;
  content: string;
  onClose: () => void;
}

export default function CodeViewerModal({ title, filePath, content, onClose }: CodeViewerModalProps) {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(content);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm">
      <div className="w-full max-w-4xl max-h-[85vh] bg-[#111111] border border-[#2a2a2a] rounded-xl overflow-hidden flex flex-col animate-fadeIn">
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-[#2a2a2a]">
          <div>
            <h2 className="text-lg font-semibold text-white">{title}</h2>
            <span className="text-sm text-gray-500 font-mono">{filePath}</span>
          </div>
          <div className="flex items-center gap-2">
            <button
              onClick={handleCopy}
              className={`flex items-center gap-2 px-3 py-1.5 rounded-lg text-sm transition-colors ${
                copied
                  ? 'bg-green-500/10 text-green-400'
                  : 'bg-[#2a2a2a] hover:bg-[#3a3a3a] text-gray-300'
              }`}
            >
              {copied ? (
                <>
                  <Check className="w-4 h-4" />
                  Copied!
                </>
              ) : (
                <>
                  <Copy className="w-4 h-4" />
                  Copy Code
                </>
              )}
            </button>
            <button
              onClick={onClose}
              className="p-2 hover:bg-[#2a2a2a] rounded-lg text-gray-400 hover:text-white transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Code Content */}
        <div className="flex-1 overflow-auto p-6">
          <pre className="text-sm text-gray-300 font-mono whitespace-pre-wrap leading-relaxed">
            {content}
          </pre>
        </div>

        {/* Footer */}
        <div className="px-6 py-3 border-t border-[#2a2a2a] bg-[#0a0a0a]">
          <div className="flex items-center justify-between text-xs text-gray-500">
            <span>Press ESC to close</span>
            <span>MoAI-ADK Explorer</span>
          </div>
        </div>
      </div>
    </div>
  );
}
