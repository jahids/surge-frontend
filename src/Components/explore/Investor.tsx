import Lottie from 'lottie-react';
import React from 'react';

export interface Iinvestor {
  name: string;
  username: string;
  parcentage: number;
  image: string;
}

function Investor({ Investordata }: { Investordata: Iinvestor[] }) {
  return (
    <div className="investor mt-5 max-h-full flex overflow-x-auto">
      {Investordata?.map((item, index) => (
        <div
          key={index}
          className="card_item   p-5 rounded-3xl bg-[#F5F5F5] mr-[20px] shadow-sm cursor-pointer"
          // onClick={() => handleCardClick(item)}
        >
          <div className="h-[200px] w-[300px]">
            <img
              className="mx-auto w-[100px] h-[100px]"
              src={item?.image}
              alt=""
            />
            <h1 className="font-bold text-xl text-center mt-2">
              Alfred Henrion
            </h1>
            <h1 className="text-gray-400 text-xl text-center mb-3">@alferio</h1>
            <div className="flex items-center justify-center">
              <button className=" bg-green-200  py-2 px-2 rounded-full text-green-500 text-xs font-semibold">
                +60.00%
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Investor;
