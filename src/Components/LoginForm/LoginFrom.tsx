import { BsArrowLeft } from 'react-icons/bs';
import companyLogo from '../../assets/img/logo.svg';
import { useNavigate } from 'react-router';

const LoginFrom = () => {
  const navigate = useNavigate();
  return (
    <div className="p-5">
      <div>
        {/* -- back btn start --- */}
        <div className="w-10 h-10 bg-white border-2 rounded-full  flex items-center justify-center">
          <BsArrowLeft className="text-red-600 font-medium" />
        </div>
        {/* -- back btn end --- */}

        {/* --- company logo start ---  */}
        <div className="mt-10">
          <img className="w-[150px]" src={companyLogo} alt="company_logo" />
        </div>
        {/* --- company logo end ---  */}
        {/* --- getting start --- */}
        <div className="mt-10">
          <h5 className="text-xl font-semibold text-[#03314B]">
            Let's Sign You In
          </h5>
          <p className="mt-3 text-sm text-[#8198A5]">
            Welcome back, you've been missed!
          </p>
        </div>
        {/* --- getting end ---  */}

        {/* --- form area start --- */}
        <form action="" className="mt-16">
          <div className="form-control max-w-lg mb-5 ">
            <input
              type="email"
              placeholder="Email address"
              className="input input-bordered w-full max-w-lg rounded-[21px] focus:outline-none focus:ring-2 focus:ring-[#908FEC]"
            />
          </div>
          <div className="form-control max-w-lg mb-5">
            <input
              type="password"
              placeholder="Password"
              className="input w-full input-bordered max-w-lg rounded-[21px] focus:outline-none focus:ring-2 focus:ring-[#908FEC]"
            />
          </div>

          <div className="mt-16">
            <button className="btn btn-active btn-primary w-full mt-5 rounded-[21px]">
              Login
            </button>
          </div>
        </form>
        {/* --- form area end --- */}

        {/* --- bottom text & link ---  */}
        <div className="mt-10 text-center">
          <small className="text-[12px]">
            Dont's have an account ?{' '}
            <span
              onClick={() => navigate('/registration')}
              className="text-[#1DCC98]"
            >
              Sign Up
            </span>
          </small>
        </div>
        {/* --- bottom text & link ---  */}
      </div>
    </div>
  );
};

export default LoginFrom;
