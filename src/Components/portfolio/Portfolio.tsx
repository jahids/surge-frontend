// // import React from 'react';

// // function Portfolio() {
// //   return <div>Portfolio</div>;
// // }

// // export default Portfolio;

// import React, { useState, useEffect } from 'react';
// import Chart from 'react-apexcharts';
// import axios from 'axios';
// import { instance } from '../../lib/AxiosInstance';

// const App = () => {
//   const [dataSeries, setDataSeries] = useState([]);
//   const [selectedPeriod, setSelectedPeriod] = useState('2022-01-01');
//   const [isLoading, setIsLoading] = useState(true);

//   useEffect(() => {
//     const fetchData = async () => {
//       setIsLoading(true);

//       try {
//         const response = await instance.get(
//           `/history/${'ORAN'}/${'2023-09-23'}/${selectedPeriod}`
//         );
//         console.log('response', response);

//         const data = response?.data?.data.data?.map(item => ({
//           x: new Date(item.date).getTime(),
//           y: [item?.open, item?.high, item?.low, item?.close],
//         }));

//         setDataSeries(data);
//         setIsLoading(false);
//       } catch (error) {
//         console.error('Error fetching data:', error);
//         setIsLoading(false);
//       }
//     };

//     fetchData();
//   }, []);

//   const series = [
//     {
//       name: 'Stock Price',
//       data: dataSeries,
//     },
//   ];

//   const options = {
//     chart: {
//       type: 'area',
//       height: 350,
//     },
//     xaxis: {
//       type: 'datetime',
//     },
//     yaxis: {
//       tooltip: {
//         enabled: true,
//       },
//     },
//     title: {
//       text: `Historical Stock Price (${selectedPeriod})`,
//       align: 'left',
//     },
//   };

//   const handlePeriodChange = period => {
//     setSelectedPeriod(period);
//   };

//   return (
//     <div>
//       <h1>Historical Stock Price Chart</h1>

//       {isLoading ? (
//         <p>Loading...</p>
//       ) : (
//         <Chart options={options} series={series} type="area" height={350} />
//       )}
//       <div>
//         <button onClick={() => handlePeriodChange('2023-04-01')}>7 days</button>
//         <button onClick={() => handlePeriodChange('2022-01-01')}>
//           1 month
//         </button>
//         <button onClick={() => handlePeriodChange('2023-08-01')}>1 year</button>
//       </div>
//     </div>
//   );
// };

// export default App;

// ----

// import React, { useState, useEffect } from 'react';
// import Chart from 'react-apexcharts';
// import axios from 'axios';
// // eslint-disable-next-line import/no-unresolved
// import moment from 'moment'; // Import moment.js
// import { instance } from '../../lib/AxiosInstance';
// import Loader from '../Loader/Loader';

// const App = () => {
//   const [dataSeries, setDataSeries] = useState([]);
//   const [selectedPeriod, setSelectedPeriod] = useState('365'); // Default to 7 days
//   const [isLoading, setIsLoading] = useState(true);

//   console.log('dataSeries', dataSeries);

//   useEffect(() => {
//     const fetchData = async () => {
//       setIsLoading(true);

//       try {
//         const startDate = moment()
//           .subtract(selectedPeriod, 'days')
//           .format('YYYY-MM-DD');
//         const endDate = moment().format('YYYY-MM-DD');

//         const response = await instance.get(
//           `/history/${'ORAN'}/${endDate}/${startDate}`
//         );

//         const data = response?.data?.data.data?.map(item => ({
//           x: new Date(item.date).getTime(),
//           y: [item?.open, item?.high, item?.low, item?.close],
//         }));

//         setDataSeries(data);
//         setIsLoading(false);
//       } catch (error) {
//         console.error('Error fetching data:', error);
//         setIsLoading(false);
//       }
//     };

//     fetchData();
//   }, [selectedPeriod]); // Add selectedPeriod as a dependency

//   const series = [
//     {
//       name: 'Stock Price',
//       data: dataSeries,
//     },
//     {
//       name: 'high price',
//       data: dataSeries,
//     },
//     {
//       name: 'close price',
//       data: dataSeries,
//     },
//     {
//       name: 'low price',
//       data: dataSeries,
//     },
//   ];

//   const options = {
//     chart: {
//       type: 'area',
//       height: 350,
//     },
//     xaxis: {
//       type: 'datetime',
//     },
//     yaxis: {
//       tooltip: {
//         enabled: true,
//       },
//     },
//     title: {
//       text: `Historical Stock Price (${selectedPeriod} days)`,
//       align: 'left',
//     },
//   };

//   const handlePeriodChange = period => {
//     setSelectedPeriod(period);
//   };

//   return (
//     <div>
//       <h1>Historical Stock Price Chart</h1>

//       {isLoading ? (
//         <Loader />
//       ) : (
//         <Chart options={options} series={series} type="area" height={350} />
//       )}

