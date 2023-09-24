import SocialHeader from './SocialHeader/SocialHeader';
import SocialPost from './SocialPost/SocialPost';

const SocialContainer = () => {
  return (
    <div className="px-5 pb-[100px] min-h-screen">
      <section>
        <SocialHeader />
      </section>
      <section>
        <SocialPost />
      </section>
    </div>
  );
};

export default SocialContainer;
