/* eslint-disable  */
import React from 'react';
import { IoIosArrowBack } from 'react-icons/io';
import { AiOutlineRight } from 'react-icons/ai';

// AiOutlineRight;
interface FormStepProps {
  stepNumber: number;
  isVisible: boolean;
  onNextStep: () => void;
  onPrevStep?: () => void;
}

const FormStep: React.FC<FormStepProps> = ({
  stepNumber,
  isVisible,
  onNextStep,
  onPrevStep,
  children,
}) => {
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
        {/* --- main content --- */}

        <div className="px-3 py-3 first-line:mt-[60%] absolute bottom-0 right-0 ">
          <button
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
