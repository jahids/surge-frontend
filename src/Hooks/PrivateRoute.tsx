/* eslint-disable  */
import { useEffect } from 'react';
import { useCookies } from 'react-cookie';
import { Navigate } from 'react-router-dom';


interface Props {
  component: React.ComponentType
}

export const PrivateRoute: React.FC<Props> = ({
  component: RouteComponent,
}) => {
  const [cookies] = useCookies(['mytoken']);
const isAuthenticated = !!cookies.mytoken;

useEffect(() => {
  if (isAuthenticated) {
    console.log('persist data');
  } else {
    console.log('no persist data');
  }
}, [isAuthenticated]);

  if (isAuthenticated) {
    return (
      <>
          <RouteComponent />
        </>
     
    );
  }

  // if (!isAuthenticated) {
  //   return <Navigate to="/login" />;
  // }
};
