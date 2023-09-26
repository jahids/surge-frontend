import { Link } from 'react-router-dom';
import SocialLikeCommentsBtn from './SocialLikeCommentsBtn/SocialLikeCommentsBtn';
import SocialPostBadge from './SocialPostBadge/SocialPostBadge';
import SocialPostText from './SocialPostText/SocialPostText';
import SocialUserInfo from './SocialUserInfo/SocialUserInfo';

const SocialPost = ({ postData }: any) => {
  console.log(`🎪🎭🎑`, postData)
  return (
    <div className="mt-3 mb-3 bg-white-500 p-2 rounded-md" style={{ boxShadow: '1px 1px 1px 1px #EAF6F6' }} >
      <div>
        <SocialUserInfo user={postData?.user[0]} postDate={postData.createdAt} />
      </div>
      <Link to={`/post/${postData._id}`}>
        <div>
          {/* stock info */}
          <SocialPostBadge order_id={postData.order_id} buyer_id = {postData.buyer_id} dbPrice = {postData.buying_price} />
        </div>
        <div>
          <SocialPostText text={postData?.text} />
        </div>
      </Link>
      <div>
        <SocialLikeCommentsBtn data={postData} />
      </div>
    </div>
  )
};

export default SocialPost;
