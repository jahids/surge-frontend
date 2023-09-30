import { useState } from 'react';
import { useGetAllStockQuery } from '../../features/stock/allStockApiSlice';
import Loader from '../Loader/Loader';
import AssetsList from './AssetsList/AssetsList';
import AssetsSearch from './AssetsSearch/AssetsSearch';
import DoneBtn from './DoneBtn/DoneBtn';

const AllAssets = () => {
  const {
    data: allStockData,
    isLoading: isAllStockLoading,
    isSuccess: isAllStockSuccess,
    isError: isAllStockError,
  } = useGetAllStockQuery({ limit: 30 });


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
      <section className='mt-4'>
        {allStockData?.data?.map((item: any) => (
          <div key={Math.random()}>
            {/* <SingleStockItem key={Math.random()} data={item} /> */}
            <AssetsList
              key={Math.random()}
              data={item}
            />
          </ div>
        ))}
      </section>
      {/* <section className=""> <DoneBtn /> </section> */}
    </div>
  );
};

export default AllAssets;
