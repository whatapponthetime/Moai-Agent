
import { Link, useLocation } from 'react-router-dom';
import { ChevronRight, ChevronDown } from 'lucide-react';
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
            </div>
        </div>
    );
}
