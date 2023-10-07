import React from 'react';

function TopinvestorShimmer() {
  return (
    <div className="py-4 rounded mx-auto shadow-md w-80 sm:w-90 animate-pulse bg-gray-300">
      <div className="flex p-4 space-x-4 sm:px-8">
        <div className="flex-shrink-0 w-16 h-16 rounded-full mx-auto bg-gray-200"></div>
      </div>
      <div className="p-4 space-y-4 sm:px-8">
        <div className="w-full h-4 rounded bg-gray-200"></div>
        <div className="w-full h-4 rounded bg-gray-200"></div>
        <div className="w-3/4 h-4 rounded bg-gray-200"></div>
      </div>
    </div>
  );
}

export default TopinvestorShimmer;
