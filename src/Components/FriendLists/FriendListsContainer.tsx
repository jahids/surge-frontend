import FriendDoneBtn from './FriendDoneBtn/FriendDoneBtn';
import FriendListsItems from './FriendListsItems/FriendListsItems';
import FriendListsSearch from './FriendListsSearch/FriendListsSearch';

const FriendListsContainer = () => {
  return (
    <div className="p-5">
      <section>
        {/* <AssetsSearch /> */}
        <FriendListsSearch />
      </section>
      <section>
        {/* <AssetsList /> */}
        <FriendListsItems />
      </section>
      <section className="">
        {/* <DoneBtn /> */}
        <FriendDoneBtn />
      </section>
    </div>
  );
};

export default FriendListsContainer;
