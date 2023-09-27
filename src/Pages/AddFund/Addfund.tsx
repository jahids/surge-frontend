import React, { useEffect, useState } from 'react';
import { instance } from '../../lib/AxiosInstance';
import { Link, useNavigate } from 'react-router-dom';
import { MdOutlineArrowBackIos } from 'react-icons/md';
// You can import other icons as needed

function Addfund() {
  const [getamount, setgetamount] = useState(null);
  const [bankdetails, setbankdetails] = useState([]);
  const navigate = useNavigate();
  useEffect(() => {
    const singleItemCall = async () => {
      try {
        const achData = await instance.get(`/ach`);
        setbankdetails(achData?.data?.data[0]);
        console.log('response', achData);
      } catch (error) {
        console.log('error', error);
      }
    };
    singleItemCall();
  }, []); // Include api and state in the dependency array

  console.log('bank details', bankdetails);

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
    <div className="">
      <div className="flex-1  p-4">
        <div>
          <Link onClick={() => navigate('/profile')}>
            <div className="py-4 w-[30px]">
              <MdOutlineArrowBackIos className="text-[30px] text-gray-500" />
            </div>
          </Link>
        </div>
      </div>
      <div className="text-center ">
        {/* <FaRegMoneyBillAlt className="text-8xl text-blue-500" /> */}
        <h1 className="text-3xl font-bold ">Add Funds</h1>
      </div>
      <div className="bg-white p-6 rounded-md ">
        <div className="mb-6">
          <h1 className="text-xl font-semibold">Bank Name</h1>
          <p className="w-full text-xl bg-gray-100 font-extrabold mt-5 text-center rounded-lg py-5 px-4 focus:outline-none focus:ring-2 focus:ring-blue-200 transition duration-300 ease-in-out transform hover:scale-105">
            {bankdetails?.nickname}
          </p>
        </div>

        <div className="mb-6">
          <h1 className="text-xl font-semibold">Amount</h1>
          <input
            type="number"
            value={getamount}
            onChange={e => setgetamount(e.target.value)}
            placeholder="Enter your amount"
            className="w-full text-xl bg-gray-100 font-extrabold  text-center rounded-lg py-5 px-4 focus:outline-none focus:ring-2 focus:ring-blue-200 transition duration-300 ease-in-out transform hover:scale-105"
          />
        </div>

        <div className="mb-6">
          <h1 className="text-xl font-semibold  ">Bank Status</h1>
          <p className="w-full text-xl bg-gray-100 font-extrabold mt-5 text-center rounded-lg py-5 px-4 focus:outline-none focus:ring-2 focus:ring-blue-200 transition duration-300 ease-in-out transform hover:scale-105">
            {bankdetails?.status}
          </p>
        </div>

        <div className="mb-6">
          <h1 className="text-xl font-semibold  ">Account Number</h1>
          <p className="w-full text-xl bg-gray-100 font-extrabold mt-5 text-center rounded-lg py-5 px-4 focus:outline-none focus:ring-2 focus:ring-blue-200 transition duration-300 ease-in-out transform hover:scale-105">
            {bankdetails?.bank_account_number}
          </p>
        </div>

        <div className="mt-5 text-center  absulate">
          <button
            onClick={handleClick}
            type="submit"
            className="bg-blue-500 w-full text-white py-2 px-4 rounded-lg font-semibold hover:bg-blue-300 focus:outline-none focus:bg-blue-300"
          >
            Confirm
          </button>
        </div>
      </div>
    </div>
  );
}

export default Addfund;
