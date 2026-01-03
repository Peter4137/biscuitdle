import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { getDailyBiscuit, getBiscuitByName } from '../data/biscuits';
import type { Biscuit, Guess, RevealedClues, GameStatus, PlayerStats, DailyResult } from '../types';

const MAX_ATTEMPTS = 6;
const ZOOM_LEVELS = [10, 8, 6, 4, 2, 1];

const getDateKey = (): string => {
  const today = new Date();
  return `${today.getFullYear()}-${today.getMonth() + 1}-${today.getDate()}`;
};

const getYesterdayKey = (): string => {
  const yesterday = new Date();
  yesterday.setDate(yesterday.getDate() - 1);
  return `${yesterday.getFullYear()}-${yesterday.getMonth() + 1}-${yesterday.getDate()}`;
};

const createEmptyStats = (): PlayerStats => ({
  gamesPlayed: 0,
  gamesWon: 0,
  currentStreak: 0,
  maxStreak: 0,
  guessDistribution: { 1: 0, 2: 0, 3: 0, 4: 0, 5: 0, 6: 0 },
  history: {},
});

interface GameState {
  dateKey: string;
  targetBiscuit: Biscuit;
  guesses: Guess[];
  attempts: number;
  hintsUsed: number;
  gameStatus: GameStatus;
  revealedClues: RevealedClues;
  stats: PlayerStats;
  initGame: () => void;
  makeGuess: (guessName: string) => Guess | { error: string } | null;
  useHint: () => { error: string } | { revealed: keyof RevealedClues } | null;
  getCurrentZoom: () => number;
  canUseHint: () => boolean;
}

