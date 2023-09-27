/* eslint-disable */


// import React, { useState } from 'react';
// import { useForm, SubmitHandler, Controller, useWatch } from 'react-hook-form';
// import FormStep from '../../Components/formstep/FormStep';
// import TextInput from '../../Components/formstep/TextInput';
// import FormCheckbox from '../../Components/formstep/FormCheckbox';
// import { FormData } from '../../Types/User';
// import { Navigate, useLocation, useNavigate } from 'react-router-dom';
// import FormCalender from '../../Components/formstep/FormCalender';
// import Lottie from 'lottie-react';
// import verifiedIcon from '../../assets/img/animation_lmnaixm0.json';
// import { instance } from '../../lib/AxiosInstance';
// import Loader from '../../Components/Loader/Loader';
// import UserNotCreated from '../../Components/UserNotCreated/UserNotCreated';
// import Select from 'react-select';
// import { incomeSourceOptions, usaAllState } from '../../Utils/useState';

// const MAX_STEPS = 15;

// const MultistepForm: React.FC = () => {
//   const [apiStatus, setapiStatus] = useState(false);
//   const [isLoading, setIsLoading] = useState(false); // Add loading state
//   const navigate = useNavigate();
//   const { state } = useLocation();

//   const {
//     register,
//     handleSubmit,
//     control,
//     formState: { errors, isValid },
//   } = useForm<FormData>({ mode: 'all' });

//   const formStepState = useWatch({
//     control,
//     name: 'state',
//     name : 'incomeSource'
//   });

//   const [formStep, setFormStep] = useState<number>(0);

//   const handleNextStep = () => {
//     setFormStep(cur => cur + 1);
//     console.log('next form step', formStep);
//     // if (formStep === 10) {
//     //   navigate('/login');
//     // }
//   };

//   const handlePrevStep = () => {
//     setFormStep(cur => cur - 1);
//     console.log('prev form step', formStep);
//   };

//   // const watchedState = useWatch({
//   //   control,
//   //   name: 'state',
//   // });

//   const handleFormCompletion: SubmitHandler<FormData> = values => {
//     // console.log('data', {...values, email_addres : "hello@gmail.com"});
//     console.log("email", state)
//     const payload = {...values, email_address: state}
//     console.log('State value:', formStepState);
//     if (values) {
//       const otprequest = async () => {
//         setIsLoading(true);
//         try {
//           const createAccount = await instance.post(`/accounts`, {
//             ...payload
//           });
//           console.log('create account', createAccount);
//           // const { success, message } = OtpRequestCall?.data;
//           if (createAccount?.status === 200) {
//             setapiStatus(true);
//             navigate("/main")
//           }
//         } catch (error) {
//           console.log('otp error', error);
//           setapiStatus(false);
//         }
//         setIsLoading(false);
//       };
//       otprequest();
//     }
//     setFormStep(cur => cur + 1);

//     console.log('complemete', formStep);
//   };

//   const options = usaAllState?.map(state => ({
//     value: state.abbreviation,
//     label: state.name,
//   }));

//   const ALlincomeSource = incomeSourceOptions?.map(state => ({
//     value: state.value,
//     label: state.label,
//   }));


//   return (
//     <div className="min-h-screen relative">
//       {/* --- given name --- */}
//       <FormStep
//         stepNumber={1}
//         isVisible={formStep === 0}
//         onNextStep={handleNextStep}
//       >
//         <div className="pt-[30px] mb-10">
//           <h5 className="font-semibold text-3xl mb-2">First Name ?</h5>
//           <p className="">
//             <small className="text-inherit text-slate-500">
//               This will be shown on your profile
//             </small>
//           </p>
//         </div>
//         <TextInput
//           type="text"
//           name="given_name"
//           placeholder="John"
//           register={register}
//           required
//         />
//       </FormStep>

