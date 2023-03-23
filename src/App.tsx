import { useState } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import InputForm from './components/InputForm';

function App() {
  return (
    <>
      <Header />
      <ul className="flex justify-center gap-1 mr-11">
        <li className="text-center font-bold font-mono uppercase text-5xl one-letter border-2 border-black w-14 h-14">
          h
        </li>
        <li className="text-center font-bold font-mono uppercase text-5xl one-letter border-2 border-black w-14 h-14">
          a
        </li>
        <li className="text-center font-bold font-mono uppercase text-5xl one-letter border-2 border-black w-14 h-14">
          l
        </li>
        <li className="text-center font-bold font-mono uppercase text-5xl one-letter border-2 border-black w-14 h-14">
          l
        </li>
        <li className="text-center font-bold font-mono uppercase text-5xl one-letter border-2 border-black w-14 h-14">
          å
        </li>
      </ul>
      <InputForm />

      <Footer />
    </>
  );
}

export default App;
