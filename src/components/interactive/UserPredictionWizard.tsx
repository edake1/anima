'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Brain, Target, ArrowRight, Check, Sparkles } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Slider } from '@/components/ui/slider';
import { useStore } from '@/lib/stores/useStore';
import { cn } from '@/lib/utils';
// crypto.randomUUID() is available in all modern browsers and Node 15+

const experts = [
  { name: 'Sam Altman', year: 2026, label: 'S. Altman' },
  { name: 'Ray Kurzweil', year: 2029, label: 'Kurzweil' },
  { name: 'Demis Hassabis', year: 2030, label: 'Hassabis' },
  { name: 'Geoffrey Hinton', year: 2028, label: 'Hinton' },
  { name: 'Yann LeCun', year: 2045, label: 'LeCun' },
  { name: 'Dario Amodei', year: 2030, label: 'Amodei' },
];

const YEAR_MIN = 2025;
const YEAR_MAX = 2075;

function yearToPercent(year: number) {
  return ((year - YEAR_MIN) / (YEAR_MAX - YEAR_MIN)) * 100;
}

interface UserPredictionWizardProps {
  onComplete?: () => void;
  className?: string;
}

export function UserPredictionWizard({ onComplete, className }: UserPredictionWizardProps) {
  const [step, setStep] = useState(0);
  const [year, setYear] = useState(2030);
  const [confidence, setConfidence] = useState(50);
  const [submitted, setSubmitted] = useState(false);
  const { addUserPrediction, userPredictions } = useStore();

  const existingPrediction = userPredictions.find(p => p.category === 'agi-timeline');

  const moreOptimistic = experts.filter(e => e.year > year).length;
  const totalExperts = experts.length;
  const percentileText =
    moreOptimistic === 0
      ? 'more optimistic than all tracked experts'
      : moreOptimistic === totalExperts
      ? 'more cautious than all tracked experts'
      : `more optimistic than ${Math.round((moreOptimistic / totalExperts) * 100)}% of experts`;

  const handleSubmit = () => {
    addUserPrediction({
      id: crypto.randomUUID(),
      prediction: `AGI by ${year}`,
      category: 'agi-timeline',
      timeframe: { earliest: year - 2, expected: year, latest: year + 5 },
      probability: confidence / 100,
      createdAt: new Date().toISOString(),
    });
    setSubmitted(true);
    setTimeout(() => {
      onComplete?.();
    }, 2000);
  };

  if (existingPrediction && !submitted) {
    const existYear = existingPrediction.timeframe.expected;
    return (
      <div className={cn('glass-light rounded-2xl p-6 border border-violet-500/20', className)}>
        <div className="flex items-center gap-3 mb-4">
          <div className="w-10 h-10 rounded-full bg-violet-500/20 flex items-center justify-center">
            <Check className="w-5 h-5 text-violet-400" />
          </div>
          <div>
            <p className="text-sm font-medium text-white">Your Prediction</p>
            <p className="text-xs text-zinc-500">AGI by {existYear} · {Math.round(existingPrediction.probability * 100)}% confidence</p>
          </div>
        </div>
        <Button
          variant="ghost"
          size="sm"
          onClick={() => { setYear(existYear); setStep(0); }}
          className="text-xs text-zinc-400 hover:text-violet-400 p-0"
        >
          Update prediction
        </Button>
      </div>
    );
  }

  if (submitted) {
    return (
      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        className={cn('glass-light rounded-2xl p-8 text-center border border-emerald-500/30', className)}
      >
        <div className="w-16 h-16 rounded-full bg-emerald-500/20 flex items-center justify-center mx-auto mb-4">
          <Check className="w-8 h-8 text-emerald-400" />
        </div>
        <p className="text-white font-bold text-lg mb-1">Prediction Recorded</p>
        <p className="text-zinc-400 text-sm">AGI by {year} · {percentileText}</p>
      </motion.div>
    );
  }

  return (
    <div className={cn('glass-light rounded-2xl p-6 border border-violet-500/20', className)}>
      <div className="flex items-center gap-2 mb-6">
        <Brain className="w-5 h-5 text-violet-400" />
        <span className="text-sm font-medium text-white">Your AGI Prediction</span>
        <span className="ml-auto text-xs text-zinc-500">Step {step + 1} of 2</span>
      </div>

      <AnimatePresence mode="wait">
        {step === 0 && (
          <motion.div
            key="step0"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
          >
            <p className="text-zinc-300 mb-2 text-sm">When will AI reach human-level general intelligence?</p>

            {/* Timeline visual */}
            <div className="relative mt-6 mb-8">
              <div className="h-2 bg-zinc-800 rounded-full overflow-hidden">
                <div
                  className="h-full bg-gradient-to-r from-violet-600 to-pink-500 rounded-full transition-all"
                  style={{ width: `${yearToPercent(year)}%` }}
                />
              </div>

              {/* Expert markers */}
              {experts.map((e) => (
                <div
                  key={e.name}
                  className="absolute top-0 -translate-y-px"
                  style={{ left: `${yearToPercent(e.year)}%` }}
                >
                  <div className="w-0.5 h-3 bg-zinc-600" />
                  <div className="absolute top-4 -translate-x-1/2 text-[9px] text-zinc-500 whitespace-nowrap">
                    {e.label}
                  </div>
                </div>
              ))}

              {/* User position */}
              <div
                className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 z-10 transition-all"
                style={{ left: `${yearToPercent(year)}%` }}
              >
                <div className="w-5 h-5 rounded-full bg-violet-500 border-2 border-white shadow-lg shadow-violet-500/50" />
              </div>
            </div>

            {/* Year display */}
            <div className="text-center mb-6">
              <span className="text-4xl font-bold gradient-text">{year}</span>
              <p className="text-xs text-zinc-500 mt-1">{percentileText}</p>
            </div>

            <Slider
              min={YEAR_MIN}
              max={YEAR_MAX}
              step={1}
              value={[year]}
              onValueChange={([v]) => setYear(v)}
              className="mb-6"
            />

            <Button
              onClick={() => setStep(1)}
              className="w-full bg-gradient-to-r from-violet-600 to-purple-600 hover:from-violet-500 hover:to-purple-500"
            >
              Next <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          </motion.div>
        )}

        {step === 1 && (
          <motion.div
            key="step1"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
          >
            <p className="text-zinc-300 mb-2 text-sm">How confident are you?</p>

            <div className="text-center my-6">
              <span className="text-4xl font-bold gradient-text">{confidence}%</span>
              <p className="text-xs text-zinc-500 mt-1">
                {confidence < 30
                  ? 'Low confidence — AGI timing is highly uncertain'
                  : confidence < 60
                  ? 'Moderate confidence — this is a reasonable estimate'
                  : confidence < 80
                  ? 'High confidence — you feel fairly certain'
                  : 'Very high confidence — you\'re strongly convinced'}
              </p>
            </div>

            <Slider
              min={5}
              max={95}
              step={5}
              value={[confidence]}
              onValueChange={([v]) => setConfidence(v)}
              className="mb-6"
            />

            {/* Summary */}
            <div className="glass rounded-xl p-4 mb-6 border border-violet-500/20">
              <div className="flex items-center gap-2 mb-2">
                <Target className="w-4 h-4 text-violet-400" />
                <span className="text-sm font-medium text-white">Your Prediction</span>
              </div>
              <p className="text-zinc-300 text-sm">
                AGI by <span className="text-violet-400 font-bold">{year}</span>{' '}
                with <span className="text-violet-400 font-bold">{confidence}%</span> confidence
              </p>
              <p className="text-xs text-zinc-500 mt-1">{percentileText}</p>
            </div>

            <div className="flex gap-3">
              <Button variant="outline" onClick={() => setStep(0)} className="flex-1 border-zinc-700 text-zinc-400">
                Back
              </Button>
              <Button
                onClick={handleSubmit}
                className="flex-1 bg-gradient-to-r from-violet-600 to-purple-600 hover:from-violet-500 hover:to-purple-500"
              >
                <Sparkles className="w-4 h-4 mr-2" />
                Submit
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
