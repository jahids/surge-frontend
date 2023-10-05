/* eslint-disable */
import { Link } from 'react-router-dom';
import SocialLikeCommentsBtn from './SocialLikeCommentsBtn/SocialLikeCommentsBtn';
import SocialPostBadge from './SocialPostBadge/SocialPostBadge';
import SocialPostText from './SocialPostText/SocialPostText';
import SocialUserInfo from './SocialUserInfo/SocialUserInfo';
import { useEffect, useState } from 'react';
import { instance } from '../../../lib/AxiosInstance';

const SocialPost = ({ postData, links }: any) => {
  console.log(`🎪🎭🎑post data`, postData);
  console.log(`link props`, links);
  const [postUserName, setPosterName] = useState('');
  useEffect(() => {
    const dbCall = async () => {
      const {
        data: {
          data: { alpaca: auser, db },
        },
      } = await instance.get(`/accounts/cached/${postData?.user[0]._id}`);
      if (auser['trusted_contact']) {
        setPosterName(
          `${auser['trusted_contact']['given_name']} ${auser['trusted_contact']['family_name']}`
        );
      }
      // console.log(`🎇🎇🔥🚒👨‍🚒👨‍🚒👨‍🚒👨‍🚒🔥 ${postData.user[0]._id} 🔥🚒🚒👩‍🚒`,auser);
    };
    dbCall();
  }, [postData?.links?.length]);
  const postId = postData._id;
  return (
    <div
      className="mt-3 mb-3 bg-white-500 p-2 rounded-md"
      style={{ boxShadow: 'rgba(0, 0, 0, 0.09) 1.95px 1.95px 2.6px' }}
    >
      <div>
        <SocialUserInfo
          name={postUserName}
          user={postData?.user[0]}
          postDate={postData.createdAt}
        />
      </div>
      <Link
        to={`/post/${postData._id}`}
        state={{ userId: postData?.user[0]._id }}
      >
        <div>
          {/* stock info */}
          <SocialPostBadge
            symbolData={postData?.symbol[0]}
            order_type={postData?.order_type}
            order_id={postData.order_id}
            buyer_id={postData.buyer_id}
            dbPrice={postData.buying_price}
            order_side={postData.order_side}
          />
        </div>
        <div style={{ width: '80%', margin: '0px auto', marginTop: '8px' }}>
          {/* <img style={{ borderRadius: '12px' }} src={postData?.links?.pop() || links} /> */}
          <img style={{ borderRadius: '12px' }} src={postData?.links} />
        </div>
        <div>
          <SocialPostText text={postData?.text} />
        </div>
      </Link>
      <div>
        <SocialLikeCommentsBtn postId={postId} data={postData} userdata={postData?.user[0]._id} />
      </div>
    </div>
  );
};

export default SocialPost;
