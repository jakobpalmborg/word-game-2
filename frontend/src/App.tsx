import { useState, useEffect } from 'react';

import InputForm from './components/InputForm';

function App() {
  const [guess, setGuess] = useState('');

  const [guessListLetters, setGuessListLetters] = useState([]);

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

  return (
    <>
      <ul className="flex justify-center gap-1 w-80 m-auto flex-wrap">
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

      <InputForm onSubmit={handleSubmit} />
    </>
  );
}

export default App;
