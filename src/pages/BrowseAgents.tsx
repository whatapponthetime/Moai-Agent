import { useState } from 'react';
import { Copy, ExternalLink, Tag, Users, Shield, Wrench } from 'lucide-react';
import { agents, agentCategories, Agent } from '../data/agents';
import AgentDetail from '../components/AgentDetail';
import { useRepoContent } from '../hooks/useRepoContent';

interface BrowseAgentsProps {
  searchQuery: string;
}

export default function BrowseAgents({ searchQuery }: BrowseAgentsProps) {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [selectedAgent, setSelectedAgent] = useState<Agent | null>(null);
  const { content } = useRepoContent();

  const filteredAgents = agents.filter((agent) => {
    const matchesSearch =
      searchQuery === '' ||
      agent.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      agent.description.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = !selectedCategory || agent.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'manager': return 'bg-blue-500/10 text-blue-400 border-blue-500/30';
      case 'expert': return 'bg-green-500/10 text-green-400 border-green-500/30';
      case 'builder': return 'bg-purple-500/10 text-purple-400 border-purple-500/30';
      case 'team': return 'bg-orange-500/10 text-orange-400 border-orange-500/30';
      default: return 'bg-gray-500/10 text-gray-400 border-gray-500/30';
    }
  };

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'manager': return <Users className="w-5 h-5 text-blue-400" />;
      case 'expert': return <Shield className="w-5 h-5 text-green-400" />;
      case 'builder': return <Wrench className="w-5 h-5 text-purple-400" />;
      case 'team': return <Users className="w-5 h-5 text-orange-400" />;
      default: return <Users className="w-5 h-5 text-gray-400" />;
    }
  };

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
  };

  // Show detail view if an agent is selected
  if (selectedAgent) {
    return (
      <AgentDetail
        agent={selectedAgent}
        content={content}
        onBack={() => setSelectedAgent(null)}
      />
    );
  }

  return (
    <div className="animate-fadeIn">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-white mb-2">Browse Agents</h1>
        <p className="text-gray-400">
          Discover and explore <span className="text-orange-500 font-medium">{agents.length}</span> AI agents
        </p>
      </div>

      {/* Search Bar */}
      <div className="mb-6">
        <input
          type="text"
          placeholder="Search by name, description, or author..."
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
                <span>All Agents</span>
                <span className="text-xs">{agents.length}</span>
              </button>
            </li>
            {agentCategories.map((cat) => (
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

        {/* Agents Grid */}
        <div className="flex-1">
          <div className="flex items-center justify-between mb-4">
            <span className="text-sm text-gray-500">
              <Tag className="w-4 h-4 inline mr-1" />
              {filteredAgents.length} agents found
            </span>
          </div>

          <div className="grid grid-cols-2 xl:grid-cols-3 gap-4">
            {filteredAgents.map((agent) => (
              <div
                key={agent.id}
                onClick={() => setSelectedAgent(agent)}
                className="bg-[#1a1a1a] border border-[#2a2a2a] rounded-xl p-4 hover:border-orange-500/50 transition-all group cursor-pointer"
              >
                <div className="flex items-start gap-3 mb-3">
                  <div className="w-12 h-12 bg-[#2a2a2a] rounded-xl flex items-center justify-center overflow-hidden border border-white/5 group-hover:border-orange-500/30 transition-colors">
                    <img 
                      src={`https://api.dicebear.com/9.x/bottts-neutral/svg?seed=${agent.id}&backgroundColor=transparent&eyes=shade01,happy,frame1,frame2&mouth=smile01,smile02`} 
                      alt={agent.name}
                      className="w-full h-full object-cover p-1 group-hover:scale-110 transition-transform duration-300"
                    />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="font-medium text-white truncate group-hover:text-orange-400 transition-colors">{agent.name}</h3>
                    <span className="text-xs text-gray-500">by MoAI-ADK</span>
                  </div>
                </div>

                <p className="text-sm text-gray-400 mb-3 line-clamp-2">{agent.description}</p>

                <div className="flex items-center justify-between">
                  <span className={`text-xs px-2 py-1 rounded border ${getCategoryColor(agent.category)}`}>
                    {agent.category.charAt(0).toUpperCase() + agent.category.slice(1)}
                  </span>
                  <div className="flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        copyToClipboard(agent.filePath);
                      }}
                      className="p-1.5 bg-[#2a2a2a] hover:bg-[#3a3a3a] rounded text-gray-400 hover:text-white transition-colors"
                      title="Copy path"
                    >
                      <Copy className="w-4 h-4" />
                    </button>
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        setSelectedAgent(agent);
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
