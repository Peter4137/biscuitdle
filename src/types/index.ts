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

export interface GameState {
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

