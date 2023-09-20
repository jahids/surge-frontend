import { FaUsers, FaChartLine } from 'react-icons/fa';
import { ImSearch } from 'react-icons/im';
import { NavLink } from 'react-router-dom';

const BottomNav = () => {
  return (
    <div className="fixed bottom-0 left-0 z-50 w-full h-16 bg-white border-t border-gray-200 ">
      <div className="grid h-full max-w-lg grid-cols-3 mx-auto font-medium">
        <NavLink
          to="/main"
          className={({ isActive }) =>
            isActive
              ? 'flex items-center justify-center bg-white text-[#6960F5] font-bold'
              : 'flex items-center justify-center'
          }
        >
          <FaChartLine className="w-10 h-6 mb-2 " />
        </NavLink>

        <NavLink
          to="/social"
          className={({ isActive }) =>
            isActive
              ? 'flex items-center justify-center bg-white text-[#6960F5] font-bold'
              : 'flex items-center justify-center'
          }
        >
          <FaUsers className="w-10 h-6 mb-2" />
        </NavLink>

        <NavLink
          to="/explore"
          className={({ isActive }) =>
            isActive
              ? 'flex items-center justify-center bg-white text-[#6960F5] font-bold'
              : 'flex items-center justify-center'
          }
        >
          <ImSearch className="w-10 h-6 mb-2" />
        </NavLink>
      </div>
    </div>
  );
};

export default BottomNav;
