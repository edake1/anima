// ==========================================
// SYNTHESIS - AI Evolution Timeline
// Expert Data & Predictions
// ==========================================

import { Expert, ExpertStance } from '@/types';

export const experts: Expert[] = [
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
        timeframe: { start: 2025, end: 2027 },
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
        timeframe: { start: 2027, end: 2037 },
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
        source: { id: 'altman-davos-q', type: 'interview', title: 'WEF Davos 2024', credibility: 95 }
      }
    ],
    socialLinks: {
      twitter: 'https://twitter.com/sama',
      linkedin: 'https://linkedin.com/in/samaltman'
    },
    sources: [
      { id: 'openai-about', type: 'article', title: 'About OpenAI', url: 'https://openai.com/about', credibility: 95 }
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
        timeframe: { start: 2029, end: 2029 },
        madeAt: '1999-01-01',
        confidence: 'high',
        status: 'pending',
        source: {
          id: 'kurzweil-book-1999',
          type: 'book',
          title: 'The Age of Spiritual Machines',
          authors: ['Ray Kurzweil'],
          publishDate: '1999-01-01',
          credibility: 90
        }
      },
      {
        id: 'kurzweil-singularity',
        expertId: 'ray-kurzweil',
        prediction: 'The Singularity will occur in 2045',
        topic: 'asi',
        timeframe: { start: 2045, end: 2045 },
        madeAt: '2005-01-01',
        confidence: 'high',
        status: 'pending',
        source: {
          id: 'kurzweil-singularity-book',
          type: 'book',
          title: 'The Singularity Is Near',
          authors: ['Ray Kurzweil'],
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
        source: { id: 'kurzweil-book-q', type: 'book', title: 'The Age of Spiritual Machines', credibility: 90 }
      }
    ],
    sources: [
      { id: 'kurzweil-wiki', type: 'article', title: 'Ray Kurzweil Wikipedia', url: 'https://en.wikipedia.org/wiki/Ray_Kurzweil', credibility: 80 }
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
        timeframe: { start: 2025, end: 2030 },
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
        source: { id: 'hassabis-bbc', type: 'interview', title: 'BBC Interview', credibility: 95 }
      }
    ],
    sources: [
      { id: 'deepmind-about', type: 'article', title: 'DeepMind About', url: 'https://deepmind.com/about', credibility: 97 }
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
        timeframe: { start: 2023, end: 2028 },
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
        timeframe: { start: 2024, end: 2050 },
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
        source: { id: 'hinton-cbs', type: 'interview', title: 'CBS Interview', credibility: 95 }
      },
      {
        id: 'hinton-quote-2',
        text: 'I console myself with the normal excuse: If I hadn\'t done it, somebody else would have.',
        context: 'On his role in AI development',
        date: '2023-05-01',
        source: { id: 'hinton-nyt', type: 'article', title: 'New York Times Interview', credibility: 95 }
      }
    ],
    sources: [
      { id: 'hinton-wiki', type: 'article', title: 'Geoffrey Hinton Wikipedia', url: 'https://en.wikipedia.org/wiki/Geoffrey_Hinton', credibility: 90 }
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
        timeframe: { start: 2025, end: 2030 },
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
        timeframe: { start: 2023, end: 2030 },
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
        source: { id: 'bengio-congress', type: 'interview', title: 'Congressional Hearing', credibility: 95 }
      }
    ],
    sources: [
      { id: 'bengio-mila', type: 'article', title: 'Mila - Yoshua Bengio', url: 'https://mila.quebec/en/yoshua-bengio/', credibility: 95 }
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
        timeframe: { start: 2024, end: 2050 },
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
        timeframe: { start: 2024, end: 2035 },
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
        source: { id: 'lecun-talk', type: 'interview', title: 'Public Talk', credibility: 90 }
      },
      {
        id: 'lecun-quote-2',
        text: 'We are still far from human-level AI.',
        context: 'On AGI timeline',
        date: '2024-02-01',
        source: { id: 'lecun-twitter', type: 'tweet', title: 'Twitter/X', credibility: 85 }
      }
    ],
    sources: [
      { id: 'lecun-meta', type: 'article', title: 'Meta AI - Yann LeCun', url: 'https://ai.meta.com/people/yann-lecun/', credibility: 95 }
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
        timeframe: { start: 2040, end: 2060 },
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
        timeframe: { start: 2023, end: 2030 },
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
        source: { id: 'ng-mars', type: 'interview', title: 'Interview', credibility: 90 }
      }
    ],
    sources: [
      { id: 'ng-deeplearning', type: 'article', title: 'DeepLearning.AI', url: 'https://www.deeplearning.ai/', credibility: 95 }
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
        timeframe: { start: 2025, end: 2030 },
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
        timeframe: { start: 2023, end: 2028 },
        madeAt: '2023-09-01',
        confidence: 'medium',
        status: 'pending',
        source: {
          id: 'amodei-constitutional',
          type: 'paper',
          title: 'Constitutional AI',
          authors: ['Anthropic'],
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
        source: { id: 'amodei-interview', type: 'interview', title: 'Interview', credibility: 95 }
      }
    ],
    sources: [
      { id: 'anthropic-about', type: 'article', title: 'Anthropic About', url: 'https://www.anthropic.com/about', credibility: 96 }
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
        timeframe: { start: 2025, end: 2035 },
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
        source: { id: 'sutskever-ssi-q', type: 'article', title: 'SSI Inc', credibility: 95 }
      }
    ],
    sources: [
      { id: 'sutskever-openai', type: 'article', title: 'OpenAI Research', credibility: 95 }
    ]
  }
];

// Get experts by stance
export function getExpertsByStance(stance: ExpertStance): Expert[] {
  return experts.filter(e => e.stance === stance);
}

// Get expert by ID
export function getExpertById(id: string): Expert | undefined {
  return experts.find(e => e.id === id);
}

// Get all unique predictions
export function getAllPredictions() {
  return experts.flatMap(e => 
    e.predictions.map(p => ({
      ...p,
      expertName: e.name,
      expertStance: e.stance
    }))
  );
}

// Get predictions by topic
export function getPredictionsByTopic(topic: string) {
  return getAllPredictions().filter(p => p.topic === topic);
}
