import { useState } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import InputForm from './components/InputForm';

function App() {
  const [guessListLetters, setGuessListLetters] = useState([]);

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
      <Header />

      <ul className="flex justify-center gap-1 w-80 m-auto flex-wrap">
        {guessListLetters.map((item, index) => (
          <li
            className="flex items-center justify-center font-bold font-mono uppercase text-4xl one-letter border-2 border-black w-14 h-14"
            key={index}
          >
            {item}
          </li>
        ))}
      </ul>

      <InputForm onSubmit={handleSubmit} />

      <Footer />
    </>
  );
}

export default App;
