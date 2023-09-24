import { MdOutlineArrowBackIos } from 'react-icons/md';
import { Link } from 'react-router-dom';

const FriendListsSearch = () => {
  return (
    <div className="">
      <Link to="/main">
        <div>
          <MdOutlineArrowBackIos className="text-2xl text-gray-500" />
        </div>
      </Link>
      <div className="mt-5">
        <h1 className="text-3xl font-bold">All friends</h1>
      </div>
      {/* --- search assets --- */}
      <div className="mt-5">
        <form>
          <div className="relative">
            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
              <svg
                className="w-5 h-5 text-gray-500 dark:text-gray-400"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 20 20"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                />
              </svg>
            </div>
            <input
              type="search"
              id="default-search"
              className="block w-full p-3 pl-10 text-sm text-gray-900 border border-gray-300 rounded-full bg-gray-50 outline-none"
              placeholder="Search"
              required
            />
            <button
              type="submit"
              className="text-white text-xs absolute right-2.5 bottom-1.5 bg-indigo-500 rounded-full px-4 py-2"
            >
              Search
            </button>
          </div>
        </form>
      </div>
      {/* --- search assets --- */}
    </div>
  );
};

export default FriendListsSearch;
