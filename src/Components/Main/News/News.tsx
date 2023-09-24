/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
// // /* eslint-disable  */
// // import { ReactElement, JSXElementConstructor, ReactFragment, ReactPortal } from 'react';
// // import './News.css';

// // import Sheet from 'react-modal-sheet';

// // import { useState } from 'react';
// // import earthIcon from '../../../assets/img/earth.png';

// // const News = () => {
// //   const [isOpen, setOpen] = useState(false);

// // import { useGetSpecificNewsQuery, useGetallNewsQuery } from '../../../features/news/newsApiSlice';

// // import Loader from '../../Loader/Loader';
// // import { truncateText } from '../../../Utils/converter';

// // interface Iitem {
// //   headline: string | number | boolean | ReactElement<any, string | JSXElementConstructor<any>> | ReactFragment | ReactPortal | null | undefined; author: string | number | boolean | ReactElement<any, string | JSXElementConstructor<any>> | ReactFragment | ReactPortal | null | undefined;

// // }

// // const News = ():any => {
// //   const {
// //     data: specificNewsData,
// //     isLoading: isLoadingSpecificNews,
// //     isSuccess: isSuccessSpecificNews,
// //     isError: isErrorSpecificNews,
// //     error: errorSpecificNews,
// //   } = useGetSpecificNewsQuery({ symbolname: 'YOUR_SYMBOL_NAME' });

// //   const {
// //     data: allNewsData,
// //     isLoading: isLoadingAllNews,
// //     isSuccess: isSuccessAllNews,
// //     isError: isErrorAllNews,
// //     error: errorAllNews,
// //   } = useGetallNewsQuery();

// //   // Handle loading state or errors here
// //   if ( isLoadingAllNews) {
// //     return <Loader/>;
// //   }

// //   if (isErrorSpecificNews || isErrorAllNews) {
// //     // Handle API error here
// //     return (
// //       <div>Error: {errorSpecificNews?.message || errorAllNews?.message}</div>
// //     );
// //   }

// //   if (isSuccessSpecificNews) {
// //     // Handle specific news success here
// //     // Use specificNewsData
// //   }

// //   if (isSuccessAllNews) {
// //     // Handle all news success here
// //     // Use allNewsData
// //   }
// //   return (
// //     <div className="mt-10">
// //       <h1 className="text-xl font-bold">News</h1>
// //       <p className="mt-1 text-sm text-gray-400">Explore the latest news</p>
// //       {/* --- news card start --- */}
// //       {/* {
// //         newsdata?.data?.news.map
// //       } */}
// //       <div className="card_wrapper mt-5 max-h-full flex overflow-x-auto">

// //     {
// //         allNewsData?.data?.news.map((item : any)=>(

// //          <div>
// //            <div
// //           onClick={() => setOpen(true)}
// //           aria-hidden="true"
// //           className="card_item flex-col items-baseline p-5 rounded-3xl bg-[#F5F5F5] mr-[20px] shadow-sm"
// //         >
// //           <p className="text-xs text-gray-400 font-medium">Market news</p>
// //           <div className="my-4">
// //             <p className="font-bold text-sm">
// //              {/* {item?.headline} */}
// //              {truncateText(item?.headline, 50)}
// //             </p>
// //           </div>
// //           <div className="flex items-center text-xs text-gray-400 font-medium">
// //             <p>  {item?.author}</p>
// //             <p className="mx-2">. 9m ago</p>
// //           </div>
// //           {/* --- modal sheet --- */}
// //           <Sheet isOpen={isOpen} onClose={() => setOpen(false)}>
// //             <Sheet.Container>
// //               <Sheet.Header />
// //               <Sheet.Content>
// //                 <Sheet.Scroller>
// //                   <div className="px-5 h-screen">
// //                     <div>
// //                       <img
// //                         className="rounded-3xl"
// //                         src="https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dHJhZGluZ3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60"
// //                         alt="news_image"
// //                       />
// //                     </div>
// //                     <div className="px-2">
// //                       <div>
// //                         <h1 className="my-5 text-xl font-semibold text-justify">
// //                           The Lindsell Train Investment Trust Plc - Mongthly
// //                           Report as at 31 August 2023
// //                         </h1>
// //                         <p className="text-sm font-semibold text-gray-500">
// //                           Author Name : Jakir Js
// //                         </p>
// //                       </div>
// //                       <div className="my-5 flex items-center">
// //                         <div className="w-10 h-10 bg-gray-200 rounded-full flex items-center justify-center">
// //                           <img className="p-2" src={earthIcon} alt="earth" />
// //                         </div>
// //                         <div>
// //                           <h5 className="mx-5 font-bold text-md">
// //                             Market News
// //                           </h5>
// //                         </div>
// //                       </div>
// //                       <div>
// //                         <p className="my-5 text-justify">
// //                           Lorem ipsum dolor sit amet, consectetur adipisicing
// //                           elit. Commodi reprehenderit odio dolores vel. Est vel
// //                           praesentium maiores hic sequi consequatur.
// //                         </p>
// //                       </div>
// //                       <div className="flex items-center justify-center mt-8 pb-[100px]">
// //                         <a
// //                           href="https://react-icons.github.io/react-icons/search?q=earth"
// //                           target="_blank"
// //                           rel="noreferrer"
// //                         >
// //                           <button className="px-10 py-3 bg-gray-200 rounded-full font-bold">
// //                             Read full article
// //                           </button>
// //                         </a>
// //                       </div>
// //                     </div>
// //                   </div>
// //                 </Sheet.Scroller>
// //               </Sheet.Content>
// //             </Sheet.Container>
// //             <Sheet.Backdrop />
// //           </Sheet>
// //           {/* --- modal sheet --- */}
// //         </div>
// //       </div>
// //       )
// //     }

