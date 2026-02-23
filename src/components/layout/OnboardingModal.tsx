'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Sparkles, Compass, Microscope, Rocket, HelpCircle, ArrowRight, Check } from 'lucide-react';
import { useStore } from '@/lib/stores/useStore';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

const modes = [
  {
    id: 'explorer',
    name: 'Explorer',
    icon: Compass,
    description: 'Perfect for newcomers. Get guided explanations and discover AI concepts at your own pace.',
    color: 'from-emerald-500 to-teal-600',
    features: ['Voice narration', 'Simple explanations', 'Achievement badges', 'Guided paths']
  },
  {
    id: 'analyst',
    name: 'Analyst',
    icon: Microscope,
    description: 'For those who want depth. See data, charts, probabilities, and expert comparisons.',
    color: 'from-blue-500 to-indigo-600',
    features: ['Data visualizations', 'Probability charts', 'Source links', 'Comparison tools']
  },
  {
    id: 'visionary',
    name: 'Visionary',
    icon: Rocket,
    description: 'Expert-level access. Raw data, custom simulations, and contribution tools.',
    color: 'from-violet-500 to-purple-600',
    features: ['Raw data access', 'Custom simulations', 'API integration', 'Contribution mode']
  },
  {
    id: 'skeptic',
    name: 'Skeptic',
    icon: HelpCircle,
    description: 'Critical thinker mode. See counter-arguments, uncertainties, and alternative perspectives.',
    color: 'from-amber-500 to-orange-600',
    features: ['Counter-arguments', 'Uncertainty ranges', 'Failed predictions', 'Hype detection']
  }
];

