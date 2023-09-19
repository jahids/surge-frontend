import { BiPlus } from 'react-icons/bi';
import { Link } from 'react-router-dom';

const FriendList = () => {
  return (
    <div className="mt-10">
      <h1 className="text-xl font-bold">Friend Lists</h1>
      <p className="mt-1 text-sm text-gray-400">
        Start tracking your next opportunity
      </p>
      {/* --- watchlist start --- */}
      <Link to="/friend-list">
        <div className="flex items-center mt-7">
          <div className="w-10 h-10 bg-indigo-100 flex items-center justify-center rounded-full ml-1">
            <BiPlus className="text-2xl text-blue-800" />
          </div>
          <div className="mx-3">
            <p className="font-bold text-sm">Build your Friend Lists</p>
            <p className="text-sm text-gray-400 mt-1">
              Select which stocks to track
            </p>
          </div>
        </div>
      </Link>
      {/* --- watchlist end --- */}
    </div>
  );
};

export default FriendList;
