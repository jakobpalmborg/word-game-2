import { useState, useEffect } from 'react';
import InputForm from './components/InputForm';
import HighscoreForm from './components/HighscoreForm';
import StartGame from './components/StartGame';
import GuessListLetters from './components/GuessListLetters';
import Confetti from 'react-confetti';

function App() {
  const [gameId, setGameId] = useState('');
  const [guessListLetters, setGuessListLetters] = useState<
    [] | { letter: string; result: string }[]
  >([]);
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
    setGuessListLetters([]);
    setWin(false);
    setGameId(data.id);
    setGameStarted(true);
    setNumChar(startFormData.numberOfLetters);
  }

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

  async function getFeedback(guess: string) {
    const res = await fetch(`./api/games/${gameId}/guesses`, {
      method: 'post',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ guess: guess }),
    });
    const data: [{ letter: string; result: string }] = await res.json();

    let numberOfCorrect: number = 0;
    for (let i = 0; i < data.length; i++) {
      if (data[i].result === 'correct') {
        numberOfCorrect++;
      }
    }
    if (numberOfCorrect === numChar) {
      setWin(true);
      setGameStarted(false);
    }
    setGuessListLetters([...guessListLetters, ...data]);
  }

  function handleSubmitHighscore() {
    setWin(false);
  }

  return (
    <>
      {win && <Confetti />}
      {!gameStarted && <StartGame onStartGame={startGame} />}

      {!gameStarted && <div className="bg-black h-0.5 w-4/6 m-auto mb-2"></div>}

      <GuessListLetters guessListLetters={guessListLetters} numChar={numChar} />

      {gameStarted && (
        <InputForm onSubmit={handleSubmit} numberOfLetters={numChar} />
      )}
      {win && <div className="bg-black h-0.5 w-4/6 m-auto mt-2"></div>}
      {win && (
        <HighscoreForm
          gameId={gameId}
          onSubmitHighscore={handleSubmitHighscore}
        />
      )}
    </>
  );
}

export default App;
