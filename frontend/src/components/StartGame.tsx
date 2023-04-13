import React, { useState } from 'react';

export default function StartGame({
  onStartGame,
}: {
  onStartGame: (startFormData: {
    numberOfLetters: number;
    noDuplicate: boolean;
  }) => void;
}) {
  const [startFormData, setStartFormData] = useState({
    numberOfLetters: 5,
    noDuplicate: false,
  });

  return (
    <div className="text-center my-2">
      <form
        onSubmit={(e) => {
          e.preventDefault();
          onStartGame(startFormData);
        }}
      >
        <div className="my-2">
          <label className=" mr-1" htmlFor="numLetters">
            Number of Lettters:
          </label>
          <select
            id="numLetters"
            name="numberOfLetters"
            value={startFormData.numberOfLetters}
            onChange={(event) => {
              const { name, value } = event.target;
              setStartFormData((prevFormData) => {
                return {
                  ...prevFormData,
                  [name]: parseInt(value),
                };
              });
            }}
          >
            <option value={3}>3</option>
            <option value={4}>4</option>
            <option value={5}>5</option>
          </select>
        </div>
        <div>
          <label className=" mr-2" htmlFor="noDuplicate">
            No Duplicate Letters:
          </label>
          <input
            type="checkbox"
            id="noDuplicate"
            name="noDuplicate"
            checked={startFormData.noDuplicate}
            onChange={(event) => {
              const { name, checked } = event.target;
              setStartFormData((prevFormData) => {
                return {
                  ...prevFormData,
                  [name]: checked,
                };
              });
            }}
          />
        </div>
        <button className=" rounded-md py-1 px-4 bg-sky-700 text-white my-2">
          Start Game
        </button>
      </form>
    </div>
  );
}
