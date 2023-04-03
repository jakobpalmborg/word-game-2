import React from 'react';

export default function StartGame() {
  return (
    <div>
      <form>
        <label htmlFor="numLetters">Number of Lettters</label>
        <select name="numLetters">
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
        </select>
        <label htmlFor="noDuplicate">No Duplicate Letters</label>
        <input type="checkbox" />
        <button>Start Game</button>
      </form>
    </div>
  );
}
