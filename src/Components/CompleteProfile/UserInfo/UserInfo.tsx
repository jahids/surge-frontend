const UserInfo = ({ userdata }: any) => {
  console.log('user info', userdata?.alpaca);

  return (
    <div className="mt-5">
      <div>
        <img
          className="w-24 h-24 rounded-full bg-gray-300 flex items-center justify-center"
          src={userdata?.db?.pfp}
          alt=""
        />
      </div>
      <div>
        {/* --- name start --- */}
        <div className="mt-4 leading-6">
          <p className="text-lg font-bold">
            {userdata?.alpaca?.identity?.given_name +
              ' ' +
              userdata?.alpaca?.identity?.family_name}
          </p>
          <p className="text-gray-400 text-md">
            {userdata?.alpaca?.contact?.email_address}
          </p>
        </div>
        {/* --- name end --- */}
        {/* --- followers following start --- */}
        <div className="flex items-center mt-6">
          <div>
            <p className="text-sm font-medium">
              {userdata?.db?.following?.length}{' '}
              <span className="text-gray-400">Following</span>
            </p>
          </div>
        </div>
        {/* --- followers following end --- */}
      </div>
    </div>
  );
};

export default UserInfo;
