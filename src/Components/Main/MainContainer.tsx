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
import { instance } from '../../lib/AxiosInstance';
import PortfolioLoader from '../ShimmerLoaders/portfolioLoader/PortfolioLoader';

const MainContainer = () => {
  // Use the generated hooks to make API requests
  // 

  const [selfData, setSelfData] = useState();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const dataCall = async () => {
      const { data: _data } = await getSelfData();

      // console.log('👑👑👑', _data);
      setSelfData(_data);
      setLoading(false);
    };
    dataCall();
  }, []);

  return (
    <div className="px-5 pb-[100px] min-h-screen">
      <section>
        {
          loading ?
            <div className={'m-4'}>

              <PortfolioLoader />
            </div>
            :
            <Invest selfData={selfData} />
        }
      </section>

      <section>
        <News />
      </section>
      <section>
        <WatchList />
      </section>
      <section>
        <FriendList />
      </section>
    </div>
  );
};

export default MainContainer;
