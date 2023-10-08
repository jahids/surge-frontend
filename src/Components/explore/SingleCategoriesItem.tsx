/* eslint-disable  */
import React from 'react';
import TextImage from '../TextImage/TextImage';
import { truncateText } from '../../Utils/converter';
import AssetActionButton from '../AllAssets/AssetsList/AseetActionButton';
import { useNavigate } from 'react-router-dom';

export default function SingleCategoriesItem({ data }) {
  console.log(data);
  const navigate = useNavigate()
  return (
    <div className='flex justify-between'>
      <div
        onClick={() => navigate('/buy-stock', { state: data?.symbol })}
        //   onClick={() => navigate('/buy-stock', { state: data?.symbol })}
        className="flex items-center justify-between mb-4"
      >
        <div className="flex items-center">
          <div>
            {/* <img
          className="w-12 h-12 p-1 rounded-full bg-gray-100 object-contain"
          src={extradata?.logo || defaultlogo}
          alt=""
        /> */}
            {data?.logo ? (
              <img
                className="w-12 h-12 p-1 rounded-full bg-gray-100 object-contain"
                src={data?.logo}
                alt=""
              />
            ) : (
              <TextImage text={data?.symbol} />
            )}
          </div>
          <div className="mx-5">
            <p className="font-bold">
              {truncateText(data?.name, 23) || data?.name}
            </p>
            <p className="text-gray-400 text-sm">
              {data?.symbol}
              {/* {truncateText(extradata?.name, 15)} */}
            </p>
          </div>
        </div>

        
      </div>
      <div>
          <div>
            <AssetActionButton
              symbol={data.symbol}
              //   selected={false} //   selected={selectedItems.includes(data.symbol)}
            />
          </div>
        </div>
    </div>
  );
}
