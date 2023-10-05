/* eslint-disable  */
import { useEffect } from 'react';
import { useCookies } from 'react-cookie';
import { useDispatch, useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { setBalance } from '../features/globalBalance/balanceSlice';
import { instance } from '../lib/AxiosInstance';


interface Props {
  component: React.ComponentType
}

export const PrivateRoute: React.FC<Props> = ({
  component: RouteComponent,
}) => {
  const [cookies] = useCookies(['mytoken']);
const isAuthenticated = !!cookies.mytoken;
const dispatch = useDispatch();

const balancedata = useSelector((state: RootState) => state.balance)
console.log("bbdata--<>", balancedata);

useEffect(() => {
  const dataload = async () => {
    try {
      const { data } = await instance.get(`portfolio`);
      dispatch(setBalance({ ...data?.data, api: true }));
    } catch (error) {
      console.log('private routte api error', error);
    }
  };
  if(balancedata?.api){
    console.log("redux data alredy updated")
  }else {
    console.log("redux data empty api call..")
    dataload();
  }
  
}, []);



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

  if (!isAuthenticated) {
    return <Navigate to="/login" />;
  }
};
