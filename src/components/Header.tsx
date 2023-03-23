import React from 'react';

export default function Header() {
  return (
    <>
      <header className="bg-stone-800 h-32">
        <h2 className="p-4 text-stone-50 text-2xl">
          <a href="#">Word Game</a>
        </h2>

        <nav className="flex justify-evenly p-4">
          <a
            className="text-stone-50 font-bold underline decoration-solid decoration-8 underline-offset-8"
            href="#"
          >
            Home
          </a>
          <a className="text-stone-50" href="#">
            About
          </a>
          <a className="text-stone-50" href="#">
            Highscore
          </a>
        </nav>
      </header>
    </>
  );
}
