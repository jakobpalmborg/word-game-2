import React from 'react'
import InputField from './InputField'

export default function InputForm() {
  return (
    <div className="flex my-1  justify-center">
        <form action="" className="flex gap-1">
            <InputField />
            <InputField />
            <InputField />
            <InputField />
            <InputField />
        </form>
    </div>
  )
}
