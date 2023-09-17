import Lottie from 'lottie-react';
import notFound from '../../assets/img/not_found.json';

const NotFoundPage = () => {
  return (
    <div>
      <Lottie animationData={notFound} loop={true} />
    </div>
  );
};

export default NotFoundPage;
