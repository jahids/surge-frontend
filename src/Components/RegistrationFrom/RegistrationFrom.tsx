import { BsArrowLeft } from 'react-icons/bs';
import companyLogo from '../../assets/img/logo.svg';

const LoginFrom = () => {
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
          <img
            className="w-[150px] h-auto"
            src={companyLogo}
            alt="company_logo"
          />
        </div>
        {/* --- company logo end ---  */}
        {/* --- getting start --- */}
        <div className="mt-10">
          <h5 className="text-xl font-semibold text-[#03314B]">
            Getting Started
          </h5>
          <p className="mt-3 text-sm text-[#8198A5]">
            Create an account to continue!
          </p>
        </div>
        {/* --- getting end ---  */}

        {/* --- form area start --- */}
        <form action="" className="mt-10">
          <div className="form-control w-full max-w-lg  mb-5">
            <input
              type="text"
              placeholder="Full name"
              className="input input-bordered rounded-[21px] focus:outline-none focus:ring-2 focus:ring-[#908FEC] w-100"
            />
          </div>
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

          <div className="mb-5 flex justify-start items-center">
            <input
              type="checkbox"
              checked={true}
              className="checkbox checkbox-primary"
            />

            <div className="mx-2">
              <small className="text-[12px]">
                I agree to the{' '}
                <span className="text-[#3500D4]">
                  Terms of Service and Privacy Policy
                </span>
              </small>
            </div>
          </div>

          <div className="">
            <button className="btn btn-active btn-primary w-full mt-5 rounded-[21px]">
              Registration
            </button>
          </div>
        </form>
        {/* --- form area end --- */}

        {/* --- sign in bottom text start --- */}
        {/* --- sign in bottom text start --- */}
        <div className="mt-10 text-center">
          <p className="text-[#03314B]">
            Already have an account ?{' '}
            <span className="text-[#3500D4]">Sign in</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default LoginFrom;
