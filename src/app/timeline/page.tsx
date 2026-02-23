'use client';

import { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { 
  Clock, 
  Zap, 
  Rocket, 
  Calendar, 
  Brain, 
  Sparkles,
  ExternalLink,
  Search,
  ArrowRight
} from 'lucide-react';
import Link from 'next/link';
import { timelinePhases, milestones, groupMilestonesByYear, getImpactColor } from '@/lib/data/timeline';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { useStore } from '@/lib/stores/useStore';
import { cn } from '@/lib/utils';
import { Milestone } from '@/types';

const categoryIcons: Record<string, typeof Zap> = {
  breakthrough: Zap,
  release: Rocket,
  research: Brain,
  event: Calendar,
  prediction: Sparkles,
};

export default function TimelinePage() {
  const [selectedPhase, setSelectedPhase] = useState<string | null>(null);
  const [selectedMilestone, setSelectedMilestone] = useState<Milestone | null>(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [filterCategory, setFilterCategory] = useState<string | null>(null);
  const { addVisitedNode } = useStore();
  
  const containerRef = useRef<HTMLDivElement>(null);

  const activeMilestones = searchQuery || filterCategory
    ? milestones.filter((m) => {
        const matchesSearch = !searchQuery ||
          m.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
          m.description.toLowerCase().includes(searchQuery.toLowerCase());
        const matchesCategory = !filterCategory || m.category === filterCategory;
        return matchesSearch && matchesCategory;
      })
    : milestones;

  const groupedMilestones = searchQuery || filterCategory
    ? activeMilestones.reduce<Record<number, typeof milestones>>((acc, m) => {
        const year = new Date(m.date).getFullYear();
        if (!acc[year]) acc[year] = [];
        acc[year].push(m);
        return acc;
      }, {})
    : groupMilestonesByYear();

  const sortedYears = Object.keys(groupedMilestones).sort((a, b) => Number(a) - Number(b));
  
  const handleMilestoneClick = (milestone: Milestone) => {
    setSelectedMilestone(milestone);
    addVisitedNode(milestone.id);
  };
  
  return (
    <div ref={containerRef} className="min-h-screen pt-24 pb-20">
      {/* Hero */}
      <section className="relative px-4 mb-16">
        <div className="max-w-7xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-light mb-6"
          >
            <Clock className="w-4 h-4 text-violet-400" />
            <span className="text-sm text-zinc-400">Living Timeline</span>
          </motion.div>
          
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6"
          >
            The River of <span className="gradient-text">AI Evolution</span>
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl text-zinc-400 max-w-2xl mx-auto mb-8"
          >
            Navigate through the key moments that shaped artificial intelligence — 
            from the first neural networks to the threshold of AGI.
          </motion.p>
          
          {/* Filters */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <div className="relative w-full sm:w-64">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-zinc-500" />
              <Input
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search milestones..."
                className="pl-10 bg-zinc-900/50 border-zinc-800"
              />
            </div>
            
            <div className="flex flex-wrap gap-2">
              {['breakthrough', 'release', 'event', 'prediction'].map((cat) => (
                <Button
                  key={cat}
                  variant={filterCategory === cat ? 'default' : 'outline'}
                  size="sm"
                  onClick={() => setFilterCategory(filterCategory === cat ? null : cat)}
                  className={cn(
                    'rounded-full capitalize',
                    filterCategory === cat 
                      ? 'bg-violet-600 hover:bg-violet-500' 
                      : 'border-zinc-700 text-zinc-400 hover:text-white'
                  )}
                >
                  {cat}
                </Button>
              ))}
            </div>
          </motion.div>
        </div>
      </section>
      
      {/* Phase Navigation */}
      <section className="px-4 mb-12">
        <div className="max-w-7xl mx-auto">
          <div className="flex overflow-x-auto no-scrollbar gap-4 pb-4">
            {timelinePhases.map((phase, index) => {
              const Icon = phase.icon === 'MessageSquare' ? Sparkles : 
                          phase.icon === 'Bot' ? Rocket :
                          phase.icon === 'Network' ? Sparkles :
                          phase.icon === 'Brain' ? Brain : Sparkles;
              
              return (
                <motion.button
                  key={phase.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  onClick={() => setSelectedPhase(selectedPhase === phase.id ? null : phase.id)}
                  className={cn(
                    'flex-shrink-0 px-6 py-4 rounded-2xl border transition-all',
                    selectedPhase === phase.id
                      ? 'bg-violet-500/20 border-violet-500/50'
                      : 'glass-light border-transparent hover:border-violet-500/30'
                  )}
                >
                  <div 
                    className="w-10 h-10 rounded-xl flex items-center justify-center mb-2"
                    style={{ backgroundColor: phase.color }}
                  >
                    <Icon className="w-5 h-5 text-white" />
                  </div>
                  <div className="text-sm font-medium text-white">{phase.name}</div>
                  <div className="text-xs text-zinc-500">{phase.startYear} - {phase.endYear || 'Now'}</div>
                </motion.button>
              );
            })}
          </div>
        </div>
      </section>
      
      {/* Timeline */}
      <section className="px-4">
        <div className="max-w-5xl mx-auto relative">
          {/* Vertical Line */}
          <div className="absolute left-8 sm:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-violet-500 via-purple-500 to-pink-500" />
          
          {sortedYears.map((year) => {
            const yearMilestones = groupedMilestones[Number(year)];
            return (
              <motion.div
                key={year}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true, margin: '-100px' }}
                className="relative mb-16"
              >
                {/* Year Marker */}
                <div className="absolute left-8 sm:left-1/2 -translate-x-1/2 z-10">
                  <div className="w-16 h-8 rounded-full bg-zinc-900 border border-violet-500/50 flex items-center justify-center">
                    <span className="text-sm font-bold text-violet-400">{year}</span>
                  </div>
                </div>
                
                {/* Milestones */}
                <div className="pt-12">
                  {yearMilestones.map((milestone, mIndex) => {
                    const CategoryIcon = categoryIcons[milestone.category] || Zap;
                    const isLeft = mIndex % 2 === 0;
                    
                    return (
                      <motion.div
                        key={milestone.id}
                        initial={{ opacity: 0, x: isLeft ? -50 : 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: mIndex * 0.1 }}
                        onClick={() => handleMilestoneClick(milestone)}
                        className={cn(
                          'relative mb-8 cursor-pointer group',
                          'sm:w-[calc(50%-2rem)]',
                          isLeft ? 'sm:ml-0 sm:mr-auto sm:pr-8' : 'sm:ml-auto sm:mr-0 sm:pl-8',
                          'ml-16 pl-8'
                        )}
                      >
                        {/* Connector */}
                        <div 
                          className={cn(
                            'absolute top-6 w-8 h-px',
                            isLeft 
                              ? 'sm:right-0 left-0' 
                              : 'sm:left-0 left-0',
                            'bg-gradient-to-r from-violet-500/50 to-transparent'
                          )}
                        />
                        
                        {/* Content Card */}
                        <div className="glass-light rounded-2xl p-5 hover:border-violet-500/30 border border-transparent transition-all group-hover:scale-[1.02]">
                          {/* Header */}
                          <div className="flex items-start gap-3 mb-3">
                            <div 
                              className="w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0"
                              style={{ backgroundColor: getImpactColor(milestone.impact) }}
                            >
                              <CategoryIcon className="w-4 h-4 text-white" />
                            </div>
                            
                            <div className="flex-1 min-w-0">
                              <h3 className="font-bold text-white group-hover:text-violet-300 transition-colors">
                                {milestone.title}
                              </h3>
                              <div className="flex items-center gap-2 mt-1">
                                <Badge variant="outline" className="text-[10px] border-zinc-700 text-zinc-500">
                                  {milestone.category}
                                </Badge>
                                <span className="text-xs text-zinc-600">
                                  {new Date(milestone.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric' })}
                                </span>
                              </div>
                            </div>
                          </div>
                          
                          {/* Description */}
                          <p className="text-sm text-zinc-400 leading-relaxed">
                            {milestone.description}
                          </p>
                          
                          {/* Impact Indicator */}
                          <div className="mt-3 flex items-center gap-2">
                            <div className="flex gap-0.5">
                              {[1, 2, 3, 4].map((level) => (
                                <div
                                  key={level}
                                  className={cn(
                                    'w-1.5 h-4 rounded-full',
                                    level <= (milestone.impact === 'transformative' ? 4 : 
                                              milestone.impact === 'high' ? 3 : 
                                              milestone.impact === 'medium' ? 2 : 1)
                                      ? 'bg-violet-500'
                                      : 'bg-zinc-800'
                                  )}
                                />
                              ))}
                            </div>
                            <span className="text-xs text-zinc-600 capitalize">{milestone.impact} impact</span>
                          </div>
                          
                          {/* Detail link */}
                          <div className="mt-3 pt-3 border-t border-zinc-800 flex justify-end opacity-0 group-hover:opacity-100 transition-opacity">
                            <Link
                              href={`/timeline/${milestone.id}`}
                              onClick={(e) => e.stopPropagation()}
                              className="flex items-center gap-1 text-xs text-violet-400 hover:text-violet-300 transition-colors"
                            >
                              Full details <ArrowRight className="w-3 h-3" />
                            </Link>
                          </div>
                        </div>
                      </motion.div>
                    );
                  })}
                </div>
              </motion.div>
            );
          })}
          
          {/* Future Zone */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="relative text-center py-20"
          >
            <div className="absolute inset-0 bg-gradient-to-t from-violet-500/10 to-transparent rounded-3xl" />
            <div className="relative z-10">
              <motion.div
                animate={{ scale: [1, 1.1, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="w-24 h-24 mx-auto rounded-full bg-gradient-to-br from-violet-600 via-purple-500 to-pink-500 flex items-center justify-center shadow-2xl shadow-violet-500/40 mb-6"
              >
                <Sparkles className="w-12 h-12 text-white" />
              </motion.div>
              <h2 className="text-2xl font-bold text-white mb-2">The Future Awaits</h2>
              <p className="text-zinc-400">What happens next is still being written...</p>
            </div>
          </motion.div>
        </div>
      </section>
      
      {/* Milestone Detail Modal */}
      {selectedMilestone && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedMilestone(null)}
        >
          <div className="absolute inset-0 bg-black/80 backdrop-blur-xl" />
          <motion.div
            initial={{ scale: 0.9, y: 20 }}
            animate={{ scale: 1, y: 0 }}
            onClick={(e) => e.stopPropagation()}
            className="relative w-full max-w-2xl glass rounded-3xl p-5 sm:p-8 border border-violet-500/20"
          >
            <button
              onClick={() => setSelectedMilestone(null)}
              className="absolute top-4 right-4 p-2 rounded-full hover:bg-white/5"
            >
              <span className="sr-only">Close</span>
              ×
            </button>
            
            <div className="flex items-start gap-4 mb-6">
              <div 
                className="w-12 h-12 rounded-xl flex items-center justify-center"
                style={{ backgroundColor: getImpactColor(selectedMilestone.impact) }}
              >
                {(() => {
                  const Icon = categoryIcons[selectedMilestone.category] || Zap;
                  return <Icon className="w-6 h-6 text-white" />;
                })()}
              </div>
              <div>
                <h2 className="text-xl sm:text-2xl font-bold text-white">{selectedMilestone.title}</h2>
                <p className="text-zinc-400">{new Date(selectedMilestone.date).toLocaleDateString('en-US', { 
                  year: 'numeric', month: 'long', day: 'numeric' 
                })}</p>
              </div>
            </div>
            
            <p className="text-zinc-300 leading-relaxed mb-6">
              {selectedMilestone.description}
            </p>
            
            {selectedMilestone.sources.length > 0 && (
              <div className="border-t border-zinc-800 pt-6">
                <h4 className="text-sm font-medium text-zinc-400 mb-3">Sources</h4>
                <div className="flex flex-wrap gap-2">
                  {selectedMilestone.sources.map((source) => (
                    <a
                      key={source.id}
                      href={source.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 text-sm text-violet-400 hover:text-violet-300"
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
    </div>
  );
}
