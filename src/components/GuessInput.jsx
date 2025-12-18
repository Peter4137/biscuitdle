import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useGameStore } from '../store/gameStore';
import { getAllBiscuitNames } from '../data/biscuits';

const MAX_ATTEMPTS = 6;

function GuessInput() {
  const [input, setInput] = useState('');
  const [error, setError] = useState('');
  const [suggestions, setSuggestions] = useState([]);
  const [showSuggestions, setShowSuggestions] = useState(false);
  const [highlightedIndex, setHighlightedIndex] = useState(-1);
  const inputRef = useRef(null);
  const suggestionsRef = useRef(null);
  
  const { makeGuess, attempts, gameStatus } = useGameStore();
  const allBiscuits = getAllBiscuitNames();
  
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (suggestionsRef.current && !suggestionsRef.current.contains(e.target) &&
          inputRef.current && !inputRef.current.contains(e.target)) {
        setShowSuggestions(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleInputChange = (e) => {
    const value = e.target.value;
    setInput(value);
    setError('');
    setHighlightedIndex(-1);
    
    if (value.trim().length > 0) {
      const filtered = allBiscuits.filter(name => 
        name.toLowerCase().includes(value.toLowerCase())
      );
      setSuggestions(filtered);
      setShowSuggestions(filtered.length > 0);
    } else {
      setSuggestions([]);
      setShowSuggestions(false);
    }
  };
  
  const handleKeyDown = (e) => {
    if (!showSuggestions) {
      if (e.key === 'Enter') {
        handleSubmit();
      }
      return;
    }
    
    if (e.key === 'ArrowDown') {
      e.preventDefault();
      setHighlightedIndex(prev => 
        prev < suggestions.length - 1 ? prev + 1 : prev
      );
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      setHighlightedIndex(prev => prev > 0 ? prev - 1 : -1);
    } else if (e.key === 'Enter') {
      e.preventDefault();
      if (highlightedIndex >= 0) {
        selectSuggestion(suggestions[highlightedIndex]);
      } else {
        handleSubmit();
      }
    } else if (e.key === 'Escape') {
      setShowSuggestions(false);
    }
  };
  
  const selectSuggestion = (name) => {
    setInput(name);
    setShowSuggestions(false);
    setSuggestions([]);
    inputRef.current?.focus();
  };
  
  const handleSubmit = () => {
    if (!input.trim() || gameStatus !== 'playing') return;
    
    const result = makeGuess(input.trim());
    
    if (result?.error) {
      setError(result.error);
      return;
    }
    
    setInput('');
    setError('');
    setSuggestions([]);
    setShowSuggestions(false);
  };
  
  const isDisabled = gameStatus !== 'playing' || attempts >= MAX_ATTEMPTS;

  return (
    <div className="guess-section">
      <AnimatePresence>
        {error && (
          <motion.div 
            className="error-message"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
          >
            {error}
          </motion.div>
        )}
      </AnimatePresence>
      
      <div className="guess-input-container">
        <div className="suggestions-container">
          <input
            ref={inputRef}
            type="text"
            className="guess-input"
            placeholder="Enter your biscuit guess..."
            value={input}
            onChange={handleInputChange}
            onKeyDown={handleKeyDown}
            onFocus={() => {
              if (suggestions.length > 0) setShowSuggestions(true);
            }}
            disabled={isDisabled}
            autoComplete="off"
          />
          
          <AnimatePresence>
            {showSuggestions && suggestions.length > 0 && (
              <motion.ul
                ref={suggestionsRef}
                className="suggestions-list"
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
              >
                {suggestions.map((name, index) => (
                  <li
                    key={name}
                    className={`suggestion-item ${index === highlightedIndex ? 'highlighted' : ''}`}
                    onClick={() => selectSuggestion(name)}
                    onMouseEnter={() => setHighlightedIndex(index)}
                  >
                    {name}
                  </li>
                ))}
              </motion.ul>
            )}
          </AnimatePresence>
        </div>
        
        <button 
          className="btn-guess"
          onClick={handleSubmit}
          disabled={isDisabled || !input.trim()}
        >
          Have a Guess!
        </button>
      </div>
      
      <p className="attempts-counter">
        Attempts: <span className="attempts-number">{attempts}</span>/6
      </p>
    </div>
  );
}

export default GuessInput;

