/* eslint-disable indent */
import { MdOutlineArrowBackIos } from 'react-icons/md';
import { useEffect, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useGetSpecificStockQuery } from '../../features/stock/allStockApiSlice';
import Loader from '../../Components/Loader/Loader';
import BackButton from '../../Components/globalBackButton/BackButton';
import PortfolioChart from '../../Components/portfolioComponent/PortfolioChart';
import { instance } from '../../lib/AxiosInstance';
import SingleStockItem from '../../Components/AllStockLists/AllStockItems/SingleStockItem';
import { useDispatch } from 'react-redux';
import { setBalance } from '../../features/globalBalance/balanceSlice';
import PortfolioLoader from '../../Components/ShimmerLoaders/portfolioLoader/PortfolioLoader';

const defaultlogo = `https://images2.imgbox.com/52/06/7xFpAH04_o.png`;
const PortfolioPage = ({ pagecheck }: any) => {
  const [isPlusIcon, setIsPlusIcon] = useState(true);
  const [isOpen, setOpen] = useState(false);
  const [portfoliodtaa, setportfoliodtaa] = useState([]);
  const [portfoliostock, setportfoliostock] = useState([]);
  const [loader, setloader] = useState(true);
  // const { state } = useLocation();
  // const navigate = useNavigate();

  const dispatch = useDispatch();
  useEffect(() => {
    const dataload = async () => {
      try {
        const { data } = await instance.get(`portfolio`);
        const { data: portfoliostockitem } = await instance.get(
          `portfolio/open-positions`
        );
        // console.log('dataload', data);
        setportfoliostock(portfoliostockitem?.data);
        dispatch(setBalance({ ...data?.data, api: true }));
        setportfoliodtaa(data?.data);
        setloader(false);
      } catch (error) {
        console.log('error');
        setloader(false);
      }
    };
    dataload();
  }, []);

  console.log('--portfoliodtaa', portfoliodtaa);
  console.log('--portfoliostock', portfoliostock);

  if (loader) {
    return <PortfolioLoader />;
  }

  return (
    <div className={`${!pagecheck ? 'px-5 pb-10 relative' : ' relative'}`}>
      {/* -- top bar start --- */}
      {!pagecheck && <BackButton />}
      <section>
        <div className="flex items-center justify-between">
          <div className="space-y-2">
            <p className="text-sm font-semibold">
              {/* {specificStockData?.data?.symbol || specificStockData?.symbol} */}
            </p>
            <p className="text-3xl font-bold">
              {/* Revance <br /> Therapeutics */}
              {'My Portfolio'}
            </p>
            <p className="text-3xl font-bold"> ${Number(portfoliodtaa?.value).toLocaleString('en-Us')}</p>
          </div>
        </div>
      </section>
      <section>
        <PortfolioChart
          gainloss={portfoliodtaa?.unrealized_pl?.toFixed(2)}
          Symbol="ORAN"
        />
      </section>
      <section>
        <div className="mt-6">
          <p className="text-xl font-bold">Investments</p>
        </div>
        <div className="flex justify-between items-center mt-3 ">
          <div>
            <span className="text-base text-gray-500">Funds Invested</span>
            <h1 className="text-xl font-bold">
              ${Number(portfoliodtaa?.cost_basis?.toFixed(2)).toLocaleString('en-US')}
            </h1>
          </div>

          <div>
            <span className="text-base text-gray-500">Gain/Loss ($)</span>
            <h1 className="text-xl font-bold">
              {Number(portfoliodtaa?.unrealized_pl?.toFixed(2)).toLocaleString('en-US')}
            </h1>
          </div>
        </div>
        <div className="py-3 mt-4 rounded-lg">
          <div className="flex justify-between text-gray-500 items-center">
            <span className="font-bold block">Available to Invest</span>
            <span className="font-bold mr-2 text-right block">
              {Number(portfoliodtaa?.available_to_invest).toLocaleString('en-US')}
            </span>
          </div>
        </div>
      </section>
      <section>
        <div className="mt-6">
          <h1 className="text-2xl font-bold">Portfolio</h1>
          <p className="mt-1 text-sm text-gray-400 mb-5">
            Keep track of you positions
          </p>
        </div>
        {pagecheck
          ? portfoliostock
            ?.slice(0, 3)
            .map((item, index) => <SingleStockItem key={index} data={item} />)
          : portfoliostock?.map((item, index) => (
            <SingleStockItem key={index} data={item} />
          ))}

        {pagecheck && (
          <div className="text-center mt-2">
            <Link to="/portfolio">
              <button className="bg-gray-200 px-3 py-2 rounded-full text-[13px] font-bold">
                See all
              </button>
            </Link>
          </div>
        )}
        {/* <div className="flex items-center justify-between mb-4 mt-5">
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

        
        </div> */}
      </section>
    </div>
  );
};

export default PortfolioPage;
