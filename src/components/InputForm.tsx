import { useState } from 'react';
import InputField from './InputField';

export default function InputForm() {
  let numberOfFields: number[] = [0, 1, 2, 3, 4];

  const [letter, setLetter] = useState('');
  const [formData, setFormData] = useState({
    letter0: '',
    letter1: '',
    letter2: '',
    letter3: '',
    letter4: '',
  });

  function handleChange(event: { target: { value: any } }) {
    const { name, value } = event.target;

    setFormData((prevFormData) => {
      return {
        ...prevFormData,
        [event.target.name]: event.target.value,
      };
    });
    // setLetter(event.target.value);
  }

  function handleSubmit(ev) {
    ev.preventDefault();
    let wordArray = [
      formData.letter0,
      formData.letter1,
      formData.letter2,
      formData.letter3,
      formData.letter4,
    ];
    console.log(wordArray);
  }

  return (
    <div className="flex my-1  justify-center">
      <form onSubmit={handleSubmit} className="flex gap-1">
        {numberOfFields.map((item, index) => {
          return <InputField onChange={handleChange} key={index} id={index} />;
        })}

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
