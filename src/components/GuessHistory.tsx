import { motion, AnimatePresence } from "framer-motion";
import { useGameStore } from "../store/gameStore";

const CLUE_NAMES: Record<string, string> = {
  shape: 'Shape',
  manufacturer: 'Manufacturer',
  category: 'Category',
  origin: 'Origin',
};

function GuessHistory() {
  const { guesses } = useGameStore();

  if (guesses.length === 0) return null;

  return (
    <div className="guesses-history">
      <h3>Previous Guesses</h3>
      <ul className="guess-list">
        <AnimatePresence>
          {guesses.map((guess, index) => (
            <motion.li
              key={`${guess.name}-${index}`}
              className={`guess-item ${
                guess.isCorrect ? "correct" : guess.isHint ? "hint" : "incorrect"
              }`}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.1 }}
            >
              <span className="guess-emoji">
                {guess.isCorrect ? "✅" : guess.isHint ? "☕" : "❌"}
              </span>
              <span className="guess-text">{guess.name}</span>
              {guess.isHint && guess.hintRevealed && (
                <div className="guess-matches">
                  <span className="hint-badge">{CLUE_NAMES[guess.hintRevealed]} revealed</span>
                </div>
              )}
              {!guess.isCorrect && !guess.isHint && (
                <div className="guess-matches">
                  {guess.matches.shape && (
                    <span className="match-badge">Shape ✓</span>
                  )}
                  {guess.matches.manufacturer && (
                    <span className="match-badge">Maker ✓</span>
                  )}
                  {guess.matches.category && (
                    <span className="match-badge">Type ✓</span>
                  )}
                  {guess.matches.origin && (
                    <span className="match-badge">Origin ✓</span>
                  )}
                </div>
              )}
            </motion.li>
          ))}
        </AnimatePresence>
      </ul>
    </div>
  );
}

export default GuessHistory;
