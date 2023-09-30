import { useEffect, useState } from 'react';
import SocialHeader from './SocialHeader/SocialHeader';
import SocialPost from './SocialPost/SocialPost';
import { instance } from '../../lib/AxiosInstance';
// import nofound from '../../assets/img/socialnotfound.json';
// import Lottie from 'lottie-react';
// import { Link } from 'react-router-dom';

const SocialContainer = () => {
  const [postList, setPostList] = useState([]);

  useEffect(() => {
    const dataCall = async () => {
      const {
        data: { data },
      } = await instance.get(`/social/posts/following`);
      setPostList(data);
      console.log(`all data : `, postList);
    };
    dataCall();
  }, [postList?.length]);

  console.log('post list gif links', postList);

  return (
    <div className="px-5 pb-[100px] min-h-screen">
      <section>
        <SocialHeader />
      </section>
      <section>
        {postList.length &&
          postList?.map(v => {
            return (
              <SocialPost key={Math.random()} postData={v} links={v?.links} />
            );
          })}
      </section>
    </div>
  );
};

export default SocialContainer;
