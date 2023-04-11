import { useState } from 'react';
import InputField from './InputField';

export default function InputForm({
  onSubmit,
  numberOfLetters,
}: {
  onSubmit: (formData: {
    letter0: string;
    letter1: string;
    letter2: string;
    letter3: string;
    letter4: string;
  }) => void;
  numberOfLetters: number;
}) {
  const [formData, setFormData] = useState({
    letter0: '',
    letter1: '',
    letter2: '',
    letter3: '',
    letter4: '',
  });

  function handleChange(event: React.FormEvent<HTMLInputElement>) {
    const { name, value } = event.target as HTMLInputElement;
    setFormData((prevFormData) => {
      return {
        ...prevFormData,
        [name]: value,
      };
    });
  }

  console.log(typeof numberOfLetters);

  return (
    <div className="flex my-2 justify-center ml-14">
      <form
        onSubmit={(event) => {
          event.preventDefault();
          onSubmit(formData);
        }}
        className="flex gap-1"
      >
        {[...Array(numberOfLetters).keys()].map((item, index) => {
          return <InputField onChange={handleChange} key={index} id={index} />;
        })}

        <button
          type="submit"
          className=" border-2 rounded-lg px-2 bg-sky-700 text-white h-7 m-auto ml-1"
        >
          GO!
        </button>
      </form>
    </div>
  );
}
