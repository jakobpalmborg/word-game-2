import { useState } from 'react';
import InputField from './InputField';

export default function InputForm() {
  const [letter, setLetter] = useState('');

  function handleChange(event: { target: { value: any } }) {
    setLetter(event.target.value);
  }

  return (
    <div className="flex my-1  justify-center">
      <form action="" className="flex gap-1">
        <InputField onChange={handleChange} />
        <InputField onChange={handleChange} />
        <InputField onChange={handleChange} />
        <InputField onChange={handleChange} />
        <InputField onChange={handleChange} />

        <button
          type="submit"
          className=" border-2 border-black rounded-full h-7 m-auto px-1"
        >
          GO!
        </button>
      </form>
    </div>
  );
}
