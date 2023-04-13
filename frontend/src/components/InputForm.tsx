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
    const element = event.target as HTMLElement;
    const nextSibling = element.nextElementSibling as HTMLElement;
    if (value.length === 1) {
      nextSibling ? nextSibling.focus() : element.blur();
    }
    setFormData((prevFormData) => {
      return {
        ...prevFormData,
        [name]: value,
      };
    });
  }

  return (
    <>
      <div className="flex my-1 justify-center">
        <form
          id="guess-form"
          onSubmit={(event) => {
            event.preventDefault();
            onSubmit(formData);
          }}
          className="flex gap-1"
        >
          {[...Array(numberOfLetters).keys()].map((item, index) => {
            return (
              <InputField onChange={handleChange} key={index} id={index} />
            );
          })}
        </form>
      </div>
      <div>
        <button
          type="submit"
          form="guess-form"
          className=" block border-2 rounded-lg px-2 bg-sky-700 text-white h-7 m-auto"
        >
          &#10003;
        </button>
      </div>
    </>
  );
}
