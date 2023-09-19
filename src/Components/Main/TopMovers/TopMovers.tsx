import rocketPharma from '../../../assets/movers-img/rocket-pharma-logo-2016-outline@2x.webp';
import ptc from '../../../assets/movers-img/ptcLogo.webp';

const TopMovers = () => {
  return (
    <div className="mt-10">
      <h1 className="text-xl font-bold">Top movers</h1>
      <p className="mt-1 text-sm text-gray-400 mb-7">By weekly </p>
      {/* --- top movers company --- */}
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
            <button className="bg-red-200 py-2 px-2 rounded-full text-red-500 text-xs font-semibold">
              +60.00%
            </button>
          </div>
        </div>
      </div>
      {/* --- top movers company --- */}

      {/* --- see all btn --- */}
      <div className="text-center mt-5">
        <button className="bg-gray-200 px-3 py-2 rounded-full text-[13px] font-bold">
          See all
        </button>
      </div>
      {/* --- see all btn --- */}
    </div>
  );
};

export default TopMovers;
