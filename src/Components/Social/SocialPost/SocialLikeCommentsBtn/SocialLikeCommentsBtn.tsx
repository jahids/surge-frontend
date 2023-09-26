import { CSSProperties, useState } from 'react';
import { AiFillHeart } from 'react-icons/ai';
import { FaComment } from 'react-icons/fa';

const selected : CSSProperties = {
  backgroundColor : '#ffebee',
  color : '#ff2b5b'
}


const SocialLikeCommentsBtn = ({data}:any) => {
  console.log(`🎨🎭`,data);
  const [selection,setSelection] = useState(false);
  const [lCount ,setLCount] = useState(data?.like.length ?? 0);
  const handleLike = ()=>{
    setSelection((pr)=> !pr);
    setLCount(pr => pr+(selection ? -1 : 1 ));
      console.log(`liking ${'now'}`,data)
  };

  const selectedClass = `bg-pink-100 px-4 py-2 rounded-full text-sm flex items-center space-x-1`;
  const deSelectedClass = `bg-gray-100 px-4 py-2 rounded-full text-sm flex items-center space-x-1`

  return (
    <div className="mt-5 flex items-center space-x-3">
      <button onClick={handleLike} className={selection ? selectedClass : deSelectedClass}>
        <AiFillHeart className={selection ? "text-pink-500" : "text-gray-500"}  />
        <small> {lCount} </small>
      </button>
      <button className="bg-gray-100 px-4 py-2 rounded-full text-sm flex items-center space-x-1">
        <FaComment className="text-gray-400" />
        <small> {data?.comments.length} </small>
      </button>
    </div>
  );
};

export default SocialLikeCommentsBtn;
