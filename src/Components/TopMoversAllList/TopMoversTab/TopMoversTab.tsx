import { useState } from 'react';
import { MdOutlineArrowBackIos } from 'react-icons/md';
import { Link } from 'react-router-dom';
import GainerMovers from '../GainerMovers/GainerMovers';
import LoserMovers from '../LoserMovers/LoserMovers';
import { useGetTopMoversQuery } from '../../../features/movers/moversApiSlice';
import Loader from '../../Loader/Loader';

const TopMoversTab = () => {
  const [activeTab, setActiveTab] = useState(1);

  const handleTabClick = (tabNumber: number) => {
    setActiveTab(tabNumber);
  };

  // Use the generated hooks to make API requests
  const {
    data: topmoverData,
    isLoading: isLoadingtopmover,
    isSuccess: isSuccesstopmover,
    isError: isErrortopmover,
    error: errortopmover,
  } = useGetTopMoversQuery({ length: 10 });

  // Handle loading state or errors here
  if (isLoadingtopmover) {
    return <Loader />;
  }

  if (isErrortopmover) {
    // Handle API error here
    return <div>Error: {errortopmover?.message || errortopmover?.message}</div>;
  }

  if (isSuccesstopmover) {
    // Handle specific news success here
    // Use specificNewsData
  }

  console.log('topmoverData 10', topmoverData);

  return (
    <div>
      <div>
        <Link to="/main">
          <div>
            <MdOutlineArrowBackIos className="text-2xl text-gray-500" />
          </div>
        </Link>
        <div className="mt-8">
          <h1 className="text-3xl font-bold">Top movers</h1>
        </div>
      </div>
      {/* --- tab button start --- */}
      <div className="my-8 ">
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
              Gain
            </a>
          </li>
          <li className="" onClick={() => handleTabClick(2)} aria-hidden="true">
            <a
              href="#tab2"
              className={`${
                activeTab === 2
                  ? 'flex justify-center bg-indigo-400  rounded-full shadow text-white py-2 transition-[.5s] '
                  : 'flex justify-center py-2 '
              }`}
            >
              Loser
            </a>
          </li>
        </ul>
      </div>
      {/* --- tab button end --- */}
      {/* --- content area --- */}
      <div>
        {activeTab === 1 && (
          <GainerMovers gainers={topmoverData?.data?.gainers} />
        )}
        {activeTab === 2 && <LoserMovers losers={topmoverData?.data?.losers} />}
      </div>
      {/* --- content area --- */}
    </div>
  );
};

export default TopMoversTab;
