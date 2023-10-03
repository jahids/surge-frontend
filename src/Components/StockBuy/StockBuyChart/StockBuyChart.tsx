import HistoricalChart from './HistoricalChart';

const StockBuyChart = ({ symbol }: any) => {
  console.log('symbol--', symbol);
  return (
    <div className=" mt-6 rounded-md">
      <HistoricalChart Symbol={symbol} />
    </div>
  );
};

export default StockBuyChart;
