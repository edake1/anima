// ==========================================
// SYNTHESIS - AI Evolution Timeline
// Timeline & Milestone Data
// ==========================================

import { TimelinePhase, Milestone } from '@/types';

export const timelinePhases: TimelinePhase[] = [
  {
    id: 'llm',
    name: 'Large Language Models',
    shortName: 'LLMs',
    description: 'The era of large language models began with transformer architecture and has rapidly evolved to near-human reasoning capabilities.',
    startYear: 2017,
    endYear: 2024,
    color: '#6366f1', // Indigo
    icon: 'MessageSquare',
    milestones: []
  },
  {
    id: 'agents',
    name: 'AI Agents',
    shortName: 'Agents',
    description: 'AI systems capable of autonomous action, planning, and tool use. The shift from passive responders to active problem solvers.',
    startYear: 2023,
    endYear: 2026,
    color: '#8b5cf6', // Violet
    icon: 'Bot',
    milestones: []
  },
  {
    id: 'multi-agent',
    name: 'Multi-Agent Systems',
    shortName: 'Multi-Agent',
    description: 'Networks of AI agents collaborating on complex tasks, exhibiting emergent behaviors and collective intelligence.',
    startYear: 2024,
    endYear: 2028,
    color: '#a855f7', // Purple
    icon: 'Network',
    milestones: []
  },
  {
    id: 'agi',
    name: 'Artificial General Intelligence',
    shortName: 'AGI',
    description: 'AI systems with human-level or greater general intelligence across all cognitive domains. The threshold moment.',
    startYear: 2026,
    endYear: 2032,
    color: '#ec4899', // Pink
    icon: 'Brain',
    milestones: []
  },
  {
    id: 'asi',
    name: 'Artificial Superintelligence',
    shortName: 'ASI',
    description: 'Intelligence far surpassing the smartest humans in all domains. The post-human era begins.',
    startYear: 2028,
    color: '#f43f5e', // Rose
    icon: 'Sparkles',
    milestones: []
  }
];

