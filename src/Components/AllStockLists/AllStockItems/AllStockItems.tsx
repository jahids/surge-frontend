/* eslint-disable @typescript-eslint/no-unused-vars */

import SingleStockItem from './SingleStockItem';

const AllStockItems = ({ Stockdata }: any) => {
  return (
    <div className="mt-8">
      {Stockdata?.map((item: any) => (
        <SingleStockItem key={Math.random()} data={item} />
      ))}
    </div>
  );
};

export default AllStockItems;