export function OnboardingModal() {
  const { showOnboarding, completeOnboarding, setMode } = useStore();
  const [selectedMode, setSelectedMode] = useState<string | null>(null);
  const [step, setStep] = useState(0);
  
  const handleSelectMode = (modeId: string) => {
    setSelectedMode(modeId);
  };
  
  const handleContinue = () => {
    if (step === 0) {
      setStep(1);
    } else if (selectedMode) {
      setMode(selectedMode as 'explorer' | 'analyst' | 'visionary' | 'skeptic');
      completeOnboarding();
    }
  };
  
  if (!showOnboarding) return null;
  
  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-[100]"
      >
        {/* Backdrop — truly fixed, never scrolls */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="absolute inset-0 bg-black/80 backdrop-blur-xl"
        />

        {/* Scroll layer — sits on top of backdrop */}
        <div className="absolute inset-0 flex items-center justify-center p-4">
        {/* Content */}
        <motion.div
          initial={{ scale: 0.9, opacity: 0, y: 20 }}
          animate={{ scale: 1, opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          className="relative w-full max-w-4xl glass rounded-3xl border border-violet-500/20 overflow-y-auto max-h-[calc(100dvh-2rem)]"
        >
          {step === 0 ? (
            // Welcome Step
            <div className="p-6 sm:p-12 text-center">
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.2, type: 'spring', stiffness: 200 }}
                className="w-20 h-20 mx-auto mb-8 rounded-2xl bg-gradient-to-br from-violet-600 via-purple-500 to-pink-500 flex items-center justify-center shadow-lg shadow-violet-500/30"
              >
                <Sparkles className="w-10 h-10 text-white" />
              </motion.div>
              
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="text-4xl sm:text-5xl font-bold gradient-text mb-4"
              >
                Welcome to PROMETHEUS
              </motion.h2>
              
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="text-xl text-zinc-400 mb-8 max-w-2xl mx-auto"
              >
                An interactive journey through the age of AI — from Large Language Models 
                to Artificial Superintelligence.
              </motion.p>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className="flex flex-wrap justify-center gap-4 mb-10"
              >
                <div className="flex items-center gap-2 px-4 py-2 rounded-full glass-light">
                  <div className="w-2 h-2 rounded-full bg-violet-400" />
                  <span className="text-sm text-zinc-300">Expert Predictions</span>
                </div>
                <div className="flex items-center gap-2 px-4 py-2 rounded-full glass-light">
                  <div className="w-2 h-2 rounded-full bg-pink-400" />
                  <span className="text-sm text-zinc-300">Live Data</span>
                </div>
                <div className="flex items-center gap-2 px-4 py-2 rounded-full glass-light">
                  <div className="w-2 h-2 rounded-full bg-cyan-400" />
                  <span className="text-sm text-zinc-300">Interactive Exploration</span>
                </div>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
              >
                <Button
                  onClick={() => setStep(1)}
                  size="lg"
                  className="bg-gradient-to-r from-violet-600 to-purple-600 hover:from-violet-500 hover:to-purple-500 text-white px-8 py-6 text-lg rounded-full shadow-lg shadow-violet-500/30"
                >
                  Begin Your Journey
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
              </motion.div>
            </div>
          ) : (
            // Mode Selection Step
            <div className="p-5 sm:p-10">
              <div className="text-center mb-5 sm:mb-8">
                <motion.h2
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="text-3xl sm:text-4xl font-bold text-white mb-4"
                >
                  Choose Your Path
                </motion.h2>
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 }}
                  className="text-zinc-400"
                >
                  Select a mode that matches your interests and experience level
                </motion.p>
              </div>
              
              <div className="grid sm:grid-cols-2 gap-3 sm:gap-4 mb-5 sm:mb-8">
                {modes.map((mode, index) => {
                  const Icon = mode.icon;
                  const isSelected = selectedMode === mode.id;
                  
                  return (
                    <motion.button
                      key={mode.id}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.1 * (index + 1) }}
                      onClick={() => handleSelectMode(mode.id)}
                      className={cn(
                        'relative p-4 sm:p-6 rounded-2xl text-left transition-all duration-300',
                        'border hover:scale-[1.02]',
                        isSelected
                          ? 'bg-violet-500/20 border-violet-500/50 shadow-lg shadow-violet-500/20'
                          : 'glass-light border-transparent hover:border-violet-500/30'
                      )}
                    >
                      {isSelected && (
                        <motion.div
                          initial={{ scale: 0 }}
                          animate={{ scale: 1 }}
                          className="absolute top-4 right-4 w-6 h-6 rounded-full bg-violet-500 flex items-center justify-center"
                        >
                          <Check className="w-4 h-4 text-white" />
                        </motion.div>
                      )}
                      
                      <div className={cn(
                        'w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-gradient-to-br flex items-center justify-center mb-3',
                        mode.color
                      )}>
                        <Icon className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                      </div>
                      
                      <h3 className="text-lg sm:text-xl font-bold text-white mb-1 sm:mb-2">{mode.name}</h3>
                      <p className="text-sm text-zinc-400 mb-3">{mode.description}</p>
                      
                      <div className="flex flex-wrap gap-2">
                        {mode.features.map((feature) => (
                          <span
                            key={feature}
                            className="text-xs px-2 py-1 rounded-full bg-white/5 text-zinc-400"
                          >
                            {feature}
                          </span>
                        ))}
                      </div>
                    </motion.button>
                  );
                })}
              </div>
              
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
                className="flex justify-center"
              >
                <Button
                  onClick={handleContinue}
                  disabled={!selectedMode}
                  size="lg"
                  className={cn(
                    'px-8 py-6 text-lg rounded-full transition-all duration-300',
                    selectedMode
                      ? 'bg-gradient-to-r from-violet-600 to-purple-600 hover:from-violet-500 hover:to-purple-500 text-white shadow-lg shadow-violet-500/30'
                      : 'bg-zinc-800 text-zinc-500 cursor-not-allowed'
                  )}
                >
                  Enter PROMETHEUS
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
              </motion.div>
            </div>
          )}
        </motion.div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
}
