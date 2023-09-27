import { useEffect, useState } from 'react';
import FriendDoneBtn from './FriendDoneBtn/FriendDoneBtn';
import FriendListsItems from './FriendListsItems/FriendListsItems';
import FriendListsSearch from './FriendListsSearch/FriendListsSearch';
import { IFriendListItem, getSelfData, getUserList } from '../../Services/User.service';

const FriendListsContainer = () => {

  const [searchText , setSearchText ] = useState('');
  const [userList , setUsers] = useState<IFriendListItem[] | null>(null);
  const [myPaca,setMyPaca] = useState('');
  const [followlist,setFollowList]  = useState<[string]>();

  const handleSearch = (value)=>{
    console.log(`searching 🔎 : ${value}`)
  }
  //'65115b678407c2a27a906b33', '650be13378a5d532229f3b2e'
  useEffect(()=>{
    const dataCall = async ()=>{
      const {data : myData} = await getSelfData();
      if(myData?.db.following){
          setFollowList(myData.db.following);
        }
        const _list = await getUserList();
        const result = _list?.filter(v => v.dbId!= myData.db._id);

        // console.log(result);
        console.log(`👨`,result);
        if(result){

          setUsers(result);
        }
    };
    dataCall();
  },[]);
  return (
    <div className="p-5">
      
      <section>
        {/* <AssetsSearch /> */}
        <FriendListsSearch searchFn = {handleSearch}  />
      </section>
      <section>
        {/* <AssetsList /> */}
        {
          userList ?
          (
            userList.map( v =>{
             return <FriendListsItems key={Math.random()} id={v.dbId}  isFriend={followlist?.includes(v.dbId)} imgSrc={v.pfp} name={v.name}  platfromAge={v.created_at} />
            })
          )
          : null
        }
      </section>
      <section className="">
        {/* <DoneBtn /> */}
        {/* <FriendDoneBtn /> */}
      </section>
    </div>
  );
};

export default FriendListsContainer;
