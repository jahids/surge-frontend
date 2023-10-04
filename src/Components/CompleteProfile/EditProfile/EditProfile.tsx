import handWriting from '../../../assets/img/handwriting.png';

const EditProfile = () => {
  return (
    <div className="mt-10">
      <div className="bg-gray-100 p-5 rounded-2xl">
        <div className="flex items-center">
          <h1 className="font-bold">Complete your profile</h1>
          <img className="w-6 h-6 mx-1" src={handWriting} alt="" />
        </div>
        <p className="mt-3 text-sm">
          Add photo, bio and interests so others know you better
        </p>
      </div>
    </div>
  );
};

export default EditProfile;
