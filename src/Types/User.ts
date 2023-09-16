import { UseFormRegisterReturn } from 'react-hook-form';
export type User = {
  _id: string;
  name: string;
  email: string;
  token: string;
  isAdmin: boolean;
};

export interface FormData {
  username: string;
  address: string;
  toc: boolean;
  pp: boolean;
}

export interface FormCheckboxProps {
  name: string;
  label: string;
  register: UseFormRegisterReturn;
  required?: boolean;
  error?: string;
}
