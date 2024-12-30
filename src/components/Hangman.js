import React from 'react';
import '../styles/Hangman.css';

// Hangman component displays the hangman image based on incorrect guesses
const Hangman = ({ incorrectGuesses, isGameOver }) => {
  // Function to determine the correct image for the current stage
  const getImageForStage = (stage) => `/assets/images/state${stage + 1}.GIF`;

  // If the game is over, display the Game Over message
  if (isGameOver) {
    return (
      <div className="hangman">
        <p className="game-over-message">Game Over!</p>
      </div>
    );
  }

  // Display the current hangman image for the given stage
  return (
    <div className="hangman">
      <img
        src={getImageForStage(incorrectGuesses)}
        alt={`Hangman Stage ${incorrectGuesses + 1}`}
        className="hangman-image"
        onError={(e) => {
          // Log an error if the image fails to load
          console.error('Image failed to load:', e.target.src);
          e.target.alt = 'Image Not Found'; // Display fallback alt text
        }}
      />
    </div>
  );
};

export default Hangman;





