/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import { BiSolidUser, BiLogOutCircle } from 'react-icons/bi';
import { ImClock2 } from 'react-icons/im';
import { FaAddressBook } from 'react-icons/fa';
import { MdDarkMode } from 'react-icons/md';
import { BsQuestionOctagonFill } from 'react-icons/bs';
import { useNavigate } from 'react-router-dom';
import { instance } from '../../../lib/AxiosInstance';
import { useCookies } from 'react-cookie';

const NavigateListItem = () => {
  const [, , removeCookie] = useCookies();
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      const data = await instance.get(`/signout`);
      // Remove cookies using the removeCookie function
      removeCookie('mytoken', { path: '/' });
      removeCookie('email', { path: '/' });
      removeCookie('dbid', { path: '/' });
      console.log('data', data);
    } catch (error) {
      console.log('error', error);
    }
  };
  return (
    // BiSolidUser
    <div className="mt-8">
      <hr />
      <div className="mt-8">
        <ul className="">
          <li className="flex items-center mb-4">
            <BiSolidUser className="text-xl" />{' '}
            <span className="mx-3 text-md font-bold">Profile</span>
          </li>

          <li className="flex items-center mb-4">
            <BiSolidUser className="text-xl" />{' '}
            <span
              className="mx-3 text-md font-bold"
              onClick={() => navigate('/addfund')}
            >
              Addfund
            </span>
          </li>
          <li className="flex items-center mb-4">
            <ImClock2 className="text-xl" />
            <span className="mx-3 text-md font-bold">Activity</span>
          </li>
          <li className="flex items-center mb-4">
            <FaAddressBook className="text-xl" />
            <span
              className="mx-3 text-md font-bold"
              onClick={() => navigate('/statement')}
            >
              Statements
            </span>
          </li>
          <li className="flex items-center mb-4">
            <MdDarkMode className="text-2xl" />
            <span className="mx-3 text-md font-bold">Appearance</span>
          </li>
          <li className="flex items-center mb-8">
            <BsQuestionOctagonFill className="text-xl" />
            <span className="mx-3 text-md font-bold">Support</span>
          </li>
        </ul>
      </div>
      <hr />
      <div className="mt-10">
        <ul>
          <li className="flex mb-4 items-center">
            <BiLogOutCircle className="text-3xl text-red-500" />{' '}
            <span
              onClick={handleLogout}
              className="mx-3 text-md text-red-500 font-bold "
            >
              Log out
            </span>
          </li>
        </ul>
      </div>

      <div className="mt-10">
        <div className="text-xs text-center">
          <span className="text-indigo-600">Terms & Conditions</span>{' '}
          <span>and</span>{' '}
          <span className="text-indigo-600">Regulatory Disclosures</span>
        </div>
        <div className="text-center mt-3">
          <p className="text-sm text-gray-500">Version 1.00.0</p>
        </div>
      </div>
    </div>
  );
};

export default NavigateListItem;
