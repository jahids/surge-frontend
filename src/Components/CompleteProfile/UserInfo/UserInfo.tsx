const UserInfo = () => {
  return (
    <div className="mt-5">
      <div className="w-24 h-24 bg-gray-300 flex items-center justify-center rounded-full">
        <h1 className="text-2xl font-bold ">PH</h1>
      </div>
      <div>
        {/* --- name start --- */}
        <div className="mt-4 leading-6">
          <p className="text-lg font-bold">Piyash Hasan</p>
          <p className="text-gray-400 text-md">@piyash</p>
        </div>
        {/* --- name end --- */}
        {/* --- followers following start --- */}
        <div className="flex items-center mt-6">
          <div>
            <p className="text-sm font-medium">
              0 <span className="text-gray-400">Followers</span>
            </p>
          </div>
          <div className="mx-4">
            <p className="text-sm font-medium">
              0 <span className="text-gray-400">Following</span>
            </p>
          </div>
        </div>
        {/* --- followers following end --- */}
      </div>
    </div>
  );
};

export default UserInfo;
