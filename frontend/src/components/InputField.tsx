import React, { useState } from 'react';

export default function InputField({ onChange, id }) {
  return (
    <input
      type="text"
      maxLength={1}
      minLength={1}
      className="text-center font-bold font-mono uppercase text-4xl one-letter border-2 border-black w-14 h-14"
      onChange={onChange}
      name={`letter${id}`}
    />
  );
}
