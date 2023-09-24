import Lottie from 'lottie-react';
import loader from '../../assets/img/loader.json';

const Loader = () => {
  return (
    <div className="flex items-center h-screen">
      <div>
        <Lottie animationData={loader} loop={true} />
      </div>
    </div>
  );
};

export default Loader;
