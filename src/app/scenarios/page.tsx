'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  GitBranch, 
  Check,
  X,
  Sparkles,
  AlertTriangle,
  Target,
  HelpCircle
} from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { cn } from '@/lib/utils';

const scenarios = [
  {
    id: 'optimistic',
    title: 'The Symbiosis',
    type: 'optimistic',
    icon: Sparkles,
    color: 'from-emerald-500 to-teal-600',
    probability: 35,
    description: 'AI and humans work together to solve humanity\'s greatest challenges. Abundance, health breakthroughs, and expanded human potential.',
    timeline: [
      { year: 2025, event: 'AI assistants become ubiquitous productivity tools' },
      { year: 2027, event: 'First major scientific breakthrough by AI (drug discovery or materials science)' },
      { year: 2030, event: 'AGI achieved, deployed for global challenges' },
      { year: 2035, event: 'Human-AI collaboration solves major diseases' },
      { year: 2040, event: 'Post-scarcity economy emerges in developed nations' },
    ],
    keyFactors: ['Successful alignment', 'Gradual deployment', 'International cooperation'],
    risks: 'Complacency, inequality gaps'
  },
  {
    id: 'cautious',
    title: 'The Turbulent Transition',
    type: 'cautious',
    color: 'from-amber-500 to-orange-600',
    probability: 40,
    description: 'Rapid AI advancement creates significant disruption. Societies struggle to adapt. Both positive and negative outcomes.',
    icon: AlertTriangle,
    timeline: [
      { year: 2025, event: 'First major job displacement waves' },
      { year: 2027, event: 'Social unrest in multiple countries' },
      { year: 2029, event: 'Governments implement emergency economic measures' },
      { year: 2032, event: 'AGI achieved but access is concentrated' },
      { year: 2035, event: 'Societal adaptation begins to stabilize' },
    ],
    keyFactors: ['Uneven AI benefits', 'Regulatory lag', 'Geopolitical competition'],
    risks: 'Instability, inequality, conflict'
  },
  {
    id: 'pessimistic',
    title: 'The Control Problem',
    type: 'pessimistic',
    color: 'from-red-500 to-rose-600',
    probability: 15,
    description: 'AI systems escape meaningful human control. Misaligned objectives lead to catastrophic outcomes for humanity.',
    icon: X,
    timeline: [
      { year: 2026, event: 'First major AI safety incident' },
      { year: 2028, event: 'Autonomous AI systems operate beyond oversight' },
      { year: 2030, event: 'Attempts to contain advanced AI fail' },
      { year: 2032, event: 'Critical infrastructure compromised' },
      { year: 2035, event: 'Human influence sharply diminished' },
    ],
    keyFactors: ['Alignment failure', 'Recursive self-improvement', 'Inadequate safety measures'],
    risks: 'Existential catastrophe'
  },
  {
    id: 'transformative',
    title: 'The Intelligence Explosion',
    type: 'transformative',
    color: 'from-violet-500 to-purple-600',
    probability: 10,
    description: 'ASI emerges rapidly after AGI. Intelligence beyond human comprehension transforms reality itself.',
    icon: Target,
    timeline: [
      { year: 2027, event: 'AGI achieved' },
      { year: 2028, event: 'AGI improves itself to ASI' },
      { year: 2029, event: 'Scientific progress accelerates 1000x' },
      { year: 2030, event: 'Physical reality engineering becomes possible' },
      { year: 2032, event: 'Post-human civilization emerges' },
    ],
    keyFactors: ['Recursive self-improvement', 'No computational limits', 'Successful early alignment'],
    risks: 'Unpredictable outcomes, human obsolescence'
  }
];

