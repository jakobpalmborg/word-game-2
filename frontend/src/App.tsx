import { useState, useEffect } from 'react';

import InputForm from './components/InputForm';

function App() {
  useEffect(() => {
    async function getFeedback() {
      const res = await fetch('./api/feedback');
      const payload = await res.json();
      console.log(payload);
    }
    getFeedback();
  }, []);

  const [guessListLetters, setGuessListLetters] = useState([
    // this format comes back from API
    // { letter: 'H', result: 'incorrect' },
    // { letter: 'A', result: 'missplaced' },
    // { letter: 'L', result: 'incorrect' },
    // { letter: 'L', result: 'correct' },
    // { letter: 'Å', result: 'incorrect' },
  ]);
  const [guessListFeedback, setGuessListFeedback] = useState({
    correct: false,
    missplaced: false,
  });

  function handleSubmit(event, formData) {
    event.preventDefault();
    setGuessListLetters([
      ...guessListLetters,
      formData.letter0,
      formData.letter1,
      formData.letter2,
      formData.letter3,
      formData.letter4,
    ]);
  }

  return (
    <>
      <ul className="flex justify-center gap-1 w-80 m-auto flex-wrap">
        {guessListLetters.map((item, index) => (
          <div
            key={index}
            // logic to handle the result from api
            // className={
            //   item.result === 'correct'
            //     ? 'bg-green-700'
            //     : item.result === 'incorrect'
            //     ? 'bg-yellow-500'
            //     : 'bg-gray-400'
            // }
          >
            <li
              className="flex items-center justify-center font-bold font-mono uppercase text-4xl one-letter border-2 border-black w-14 h-14"
              key={index}
            >
              {
                // change to item.letter when you have real data
                item
              }
            </li>
          </div>
        ))}
      </ul>

      <InputForm onSubmit={handleSubmit} />
    </>
  );
}

export default App;
