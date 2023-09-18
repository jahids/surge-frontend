import { BiPlus } from 'react-icons/bi';
const Watchlist = () => {
  return (
    <div className="mt-10">
      <h1 className="text-xl font-bold">Watchlist</h1>
      <p className="mt-1 text-sm text-gray-400">
        Start tracking your next opportunity
      </p>
      {/* --- watchlist start --- */}
      <div className="flex items-center mt-7">
        <div className="w-10 h-10 bg-indigo-100 flex items-center justify-center rounded-full ml-1">
          <BiPlus className="text-2xl text-blue-800" />
        </div>
        <div className="mx-3">
          <p className="font-bold text-sm">Build your watchlist</p>
          <p className="text-sm text-gray-400 mt-1">
            Select which stocks to track
          </p>
        </div>
      </div>
      {/* --- watchlist end --- */}
    </div>
  );
};

export default Watchlist;
