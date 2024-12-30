import React, { useState } from 'react';
import '../styles/Rules.css';

// Rules component displays game rules and toggles visibility
const Rules = () => {
  const [showRules, setShowRules] = useState(false); // Toggle for showing rules

  return (
    <div className="rules">
      {/* Button to show or hide the rules */}
      <button
        className="rules-button"
        onClick={() => setShowRules(!showRules)}
      >
        {showRules ? 'Hide Rules' : 'Show Rules'}
      </button>
      {/* Display rules content only when showRules is true */}
      {showRules && (
        <div className="rules-content">
          <h2>How to Play</h2>
          <ul>
            <li>Guess the word one letter at a time.</li>
            <li>You can make up to 11 incorrect guesses.</li>
            <li>Each incorrect guess reveals part of the hangman.</li>
            <li>Win by guessing the word before the hangman is complete!</li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default Rules;

