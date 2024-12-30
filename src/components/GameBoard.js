import React from 'react';
import '../styles/GameBoard.css';

const GameBoard = ({ word, guessedLetters }) => {
    return (
        <div className="game-board">
            {word.split('').map((char, index) => (
                <span key={index} className="letter">
                    {guessedLetters.includes(char) ? char : '_'}
                </span>
            ))}
        </div>
    );
};

export default GameBoard;
