/* eslint-disable */
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */
// function About() {
//   return <div>About</div>;
// }

import React, { useState } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import FormStep from '../../Components/formstep/FormStep';
import TextInput from '../../Components/formstep/TextInput';
import FormCheckbox from '../../Components/formstep/FormCheckbox';
import { FormData } from '../../Types/User';
import { Navigate, useNavigate } from 'react-router-dom';
import FormCalender from '../../Components/formstep/FormCalender';
import Lottie from 'lottie-react';
import verifiedIcon from '../../assets/img/animation_lmnaixm0.json';
import { notifySuccess } from '../../lib/Toastify';
import { instance } from '../../lib/AxiosInstance';

const MAX_STEPS = 15;

const MultistepForm: React.FC = () => {
  const [apiStatus, setapiStatus] = useState(false)
  const [isLoading, setIsLoading] = useState(false); // Add loading state
  const navigate = useNavigate();
  const {
    register,
    watch,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm<FormData>({ mode: 'all' });

  const [formStep, setFormStep] = useState<number>(0);

  const handleNextStep = () => {
    setFormStep(cur => cur + 1);
    console.log('next form step', formStep);
    // if (formStep === 10) {
    //   navigate('/login');
    // }
  };

  const handlePrevStep = () => {
    setFormStep(cur => cur - 1);
    console.log('prev form step', formStep);
  };

  const handleFormCompletion: SubmitHandler<FormData> = values => {
    console.log('data', values);
      if(values){
        const otprequest = async () => {
          setIsLoading(true);
          try {
            const createAccount = await instance.post(`/accounts`, {
              ...values
            });
            console.log('create account', createAccount);
            // const { success, message } = OtpRequestCall?.data;
            if (createAccount?.status === 200) {
                  setapiStatus(true)
            }
          } catch (error) {
            console.log('otp error', error);
            setapiStatus(false)
          }
          setIsLoading(false);
        };
        otprequest();
      }
    setFormStep(cur => cur + 1);

    console.log('complemete', formStep);
  };

  return (
    <div className="min-h-screen relative">
      {/* --- given name --- */}
      <FormStep
        stepNumber={1}
        isVisible={formStep === 0}
        onNextStep={handleNextStep}
      >
        <div className="pt-[30px] mb-10">
          <h5 className="font-semibold text-3xl mb-2">What's your name?</h5>
          <p className="">
            <small className="text-inherit text-slate-500">
              This will be shown on your profile
            </small>
          </p>
        </div>
        <TextInput
          type="text"
          name="given_name"
          placeholder="John Doe"
          register={register}
          required
        />
      </FormStep>

      {/* --- family name --- */}
      <FormStep
        stepNumber={2}
        isVisible={formStep === 1}
        onNextStep={handleNextStep}
        onPrevStep={handlePrevStep}
      >
        <div className="mt-10 mb-10">
          <h5 className="font-semibold text-3xl mb-2">Family Name?</h5>
          <p className="">
            <small className="text-inherit text-slate-500">
              This will be shown on your profile
            </small>
          </p>
        </div>
        <TextInput
          type="text"
          name="family_name"
          placeholder="Family Name"
          register={register}
          required
        />
      </FormStep>

      {/* --- date of birth --- */}
      <FormStep
        stepNumber={3}
        isVisible={formStep === 2}
        onNextStep={handleNextStep}
        onPrevStep={handlePrevStep}
      >
        <div className="mt-10 mb-10">
          <h5 className="font-semibold text-3xl mb-2">Date of Birth</h5>
          <p className="">
            <small className="text-inherit text-slate-500">
              This will be shown on your profile
            </small>
          </p>
        </div>
        <FormCalender name="date_of_birth" register={register} required />
      </FormStep>

      {/* --- email --- */}
      <FormStep
        stepNumber={4}
        isVisible={formStep === 3}
        onNextStep={handleNextStep}
        onPrevStep={handlePrevStep}
      >
        <div className="mt-10 mb-10">
          <h5 className="font-semibold text-3xl mb-2">Email</h5>
          <p className="">
            <small className="text-inherit text-slate-500">
              This will be shown on your profile
            </small>
          </p>
        </div>
        <TextInput
          type="email"
          name="email_address"
          placeholder="Email"
          register={register}
          required
        />
      </FormStep>

      {/* --- phone --- */}
      <FormStep
        stepNumber={5}
        isVisible={formStep === 4}
        onNextStep={handleNextStep}
        onPrevStep={handlePrevStep}
      >
        <div className="mt-10 mb-10">
          <h5 className="font-semibold text-3xl mb-2">Phone</h5>
          <p className="">
            <small className="text-inherit text-slate-500">
              This will be shown on your profile
            </small>
          </p>
        </div>
        <TextInput
          type="number"
          name="phone_number"
          placeholder="Phone"
          register={register}
          required
        />
      </FormStep>

      {/* --- street --- */}
      <FormStep
        stepNumber={6}
        isVisible={formStep === 5}
        onNextStep={handleNextStep}
        onPrevStep={handlePrevStep}
      >
        <div className="mt-10 mb-10">
          <h5 className="font-semibold text-3xl mb-2">Street</h5>
          <p className="">
            <small className="text-inherit text-slate-500">
              This will be shown on your profile
            </small>
          </p>
        </div>
        <TextInput
          type="text"
          name="street_address"
          placeholder="Street"
          register={register}
          required
        />
      </FormStep>

      {/* --- city --- */}
      <FormStep
        stepNumber={7}
        isVisible={formStep === 6}
        onNextStep={handleNextStep}
        onPrevStep={handlePrevStep}
      >
        <div className="mt-10 mb-10">
          <h5 className="font-semibold text-3xl mb-2">City</h5>
          <p className="">
            <small className="text-inherit text-slate-500">
              This will be shown on your profile
            </small>
          </p>
        </div>
        <TextInput
          type="text"
          name="city"
          placeholder="City"
          register={register}
          required
        />
      </FormStep>

      {/* --- state --- */}
      <FormStep
        stepNumber={8}
        isVisible={formStep === 7}
        onNextStep={handleNextStep}
        onPrevStep={handlePrevStep}
      >
        <div className="mt-10 mb-10">
          <h5 className="font-semibold text-3xl mb-2">State</h5>
          <p className="">
            <small className="text-inherit text-slate-500">
              This will be shown on your profile
            </small>
          </p>
        </div>
        <TextInput
          type="text"
          name="state"
          placeholder="State"
          register={register}
          required
        />
      </FormStep>

      {/* --- postal code --- */}
      <FormStep
        stepNumber={9}
        isVisible={formStep === 8}
        onNextStep={handleNextStep}
        onPrevStep={handlePrevStep}
      >
        <div className="mt-10 mb-10">
          <h5 className="font-semibold text-3xl mb-2">Postal Code</h5>
          <p className="">
            <small className="text-inherit text-slate-500">
              This will be shown on your profile
            </small>
          </p>
        </div>
        <TextInput
          type="number"
          name="postal_code"
          placeholder="Postal Code"
          register={register}
          required
        />
      </FormStep>

      {/* --- country --- */}
      <FormStep
        stepNumber={10}
        isVisible={formStep === 9}
        onNextStep={handleNextStep}
        onPrevStep={handlePrevStep}
      >
        <div className="mt-10 mb-10">
          <h5 className="font-semibold text-3xl mb-2">Country</h5>
          <p className="">
            <small className="text-inherit text-slate-500">
              This will be shown on your profile
            </small>
          </p>
        </div>
        <TextInput
          type="text"
          name="country"
          placeholder="Country"
          register={register}
          required
        />
      </FormStep>

      {/* --- tax ID --- */}
      <FormStep
        stepNumber={11}
        isVisible={formStep === 10}
        onNextStep={handleNextStep}
        onPrevStep={handlePrevStep}
      >
        <div className="mt-10 mb-10">
          <h5 className="font-semibold text-3xl mb-2">Tax ID</h5>
          <p className="">
            <small className="text-inherit text-slate-500">
              This will be shown on your profile
            </small>
          </p>
        </div>
        <TextInput
          type="number"
          name="tax_id"
          placeholder="Tax ID"
          register={register}
          required
        />
      </FormStep>

      {/* --- agreement --- */}
      <FormStep
        stepNumber={12}
        isVisible={formStep === 11}
        // onNextStep={handleNextStep}
        onPrevStep={handlePrevStep}
        onNextStep={handleSubmit(handleFormCompletion)}
      >
        <div className="mt-10 mb-10">
          <h5 className="font-semibold text-3xl mb-2">Agreement</h5>
          <p className="">
            <small className="text-inherit text-slate-500">
              This will be shown on your profile
            </small>
          </p>
        </div>
        <FormCheckbox
          name="terms_conditions"
          label="Terms and Conditions"
          register={register}
          required
        />
        <FormCheckbox
          name="privacy_policy"
          label="Privacy Policy"
          register={register}
          required
        />
      </FormStep>

      <FormStep stepNumber={13} isVisible={formStep === 12} onNextStep={handleNextStep}>
  {isLoading ? ( // Show loading indicator while isLoading is true
    <div className="text-center">
      <p>Loading...</p>
    </div>
  ) : apiStatus === true ? (
    <>
      <div className="text-center">
        <h2 className="font-semibold text-3xl mb-8 mt-[10px]">
          Thank you for signing up!
        </h2>
        <p>You can now log in with your new account</p>
      </div>
      <div className="p-12">
        <Lottie animationData={verifiedIcon} loop={true} />
      </div>
    </>
  ) : (
    <p>User not created</p>
  )}
</FormStep>

      <FormStep stepNumber={14} isVisible={formStep === 13} >
        <div className="text-center">
          <h2 className="font-semibold text-3xl mb-8 mt-[10px]">
            Thank you for signing up!
          </h2>
          <p>You can now log in with your new account</p>
        </div>
        <div className="p-12">
          <Lottie animationData={verifiedIcon} loop={true} />
        </div>
      </FormStep>
    </div>
  );
};

export default MultistepForm;
