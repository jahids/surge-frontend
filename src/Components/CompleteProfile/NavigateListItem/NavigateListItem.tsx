import { BiSolidUser, BiLogOutCircle } from 'react-icons/bi';
import { ImClock2 } from 'react-icons/im';
import { FaAddressBook } from 'react-icons/fa';
import { MdDarkMode } from 'react-icons/md';
import { BsQuestionOctagonFill } from 'react-icons/bs';
import { useNavigate } from 'react-router-dom';

const NavigateListItem = () => {
  const navigate = useNavigate();
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
            <span className="mx-3 text-md font-bold">Statements</span>
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
            <span className="mx-3 text-md text-red-500 font-bold ">
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
