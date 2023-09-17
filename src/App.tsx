/* eslint-disable */
import React, { useEffect } from 'react';

import { Route, Routes } from 'react-router-dom';
import { useCookies } from 'react-cookie';
import LoginPage from './Pages/Login/LoginPage';
import RegistrationPage from './Pages/Registration/RegistrationPage';
import { ToastContainer } from 'react-toastify';
import OtpPage from './Pages/OtpPage/OtpPage';
import About from './Pages/MultistepForm/MultistepForm';
import MultistepForm from './Pages/MultistepForm/MultistepForm';

const App: React.FC = () => {
  const [cookies] = useCookies(['mytoken']);
  const isAuthenticated = !!cookies.mytoken;

useEffect(() => {
  if(isAuthenticated){
    console.log("persist data");
    
   }else {
     console.log("no persist data");
   }
}, [isAuthenticated])


  return (
    <>
    <Routes>
      <Route path="/login" element={<LoginPage />} />
      <Route path="/registration" element={<RegistrationPage />} />
      <Route path="/otp" element={<OtpPage />} />
      <Route path="/multistep" element={<MultistepForm />} />
      <Route path="/*" element={<p>no found page</p>} />
    </Routes>
    <ToastContainer />
    </>
  );
  
};

export default App;
