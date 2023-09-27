import { useEffect, useState } from 'react';
import SocialHeader from './SocialHeader/SocialHeader';
import SocialPost from './SocialPost/SocialPost';
import { instance } from '../../lib/AxiosInstance';
import nofound from '../../assets/img/socialnotfound.json';
import Lottie from 'lottie-react';
import { Link } from 'react-router-dom';

const SocialContainer = () => {
  const [postList, setPostList] = useState([]);
  useEffect(() => {
    const dataCall = async () => {
      const {
        data: { data },
      } = await instance.get(`/social/posts/following`);
      setPostList(data);
    };
    dataCall();
  }, [postList.length]);

  return (
    <div className="px-5 pb-[100px] min-h-screen">
      <section>
        <SocialHeader />
      </section>
      <section>
        {postList?.length > 0 ? (
          postList.map(v => {
            return <SocialPost key={Math.random()} postData={v} />;
          })
        ) : (
          <div className="flex flex-col items-center justify-center">
            <div className="mb-4">
              <div>
                <Lottie animationData={nofound} loop={true} />
              </div>
            </div>
            <div className="mt-4">
              <Link
                to="/main" // Replace with your home route
                className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition duration-300"
              >
                Back to Home
              </Link>
              <Link
                to="/friend-list" // Replace with your follow friends route
                className="px-4 py-2 ml-4 bg-gray-500 text-white rounded hover:bg-gray-600 transition duration-300"
              >
                Follow Friends
              </Link>
            </div>
          </div>
        )}
      </section>
    </div>
  );
};

export default SocialContainer;
