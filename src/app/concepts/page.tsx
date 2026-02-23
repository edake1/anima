'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import {
  Lightbulb,
  Search,
  Network,
  LayoutGrid,
} from 'lucide-react';
import { concepts } from '@/lib/data/concepts';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { useStore } from '@/lib/stores/useStore';
import { cn } from '@/lib/utils';
import { Concept, ConceptCategory } from '@/types';
import { ConceptGraph } from '@/components/visualization/ConceptGraph';

const categoryConfig: Record<ConceptCategory, { label: string; color: string }> = {
  architecture: { label: 'Architecture', color: 'bg-violet-500' },
  capability: { label: 'Capabilities', color: 'bg-blue-500' },
  safety: { label: 'Safety', color: 'bg-emerald-500' },
  philosophy: { label: 'Philosophy', color: 'bg-amber-500' },
  economics: { label: 'Economics', color: 'bg-pink-500' },
  society: { label: 'Society', color: 'bg-cyan-500' },
  future: { label: 'Future', color: 'bg-rose-500' }
};

const difficultyColors = {
  beginner: 'text-emerald-400 border-emerald-400/30',
  intermediate: 'text-amber-400 border-amber-400/30',
  advanced: 'text-orange-400 border-orange-400/30',
  expert: 'text-red-400 border-red-400/30'
};

export default function ConceptsPage() {
  const [selectedCategory, setSelectedCategory] = useState<ConceptCategory | null>(null);
  const [viewMode, setViewMode] = useState<'grid' | 'graph'>('grid');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedDifficulty, setSelectedDifficulty] = useState<Concept['difficulty'] | null>(null);
  const { addVisitedNode } = useStore();
  
  const filteredConcepts = concepts.filter((concept) => {
    const matchesCategory = !selectedCategory || concept.category === selectedCategory;
    const matchesDifficulty = !selectedDifficulty || concept.difficulty === selectedDifficulty;
    const matchesSearch = !searchQuery || 
      concept.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      concept.shortDescription.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesDifficulty && matchesSearch;
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
            <Lightbulb className="w-4 h-4 text-amber-400" />
            <span className="text-sm text-zinc-400">Knowledge Explorer</span>
          </motion.div>
          
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6"
          >
            AI <span className="gradient-text">Concepts</span> Unlocked
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl text-zinc-400 max-w-2xl mx-auto mb-8"
          >
            From &quot;attention mechanism&quot; to &quot;intelligence explosion&quot; — understand the key 
            concepts that define AI&apos;s past, present, and future.
          </motion.p>
          
          {/* Search */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="relative max-w-md mx-auto"
          >
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-zinc-500" />
            <Input
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search concepts..."
              className="pl-12 pr-4 py-6 bg-zinc-900/50 border-zinc-800 text-lg"
            />
          </motion.div>
        </div>
      </section>
      
      {/* Filters */}
      <section className="px-4 mb-12">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-6">
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
                All
              </Button>
              {Object.entries(categoryConfig).map(([cat, config]) => (
                <Button
                  key={cat}
                  variant={selectedCategory === cat ? 'default' : 'outline'}
                  size="sm"
                  onClick={() => setSelectedCategory(cat as ConceptCategory)}
                  className={cn(
                    'rounded-full',
                    selectedCategory === cat 
                      ? 'bg-violet-600 hover:bg-violet-500' 
                      : 'border-zinc-700 text-zinc-400'
                  )}
                >
                  {config.label}
                </Button>
              ))}
            </div>
            
            <div className="flex flex-wrap items-center gap-2">
              <div className="flex gap-1.5">
                {['beginner', 'intermediate', 'advanced'].map((diff) => (
                  <Button
                    key={diff}
                    variant={selectedDifficulty === diff ? 'default' : 'outline'}
                    size="sm"
                    onClick={() => setSelectedDifficulty(selectedDifficulty === diff ? null : diff as Concept['difficulty'])}
                    className={cn(
                      'rounded-full capitalize',
                      selectedDifficulty === diff 
                        ? 'bg-zinc-700 hover:bg-zinc-600' 
                        : 'border-zinc-700 text-zinc-400'
                    )}
                  >
                    {diff}
                  </Button>
                ))}
              </div>
              {/* View toggle */}
              <div className="flex items-center gap-1 ml-2 p-1 rounded-xl bg-zinc-800/60 border border-zinc-700/50">
                <button
                  onClick={() => setViewMode('grid')}
                  className={cn(
                    'flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium transition-all',
                    viewMode === 'grid' ? 'bg-violet-600 text-white' : 'text-zinc-500 hover:text-zinc-300'
                  )}
                >
                  <LayoutGrid className="w-3.5 h-3.5" />
                  Grid
                </button>
                <button
                  onClick={() => setViewMode('graph')}
                  className={cn(
                    'flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium transition-all',
                    viewMode === 'graph' ? 'bg-violet-600 text-white' : 'text-zinc-500 hover:text-zinc-300'
                  )}
                >
                  <Network className="w-3.5 h-3.5" />
                  Graph
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Concepts Grid or Graph */}
      <section className="px-4">
        <div className="max-w-7xl mx-auto">
          {viewMode === 'graph' ? (
            <ConceptGraph />
          ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredConcepts.map((concept, index) => {
              const catConfig = categoryConfig[concept.category];
              
              return (
                <motion.div
                  key={concept.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.03 }}
                  whileHover={{ y: -5 }}
                >
                  <Link href={`/concepts/${concept.id}`} onClick={() => addVisitedNode(concept.id)}>
                    <div className="glass-light rounded-2xl p-6 cursor-pointer border border-transparent hover:border-violet-500/30 transition-all h-full">
                      {/* Header */}
                      <div className="flex items-start justify-between gap-3 mb-3">
                        <h3 className="text-lg font-bold text-white">{concept.name}</h3>
                        <Badge className={cn(
                          'text-[10px] shrink-0',
                          catConfig.color,
                          'text-white border-0'
                        )}>
                          {catConfig.label}
                        </Badge>
                      </div>
                      
                      {/* Description */}
                      <p className="text-sm text-zinc-400 mb-4 line-clamp-3">
                        {concept.shortDescription}
                      </p>
                      
                      {/* Footer */}
                      <div className="flex items-center justify-between">
                        <Badge 
                          variant="outline" 
                          className={cn('capitalize', difficultyColors[concept.difficulty])}
                        >
                          {concept.difficulty}
                        </Badge>
                        
                        <div className="flex items-center gap-1 text-xs text-zinc-600">
                          <Network className="w-3 h-3" />
                          {concept.connections.length} connections
                        </div>
                      </div>
                    </div>
                  </Link>
                </motion.div>
              );
            })}
          </div>
          )}
        </div>
      </section>
    </div>
  );
}
