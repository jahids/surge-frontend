/* eslint-disable no-unsafe-optional-chaining */
import { useState, useEffect, SetStateAction } from 'react';
import OtpInput from 'react-otp-input';
import { useLocation, useNavigate } from 'react-router';
import { instance } from '../../lib/AxiosInstance';
import { useCookies } from 'react-cookie';
import { notifyError, notifySuccess } from '../../lib/Toastify';
const Otp = () => {
  const [, setCookie] = useCookies(['token']);
  const location = useLocation();
  const [otp, setOtp] = useState('');
  console.log('cred', location.state);

  const navigate = useNavigate();

  useEffect(() => {
    const otprequest = async () => {
      try {
        const OtpRequestCall = await instance.post(`/otp/send`, {
          email: location.state.email,
        });
        console.log('otp send', OtpRequestCall);
        const { success, message } = OtpRequestCall?.data;
        if (success === true) {
          notifySuccess(message);
        }
      } catch (error) {
        console.log('otp error', error);
      }
    };
    otprequest();
  }, []);

  const handleChange = (code: SetStateAction<string>) => {
    setOtp(code);
    console.log(code);
  };

  const otpSubmit = async () => {
    console.log('otp code', otp);
    if (otp) {
      try {
        const OtpVerify = await instance.post(`/otp/verify`, {
          email: location.state.email,
          otp,
        });
        if (OtpVerify?.data?.success === true) {
          const signupCall = await instance.post(`/signup/user`, {
            email: location.state.email,
            password: location.state.password,
          });
          console.log('signupCall', signupCall);
          setCookie('mytoken', signupCall?.data?.data?.token, {
            path: '/',
            secure: true,
            sameSite: 'none',
          });

          navigate('/multistep', { state: signupCall?.data?.data?.email });
        } else {
          console.log('signup not working');
        }

        console.log('verfied', OtpVerify);
      } catch (error) {
        console.log('otp error', error);
        notifyError(error?.response?.data?.error);
      }
    }
  };

  return (
    <div
      style={{ width: '300px', height: '300px' }}
      className="otp my-40 bg-[#f3f3f3] mx-auto p-3 rounded shadow"
    >
      <div className="text-center">
        <h1 className="text-2xl my-3 font-semibold">OTP Verification</h1>
        <p>Enter the OTP you received at</p>
        <p className="mt-3">
          <strong>EMAIL</strong>
        </p>
      </div>
      <div className="my-10">
        <OtpInput
          onChange={handleChange}
          value={otp}
          numInputs={4}
          renderSeparator={<span style={{ width: '8px' }}></span>}
          renderInput={props => (
            <input
              {...props}
              style={{
                width: '3rem',
                height: '3rem',
                color: '#570DF8',
                fontWeight: 'bold',
              }}
              className="mx-auto rounded text-black text-center"
            />
          )}
        />
      </div>
      <div className="text-center">
        <button
          onClick={otpSubmit}
          className="btn-sm btn-primary rounded shadow"
        >
          Submit
        </button>
      </div>
    </div>
  );
};

export default Otp;