export const milestones: Milestone[] = [
  // Foundation Era (Pre-2017)
  {
    id: 'perceptron-1958',
    title: 'The Perceptron',
    description: 'Frank Rosenblatt invents the perceptron, the first artificial neural network, laying groundwork for modern AI.',
    date: '1958-01-01',
    impact: 'transformative',
    category: 'research',
    relatedExperts: [],
    relatedConcepts: ['neural-networks'],
    sources: [{ id: 'perceptron-paper', type: 'paper', title: 'The Perceptron', authors: ['Frank Rosenblatt'], publishDate: '1958-01-01', credibility: 95 }]
  },
  {
    id: 'backprop-1986',
    title: 'Backpropagation Popularized',
    description: 'Rumelhart, Hinton, and Williams popularize backpropagation, enabling training of multi-layer neural networks.',
    date: '1986-01-01',
    impact: 'transformative',
    category: 'research',
    relatedExperts: ['geoffrey-hinton'],
    relatedConcepts: ['neural-networks', 'deep-learning'],
    sources: [{ id: 'backprop-paper', type: 'paper', title: 'Learning representations by back-propagating errors', authors: ['Rumelhart', 'Hinton', 'Williams'], publishDate: '1986-01-01', credibility: 95 }]
  },
  {
    id: 'imagenet-2012',
    title: 'AlexNet Wins ImageNet',
    description: 'Deep learning breakthrough as AlexNet crushes ImageNet competition, igniting the modern AI renaissance.',
    date: '2012-09-01',
    impact: 'transformative',
    category: 'breakthrough',
    relatedExperts: ['geoffrey-hinton', 'yann-lecun', 'ilya-sutskever'],
    relatedConcepts: ['deep-learning', 'computer-vision'],
    sources: [{ id: 'alexnet-paper', type: 'paper', title: 'ImageNet Classification with Deep CNNs', authors: ['Krizhevsky', 'Sutskever', 'Hinton'], publishDate: '2012-09-01', credibility: 95 }]
  },
  {
    id: 'deepmind-founded',
    title: 'DeepMind Founded',
    description: 'Demis Hassabis, Shane Legg, and Mustafa Suleyman found DeepMind, later acquired by Google.',
    date: '2010-11-01',
    impact: 'high',
    category: 'event',
    relatedExperts: ['demis-hassabis'],
    relatedConcepts: ['reinforcement-learning'],
    sources: [{ id: 'deepmind-about', type: 'article', title: 'DeepMind History', credibility: 95 }]
  },
  
  // LLM Era (2017-2024)
  {
    id: 'transformer-2017',
    title: 'Attention Is All You Need',
    description: 'Google researchers introduce the Transformer architecture, revolutionizing NLP and enabling modern LLMs.',
    date: '2017-06-12',
    impact: 'transformative',
    category: 'breakthrough',
    relatedExperts: [],
    relatedConcepts: ['transformers', 'attention-mechanism'],
    sources: [{ id: 'transformer-paper', type: 'paper', title: 'Attention Is All You Need', authors: ['Vaswani et al.'], publishDate: '2017-06-12', credibility: 99 }]
  },
  {
    id: 'gpt1-2018',
    title: 'GPT-1 Released',
    description: 'OpenAI releases the first GPT model, demonstrating the power of unsupervised pre-training.',
    date: '2018-06-11',
    impact: 'high',
    category: 'release',
    relatedExperts: ['ilya-sutskever'],
    relatedConcepts: ['gpt', 'pre-training'],
    sources: [{ id: 'gpt1-paper', type: 'paper', title: 'Improving Language Understanding by Generative Pre-Training', authors: ['Radford et al.'], publishDate: '2018-06-11', credibility: 95 }]
  },
  {
    id: 'bert-2018',
    title: 'BERT Released',
    description: 'Google introduces BERT, pioneering bidirectional pre-training for language understanding.',
    date: '2018-10-11',
    impact: 'high',
    category: 'release',
    relatedExperts: [],
    relatedConcepts: ['transformers', 'pre-training'],
    sources: [{ id: 'bert-paper', type: 'paper', title: 'BERT: Pre-training of Deep Bidirectional Transformers', authors: ['Devlin et al.'], publishDate: '2018-10-11', credibility: 95 }]
  },
  {
    id: 'gpt2-2019',
    title: 'GPT-2 "Too Dangerous to Release"',
    description: 'OpenAI initially withholds full GPT-2 due to concerns about misuse, sparking debate about AI openness.',
    date: '2019-02-14',
    impact: 'high',
    category: 'release',
    relatedExperts: ['sam-altman', 'ilya-sutskever'],
    relatedConcepts: ['gpt', 'ai-safety'],
    sources: [{ id: 'gpt2-blog', type: 'article', title: 'Better Language Models and Their Implications', credibility: 95 }]
  },
  {
    id: 'alphago-2016',
    title: 'AlphaGo Defeats Lee Sedol',
    description: 'DeepMind\'s AlphaGo defeats world champion Go player, achieving a milestone thought decades away.',
    date: '2016-03-15',
    impact: 'transformative',
    category: 'event',
    relatedExperts: ['demis-hassabis'],
    relatedConcepts: ['reinforcement-learning', 'game-ai'],
    sources: [{ id: 'alphago-documentary', type: 'video', title: 'AlphaGo Documentary', credibility: 95 }]
  },
  {
    id: 'gpt3-2020',
    title: 'GPT-3 Demonstrates Emergent Abilities',
    description: 'GPT-3 shows remarkable few-shot learning and emergent capabilities not present in smaller models.',
    date: '2020-06-11',
    impact: 'transformative',
    category: 'release',
    relatedExperts: ['sam-altman', 'dario-amodei', 'ilya-sutskever'],
    relatedConcepts: ['gpt', 'emergence', 'scaling-laws'],
    sources: [{ id: 'gpt3-paper', type: 'paper', title: 'Language Models are Few-Shot Learners', authors: ['Brown et al.'], publishDate: '2020-06-11', credibility: 95 }]
  },
  {
    id: 'codex-2021',
    title: 'GitHub Copilot Launches',
    description: 'OpenAI\'s Codex powers GitHub Copilot, bringing AI-assisted coding to millions of developers.',
    date: '2021-06-29',
    impact: 'high',
    category: 'release',
    relatedExperts: ['sam-altman'],
    relatedConcepts: ['code-generation', 'ai-tools'],
    sources: [{ id: 'copilot-announce', type: 'article', title: 'GitHub Copilot Announcement', credibility: 90 }]
  },
  {
    id: 'dalle-2022',
    title: 'DALL-E 2 Generates Art',
    description: 'OpenAI releases DALL-E 2, demonstrating AI\'s creative potential with stunning image generation.',
    date: '2022-04-06',
    impact: 'high',
    category: 'release',
    relatedExperts: ['sam-altman'],
    relatedConcepts: ['multimodal-ai', 'generative-ai'],
    sources: [{ id: 'dalle2-blog', type: 'article', title: 'DALL-E 2 Announcement', credibility: 90 }]
  },
  {
    id: 'chatgpt-2022',
    title: 'ChatGPT Launches',
    description: 'OpenAI releases ChatGPT. Within 5 days, 1 million users. The AI revolution goes mainstream.',
    date: '2022-11-30',
    impact: 'transformative',
    category: 'release',
    relatedExperts: ['sam-altman', 'ilya-sutskever'],
    relatedConcepts: ['gpt', 'chatbots', 'rlhf'],
    sources: [{ id: 'chatgpt-launch', type: 'article', title: 'ChatGPT Launch', credibility: 99 }]
  },
  {
    id: 'chatgpt-100m',
    title: 'ChatGPT Reaches 100M Users',
    description: 'Fastest-growing consumer application in history reaches 100 million users in 2 months.',
    date: '2023-01-31',
    impact: 'transformative',
    category: 'event',
    relatedExperts: ['sam-altman'],
    relatedConcepts: [],
    sources: [{ id: 'chatgpt-stats', type: 'article', title: 'ChatGPT User Statistics', credibility: 90 }]
  },
  {
    id: 'gpt4-2023',
    title: 'GPT-4 Released',
    description: 'OpenAI releases GPT-4, a multimodal model with dramatically improved reasoning and reliability.',
    date: '2023-03-14',
    impact: 'transformative',
    category: 'release',
    relatedExperts: ['sam-altman', 'ilya-sutskever'],
    relatedConcepts: ['gpt', 'multimodal-ai', 'reasoning'],
    sources: [{ id: 'gpt4-tech', type: 'article', title: 'GPT-4 Technical Report', credibility: 95 }]
  },
  {
    id: 'anthropic-claude',
    title: 'Claude Launches',
    description: 'Anthropic releases Claude, positioning AI safety at the forefront of model development.',
    date: '2023-03-14',
    impact: 'high',
    category: 'release',
    relatedExperts: ['dario-amodei'],
    relatedConcepts: ['constitutional-ai', 'ai-safety'],
    sources: [{ id: 'claude-launch', type: 'article', title: 'Claude Announcement', credibility: 90 }]
  },
  {
    id: 'gemini-2023',
    title: 'Google Announces Gemini',
    description: 'Google DeepMind announces Gemini, their most capable AI model, designed to be multimodal from the ground up.',
    date: '2023-12-06',
    impact: 'high',
    category: 'release',
    relatedExperts: ['demis-hassabis'],
    relatedConcepts: ['multimodal-ai'],
    sources: [{ id: 'gemini-announce', type: 'article', title: 'Gemini Announcement', credibility: 90 }]
  },
  {
    id: 'hinton-resigns',
    title: 'Hinton Leaves Google, Warns of AI Risks',
    description: 'Geoffrey Hinton resigns from Google to speak freely about AI dangers, calling his life\'s work a regret.',
    date: '2023-05-01',
    impact: 'high',
    category: 'event',
    relatedExperts: ['geoffrey-hinton'],
    relatedConcepts: ['ai-safety', 'existential-risk'],
    sources: [{ id: 'hinton-nyt', type: 'article', title: 'Hinton Leaves Google', credibility: 95 }]
  },
  {
    id: 'openai-drama',
    title: 'OpenAI Leadership Crisis',
    description: 'Sam Altman fired then rehired within days. Boardroom drama reveals tensions over AI safety vs speed.',
    date: '2023-11-17',
    impact: 'high',
    category: 'event',
    relatedExperts: ['sam-altman', 'ilya-sutskever'],
    relatedConcepts: ['ai-safety', 'governance'],
    sources: [{ id: 'openai-drama-news', type: 'article', title: 'OpenAI Leadership News', credibility: 85 }]
  },
  
  // Agent Era (2023-2026)
  {
    id: 'auto-gpt',
    title: 'AutoGPT Goes Viral',
    description: 'Open-source autonomous agent AutoGPT captures imagination of developers worldwide.',
    date: '2023-03-30',
    impact: 'medium',
    category: 'release',
    relatedExperts: [],
    relatedConcepts: ['ai-agents', 'autonomous-systems'],
    sources: [{ id: 'autogpt-github', type: 'article', title: 'AutoGPT GitHub', credibility: 80 }]
  },
  {
    id: 'gpts-store',
    title: 'OpenAI Launches GPTs Store',
    description: 'Custom GPT agents can now be created and shared, democratizing AI agent development.',
    date: '2023-11-06',
    impact: 'high',
    category: 'release',
    relatedExperts: ['sam-altman'],
    relatedConcepts: ['ai-agents', 'custom-gpts'],
    sources: [{ id: 'gpts-announce', type: 'article', title: 'GPTs Announcement', credibility: 90 }]
  },
  {
    id: 'sora-2024',
    title: 'Sora Generates Video',
    description: 'OpenAI reveals Sora, capable of generating realistic video from text descriptions.',
    date: '2024-02-15',
    impact: 'high',
    category: 'release',
    relatedExperts: ['sam-altman'],
    relatedConcepts: ['video-generation', 'world-models'],
    sources: [{ id: 'sora-tech', type: 'article', title: 'Sora Technical Report', credibility: 90 }]
  },
  {
    id: 'claude-3-opus',
    title: 'Claude 3 Opus Released',
    description: 'Anthropic releases Claude 3 Opus, showing competitive or superior performance to GPT-4.',
    date: '2024-03-04',
    impact: 'high',
    category: 'release',
    relatedExperts: ['dario-amodei'],
    relatedConcepts: ['constitutional-ai'],
    sources: [{ id: 'claude3-announce', type: 'article', title: 'Claude 3 Announcement', credibility: 90 }]
  },
  {
    id: 'gpt4o-2024',
    title: 'GPT-4o: Omni-Modal AI',
    description: 'OpenAI releases GPT-4o with real-time voice, vision, and text capabilities in a single model.',
    date: '2024-05-13',
    impact: 'transformative',
    category: 'release',
    relatedExperts: ['sam-altman'],
    relatedConcepts: ['multimodal-ai', 'real-time-ai'],
    sources: [{ id: 'gpt4o-announce', type: 'article', title: 'GPT-4o Announcement', credibility: 95 }]
  },
  {
    id: 'o1-reasoning',
    title: 'OpenAI o1: Chain-of-Thought Reasoning',
    description: 'OpenAI releases o1, demonstrating dramatically improved reasoning through extended thinking time.',
    date: '2024-09-12',
    impact: 'transformative',
    category: 'release',
    relatedExperts: ['sam-altman'],
    relatedConcepts: ['reasoning', 'chain-of-thought'],
    sources: [{ id: 'o1-announce', type: 'article', title: 'OpenAI o1 Announcement', credibility: 95 }]
  },
  
  // Multi-Agent Era (2024-2028)
  {
    id: 'multi-agent-emergence',
    title: 'Multi-Agent Systems Emerge',
    description: 'Sophisticated multi-agent frameworks begin solving complex real-world problems through collaboration.',
    date: '2024-06-01',
    impact: 'high',
    category: 'breakthrough',
    relatedExperts: [],
    relatedConcepts: ['multi-agent-systems', 'emergence'],
    sources: [{ id: 'multi-agent-research', type: 'paper', title: 'Multi-Agent AI Systems Research', credibility: 85 }]
  },
  // 2025 – Real milestones
  {
    id: 'o3-arc-agi',
    title: 'OpenAI o3 Achieves Near-Perfect ARC-AGI',
    description: 'OpenAI\'s o3 model scores 87.5% on the ARC-AGI benchmark, a test designed to be hard for AI and easy for humans — widely seen as a significant step toward general reasoning.',
    date: '2024-12-20',
    impact: 'transformative',
    category: 'breakthrough',
    phase: 'agents',
    relatedExperts: ['sam-altman'],
    relatedConcepts: ['reasoning', 'agi'],
    significance: 'ARC-AGI was created specifically to measure general fluid intelligence. Previous state-of-the-art was ~34%. o3 reaching 87.5% shocked the research community.',
    tags: ['ARC-AGI', 'o3', 'reasoning', 'OpenAI'],
    verified: true,
    sources: [
      { id: 'arc-agi-o3', type: 'article', title: 'OpenAI o3 ARC-AGI Results', url: 'https://arcprize.org/blog/oai-o3-pub-breakthrough', credibility: 95 }
    ]
  },
  {
    id: 'deepseek-r1',
    title: 'DeepSeek R1: Open-Source Reasoning Revolution',
    description: 'Chinese lab DeepSeek releases R1, a fully open-source reasoning model that matches or exceeds o1 on many benchmarks at a fraction of the cost — triggering a major US market sell-off and policy debate.',
    date: '2025-01-20',
    impact: 'transformative',
    category: 'release',
    phase: 'agents',
    relatedExperts: ['yann-lecun'],
    relatedConcepts: ['reasoning', 'open-source-ai', 'agi'],
    significance: 'DeepSeek R1 demonstrated that frontier-level reasoning could be achieved at dramatically lower training cost (~$6M vs billions), upending assumptions about moats in AI development.',
    tags: ['DeepSeek', 'open-source', 'reasoning', 'China'],
    verified: true,
    sources: [
      { id: 'deepseek-r1-paper', type: 'paper', title: 'DeepSeek-R1: Incentivizing Reasoning Capability in LLMs via Reinforcement Learning', url: 'https://arxiv.org/abs/2501.12948', credibility: 95 }
    ]
  },
  {
    id: 'operator-launch',
    title: 'OpenAI Operator: AI Agents Take Actions on the Web',
    description: 'OpenAI launches Operator, an AI agent that can browse the web, fill forms, and complete real tasks autonomously on behalf of users.',
    date: '2025-01-23',
    impact: 'high',
    category: 'release',
    phase: 'agents',
    relatedExperts: ['sam-altman'],
    relatedConcepts: ['ai-agents', 'computer-use'],
    significance: 'Operator marked the first mass-market deployment of a general-purpose web agent, accelerating the shift from AI as a chatbot to AI as an autonomous actor.',
    tags: ['Operator', 'agents', 'OpenAI', 'computer-use'],
    verified: true,
    sources: [
      { id: 'operator-launch-src', type: 'article', title: 'Introducing Operator', url: 'https://openai.com/index/introducing-operator/', credibility: 95 }
    ]
  },
  {
    id: 'claude-37-sonnet',
    title: 'Claude 3.7 Sonnet: Extended Thinking',
    description: 'Anthropic releases Claude 3.7 Sonnet with "extended thinking" — a hybrid model that can reason at length before answering, and tops SWE-bench for software engineering tasks at 62.3%.',
    date: '2025-02-24',
    impact: 'high',
    category: 'release',
    phase: 'agents',
    relatedExperts: ['dario-amodei'],
    relatedConcepts: ['reasoning', 'chain-of-thought', 'alignment'],
    significance: 'First model to natively blend fast and slow thinking. SWE-bench score suggests AI is becoming capable at real-world engineering tasks.',
    tags: ['Claude', 'Anthropic', 'reasoning', 'thinking'],
    verified: true,
    sources: [
      { id: 'claude-37-src', type: 'article', title: 'Claude 3.7 Sonnet and Claude Code', url: 'https://www.anthropic.com/news/claude-3-7-sonnet', credibility: 95 }
    ]
  },
  {
    id: 'gpt-4o-image-gen',
    title: 'GPT-4o Native Image Generation Goes Viral',
    description: 'OpenAI ships native image generation in GPT-4o, enabling unprecedented prompt-following and document-style images. Usage surges 10x and triggers Studio Ghibli–style trend.',
    date: '2025-03-25',
    impact: 'high',
    category: 'release',
    phase: 'llm',
    relatedExperts: ['sam-altman'],
    relatedConcepts: ['multimodal', 'generative-ai'],
    significance: 'Demonstrated the mass-market power of converging text + image in a single model. Sparked renewed global policy discussions on copyright and deepfakes.',
    tags: ['GPT-4o', 'image-generation', 'multimodal', 'viral'],
    verified: true,
    sources: [
      { id: 'gpt4o-img-src', type: 'article', title: 'Image generation in ChatGPT', url: 'https://openai.com/index/image-generation-in-chatgpt/', credibility: 95 }
    ]
  },
  {
    id: 'gemini-25-pro',
    title: 'Gemini 2.5 Pro: New Reasoning SOTA',
    description: 'Google DeepMind releases Gemini 2.5 Pro, topping LMArena and major coding/math benchmarks with a 1M-token context window and advanced reasoning.',
    date: '2025-04-09',
    impact: 'high',
    category: 'release',
    phase: 'agents',
    relatedExperts: ['demis-hassabis'],
    relatedConcepts: ['reasoning', 'long-context', 'agi'],
    significance: 'Gemini 2.5 Pro briefly became the highest-rated model by human preference, signaling Google\'s return to competitive frontier AI.',
    tags: ['Gemini', 'Google', 'reasoning', 'long-context'],
    verified: true,
    sources: [
      { id: 'gemini-25-src', type: 'article', title: 'Gemini 2.5: Our most intelligent model', url: 'https://blog.google/technology/google-deepmind/gemini-model-updates-february-2025/', credibility: 95 }
    ]
  },
  {
    id: 'gpt-4_1',
    title: 'GPT-4.1: 1M Context, Frontier Coding',
    description: 'OpenAI releases GPT-4.1 with a 1-million token context window and frontier-level software engineering performance, alongside GPT-4.1 mini and nano variants.',
    date: '2025-04-14',
    impact: 'high',
    category: 'release',
    phase: 'agents',
    relatedExperts: ['sam-altman'],
    relatedConcepts: ['long-context', 'software-engineering'],
    significance: 'GPT-4.1\'s SWE-bench score of 54.6% and million-token context unlocks true long-document reasoning for enterprise use cases.',
    tags: ['GPT-4.1', 'OpenAI', 'long-context', 'coding'],
    verified: true,
    sources: [
      { id: 'gpt41-src', type: 'article', title: 'GPT-4.1 in the API', url: 'https://openai.com/index/gpt-4-1/', credibility: 95 }
    ]
  },
  {
    id: 'ai-coding-mainstream',
    title: 'AI Coding Agents Go Mainstream',
    description: 'Tools like GitHub Copilot Workspace, Cursor, Devin, and Claude Code become standard in software development teams. Surveys show >50% of developers use AI coding tools daily.',
    date: '2025-05-01',
    impact: 'high',
    category: 'event',
    phase: 'agents',
    relatedExperts: ['sam-altman', 'dario-amodei'],
    relatedConcepts: ['ai-agents', 'software-engineering', 'automation'],
    significance: 'AI coding tools crossed the adoption tipping point in 2025, with many developers reporting 30-50% productivity increases and startups able to build faster with smaller teams.',
    tags: ['coding', 'Cursor', 'Devin', 'GitHub Copilot', 'adoption'],
    verified: true,
    sources: [
      { id: 'coding-mainstream-src', type: 'article', title: 'Stack Overflow Developer Survey 2025', url: 'https://survey.stackoverflow.co/2025/', credibility: 90 }
    ]
  },
  {
    id: 'claude-4-opus',
    title: 'Claude 4 & Opus 4.5: Agentic Frontier',
    description: 'Anthropic releases Claude Opus 4.5, Claude Sonnet 4, and Claude Haiku 4 — purpose-built for agentic tasks with memory, tool use, and multi-turn problem solving.',
    date: '2025-07-09',
    impact: 'high',
    category: 'release',
    phase: 'agents',
    relatedExperts: ['dario-amodei'],
    relatedConcepts: ['ai-agents', 'alignment', 'agi'],
    significance: 'Claude 4 family marked Anthropic\'s explicit shift from "helpful assistant" to "autonomous AI coworker," with significantly improved long-horizon task completion.',
    tags: ['Claude', 'Anthropic', 'agents', 'Opus'],
    verified: true,
    sources: [
      { id: 'claude4-src', type: 'article', title: 'Claude 4 model family', url: 'https://www.anthropic.com/news/claude-4', credibility: 95 }
    ]
  },
  {
    id: 'agent-workforces',
    title: 'Enterprise AI Agent Workforces',
    description: 'Major enterprises — from Goldman Sachs to Salesforce — deploy autonomous AI agent teams handling compliance, customer service, and software delivery pipelines end-to-end.',
    date: '2025-09-01',
    impact: 'high',
    category: 'event',
    phase: 'multi-agent',
    relatedExperts: ['sam-altman', 'andrew-ng'],
    relatedConcepts: ['multi-agent-systems', 'automation', 'economy'],
    significance: 'The shift from AI-assisted workers to AI-as-worker begins in earnest. Economists start modelling structural labor market effects for white-collar roles.',
    tags: ['enterprise', 'agents', 'workforce', 'automation'],
    verified: false,
    sources: [
      { id: 'agent-workforce-pred', type: 'article', title: 'Enterprise AI Agent Deployments 2025', credibility: 75 }
    ]
  },
  
  // AGI Predictions
  {
    id: 'agi-threshold',
    title: 'AGI Threshold Crossed?',
    description: 'Consensus begins to form around AI systems achieving general intelligence capabilities.',
    date: '2027-01-01',
    impact: 'transformative',
    category: 'prediction',
    relatedExperts: ['sam-altman', 'demis-hassabis', 'geoffrey-hinton'],
    relatedConcepts: ['agi', 'general-intelligence'],
    sources: [{ id: 'agi-prediction', type: 'article', title: 'Expert AGI Predictions', credibility: 60 }]
  },
  
  // ASI Predictions
  {
    id: 'intelligence-explosion',
    title: 'Intelligence Explosion',
    description: 'Self-improving AI systems begin rapid capability gains beyond human comprehension.',
    date: '2030-01-01',
    impact: 'transformative',
    category: 'prediction',
    relatedExperts: ['ilya-sutskever', 'ray-kurzweil'],
    relatedConcepts: ['asi', 'intelligence-explosion', 'singularity'],
    sources: [{ id: 'singularity-pred', type: 'book', title: 'The Singularity Is Near', authors: ['Ray Kurzweil'], credibility: 50 }]
  }
];

