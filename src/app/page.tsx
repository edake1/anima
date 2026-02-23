'use client';

import { useEffect, useRef } from 'react';
import Link from 'next/link';
import { motion, useScroll, useTransform } from 'framer-motion';
import { 
  ArrowRight, 
  Clock, 
  Users, 
  Target, 
  Lightbulb, 
  GitBranch,
  Sparkles,
  Brain,
  Rocket
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { TimelineRiver } from '@/components/visualization/TimelineRiver';
import { PredictionGauge } from '@/components/visualization/PredictionGauge';
import { ExpertOrbit } from '@/components/visualization/ExpertOrbit';
import { LiveMetaculusWidget } from '@/components/interactive/LiveMetaculusWidget';
import { useStore } from '@/lib/stores/useStore';
import { CountUpStat } from '@/components/ui/CountUpStat';

const quickStats = [
  { label: 'AGI by 2030', value: '55%', trend: 'up', color: 'text-violet-400', subtitle: 'community forecast', accent: 'border-violet-500/40' },
  { label: 'Expert Predictions', value: '73+', trend: 'up', color: 'text-cyan-400', subtitle: 'tracked', accent: 'border-cyan-500/40' },
  { label: 'AI Researchers', value: '9', trend: 'up', color: 'text-pink-400', subtitle: 'profiled', accent: 'border-pink-500/40' },
  { label: 'Timeline Events', value: '60+', trend: 'up', color: 'text-amber-400', subtitle: '1958 → now', accent: 'border-amber-500/40' },
];

const features = [
  {
    icon: Clock,
    title: 'Living Timeline',
    description: 'Navigate the river of AI evolution — from transformers to superintelligence.',
    href: '/timeline',
    gradient: 'from-violet-500 to-purple-600'
  },
  {
    icon: Users,
    title: 'Expert Constellation',
    description: 'Explore predictions from the minds shaping AI: Altman, Hinton, Hassabis, and more.',
    href: '/experts',
    gradient: 'from-blue-500 to-indigo-600'
  },
  {
    icon: Target,
    title: 'Prediction Dashboard',
    description: 'Live probability tracking. See how forecasts shift as breakthroughs happen.',
    href: '/predictions',
    gradient: 'from-pink-500 to-rose-600'
  },
  {
    icon: Lightbulb,
    title: 'Concept Explorer',
    description: 'From "attention mechanism" to "intelligence explosion" — understand it all.',
    href: '/concepts',
    gradient: 'from-amber-500 to-orange-600'
  },
  {
    icon: GitBranch,
    title: 'Future Scenarios',
    description: 'Branch into possible futures. Optimistic, cautious, or transformative?',
    href: '/scenarios',
    gradient: 'from-emerald-500 to-teal-600'
  },
  {
    icon: Sparkles,
    title: 'Source Attribution',
    description: 'Every claim traced. Every prediction sourced. Full transparency.',
    href: '/sources',
    gradient: 'from-cyan-500 to-blue-600'
  }
];

export default function HomePage() {
  const { startSession, mode } = useStore();
  const containerRef = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({ target: containerRef, offset: ['start start', 'end start'] });
  
  const heroOpacity = useTransform(scrollYProgress, [0, 0.3], [1, 0]);
  const heroScale = useTransform(scrollYProgress, [0, 0.3], [1, 0.95]);
  const heroY = useTransform(scrollYProgress, [0, 0.3], [0, -50]);
  
  useEffect(() => {
    startSession();
  }, [startSession]);
  
  return (
    <div ref={containerRef} className="relative">
      {/* Hero Section */}
      <motion.section
        style={{ opacity: heroOpacity, scale: heroScale, y: heroY }}
        className="relative min-h-screen flex flex-col items-center justify-center px-4 pt-20"
      >
        {/* Animated Background Orbs */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <motion.div
            animate={{
              x: [0, 100, 0],
              y: [0, -50, 0],
              scale: [1, 1.2, 1],
            }}
            transition={{ duration: 20, repeat: Infinity, ease: 'easeInOut' }}
            className="absolute top-1/4 left-1/4 w-[600px] h-[600px] rounded-full bg-violet-500/10 blur-[100px]"
          />
          <motion.div
            animate={{
              x: [0, -80, 0],
              y: [0, 60, 0],
              scale: [1, 0.8, 1],
            }}
            transition={{ duration: 25, repeat: Infinity, ease: 'easeInOut' }}
            className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] rounded-full bg-pink-500/10 blur-[100px]"
          />
          <motion.div
            animate={{
              x: [0, 50, 0],
              y: [0, -30, 0],
            }}
            transition={{ duration: 15, repeat: Infinity, ease: 'easeInOut' }}
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] rounded-full bg-cyan-500/5 blur-[80px]"
          />
        </div>
        
        {/* Main Content */}
        <div className="relative z-10 text-center max-w-5xl mx-auto">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-light mb-8"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
            </span>
            <span className="text-sm text-zinc-400">
              <span className="text-white font-medium">Data</span> last updated Feb 2026
            </span>
          </motion.div>
          
          {/* Title */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="text-5xl sm:text-7xl lg:text-8xl font-bold tracking-tight mb-6"
          >
            <span className="text-white">The Age of </span>
            <span className="gradient-text">AI</span>
          </motion.h1>
          
          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="text-xl sm:text-2xl text-zinc-400 mb-12 max-w-3xl mx-auto leading-relaxed"
          >
            Explore the evolution from <span className="text-violet-400">Large Language Models</span> to{' '}
            <span className="text-pink-400">Artificial Superintelligence</span>. 
            Track expert predictions, discover concepts, and navigate the future.
          </motion.p>
          
          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16"
          >
            <Link href="/timeline">
              <Button
                size="lg"
                className="bg-gradient-to-r from-violet-600 to-purple-600 hover:from-violet-500 hover:to-purple-500 text-white px-8 py-6 text-lg rounded-full shadow-lg shadow-violet-500/30 group"
              >
                Begin Exploration
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
            <Link href="/predictions">
              <Button
                size="lg"
                variant="outline"
                className="border-zinc-700 text-zinc-300 hover:bg-zinc-800/50 px-8 py-6 text-lg rounded-full"
              >
                View Predictions
              </Button>
            </Link>
          </motion.div>
          
          {/* Quick Stats */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="grid grid-cols-2 sm:grid-cols-4 gap-4 max-w-3xl mx-auto"
          >
            {quickStats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.7 + index * 0.1 }}
                className={`glass-light rounded-2xl p-4 text-center border-t-2 ${stat.accent}`}
              >
                <div className={`text-2xl sm:text-3xl font-bold tabular-nums ${stat.color} mb-1`}>
                  <CountUpStat value={stat.value} />
                </div>
                <div className="text-xs font-medium text-zinc-300 mb-0.5">{stat.label}</div>
                {stat.subtitle && (
                  <div className="text-[10px] text-zinc-600">{stat.subtitle}</div>
                )}
              </motion.div>
            ))}
          </motion.div>
        </div>
        
        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-6 h-10 rounded-full border-2 border-zinc-700 flex items-start justify-center p-2"
          >
            <motion.div
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="w-1 h-2 rounded-full bg-violet-500"
            />
          </motion.div>
        </motion.div>
      </motion.section>
      
      {/* Timeline River Preview */}
      <section className="relative py-24 px-4">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-violet-500/10 border border-violet-500/20 text-violet-400 text-xs font-medium mb-4">
              <span className="w-1.5 h-1.5 rounded-full bg-violet-400" />
              1958 → Present
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              The AI Timeline
            </h2>
            <p className="text-zinc-400 max-w-2xl mx-auto">
              Navigate through key milestones and discover how we got here — and where we&apos;re going.
            </p>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.8 }}
          >
            <TimelineRiver />
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="text-center mt-8"
          >
            <Link href="/timeline">
              <Button
                variant="ghost"
                className="text-violet-400 hover:text-violet-300 hover:bg-violet-500/10"
              >
                Explore full timeline
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>
      
      {/* Prediction Gauges */}
      <section className="relative py-24 px-4">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-pink-500/10 border border-pink-500/20 text-pink-400 text-xs font-medium mb-4">
              <span className="w-1.5 h-1.5 rounded-full bg-pink-400 animate-pulse" />
              Live Forecasts
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              Probability Dashboard
            </h2>
            <p className="text-zinc-400 max-w-2xl mx-auto">
              Aggregated from Metaculus, prediction markets, and expert surveys.
            </p>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-10"
          >
            <PredictionGauge
              label="AGI by 2027"
              probability={0.25}
              color="violet"
            />
            <PredictionGauge
              label="AGI by 2030"
              probability={0.55}
              color="pink"
            />
            <PredictionGauge
              label="ASI by 2035"
              probability={0.35}
              color="cyan"
            />
            <PredictionGauge
              label="Alignment Success"
              probability={0.45}
              color="emerald"
            />
          </motion.div>

          {/* Live Metaculus */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <p className="text-xs text-zinc-600 text-center mb-3 uppercase tracking-wider">Live from Metaculus</p>
            <div className="grid sm:grid-cols-2 gap-4 max-w-2xl mx-auto">
              <LiveMetaculusWidget questionId={5121} compact />
              <LiveMetaculusWidget questionId={3479} compact />
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="text-center mt-8"
          >
            <Link href="/predictions">
              <Button
                variant="ghost"
                className="text-pink-400 hover:text-pink-300 hover:bg-pink-500/10"
              >
                View all predictions
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>
      
      {/* Expert Constellation Preview */}
      <section className="relative py-24 px-4">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-medium mb-4">
              <span className="w-1.5 h-1.5 rounded-full bg-blue-400" />
              9 Leading Researchers
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              Expert Perspectives
            </h2>
            <p className="text-zinc-400 max-w-2xl mx-auto">
              What do the leading minds in AI think about the future? Explore their predictions.
            </p>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <ExpertOrbit />
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="text-center mt-8"
          >
            <Link href="/experts">
              <Button
                variant="ghost"
                className="text-blue-400 hover:text-blue-300 hover:bg-blue-500/10"
              >
                Meet the experts
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>
      
      {/* Feature Grid */}
      <section className="relative py-24 px-4">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              Explore Everything
            </h2>
            <p className="text-zinc-400 max-w-2xl mx-auto">
              Dive deep into the age of AI with our interactive features.
            </p>
          </motion.div>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                >
                  <Link href={feature.href}>
                    <motion.div
                      whileHover={{ scale: 1.02, y: -5 }}
                      className="group relative p-6 rounded-2xl glass-light border border-transparent hover:border-violet-500/30 transition-all duration-300 h-full"
                    >
                      <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${feature.gradient} flex items-center justify-center mb-4 shadow-lg`}>
                        <Icon className="w-6 h-6 text-white" />
                      </div>
                      
                      <h3 className="text-xl font-bold text-white mb-2 group-hover:text-violet-300 transition-colors">
                        {feature.title}
                      </h3>
                      <p className="text-zinc-400 text-sm leading-relaxed">
                        {feature.description}
                      </p>
                      
                      <ArrowRight className="absolute bottom-6 right-6 w-5 h-5 text-zinc-600 group-hover:text-violet-400 group-hover:translate-x-1 transition-all" />
                    </motion.div>
                  </Link>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>
      
      {/* Footer CTA */}
      <section className="relative py-24 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="glass rounded-3xl p-12 relative overflow-hidden"
          >
            {/* Background Gradient */}
            <div className="absolute inset-0 bg-gradient-to-br from-violet-500/10 via-transparent to-pink-500/10" />
            
            <div className="relative z-10">
              <Brain className="w-16 h-16 text-violet-400 mx-auto mb-6" />
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
                Ready to Explore the Future?
              </h2>
              <p className="text-zinc-400 mb-8 max-w-xl mx-auto">
                Start your journey through the AI evolution. Discover predictions, explore concepts, 
                and understand what experts think is coming next.
              </p>
              <Link href="/timeline">
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-violet-600 to-purple-600 hover:from-violet-500 hover:to-purple-500 text-white px-8 py-6 text-lg rounded-full shadow-lg shadow-violet-500/30"
                >
                  Start Exploring
                  <Rocket className="w-5 h-5 ml-2" />
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
      
      {/* Footer */}
      <footer className="relative py-12 px-4 border-t border-zinc-800/50">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-violet-600 to-purple-500 flex items-center justify-center">
                <Sparkles className="w-4 h-4 text-white" />
              </div>
              <span className="text-sm text-zinc-500">
                SYNTHESIS — An AI Evolution Timeline
              </span>
            </div>
            
            <div className="flex items-center gap-6 text-sm text-zinc-500">
              <Link href="/sources" className="hover:text-zinc-300 transition-colors">
                Sources
              </Link>
              <Link href="/about" className="hover:text-zinc-300 transition-colors">
                About
              </Link>
              <span className="text-zinc-700">|</span>
              <span className="flex items-center gap-2">
                <span className="text-xs">Mode:</span>
                <span className="text-zinc-300 capitalize">{mode}</span>
              </span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
