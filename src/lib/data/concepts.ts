// ==========================================
// SYNTHESIS - AI Evolution Timeline
// Concepts & Knowledge Data
// ==========================================

import { Concept, ConceptCategory } from '@/types';

export const concepts: Concept[] = [
  // Architecture
  {
    id: 'transformers',
    name: 'Transformers',
    shortDescription: 'The architecture behind modern AI, using attention to process sequences.',
    fullDescription: 'Transformers are a neural network architecture introduced in 2017 that revolutionized natural language processing. Unlike previous approaches that processed text sequentially, transformers use an "attention mechanism" to process all parts of the input simultaneously, capturing relationships regardless of distance. This architecture enables parallel processing during training and has become the foundation for virtually all modern language models.',
    category: 'architecture',
    difficulty: 'intermediate',
    connections: [
      { conceptId: 'attention-mechanism', relationship: 'requires', strength: 0.95 },
      { conceptId: 'gpt', relationship: 'enables', strength: 0.9 },
      { conceptId: 'scaling-laws', relationship: 'related', strength: 0.7 }
    ],
    sources: [
      { id: 'attention-paper', type: 'paper', title: 'Attention Is All You Need', authors: ['Vaswani et al.'], publishDate: '2017-06-12', credibility: 99 }
    ]
  },
  {
    id: 'attention-mechanism',
    name: 'Attention Mechanism',
    shortDescription: 'How AI models "focus" on relevant information.',
    fullDescription: 'Attention is a mechanism that allows neural networks to focus on specific parts of the input when producing output. Think of it like how humans focus on certain words when reading to understand meaning. In transformers, self-attention allows each word to "look at" all other words in the sentence to understand context. Multi-head attention runs multiple attention operations in parallel, capturing different types of relationships.',
    category: 'architecture',
    difficulty: 'intermediate',
    connections: [
      { conceptId: 'transformers', relationship: 'enables', strength: 0.95 },
      { conceptId: 'context-window', relationship: 'related', strength: 0.8 }
    ],
    sources: [
      { id: 'attention-paper-2', type: 'paper', title: 'Attention Is All You Need', credibility: 99 }
    ]
  },
  {
    id: 'neural-networks',
    name: 'Neural Networks',
    shortDescription: 'Computing systems inspired by biological brains.',
    fullDescription: 'Neural networks are computing systems loosely inspired by biological brains. They consist of layers of interconnected "neurons" that process information. Each connection has a weight that adjusts during training. By stacking multiple layers (deep learning), these networks can learn increasingly abstract representations. Modern AI systems use neural networks with billions to trillions of parameters.',
    category: 'architecture',
    difficulty: 'beginner',
    connections: [
      { conceptId: 'deep-learning', relationship: 'enables', strength: 0.9 },
      { conceptId: 'transformers', relationship: 'related', strength: 0.7 }
    ],
    sources: [
      { id: 'nn-intro', type: 'article', title: 'Neural Networks Introduction', credibility: 80 }
    ]
  },
  {
    id: 'deep-learning',
    name: 'Deep Learning',
    shortDescription: 'Neural networks with many layers that learn hierarchical representations.',
    fullDescription: 'Deep learning refers to neural networks with multiple hidden layers between input and output. Each layer learns increasingly abstract representations - early layers might detect edges, middle layers detect shapes, and later layers detect objects. This hierarchical learning enables AI to understand complex patterns from raw data without manual feature engineering.',
    category: 'architecture',
    difficulty: 'beginner',
    connections: [
      { conceptId: 'neural-networks', relationship: 'requires', strength: 0.95 },
      { conceptId: 'backpropagation', relationship: 'requires', strength: 0.9 }
    ],
    sources: [
      { id: 'deeplearning-book', type: 'book', title: 'Deep Learning', authors: ['Goodfellow', 'Bengio', 'Courville'], credibility: 95 }
    ]
  },
  
  // Capabilities
  {
    id: 'reasoning',
    name: 'Reasoning',
    shortDescription: 'AI\'s ability to think logically and solve problems step-by-step.',
    fullDescription: 'Reasoning in AI refers to the ability to work through problems systematically, drawing conclusions from available information. Recent advances like chain-of-thought prompting and models like OpenAI o1 show AI can "think through" complex problems by breaking them into steps. This contrasts with immediate pattern-matching responses, representing a shift toward more deliberative intelligence.',
    category: 'capability',
    difficulty: 'intermediate',
    connections: [
      { conceptId: 'chain-of-thought', relationship: 'requires', strength: 0.85 },
      { conceptId: 'agi', relationship: 'related', strength: 0.9 }
    ],
    sources: [
      { id: 'cot-paper', type: 'paper', title: 'Chain-of-Thought Prompting', credibility: 90 }
    ]
  },
  {
    id: 'chain-of-thought',
    name: 'Chain-of-Thought',
    shortDescription: 'Prompting technique that makes AI show its work.',
    fullDescription: 'Chain-of-thought (CoT) prompting is a technique where the AI is encouraged to break down problems into intermediate steps before giving a final answer. Instead of directly outputting a response, the model "thinks aloud," showing its reasoning process. This dramatically improves performance on complex reasoning tasks and is key to models like OpenAI o1.',
    category: 'capability',
    difficulty: 'beginner',
    connections: [
      { conceptId: 'reasoning', relationship: 'enables', strength: 0.85 },
      { conceptId: 'prompt-engineering', relationship: 'related', strength: 0.8 }
    ],
    sources: [
      { id: 'cot-paper-2', type: 'paper', title: 'Chain-of-Thought Prompting Elicits Reasoning', credibility: 90 }
    ]
  },
  {
    id: 'emergence',
    name: 'Emergence',
    shortDescription: 'Unexpected capabilities that arise from scaling up AI models.',
    fullDescription: 'Emergence refers to capabilities that appear suddenly in larger AI models that weren\'t present (or weren\'t predictable) in smaller models. Examples include few-shot learning, arithmetic, and reasoning abilities that "emerge" once models reach a certain scale. This phenomenon suggests that simply making models bigger can unlock new abilities without explicit training.',
    category: 'capability',
    difficulty: 'intermediate',
    connections: [
      { conceptId: 'scaling-laws', relationship: 'related', strength: 0.85 },
      { conceptId: 'agi', relationship: 'related', strength: 0.8 }
    ],
    sources: [
      { id: 'emergence-paper', type: 'paper', title: 'Emergent Abilities of Large Language Models', credibility: 85 }
    ]
  },
  {
    id: 'scaling-laws',
    name: 'Scaling Laws',
    shortDescription: 'Predictable relationships between model size, data, and performance.',
    fullDescription: 'Scaling laws describe how AI model performance improves predictably with increased compute, model size, and training data. Discovered by OpenAI researchers, these laws suggest that making models bigger yields consistent improvements, and we haven\'t hit diminishing returns yet. This observation has driven the race to build ever-larger models.',
    category: 'capability',
    difficulty: 'intermediate',
    connections: [
      { conceptId: 'emergence', relationship: 'related', strength: 0.85 },
      { conceptId: 'transformers', relationship: 'related', strength: 0.7 }
    ],
    sources: [
      { id: 'scaling-paper', type: 'paper', title: 'Scaling Laws for Neural Language Models', credibility: 90 }
    ]
  },
  {
    id: 'multimodal-ai',
    name: 'Multimodal AI',
    shortDescription: 'AI that can understand and generate across text, images, audio, and more.',
    fullDescription: 'Multimodal AI systems can process and generate multiple types of content - text, images, audio, video, and code - within a single model. This represents a shift from specialized models for each modality to unified systems that understand the relationships between different types of information. Examples include GPT-4o, Gemini, and Claude 3.',
    category: 'capability',
    difficulty: 'beginner',
    connections: [
      { conceptId: 'world-models', relationship: 'enables', strength: 0.7 },
      { conceptId: 'agi', relationship: 'related', strength: 0.75 }
    ],
    sources: [
      { id: 'gpt4v-paper', type: 'paper', title: 'GPT-4V Technical Report', credibility: 90 }
    ]
  },
  {
    id: 'world-models',
    name: 'World Models',
    shortDescription: 'Internal representations of how the world works.',
    fullDescription: 'World models are AI systems that develop internal representations of physical and social reality. They understand cause and effect, object permanence, and how actions lead to outcomes. Yann LeCun argues that robust world models are essential for true intelligence and that current LLMs lack them. Building world models is seen as crucial for AGI.',
    category: 'capability',
    difficulty: 'advanced',
    connections: [
      { conceptId: 'reasoning', relationship: 'enables', strength: 0.8 },
      { conceptId: 'ai-agents', relationship: 'enables', strength: 0.85 }
    ],
    sources: [
      { id: 'world-model-jept', type: 'paper', title: 'JEPA World Models', credibility: 80 }
    ]
  },
  
  // Agents
  {
    id: 'ai-agents',
    name: 'AI Agents',
    shortDescription: 'AI systems that can take autonomous actions to achieve goals.',
    fullDescription: 'AI agents are systems that can perceive their environment, make decisions, and take actions to achieve specified goals. Unlike chatbots that only respond to queries, agents can browse the web, use tools, write and execute code, and complete multi-step tasks autonomously. This represents the shift from AI as a tool to AI as an active participant.',
    category: 'capability',
    difficulty: 'beginner',
    connections: [
      { conceptId: 'multi-agent-systems', relationship: 'enables', strength: 0.85 },
      { conceptId: 'tool-use', relationship: 'requires', strength: 0.8 }
    ],
    sources: [
      { id: 'agent-survey', type: 'paper', title: 'AI Agents Survey', credibility: 80 }
    ]
  },
  {
    id: 'multi-agent-systems',
    name: 'Multi-Agent Systems',
    shortDescription: 'Multiple AI agents working together collaboratively.',
    fullDescription: 'Multi-agent systems involve multiple AI agents interacting and collaborating to solve problems. Just as humans achieve more by working together, multiple specialized agents can tackle complex tasks that no single agent could handle alone. Examples include agents that debate, agents with different roles (researcher, writer, critic), and emergent collaborative behaviors.',
    category: 'capability',
    difficulty: 'intermediate',
    connections: [
      { conceptId: 'ai-agents', relationship: 'requires', strength: 0.9 },
      { conceptId: 'emergence', relationship: 'related', strength: 0.8 }
    ],
    sources: [
      { id: 'mas-paper', type: 'paper', title: 'Multi-Agent Systems Research', credibility: 75 }
    ]
  },
  
  // Safety
  {
    id: 'alignment',
    name: 'AI Alignment',
    shortDescription: 'Ensuring AI systems pursue intended goals safely.',
    fullDescription: 'AI alignment is the challenge of ensuring AI systems reliably pursue the goals their creators intend, without harmful unintended consequences. This includes value alignment (matching human values), intent alignment (understanding what we mean, not just what we say), and inner alignment (ensuring AI\'s internal goals match its training). Alignment is considered one of the most important problems in AI safety.',
    category: 'safety',
    difficulty: 'intermediate',
    connections: [
      { conceptId: 'existential-risk', relationship: 'related', strength: 0.9 },
      { conceptId: 'rlhf', relationship: 'related', strength: 0.8 }
    ],
    sources: [
      { id: 'alignment-book', type: 'book', title: 'Human Compatible', authors: ['Stuart Russell'], credibility: 90 }
    ]
  },
  {
    id: 'rlhf',
    name: 'RLHF',
    shortDescription: 'Reinforcement Learning from Human Feedback.',
    fullDescription: 'RLHF is a technique for training AI systems using human feedback. After initial training, humans rate AI outputs, and the model learns to produce outputs humans prefer. This is how ChatGPT and similar models learned to be helpful, harmless, and honest. However, RLHF has limitations and doesn\'t guarantee robust alignment.',
    category: 'safety',
    difficulty: 'intermediate',
    connections: [
      { conceptId: 'alignment', relationship: 'related', strength: 0.8 },
      { conceptId: 'constitutional-ai', relationship: 'related', strength: 0.75 }
    ],
    sources: [
      { id: 'rlhf-paper', type: 'paper', title: 'Training language models to follow instructions', credibility: 90 }
    ]
  },
  {
    id: 'constitutional-ai',
    name: 'Constitutional AI',
    shortDescription: 'Training AI to follow explicit principles.',
    fullDescription: 'Constitutional AI, developed by Anthropic, is a method for training AI systems to follow explicit principles (a "constitution") rather than relying solely on human feedback. The AI learns to critique and revise its own outputs according to these principles. This approach aims to create more transparently aligned systems.',
    category: 'safety',
    difficulty: 'advanced',
    connections: [
      { conceptId: 'alignment', relationship: 'related', strength: 0.85 },
      { conceptId: 'rlhf', relationship: 'related', strength: 0.8 }
    ],
    sources: [
      { id: 'cai-paper', type: 'paper', title: 'Constitutional AI', credibility: 90 }
    ]
  },
  {
    id: 'existential-risk',
    name: 'Existential Risk',
    shortDescription: 'Risks from AI that could cause human extinction or civilizational collapse.',
    fullDescription: 'Existential risk from AI refers to the possibility that advanced AI systems could cause harm so severe it ends human civilization or leads to extinction. Concerns include misaligned superintelligence, weaponization, or loss of control over increasingly capable systems. Experts like Geoffrey Hinton and Yoshua Bengio have expressed serious concern about these risks.',
    category: 'safety',
    difficulty: 'intermediate',
    connections: [
      { conceptId: 'alignment', relationship: 'related', strength: 0.9 },
      { conceptId: 'asi', relationship: 'related', strength: 0.95 }
    ],
    sources: [
      { id: 'xrisk-paper', type: 'paper', title: 'Existential Risk from AI', credibility: 75 }
    ]
  },
  
  // Future
  {
    id: 'agi',
    name: 'AGI (Artificial General Intelligence)',
    shortDescription: 'AI with human-level general intelligence across all domains.',
    fullDescription: 'Artificial General Intelligence refers to AI systems that can perform any intellectual task a human can do. Unlike narrow AI that excels at specific tasks, AGI would have flexible, general-purpose intelligence - the ability to reason, learn, plan, and adapt to new situations. There is active debate about when AGI will be achieved and exactly how to define it.',
    category: 'future',
    difficulty: 'beginner',
    connections: [
      { conceptId: 'asi', relationship: 'related', strength: 0.95 },
      { conceptId: 'reasoning', relationship: 'requires', strength: 0.85 },
      { conceptId: 'world-models', relationship: 'requires', strength: 0.8 }
    ],
    sources: [
      { id: 'agi-overview', type: 'article', title: 'AGI Overview', credibility: 75 }
    ]
  },
  {
    id: 'asi',
    name: 'ASI (Artificial Superintelligence)',
    shortDescription: 'AI that dramatically exceeds human intelligence in all domains.',
    fullDescription: 'Artificial Superintelligence refers to AI that surpasses the smartest humans in virtually every domain, including creativity, general wisdom, and social skills. ASI could potentially improve itself rapidly (intelligence explosion), leading to changes impossible to predict. Some experts believe ASI could arrive within years of AGI.',
    category: 'future',
    difficulty: 'intermediate',
    connections: [
      { conceptId: 'agi', relationship: 'requires', strength: 0.95 },
      { conceptId: 'intelligence-explosion', relationship: 'related', strength: 0.9 },
      { conceptId: 'singularity', relationship: 'related', strength: 0.85 }
    ],
    sources: [
      { id: 'superintelligence-book', type: 'book', title: 'Superintelligence', authors: ['Nick Bostrom'], credibility: 80 }
    ]
  },
  {
    id: 'singularity',
    name: 'The Singularity',
    shortDescription: 'A hypothetical point where technological growth becomes uncontrollable.',
    fullDescription: 'The Singularity is a hypothetical future point in time when technological growth becomes so rapid and profound that it represents a fundamental break with the past. Ray Kurzweil predicts the Singularity in 2045. After this point, predictions become impossible because the world would be transformed beyond human comprehension.',
    category: 'future',
    difficulty: 'intermediate',
    connections: [
      { conceptId: 'asi', relationship: 'related', strength: 0.9 },
      { conceptId: 'intelligence-explosion', relationship: 'related', strength: 0.85 }
    ],
    sources: [
      { id: 'singularity-book', type: 'book', title: 'The Singularity Is Near', authors: ['Ray Kurzweil'], credibility: 75 }
    ]
  },
  {
    id: 'intelligence-explosion',
    name: 'Intelligence Explosion',
    shortDescription: 'Self-improving AI rapidly surpassing human intelligence.',
    fullDescription: 'An intelligence explosion is a scenario where an AI system becomes capable of improving its own intelligence, leading to a rapid, exponential increase in capability. Each improvement makes the AI better at improving itself, potentially leading to superintelligence in a very short time. This concept was first described by I.J. Good in 1965.',
    category: 'future',
    difficulty: 'intermediate',
    connections: [
      { conceptId: 'asi', relationship: 'enables', strength: 0.9 },
      { conceptId: 'singularity', relationship: 'related', strength: 0.85 }
    ],
    sources: [
      { id: 'ij-good', type: 'paper', title: 'Speculations Concerning the First Ultraintelligent Machine', credibility: 80 }
    ]
  }
];

// Get concepts by category
export function getConceptsByCategory(category: ConceptCategory): Concept[] {
  return concepts.filter(c => c.category === category);
}

// Get concepts by difficulty
export function getConceptsByDifficulty(difficulty: Concept['difficulty']): Concept[] {
  return concepts.filter(c => c.difficulty === difficulty);
}

// Get concept by ID
export function getConceptById(id: string): Concept | undefined {
  return concepts.find(c => c.id === id);
}

// Get connected concepts
export function getConnectedConcepts(conceptId: string): Concept[] {
  const concept = getConceptById(conceptId);
  if (!concept) return [];
  
  return concept.connections
    .map(conn => getConceptById(conn.conceptId))
    .filter((c): c is Concept => c !== undefined);
}

// Get concept graph for visualization
export function getConceptGraph() {
  const nodes = concepts.map(c => ({
    id: c.id,
    name: c.name,
    category: c.category,
    difficulty: c.difficulty
  }));
  
  const links = concepts.flatMap(c => 
    c.connections.map(conn => ({
      source: c.id,
      target: conn.conceptId,
      strength: conn.strength,
      type: conn.relationship
    }))
  );
  
  return { nodes, links };
}
