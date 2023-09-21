import { MdOutlineArrowBackIos } from 'react-icons/md';
import { Link } from 'react-router-dom';
import { AiFillPlusCircle } from 'react-icons/ai';
import { useState } from 'react';

import { BsFillCheckCircleFill } from 'react-icons/bs';

const StockTopBtn = () => {
  // --- btn toggle state ---
  const [isPlusIcon, setIsPlusIcon] = useState(true);
  //   // --- btn toggle ---
  const handleClick = () => {
    setIsPlusIcon(prevState => !prevState);
  };

  return (
    <div className="flex items-center justify-between py-5">
      <Link to="/main">
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
  );
};

export default StockTopBtn;
