// import React, { useState, useEffect, useCallback } from 'react';
// import Chart from 'react-apexcharts';
// import moment from 'moment';
// import { instance } from '../../lib/AxiosInstance';
// import Loader from '../Loader/Loader';

// const PortfolioChart = ({ Symbol }: any) => {
//   console.log('symbol come parent ', Symbol);

//   const [stockData, setStockData] = useState([]);
//   const [highPriceData, setHighPriceData] = useState([]);
//   const [closePriceData, setClosePriceData] = useState([]);
//   const [lowPriceData, setLowPriceData] = useState([]);
//   const [selectedPeriod, setSelectedPeriod] = useState('365');
//   const [isLoading, setIsLoading] = useState(false);

//   const fetchData = useCallback(async period => {
//     setIsLoading(true);

//     try {
//       const startDate = moment().subtract(period, 'days').format('YYYY-MM-DD');
//       const endDate = moment().format('YYYY-MM-DD');

//       const response = await instance.get(
//         `/history/${Symbol || 'ORAN'}/${endDate}/${startDate}`
//       );

//       const data = response?.data?.data.data || [];

//       const stockPrices = data.map(item => ({
//         x: new Date(item.date).getTime(),
//         y: [item?.open],
//       }));

//       const highPrices = data.map(item => ({
//         x: new Date(item.date).getTime(),
//         y: [item?.high],
//       }));

//       const closePrices = data.map(item => ({
//         x: new Date(item.date).getTime(),
//         y: [item?.close],
//       }));

//       const lowPrices = data.map(item => ({
//         x: new Date(item.date).getTime(),
//         y: [item?.low],
//       }));

//       setStockData(stockPrices);
//       setHighPriceData(highPrices);
//       setClosePriceData(closePrices);
//       setLowPriceData(lowPrices);

//       setIsLoading(false);
//     } catch (error) {
//       console.error('Error fetching data:', error);
//       setIsLoading(false);
//     }
//   }, []);

//   useEffect(() => {
//     fetchData(selectedPeriod);
//   }, [fetchData, selectedPeriod]);

//   const series = [
//     {
//       name: 'Stock Price',
//       data: stockData,
//     },
//     {
//       name: 'High Price',
//       data: highPriceData,
//     },
//     {
//       name: 'Close Price',
//       data: closePriceData,
//     },
//     {
//       name: 'Low Price',
//       data: lowPriceData,
//     },
//   ];

//   const options = {
//     chart: {
//       type: 'area',
//       height: 400,
//     },
//     dataLabels: {
//       enabled: false,
//     },

//     xaxis: {
//       type: 'datetime',
//       tooltip: {
//         enabled: false,
//       },
//       labels: {
//         show: false,
//       },
//     },
//     yaxis: {
//       tooltip: {
//         enabled: false,
//       },
//       labels: {
//         show: false,
//       },
//     },
//     // title: {
//     //   text: `Historical Stock Price (${selectedPeriod} days)`,
//     //   align: 'left',
//     // },
//   };

//   const handlePeriodChange = period => {
//     setSelectedPeriod(period);
//   };

//   return (
//     <div className="flex flex-col items-center mb-5">
//       {isLoading ? (
//         <Loader />
//       ) : (
//         <div className="w-full">
//           <Chart options={options} series={series} type="area" height={350} />
//         </div>
//       )}

//       <div className="space-x-2 mt-4">
//         <button
//           onClick={() => handlePeriodChange('7')}
//           className={`${
//             selectedPeriod === '7'
//               ? 'bg-blue-500 text-white'
//               : 'bg-gray-200 text-gray-800'
//           }  rounded focus:outline-none transition duration-300`}
//           disabled={isLoading}
//         >
//           7 days
//         </button>
//         <button
//           onClick={() => handlePeriodChange('30')}
//           className={`${
//             selectedPeriod === '30'
//               ? 'bg-blue-500 text-white'
//               : 'bg-gray-200 text-gray-800'
//           } px-1 rounded focus:outline-none transition duration-300`}
//           disabled={isLoading}
//         >
//           1 month
//         </button>
//         <button
//           onClick={() => handlePeriodChange('365')}
//           className={`${
//             selectedPeriod === '365'
//               ? 'bg-blue-500 text-white'
//               : 'bg-gray-200 text-gray-800'
//           } px-1 rounded focus:outline-none transition duration-300`}
//           disabled={isLoading}
//         >
//           1 year
//         </button>
//         <button
//           onClick={() => handlePeriodChange('182')}
//           className={`${
//             selectedPeriod === '182'
//               ? 'bg-blue-500 text-white'
//               : 'bg-gray-200 text-gray-800'
//           } px-1 rounded focus:outline-none transition duration-300`}
//           disabled={isLoading}
//         >
//           6 months
//         </button>
//         <button
//           onClick={() => handlePeriodChange('15')}
//           className={`${
//             selectedPeriod === '15'
//               ? 'bg-blue-500 text-white'
//               : 'bg-gray-200 text-gray-800'
//           }px-1  rounded focus:outline-none transition duration-300`}
//           disabled={isLoading}
//         >
//           15 days
//         </button>
//       </div>
//     </div>
//   );
// };

// export default PortfolioChart;

// ----------------------

import React, { useState, useEffect, useCallback } from 'react';
import Chart from 'react-apexcharts';
import moment from 'moment';
import { instance } from '../../lib/AxiosInstance';
import Loader from '../Loader/Loader';

const PortfolioChart = ({ Symbol }: any) => {
  const [isLoading, setIsLoading] = useState(false);

  // Dummy JSON data for stock prices
  const dummyData = [
    { date: '2023-09-01', close: 150 },
    { date: '2023-09-02', close: 155 },
    { date: '2023-09-03', close: 160 },
    // Add more data points as needed
  ];

  // Extract close prices from dummy data
  const stockData = dummyData.map(item => item.close);

  const options = {
    chart: {
      type: 'line',
      width: '100%',
      height: '100%',
      sparkline: {
        enabled: true,
      },
    },
    dataLabels: {
      enabled: false,
    },
    stroke: {
      curve: 'smooth',
    },
    xaxis: {
      categories: dummyData.map(item => item.date),
    },
  };

  return (
    <div>
      <div>
        <Chart options={options} series={[{ data: stockData }]} type="line" />
      </div>
    </div>
  );
};

export default PortfolioChart;
