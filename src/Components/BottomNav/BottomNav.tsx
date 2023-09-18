import { BsGraphUpArrow } from 'react-icons/bs';
import { FaUsers } from 'react-icons/fa';
import { ImSearch } from 'react-icons/im';

const BottomNav = () => {
  return (
    <div className="fixed bottom-0 left-0 z-50 w-full h-16 bg-white border-t border-gray-200 ">
      <div className="grid h-full max-w-lg grid-cols-3 mx-auto font-medium">
        <button
          type="button"
          className="inline-flex flex-col items-center justify-center px-5 group "
        >
          <BsGraphUpArrow className="w-10 h-6 mb-2 text-gray-500 text-3xl group-hover:text-black " />
        </button>

        <button
          type="button"
          className="inline-flex flex-col items-center justify-center px-5 group"
        >
          <FaUsers className="w-10 h-6 mb-2 text-gray-500 text-3xl  group-hover:text-black " />
        </button>

        <button
          type="button"
          className="inline-flex flex-col items-center justify-center px-5 group"
        >
          <ImSearch className="w-10 h-6 mb-2 text-gray-500 text-3xl  group-hover:text-black " />
        </button>
      </div>
    </div>
  );
};

export default BottomNav;
