import React from 'react';
import { UseFormRegisterReturn } from 'react-hook-form';

interface TextInputProps {
  name: string;
  label: string;
  register: UseFormRegisterReturn;
  required?: boolean;
  error?: string;
}

const TextInput: React.FC<TextInputProps> = ({
  name,
  label,
  register,
  required = false,
  error = '',
}) => {
  return (
    <div className="mt-4">
      <label htmlFor={name} className="block text-sm font-medium text-gray-700">
        {label}
      </label>
      <input
        type="text"
        id={name}
        name={name}
        {...register(name, {
          required: required && `${label} is required.`,
        })}
        className={`mt-1 p-2 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md ${
          error
            ? 'border-red-300 focus:ring-red-200 focus:border-red-300'
            : 'border-gray-300 focus:ring focus:ring-offset-0 focus:ring-green-300 focus:border-green-300'
        }`}
      />
      {error && <p className="text-red-600 text-sm mt-1">{error}</p>}
    </div>
  );
};

export default TextInput;
