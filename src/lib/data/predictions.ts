// ==========================================
// SYNTHESIS - AI Evolution Timeline
// Predictions Data
// ==========================================

import { Prediction, PredictionCategory } from '@/types';

export const predictions: Prediction[] = [
  {
    id: 'agi-by-2027',
    title: 'AGI by 2027',
    description: 'AI systems achieve human-level general intelligence across all cognitive domains by 2027.',
    category: 'agi-timeline',
    probability: 0.25,
    probabilityDistribution: [
      { year: 2025, probability: 0.05 },
      { year: 2026, probability: 0.15 },
      { year: 2027, probability: 0.25 },
      { year: 2028, probability: 0.35 },
      { year: 2029, probability: 0.45 },
      { year: 2030, probability: 0.55 }
    ],
    timeframe: { earliest: 2025, expected: 2027, latest: 2035 },
    sources: [
      { id: 'metaculus-agi', type: 'prediction-market', title: 'Metaculus AGI Question', url: 'https://metaculus.com/questions/5121/date-of-artificial-general-intelligence/', credibility: 85 }
    ],
    relatedPredictions: ['asi-timeline', 'agi-by-2030'],
    lastUpdated: '2024-12-01',
    communityVotes: { agree: 15420, disagree: 8230, total: 23650 }
  },
  {
    id: 'agi-by-2030',
    title: 'AGI by 2030',
    description: 'AI systems achieve human-level general intelligence by 2030.',
    category: 'agi-timeline',
    probability: 0.55,
    probabilityDistribution: [
      { year: 2025, probability: 0.05 },
      { year: 2026, probability: 0.12 },
      { year: 2027, probability: 0.22 },
      { year: 2028, probability: 0.35 },
      { year: 2029, probability: 0.48 },
      { year: 2030, probability: 0.55 },
      { year: 2031, probability: 0.65 },
      { year: 2032, probability: 0.72 }
    ],
    timeframe: { earliest: 2025, expected: 2030, latest: 2040 },
    sources: [
      { id: 'metaculus-agi-2030', type: 'prediction-market', title: 'Metaculus AGI 2030', credibility: 85 },
      { id: 'expert-survey-2023', type: 'paper', title: 'Expert Survey on AGI Timeline', credibility: 80 }
    ],
    relatedPredictions: ['agi-by-2027', 'asi-timeline'],
    lastUpdated: '2024-12-01',
    communityVotes: { agree: 28500, disagree: 12300, total: 40800 }
  },
  {
    id: 'asi-timeline',
    title: 'ASI by 2035',
    description: 'Artificial Superintelligence - AI that dramatically exceeds human intelligence in all domains - emerges within a decade of AGI.',
    category: 'asi-timeline',
    probability: 0.35,
    probabilityDistribution: [
      { year: 2030, probability: 0.10 },
      { year: 2032, probability: 0.20 },
      { year: 2035, probability: 0.35 },
      { year: 2040, probability: 0.55 },
      { year: 2045, probability: 0.70 }
    ],
    timeframe: { earliest: 2028, expected: 2035, latest: 2050 },
    sources: [
      { id: 'metaculus-asi', type: 'prediction-market', title: 'Metaculus ASI Question', credibility: 80 },
      { id: 'kurzweil-singularity', type: 'book', title: 'The Singularity Is Near', credibility: 70 }
    ],
    relatedPredictions: ['agi-by-2027', 'intelligence-explosion'],
    lastUpdated: '2024-12-01',
    communityVotes: { agree: 11200, disagree: 18900, total: 30100 }
  },
  {
    id: 'alignment-success',
    title: 'AI Alignment Success',
    description: 'Technical alignment problem is solved - AI systems reliably pursue intended goals without harmful misalignment.',
    category: 'alignment-success',
    probability: 0.45,
    timeframe: { earliest: 2025, expected: 2030, latest: 2040 },
    sources: [
      { id: 'alignment-survey', type: 'paper', title: 'AI Alignment Research Survey', credibility: 75 }
    ],
    relatedPredictions: ['agi-by-2030', 'existential-risk'],
    lastUpdated: '2024-11-15',
    communityVotes: { agree: 18500, disagree: 14200, total: 32700 }
  },
  {
    id: 'existential-risk',
    title: 'AI Existential Catastrophe',
    description: 'AI causes severe harm to humanity at a civilizational scale, potentially including human extinction.',
    category: 'alignment-success',
    probability: 0.12,
    timeframe: { earliest: 2025, expected: 2035, latest: 2100 },
    sources: [
      { id: 'xrisk-survey', type: 'paper', title: 'Existential Risk from AI Survey', credibility: 70 },
      { id: 'hinton-warning', type: 'interview', title: 'Hinton AI Warning', credibility: 85 }
    ],
    relatedPredictions: ['alignment-success', 'asi-timeline'],
    lastUpdated: '2024-12-01',
    communityVotes: { agree: 8500, disagree: 32100, total: 40600 }
  },
  {
    id: 'economic-disruption',
    title: 'Mass Labor Displacement by 2030',
    description: 'AI automation displaces 30%+ of current jobs within this decade, requiring major economic restructuring.',
    category: 'economic-impact',
    probability: 0.55,
    timeframe: { earliest: 2025, expected: 2028, latest: 2032 },
    sources: [
      { id: 'goldman-sachs-report', type: 'article', title: 'Goldman Sachs AI Jobs Report', credibility: 80 },
      { id: 'mckinsey-automation', type: 'article', title: 'McKinsey Automation Report', credibility: 80 }
    ],
    relatedPredictions: ['agi-by-2030', 'ubi-adoption'],
    lastUpdated: '2024-10-01',
    communityVotes: { agree: 28900, disagree: 15600, total: 44500 }
  },
  {
    id: 'ubi-adoption',
    title: 'Universal Basic Income Adopted',
    description: 'Major economies implement universal basic income in response to AI-driven job displacement.',
    category: 'economic-impact',
    probability: 0.40,
    timeframe: { earliest: 2028, expected: 2035, latest: 2050 },
    sources: [
      { id: 'ubi-research', type: 'article', title: 'UBI Policy Research', credibility: 70 }
    ],
    relatedPredictions: ['economic-disruption', 'agi-by-2030'],
    lastUpdated: '2024-09-01',
    communityVotes: { agree: 22100, disagree: 19800, total: 41900 }
  },
  {
    id: 'reasoning-breakthrough',
    title: 'System 2 Reasoning Achieved',
    description: 'AI systems achieve reliable "System 2" thinking - deliberate, logical reasoning beyond pattern matching.',
    category: 'capability-breakthrough',
    probability: 0.65,
    timeframe: { earliest: 2024, expected: 2026, latest: 2028 },
    sources: [
      { id: 'reasoning-research', type: 'paper', title: 'AI Reasoning Research', credibility: 80 }
    ],
    relatedPredictions: ['agi-by-2027', 'o1-breakthrough'],
    lastUpdated: '2024-11-01',
    communityVotes: { agree: 35200, disagree: 8900, total: 44100 }
  },
  {
    id: 'multimodal-native',
    title: 'Native Multimodal Understanding',
    description: 'AI systems natively understand and generate across text, image, video, audio, and code as unified representations.',
    category: 'capability-breakthrough',
    probability: 0.75,
    timeframe: { earliest: 2024, expected: 2025, latest: 2027 },
    sources: [
      { id: 'gpt4o-demo', type: 'article', title: 'GPT-4o Demo', credibility: 90 },
      { id: 'gemini-multimodal', type: 'article', title: 'Gemini Multimodal', credibility: 85 }
    ],
    relatedPredictions: ['reasoning-breakthrough'],
    lastUpdated: '2024-12-01',
    communityVotes: { agree: 42100, disagree: 5200, total: 47300 }
  },
  {
    id: 'world-models',
    title: 'Robust World Models',
    description: 'AI systems develop rich internal models of how the physical and social world works, enabling better planning and prediction.',
    category: 'capability-breakthrough',
    probability: 0.50,
    timeframe: { earliest: 2025, expected: 2027, latest: 2030 },
    sources: [
      { id: 'world-model-paper', type: 'paper', title: 'World Models in AI', credibility: 75 },
      { id: 'lecun-world-model', type: 'interview', title: 'LeCun on World Models', credibility: 85 }
    ],
    relatedPredictions: ['reasoning-breakthrough', 'agi-by-2027'],
    lastUpdated: '2024-10-15',
    communityVotes: { agree: 26800, disagree: 14200, total: 41000 }
  },
  {
    id: 'agent-autonomy',
    title: 'Fully Autonomous AI Agents',
    description: 'AI agents can independently complete complex, multi-step tasks over extended time periods with minimal human oversight.',
    category: 'capability-breakthrough',
    probability: 0.70,
    timeframe: { earliest: 2024, expected: 2026, latest: 2028 },
    sources: [
      { id: 'agent-research', type: 'paper', title: 'Autonomous Agent Research', credibility: 75 }
    ],
    relatedPredictions: ['multi-agent-systems', 'economic-disruption'],
    lastUpdated: '2024-11-20',
    communityVotes: { agree: 33100, disagree: 9800, total: 42900 }
  },
  {
    id: 'multi-agent-systems',
    title: 'Collaborative Multi-Agent Systems',
    description: 'Networks of specialized AI agents work together to solve problems beyond any single agent\'s capability.',
    category: 'capability-breakthrough',
    probability: 0.80,
    timeframe: { earliest: 2024, expected: 2025, latest: 2027 },
    sources: [
      { id: 'multi-agent-paper', type: 'paper', title: 'Multi-Agent Systems Research', credibility: 80 }
    ],
    relatedPredictions: ['agent-autonomy', 'agi-by-2027'],
    lastUpdated: '2024-12-01',
    communityVotes: { agree: 38500, disagree: 6200, total: 44700 }
  },
  {
    id: 'ai-regulation',
    title: 'Comprehensive AI Regulation',
    description: 'Major governments implement comprehensive AI safety and governance regulations.',
    category: 'regulation',
    probability: 0.85,
    timeframe: { earliest: 2024, expected: 2026, latest: 2028 },
    sources: [
      { id: 'eu-ai-act', type: 'article', title: 'EU AI Act', credibility: 95 },
      { id: 'us-ai-order', type: 'article', title: 'US AI Executive Order', credibility: 90 }
    ],
    relatedPredictions: ['alignment-success'],
    lastUpdated: '2024-11-01',
    communityVotes: { agree: 45200, disagree: 3100, total: 48300 }
  },
  {
    id: 'compute-growth',
    title: '1000x Compute Growth by 2030',
    description: 'AI training compute continues exponential growth, achieving 1000x improvement from 2024 levels.',
    category: 'capability-breakthrough',
    probability: 0.70,
    timeframe: { earliest: 2026, expected: 2030, latest: 2032 },
    sources: [
      { id: 'epoch-compute', type: 'article', title: 'Epoch AI Compute Trends', credibility: 85 }
    ],
    relatedPredictions: ['agi-by-2030', 'economic-disruption'],
    lastUpdated: '2024-10-01',
    communityVotes: { agree: 29800, disagree: 12100, total: 41900 }
  }
];

// Get predictions by category
export function getPredictionsByCategory(category: PredictionCategory): Prediction[] {
  return predictions.filter(p => p.category === category);
}

// Get high probability predictions
export function getHighProbabilityPredictions(threshold: number = 0.6): Prediction[] {
  return predictions.filter(p => p.probability >= threshold);
}

// Get controversial predictions (close to 50/50)
export function getControversialPredictions(): Prediction[] {
  return predictions.filter(p => Math.abs(p.probability - 0.5) < 0.15);
}

// Get prediction by ID
export function getPredictionById(id: string): Prediction | undefined {
  return predictions.find(p => p.id === id);
}
