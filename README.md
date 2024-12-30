# Hangman Game

A classic Hangman game built with React, featuring an interactive interface and customizable gameplay. The player guesses letters to reveal a hidden word within a limited number of incorrect guesses.

## Features

- Random word selection from a dictionary file.
- Interactive on-screen keyboard.
- Dynamic display of the hangman image as incorrect guesses increase.
- "Game Over" and "Congratulations" messages based on the outcome.
- Fully responsive and user-friendly interface.
- Restart functionality for replayability.
- Rules section to guide players.

## Installation

Follow these steps to install and run the project locally:

### Prerequisites
- Node.js installed on your machine.
- A GitHub account for cloning the repository.

### Steps
1. Clone the repository:
   ```bash
   git clone https://github.com/Arihecht/hangman-game.git
   ```

2. Navigate to the project directory:
   ```bash
   cd hangman-game
   ```

3. Install dependencies:
   ```bash
   npm install
   ```

4. Start the development server:
   ```bash
   npm start
   ```

5. Open your browser and navigate to:
   ```
   http://localhost:3000
   ```

## Gameplay Instructions

1. **Objective**: Guess the hidden word by selecting letters.
2. **Rules**:
   - You can make up to 11 incorrect guesses.
   - Each incorrect guess reveals a part of the hangman.
   - Win by guessing the word before the hangman is fully drawn.
3. **Restart**: Use the "Restart Game" button to play again.

## File Structure

```
project-root/
├── public/
│   ├── assets/
│   │   ├── dictionary.txt      # Word list for the game
│   │   ├── images/             # Hangman stage images (state1.GIF to state11.GIF)
├── src/
│   ├── components/
│   │   ├── GameBoard.js        # Displays the guessed word
│   │   ├── Keyboard.js         # Renders the interactive keyboard
│   │   ├── Hangman.js          # Displays the hangman image
│   │   ├── Rules.js            # Displays the rules of the game
│   ├── styles/
│   │   ├── GameBoard.css       # Styles for GameBoard
│   │   ├── Keyboard.css        # Styles for Keyboard
│   │   ├── Hangman.css         # Styles for Hangman
│   │   ├── Rules.css           # Styles for Rules
│   ├── App.js                  # Main app logic
│   ├── index.js                # Entry point of the app
```

## Technologies Used

- **React**: Frontend framework for building interactive components.
- **CSS**: Styling for a responsive and attractive user interface.
- **JavaScript**: Core game logic and state management.

## Development Notes

- Components are dynamically rendered using the `array.map()` method with unique `key` props.
- The game's state is managed using React's `useState` and `useEffect` hooks.
- Fetches words from a `dictionary.txt` file for dynamic word selection.

## Future Enhancements

- Add difficulty levels (easy, medium, hard) with varying word lengths and allowed guesses.
- Introduce a leaderboard for high scores.
- Enhance visuals with animations and sound effects.

Credits

## Credits

Made by [Ari Hecht](https://github.com/Arihecht).






