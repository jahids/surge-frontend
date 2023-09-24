import Lottie from 'lottie-react';
import notFound from '../../assets/img/not_found.json';
import { IoIosArrowBack } from 'react-icons/io';
import { Link } from 'react-router-dom';

const NotFoundPage = () => {
  return (
    <div className="p-5">
      <Link to="/login">
        <button className="bg-blue-600 p-4 rounded-full text-white">
          <IoIosArrowBack className="text-xl" />
        </button>
      </Link>
      <div className="mt-36">
        <Lottie animationData={notFound} loop={true} />
      </div>
    </div>
  );
};

export default NotFoundPage;
