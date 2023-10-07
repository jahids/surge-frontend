/* eslint-disable  */
import { useEffect } from 'react';
import { useCookies } from 'react-cookie';
import { useDispatch, useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { setBalance } from '../features/globalBalance/balanceSlice';
import { instance } from '../lib/AxiosInstance';
import { setDb } from '../features/globaldb/dbSlice';
import { getSingleUser } from '../Services/User.service';
import { getdbId } from '../Services/Cookie.service';


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
  const dbData = useSelector(state => state.db);
  console.log("bbdata--<>", balancedata);
  const dbId: string = getdbId();
  useEffect(() => {
    const dataload = async () => {
      try {
        const { data } = await instance.get(`portfolio`);
        const { data: myData } = await getSingleUser(dbId);
        dispatch(setBalance({ ...data?.data, api: true }));
        dispatch(setDb({ ...myData?.db, api: true }));

      } catch (error) {
        console.log('private routte api error', error);
      }
    };
    if (balancedata?.api && dbData?.api) {
      console.log("redux data alredy updated")
    } else {
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
