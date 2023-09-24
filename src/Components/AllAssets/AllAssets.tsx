import { useState } from 'react';
import { useGetAllStockQuery } from '../../features/stock/allStockApiSlice';
import Loader from '../Loader/Loader';
import AssetsList from './AssetsList/AssetsList';
import AssetsSearch from './AssetsSearch/AssetsSearch';
import DoneBtn from './DoneBtn/DoneBtn';

const selected = new Set();

const AllAssets = () => {
  const {
    data: allStockData,
    isLoading: isAllStockLoading,
    isSuccess: isAllStockSuccess,
    isError: isAllStockError,
  } = useGetAllStockQuery({ limit: 30 });

  const addToList = (symbol: string) => {
    selected.add(symbol);
    console.log(selected);
  };
  const removeFromList = (symbol: string) => {
    selected.delete(symbol);
    console.log(selected);
  };
  console.log('stock item assets', allStockData);

  // Use the useGetSpecificStockQuery hook to fetch specific stock data
  // const {
  //   data: specificStockData,
  //   isLoading: isSpecificStockLoading,
  //   isSuccess: isSpecificStockSuccess,
  //   isError: isSpecificStockError,
  // } = useGetSpecificStockQuery({ symbolname: 'YOUR_SYMBOL_NAME' });

  if (isAllStockLoading) {
    return <Loader />;
  }
  return (
    <div className="p-5">
      <section>
        <AssetsSearch />
      </section>
      <section>
        {allStockData?.data?.map((item: any) => (
          <>
            {/* <SingleStockItem key={Math.random()} data={item} /> */}
            <AssetsList
              key={Math.random()}
              add={addToList}
              remove={removeFromList}
              data={item}
            />
          </>
        ))}
      </section>
      <section className="">{/* <DoneBtn /> */}</section>
    </div>
  );
};

export default AllAssets;
