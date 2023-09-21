const SocialPostBadge = () => {
  return (
    <div className="mt-5 bg-gray-100 p-3 rounded-lg">
      <div className="flex items-center space-x-2">
        <div className="object-cover">
          <img
            className="w-7 h-7 rounded-full"
            src="https://s3.amazonaws.com/cdn.designcrowd.com/blog/100-Famous-Brand%20Logos-From-The-Most-Valuable-Companies-of-2020/apple-logo.png"
            alt=""
          />
        </div>
        <div>
          <p className="text-sm">Bought more</p>
          <p className="text-sm">
        
            <span className="font-bold">MSCI ACWI</span> at $66.17
          </p>
        </div>
      </div>
    </div>
  );
};

export default SocialPostBadge;
