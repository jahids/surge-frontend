/* eslint-disable jsx-a11y/no-static-element-interactions */
import { HiUsers } from 'react-icons/hi';
import { MdVerified } from 'react-icons/md';
import { calculateAccountAge } from '../../../../Utils/converter';
import { useNavigate } from 'react-router-dom';

const defaultPfp = `https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fHByb2Zlc3Npb25hbCUyMHByb2ZpbGV8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60`;

const SocialUserInfo = ({ user, postDate, name }) => {
  console.log('🎁🎀🎀🎁', user);

  const navigate = useNavigate();
  const finalPfp = user?.pfp || defaultPfp;

  const dayCount = calculateAccountAge(new Date(postDate));
  return (
    <div
      onClick={() => {
        navigate(`/userprofile/${user?._id}`);
      }}
      className="flex items-center space-x-2"
    >
      <div className="rounded-full flex items-center justify-center ">
        <img
          className="object-fill rounded-full w-10 h-10"
          src={finalPfp}
          alt="user_img"
        />
      </div>
      <div>
        <div className="flex items-center space-x-2">
          <p className="text-sm font-semibold"> {name} </p>
          {/* <MdVerified className="text-blue-500" /> */}
          {/* <p className="text-xs font-semibold text-gray-400">@quentinwirtz</p> */}
        </div>
        <div className="flex items-center space-x-1">
          <p className="text-sm text-gray-400">
            {' '}
            {dayCount == '' ? 'Today' : dayCount} ago
          </p>
          <HiUsers className="text-gray-400" />
        </div>
      </div>
    </div>
  );
};

export default SocialUserInfo;
