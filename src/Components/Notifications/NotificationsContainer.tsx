import NotificationsBody from './NotificationsBody/NotificationsBody';
import NotificationsTitle from './NotificationsTitle/NotificationsTitle';

const NotificationsContainer = () => {
  return (
    <div className="p-5">
      <section>
        <NotificationsTitle />
      </section>
      <section>
        <NotificationsBody />
      </section>
    </div>
  );
};

export default NotificationsContainer;
