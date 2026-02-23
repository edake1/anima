'use client';

import { useState, useEffect } from 'react';
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
  Sparkles
} from 'lucide-react';
import { useStore } from '@/lib/stores/useStore';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

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

export function Navigation() {
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { mode, setMode } = useStore();
  
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  return (
    <>
      <motion.header
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className={cn(
          'fixed top-0 left-0 right-0 z-50 transition-all duration-500',
          isScrolled 
            ? 'glass border-b border-violet-500/20' 
            : 'bg-transparent'
        )}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 sm:h-20">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-3 group">
              <motion.div
                whileHover={{ rotate: 180, scale: 1.1 }}
                transition={{ duration: 0.5 }}
                className="w-10 h-10 rounded-xl bg-gradient-to-br from-violet-600 via-purple-500 to-pink-500 flex items-center justify-center shadow-lg shadow-violet-500/30"
              >
                <Sparkles className="w-5 h-5 text-white" />
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
                        'flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300',
                        isActive
                          ? 'bg-violet-500/20 text-violet-300 border border-violet-500/30'
                          : 'text-zinc-400 hover:text-zinc-200 hover:bg-white/5'
                      )}
                    >
                      <Icon className="w-4 h-4" />
                      {item.label}
                    </motion.div>
                  </Link>
                );
              })}
            </nav>
            
            {/* Right Section */}
            <div className="flex items-center gap-2">
              {/* Mode Badge */}
              <div className="hidden sm:flex items-center gap-2 px-3 py-1.5 rounded-full glass-light">
                <div className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                <span className="text-xs text-zinc-400 capitalize">{mode}</span>
              </div>
              
              {/* Mobile Menu Button */}
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="lg:hidden text-zinc-400 hover:text-zinc-200 hover:bg-white/5"
              >
                {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
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
            transition={{ duration: 0.3 }}
            className="fixed inset-x-0 top-16 z-40 lg:hidden"
          >
            <div className="glass border-b border-violet-500/20 p-4">
              <nav className="flex flex-col gap-2">
                {navItems.map((item) => {
                  const Icon = item.icon;
                  const isActive = pathname === item.href;
                  
                  return (
                    <Link
                      key={item.href}
                      href={item.href}
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      <motion.div
                        whileTap={{ scale: 0.98 }}
                        className={cn(
                          'flex items-center gap-3 px-4 py-3 rounded-lg text-sm font-medium transition-all duration-300',
                          isActive
                            ? 'bg-violet-500/20 text-violet-300 border border-violet-500/30'
                            : 'text-zinc-400 hover:text-zinc-200 hover:bg-white/5'
                        )}
                      >
                        <Icon className="w-5 h-5" />
                        {item.label}
                      </motion.div>
                    </Link>
                  );
                })}
              </nav>
              
              {/* Mode Selector in Mobile */}
              <div className="mt-4 pt-4 border-t border-zinc-800">
                <p className="text-xs text-zinc-500 mb-2 px-4">View Mode</p>
                <div className="flex flex-wrap gap-2 px-4">
                  {['explorer', 'analyst', 'visionary', 'skeptic'].map((m) => (
                    <button
                      key={m}
                      onClick={() => {
                        setMode(m as 'explorer' | 'analyst' | 'visionary' | 'skeptic');
                        setIsMobileMenuOpen(false);
                      }}
                      className={cn(
                        'px-3 py-1.5 rounded-full text-xs font-medium transition-all',
                        mode === m
                          ? 'bg-violet-500/30 text-violet-300 border border-violet-500/50'
                          : 'bg-zinc-800/50 text-zinc-400 border border-zinc-700/50 hover:border-violet-500/30'
                      )}
                    >
                      {m.charAt(0).toUpperCase() + m.slice(1)}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