//       <div>
//         <button onClick={() => handlePeriodChange('7')}>7 days</button>
//         <button onClick={() => handlePeriodChange('30')}>1 month</button>
//         <button onClick={() => handlePeriodChange('365')}>1 year</button>
//         <button onClick={() => handlePeriodChange('182')}>6 month</button>
//         <button onClick={() => handlePeriodChange('15')}>15 days</button>
//       </div>
//     </div>
//   );
// };

// export default App;

// ---

import React, { useState, useEffect, useCallback } from 'react';
import Chart from 'react-apexcharts';
import axios from 'axios';
import moment from 'moment';
import Loader from '../Loader/Loader';

import { instance } from '../../lib/AxiosInstance';

const App = () => {
  const [stockData, setStockData] = useState([]);
  const [highPriceData, setHighPriceData] = useState([]);
  const [closePriceData, setClosePriceData] = useState([]);
  const [lowPriceData, setLowPriceData] = useState([]);
  const [selectedPeriod, setSelectedPeriod] = useState('365');
  const [isLoading, setIsLoading] = useState(false);

  const fetchData = useCallback(async period => {
    setIsLoading(true);

    try {
      const startDate = moment().subtract(period, 'days').format('YYYY-MM-DD');
      const endDate = moment().format('YYYY-MM-DD');

      const response = await instance.get(
        `/history/${'ORAN'}/${endDate}/${startDate}`
      );

      const data = response?.data?.data.data || [];

      const stockPrices = data.map(item => ({
        x: new Date(item.date).getTime(),
        y: [item?.open],
      }));

      const highPrices = data.map(item => ({
        x: new Date(item.date).getTime(),
        y: [item?.high],
      }));

      const closePrices = data.map(item => ({
        x: new Date(item.date).getTime(),
        y: [item?.close],
      }));

      const lowPrices = data.map(item => ({
        x: new Date(item.date).getTime(),
        y: [item?.low],
      }));

      setStockData(stockPrices);
      setHighPriceData(highPrices);
      setClosePriceData(closePrices);
      setLowPriceData(lowPrices);

      setIsLoading(false);
    } catch (error) {
      console.error('Error fetching data:', error);
      setIsLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchData(selectedPeriod);
  }, [fetchData, selectedPeriod]);

  const series = [
    {
      name: 'Stock Price',
      data: stockData,
    },
    {
      name: 'High Price',
      data: highPriceData,
    },
    {
      name: 'Close Price',
      data: closePriceData,
    },
    {
      name: 'Low Price',
      data: lowPriceData,
    },
  ];

  const options = {
    chart: {
      type: 'area',
      height: 400,
    },
    dataLabels: {
      enabled: false,
    },

    xaxis: {
      type: 'datetime',
      tooltip: {
        enabled: false,
      },
      labels: {
        show: false,
      },
    },
    yaxis: {
      tooltip: {
        enabled: false,
      },
      labels: {
        show: false,
      },
    },
    // title: {
    //   text: `Historical Stock Price (${selectedPeriod} days)`,
    //   align: 'left',
    // },
  };

  const handlePeriodChange = period => {
    setSelectedPeriod(period);
  };

  return (
    <div className="flex flex-col items-center">
      <h1 className="text-2xl font-bold mt-4">Historical Stock Price Chart</h1>

      {isLoading ? (
        <Loader />
      ) : (
        <div className="w-full">
          <Chart options={options} series={series} type="area" height={350} />
        </div>
      )}

      <div className="space-x-2 mt-4">
        <button
          onClick={() => handlePeriodChange('7')}
          className={`${
            selectedPeriod === '7'
              ? 'bg-blue-500 text-white'
              : 'bg-gray-200 text-gray-800'
          } px-4 py-1 rounded focus:outline-none transition duration-300`}
          disabled={isLoading}
        >
          7 days
        </button>
        <button
          onClick={() => handlePeriodChange('30')}
          className={`${
            selectedPeriod === '30'
              ? 'bg-blue-500 text-white'
              : 'bg-gray-200 text-gray-800'
          } px-2 py-1 rounded focus:outline-none transition duration-300`}
          disabled={isLoading}
        >
          1 month
        </button>
        <button
          onClick={() => handlePeriodChange('365')}
          className={`${
            selectedPeriod === '365'
              ? 'bg-blue-500 text-white'
              : 'bg-gray-200 text-gray-800'
          } px-2 py-1 rounded focus:outline-none transition duration-300`}
          disabled={isLoading}
        >
          1 year
        </button>
        <button
          onClick={() => handlePeriodChange('182')}
          className={`${
            selectedPeriod === '182'
              ? 'bg-blue-500 text-white'
              : 'bg-gray-200 text-gray-800'
          } px-2 py-1 rounded focus:outline-none transition duration-300`}
          disabled={isLoading}
        >
          6 months
        </button>
        <button
          onClick={() => handlePeriodChange('15')}
          className={`${
            selectedPeriod === '15'
              ? 'bg-blue-500 text-white'
              : 'bg-gray-200 text-gray-800'
          } px-2 py-1 rounded focus:outline-none transition duration-300`}
          disabled={isLoading}
        >
          15 days
        </button>
      </div>
    </div>
  );
};

export default App;
