import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { Terminal, Check, ChevronRight, Package, Cpu, Zap, Play } from 'lucide-react';

const MOCK_AGENTS = [
    { id: 'agent-dev', name: 'Software Engineer', description: 'Expert in full-stack development, TDD, and debugging.', color: 'text-blue-400' },
    { id: 'agent-pm', name: 'Product Manager', description: 'Creates PRDs, manages specs using EARS format.', color: 'text-purple-400' },
    { id: 'agent-qa', name: 'QA Engineer', description: 'Writes comprehensive test suites and ensures quality.', color: 'text-green-400' },
    { id: 'agent-devops', name: 'DevOps Specialist', description: 'Handles CI/CD pipelines, Docker, and Kubernetes.', color: 'text-orange-400' },
];

const MOCK_SKILLS = [
    { id: 'skill-py', name: 'Python Expert', category: 'Language', description: 'Python 3.12+, FastAPI, Django support', color: 'text-yellow-400' },
    { id: 'skill-react', name: 'React Frontend', category: 'Frontend', description: 'React 19, Next.js 14, Tailwind CSS', color: 'text-cyan-400' },
    { id: 'skill-db', name: 'Database Master', category: 'Backend', description: 'PostgreSQL, MongoDB, Redis optimization', color: 'text-emerald-400' },
    { id: 'skill-aws', name: 'AWS Cloud', category: 'Cloud', description: 'EC2, S3, Lambda, RDS integration', color: 'text-amber-500' },
    { id: 'skill-sec', name: 'Security Audit', category: 'Security', description: 'Vulnerability scanning and best practices', color: 'text-red-400' },
    { id: 'skill-spec', name: 'SPEC Writer', category: 'Workflow', description: 'Automated SPEC documentation generation', color: 'text-pink-400' },
];

