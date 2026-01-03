import { useEffect } from 'react';
import { AnimatePresence } from 'framer-motion';
import { Analytics } from '@vercel/analytics/react';
import { useGameStore } from './store/gameStore';
import Header from './components/Header';
import BiscuitViewer from './components/BiscuitViewer';
import CluesPanel from './components/CluesPanel';
import GuessInput from './components/GuessInput';
import GuessHistory from './components/GuessHistory';
import GameResult from './components/GameResult';

function App() {
  const { initGame, gameStatus } = useGameStore();

  useEffect(() => {
    initGame();
  }, [initGame]);

  return (
    <>
      <div className="union-jack-pattern" />
      <div className="app-container">
        <Header />
        <main>
          <BiscuitViewer />
          <CluesPanel />
          <GuessInput />
          <GuessHistory />
        </main>
        <footer className="footer">
          <p>A jolly good game for biscuit enthusiasts 🇬🇧</p>
          <p className="tea-reminder">Best enjoyed with a cup of tea ☕</p>
        </footer>

        <AnimatePresence>
          {gameStatus !== 'playing' && <GameResult />}
        </AnimatePresence>
      </div>
      <Analytics />
    </>
  );
}

export default App;

