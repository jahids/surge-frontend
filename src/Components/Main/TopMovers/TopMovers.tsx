/* eslint-disable */
import rocketPharma from '../../../assets/movers-img/rocket-pharma-logo-2016-outline@2x.webp';
import ptc from '../../../assets/movers-img/ptcLogo.webp';
import { useGetTopMoversQuery } from '../../../features/movers/moversApiSlice';
import { Link } from 'react-router-dom';
import Loader from '../../Loader/Loader';
import GainerMovers from '../../TopMoversAllList/GainerMovers/GainerMovers';

const TopMovers = () => {
  // console.log('helllo ');

  // Use the generated hooks to make API requests
  const {
    data: topmoverData,
    isLoading: isLoadingtopmover,
    isSuccess: isSuccesstopmover,
    isError: isErrortopmover,
    error: errortopmover,
  } = useGetTopMoversQuery({ length: 4 });


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

  // console.log("topmoverData", topmoverData);



  return (
    <div className="mt-10">
      <h1 className="text-xl font-bold">Top movers</h1>
      <p className="mt-1 text-sm text-gray-400 mb-7">By weekly </p>
      {/* --- top movers company --- */}
      {
        /* {topmoverData?.data?.gainers.map((item)=>(
          <>
            <div className="flex items-center justify-between mb-4">
          <div className="flex items-center">
            <div>
              <img
                className="w-12 h-12 p-1 rounded-full bg-gray-100 object-contain"
                src={rocketPharma}
                alt=""
              />
            </div>
            <div className="mx-5">
              <p className="font-bold">{item?.symbol}</p>
              <p className="text-gray-400 text-sm">{item?.symbol}</p>
            </div>
          </div>
          
          <div>
            <div>
              <button className="bg-green-200 py-2 px-2 rounded-full text-green-500 text-xs font-semibold">
               {`+${item?.percent_change.toFixed(2)}`}
              </button>
            </div>
          </div>
        </div>
          </>
        ))
  
        } */
      }

      <GainerMovers gainers={topmoverData?.data?.gainers} />

      {/* --- top movers company --- */}

      {/* --- see all btn --- */}
      <div className="text-center mt-5">
        <Link to="/top-movers">
          <button className="bg-gray-200 px-3 py-2 rounded-full text-[13px] font-bold">
            See all
          </button>
        </Link>
      </div>
      {/* --- see all btn --- */}
    </div>
  );
};

export default TopMovers;
