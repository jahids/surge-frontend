import React from 'react';
import './portfolioLoader.css';

// function PortfolioLoader() {
//   return <div>PortfolioLoader</div>;
// }

// export default PortfolioLoader;

const PortfolioLoader: React.FC = () => {
  return (
    <div className="w-full flex items-center flex-col bg-white">
      <div className="flex flex-col w-full bg-white  rounded-md ">
        <div className="flex items-center ">
          {/* <div
            data-placeholder
            className="mr-2 h-16 w-16 rounded-full overflow-hidden relative bg-gray-200"
          ></div> */}
          <div className="flex flex-col justify-between ">
            <div
              data-placeholder
              className="mb-2 h-8 w-40 overflow-hidden relative bg-gray-200"
            ></div>
          </div>
        </div>
        <div
          data-placeholder
          className="h-52 w-full overflow-hidden relative bg-gray-200 rounded-md"
        ></div>

        <div className="flex justify-between items-center mt-2 w-full gap-3 ">
          <div
            data-placeholder
            className=" h-10 rounded-md  w-full overflow-hidden relative bg-gray-200"
          ></div>
          <div
            data-placeholder
            className=" h-10 rounded-md  w-full overflow-hidden relative bg-gray-200"
          ></div>
        </div>

        <div className="flex justify-between items-center py-4  w-full">
          <div
            data-placeholder
            className="rounded-md h-10 w-full overflow-hidden relative bg-gray-200"
          ></div>
        </div>
        <div className="w-full rounded-md h-px overflow-hidden relative bg-gray-200 "></div>
        <div className="flex justify-between items-center  w-full">
          <div
            data-placeholder
            className="rounded-md h-10 w-full overflow-hidden relative bg-gray-200"
          ></div>
        </div>
      </div>
    </div>
  );
};

export default PortfolioLoader;
