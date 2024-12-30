import React from 'react';
import '../styles/Keyboard.css';

// Keyboard component renders a virtual keyboard divided into multiple rows
const Keyboard = ({ guessedLetters, onGuess }) => {
  // Define rows of letters for the keyboard layout
  const rows = [
    'abcdefghijkl'.split(''), // First row
    'mnopqrstuv'.split(''),  // Second row
    'wxyz'.split(''),        // Third row
  ];

  return (
    <div className="keyboard">
      {/* Render each row of the keyboard */}
      {rows.map((row, rowIndex) => (
        <div key={rowIndex} className="keyboard-row">
          {/* Render each letter in the row */}
          {row.map((letter) => (
            <button
              key={letter} // Unique key for each letter button
              onClick={() => onGuess(letter)} // Call onGuess with the letter
              disabled={guessedLetters.includes(letter)} // Disable if already guessed
              className={`key ${
                guessedLetters.includes(letter) ? 'disabled' : ''
              }`}
            >
              {letter}
            </button>
          ))}
        </div>
      ))}
    </div>
  );
};

export default Keyboard;



