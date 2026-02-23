// ==========================================
// SYNTHESIS - AI Evolution Timeline
// Global State Store
// ==========================================

import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { 
  UserMode, 
  UserState, 
  UserPreferences, 
  Achievement 
} from '@/types';

interface AppState extends UserState {
  // Mode
  setMode: (mode: UserMode) => void;
  
  // Navigation
  currentPage: string;
  setCurrentPage: (page: string) => void;
  
  // Exploration tracking
  addVisitedNode: (nodeId: string) => void;
  addExploredPath: (pathId: string) => void;
  
  // User predictions
  addUserPrediction: (prediction: UserState['userPredictions'][0]) => void;
  
  // Achievements
  unlockAchievement: (achievement: Achievement) => void;
  
  // Preferences
  updatePreferences: (prefs: Partial<UserPreferences>) => void;
  
  // Session
  startSession: () => void;
  endSession: () => void;
  sessionStartTime: number | null;
  
  // UI State
  isMuted: boolean;
  toggleMute: () => void;
  showOnboarding: boolean;
  completeOnboarding: () => void;
  
  // Selected items
  selectedExpert: string | null;
  setSelectedExpert: (id: string | null) => void;
  selectedMilestone: string | null;
  setSelectedMilestone: (id: string | null) => void;
  selectedPrediction: string | null;
  setSelectedPrediction: (id: string | null) => void;
  selectedConcept: string | null;
  setSelectedConcept: (id: string | null) => void;
}

const defaultPreferences: UserPreferences = {
  audioEnabled: true,
  narrationEnabled: false,
  animationsReduced: false,
  highContrast: false,
  fontSize: 'medium',
  colorTheme: 'cosmic'
};

export const useStore = create<AppState>()(
  persist(
    (set, get) => ({
      // Initial state
      mode: 'analyst',
      visitedNodes: [],
      exploredPaths: [],
      savedPredictions: [],
      userPredictions: [],
      achievements: [],
      preferences: defaultPreferences,
      lastVisit: undefined,
      totalExplorationTime: 0,
      currentPage: 'home',
      sessionStartTime: null,
      isMuted: false,
      showOnboarding: true,
      selectedExpert: null,
      selectedMilestone: null,
      selectedPrediction: null,
      selectedConcept: null,
      
      // Mode
      setMode: (mode) => set({ mode }),
      
      // Navigation
      setCurrentPage: (page) => set({ currentPage: page }),
      
      // Exploration tracking
      addVisitedNode: (nodeId) => set((state) => ({
        visitedNodes: state.visitedNodes.includes(nodeId) 
          ? state.visitedNodes 
          : [...state.visitedNodes, nodeId]
      })),
      
      addExploredPath: (pathId) => set((state) => ({
        exploredPaths: state.exploredPaths.includes(pathId)
          ? state.exploredPaths
          : [...state.exploredPaths, pathId]
      })),
      
      // User predictions
      addUserPrediction: (prediction) => set((state) => ({
        userPredictions: [...state.userPredictions, prediction]
      })),
      
      // Achievements
      unlockAchievement: (achievement) => set((state) => ({
        achievements: state.achievements.find(a => a.id === achievement.id)
          ? state.achievements
          : [...state.achievements, achievement]
      })),
      
      // Preferences
      updatePreferences: (prefs) => set((state) => ({
        preferences: { ...state.preferences, ...prefs }
      })),
      
      // Session
      startSession: () => {
        const now = Date.now();
        set({ sessionStartTime: now, lastVisit: new Date().toISOString() });
      },
      
      endSession: () => {
        const state = get();
        if (state.sessionStartTime) {
          const duration = Math.floor((Date.now() - state.sessionStartTime) / 1000 / 60);
          set({
            totalExplorationTime: state.totalExplorationTime + duration,
            sessionStartTime: null
          });
        }
      },
      
      // UI State
      toggleMute: () => set((state) => ({ isMuted: !state.isMuted })),
      completeOnboarding: () => set({ showOnboarding: false }),
      
      // Selected items
      setSelectedExpert: (id) => set({ selectedExpert: id }),
      setSelectedMilestone: (id) => set({ selectedMilestone: id }),
      setSelectedPrediction: (id) => set({ selectedPrediction: id }),
      setSelectedConcept: (id) => set({ selectedConcept: id })
    }),
    {
      name: 'synthesis-storage',
      partialize: (state) => ({
        mode: state.mode,
        visitedNodes: state.visitedNodes,
        exploredPaths: state.exploredPaths,
        savedPredictions: state.savedPredictions,
        userPredictions: state.userPredictions,
        achievements: state.achievements,
        preferences: state.preferences,
        lastVisit: state.lastVisit,
        totalExplorationTime: state.totalExplorationTime,
        showOnboarding: state.showOnboarding
      })
    }
  )
);
