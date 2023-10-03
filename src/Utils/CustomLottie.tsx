import React from 'react';
import Lottie from 'lottie-react';

const CustomLottie = ({ animationData }: any) => {
  return (
    <div className="flex items-center h-screen">
      <div>
        <Lottie animationData={animationData} loop={true} />
      </div>
    </div>
  );
};

export default CustomLottie;
