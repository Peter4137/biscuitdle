import { useState, useEffect, useMemo } from "react";
import { motion } from "framer-motion";
import { useGameStore } from "../store/gameStore";
import { getTimeUntilNextBiscuit, getDailyImageIndex } from "../data/biscuits";

const FALLBACK_IMAGE = "https://placehold.co/400x400/D4A574/6B4423?text=🍪";

function GameResult() {
  const { gameStatus, targetBiscuit, attempts, guesses } = useGameStore();
  const [countdown, setCountdown] = useState("");
  const [copied, setCopied] = useState(false);

  const dailyImage = useMemo(() => {
    if (targetBiscuit.images.length === 0) return FALLBACK_IMAGE;
    const index = getDailyImageIndex(targetBiscuit.images.length);
    return targetBiscuit.images[index];
  }, [targetBiscuit]);

  useEffect(() => {
    const updateCountdown = () => {
      const ms = getTimeUntilNextBiscuit();
      const hours = Math.floor(ms / (1000 * 60 * 60));
      const minutes = Math.floor((ms % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((ms % (1000 * 60)) / 1000);
      setCountdown(`${hours}h ${minutes}m ${seconds}s`);
    };

    updateCountdown();
    const interval = setInterval(updateCountdown, 1000);
    return () => clearInterval(interval);
  }, []);

  const handleShare = async () => {
    const emojiGrid = guesses
      .map((g) => {
        if (g.isCorrect) return "🍪";
        const matches = [
          g.matches.shape ? "🟢" : "⚪",
          g.matches.manufacturer ? "🟢" : "⚪",
          g.matches.category ? "🟢" : "⚪",
          g.matches.origin ? "🟢" : "⚪",
        ].join("");
        return matches;
      })
      .join("\n");

    const text = `🌍 Crumbdle 🍪
${gameStatus === "won" ? `Solved in ${attempts}/6!` : "Better luck tomorrow!"}

${emojiGrid}

Play at: crumbdle.com`;

    try {
      await navigator.clipboard.writeText(text);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      alert(text);
    }
  };

  const isWon = gameStatus === "won";

  return (
    <motion.div
      className="result-overlay"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <motion.div
        className="result-modal"
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ type: "spring", duration: 0.5 }}
      >
        <h2 className={`result-title ${isWon ? "won" : "lost"}`}>
          {isWon ? "🎉 Jolly Good Show! 🎉" : "😢 Oh Crumbs! 😢"}
        </h2>

        <p className="result-message">
          {isWon
            ? `Smashing! You identified today's biscuit in ${attempts} ${
                attempts === 1 ? "guess" : "guesses"
              }!`
            : "Frightfully sorry, but you've run out of guesses. Better luck tomorrow, old chap!"}
        </p>

        <div className="result-biscuit">
          <motion.img
            src={dailyImage}
            alt={targetBiscuit.name}
            className="result-image"
            initial={{ rotate: -5 }}
            animate={{ rotate: [0, 3, -3, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          />
          <p className="result-name">{targetBiscuit.name}</p>
        </div>

        <button className="btn-share" onClick={handleShare}>
          {copied ? "Copied! 📋" : "Share Result 🇬🇧"}
        </button>

        <p className="countdown">
          Next biscuit in: <span className="countdown-time">{countdown}</span>
        </p>
      </motion.div>
    </motion.div>
  );
}

export default GameResult;
