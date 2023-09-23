import React, { useState } from 'react';
import { instance } from '../../lib/AxiosInstance';
// You can import other icons as needed

function Addfund() {
  const [getamount, setgetamount] = useState(null);
  const handleClick = async () => {
    console.log('amount get', getamount);

    try {
      const data = await instance.post(`/ach/add-fund`, {
        amount: getamount,
      });
      console.log('data come form api', data);
      setgetamount('');
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="bg-gray-100 h-screen p-4">
      <div className="text-center mb-6">
        {/* <FaRegMoneyBillAlt className="text-8xl text-blue-500" /> */}
        <h1 className="text-3xl font-bold mt-4 py-10">Add Funds</h1>
      </div>

      <div className="bg-white p-6 rounded-md shadow-md">
        <div className="mb-6">
          <h1 className="text-2xl font-semibold ">Bank Name</h1>
          <p className="text-gray-600 text-lg">Your Bank Name</p>
        </div>
        <div className="mb-6">
          <h1 className="text-2xl font-semibold">Enter Your Amount</h1>
          <input
            type="number"
            value={getamount}
            onChange={e => setgetamount(e.target.value)}
            placeholder="Enter your amount"
            className="w-full border border-gray-300 rounded-md p-3 text-lg focus:outline-none focus:border-blue-500"
          />
        </div>
        <div className="text-center">
          <button
            onClick={handleClick}
            type="button"
            className="bg-blue-500 text-white px-8 py-4 rounded-lg text-2xl hover:bg-blue-600 focus:outline-none"
          >
            Confirm
          </button>
        </div>
      </div>
    </div>
  );
}

export default Addfund;
