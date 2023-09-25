import SocialLikeCommentsBtn from './SocialLikeCommentsBtn/SocialLikeCommentsBtn';
import SocialPostBadge from './SocialPostBadge/SocialPostBadge';
import SocialPostText from './SocialPostText/SocialPostText';
import SocialUserInfo from './SocialUserInfo/SocialUserInfo';

const SocialPost = ({postData }: any) => {
  console.log(postData)
  return (
    <div className="mt-3 mb-3 bg-white-500" >
      <div>
        <SocialUserInfo user={postData?.user[0]} />
      </div>
      <div>
        <SocialPostBadge  />
      </div>
      <div>
        <SocialPostText text ={postData?.text}/>
      </div>
      <div>
        <SocialLikeCommentsBtn likeCount={postData?.like.length} commentCount = {postData?.comments.length} />
      </div>
    </div>
  );
};

export default SocialPost;
