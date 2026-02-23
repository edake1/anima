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
              const isControversial = Math.abs(prediction.probability - 0.5) < 0.15;
              
              return (
                <motion.div
                  key={prediction.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.05 }}
                  className="glass-light rounded-2xl p-6 border border-transparent hover:border-violet-500/20 transition-all"
                >
                  <div className="flex flex-col lg:flex-row gap-6">
                    {/* Probability Display */}
                    <div className="flex-shrink-0 flex items-center gap-4">
                      <div className="relative w-24 h-24">
                        <svg className="w-full h-full -rotate-90" viewBox="0 0 100 100">
                          <circle
                            cx="50"
                            cy="50"
                            r="40"
                            fill="none"
                            stroke="rgba(255,255,255,0.1)"
                            strokeWidth="12"
                          />
                          <motion.circle
                            cx="50"
                            cy="50"
                            r="40"
                            fill="none"
                            stroke={prediction.probability > 0.5 ? '#8b5cf6' : '#f59e0b'}
                            strokeWidth="12"
                            strokeLinecap="round"
                            strokeDasharray={2 * Math.PI * 40}
                            initial={{ strokeDashoffset: 2 * Math.PI * 40 }}
                            animate={{ strokeDashoffset: 2 * Math.PI * 40 * (1 - prediction.probability) }}
                            transition={{ duration: 1, ease: 'easeOut' }}
                          />
                        </svg>
                        <div className="absolute inset-0 flex items-center justify-center">
                          <span className={cn(
                            'text-2xl font-bold',
                            prediction.probability > 0.5 ? 'text-violet-400' : 'text-amber-400'
                          )}>
                            {Math.round(prediction.probability * 100)}%
                          </span>
                        </div>
                      </div>
                      
                      <div className="lg:hidden">
                        <Badge variant="outline" className="border-zinc-700 text-zinc-400">
                          {config.label}
                        </Badge>
                      </div>
                    </div>
                    
                    {/* Content */}
                    <div className="flex-1">
                      <div className="flex items-start justify-between gap-4 mb-3">
                        <div>
                          <h3 className="text-xl font-bold text-white mb-1">{prediction.title}</h3>
                          <p className="text-zinc-400">{prediction.description}</p>
                        </div>
                        
                        <div className="hidden lg:block">
                          <Badge variant="outline" className="border-zinc-700 text-zinc-400">
                            {config.label}
                          </Badge>
                        </div>
                      </div>
                      
                      {/* Timeframe */}
                      <div className="flex flex-wrap items-center gap-x-4 gap-y-1 mb-4 text-sm text-zinc-500">
                        <div className="flex items-center gap-2">
                          <Clock className="w-4 h-4" />
                          <span>
                            {prediction.timeframe.earliest} - {prediction.timeframe.latest} 
                            <span className="text-zinc-600 ml-1">(expected: {prediction.timeframe.expected})</span>
                          </span>
                        </div>
                        
                        {isControversial && (
                          <Badge className="bg-amber-500/20 text-amber-400 border-amber-500/30">
                            Controversial
                          </Badge>
                        )}
                      </div>
                      
                      {/* Community Votes */}
                      <div className="flex flex-wrap items-center gap-x-6 gap-y-2">
                        <div className="flex items-center gap-2">
                          <span className="text-emerald-400 font-medium">
                            {prediction.communityVotes.agree.toLocaleString()}
                          </span>
                          <span className="text-zinc-600">agree</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <span className="text-red-400 font-medium">
                            {prediction.communityVotes.disagree.toLocaleString()}
                          </span>
                          <span className="text-zinc-600">disagree</span>
                        </div>
                        
                        {/* Vote Bar */}
                        <div className="w-full sm:flex-1 sm:max-w-xs">
                          <div className="h-2 bg-zinc-800 rounded-full overflow-hidden flex">
                            <div 
                              className="h-full bg-emerald-500/50"
                              style={{ 
                                width: `${(prediction.communityVotes.agree / prediction.communityVotes.total) * 100}%` 
                              }}
                            />
                            <div 
                              className="h-full bg-red-500/50"
                              style={{ 
                                width: `${(prediction.communityVotes.disagree / prediction.communityVotes.total) * 100}%` 
                              }}
                            />
                          </div>
                        </div>
                      </div>
                      
                      {/* Probability Distribution (if available) */}
                      {prediction.probabilityDistribution && prediction.probabilityDistribution.length > 0 && (
                        <div className="mt-4 pt-4 border-t border-zinc-800">
                          <div className="text-xs text-zinc-500 mb-2">Probability over time:</div>
                          <div className="flex items-end gap-1 h-8">
                            {prediction.probabilityDistribution.map((point, i) => (
                              <div
                                key={i}
                                className="flex-1 bg-violet-500/30 rounded-t"
                                style={{ height: `${point.probability * 100}%` }}
                              >
                                <div className="text-[8px] text-center text-zinc-600 pt-1">
                                  {point.year}
                                </div>
                              </div>
                            ))}
                          </div>
                        </div>
                      )}
                    </div>
                    
                    {/* View Details Link */}
                    <div className="mt-4 pt-4 border-t border-zinc-800 flex justify-end">
                      <Link href={`/predictions/${prediction.id}`}>
                        <div className="inline-flex items-center gap-1.5 text-sm text-violet-400 hover:text-violet-300 transition-colors">
                          View full analysis <ArrowRight className="w-3.5 h-3.5" />
                        </div>
                      </Link>
                    </div>
                  </div>
                </motion.div>
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
            className="fixed inset-0 z-50 flex items-center justify-center p-4"
            onClick={() => setWizardOpen(false)}
          >
            <div className="absolute inset-0 bg-black/70 backdrop-blur-xl" />
            <motion.div
              initial={{ scale: 0.95, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.95, y: 20 }}
              onClick={(e) => e.stopPropagation()}
              className="relative z-10 w-full max-w-xl"
            >
              <button
                onClick={() => setWizardOpen(false)}
                className="absolute -top-3 -right-3 w-8 h-8 rounded-full bg-zinc-800 border border-zinc-700 flex items-center justify-center text-zinc-400 hover:text-white transition-colors z-20"
              >
                <X className="w-4 h-4" />
              </button>
              <UserPredictionWizard onComplete={() => setWizardOpen(false)} />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
