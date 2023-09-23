import { MdOutlineArrowBackIos } from 'react-icons/md';
import { useState } from 'react';
import News from '../Main/News/News';
import StockAbout from './StockAbout/StockAbout';
import StockBuyChart from './StockBuyChart/StockBuyChart';
import technology from '../../assets/img/technology.png';
import virtualReality from '../../assets/img/virtual_reality.png';
import { AiFillPlusCircle } from 'react-icons/ai';
import { BsFillCheckCircleFill } from 'react-icons/bs';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useGetSpecificStockQuery } from '../../features/stock/allStockApiSlice';
import StockBuy from '../sellbuy/StockBuy';

const StockBuyContainer = () => {
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
    return <p>loading..</p>;
  }
  // if (isSpecificStockError) {
  //   return <p>Error</p>;
  // }
  console.log('specificStockData', specificStockData);

  const handleClick = () => {
    setIsPlusIcon(prevState => !prevState);
  };

  // Watch the selected option

  return (
    <div className="px-5 pb-10 relative">
      {/* -- top bar start --- */}
      <section>
        <div className="flex items-center justify-between py-5">
          <Link onClick={() => navigate(-1)}>
            <div>
              <MdOutlineArrowBackIos className="text-2xl text-gray-500" />
            </div>
          </Link>
          <div>
            <button
              onClick={handleClick}
              className="py-2 px-2 rounded-full text-3xl font-extrabold"
            >
              {isPlusIcon ? (
                <AiFillPlusCircle className="text-3xl text-gray-500" />
              ) : (
                <BsFillCheckCircleFill className="text-gray-500 text-3xl" />
              )}
            </button>
          </div>
        </div>
      </section>
      {/* -- top bar end --- */}

      {/* --- stock name start --- */}
      <section>
        <div className="flex items-center justify-between">
          <div className="space-y-2">
            <p className="text-sm font-semibold">{specificStockData?.symbol}</p>
            <p className="text-3xl font-bold">
              {/* Revance <br /> Therapeutics */}
              {specificStockData?.name}
            </p>
            <p className="text-3xl font-bold">$175.48</p>
          </div>
          <div className="bg-gray-100 rounded-full">
            <img
              className="w-12 h-12 rounded-full object-contain"
              src={specificStockData?.logo}
              alt="revance"
            />
          </div>
        </div>
      </section>
      {/* --- stock name end --- */}

      {/* --- stock chart start --- */}
      <section>
        <StockBuyChart />
      </section>
      {/* --- stock chart end --- */}

      {/* --- stock details start --- */}
      <section>
        <StockAbout allspecificdata={specificStockData || []} />
      </section>
      {/* --- stock details end --- */}

      {/* --- stock current price start --- */}
      <section>
        <div className="mt-6">
          <p className="text-xl font-bold">Current Price</p>
        </div>
      </section>
      {/* --- stock current price end --- */}

      {/* --- news start --- */}
      <section>
        <News />
      </section>
      {/* --- news end --- */}

      {/* --- feature start  */}
      <section>
        <div className="my-10">
          <p className="text-xl font-bold">Featured in</p>
          <p className="text-sm text-gray-400">Discover Other assets like -</p>
          {/* --- featured card start --- */}
          <div className="card_wrapper mt-5 max-h-full flex overflow-x-auto">
            <div className="card_item flex-col items-baseline p-5 rounded-3xl bg-[#F5F5F5] mr-[20px] shadow-sm">
              <img
                className="w-[80px] h-auto mx-auto"
                src={technology}
                alt="technology"
              />
              <p className="font-bold text-sm text-center mt-2">Technology</p>
            </div>
            <div className="card_item flex-col items-baseline p-5 rounded-3xl bg-yellow-200 mr-[20px] shadow-sm">
              <img
                className="w-[80px] h-auto mx-auto"
                src={virtualReality}
                alt="technology"
              />
              <p className="font-bold text-sm text-center mt-2">
                Virtual Reality
              </p>
            </div>
          </div>
          {/* --- featured card end --- */}
        </div>
      </section>
      {/* --- feature end --- */}

      {/* --- buy button start --- */}
      <section className="fixed bottom-0 right-0 mb-10 mr-5">
        <div>
          <button
            onClick={() => setOpen(true)}
            className="bg-indigo-600 px-14 py-3 text-white rounded-full"
          >
            Buy
          </button>
        </div>

        {/* buy component */}
        <StockBuy isOpen={isOpen} setOpen={setOpen} />
      </section>
      {/* --- buy button end --- */}
    </div>
  );
};

export default StockBuyContainer;