/* eslint-disable  */
import { useEffect, useState } from 'react';
import { BiPlus } from 'react-icons/bi';
import { Link, useNavigate } from 'react-router-dom';
import { instance } from '../../../lib/AxiosInstance';
import Loader from '../../Loader/Loader';
import NoDataWatchlist from './NoDataWatchList';
import { SingleWatchlistItem } from './SingleWatchlistItem';

const Watchlist = () => {
  const [watchlistData, setWatchlistData] = useState<string[]>();
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const dbCall = async () => {
      const { data } = await instance.get(`/watchlist?limit=3`);
      console.log(`🙈👹👹👺`, data);
      if (data?.data) {
        setWatchlistData(data.data);
        setLoading(false);
      }
    };
    dbCall();
  }, []);
  const navigate = useNavigate();

  // if (loading) {
  //   return <Loader />
  // }
  return (
   
    watchlistData?.length ? <div className="mt-10" >
      <h1 className="text-xl font-bold">Watchlist</h1>
      <p className="mt-1 text-sm text-gray-400">
        Start tracking your next opportunity
      </p>

      {
        watchlistData?.length ? (

          <div key={Math.random()}>

            {watchlistData.map((v: any) => (<SingleWatchlistItem symbolName={v} />))}
            <div className="text-center mt-2">
              <Link to="/assets">
                <button className="bg-gray-200 px-3 py-2 rounded-full text-[13px] font-bold">
                  See all
                </button>
              </Link>
            </div>
          </div>

        ) : < NoDataWatchlist />
      }

    </div> : null
  );
};

export default Watchlist;
