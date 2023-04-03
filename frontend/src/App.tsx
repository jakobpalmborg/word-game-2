import { useState, useEffect } from 'react';

import InputForm from './components/InputForm';
import HighscoreForm from './components/HighscoreForm';

function App() {
  const [guess, setGuess] = useState('');

  const [guessListLetters, setGuessListLetters] = useState([]);
  const [startFormData, setStartFormData] = useState({
    numberOfLetters: 5,
    noDuplicate: false,
  });

  console.log(startFormData.numberOfLetters);

  const [gameStarted, setGameStarted] = useState(false);

  function handleChange(event) {
    const { name, value, checked, type } = event.target;
    setStartFormData((prevFormData) => {
      return {
        ...prevFormData,
        [name]: type === 'checkbox' ? checked : value,
      };
    });
  }

  useEffect(() => {
    async function getFeedback() {
      const res = await fetch(`./api/feedback?guess=${guess}`);
      const payload = await res.json();
      setGuessListLetters([...guessListLetters, ...payload]);
    }
    getFeedback();
  }, [guess]);

  function handleSubmit(event, formData) {
    event.preventDefault();
    setGuess(
      [
        formData.letter0,
        formData.letter1,
        formData.letter2,
        formData.letter3,
        formData.letter4,
      ].join('')
    );
  }

  // for styling the guesses depending on number of letters
  let width: string =
    startFormData.numberOfLetters === 3
      ? 'w-52'
      : startFormData.numberOfLetters === 4
      ? 'w-60'
      : 'w-80';

  return (
    <>
      <div className="text-center">
        <form
          onSubmit={(e) => {
            e.preventDefault();

            setGameStarted(true);
          }}
        >
          <div>
            <label className=" mr-1 " htmlFor="numLetters">
              Number of Lettters:
            </label>
            <select
              id="numLetters"
              name="numberOfLetters"
              value={startFormData.numberOfLetters}
              onChange={handleChange}
            >
              <option value={3}>3</option>
              <option value={4}>4</option>
              <option value={5}>5</option>
            </select>
          </div>
          <div>
            <label className=" mr-1 " htmlFor="noDuplicate">
              No Duplicate Letters
            </label>
            <input
              type="checkbox"
              id="noDuplicate"
              name="noDuplicate"
              checked={startFormData.noDuplicate}
              onChange={handleChange}
            />
          </div>
          <button className="border-2 rounded-lg px-2 bg-sky-700 text-white">
            Start Game
          </button>
        </form>
      </div>

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
        <InputForm
          onSubmit={handleSubmit}
          numberOfLetters={startFormData.numberOfLetters}
        />
      )}

      <HighscoreForm />
    </>
  );
}

export default App;
