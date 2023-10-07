/* eslint-disable  */
import { BsArrowLeft } from 'react-icons/bs';
import companyLogo from '../../assets/img/logo.svg';
import surgelogo from '../../assets/img/surge.png';
import { useForm, Controller } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { Navigate, useNavigate } from 'react-router';
import { useState } from 'react';
import { HiEye, HiEyeOff } from 'react-icons/hi';
import { useRegisterUserMutation } from '../../features/user/userApiSlice';
import { useCookies } from 'react-cookie';
import { instance } from '../../lib/AxiosInstance';
import { notifyError, notifySuccess } from '../../lib/Toastify';

const RegistrationFrom = () => {
  const [, setCookie] = useCookies(['token']);
  const schema = yup.object().shape({
    email: yup.string().required('Email is required').email('Invalid email'),
    password: yup.string().required('Password is required'),
    confirmPassword: yup
      .string()
      .oneOf([yup.ref('password'), null], 'Passwords must match'),
    agreement: yup.boolean().oneOf([true], 'You must agree to the terms'),
  });
  
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword((prevShowPassword) => !prevShowPassword);
  };

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const navigate= useNavigate()
  // const [registerUser, { isLoading,isError,isSuccess}]= useRegisterUserMutation();

  // console.log(responsedata)
  const onSubmit = async (data : any) => {
    const payload = {
      email : data?.email,
      password : data?.password
     }
    try {

      const response = await instance.post(`/signup/exist`, {
        email: data.email,
      });
      console.log(response?.data);
      notifyError(response?.data?.message)
    } catch (error) {
      console.error(error?.response?.data);
     
      if(error?.response?.data?.success === false){
        //notifySuccess("Группа успешно создана!");
         navigate('/otp', {state : payload} )
        
        
      }
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
          <img
          style={{marginLeft : "-19px"}}
            className="w-[150px] h-auto"
            src={surgelogo}
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
        <form onSubmit={handleSubmit(onSubmit)} className="mt-10">
          <div className="form-control w-full max-w-lg  mb-5">
            <Controller
              name="email"
              control={control}
              defaultValue=""
              render={({ field }) => (
                <input
                  {...field}
                  type="email"
                  placeholder="Email address"
                  className="input input-bordered rounded-[21px] focus:outline-none focus:ring-2 focus:ring-[#908FEC] w-100"
                />
              )}
            />
            <p className="text-red-500 text-sm">{errors.email?.message}</p>
          </div>
          {/* ...Other input fields and error messages... */}

          <div className="form-control max-w-lg mb-5">
          <Controller
              name="password"
              control={control}
              defaultValue=""
              render={({ field }) => (
                <div className="relative">
                  <input
                    {...field}
                    type={showPassword ? 'text' : 'password'}
                    placeholder="Password"
                    className="input input-bordered w-full max-w-lg rounded-[21px] focus:outline-none focus:ring-2 focus:ring-[#908FEC]"
                  />
                  <span
                    className="absolute right-3 top-2 cursor-pointer"
                    onClick={togglePasswordVisibility}
                  >
                    {showPassword ? <HiEyeOff /> : <HiEye />}
                  </span>
                </div>
              )}
            />
             
            <p className="text-red-500 text-sm">{errors.password?.message}</p>
          </div>

          <div className="form-control max-w-lg mb-5">
            <Controller
              name="confirmPassword"
              control={control}
              defaultValue=""
              render={({ field }) => (
                <input
                  {...field}
                  type="password"
                  placeholder="Confirm Password"
                  className="input w-full input-bordered max-w-lg rounded-[21px] focus:outline-none focus:ring-2 focus:ring-[#908FEC]"
                />
              )}
            />
         
            <p className="text-red-500 text-sm">
              {errors.confirmPassword?.message}
            </p>
          </div>

          <div className="mb-5 flex justify-start items-center">
            <Controller
              name="agreement"
              control={control}
              defaultValue={false}
              render={({ field }) => (
                <input
                  {...field}
                  type="checkbox"
                  className="checkbox checkbox-primary"
                />
              )}
            />
            <div className="mx-2">
              <small className="text-[12px]">
                I agree to the{' '}
                <span className="text-[#3500D4]">
                  Terms of Service and Privacy Policy
                </span>
              </small>
            </div>
            <p className="text-red-500 text-sm">{errors.agreement?.message}</p>
          </div>

          <div className="">
            <button
              type="submit"
              className="btn btn-active btn-primary w-full mt-5 rounded-[21px]"
              disabled={!errors.agreement ? false : true}
            >
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
            <span onClick={()=>navigate('/login')} className="text-[#3500D4]">Sign in</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default RegistrationFrom;
