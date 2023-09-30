/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import React, { useEffect, useState } from 'react';
import { instance } from '../../lib/AxiosInstance';
import { useNavigate } from 'react-router-dom';

function Trades({ data }: any) {
  console.log('props reveve', data);
  const [extradata, setextradata] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const findExtraDes = async () => {
      try {
        const response = await instance.get(`symbol?name=${data?.symbol}`);

        setextradata(response?.data);

        console.log(response?.data);
      } catch (error) {
        console.log('error', error);
      }
    };

    findExtraDes();
  }, []);

  return (
    <div
      onClick={() => navigate('/buy-stock', { state: data?.symbol })}
      className="relative rounded-lg border items-center  border-gray-200 shadow-sm m-3 "
    >
      <div className="flex items-center justify-between gap-4 p-4">
        <img
          alt="Women"
          src={extradata?.logo}
          className="h-12 w-12 rounded-full object-cover"
        />

        <div>
          <p className="font-medium text-gray-900">{extradata?.name}</p>

          <p className="line-clamp-1 text-sm text-gray-500">{data?.symbol}</p>
        </div>

        <div>
          <p className="font-medium text-gray-900">
            $ {extradata?.price?.price || 322.12}
          </p>
          {!data?.asset_class && (
            <span
              className={`${
                data?.side === 'buy' ? 'bg-green-400' : 'bg-red-400'
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
