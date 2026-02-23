// ==========================================
// SYNTHESIS - AI Evolution Timeline
// Core Type Definitions
// ==========================================

// User Modes
export type UserMode = 'explorer' | 'analyst' | 'visionary' | 'wonder' | 'skeptic';

export interface ModeConfig {
  id: UserMode;
  name: string;
  description: string;
  icon: string;
  color: string;
  features: ModeFeature[];
}

export interface ModeFeature {
  id: string;
  name: string;
  description: string;
  enabled: boolean;
}

// Timeline Types
export type PhaseType = 'llm' | 'agents' | 'multi-agent' | 'agi' | 'asi';

export interface TimelinePhase {
  id: PhaseType;
  name: string;
  shortName: string;
  description: string;
  startYear: number;
  endYear?: number;
  color: string;
  icon: string;
  milestones: Milestone[];
}

export interface Milestone {
  id: string;
  title: string;
  description: string;
  date: string;
  impact: 'low' | 'medium' | 'high' | 'transformative';
  category: 'breakthrough' | 'release' | 'research' | 'event' | 'prediction';
  relatedExperts: string[];
  relatedConcepts: string[];
  sources: Source[];
  // Extended fields
  phase?: string;
  significance?: string;
  technicalDetails?: string;
  tags?: string[];
  verified?: boolean;
}

// Expert Types
export type ExpertStance = 'optimist' | 'cautious' | 'skeptic' | 'neutral';

export interface Expert {
  id: string;
  name: string;
  title: string;
  organization: string;
  avatar?: string;
  stance: ExpertStance;
  credibility: number; // 0-100
  predictions: ExpertPrediction[];
  quotes: ExpertQuote[];
  biography: string;
  sources: Source[];
  socialLinks?: {
    twitter?: string;
    linkedin?: string;
    website?: string;
  };
}

export interface ExpertPrediction {
  id: string;
  expertId: string;
  prediction: string;
  topic: 'agi' | 'asi' | 'agents' | 'alignment' | 'economy' | 'society';
  probability?: number;
  timeframe: {
    start: number;
    end?: number;
  };
  madeAt: string;
  confidence: 'low' | 'medium' | 'high';
  status: 'pending' | 'correct' | 'incorrect' | 'partial';
  source: Source;
}

export interface ExpertQuote {
  id: string;
  text: string;
  context?: string;
  date: string;
  source: Source;
}

// Prediction Types
export interface Prediction {
  id: string;
  title: string;
  description: string;
  category: PredictionCategory;
  probability: number;
  probabilityDistribution?: ProbabilityPoint[];
  timeframe: Timeframe;
  sources: Source[];
  relatedPredictions: string[];
  lastUpdated: string;
  communityVotes: {
    agree: number;
    disagree: number;
    total: number;
  };
}

export type PredictionCategory =
  | 'agi-timeline'
  | 'asi-timeline'
  | 'alignment-success'
  | 'economic-impact'
  | 'capability-breakthrough'
  | 'regulation'
  | 'societal-change';

export interface ProbabilityPoint {
  year: number;
  probability: number;
}

export interface Timeframe {
  earliest: number;
  expected: number;
  latest: number;
}

// Concept Types
export interface Concept {
  id: string;
  name: string;
  shortDescription: string;
  fullDescription: string;
  category: ConceptCategory;
  difficulty: 'beginner' | 'intermediate' | 'advanced' | 'expert';
  connections: ConceptConnection[];
  visualGuide?: string;
  sources: Source[];
}

export type ConceptCategory =
  | 'architecture'
  | 'capability'
  | 'safety'
  | 'philosophy'
  | 'economics'
  | 'society'
  | 'future';

export interface ConceptConnection {
  conceptId: string;
  relationship: 'enables' | 'requires' | 'conflicts' | 'related';
  strength: number; // 0-1
}

// Scenario Types
export interface Scenario {
  id: string;
  name: string;
  description: string;
  type: 'optimistic' | 'pessimistic' | 'neutral' | 'transformative';
  probability: number;
  timeline: ScenarioEvent[];
  decisionPoints: DecisionPoint[];
  outcomes: ScenarioOutcome[];
  sources: Source[];
}

export interface ScenarioEvent {
  year: number;
  title: string;
  description: string;
  probability: number;
}

export interface DecisionPoint {
  id: string;
  question: string;
  options: DecisionOption[];
  impact: string;
}

export interface DecisionOption {
  id: string;
  text: string;
  consequence: string;
  probabilityModifier: number;
}

export interface ScenarioOutcome {
  id: string;
  title: string;
  description: string;
  probability: number;
  type: 'utopia' | 'dystopia' | 'mixed' | 'uncertain';
}

// Source Types
export interface Source {
  id: string;
  type: 'paper' | 'article' | 'book' | 'video' | 'podcast' | 'tweet' | 'interview' | 'prediction-market';
  title: string;
  authors?: string[];
  url?: string;
  publishDate?: string;
  publisher?: string;
  credibility: number; // 0-100
  notes?: string;
}

// User State
export interface UserState {
  mode: UserMode;
  visitedNodes: string[];
  exploredPaths: string[];
  savedPredictions: string[];
  userPredictions: UserPrediction[];
  achievements: Achievement[];
  preferences: UserPreferences;
  lastVisit?: string;
  totalExplorationTime: number;
}

export interface UserPrediction {
  id: string;
  prediction: string;
  category: PredictionCategory;
  timeframe: Timeframe;
  probability: number;
  createdAt: string;
}

export interface UserPreferences {
  audioEnabled: boolean;
  narrationEnabled: boolean;
  animationsReduced: boolean;
  highContrast: boolean;
  fontSize: 'small' | 'medium' | 'large';
  colorTheme: 'cosmic' | 'sunset' | 'ocean' | 'forest';
}

export interface Achievement {
  id: string;
  name: string;
  description: string;
  icon: string;
  unlockedAt: string;
}

// Visualization Types
export interface NodePosition {
  x: number;
  y: number;
  z?: number;
}

export interface VisualNode {
  id: string;
  type: 'phase' | 'milestone' | 'expert' | 'concept' | 'prediction';
  position: NodePosition;
  size: number;
  color: string;
  pulse: boolean;
  connections: string[];
  data: unknown;
}

export interface VisualConnection {
  id: string;
  source: string;
  target: string;
  strength: number;
  type: 'causes' | 'enables' | 'conflicts' | 'related';
  animated: boolean;
}

// API Response Types
export interface MetaculusPrediction {
  id: number;
  title: string;
  short_title?: string;
  resolution: number | null;
  publish_time: number;
  close_time: number;
  resolve_time: number;
  possibilities: {
    type: string;
    scale?: {
      min: number;
      max: number;
    };
  };
  community_prediction: {
    full: {
      q1: number;
      q2: number;
      q3: number;
    };
  };
}

export interface LiveDataState {
  predictions: Prediction[];
  lastFetch: string;
  isLoading: boolean;
  error: string | null;
}
