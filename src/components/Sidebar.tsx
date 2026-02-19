import { Search, LayoutDashboard, Users, Puzzle, ChevronDown, ChevronRight, Github } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { docsStructure } from '../data/docsStructure';

interface SidebarProps {
  searchQuery: string;
  onSearchChange: (query: string) => void;
}

export default function Sidebar({ searchQuery, onSearchChange }: SidebarProps) {
  const location = useLocation();
  const currentPath = location.pathname;
  const [openSections, setOpenSections] = useState<Record<string, boolean>>({});

  // Initialize open sections based on current path
  useEffect(() => {
    const newOpenSections: Record<string, boolean> = {};
    docsStructure.forEach(section => {
      const hasActiveChild = section.items.some(item => item.path === currentPath);
      if (hasActiveChild) {
        newOpenSections[section.title] = true;
      }
    });
    setOpenSections(prev => ({ ...prev, ...newOpenSections }));
  }, [currentPath]);

  const toggleSection = (title: string) => {
    setOpenSections(prev => ({ ...prev, [title]: !prev[title] }));
  };

  const isActive = (path: string) => currentPath === path;

  return (
    <aside className="fixed left-0 top-0 h-full w-64 bg-[#111111]/95 border-r border-[#2a2a2a] flex flex-col z-20 backdrop-blur-sm">
      {/* Logo */}
      <div className="p-6 border-b border-[#2a2a2a]">
        <Link to="/" className="flex items-center gap-4 group cursor-pointer">
          <span className="text-4xl filter drop-shadow-[0_0_8px_rgba(249,115,22,0.3)] group-hover:scale-110 transition-transform duration-300" role="img" aria-label="moai">🗿</span>
          <div>
            <h1 className="text-xl font-black text-white tracking-tighter flex items-center gap-1">
              MoAI
              <span className="w-1.5 h-1.5 bg-orange-500 rounded-full animate-pulse" />
            </h1>
            <span className="text-[10px] text-gray-500 font-mono tracking-[0.2em] uppercase">ADK EXPLORER</span>
          </div>
        </Link>
      </div>

      {/* Search */}
      <div className="p-4">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-500" />
          <input
            type="text"
            placeholder="Quick search..."
            value={searchQuery}
            onChange={(e) => onSearchChange(e.target.value)}
            className="w-full pl-10 pr-4 py-2 bg-[#1a1a1a] border border-[#2a2a2a] rounded-lg text-sm text-white placeholder-gray-500 focus:outline-none focus:border-orange-500 transition-colors"
          />
        </div>
      </div>

      {/* Navigation */}
      <nav className="flex-1 px-4 overflow-y-auto pb-6 custom-scrollbar">
        <div className="space-y-6">
          {/* Main Apps */}
          <div>
            <h3 className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-2 px-2">Application</h3>
            <ul className="space-y-1">
              <li>
                <Link
                  to="/"
                  className={`w-full flex items-center gap-3 px-3 py-2 rounded-lg text-sm transition-all ${isActive('/')
                      ? 'bg-orange-500/10 text-orange-500 font-medium'
                      : 'text-gray-400 hover:bg-[#1a1a1a] hover:text-white'
                    }`}
                >
                  <LayoutDashboard className="w-4 h-4" />
                  Dashboard
                </Link>
              </li>
              <li>
                <Link
                  to="/agents"
                  className={`w-full flex items-center gap-3 px-3 py-2 rounded-lg text-sm transition-all ${isActive('/agents')
                      ? 'bg-orange-500/10 text-orange-500 font-medium'
                      : 'text-gray-400 hover:bg-[#1a1a1a] hover:text-white'
                    }`}
                >
                  <Users className="w-4 h-4" />
                  Browse Agents
                </Link>
              </li>
              <li>
                <Link
                  to="/skills"
                  className={`w-full flex items-center gap-3 px-3 py-2 rounded-lg text-sm transition-all ${isActive('/skills')
                      ? 'bg-orange-500/10 text-orange-500 font-medium'
                      : 'text-gray-400 hover:bg-[#1a1a1a] hover:text-white'
                    }`}
                >
                  <Puzzle className="w-4 h-4" />
                  Browse Skills
                </Link>
              </li>
            </ul>
          </div>

          {/* Documentation Sections */}
          <div>
            <h3 className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-2 px-2">Documentation</h3>
            <div className="space-y-1">
              {docsStructure.map((section) => (
                <div key={section.title}>
                  <button
                    onClick={() => toggleSection(section.title)}
                    className="flex items-center justify-between w-full px-2 py-1.5 text-left text-sm font-medium text-gray-300 hover:text-white rounded-lg hover:bg-[#1a1a1a] transition-colors group"
                  >
                    <span>{section.title}</span>
                    {openSections[section.title] ? (
                      <ChevronDown className="w-3.5 h-3.5 text-gray-500 group-hover:text-white" />
                    ) : (
                      <ChevronRight className="w-3.5 h-3.5 text-gray-500 group-hover:text-white" />
                    )}
                  </button>

                  {openSections[section.title] && (
                    <ul className="mt-1 ml-2 border-l border-[#2a2a2a] pl-2 space-y-0.5">
                      {section.items.map((item) => (
                        <li key={item.path}>
                          <Link
                            to={item.path}
                            className={`block text-xs py-1.5 px-2 rounded-md transition-colors ${isActive(item.path)
                                ? 'text-orange-500 bg-orange-500/10 font-medium'
                                : 'text-gray-400 hover:text-white hover:bg-[#1a1a1a]'
                              }`}
                          >
                            {item.title}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Community Section */}
          <div>
            <h3 className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-2 px-2">Community</h3>
            <ul className="space-y-1">
              <li>
                <a
                  href="https://x.com/MoAIagents"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full flex items-center gap-3 px-3 py-2 rounded-lg text-sm text-gray-400 hover:bg-[#1a1a1a] hover:text-white transition-all group"
                >
                  <svg viewBox="0 0 24 24" className="w-4 h-4 fill-current group-hover:text-orange-500 transition-colors">
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                  </svg>
                  X (Twitter)
                </a>
              </li>
              <li>
                <a
                  href="https://github.com/whatapponthetime/Moai-Agent.git"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full flex items-center gap-3 px-3 py-2 rounded-lg text-sm text-gray-400 hover:bg-[#1a1a1a] hover:text-white transition-all group"
                >
                  <Github className="w-4 h-4 group-hover:text-orange-500 transition-colors" />
                  GitHub
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      {/* Footer */}
      <div className="p-4 border-t border-[#2a2a2a] bg-[#111111]">
        <div className="text-xs text-center text-gray-600">
          v2.4.5 • MoAI-ADK
        </div>
      </div>
    </aside>
  );
}
