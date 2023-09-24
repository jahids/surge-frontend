/* eslint-disable  */
import React from 'react';
import { IoIosArrowBack } from 'react-icons/io';
import { AiOutlineRight } from 'react-icons/ai';
import { useNavigate } from 'react-router';

// AiOutlineRight;
interface FormStepProps {
  stepNumber: number;
  isVisible: boolean;
  onNextStep: () => void;
  onPrevStep?: () => void;
  Status ?: any
  // customerror?: any
}

const FormStep: React.FC<FormStepProps> = ({
  stepNumber,
  isVisible,
  onNextStep,
  onPrevStep,
  children,
  Status
  // customerror
}) => {
  const navigate = useNavigate();
  console.log('is visible', isVisible, 'stepNumber', stepNumber);
  if (isVisible === true && stepNumber === 14) {
    navigate('/login');
  }

   console.log("custtom", Status);
  

  return (
    <div className="">
      <div className={isVisible ? 'block ' : 'hidden'}>
        <div className="pt-10">
          {onPrevStep && (
            <button
              onClick={onPrevStep}
              type="button"
              className="text-white rounded-full px-2 cursor-pointer"
            >
              <IoIosArrowBack className="text-[#A0A0A0] text-2xl" />
            </button>
          )}
        </div>

        {/* --- main content --- */}
        <div className="px-3 mt-[15%]">{children}</div>
        {/* {customerror?.given_name && (
          <p className="text-red-500">{customerror?.given_name.message}</p>
        )} */}
        {/* --- main content --- */}

        <div className="px-3 py-3 first-line:mt-[60%] absolute bottom-0 right-0 ">
          <button
            disabled={Status === false}
            onClick={onNextStep}
            type="button"
            className="w-[50px] h-[50px] bg-[#5A4FF4] text-white rounded-full flex items-center justify-center cursor-pointer"
          >
            <AiOutlineRight className="text-white text-2xl" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default FormStep;
