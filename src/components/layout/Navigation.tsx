'use client';

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Home,
  Clock,
  Users,
  Target,
  Lightbulb,
  GitBranch,
  BookOpen,
  Info,
  Menu,
  X,
  Sparkles,
  Palette,
  Search,
} from 'lucide-react';
import { useStore } from '@/lib/stores/useStore';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { CommandPalette } from '@/components/interactive/CommandPalette';
import type { UserMode } from '@/types';
import type { AppTheme } from '@/lib/stores/useStore';

const navItems = [
  { href: '/', label: 'Portal', icon: Home },
  { href: '/timeline', label: 'Timeline', icon: Clock },
  { href: '/experts', label: 'Experts', icon: Users },
  { href: '/predictions', label: 'Predictions', icon: Target },
  { href: '/concepts', label: 'Concepts', icon: Lightbulb },
  { href: '/scenarios', label: 'Scenarios', icon: GitBranch },
  { href: '/sources', label: 'Sources', icon: BookOpen },
  { href: '/about', label: 'About', icon: Info },
];

const modeList: { value: UserMode; label: string; dot: string; text: string; bg: string; hover: string; desc: string }[] = [
  { value: 'explorer',  label: 'Explorer',  dot: 'bg-emerald-400', text: 'text-emerald-400', bg: 'bg-emerald-500/10 border-emerald-500/30', hover: 'hover:bg-emerald-500/15', desc: 'Discover everything' },
  { value: 'analyst',   label: 'Analyst',   dot: 'bg-blue-400',    text: 'text-blue-400',    bg: 'bg-blue-500/10 border-blue-500/30',       hover: 'hover:bg-blue-500/15',    desc: 'Data-focused view' },
  { value: 'visionary', label: 'Visionary', dot: 'bg-violet-400',  text: 'text-violet-400',  bg: 'bg-violet-500/10 border-violet-500/30',   hover: 'hover:bg-violet-500/15',  desc: 'Long-range thinking' },
  { value: 'skeptic',   label: 'Skeptic',   dot: 'bg-amber-400',   text: 'text-amber-400',   bg: 'bg-amber-500/10 border-amber-500/30',     hover: 'hover:bg-amber-500/15',   desc: 'Evidence-based' },
  { value: 'wonder',    label: 'Wonder',    dot: 'bg-pink-400',    text: 'text-pink-400',    bg: 'bg-pink-500/10 border-pink-500/30',       hover: 'hover:bg-pink-500/15',    desc: 'Pure curiosity' },
];

const themeOrder: AppTheme[] = ['cosmic', 'void', 'aurora'];
const themeLabel: Record<AppTheme, string> = { cosmic: 'Cosmic', void: 'Void', aurora: 'Aurora' };
const themeIcon: Record<AppTheme, string> = { cosmic: '🌌', void: '⬛', aurora: '🌿' };

