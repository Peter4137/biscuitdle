import { motion } from 'framer-motion';

function Header() {
  return (
    <header className="header">
      <div className="header-flags">
        <span>🇬🇧</span>
        <span>🇬🇧</span>
        <span>🇬🇧</span>
      </div>
      <motion.div 
        className="crown"
        animate={{ y: [0, -6, 0] }}
        transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
      >
        👑
      </motion.div>
      <h1 className="title">Crumbdle</h1>
      <p className="tagline">The Daily British Biscuit Challenge</p>
    </header>
  );
}

export default Header;

