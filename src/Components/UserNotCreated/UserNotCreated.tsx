import Lottie from 'lottie-react';
import userNotCreated from '../../assets/img/user_not_created.json';
import { Link } from 'react-router-dom';
import { IoIosArrowBack } from 'react-icons/io';

const UserNotCreated = () => {
  return (
    <div className="p-5">
      <Link to="/registration">
        <button className="bg-blue-600 p-4 rounded-full text-white">
          <IoIosArrowBack className="text-xl" />
        </button>
      </Link>
      <div className="mt-28">
        <Lottie animationData={userNotCreated} loop={true} />
      </div>
      <div>
        <h1 className="text-center text-xl font-extrabold text-blue-600 mt-8">
          USER NOT CREATED
        </h1>
        <p className="text-center mt-5">
          Please back to the registration page ..!
        </p>
      </div>
    </div>
  );
};

export default UserNotCreated;
