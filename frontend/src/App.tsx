import { useState, useEffect, useRef } from 'react';

import InputForm from './components/InputForm';
import HighscoreForm from './components/HighscoreForm';
import StartGame from './components/StartGame';

function App() {
  const [gameId, setGameId] = useState(null);
  const [guessListLetters, setGuessListLetters] = useState([]);
  const [numChar, setNumChar] = useState(5);
  const [gameStarted, setGameStarted] = useState(false);
  const [win, setWin] = useState(false);

  async function startGame(startFormData: {
    numberOfLetters: number;
    noDuplicate: boolean;
  }) {
    const res = await fetch('./api/games', {
      method: 'post',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(startFormData),
    });
    const data = await res.json();
    setGameId(data.id);
    setGameStarted(true);
    setNumChar(startFormData.numberOfLetters);
  }

  console.log(typeof numChar);

  function handleSubmit(formData: {
    letter0: string;
    letter1: string;
    letter2: string;
    letter3: string;
    letter4: string;
  }) {
    let guess = [
      formData.letter0,
      formData.letter1,
      formData.letter2,
      formData.letter3,
      formData.letter4,
    ].join('');
    getFeedback(guess);
  }

  async function getFeedback(guess) {
    const res = await fetch(`./api/games/${gameId}/guesses`, {
      method: 'post',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ guess: guess }),
    });
    const data = await res.json();
    console.log(data);
    let numberOfCorrect: number = 0;
    for (let i = 0; i < data.length; i++) {
      if (data[i].result === 'correct') {
        numberOfCorrect++;
      }
    }
    if (numberOfCorrect === data.length) {
      setWin(true);
    } else {
    }
    setGuessListLetters([...guessListLetters, ...data]);
  }

  // for styling the guesses depending on number of letters
  let width: string = numChar == 3 ? 'w-52' : numChar == 4 ? 'w-60' : 'w-80';

  return (
    <>
      {!gameStarted && <StartGame onStartGame={startGame} />}

      <ul className={`${width} flex justify-center gap-1 m-auto flex-wrap`}>
        {guessListLetters.map((item, index) => (
          <div
            key={index}
            // logic to handle the result from api
            className={
              item.result === 'correct'
                ? 'bg-green-700'
                : item.result === 'missplaced'
                ? 'bg-yellow-500'
                : 'bg-gray-400'
            }
          >
            <li
              className="flex items-center justify-center font-bold font-mono uppercase text-4xl one-letter border-2 border-black w-14 h-14"
              key={index}
            >
              {item.letter}
            </li>
          </div>
        ))}
      </ul>

      {gameStarted && (
        <InputForm onSubmit={handleSubmit} numberOfLetters={numChar} />
      )}

      {win && <HighscoreForm gameId={gameId} />}
    </>
  );
}

export default App;
