import { useEffect, useState } from 'react';
import { BiPlus } from 'react-icons/bi';
import { Link } from 'react-router-dom';
import { getSelfData, getUserFriendList } from '../../../Services/User.service';
import UserFriendCard from '../../FriendLists/UserFriendCard';
import { instance } from '../../../lib/AxiosInstance';

const FriendList = () => {
  const [followList, setFollowList] = useState<null | any[]>();
  //get users watch list top 3


  useEffect(() => {

    const dbCall = async () => {
      const data = await getUserFriendList(3);
      setFollowList(data);
    };
    dbCall();

  }, []);

  return (
    <div className="mt-10">
      <h1 className="text-xl font-bold">Friend List</h1>
      <p className="mt-1 text-sm text-gray-400">
        Follow to see their moves and insights
      </p>
      {/* --- watchlist start --- */}
      {followList?.length ? (
        <div>
          {followList?.map((v: any) => {
            return <UserFriendCard key={Math.random()} profileData={v} />;
          })}
          <div className="text-center mt-2">
            <Link to="/friend-list">
              <button className="bg-gray-200 px-3 py-2 rounded-full text-[13px] font-bold">
                See all
              </button>
            </Link>
          </div>
        </div>
      ) : (
        <Link to="/friend-list">
          <div className="flex items-center mt-7">
            <div className="w-10 h-10 bg-indigo-100 flex items-center justify-center rounded-full ml-1">
              <BiPlus className="text-2xl text-blue-800" />
            </div>
            <div className="mx-3">
              <p className="font-bold text-sm">Build your Follow Lists</p>
              <p className="text-sm text-gray-400 mt-1">
                Select which person to track
              </p>
            </div>
          </div>
        </Link>
      )}
      {/* --- watchlist end --- */}
    </div>
  );
};

export default FriendList;