export default function TerminalPage() {
    const [step, setStep] = useState<'START' | 'INSTALLING' | 'INSTALLED' | 'SELECT_AGENTS' | 'SELECT_SKILLS' | 'CONFIGURING' | 'FINAL'>('START');
    const [logs, setLogs] = useState<string[]>([]);
    const [inputValue, setInputValue] = useState('');
    const [cursorVisible, setCursorVisible] = useState(true);
    const [selectedAgents, setSelectedAgents] = useState<string[]>([]);
    const [selectedSkills, setSelectedSkills] = useState<string[]>([]);
    const logsEndRef = useRef<HTMLDivElement>(null);

    // Auto-scroll to bottom of logs
    useEffect(() => {
        logsEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    }, [logs]);

    // Blink cursor
    useEffect(() => {
        const interval = setInterval(() => setCursorVisible(v => !v), 530);
        return () => clearInterval(interval);
    }, []);

    const addLog = (text: string, delay = 0) => {
        if (delay === 0) {
            setLogs(prev => [...prev, text]);
        } else {
            setTimeout(() => setLogs(prev => [...prev, text]), delay);
        }
    };

    const handleStartInstall = () => {
        setStep('INSTALLING');
        setLogs(['> Initiating simulated environment...', '> Connecting to remote repository...']);

        // Simulate installation process
        const timeouts = [
            setTimeout(() => addLog('> Downloading moai-v2.5.0-windows-amd64.zip [==========] 100%'), 1000),
            setTimeout(() => addLog('> Verifying SHA256 checksum... OK'), 1800),
            setTimeout(() => addLog('> Extracting files to C:\\Users\\Dev\\AppData\\Local\\Moai...'), 2500),
            setTimeout(() => addLog('> Configuring PATH environment variables...'), 3200),
            setTimeout(() => addLog('> Installing dependencies: [claude-code, git, nodejs]...'), 3800),
            setTimeout(() => {
                addLog('> MoAI-ADK v2.5.0 installed successfully!');
                addLog('> Run "moai init" to configure your agents.');
                setStep('INSTALLED');
            }, 4500),
        ];
        return () => timeouts.forEach(clearTimeout);
    };

    const handleInit = () => {
        setStep('SELECT_AGENTS');
        addLog('> moai init');
        addLog('> Initializing MoAI Project Configuration...');
        addLog('> Please select the AGENTS you want to activate for this project:');
    };

    const toggleAgent = (id: string) => {
        setSelectedAgents(prev =>
            prev.includes(id) ? prev.filter(a => a !== id) : [...prev, id]
        );
    };

    const confirmAgents = () => {
        if (selectedAgents.length === 0) {
            addLog('> [WARNING] No agents selected. Continuing with default "Basic Assistant".');
        } else {
            addLog(`> Agents activated: ${selectedAgents.map(id => MOCK_AGENTS.find(a => a.id === id)?.name).join(', ')}`);
        }
        setStep('SELECT_SKILLS');
        addLog('> Please select the SKILLS/MODULES to install:');
    };

    const toggleSkill = (id: string) => {
        setSelectedSkills(prev =>
            prev.includes(id) ? prev.filter(s => s !== id) : [...prev, id]
        );
    };

    const confirmSkills = () => {
        if (selectedSkills.length === 0) {
            addLog('> [WARNING] No extra skills selected. Basic skills only.');
        } else {
            addLog(`> Skills installed: ${selectedSkills.map(id => MOCK_SKILLS.find(s => s.id === id)?.name).join(', ')}`);
        }
        setStep('CONFIGURING');

        setTimeout(() => {
            addLog('> Generating .moai/config/manifest.json...');
            addLog('> creating project structure...');
            addLog('> syncing with knowledge base...');

            setTimeout(() => {
                setStep('FINAL');
                addLog('> SETUP COMPLETE. MoAI is ready to help you.');
                addLog('> Try running: /moai plan "Build a rocket ship"');
            }, 2000);
        }, 1000);
    };

    const resetSimulation = () => {
        setStep('START');
        setLogs([]);
        setSelectedAgents([]);
        setSelectedSkills([]);
        setInputValue('');
    };

    return (
        <div className="flex flex-col h-full w-full bg-[#0a0a0a] text-white p-6 overflow-hidden relative">
            <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10 pointer-events-none"></div>

            {/* Header */}
            <div className="flex items-center justify-between mb-6 z-10">
                <div>
                    <h1 className="text-3xl font-bold font-mono tracking-tighter flex items-center gap-3">
                        <Terminal className="w-8 h-8 text-orange-500" />
                        <span className="bg-clip-text text-transparent bg-gradient-to-r from-orange-400 to-red-500">
                            TERMINAL
                        </span>
                    </h1>
                    <p className="text-gray-400 mt-1 font-mono text-sm">
                        Interactive MoAI-ADK Installation & Setup
                    </p>
                </div>
                <button
                    onClick={resetSimulation}
                    className="px-4 py-2 border border-[#333] hover:bg-[#222] rounded text-xs font-mono transition-colors text-gray-400 hover:text-white"
                >
                    RESET TERMINAL
                </button>
            </div>

            {/* Terminal Window */}
            <div className="flex-1 rounded-xl bg-[#0f0f0f] border border-[#333] shadow-2xl flex flex-col overflow-hidden relative font-mono text-sm md:text-base ring-1 ring-orange-500/20">
                {/* Terminal Header */}
                <div className="h-8 bg-[#1a1a1a] flex items-center px-4 gap-2 border-b border-[#333]">
                    <div className="w-3 h-3 rounded-full bg-red-500/80"></div>
                    <div className="w-3 h-3 rounded-full bg-yellow-500/80"></div>
                    <div className="w-3 h-3 rounded-full bg-green-500/80"></div>
                    <div className="ml-4 text-xs text-gray-500 flex-1 text-center font-sans tracking-wide">
                        user@moai-adk:~
                    </div>
                </div>

                {/* content */}
                <div className="flex-1 p-6 overflow-y-auto custom-scrollbar font-mono">
                    {/* Default banner */}
                    <div className="text-orange-500/50 mb-4 whitespace-pre leading-none select-none text-[10px] sm:text-xs">
                        {`
 __  __           _    ___ 
|  \\/  | ___     / \\  |_ _|
| |\\/| |/ _ \\   / _ \\  | | 
| |  | | (_) | / ___ \\ | | 
|_|  |_|\\___/ /_/   \\_\\___|
`}
                    </div>

                    <div className="space-y-1 mb-4">
                        <div className="text-gray-400">Welcome to MoAI-ADK Interactive Terminal.</div>
                        <div className="text-gray-500">Type commands or interact with the UI to configure your environment.</div>
                    </div>

                    {/* Dynamic Logs */}
                    <div className="space-y-1 text-gray-300">
                        {logs.map((log, i) => (
                            <div key={i} className="break-words animate-in fade-in slide-in-from-left-1 duration-300">
                                {log.startsWith('>') ? (
                                    <span className={log.includes('[WARNING]') ? 'text-yellow-400' : 'text-green-400'}>{log}</span>
                                ) : (
                                    log
                                )}
                            </div>
                        ))}
                        <div ref={logsEndRef} />
                    </div>

                    {/* Interactive Input Area */}
                    <div className="mt-4 border-t border-[#333] pt-4">
                        {step === 'START' && (
                            <div className="flex flex-col gap-4">
                                <div className="text-white">
                                    <span className="text-green-500">➜</span> <span className="text-blue-400">~</span> Install MoAI-ADK?
                                </div>
                                <button
                                    onClick={handleStartInstall}
                                    className="w-full sm:w-auto px-6 py-3 bg-orange-600 hover:bg-orange-700 text-white rounded font-bold flex items-center gap-2 transition-all hover:scale-105 active:scale-95 text-left group"
                                >
                                    <span className="font-mono text-sm opacity-80">$</span>
                                    <span>irm https://mo.ai/install.ps1 | iex</span>
                                    <Play className="w-4 h-4 ml-auto group-hover:translate-x-1 transition-transform" />
                                </button>
                            </div>
                        )}

                        {step === 'INSTALLED' && (
                            <div className="flex flex-col gap-4 animate-in fade-in zoom-in-95 duration-500">
                                <div className="text-white">
                                    <span className="text-green-500">➜</span> <span className="text-blue-400">~/project</span> MoAI installed. Initialize project?
                                </div>
                                <button
                                    onClick={handleInit}
                                    className="w-full sm:w-auto px-6 py-3 bg-[#222] hover:bg-[#333] border border-[#444] text-white rounded font-bold flex items-center gap-2 transition-all hover:border-green-500 group"
                                >
                                    <span className="font-mono text-green-500">$</span>
                                    <span>moai init</span>
                                    <span className="ml-auto w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
                                </button>
                            </div>
                        )}

                        {step === 'SELECT_AGENTS' && (
                            <div className="bg-[#151515] p-4 rounded border border-[#333] animate-in slide-in-from-bottom-5 duration-500">
                                <h3 className="text-gray-400 text-sm mb-3 uppercase tracking-wider font-bold">Available Agents</h3>
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-4">
                                    {MOCK_AGENTS.map(agent => (
                                        <div
                                            key={agent.id}
                                            onClick={() => toggleAgent(agent.id)}
                                            className={`
                        p-3 rounded border cursor-pointer transition-all relative overflow-hidden group
                        ${selectedAgents.includes(agent.id)
                                                    ? 'bg-[#2a1a10] border-orange-500/50'
                                                    : 'bg-[#1a1a1a] border-[#333] hover:border-gray-500'}
                      `}
                                        >
                                            <div className="flex items-start justify-between">
                                                <div className="flex items-center gap-2">
                                                    <Cpu className={`w-4 h-4 ${agent.color}`} />
                                                    <span className={`font-bold ${selectedAgents.includes(agent.id) ? 'text-white' : 'text-gray-300'}`}>
                                                        {agent.name}
                                                    </span>
                                                </div>
                                                {selectedAgents.includes(agent.id) && <Check className="w-4 h-4 text-orange-500" />}
                                            </div>
                                            <p className="text-xs text-gray-500 mt-2 font-sans group-hover:text-gray-400">
                                                {agent.description}
                                            </p>
                                        </div>
                                    ))}
                                </div>
                                <button
                                    onClick={confirmAgents}
                                    className="w-full py-2 bg-gradient-to-r from-orange-600 to-red-600 hover:from-orange-500 hover:to-red-500 text-white rounded font-bold uppercase tracking-widest text-xs transition-transform transform active:scale-[0.99]"
                                >
                                    Confirm Agents & Continue
                                </button>
                            </div>
                        )}

                        {step === 'SELECT_SKILLS' && (
                            <div className="bg-[#151515] p-4 rounded border border-[#333] animate-in slide-in-from-bottom-5 duration-500">
                                <h3 className="text-gray-400 text-sm mb-3 uppercase tracking-wider font-bold">Additional Skills</h3>
                                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 mb-4">
                                    {MOCK_SKILLS.map(skill => (
                                        <div
                                            key={skill.id}
                                            onClick={() => toggleSkill(skill.id)}
                                            className={`
                        p-3 rounded border cursor-pointer transition-all relative overflow-hidden group
                        ${selectedSkills.includes(skill.id)
                                                    ? 'bg-[#1a2a20] border-green-500/50'
                                                    : 'bg-[#1a1a1a] border-[#333] hover:border-gray-500'}
                      `}
                                        >
                                            <div className="flex items-start justify-between mb-1">
                                                <span className={`text-xs font-bold px-1.5 py-0.5 rounded bg-[#333] ${skill.color}`}>
                                                    {skill.category}
                                                </span>
                                                {selectedSkills.includes(skill.id) && <Check className="w-3 h-3 text-green-500" />}
                                            </div>
                                            <div className="font-bold text-gray-200 mt-1">{skill.name}</div>
                                            <p className="text-[10px] text-gray-500 mt-1 group-hover:text-gray-400">
                                                {skill.description}
                                            </p>
                                        </div>
                                    ))}
                                </div>
                                <button
                                    onClick={confirmSkills}
                                    className="w-full py-2 bg-[#222] hover:bg-white hover:text-black text-white border border-white/20 rounded font-bold uppercase tracking-widest text-xs transition-colors"
                                >
                                    Install Selected Skills
                                </button>
                            </div>
                        )}

                        {step === 'FINAL' && (
                            <div className="bg-green-500/10 border border-green-500/30 p-4 rounded text-center animate-in zoom-in duration-500">
                                <Zap className="w-8 h-8 text-green-400 mx-auto mb-2" />
                                <h3 className="text-lg font-bold text-green-400 mb-1">System Ready</h3>
                                <p className="text-sm text-green-500/80 mb-4">
                                    MoAI-ADK has been successfully configured with your selected agents and skills.
                                </p>
                                <Link to="/" className="inline-block px-4 py-2 bg-green-600 hover:bg-green-700 text-white rounded text-sm font-bold transition-colors">
                                    Go to Dashboard
                                </Link>
                            </div>
                        )}

                        {(step === 'INSTALLING' || step === 'CONFIGURING') && (
                            <div className="text-gray-500 animate-pulse flex items-center gap-2">
                                <span className="w-2 h-2 bg-orange-500 rounded-full animate-bounce"></span>
                                Processing...
                            </div>
                        )}
                    </div>
                </div>

                {/* Status Bar */}
                <div className="h-6 bg-[#1a1a1a] border-t border-[#333] flex items-center justify-between px-4 text-[10px] text-gray-600 font-sans">
                    <div className="flex items-center gap-4">
                        <span>MEM: 64MB</span>
                        <span>CPU: 2%</span>
                    </div>
                    <div className="flex items-center gap-2">
                        <span className={`w-2 h-2 rounded-full ${step === 'FINAL' ? 'bg-green-500' : 'bg-orange-500'}`}></span>
                        {step === 'FINAL' ? 'ONLINE' : step === 'START' ? 'IDLE' : 'BUSY'}
                    </div>
                </div>
            </div>
        </div>
    );
}
