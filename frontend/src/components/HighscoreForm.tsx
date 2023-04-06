import React, { useState, useEffect } from 'react';

export default function HighscoreForm({ gameId, startFormData }) {
  const [highscoreFormData, setHighscoreFormData] = useState({
    name: '',
    wordLength: parseInt(startFormData.wordLength),
    noDuplicate: startFormData.noDuplicate,
  });

  function handleChange(event) {
    setHighscoreFormData((prevData) => ({
      ...prevData,
      name: event.target.value,
    }));
  }

  function handleSubmit(event) {
    event.preventDefault();
    fetch(`./api/highscore/${gameId}/highscore`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(highscoreFormData),
    });
  }

  return (
    <div className=" text-center">
      <h2 className="font-bold text-lg p-2">Highscore</h2>
      <form onSubmit={handleSubmit}>
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
