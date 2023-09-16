/* eslint-disable  */
import React from 'react';

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
    <div className={isVisible ? 'block' : 'hidden'}>
      <h2 className="font-semibold text-3xl mb-4">Step {stepNumber} of 3</h2>
      {children}
      <div className="mt-6 flex justify-between">
        {onPrevStep && (
          <button
            onClick={onPrevStep}
            type="button"
            className="bg-green-400 text-white rounded px-4 py-2"
          >
            Previous
          </button>
        )}
        <button
          onClick={onNextStep}
          type="button"
          className="bg-green-600 text-white rounded px-4 py-2"
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default FormStep;
