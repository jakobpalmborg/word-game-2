import React from 'react';

export default function StartGame({
  onStartGame,
  startFormData,
  onChange,
  onClick,
}) {
  return (
    <div className="text-center">
      <form
        onSubmit={(e) => {
          e.preventDefault();
          onStartGame(true);
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
            onChange={onChange}
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
            onChange={onChange}
          />
        </div>
        <button
          onClick={onClick}
          className="border-2 rounded-lg px-2 bg-sky-700 text-white"
        >
          Start Game
        </button>
      </form>
    </div>
  );
}
