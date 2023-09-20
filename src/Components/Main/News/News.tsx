/* eslint-disable  */
import { ReactElement, JSXElementConstructor, ReactFragment, ReactPortal } from 'react';
import './News.css';
import { useGetSpecificNewsQuery, useGetallNewsQuery } from '../../../features/news/newsApiSlice';
import Loader from '../../Loader/Loader';
import { truncateText } from '../../../Utils/converter';

interface Iitem {
  headline: string | number | boolean | ReactElement<any, string | JSXElementConstructor<any>> | ReactFragment | ReactPortal | null | undefined; author: string | number | boolean | ReactElement<any, string | JSXElementConstructor<any>> | ReactFragment | ReactPortal | null | undefined; 

}





const News = ():any => {
  const {
    data: specificNewsData,
    isLoading: isLoadingSpecificNews,
    isSuccess: isSuccessSpecificNews,
    isError: isErrorSpecificNews,
    error: errorSpecificNews,
  } = useGetSpecificNewsQuery({ symbolname: 'YOUR_SYMBOL_NAME' });
  
  const {
    data: allNewsData,
    isLoading: isLoadingAllNews,
    isSuccess: isSuccessAllNews,
    isError: isErrorAllNews,
    error: errorAllNews,
  } = useGetallNewsQuery();
  



  // Handle loading state or errors here
  if ( isLoadingAllNews) {
    return <Loader/>;
  }
  
  if (isErrorSpecificNews || isErrorAllNews) {
    // Handle API error here
    return (
      <div>Error: {errorSpecificNews?.message || errorAllNews?.message}</div>
    );
  }
  
  if (isSuccessSpecificNews) {
    // Handle specific news success here
    // Use specificNewsData
  }
  
  if (isSuccessAllNews) {
    // Handle all news success here
    // Use allNewsData
  }
  return (
    <div className="mt-10">
      <h1 className="text-xl font-bold">News</h1>
      <p className="mt-1 text-sm text-gray-400">Explore the latest news</p>
      {/* --- news card start --- */}
      {/* {
        newsdata?.data?.news.map
      } */}
      <div className="card_wrapper mt-5 max-h-full flex overflow-x-auto">

    {
        allNewsData?.data?.news.map((item : any)=>(
          <>
           <div className="card_item h-auto p-5 rounded-3xl bg-[#F5F5F5] mr-[20px] shadow-sm">
          <p className="text-xs text-gray-400 font-medium">Market news</p>
          <div className="my-4">
            <p className="font-bold text-sm">
             {/* {item?.headline} */}
             {truncateText(item?.headline, 50)}
            </p>
          </div>
          <div className="flex items-center text-xs text-gray-400 font-medium">
            <p>  {item?.author}</p>
            <p className="mx-2">. 9m ago</p>
          </div>
        </div>
          </>
        ))
      }
      </div>
      {/* --- news card end --- */}
    </div>
  );
};

export default News;
