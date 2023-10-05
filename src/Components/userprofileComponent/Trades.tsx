/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import React, { useEffect, useState } from 'react';
import { instance } from '../../lib/AxiosInstance';
import { useNavigate } from 'react-router-dom';
import CompanyShimmerLoader from '../ShimmerLoaders/CompanyShimmer/Companyshimmer';
import TextImage from '../TextImage/TextImage';
import { truncateText } from '../../Utils/converter';

function Trades({ data, type }: { data: any, type: "trade" | "portfolio" }) {
  // console.log('props reveve', data);

  const [extradata, setextradata] = useState(null);
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);

  const [price, setPrice] = useState(null);

  useEffect(() => {
    const findExtraDes = async () => {
      try {
        const { data: response } = await instance.get(`symbol?name=${data?.symbol}`);

        let finalData = null;
        if (response?.data) {
          finalData = response.data;
        } else {
          finalData = response;
        }
        if (finalData) {
          if (type == 'trade') {
            setPrice((data?.qty * data?.price).toFixed(2));
          } else {
            setPrice(parseFloat(data?.market_value).toFixed(2))
          }
        }
        setextradata(finalData);
        setLoading(false);
        console.log('💥💗symbol info💞💕', response, '🔥🔥prop data->🔥', data);
      } catch (error) {
        console.log('error', error);
      }
    };

    findExtraDes();
  }, []);
  if (loading) {
    return <CompanyShimmerLoader />
  }

  return (
    <div
      onClick={() => navigate('/buy-stock', { state: data?.symbol })}
      className="relative rounded-lg border items-center  border-gray-200 shadow-sm m-3 "
    >
      <div className="flex items-center justify-between gap-2 p-4">
        <div className='flex flex-row'>


          {
            (extradata?.logo || extradata?.data?.logo) ? <img
              alt="Women"
              src={extradata?.logo}
              className="h-12 w-12 rounded-full object-cover"
            /> :
              <TextImage width={'48px'} height={'48px'} textSize={'1.4rem'} text={data?.symbol} />
          }

          <div className='ml-4'>
            <p className="font-medium text-gray-900">{extradata?.name}</p>
            <p className="line-clamp-1 text-sm text-gray-500">{data?.symbol}</p>
          </div>
        </div>

        <div>
          <p className="font-medium text-gray-900">
            $ {price || 322.12}
          </p>
          {!data?.asset_class && (
            <span
              className={`${data?.side === 'buy' ? 'bg-green-400' : 'bg-red-400'
                } text-xs font-medium mr-3 px-5 py-1 rounded-full`}
            >
              {data?.side}
            </span>
          )}
        </div>
      </div>
    </div>
  );
}

export default Trades;
