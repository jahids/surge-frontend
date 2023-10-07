/* eslint-disable */
import React, { useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import AppStartingPage from './Pages/AppStartingPage/AppStartingPage';
import LoginPage from './Pages/Login/LoginPage';
import RegistrationPage from './Pages/Registration/RegistrationPage';
import { ToastContainer } from 'react-toastify';
import OtpPage from './Pages/OtpPage/OtpPage';

import { allRoute } from './Utils/Allroute';
import { PrivateRoute } from './Hooks/PrivateRoute';
import Tindercard from './Components/explore/TinderCard';
import PortfolioPage from './Pages/Portfolio/PortfolioPage';
import UserProfile from './Pages/userProfile/UserProfile';
import Activity from './Pages/activity/Activity';


const App: React.FC = () => {


  return (
    <>
      <Routes >
        <Route path="/" element={<AppStartingPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/registration" element={<RegistrationPage />} />
        <Route path="/otp" element={<OtpPage />} />
        <Route path="/tinder" element={<Tindercard />} />
        <Route path="/portfolio" element={<PortfolioPage />} />

        <Route path="/activity" element={<Activity />} />

        {/* <Route path="/multistep" element={<MultistepForm />}/> */}
        {/* <Route path="*" element={<NotFoundPage />} /> */}
        {/* 🔏🔏🔏🔏 private route */}
        {allRoute.map((route, index) => (
          <Route
            key={index}
            path={route.path}
            element={
              <PrivateRoute
                component={route.component}
              />
            }
          />
        ))}
        {/* <Route path="/multistep" element={<MultistepForm />} />
        <Route path="/plaid" element={<PlaidInit />} />
        <Route path="/main" element={<MainPage />} />
        <Route path="/social" element={<SocialPage />} />
        <Route path="/post/:id" element={<PostDetails />} />
        <Route path="/explore" element={<ExplorePage />} />
        <Route path="/profile" element={<CompleteProfilePage />} />
        <Route path="/assets" element={<AllAssetsPage />} />
        <Route path="/portfolio" element={<p>hello portfolio</p>} />
        <Route path="/addfund" element={<Addfund />} />
        <Route path="/buy/:symbol" element={<StockBuy />} />
        <Route path="/statement" element={<Statement />} />
        <Route path="/friend-list" element={<FriendListsPage />} />
        <Route path="/top-movers" element={<TopMoversPage />} />
        <Route path="/all-stock" element={<AllStockPage />} />
        <Route path="/buy-stock" element={<StockBuyPage />} />
        <Route path="/most-traded-share" element={<MostTradedOnSharesPage />} />
        <Route path="/order-review" element={<OrderReview />} />
        <Route path="/notification" element={<NotificationPage />} /> */}


      </Routes>






      <ToastContainer />
    </>
  );
};

export default App;
