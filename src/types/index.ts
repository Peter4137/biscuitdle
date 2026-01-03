export interface Biscuit {
  id: string;
  name: string;
  manufacturer: string;
  category: string;
  shape: string;
  images: string[];
  origin: string;
}

export interface Guess {
  name: string;
  isCorrect: boolean;
  matches: {
    shape: boolean;
    manufacturer: boolean;
    category: boolean;
    origin: boolean;
  };
}

export interface RevealedClues {
  shape: boolean;
  manufacturer: boolean;
  category: boolean;
  origin: boolean;
}

export type GameStatus = 'playing' | 'won' | 'lost';

export interface DailyResult {
  dateKey: string;
  won: boolean;
  guesses: number;
  biscuitName: string;
}

export interface PlayerStats {
  gamesPlayed: number;
  gamesWon: number;
  currentStreak: number;
  maxStreak: number;
  guessDistribution: Record<number, number>;
  history: Record<string, DailyResult>;
}

export interface GameState {
  dateKey: string;
  targetBiscuit: Biscuit;
  guesses: Guess[];
  attempts: number;
  gameStatus: GameStatus;
  revealedClues: RevealedClues;
  stats: PlayerStats;
  initGame: () => void;
  makeGuess: (guessName: string) => Guess | { error: string } | null;
  getCurrentZoom: () => number;
}

