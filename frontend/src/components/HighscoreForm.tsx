import React, { useState, useEffect } from 'react';

export default function HighscoreForm({ gameId }: { gameId: string }) {
  const [highscoreFormData, setHighscoreFormData] = useState({
    name: '',
  });

  return (
    <div className=" text-center">
      <h2 className=" text-6xl text-fuchsia-600 ">You Win!</h2>
      <h3 className="font-bold text-lg p-2">Highscore</h3>
      <form
        onSubmit={(event) => {
          event.preventDefault();
          fetch(`./api/highscore/${gameId}/highscore`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(highscoreFormData),
          });
        }}
      >
        <input
          onChange={(event) => {
            setHighscoreFormData((prevData) => ({
              ...prevData,
              name: event.target.value,
            }));
          }}
          type="text"
          placeholder="Name"
          name="name"
          required
          className="border-2 rounded-lg pl-1"
        />
        <button className="ml-1 border-2 rounded-lg px-2 bg-sky-700 text-white">
          Send
        </button>
      </form>
    </div>
  );
}
