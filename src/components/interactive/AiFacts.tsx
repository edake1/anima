'use client';

import { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Lightbulb, ChevronLeft, ChevronRight, Zap } from 'lucide-react';

const INTERVAL_MS = 7000;

interface AiFact {
  fact: string;
  category: string;
  source: string;
  color: string;
}

const facts: AiFact[] = [
  {
    fact: "ChatGPT reached 100 million users in just 2 months — faster than any app in history. TikTok took 9 months, Instagram took 2.5 years.",
    category: "Adoption",
    source: "UBS Analysis, 2023",
    color: "text-violet-400",
  },
  {
    fact: "GPT-4 is estimated to have ~1.76 trillion parameters — roughly 20x the neurons in a human brain, though they work very differently.",
    category: "Scale",
    source: "AI research estimates, 2023",
    color: "text-pink-400",
  },
  {
    fact: "DeepMind's AlphaFold solved a 50-year-old problem in biology in 2020 — predicting the 3D shape of proteins. It has since mapped over 200 million structures.",
    category: "Breakthrough",
    source: "DeepMind, Nature 2021",
    color: "text-emerald-400",
  },
  {
    fact: "AI compute used for training the largest models has been doubling roughly every 6 months — far outpacing Moore's Law.",
    category: "Compute",
    source: "OpenAI AI and Compute, 2018–present",
    color: "text-cyan-400",
  },
  {
    fact: "The cost to train GPT-3 was approximately $4.6 million. Training GPT-4 is estimated to have cost over $100 million.",
    category: "Economics",
    source: "Lambda Labs & industry estimates",
    color: "text-amber-400",
  },
  {
    fact: "In 2023, GitHub Copilot was writing ~46% of code in supported languages for its users — nearly half of all code, written by AI.",
    category: "Productivity",
    source: "GitHub Octoverse 2023",
    color: "text-blue-400",
  },
  {
    fact: "AlphaGo defeated world Go champion Lee Sedol 4–1 in 2016. Go has more possible board positions than atoms in the observable universe.",
    category: "Milestone",
    source: "DeepMind, 2016",
    color: "text-violet-400",
  },
  {
    fact: "The term 'Artificial Intelligence' was coined in 1956 by John McCarthy at a conference at Dartmouth College — the same year Elvis Presley released Heartbreak Hotel.",
    category: "History",
    source: "Dartmouth Conference, 1956",
    color: "text-zinc-400",
  },
  {
    fact: "GPT-4 scored in the 90th percentile on the Uniform Bar Exam, 99th percentile on the Biology Olympiad, and passed the US Medical Licensing Exam.",
    category: "Capability",
    source: "OpenAI GPT-4 Technical Report, 2023",
    color: "text-pink-400",
  },
  {
    fact: "Waymo's self-driving cars have now driven over 20 million miles autonomously — accumulating more driving experience than most humans will have in a lifetime.",
    category: "Robotics",
    source: "Waymo, 2024",
    color: "text-emerald-400",
  },
  {
    fact: "A single training run of a large AI model can emit as much CO₂ as five American cars over their entire lifetimes.",
    category: "Environment",
    source: "MIT Technology Review, 2019",
    color: "text-orange-400",
  },
  {
    fact: "AI-generated images won the Colorado State Fair's digital art competition in 2022 — sparking intense debate about the future of human creativity.",
    category: "Culture",
    source: "Colorado State Fair, 2022",
    color: "text-fuchsia-400",
  },
  {
    fact: "OpenAI's Whisper model transcribes audio in 99 languages with near-human accuracy — trained on 680,000 hours of multilingual speech.",
    category: "Language",
    source: "OpenAI, 2022",
    color: "text-cyan-400",
  },
  {
    fact: "The first AI to beat a human chess world champion was IBM's Deep Blue in 1997. Today, free phone apps play at a superhuman level.",
    category: "Milestone",
    source: "IBM, 1997",
    color: "text-blue-400",
  },
  {
    fact: "AI models can now generate a photorealistic image from a text prompt in under one second — what used to take a skilled artist days.",
    category: "Generation",
    source: "Stability AI, Google, 2024",
    color: "text-amber-400",
  },
  {
    fact: "The AI safety research org Anthropic was founded by ex-OpenAI researchers who left over safety disagreements — and raised over $7 billion in funding.",
    category: "Industry",
    source: "Anthropic, 2023–24",
    color: "text-violet-400",
  },
  {
    fact: "Google's Gemini Ultra scored 90.0% on MMLU — the first model to surpass human expert performance on this benchmark covering 57 academic subjects.",
    category: "Benchmark",
    source: "Google DeepMind, 2023",
    color: "text-pink-400",
  },
  {
    fact: "Sam Altman predicts AGI — AI surpassing human intelligence — could arrive within a few thousand days. Ray Kurzweil predicts 2029. Most experts say before 2050.",
    category: "Prediction",
    source: "Various expert forecasts",
    color: "text-emerald-400",
  },
  {
    fact: "In 2024, AI models were being used to discover new antibiotics, design novel proteins, and run simulations that previously took years — in hours.",
    category: "Science",
    source: "Nature, Science, 2024",
    color: "text-cyan-400",
  },
  {
    fact: "The global AI market was valued at ~$200B in 2023 and is projected to exceed $1.8 trillion by 2030 — growing faster than the internet did in its heyday.",
    category: "Economics",
    source: "Grand View Research & McKinsey, 2024",
    color: "text-amber-400",
  },
];

