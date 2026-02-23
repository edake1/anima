module.exports = [
"[project]/src/lib/data/timeline.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// ==========================================
// SYNTHESIS - AI Evolution Timeline
// Timeline & Milestone Data
// ==========================================
__turbopack_context__.s([
    "getCategoryIcon",
    ()=>getCategoryIcon,
    "getHistoricalMilestones",
    ()=>getHistoricalMilestones,
    "getImpactColor",
    ()=>getImpactColor,
    "getMilestoneById",
    ()=>getMilestoneById,
    "getMilestonesByCategory",
    ()=>getMilestonesByCategory,
    "getMilestonesByYearRange",
    ()=>getMilestonesByYearRange,
    "getPredictiveMilestones",
    ()=>getPredictiveMilestones,
    "groupMilestonesByYear",
    ()=>groupMilestonesByYear,
    "milestones",
    ()=>milestones,
    "timelinePhases",
    ()=>timelinePhases
]);
const timelinePhases = [
    {
        id: 'llm',
        name: 'Large Language Models',
        shortName: 'LLMs',
        description: 'The era of large language models began with transformer architecture and has rapidly evolved to near-human reasoning capabilities.',
        startYear: 2017,
        endYear: 2024,
        color: '#6366f1',
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
        color: '#8b5cf6',
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
        color: '#a855f7',
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
        color: '#ec4899',
        icon: 'Brain',
        milestones: []
    },
    {
        id: 'asi',
        name: 'Artificial Superintelligence',
        shortName: 'ASI',
        description: 'Intelligence far surpassing the smartest humans in all domains. The post-human era begins.',
        startYear: 2028,
        color: '#f43f5e',
        icon: 'Sparkles',
        milestones: []
    }
];
const milestones = [
    // Foundation Era (Pre-2017)
    {
        id: 'perceptron-1958',
        title: 'The Perceptron',
        description: 'Frank Rosenblatt invents the perceptron, the first artificial neural network, laying groundwork for modern AI.',
        date: '1958-01-01',
        impact: 'transformative',
        category: 'research',
        relatedExperts: [],
        relatedConcepts: [
            'neural-networks'
        ],
        sources: [
            {
                id: 'perceptron-paper',
                type: 'paper',
                title: 'The Perceptron',
                authors: [
                    'Frank Rosenblatt'
                ],
                publishDate: '1958-01-01',
                credibility: 95
            }
        ]
    },
    {
        id: 'backprop-1986',
        title: 'Backpropagation Popularized',
        description: 'Rumelhart, Hinton, and Williams popularize backpropagation, enabling training of multi-layer neural networks.',
        date: '1986-01-01',
        impact: 'transformative',
        category: 'research',
        relatedExperts: [
            'geoffrey-hinton'
        ],
        relatedConcepts: [
            'neural-networks',
            'deep-learning'
        ],
        sources: [
            {
                id: 'backprop-paper',
                type: 'paper',
                title: 'Learning representations by back-propagating errors',
                authors: [
                    'Rumelhart',
                    'Hinton',
                    'Williams'
                ],
                publishDate: '1986-01-01',
                credibility: 95
            }
        ]
    },
    {
        id: 'imagenet-2012',
        title: 'AlexNet Wins ImageNet',
        description: 'Deep learning breakthrough as AlexNet crushes ImageNet competition, igniting the modern AI renaissance.',
        date: '2012-09-01',
        impact: 'transformative',
        category: 'breakthrough',
        relatedExperts: [
            'geoffrey-hinton',
            'yann-lecun',
            'ilya-sutskever'
        ],
        relatedConcepts: [
            'deep-learning',
            'computer-vision'
        ],
        sources: [
            {
                id: 'alexnet-paper',
                type: 'paper',
                title: 'ImageNet Classification with Deep CNNs',
                authors: [
                    'Krizhevsky',
                    'Sutskever',
                    'Hinton'
                ],
                publishDate: '2012-09-01',
                credibility: 95
            }
        ]
    },
    {
        id: 'deepmind-founded',
        title: 'DeepMind Founded',
        description: 'Demis Hassabis, Shane Legg, and Mustafa Suleyman found DeepMind, later acquired by Google.',
        date: '2010-11-01',
        impact: 'high',
        category: 'event',
        relatedExperts: [
            'demis-hassabis'
        ],
        relatedConcepts: [
            'reinforcement-learning'
        ],
        sources: [
            {
                id: 'deepmind-about',
                type: 'article',
                title: 'DeepMind History',
                credibility: 95
            }
        ]
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
        relatedConcepts: [
            'transformers',
            'attention-mechanism'
        ],
        sources: [
            {
                id: 'transformer-paper',
                type: 'paper',
                title: 'Attention Is All You Need',
                authors: [
                    'Vaswani et al.'
                ],
                publishDate: '2017-06-12',
                credibility: 99
            }
        ]
    },
    {
        id: 'gpt1-2018',
        title: 'GPT-1 Released',
        description: 'OpenAI releases the first GPT model, demonstrating the power of unsupervised pre-training.',
        date: '2018-06-11',
        impact: 'high',
        category: 'release',
        relatedExperts: [
            'ilya-sutskever'
        ],
        relatedConcepts: [
            'gpt',
            'pre-training'
        ],
        sources: [
            {
                id: 'gpt1-paper',
                type: 'paper',
                title: 'Improving Language Understanding by Generative Pre-Training',
                authors: [
                    'Radford et al.'
                ],
                publishDate: '2018-06-11',
                credibility: 95
            }
        ]
    },
    {
        id: 'bert-2018',
        title: 'BERT Released',
        description: 'Google introduces BERT, pioneering bidirectional pre-training for language understanding.',
        date: '2018-10-11',
        impact: 'high',
        category: 'release',
        relatedExperts: [],
        relatedConcepts: [
            'transformers',
            'pre-training'
        ],
        sources: [
            {
                id: 'bert-paper',
                type: 'paper',
                title: 'BERT: Pre-training of Deep Bidirectional Transformers',
                authors: [
                    'Devlin et al.'
                ],
                publishDate: '2018-10-11',
                credibility: 95
            }
        ]
    },
    {
        id: 'gpt2-2019',
        title: 'GPT-2 "Too Dangerous to Release"',
        description: 'OpenAI initially withholds full GPT-2 due to concerns about misuse, sparking debate about AI openness.',
        date: '2019-02-14',
        impact: 'high',
        category: 'release',
        relatedExperts: [
            'sam-altman',
            'ilya-sutskever'
        ],
        relatedConcepts: [
            'gpt',
            'ai-safety'
        ],
        sources: [
            {
                id: 'gpt2-blog',
                type: 'article',
                title: 'Better Language Models and Their Implications',
                credibility: 95
            }
        ]
    },
    {
        id: 'alphago-2016',
        title: 'AlphaGo Defeats Lee Sedol',
        description: 'DeepMind\'s AlphaGo defeats world champion Go player, achieving a milestone thought decades away.',
        date: '2016-03-15',
        impact: 'transformative',
        category: 'event',
        relatedExperts: [
            'demis-hassabis'
        ],
        relatedConcepts: [
            'reinforcement-learning',
            'game-ai'
        ],
        sources: [
            {
                id: 'alphago-documentary',
                type: 'video',
                title: 'AlphaGo Documentary',
                credibility: 95
            }
        ]
    },
    {
        id: 'gpt3-2020',
        title: 'GPT-3 Demonstrates Emergent Abilities',
        description: 'GPT-3 shows remarkable few-shot learning and emergent capabilities not present in smaller models.',
        date: '2020-06-11',
        impact: 'transformative',
        category: 'release',
        relatedExperts: [
            'sam-altman',
            'dario-amodei',
            'ilya-sutskever'
        ],
        relatedConcepts: [
            'gpt',
            'emergence',
            'scaling-laws'
        ],
        sources: [
            {
                id: 'gpt3-paper',
                type: 'paper',
                title: 'Language Models are Few-Shot Learners',
                authors: [
                    'Brown et al.'
                ],
                publishDate: '2020-06-11',
                credibility: 95
            }
        ]
    },
    {
        id: 'codex-2021',
        title: 'GitHub Copilot Launches',
        description: 'OpenAI\'s Codex powers GitHub Copilot, bringing AI-assisted coding to millions of developers.',
        date: '2021-06-29',
        impact: 'high',
        category: 'release',
        relatedExperts: [
            'sam-altman'
        ],
        relatedConcepts: [
            'code-generation',
            'ai-tools'
        ],
        sources: [
            {
                id: 'copilot-announce',
                type: 'article',
                title: 'GitHub Copilot Announcement',
                credibility: 90
            }
        ]
    },
    {
        id: 'dalle-2022',
        title: 'DALL-E 2 Generates Art',
        description: 'OpenAI releases DALL-E 2, demonstrating AI\'s creative potential with stunning image generation.',
        date: '2022-04-06',
        impact: 'high',
        category: 'release',
        relatedExperts: [
            'sam-altman'
        ],
        relatedConcepts: [
            'multimodal-ai',
            'generative-ai'
        ],
        sources: [
            {
                id: 'dalle2-blog',
                type: 'article',
                title: 'DALL-E 2 Announcement',
                credibility: 90
            }
        ]
    },
    {
        id: 'chatgpt-2022',
        title: 'ChatGPT Launches',
        description: 'OpenAI releases ChatGPT. Within 5 days, 1 million users. The AI revolution goes mainstream.',
        date: '2022-11-30',
        impact: 'transformative',
        category: 'release',
        relatedExperts: [
            'sam-altman',
            'ilya-sutskever'
        ],
        relatedConcepts: [
            'gpt',
            'chatbots',
            'rlhf'
        ],
        sources: [
            {
                id: 'chatgpt-launch',
                type: 'article',
                title: 'ChatGPT Launch',
                credibility: 99
            }
        ]
    },
    {
        id: 'chatgpt-100m',
        title: 'ChatGPT Reaches 100M Users',
        description: 'Fastest-growing consumer application in history reaches 100 million users in 2 months.',
        date: '2023-01-31',
        impact: 'transformative',
        category: 'event',
        relatedExperts: [
            'sam-altman'
        ],
        relatedConcepts: [],
        sources: [
            {
                id: 'chatgpt-stats',
                type: 'article',
                title: 'ChatGPT User Statistics',
                credibility: 90
            }
        ]
    },
    {
        id: 'gpt4-2023',
        title: 'GPT-4 Released',
        description: 'OpenAI releases GPT-4, a multimodal model with dramatically improved reasoning and reliability.',
        date: '2023-03-14',
        impact: 'transformative',
        category: 'release',
        relatedExperts: [
            'sam-altman',
            'ilya-sutskever'
        ],
        relatedConcepts: [
            'gpt',
            'multimodal-ai',
            'reasoning'
        ],
        sources: [
            {
                id: 'gpt4-tech',
                type: 'article',
                title: 'GPT-4 Technical Report',
                credibility: 95
            }
        ]
    },
    {
        id: 'anthropic-claude',
        title: 'Claude Launches',
        description: 'Anthropic releases Claude, positioning AI safety at the forefront of model development.',
        date: '2023-03-14',
        impact: 'high',
        category: 'release',
        relatedExperts: [
            'dario-amodei'
        ],
        relatedConcepts: [
            'constitutional-ai',
            'ai-safety'
        ],
        sources: [
            {
                id: 'claude-launch',
                type: 'article',
                title: 'Claude Announcement',
                credibility: 90
            }
        ]
    },
    {
        id: 'gemini-2023',
        title: 'Google Announces Gemini',
        description: 'Google DeepMind announces Gemini, their most capable AI model, designed to be multimodal from the ground up.',
        date: '2023-12-06',
        impact: 'high',
        category: 'release',
        relatedExperts: [
            'demis-hassabis'
        ],
        relatedConcepts: [
            'multimodal-ai'
        ],
        sources: [
            {
                id: 'gemini-announce',
                type: 'article',
                title: 'Gemini Announcement',
                credibility: 90
            }
        ]
    },
    {
        id: 'hinton-resigns',
        title: 'Hinton Leaves Google, Warns of AI Risks',
        description: 'Geoffrey Hinton resigns from Google to speak freely about AI dangers, calling his life\'s work a regret.',
        date: '2023-05-01',
        impact: 'high',
        category: 'event',
        relatedExperts: [
            'geoffrey-hinton'
        ],
        relatedConcepts: [
            'ai-safety',
            'existential-risk'
        ],
        sources: [
            {
                id: 'hinton-nyt',
                type: 'article',
                title: 'Hinton Leaves Google',
                credibility: 95
            }
        ]
    },
    {
        id: 'openai-drama',
        title: 'OpenAI Leadership Crisis',
        description: 'Sam Altman fired then rehired within days. Boardroom drama reveals tensions over AI safety vs speed.',
        date: '2023-11-17',
        impact: 'high',
        category: 'event',
        relatedExperts: [
            'sam-altman',
            'ilya-sutskever'
        ],
        relatedConcepts: [
            'ai-safety',
            'governance'
        ],
        sources: [
            {
                id: 'openai-drama-news',
                type: 'article',
                title: 'OpenAI Leadership News',
                credibility: 85
            }
        ]
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
        relatedConcepts: [
            'ai-agents',
            'autonomous-systems'
        ],
        sources: [
            {
                id: 'autogpt-github',
                type: 'article',
                title: 'AutoGPT GitHub',
                credibility: 80
            }
        ]
    },
    {
        id: 'gpts-store',
        title: 'OpenAI Launches GPTs Store',
        description: 'Custom GPT agents can now be created and shared, democratizing AI agent development.',
        date: '2023-11-06',
        impact: 'high',
        category: 'release',
        relatedExperts: [
            'sam-altman'
        ],
        relatedConcepts: [
            'ai-agents',
            'custom-gpts'
        ],
        sources: [
            {
                id: 'gpts-announce',
                type: 'article',
                title: 'GPTs Announcement',
                credibility: 90
            }
        ]
    },
    {
        id: 'sora-2024',
        title: 'Sora Generates Video',
        description: 'OpenAI reveals Sora, capable of generating realistic video from text descriptions.',
        date: '2024-02-15',
        impact: 'high',
        category: 'release',
        relatedExperts: [
            'sam-altman'
        ],
        relatedConcepts: [
            'video-generation',
            'world-models'
        ],
        sources: [
            {
                id: 'sora-tech',
                type: 'article',
                title: 'Sora Technical Report',
                credibility: 90
            }
        ]
    },
    {
        id: 'claude-3-opus',
        title: 'Claude 3 Opus Released',
        description: 'Anthropic releases Claude 3 Opus, showing competitive or superior performance to GPT-4.',
        date: '2024-03-04',
        impact: 'high',
        category: 'release',
        relatedExperts: [
            'dario-amodei'
        ],
        relatedConcepts: [
            'constitutional-ai'
        ],
        sources: [
            {
                id: 'claude3-announce',
                type: 'article',
                title: 'Claude 3 Announcement',
                credibility: 90
            }
        ]
    },
    {
        id: 'gpt4o-2024',
        title: 'GPT-4o: Omni-Modal AI',
        description: 'OpenAI releases GPT-4o with real-time voice, vision, and text capabilities in a single model.',
        date: '2024-05-13',
        impact: 'transformative',
        category: 'release',
        relatedExperts: [
            'sam-altman'
        ],
        relatedConcepts: [
            'multimodal-ai',
            'real-time-ai'
        ],
        sources: [
            {
                id: 'gpt4o-announce',
                type: 'article',
                title: 'GPT-4o Announcement',
                credibility: 95
            }
        ]
    },
    {
        id: 'o1-reasoning',
        title: 'OpenAI o1: Chain-of-Thought Reasoning',
        description: 'OpenAI releases o1, demonstrating dramatically improved reasoning through extended thinking time.',
        date: '2024-09-12',
        impact: 'transformative',
        category: 'release',
        relatedExperts: [
            'sam-altman'
        ],
        relatedConcepts: [
            'reasoning',
            'chain-of-thought'
        ],
        sources: [
            {
                id: 'o1-announce',
                type: 'article',
                title: 'OpenAI o1 Announcement',
                credibility: 95
            }
        ]
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
        relatedConcepts: [
            'multi-agent-systems',
            'emergence'
        ],
        sources: [
            {
                id: 'multi-agent-research',
                type: 'paper',
                title: 'Multi-Agent AI Systems Research',
                credibility: 85
            }
        ]
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
        relatedExperts: [
            'sam-altman'
        ],
        relatedConcepts: [
            'reasoning',
            'agi'
        ],
        significance: 'ARC-AGI was created specifically to measure general fluid intelligence. Previous state-of-the-art was ~34%. o3 reaching 87.5% shocked the research community.',
        tags: [
            'ARC-AGI',
            'o3',
            'reasoning',
            'OpenAI'
        ],
        verified: true,
        sources: [
            {
                id: 'arc-agi-o3',
                type: 'article',
                title: 'OpenAI o3 ARC-AGI Results',
                url: 'https://arcprize.org/blog/oai-o3-pub-breakthrough',
                credibility: 95
            }
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
        relatedExperts: [
            'yann-lecun'
        ],
        relatedConcepts: [
            'reasoning',
            'open-source-ai',
            'agi'
        ],
        significance: 'DeepSeek R1 demonstrated that frontier-level reasoning could be achieved at dramatically lower training cost (~$6M vs billions), upending assumptions about moats in AI development.',
        tags: [
            'DeepSeek',
            'open-source',
            'reasoning',
            'China'
        ],
        verified: true,
        sources: [
            {
                id: 'deepseek-r1-paper',
                type: 'paper',
                title: 'DeepSeek-R1: Incentivizing Reasoning Capability in LLMs via Reinforcement Learning',
                url: 'https://arxiv.org/abs/2501.12948',
                credibility: 95
            }
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
        relatedExperts: [
            'sam-altman'
        ],
        relatedConcepts: [
            'ai-agents',
            'computer-use'
        ],
        significance: 'Operator marked the first mass-market deployment of a general-purpose web agent, accelerating the shift from AI as a chatbot to AI as an autonomous actor.',
        tags: [
            'Operator',
            'agents',
            'OpenAI',
            'computer-use'
        ],
        verified: true,
        sources: [
            {
                id: 'operator-launch-src',
                type: 'article',
                title: 'Introducing Operator',
                url: 'https://openai.com/index/introducing-operator/',
                credibility: 95
            }
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
        relatedExperts: [
            'dario-amodei'
        ],
        relatedConcepts: [
            'reasoning',
            'chain-of-thought',
            'alignment'
        ],
        significance: 'First model to natively blend fast and slow thinking. SWE-bench score suggests AI is becoming capable at real-world engineering tasks.',
        tags: [
            'Claude',
            'Anthropic',
            'reasoning',
            'thinking'
        ],
        verified: true,
        sources: [
            {
                id: 'claude-37-src',
                type: 'article',
                title: 'Claude 3.7 Sonnet and Claude Code',
                url: 'https://www.anthropic.com/news/claude-3-7-sonnet',
                credibility: 95
            }
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
        relatedExperts: [
            'sam-altman'
        ],
        relatedConcepts: [
            'multimodal',
            'generative-ai'
        ],
        significance: 'Demonstrated the mass-market power of converging text + image in a single model. Sparked renewed global policy discussions on copyright and deepfakes.',
        tags: [
            'GPT-4o',
            'image-generation',
            'multimodal',
            'viral'
        ],
        verified: true,
        sources: [
            {
                id: 'gpt4o-img-src',
                type: 'article',
                title: 'Image generation in ChatGPT',
                url: 'https://openai.com/index/image-generation-in-chatgpt/',
                credibility: 95
            }
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
        relatedExperts: [
            'demis-hassabis'
        ],
        relatedConcepts: [
            'reasoning',
            'long-context',
            'agi'
        ],
        significance: 'Gemini 2.5 Pro briefly became the highest-rated model by human preference, signaling Google\'s return to competitive frontier AI.',
        tags: [
            'Gemini',
            'Google',
            'reasoning',
            'long-context'
        ],
        verified: true,
        sources: [
            {
                id: 'gemini-25-src',
                type: 'article',
                title: 'Gemini 2.5: Our most intelligent model',
                url: 'https://blog.google/technology/google-deepmind/gemini-model-updates-february-2025/',
                credibility: 95
            }
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
        relatedExperts: [
            'sam-altman'
        ],
        relatedConcepts: [
            'long-context',
            'software-engineering'
        ],
        significance: 'GPT-4.1\'s SWE-bench score of 54.6% and million-token context unlocks true long-document reasoning for enterprise use cases.',
        tags: [
            'GPT-4.1',
            'OpenAI',
            'long-context',
            'coding'
        ],
        verified: true,
        sources: [
            {
                id: 'gpt41-src',
                type: 'article',
                title: 'GPT-4.1 in the API',
                url: 'https://openai.com/index/gpt-4-1/',
                credibility: 95
            }
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
        relatedExperts: [
            'sam-altman',
            'dario-amodei'
        ],
        relatedConcepts: [
            'ai-agents',
            'software-engineering',
            'automation'
        ],
        significance: 'AI coding tools crossed the adoption tipping point in 2025, with many developers reporting 30-50% productivity increases and startups able to build faster with smaller teams.',
        tags: [
            'coding',
            'Cursor',
            'Devin',
            'GitHub Copilot',
            'adoption'
        ],
        verified: true,
        sources: [
            {
                id: 'coding-mainstream-src',
                type: 'article',
                title: 'Stack Overflow Developer Survey 2025',
                url: 'https://survey.stackoverflow.co/2025/',
                credibility: 90
            }
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
        relatedExperts: [
            'dario-amodei'
        ],
        relatedConcepts: [
            'ai-agents',
            'alignment',
            'agi'
        ],
        significance: 'Claude 4 family marked Anthropic\'s explicit shift from "helpful assistant" to "autonomous AI coworker," with significantly improved long-horizon task completion.',
        tags: [
            'Claude',
            'Anthropic',
            'agents',
            'Opus'
        ],
        verified: true,
        sources: [
            {
                id: 'claude4-src',
                type: 'article',
                title: 'Claude 4 model family',
                url: 'https://www.anthropic.com/news/claude-4',
                credibility: 95
            }
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
        relatedExperts: [
            'sam-altman',
            'andrew-ng'
        ],
        relatedConcepts: [
            'multi-agent-systems',
            'automation',
            'economy'
        ],
        significance: 'The shift from AI-assisted workers to AI-as-worker begins in earnest. Economists start modelling structural labor market effects for white-collar roles.',
        tags: [
            'enterprise',
            'agents',
            'workforce',
            'automation'
        ],
        verified: false,
        sources: [
            {
                id: 'agent-workforce-pred',
                type: 'article',
                title: 'Enterprise AI Agent Deployments 2025',
                credibility: 75
            }
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
        relatedExperts: [
            'sam-altman',
            'demis-hassabis',
            'geoffrey-hinton'
        ],
        relatedConcepts: [
            'agi',
            'general-intelligence'
        ],
        sources: [
            {
                id: 'agi-prediction',
                type: 'article',
                title: 'Expert AGI Predictions',
                credibility: 60
            }
        ]
    },
    // ASI Predictions
    {
        id: 'intelligence-explosion',
        title: 'Intelligence Explosion',
        description: 'Self-improving AI systems begin rapid capability gains beyond human comprehension.',
        date: '2030-01-01',
        impact: 'transformative',
        category: 'prediction',
        relatedExperts: [
            'ilya-sutskever',
            'ray-kurzweil'
        ],
        relatedConcepts: [
            'asi',
            'intelligence-explosion',
            'singularity'
        ],
        sources: [
            {
                id: 'singularity-pred',
                type: 'book',
                title: 'The Singularity Is Near',
                authors: [
                    'Ray Kurzweil'
                ],
                credibility: 50
            }
        ]
    }
];
function getMilestoneById(id) {
    return milestones.find((m)=>m.id === id);
}
function getMilestonesByYearRange(start, end) {
    return milestones.filter((m)=>{
        const year = new Date(m.date).getFullYear();
        return year >= start && year <= end;
    });
}
function getMilestonesByCategory(category) {
    return milestones.filter((m)=>m.category === category);
}
function getPredictiveMilestones() {
    const now = new Date();
    return milestones.filter((m)=>m.category === 'prediction' || new Date(m.date) > now);
}
function getHistoricalMilestones() {
    const now = new Date();
    return milestones.filter((m)=>m.category !== 'prediction' && new Date(m.date) <= now);
}
function groupMilestonesByYear() {
    const grouped = {};
    milestones.forEach((m)=>{
        const year = new Date(m.date).getFullYear();
        if (!grouped[year]) grouped[year] = [];
        grouped[year].push(m);
    });
    return grouped;
}
function getImpactColor(impact) {
    const colors = {
        low: '#6b7280',
        medium: '#f59e0b',
        high: '#ef4444',
        transformative: '#ec4899'
    };
    return colors[impact];
}
function getCategoryIcon(category) {
    const icons = {
        breakthrough: 'Zap',
        release: 'Rocket',
        research: 'FlaskConical',
        event: 'Calendar',
        prediction: 'Crystal'
    };
    return icons[category];
}
}),
"[project]/src/components/ui/input.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Input",
    ()=>Input
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/utils.ts [app-ssr] (ecmascript)");
;
;
function Input({ className, type, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
        type: type,
        "data-slot": "input",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("file:text-foreground placeholder:text-muted-foreground selection:bg-primary selection:text-primary-foreground dark:bg-input/30 border-input flex h-9 w-full min-w-0 rounded-md border bg-transparent px-3 py-1 text-base shadow-xs transition-[color,box-shadow] outline-none file:inline-flex file:h-7 file:border-0 file:bg-transparent file:text-sm file:font-medium disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 md:text-sm", "focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px]", "aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/ui/input.tsx",
        lineNumber: 7,
        columnNumber: 5
    }, this);
}
;
}),
"[project]/src/components/ui/badge.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Badge",
    ()=>Badge,
    "badgeVariants",
    ()=>badgeVariants
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$slot$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@radix-ui/react-slot/dist/index.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$class$2d$variance$2d$authority$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/class-variance-authority/dist/index.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/utils.ts [app-ssr] (ecmascript)");
;
;
;
;
const badgeVariants = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$class$2d$variance$2d$authority$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cva"])("inline-flex items-center justify-center rounded-md border px-2 py-0.5 text-xs font-medium w-fit whitespace-nowrap shrink-0 [&>svg]:size-3 gap-1 [&>svg]:pointer-events-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive transition-[color,box-shadow] overflow-hidden", {
    variants: {
        variant: {
            default: "border-transparent bg-primary text-primary-foreground [a&]:hover:bg-primary/90",
            secondary: "border-transparent bg-secondary text-secondary-foreground [a&]:hover:bg-secondary/90",
            destructive: "border-transparent bg-destructive text-white [a&]:hover:bg-destructive/90 focus-visible:ring-destructive/20 dark:focus-visible:ring-destructive/40 dark:bg-destructive/60",
            outline: "text-foreground [a&]:hover:bg-accent [a&]:hover:text-accent-foreground"
        }
    },
    defaultVariants: {
        variant: "default"
    }
});
function Badge({ className, variant, asChild = false, ...props }) {
    const Comp = asChild ? __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$slot$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Slot"] : "span";
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(Comp, {
        "data-slot": "badge",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])(badgeVariants({
            variant
        }), className),
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/ui/badge.tsx",
        lineNumber: 38,
        columnNumber: 5
    }, this);
}
;
}),
"[project]/src/app/timeline/page.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>TimelinePage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$clock$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Clock$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/clock.js [app-ssr] (ecmascript) <export default as Clock>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$zap$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Zap$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/zap.js [app-ssr] (ecmascript) <export default as Zap>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$rocket$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Rocket$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/rocket.js [app-ssr] (ecmascript) <export default as Rocket>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$calendar$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Calendar$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/calendar.js [app-ssr] (ecmascript) <export default as Calendar>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$brain$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Brain$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/brain.js [app-ssr] (ecmascript) <export default as Brain>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$sparkles$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Sparkles$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/sparkles.js [app-ssr] (ecmascript) <export default as Sparkles>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$external$2d$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ExternalLink$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/external-link.js [app-ssr] (ecmascript) <export default as ExternalLink>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$search$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Search$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/search.js [app-ssr] (ecmascript) <export default as Search>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$right$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowRight$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/arrow-right.js [app-ssr] (ecmascript) <export default as ArrowRight>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$data$2f$timeline$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/data/timeline.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/button.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$input$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/input.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$badge$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/badge.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$stores$2f$useStore$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/stores/useStore.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/utils.ts [app-ssr] (ecmascript)");
'use client';
;
;
;
;
;
;
;
;
;
;
;
const categoryIcons = {
    breakthrough: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$zap$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Zap$3e$__["Zap"],
    release: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$rocket$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Rocket$3e$__["Rocket"],
    research: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$brain$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Brain$3e$__["Brain"],
    event: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$calendar$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Calendar$3e$__["Calendar"],
    prediction: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$sparkles$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Sparkles$3e$__["Sparkles"]
};
function TimelinePage() {
    const [selectedPhase, setSelectedPhase] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const [selectedMilestone, setSelectedMilestone] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const [searchQuery, setSearchQuery] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])('');
    const [filterCategory, setFilterCategory] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const { addVisitedNode } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$stores$2f$useStore$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useStore"])();
    const containerRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const activeMilestones = searchQuery || filterCategory ? __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$data$2f$timeline$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["milestones"].filter((m)=>{
        const matchesSearch = !searchQuery || m.title.toLowerCase().includes(searchQuery.toLowerCase()) || m.description.toLowerCase().includes(searchQuery.toLowerCase());
        const matchesCategory = !filterCategory || m.category === filterCategory;
        return matchesSearch && matchesCategory;
    }) : __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$data$2f$timeline$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["milestones"];
    const groupedMilestones = searchQuery || filterCategory ? activeMilestones.reduce((acc, m)=>{
        const year = new Date(m.date).getFullYear();
        if (!acc[year]) acc[year] = [];
        acc[year].push(m);
        return acc;
    }, {}) : (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$data$2f$timeline$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["groupMilestonesByYear"])();
    const sortedYears = Object.keys(groupedMilestones).sort((a, b)=>Number(a) - Number(b));
    const handleMilestoneClick = (milestone)=>{
        setSelectedMilestone(milestone);
        addVisitedNode(milestone.id);
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        ref: containerRef,
        className: "min-h-screen pt-24 pb-20",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                className: "relative px-4 mb-16",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "max-w-7xl mx-auto text-center",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
                            initial: {
                                opacity: 0,
                                y: 20
                            },
                            animate: {
                                opacity: 1,
                                y: 0
                            },
                            className: "inline-flex items-center gap-2 px-4 py-2 rounded-full glass-light mb-6",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$clock$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Clock$3e$__["Clock"], {
                                    className: "w-4 h-4 text-violet-400"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/timeline/page.tsx",
                                    lineNumber: 78,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "text-sm text-zinc-400",
                                    children: "Living Timeline"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/timeline/page.tsx",
                                    lineNumber: 79,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/timeline/page.tsx",
                            lineNumber: 73,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].h1, {
                            initial: {
                                opacity: 0,
                                y: 20
                            },
                            animate: {
                                opacity: 1,
                                y: 0
                            },
                            transition: {
                                delay: 0.1
                            },
                            className: "text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6",
                            children: [
                                "The River of ",
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "gradient-text",
                                    children: "AI Evolution"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/timeline/page.tsx",
                                    lineNumber: 88,
                                    columnNumber: 26
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/timeline/page.tsx",
                            lineNumber: 82,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].p, {
                            initial: {
                                opacity: 0,
                                y: 20
                            },
                            animate: {
                                opacity: 1,
                                y: 0
                            },
                            transition: {
                                delay: 0.2
                            },
                            className: "text-xl text-zinc-400 max-w-2xl mx-auto mb-8",
                            children: "Navigate through the key moments that shaped artificial intelligence — from the first neural networks to the threshold of AGI."
                        }, void 0, false, {
                            fileName: "[project]/src/app/timeline/page.tsx",
                            lineNumber: 91,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
                            initial: {
                                opacity: 0,
                                y: 20
                            },
                            animate: {
                                opacity: 1,
                                y: 0
                            },
                            transition: {
                                delay: 0.3
                            },
                            className: "flex flex-col sm:flex-row items-center justify-center gap-4",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "relative w-full sm:w-64",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$search$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Search$3e$__["Search"], {
                                            className: "absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-zinc-500"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/timeline/page.tsx",
                                            lineNumber: 109,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$input$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Input"], {
                                            value: searchQuery,
                                            onChange: (e)=>setSearchQuery(e.target.value),
                                            placeholder: "Search milestones...",
                                            className: "pl-10 bg-zinc-900/50 border-zinc-800"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/timeline/page.tsx",
                                            lineNumber: 110,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/timeline/page.tsx",
                                    lineNumber: 108,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex flex-wrap gap-2",
                                    children: [
                                        'breakthrough',
                                        'release',
                                        'event',
                                        'prediction'
                                    ].map((cat)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Button"], {
                                            variant: filterCategory === cat ? 'default' : 'outline',
                                            size: "sm",
                                            onClick: ()=>setFilterCategory(filterCategory === cat ? null : cat),
                                            className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])('rounded-full capitalize', filterCategory === cat ? 'bg-violet-600 hover:bg-violet-500' : 'border-zinc-700 text-zinc-400 hover:text-white'),
                                            children: cat
                                        }, cat, false, {
                                            fileName: "[project]/src/app/timeline/page.tsx",
                                            lineNumber: 120,
                                            columnNumber: 17
                                        }, this))
                                }, void 0, false, {
                                    fileName: "[project]/src/app/timeline/page.tsx",
                                    lineNumber: 118,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/timeline/page.tsx",
                            lineNumber: 102,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/timeline/page.tsx",
                    lineNumber: 72,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/app/timeline/page.tsx",
                lineNumber: 71,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                className: "px-4 mb-12",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "max-w-7xl mx-auto",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex overflow-x-auto no-scrollbar gap-4 pb-4",
                        children: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$data$2f$timeline$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["timelinePhases"].map((phase, index)=>{
                            const Icon = phase.icon === 'MessageSquare' ? __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$sparkles$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Sparkles$3e$__["Sparkles"] : phase.icon === 'Bot' ? __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$rocket$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Rocket$3e$__["Rocket"] : phase.icon === 'Network' ? __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$sparkles$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Sparkles$3e$__["Sparkles"] : phase.icon === 'Brain' ? __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$brain$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Brain$3e$__["Brain"] : __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$sparkles$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Sparkles$3e$__["Sparkles"];
                            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].button, {
                                initial: {
                                    opacity: 0,
                                    y: 20
                                },
                                animate: {
                                    opacity: 1,
                                    y: 0
                                },
                                transition: {
                                    delay: index * 0.1
                                },
                                onClick: ()=>setSelectedPhase(selectedPhase === phase.id ? null : phase.id),
                                className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])('flex-shrink-0 px-6 py-4 rounded-2xl border transition-all', selectedPhase === phase.id ? 'bg-violet-500/20 border-violet-500/50' : 'glass-light border-transparent hover:border-violet-500/30'),
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "w-10 h-10 rounded-xl flex items-center justify-center mb-2",
                                        style: {
                                            backgroundColor: phase.color
                                        },
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(Icon, {
                                            className: "w-5 h-5 text-white"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/timeline/page.tsx",
                                            lineNumber: 168,
                                            columnNumber: 21
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/timeline/page.tsx",
                                        lineNumber: 164,
                                        columnNumber: 19
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "text-sm font-medium text-white",
                                        children: phase.name
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/timeline/page.tsx",
                                        lineNumber: 170,
                                        columnNumber: 19
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "text-xs text-zinc-500",
                                        children: [
                                            phase.startYear,
                                            " - ",
                                            phase.endYear || 'Now'
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/timeline/page.tsx",
                                        lineNumber: 171,
                                        columnNumber: 19
                                    }, this)
                                ]
                            }, phase.id, true, {
                                fileName: "[project]/src/app/timeline/page.tsx",
                                lineNumber: 151,
                                columnNumber: 17
                            }, this);
                        })
                    }, void 0, false, {
                        fileName: "[project]/src/app/timeline/page.tsx",
                        lineNumber: 143,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/app/timeline/page.tsx",
                    lineNumber: 142,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/app/timeline/page.tsx",
                lineNumber: 141,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                className: "px-4",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "max-w-5xl mx-auto relative",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "absolute left-8 sm:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-violet-500 via-purple-500 to-pink-500"
                        }, void 0, false, {
                            fileName: "[project]/src/app/timeline/page.tsx",
                            lineNumber: 183,
                            columnNumber: 11
                        }, this),
                        sortedYears.map((year)=>{
                            const yearMilestones = groupedMilestones[Number(year)];
                            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
                                initial: {
                                    opacity: 0
                                },
                                whileInView: {
                                    opacity: 1
                                },
                                viewport: {
                                    once: true,
                                    margin: '-100px'
                                },
                                className: "relative mb-16",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "absolute left-8 sm:left-1/2 -translate-x-1/2 z-10",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "w-16 h-8 rounded-full bg-zinc-900 border border-violet-500/50 flex items-center justify-center",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-sm font-bold text-violet-400",
                                                children: year
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/timeline/page.tsx",
                                                lineNumber: 198,
                                                columnNumber: 21
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/timeline/page.tsx",
                                            lineNumber: 197,
                                            columnNumber: 19
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/timeline/page.tsx",
                                        lineNumber: 196,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "pt-12",
                                        children: yearMilestones.map((milestone, mIndex)=>{
                                            const CategoryIcon = categoryIcons[milestone.category] || __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$zap$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Zap$3e$__["Zap"];
                                            const isLeft = mIndex % 2 === 0;
                                            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
                                                initial: {
                                                    opacity: 0,
                                                    x: isLeft ? -50 : 50
                                                },
                                                whileInView: {
                                                    opacity: 1,
                                                    x: 0
                                                },
                                                viewport: {
                                                    once: true
                                                },
                                                transition: {
                                                    delay: mIndex * 0.1
                                                },
                                                onClick: ()=>handleMilestoneClick(milestone),
                                                className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])('relative mb-8 cursor-pointer group', 'sm:w-[calc(50%-2rem)]', isLeft ? 'sm:ml-0 sm:mr-auto sm:pr-8' : 'sm:ml-auto sm:mr-0 sm:pl-8', 'ml-16 pl-8'),
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])('absolute top-6 w-8 h-px', isLeft ? 'sm:right-0 left-0' : 'sm:left-0 left-0', 'bg-gradient-to-r from-violet-500/50 to-transparent')
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/timeline/page.tsx",
                                                        lineNumber: 224,
                                                        columnNumber: 25
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "glass-light rounded-2xl p-5 hover:border-violet-500/30 border border-transparent transition-all group-hover:scale-[1.02]",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "flex items-start gap-3 mb-3",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        className: "w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0",
                                                                        style: {
                                                                            backgroundColor: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$data$2f$timeline$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getImpactColor"])(milestone.impact)
                                                                        },
                                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(CategoryIcon, {
                                                                            className: "w-4 h-4 text-white"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/app/timeline/page.tsx",
                                                                            lineNumber: 242,
                                                                            columnNumber: 31
                                                                        }, this)
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/app/timeline/page.tsx",
                                                                        lineNumber: 238,
                                                                        columnNumber: 29
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        className: "flex-1 min-w-0",
                                                                        children: [
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                                                className: "font-bold text-white group-hover:text-violet-300 transition-colors",
                                                                                children: milestone.title
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/src/app/timeline/page.tsx",
                                                                                lineNumber: 246,
                                                                                columnNumber: 31
                                                                            }, this),
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                className: "flex items-center gap-2 mt-1",
                                                                                children: [
                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$badge$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Badge"], {
                                                                                        variant: "outline",
                                                                                        className: "text-[10px] border-zinc-700 text-zinc-500",
                                                                                        children: milestone.category
                                                                                    }, void 0, false, {
                                                                                        fileName: "[project]/src/app/timeline/page.tsx",
                                                                                        lineNumber: 250,
                                                                                        columnNumber: 33
                                                                                    }, this),
                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                        className: "text-xs text-zinc-600",
                                                                                        children: new Date(milestone.date).toLocaleDateString('en-US', {
                                                                                            month: 'short',
                                                                                            day: 'numeric'
                                                                                        })
                                                                                    }, void 0, false, {
                                                                                        fileName: "[project]/src/app/timeline/page.tsx",
                                                                                        lineNumber: 253,
                                                                                        columnNumber: 33
                                                                                    }, this)
                                                                                ]
                                                                            }, void 0, true, {
                                                                                fileName: "[project]/src/app/timeline/page.tsx",
                                                                                lineNumber: 249,
                                                                                columnNumber: 31
                                                                            }, this)
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/src/app/timeline/page.tsx",
                                                                        lineNumber: 245,
                                                                        columnNumber: 29
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/app/timeline/page.tsx",
                                                                lineNumber: 237,
                                                                columnNumber: 27
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                className: "text-sm text-zinc-400 leading-relaxed",
                                                                children: milestone.description
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/timeline/page.tsx",
                                                                lineNumber: 261,
                                                                columnNumber: 27
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "mt-3 flex items-center gap-2",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        className: "flex gap-0.5",
                                                                        children: [
                                                                            1,
                                                                            2,
                                                                            3,
                                                                            4
                                                                        ].map((level)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])('w-1.5 h-4 rounded-full', level <= (milestone.impact === 'transformative' ? 4 : milestone.impact === 'high' ? 3 : milestone.impact === 'medium' ? 2 : 1) ? 'bg-violet-500' : 'bg-zinc-800')
                                                                            }, level, false, {
                                                                                fileName: "[project]/src/app/timeline/page.tsx",
                                                                                lineNumber: 269,
                                                                                columnNumber: 33
                                                                            }, this))
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/app/timeline/page.tsx",
                                                                        lineNumber: 267,
                                                                        columnNumber: 29
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                        className: "text-xs text-zinc-600 capitalize",
                                                                        children: [
                                                                            milestone.impact,
                                                                            " impact"
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/src/app/timeline/page.tsx",
                                                                        lineNumber: 282,
                                                                        columnNumber: 29
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/app/timeline/page.tsx",
                                                                lineNumber: 266,
                                                                columnNumber: 27
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "mt-3 pt-3 border-t border-zinc-800 flex justify-end opacity-0 group-hover:opacity-100 transition-opacity",
                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                                                    href: `/timeline/${milestone.id}`,
                                                                    onClick: (e)=>e.stopPropagation(),
                                                                    className: "flex items-center gap-1 text-xs text-violet-400 hover:text-violet-300 transition-colors",
                                                                    children: [
                                                                        "Full details ",
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$right$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowRight$3e$__["ArrowRight"], {
                                                                            className: "w-3 h-3"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/app/timeline/page.tsx",
                                                                            lineNumber: 292,
                                                                            columnNumber: 44
                                                                        }, this)
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/src/app/timeline/page.tsx",
                                                                    lineNumber: 287,
                                                                    columnNumber: 29
                                                                }, this)
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/timeline/page.tsx",
                                                                lineNumber: 286,
                                                                columnNumber: 27
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/app/timeline/page.tsx",
                                                        lineNumber: 235,
                                                        columnNumber: 25
                                                    }, this)
                                                ]
                                            }, milestone.id, true, {
                                                fileName: "[project]/src/app/timeline/page.tsx",
                                                lineNumber: 209,
                                                columnNumber: 23
                                            }, this);
                                        })
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/timeline/page.tsx",
                                        lineNumber: 203,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, year, true, {
                                fileName: "[project]/src/app/timeline/page.tsx",
                                lineNumber: 188,
                                columnNumber: 15
                            }, this);
                        }),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
                            initial: {
                                opacity: 0,
                                y: 50
                            },
                            whileInView: {
                                opacity: 1,
                                y: 0
                            },
                            viewport: {
                                once: true
                            },
                            className: "relative text-center py-20",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "absolute inset-0 bg-gradient-to-t from-violet-500/10 to-transparent rounded-3xl"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/timeline/page.tsx",
                                    lineNumber: 311,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "relative z-10",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
                                            animate: {
                                                scale: [
                                                    1,
                                                    1.1,
                                                    1
                                                ]
                                            },
                                            transition: {
                                                duration: 2,
                                                repeat: Infinity
                                            },
                                            className: "w-24 h-24 mx-auto rounded-full bg-gradient-to-br from-violet-600 via-purple-500 to-pink-500 flex items-center justify-center shadow-2xl shadow-violet-500/40 mb-6",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$sparkles$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Sparkles$3e$__["Sparkles"], {
                                                className: "w-12 h-12 text-white"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/timeline/page.tsx",
                                                lineNumber: 318,
                                                columnNumber: 17
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/timeline/page.tsx",
                                            lineNumber: 313,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                            className: "text-2xl font-bold text-white mb-2",
                                            children: "The Future Awaits"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/timeline/page.tsx",
                                            lineNumber: 320,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-zinc-400",
                                            children: "What happens next is still being written..."
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/timeline/page.tsx",
                                            lineNumber: 321,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/timeline/page.tsx",
                                    lineNumber: 312,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/timeline/page.tsx",
                            lineNumber: 305,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/timeline/page.tsx",
                    lineNumber: 181,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/app/timeline/page.tsx",
                lineNumber: 180,
                columnNumber: 7
            }, this),
            selectedMilestone && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
                initial: {
                    opacity: 0
                },
                animate: {
                    opacity: 1
                },
                exit: {
                    opacity: 0
                },
                className: "fixed inset-0 z-50 flex items-center justify-center p-4",
                onClick: ()=>setSelectedMilestone(null),
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute inset-0 bg-black/80 backdrop-blur-xl"
                    }, void 0, false, {
                        fileName: "[project]/src/app/timeline/page.tsx",
                        lineNumber: 336,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
                        initial: {
                            scale: 0.9,
                            y: 20
                        },
                        animate: {
                            scale: 1,
                            y: 0
                        },
                        onClick: (e)=>e.stopPropagation(),
                        className: "relative w-full max-w-2xl glass rounded-3xl p-8 border border-violet-500/20",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: ()=>setSelectedMilestone(null),
                                className: "absolute top-4 right-4 p-2 rounded-full hover:bg-white/5",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "sr-only",
                                        children: "Close"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/timeline/page.tsx",
                                        lineNumber: 347,
                                        columnNumber: 15
                                    }, this),
                                    "×"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/timeline/page.tsx",
                                lineNumber: 343,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-start gap-4 mb-6",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "w-12 h-12 rounded-xl flex items-center justify-center",
                                        style: {
                                            backgroundColor: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$data$2f$timeline$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getImpactColor"])(selectedMilestone.impact)
                                        },
                                        children: (()=>{
                                            const Icon = categoryIcons[selectedMilestone.category] || __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$zap$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Zap$3e$__["Zap"];
                                            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(Icon, {
                                                className: "w-6 h-6 text-white"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/timeline/page.tsx",
                                                lineNumber: 358,
                                                columnNumber: 26
                                            }, this);
                                        })()
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/timeline/page.tsx",
                                        lineNumber: 352,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                                className: "text-2xl font-bold text-white",
                                                children: selectedMilestone.title
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/timeline/page.tsx",
                                                lineNumber: 362,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-zinc-400",
                                                children: new Date(selectedMilestone.date).toLocaleDateString('en-US', {
                                                    year: 'numeric',
                                                    month: 'long',
                                                    day: 'numeric'
                                                })
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/timeline/page.tsx",
                                                lineNumber: 363,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/timeline/page.tsx",
                                        lineNumber: 361,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/timeline/page.tsx",
                                lineNumber: 351,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-zinc-300 leading-relaxed mb-6",
                                children: selectedMilestone.description
                            }, void 0, false, {
                                fileName: "[project]/src/app/timeline/page.tsx",
                                lineNumber: 369,
                                columnNumber: 13
                            }, this),
                            selectedMilestone.sources.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "border-t border-zinc-800 pt-6",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                        className: "text-sm font-medium text-zinc-400 mb-3",
                                        children: "Sources"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/timeline/page.tsx",
                                        lineNumber: 375,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex flex-wrap gap-2",
                                        children: selectedMilestone.sources.map((source)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                href: source.url,
                                                target: "_blank",
                                                rel: "noopener noreferrer",
                                                className: "inline-flex items-center gap-1 text-sm text-violet-400 hover:text-violet-300",
                                                children: [
                                                    source.title,
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$external$2d$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ExternalLink$3e$__["ExternalLink"], {
                                                        className: "w-3 h-3"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/timeline/page.tsx",
                                                        lineNumber: 386,
                                                        columnNumber: 23
                                                    }, this)
                                                ]
                                            }, source.id, true, {
                                                fileName: "[project]/src/app/timeline/page.tsx",
                                                lineNumber: 378,
                                                columnNumber: 21
                                            }, this))
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/timeline/page.tsx",
                                        lineNumber: 376,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/timeline/page.tsx",
                                lineNumber: 374,
                                columnNumber: 15
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/timeline/page.tsx",
                        lineNumber: 337,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/timeline/page.tsx",
                lineNumber: 329,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/timeline/page.tsx",
        lineNumber: 69,
        columnNumber: 5
    }, this);
}
}),
];

//# sourceMappingURL=src_6b5506b7._.js.map