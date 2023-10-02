// const MostTradedCheckTab = () => {
//   return (
//     <div>
//       <h1>tab</h1>
//     </div>
//   );
// };

// export default MostTradedCheckTab;

import { useState } from 'react';
import { MdOutlineArrowBackIos } from 'react-icons/md';
import { Link } from 'react-router-dom';
import AllTrade from '../AllTrade/AllTrade';
import GainerTrade from '../GainerTrade/GainerTrade';
import LoserTrade from '../LoserTrade/LoserTrade';
// import GainerMovers from '../GainerMovers/GainerMovers';
// import LoserMovers from '../LoserMovers/LoserMovers';

const MostTradedCheckTab = () => {
  const [activeTab, setActiveTab] = useState(1);

  const handleTabClick = (tabNumber: number) => {
    setActiveTab(tabNumber);
  };
  return (
    <div>
      <div>
        <Link to="/main">
          <div>
            <MdOutlineArrowBackIos className="text-2xl text-gray-500" />
          </div>
        </Link>
        <div className="mt-8">
          <h1 className="text-3xl font-bold">
            Most traded on <br /> Shares
          </h1>
        </div>
      </div>
      {/* --- tab button start --- */}
      {/* <div className="my-8">
        <ul className="grid grid-flow-col text-center text-gray-500 bg-gray-100 rounded-full p-1">
          <li className="" onClick={() => handleTabClick(1)} aria-hidden="true">
            <a
              href="#tab1"
              className={`${
                activeTab === 1
                  ? 'flex justify-center bg-indigo-400 rounded-full shadow text-white py-2 transition-[.5s]'
                  : 'flex justify-center py-2 '
              }`}
            >
              All
            </a>
          </li>
          <li className="" onClick={() => handleTabClick(2)} aria-hidden="true">
            <a
              href="#tab1"
              className={`${
                activeTab === 2
                  ? 'flex justify-center bg-indigo-400 rounded-full shadow text-white py-2 transition-[.5s]'
                  : 'flex justify-center py-2 '
              }`}
            >
              Gain
            </a>
          </li>
          <li className="" onClick={() => handleTabClick(3)} aria-hidden="true">
            <a
              href="#tab2"
              className={`${
                activeTab === 3
                  ? 'flex justify-center bg-indigo-400  rounded-full shadow text-white py-2 transition-[.5s] '
                  : 'flex justify-center py-2 '
              }`}
            >
              Loser
            </a>
          </li>
        </ul>
      </div> */}
      {/* --- tab button end --- */}
      {/* --- content area --- */}
      <div className='mt-6'>
        {<AllTrade />}

      </div>
      {/* --- content area --- */}
    </div>
  );
};

export default MostTradedCheckTab;
