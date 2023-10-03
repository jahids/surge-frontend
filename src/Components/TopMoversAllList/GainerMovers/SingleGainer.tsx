/* eslint-disable @typescript-eslint/no-unused-vars */
import { useEffect, useState } from 'react';
import { instance } from '../../../lib/AxiosInstance';
import { useNavigate } from 'react-router-dom';
import TextImage from '../../TextImage/TextImage';
import UserShimmerLoader from '../../ShimmerLoaders/UserShimmer/UserShimmer';
import CompanyShimmerLoader from '../../ShimmerLoaders/CompanyShimmer/Companyshimmer';

const defaultlogo = `https://images2.imgbox.com/52/06/7xFpAH04_o.png`;



function SingleGainer({ data }: any) {
  console.log('loser data', data);

  const [extradata, setextradata] = useState(null);
  const [marketparcentage, setmarketparcentage] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const findExtraDes = async () => {
      try {
        const response = await instance.get(`symbol?name=${data?.symbol}`);
        const response2 = await instance.get(`movers-stats/${data?.symbol}`);

        setextradata(response?.data);
        setmarketparcentage(response2?.data?.data?.change);
        setLoading(false);
        console.log('resp 1', response?.data);
        console.log('resp 2', response2?.data?.data?.change);
      } catch (error) {
        console.log('error', error);
      }
    };

    findExtraDes();
  }, []);
  const navigate = useNavigate();


  if (loading) {
    return <CompanyShimmerLoader />;
  }

  return (
    <div className="mouse-Pointer" onClick={() => navigate('/buy-stock', { state: data?.symbol })} >
      <>
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center">
            <div>
              {/* <img
                className="w-12 h-12 p-1 rounded-full bg-gray-100 object-contain"
                src={extradata?.logo || defaultlogo}
                alt=""
              /> */}
              {
                extradata?.logo ? <img
                  className="w-12 h-12 p-1 rounded-full bg-gray-100 object-contain"
                  src={extradata?.logo}
                  alt=""
                /> : <TextImage text={data?.symbol} />
              }
            </div>
            <div className="mx-5">
              <p className="font-bold">{data?.symbol || 'no data'}</p>
              <p className="text-gray-400 text-sm">
                {/* {truncateText(extradata?.name, 15) || 'no trucate'} */}
                {data?.symbol}
              </p>
            </div>
          </div>
          <div>
            <div>
              {/* "bg-green-200 py-2 px-2 rounded-full text-green-500 text-xs font-semibold" */}
              <button
                className={`  py-2 px-2 rounded-full ${data?.percent_change > 0 ? 'bg-green-300' : 'bg-red-300'
                  } text-xs font-semibold`}
              >
                {/* {`${marketparcentage || '3.98'}%`} */}
                {`${data?.percent_change.toFixed(2) || marketparcentage.toFixed(2)
                  }%`}
              </button>
            </div>
          </div>
        </div>
      </>
    </div>
  );
}

export default SingleGainer;
