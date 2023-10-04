import Lottie from 'lottie-react';
import allStock from '../../../assets/img/all_stock.json';
import { Link } from 'react-router-dom';

const AllStocks = () => {
  return (
    <div className="mt-5 mb-5">
      <h1 className="text-2xl font-bold ">Discover Stock</h1>
      <p className="mt-1 text-sm text-gray-400">Find your next big win</p>
      {/* ---  ENABLE CARD --- */}
      <div className="bg-[#ECECEC] mt-5 pb-5 rounded-2xl space-x-3 shadow">
        <div className="p-5 flex justify-center">
          <Lottie className="w-[200px]" animationData={allStock} loop={true} />
        </div>
        <div className="text-center ">
          <div className="mb-2">
            <small>
              Discover the world of investments <br /> with our personalized
              stock suggestions
            </small>
          </div>
          <div>
            <Link to="/all-stock">
              <button className="bg-[#fff] rounded-full px-3 py-2 text-xs font-bold">
                See all stocks
              </button>
            </Link>
          </div>
        </div>
      </div>
      {/* ---  ENABLE CARD --- */}
    </div>
  );
};

export default AllStocks;
