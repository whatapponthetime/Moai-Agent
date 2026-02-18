import { useState } from 'react';
import { ChevronDown, Copy, Check, ArrowDown } from 'lucide-react';

interface QuickFlowProps {
  type: 'skill' | 'agent';
  id: string;
}

interface Step {
  number: number;
  label: string;
  command?: string;
  description: string;
  isAnchor?: boolean;
}

export default function QuickFlow({ type, id }: QuickFlowProps) {
  const [isExpanded, setIsExpanded] = useState(false);
  const [activeStep, setActiveStep] = useState<number | null>(null);
  const [copiedStep, setCopiedStep] = useState<number | null>(null);

  const getSteps = (): Step[] => {
    if (type === 'skill') {
      return [
        {
          number: 1,
          label: 'Install',
          command: `npx moai-adk install ${id}`,
          description: 'Install this skill to your project'
        },
        {
          number: 2,
          label: 'Enable',
          command: `npx moai-adk enable ${id}`,
          description: 'Enable the skill in your configuration'
        },
        {
          number: 3,
          label: 'Run',
          command: `moai --skill ${id}`,
          description: 'Start a session with this skill active'
        },
        {
          number: 4,
          label: 'Test',
          description: 'Try the available tools listed below or use the Test Drive feature',
          isAnchor: true
        }
      ];
    } else {
      return [
        {
          number: 1,
          label: 'Install',
          command: `npx moai-adk install-agent ${id}`,
          description: 'Install this agent to your project'
        },
        {
          number: 2,
          label: 'Enable',
          command: `npx moai-adk set-default ${id}`,
          description: 'Set as default agent'
        },
        {
          number: 3,
          label: 'Run',
          command: `moai @${id}`,
          description: 'Start an interactive session with this agent'
        },
        {
          number: 4,
          label: 'Test',
          description: 'Explore attached skills and tools below or use the Test Drive feature',
          isAnchor: true
        }
      ];
    }
  };

  const steps = getSteps();

  const handleStepClick = (stepNumber: number) => {
    setActiveStep(activeStep === stepNumber ? null : stepNumber);
  };

  const copyToClipboard = (text: string, stepNumber: number) => {
    navigator.clipboard.writeText(text);
    setCopiedStep(stepNumber);
    setTimeout(() => setCopiedStep(null), 2000);
  };

  const scrollToTestDrive = () => {
    const testDriveSection = document.getElementById('test-drive-section');
    if (testDriveSection) {
      testDriveSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="bg-[#1a1a1a] border border-[#2a2a2a] rounded-xl mb-6 overflow-hidden">
      {/* Header - Clickable to expand/collapse */}
      <button
        onClick={() => setIsExpanded(!isExpanded)}
        className="w-full flex items-center justify-between px-4 py-3 hover:bg-[#222] transition-colors"
      >
        <div className="flex items-center gap-3">
          <span className="text-orange-500 font-semibold text-sm">⚡ Quick Flow</span>
          <span className="text-gray-500 text-xs">Get started in 4 steps</span>
        </div>
        <ChevronDown
          className={`w-4 h-4 text-gray-400 transition-transform duration-200 ${isExpanded ? 'rotate-180' : ''}`}
        />
      </button>

      {/* Expanded Content */}
      {isExpanded && (
        <div className="px-4 pb-4">
          {/* Step Indicators */}
          <div className="flex items-center justify-between mb-4">
            {steps.map((step, index) => (
              <div key={step.number} className="flex items-center">
                <button
                  onClick={() => handleStepClick(step.number)}
                  className={`flex flex-col items-center group transition-all ${
                    activeStep === step.number ? 'scale-105' : ''
                  }`}
                >
                  <div
                    className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold transition-all ${
                      activeStep === step.number
                        ? 'bg-orange-500 text-white'
                        : 'bg-[#2a2a2a] text-gray-400 group-hover:bg-orange-500/20 group-hover:text-orange-400'
                    }`}
                  >
                    {step.number}
                  </div>
                  <span
                    className={`text-xs mt-1 transition-colors ${
                      activeStep === step.number
                        ? 'text-orange-500'
                        : 'text-gray-500 group-hover:text-gray-300'
                    }`}
                  >
                    {step.label}
                  </span>
                </button>
                {index < steps.length - 1 && (
                  <div className="w-12 sm:w-16 md:w-20 h-[2px] bg-[#2a2a2a] mx-2" />
                )}
              </div>
            ))}
          </div>

          {/* Active Step Content */}
          {activeStep !== null && (
            <div className="bg-[#0a0a0a] rounded-lg p-4 animate-fadeIn">
              {steps.map((step) => {
                if (step.number !== activeStep) return null;

                return (
                  <div key={step.number}>
                    <p className="text-gray-400 text-sm mb-3">{step.description}</p>

                    {step.command && (
                      <div className="flex items-center justify-between bg-[#1a1a1a] rounded-lg p-3 font-mono text-sm">
                        <div>
                          <span className="text-orange-500">$</span>{' '}
                          <span className="text-gray-300">{step.command}</span>
                        </div>
                        <button
                          onClick={() => copyToClipboard(step.command!, step.number)}
                          className="flex items-center gap-1 text-gray-400 hover:text-orange-500 transition-colors ml-4"
                        >
                          {copiedStep === step.number ? (
                            <>
                              <Check className="w-4 h-4 text-green-500" />
                              <span className="text-xs text-green-500">Copied!</span>
                            </>
                          ) : (
                            <>
                              <Copy className="w-4 h-4" />
                              <span className="text-xs">Copy</span>
                            </>
                          )}
                        </button>
                      </div>
                    )}

                    {step.isAnchor && (
                      <button
                        onClick={scrollToTestDrive}
                        className="flex items-center gap-2 mt-3 text-orange-500 hover:text-orange-400 transition-colors text-sm"
                      >
                        <ArrowDown className="w-4 h-4" />
                        <span>Go to Test Drive</span>
                      </button>
                    )}
                  </div>
                );
              })}
            </div>
          )}
        </div>
      )}
    </div>
  );
}