//       {/* --- family name --- */}
//       <FormStep
//         stepNumber={2}
//         isVisible={formStep === 1}
//         onNextStep={handleNextStep}
//         onPrevStep={handlePrevStep}
//       >
//         <div className="mt-10 mb-10">
//           <h5 className="font-semibold text-3xl mb-2">Family Name?</h5>
//           <p className="">
//             <small className="text-inherit text-slate-500">
//               This will be shown on your profile
//             </small>
//           </p>
//         </div>
//         <TextInput
//           type="text"
//           name="family_name"
//           placeholder="Family Name"
//           register={register}
//           required
//         />
//       </FormStep>

//       {/* --- date of birth --- */}
//       <FormStep
//         stepNumber={3}
//         isVisible={formStep === 2}
//         onNextStep={handleNextStep}
//         onPrevStep={handlePrevStep}
//       >
//         <div className="mt-10 mb-10">
//           <h5 className="font-semibold text-3xl mb-2">Date of Birth</h5>
//           <p className="">
//             <small className="text-inherit text-slate-500">
//               This will be shown on your profile
//             </small>
//           </p>
//         </div>
//         <FormCalender name="date_of_birth" register={register} required />
//       </FormStep>

//       {/* --- phone --- */}
//       <FormStep
//         stepNumber={4}
//         isVisible={formStep === 3}
//         onNextStep={handleNextStep}
//         onPrevStep={handlePrevStep}
//       >
//         <div className="mt-10 mb-10">
//           <h5 className="font-semibold text-3xl mb-2">Phone</h5>
//           <p className="">
//             <small className="text-inherit text-slate-500">
//               This will be shown on your profile
//             </small>
//           </p>
//         </div>
//         <TextInput
//           type="number"
//           name="phone_number"
//           placeholder="Phone"
//           register={register}
//           required
//         />
//       </FormStep>

//       {/* --- street --- */}
//       <FormStep
//         stepNumber={5}
//         isVisible={formStep === 4}
//         onNextStep={handleNextStep}
//         onPrevStep={handlePrevStep}
//       >
//         <div className="mt-10 mb-10">
//           <h5 className="font-semibold text-3xl mb-2">Street</h5>
//           <p className="">
//             <small className="text-inherit text-slate-500">
//               This will be shown on your profile
//             </small>
//           </p>
//         </div>
//         <TextInput
//           type="text"
//           name="street_address"
//           placeholder="Street"
//           register={register}
//           required
//         />
//       </FormStep>

//       {/* --- city --- */}
//       <FormStep
//         stepNumber={6}
//         isVisible={formStep === 5}
//         onNextStep={handleNextStep}
//         onPrevStep={handlePrevStep}
//       >
//         <div className="mt-10 mb-10">
//           <h5 className="font-semibold text-3xl mb-2">City</h5>
//           <p className="">
//             <small className="text-inherit text-slate-500">
//               This will be shown on your profile
//             </small>
//           </p>
//         </div>
//         <TextInput
//           type="text"
//           name="city"
//           placeholder="City"
//           register={register}
//           required
//         />
//       </FormStep>

//       {/* --- state --- */}
//       <FormStep
//         stepNumber={7}
//         isVisible={formStep === 6}
//         onNextStep={handleNextStep}
//         onPrevStep={handlePrevStep}
//       >
//         <div className="mt-10 mb-10">
//           <h5 className="font-semibold text-3xl mb-2">State</h5>
//           <p className="">
//             <small className="text-inherit text-slate-500">
//               This will be shown on your profile
//             </small>
//           </p>
//         </div>
//         <Controller
//           name="state"
//           control={control}
//           defaultValue=""
//           render={({ field }) => (
//             <Select
//               inputRef={field.ref}
//               options={options}
//               value={options.find(option => option.value === field.value)}
//               onChange={selectedOption =>
//                 field.onChange(selectedOption?.value || '')
//               }
//             />
//           )}
//         />
//       </FormStep>

