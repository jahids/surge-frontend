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

const MAX_STEPS = 11;

const MultistepForm: React.FC = () => {
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
  };

  const handlePrevStep = () => {
    setFormStep(cur => cur - 1);
  };

  const handleFormCompletion: SubmitHandler<FormData> = values => {
    window.alert(JSON.stringify(values, null, 2));
    console.log('data', values);
    if (values) {
      navigate('/');
    }
    setFormStep(cur => cur + 1);
  };

  return (
    <div className="min-h-screen flex flex-col items-start text-gray-900 antialiased relative mt-10">
      <FormStep
        stepNumber={1}
        isVisible={formStep === 0}
        onNextStep={handleNextStep}
      >
        <div className="p-5">
          <h5 className="font-semibold text-3xl mb-2">What's your name?</h5>
          <p className="">
            <small className="text-inherit text-slate-500">
              This will be shown on your profile
            </small>
          </p>
        </div>
        <TextInput
          name="username"
          placeholder="John Doe"
          register={register}
          required
        />
      </FormStep>

      <FormStep
        stepNumber={2}
        isVisible={formStep === 1}
        onNextStep={handleNextStep}
        onPrevStep={handlePrevStep}
      >
        <div className="p-5 mt-5">
          <h5 className="font-semibold text-3xl mb-2">Family Name?</h5>
          <p className="">
            <small className="text-inherit text-slate-500">
              This will be shown on your profile
            </small>
          </p>
        </div>
        <TextInput
          placeholder="Family Name"
          name="family_name"
          register={register}
          required
        />
      </FormStep>

      <FormStep
        stepNumber={3}
        isVisible={formStep === 2}
        onNextStep={handleNextStep}
        onPrevStep={handlePrevStep}
      >
        <div className="p-5 mt-24">
          <h5 className="font-semibold text-3xl mb-2">Email</h5>
          <p className="">
            <small className="text-inherit text-slate-500">
              This will be shown on your profile
            </small>
          </p>
        </div>
        <TextInput
          placeholder="Email"
          name="email"
          register={register}
          required
        />
      </FormStep>

      <FormStep
        stepNumber={4}
        isVisible={formStep === 3}
        onNextStep={handleNextStep}
        onPrevStep={handlePrevStep}
      >
        <div className="p-5 mt-24">
          <h5 className="font-semibold text-3xl mb-2">Phone</h5>
          <p className="">
            <small className="text-inherit text-slate-500">
              This will be shown on your profile
            </small>
          </p>
        </div>
        <TextInput
          placeholder="Phone"
          name="number"
          register={register}
          required
        />
      </FormStep>

      <FormStep
        stepNumber={5}
        isVisible={formStep === 4}
        onNextStep={handleNextStep}
        onPrevStep={handlePrevStep}
      >
        <div className="p-5 mt-24">
          <h5 className="font-semibold text-3xl mb-2">Street</h5>
          <p className="">
            <small className="text-inherit text-slate-500">
              This will be shown on your profile
            </small>
          </p>
        </div>
        <TextInput
          placeholder="Street"
          name="street"
          register={register}
          required
        />
      </FormStep>

      <FormStep
        stepNumber={6}
        isVisible={formStep === 5}
        onNextStep={handleNextStep}
        onPrevStep={handlePrevStep}
      >
        <div className="p-5 mt-24">
          <h5 className="font-semibold text-3xl mb-2">City</h5>
          <p className="">
            <small className="text-inherit text-slate-500">
              This will be shown on your profile
            </small>
          </p>
        </div>
        <TextInput
          placeholder="City"
          name="street"
          register={register}
          required
        />
      </FormStep>

      <FormStep
        stepNumber={7}
        isVisible={formStep === 6}
        onNextStep={handleNextStep}
        onPrevStep={handlePrevStep}
      >
        <div className="p-5 mt-24">
          <h5 className="font-semibold text-3xl mb-2">Country</h5>
          <p className="">
            <small className="text-inherit text-slate-500">
              This will be shown on your profile
            </small>
          </p>
        </div>
        <TextInput
          placeholder="Country"
          name="street"
          register={register}
          required
        />
      </FormStep>

      <FormStep
        stepNumber={8}
        isVisible={formStep === 7}
        onNextStep={handleNextStep}
        onPrevStep={handlePrevStep}
      >
        <div className="p-5 mt-24">
          <h5 className="font-semibold text-3xl mb-2">Postal Code</h5>
          <p className="">
            <small className="text-inherit text-slate-500">
              This will be shown on your profile
            </small>
          </p>
        </div>
        <TextInput
          placeholder="Postal Code"
          name="street"
          register={register}
          required
        />
      </FormStep>
      <FormStep
        stepNumber={9}
        isVisible={formStep === 8}
        onNextStep={handleNextStep}
        onPrevStep={handlePrevStep}
      >
        <div className="p-5 mt-24">
          <h5 className="font-semibold text-3xl mb-2">Country</h5>
          <p className="">
            <small className="text-inherit text-slate-500">
              This will be shown on your profile
            </small>
          </p>
        </div>
        <TextInput
          placeholder="Country"
          name="street"
          register={register}
          required
        />
      </FormStep>
      <FormStep
        stepNumber={10}
        isVisible={formStep === 9}
        onNextStep={handleNextStep}
        onPrevStep={handlePrevStep}
      >
        <div className="p-5 mt-24">
          <h5 className="font-semibold text-3xl mb-2">Tax ID</h5>
          <p className="">
            <small className="text-inherit text-slate-500">
              This will be shown on your profile
            </small>
          </p>
        </div>
        <TextInput
          placeholder="Tax ID"
          name="street"
          register={register}
          required
        />
      </FormStep>

      <FormStep
        stepNumber={11}
        isVisible={formStep === 10}
        onNextStep={handleNextStep}
        onPrevStep={handlePrevStep}
      >
        <div className="p-5 mt-24">
          <h5 className="font-semibold text-3xl mb-2">Agreement</h5>
          <p className="">
            <small className="text-inherit text-slate-500">
              This will be shown on your profile
            </small>
          </p>
        </div>
        <FormCheckbox
          name="toc"
          label="Terms and Conditions"
          register={register}
          required
        />
        <FormCheckbox
          name="pp"
          label="Privacy Policy"
          register={register}
          required
        />
      </FormStep>

      {/* <FormStep
        stepNumber={3}
        isVisible={formStep === 2}
        onNextStep={handleSubmit(handleFormCompletion)}
        onPrevStep={handlePrevStep}
      >
        <h2 className="font-semibold text-3xl mb-8">Legal Information</h2>
        <FormCheckbox
          name="toc"
          label="Terms and Conditions"
          register={register}
          required
        />
        <FormCheckbox
          name="pp"
          label="Privacy Policy"
          register={register}
          required
        />
      </FormStep> */}

      <FormStep stepNumber={12} isVisible={formStep === 11}>
        <h2 className="font-semibold text-3xl mb-8">
          Thank you for signing up!
        </h2>
        <p>You can now log in with your new account</p>
      </FormStep>
    </div>
  );
};

export default MultistepForm;
