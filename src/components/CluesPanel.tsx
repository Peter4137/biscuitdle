import { motion } from "framer-motion";
import { useGameStore } from "../store/gameStore";

function CluesPanel() {
  const { revealedClues, targetBiscuit } = useGameStore();

  return (
    <div className="clues-panel">
      <h2 className="clues-title">
        <span>🍪</span>
        <span>Clues Revealed</span>
      </h2>
      <div className="clue-grid">
        <motion.div
          className={`clue-item ${revealedClues.shape ? "revealed" : ""}`}
          animate={revealedClues.shape ? { scale: [1, 1.05, 1] } : {}}
          transition={{ duration: 0.4 }}
        >
          <span className="clue-label">Shape</span>
          <span className="clue-value">
            {revealedClues.shape ? targetBiscuit.shape : "???"}
          </span>
        </motion.div>

        <motion.div
          className={`clue-item ${
            revealedClues.manufacturer ? "revealed" : ""
          }`}
          animate={revealedClues.manufacturer ? { scale: [1, 1.05, 1] } : {}}
          transition={{ duration: 0.4 }}
        >
          <span className="clue-label">Manufacturer</span>
          <span className="clue-value">
            {revealedClues.manufacturer ? targetBiscuit.manufacturer : "???"}
          </span>
        </motion.div>

        <motion.div
          className={`clue-item ${revealedClues.category ? "revealed" : ""}`}
          animate={revealedClues.category ? { scale: [1, 1.05, 1] } : {}}
          transition={{ duration: 0.4 }}
        >
          <span className="clue-label">Category</span>
          <span className="clue-value">
            {revealedClues.category ? targetBiscuit.category : "???"}
          </span>
        </motion.div>

        <motion.div
          className={`clue-item ${revealedClues.origin ? "revealed" : ""}`}
          animate={revealedClues.origin ? { scale: [1, 1.05, 1] } : {}}
          transition={{ duration: 0.4 }}
        >
          <span className="clue-label">Origin</span>
          <span className="clue-value">
            {revealedClues.origin ? targetBiscuit.origin : "???"}
          </span>
        </motion.div>
      </div>
    </div>
  );
}

export default CluesPanel;