//       {/* --- postal code --- */}
//       <FormStep
//         stepNumber={8}
//         isVisible={formStep === 7}
//         onNextStep={handleNextStep}
//         onPrevStep={handlePrevStep}
//       >
//         <div className="mt-10 mb-10">
//           <h5 className="font-semibold text-3xl mb-2">Postal Code</h5>
//           <p className="">
//             <small className="text-inherit text-slate-500">
//               This will be shown on your profile
//             </small>
//           </p>
//         </div>
//         <TextInput
//           type="number"
//           name="postal_code"
//           placeholder="Postal Code"
//           register={register}
//           required
//         />
//       </FormStep>


//       {/* --- Income Source --- */}
//       <FormStep
//         stepNumber={9}
//         isVisible={formStep === 8}
//         onNextStep={handleNextStep}
//         onPrevStep={handlePrevStep}
//       >
//         <div className="mt-10 mb-10">
//           <h5 className="font-semibold text-3xl mb-2">Income Source</h5>
//           <p className="">
//             <small className="text-inherit text-slate-500">
//               This will be shown on your profile
//             </small>
//           </p>
//         </div>
//         {/* <IncomeSource allcontroler ={Controller, control} required /> */}
//         {/* <Controller
//           name="incomeSource"
//           control={control}
//           defaultValue=""
//           render={({ field }) => (
//             <Select
//               inputRef={field.ref}
//               options={ALlincomeSource}
//               value={ALlincomeSource.find(option => option.value === field.value)}
//               onChange={selectedOption =>
//                 field.onChange(selectedOption?.value || '')
//               }
//               isMulti
//             />
//           )}
//         /> */}


// <Controller
//   name="funding_source"
//   control={control}
//   defaultValue={[]}
//   render={({ field }) => (
//     <Select
//       inputRef={field.ref}
//       options={ALlincomeSource}
//       value={ALlincomeSource.filter(option =>
//         field.value.includes(option.value)
//       )}
//       onChange={selectedOptions =>
//         field.onChange(selectedOptions.map(option => option.value))
//       }
//       isMulti
//     />
//   )}
// />

//       </FormStep>

//       {/* --- agreement --- */}
//       <FormStep
//         stepNumber={10}
//         isVisible={formStep === 9}
//         // onNextStep={handleNextStep}
//         onPrevStep={handlePrevStep}
//         onNextStep={handleSubmit(handleFormCompletion)}
//       >
//         <div className="mt-10 mb-10">
//           <h5 className="font-semibold text-3xl mb-2">Agreement</h5>
//           <p className="">
//             <small className="text-inherit text-slate-500">
//               This will be shown on your profile
//             </small>
//           </p>
//         </div>
//         <FormCheckbox
//           name="terms_conditions"
//           label="Terms and Conditions"
//           register={register}
//           required
//         />
//         <FormCheckbox
//           name="privacy_policy"
//           label="Privacy Policy"
//           register={register}
//           required
//         />
//       </FormStep>

//       <FormStep
//         stepNumber={11}
//         isVisible={formStep === 10}
//         onNextStep={handleNextStep}
//       >
//         {isLoading ? ( // Show loading indicator while isLoading is true
//           <div className="">
//             <Loader />
//           </div>
//         ) : apiStatus === true ? (
//           <>
//             <div className="text-center">
//               <h2 className="font-semibold text-3xl mb-8 mt-[10px]">
//                 Thank you for signing up!
//               </h2>
//               <p>You can now log in with your new account</p>
//             </div>
//             <div className="">
//               <Lottie animationData={verifiedIcon} loop={true} />
//             </div>
//           </>
//         ) : (
//           <UserNotCreated />
//         )}
//       </FormStep>

//       <FormStep stepNumber={12} isVisible={formStep === 11}>
//         <div className="text-center">
//           <h2 className="font-semibold text-3xl mb-8 mt-[10px]">
//             Thank you for signing up!
//           </h2>
//           <p>You can now log in with your new account</p>
//         </div>
//         <div className="p-12">
//           <Lottie animationData={verifiedIcon} loop={true} />
//         </div>
//       </FormStep>
//     </div>
//   );
// };