// //     </div>

// //     </div>
// //   );
// // };

// // export default News;

// /* eslint-disable  */
// import { ReactElement, JSXElementConstructor, ReactFragment, ReactPortal, useState } from 'react';
// import './News.css';
// import { useGetallNewsQuery } from '../../../features/news/newsApiSlice';
// import Loader from '../../Loader/Loader';
// import { truncateText } from '../../../Utils/converter';
// import Sheet from 'react-modal-sheet';
// import earthIcon from '../../../assets/img/earth.png';
// import NewsModalsheet from './NewsModalsheet';

// interface Iitem {
//   headline: string | number | boolean | ReactElement<any, string | JSXElementConstructor<any>> | ReactFragment | ReactPortal | null | undefined; author: string | number | boolean | ReactElement<any, string | JSXElementConstructor<any>> | ReactFragment | ReactPortal | null | undefined;

// }

// const News = ():any => {
//   const [isOpen, setOpen] = useState(false);

//   const {
//     data: allNewsData,
//     isLoading: isLoadingAllNews,
//     isSuccess: isSuccessAllNews,
//     isError: isErrorAllNews,
//     error: errorAllNews,
//   } = useGetallNewsQuery();

//   // Handle loading state or errors here
//   if ( isLoadingAllNews) {
//     return <Loader/>;
//   }

//   if ( isErrorAllNews) {
//     // Handle API error here
//     return (
//       <div>Error: {errorAllNews?.message}</div>
//     );
//   }

//   // if (isSuccessSpecificNews) {
//   //   // Handle specific news success here
//   //   // Use specificNewsData
//   // }

//   if (isSuccessAllNews) {
//     // Handle all news success here
//     // Use allNewsData
//   }

//   const modalopen = () => {
//     console.log("runnig");
//      <NewsModalsheet/>

//   }
//   return (
//     <div className="mt-10">
//       <h1 className="text-xl font-bold">News</h1>
//       <p className="mt-1 text-sm text-gray-400">Explore the latest news</p>
//       {/* --- news card start --- */}
//       {/* {
//         newsdata?.data?.news.map
//       } */}
//       <div className="card_wrapper mt-5 max-h-full flex overflow-x-auto">

//     {
//         allNewsData?.data?.news.map((item : any, index)=>(
//           <>
//            <div key={index} onClick={()=> modalopen()} className="card_item h-auto p-5 rounded-3xl bg-[#F5F5F5] mr-[20px] shadow-sm">
//           <p className="text-xs text-gray-400 font-medium">Market news</p>
//           <div className="my-4">
//             <p className="font-bold text-sm">
//              {/* {item?.headline} */}
//              {truncateText(item?.headline, 50)}
//             </p>
//           </div>
//           <div className="flex items-center text-xs text-gray-400 font-medium">
//             <p>  {item?.author}</p>
//             <p className="mx-2">. 9m ago</p>
//           </div>
// {/* news modal */}
//           {/* --- modal sheet --- */}

//           {/* --- modal sheet --- */}

//         </div>
//           </>
//         ))
//       }

//       </div>
//       {/* --- news card end --- */}
//     </div>
//   );
// };

// export default News;

import React, { useState } from 'react';
import './News.css';
import { useGetallNewsQuery } from '../../../features/news/newsApiSlice';
import Loader from '../../Loader/Loader';
import { truncateText } from '../../../Utils/converter';
import NewsModalsheet from './NewsModalsheet';

interface NewsItem {
  headline: string;
  author: string;
  // Add any other properties you have in your news data here
}

const News: React.FC = () => {
  const [isOpen, setOpen] = useState<boolean>(false);
  const [selectedNews, setSelectedNews] = useState<NewsItem | null>(null);

  const {
    data: allNewsData,
    isLoading: isLoadingAllNews,
    isError: isErrorAllNews,
    error: errorAllNews,
  } = useGetallNewsQuery();

  // Handle loading state or errors here
  if (isLoadingAllNews) {
    return <Loader />;
  }

  if (isErrorAllNews) {
    // Handle API error here
    return <div>Error: {errorAllNews?.message}</div>;
  }

  const handleCardClick = (news: NewsItem) => {
    setSelectedNews(news);
    setOpen(true);
  };

  return (
    <div className="mt-10">
      <h1 className="text-xl font-bold">News</h1>
      <p className="mt-1 text-sm text-gray-400">Explore the latest news</p>
      <div className="card_wrapper mt-5 max-h-full flex overflow-x-auto">
        {allNewsData?.data?.news.map((item: NewsItem, index: number) => (
          <div
            key={index}
            className="card_item h-auto p-5 rounded-3xl bg-[#F5F5F5] mr-[20px] shadow-sm cursor-pointer"
            onClick={() => handleCardClick(item)}
          >
            <p className="text-xs text-gray-400 font-medium">Market news</p>
            <div className="my-4">
              <p className="font-bold text-sm">
                {truncateText(item?.headline, 50)}
              </p>
            </div>
            <div className="flex items-center text-xs text-gray-400 font-medium">
              <p> {item?.author}</p>
              <p className="mx-2">. 9m ago</p>
            </div>
          </div>
        ))}
      </div>
      {isOpen && (
        <NewsModalsheet
          news={selectedNews}
          onClose={() => {
            setSelectedNews(null);
            setOpen(false);
          }}
        />
      )}
    </div>
  );
};

export default News;
