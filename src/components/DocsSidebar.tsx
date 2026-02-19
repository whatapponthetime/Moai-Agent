
import { Link, useLocation } from 'react-router-dom';
import { ChevronRight, ChevronDown, Github } from 'lucide-react';
import { useState, useEffect } from 'react';
import { docsStructure } from '../data/docsStructure';

export default function DocsSidebar() {
    const location = useLocation();
    const [openSections, setOpenSections] = useState<Record<string, boolean>>({});

    // Initialize open sections based on current path
    useEffect(() => {
        const newOpenSections = { ...openSections };
        docsStructure.forEach(section => {
            const hasActiveChild = section.items.some(item => item.path === location.pathname);
            if (hasActiveChild) {
                newOpenSections[section.title] = true;
            }
        });
        setOpenSections(prev => ({ ...prev, ...newOpenSections }));
    }, [location.pathname]);

    const toggleSection = (title: string) => {
        setOpenSections(prev => ({ ...prev, [title]: !prev[title] }));
    };

    return (
        <div className="w-64 flex-shrink-0 border-r border-[#2a2a2a] bg-[#0f0f0f] overflow-y-auto h-[calc(100vh-4rem)] sticky top-0 hidden md:block">
            <div className="p-4 space-y-6">
                {docsStructure.map((section) => (
                    <div key={section.title}>
                        <button
                            onClick={() => toggleSection(section.title)}
                            className="flex items-center justify-between w-full text-left text-sm font-semibold text-gray-300 hover:text-white mb-2 group"
                        >
                            <span>{section.title}</span>
                            {openSections[section.title] ? (
                                <ChevronDown className="w-4 h-4 text-gray-500 group-hover:text-white transition-colors" />
                            ) : (
                                <ChevronRight className="w-4 h-4 text-gray-500 group-hover:text-white transition-colors" />
                            )}
                        </button>

                        {openSections[section.title] && (
                            <ul className="space-y-1 ml-2 border-l border-[#2a2a2a] pl-2">
                                {section.items.map((item) => {
                                    const isActive = location.pathname === item.path;
                                    return (
                                        <li key={item.path}>
                                            <Link
                                                to={item.path}
                                                className={`block text-sm py-1 px-2 rounded-md transition-colors ${isActive
                                                    ? 'text-orange-500 bg-orange-500/10 font-medium'
                                                    : 'text-gray-400 hover:text-white hover:bg-[#1a1a1a]'
                                                    }`}
                                            >
                                                {item.title}
                                            </Link>
                                        </li>
                                    );
                                })}
                            </ul>
                        )}
                    </div>
                ))}

                {/* Community Section */}
                <div className="pt-4 border-t border-[#2a2a2a]">
                    <h3 className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-3 px-2">Community</h3>
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
        </div>
    );
}
