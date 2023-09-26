import { useEffect, useState } from 'react';
import SocialHeader from './SocialHeader/SocialHeader';
import SocialPost from './SocialPost/SocialPost';
import { instance } from '../../lib/AxiosInstance';

const SocialContainer = () => {
  const [postList,setPostList] = useState([]);
  useEffect(()=>{
    const dataCall = async ()=>{
        const {data:{data}} =  await instance.get(`/social/posts/following`)
        setPostList(data)
    };
    dataCall();
  },[postList.length]);
  return (
    <div className="px-5 pb-[100px] min-h-screen">
      <section>
        <SocialHeader />
      </section>
      <section>
        {
          postList.map(v =>{
            return <SocialPost key={Math.random()} postData = {v} />
          })
        }
        
      </section>
    </div>
  );
};

export default SocialContainer;
