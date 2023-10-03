import React, { useEffect, useState } from 'react';
import { instance } from '../../lib/AxiosInstance';
import Trades from '../../Components/userprofileComponent/Trades';
import BackButton from '../../Components/globalBackButton/BackButton';
import CustomLottie from '../../Utils/CustomLottie';
import { singlecardall } from '../../Utils/Skeleton';
import Loader from '../../Components/Loader/Loader';
// import animationloader from '../../assets/img/skeletonloader.json';

function Activity() {
  const [tradesdata, settradesdata] = useState([]);
  const [activityloader, setactivityloader] = useState(true);

  useEffect(() => {
    const trades = async () => {
      try {
        const { data } = await instance(`portfolio/trade-activity`);
        settradesdata(data?.data);
        setactivityloader(false);
        console.log('--->', data?.data);
      } catch (error) {
        console.log('🍗🍖', error);
        setactivityloader(false);
      }
    };
    trades();
  }, []);

  if (activityloader) {
    //return <CustomLottie animationData={singlecardall} />;
    return <Loader />;
  }

  return (
    <div>
      <div className="px-4">
        {' '}
        <BackButton />
      </div>

      <div className="mb-5 px-4">
        <h1 className="text-3xl font-bold">Activity</h1>
      </div>

      {tradesdata?.length > 0 &&
        tradesdata?.map(item => <Trades data={item} />)}
    </div>
  );
}

export default Activity;
