import { BiPlus, BiCheck } from 'react-icons/bi';
import { useState } from 'react';
import rocketPharma from '../../../assets/movers-img/rocket-pharma-logo-2016-outline@2x.webp';

const FriendListsItems = () => {
  // --- btn toggle state ---
  const [isPlusIcon, setIsPlusIcon] = useState(true);
  //   // --- btn toggle ---
  const handleClick = () => {
    setIsPlusIcon(prevState => !prevState);
  };

  return (
    <div className="mt-8">
      <div className="flex items-center justify-between mb-5">
        <div className="flex items-center">
          <div>
            <img
              className="w-12 h-12 p-1 rounded-full bg-gray-100 object-contain"
              src={rocketPharma}
              alt=""
            />
          </div>
          <div className="mx-5">
            <p className="font-bold">Jakir</p>
            <p className="text-gray-400 text-sm">JS</p>
          </div>
        </div>
        <div>
          <div>
            <button
              onClick={handleClick}
              className="py-2 px-2 rounded-full text-3xl font-extrabold"
            >
              {isPlusIcon ? (
                <BiPlus className="text-indigo-600" />
              ) : (
                <BiCheck className="text-gray-400" />
              )}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FriendListsItems;
