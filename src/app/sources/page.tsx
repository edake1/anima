'use client';

import { motion } from 'framer-motion';
import { 
  BookOpen, 
  ExternalLink, 
  FileText,
  Video,
  Mic,
  Globe,
  TrendingUp
} from 'lucide-react';
import { milestones } from '@/lib/data/timeline';
import { experts } from '@/lib/data/experts';
import { predictions } from '@/lib/data/predictions';
import { concepts } from '@/lib/data/concepts';
import { cn } from '@/lib/utils';

const sourceTypes = [
  { id: 'paper', label: 'Papers', icon: FileText, color: 'text-violet-400' },
  { id: 'article', label: 'Articles', icon: Globe, color: 'text-blue-400' },
  { id: 'book', label: 'Books', icon: BookOpen, color: 'text-amber-400' },
  { id: 'video', label: 'Videos', icon: Video, color: 'text-pink-400' },
  { id: 'interview', label: 'Interviews', icon: Mic, color: 'text-cyan-400' },
  { id: 'prediction-market', label: 'Prediction Markets', icon: TrendingUp, color: 'text-emerald-400' }
];

const majorSources = [
  {
    name: 'Metaculus',
    description: 'Community forecasting platform aggregating predictions on AI timelines',
    url: 'https://metaculus.com',
    type: 'prediction-market',
    usage: 'AGI/ASI timelines, probability estimates'
  },
  {
    name: 'Epoch AI',
    description: 'Research organization tracking AI compute trends and capabilities',
    url: 'https://epochai.org',
    type: 'article',
    usage: 'Compute growth, model scaling data'
  },
  {
    name: 'OpenAI Research',
    description: 'Published papers and technical reports from OpenAI',
    url: 'https://openai.com/research',
    type: 'paper',
    usage: 'GPT models, scaling laws, alignment'
  },
  {
    name: 'DeepMind Research',
    description: 'Research publications from Google DeepMind',
    url: 'https://deepmind.com/research',
    type: 'paper',
    usage: 'AlphaFold, RL, AGI research'
  },
  {
    name: 'Anthropic Research',
    description: 'Research on AI safety and constitutional AI',
    url: 'https://anthropic.com/research',
    type: 'paper',
    usage: 'Alignment, interpretability, safety'
  },
  {
    name: 'arXiv AI Section',
    description: 'Preprint server for AI/ML research papers',
    url: 'https://arxiv.org/list/cs.AI/recent',
    type: 'paper',
    usage: 'Latest AI research, technical developments'
  }
];

const attributionLibraries = [
  { name: 'Next.js', usage: 'React framework', url: 'https://nextjs.org' },
  { name: 'Tailwind CSS', usage: 'Styling', url: 'https://tailwindcss.com' },
  { name: 'Framer Motion', usage: 'Animations', url: 'https://framer.com/motion' },
  { name: 'shadcn/ui', usage: 'UI components', url: 'https://ui.shadcn.com' },
  { name: 'Lucide Icons', usage: 'Icon library', url: 'https://lucide.dev' },
  { name: 'Zustand', usage: 'State management', url: 'https://zustand-demo.pmnd.rs' }
];

