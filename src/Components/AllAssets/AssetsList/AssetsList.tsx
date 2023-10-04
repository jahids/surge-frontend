/* eslint-disable  */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import { useEffect, useState } from 'react';
import { truncateText } from '../../../Utils/converter';
import { instance } from '../../../lib/AxiosInstance';
import { useNavigate } from 'react-router-dom';
const defaultlogo = `https://images2.imgbox.com/52/06/7xFpAH04_o.png`;

import AssetActionButton from './AseetActionButton';
import Watchlist from '../../Main/WatchList/WatchList';
import Loader from '../../Loader/Loader';
import TextImage from '../../TextImage/TextImage';
import CompanyShimmerLoader from '../../ShimmerLoaders/CompanyShimmer/Companyshimmer';



function AssetsList({ data }: any) {
  const [extradata, setextradata] = useState(null);
  const [marketparcentage, setmarketparcentage] = useState(null);
  const [selectedItems, setSelectedItems] = useState<string[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const findExtraDes = async () => {
      try {
        const response = await instance.get(`symbol?name=${data?.symbol}`);
        const { data: { data: dbWatchList } } = await instance.get(`/watchlist`);
        // const response2 = await instance.get(`movers-stats/${data?.symbol}`);

        setextradata(response?.data);
        // console.log(`👩‍🚒🚒`, dbWatchList);
        setSelectedItems(dbWatchList);
        // setmarketparcentage(response2?.data?.data?.change);
        // console.log(response?.data);
        setLoading(false);
      } catch (error) {
        console.log('error', error);
      }
    };
    findExtraDes();
  }, [data.id]);

  if (loading) {
    return <CompanyShimmerLoader />
  }

  return (
    <>
      <>
        <div
          key={Math.random()}
          className="flex items-center justify-between mb-4"
        >
          <div className="flex items-center">
            <div>
              {
                extradata?.logo ? <img
                  className="w-12 h-12 p-1 rounded-full bg-gray-100 object-contain"
                  src={extradata?.logo}
                  alt=""
                /> : <TextImage text={data?.symbol} />
              }
            </div>
            <div className="mx-5">
              <p className="font-bold">
                {data?.symbol}
              </p>
              <p className="text-gray-400 text-sm">
                {truncateText(data?.name, 20)}
              </p>
            </div>
          </div>
          <AssetActionButton symbol={data.symbol} selected={selectedItems.includes(data.symbol)} />
        </div>
      </>
      {/* <div className="fixed w-[90%] bottom-0 py-5">
        <button onClick={handleDoneClick} className="bg-indigo-600 w-full rounded-full py-3 text-white font-bold">
          Done
        </button>
      </div> */}
    </>
  );
}

export default AssetsList;
