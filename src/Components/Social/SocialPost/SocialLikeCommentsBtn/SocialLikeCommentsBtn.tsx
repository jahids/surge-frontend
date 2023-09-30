import { CSSProperties, useState } from 'react';
import { AiFillHeart } from 'react-icons/ai';
import { FaComment } from 'react-icons/fa';
import { getdbId } from '../../../../Services/Cookie.service';
import { instance } from '../../../../lib/AxiosInstance';
import { Link } from 'react-router-dom';

const selected: CSSProperties = {
  backgroundColor: '#ffebee',
  color: '#ff2b5b',
};

const SocialLikeCommentsBtn = ({ data, postId, userdata }: any) => {
  // console.log(`🎨🎭`,data);
  const myId = getdbId();
  const [selection, setSelection] = useState(data?.like?.includes(myId));
  const [lCount, setLCount] = useState(data?.like.length ?? 0);
  const handleLike = () => {
    setSelection(pr => !pr);
    setLCount(pr => pr + (selection ? -1 : 1));
    instance.get(`/social/post/${postId}/like`).catch(er => console.log(er));
    console.log(`liking ${'now'}`, data);
  };

  const selectedClass = `bg-pink-100 px-4 py-2 rounded-full text-sm flex items-center space-x-1`;
  const deSelectedClass = `bg-gray-100 px-4 py-2 rounded-full text-sm flex items-center space-x-1`;

  return (
    <div className="mt-5 flex items-center space-x-3">
      <button
        onClick={handleLike}
        className={selection ? selectedClass : deSelectedClass}
      >
        <AiFillHeart
          className={selection ? 'text-pink-500' : 'text-gray-500'}
        />
        <small> {lCount} </small>
      </button>
      <Link to={`/post/${postId}`} state={{ userId: userdata }}>
        <button className="bg-gray-100 px-4 py-2 rounded-full text-sm flex items-center space-x-1">
          <FaComment className="text-gray-400" />
          <small> {data?.comments.length} </small>
        </button>
      </Link>
    </div>
  );
};

export default SocialLikeCommentsBtn;
