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
  name,
  label,
  placeholder,
  register,
  required = false,
  error = '',
}) => {
  return (
    <div className="p-5">
      <label htmlFor={name} className="block text-sm font-medium text-gray-700">
        {label}
      </label>
      <input
        type="text"
        id={name}
        name={name}
        placeholder={placeholder}
        {...register(name, {
          required: required && `${label} is required.`,
        })}
        className="block py-3 text-2xl font-bold placeholder:text-2xl placeholder:font-bold placeholder:text-[#DCDCDC] focus:outline-none"
      />
      {error && <p className="text-red-600 text-sm mt-1">{error}</p>}
    </div>
  );
};

export default TextInput;
