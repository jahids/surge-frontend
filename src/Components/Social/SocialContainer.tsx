import { useEffect, useState } from 'react';
import SocialHeader from './SocialHeader/SocialHeader';
import SocialPost from './SocialPost/SocialPost';
import { instance } from '../../lib/AxiosInstance';
import Loader from '../Loader/Loader';
import { getDbData } from '../../Services/User.service';

const SocialContainer = () => {
  const [postList, setPostList] = useState([]);
  const [loading, setloading] = useState(true);
  const owndb = getDbData();
  console.log('db data', owndb);

  useEffect(() => {
    const dataCall = async () => {
      const {
        data: { data },
      } = await instance.get(`/social/posts/following`);
      setPostList(data);
      console.log(`all data : `, postList);
      setloading(false);
    };
    dataCall();
  }, [postList?.length]);

  console.log('post list gif links', postList);

  if (loading) {
    return <Loader />;
  }
  return (
    <div className="px-5 pb-[100px] min-h-screen">
      <section>
        <SocialHeader />
      </section>
      <section>
        {postList.length
          ? postList?.map((v: any) => {
            return (
              <SocialPost key={Math.random()} postData={v} links={v?.links} />
            );
          })
          : null}
      </section>
    </div>
  );
};

export default SocialContainer;
