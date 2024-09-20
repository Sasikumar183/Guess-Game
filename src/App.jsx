import React, { useState } from 'react';

const words = [
  { word: 'react', clue: 'A popular JavaScript library for building user interfaces.' },
  { word: 'javascript', clue: 'A programming language commonly used in web development.' },
  { word: 'tailwind', clue: 'A utility-first CSS framework.' },
  { word: 'css', clue: 'Used to style HTML elements.' },
  { word: 'html', clue: 'The standard markup language for creating web pages.' },
];

const randomWordObj = words[Math.floor(Math.random() * words.length)];
const randomWord = randomWordObj.word;

function App() {
  const [guess, setGuess] = useState('');
  const [message, setMessage] = useState('');
  const [attempts, setAttempts] = useState(0);

  const handleSubmit = (e) => {
    e.preventDefault();
    setAttempts(attempts + 1);
    if (guess.toLowerCase() === randomWord) {
      setMessage(`Congratulations! You guessed the word "${randomWord}" in ${attempts + 1} attempts!`);
      
    } else {
      setMessage(`Wrong guess! Try again.`);
    }
    setGuess('');
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-blue-400 to-purple-500">
      <h1 className="text-4xl font-bold text-white mb-6">Guess the Word!</h1>
      <p className="text-white mb-4">Clue: {randomWordObj.clue}</p>
      <form onSubmit={handleSubmit} className="flex flex-col items-center">
        <input
          type="text"
          value={guess}
          onChange={(e) => setGuess(e.target.value)}
          className="p-2 rounded-md shadow-lg focus:outline-none focus:ring-2 focus:ring-blue-300"
          placeholder="Enter your guess"
        />
        <button
          type="submit"
          className="mt-4 px-4 py-2 bg-white text-blue-500 font-semibold rounded-md shadow-lg hover:bg-blue-100 transition duration-300"
        >
          Guess
        </button>
      </form>
      {message && (
        <p className="mt-6 text-xl text-white font-semibold">
          {message}
        </p>
      )}
    </div>
  );
}

export default App;
