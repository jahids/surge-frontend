import React, { useState, useEffect, useCallback } from 'react';
import Chart from 'react-apexcharts';
import axios from 'axios';
import moment from 'moment';
import Loader from '../../Loader/Loader';

import { instance } from '../../../lib/AxiosInstance';

const HistoricalChart = ({ Symbol }: any) => {
  console.log('symbol come parent ', Symbol);

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
        `/history/${Symbol || 'ORAN'}/${endDate}/${startDate}`
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
    const chart = ApexCharts.getChartByID('stockcc');
    chart?.hideSeries('Low Price');

    console.log('-->id', chart);
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
      id: 'stockcc',
      type: 'area',
      height: 400,
      toolbar: {
        show: false,
      },

      // events: {
      //   click: function (ev: any, ctx: any, cf: any) {
      //     console.log('✔😢', ev, ctx, cf);
      //   },
      // },
    },
    grid: {
      show: false,
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
    <div className="flex flex-col items-center mb-5">
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
          }  rounded focus:outline-none transition duration-300`}
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
          } px-1 rounded focus:outline-none transition duration-300`}
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
          } px-1 rounded focus:outline-none transition duration-300`}
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
          } px-1 rounded focus:outline-none transition duration-300`}
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
          }px-1  rounded focus:outline-none transition duration-300`}
          disabled={isLoading}
        >
          15 days
        </button>
      </div>
    </div>
  );
};

export default HistoricalChart;

// -------

// import React, { useState, useEffect, useCallback } from 'react';
// import Chart from 'react-apexcharts';
// import axios from 'axios';
// import moment from 'moment';
// import Loader from '../../Loader/Loader';

// import { instance } from '../../../lib/AxiosInstance';

// const HistoricalChart = ({ Symbol }: any) => {
//   console.log('symbol come parent ', Symbol);

//   const [stockData, setStockData] = useState([]);
//   const [highPriceData, setHighPriceData] = useState([]);
//   const [closePriceData, setClosePriceData] = useState([]);
//   const [lowPriceData, setLowPriceData] = useState([]);
//   const [selectedPeriod, setSelectedPeriod] = useState('365');
//   const [isLoading, setIsLoading] = useState(false);

//   const [stockPriceEnabled, setStockPriceEnabled] = useState(true);
//   const [highPriceEnabled, setHighPriceEnabled] = useState(false);
//   const [closePriceEnabled, setClosePriceEnabled] = useState(false);
//   const [lowPriceEnabled, setLowPriceEnabled] = useState(false);

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

//   const toggleSeriesVisibility = seriesName => {
//     switch (seriesName) {
//     case 'Stock Price':
//       setStockPriceEnabled(!stockPriceEnabled);
//       break;
//     case 'High Price':
//       setHighPriceEnabled(!highPriceEnabled);
//       break;
//     case 'Close Price':
//       setClosePriceEnabled(!closePriceEnabled);
//       break;
//     case 'Low Price':
//       setLowPriceEnabled(!lowPriceEnabled);
//       break;
//     default:
//       break;
//     }
//   };

//   const series = [
//     {
//       name: 'Stock Price',
//       data: stockData,
//       visible: stockPriceEnabled,
//     },
//     {
//       name: 'High Price',
//       data: highPriceData,
//       visible: highPriceEnabled,
//     },
//     {
//       name: 'Close Price',
//       data: closePriceData,
//       visible: closePriceEnabled,
//     },
//     {
//       name: 'Low Price',
//       data: lowPriceData,
//       visible: lowPriceEnabled,
//     },
//   ];

//   const options = {
//     chart: {
//       type: 'area',
//       height: 400,
//       toolbar: {
//         show: false,
//       },
//     },
//     grid: {
//       show: false,
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
//         {/* ... other buttons for different periods */}
//       </div>

//       <div className="space-x-2 mt-4">
//         <button
//           onClick={() => toggleSeriesVisibility('Stock Price')}
//           className={`${
//             stockPriceEnabled
//               ? 'bg-blue-500 text-white'
//               : 'bg-gray-200 text-gray-800'
//           }  rounded focus:outline-none transition duration-300`}
//           disabled={isLoading}
//         >
//           Stock Price
//         </button>
//         <button
//           onClick={() => toggleSeriesVisibility('High Price')}
//           className={`${
//             highPriceEnabled
//               ? 'bg-blue-500 text-white'
//               : 'bg-gray-200 text-gray-800'
//           }  rounded focus:outline-none transition duration-300`}
//           disabled={isLoading}
//         >
//           High Price
//         </button>
//         <button
//           onClick={() => toggleSeriesVisibility('Close Price')}
//           className={`${
//             closePriceEnabled
//               ? 'bg-blue-500 text-white'
//               : 'bg-gray-200 text-gray-800'
//           }  rounded focus:outline-none transition duration-300`}
//           disabled={isLoading}
//         >
//           Close Price
//         </button>
//         <button
//           onClick={() => toggleSeriesVisibility('Low Price')}
//           className={`${
//             lowPriceEnabled
//               ? 'bg-blue-500 text-white'
//               : 'bg-gray-200 text-gray-800'
//           }  rounded focus:outline-none transition duration-300`}
//           disabled={isLoading}
//         >
//           Low Price
//         </button>
//       </div>
//     </div>
//   );
// };

// export default HistoricalChart;
