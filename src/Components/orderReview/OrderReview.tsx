// import React from 'react';

// function OrderReview() {
//   return (
//     <div>
//       <button>back</button>
//       <div className="flex justify-between m-2">
//         <div>
//           <h1 className="text-lg text-bold">Order review</h1>
//           <span>Buy 0.4323423</span>
//         </div>
//         <div>
//           <span>image</span>
//           <img src="" alt="" />
//         </div>
//       </div>

//       <div className="bg-orange-500 py-10 mt-[20px] rounded-md m-2">
//         <span>another image</span>
//       </div>

//       <div className="py-8 m-5 flex justify-between">
//         <div>
//           <h1>privacy</h1>
//           <h1>stock</h1>
//           <h1>amount</h1>
//           <h1>platrom cost</h1>
//         </div>
//         <div>
//           <h1>public</h1>
//           <h1>345</h1>
//           <h1>34534</h1>
//           <h1>34534</h1>
//         </div>
//       </div>

//       <div className="flex items-center justify-center">
//         <button className="">confirm</button>
//       </div>
//     </div>
//   );
// }

// export default OrderReview;

import React from 'react';
// import { ArrowBack } from 'react-icons/ai';
import { BiImage } from 'react-icons/bi';
import { useNavigate } from 'react-router-dom';

function OrderReview() {
  const navigate = useNavigate();
  return (
    <div className="bg-gray-100 h-screen p-4">
      <div className="flex items-center justify-between">
        <button
          onClick={() => navigate(-1)}
          className="bg-blue-500 text-white px-4 py-2 rounded-lg shadow-md"
        >
          Back
        </button>
        <span className="text-lg font-bold">Order Review</span>
      </div>

      <div className="mt-4 p-4 bg-white rounded-md shadow-md">
        <div className="flex justify-between items-center">
          <div>
            <h1 className="text-lg font-bold">Buy 0.4323423</h1>
            <span className="text-gray-600 flex items-center">
              <BiImage className="mr-2" />
              Stock Image
            </span>
          </div>
          <div className="w-12 h-12">
            <img
              src="https://via.placeholder.com/48"
              alt="Stock Image"
              className="w-full h-full rounded-md"
            />
          </div>
        </div>
      </div>

      <div className="mt-4 p-10 bg-orange-500 rounded-md shadow-md">
        <span className="text-white flex items-center">
          <BiImage className="mr-2" />
          Another Image
        </span>
      </div>

      <div className="mt-4 p-4 bg-white rounded-md shadow-md">
        <div className="flex justify-between">
          <div>
            <h1 className="text-lg py-2 font-bold">Privacy</h1>
            <h1 className="text-lg py-2 font-bold">Stock</h1>
            <h1 className="text-lg py-2 font-bold">Amount</h1>
            <h1 className="text-lg py-2 font-bold">Platform Cost</h1>
          </div>
          <div>
            <h1 className="text-lg py-2 font-bold">Public</h1>
            <h1 className="text-lg py-2 font-bold">345</h1>
            <h1 className="text-lg py-2 font-bold">34534</h1>
            <h1 className="text-lg py-2 font-bold">34534</h1>
          </div>
        </div>
      </div>
      {/* <h1 className="text-gray-700">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      </h1> */}
      <div className="mt-10 flex items-center justify-center">
        <button className="bg-blue-500 text-white px-6 py-3 rounded-lg shadow-md ml-4">
          Confirm
        </button>
      </div>
    </div>
  );
}

export default OrderReview;
