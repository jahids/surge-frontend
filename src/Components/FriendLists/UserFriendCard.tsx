/* eslint-disable  */
import { useEffect, useState } from 'react';
import FriendDoneBtn from './FriendDoneBtn/FriendDoneBtn';
import FriendListsItems from './FriendListsItems/FriendListsItems';
import FriendListsSearch from './FriendListsSearch/FriendListsSearch';
import {
  IFriendListItem,
  getSelfData,
  getSingleUser,
  getUserList,
} from '../../Services/User.service';
import { getdbId } from '../../Services/Cookie.service';
import animationloader from '../../assets/img/skeletonloader.json';
import Lottie from 'lottie-react';
import { useNavigate } from 'react-router-dom';
const defaultImg = `https://www.gravatar.com/avatar/00000000000000000000000000000000?d=retro&f=y`;
const UserFriendCard = ({ dbId }: any) => {
  const [myPaca, setMyPaca] = useState('');
  const [followlist, setFollowList] = useState<[string]>();
  const [name, setName] = useState('');
  const [pfp, setPfp] = useState(defaultImg);
  const [db, setDb] = useState();
  const [portfolioValue, setPortfolioValue] = useState(Math.random() * 10);
  const [friendlistloader, setfriendlistloader] = useState(true)


  const navigate = useNavigate();


  //'65115b678407c2a27a906b33', '650be13378a5d532229f3b2e'
  useEffect(() => {
    const dataCall = async () => {
      const { data: myData } = await getSingleUser(dbId);
      const { alpaca: { identity }, db } = myData;
      setName(identity.given_name + " " + identity.family_name);
      setDb(db);
      console.log(`⚽`, myData);
      setPfp(db?.pfp || defaultImg);
      setfriendlistloader(false)
    };
    dataCall();
  }, []);
  // console.log(`🎁`,data);
  if (friendlistloader) {
    return <Lottie animationData={animationloader} loop={true} />
  }
  return (

    <div onClick={() => {
      navigate(`/userprofile/${db?._id}`, { state: { from: 'main' } });
    }} className="mt-4">
      <div className="flex items-center justify-between mb-5">
        <div className="flex items-center">
          <div>
            <img
              className="w-12 h-12 p-1 rounded-full bg-gray-100 object-contain"
              src={pfp}
              alt=""
            />
          </div>
          <div className="mx-5">
            <p className="font-bold"> {name} </p>
            {/* <p className="text-gray-400 text-sm"> {accountAge} </p> */}
          </div>
        </div>
        <div>
          <div>
            <button
              className={
                portfolioValue < 0
                  ? 'bg-red-200 py-2 px-2 rounded-full text-red-800 text-xs font-semibold'
                  : 'bg-green-200 py-2 px-2 rounded-full text-green-800 text-xs font-semibold'
              }
            >
              {`${Number(portfolioValue) > 0 ? '+' : ''} ${Number(
                portfolioValue
              ).toFixed(2)}`}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserFriendCard;
