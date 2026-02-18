import { useState } from 'react';
import { Copy, ExternalLink, Tag, Terminal } from 'lucide-react';
import { skills, skillCategories, Skill } from '../data/skills';
import SkillDetail from '../components/SkillDetail';
import { useRepoContent } from '../hooks/useRepoContent';

interface BrowseSkillsProps {
  searchQuery: string;
}

export default function BrowseSkills({ searchQuery }: BrowseSkillsProps) {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [selectedSkill, setSelectedSkill] = useState<Skill | null>(null);
  const { content } = useRepoContent();

  const filteredSkills = skills.filter((skill) => {
    const matchesSearch =
      searchQuery === '' ||
      skill.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      skill.description.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = !selectedCategory || skill.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'foundation': return 'bg-blue-500/10 text-blue-400 border-blue-500/30';
      case 'domain': return 'bg-green-500/10 text-green-400 border-green-500/30';
      case 'language': return 'bg-purple-500/10 text-purple-400 border-purple-500/30';
      case 'workflow': return 'bg-orange-500/10 text-orange-400 border-orange-500/30';
      case 'platform': return 'bg-cyan-500/10 text-cyan-400 border-cyan-500/30';
      case 'tool': return 'bg-yellow-500/10 text-yellow-400 border-yellow-500/30';
      case 'library': return 'bg-pink-500/10 text-pink-400 border-pink-500/30';
      case 'framework': return 'bg-red-500/10 text-red-400 border-red-500/30';
      default: return 'bg-gray-500/10 text-gray-400 border-gray-500/30';
    }
  };

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
  };

  // Show detail view if a skill is selected
  if (selectedSkill) {
    return (
      <SkillDetail
        skill={selectedSkill}
        content={content}
        onBack={() => setSelectedSkill(null)}
      />
    );
  }

  return (
    <div className="animate-fadeIn">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-white mb-2">Browse Skills</h1>
        <p className="text-gray-400">
          Discover and explore <span className="text-orange-500 font-medium">{skills.length}</span> agent skills
        </p>
      </div>

      {/* Search Bar */}
      <div className="mb-6">
        <input
          type="text"
          placeholder="Search by name or description..."
          className="w-full px-4 py-3 bg-[#1a1a1a] border border-[#2a2a2a] rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-orange-500"
          value={searchQuery}
          readOnly
        />
      </div>

      <div className="flex gap-8">
        {/* Categories Sidebar */}
        <div className="w-56 shrink-0">
          <h3 className="text-sm font-semibold text-gray-400 mb-3">Categories</h3>
          <ul className="space-y-1">
            <li>
              <button
                onClick={() => setSelectedCategory(null)}
                className={`w-full flex justify-between items-center px-3 py-2 rounded-lg text-sm transition-colors ${
                  !selectedCategory ? 'bg-orange-500/10 text-orange-500' : 'text-gray-400 hover:bg-[#1a1a1a]'
                }`}
              >
                <span>All Skills</span>
                <span className="text-xs">{skills.length}</span>
              </button>
            </li>
            {skillCategories.map((cat) => (
              <li key={cat.id}>
                <button
                  onClick={() => setSelectedCategory(cat.id)}
                  className={`w-full flex justify-between items-center px-3 py-2 rounded-lg text-sm transition-colors ${
                    selectedCategory === cat.id ? 'bg-orange-500/10 text-orange-500' : 'text-gray-400 hover:bg-[#1a1a1a]'
                  }`}
                >
                  <span>{cat.name}</span>
                  <span className="text-xs">{cat.count}</span>
                </button>
              </li>
            ))}
          </ul>
        </div>

        {/* Skills Grid */}
        <div className="flex-1">
          <div className="flex items-center justify-between mb-4">
            <span className="text-sm text-gray-500">
              <Tag className="w-4 h-4 inline mr-1" />
              {filteredSkills.length} skills found
            </span>
          </div>

          <div className="grid grid-cols-2 xl:grid-cols-3 gap-4">
            {filteredSkills.map((skill) => (
              <div
                key={skill.id}
                onClick={() => setSelectedSkill(skill)}
                className="bg-[#1a1a1a] border border-[#2a2a2a] rounded-xl p-4 hover:border-orange-500/50 transition-all group cursor-pointer"
              >
                <div className="flex items-start gap-3 mb-3">
                  <div className="w-12 h-12 bg-[#2a2a2a] rounded-xl flex items-center justify-center overflow-hidden border border-white/5 group-hover:border-orange-500/30 transition-colors">
                    <img 
                      src={`https://api.dicebear.com/9.x/shapes/svg?seed=${skill.id}&backgroundColor=transparent&shape1Color=f97316,ea580c,fb923c`} 
                      alt={skill.name}
                      className="w-full h-full object-cover p-1.5 group-hover:rotate-12 transition-transform duration-300"
                    />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="font-medium text-white truncate group-hover:text-orange-400 transition-colors">{skill.name}</h3>
                    <span className="text-xs text-gray-500">{skill.id}</span>
                  </div>
                </div>

                <p className="text-sm text-gray-400 mb-3 line-clamp-2">{skill.description}</p>

                <div className="flex items-center justify-between">
                  <span className={`text-xs px-2 py-1 rounded border ${getCategoryColor(skill.category)}`}>
                    {skill.category.charAt(0).toUpperCase() + skill.category.slice(1)}
                  </span>
                  <div className="flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        copyToClipboard(skill.id);
                      }}
                      className="p-1.5 bg-[#2a2a2a] hover:bg-[#3a3a3a] rounded text-gray-400 hover:text-white transition-colors"
                      title="Copy skill ID"
                    >
                      <Copy className="w-4 h-4" />
                    </button>
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        setSelectedSkill(skill);
                      }}
                      className="p-1.5 bg-[#2a2a2a] hover:bg-[#3a3a3a] rounded text-gray-400 hover:text-white transition-colors"
                      title="View details"
                    >
                      <ExternalLink className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