// export default MultistepForm;


// new code

import React, { useState } from 'react';
import { useForm, SubmitHandler, Controller, useWatch } from 'react-hook-form';
import * as yup from 'yup'; // Import yup
import { yupResolver } from '@hookform/resolvers/yup'; // Import yup resolver
import FormStep from '../../Components/formstep/FormStep';
import TextInput from '../../Components/formstep/TextInput';
import FormCheckbox from '../../Components/formstep/FormCheckbox';
import { FormData } from '../../Types/User';
import { Navigate, useLocation, useNavigate } from 'react-router-dom';
import FormCalender from '../../Components/formstep/FormCalender';
import Lottie from 'lottie-react';
import verifiedIcon from '../../assets/img/animation_lmnaixm0.json';
import { instance } from '../../lib/AxiosInstance';
import Loader from '../../Components/Loader/Loader';
import UserNotCreated from '../../Components/UserNotCreated/UserNotCreated';
import Select from 'react-select';
import { incomeSourceOptions, usaAllState } from '../../Utils/useState';
import { getemail } from '../../Services/Cookie.service';

const MAX_STEPS = 15;

// Define your validation schema using yup
const schema = yup.object().shape({
  given_name: yup.string().required('First Name is required'),
  family_name: yup.string().required('Family Name is required'),
  date_of_birth: yup.date().required('Date of Birth is required').nullable(),
  phone_number: yup.string().required('Phone Number is required'),
  street_address: yup.string().required('Street Address is required'),
  city: yup.string().required('City is required'),
  state: yup.string().required('State is required'),
  postal_code: yup.string().required('Postal Code is required'),
  incomeSource: yup.array().min(1, 'At least one Income Source is required'),
  terms_conditions: yup.boolean().oneOf([true], 'You must accept Terms and Conditions'),
  privacy_policy: yup.boolean().oneOf([true], 'You must accept Privacy Policy'),
});

