/* eslint-disable  */
import { useEffect, useState } from 'react';
import { useGetSpecificNewsQuery, useGetallNewsQuery } from '../../features/news/newsApiSlice';
import Loader from '../Loader/Loader';
import AllStocks from './AllStocks/AllStocks';
import FriendList from './FriendList/FriendList';
import Invest from './Invest/Invest';
import MostTraded from './MostTraded/MostTraded';
import News from './News/News';
import TopMovers from './TopMovers/TopMovers';
import WatchList from './WatchList/WatchList';
import { getSelfData } from '../../Services/User.service';

const MainContainer = () => {
  // Use the generated hooks to make API requests
  // 
 
  const [selfData,setSelfData] = useState();

 useEffect(()=>{
  const dataCall  = async ()=>{
      const {data : _data} = await getSelfData();
      console.log(_data);
      setSelfData(_data);
  };
  dataCall();
 },[]);


 
  return (
    <div className="px-5 pb-[100px] min-h-screen">
      <section>
        <Invest />
      </section>
      <section>
        <AllStocks />
      </section>
      <section>
        <News />
      </section>
      <section>
        <WatchList />
      </section>
      <section>
        <FriendList selfData = {selfData} />
      </section>
      <section>
        <TopMovers />
      </section>
      <section>
        <MostTraded />
      </section>
    </div>
  );
};

export default MainContainer;
