'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Users, 
  Search, 
  TrendingUp,
  Clock,
  Quote,
  ExternalLink,
  CheckCircle,
  XCircle,
  AlertCircle,
  ArrowRight
} from 'lucide-react';
import Link from 'next/link';
import { experts, getExpertsByStance } from '@/lib/data/experts';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { useStore } from '@/lib/stores/useStore';
import { cn } from '@/lib/utils';
import { Expert, ExpertStance } from '@/types';

const stanceConfig: Record<ExpertStance, { label: string; color: string; gradient: string; description: string }> = {
  optimist: {
    label: 'Optimist',
    color: 'text-emerald-400',
    gradient: 'from-emerald-500 to-teal-600',
    description: 'Believes AI development will bring positive outcomes'
  },
  cautious: {
    label: 'Cautious',
    color: 'text-amber-400',
    gradient: 'from-amber-500 to-orange-600',
    description: 'Warns of risks while acknowledging potential benefits'
  },
  skeptic: {
    label: 'Skeptic',
    color: 'text-blue-400',
    gradient: 'from-blue-500 to-indigo-600',
    description: 'Questions AGI timelines and/or existential risk claims'
  },
  neutral: {
    label: 'Neutral',
    color: 'text-violet-400',
    gradient: 'from-violet-500 to-purple-600',
    description: 'Balanced view, focused on safety research'
  }
};