interface AiFactsProps {
  className?: string;
}

export function AiFacts({ className }: AiFactsProps) {
  const [index, setIndex] = useState(0);
  const [progress, setProgress] = useState(0);
  const [direction, setDirection] = useState(1);

  const next = useCallback(() => {
    setDirection(1);
    setIndex((i) => (i + 1) % facts.length);
    setProgress(0);
  }, []);

  const prev = () => {
    setDirection(-1);
    setIndex((i) => (i - 1 + facts.length) % facts.length);
    setProgress(0);
  };

  // Auto-advance timer
  useEffect(() => {
    const step = 50; // ms per tick
    const interval = setInterval(() => {
      setProgress((p) => {
        if (p >= 100) {
          next();
          return 0;
        }
        return p + (step / INTERVAL_MS) * 100;
      });
    }, step);
    return () => clearInterval(interval);
  }, [next]);

  const fact = facts[index];

  return (
    <div className={className}>
      <div className="glass rounded-2xl p-6 border border-violet-500/10 relative overflow-hidden">
        {/* Ambient glow */}
        <div className="absolute inset-0 bg-gradient-to-br from-violet-500/5 via-transparent to-pink-500/5 pointer-events-none" />

        <div className="relative z-10">
          {/* Header */}
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-2">
              <div className="w-7 h-7 rounded-lg bg-amber-500/20 flex items-center justify-center">
                <Lightbulb className="w-4 h-4 text-amber-400" />
              </div>
              <span className="text-xs font-semibold text-zinc-400 uppercase tracking-wider">Did You Know?</span>
            </div>

            <div className="flex items-center gap-1">
              <button
                onClick={prev}
                className="p-1.5 rounded-lg hover:bg-white/5 text-zinc-600 hover:text-zinc-300 transition-colors"
                aria-label="Previous fact"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>
              <span className="text-xs text-zinc-600 tabular-nums w-10 text-center">{index + 1}/{facts.length}</span>
              <button
                onClick={next}
                className="p-1.5 rounded-lg hover:bg-white/5 text-zinc-600 hover:text-zinc-300 transition-colors"
                aria-label="Next fact"
              >
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Fact text */}
          <div className="min-h-[80px] mb-4">
            <AnimatePresence mode="wait" custom={direction}>
              <motion.p
                key={index}
                custom={direction}
                variants={{
                  enter: (d: number) => ({ opacity: 0, x: d * 20 }),
                  center: { opacity: 1, x: 0 },
                  exit: (d: number) => ({ opacity: 0, x: d * -20 }),
                }}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{ duration: 0.3, ease: 'easeOut' }}
                className="text-zinc-200 leading-relaxed"
              >
                {fact.fact}
              </motion.p>
            </AnimatePresence>
          </div>

          {/* Footer */}
          <AnimatePresence mode="wait">
            <motion.div
              key={index + '-meta'}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="flex items-center justify-between"
            >
              <div className="flex items-center gap-2">
                <Zap className={`w-3 h-3 ${fact.color}`} />
                <span className={`text-xs font-medium ${fact.color}`}>{fact.category}</span>
                <span className="text-zinc-700">·</span>
                <span className="text-xs text-zinc-600">{fact.source}</span>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Progress bar */}
          <div className="mt-4 h-0.5 bg-zinc-800 rounded-full overflow-hidden">
            <motion.div
              className="h-full bg-gradient-to-r from-violet-500 to-pink-500 rounded-full"
              style={{ width: `${progress}%` }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
