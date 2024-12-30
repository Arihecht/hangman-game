import React, { useState, useEffect } from 'react';
import GameBoard from './components/GameBoard';
import Keyboard from './components/Keyboard';
import Hangman from './components/Hangman';
import Rules from './components/Rules';

// Main App component for the Hangman game
const App = () => {
  const [word, setWord] = useState(''); // Current word to guess
  const [guessedLetters, setGuessedLetters] = useState([]); // Letters guessed
  const [incorrectGuesses, setIncorrectGuesses] = useState(0); // Incorrect count
  const MAX_INCORRECT_GUESSES = 11; // Maximum allowed incorrect guesses

  // Fetch a random word when the game starts or resets
  useEffect(() => {
    fetch('/assets/dictionary.txt')
      .then((response) => response.text())
      .then((text) => {
        const words = text.split('\n').map((word) => word.trim());
        const randomWord = words[Math.floor(Math.random() * words.length)];
        setWord(randomWord);
      })
      .catch((error) => console.error('Error fetching words:', error));
  }, []);

  // Handle a guessed letter
  const handleGuess = (letter) => {
    // Skip if the letter is already guessed
    if (guessedLetters.includes(letter)) return;

    setGuessedLetters((prev) => [...prev, letter]);
    // Increment incorrect guesses if the letter is not in the word
    if (!word.includes(letter)) {
      setIncorrectGuesses((prev) => prev + 1);
    }
  };

  // Reset the game state and fetch a new word
  const resetGame = () => {
    setGuessedLetters([]);
    setIncorrectGuesses(0);
    fetch('/assets/dictionary.txt')
      .then((response) => response.text())
      .then((text) => {
        const words = text.split('\n').map((word) => word.trim());
        const randomWord = words[Math.floor(Math.random() * words.length)];
        setWord(randomWord);
      });
  };

  // Check if the game is over or the player has won
  const isGameOver = incorrectGuesses >= MAX_INCORRECT_GUESSES;
  const isGameWon =
    word && word.split('').every((char) => guessedLetters.includes(char));

  return (
    <div style={{ textAlign: 'center', fontFamily: 'Arial, sans-serif' }}>
      <h1>Hangman Game</h1>
      {/* Display the Hangman image */}
      <Hangman
        incorrectGuesses={incorrectGuesses}
        isGameOver={isGameOver}
      />
      {/* Display the guessed word */}
      <GameBoard word={word} guessedLetters={guessedLetters} />
      {/* Render the keyboard if the game is still active */}
      {!isGameOver && !isGameWon && (
        <Keyboard
          guessedLetters={guessedLetters}
          onGuess={handleGuess}
        />
      )}
      {/* Display the game over or victory message */}
      {isGameOver && (
        <p>
          Game Over! The word was: <strong>{word}</strong>
        </p>
      )}
      {isGameWon && <p>Congratulations! You guessed the word!</p>}
      {/* Restart button to reset the game */}
      <button
        onClick={resetGame}
        style={{ marginTop: '20px', padding: '10px 20px' }}
      >
        Restart Game
      </button>
      {/* Display game rules */}
      <Rules />
    </div>
  );
};

export default App;






