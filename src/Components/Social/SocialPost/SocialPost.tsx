import SocialLikeCommentsBtn from './SocialLikeCommentsBtn/SocialLikeCommentsBtn';
import SocialPostBadge from './SocialPostBadge/SocialPostBadge';
import SocialPostText from './SocialPostText/SocialPostText';
import SocialUserInfo from './SocialUserInfo/SocialUserInfo';

const SocialPost = () => {
  return (
    <div className="mt-3">
      <div>
        <SocialUserInfo />
      </div>
      <div>
        <SocialPostBadge />
      </div>
      <div>
        <SocialPostText />
      </div>
      <div>
        <SocialLikeCommentsBtn />
      </div>
    </div>
  );
};

export default SocialPost;
