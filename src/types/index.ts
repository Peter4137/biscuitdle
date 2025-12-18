export interface Biscuit {
  id: string;
  name: string;
  manufacturer: string;
  category: string;
  dietary: string[];
  image: string;
}

export interface Guess {
  name: string;
  isCorrect: boolean;
  matches: {
    dietary: boolean;
    manufacturer: boolean;
    category: boolean;
  };
}

export interface RevealedClues {
  dietary: boolean;
  manufacturer: boolean;
  category: boolean;
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

