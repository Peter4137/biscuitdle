import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useGameStore } from '../store/gameStore';

const FALLBACK_IMAGE = 'https://placehold.co/400x400/D4A574/6B4423?text=🍪';

function BiscuitViewer() {
  const { targetBiscuit, getCurrentZoom, gameStatus } = useGameStore();
  const [imageSrc, setImageSrc] = useState(targetBiscuit.image);
  const zoom = getCurrentZoom();
  
  useEffect(() => {
    setImageSrc(targetBiscuit.image);
  }, [targetBiscuit]);
  
  const scale = gameStatus === 'playing' ? zoom : 1;
  
  const handleImageError = () => {
    setImageSrc(FALLBACK_IMAGE);
  };
  
  return (
    <div className="biscuit-viewer">
      <div className="viewer-frame">
        <div className="biscuit-image-container">
          <motion.img
            src={imageSrc}
            alt="Mystery Biscuit"
            className="biscuit-image"
            onError={handleImageError}
            style={{ 
              transform: `scale(${scale})`,
              filter: gameStatus === 'playing' && zoom > 3 ? 'blur(1px)' : 'none'
            }}
            initial={{ scale: 6 }}
            animate={{ scale }}
            transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
          />
        </div>
      </div>
      <div className="zoom-indicator">
        <span>Magnification:</span>
        <span className="zoom-badge">{zoom}×</span>
      </div>
    </div>
  );
}

export default BiscuitViewer;

