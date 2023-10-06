
import { useEffect, useState } from 'react';
import EmptyNotificationsBody from './NotificationsBody/EmptyNotificationsBody';
import NotificationsTitle from './NotificationsTitle/NotificationsTitle';
import { instance } from '../../lib/AxiosInstance';
import NotificationList from './NotificationsBody/NotificationList';

const NotificationsContainer = () => {
  const [notificationList, setNotificationList] = useState<any>();
  useEffect(() => {
    const dbCall = async () => {
      const { data: { data: list } } = await instance.get(`/notification`);
      setNotificationList(list);
    };
    dbCall();
  }, []);
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