export default function SourcesPage() {
  // Aggregate all sources
  const allSources = [
    ...milestones.flatMap(m => m.sources),
    ...experts.flatMap(e => [...e.sources, ...e.predictions.map(p => p.source)]),
    ...predictions.flatMap(p => p.sources),
    ...concepts.flatMap(c => c.sources)
  ];
  
  // Count by type
  const typeCounts = sourceTypes.map(type => ({
    ...type,
    count: allSources.filter(s => s.type === type.id).length
  }));
  
  return (
    <div className="min-h-screen pt-24 pb-20">
      {/* Hero */}
      <section className="relative px-4 mb-16">
        <div className="max-w-7xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-light mb-6"
          >
            <BookOpen className="w-4 h-4 text-violet-400" />
            <span className="text-sm text-zinc-400">Source Attribution</span>
          </motion.div>
          
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6"
          >
            Full <span className="gradient-text">Transparency</span>
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl text-zinc-400 max-w-2xl mx-auto"
          >
            Every claim, every prediction, every data point — traced to its source. 
            We believe in transparent, verifiable information.
          </motion.p>
        </div>
      </section>
      
      {/* Stats */}
      <section className="px-4 mb-16">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
            {typeCounts.map((type, index) => {
              const Icon = type.icon;
              return (
                <motion.div
                  key={type.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.05 }}
                  className="glass-light rounded-2xl p-6 text-center"
                >
                  <Icon className={cn('w-8 h-8 mx-auto mb-3', type.color)} />
                  <div className="text-2xl font-bold text-white mb-1">{type.count}</div>
                  <div className="text-sm text-zinc-500">{type.label}</div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>
      
      {/* Major Sources */}
      <section className="px-4 mb-16">
        <div className="max-w-7xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-2xl font-bold text-white mb-8"
          >
            Primary Data Sources
          </motion.h2>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {majorSources.map((source, index) => (
              <motion.a
                key={source.name}
                href={source.url}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className="glass-light rounded-2xl p-6 hover:border-violet-500/30 border border-transparent transition-all group"
              >
                <div className="flex items-start justify-between mb-4">
                  <h3 className="text-lg font-bold text-white group-hover:text-violet-300 transition-colors">
                    {source.name}
                  </h3>
                  <ExternalLink className="w-4 h-4 text-zinc-600 group-hover:text-violet-400 transition-colors" />
                </div>
                <p className="text-sm text-zinc-400 mb-4">{source.description}</p>
                <div className="text-xs text-zinc-500">
                  <span className="text-zinc-600">Used for: </span>
                  {source.usage}
                </div>
              </motion.a>
            ))}
          </div>
        </div>
      </section>
      
      {/* Expert Sources */}
      <section className="px-4 mb-16">
        <div className="max-w-7xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-2xl font-bold text-white mb-8"
          >
            Expert Sources
          </motion.h2>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {experts.map((expert, index) => (
              <motion.div
                key={expert.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className="glass-light rounded-xl p-4"
              >
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-violet-500 to-purple-600 flex items-center justify-center text-white font-bold">
                    {expert.name.split(' ').map(n => n[0]).join('')}
                  </div>
                  <div>
                    <div className="font-medium text-white">{expert.name}</div>
                    <div className="text-xs text-zinc-500">{expert.organization}</div>
                  </div>
                </div>
                <div className="text-xs text-zinc-500">
                  {expert.predictions.length} predictions • {expert.quotes.length} quotes
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Technical Attribution */}
      <section className="px-4 mb-16">
        <div className="max-w-7xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-2xl font-bold text-white mb-8"
          >
            Built With
          </motion.h2>
          
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
            {attributionLibraries.map((lib, index) => (
              <motion.a
                key={lib.name}
                href={lib.url}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className="glass-light rounded-xl p-4 text-center hover:border-violet-500/30 border border-transparent transition-all"
              >
                <div className="font-medium text-white mb-1">{lib.name}</div>
                <div className="text-xs text-zinc-500">{lib.usage}</div>
              </motion.a>
            ))}
          </div>
        </div>
      </section>
      
      {/* Methodology */}
      <section className="px-4">
        <div className="max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="glass rounded-2xl p-8"
          >
            <h3 className="text-xl font-bold text-white mb-4">Our Methodology</h3>
            <div className="space-y-4 text-zinc-400">
              <p>
                All data in SYNTHESIS is sourced from publicly available, credible sources. 
                We prioritize peer-reviewed papers, official company announcements, and established 
                prediction platforms like Metaculus.
              </p>
              <p>
                Probability estimates are aggregated from multiple sources and weighted by 
                forecaster track record. Expert predictions are attributed with full context 
                and links to original sources.
              </p>
              <p>
                If you find any inaccuracies or have suggestions for additional sources, 
                please reach out. This is a living project that improves with community input.
              </p>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