// Get milestone by ID
export function getMilestoneById(id: string): Milestone | undefined {
  return milestones.find(m => m.id === id);
}

// Get milestones by year range
export function getMilestonesByYearRange(start: number, end: number): Milestone[] {
  return milestones.filter(m => {
    const year = new Date(m.date).getFullYear();
    return year >= start && year <= end;
  });
}

// Get milestones by category
export function getMilestonesByCategory(category: Milestone['category']): Milestone[] {
  return milestones.filter(m => m.category === category);
}

// Get upcoming milestones (predictions)
export function getPredictiveMilestones(): Milestone[] {
  const now = new Date();
  return milestones.filter(m => m.category === 'prediction' || new Date(m.date) > now);
}

// Get past milestones (history)
export function getHistoricalMilestones(): Milestone[] {
  const now = new Date();
  return milestones.filter(m => m.category !== 'prediction' && new Date(m.date) <= now);
}

// Group milestones by year
export function groupMilestonesByYear(): Record<number, Milestone[]> {
  const grouped: Record<number, Milestone[]> = {};
  
  milestones.forEach(m => {
    const year = new Date(m.date).getFullYear();
    if (!grouped[year]) grouped[year] = [];
    grouped[year].push(m);
  });
  
  return grouped;
}

// Get impact level color
export function getImpactColor(impact: Milestone['impact']): string {
  const colors = {
    low: '#6b7280',
    medium: '#f59e0b',
    high: '#ef4444',
    transformative: '#ec4899'
  };
  return colors[impact];
}

// Get category icon
export function getCategoryIcon(category: Milestone['category']): string {
  const icons = {
    breakthrough: 'Zap',
    release: 'Rocket',
    research: 'FlaskConical',
    event: 'Calendar',
    prediction: 'Crystal'
  };
  return icons[category];
}
