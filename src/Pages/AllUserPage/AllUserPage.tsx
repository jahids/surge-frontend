/* eslint-disable  */
import { useEffect, useState } from 'react';
import { IFriendListItem, getDbUserList, getSelfData, getUserList } from '../../Services/User.service';
import BackButton from '../../Components/globalBackButton/BackButton';
import Loader from '../../Components/Loader/Loader';
import FriendListsItem from '../../Components/FriendLists/FriendListsItems/FriendListsItems';
import FriendListsSearch from '../../Components/FriendLists/FriendListsSearch/FriendListsSearch';

const AllUserPage = () => {
    const [searchText, setSearchText] = useState('');
    const [userList, setUsers] = useState<any | null>(null);

    const [followlist, setFollowList] = useState<[string]>();
    const [isloading, setisloading] = useState(true)
    const handleSearch = (value: string) => {
        console.log(`searching 🔎 : ${value}`);
        setisloading(true);
        getDbUserList(value).then(res => {
            console.log(`👨`, res);
            setUsers(res);
            setisloading(false)
        });
    }
    useEffect(() => {
        const dataCall = async () => {
            const { data: myData } = await getSelfData();
            if (myData?.db.following) {
                setFollowList(myData.db.following);
            }
            const _list = await getDbUserList('');
            console.log(`👨`, _list);
            if (_list) {
                setUsers(_list);
                setisloading(false)
            }
        };
        dataCall();
    }, []);

    if (isloading) {
        return < Loader />
    }
    return (
        <div className="p-5">
            {/* <BackButton /> */}
            <section>
                <FriendListsSearch searchFn={handleSearch} />
            </section>
            <section>
                {
                    userList ?
                        (
                            userList.map(v => {
                                return <FriendListsItem key={Math.random()} id={v._id} isFriend={followlist?.includes(v._id)} imgSrc={v.pfp} name={v.name} platfromAge={v.createdAt} />
                            })
                        )
                        : null
                }
            </section>
        </div>
    );
};

export default AllUserPage;
