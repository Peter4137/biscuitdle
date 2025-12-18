import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { getDailyBiscuit, getBiscuitByName } from '../data/biscuits';
import type { Biscuit, Guess, RevealedClues, GameStatus } from '../types';

const MAX_ATTEMPTS = 6;
const ZOOM_LEVELS = [10, 8, 6, 4, 2, 1];

const getDateKey = (): string => {
  const today = new Date();
  return `${today.getFullYear()}-${today.getMonth() + 1}-${today.getDate()}`;
};

interface GameState {
  dateKey: string;
  targetBiscuit: Biscuit;
  guesses: Guess[];
  attempts: number;
  gameStatus: GameStatus;
  revealedClues: RevealedClues;
  initGame: () => void;
  makeGuess: (guessName: string) => Guess | { error: string } | null;
  getCurrentZoom: () => number;
}

export const useGameStore = create<GameState>()(
  persist(
    (set, get) => ({
      dateKey: getDateKey(),
      targetBiscuit: getDailyBiscuit(),
      guesses: [],
      attempts: 0,
      gameStatus: 'playing',
      revealedClues: {
        dietary: false,
        manufacturer: false,
        category: false,
      },

      initGame: () => {
        const currentDateKey = getDateKey();
        const state = get();

        if (state.dateKey !== currentDateKey) {
          set({
            dateKey: currentDateKey,
            targetBiscuit: getDailyBiscuit(),
            guesses: [],
            attempts: 0,
            gameStatus: 'playing',
            revealedClues: {
              dietary: false,
              manufacturer: false,
              category: false,
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
          dietary: guessedBiscuit.dietary.some(d => target.dietary.includes(d)),
          manufacturer: guessedBiscuit.manufacturer === target.manufacturer,
          category: guessedBiscuit.category === target.category,
        };

        const guess: Guess = {
          name: guessedBiscuit.name,
          isCorrect,
          matches,
        };

        const newGuesses = [...state.guesses, guess];
        const newAttempts = state.attempts + 1;

        const newRevealedClues = { ...state.revealedClues };
        if (matches.dietary) newRevealedClues.dietary = true;
        if (matches.manufacturer) newRevealedClues.manufacturer = true;
        if (matches.category) newRevealedClues.category = true;

        let newStatus: GameStatus = 'playing';
        if (isCorrect) {
          newStatus = 'won';
        } else if (newAttempts >= MAX_ATTEMPTS) {
          newStatus = 'lost';
        }

        set({
          guesses: newGuesses,
          attempts: newAttempts,
          revealedClues: newRevealedClues,
          gameStatus: newStatus,
        });

        return guess;
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
        gameStatus: state.gameStatus,
        revealedClues: state.revealedClues,
      }),
    }
  )
);

