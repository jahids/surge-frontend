import { BiPlus, BiCheck } from 'react-icons/bi';
import { useState } from 'react';
import { calculateAccountAge } from '../../../Utils/converter';
import { instance } from '../../../lib/AxiosInstance';

const defaultImg = `https://www.gravatar.com/avatar/00000000000000000000000000000000?d=retro&f=y`;
export default function FriendListsItem  ({isFriend = false ,imgSrc = defaultImg , name  = "First Last", platfromAge = '2021-01-02',id } : any)  {
  // --- btn toggle state ---
  const [isPlusIcon, setIsPlusIcon] = useState(isFriend);
  const accountAge = calculateAccountAge(new Date(platfromAge).getTime());
  //   // --- btn toggle ---
  const handleClick = () => {
    setIsPlusIcon(prevState => !prevState);
    // console.log(`follow this nigga : `,id);
    instance.get(`/social/new-following/${id}`).catch(er =>{
      console.log(er);
      setIsPlusIcon(prevState => !prevState);
    });
  };

  return (
    <div className="mt-4">
      <div className="flex items-center justify-between mb-5">
        <div className="flex items-center">
          <div>
            <img
              className="w-12 h-12 p-1 rounded-full bg-gray-100 object-contain"
              src={imgSrc}
              alt=""
            />
          </div>
          <div className="mx-5">
            <p className="font-bold"> {name} </p>
            <p className="text-gray-400 text-sm"> {accountAge} </p>
          </div>
        </div>
        <div>
          <div>
            <button
              onClick={handleClick}
              className="py-2 px-2 rounded-full text-3xl font-extrabold"
            >
              {isPlusIcon ? (
                <BiCheck className="text-green-400" />
                ) : (
                <BiPlus className="text-indigo-600" />
              )}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};


