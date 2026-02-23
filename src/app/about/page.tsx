'use client';

import { motion } from 'framer-motion';
import { 
  Info, 
  Sparkles, 
  Target, 
  Users, 
  BookOpen,
  GitBranch,
  Heart
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

const features = [
  {
    icon: BookOpen,
    title: 'Living Timeline',
    description: 'Navigate the evolution of AI from early neural networks to the threshold of AGI. Watch history unfold and the future take shape.'
  },
  {
    icon: Users,
    title: 'Expert Perspectives',
    description: 'Explore predictions from leading AI researchers, entrepreneurs, and thinkers. Understand diverse viewpoints on AI\'s trajectory.'
  },
  {
    icon: Target,
    title: 'Live Predictions',
    description: 'Track probability estimates from Metaculus, prediction markets, and expert surveys. See how beliefs evolve as breakthroughs happen.'
  },
  {
    icon: Sparkles,
    title: 'Concept Explorer',
    description: 'From "attention mechanism" to "intelligence explosion" — master the key concepts that define AI\'s past, present, and future.'
  },
  {
    icon: GitBranch,
    title: 'Future Scenarios',
    description: 'Explore branching futures. Optimistic, cautious, transformative — understand the paths that could lie ahead.'
  },
  {
    icon: Heart,
    title: 'Open Source Values',
    description: 'Full transparency in sources, attribution to creators, and commitment to accurate, unbiased information presentation.'
  }
];

export default function AboutPage() {
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
            <Info className="w-4 h-4 text-violet-400" />
            <span className="text-sm text-zinc-400">About SYNTHESIS</span>
          </motion.div>
          
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6"
          >
            Understanding the <span className="gradient-text">AI Age</span>
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl text-zinc-400 max-w-2xl mx-auto"
          >
            SYNTHESIS is an interactive exploration of artificial intelligence evolution — 
            from today&apos;s large language models to the possibilities of AGI and beyond.
          </motion.p>
        </div>
      </section>
      
      {/* Mission */}
      <section className="px-4 mb-20">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="glass rounded-3xl p-8 sm:p-12"
          >
            <h2 className="text-3xl font-bold text-white mb-6 text-center">Our Mission</h2>
            <div className="space-y-4 text-zinc-400 text-lg leading-relaxed">
              <p>
                We&apos;re living through one of the most significant technological transitions in human history. 
                Artificial intelligence is evolving at an unprecedented pace, with experts predicting 
                human-level AI within years, not decades.
              </p>
              <p>
                Yet understanding this evolution is challenging. Predictions are scattered across papers, 
                interviews, and prediction markets. Concepts are locked behind jargon. And the future 
                remains deeply uncertain.
              </p>
              <p>
                SYNTHESIS aims to change that. We aggregate expert predictions, visualize AI evolution, 
                and present concepts accessibly — helping everyone understand and prepare for the age of AI.
              </p>
            </div>
          </motion.div>
        </div>
      </section>
      
      {/* Features */}
      <section className="px-4 mb-20">
        <div className="max-w-7xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl font-bold text-white mb-12 text-center"
          >
            What You&apos;ll Find Here
          </motion.h2>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="glass-light rounded-2xl p-6"
                >
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-violet-500 to-purple-600 flex items-center justify-center mb-4">
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-lg font-bold text-white mb-2">{feature.title}</h3>
                  <p className="text-zinc-400">{feature.description}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>
      
      {/* Modes */}
      <section className="px-4 mb-20">
        <div className="max-w-4xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl font-bold text-white mb-12 text-center"
          >
            Designed for Everyone
          </motion.h2>
          
          <div className="grid sm:grid-cols-2 gap-6">
            {[
              { mode: 'Explorer', desc: 'New to AI? Get guided explanations and discover concepts at your own pace.', color: 'from-emerald-500 to-teal-600' },
              { mode: 'Analyst', desc: 'Want depth? See data, charts, probabilities, and expert comparisons.', color: 'from-blue-500 to-indigo-600' },
              { mode: 'Visionary', desc: 'Expert level? Access raw data, custom simulations, and contribution tools.', color: 'from-violet-500 to-purple-600' },
              { mode: 'Skeptic', desc: 'Critical thinker? See counter-arguments, uncertainties, and alternative perspectives.', color: 'from-amber-500 to-orange-600' }
            ].map((item, index) => (
              <motion.div
                key={item.mode}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="glass-light rounded-2xl p-6"
              >
                <div className={cn('inline-block px-3 py-1 rounded-full text-sm font-medium mb-3 bg-gradient-to-r', item.color, 'text-white')}>
                  {item.mode} Mode
                </div>
                <p className="text-zinc-400">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      
      {/* CTA */}
      <section className="px-4">
        <div className="max-w-3xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold text-white mb-4">Ready to Explore?</h2>
            <p className="text-zinc-400 mb-8">
              Begin your journey through the AI evolution. Discover predictions, explore concepts, 
              and understand what experts think is coming next.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link href="/timeline">
                <Button size="lg" className="bg-gradient-to-r from-violet-600 to-purple-600 hover:from-violet-500 hover:to-purple-500 text-white px-8 py-6 rounded-full">
                  Start with Timeline
                </Button>
              </Link>
              <Link href="/experts">
                <Button size="lg" variant="outline" className="border-zinc-700 text-zinc-300 px-8 py-6 rounded-full">
                  Meet the Experts
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

function cn(...classes: (string | boolean | undefined | null)[]) {
  return classes.filter(Boolean).join(' ');
}
