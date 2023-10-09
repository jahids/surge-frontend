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
  const [selectedPeriod, setSelectedPeriod] = useState('7');
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
      // setHighPriceData(highPrices);
      // setClosePriceData(closePrices);
      // setLowPriceData(lowPrices);

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
    // {
    //   name: 'High Price',
    //   data: highPriceData,
    // },
    // {
    //   name: 'Close Price',
    //   data: closePriceData,
    // },
    // {
    //   name: 'Low Price',
    //   data: lowPriceData,
    // },
  ];

  const options = {
    chart: {
      type: 'area',
      height: 400,
      toolbar: {
        show: false,
      },
    },
    dataLabels: {
      enabled: false,
    },
    grid: {
      show: false,
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

  const cssClasses = `badge py-3 focus:outline-none px-4 transition duration-300`;

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
              ? 'bg-indigo-500 text-white'
              : 'bg-gray-200 text-gray-800'
          }  ${cssClasses} `}
          disabled={isLoading}
        >
          7 days
        </button>
        <button
          onClick={() => handlePeriodChange('30')}
          className={`${
            selectedPeriod === '30'
              ? 'bg-indigo-500 text-white'
              : 'bg-gray-200 text-gray-800'
          }  ${cssClasses} `}
          disabled={isLoading}
        >
          1 month
        </button>
        <button
          onClick={() => handlePeriodChange('365')}
          className={`${
            selectedPeriod === '365'
              ? 'bg-indigo-500 text-white'
              : 'bg-gray-200 text-gray-800'
          } ${cssClasses} `}
          disabled={isLoading}
        >
          1 year
        </button>
        {/* <button
          onClick={() => handlePeriodChange('182')}
          className={`${selectedPeriod === '182'
              ? 'bg-blue-500 text-white'
              : 'bg-gray-200 text-gray-800'
            } px-1 rounded focus:outline-none transition duration-300`}
          disabled={isLoading}
        >
          6 months
        </button>
        <button
          onClick={() => handlePeriodChange('15')}
          className={`${selectedPeriod === '15'
              ? 'bg-blue-500 text-white'
              : 'bg-gray-200 text-gray-800'
            }px-1  rounded focus:outline-none transition duration-300`}
          disabled={isLoading}
        >
          15 days
        </button> */}
      </div>
    </div>
  );
};

export default HistoricalChart;
