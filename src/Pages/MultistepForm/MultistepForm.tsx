/* eslint-disable */
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */
// function About() {
//   return <div>About</div>;
// }

// export default About;

import React, { useState } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import FormStep from '../../Components/formstep/FormStep';
import TextInput from '../../Components/formstep/TextInput';
import FormCheckbox from '../../Components/formstep/FormCheckbox';
import { FormData } from '../../Types/User';
import { Navigate, useNavigate } from 'react-router-dom';



const MAX_STEPS = 3;

const MultistepForm: React.FC = () => {
  const navigate = useNavigate()
  const {
    register,
    watch,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm<FormData>({ mode: 'all' });

  const [formStep, setFormStep] = useState<number>(0);

  const handleNextStep = () => {
    setFormStep((cur) => cur + 1);
  };

  const handlePrevStep = () => {
    setFormStep((cur) => cur - 1);
  };

  const handleFormCompletion: SubmitHandler<FormData> = (values) => {
    window.alert(JSON.stringify(values, null, 2));
    console.log("data",values );
    if(values){
      navigate("/")
    }
    setFormStep((cur) => cur + 1);
  };

  return (
    <div className="min-h-screen bg-green-900 flex flex-col items-start text-gray-900 antialiased relative">
      <FormStep
        stepNumber={1}
        isVisible={formStep === 0}
        onNextStep={handleNextStep}
      >
        <h2 className="font-semibold text-3xl mb-8">Personal Information</h2>
        <TextInput name="username" label="Username" register={register} required />
      </FormStep>

      <FormStep
        stepNumber={2}
        isVisible={formStep === 1}
        onNextStep={handleNextStep}
        onPrevStep={handlePrevStep}
      >
        <h2 className="font-semibold text-3xl mb-8">Billing Information</h2>
        <TextInput  name="address" label="Address" register={register} required="true"/>
      </FormStep>

      <FormStep
        stepNumber={3}
        isVisible={formStep === 2}
        onNextStep={handleSubmit(handleFormCompletion)}
        onPrevStep={handlePrevStep}
      >
        <h2 className="font-semibold text-3xl mb-8">Legal Information</h2>
        <FormCheckbox name="toc" label="Terms and Conditions" register={register} required />
        <FormCheckbox name="pp" label="Privacy Policy" register={register} required />
      </FormStep>

      <FormStep stepNumber={4} isVisible={formStep === 3}>
        <h2 className="font-semibold text-3xl mb-8">
          Thank you for signing up!
        </h2>
        <p>You can now log in with your new account</p>
      </FormStep>
    </div>
  );
};

export default MultistepForm;
