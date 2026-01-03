import { useState, useEffect, useMemo } from "react";
import { motion } from "framer-motion";
import { useGameStore } from "../store/gameStore";
import { getTimeUntilNextBiscuit, getDailyImageIndex } from "../data/biscuits";

const FALLBACK_IMAGE = "https://placehold.co/400x400/D4A574/6B4423?text=🍪";

const WINNING_PUNS = [
  "You're one smart cookie!",
  "That was a crumby good guess!",
  "You really take the biscuit!",
  "Absolutely biscuit-tastic!",
  "You've got the whole package!",
  "That's the way the cookie crumbles... in your favour!",
  "You're on a roll... a fig roll!",
  "Sweet victory, just like a Jammie Dodger!",
  "You've dunked on this challenge!",
  "Wafer you waiting for? You nailed it!",
  "You're the cream of the biscuit barrel!",
  "That's how you crumble!",
  "You've really risen to the occasion!",
  "Biscuit-ively brilliant!",
  "You've got great taste... in biscuits!",
];

const LOSING_PUNS = [
  "That's the way the cookie crumbles...",
  "You've been left feeling crumby!",
  "Better batter luck next time!",
  "That was a tough cookie to crack!",
  "You've had your chips... ahoy!",
  "Don't let it leave you feeling half-baked!",
  "You'll bounce back like a Bourbon!",
  "Time to dust off those crumbs and try again!",
  "Even the best biscuits break sometimes!",
  "You've been caught with your hand in the wrong jar!",
  "That one really took the biscuit... away from you!",
  "Crumbs! Better luck tomorrow!",
  "You've been left feeling shortbread of victory!",
  "Don't be a digestive about it!",
  "Sometimes life serves you stale biscuits!",
];

function GameResult() {
  const { gameStatus, targetBiscuit, attempts, guesses, stats } =
    useGameStore();
  const [countdown, setCountdown] = useState("");
  const [copied, setCopied] = useState(false);

  const dailyImage = useMemo(() => {
    if (targetBiscuit.images.length === 0) return FALLBACK_IMAGE;
    const index = getDailyImageIndex(targetBiscuit.images.length);
    return targetBiscuit.images[index];
  }, [targetBiscuit]);

  const randomPun = useMemo(() => {
    const puns = gameStatus === "won" ? WINNING_PUNS : LOSING_PUNS;
    return puns[Math.floor(Math.random() * puns.length)];
  }, [gameStatus]);

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
        if (g.isHint) return "☕";
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
          {isWon ? (
            <>
              <span className="result-emojis">🎉 🍪 🎊</span>
              <span>Jolly Good Show!</span>
              <span className="result-emojis">🏆 🇬🇧 ✨</span>
            </>
          ) : (
            <>
              <span className="result-emojis">😢 💔 🍪</span>
              <span>Oh Crumbs!</span>
              <span className="result-emojis">😭 🫠 💫</span>
            </>
          )}
        </h2>

        <p className="result-pun">{randomPun}</p>

        <p className="result-message">
          {isWon
            ? `You identified today's biscuit in ${attempts} ${
                attempts === 1 ? "guess" : "guesses"
              }!`
            : "Frightfully sorry, but you've run out of guesses. Chin up, old chap!"}
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

        <div className="stats-grid">
          <div className="stat-item">
            <span className="stat-value">{stats.gamesPlayed}</span>
            <span className="stat-label">Played</span>
          </div>
          <div className="stat-item">
            <span className="stat-value">
              {stats.gamesPlayed > 0
                ? Math.round((stats.gamesWon / stats.gamesPlayed) * 100)
                : 0}
              %
            </span>
            <span className="stat-label">Win Rate</span>
          </div>
          <div className="stat-item">
            <span className="stat-value">{stats.currentStreak}</span>
            <span className="stat-label">Current Streak</span>
          </div>
          <div className="stat-item">
            <span className="stat-value">{stats.maxStreak}</span>
            <span className="stat-label">Best Streak</span>
          </div>
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
