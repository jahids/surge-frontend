import React from 'react';
import { UseFormRegisterReturn } from 'react-hook-form';

interface TextInputProps {
  name: string;
  label: string;
  placeholder: string;
  type: string;
  register: UseFormRegisterReturn;
  required?: boolean;
  error?: string;
}

const TextInput: React.FC<TextInputProps> = ({
  type,
  name,
  placeholder,
  register,
  required = false,
  error = '',
}) => {
  return (
    <div className="text-center bg-green-400">
      <input
        type={type}
        id={name}
        name={name}
        placeholder={placeholder}
        {...register(name, {
          required: required,
        })}
        className=" min-w-full py-3 text-2xl font-bold placeholder:text-2xl placeholder:font-bold placeholder:text-[#DCDCDC] focus:outline-none"
      />
      {error && <p className="text-red-600 text-sm mt-1">{error}</p>}
    </div>
  );
};

export default TextInput;
