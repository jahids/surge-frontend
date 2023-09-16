/* eslint-disable no-unused-vars */
import React from 'react';
import { useForm } from 'react-hook-form';

interface LoginFormProps {
  onLogin: (data: { username: string; password: string }) => void;
}

const LoginForm: React.FC<LoginFormProps> = ({ onLogin }) => {
  const { register, handleSubmit } = useForm();

  const onSubmit = (data: { username: string; password: string }) => {
    onLogin(data);

    console.log('data', data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input {...register('email')} placeholder="Username" />
      <input {...register('password')} type="password" placeholder="Password" />
      <button type="submit">Login</button>
    </form>
  );
};

export default LoginForm;
