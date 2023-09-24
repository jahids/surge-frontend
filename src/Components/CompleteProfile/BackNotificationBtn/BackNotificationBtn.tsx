import { MdOutlineArrowBackIos } from 'react-icons/md';
import { FaUserPlus } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const BackNotificationBtn = () => {
  return (
    <div className="flex items-center justify-between py-5">
      <Link to="/main">
        <div>
          <MdOutlineArrowBackIos className="text-2xl text-gray-500" />
        </div>
      </Link>
      <div>
        <FaUserPlus className="text-2xl text-gray-500" />
      </div>
    </div>
  );
};

export default BackNotificationBtn;
