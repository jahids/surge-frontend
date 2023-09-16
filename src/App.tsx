/* eslint-disable no-unused-vars */
/* eslint-disable react/jsx-no-undef */
// import { BrowserRouter, Route, Routes } from 'react-router-dom';
// import Navbar from './Components/Navbar';
// import Contact from './Pages/Contact';
// import About from './Pages/About';
// import Home from './Pages/Home';

// const App: React.FC = () => {
//   return (
//     <BrowserRouter>
//       <Navbar />
//       <Routes>
//         <Route path="/" element={<Home />} />
//         <Route path="/about" element={<About />} />
//         <Route path="/contact" element={<Contact />} />
//       </Routes>
//     </BrowserRouter>
//   );
// };

// export default App;

// import React from 'react';
// import { useCookies } from 'react-cookie';
// import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';

// import Navbar from './Components/Navbar';
// import Contact from './Pages/Contact';
// import About from './Pages/About';
// import Home from './Pages/Home';
// import LoginPage from './Pages/Login/LoginPage';
// import PrivatePage from './Pages/private/PrivatePage';
// import LoginForm from './Components/Navbar/LoginForm';
// // eslint-disable-next-line @typescript-eslint/no-unused-vars
// import datapage from './Pages/private/Datapage';
// import Datapage from './Pages/private/Datapage';

// const App: React.FC = () => {
//   const [cookies] = useCookies(['mytoken']);
//   const isAuthenticated = !!cookies.mytoken;

//   console.log('cookies', cookies.mytoken);

//   return (
//     <BrowserRouter>
//       <Navbar />
//       <Routes>
//         <Route path="/login" element={<LoginPage />} />
//         <Route path="/" element={<Home />} />
//         <Route path="/about" element={<About />} />
//         <Route path="/contact" element={<Contact />} />
//         <Route
//           path="/protected"
//           element={isAuthenticated ? <PrivatePage /> : <Navigate to="/login" />}
//         />

//         <Route
//           path="/data"
//           element={isAuthenticated ? <Datapage /> : <Navigate to="/login" />}
//         />

//         <Route path="/login" element={<LoginPage />} />
//       </Routes>
//     </BrowserRouter>
//   );
// };

// export default App;

// updated codebase

import React from 'react';

import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { useCookies } from 'react-cookie';
import LoginPage from './Pages/Login/LoginPage';
import RegistrationPage from './Pages/Registration/RegistrationPage';

import OtpPage from './Pages/OtpPage/OtpPage';
import About from './Pages/About';

const App: React.FC = () => {
  const [cookies] = useCookies(['mytoken']);
  const isAuthenticated = !!cookies.mytoken;

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/registration" element={<RegistrationPage />} />
        <Route path="/otp" element={<OtpPage />} />
        <Route path="/about" element={<About />} />
        {/* <Route path="/" element={<Home />} />

        <Route path="/contact" element={<Contact />} />
        <Route path="/login" element={<LoginPage />} /> */}
        {/* Use PrivateRoute for protected routes */}
        {/* <PrivateRoute
          path="/protected"
          element={<PrivatePage />}
          isAuthenticated={isAuthenticated}
        /> */}
        {/* <PrivateRoute
          path="/data"
          element={<Datapage />}
          isAuthenticated={isAuthenticated}
        /> */}
        {/* Handle unknown routes */}
        {/* <Route path="/*" element={<Navigate to="/" />} /> */}
      </Routes>
    </BrowserRouter>
  );
};

export default App;
