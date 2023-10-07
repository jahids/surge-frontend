
import { useEffect, useState } from 'react';
import EmptyNotificationsBody from './NotificationsBody/EmptyNotificationsBody';
import NotificationsTitle from './NotificationsTitle/NotificationsTitle';
import { instance } from '../../lib/AxiosInstance';
import NotificationList from './NotificationsBody/NotificationList';
import CompanyShimmerLoader from '../ShimmerLoaders/CompanyShimmer/Companyshimmer';
import UserShimmerLoader from '../ShimmerLoaders/UserShimmer/UserShimmer';
UserShimmerLoader
const NotificationsContainer = () => {
  const [notificationList, setNotificationList] = useState<any>();
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const dbCall = async () => {
      const { data: { data: list } } = await instance.get(`/notification`);
      setNotificationList(list);
      setLoading(false);
    };
    dbCall();
  }, []);
  if (loading) {
    return <div className="p-5">
      <section>
        <NotificationsTitle />
      </section>
      <div className='flex flex-row justify-between'>
        <h1 className="text-3xl font-bold">Notifications</h1>
      </div>
      <UserShimmerLoader />;
    </div>
  }
  return (
    <div className="p-5">
      <section>
        <NotificationsTitle />
      </section>
      <section>
        {
          notificationList?.length ? <NotificationList dataList={notificationList} /> : <EmptyNotificationsBody />
        }

      </section>
    </div>
  );
};

export default NotificationsContainer;
