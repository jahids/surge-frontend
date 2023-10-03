/* eslint-disable react-hooks/exhaustive-deps */
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

  const handlesearch = async (data: any) => {
    setsearch(data);
    setStart(0);

    setLimit(pageSize);

    const response = await axios.get(
      `/api/stock?limit=${pageSize}&item=` + search,
      {
        // params: { start: 0, limit: 10, item: search },
        withCredentials: true,
      }
    );

    const newData = response.data.data; // Assuming your API response has a 'data' property

    setItems(prevItems => [...newData]);
    // console.log('data', data);
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
// import React, { useState, useEffect } from 'react';
// import InfiniteScroll from 'react-infinite-scroll-component';
// import axios from 'axios';
// import AllStockSearch from './AllStockSearch/AllStockSearch';
// import AllStockItems from './AllStockItems/AllStockItems';
// import animationloader from '../../assets/img/skeletonloader.json';
// import Lottie from 'lottie-react';
// const App = () => {
//   const [items, setItems] = useState([]);
//   const [hasMore, setHasMore] = useState(true);
//   const pageSize = 30;
//   const [start, setStart] = useState(0); // Starting index for pagination
//   const [limit, setLimit] = useState(pageSize); // Maximum number of items to fetch per page

//   const fetchData = async () => {
//     try {
//       const response = await axios.get('/api/stock', {
//         params: { start, limit, item: 'your-search-query' }, // Adjust parameters as needed
//         withCredentials: true,
//       });

//       const newData = response.data.data; // Assuming your API response has a 'data' property

//       setItems(prevItems => [...prevItems, ...newData]);

//       // If there's no more data to fetch, set hasMore to false
//       if (newData.length === 0) {
//         setHasMore(false);
//       } else {
//         // Increment both start and limit for the next call
//         setStart(pr => pr + pageSize);
//         setLimit(pr => pr + pageSize); // Increase limit by 20 for the next call
//       }
//     } catch (error) {
//       console.error('Error fetching data:', error);
//     }
//   };

//   useEffect(() => {
//     fetchData(); // Fetch initial data when the component mounts
//   }, []);

//   const handlesearch = (data: any) => {
//     setsearch(data);
//     console.log('data', data);
//   };

//   return (
//     <div>
//       <InfiniteScroll
//         dataLength={items.length}
//         next={fetchData}
//         hasMore={hasMore}
//         // loader={<h4>Loading...</h4>}
//         loader={
//           <div key="loading">
//             <Lottie animationData={animationloader} loop={true} />
//           </div>
//         }
//       >
//         <div className="p-5">
//           <section>
//             <AllStockSearch handlesearch={handlesearch} />
//           </section>
//           <section>
//             <AllStockItems Stockdata={items} />
//           </section>
//         </div>
//       </InfiniteScroll>
//     </div>
//   );
// };

// export default App;
