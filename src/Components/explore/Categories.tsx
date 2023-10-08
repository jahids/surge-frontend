/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import Lottie from 'lottie-react';
import React from 'react';
import { useNavigate } from 'react-router-dom';

export interface ICategories {
  category: string;
  lottie: any;
}

function Categories({ categorie }: { categorie: ICategories[] }) {
  const navigate = useNavigate();
  return (
    <div className="custom mt-5 max-h-full flex overflow-x-auto">
      {categorie?.map((item, index) => (
        <div
          key={index}
          className="card_item h-auto p-5 rounded-3xl bg-[#F5F5F5] mr-[20px] shadow-sm cursor-pointer"
          onClick={() =>
            navigate('/individualCategorie', {
              state: item?.value,
            })
          }
        >
          <div className="h-[100px] w-[100px]">
            <Lottie animationData={item?.lottie} loop={true} />
          </div>

          <div className="flex items-center text-xs text-gray-400 font-medium">
            <h1 className="text-lg">{item?.category}</h1>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Categories;
