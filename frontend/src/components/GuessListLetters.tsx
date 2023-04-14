import React from 'react';

export default function GuessListLetters({
  guessListLetters,
  numChar,
}: {
  guessListLetters:
    | []
    | {
        letter: string;
        result: string;
      }[];
  numChar: number;
}) {
  // for styling the guesses depending on number of letters
  let width: string = numChar == 3 ? 'w-52' : numChar == 4 ? 'w-60' : 'w-80';

  return (
    <div className="">
      <ul className={`${width} flex justify-center gap-1 flex-wrap m-auto`}>
        {guessListLetters.map((item, index) => (
          <div
            key={index}
            // for rendering the result
            className={
              item.result === 'correct'
                ? ' bg-green-500'
                : item.result === 'missplaced'
                ? 'bg-yellow-400'
                : 'bg-gray-300'
            }
          >
            <li
              className="flex items-center justify-center font-bold font-mono uppercase text-4xl one-letter border-2 border-black w-14 h-14"
              key={index}
            >
              {item.letter}
            </li>
          </div>
        ))}
      </ul>
    </div>
  );
}
