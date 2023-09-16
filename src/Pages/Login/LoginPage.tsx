import React from 'react';
import LoginForm from '../../Components/Navbar/LoginForm';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { useCookies } from 'react-cookie';

const LoginPage: React.FC = () => {
  const navigate = useNavigate();
  const [, setCookie] = useCookies(['token']);

  const handleLogin = async (data: { username: string; password: string }) => {
    try {
      const response = await axios.post('/api/signin', data, {
        headers: {
          'Content-Type': 'application/json',
        },
        withCredentials: true, // Include credentials (cookies) with the request
      });

      if (response.status === 200) {
        console.log('response.data.token', response?.data?.token);
        //document.cookie = `token=${response.data.token}; Path=/; HttpOnly; Secure; SameSite=None`;
        setCookie('mytoken', response.data.token, {
          path: '/', // Specify the path where the cookie is valid
          secure: true, // Ensure the cookie is sent only over HTTPS connections
          sameSite: 'none', // Allow cross-site requests
        });
        // Successful login, redirect to the authenticated route.
        navigate('/protected');
      } else {
        // Handle authentication errors, e.g., show an error message.
        console.error('Authentication failed');
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <div>
      <h1>Login</h1>
      <LoginForm onLogin={handleLogin} />
    </div>
  );
};

export default LoginPage;
