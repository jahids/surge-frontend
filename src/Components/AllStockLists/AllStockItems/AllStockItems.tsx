import rocketPharma from '../../../assets/movers-img/rocket-pharma-logo-2016-outline@2x.webp';
import ptc from '../../../assets/movers-img/ptcLogo.webp';
import apple from '../../../assets/movers-img/apple.png';
import tesla from '../../../assets/movers-img/tesla.png';

const AllStockItems = () => {
  return (
    <div className="mt-8">
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
            <p className="font-bold">Nikola</p>
            <p className="text-gray-400 text-sm">NKLA</p>
          </div>
        </div>
        <div>
          <div>
            <button className="bg-green-200 py-2 px-2 rounded-full text-green-500 text-xs font-semibold">
              +60.00%
            </button>
          </div>
        </div>
      </div>
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center">
          <div>
            <img
              className="w-12 h-12 p-1 rounded-full bg-gray-100 object-contain"
              src={tesla}
              alt=""
            />
          </div>
          <div className="mx-5">
            <p className="font-bold">Tesla</p>
            <p className="text-gray-400 text-sm">TSLA</p>
          </div>
        </div>
        <div>
          <div>
            <button className="bg-red-200 py-2 px-2 rounded-full text-red-500 text-xs font-semibold">
              +60.00%
            </button>
          </div>
        </div>
      </div>
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center">
          <div>
            <img
              className="w-12 h-12 p-1 rounded-full bg-gray-100 object-contain"
              src={ptc}
              alt=""
            />
          </div>
          <div className="mx-5">
            <p className="font-bold">Nikola</p>
            <p className="text-gray-400 text-sm">NKLA</p>
          </div>
        </div>
        <div>
          <div>
            <button className="bg-green-200 py-2 px-2 rounded-full text-green-500 text-xs font-semibold">
              +60.00%
            </button>
          </div>
        </div>
      </div>
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center">
          <div>
            <img
              className="w-12 h-12 p-1 rounded-full bg-gray-100 object-contain"
              src={apple}
              alt=""
            />
          </div>
          <div className="mx-5">
            <p className="font-bold">Apple</p>
            <p className="text-gray-400 text-sm">AAPL</p>
          </div>
        </div>
        <div>
          <div>
            <button className="bg-red-200 py-2 px-2 rounded-full text-red-500 text-xs font-semibold">
              +60.00%
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AllStockItems;
