import { useState } from 'react';
import InputField from './InputField';

export default function InputForm({ onSubmit }) {
  let numberOfFields: number[] = [0, 1, 2, 3, 4];

  // const [letter, setLetter] = useState('');
  const [formData, setFormData] = useState({
    letter0: '',
    letter1: '',
    letter2: '',
    letter3: '',
    letter4: '',
  });

  function handleChange(event) {
    const { name, value } = event.target;
    setFormData((prevFormData) => {
      return {
        ...prevFormData,
        [name]: value,
      };
    });
    // setLetter(event.target.value);
  }

  return (
    <div className="flex my-2 justify-center ml-11">
      <form
        onSubmit={(event) => onSubmit(event, formData)}
        className="flex gap-1"
      >
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
