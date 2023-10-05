import axios from "axios";
import { useRef, useState } from "react";
import { FaCloudUploadAlt } from "react-icons/fa";
import { ImUpload2 } from "react-icons/im";
import { MdCameraAlt, MdPhotoCamera } from "react-icons/md";
import { instance } from "../../../lib/AxiosInstance";
import TextImage from "../../TextImage/TextImage";
import { notifyError, notifySuccess } from "../../../lib/Toastify";




const UserInfo = ({ userdata }: any) => {
  console.log('user info', userdata?.db);


  const [pfp, setPfp] = useState(userdata?.db?.pfp);

  const fileInputRef = useRef<HTMLInputElement | null>(null);
  const handleFileChange = async () => {
    if (fileInputRef.current?.files?.length) {
      const formData = new FormData();
      formData.append('file', fileInputRef.current.files[0]);

      try {
        const response = await instance.post(`/others/file-up`, formData);

        if (response.status === 200) {
          console.log('File uploaded successfully');
          notifySuccess('photo uploaded');

          const { data: { data: { url } } } = response;
          setPfp(url);
          // console.log(response);
        } else {
          notifyError('file upload failed');
          console.error('File upload failed');
        }
      } catch (error) {
        notifyError('file upload failed');
        console.error('Error uploading file:', error);
      }
    }
  };

  return (
    <div className="mt-5">
      <div style={{ position: 'relative' }}>
        {
          pfp && pfp?.length ?
            <img
              className="w-32 h-32 rounded-full bg-gray-300 flex items-center justify-center"
              src={pfp}
              alt=""
            /> :
            <TextImage width={'110px'} height={'110px'} textSize={'3rem'} text={userdata?.db?.name || "user name"} />
        }
        <input
          type="file"
          ref={fileInputRef}
          style={{ display: 'none' }}
          onChange={handleFileChange}
        />
        <button onClick={() => fileInputRef.current?.click()} style={{ position: 'absolute', bottom: '0px', left: '5.2rem', backgroundColor: '#f3f4f6', borderRadius: '50%', padding: '4px' }}>

          <MdCameraAlt size={28} color={"#540463"} />
        </button>

      </div>
      <div>
        {/* --- name start --- */}
        <div className="mt-4 leading-6">
          <p className="text-lg font-bold">
            {userdata?.db?.name || "User Name"}
          </p>
          <p className="text-gray-400 text-md">
            {userdata?.alpaca?.contact?.email_address}
          </p>
        </div>
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
