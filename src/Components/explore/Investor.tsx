import Lottie from 'lottie-react';
import React from 'react';
import { calculateAccountAge } from '../../Utils/converter';
import TextImage from '../TextImage/TextImage';

export interface Iinvestor {
  name: string;
  username: string;
  parcentage: number;
  image: string;
}

function Investor({ Investordata }: any) {
  console.log(`💚💛💛💥`, Investordata);
  return (
    <div className="investor mt-5  flex overflow-x-auto">
      {Investordata?.map((item, index) => (
        <div
          key={index}
          className="p-5 rounded-3xl bg-[#F5F5F5] mr-[20px] shadow-sm cursor-pointer"
          // onClick={() => handleCardClick(item)}
        >
          <div className="h-[200px] w-[300px] mx-auto">
            {item?.pfp ? (
              <img
                className=" mx-auto rounded-full w-[100px] h-[100px]"
                src={item?.pfp}
                alt=""
              />
            ) : (
              <div className="flex justify-center items-center">
                <TextImage width="100px" height="100px" text={item?.name} />
              </div>
            )}

            <h1 className="font-bold text-xl text-center mt-2">{item?.name}</h1>
            <h1 className="text-gray-400 text-sm text-center mb-3">
              Joined {calculateAccountAge(item?.createdAt)} ago
            </h1>
            <div className="flex items-center justify-center">
              <button className=" bg-green-200  py-2 px-2 rounded-full text-green-500 text-xs font-semibold">
                ${Number(item?.all_time_invest).toLocaleString('en-US') || 0}
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Investor;
