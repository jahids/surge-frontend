/* eslint-disable */
import React, { useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import { useCookies } from 'react-cookie';
import AppStartingPage from './Pages/AppStartingPage/AppStartingPage';
import LoginPage from './Pages/Login/LoginPage';
import RegistrationPage from './Pages/Registration/RegistrationPage';
import { ToastContainer } from 'react-toastify';
import OtpPage from './Pages/OtpPage/OtpPage';
import MultistepForm from './Pages/MultistepForm/MultistepForm';
import MainPage from './Pages/MainPage/MainPage';
import NotFoundPage from './Pages/NotFoundPage/NotFoundPage';
import CompleteProfilePage from './Pages/CompleteProfilePage/CompleteProfilePage';
import AllAssetsPage from './Pages/AllAssetsPage/AllAssetsPage';
import FriendListsPage from './Pages/FriendListsPage/FriendListsPage';

const App: React.FC = () => {
  const [cookies] = useCookies(['mytoken']);
  const isAuthenticated = !!cookies.mytoken;

  useEffect(() => {
    if (isAuthenticated) {
      console.log('persist data');
    } else {
      console.log('no persist data');
    }
  }, [isAuthenticated]);

  return (
    <>
      <Routes>
        <Route path="/" element={<AppStartingPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/registration" element={<RegistrationPage />} />
        <Route path="/otp" element={<OtpPage />} />
        <Route path="/multistep" element={<MultistepForm />} />
        <Route path="/main" element={<MainPage />} />
        <Route path="/profile" element={<CompleteProfilePage />} />
        <Route path="/assets" element={<AllAssetsPage />} />
        <Route path="/friend-list" element={<FriendListsPage />} />
        <Route path="/*" element={<NotFoundPage />} />
      </Routes>
      <ToastContainer />
    </>
  );
};

export default App;
