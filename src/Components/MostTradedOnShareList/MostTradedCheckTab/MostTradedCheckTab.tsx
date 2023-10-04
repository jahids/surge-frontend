
import { useState, useEffect } from 'react';
import { MdOutlineArrowBackIos } from 'react-icons/md';
import { Link } from 'react-router-dom';
import AllTrade from '../AllTrade/AllTrade';
import SingleMostTradedShare from '../../Main/MostTraded/SingleMostTradedShare';
import { instance } from '../../../lib/AxiosInstance';
import BackButton from '../../globalBackButton/BackButton';

const MostTradedCheckTab = () => {


  const [watchList, setWatchList] = useState([]);

  useEffect(() => {
    const dbCall = async () => {
      const { data: { data: { list } } } = await instance.get(`/surge-stats/top-movers?limit=10`);
      setWatchList(list);
      console.log(`🎨🧵🧶🧶`, list);
    };
    dbCall();
  }, [watchList.length]);

  return (
    <div className="mt-2">
      <BackButton py={'py-0'} />
      <h1 className="text-xl font-bold mt-4">Most traded on Surge</h1>
      <p className="mt-1 text-sm text-gray-400 mb-7">By all time performance</p>
      {
        watchList?.length ?
          watchList.map((dt) => {
            return <SingleMostTradedShare key={Math.random()} symbolName={dt?.symbol} data={dt} />
          })
          : null
      }
    </div>
  );
};

export default MostTradedCheckTab;
