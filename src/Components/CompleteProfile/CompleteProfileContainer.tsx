import BackNotificationBtn from './BackNotificationBtn/BackNotificationBtn';
import EditProfile from './EditProfile/EditProfile';
import NavigateListItem from './NavigateListItem/NavigateListItem';
import UserInfo from './UserInfo/UserInfo';

const CompleteProfile = () => {
  return (
    <div className="p-5 min-h-screen ">
      <section>
        <BackNotificationBtn />
      </section>
      <section>
        <UserInfo />
      </section>
      <section>
        <EditProfile />
      </section>
      <section>
        <NavigateListItem />
      </section>
    </div>
  );
};

export default CompleteProfile;
