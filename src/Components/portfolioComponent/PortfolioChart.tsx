import React, { useState, useEffect, useCallback } from 'react';
import Chart from 'react-apexcharts';
import moment from 'moment';
import { instance } from '../../lib/AxiosInstance';
import Loader from '../Loader/Loader';

const PortfolioChart = ({ Symbol, gainloss }: any) => {
  const [isLoading, setIsLoading] = useState(false);

  const [portfolioHistoryData, setPortfolioHistoryData] = useState();

  // Dummy JSON data for stock prices
  const dummyData = [
    { date: '2023-09-01', close: 150 },
    { date: '2023-09-02', close: 155 },
    { date: '2023-09-03', close: 110 },
    { date: '2023-09-03', close: 140 },
    { date: '2023-09-03', close: 120 },
    { date: '2023-09-03', close: 190 },
    // Add more data points as needed
  ];

  useEffect(() => {
    const dbCall = async () => {
      const { data: { data: { values } } } = await instance.get(`/portfolio/history`);
      const finalData = values?.map((v: any) => v.value);

      // console.log(`🔥🔥`, values);
      setPortfolioHistoryData(finalData);
    };
    dbCall();
  }, []);

  // Extract close prices from dummy data
  const stockData = dummyData.map(item => item.close);

  // Define colors based on gainloss
  const lineColor = gainloss > 0 ? '#4ac468' : '#FF0000';

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
      colors: [lineColor], // Set the line color based on gainloss
    },
    xaxis: {
      categories: dummyData.map(item => item.date),
    },
  };

  return (
    <div>
      <div>
        <Chart options={options} series={[{ data: portfolioHistoryData }]} type="line" />
      </div>
    </div>
  );
};

export default PortfolioChart;
