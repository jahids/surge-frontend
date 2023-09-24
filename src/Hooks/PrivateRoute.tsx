// import React from 'react';
// import { Route, Redirect, RouteProps } from 'react-router-dom';

// interface PrivateRouteProps extends RouteProps {
//   isAuthenticated: boolean;
//   // Add any other props you need, e.g., component, render, etc.
// }

// const PrivateRoute: React.FC<PrivateRouteProps> = ({
//   isAuthenticated,
//   children,
//   ...rest
// }) => {
//   return (
//     <Route
//       {...rest}
//       render={({ location }) =>
//         isAuthenticated ? (
//           children
//         ) : (
//           <Redirect
//             to={{
//               pathname: '/login',
//               state: { from: location },
//             }}
//           />
//         )
//       }
//     />
//   );
// };

// export default PrivateRoute;

// updated code

import React from 'react';
import { Route, Navigate } from 'react-router-dom';

interface PrivateRouteProps {
  isAuthenticated: boolean;
  path: string;
  element: React.ReactNode;
}

const PrivateRoute: React.FC<PrivateRouteProps> = ({
  isAuthenticated,
  path,
  element,
}) => {
  if (!isAuthenticated) {
    return <Navigate to="/login" />;
  }

  return <Route path={path} element={element} />;
};

export default PrivateRoute;
