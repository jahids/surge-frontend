import React, { useEffect, useState } from 'react';
import { FaRegClock, FaMoneyBillAlt } from 'react-icons/fa'; // Import icons as needed
import { instance } from '../../lib/AxiosInstance';
import { truncateText } from '../../Utils/converter';
import BackButton from '../../Components/globalBackButton/BackButton';

function Statement() {
  const [transactions, setTransactions] = useState([]);

  useEffect(() => {
    const loaddata = async () => {
      try {
        const response = await instance.get(`/ach/fund-history`);
        const data = response.data.data; // Assuming your transactions are in response.data.data

        setTransactions(data);
      } catch (error) {
        console.log('error data-->', error);
      }
    };
    loaddata();
  }, []);

  return (
    <div className="bg-gray-100 h-screen p-4">

      <BackButton />

      <h1 className="text-3xl font-bold mb-6">Statement</h1>

      {transactions?.map(transaction => (
        <div
          key={transaction?.id}
          className="bg-white  p-5 mb-5 rounded-md shadow-md flex justify-between items-center"
        >
          <div className="flex items-center space-x-4">
            {transaction?.amount < 0 ? (
              <div className="bg-red-500 text-white rounded-full p-2">
                <FaMoneyBillAlt />
              </div>
            ) : (
              <div className="bg-green-500 text-4xl text-white rounded-full p-2">
                <FaMoneyBillAlt />
              </div>
            )}
            <div>
              <h2 className="text-xl font-semibold">{transaction?.status}</h2>
              <p className="text-gray-600 text-lg">
                {new Date(transaction?.created_at).toLocaleString()}
              </p>
              <p className="text-gray-600 text-lg">
                ID: {truncateText(transaction.id, 8)}
              </p>
            </div>
          </div>
          <div
            className={
              transaction.amount < 0 ? 'text-red-500' : 'text-green-500'
            }
          >
            {transaction.amount < 0 ? '-' : '+'}${Math.abs(transaction.amount)}
          </div>
        </div>
      ))}
    </div>
  );
}

export default Statement;
