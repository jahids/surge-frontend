// import handWriting from '../../../assets/img/handwriting.png';

// const EditProfile = () => {
//   return (
//     <div className="mt-10">
//       <div className="bg-gray-100 p-5 rounded-2xl">
//         <div className="flex items-center">
//           <h1 className="font-bold">Complete your profile</h1>
//           <img className="w-6 h-6 mx-1" src={handWriting} alt="" />
//         </div>
//         <p className="mt-3 text-sm">
//           Add photo, bio and interests so others know you better
//         </p>
//       </div>
//     </div>
//   );
// };

// export default EditProfile;

import React, { useState } from 'react';
import { FaEdit } from 'react-icons/fa';
import { instance } from '../../../lib/AxiosInstance';
import { notifyError, notifySuccess } from '../../../lib/Toastify';

const EditProfile: React.FC = ({ dbData }: any) => {
  const [bio, setBio] = useState<string>(dbData?.db?.about_me || '');
  const [isEditing, setIsEditing] = useState<boolean>(false);

  const inputLimit = 160;

  const saveBio = async () => {
    try {

      // console.log(`bio = `, bio);
      const { data } = await instance.post('/user/about-me', ({ about_me: bio }));

      notifySuccess(`Your about me has be Updated!`, 2000);

    } catch (error) {
      console.error('Error updating bio:', error);
      notifyError(`Failed to update!`);
    }
    setIsEditing(false);
  };

  // console.log(`🔥🔥🔥 db data `, bio);

  return (
    <div className="w-full max-w-md mx-auto mt-10 relative">
      <label htmlFor="bio" className="block text-base font-semibold mb-2">About Me</label>

      {isEditing ? (
        <>
          <textarea
            id="bio"
            rows={5}
            value={bio}
            onChange={(e) => setBio(e.target.value)}
            className="w-full px-4 py-2 rounded-md focus:ring-2 focus:border-indigo-500 focus:outline-none"
            placeholder="Tell us about yourself..."
            maxLength={inputLimit}
          />
          <div className="text-right absolute right-0 bottom-8 text-sm text-gray-500 mt-2">
            {bio.length}/{inputLimit}
          </div>
          <button onClick={saveBio} className="mt-1 bg-indigo-500 text-white px-4 py-2 rounded hover:bg-blue-600">
            Save
          </button>
        </>
      ) : (
        <div className="w-full px-4 py-2 border rounded-md shadow-sm">
          {bio}
        </div>
      )}

      <button
        onClick={() => setIsEditing(!isEditing)}
        className="absolute top-2 right-2 text-blue-500 hover:text-blue-700"
        aria-label="Edit Bio"
      >
        <FaEdit size={20} />
      </button>
    </div>
  );

};

export default EditProfile;
