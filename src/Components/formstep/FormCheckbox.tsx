/* eslint-disable @typescript-eslint/no-unused-vars */
import React from 'react';
import { FormCheckboxProps } from '../../Types/User';

const FormCheckbox: React.FC<FormCheckboxProps> = ({
  name,
  label,
  register,
  required = false,
  error = '',
}) => {
  return (
    <div className="mt-4 flex items-center">
      <input
        name={name}
        id={name}
        type="checkbox"
        {...register(name, {
          required: required && `${label} is required.`,
        })}
        className="rounded border-gray-300 text-green-600 shadow-sm focus:ring focus:ring-offset-0 focus:ring-green-300 focus:border-green-300"
      />
      <label htmlFor={name} className="ml-2">
        {label}
      </label>
      {error && <p className="text-red-600 text-sm ml-2">{error}</p>}
    </div>
  );
};

export default FormCheckbox;
