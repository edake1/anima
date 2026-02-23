(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
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
"[project]/src/components/ui/badge.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Badge",
    ()=>Badge,
    "badgeVariants",
    ()=>badgeVariants
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$slot$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@radix-ui/react-slot/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$class$2d$variance$2d$authority$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/class-variance-authority/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/utils.ts [app-client] (ecmascript)");
;
;
;
;
const badgeVariants = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$class$2d$variance$2d$authority$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cva"])("inline-flex items-center justify-center rounded-md border px-2 py-0.5 text-xs font-medium w-fit whitespace-nowrap shrink-0 [&>svg]:size-3 gap-1 [&>svg]:pointer-events-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive transition-[color,box-shadow] overflow-hidden", {
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
    const Comp = asChild ? __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$slot$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Slot"] : "span";
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Comp, {
        "data-slot": "badge",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])(badgeVariants({
            variant
        }), className),
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/ui/badge.tsx",
        lineNumber: 38,
        columnNumber: 5
    }, this);
}
_c = Badge;
;
var _c;
__turbopack_context__.k.register(_c, "Badge");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/interactive/ProbabilityChart.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ProbabilityChart",
    ()=>ProbabilityChart
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$chart$2f$AreaChart$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/recharts/es6/chart/AreaChart.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$Area$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/recharts/es6/cartesian/Area.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$XAxis$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/recharts/es6/cartesian/XAxis.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$YAxis$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/recharts/es6/cartesian/YAxis.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$CartesianGrid$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/recharts/es6/cartesian/CartesianGrid.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$component$2f$Tooltip$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/recharts/es6/component/Tooltip.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$component$2f$ResponsiveContainer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/recharts/es6/component/ResponsiveContainer.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$ReferenceLine$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/recharts/es6/cartesian/ReferenceLine.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/utils.ts [app-client] (ecmascript)");
'use client';
;
;
;
;
// eslint-disable-next-line @typescript-eslint/no-explicit-any
const CustomTooltip = ({ active, payload, label })=>{
    if (active && payload && payload.length) {
        const value = payload[0].value;
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "glass rounded-xl px-4 py-3 border border-white/10 shadow-xl",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "text-xs text-zinc-400 mb-1",
                    children: label
                }, void 0, false, {
                    fileName: "[project]/src/components/interactive/ProbabilityChart.tsx",
                    lineNumber: 43,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "text-lg font-bold text-white",
                    children: [
                        Math.round(value * 100),
                        "%"
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/interactive/ProbabilityChart.tsx",
                    lineNumber: 44,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "text-xs text-zinc-500",
                    children: "community probability"
                }, void 0, false, {
                    fileName: "[project]/src/components/interactive/ProbabilityChart.tsx",
                    lineNumber: 45,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/interactive/ProbabilityChart.tsx",
            lineNumber: 42,
            columnNumber: 7
        }, ("TURBOPACK compile-time value", void 0));
    }
    return null;
};
_c = CustomTooltip;
function ProbabilityChart({ data, userPrediction, color = '#8b5cf6', title, showGrid = true, height = 200, className }) {
    const chartData = data.map((d)=>({
            year: d.year,
            probability: d.probability,
            user: userPrediction?.year === d.year ? userPrediction.probability : undefined
        }));
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
        initial: {
            opacity: 0,
            y: 20
        },
        animate: {
            opacity: 1,
            y: 0
        },
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])('w-full', className),
        children: [
            title && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "text-sm font-medium text-zinc-400 mb-3",
                children: title
            }, void 0, false, {
                fileName: "[project]/src/components/interactive/ProbabilityChart.tsx",
                lineNumber: 74,
                columnNumber: 9
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$component$2f$ResponsiveContainer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ResponsiveContainer"], {
                width: "100%",
                height: height,
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$chart$2f$AreaChart$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AreaChart"], {
                    data: chartData,
                    margin: {
                        top: 5,
                        right: 5,
                        left: -20,
                        bottom: 5
                    },
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("defs", {
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("linearGradient", {
                                id: `gradient-${color.replace('#', '')}`,
                                x1: "0",
                                y1: "0",
                                x2: "0",
                                y2: "1",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("stop", {
                                        offset: "5%",
                                        stopColor: color,
                                        stopOpacity: 0.3
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/interactive/ProbabilityChart.tsx",
                                        lineNumber: 80,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("stop", {
                                        offset: "95%",
                                        stopColor: color,
                                        stopOpacity: 0.02
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/interactive/ProbabilityChart.tsx",
                                        lineNumber: 81,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/interactive/ProbabilityChart.tsx",
                                lineNumber: 79,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/components/interactive/ProbabilityChart.tsx",
                            lineNumber: 78,
                            columnNumber: 11
                        }, this),
                        showGrid && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$CartesianGrid$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CartesianGrid"], {
                            strokeDasharray: "3 3",
                            stroke: "rgba(255,255,255,0.05)"
                        }, void 0, false, {
                            fileName: "[project]/src/components/interactive/ProbabilityChart.tsx",
                            lineNumber: 85,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$XAxis$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["XAxis"], {
                            dataKey: "year",
                            tick: {
                                fill: '#71717a',
                                fontSize: 11
                            },
                            axisLine: {
                                stroke: 'rgba(255,255,255,0.1)'
                            },
                            tickLine: false
                        }, void 0, false, {
                            fileName: "[project]/src/components/interactive/ProbabilityChart.tsx",
                            lineNumber: 87,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$YAxis$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["YAxis"], {
                            tickFormatter: (v)=>`${Math.round(v * 100)}%`,
                            tick: {
                                fill: '#71717a',
                                fontSize: 11
                            },
                            axisLine: false,
                            tickLine: false,
                            domain: [
                                0,
                                1
                            ]
                        }, void 0, false, {
                            fileName: "[project]/src/components/interactive/ProbabilityChart.tsx",
                            lineNumber: 93,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$component$2f$Tooltip$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Tooltip"], {
                            content: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(CustomTooltip, {}, void 0, false, {
                                fileName: "[project]/src/components/interactive/ProbabilityChart.tsx",
                                lineNumber: 100,
                                columnNumber: 29
                            }, void 0)
                        }, void 0, false, {
                            fileName: "[project]/src/components/interactive/ProbabilityChart.tsx",
                            lineNumber: 100,
                            columnNumber: 11
                        }, this),
                        userPrediction && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$ReferenceLine$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ReferenceLine"], {
                            x: userPrediction.year,
                            stroke: "#f59e0b",
                            strokeDasharray: "4 4",
                            label: {
                                value: 'You',
                                fill: '#f59e0b',
                                fontSize: 11,
                                position: 'top'
                            }
                        }, void 0, false, {
                            fileName: "[project]/src/components/interactive/ProbabilityChart.tsx",
                            lineNumber: 102,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$Area$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Area"], {
                            type: "monotone",
                            dataKey: "probability",
                            stroke: color,
                            strokeWidth: 2.5,
                            fill: `url(#gradient-${color.replace('#', '')})`,
                            dot: false,
                            activeDot: {
                                r: 5,
                                fill: color,
                                stroke: 'rgba(0,0,0,0.3)',
                                strokeWidth: 2
                            }
                        }, void 0, false, {
                            fileName: "[project]/src/components/interactive/ProbabilityChart.tsx",
                            lineNumber: 114,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/interactive/ProbabilityChart.tsx",
                    lineNumber: 77,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/interactive/ProbabilityChart.tsx",
                lineNumber: 76,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/interactive/ProbabilityChart.tsx",
        lineNumber: 68,
        columnNumber: 5
    }, this);
}
_c1 = ProbabilityChart;
var _c, _c1;
__turbopack_context__.k.register(_c, "CustomTooltip");
__turbopack_context__.k.register(_c1, "ProbabilityChart");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/interactive/LiveMetaculusWidget.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "LiveMetaculusWidget",
    ()=>LiveMetaculusWidget
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trending$2d$up$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__TrendingUp$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/trending-up.js [app-client] (ecmascript) <export default as TrendingUp>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$users$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Users$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/users.js [app-client] (ecmascript) <export default as Users>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$external$2d$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ExternalLink$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/external-link.js [app-client] (ecmascript) <export default as ExternalLink>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$refresh$2d$cw$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__RefreshCw$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/refresh-cw.js [app-client] (ecmascript) <export default as RefreshCw>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/utils.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
;
function LiveMetaculusWidget({ questionId = 5121, className, compact = false }) {
    _s();
    const [data, setData] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [loading, setLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(true);
    const [error, setError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [lastFetch, setLastFetch] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const fetchData = async ()=>{
        setLoading(true);
        setError(false);
        try {
            const res = await fetch(`/api/metaculus?id=${questionId}`);
            if (!res.ok) throw new Error('Failed to fetch');
            const json = await res.json();
            setData(json);
            setLastFetch(new Date());
        } catch  {
            setError(true);
        } finally{
            setLoading(false);
        }
    };
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "LiveMetaculusWidget.useEffect": ()=>{
            fetchData();
        // eslint-disable-next-line react-hooks/exhaustive-deps
        }
    }["LiveMetaculusWidget.useEffect"], [
        questionId
    ]);
    if (loading) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])('glass-light rounded-2xl p-4 animate-pulse', className),
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "h-4 bg-zinc-700/50 rounded w-3/4 mb-3"
                }, void 0, false, {
                    fileName: "[project]/src/components/interactive/LiveMetaculusWidget.tsx",
                    lineNumber: 49,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "h-8 bg-zinc-700/50 rounded w-1/2 mb-2"
                }, void 0, false, {
                    fileName: "[project]/src/components/interactive/LiveMetaculusWidget.tsx",
                    lineNumber: 50,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "h-3 bg-zinc-700/50 rounded w-1/3"
                }, void 0, false, {
                    fileName: "[project]/src/components/interactive/LiveMetaculusWidget.tsx",
                    lineNumber: 51,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/interactive/LiveMetaculusWidget.tsx",
            lineNumber: 48,
            columnNumber: 7
        }, this);
    }
    if (error || !data) {
        return null; // Silently hide if API is unavailable
    }
    const prob = data.communityPrediction;
    if (compact) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].a, {
            href: data.url,
            target: "_blank",
            rel: "noopener noreferrer",
            whileHover: {
                scale: 1.02
            },
            className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])('flex items-center gap-3 glass-light rounded-xl px-4 py-3 border border-violet-500/20 hover:border-violet-500/40 transition-all cursor-pointer', className),
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex items-center gap-1.5",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "relative flex h-2 w-2",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/interactive/LiveMetaculusWidget.tsx",
                                    lineNumber: 76,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "relative inline-flex rounded-full h-2 w-2 bg-emerald-500"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/interactive/LiveMetaculusWidget.tsx",
                                    lineNumber: 77,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/interactive/LiveMetaculusWidget.tsx",
                            lineNumber: 75,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "text-xs text-zinc-400",
                            children: "Metaculus"
                        }, void 0, false, {
                            fileName: "[project]/src/components/interactive/LiveMetaculusWidget.tsx",
                            lineNumber: 79,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/interactive/LiveMetaculusWidget.tsx",
                    lineNumber: 74,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    className: "text-sm text-zinc-300 flex-1 truncate",
                    children: data.title
                }, void 0, false, {
                    fileName: "[project]/src/components/interactive/LiveMetaculusWidget.tsx",
                    lineNumber: 81,
                    columnNumber: 9
                }, this),
                prob !== null && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    className: "text-sm font-bold text-violet-400 tabular-nums",
                    children: [
                        prob,
                        "%"
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/interactive/LiveMetaculusWidget.tsx",
                    lineNumber: 83,
                    columnNumber: 11
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/interactive/LiveMetaculusWidget.tsx",
            lineNumber: 64,
            columnNumber: 7
        }, this);
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
        initial: {
            opacity: 0,
            y: 10
        },
        animate: {
            opacity: 1,
            y: 0
        },
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])('glass-light rounded-2xl p-5 border border-violet-500/20', className),
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex items-start justify-between mb-4",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center gap-2",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "relative flex h-2 w-2",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/interactive/LiveMetaculusWidget.tsx",
                                        lineNumber: 98,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "relative inline-flex rounded-full h-2 w-2 bg-emerald-500"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/interactive/LiveMetaculusWidget.tsx",
                                        lineNumber: 99,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/interactive/LiveMetaculusWidget.tsx",
                                lineNumber: 97,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "text-xs text-emerald-400 font-medium",
                                children: "Live · Metaculus"
                            }, void 0, false, {
                                fileName: "[project]/src/components/interactive/LiveMetaculusWidget.tsx",
                                lineNumber: 101,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/interactive/LiveMetaculusWidget.tsx",
                        lineNumber: 96,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: fetchData,
                        className: "text-zinc-500 hover:text-zinc-300 transition-colors",
                        title: "Refresh",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$refresh$2d$cw$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__RefreshCw$3e$__["RefreshCw"], {
                            className: "w-3.5 h-3.5"
                        }, void 0, false, {
                            fileName: "[project]/src/components/interactive/LiveMetaculusWidget.tsx",
                            lineNumber: 108,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/interactive/LiveMetaculusWidget.tsx",
                        lineNumber: 103,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/interactive/LiveMetaculusWidget.tsx",
                lineNumber: 95,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "text-sm text-zinc-300 leading-snug mb-4 line-clamp-2",
                children: data.title
            }, void 0, false, {
                fileName: "[project]/src/components/interactive/LiveMetaculusWidget.tsx",
                lineNumber: 112,
                columnNumber: 7
            }, this),
            prob !== null && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mb-4",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-end gap-1 mb-1",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "text-3xl font-bold text-violet-400 tabular-nums",
                                children: [
                                    prob,
                                    "%"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/interactive/LiveMetaculusWidget.tsx",
                                lineNumber: 117,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "text-sm text-zinc-500 mb-1",
                                children: "community forecast"
                            }, void 0, false, {
                                fileName: "[project]/src/components/interactive/LiveMetaculusWidget.tsx",
                                lineNumber: 118,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/interactive/LiveMetaculusWidget.tsx",
                        lineNumber: 116,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "h-2 bg-zinc-800 rounded-full overflow-hidden",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                            initial: {
                                width: 0
                            },
                            animate: {
                                width: `${prob}%`
                            },
                            transition: {
                                duration: 1,
                                ease: 'easeOut'
                            },
                            className: "h-full bg-gradient-to-r from-violet-600 to-pink-500 rounded-full"
                        }, void 0, false, {
                            fileName: "[project]/src/components/interactive/LiveMetaculusWidget.tsx",
                            lineNumber: 122,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/interactive/LiveMetaculusWidget.tsx",
                        lineNumber: 121,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/interactive/LiveMetaculusWidget.tsx",
                lineNumber: 115,
                columnNumber: 9
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex items-center justify-between",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center gap-1.5 text-xs text-zinc-500",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$users$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Users$3e$__["Users"], {
                                className: "w-3 h-3"
                            }, void 0, false, {
                                fileName: "[project]/src/components/interactive/LiveMetaculusWidget.tsx",
                                lineNumber: 134,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                children: [
                                    data.numForecasters.toLocaleString(),
                                    " forecasters"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/interactive/LiveMetaculusWidget.tsx",
                                lineNumber: 135,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/interactive/LiveMetaculusWidget.tsx",
                        lineNumber: 133,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                        href: data.url,
                        target: "_blank",
                        rel: "noopener noreferrer",
                        className: "flex items-center gap-1 text-xs text-violet-400 hover:text-violet-300 transition-colors",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trending$2d$up$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__TrendingUp$3e$__["TrendingUp"], {
                                className: "w-3 h-3"
                            }, void 0, false, {
                                fileName: "[project]/src/components/interactive/LiveMetaculusWidget.tsx",
                                lineNumber: 143,
                                columnNumber: 11
                            }, this),
                            "Forecast ",
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$external$2d$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ExternalLink$3e$__["ExternalLink"], {
                                className: "w-2.5 h-2.5"
                            }, void 0, false, {
                                fileName: "[project]/src/components/interactive/LiveMetaculusWidget.tsx",
                                lineNumber: 144,
                                columnNumber: 20
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/interactive/LiveMetaculusWidget.tsx",
                        lineNumber: 137,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/interactive/LiveMetaculusWidget.tsx",
                lineNumber: 132,
                columnNumber: 7
            }, this),
            lastFetch && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "text-[10px] text-zinc-600 mt-3",
                children: [
                    "Updated ",
                    lastFetch.toLocaleTimeString()
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/interactive/LiveMetaculusWidget.tsx",
                lineNumber: 149,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/interactive/LiveMetaculusWidget.tsx",
        lineNumber: 90,
        columnNumber: 5
    }, this);
}
_s(LiveMetaculusWidget, "vVR5tayQeMGC3rZ3C/wuPyj2HZA=");
_c = LiveMetaculusWidget;
var _c;
__turbopack_context__.k.register(_c, "LiveMetaculusWidget");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/app/predictions/[id]/page.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>PredictionDetailPage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$left$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowLeft$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/arrow-left.js [app-client] (ecmascript) <export default as ArrowLeft>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$users$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Users$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/users.js [app-client] (ecmascript) <export default as Users>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trending$2d$up$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__TrendingUp$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/trending-up.js [app-client] (ecmascript) <export default as TrendingUp>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$external$2d$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ExternalLink$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/external-link.js [app-client] (ecmascript) <export default as ExternalLink>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$check$2d$big$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckCircle$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/circle-check-big.js [app-client] (ecmascript) <export default as CheckCircle>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$triangle$2d$alert$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__AlertTriangle$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/triangle-alert.js [app-client] (ecmascript) <export default as AlertTriangle>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$thumbs$2d$up$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ThumbsUp$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/thumbs-up.js [app-client] (ecmascript) <export default as ThumbsUp>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$thumbs$2d$down$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ThumbsDown$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/thumbs-down.js [app-client] (ecmascript) <export default as ThumbsDown>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$data$2f$predictions$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/data/predictions.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$data$2f$experts$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/data/experts.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$badge$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/badge.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$interactive$2f$ProbabilityChart$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/interactive/ProbabilityChart.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$interactive$2f$LiveMetaculusWidget$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/interactive/LiveMetaculusWidget.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/utils.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
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
;
const categoryConfig = {
    'agi-timeline': {
        label: 'AGI Timeline',
        color: 'text-violet-400',
        gradient: 'from-violet-600 to-purple-600'
    },
    'asi-timeline': {
        label: 'ASI Timeline',
        color: 'text-pink-400',
        gradient: 'from-pink-600 to-rose-600'
    },
    'alignment-success': {
        label: 'Alignment',
        color: 'text-emerald-400',
        gradient: 'from-emerald-600 to-teal-600'
    },
    'economic-impact': {
        label: 'Economic Impact',
        color: 'text-amber-400',
        gradient: 'from-amber-600 to-orange-600'
    },
    'capability-breakthrough': {
        label: 'Capability',
        color: 'text-cyan-400',
        gradient: 'from-cyan-600 to-blue-600'
    },
    regulation: {
        label: 'Regulation',
        color: 'text-blue-400',
        gradient: 'from-blue-600 to-indigo-600'
    },
    'societal-change': {
        label: 'Societal Change',
        color: 'text-orange-400',
        gradient: 'from-orange-600 to-red-600'
    }
};
const metaculusMap = {
    'agi-by-2030': 5121,
    'agi-by-2027': 5121,
    'asi-timeline': 3479
};
function PredictionDetailPage({ params }) {
    const { id } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["use"])(params);
    const prediction = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$data$2f$predictions$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getPredictionById"])(id);
    if (!prediction) (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["notFound"])();
    const cat = categoryConfig[prediction.category] ?? categoryConfig['agi-timeline'];
    const pct = Math.round(prediction.probability * 100);
    const metaculusId = metaculusMap[id];
    // Find experts who have predictions on this topic
    const relatedExperts = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$data$2f$experts$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["experts"].filter((e)=>e.predictions.some((p)=>{
            const topic = p.topic;
            const catTopics = {
                'agi-timeline': [
                    'agi'
                ],
                'asi-timeline': [
                    'asi'
                ],
                'alignment-success': [
                    'alignment'
                ],
                'capability-breakthrough': [
                    'agi',
                    'agents'
                ],
                'economic-impact': [
                    'economy'
                ]
            };
            return (catTopics[prediction.category] ?? []).includes(topic);
        }));
    const circumference = 2 * Math.PI * 54;
    const strokeDashoffset = circumference - prediction.probability * circumference;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "min-h-screen pt-20 pb-20",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: `relative bg-gradient-to-br ${cat.gradient}`,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute inset-0 bg-zinc-950/70"
                    }, void 0, false, {
                        fileName: "[project]/src/app/predictions/[id]/page.tsx",
                        lineNumber: 71,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "relative max-w-4xl mx-auto px-4 py-16",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                                initial: {
                                    opacity: 0,
                                    y: -10
                                },
                                animate: {
                                    opacity: 1,
                                    y: 0
                                },
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                    href: "/predictions",
                                    className: "inline-flex items-center gap-2 text-sm text-zinc-400 hover:text-white transition-colors mb-8",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$left$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowLeft$3e$__["ArrowLeft"], {
                                            className: "w-4 h-4"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/predictions/[id]/page.tsx",
                                            lineNumber: 78,
                                            columnNumber: 15
                                        }, this),
                                        "All Predictions"
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/predictions/[id]/page.tsx",
                                    lineNumber: 74,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/app/predictions/[id]/page.tsx",
                                lineNumber: 73,
                                columnNumber: 11
                            }, this),
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
                                    delay: 0.1
                                },
                                className: "flex flex-col sm:flex-row items-center sm:items-start gap-8",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "relative w-36 h-36 flex-shrink-0",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                className: "w-full h-full -rotate-90",
                                                viewBox: "0 0 120 120",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                                                        cx: "60",
                                                        cy: "60",
                                                        r: "54",
                                                        fill: "none",
                                                        stroke: "rgba(255,255,255,0.1)",
                                                        strokeWidth: "8"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/predictions/[id]/page.tsx",
                                                        lineNumber: 92,
                                                        columnNumber: 17
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].circle, {
                                                        cx: "60",
                                                        cy: "60",
                                                        r: "54",
                                                        fill: "none",
                                                        stroke: "white",
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
                                                            filter: 'drop-shadow(0 0 12px rgba(255,255,255,0.3))'
                                                        }
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/predictions/[id]/page.tsx",
                                                        lineNumber: 93,
                                                        columnNumber: 17
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/predictions/[id]/page.tsx",
                                                lineNumber: 91,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "absolute inset-0 flex flex-col items-center justify-center",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].span, {
                                                        initial: {
                                                            opacity: 0
                                                        },
                                                        animate: {
                                                            opacity: 1
                                                        },
                                                        transition: {
                                                            delay: 0.5
                                                        },
                                                        className: "text-3xl font-bold text-white",
                                                        children: [
                                                            pct,
                                                            "%"
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/app/predictions/[id]/page.tsx",
                                                        lineNumber: 107,
                                                        columnNumber: 17
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "text-xs text-zinc-300",
                                                        children: "probability"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/predictions/[id]/page.tsx",
                                                        lineNumber: 115,
                                                        columnNumber: 17
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/predictions/[id]/page.tsx",
                                                lineNumber: 106,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/predictions/[id]/page.tsx",
                                        lineNumber: 90,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex-1 text-center sm:text-left",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$badge$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Badge"], {
                                                className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])('border mb-3', `bg-white/10 ${cat.color} border-white/20`),
                                                children: cat.label
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/predictions/[id]/page.tsx",
                                                lineNumber: 120,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                                className: "text-2xl sm:text-3xl font-bold text-white mb-3",
                                                children: prediction.title
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/predictions/[id]/page.tsx",
                                                lineNumber: 123,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-zinc-300 leading-relaxed",
                                                children: prediction.description
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/predictions/[id]/page.tsx",
                                                lineNumber: 124,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex flex-wrap gap-4 mt-4 text-sm text-zinc-400",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        children: [
                                                            "Expected: ",
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                                className: "text-white",
                                                                children: prediction.timeframe.expected
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/predictions/[id]/page.tsx",
                                                                lineNumber: 127,
                                                                columnNumber: 33
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/app/predictions/[id]/page.tsx",
                                                        lineNumber: 127,
                                                        columnNumber: 17
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        children: [
                                                            "Range: ",
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                                className: "text-white",
                                                                children: [
                                                                    prediction.timeframe.earliest,
                                                                    "–",
                                                                    prediction.timeframe.latest
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/app/predictions/[id]/page.tsx",
                                                                lineNumber: 128,
                                                                columnNumber: 30
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/app/predictions/[id]/page.tsx",
                                                        lineNumber: 128,
                                                        columnNumber: 17
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        children: [
                                                            "Updated: ",
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                                className: "text-white",
                                                                children: new Date(prediction.lastUpdated).toLocaleDateString()
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/predictions/[id]/page.tsx",
                                                                lineNumber: 129,
                                                                columnNumber: 32
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/app/predictions/[id]/page.tsx",
                                                        lineNumber: 129,
                                                        columnNumber: 17
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/predictions/[id]/page.tsx",
                                                lineNumber: 126,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/predictions/[id]/page.tsx",
                                        lineNumber: 119,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/predictions/[id]/page.tsx",
                                lineNumber: 83,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/predictions/[id]/page.tsx",
                        lineNumber: 72,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/predictions/[id]/page.tsx",
                lineNumber: 70,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "max-w-4xl mx-auto px-4 py-10 space-y-10",
                children: [
                    prediction.probabilityDistribution && prediction.probabilityDistribution.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].section, {
                        initial: {
                            opacity: 0,
                            y: 20
                        },
                        animate: {
                            opacity: 1,
                            y: 0
                        },
                        transition: {
                            delay: 0.15
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                className: "text-xl font-bold text-white mb-4",
                                children: "Probability Over Time"
                            }, void 0, false, {
                                fileName: "[project]/src/app/predictions/[id]/page.tsx",
                                lineNumber: 144,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "glass rounded-2xl p-6",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$interactive$2f$ProbabilityChart$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ProbabilityChart"], {
                                    data: prediction.probabilityDistribution.map((d)=>({
                                            year: d.year,
                                            probability: d.probability
                                        })),
                                    color: "#8b5cf6",
                                    height: 220,
                                    title: "Community probability distribution"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/predictions/[id]/page.tsx",
                                    lineNumber: 146,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/app/predictions/[id]/page.tsx",
                                lineNumber: 145,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/predictions/[id]/page.tsx",
                        lineNumber: 139,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].section, {
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
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                className: "text-xl font-bold text-white mb-4",
                                children: "Community Opinion"
                            }, void 0, false, {
                                fileName: "[project]/src/app/predictions/[id]/page.tsx",
                                lineNumber: 165,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "glass rounded-2xl p-6",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex items-center gap-4 mb-4",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex items-center gap-2 text-emerald-400",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$thumbs$2d$up$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ThumbsUp$3e$__["ThumbsUp"], {
                                                        className: "w-5 h-5"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/predictions/[id]/page.tsx",
                                                        lineNumber: 169,
                                                        columnNumber: 17
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "text-2xl font-bold",
                                                        children: prediction.communityVotes.agree.toLocaleString()
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/predictions/[id]/page.tsx",
                                                        lineNumber: 170,
                                                        columnNumber: 17
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/predictions/[id]/page.tsx",
                                                lineNumber: 168,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex-1 h-3 bg-zinc-800 rounded-full overflow-hidden",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                                                    initial: {
                                                        width: 0
                                                    },
                                                    animate: {
                                                        width: `${Math.round(prediction.communityVotes.agree / prediction.communityVotes.total * 100)}%`
                                                    },
                                                    transition: {
                                                        duration: 1,
                                                        ease: 'easeOut'
                                                    },
                                                    className: "h-full bg-gradient-to-r from-emerald-500 to-teal-500 rounded-full"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/predictions/[id]/page.tsx",
                                                    lineNumber: 173,
                                                    columnNumber: 17
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/predictions/[id]/page.tsx",
                                                lineNumber: 172,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex items-center gap-2 text-red-400",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "text-2xl font-bold",
                                                        children: prediction.communityVotes.disagree.toLocaleString()
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/predictions/[id]/page.tsx",
                                                        lineNumber: 181,
                                                        columnNumber: 17
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$thumbs$2d$down$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ThumbsDown$3e$__["ThumbsDown"], {
                                                        className: "w-5 h-5"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/predictions/[id]/page.tsx",
                                                        lineNumber: 182,
                                                        columnNumber: 17
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/predictions/[id]/page.tsx",
                                                lineNumber: 180,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/predictions/[id]/page.tsx",
                                        lineNumber: 167,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-center text-sm text-zinc-500",
                                        children: [
                                            prediction.communityVotes.total.toLocaleString(),
                                            " total votes ·",
                                            ' ',
                                            Math.round(prediction.communityVotes.agree / prediction.communityVotes.total * 100),
                                            "% agree"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/predictions/[id]/page.tsx",
                                        lineNumber: 185,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/predictions/[id]/page.tsx",
                                lineNumber: 166,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/predictions/[id]/page.tsx",
                        lineNumber: 160,
                        columnNumber: 9
                    }, this),
                    metaculusId && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].section, {
                        initial: {
                            opacity: 0,
                            y: 20
                        },
                        animate: {
                            opacity: 1,
                            y: 0
                        },
                        transition: {
                            delay: 0.25
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                className: "text-xl font-bold text-white mb-4",
                                children: "Live Forecast"
                            }, void 0, false, {
                                fileName: "[project]/src/app/predictions/[id]/page.tsx",
                                lineNumber: 199,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$interactive$2f$LiveMetaculusWidget$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["LiveMetaculusWidget"], {
                                questionId: metaculusId
                            }, void 0, false, {
                                fileName: "[project]/src/app/predictions/[id]/page.tsx",
                                lineNumber: 200,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/predictions/[id]/page.tsx",
                        lineNumber: 194,
                        columnNumber: 11
                    }, this),
                    relatedExperts.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].section, {
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
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                className: "text-xl font-bold text-white mb-4",
                                children: "Expert Positions"
                            }, void 0, false, {
                                fileName: "[project]/src/app/predictions/[id]/page.tsx",
                                lineNumber: 211,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "space-y-3",
                                children: relatedExperts.map((expert, i)=>{
                                    const stanceColors = {
                                        optimist: 'from-emerald-500 to-teal-600',
                                        cautious: 'from-amber-500 to-orange-600',
                                        skeptic: 'from-blue-500 to-indigo-600',
                                        neutral: 'from-violet-500 to-purple-600'
                                    };
                                    const relevantPred = expert.predictions[0];
                                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                                        initial: {
                                            opacity: 0,
                                            x: -20
                                        },
                                        animate: {
                                            opacity: 1,
                                            x: 0
                                        },
                                        transition: {
                                            delay: 0.35 + i * 0.05
                                        },
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                            href: `/experts/${expert.id}`,
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "glass-light rounded-xl p-4 border border-transparent hover:border-violet-500/30 transition-all cursor-pointer",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex items-center gap-4",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: `w-10 h-10 rounded-xl bg-gradient-to-br ${stanceColors[expert.stance]} flex items-center justify-center text-white font-bold text-sm flex-shrink-0`,
                                                            children: expert.name.split(' ').map((n)=>n[0]).join('')
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/predictions/[id]/page.tsx",
                                                            lineNumber: 231,
                                                            columnNumber: 27
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "flex-1 min-w-0",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "flex items-center gap-2 mb-0.5",
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                            className: "text-sm font-medium text-white",
                                                                            children: expert.name
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/app/predictions/[id]/page.tsx",
                                                                            lineNumber: 236,
                                                                            columnNumber: 31
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trending$2d$up$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__TrendingUp$3e$__["TrendingUp"], {
                                                                            className: "w-3 h-3 text-zinc-500"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/app/predictions/[id]/page.tsx",
                                                                            lineNumber: 237,
                                                                            columnNumber: 31
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                            className: "text-xs text-zinc-500",
                                                                            children: expert.organization
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/app/predictions/[id]/page.tsx",
                                                                            lineNumber: 238,
                                                                            columnNumber: 31
                                                                        }, this)
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/src/app/predictions/[id]/page.tsx",
                                                                    lineNumber: 235,
                                                                    columnNumber: 29
                                                                }, this),
                                                                relevantPred && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                    className: "text-xs text-zinc-400 truncate",
                                                                    children: relevantPred.prediction
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/predictions/[id]/page.tsx",
                                                                    lineNumber: 241,
                                                                    columnNumber: 31
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/app/predictions/[id]/page.tsx",
                                                            lineNumber: 234,
                                                            columnNumber: 27
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "flex-shrink-0",
                                                            children: [
                                                                expert.stance === 'optimist' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$check$2d$big$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckCircle$3e$__["CheckCircle"], {
                                                                    className: "w-4 h-4 text-emerald-400"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/predictions/[id]/page.tsx",
                                                                    lineNumber: 245,
                                                                    columnNumber: 62
                                                                }, this),
                                                                expert.stance === 'skeptic' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$triangle$2d$alert$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__AlertTriangle$3e$__["AlertTriangle"], {
                                                                    className: "w-4 h-4 text-amber-400"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/predictions/[id]/page.tsx",
                                                                    lineNumber: 246,
                                                                    columnNumber: 61
                                                                }, this),
                                                                expert.stance === 'cautious' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$triangle$2d$alert$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__AlertTriangle$3e$__["AlertTriangle"], {
                                                                    className: "w-4 h-4 text-amber-400"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/predictions/[id]/page.tsx",
                                                                    lineNumber: 247,
                                                                    columnNumber: 62
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/app/predictions/[id]/page.tsx",
                                                            lineNumber: 244,
                                                            columnNumber: 27
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/predictions/[id]/page.tsx",
                                                    lineNumber: 230,
                                                    columnNumber: 25
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/predictions/[id]/page.tsx",
                                                lineNumber: 229,
                                                columnNumber: 23
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/predictions/[id]/page.tsx",
                                            lineNumber: 228,
                                            columnNumber: 21
                                        }, this)
                                    }, expert.id, false, {
                                        fileName: "[project]/src/app/predictions/[id]/page.tsx",
                                        lineNumber: 222,
                                        columnNumber: 19
                                    }, this);
                                })
                            }, void 0, false, {
                                fileName: "[project]/src/app/predictions/[id]/page.tsx",
                                lineNumber: 212,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/predictions/[id]/page.tsx",
                        lineNumber: 206,
                        columnNumber: 11
                    }, this),
                    prediction.sources.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].section, {
                        initial: {
                            opacity: 0,
                            y: 20
                        },
                        animate: {
                            opacity: 1,
                            y: 0
                        },
                        transition: {
                            delay: 0.4
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                className: "text-xl font-bold text-white mb-4",
                                children: "Sources"
                            }, void 0, false, {
                                fileName: "[project]/src/app/predictions/[id]/page.tsx",
                                lineNumber: 266,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "space-y-3",
                                children: prediction.sources.map((source)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "glass-light rounded-xl p-4 border border-zinc-800",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex items-start justify-between gap-3",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                            className: "text-sm font-medium text-white",
                                                            children: source.title
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/predictions/[id]/page.tsx",
                                                            lineNumber: 272,
                                                            columnNumber: 23
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "flex items-center gap-2 mt-1 text-xs text-zinc-500",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$badge$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Badge"], {
                                                                    variant: "outline",
                                                                    className: "border-zinc-700 text-zinc-500 text-[10px]",
                                                                    children: source.type
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/predictions/[id]/page.tsx",
                                                                    lineNumber: 274,
                                                                    columnNumber: 25
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    children: [
                                                                        "Credibility: ",
                                                                        source.credibility,
                                                                        "/100"
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/src/app/predictions/[id]/page.tsx",
                                                                    lineNumber: 277,
                                                                    columnNumber: 25
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/app/predictions/[id]/page.tsx",
                                                            lineNumber: 273,
                                                            columnNumber: 23
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/predictions/[id]/page.tsx",
                                                    lineNumber: 271,
                                                    columnNumber: 21
                                                }, this),
                                                source.url && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                    href: source.url,
                                                    target: "_blank",
                                                    rel: "noopener noreferrer",
                                                    className: "flex items-center gap-1 text-xs text-violet-400 hover:text-violet-300 flex-shrink-0",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$users$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Users$3e$__["Users"], {
                                                            className: "w-3 h-3"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/predictions/[id]/page.tsx",
                                                            lineNumber: 287,
                                                            columnNumber: 25
                                                        }, this),
                                                        "View ",
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$external$2d$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ExternalLink$3e$__["ExternalLink"], {
                                                            className: "w-2.5 h-2.5"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/predictions/[id]/page.tsx",
                                                            lineNumber: 288,
                                                            columnNumber: 30
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/predictions/[id]/page.tsx",
                                                    lineNumber: 281,
                                                    columnNumber: 23
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/predictions/[id]/page.tsx",
                                            lineNumber: 270,
                                            columnNumber: 19
                                        }, this)
                                    }, source.id, false, {
                                        fileName: "[project]/src/app/predictions/[id]/page.tsx",
                                        lineNumber: 269,
                                        columnNumber: 17
                                    }, this))
                            }, void 0, false, {
                                fileName: "[project]/src/app/predictions/[id]/page.tsx",
                                lineNumber: 267,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/predictions/[id]/page.tsx",
                        lineNumber: 261,
                        columnNumber: 11
                    }, this),
                    prediction.relatedPredictions.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].section, {
                        initial: {
                            opacity: 0,
                            y: 20
                        },
                        animate: {
                            opacity: 1,
                            y: 0
                        },
                        transition: {
                            delay: 0.45
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                className: "text-xl font-bold text-white mb-4",
                                children: "Related Predictions"
                            }, void 0, false, {
                                fileName: "[project]/src/app/predictions/[id]/page.tsx",
                                lineNumber: 305,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex flex-wrap gap-3",
                                children: prediction.relatedPredictions.map((relId)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                        href: `/predictions/${relId}`,
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                                            whileHover: {
                                                scale: 1.03
                                            },
                                            className: "glass-light rounded-xl px-4 py-2.5 border border-zinc-800 hover:border-violet-500/40 transition-all cursor-pointer text-sm text-zinc-300 hover:text-white",
                                            children: relId.replace(/-/g, ' ').replace(/\b\w/g, (l)=>l.toUpperCase())
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/predictions/[id]/page.tsx",
                                            lineNumber: 309,
                                            columnNumber: 19
                                        }, this)
                                    }, relId, false, {
                                        fileName: "[project]/src/app/predictions/[id]/page.tsx",
                                        lineNumber: 308,
                                        columnNumber: 17
                                    }, this))
                            }, void 0, false, {
                                fileName: "[project]/src/app/predictions/[id]/page.tsx",
                                lineNumber: 306,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/predictions/[id]/page.tsx",
                        lineNumber: 300,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/predictions/[id]/page.tsx",
                lineNumber: 136,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/predictions/[id]/page.tsx",
        lineNumber: 68,
        columnNumber: 5
    }, this);
}
_c = PredictionDetailPage;
var _c;
__turbopack_context__.k.register(_c, "PredictionDetailPage");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=src_ced711df._.js.map