import { useEffect } from 'react';
import useApi from '../../Hooks/useApi';
import BackNotificationBtn from './BackNotificationBtn/BackNotificationBtn';
import EditProfile from './EditProfile/EditProfile';
import NavigateListItem from './NavigateListItem/NavigateListItem';
import UserInfo from './UserInfo/UserInfo';
import Loader from '../Loader/Loader';
import { getdbId } from '../../Services/Cookie.service';

const CompleteProfile = () => {
  const [api, response] = useApi();
  useEffect(() => {
    const singleItemCall = async () => {
      try {
        const data = await api.get(`/accounts`);
        // Depending on your use case, you may want to setState or perform other actions
        // setState(data.someValue); // Uncomment and implement as needed
      } catch (error) {
        console.log('error', error);
      }
    };

    singleItemCall();
  }, []); // Include api and state in the dependency array

  console.log('my data response', response);
  const id = getdbId();
  console.log('dbid', id);

  if (response?.loading) {
    return <Loader />;
  }

  if (response?.error) {
    return <p>errror</p>;
  }

  return (
    <div className="p-5 min-h-screen ">
      <section>
        <BackNotificationBtn />
      </section>
      <section>
        <UserInfo userdata={response?.data?.data} />
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
