import { MdOutlineArrowBackIos } from 'react-icons/md';
import { Link } from 'react-router-dom';

const NotificationsTitle = () => {
  return (
    <div className="py-5">
      <Link to="/main">
        <div>
          <MdOutlineArrowBackIos className="text-2xl text-gray-500" />
        </div>
      </Link>
    </div>
  );
};

export default NotificationsTitle;
