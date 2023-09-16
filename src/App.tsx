import React from 'react';

import { BrowserRouter, Route, Routes } from 'react-router-dom';
import LoginPage from './Pages/Login/LoginPage';
import RegistrationPage from './Pages/Registration/RegistrationPage';

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/registration" element={<RegistrationPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
