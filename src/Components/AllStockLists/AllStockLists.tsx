import { useState } from 'react';
import { useGetAllStockQuery } from '../../features/stock/allStockApiSlice';
import Loader from '../Loader/Loader';
import AllStockItems from './AllStockItems/AllStockItems';
import AllStockSearch from './AllStockSearch/AllStockSearch';

const AllStockLists = () => {
  // Use the useGetAllStockQuery hook to fetch all stock data
  const [search, setsearch] = useState('');
  console.log('search data', search?.length);
  const {
    data: allStockData,
    isLoading: isAllStockLoading,
    isSuccess: isAllStockSuccess,
    isError: isAllStockError,
  } = useGetAllStockQuery({
    limit: 10,
    item: search?.length > 0 ? search : '',
  });

  const handlesearch = (data: any) => {
    setsearch(data);
    console.log('data', data);
  };

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

  console.log('data loadeing', allStockData);
  return (
    <div className="p-5">
      <section>
        <AllStockSearch handlesearch={handlesearch} />
      </section>
      <section>
        <AllStockItems Stockdata={allStockData?.data} />
      </section>
    </div>
  );
};

export default AllStockLists;
