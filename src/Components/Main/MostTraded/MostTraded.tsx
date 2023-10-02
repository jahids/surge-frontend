import tesla from '../../../assets/movers-img/tesla.png';
import apple from '../../../assets/movers-img/apple.png';
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { instance } from '../../../lib/AxiosInstance';
import SingleMostTradedShare from './SingleMostTradedShare';
const down = "bg-red-200 py-2 px-2 rounded-full text-red-500 text-xs font-semibold";
const green = "bg-green-200 py-2 px-2 rounded-full text-green-500 text-xs font-semibold";
const MostTraded = () => {

  const [watchList, setWatchList] = useState([]);

  useEffect(() => {
    const dbCall = async () => {
      const { data: { data } } = await instance.get(`watchlist?limit=3`);
      setWatchList(data);
    };
    dbCall();
  }, [watchList.length]);

  return (
    <div className="mt-10">
      <h1 className="text-xl font-bold">Most traded on Surge</h1>
      <p className="mt-1 text-sm text-gray-400 mb-7">By all time performance</p>
      {/* --- top movers company --- */}

      {
        watchList?.length ?
          watchList.map((symbolName) => {
            return <SingleMostTradedShare key={Math.random()} symbolName={symbolName} />
          })
          : null
      }


      <div className="text-center mt-5">
        <Link to="/most-traded-share">
          <button className="bg-gray-200 px-3 py-2 rounded-full text-[13px] font-bold">
            See all
          </button>
        </Link>
      </div>
      {/* --- see all btn --- */}
    </div>
  );
};

export default MostTraded;