export function Navigation() {
  const pathname = usePathname();
  const [isScrolled, setIsScrolled]         = useState(false);
  const [isMobileMenuOpen, setMobileMenu]   = useState(false);
  const [isModeOpen, setModeOpen]           = useState(false);
  const [isCmdOpen, setCmdOpen]             = useState(false);

  const modeRef = useRef<HTMLDivElement>(null);

  const { mode, setMode, theme, setTheme } = useStore();
  const currentMode = modeList.find(m => m.value === mode) ?? modeList[0];

  // Scroll tracking
  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Global ⌘K / Ctrl+K shortcut
  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault();
        setCmdOpen(prev => !prev);
      }
    };
    window.addEventListener('keydown', handler);
    return () => window.removeEventListener('keydown', handler);
  }, []);

  // Click-outside for mode dropdown
  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (modeRef.current && !modeRef.current.contains(e.target as Node)) {
        setModeOpen(false);
      }
    };
    if (isModeOpen) document.addEventListener('mousedown', handler);
    return () => document.removeEventListener('mousedown', handler);
  }, [isModeOpen]);

  const cycleTheme = () => {
    const next = themeOrder[(themeOrder.indexOf(theme ?? 'cosmic') + 1) % themeOrder.length];
    setTheme(next);
  };

  return (
    <>
      <motion.header
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className={cn(
          'fixed top-0 left-0 right-0 z-50 transition-all duration-500',
          isScrolled ? 'glass border-b border-violet-500/20' : 'bg-transparent',
        )}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 sm:h-20">

            {/* Logo */}
            <Link href="/" className="flex items-center gap-3 group shrink-0">
              <motion.div
                whileHover={{ rotate: 180, scale: 1.1 }}
                transition={{ duration: 0.5 }}
                className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-gradient-to-br from-violet-600 via-purple-500 to-pink-500 flex items-center justify-center shadow-lg shadow-violet-500/30"
              >
                <Sparkles className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
              </motion.div>
              <div className="hidden sm:block">
                <h1 className="text-xl font-bold gradient-text">SYNTHESIS</h1>
                <p className="text-[10px] text-zinc-500 tracking-widest uppercase">AI Evolution</p>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-1">
              {navItems.map((item) => {
                const Icon = item.icon;
                const isActive = pathname === item.href;
                return (
                  <Link key={item.href} href={item.href}>
                    <motion.div
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className={cn(
                        'flex items-center gap-2 px-3 py-2 rounded-lg text-sm font-medium transition-all duration-300',
                        isActive
                          ? 'bg-violet-500/20 text-violet-300 border border-violet-500/30'
                          : 'text-zinc-400 hover:text-zinc-200 hover:bg-white/5',
                      )}
                    >
                      <Icon className="w-4 h-4" />
                      <span className="hidden xl:inline">{item.label}</span>
                    </motion.div>
                  </Link>
                );
              })}
            </nav>

            {/* Right Section */}
            <div className="flex items-center gap-1.5">

              {/* ⌘K Search button */}
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setCmdOpen(true)}
                title="Search (⌘K)"
                className="text-zinc-400 hover:text-zinc-200 hover:bg-white/5 h-9 w-9"
              >
                <Search className="w-4 h-4" />
              </Button>

              {/* Theme cycle button */}
              <Button
                variant="ghost"
                size="icon"
                onClick={cycleTheme}
                title={`Theme: ${themeLabel[theme ?? 'cosmic']} — click to cycle`}
                className="text-zinc-400 hover:text-zinc-200 hover:bg-white/5 h-9 w-9 hidden sm:flex"
              >
                <span className="text-sm leading-none">{themeIcon[theme ?? 'cosmic']}</span>
              </Button>

              {/* Mode switcher dropdown */}
              <div ref={modeRef} className="relative">
                <motion.button
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setModeOpen(prev => !prev)}
                  className={cn(
                    'flex items-center gap-1.5 px-2.5 py-1.5 rounded-full border text-xs font-medium transition-all duration-200',
                    currentMode.bg,
                    currentMode.text,
                  )}
                >
                  <span className={cn('w-1.5 h-1.5 rounded-full animate-pulse', currentMode.dot)} />
                  <span className="hidden xs:inline sm:inline">{currentMode.label}</span>
                  <Palette className="w-3 h-3 opacity-60" />
                </motion.button>

                <AnimatePresence>
                  {isModeOpen && (
                    <motion.div
                      initial={{ opacity: 0, scale: 0.95, y: -6 }}
                      animate={{ opacity: 1, scale: 1, y: 0 }}
                      exit={{ opacity: 0, scale: 0.95, y: -6 }}
                      transition={{ duration: 0.15, ease: [0.22, 1, 0.36, 1] }}
                      className="absolute right-0 top-full mt-2 w-52 rounded-xl glass border border-zinc-700/60 overflow-hidden shadow-2xl z-50"
                    >
                      <div className="px-3 pt-3 pb-1">
                        <p className="text-[10px] text-zinc-500 font-medium uppercase tracking-widest mb-2">
                          View Mode
                        </p>
                      </div>
                      {modeList.map((m) => (
                        <button
                          key={m.value}
                          onClick={() => { setMode(m.value); setModeOpen(false); }}
                          className={cn(
                            'w-full flex items-center gap-3 px-3 py-2.5 text-left transition-all duration-150',
                            m.hover,
                            mode === m.value ? `${m.text} font-medium` : 'text-zinc-400 hover:text-zinc-200',
                          )}
                        >
                          <span className={cn('w-2 h-2 rounded-full shrink-0', m.dot)} />
                          <div className="flex-1 min-w-0">
                            <p className="text-xs font-medium leading-none">{m.label}</p>
                            <p className="text-[10px] text-zinc-500 mt-0.5">{m.desc}</p>
                          </div>
                          {mode === m.value && (
                            <span className="text-[10px] opacity-60">✓</span>
                          )}
                        </button>
                      ))}
                      <div className="px-3 py-2 border-t border-zinc-800/60 flex items-center justify-between">
                        <span className="text-[10px] text-zinc-600">Theme</span>
                        <div className="flex gap-1">
                          {themeOrder.map(t => (
                            <button
                              key={t}
                              onClick={() => setTheme(t)}
                              title={themeLabel[t]}
                              className={cn(
                                'text-sm px-1 rounded transition-all',
                                (theme ?? 'cosmic') === t ? 'opacity-100 scale-110' : 'opacity-40 hover:opacity-70',
                              )}
                            >
                              {themeIcon[t]}
                            </button>
                          ))}
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* Mobile Menu Button */}
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setMobileMenu(!isMobileMenuOpen)}
                className="lg:hidden text-zinc-400 hover:text-zinc-200 hover:bg-white/5 h-9 w-9"
              >
                {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </Button>
            </div>
          </div>
        </div>
      </motion.header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-x-0 top-16 sm:top-20 z-40 lg:hidden"
          >
            <div className="glass border-b border-violet-500/20 p-4 max-h-[80vh] overflow-y-auto">
              <nav className="flex flex-col gap-1">
                {navItems.map((item) => {
                  const Icon = item.icon;
                  const isActive = pathname === item.href;
                  return (
                    <Link key={item.href} href={item.href} onClick={() => setMobileMenu(false)}>
                      <motion.div
                        whileTap={{ scale: 0.98 }}
                        className={cn(
                          'flex items-center gap-3 px-4 py-3 rounded-lg text-sm font-medium transition-all duration-200',
                          isActive
                            ? 'bg-violet-500/20 text-violet-300 border border-violet-500/30'
                            : 'text-zinc-400 hover:text-zinc-200 hover:bg-white/5',
                        )}
                      >
                        <Icon className="w-5 h-5 shrink-0" />
                        {item.label}
                      </motion.div>
                    </Link>
                  );
                })}
              </nav>

              {/* Mobile search shortcut */}
              <button
                onClick={() => { setMobileMenu(false); setCmdOpen(true); }}
                className="mt-3 w-full flex items-center gap-3 px-4 py-3 rounded-lg text-sm text-zinc-400 hover:text-zinc-200 hover:bg-white/5 transition-all"
              >
                <Search className="w-5 h-5 shrink-0" />
                Search everything
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Command Palette */}
      <CommandPalette isOpen={isCmdOpen} onClose={() => setCmdOpen(false)} />
    </>
  );
}

