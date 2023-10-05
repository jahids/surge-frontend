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
import { notifyError, notifySuccess } from '../../lib/Toastify';
import BackButton from '../globalBackButton/BackButton';

function OrderReview() {
  const navigate = useNavigate();

  const { state } = useLocation();
  console.log('state ->>🍖', state);

  const handleConfirm = () => {
    console.log(`firing order : `, state);
    const orderObj = {
      ...state,
      links: [state?.gif],
    };
    delete orderObj['_data'];

    // console.log(orderObj);
    if (state?.sell === true) {
      instance
        .post(`/order/sell`, orderObj)
        .then(res => {
          console.log(res);
          notifySuccess(
            `Successfully placed sell order for ${state.symbol}`,
            3000
          );
        })
        .catch(er => {
          console.error('err', er);
          notifyError(`sell order not placed  ${state.symbol}`, 3000);
        });
    } else {
      instance
        .post(`/order/`, orderObj)
        .then(res => {
          console.log(res);
          notifySuccess(`Successfully placed order for ${state.symbol}`, 3000);
        })
        .catch(er => console.log(er));
    }
  };

  return (
    <div className=" h-screen p-4">
      <div className="flex items-center justify-between">
        <BackButton />
        <span className="text-lg font-bold">Order Review</span>
      </div>

      {/* <div className="mt-4 p-4 bg-white rounded-md shadow-md">
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
      </div> */}

      {/* added new one */}
      <div className="mt-5 bg-gray-100 p-3 rounded-lg">
        <div className="flex items-center space-x-2">
          <div className="object-cover">
            <img
              className="w-7 h-7 rounded-full"
              src={state?._data.logo}
              alt=""
            />
          </div>
          <div>
            <p className="text-sm">{state?.sell === true ? 'Sell' : 'Buy'}</p>
            <p className="text-sm">
              <span className="font-bold">{state?._data?.symbol}</span> at $
              {state?.totalPrice}
            </p>
          </div>
        </div>
      </div>

      <div style={{ width: '90%', margin: '0px auto', marginTop: '8px' }}>
        <img style={{ borderRadius: '12px' }} src={state?.gif || ''} />
      </div>

      <div className="mt-5">
        <p className="text-sm text-justify">{state.post}</p>
      </div>
      {/* added new end */}

      {/* <div className="mt-4 p-2 bg-white rounded-md shadow-md"> */}
      {/* <span className="text-white flex items-center"> */}
      {/* <textarea
          className="textarea w-full text-lg font-bold"
          placeholder="Bio"
          value={state.post}
          disabled
        ></textarea> */}
      {/* <BiImage className="mr-2" /> */}
      {/* Another Image */}

      {/* </span> */}
      {/* </div> */}

      {/* <div className="mt-4 p-2 bg-white rounded-md shadow-md">
        <img
          src={state?.gif || ''}
          className="gif-preview w-20 h-20 mx-auto rounded-md"
          alt="Selected GIF"
        />
      </div> */}

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
