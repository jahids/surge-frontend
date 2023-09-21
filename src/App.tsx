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
import TopMoversPage from './Pages/TopMoversPage/TopMoversPage';
import AllStockPage from './Pages/AllStockPage/AllStockPage';
import MostTradedOnSharesPage from './Pages/MostTradedOnSharesPage/MostTradedOnSharesPage';
import NotificationPage from './Pages/NotificationPage/NotificationPage';
import SocialPage from './Pages/SocialPage/SocialPage';
import ExplorePage from './Pages/ExplorePage/ExplorePage';
import StockBuyPage from './Pages/StockBuyPage/StockBuyPage';

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
        <Route path="/social" element={<SocialPage />} />
        <Route path="/explore" element={<ExplorePage />} />
        <Route path="/profile" element={<CompleteProfilePage />} />
        <Route path="/assets" element={<AllAssetsPage />} />
        <Route path="/friend-list" element={<FriendListsPage />} />
        <Route path="/top-movers" element={<TopMoversPage />} />
        <Route path="/all-stock" element={<AllStockPage />} />
        <Route path="/buy-stock" element={<StockBuyPage />} />
        <Route path="/most-traded-share" element={<MostTradedOnSharesPage />} />
        <Route path="/notification" element={<NotificationPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
      <ToastContainer />
    </>
  );
};

export default App;
