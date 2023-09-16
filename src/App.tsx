/* eslint-disable */
import React from 'react';

import { Route, Routes } from 'react-router-dom';
import { useCookies } from 'react-cookie';
import LoginPage from './Pages/Login/LoginPage';
import RegistrationPage from './Pages/Registration/RegistrationPage';

const App: React.FC = () => {
  const [cookies] = useCookies(['mytoken']);
  const isAuthenticated = !!cookies.mytoken;

  return (
    <Routes>
      <Route path="/login" element={<LoginPage />} />
      <Route path="/registration" element={<RegistrationPage />} />
      <Route path="/*" element={<p>no found page</p>} />
    </Routes>
  );
};

export default App;
