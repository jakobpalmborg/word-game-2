import React, { useState } from 'react';

export default function HighscoreForm() {
  const [highscoreFormData, setHighscoreFormData] = useState({
    name: '',
    time: 0,
    guesses: 0,
    wordLength: 5,
    noDuplicate: false,
  });

  function handleChange(event) {
    setHighscoreFormData((prevData) => ({
      ...prevData,
      name: event.target.value,
    }));
  }

  return (
    <div className=" text-center">
      <h2 className="font-bold text-lg p-2">Highscore</h2>
      <form>
        <input
          onChange={handleChange}
          type="text"
          placeholder="Name"
          name="name"
          className="border-2 rounded-lg pl-1"
        />
        <button className="ml-1 border-2 rounded-lg px-2 bg-sky-700 text-white">
          Send
        </button>
      </form>
    </div>
  );
}
