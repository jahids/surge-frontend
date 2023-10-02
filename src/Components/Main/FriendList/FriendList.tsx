import { useEffect, useState } from 'react';
import { BiPlus } from 'react-icons/bi';
import { Link } from 'react-router-dom';
import { getSelfData } from '../../../Services/User.service';
import UserFriendCard from '../../FriendLists/UserFriendCard';

const FriendList = ({ selfData }: any) => {
  const [followList, setFollowList] = useState();
  //get users watch list

  // console.log(data,'🎇✨')
  useEffect(() => {
    const dataCall = async () => {
      // const {data : myData} = await getSelfData();
      // const myData = data;
      // setFollowList(data);
    };
    dataCall();
  }, []);
  return (
    <div className="mt-10">
      <h1 className="text-xl font-bold">Friend Lists</h1>
      <p className="mt-1 text-sm text-gray-400">
        {/* Start tracking your next opportunity */}
      </p>
      {/* --- watchlist start --- */}
      {selfData?.db?.following?.length ? (
        <div>
          {selfData.db.following.slice(0, 3).map((v: any) => {
            return <UserFriendCard key={Math.random()} dbId={v} />;
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
              <p className="font-bold text-sm">Build your Friend Lists</p>
              <p className="text-sm text-gray-400 mt-1">
                Select which stocks to track
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
