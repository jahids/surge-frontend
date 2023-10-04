/* eslint-disable  */

import { useNavigate } from 'react-router-dom';
import UserShimmerLoader from '../ShimmerLoaders/UserShimmer/UserShimmer';
import UserFriendCardStats from './UserFriendCardStats';
import TextImage from '../TextImage/TextImage';
const defaultImg = `https://www.gravatar.com/avatar/00000000000000000000000000000000?d=retro&f=y`;


const UserFriendCard = ({ profileData }: any) => {
  const navigate = useNavigate();
  return (
    <div onClick={() => {
      navigate(`/userprofile/${profileData?._id}`, { state: { from: 'main' } });
    }} className="mt-4">
      <div className="flex items-center justify-between mb-5">
        <div className="flex items-center">
          <div>
            {
              profileData?.pfp ?
                <img
                  className="w-12 h-12 p-1 rounded-full bg-gray-100 object-contain"
                  src={profileData.pfp}
                  alt=""
                /> :
                <TextImage text={profileData.name} />
            }
          </div>
          <div className="mx-5">
            <p className="font-bold"> {profileData?.name} </p>
            {/* <p className="text-gray-400 text-sm"> {accountAge} </p> */}
          </div>
        </div>
        <div>
          <UserFriendCardStats dbId={profileData._id} />
        </div>
      </div>
    </div>

  );
};

export default UserFriendCard;
