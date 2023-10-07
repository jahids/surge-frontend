/* eslint-disable  */
import { BsArrowLeft } from 'react-icons/bs';
import companyLogo from '../../assets/img/logo.svg';
import surgelogo from '../../assets/img/surge.png';
import { useNavigate } from 'react-router';
import { useState } from 'react';
import { instance } from '../../lib/AxiosInstance';
import { notifyError } from '../../lib/Toastify';
import { useCookies } from 'react-cookie';

const LoginFrom = () => {
  const [, setCookie] = useCookies();
  
  const navigate = useNavigate();
  const [email, setemail] = useState('');
  const [password, setpassword] = useState('');

  const handlelogin = async (e : any) => {
    e.preventDefault()
    const payload = {
      email,
      password,
    };
    try {
      const data = await instance.post(`signin`, {
        ...payload,
      });

      console.log("data api", data?.data);
     
      console.log('data', data?.data?.data?.multiStepCompleted);
      setCookie('mytoken', data?.data?.data?.token, {
        secure: false,
      });
      setCookie('email', data?.data?.data?.email, {
        secure: false,
      });
      setCookie('dbid', data?.data?.data?.dbId, {
        secure: false,
      });
      if(data?.data?.data?.multiStepCompleted === true){
        navigate('/main')
      }else {
        navigate('/multistep')
      }
      

    
    } catch (error) {
      console.log('error', error);
      notifyError(error?.response?.data?.error)
    }
  };

  return (
    <div className="p-5">
      <div>
        {/* -- back btn start --- */}
        {/* <div className="w-10 h-10 bg-white border-2 rounded-full  flex items-center justify-center">
          <BsArrowLeft className="text-red-600 font-medium" />
        </div> */}
        {/* -- back btn end --- */}

        {/* --- company logo start ---  */}
        <div className="mt-10">
          <img style={{marginLeft : "-19px"}} className="w-[150px] " src={surgelogo} alt="company_logo" />
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
              onChange={e => setemail(e.target.value)}
              type="email"
              placeholder="Email address"
              className="input input-bordered w-full max-w-lg rounded-[21px] focus:outline-none focus:ring-2 focus:ring-[#908FEC]"
            />
          </div>
          <div className="form-control max-w-lg mb-5">
            <input
              onChange={e => setpassword(e.target.value)}
              type="password"
              placeholder="Password"
              className="input w-full input-bordered max-w-lg rounded-[21px] focus:outline-none focus:ring-2 focus:ring-[#908FEC]"
            />
          </div>

          <div className="mt-16">
            <button
              onClick={(e)=>handlelogin(e)}
              className="btn btn-active btn-primary w-full mt-5 rounded-[21px]"
            >
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
