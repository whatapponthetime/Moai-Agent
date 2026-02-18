import { useState, useEffect } from 'react';

interface RepoContent {
  agents: Record<string, string>;
  skills: Record<string, string>;
}

export function useRepoContent() {
  const [content, setContent] = useState<RepoContent | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('/repo-content.json')
      .then(res => res.json())
      .then(data => {
        setContent(data);
        setLoading(false);
      })
      .catch(err => {
        console.error('Failed to load repo content:', err);
        setLoading(false);
      });
  }, []);

  return { content, loading };
}

export function getAgentContent(content: RepoContent | null, agentId: string): string {
  if (!content) return 'Loading...';
  return content.agents[agentId] || 'Content not found';
}

export function getSkillContent(content: RepoContent | null, skillId: string): string {
  if (!content) return 'Loading...';
  return content.skills[skillId] || 'Content not found';
}
