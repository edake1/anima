'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Target, 
  TrendingUp, 
  Clock,
  BarChart3,
  Users,
  Zap,
  AlertTriangle,
  CheckCircle2,
  Info,
  ArrowRight,
  Sparkles,
  X
} from 'lucide-react';
import Link from 'next/link';
import { predictions } from '@/lib/data/predictions';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { PredictionGauge } from '@/components/visualization/PredictionGauge';
import { LivePredictionCard } from '@/components/interactive/LivePredictionCard';
import { UserPredictionWizard } from '@/components/interactive/UserPredictionWizard';
import { cn } from '@/lib/utils';
import { PredictionCategory } from '@/types';

const categoryConfig: Record<PredictionCategory, { label: string; icon: typeof Target; color: string }> = {
  'agi-timeline': { label: 'AGI Timeline', icon: Zap, color: 'violet' },
  'asi-timeline': { label: 'ASI Timeline', icon: Target, color: 'pink' },
  'alignment-success': { label: 'Alignment', icon: CheckCircle2, color: 'emerald' },
  'economic-impact': { label: 'Economic', icon: BarChart3, color: 'amber' },
  'capability-breakthrough': { label: 'Capabilities', icon: TrendingUp, color: 'cyan' },
  'regulation': { label: 'Regulation', icon: Users, color: 'blue' },
  'societal-change': { label: 'Society', icon: AlertTriangle, color: 'orange' }
};

export default function PredictionsPage() {
  const [selectedCategory, setSelectedCategory] = useState<PredictionCategory | null>(null);
  const [sortBy, setSortBy] = useState<'probability' | 'controversy' | 'recent'>('probability');
  const [wizardOpen, setWizardOpen] = useState(false);
  
  const filteredPredictions = predictions
    .filter((p) => !selectedCategory || p.category === selectedCategory)
    .sort((a, b) => {
      if (sortBy === 'probability') return b.probability - a.probability;
      if (sortBy === 'controversy') return Math.abs(b.probability - 0.5) - Math.abs(a.probability - 0.5);
      return new Date(b.lastUpdated).getTime() - new Date(a.lastUpdated).getTime();
    });
  
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
            <Target className="w-4 h-4 text-pink-400" />
            <span className="text-sm text-zinc-400">Live Predictions</span>
          </motion.div>
          
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6"
          >
            Tracking the <span className="gradient-text">Future</span>
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl text-zinc-400 max-w-2xl mx-auto mb-8"
          >
            Live probability estimates from prediction markets, expert surveys, 
            and community forecasting. Watch how beliefs shift over time.
          </motion.p>

          {/* CTA to open wizard */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            <button
              onClick={() => setWizardOpen(true)}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-violet-600/20 border border-violet-500/40 text-violet-300 hover:bg-violet-600/30 hover:border-violet-500/60 transition-all text-sm font-medium"
            >
              <Sparkles className="w-4 h-4" />
              What&apos;s your AGI prediction?
            </button>
          </motion.div>
        </div>
      </section>
      
      {/* Key Metrics */}
      <section className="px-4 mb-12">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <PredictionGauge
              label="AGI by 2030"
              probability={0.55}
              color="violet"
            />
            <PredictionGauge
              label="ASI by 2040"
              probability={0.45}
              color="pink"
            />
            <PredictionGauge
              label="Alignment Success"
              probability={0.45}
              color="emerald"
            />
            <PredictionGauge
              label="Major Disruption by 2030"
              probability={0.55}
              color="amber"
            />
          </div>
        </div>
      </section>
      
      {/* Category Tabs */}
      <section className="px-4 mb-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-wrap gap-2">
            <Button
              variant={selectedCategory === null ? 'default' : 'outline'}
              size="sm"
              onClick={() => setSelectedCategory(null)}
              className={cn(
                'rounded-full',
                selectedCategory === null 
                  ? 'bg-violet-600 hover:bg-violet-500' 
                  : 'border-zinc-700 text-zinc-400'
              )}
            >
              All Predictions
            </Button>
            {Object.entries(categoryConfig).map(([cat, config]) => {
              const Icon = config.icon;
              return (
                <Button
                  key={cat}
                  variant={selectedCategory === cat ? 'default' : 'outline'}
                  size="sm"
                  onClick={() => setSelectedCategory(cat as PredictionCategory)}
                  className={cn(
                    'rounded-full gap-2',
                    selectedCategory === cat 
                      ? 'bg-violet-600 hover:bg-violet-500' 
                      : 'border-zinc-700 text-zinc-400'
                  )}
                >
                  <Icon className="w-3 h-3" />
                  {config.label}
                </Button>
              );
            })}
          </div>
        </div>
      </section>
      
      {/* Sort Options */}
      <section className="px-4 mb-8">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center gap-x-4 gap-y-2">
          <span className="text-sm text-zinc-500">Sort by:</span>
          <div className="flex gap-2">
            {[
              { key: 'probability', label: 'Probability' },
              { key: 'controversy', label: 'Controversy' },
              { key: 'recent', label: 'Recent' }
            ].map((option) => (
              <Button
                key={option.key}
                variant="ghost"
                size="sm"
                onClick={() => setSortBy(option.key as typeof sortBy)}
                className={cn(
                  'rounded-full text-sm',
                  sortBy === option.key 
                    ? 'text-white bg-white/10' 
                    : 'text-zinc-500 hover:text-white'
                )}
              >
                {option.label}
              </Button>
            ))}
          </div>
        </div>
      </section>
      
      {/* Predictions Grid */}
      <section className="px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid gap-6">
            {filteredPredictions.map((prediction, index) => {
              const config = categoryConfig[prediction.category];
              return (
                <LivePredictionCard
                  key={prediction.id}
                  prediction={prediction}
                  categoryConfig={config}
                  index={index}
                />
              );
            })}
          </div>
        </div>
      </section>
      
      {/* Methodology Note */}
      <section className="px-4 mt-16">
        <div className="max-w-3xl mx-auto">
          <div className="glass rounded-2xl p-6 border border-zinc-800">
            <div className="flex items-start gap-4">
              <Info className="w-5 h-5 text-violet-400 flex-shrink-0 mt-0.5" />
              <div>
                <h4 className="text-white font-medium mb-2">How We Track Predictions</h4>
                <p className="text-sm text-zinc-400 leading-relaxed">
                  Our predictions aggregate data from Metaculus, prediction markets, expert surveys, 
                  and community forecasts. Probabilities are weighted by forecaster track records and 
                  updated regularly. Note that all predictions are uncertain — treat them as 
                  informed guesses, not certainties.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* UserPredictionWizard Modal */}
      <AnimatePresence>
        {wizardOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50"
            onClick={() => setWizardOpen(false)}
          >
            <div className="absolute inset-0 bg-black/70 backdrop-blur-xl" onClick={() => setWizardOpen(false)} />
            <div className="absolute inset-0 flex items-center justify-center p-4">
            <motion.div
              initial={{ scale: 0.95, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.95, y: 20 }}
              onClick={(e) => e.stopPropagation()}
              className="relative z-10 w-full max-w-xl overflow-y-auto max-h-[calc(100dvh-2rem)]"
            >
              <button
                onClick={() => setWizardOpen(false)}
                className="absolute -top-3 -right-3 w-8 h-8 rounded-full bg-zinc-800 border border-zinc-700 flex items-center justify-center text-zinc-400 hover:text-white transition-colors z-20"
              >
                <X className="w-4 h-4" />
              </button>
              <UserPredictionWizard onComplete={() => setWizardOpen(false)} />
            </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
