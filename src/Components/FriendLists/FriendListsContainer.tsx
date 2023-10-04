/* eslint-disable  */
import { useEffect, useState } from 'react';
import FriendDoneBtn from './FriendDoneBtn/FriendDoneBtn';
import FriendListsItems from './FriendListsItems/FriendListsItems';

import { IFriendListItem, getSelfData, getUserFriendList, getUserList } from '../../Services/User.service';
import Loader from '../Loader/Loader';
import BackButton from '../globalBackButton/BackButton';
import { useNavigate } from 'react-router-dom';
import UserFriendCard from './UserFriendCard';

const FriendListsContainer = () => {
  const [isloading, setisloading] = useState(true)
  //'65115b678407c2a27a906b33', '650be13378a5d532229f3b2e'
  const [followList, setFollowList] = useState<null | any[]>();
  //get users watch list top 3
  useEffect(() => {
    const dbCall = async () => {
      const data = await getUserFriendList(0);
      setFollowList(data);
      setisloading(false);
    };
    dbCall();
  }, []);

  const navigate = useNavigate();

  if (isloading) {
    return < Loader />
  }
  return (
    <div className="p-5">
      <div className='flex w-100vw justify-between'>
        <BackButton py={'py-2'} />
        <button onClick={() => navigate(`/all-user-list`)} className="text-4xl text-gray-500">+</button>
      </div>
      <section className='mt-2'>
        <h1 className="text-xl font-bold">Friend Lists</h1>
        <p className="mt-1 text-sm text-gray-400">
          Follow to see their moves & insights
        </p>
      </section>
      <section>
        {followList?.map((v: any) => {
          return <UserFriendCard key={Math.random()} profileData={v} />;
        })}
      </section>

    </div>
  );
};

export default FriendListsContainer;
