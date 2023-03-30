import React, { useState } from 'react';

export default function HighscoreForm() {
  const [highscoreFormData, setHighscoreFormData] = useState({
    name: '',
    time: 0,
    guesses: 0,
    wordLength: 5,
    noDuplicate: false,
  });

  console.log(highscoreFormData);
  function handleChange(event) {
    setHighscoreFormData((prevData) => ({
      ...prevData,
      name: event.target.value,
    }));
  }

  return (
    <div>
      <form>
        <input
          onChange={handleChange}
          type="text"
          placeholder="name"
          name="name"
        />
      </form>
    </div>
  );
}