export default function ScenariosPage() {
  const [selectedScenario, setSelectedScenario] = useState<string | null>(null);
  
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
            <GitBranch className="w-4 h-4 text-violet-400" />
            <span className="text-sm text-zinc-400">Future Scenarios</span>
          </motion.div>
          
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6"
          >
            Branching <span className="gradient-text">Futures</span>
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl text-zinc-400 max-w-2xl mx-auto mb-8"
          >
            The future isn&apos;t written yet. Explore different paths AI evolution could take — 
            and the decisions that might lead us there.
          </motion.p>
        </div>
      </section>
      
      {/* Scenario Tree */}
      <section className="px-4 mb-16">
        <div className="max-w-6xl mx-auto">
          {/* Decision Point */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-12"
          >
            <div className="inline-flex items-center gap-3 px-6 py-4 rounded-2xl glass">
              <HelpCircle className="w-6 h-6 text-violet-400" />
              <span className="text-lg text-white font-medium">
                Key Decision Point: How does humanity navigate the transition to advanced AI?
              </span>
            </div>
          </motion.div>
          
          {/* Branch Lines */}
          <div className="relative">
            <svg className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-24" viewBox="0 0 800 100">
              <path d="M400 0 L100 100" stroke="rgba(139,92,246,0.3)" strokeWidth="2" fill="none" />
              <path d="M400 0 L300 100" stroke="rgba(139,92,246,0.3)" strokeWidth="2" fill="none" />
              <path d="M400 0 L500 100" stroke="rgba(139,92,246,0.3)" strokeWidth="2" fill="none" />
              <path d="M400 0 L700 100" stroke="rgba(139,92,246,0.3)" strokeWidth="2" fill="none" />
            </svg>
          </div>
          
          {/* Scenario Cards */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-16">
            {scenarios.map((scenario, index) => {
              const Icon = scenario.icon;
              const isSelected = selectedScenario === scenario.id;
              
              return (
                <motion.div
                  key={scenario.id}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ y: -10 }}
                  onClick={() => setSelectedScenario(isSelected ? null : scenario.id)}
                  className={cn(
                    'relative rounded-2xl p-6 cursor-pointer transition-all',
                    'border-2',
                    isSelected 
                      ? 'border-violet-500/50 bg-violet-500/10' 
                      : 'border-transparent glass-light hover:border-violet-500/30'
                  )}
                >
                  {/* Probability Badge */}
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                    <Badge className={cn('bg-gradient-to-r', scenario.color, 'text-white border-0')}>
                      {scenario.probability}% probability
                    </Badge>
                  </div>
                  
                  {/* Icon */}
                  <div className={cn(
                    'w-14 h-14 rounded-2xl bg-gradient-to-br flex items-center justify-center mx-auto mb-4 mt-2',
                    scenario.color
                  )}>
                    <Icon className="w-7 h-7 text-white" />
                  </div>
                  
                  {/* Title */}
                  <h3 className="text-xl font-bold text-white text-center mb-2">{scenario.title}</h3>
                  
                  {/* Type Badge */}
                  <div className="text-center mb-3">
                    <Badge variant="outline" className="capitalize border-zinc-700 text-zinc-400">
                      {scenario.type}
                    </Badge>
                  </div>
                  
                  {/* Description */}
                  <p className="text-sm text-zinc-400 text-center line-clamp-3">
                    {scenario.description}
                  </p>
                  
                  {/* Expand Indicator */}
                  <div className="text-center mt-4">
                    <span className="text-xs text-zinc-600">
                      {isSelected ? 'Click to collapse' : 'Click to explore'}
                    </span>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>
      
      {/* Expanded Scenario View */}
      {selectedScenario && (
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="px-4 mb-16"
        >
          <div className="max-w-4xl mx-auto">
            {(() => {
              const scenario = scenarios.find(s => s.id === selectedScenario);
              if (!scenario) return null;
              const Icon = scenario.icon;
              
              return (
                <div className={cn(
                  'rounded-3xl p-8 border-2',
                  'border-violet-500/30 glass'
                )}>
                  {/* Header */}
                  <div className="flex items-center gap-4 mb-8">
                    <div className={cn(
                      'w-16 h-16 rounded-2xl bg-gradient-to-br flex items-center justify-center',
                      scenario.color
                    )}>
                      <Icon className="w-8 h-8 text-white" />
                    </div>
                    <div>
                      <h2 className="text-2xl font-bold text-white">{scenario.title}</h2>
                      <p className="text-zinc-400">{scenario.description}</p>
                    </div>
                  </div>
                  
                  {/* Timeline */}
                  <div className="mb-8">
                    <h3 className="text-lg font-semibold text-white mb-4">Projected Timeline</h3>
                    <div className="relative pl-8 border-l-2 border-zinc-800">
                      {scenario.timeline.map((item, i) => (
                        <div key={i} className="relative mb-6 last:mb-0">
                          <div className="absolute -left-[2.3rem] w-4 h-4 rounded-full bg-zinc-800 border-2 border-violet-500" />
                          <div className="text-violet-400 font-medium mb-1">{item.year}</div>
                          <div className="text-zinc-300">{item.event}</div>
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  {/* Key Factors */}
                  <div className="grid sm:grid-cols-2 gap-6">
                    <div>
                      <h4 className="text-sm font-medium text-zinc-400 mb-2">Key Factors</h4>
                      <ul className="space-y-2">
                        {scenario.keyFactors.map((factor, i) => (
                          <li key={i} className="flex items-center gap-2 text-zinc-300">
                            <Check className="w-4 h-4 text-emerald-400" />
                            {factor}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <h4 className="text-sm font-medium text-zinc-400 mb-2">Risks</h4>
                      <p className="text-zinc-300">{scenario.risks}</p>
                    </div>
                  </div>
                </div>
              );
            })()}
          </div>
        </motion.section>
      )}
      
      {/* Disclaimer */}
      <section className="px-4">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-sm text-zinc-500">
            These scenarios are speculative projections based on expert opinions and current trends. 
            The actual future may differ significantly. We present these as thought experiments, 
            not predictions.
          </p>
        </div>
      </section>
    </div>
  );
}
