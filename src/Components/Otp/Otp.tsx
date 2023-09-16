import { useState } from 'react';
import OtpInput from 'react-otp-input';

const Otp = () => {
  const [otp, setOtp] = useState('');

  const handleChange = code => {
    setOtp(code);
    console.log(code);
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
        <button className="btn-sm btn-primary rounded shadow">Submit</button>
      </div>
    </div>
  );
};

export default Otp;
