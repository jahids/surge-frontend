import { AiFillHeart } from 'react-icons/ai';
import { FaComment } from 'react-icons/fa';

const SocialLikeCommentsBtn = () => {
  return (
    <div className="mt-5 flex items-center space-x-3">
      <button className="bg-gray-100 px-4 py-2 rounded-full text-sm flex items-center space-x-1">
        <AiFillHeart className="text-gray-400" />
        <small>5</small>
      </button>
      <button className="bg-gray-100 px-4 py-2 rounded-full text-sm flex items-center space-x-1">
        <FaComment className="text-gray-400" />
        <small>5</small>
      </button>
    </div>
  );
};

export default SocialLikeCommentsBtn;