const MultistepForm: React.FC = () => {
  const [apiStatus, setapiStatus] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();
  const { state } = useLocation();

  // Apply yup resolver to your useForm
  const {
    register,
    handleSubmit,
    control,
    formState: { errors, isValid },
  } = useForm<FormData>({
    mode: 'all',
    resolver: yupResolver(schema), // Use yup resolver
  });

  const formStepState = useWatch({
    control,
    name: 'state',
    name: 'incomeSource',
  });

  const [formStep, setFormStep] = useState<number>(0);

  const handleNextStep = () => {
    setFormStep(cur => cur + 1);
  };

  const handlePrevStep = () => {
    setFormStep(cur => cur - 1);
  };

  const email  = getemail()

  const handleFormCompletion: SubmitHandler<FormData> = values => {
    const payload = { ...values, email_address: email };

    if (values) {
      const otprequest = async () => {
        setIsLoading(true);
        try {
          const createAccount = await instance.post(`/accounts`, {
            ...payload,
          });

          if (createAccount?.status === 200) {
            setapiStatus(true);
            navigate('/main');
          }
        } catch (error) {
          console.log('otp error', error);
          setapiStatus(false);
        }
        setIsLoading(false);
      };
      otprequest();
    }
    setFormStep(cur => cur + 1);
  };

  const options = usaAllState?.map(state => ({
    value: state.abbreviation,
    label: state.name,
  }));

  const ALlincomeSource = incomeSourceOptions?.map(state => ({
    value: state.value,
    label: state.label,
  }));

  console.log("api status", apiStatus);
  return (
    <div className="min-h-screen relative">
      {/* --- given name --- */}
      <FormStep
        stepNumber={1}
        isVisible={formStep === 0}
        onNextStep={handleNextStep}
      >
        <div className="pt-[30px] mb-10">
          <h5 className="font-semibold text-3xl mb-2">First Name ?</h5>
          <p className="">
            <small className="text-inherit text-slate-500">
              This will be shown on your profile
            </small>
          </p>
        </div>
        <TextInput
          type="text"
          name="given_name"
          placeholder="John"
          register={register}
          required
        />
        {errors.given_name && (
          <p className="text-red-500">{errors.given_name.message}</p>
        )}
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
        {errors.family_name && (
          <p className="text-red-500">{errors.family_name.message}</p>
        )}
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
        {errors.date_of_birth && (
          <p className="text-red-500">{errors.date_of_birth.message}</p>
        )}
      </FormStep>

      {/* --- phone --- */}
      <FormStep
        stepNumber={4}
        isVisible={formStep === 3}
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
        {errors.phone_number && (
          <p className="text-red-500">{errors.phone_number.message}</p>
        )}
      </FormStep>

      {/* --- street --- */}
      <FormStep
        stepNumber={5}
        isVisible={formStep === 4}
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
        {errors.street_address && (
          <p className="text-red-500">{errors.street_address.message}</p>
        )}
      </FormStep>

      {/* --- city --- */}
      <FormStep
        stepNumber={6}
        isVisible={formStep === 5}
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
        {errors.city && <p className="text-red-500">{errors.city.message}</p>}
      </FormStep>

      {/* --- state --- */}
      <FormStep
        stepNumber={7}
        isVisible={formStep === 6}
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
        <Controller
          name="state"
          control={control}
          defaultValue=""
          render={({ field }) => (
            <Select
              inputRef={field.ref}
              options={options}
              value={options.find(option => option.value === field.value)}
              onChange={selectedOption =>
                field.onChange(selectedOption?.value || '')
              }
            />
          )}
        />
        {errors.state && <p className="text-red-500">{errors.state.message}</p>}
      </FormStep>



      {/* --- postal code --- */}
      <FormStep
        stepNumber={8}
        isVisible={formStep === 7}
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
        {errors.postal_code && (
          <p className="text-red-500">{errors.postal_code.message}</p>
        )}
      </FormStep>

      {/* --- Income Source --- */}
      <FormStep
        stepNumber={9}
        isVisible={formStep === 8}
        onNextStep={handleNextStep}
        onPrevStep={handlePrevStep}
      >
        <div className="mt-10 mb-10">
          <h5 className="font-semibold text-3xl mb-2">Income Source</h5>
          <p className="">
            <small className="text-inherit text-slate-500">
              This will be shown on your profile
            </small>
          </p>
        </div>
        <Controller
          name="incomeSource"
          control={control}
          defaultValue={[]}
          render={({ field }) => (
            <Select
              inputRef={field.ref}
              options={ALlincomeSource}
              value={ALlincomeSource.filter(option =>
                field.value.includes(option.value)
              )}
              onChange={selectedOptions =>
                field.onChange(selectedOptions.map(option => option.value))
              }
              isMulti
            />
          )}
        />
        {errors.incomeSource && (
          <p className="text-red-500">{errors.incomeSource.message}</p>
        )}
      </FormStep>

      {/* --- agreement --- */}
      <FormStep
        stepNumber={10}
        isVisible={formStep === 9}
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
        {errors.terms_conditions && (
          <p className="text-red-500">{errors.terms_conditions.message}</p>
        )}
        {errors.privacy_policy && (
          <p className="text-red-500">{errors.privacy_policy.message}</p>
        )}
      </FormStep>

      {/* --- Success Message --- */}
      
      <FormStep stepNumber={11} isVisible={formStep === 10} onPrevStep={handlePrevStep} Status={false}>
        {isLoading ? (
          <div className="">
            <Loader />
          </div>
        ) : apiStatus === true ? (
          <>
            <div className="text-center">
              <h2 className="font-semibold text-3xl mb-8 mt-[10px]">
                Thank you for signing up!
              </h2>
              <p>You can now log in with your new account</p>
            </div>
            <div className="">
              <Lottie animationData={verifiedIcon} loop={true} />
            </div>
          </>
        ) : (
          <UserNotCreated />
        )}
      </FormStep>

      <FormStep stepNumber={12} isVisible={formStep === 11}>
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

export default MultistepForm
