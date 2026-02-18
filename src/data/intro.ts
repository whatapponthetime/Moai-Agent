export const introData = {
  title: "MoAI-ADK Documentation",
  description: "MoAI-ADK (Agentic Development Kit) is a strategic orchestration framework for Claude Code.",
  keyFeatures: [
    { title: "Alfred Orchestrator", description: "Task delegation through specialized agents" },
    { title: "SPEC-First DDD", description: "Specification-driven domain-driven development workflow" },
    { title: "TRUST 5 Framework", description: "5 core principles for quality assurance" },
    { title: "Progressive Disclosure", description: "Tiered disclosure system for token efficiency" }
  ],
  methodology: {
    spec: {
      title: "What is SPEC?",
      description: "SPEC (Specification) is 'documenting conversations with AI' to prevent context loss.",
      benefits: [
        "Permanently preserve requirements by saving them to files",
        "Continue work even if session ends",
        "Define clearly without ambiguity using EARS format"
      ]
    },
    ddd: {
      title: "What is DDD?",
      description: "DDD (Domain-Driven Development) is 'a safe code improvement method' using home remodeling as an analogy.",
      cycle: [
        { phase: "ANALYZE", action: "Understand current code structure and problems" },
        { phase: "PRESERVE", action: "Record current behavior with tests (safety net)" },
        { phase: "IMPROVE", action: "Make incremental improvements while tests pass" }
      ]
    }
  },
  trust5: [
    { letter: "T", name: "Tested", detail: "85% coverage, behavior preservation" },
    { letter: "R", name: "Readable", detail: "Clear naming, consistent formatting" },
    { letter: "U", name: "Unified", detail: "Unified style guide, auto-formatting" },
    { letter: "S", name: "Secured", detail: "OWASP compliance, vulnerability analysis" },
    { letter: "T", name: "Trackable", detail: "Structured commits, history tracking" }
  ],
  stats: {
    agents: 28,
    skills: 52,
    languages: 16,
    workflows: 11
  }
};
