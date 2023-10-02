/* eslint-disable  */
import { FC, useEffect, useState } from 'react';
import { instance } from '../../../lib/AxiosInstance';
import { useNavigate } from 'react-router-dom';
import animationloader from '../../../assets/img/skeletonloader.json';
import Lottie from 'lottie-react';
import { truncateText } from '../../../Utils/converter';
import { watchlistLoader } from '../../../lib/AllLoder';
const defaultlogo = `https://images2.imgbox.com/52/06/7xFpAH04_o.png`;

export const SingleWatchlistItem = ({ symbolName }: { symbolName: string }) => {
  // console.log(`symbolName 🔥🔥`, symbolName);
  const navigate = useNavigate();
  const [symbolData, setSymbolData] = useState(null);
  const [marketparcentage, setMarketParcentage] = useState();
  const [watchlistloader, setwatchlistloader] = useState(true)
  useEffect(() => {
    const dbCall = async () => {
      const { data: symbolInfo } = await instance.get(
        `symbol?name=${symbolName}`
      );
      const {
        price: {
          yahoo: { regularMarketChangePercent },
        },
      } = symbolInfo;
      // console.log(`sinfo : `, symbolInfo);
      setSymbolData(symbolInfo);
      setMarketParcentage(
        parseFloat(regularMarketChangePercent).toPrecision(3) ||
          Math.random() * 100
      );
      setwatchlistloader(false)
      //name=AAPL
    };
    dbCall();
  }, [symbolName]);

  if(watchlistloader){
    return <Lottie animationData={watchlistLoader} loop={true} />
  }
  return (
    <>
      <>
        <div
          onClick={() => navigate('/buy-stock', { state: data?.symbol })}
          className="flex items-center justify-between mb-4"
        >
          <div className="flex items-center">
            <div>
              <img
                className="w-12 h-12 p-1 rounded-full bg-gray-100 object-contain"
                src={symbolData?.logo || defaultlogo}
                alt=""
              />
            </div>
            <div className="mx-5">
              <p className="font-bold">{symbolName}</p>
              <p className="text-gray-400 text-sm">
                {truncateText(symbolData?.name, 15)}
              </p>
            </div>
          </div>

          <div>
            <div>
              <button
                className={
                  marketparcentage! < 0
                    ? 'bg-red-200 py-2 px-2 rounded-full text-red-800 text-xs font-semibold'
                    : 'bg-green-200 py-2 px-2 rounded-full text-green-800 text-xs font-semibold'
                }
              >
                {`${marketparcentage || '3.98'}%`}
              </button>
            </div>
          </div>
        </div>
      </>
    </>
  );
};

export default SingleWatchlistItem;
