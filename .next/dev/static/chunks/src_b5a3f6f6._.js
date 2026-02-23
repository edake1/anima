(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/src/lib/data/experts.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// ==========================================
// SYNTHESIS - AI Evolution Timeline
// Expert Data & Predictions
// ==========================================
__turbopack_context__.s([
    "experts",
    ()=>experts,
    "getAllPredictions",
    ()=>getAllPredictions,
    "getExpertById",
    ()=>getExpertById,
    "getExpertsByStance",
    ()=>getExpertsByStance,
    "getPredictionsByTopic",
    ()=>getPredictionsByTopic
]);
const experts = [
    // OPTIMISTS
    {
        id: 'sam-altman',
        name: 'Sam Altman',
        title: 'CEO',
        organization: 'OpenAI',
        stance: 'optimist',
        credibility: 95,
        avatar: '/experts/altman.png',
        biography: 'Sam Altman is the CEO of OpenAI, one of the leading AI research laboratories. He has been instrumental in the development of GPT models and advocates for responsible AGI development.',
        predictions: [
            {
                id: 'altman-agi-2025',
                expertId: 'sam-altman',
                prediction: 'AGI (defined as smarter than the smartest human) will arrive within 2 years',
                topic: 'agi',
                timeframe: {
                    start: 2025,
                    end: 2027
                },
                madeAt: '2024-01-15',
                confidence: 'high',
                status: 'pending',
                source: {
                    id: 'altman-davos-2024',
                    type: 'interview',
                    title: 'World Economic Forum Davos 2024',
                    url: 'https://www.weforum.org/events/world-economic-forum-annual-meeting-2024',
                    publishDate: '2024-01-15',
                    credibility: 95
                }
            },
            {
                id: 'altman-superintelligence',
                expertId: 'sam-altman',
                prediction: 'Superintelligence could arrive within a decade after AGI',
                topic: 'asi',
                timeframe: {
                    start: 2027,
                    end: 2037
                },
                madeAt: '2023-09-01',
                confidence: 'medium',
                status: 'pending',
                source: {
                    id: 'openai-superintelligence-2023',
                    type: 'article',
                    title: 'Governance of Superintelligence',
                    url: 'https://openai.com/blog/governance-of-superintelligence',
                    publishDate: '2023-05-23',
                    credibility: 95
                }
            }
        ],
        quotes: [
            {
                id: 'altman-quote-1',
                text: 'If you define AGI as smarter than the smartest human, I think it\'s probably next year, within two years.',
                context: 'Interview at World Economic Forum',
                date: '2024-01-15',
                source: {
                    id: 'altman-davos-q',
                    type: 'interview',
                    title: 'WEF Davos 2024',
                    credibility: 95
                }
            }
        ],
        socialLinks: {
            twitter: 'https://twitter.com/sama',
            linkedin: 'https://linkedin.com/in/samaltman'
        },
        sources: [
            {
                id: 'openai-about',
                type: 'article',
                title: 'About OpenAI',
                url: 'https://openai.com/about',
                credibility: 95
            }
        ]
    },
    {
        id: 'ray-kurzweil',
        name: 'Ray Kurzweil',
        title: 'Director of Engineering',
        organization: 'Google',
        stance: 'optimist',
        credibility: 90,
        avatar: '/experts/kurzweil.png',
        biography: 'Ray Kurzweil is a futurist, author, and Director of Engineering at Google. He is known for his predictions about technological singularity and has a track record of accurate technological forecasts.',
        predictions: [
            {
                id: 'kurzweil-agi-2029',
                expertId: 'ray-kurzweil',
                prediction: 'AGI will pass the Turing Test by 2029',
                topic: 'agi',
                timeframe: {
                    start: 2029,
                    end: 2029
                },
                madeAt: '1999-01-01',
                confidence: 'high',
                status: 'pending',
                source: {
                    id: 'kurzweil-book-1999',
                    type: 'book',
                    title: 'The Age of Spiritual Machines',
                    authors: [
                        'Ray Kurzweil'
                    ],
                    publishDate: '1999-01-01',
                    credibility: 90
                }
            },
            {
                id: 'kurzweil-singularity',
                expertId: 'ray-kurzweil',
                prediction: 'The Singularity will occur in 2045',
                topic: 'asi',
                timeframe: {
                    start: 2045,
                    end: 2045
                },
                madeAt: '2005-01-01',
                confidence: 'high',
                status: 'pending',
                source: {
                    id: 'kurzweil-singularity-book',
                    type: 'book',
                    title: 'The Singularity Is Near',
                    authors: [
                        'Ray Kurzweil'
                    ],
                    publishDate: '2005-01-01',
                    credibility: 90
                }
            }
        ],
        quotes: [
            {
                id: 'kurzweil-quote-1',
                text: 'By 2029, computers will have human-level intelligence.',
                context: 'Prediction from The Age of Spiritual Machines',
                date: '1999-01-01',
                source: {
                    id: 'kurzweil-book-q',
                    type: 'book',
                    title: 'The Age of Spiritual Machines',
                    credibility: 90
                }
            }
        ],
        sources: [
            {
                id: 'kurzweil-wiki',
                type: 'article',
                title: 'Ray Kurzweil Wikipedia',
                url: 'https://en.wikipedia.org/wiki/Ray_Kurzweil',
                credibility: 80
            }
        ]
    },
    {
        id: 'demis-hassabis',
        name: 'Demis Hassabis',
        title: 'CEO',
        organization: 'Google DeepMind',
        stance: 'optimist',
        credibility: 97,
        avatar: '/experts/hassabis.png',
        biography: 'Demis Hassabis is the CEO of Google DeepMind and a Nobel laureate. He led the development of AlphaGo, AlphaFold, and other breakthrough AI systems.',
        predictions: [
            {
                id: 'hassabis-agi-timeline',
                expertId: 'demis-hassabis',
                prediction: 'AGI could be possible within this decade with current rate of progress',
                topic: 'agi',
                timeframe: {
                    start: 2025,
                    end: 2030
                },
                madeAt: '2024-03-15',
                confidence: 'medium',
                status: 'pending',
                source: {
                    id: 'hassabis-interview-2024',
                    type: 'interview',
                    title: 'BBC Interview March 2024',
                    publishDate: '2024-03-15',
                    credibility: 95
                }
            }
        ],
        quotes: [
            {
                id: 'hassabis-quote-1',
                text: 'We\'re on an exponential curve... I think we\'re talking years, not decades.',
                context: 'On AGI timeline',
                date: '2024-03-15',
                source: {
                    id: 'hassabis-bbc',
                    type: 'interview',
                    title: 'BBC Interview',
                    credibility: 95
                }
            }
        ],
        sources: [
            {
                id: 'deepmind-about',
                type: 'article',
                title: 'DeepMind About',
                url: 'https://deepmind.com/about',
                credibility: 97
            }
        ]
    },
    // CAUTIOUS
    {
        id: 'geoffrey-hinton',
        name: 'Geoffrey Hinton',
        title: 'Nobel Laureate, Professor Emeritus',
        organization: 'University of Toronto',
        stance: 'cautious',
        credibility: 99,
        avatar: '/experts/hinton.png',
        biography: 'Geoffrey Hinton is one of the "Godfathers of AI" and a Nobel Prize laureate. He left Google in 2023 to speak freely about AI risks.',
        predictions: [
            {
                id: 'hinton-agi-rapid',
                expertId: 'geoffrey-hinton',
                prediction: 'AGI could arrive much sooner than expected, possibly within 5 years',
                topic: 'agi',
                timeframe: {
                    start: 2023,
                    end: 2028
                },
                madeAt: '2023-05-01',
                confidence: 'high',
                status: 'pending',
                source: {
                    id: 'hinton-resignation',
                    type: 'interview',
                    title: 'CBS News Interview',
                    publishDate: '2023-05-01',
                    credibility: 95
                }
            },
            {
                id: 'hinton-extinction-risk',
                expertId: 'geoffrey-hinton',
                prediction: 'AI could pose extinction-level risks if not properly aligned',
                topic: 'alignment',
                timeframe: {
                    start: 2024,
                    end: 2050
                },
                madeAt: '2023-05-01',
                confidence: 'high',
                status: 'pending',
                source: {
                    id: 'hinton-risk-warning',
                    type: 'article',
                    title: '"Godfather of AI" leaves Google',
                    url: 'https://www.cbsnews.com/news/godfather-of-artificial-intelligence-geoffrey-hinton-leaves-google/',
                    publishDate: '2023-05-01',
                    credibility: 95
                }
            }
        ],
        quotes: [
            {
                id: 'hinton-quote-1',
                text: 'It is hard to see how you can prevent the bad actors from using it for bad things.',
                context: 'On AI risks',
                date: '2023-05-01',
                source: {
                    id: 'hinton-cbs',
                    type: 'interview',
                    title: 'CBS Interview',
                    credibility: 95
                }
            },
            {
                id: 'hinton-quote-2',
                text: 'I console myself with the normal excuse: If I hadn\'t done it, somebody else would have.',
                context: 'On his role in AI development',
                date: '2023-05-01',
                source: {
                    id: 'hinton-nyt',
                    type: 'article',
                    title: 'New York Times Interview',
                    credibility: 95
                }
            }
        ],
        sources: [
            {
                id: 'hinton-wiki',
                type: 'article',
                title: 'Geoffrey Hinton Wikipedia',
                url: 'https://en.wikipedia.org/wiki/Geoffrey_Hinton',
                credibility: 90
            }
        ]
    },
    {
        id: 'yoshua-bengio',
        name: 'Yoshua Bengio',
        title: 'Professor, Scientific Director',
        organization: 'Mila, University of Montreal',
        stance: 'cautious',
        credibility: 98,
        avatar: '/experts/bengio.png',
        biography: 'Yoshua Bengio is a Turing Award winner and one of the "Godfathers of AI". He founded Mila and advocates for responsible AI development.',
        predictions: [
            {
                id: 'bengio-agi-timeline',
                expertId: 'yoshua-bengio',
                prediction: 'AGI could arrive within years, not decades',
                topic: 'agi',
                timeframe: {
                    start: 2025,
                    end: 2030
                },
                madeAt: '2023-06-01',
                confidence: 'medium',
                status: 'pending',
                source: {
                    id: 'bengio-testimony',
                    type: 'interview',
                    title: 'Congressional Testimony',
                    publishDate: '2023-06-01',
                    credibility: 95
                }
            },
            {
                id: 'bengio-safety-priority',
                expertId: 'yoshua-bengio',
                prediction: 'AI safety research must be prioritized alongside capability development',
                topic: 'alignment',
                timeframe: {
                    start: 2023,
                    end: 2030
                },
                madeAt: '2023-06-01',
                confidence: 'high',
                status: 'pending',
                source: {
                    id: 'bengio-safety-article',
                    type: 'article',
                    title: 'AI Safety Statement',
                    publishDate: '2023-06-01',
                    credibility: 95
                }
            }
        ],
        quotes: [
            {
                id: 'bengio-quote-1',
                text: 'We need to be very careful about how we deploy these systems... we need to think about the long-term consequences.',
                context: 'On AI development',
                date: '2023-06-01',
                source: {
                    id: 'bengio-congress',
                    type: 'interview',
                    title: 'Congressional Hearing',
                    credibility: 95
                }
            }
        ],
        sources: [
            {
                id: 'bengio-mila',
                type: 'article',
                title: 'Mila - Yoshua Bengio',
                url: 'https://mila.quebec/en/yoshua-bengio/',
                credibility: 95
            }
        ]
    },
    // SKEPTICS
    {
        id: 'yann-lecun',
        name: 'Yann LeCun',
        title: 'Chief AI Scientist',
        organization: 'Meta AI',
        stance: 'skeptic',
        credibility: 98,
        avatar: '/experts/lecun.png',
        biography: 'Yann LeCun is a Turing Award winner, Chief AI Scientist at Meta, and professor at NYU. He is known for his work on convolutional neural networks and maintains a skeptical view of imminent AGI.',
        predictions: [
            {
                id: 'lecun-no-agi-soon',
                expertId: 'yann-lecun',
                prediction: 'Current LLMs will not lead to AGI; fundamentally new architectures needed',
                topic: 'agi',
                timeframe: {
                    start: 2024,
                    end: 2050
                },
                madeAt: '2024-01-01',
                confidence: 'high',
                status: 'pending',
                source: {
                    id: 'lecun-llm-critique',
                    type: 'article',
                    title: 'LeCun on LLMs',
                    url: 'https://twitter.com/ylecun',
                    publishDate: '2024-01-01',
                    credibility: 90
                }
            },
            {
                id: 'lecun-cat-intelligence',
                expertId: 'yann-lecun',
                prediction: 'Current AI is far from cat-level intelligence in terms of understanding the physical world',
                topic: 'agi',
                timeframe: {
                    start: 2024,
                    end: 2035
                },
                madeAt: '2023-12-01',
                confidence: 'high',
                status: 'pending',
                source: {
                    id: 'lecun-cat-quote',
                    type: 'interview',
                    title: 'Various interviews',
                    publishDate: '2023-12-01',
                    credibility: 90
                }
            }
        ],
        quotes: [
            {
                id: 'lecun-quote-1',
                text: 'LLMs have a very limited understanding of the underlying reality... They don\'t understand the physical world.',
                context: 'On LLM limitations',
                date: '2024-01-15',
                source: {
                    id: 'lecun-talk',
                    type: 'interview',
                    title: 'Public Talk',
                    credibility: 90
                }
            },
            {
                id: 'lecun-quote-2',
                text: 'We are still far from human-level AI.',
                context: 'On AGI timeline',
                date: '2024-02-01',
                source: {
                    id: 'lecun-twitter',
                    type: 'tweet',
                    title: 'Twitter/X',
                    credibility: 85
                }
            }
        ],
        sources: [
            {
                id: 'lecun-meta',
                type: 'article',
                title: 'Meta AI - Yann LeCun',
                url: 'https://ai.meta.com/people/yann-lecun/',
                credibility: 95
            }
        ]
    },
    {
        id: 'andrew-ng',
        name: 'Andrew Ng',
        title: 'Founder',
        organization: 'DeepLearning.AI',
        stance: 'skeptic',
        credibility: 95,
        avatar: '/experts/ng.png',
        biography: 'Andrew Ng is a pioneer in online education and AI. He founded Google Brain, was Baidu\'s Chief Scientist, and created Coursera and DeepLearning.AI.',
        predictions: [
            {
                id: 'ng-agi-timeline',
                expertId: 'andrew-ng',
                prediction: 'AGI is still decades away; current AI progress is overhyped',
                topic: 'agi',
                timeframe: {
                    start: 2040,
                    end: 2060
                },
                madeAt: '2023-07-01',
                confidence: 'medium',
                status: 'pending',
                source: {
                    id: 'ng-aghi-view',
                    type: 'interview',
                    title: 'Interview on AI Hype',
                    publishDate: '2023-07-01',
                    credibility: 90
                }
            },
            {
                id: 'ng-worry-wrong',
                expertId: 'andrew-ng',
                prediction: 'Current AI fears are overblown; focus should be on near-term issues',
                topic: 'alignment',
                timeframe: {
                    start: 2023,
                    end: 2030
                },
                madeAt: '2023-06-01',
                confidence: 'high',
                status: 'pending',
                source: {
                    id: 'ng-fears',
                    type: 'article',
                    title: 'Andrew Ng on AI Fears',
                    publishDate: '2023-06-01',
                    credibility: 90
                }
            }
        ],
        quotes: [
            {
                id: 'ng-quote-1',
                text: 'I think worrying about AI turning evil is like worrying about overpopulation on Mars.',
                context: 'On AI existential risk',
                date: '2023-06-01',
                source: {
                    id: 'ng-mars',
                    type: 'interview',
                    title: 'Interview',
                    credibility: 90
                }
            }
        ],
        sources: [
            {
                id: 'ng-deeplearning',
                type: 'article',
                title: 'DeepLearning.AI',
                url: 'https://www.deeplearning.ai/',
                credibility: 95
            }
        ]
    },
    // NEUTRAL/BALANCED
    {
        id: 'dario-amodei',
        name: 'Dario Amodei',
        title: 'CEO',
        organization: 'Anthropic',
        stance: 'neutral',
        credibility: 96,
        avatar: '/experts/amodei.png',
        biography: 'Dario Amodei is the CEO of Anthropic, an AI safety company. He previously led AI safety at OpenAI and advocates for responsible AI development.',
        predictions: [
            {
                id: 'amodei-agi-powerful',
                expertId: 'dario-amodei',
                prediction: 'AI systems will become extremely powerful within years; safety research is critical',
                topic: 'agi',
                timeframe: {
                    start: 2025,
                    end: 2030
                },
                madeAt: '2023-09-01',
                confidence: 'high',
                status: 'pending',
                source: {
                    id: 'amodei-anthropic',
                    type: 'article',
                    title: 'Anthropic Mission',
                    url: 'https://www.anthropic.com/about',
                    publishDate: '2023-09-01',
                    credibility: 95
                }
            },
            {
                id: 'amodei-constitutional',
                expertId: 'dario-amodei',
                prediction: 'Constitutional AI and similar approaches can help align AI systems',
                topic: 'alignment',
                timeframe: {
                    start: 2023,
                    end: 2028
                },
                madeAt: '2023-09-01',
                confidence: 'medium',
                status: 'pending',
                source: {
                    id: 'amodei-constitutional',
                    type: 'paper',
                    title: 'Constitutional AI',
                    authors: [
                        'Anthropic'
                    ],
                    publishDate: '2022-12-01',
                    credibility: 95
                }
            }
        ],
        quotes: [
            {
                id: 'amodei-quote-1',
                text: 'We think AI will be a transformative technology, and we want to build it in a way that\'s safe and beneficial.',
                context: 'On Anthropic\'s mission',
                date: '2023-09-01',
                source: {
                    id: 'amodei-interview',
                    type: 'interview',
                    title: 'Interview',
                    credibility: 95
                }
            }
        ],
        sources: [
            {
                id: 'anthropic-about',
                type: 'article',
                title: 'Anthropic About',
                url: 'https://www.anthropic.com/about',
                credibility: 96
            }
        ]
    },
    {
        id: 'ilya-sutskever',
        name: 'Ilya Sutskever',
        title: 'Co-founder & Former Chief Scientist',
        organization: 'OpenAI / SSI',
        stance: 'neutral',
        credibility: 97,
        avatar: '/experts/sutskever.png',
        biography: 'Ilya Sutskever is a co-founder of OpenAI and former Chief Scientist. He left in 2024 to found SSI (Safe Superintelligence Inc). He is one of the most influential AI researchers.',
        predictions: [
            {
                id: 'sutskever-superintelligence',
                expertId: 'ilya-sutskever',
                prediction: 'Superintelligence is possible within years to decades; safety is paramount',
                topic: 'asi',
                timeframe: {
                    start: 2025,
                    end: 2035
                },
                madeAt: '2024-07-01',
                confidence: 'medium',
                status: 'pending',
                source: {
                    id: 'sutskever-ssi',
                    type: 'article',
                    title: 'SSI Inc Announcement',
                    publishDate: '2024-07-01',
                    credibility: 95
                }
            }
        ],
        quotes: [
            {
                id: 'sutskever-quote-1',
                text: 'Our mission is to build safe superintelligence.',
                context: 'On founding SSI',
                date: '2024-07-01',
                source: {
                    id: 'sutskever-ssi-q',
                    type: 'article',
                    title: 'SSI Inc',
                    credibility: 95
                }
            }
        ],
        sources: [
            {
                id: 'sutskever-openai',
                type: 'article',
                title: 'OpenAI Research',
                credibility: 95
            }
        ]
    }
];
function getExpertsByStance(stance) {
    return experts.filter((e)=>e.stance === stance);
}
function getExpertById(id) {
    return experts.find((e)=>e.id === id);
}
function getAllPredictions() {
    return experts.flatMap((e)=>e.predictions.map((p)=>({
                ...p,
                expertName: e.name,
                expertStance: e.stance
            })));
}
function getPredictionsByTopic(topic) {
    return getAllPredictions().filter((p)=>p.topic === topic);
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/lib/data/timeline.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
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
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/lib/data/predictions.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// ==========================================
// SYNTHESIS - AI Evolution Timeline
// Predictions Data
// ==========================================
__turbopack_context__.s([
    "getControversialPredictions",
    ()=>getControversialPredictions,
    "getHighProbabilityPredictions",
    ()=>getHighProbabilityPredictions,
    "getPredictionById",
    ()=>getPredictionById,
    "getPredictionsByCategory",
    ()=>getPredictionsByCategory,
    "predictions",
    ()=>predictions
]);
const predictions = [
    {
        id: 'agi-by-2027',
        title: 'AGI by 2027',
        description: 'AI systems achieve human-level general intelligence across all cognitive domains by 2027.',
        category: 'agi-timeline',
        probability: 0.25,
        probabilityDistribution: [
            {
                year: 2025,
                probability: 0.05
            },
            {
                year: 2026,
                probability: 0.15
            },
            {
                year: 2027,
                probability: 0.25
            },
            {
                year: 2028,
                probability: 0.35
            },
            {
                year: 2029,
                probability: 0.45
            },
            {
                year: 2030,
                probability: 0.55
            }
        ],
        timeframe: {
            earliest: 2025,
            expected: 2027,
            latest: 2035
        },
        sources: [
            {
                id: 'metaculus-agi',
                type: 'prediction-market',
                title: 'Metaculus AGI Question',
                url: 'https://metaculus.com/questions/5121/date-of-artificial-general-intelligence/',
                credibility: 85
            }
        ],
        relatedPredictions: [
            'asi-timeline',
            'agi-by-2030'
        ],
        lastUpdated: '2024-12-01',
        communityVotes: {
            agree: 15420,
            disagree: 8230,
            total: 23650
        }
    },
    {
        id: 'agi-by-2030',
        title: 'AGI by 2030',
        description: 'AI systems achieve human-level general intelligence by 2030.',
        category: 'agi-timeline',
        probability: 0.55,
        probabilityDistribution: [
            {
                year: 2025,
                probability: 0.05
            },
            {
                year: 2026,
                probability: 0.12
            },
            {
                year: 2027,
                probability: 0.22
            },
            {
                year: 2028,
                probability: 0.35
            },
            {
                year: 2029,
                probability: 0.48
            },
            {
                year: 2030,
                probability: 0.55
            },
            {
                year: 2031,
                probability: 0.65
            },
            {
                year: 2032,
                probability: 0.72
            }
        ],
        timeframe: {
            earliest: 2025,
            expected: 2030,
            latest: 2040
        },
        sources: [
            {
                id: 'metaculus-agi-2030',
                type: 'prediction-market',
                title: 'Metaculus AGI 2030',
                credibility: 85
            },
            {
                id: 'expert-survey-2023',
                type: 'paper',
                title: 'Expert Survey on AGI Timeline',
                credibility: 80
            }
        ],
        relatedPredictions: [
            'agi-by-2027',
            'asi-timeline'
        ],
        lastUpdated: '2024-12-01',
        communityVotes: {
            agree: 28500,
            disagree: 12300,
            total: 40800
        }
    },
    {
        id: 'asi-timeline',
        title: 'ASI by 2035',
        description: 'Artificial Superintelligence - AI that dramatically exceeds human intelligence in all domains - emerges within a decade of AGI.',
        category: 'asi-timeline',
        probability: 0.35,
        probabilityDistribution: [
            {
                year: 2030,
                probability: 0.10
            },
            {
                year: 2032,
                probability: 0.20
            },
            {
                year: 2035,
                probability: 0.35
            },
            {
                year: 2040,
                probability: 0.55
            },
            {
                year: 2045,
                probability: 0.70
            }
        ],
        timeframe: {
            earliest: 2028,
            expected: 2035,
            latest: 2050
        },
        sources: [
            {
                id: 'metaculus-asi',
                type: 'prediction-market',
                title: 'Metaculus ASI Question',
                credibility: 80
            },
            {
                id: 'kurzweil-singularity',
                type: 'book',
                title: 'The Singularity Is Near',
                credibility: 70
            }
        ],
        relatedPredictions: [
            'agi-by-2027',
            'intelligence-explosion'
        ],
        lastUpdated: '2024-12-01',
        communityVotes: {
            agree: 11200,
            disagree: 18900,
            total: 30100
        }
    },
    {
        id: 'alignment-success',
        title: 'AI Alignment Success',
        description: 'Technical alignment problem is solved - AI systems reliably pursue intended goals without harmful misalignment.',
        category: 'alignment-success',
        probability: 0.45,
        timeframe: {
            earliest: 2025,
            expected: 2030,
            latest: 2040
        },
        sources: [
            {
                id: 'alignment-survey',
                type: 'paper',
                title: 'AI Alignment Research Survey',
                credibility: 75
            }
        ],
        relatedPredictions: [
            'agi-by-2030',
            'existential-risk'
        ],
        lastUpdated: '2024-11-15',
        communityVotes: {
            agree: 18500,
            disagree: 14200,
            total: 32700
        }
    },
    {
        id: 'existential-risk',
        title: 'AI Existential Catastrophe',
        description: 'AI causes severe harm to humanity at a civilizational scale, potentially including human extinction.',
        category: 'alignment-success',
        probability: 0.12,
        timeframe: {
            earliest: 2025,
            expected: 2035,
            latest: 2100
        },
        sources: [
            {
                id: 'xrisk-survey',
                type: 'paper',
                title: 'Existential Risk from AI Survey',
                credibility: 70
            },
            {
                id: 'hinton-warning',
                type: 'interview',
                title: 'Hinton AI Warning',
                credibility: 85
            }
        ],
        relatedPredictions: [
            'alignment-success',
            'asi-timeline'
        ],
        lastUpdated: '2024-12-01',
        communityVotes: {
            agree: 8500,
            disagree: 32100,
            total: 40600
        }
    },
    {
        id: 'economic-disruption',
        title: 'Mass Labor Displacement by 2030',
        description: 'AI automation displaces 30%+ of current jobs within this decade, requiring major economic restructuring.',
        category: 'economic-impact',
        probability: 0.55,
        timeframe: {
            earliest: 2025,
            expected: 2028,
            latest: 2032
        },
        sources: [
            {
                id: 'goldman-sachs-report',
                type: 'article',
                title: 'Goldman Sachs AI Jobs Report',
                credibility: 80
            },
            {
                id: 'mckinsey-automation',
                type: 'article',
                title: 'McKinsey Automation Report',
                credibility: 80
            }
        ],
        relatedPredictions: [
            'agi-by-2030',
            'ubi-adoption'
        ],
        lastUpdated: '2024-10-01',
        communityVotes: {
            agree: 28900,
            disagree: 15600,
            total: 44500
        }
    },
    {
        id: 'ubi-adoption',
        title: 'Universal Basic Income Adopted',
        description: 'Major economies implement universal basic income in response to AI-driven job displacement.',
        category: 'economic-impact',
        probability: 0.40,
        timeframe: {
            earliest: 2028,
            expected: 2035,
            latest: 2050
        },
        sources: [
            {
                id: 'ubi-research',
                type: 'article',
                title: 'UBI Policy Research',
                credibility: 70
            }
        ],
        relatedPredictions: [
            'economic-disruption',
            'agi-by-2030'
        ],
        lastUpdated: '2024-09-01',
        communityVotes: {
            agree: 22100,
            disagree: 19800,
            total: 41900
        }
    },
    {
        id: 'reasoning-breakthrough',
        title: 'System 2 Reasoning Achieved',
        description: 'AI systems achieve reliable "System 2" thinking - deliberate, logical reasoning beyond pattern matching.',
        category: 'capability-breakthrough',
        probability: 0.65,
        timeframe: {
            earliest: 2024,
            expected: 2026,
            latest: 2028
        },
        sources: [
            {
                id: 'reasoning-research',
                type: 'paper',
                title: 'AI Reasoning Research',
                credibility: 80
            }
        ],
        relatedPredictions: [
            'agi-by-2027',
            'o1-breakthrough'
        ],
        lastUpdated: '2024-11-01',
        communityVotes: {
            agree: 35200,
            disagree: 8900,
            total: 44100
        }
    },
    {
        id: 'multimodal-native',
        title: 'Native Multimodal Understanding',
        description: 'AI systems natively understand and generate across text, image, video, audio, and code as unified representations.',
        category: 'capability-breakthrough',
        probability: 0.75,
        timeframe: {
            earliest: 2024,
            expected: 2025,
            latest: 2027
        },
        sources: [
            {
                id: 'gpt4o-demo',
                type: 'article',
                title: 'GPT-4o Demo',
                credibility: 90
            },
            {
                id: 'gemini-multimodal',
                type: 'article',
                title: 'Gemini Multimodal',
                credibility: 85
            }
        ],
        relatedPredictions: [
            'reasoning-breakthrough'
        ],
        lastUpdated: '2024-12-01',
        communityVotes: {
            agree: 42100,
            disagree: 5200,
            total: 47300
        }
    },
    {
        id: 'world-models',
        title: 'Robust World Models',
        description: 'AI systems develop rich internal models of how the physical and social world works, enabling better planning and prediction.',
        category: 'capability-breakthrough',
        probability: 0.50,
        timeframe: {
            earliest: 2025,
            expected: 2027,
            latest: 2030
        },
        sources: [
            {
                id: 'world-model-paper',
                type: 'paper',
                title: 'World Models in AI',
                credibility: 75
            },
            {
                id: 'lecun-world-model',
                type: 'interview',
                title: 'LeCun on World Models',
                credibility: 85
            }
        ],
        relatedPredictions: [
            'reasoning-breakthrough',
            'agi-by-2027'
        ],
        lastUpdated: '2024-10-15',
        communityVotes: {
            agree: 26800,
            disagree: 14200,
            total: 41000
        }
    },
    {
        id: 'agent-autonomy',
        title: 'Fully Autonomous AI Agents',
        description: 'AI agents can independently complete complex, multi-step tasks over extended time periods with minimal human oversight.',
        category: 'capability-breakthrough',
        probability: 0.70,
        timeframe: {
            earliest: 2024,
            expected: 2026,
            latest: 2028
        },
        sources: [
            {
                id: 'agent-research',
                type: 'paper',
                title: 'Autonomous Agent Research',
                credibility: 75
            }
        ],
        relatedPredictions: [
            'multi-agent-systems',
            'economic-disruption'
        ],
        lastUpdated: '2024-11-20',
        communityVotes: {
            agree: 33100,
            disagree: 9800,
            total: 42900
        }
    },
    {
        id: 'multi-agent-systems',
        title: 'Collaborative Multi-Agent Systems',
        description: 'Networks of specialized AI agents work together to solve problems beyond any single agent\'s capability.',
        category: 'capability-breakthrough',
        probability: 0.80,
        timeframe: {
            earliest: 2024,
            expected: 2025,
            latest: 2027
        },
        sources: [
            {
                id: 'multi-agent-paper',
                type: 'paper',
                title: 'Multi-Agent Systems Research',
                credibility: 80
            }
        ],
        relatedPredictions: [
            'agent-autonomy',
            'agi-by-2027'
        ],
        lastUpdated: '2024-12-01',
        communityVotes: {
            agree: 38500,
            disagree: 6200,
            total: 44700
        }
    },
    {
        id: 'ai-regulation',
        title: 'Comprehensive AI Regulation',
        description: 'Major governments implement comprehensive AI safety and governance regulations.',
        category: 'regulation',
        probability: 0.85,
        timeframe: {
            earliest: 2024,
            expected: 2026,
            latest: 2028
        },
        sources: [
            {
                id: 'eu-ai-act',
                type: 'article',
                title: 'EU AI Act',
                credibility: 95
            },
            {
                id: 'us-ai-order',
                type: 'article',
                title: 'US AI Executive Order',
                credibility: 90
            }
        ],
        relatedPredictions: [
            'alignment-success'
        ],
        lastUpdated: '2024-11-01',
        communityVotes: {
            agree: 45200,
            disagree: 3100,
            total: 48300
        }
    },
    {
        id: 'compute-growth',
        title: '1000x Compute Growth by 2030',
        description: 'AI training compute continues exponential growth, achieving 1000x improvement from 2024 levels.',
        category: 'capability-breakthrough',
        probability: 0.70,
        timeframe: {
            earliest: 2026,
            expected: 2030,
            latest: 2032
        },
        sources: [
            {
                id: 'epoch-compute',
                type: 'article',
                title: 'Epoch AI Compute Trends',
                credibility: 85
            }
        ],
        relatedPredictions: [
            'agi-by-2030',
            'economic-disruption'
        ],
        lastUpdated: '2024-10-01',
        communityVotes: {
            agree: 29800,
            disagree: 12100,
            total: 41900
        }
    }
];
function getPredictionsByCategory(category) {
    return predictions.filter((p)=>p.category === category);
}
function getHighProbabilityPredictions(threshold = 0.6) {
    return predictions.filter((p)=>p.probability >= threshold);
}
function getControversialPredictions() {
    return predictions.filter((p)=>Math.abs(p.probability - 0.5) < 0.15);
}
function getPredictionById(id) {
    return predictions.find((p)=>p.id === id);
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/lib/data/concepts.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// ==========================================
// SYNTHESIS - AI Evolution Timeline
// Concepts & Knowledge Data
// ==========================================
__turbopack_context__.s([
    "concepts",
    ()=>concepts,
    "getConceptById",
    ()=>getConceptById,
    "getConceptGraph",
    ()=>getConceptGraph,
    "getConceptsByCategory",
    ()=>getConceptsByCategory,
    "getConceptsByDifficulty",
    ()=>getConceptsByDifficulty,
    "getConnectedConcepts",
    ()=>getConnectedConcepts
]);
const concepts = [
    // Architecture
    {
        id: 'transformers',
        name: 'Transformers',
        shortDescription: 'The architecture behind modern AI, using attention to process sequences.',
        fullDescription: 'Transformers are a neural network architecture introduced in 2017 that revolutionized natural language processing. Unlike previous approaches that processed text sequentially, transformers use an "attention mechanism" to process all parts of the input simultaneously, capturing relationships regardless of distance. This architecture enables parallel processing during training and has become the foundation for virtually all modern language models.',
        category: 'architecture',
        difficulty: 'intermediate',
        connections: [
            {
                conceptId: 'attention-mechanism',
                relationship: 'requires',
                strength: 0.95
            },
            {
                conceptId: 'gpt',
                relationship: 'enables',
                strength: 0.9
            },
            {
                conceptId: 'scaling-laws',
                relationship: 'related',
                strength: 0.7
            }
        ],
        sources: [
            {
                id: 'attention-paper',
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
        id: 'attention-mechanism',
        name: 'Attention Mechanism',
        shortDescription: 'How AI models "focus" on relevant information.',
        fullDescription: 'Attention is a mechanism that allows neural networks to focus on specific parts of the input when producing output. Think of it like how humans focus on certain words when reading to understand meaning. In transformers, self-attention allows each word to "look at" all other words in the sentence to understand context. Multi-head attention runs multiple attention operations in parallel, capturing different types of relationships.',
        category: 'architecture',
        difficulty: 'intermediate',
        connections: [
            {
                conceptId: 'transformers',
                relationship: 'enables',
                strength: 0.95
            },
            {
                conceptId: 'context-window',
                relationship: 'related',
                strength: 0.8
            }
        ],
        sources: [
            {
                id: 'attention-paper-2',
                type: 'paper',
                title: 'Attention Is All You Need',
                credibility: 99
            }
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
            {
                conceptId: 'deep-learning',
                relationship: 'enables',
                strength: 0.9
            },
            {
                conceptId: 'transformers',
                relationship: 'related',
                strength: 0.7
            }
        ],
        sources: [
            {
                id: 'nn-intro',
                type: 'article',
                title: 'Neural Networks Introduction',
                credibility: 80
            }
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
            {
                conceptId: 'neural-networks',
                relationship: 'requires',
                strength: 0.95
            },
            {
                conceptId: 'backpropagation',
                relationship: 'requires',
                strength: 0.9
            }
        ],
        sources: [
            {
                id: 'deeplearning-book',
                type: 'book',
                title: 'Deep Learning',
                authors: [
                    'Goodfellow',
                    'Bengio',
                    'Courville'
                ],
                credibility: 95
            }
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
            {
                conceptId: 'chain-of-thought',
                relationship: 'requires',
                strength: 0.85
            },
            {
                conceptId: 'agi',
                relationship: 'related',
                strength: 0.9
            }
        ],
        sources: [
            {
                id: 'cot-paper',
                type: 'paper',
                title: 'Chain-of-Thought Prompting',
                credibility: 90
            }
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
            {
                conceptId: 'reasoning',
                relationship: 'enables',
                strength: 0.85
            },
            {
                conceptId: 'prompt-engineering',
                relationship: 'related',
                strength: 0.8
            }
        ],
        sources: [
            {
                id: 'cot-paper-2',
                type: 'paper',
                title: 'Chain-of-Thought Prompting Elicits Reasoning',
                credibility: 90
            }
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
            {
                conceptId: 'scaling-laws',
                relationship: 'related',
                strength: 0.85
            },
            {
                conceptId: 'agi',
                relationship: 'related',
                strength: 0.8
            }
        ],
        sources: [
            {
                id: 'emergence-paper',
                type: 'paper',
                title: 'Emergent Abilities of Large Language Models',
                credibility: 85
            }
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
            {
                conceptId: 'emergence',
                relationship: 'related',
                strength: 0.85
            },
            {
                conceptId: 'transformers',
                relationship: 'related',
                strength: 0.7
            }
        ],
        sources: [
            {
                id: 'scaling-paper',
                type: 'paper',
                title: 'Scaling Laws for Neural Language Models',
                credibility: 90
            }
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
            {
                conceptId: 'world-models',
                relationship: 'enables',
                strength: 0.7
            },
            {
                conceptId: 'agi',
                relationship: 'related',
                strength: 0.75
            }
        ],
        sources: [
            {
                id: 'gpt4v-paper',
                type: 'paper',
                title: 'GPT-4V Technical Report',
                credibility: 90
            }
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
            {
                conceptId: 'reasoning',
                relationship: 'enables',
                strength: 0.8
            },
            {
                conceptId: 'ai-agents',
                relationship: 'enables',
                strength: 0.85
            }
        ],
        sources: [
            {
                id: 'world-model-jept',
                type: 'paper',
                title: 'JEPA World Models',
                credibility: 80
            }
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
            {
                conceptId: 'multi-agent-systems',
                relationship: 'enables',
                strength: 0.85
            },
            {
                conceptId: 'tool-use',
                relationship: 'requires',
                strength: 0.8
            }
        ],
        sources: [
            {
                id: 'agent-survey',
                type: 'paper',
                title: 'AI Agents Survey',
                credibility: 80
            }
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
            {
                conceptId: 'ai-agents',
                relationship: 'requires',
                strength: 0.9
            },
            {
                conceptId: 'emergence',
                relationship: 'related',
                strength: 0.8
            }
        ],
        sources: [
            {
                id: 'mas-paper',
                type: 'paper',
                title: 'Multi-Agent Systems Research',
                credibility: 75
            }
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
            {
                conceptId: 'existential-risk',
                relationship: 'related',
                strength: 0.9
            },
            {
                conceptId: 'rlhf',
                relationship: 'related',
                strength: 0.8
            }
        ],
        sources: [
            {
                id: 'alignment-book',
                type: 'book',
                title: 'Human Compatible',
                authors: [
                    'Stuart Russell'
                ],
                credibility: 90
            }
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
            {
                conceptId: 'alignment',
                relationship: 'related',
                strength: 0.8
            },
            {
                conceptId: 'constitutional-ai',
                relationship: 'related',
                strength: 0.75
            }
        ],
        sources: [
            {
                id: 'rlhf-paper',
                type: 'paper',
                title: 'Training language models to follow instructions',
                credibility: 90
            }
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
            {
                conceptId: 'alignment',
                relationship: 'related',
                strength: 0.85
            },
            {
                conceptId: 'rlhf',
                relationship: 'related',
                strength: 0.8
            }
        ],
        sources: [
            {
                id: 'cai-paper',
                type: 'paper',
                title: 'Constitutional AI',
                credibility: 90
            }
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
            {
                conceptId: 'alignment',
                relationship: 'related',
                strength: 0.9
            },
            {
                conceptId: 'asi',
                relationship: 'related',
                strength: 0.95
            }
        ],
        sources: [
            {
                id: 'xrisk-paper',
                type: 'paper',
                title: 'Existential Risk from AI',
                credibility: 75
            }
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
            {
                conceptId: 'asi',
                relationship: 'related',
                strength: 0.95
            },
            {
                conceptId: 'reasoning',
                relationship: 'requires',
                strength: 0.85
            },
            {
                conceptId: 'world-models',
                relationship: 'requires',
                strength: 0.8
            }
        ],
        sources: [
            {
                id: 'agi-overview',
                type: 'article',
                title: 'AGI Overview',
                credibility: 75
            }
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
            {
                conceptId: 'agi',
                relationship: 'requires',
                strength: 0.95
            },
            {
                conceptId: 'intelligence-explosion',
                relationship: 'related',
                strength: 0.9
            },
            {
                conceptId: 'singularity',
                relationship: 'related',
                strength: 0.85
            }
        ],
        sources: [
            {
                id: 'superintelligence-book',
                type: 'book',
                title: 'Superintelligence',
                authors: [
                    'Nick Bostrom'
                ],
                credibility: 80
            }
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
            {
                conceptId: 'asi',
                relationship: 'related',
                strength: 0.9
            },
            {
                conceptId: 'intelligence-explosion',
                relationship: 'related',
                strength: 0.85
            }
        ],
        sources: [
            {
                id: 'singularity-book',
                type: 'book',
                title: 'The Singularity Is Near',
                authors: [
                    'Ray Kurzweil'
                ],
                credibility: 75
            }
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
            {
                conceptId: 'asi',
                relationship: 'enables',
                strength: 0.9
            },
            {
                conceptId: 'singularity',
                relationship: 'related',
                strength: 0.85
            }
        ],
        sources: [
            {
                id: 'ij-good',
                type: 'paper',
                title: 'Speculations Concerning the First Ultraintelligent Machine',
                credibility: 80
            }
        ]
    }
];
function getConceptsByCategory(category) {
    return concepts.filter((c)=>c.category === category);
}
function getConceptsByDifficulty(difficulty) {
    return concepts.filter((c)=>c.difficulty === difficulty);
}
function getConceptById(id) {
    return concepts.find((c)=>c.id === id);
}
function getConnectedConcepts(conceptId) {
    const concept = getConceptById(conceptId);
    if (!concept) return [];
    return concept.connections.map((conn)=>getConceptById(conn.conceptId)).filter((c)=>c !== undefined);
}
function getConceptGraph() {
    const nodes = concepts.map((c)=>({
            id: c.id,
            name: c.name,
            category: c.category,
            difficulty: c.difficulty
        }));
    const links = concepts.flatMap((c)=>c.connections.map((conn)=>({
                source: c.id,
                target: conn.conceptId,
                strength: conn.strength,
                type: conn.relationship
            })));
    return {
        nodes,
        links
    };
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/lib/data/index.ts [app-client] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([]);
// Data exports
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$data$2f$experts$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/data/experts.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$data$2f$timeline$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/data/timeline.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$data$2f$predictions$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/data/predictions.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$data$2f$concepts$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/data/concepts.ts [app-client] (ecmascript)");
;
;
;
;
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/visualization/TimelineRiver.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "TimelineRiver",
    ()=>TimelineRiver
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$data$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/src/lib/data/index.ts [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$data$2f$timeline$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/data/timeline.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
function TimelineRiver() {
    _s();
    const containerRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const [, setVisibleMilestones] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const years = Array.from({
        length: 2035 - 2017 + 1
    }, (_, i)=>2017 + i);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "TimelineRiver.useEffect": ()=>{
            const observer = new IntersectionObserver({
                "TimelineRiver.useEffect": (entries)=>{
                    entries.forEach({
                        "TimelineRiver.useEffect": (entry)=>{
                            if (entry.isIntersecting) {
                                setVisibleMilestones({
                                    "TimelineRiver.useEffect": (prev)=>[
                                            ...prev,
                                            entry.target.id
                                        ]
                                }["TimelineRiver.useEffect"]);
                            }
                        }
                    }["TimelineRiver.useEffect"]);
                }
            }["TimelineRiver.useEffect"], {
                threshold: 0.3
            });
            const milestoneElements = containerRef.current?.querySelectorAll('.milestone');
            milestoneElements?.forEach({
                "TimelineRiver.useEffect": (el)=>observer.observe(el)
            }["TimelineRiver.useEffect"]);
            return ({
                "TimelineRiver.useEffect": ()=>observer.disconnect()
            })["TimelineRiver.useEffect"];
        }
    }["TimelineRiver.useEffect"], []);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        ref: containerRef,
        className: "relative py-8 overflow-x-auto no-scrollbar",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "min-w-[1200px] px-8",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "relative",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute top-1/2 left-0 right-0 h-2 -translate-y-1/2 rounded-full overflow-hidden",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "absolute inset-0 bg-gradient-to-r from-indigo-600 via-violet-500 via-purple-500 via-pink-500 to-rose-500 opacity-60"
                            }, void 0, false, {
                                fileName: "[project]/src/components/visualization/TimelineRiver.tsx",
                                lineNumber: 38,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                                animate: {
                                    x: [
                                        '-100%',
                                        '100%'
                                    ]
                                },
                                transition: {
                                    duration: 3,
                                    repeat: Infinity,
                                    ease: 'linear'
                                },
                                className: "absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent"
                            }, void 0, false, {
                                fileName: "[project]/src/components/visualization/TimelineRiver.tsx",
                                lineNumber: 39,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/visualization/TimelineRiver.tsx",
                        lineNumber: 37,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "relative flex justify-between items-center py-16",
                        children: years.map((year, index)=>{
                            const yearMilestones = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$data$2f$timeline$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["milestones"].filter((m)=>new Date(m.date).getFullYear() === year);
                            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex flex-col items-center",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-xs text-zinc-500 mb-4",
                                        children: year
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/visualization/TimelineRiver.tsx",
                                        lineNumber: 56,
                                        columnNumber: 19
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                                        initial: {
                                            scale: 0
                                        },
                                        animate: {
                                            scale: 1
                                        },
                                        transition: {
                                            delay: index * 0.05
                                        },
                                        className: `relative w-4 h-4 rounded-full ${yearMilestones.length > 0 ? 'bg-violet-500 shadow-lg shadow-violet-500/50' : 'bg-zinc-700'}`,
                                        children: yearMilestones.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "absolute -top-1 -right-1 w-3 h-3 bg-pink-500 rounded-full text-[8px] flex items-center justify-center text-white font-bold",
                                            children: yearMilestones.length
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/visualization/TimelineRiver.tsx",
                                            lineNumber: 70,
                                            columnNumber: 23
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/visualization/TimelineRiver.tsx",
                                        lineNumber: 59,
                                        columnNumber: 19
                                    }, this),
                                    yearMilestones.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "absolute top-full mt-6 flex flex-col gap-2",
                                        children: yearMilestones.slice(0, 2).map((m)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "w-32 text-center",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "text-[10px] text-zinc-400 line-clamp-2",
                                                    children: m.title
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/visualization/TimelineRiver.tsx",
                                                    lineNumber: 84,
                                                    columnNumber: 27
                                                }, this)
                                            }, m.id, false, {
                                                fileName: "[project]/src/components/visualization/TimelineRiver.tsx",
                                                lineNumber: 80,
                                                columnNumber: 25
                                            }, this))
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/visualization/TimelineRiver.tsx",
                                        lineNumber: 78,
                                        columnNumber: 21
                                    }, this)
                                ]
                            }, year, true, {
                                fileName: "[project]/src/components/visualization/TimelineRiver.tsx",
                                lineNumber: 54,
                                columnNumber: 17
                            }, this);
                        })
                    }, void 0, false, {
                        fileName: "[project]/src/components/visualization/TimelineRiver.tsx",
                        lineNumber: 47,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "relative flex justify-between mt-4",
                        children: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$data$2f$timeline$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["timelinePhases"].map((phase, index)=>{
                            const startOffset = (phase.startYear - 2017) / (2035 - 2017) * 100;
                            const width = phase.endYear ? (phase.endYear - phase.startYear) / (2035 - 2017) * 100 : (2035 - phase.startYear) / (2035 - 2017) * 100;
                            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                                initial: {
                                    opacity: 0,
                                    y: 20
                                },
                                animate: {
                                    opacity: 1,
                                    y: 0
                                },
                                transition: {
                                    delay: 0.5 + index * 0.1
                                },
                                className: "absolute text-center",
                                style: {
                                    left: `${startOffset}%`,
                                    width: `${Math.max(width, 10)}%`
                                },
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "h-1 rounded-full mb-2",
                                        style: {
                                            backgroundColor: phase.color
                                        }
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/visualization/TimelineRiver.tsx",
                                        lineNumber: 116,
                                        columnNumber: 19
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-[10px] text-zinc-500 uppercase tracking-wider",
                                        children: phase.shortName
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/visualization/TimelineRiver.tsx",
                                        lineNumber: 120,
                                        columnNumber: 19
                                    }, this)
                                ]
                            }, phase.id, true, {
                                fileName: "[project]/src/components/visualization/TimelineRiver.tsx",
                                lineNumber: 105,
                                columnNumber: 17
                            }, this);
                        })
                    }, void 0, false, {
                        fileName: "[project]/src/components/visualization/TimelineRiver.tsx",
                        lineNumber: 97,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/visualization/TimelineRiver.tsx",
                lineNumber: 35,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/components/visualization/TimelineRiver.tsx",
            lineNumber: 33,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/components/visualization/TimelineRiver.tsx",
        lineNumber: 32,
        columnNumber: 5
    }, this);
}
_s(TimelineRiver, "vl556wd2VSdvveEK4ivanAV9NdM=");
_c = TimelineRiver;
var _c;
__turbopack_context__.k.register(_c, "TimelineRiver");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/visualization/PredictionGauge.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "PredictionGauge",
    ()=>PredictionGauge
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/utils.ts [app-client] (ecmascript)");
'use client';
;
;
;
const colorMap = {
    violet: {
        primary: '#8b5cf6',
        secondary: '#7c3aed',
        bg: 'from-violet-500/20 to-violet-900/20',
        text: 'text-violet-400',
        glow: 'shadow-violet-500/30'
    },
    pink: {
        primary: '#ec4899',
        secondary: '#db2777',
        bg: 'from-pink-500/20 to-pink-900/20',
        text: 'text-pink-400',
        glow: 'shadow-pink-500/30'
    },
    cyan: {
        primary: '#22d3ee',
        secondary: '#06b6d4',
        bg: 'from-cyan-500/20 to-cyan-900/20',
        text: 'text-cyan-400',
        glow: 'shadow-cyan-500/30'
    },
    emerald: {
        primary: '#10b981',
        secondary: '#059669',
        bg: 'from-emerald-500/20 to-emerald-900/20',
        text: 'text-emerald-400',
        glow: 'shadow-emerald-500/30'
    },
    amber: {
        primary: '#f59e0b',
        secondary: '#d97706',
        bg: 'from-amber-500/20 to-amber-900/20',
        text: 'text-amber-400',
        glow: 'shadow-amber-500/30'
    }
};
function PredictionGauge({ label, probability, color }) {
    const colors = colorMap[color];
    const circumference = 2 * Math.PI * 45;
    const strokeDashoffset = circumference - probability * circumference;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
        initial: {
            opacity: 0,
            scale: 0.9
        },
        animate: {
            opacity: 1,
            scale: 1
        },
        whileHover: {
            scale: 1.02
        },
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])('relative p-6 rounded-2xl glass-light border border-transparent hover:border-white/10 transition-all', 'bg-gradient-to-br', colors.bg),
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "relative w-32 h-32 mx-auto mb-4",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                        className: "w-full h-full -rotate-90",
                        viewBox: "0 0 100 100",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                                cx: "50",
                                cy: "50",
                                r: "45",
                                fill: "none",
                                stroke: "rgba(255,255,255,0.1)",
                                strokeWidth: "8"
                            }, void 0, false, {
                                fileName: "[project]/src/components/visualization/PredictionGauge.tsx",
                                lineNumber: 70,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].circle, {
                                cx: "50",
                                cy: "50",
                                r: "45",
                                fill: "none",
                                stroke: colors.primary,
                                strokeWidth: "8",
                                strokeLinecap: "round",
                                strokeDasharray: circumference,
                                initial: {
                                    strokeDashoffset: circumference
                                },
                                animate: {
                                    strokeDashoffset
                                },
                                transition: {
                                    duration: 1.5,
                                    ease: 'easeOut'
                                },
                                style: {
                                    filter: `drop-shadow(0 0 8px ${colors.primary})`
                                }
                            }, void 0, false, {
                                fileName: "[project]/src/components/visualization/PredictionGauge.tsx",
                                lineNumber: 80,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/visualization/PredictionGauge.tsx",
                        lineNumber: 68,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute inset-0 flex items-center justify-center",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].span, {
                            initial: {
                                opacity: 0
                            },
                            animate: {
                                opacity: 1
                            },
                            transition: {
                                delay: 0.5
                            },
                            className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])('text-3xl font-bold', colors.text),
                            children: [
                                Math.round(probability * 100),
                                "%"
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/visualization/PredictionGauge.tsx",
                            lineNumber: 98,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/visualization/PredictionGauge.tsx",
                        lineNumber: 97,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/visualization/PredictionGauge.tsx",
                lineNumber: 67,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "text-center text-sm text-zinc-400 font-medium",
                children: label
            }, void 0, false, {
                fileName: "[project]/src/components/visualization/PredictionGauge.tsx",
                lineNumber: 110,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/visualization/PredictionGauge.tsx",
        lineNumber: 56,
        columnNumber: 5
    }, this);
}
_c = PredictionGauge;
var _c;
__turbopack_context__.k.register(_c, "PredictionGauge");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/visualization/ExpertOrbit.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ExpertOrbit",
    ()=>ExpertOrbit
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$data$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/src/lib/data/index.ts [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$data$2f$experts$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/data/experts.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/utils.ts [app-client] (ecmascript)");
'use client';
;
;
;
;
const stanceColors = {
    optimist: 'from-emerald-500 to-teal-600',
    cautious: 'from-amber-500 to-orange-600',
    skeptic: 'from-blue-500 to-indigo-600',
    neutral: 'from-violet-500 to-purple-600'
};
function ExpertOrbit() {
    const optimists = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$data$2f$experts$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getExpertsByStance"])('optimist');
    const cautious = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$data$2f$experts$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getExpertsByStance"])('cautious');
    const skeptics = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$data$2f$experts$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getExpertsByStance"])('skeptic');
    const neutral = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$data$2f$experts$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getExpertsByStance"])('neutral');
    const allExperts = [
        ...optimists,
        ...cautious,
        ...skeptics,
        ...neutral
    ];
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "relative w-full h-[400px] flex items-center justify-center",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                initial: {
                    scale: 0
                },
                animate: {
                    scale: 1
                },
                transition: {
                    duration: 0.5
                },
                className: "absolute z-10 w-24 h-24 rounded-full bg-gradient-to-br from-violet-600 via-purple-500 to-pink-500 flex items-center justify-center shadow-2xl shadow-violet-500/40",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    className: "text-white font-bold text-lg",
                    children: "AGI"
                }, void 0, false, {
                    fileName: "[project]/src/components/visualization/ExpertOrbit.tsx",
                    lineNumber: 31,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/visualization/ExpertOrbit.tsx",
                lineNumber: 25,
                columnNumber: 7
            }, this),
            [
                1,
                2,
                3,
                4
            ].map((ring)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                    initial: {
                        scale: 0,
                        opacity: 0
                    },
                    animate: {
                        scale: 1,
                        opacity: 0.3
                    },
                    transition: {
                        delay: 0.2 * ring,
                        duration: 0.5
                    },
                    className: "absolute rounded-full border border-zinc-700",
                    style: {
                        width: `${ring * 80 + 100}px`,
                        height: `${ring * 80 + 100}px`
                    }
                }, ring, false, {
                    fileName: "[project]/src/components/visualization/ExpertOrbit.tsx",
                    lineNumber: 36,
                    columnNumber: 9
                }, this)),
            allExperts.map((expert, index)=>{
                const angle = index / allExperts.length * 2 * Math.PI - Math.PI / 2;
                const radius = 140 + index % 3 * 30;
                const x = Math.cos(angle) * radius;
                const y = Math.sin(angle) * radius;
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                    initial: {
                        scale: 0,
                        x: 0,
                        y: 0
                    },
                    animate: {
                        scale: 1,
                        x,
                        y
                    },
                    transition: {
                        delay: 0.5 + index * 0.1,
                        duration: 0.5,
                        type: 'spring',
                        stiffness: 100
                    },
                    className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])('absolute z-20 flex flex-col items-center cursor-pointer group', 'transition-transform hover:scale-110'),
                    style: {
                        transform: 'translate(-50%, -50%)',
                        left: '50%',
                        top: '50%'
                    },
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])('w-12 h-12 rounded-full bg-gradient-to-br flex items-center justify-center shadow-lg', stanceColors[expert.stance]),
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "text-white font-bold text-sm",
                                children: expert.name.split(' ').map((n)=>n[0]).join('')
                            }, void 0, false, {
                                fileName: "[project]/src/components/visualization/ExpertOrbit.tsx",
                                lineNumber: 88,
                                columnNumber: 15
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/components/visualization/ExpertOrbit.tsx",
                            lineNumber: 82,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "absolute top-full mt-2 opacity-0 group-hover:opacity-100 transition-opacity",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "px-2 py-1 rounded bg-zinc-800 text-xs text-zinc-300 whitespace-nowrap",
                                children: expert.name
                            }, void 0, false, {
                                fileName: "[project]/src/components/visualization/ExpertOrbit.tsx",
                                lineNumber: 95,
                                columnNumber: 15
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/components/visualization/ExpertOrbit.tsx",
                            lineNumber: 94,
                            columnNumber: 13
                        }, this)
                    ]
                }, expert.id, true, {
                    fileName: "[project]/src/components/visualization/ExpertOrbit.tsx",
                    lineNumber: 57,
                    columnNumber: 11
                }, this);
            }),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute bottom-0 left-1/2 -translate-x-1/2 flex gap-4",
                children: Object.entries(stanceColors).map(([stance, gradient])=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center gap-2",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])('w-3 h-3 rounded-full bg-gradient-to-br', gradient)
                            }, void 0, false, {
                                fileName: "[project]/src/components/visualization/ExpertOrbit.tsx",
                                lineNumber: 107,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "text-xs text-zinc-500 capitalize",
                                children: stance
                            }, void 0, false, {
                                fileName: "[project]/src/components/visualization/ExpertOrbit.tsx",
                                lineNumber: 108,
                                columnNumber: 13
                            }, this)
                        ]
                    }, stance, true, {
                        fileName: "[project]/src/components/visualization/ExpertOrbit.tsx",
                        lineNumber: 106,
                        columnNumber: 11
                    }, this))
            }, void 0, false, {
                fileName: "[project]/src/components/visualization/ExpertOrbit.tsx",
                lineNumber: 104,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/visualization/ExpertOrbit.tsx",
        lineNumber: 23,
        columnNumber: 5
    }, this);
}
_c = ExpertOrbit;
var _c;
__turbopack_context__.k.register(_c, "ExpertOrbit");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/app/page.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>HomePage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$scroll$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/value/use-scroll.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$transform$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/value/use-transform.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowRight$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/arrow-right.js [app-client] (ecmascript) <export default as ArrowRight>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$clock$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Clock$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/clock.js [app-client] (ecmascript) <export default as Clock>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$users$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Users$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/users.js [app-client] (ecmascript) <export default as Users>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$target$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Target$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/target.js [app-client] (ecmascript) <export default as Target>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$lightbulb$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Lightbulb$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/lightbulb.js [app-client] (ecmascript) <export default as Lightbulb>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$git$2d$branch$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__GitBranch$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/git-branch.js [app-client] (ecmascript) <export default as GitBranch>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trending$2d$up$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__TrendingUp$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/trending-up.js [app-client] (ecmascript) <export default as TrendingUp>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$sparkles$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Sparkles$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/sparkles.js [app-client] (ecmascript) <export default as Sparkles>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$brain$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Brain$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/brain.js [app-client] (ecmascript) <export default as Brain>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$rocket$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Rocket$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/rocket.js [app-client] (ecmascript) <export default as Rocket>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/button.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$visualization$2f$TimelineRiver$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/visualization/TimelineRiver.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$visualization$2f$PredictionGauge$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/visualization/PredictionGauge.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$visualization$2f$ExpertOrbit$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/visualization/ExpertOrbit.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$stores$2f$useStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/stores/useStore.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
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
const quickStats = [
    {
        label: 'AGI by 2030',
        value: '55%',
        trend: 'up',
        color: 'text-violet-400',
        subtitle: 'community forecast'
    },
    {
        label: 'Expert Predictions',
        value: '2,847',
        trend: 'up',
        color: 'text-cyan-400',
        subtitle: 'tracked'
    },
    {
        label: 'Active Forecasters',
        value: '12.4K',
        trend: 'up',
        color: 'text-pink-400',
        subtitle: 'estimated'
    },
    {
        label: 'Timeline Acceleration',
        value: '48y',
        trend: 'down',
        color: 'text-amber-400',
        subtitle: 'shortened est.'
    }
];
const features = [
    {
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$clock$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Clock$3e$__["Clock"],
        title: 'Living Timeline',
        description: 'Navigate the river of AI evolution — from transformers to superintelligence.',
        href: '/timeline',
        gradient: 'from-violet-500 to-purple-600'
    },
    {
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$users$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Users$3e$__["Users"],
        title: 'Expert Constellation',
        description: 'Explore predictions from the minds shaping AI: Altman, Hinton, Hassabis, and more.',
        href: '/experts',
        gradient: 'from-blue-500 to-indigo-600'
    },
    {
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$target$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Target$3e$__["Target"],
        title: 'Prediction Dashboard',
        description: 'Live probability tracking. See how forecasts shift as breakthroughs happen.',
        href: '/predictions',
        gradient: 'from-pink-500 to-rose-600'
    },
    {
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$lightbulb$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Lightbulb$3e$__["Lightbulb"],
        title: 'Concept Explorer',
        description: 'From "attention mechanism" to "intelligence explosion" — understand it all.',
        href: '/concepts',
        gradient: 'from-amber-500 to-orange-600'
    },
    {
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$git$2d$branch$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__GitBranch$3e$__["GitBranch"],
        title: 'Future Scenarios',
        description: 'Branch into possible futures. Optimistic, cautious, or transformative?',
        href: '/scenarios',
        gradient: 'from-emerald-500 to-teal-600'
    },
    {
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$sparkles$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Sparkles$3e$__["Sparkles"],
        title: 'Source Attribution',
        description: 'Every claim traced. Every prediction sourced. Full transparency.',
        href: '/sources',
        gradient: 'from-cyan-500 to-blue-600'
    }
];
function HomePage() {
    _s();
    const { startSession, mode } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$stores$2f$useStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useStore"])();
    const containerRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const { scrollYProgress } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$scroll$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useScroll"])({
        target: containerRef,
        offset: [
            'start start',
            'end start'
        ]
    });
    const heroOpacity = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$transform$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTransform"])(scrollYProgress, [
        0,
        0.3
    ], [
        1,
        0
    ]);
    const heroScale = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$transform$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTransform"])(scrollYProgress, [
        0,
        0.3
    ], [
        1,
        0.95
    ]);
    const heroY = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$transform$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTransform"])(scrollYProgress, [
        0,
        0.3
    ], [
        0,
        -50
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "HomePage.useEffect": ()=>{
            startSession();
        }
    }["HomePage.useEffect"], [
        startSession
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        ref: containerRef,
        className: "relative",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].section, {
                style: {
                    opacity: heroOpacity,
                    scale: heroScale,
                    y: heroY
                },
                className: "relative min-h-screen flex flex-col items-center justify-center px-4 pt-20",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute inset-0 overflow-hidden pointer-events-none",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                                animate: {
                                    x: [
                                        0,
                                        100,
                                        0
                                    ],
                                    y: [
                                        0,
                                        -50,
                                        0
                                    ],
                                    scale: [
                                        1,
                                        1.2,
                                        1
                                    ]
                                },
                                transition: {
                                    duration: 20,
                                    repeat: Infinity,
                                    ease: 'easeInOut'
                                },
                                className: "absolute top-1/4 left-1/4 w-[600px] h-[600px] rounded-full bg-violet-500/10 blur-[100px]"
                            }, void 0, false, {
                                fileName: "[project]/src/app/page.tsx",
                                lineNumber: 99,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                                animate: {
                                    x: [
                                        0,
                                        -80,
                                        0
                                    ],
                                    y: [
                                        0,
                                        60,
                                        0
                                    ],
                                    scale: [
                                        1,
                                        0.8,
                                        1
                                    ]
                                },
                                transition: {
                                    duration: 25,
                                    repeat: Infinity,
                                    ease: 'easeInOut'
                                },
                                className: "absolute bottom-1/4 right-1/4 w-[500px] h-[500px] rounded-full bg-pink-500/10 blur-[100px]"
                            }, void 0, false, {
                                fileName: "[project]/src/app/page.tsx",
                                lineNumber: 108,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                                animate: {
                                    x: [
                                        0,
                                        50,
                                        0
                                    ],
                                    y: [
                                        0,
                                        -30,
                                        0
                                    ]
                                },
                                transition: {
                                    duration: 15,
                                    repeat: Infinity,
                                    ease: 'easeInOut'
                                },
                                className: "absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] rounded-full bg-cyan-500/5 blur-[80px]"
                            }, void 0, false, {
                                fileName: "[project]/src/app/page.tsx",
                                lineNumber: 117,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/page.tsx",
                        lineNumber: 98,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "relative z-10 text-center max-w-5xl mx-auto",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
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
                                className: "inline-flex items-center gap-2 px-4 py-2 rounded-full glass-light mb-8",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "relative flex h-2 w-2",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/page.tsx",
                                                lineNumber: 137,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "relative inline-flex rounded-full h-2 w-2 bg-emerald-500"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/page.tsx",
                                                lineNumber: 138,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/page.tsx",
                                        lineNumber: 136,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-sm text-zinc-400",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-white font-medium",
                                                children: "Data"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/page.tsx",
                                                lineNumber: 141,
                                                columnNumber: 15
                                            }, this),
                                            " last updated Dec 2024"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/page.tsx",
                                        lineNumber: 140,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/page.tsx",
                                lineNumber: 130,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].h1, {
                                initial: {
                                    opacity: 0,
                                    y: 30
                                },
                                animate: {
                                    opacity: 1,
                                    y: 0
                                },
                                transition: {
                                    delay: 0.3,
                                    duration: 0.8
                                },
                                className: "text-5xl sm:text-7xl lg:text-8xl font-bold tracking-tight mb-6",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-white",
                                        children: "The Age of "
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/page.tsx",
                                        lineNumber: 152,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "gradient-text",
                                        children: "AI"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/page.tsx",
                                        lineNumber: 153,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/page.tsx",
                                lineNumber: 146,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].p, {
                                initial: {
                                    opacity: 0,
                                    y: 30
                                },
                                animate: {
                                    opacity: 1,
                                    y: 0
                                },
                                transition: {
                                    delay: 0.4,
                                    duration: 0.8
                                },
                                className: "text-xl sm:text-2xl text-zinc-400 mb-12 max-w-3xl mx-auto leading-relaxed",
                                children: [
                                    "Explore the evolution from ",
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-violet-400",
                                        children: "Large Language Models"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/page.tsx",
                                        lineNumber: 163,
                                        columnNumber: 40
                                    }, this),
                                    " to",
                                    ' ',
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-pink-400",
                                        children: "Artificial Superintelligence"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/page.tsx",
                                        lineNumber: 164,
                                        columnNumber: 13
                                    }, this),
                                    ". Track expert predictions, discover concepts, and navigate the future."
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/page.tsx",
                                lineNumber: 157,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                                initial: {
                                    opacity: 0,
                                    y: 30
                                },
                                animate: {
                                    opacity: 1,
                                    y: 0
                                },
                                transition: {
                                    delay: 0.5,
                                    duration: 0.8
                                },
                                className: "flex flex-col sm:flex-row items-center justify-center gap-4 mb-16",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                        href: "/timeline",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                            size: "lg",
                                            className: "bg-gradient-to-r from-violet-600 to-purple-600 hover:from-violet-500 hover:to-purple-500 text-white px-8 py-6 text-lg rounded-full shadow-lg shadow-violet-500/30 group",
                                            children: [
                                                "Begin Exploration",
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowRight$3e$__["ArrowRight"], {
                                                    className: "w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/page.tsx",
                                                    lineNumber: 181,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/page.tsx",
                                            lineNumber: 176,
                                            columnNumber: 15
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/page.tsx",
                                        lineNumber: 175,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                        href: "/predictions",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                            size: "lg",
                                            variant: "outline",
                                            className: "border-zinc-700 text-zinc-300 hover:bg-zinc-800/50 px-8 py-6 text-lg rounded-full",
                                            children: "View Predictions"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/page.tsx",
                                            lineNumber: 185,
                                            columnNumber: 15
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/page.tsx",
                                        lineNumber: 184,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/page.tsx",
                                lineNumber: 169,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                                initial: {
                                    opacity: 0,
                                    y: 30
                                },
                                animate: {
                                    opacity: 1,
                                    y: 0
                                },
                                transition: {
                                    delay: 0.6,
                                    duration: 0.8
                                },
                                className: "grid grid-cols-2 sm:grid-cols-4 gap-4 max-w-3xl mx-auto",
                                children: quickStats.map((stat, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                                        initial: {
                                            opacity: 0,
                                            scale: 0.9
                                        },
                                        animate: {
                                            opacity: 1,
                                            scale: 1
                                        },
                                        transition: {
                                            delay: 0.7 + index * 0.1
                                        },
                                        className: "glass-light rounded-2xl p-4 text-center",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: `text-2xl sm:text-3xl font-bold ${stat.color} mb-1`,
                                                children: [
                                                    stat.value,
                                                    stat.trend === 'up' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trending$2d$up$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__TrendingUp$3e$__["TrendingUp"], {
                                                        className: "w-4 h-4 inline ml-1"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/page.tsx",
                                                        lineNumber: 212,
                                                        columnNumber: 43
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/page.tsx",
                                                lineNumber: 210,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "text-xs text-zinc-500",
                                                children: stat.label
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/page.tsx",
                                                lineNumber: 214,
                                                columnNumber: 17
                                            }, this),
                                            stat.subtitle && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "text-[10px] text-zinc-600",
                                                children: stat.subtitle
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/page.tsx",
                                                lineNumber: 216,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, stat.label, true, {
                                        fileName: "[project]/src/app/page.tsx",
                                        lineNumber: 203,
                                        columnNumber: 15
                                    }, this))
                            }, void 0, false, {
                                fileName: "[project]/src/app/page.tsx",
                                lineNumber: 196,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/page.tsx",
                        lineNumber: 128,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                        initial: {
                            opacity: 0
                        },
                        animate: {
                            opacity: 1
                        },
                        transition: {
                            delay: 1.5
                        },
                        className: "absolute bottom-8 left-1/2 -translate-x-1/2",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                            animate: {
                                y: [
                                    0,
                                    10,
                                    0
                                ]
                            },
                            transition: {
                                duration: 2,
                                repeat: Infinity
                            },
                            className: "w-6 h-10 rounded-full border-2 border-zinc-700 flex items-start justify-center p-2",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                                animate: {
                                    y: [
                                        0,
                                        12,
                                        0
                                    ]
                                },
                                transition: {
                                    duration: 2,
                                    repeat: Infinity
                                },
                                className: "w-1 h-2 rounded-full bg-violet-500"
                            }, void 0, false, {
                                fileName: "[project]/src/app/page.tsx",
                                lineNumber: 235,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/app/page.tsx",
                            lineNumber: 230,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/app/page.tsx",
                        lineNumber: 224,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/page.tsx",
                lineNumber: 93,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                className: "relative py-24 px-4",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "max-w-7xl mx-auto",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                            initial: {
                                opacity: 0,
                                y: 40
                            },
                            whileInView: {
                                opacity: 1,
                                y: 0
                            },
                            viewport: {
                                once: true,
                                margin: '-100px'
                            },
                            transition: {
                                duration: 0.8
                            },
                            className: "text-center mb-12",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                    className: "text-3xl sm:text-4xl font-bold text-white mb-4",
                                    children: "The AI Timeline"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/page.tsx",
                                    lineNumber: 254,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-zinc-400 max-w-2xl mx-auto",
                                    children: "Navigate through key milestones and discover how we got here — and where we're going."
                                }, void 0, false, {
                                    fileName: "[project]/src/app/page.tsx",
                                    lineNumber: 257,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/page.tsx",
                            lineNumber: 247,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                            initial: {
                                opacity: 0,
                                scale: 0.95
                            },
                            whileInView: {
                                opacity: 1,
                                scale: 1
                            },
                            viewport: {
                                once: true,
                                margin: '-50px'
                            },
                            transition: {
                                duration: 0.8
                            },
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$visualization$2f$TimelineRiver$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TimelineRiver"], {}, void 0, false, {
                                fileName: "[project]/src/app/page.tsx",
                                lineNumber: 268,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/app/page.tsx",
                            lineNumber: 262,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                            initial: {
                                opacity: 0,
                                y: 20
                            },
                            whileInView: {
                                opacity: 1,
                                y: 0
                            },
                            viewport: {
                                once: true
                            },
                            transition: {
                                delay: 0.3
                            },
                            className: "text-center mt-8",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                href: "/timeline",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                    variant: "ghost",
                                    className: "text-violet-400 hover:text-violet-300 hover:bg-violet-500/10",
                                    children: [
                                        "Explore full timeline",
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowRight$3e$__["ArrowRight"], {
                                            className: "w-4 h-4 ml-2"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/page.tsx",
                                            lineNumber: 284,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/page.tsx",
                                    lineNumber: 279,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/app/page.tsx",
                                lineNumber: 278,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/app/page.tsx",
                            lineNumber: 271,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/page.tsx",
                    lineNumber: 246,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/app/page.tsx",
                lineNumber: 245,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                className: "relative py-24 px-4",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "max-w-7xl mx-auto",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                            initial: {
                                opacity: 0,
                                y: 40
                            },
                            whileInView: {
                                opacity: 1,
                                y: 0
                            },
                            viewport: {
                                once: true
                            },
                            transition: {
                                duration: 0.8
                            },
                            className: "text-center mb-12",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                    className: "text-3xl sm:text-4xl font-bold text-white mb-4",
                                    children: "Live Predictions"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/page.tsx",
                                    lineNumber: 301,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-zinc-400 max-w-2xl mx-auto",
                                    children: "Probability estimates from forecasters and experts. Updated in real-time."
                                }, void 0, false, {
                                    fileName: "[project]/src/app/page.tsx",
                                    lineNumber: 304,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/page.tsx",
                            lineNumber: 294,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                            initial: {
                                opacity: 0
                            },
                            whileInView: {
                                opacity: 1
                            },
                            viewport: {
                                once: true
                            },
                            transition: {
                                duration: 0.8
                            },
                            className: "grid sm:grid-cols-2 lg:grid-cols-4 gap-6",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$visualization$2f$PredictionGauge$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PredictionGauge"], {
                                    label: "AGI by 2027",
                                    probability: 0.25,
                                    color: "violet"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/page.tsx",
                                    lineNumber: 316,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$visualization$2f$PredictionGauge$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PredictionGauge"], {
                                    label: "AGI by 2030",
                                    probability: 0.55,
                                    color: "pink"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/page.tsx",
                                    lineNumber: 321,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$visualization$2f$PredictionGauge$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PredictionGauge"], {
                                    label: "ASI by 2035",
                                    probability: 0.35,
                                    color: "cyan"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/page.tsx",
                                    lineNumber: 326,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$visualization$2f$PredictionGauge$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PredictionGauge"], {
                                    label: "Alignment Success",
                                    probability: 0.45,
                                    color: "emerald"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/page.tsx",
                                    lineNumber: 331,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/page.tsx",
                            lineNumber: 309,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                            initial: {
                                opacity: 0,
                                y: 20
                            },
                            whileInView: {
                                opacity: 1,
                                y: 0
                            },
                            viewport: {
                                once: true
                            },
                            transition: {
                                delay: 0.3
                            },
                            className: "text-center mt-8",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                href: "/predictions",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                    variant: "ghost",
                                    className: "text-pink-400 hover:text-pink-300 hover:bg-pink-500/10",
                                    children: [
                                        "View all predictions",
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowRight$3e$__["ArrowRight"], {
                                            className: "w-4 h-4 ml-2"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/page.tsx",
                                            lineNumber: 351,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/page.tsx",
                                    lineNumber: 346,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/app/page.tsx",
                                lineNumber: 345,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/app/page.tsx",
                            lineNumber: 338,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/page.tsx",
                    lineNumber: 293,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/app/page.tsx",
                lineNumber: 292,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                className: "relative py-24 px-4",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "max-w-7xl mx-auto",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                            initial: {
                                opacity: 0,
                                y: 40
                            },
                            whileInView: {
                                opacity: 1,
                                y: 0
                            },
                            viewport: {
                                once: true
                            },
                            transition: {
                                duration: 0.8
                            },
                            className: "text-center mb-12",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                    className: "text-3xl sm:text-4xl font-bold text-white mb-4",
                                    children: "Expert Perspectives"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/page.tsx",
                                    lineNumber: 368,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-zinc-400 max-w-2xl mx-auto",
                                    children: "What do the leading minds in AI think about the future? Explore their predictions."
                                }, void 0, false, {
                                    fileName: "[project]/src/app/page.tsx",
                                    lineNumber: 371,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/page.tsx",
                            lineNumber: 361,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                            initial: {
                                opacity: 0,
                                scale: 0.95
                            },
                            whileInView: {
                                opacity: 1,
                                scale: 1
                            },
                            viewport: {
                                once: true
                            },
                            transition: {
                                duration: 0.8
                            },
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$visualization$2f$ExpertOrbit$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ExpertOrbit"], {}, void 0, false, {
                                fileName: "[project]/src/app/page.tsx",
                                lineNumber: 382,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/app/page.tsx",
                            lineNumber: 376,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                            initial: {
                                opacity: 0,
                                y: 20
                            },
                            whileInView: {
                                opacity: 1,
                                y: 0
                            },
                            viewport: {
                                once: true
                            },
                            transition: {
                                delay: 0.3
                            },
                            className: "text-center mt-8",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                href: "/experts",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                    variant: "ghost",
                                    className: "text-blue-400 hover:text-blue-300 hover:bg-blue-500/10",
                                    children: [
                                        "Meet the experts",
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowRight$3e$__["ArrowRight"], {
                                            className: "w-4 h-4 ml-2"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/page.tsx",
                                            lineNumber: 398,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/page.tsx",
                                    lineNumber: 393,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/app/page.tsx",
                                lineNumber: 392,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/app/page.tsx",
                            lineNumber: 385,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/page.tsx",
                    lineNumber: 360,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/app/page.tsx",
                lineNumber: 359,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                className: "relative py-24 px-4",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "max-w-7xl mx-auto",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                            initial: {
                                opacity: 0,
                                y: 40
                            },
                            whileInView: {
                                opacity: 1,
                                y: 0
                            },
                            viewport: {
                                once: true
                            },
                            transition: {
                                duration: 0.8
                            },
                            className: "text-center mb-12",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                    className: "text-3xl sm:text-4xl font-bold text-white mb-4",
                                    children: "Explore Everything"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/page.tsx",
                                    lineNumber: 415,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-zinc-400 max-w-2xl mx-auto",
                                    children: "Dive deep into the age of AI with our interactive features."
                                }, void 0, false, {
                                    fileName: "[project]/src/app/page.tsx",
                                    lineNumber: 418,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/page.tsx",
                            lineNumber: 408,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "grid sm:grid-cols-2 lg:grid-cols-3 gap-6",
                            children: features.map((feature, index)=>{
                                const Icon = feature.icon;
                                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                                    initial: {
                                        opacity: 0,
                                        y: 30
                                    },
                                    whileInView: {
                                        opacity: 1,
                                        y: 0
                                    },
                                    viewport: {
                                        once: true
                                    },
                                    transition: {
                                        delay: index * 0.1,
                                        duration: 0.5
                                    },
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                        href: feature.href,
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                                            whileHover: {
                                                scale: 1.02,
                                                y: -5
                                            },
                                            className: "group relative p-6 rounded-2xl glass-light border border-transparent hover:border-violet-500/30 transition-all duration-300 h-full",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: `w-12 h-12 rounded-xl bg-gradient-to-br ${feature.gradient} flex items-center justify-center mb-4 shadow-lg`,
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Icon, {
                                                        className: "w-6 h-6 text-white"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/page.tsx",
                                                        lineNumber: 440,
                                                        columnNumber: 25
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/page.tsx",
                                                    lineNumber: 439,
                                                    columnNumber: 23
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                    className: "text-xl font-bold text-white mb-2 group-hover:text-violet-300 transition-colors",
                                                    children: feature.title
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/page.tsx",
                                                    lineNumber: 443,
                                                    columnNumber: 23
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "text-zinc-400 text-sm leading-relaxed",
                                                    children: feature.description
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/page.tsx",
                                                    lineNumber: 446,
                                                    columnNumber: 23
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowRight$3e$__["ArrowRight"], {
                                                    className: "absolute bottom-6 right-6 w-5 h-5 text-zinc-600 group-hover:text-violet-400 group-hover:translate-x-1 transition-all"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/page.tsx",
                                                    lineNumber: 450,
                                                    columnNumber: 23
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/page.tsx",
                                            lineNumber: 435,
                                            columnNumber: 21
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/page.tsx",
                                        lineNumber: 434,
                                        columnNumber: 19
                                    }, this)
                                }, feature.title, false, {
                                    fileName: "[project]/src/app/page.tsx",
                                    lineNumber: 427,
                                    columnNumber: 17
                                }, this);
                            })
                        }, void 0, false, {
                            fileName: "[project]/src/app/page.tsx",
                            lineNumber: 423,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/page.tsx",
                    lineNumber: 407,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/app/page.tsx",
                lineNumber: 406,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                className: "relative py-24 px-4",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "max-w-4xl mx-auto text-center",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                        initial: {
                            opacity: 0,
                            y: 40
                        },
                        whileInView: {
                            opacity: 1,
                            y: 0
                        },
                        viewport: {
                            once: true
                        },
                        transition: {
                            duration: 0.8
                        },
                        className: "glass rounded-3xl p-12 relative overflow-hidden",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "absolute inset-0 bg-gradient-to-br from-violet-500/10 via-transparent to-pink-500/10"
                            }, void 0, false, {
                                fileName: "[project]/src/app/page.tsx",
                                lineNumber: 471,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "relative z-10",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$brain$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Brain$3e$__["Brain"], {
                                        className: "w-16 h-16 text-violet-400 mx-auto mb-6"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/page.tsx",
                                        lineNumber: 474,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                        className: "text-3xl sm:text-4xl font-bold text-white mb-4",
                                        children: "Ready to Explore the Future?"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/page.tsx",
                                        lineNumber: 475,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-zinc-400 mb-8 max-w-xl mx-auto",
                                        children: "Start your journey through the AI evolution. Discover predictions, explore concepts, and understand what experts think is coming next."
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/page.tsx",
                                        lineNumber: 478,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                        href: "/timeline",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                            size: "lg",
                                            className: "bg-gradient-to-r from-violet-600 to-purple-600 hover:from-violet-500 hover:to-purple-500 text-white px-8 py-6 text-lg rounded-full shadow-lg shadow-violet-500/30",
                                            children: [
                                                "Start Exploring",
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$rocket$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Rocket$3e$__["Rocket"], {
                                                    className: "w-5 h-5 ml-2"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/page.tsx",
                                                    lineNumber: 488,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/page.tsx",
                                            lineNumber: 483,
                                            columnNumber: 17
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/page.tsx",
                                        lineNumber: 482,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/page.tsx",
                                lineNumber: 473,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/page.tsx",
                        lineNumber: 463,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/app/page.tsx",
                    lineNumber: 462,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/app/page.tsx",
                lineNumber: 461,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("footer", {
                className: "relative py-12 px-4 border-t border-zinc-800/50",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "max-w-7xl mx-auto",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex flex-col sm:flex-row items-center justify-between gap-4",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center gap-3",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "w-8 h-8 rounded-lg bg-gradient-to-br from-violet-600 to-purple-500 flex items-center justify-center",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$sparkles$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Sparkles$3e$__["Sparkles"], {
                                            className: "w-4 h-4 text-white"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/page.tsx",
                                            lineNumber: 502,
                                            columnNumber: 17
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/page.tsx",
                                        lineNumber: 501,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-sm text-zinc-500",
                                        children: "SYNTHESIS — An AI Evolution Timeline"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/page.tsx",
                                        lineNumber: 504,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/page.tsx",
                                lineNumber: 500,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center gap-6 text-sm text-zinc-500",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                        href: "/sources",
                                        className: "hover:text-zinc-300 transition-colors",
                                        children: "Sources"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/page.tsx",
                                        lineNumber: 510,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                        href: "/about",
                                        className: "hover:text-zinc-300 transition-colors",
                                        children: "About"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/page.tsx",
                                        lineNumber: 513,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-zinc-700",
                                        children: "|"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/page.tsx",
                                        lineNumber: 516,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "flex items-center gap-2",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-xs",
                                                children: "Mode:"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/page.tsx",
                                                lineNumber: 518,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-zinc-300 capitalize",
                                                children: mode
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/page.tsx",
                                                lineNumber: 519,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/page.tsx",
                                        lineNumber: 517,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/page.tsx",
                                lineNumber: 509,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/page.tsx",
                        lineNumber: 499,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/app/page.tsx",
                    lineNumber: 498,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/app/page.tsx",
                lineNumber: 497,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/page.tsx",
        lineNumber: 91,
        columnNumber: 5
    }, this);
}
_s(HomePage, "8YE4OwmEPfxeColNq34QQWMnhiw=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$stores$2f$useStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useStore"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$scroll$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useScroll"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$transform$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTransform"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$transform$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTransform"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$transform$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTransform"]
    ];
});
_c = HomePage;
var _c;
__turbopack_context__.k.register(_c, "HomePage");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=src_b5a3f6f6._.js.map