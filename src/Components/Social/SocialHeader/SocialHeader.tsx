import { BiSolidMessageRounded } from 'react-icons/bi';
import { useNavigate } from 'react-router';

const SocialHeader = () => {
  const navigate = useNavigate();
  return (
    <div className="py-8">
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-5">
          <div
            onClick={() => navigate('/profile')}
            className="w-8 h-8 rounded-full bg-gray-300 flex items-center justify-center"
          >
            <small>PH</small>
          </div>
          <div>
            <p className="text-3xl font-bold">Social</p>
          </div>
        </div>
        <div>
          {/* <div className="flex items-center justify-center w-10 h-10 bg-gray-200 rounded-full">
            <BiSolidMessageRounded className="text-2xl" />
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default SocialHeader;
