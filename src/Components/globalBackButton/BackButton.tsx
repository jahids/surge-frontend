/* eslint-disable */
import { MdOutlineArrowBackIos } from 'react-icons/md';
import { Link, useNavigate } from 'react-router-dom';

function BackButton({ nav }: any) {
  console.log('--,', nav);
  const navigate = useNavigate();
  return (
    <section>
      <div className="flex items-center justify-between  py-5">
        <div onClick={() => navigate(nav ? nav : -1)}>
          <div>
            <MdOutlineArrowBackIos className="text-2xl text-gray-500" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default BackButton;
