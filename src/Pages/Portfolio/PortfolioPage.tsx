import { MdOutlineArrowBackIos } from 'react-icons/md';
import { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useGetSpecificStockQuery } from '../../features/stock/allStockApiSlice';
import Loader from '../../Components/Loader/Loader';
import BackButton from '../../Components/globalBackButton/BackButton';
import PortfolioChart from '../../Components/portfolioComponent/PortfolioChart';

const defaultlogo = `https://images2.imgbox.com/52/06/7xFpAH04_o.png`;
const PortfolioPage = () => {
  const [isPlusIcon, setIsPlusIcon] = useState(true);
  const [isOpen, setOpen] = useState(false);
  const { state } = useLocation();
  const navigate = useNavigate();
  console.log('state lcoation', state);

  // Use the useGetSpecificStockQuery hook to fetch specific stock data
  const {
    data: specificStockData,
    isLoading: isSpecificStockLoading,
    // isSuccess: isSpecificStockSuccess,
    // isError: isSpecificStockError,
  } = useGetSpecificStockQuery({ symbolname: state });

  if (isSpecificStockLoading) {
    return <Loader />;
  }
  // if (isSpecificStockError) {
  //   return <p>Error</p>;
  // }
  console.log('specificStockData', specificStockData);

  //   const handleClick = () => {
  //     setIsPlusIcon(prevState => !prevState);
  //   };

  // Watch the selected option

  return (
    <div className="px-5 pb-10 relative">
      {/* -- top bar start --- */}
      <BackButton />
      <section>
        <div className="flex items-center justify-between">
          <div className="space-y-2">
            <p className="text-sm font-semibold">
              {/* {specificStockData?.data?.symbol || specificStockData?.symbol} */}
            </p>
            <p className="text-3xl font-bold">
              {/* Revance <br /> Therapeutics */}
              {'investing'}
            </p>
            <p className="text-3xl font-bold"> ${'4543'}</p>
          </div>
        </div>
      </section>
      <section>
        <PortfolioChart Symbol="ORAN" />
      </section>
      <section>
        <div className="mt-6">
          <p className="text-xl font-bold">Investments</p>
        </div>
        <div className="flex justify-between items-center mt-3 m-2">
          <div>
            <span className="text-xl text-gray-500">Total Invested</span>
            <h1 className="text-xl font-bold">${'4800050'}</h1>
          </div>
          <div>
            <span className="text-xl text-gray-500">Total Gain</span>
            <h1 className="text-xl font-bold">${'4800050'}</h1>
          </div>
        </div>
      </section>
      <section>
        <div className="mt-10 ">
          <h1 className="text-2xl font-bold">Portfolio</h1>
          <p className="mt-1 text-sm text-gray-400">
            Keep track of you positions
          </p>
        </div>
        <div className="flex items-center justify-between mb-4 mt-5">
          <div className="flex items-center">
            <div>
              <img
                className="w-12 h-12 p-1 rounded-full bg-gray-100 object-contain"
                src={defaultlogo}
                alt=""
              />
            </div>
            <div className="mx-5">
              <p className="font-bold">{'XYS'}</p>
              <p className="text-gray-400 text-sm">{'3423'}</p>
            </div>
          </div>

          <div>
            <div>
              <button className="bg-green-200 py-2 px-2 rounded-full text-green-500 text-xs font-semibold">
                {`3.98%`}
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PortfolioPage;
