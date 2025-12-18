import { motion, AnimatePresence } from 'framer-motion';
import { useGameStore } from '../store/gameStore';

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
              className={`guess-item ${guess.isCorrect ? 'correct' : 'incorrect'}`}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.1 }}
            >
              <span className="guess-emoji">{guess.isCorrect ? '✅' : '❌'}</span>
              <span className="guess-text">{guess.name}</span>
              {!guess.isCorrect && (
                <div className="guess-matches">
                  {guess.matches.dietary && <span className="match-badge">Dietary ✓</span>}
                  {guess.matches.manufacturer && <span className="match-badge">Maker ✓</span>}
                  {guess.matches.category && <span className="match-badge">Type ✓</span>}
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

