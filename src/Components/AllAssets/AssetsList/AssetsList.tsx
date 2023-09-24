// import { BiPlus, BiCheck } from 'react-icons/bi';
// import { useState } from 'react';
// import rocketPharma from '../../../assets/movers-img/rocket-pharma-logo-2016-outline@2x.webp';

// const AssetsList = ({ data }) => {
//   // --- btn toggle state ---
//   const [isPlusIcon, setIsPlusIcon] = useState(true);
//   //   // --- btn toggle ---
//   const handleClick = () => {
//     setIsPlusIcon(prevState => !prevState);
//   };

//   return (
//     <div className="mt-8">
//       <div className="flex items-center justify-between mb-5">
//         <div className="flex items-center">
//           <div>
//             <img
//               className="w-12 h-12 p-1 rounded-full bg-gray-100 object-contain"
//               src={rocketPharma}
//               alt=""
//             />
//           </div>
//           <div className="mx-5">
//             <p className="font-bold">Nikola</p>
//             <p className="text-gray-400 text-sm">NKLA</p>
//           </div>
//         </div>
//         <div>
//           <div>
//             <button
//               onClick={handleClick}
//               className="py-2 px-2 rounded-full text-3xl font-extrabold"
//             >
//               {isPlusIcon ? (
//                 <BiPlus className="text-indigo-600" />
//               ) : (
//                 <BiCheck className="text-gray-400" />
//               )}
//             </button>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default AssetsList;

/* eslint-disable  */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import { useEffect, useState } from 'react';
import { truncateText } from '../../../Utils/converter';
import { instance } from '../../../lib/AxiosInstance';
import { useNavigate } from 'react-router-dom';
const defaultlogo = `https://images2.imgbox.com/52/06/7xFpAH04_o.png`;
import { BiPlus, BiCheck } from 'react-icons/bi';

function AssetsList({ data , add , remove}: any) {
  const [extradata, setextradata] = useState(null);
  const [marketparcentage, setmarketparcentage] = useState(null);
  const [selectedItems, setSelectedItems] = useState<string[]>([]);
  const [isPlusIcon, setIsPlusIcon] = useState(true);
  //   // --- btn toggle ---

let myarr  = []
  const handleClick = () => {
    myarr.push(data?.symbol);
    // add(data?.symbol);


    // console.log('arr',myarr);
    if(isPlusIcon){
      add(data?.symbol);
    }else{
      remove(data?.symbol);
    }
    setIsPlusIcon((prevState) => !prevState);

  };

  const handleDoneClick = () => {
    // Log the selected items when the "Done" button is clicked
    console.log('Selected Items:', selectedItems?.symbol);

  };


  

  useEffect(() => {
    const findExtraDes = async () => {
      try {
        const response = await instance.get(`symbol?name=${data?.symbol}`);
        const response2 = await instance.get(`movers-stats/${data?.symbol}`);

        setextradata(response?.data);
        setmarketparcentage(response2?.data?.data?.change);
        console.log(response?.data);
        console.log('resp 2', response2?.data?.data?.change);
      } catch (error) {
        console.log('error', error);
      }
    };

    findExtraDes();
  }, []);

  return (
    <>
      <>
        <div
          className="flex items-center justify-between mb-4"
        >
          <div className="flex items-center">
            <div>
              <img
                className="w-12 h-12 p-1 rounded-full bg-gray-100 object-contain"
                src={extradata?.logo || defaultlogo}
                alt=""
              />
            </div>
            <div className="mx-5">
              <p className="font-bold">{data?.symbol}</p>
              <p className="text-gray-400 text-sm">
                {truncateText(data?.name, 15)}
              </p>
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
      </>
      <div className="fixed w-[90%] bottom-0 py-5">
      <button onClick={handleDoneClick} className="bg-indigo-600 w-full rounded-full py-3 text-white font-bold">
        Done
      </button>
    </div>
    </>
  );
}

export default AssetsList;
