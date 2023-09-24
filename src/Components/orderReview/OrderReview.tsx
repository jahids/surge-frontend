/* eslint-disable jsx-a11y/img-redundant-alt */
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

import React, { useEffect, useState } from 'react';
// import { ArrowBack } from 'react-icons/ai';
import { BiImage } from 'react-icons/bi';
import { useLocation, useNavigate } from 'react-router-dom';
import { instance } from '../../lib/AxiosInstance';
import { notifySuccess } from '../../lib/Toastify';

function OrderReview() {
  const navigate = useNavigate();

  const { state } = useLocation();

  const handleConfirm = () => {
    console.log(`firing order : `, state);
    const orderObj = {
      ...state,
    };
    delete orderObj['_data'];

    // console.log(orderObj);
    instance
      .post(`/order/`, orderObj)
      .then(res => {
        console.log(res);
        notifySuccess(`Successfully placed order for ${state.symbol}`,3000);
      })
      .catch(er => console.log(er));
  };

  useEffect(() => {
    console.log(state);
  }, []);

  return (
    <div className=" h-screen p-4">
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
            <h3 className="text-lg font-bold">Buy {state?._data?.name} </h3>
            <p> {state?._data?.symbol} </p>
          </div>
          <div className="w-16 h-16">
            <img
              src={state?._data.logo ?? 'https://via.placeholder.com/48'}
              alt="Stock Image"
              className="w-full h-full rounded-md"
            />
          </div>
        </div>
      </div>

      <div className="mt-4 p-2 bg-white rounded-md shadow-md">
        {/* <span className="text-white flex items-center"> */}
        <textarea
          className="textarea w-full text-lg font-bold"
          placeholder="Bio"
          value={state.post}
          disabled
        ></textarea>
        {/* <BiImage className="mr-2" /> */}
        {/* Another Image */}

        {/* </span> */}
      </div>

      <div className="mt-4 p-4 bg-white rounded-md shadow-md">
        <div className="flex justify-between">
          <div>
            {/* <h1 className="text-lg py-2 font-bold">Privacy</h1> */}
            <h1 className="text-lg py-2 font-bold">Stock Price</h1>
            <h1 className="text-lg py-2 font-bold">Quantity</h1>

            <h1 className="text-lg py-2 font-bold">Amount</h1>
            {state?.type == 'limit' ? (
              <h1 className="text-lg py-2 font-bold">Limit Price</h1>
            ) : null}
            <h1 className="text-lg py-2 font-bold">Type</h1>
          </div>
          <div>
            {/* <h1 className="text-lg py-2 font-bold">Public</h1> */}
            <h1 className="text-lg py-2 font-bold"> {state.singlePrice} </h1>
            <h1 className="text-lg py-2 font-bold"> {state.quantity} </h1>
            <h1 className="text-lg py-2 font-bold"> ${state.totalPrice} </h1>
            {state?.type == 'limit' ? (
              <h1 className="text-lg py-2 font-bold"> {state.limitPrice} </h1>
            ) : null}
            <h1 className="text-lg py-2 font-bold"> {state.type} </h1>
          </div>
        </div>
      </div>
      {/* <h1 className="text-gray-700">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      </h1> */}
      <div className="mt-10 flex w-full items-center justify-center">
        <button
          onClick={handleConfirm}
          className="bg-blue-500 w-full text-white px-6 py-3 rounded-lg shadow-"
        >
          Confirm
        </button>
      </div>
    </div>
  );
}

export default OrderReview;

/*
{
    "symbol": "MPLX",
    "singlePrice": 35.03,
    "quantity": "1.2",
    "totalPrice": "42.04",
    "limitPrice": "",
    "post": "this is my awesome thought",
    "type": "market",
}
*/
/*

limitPrice: "7"
post: "chilling"
quantity: "2.5"
singlePrice: 7.15
symbol: "BPT"
totalPrice: "17.88"
type: "limit"

*/
