import { ArrowRight, Code2, Terminal, Sparkles, Zap, Shield, CheckCircle2, Info } from 'lucide-react';
import { introData } from '../data/intro';

type Page = 'dashboard' | 'agents' | 'skills' | 'docs';

interface DashboardProps {
  onNavigate: (page: Page) => void;
}

export default function Dashboard({ onNavigate }: DashboardProps) {
  return (
    <div className="min-h-screen flex flex-col items-center relative py-20 pb-40">
      {/* Dynamic Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-orange-500/10 rounded-full blur-[120px] animate-pulse" />
        <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-blue-500/5 rounded-full blur-[100px]" />
        
        {/* Modern Grid */}
        <div 
          className="absolute inset-0 opacity-[0.15]" 
          style={{
            backgroundImage: `linear-gradient(#f97316 1px, transparent 1px), linear-gradient(90deg, #f97316 1px, transparent 1px)`,
            backgroundSize: '40px 40px',
            maskImage: 'radial-gradient(ellipse at center, black, transparent 80%)'
          }} 
        />
      </div>

      {/* Content Container */}
      <div className="relative z-10 text-center max-w-5xl mx-auto px-6">
        {/* Premium Status Badge */}
        <div className="inline-flex items-center gap-2.5 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 mb-10 backdrop-blur-md hover:border-orange-500/50 transition-colors cursor-default group">
          <div className="relative flex items-center justify-center">
            <span className="absolute w-2 h-2 bg-orange-500 rounded-full animate-ping opacity-75" />
            <span className="relative w-2 h-2 bg-orange-500 rounded-full" />
          </div>
          <span className="text-white/80 text-xs font-mono tracking-wider uppercase">v2.0.0 System Online</span>
          <div className="h-3 w-px bg-white/20 mx-1" />
          <span className="text-orange-500 text-xs font-bold tracking-tight group-hover:text-orange-400 transition-colors">READY TO SYNC</span>
        </div>

        {/* Hero Headline Section */}
        <div className="space-y-4 mb-10">
          <h1 className="text-6xl md:text-8xl font-extrabold tracking-tight text-white leading-[1.1]">
            Build with <br />
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-orange-400 via-orange-500 to-orange-600 animate-gradient">
              AI Agents
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-400 max-w-3xl mx-auto leading-relaxed font-light italic">
            "High-performance development environment for <span className="text-white font-medium">Claude Code</span>. 
            Automate complex workflows with <span className="text-orange-500/90 font-semibold italic">Vibe Coding</span> excellence."
          </p>
        </div>

        {/* Actions Section */}
        <div className="flex flex-wrap items-center justify-center gap-5 mb-24">
          <button
            onClick={() => onNavigate('skills')}
            className="group relative px-10 py-5 bg-orange-500 hover:bg-orange-600 text-white rounded-2xl font-bold text-lg transition-all duration-300 flex items-center gap-3 overflow-hidden shadow-[0_0_40px_-10px_rgba(249,115,22,0.5)] active:scale-95"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
            <Sparkles className="w-5 h-5" />
            Explore Skills
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1.5 transition-transform" />
          </button>
          
          <button
            onClick={() => onNavigate('docs')}
            className="group px-10 py-5 bg-white/5 hover:bg-white/10 text-white rounded-2xl font-bold text-lg transition-all duration-300 flex items-center gap-3 border border-white/10 hover:border-white/20 backdrop-blur-xl active:scale-95"
          >
            <Terminal className="w-5 h-5 text-orange-500 group-hover:scale-110 transition-transform" />
            Documentation
          </button>
        </div>

        {/* Trust 5 Quality Framework Section */}
        <div className="mb-24 text-left">
          <div className="flex items-center gap-3 mb-8">
            <Shield className="w-8 h-8 text-orange-500" />
            <h2 className="text-3xl font-bold text-white tracking-tight">TRUST 5 Quality Framework</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
            {introData.trust5.map((item, idx) => (
              <div key={idx} className="bg-white/5 border border-white/10 p-6 rounded-2xl backdrop-blur-sm hover:border-orange-500/50 transition-colors group">
                <div className="text-4xl font-black text-orange-500 mb-2 group-hover:scale-110 transition-transform">{item.letter}</div>
                <div className="text-lg font-bold text-white mb-1">{item.name}</div>
                <div className="text-xs text-gray-500 uppercase tracking-wider">{item.detail}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Methodology Section (SPEC & DDD) */}
        <div className="grid md:grid-cols-2 gap-8 mb-24 text-left">
          <div className="bg-gradient-to-br from-white/5 to-transparent border border-white/10 p-8 rounded-[2.5rem] backdrop-blur-sm relative overflow-hidden group">
             <div className="absolute -right-10 -top-10 w-40 h-40 bg-orange-500/5 rounded-full blur-3xl group-hover:bg-orange-500/10 transition-colors" />
             <div className="flex items-center gap-3 mb-4">
               <Info className="w-6 h-6 text-orange-500" />
               <h3 className="text-2xl font-bold text-white">{introData.methodology.spec.title}</h3>
             </div>
             <p className="text-gray-400 mb-6 leading-relaxed italic">{introData.methodology.spec.description}</p>
             <ul className="space-y-3">
               {introData.methodology.spec.benefits.map((benefit, i) => (
                 <li key={i} className="flex items-start gap-3 text-sm text-gray-300">
                   <CheckCircle2 className="w-4 h-4 text-orange-500 shrink-0 mt-0.5" />
                   {benefit}
                 </li>
               ))}
             </ul>
          </div>

          <div className="bg-gradient-to-br from-white/5 to-transparent border border-white/10 p-8 rounded-[2.5rem] backdrop-blur-sm relative overflow-hidden group">
             <div className="absolute -right-10 -top-10 w-40 h-40 bg-blue-500/5 rounded-full blur-3xl group-hover:bg-blue-500/10 transition-colors" />
             <div className="flex items-center gap-3 mb-4">
               <Zap className="w-6 h-6 text-blue-400" />
               <h3 className="text-2xl font-bold text-white">{introData.methodology.ddd.title}</h3>
             </div>
             <p className="text-gray-400 mb-6 leading-relaxed italic">{introData.methodology.ddd.description}</p>
             <div className="space-y-4">
               {introData.methodology.ddd.cycle.map((item, i) => (
                 <div key={i} className="flex items-center gap-4 bg-white/5 p-3 rounded-xl border border-white/5">
                   <div className="text-xs font-mono font-bold text-blue-400 w-20 shrink-0">{item.phase}</div>
                   <div className="text-sm text-gray-400">{item.action}</div>
                 </div>
               ))}
             </div>
          </div>
        </div>

        {/* Feature Grid / Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 p-2 bg-white/5 border border-white/10 rounded-[2.5rem] backdrop-blur-sm">
          {[
            { value: introData.stats.agents.toString(), label: 'Agents', icon: Zap, color: 'text-orange-500' },
            { value: introData.stats.skills.toString(), label: 'Skills', icon: Sparkles, color: 'text-blue-400' },
            { value: introData.stats.languages.toString(), label: 'Languages', icon: Code2, color: 'text-emerald-400' },
            { value: introData.stats.workflows.toString(), label: 'Workflows', icon: Shield, color: 'text-purple-400' },
          ].map((stat) => (
            <div key={stat.label} className="group relative p-8 rounded-3xl hover:bg-white/5 transition-all duration-300">
              <div className="flex flex-col items-center">
                <stat.icon className={`w-5 h-5 ${stat.color} mb-3 opacity-60 group-hover:opacity-100 transition-opacity`} />
                <div className="text-4xl font-black text-white mb-1 group-hover:scale-110 transition-transform duration-300">{stat.value}</div>
                <div className="text-xs font-bold text-gray-500 uppercase tracking-[0.2em]">{stat.label}</div>
              </div>
            </div>
          ))}
        </div>

        {/* Minimalist Quote */}
        <div className="mt-20 flex items-center justify-center gap-4">
          <div className="h-px w-8 bg-gradient-to-r from-transparent to-orange-500/30" />
          <p className="text-sm font-mono text-gray-500 tracking-tight">
            "The purpose of vibe coding is not <span className="text-gray-400">rapid productivity</span> but <span className="text-white">code quality</span>."
          </p>
          <div className="h-px w-8 bg-gradient-to-l from-transparent to-orange-500/30" />
        </div>
      </div>
    </div>
  );
}