export const useGameStore = create<GameState>()(
  persist(
    (set, get) => ({
      dateKey: getDateKey(),
      targetBiscuit: getDailyBiscuit(),
      guesses: [],
      attempts: 0,
      hintsUsed: 0,
      gameStatus: 'playing',
      revealedClues: {
        shape: false,
        manufacturer: false,
        category: false,
        origin: false,
      },
      stats: createEmptyStats(),

      initGame: () => {
        const currentDateKey = getDateKey();
        const state = get();

        if (state.dateKey !== currentDateKey) {
          const yesterdayKey = getYesterdayKey();
          const playedYesterday = state.stats.history[yesterdayKey];
          const streakBroken = !playedYesterday || !playedYesterday.won;
          
          set({
            dateKey: currentDateKey,
            targetBiscuit: getDailyBiscuit(),
            guesses: [],
            attempts: 0,
            hintsUsed: 0,
            gameStatus: 'playing',
            revealedClues: {
              shape: false,
              manufacturer: false,
              category: false,
              origin: false,
            },
            stats: {
              ...state.stats,
              currentStreak: streakBroken ? 0 : state.stats.currentStreak,
            },
          });
        }
      },

      makeGuess: (guessName: string) => {
        const state = get();
        if (state.gameStatus !== 'playing' || state.attempts >= MAX_ATTEMPTS) {
          return null;
        }

        const guessedBiscuit = getBiscuitByName(guessName);
        if (!guessedBiscuit) {
          return { error: 'Biscuit not found in our collection!' };
        }

        if (state.guesses.some(g => g.name.toLowerCase() === guessName.toLowerCase())) {
          return { error: "You've already guessed that biscuit!" };
        }

        const target = state.targetBiscuit;
        const isCorrect = guessedBiscuit.id === target.id;

        const matches = {
          shape: guessedBiscuit.shape === target.shape,
          manufacturer: guessedBiscuit.manufacturer === target.manufacturer,
          category: guessedBiscuit.category === target.category,
          origin: guessedBiscuit.origin === target.origin,
        };

        const guess: Guess = {
          name: guessedBiscuit.name,
          isCorrect,
          matches,
        };

        const newGuesses = [...state.guesses, guess];
        const newAttempts = state.attempts + 1;

        const newRevealedClues = { ...state.revealedClues };
        if (matches.shape) newRevealedClues.shape = true;
        if (matches.manufacturer) newRevealedClues.manufacturer = true;
        if (matches.category) newRevealedClues.category = true;
        if (matches.origin) newRevealedClues.origin = true;

        let newStatus: GameStatus = 'playing';
        if (isCorrect) {
          newStatus = 'won';
        } else if (newAttempts >= MAX_ATTEMPTS) {
          newStatus = 'lost';
        }

        let newStats = state.stats;
        
        if (newStatus !== 'playing') {
          const dailyResult: DailyResult = {
            dateKey: state.dateKey,
            won: newStatus === 'won',
            guesses: newAttempts,
            biscuitName: target.name,
          };

          const newHistory = {
            ...state.stats.history,
            [state.dateKey]: dailyResult,
          };

          const newCurrentStreak = newStatus === 'won' 
            ? state.stats.currentStreak + 1 
            : 0;

          const newGuessDistribution = { ...state.stats.guessDistribution };
          if (newStatus === 'won') {
            newGuessDistribution[newAttempts] = (newGuessDistribution[newAttempts] || 0) + 1;
          }

          newStats = {
            gamesPlayed: state.stats.gamesPlayed + 1,
            gamesWon: state.stats.gamesWon + (newStatus === 'won' ? 1 : 0),
            currentStreak: newCurrentStreak,
            maxStreak: Math.max(state.stats.maxStreak, newCurrentStreak),
            guessDistribution: newGuessDistribution,
            history: newHistory,
          };
        }

        set({
          guesses: newGuesses,
          attempts: newAttempts,
          revealedClues: newRevealedClues,
          gameStatus: newStatus,
          stats: newStats,
        });

        return guess;
      },

      canUseHint: () => {
        const state = get();
        if (state.gameStatus !== 'playing') return false;
        if (state.attempts >= MAX_ATTEMPTS) return false;
        
        const unrevealedClues = (['shape', 'manufacturer', 'category', 'origin'] as const)
          .filter(key => !state.revealedClues[key]);
        
        return unrevealedClues.length > 0;
      },

      useHint: () => {
        const state = get();
        
        if (state.gameStatus !== 'playing') {
          return { error: 'Game is already over!' };
        }
        
        if (state.attempts >= MAX_ATTEMPTS) {
          return { error: 'No attempts remaining!' };
        }

        const unrevealedClues = (['shape', 'manufacturer', 'category', 'origin'] as const)
          .filter(key => !state.revealedClues[key]);

        if (unrevealedClues.length === 0) {
          return { error: 'All clues already revealed!' };
        }

        const randomClue = unrevealedClues[Math.floor(Math.random() * unrevealedClues.length)];
        
        const hintGuess: Guess = {
          name: '☕ Cuppa Tea Hint',
          isCorrect: false,
          isHint: true,
          hintRevealed: randomClue,
          matches: {
            shape: false,
            manufacturer: false,
            category: false,
            origin: false,
          },
        };

        const newRevealedClues = { ...state.revealedClues };
        newRevealedClues[randomClue] = true;

        const newAttempts = state.attempts + 1;
        const newGuesses = [...state.guesses, hintGuess];

        let newStatus: GameStatus = 'playing';
        if (newAttempts >= MAX_ATTEMPTS) {
          newStatus = 'lost';
        }

        let newStats = state.stats;
        
        if (newStatus === 'lost') {
          const dailyResult: DailyResult = {
            dateKey: state.dateKey,
            won: false,
            guesses: newAttempts,
            biscuitName: state.targetBiscuit.name,
          };

          newStats = {
            ...state.stats,
            gamesPlayed: state.stats.gamesPlayed + 1,
            currentStreak: 0,
            history: {
              ...state.stats.history,
              [state.dateKey]: dailyResult,
            },
          };
        }

        set({
          guesses: newGuesses,
          attempts: newAttempts,
          hintsUsed: state.hintsUsed + 1,
          revealedClues: newRevealedClues,
          gameStatus: newStatus,
          stats: newStats,
        });

        return { revealed: randomClue };
      },

      getCurrentZoom: () => {
        const state = get();
        return ZOOM_LEVELS[Math.min(state.attempts, ZOOM_LEVELS.length - 1)];
      },
    }),
    {
      name: 'crumbdle-storage',
      partialize: (state) => ({
        dateKey: state.dateKey,
        guesses: state.guesses,
        attempts: state.attempts,
        hintsUsed: state.hintsUsed,
        gameStatus: state.gameStatus,
        revealedClues: state.revealedClues,
        stats: state.stats,
      }),
    }
  )
);