export default function ExpertsPage() {
  const [selectedStance, setSelectedStance] = useState<ExpertStance | null>(null);
  const [selectedExpert, setSelectedExpert] = useState<Expert | null>(null);
  const [searchQuery, setSearchQuery] = useState('');
  const { addVisitedNode } = useStore();
  
  const filteredExperts = experts.filter((expert) => {
    const matchesStance = !selectedStance || expert.stance === selectedStance;
    const matchesSearch = !searchQuery || 
      expert.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      expert.organization.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesStance && matchesSearch;
  });
  
  const handleExpertClick = (expert: Expert) => {
    setSelectedExpert(expert);
    addVisitedNode(expert.id);
  };
  
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
            <Users className="w-4 h-4 text-violet-400" />
            <span className="text-sm text-zinc-400">Expert Constellation</span>
          </motion.div>
          
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6"
          >
            The Minds Shaping <span className="gradient-text">AI&apos;s Future</span>
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl text-zinc-400 max-w-2xl mx-auto mb-8"
          >
            Explore predictions from leading AI researchers, entrepreneurs, and thinkers. 
            Understand their perspectives on AGI, ASI, and the path ahead.
          </motion.p>
        </div>
      </section>
      
      {/* Filters */}
      <section className="px-4 mb-12">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mb-8">
            {/* Search */}
            <div className="relative w-full sm:w-64">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-zinc-500" />
              <Input
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search experts..."
                className="pl-10 bg-zinc-900/50 border-zinc-800"
              />
            </div>
            
            {/* Stance Filter */}
            <div className="flex flex-wrap gap-2">
              <Button
                variant={selectedStance === null ? 'default' : 'outline'}
                size="sm"
                onClick={() => setSelectedStance(null)}
                className={cn(
                  'rounded-full',
                  selectedStance === null 
                    ? 'bg-violet-600 hover:bg-violet-500' 
                    : 'border-zinc-700 text-zinc-400'
                )}
              >
                All
              </Button>
              {Object.entries(stanceConfig).map(([stance, config]) => (
                <Button
                  key={stance}
                  variant={selectedStance === stance ? 'default' : 'outline'}
                  size="sm"
                  onClick={() => setSelectedStance(stance as ExpertStance)}
                  className={cn(
                    'rounded-full',
                    selectedStance === stance 
                      ? `bg-gradient-to-r ${config.gradient}` 
                      : 'border-zinc-700 text-zinc-400'
                  )}
                >
                  {config.label}
                </Button>
              ))}
            </div>
          </div>
          
          {/* Stats Bar */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            {Object.entries(stanceConfig).map(([stance, config]) => {
              const count = getExpertsByStance(stance as ExpertStance).length;
              return (
                <motion.div
                  key={stance}
                  whileHover={{ scale: 1.02 }}
                  onClick={() => setSelectedStance(stance as ExpertStance)}
                  className="glass-light rounded-xl p-4 cursor-pointer hover:border-violet-500/30 border border-transparent transition-all"
                >
                  <div className={cn('text-2xl font-bold mb-1', config.color)}>
                    {count}
                  </div>
                  <div className="text-sm text-zinc-400">{config.label}s</div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>
      
      {/* Expert Grid */}
      <section className="px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredExperts.map((expert, index) => {
              const config = stanceConfig[expert.stance];
              
              return (
                <motion.div
                  key={expert.id}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.05 }}
                  whileHover={{ y: -5 }}
                  onClick={() => handleExpertClick(expert)}
                  className="glass-light rounded-2xl p-6 cursor-pointer border border-transparent hover:border-violet-500/30 transition-all group"
                >
                  {/* Header */}
                  <div className="flex items-start gap-4 mb-4">
                    {/* Avatar */}
                    <div className={cn(
                      'w-14 h-14 rounded-xl bg-gradient-to-br flex items-center justify-center text-white font-bold text-lg shadow-lg',
                      config.gradient
                    )}>
                      {expert.name.split(' ').map(n => n[0]).join('')}
                    </div>
                    
                    <div className="flex-1 min-w-0">
                      <h3 className="text-lg font-bold text-white truncate">{expert.name}</h3>
                      <p className="text-sm text-zinc-400 truncate">{expert.title}</p>
                      <p className="text-xs text-zinc-500 truncate">{expert.organization}</p>
                    </div>
                  </div>
                  
                  {/* Stance Badge */}
                  <div className="flex items-center gap-2 mb-4">
                    <Badge className={cn('bg-gradient-to-r', config.gradient, 'border-0')}>
                      {config.label}
                    </Badge>
                    <div className="flex items-center gap-1 text-xs text-zinc-500">
                      <TrendingUp className="w-3 h-3" />
                      {expert.credibility}% credibility
                    </div>
                  </div>
                  
                  {/* Latest Prediction */}
                  {expert.predictions[0] && (
                    <div className="bg-zinc-900/50 rounded-xl p-3">
                      <div className="text-xs text-zinc-500 mb-1">Latest Prediction</div>
                      <p className="text-sm text-zinc-300 line-clamp-2">
                        {expert.predictions[0].prediction}
                      </p>
                      <div className="flex items-center gap-2 mt-2 text-xs text-zinc-500">
                        <Clock className="w-3 h-3" />
                        {expert.predictions[0].timeframe.start} - {expert.predictions[0].timeframe.end || '?'}
                      </div>
                    </div>
                  )}
                  
                  {/* Footer */}
                  <div className="flex items-center justify-between mt-4">
                    <div className="flex gap-3 text-sm text-zinc-500">
                      <span>{expert.predictions.length} predictions</span>
                      <span>{expert.quotes.length} quotes</span>
                    </div>
                    <Link
                      href={`/experts/${expert.id}`}
                      onClick={(e) => e.stopPropagation()}
                      className="flex items-center gap-1 text-xs text-violet-400 hover:text-violet-300 transition-colors opacity-0 group-hover:opacity-100"
                    >
                      Full profile <ArrowRight className="w-3 h-3" />
                    </Link>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>
      
      {/* Expert Detail Modal */}
      <AnimatePresence>
        {selectedExpert && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-start sm:items-center justify-center p-4 overflow-y-auto"
            onClick={() => setSelectedExpert(null)}
          >
            <div className="absolute inset-0 bg-black/80 backdrop-blur-xl" />
            
            <motion.div
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 20 }}
              onClick={(e) => e.stopPropagation()}
              className="relative w-full max-w-3xl glass rounded-3xl p-5 sm:p-8 border border-violet-500/20 my-4"
            >
              {/* Close Button */}
              <button
                onClick={() => setSelectedExpert(null)}
                className="absolute top-4 right-4 p-2 rounded-full hover:bg-white/5 text-zinc-400 hover:text-white transition-colors"
              >
                ×
              </button>
              
              {/* Header */}
              <div className="flex flex-col sm:flex-row items-start gap-4 sm:gap-6 mb-5 sm:mb-8">
                <div className={cn(
                  'w-16 h-16 sm:w-20 sm:h-20 rounded-2xl bg-gradient-to-br flex items-center justify-center text-white font-bold text-xl sm:text-2xl shadow-xl flex-shrink-0',
                  stanceConfig[selectedExpert.stance].gradient
                )}>
                  {selectedExpert.name.split(' ').map(n => n[0]).join('')}
                </div>
                
                <div className="flex-1">
                  <h2 className="text-2xl sm:text-3xl font-bold text-white mb-1">{selectedExpert.name}</h2>
                  <p className="text-zinc-400">{selectedExpert.title}</p>
                  <p className="text-violet-400">{selectedExpert.organization}</p>
                  
                  <div className="flex items-center gap-4 mt-3">
                    <Badge className={cn('bg-gradient-to-r', stanceConfig[selectedExpert.stance].gradient, 'border-0')}>
                      {stanceConfig[selectedExpert.stance].label}
                    </Badge>
                    <div className="flex items-center gap-2">
                      <div className="w-24 h-2 bg-zinc-800 rounded-full overflow-hidden">
                        <div 
                          className="h-full bg-gradient-to-r from-violet-500 to-purple-500"
                          style={{ width: `${selectedExpert.credibility}%` }}
                        />
                      </div>
                      <span className="text-sm text-zinc-400">{selectedExpert.credibility}%</span>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Biography */}
              <div className="mb-5 sm:mb-8">
                <h3 className="text-lg font-semibold text-white mb-3">Biography</h3>
                <p className="text-zinc-400 leading-relaxed">{selectedExpert.biography}</p>
              </div>
              
              {/* Predictions */}
              {selectedExpert.predictions.length > 0 && (
                <div className="mb-5 sm:mb-8">
                  <h3 className="text-lg font-semibold text-white mb-4">Predictions</h3>
                  <div className="space-y-4">
                    {selectedExpert.predictions.map((pred) => (
                      <div key={pred.id} className="glass-light rounded-xl p-4">
                        <p className="text-zinc-300 mb-3">{pred.prediction}</p>
                        <div className="flex flex-wrap items-center gap-3 text-sm">
                          <Badge variant="outline" className="border-zinc-700">
                            {pred.topic}
                          </Badge>
                          <span className="text-zinc-500">
                            <Clock className="w-3 h-3 inline mr-1" />
                            {pred.timeframe.start} - {pred.timeframe.end || '?'}
                          </span>
                          <span className={cn(
                            'flex items-center gap-1',
                            pred.confidence === 'high' ? 'text-emerald-400' :
                            pred.confidence === 'medium' ? 'text-amber-400' : 'text-zinc-400'
                          )}>
                            {pred.confidence} confidence
                          </span>
                          <span className={cn(
                            'flex items-center gap-1',
                            pred.status === 'correct' ? 'text-emerald-400' :
                            pred.status === 'incorrect' ? 'text-red-400' : 'text-zinc-400'
                          )}>
                            {pred.status === 'correct' && <CheckCircle className="w-4 h-4" />}
                            {pred.status === 'incorrect' && <XCircle className="w-4 h-4" />}
                            {pred.status === 'pending' && <AlertCircle className="w-4 h-4" />}
                            {pred.status === 'partial' && '◐'}
                            {pred.status}
                          </span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}
              
              {/* Quotes */}
              {selectedExpert.quotes.length > 0 && (
                <div className="mb-5 sm:mb-8">
                  <h3 className="text-lg font-semibold text-white mb-4">Notable Quotes</h3>
                  <div className="space-y-4">
                    {selectedExpert.quotes.map((quote) => (
                      <div key={quote.id} className="border-l-2 border-violet-500/50 pl-4">
                        <Quote className="w-4 h-4 text-violet-500/50 mb-2" />
                        <p className="text-zinc-300 italic">&quot;{quote.text}&quot;</p>
                        {quote.context && (
                          <p className="text-sm text-zinc-500 mt-2">— {quote.context}</p>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              )}
              
              {/* Sources */}
              {selectedExpert.sources.length > 0 && (
                <div className="border-t border-zinc-800 pt-6">
                  <h4 className="text-sm font-medium text-zinc-400 mb-3">Sources & Links</h4>
                  <div className="flex flex-wrap gap-3">
                    {selectedExpert.sources.map((source) => (
                      <a
                        key={source.id}
                        href={source.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-3 py-2 rounded-lg bg-zinc-800/50 text-sm text-zinc-400 hover:text-violet-400 hover:bg-zinc-800 transition-colors"
                      >
                        {source.title}
                        <ExternalLink className="w-3 h-3" />
                      </a>
                    ))}
                  </div>
                </div>
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
