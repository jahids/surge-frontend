/* eslint-disable @typescript-eslint/no-unused-vars */
// import Sheet from 'react-modal-sheet';
// import earthIcon from '../../../assets/img/earth.png';

// function NewsModalsheet() {
//   console.log('modal open');

//   return (
//     <>
//       <Sheet>
//         <Sheet.Container>
//           <Sheet.Header />
//           <Sheet.Content>
//             <Sheet.Scroller>
//               <div className="px-5 h-screen">
//                 <div>
//                   <img
//                     className="rounded-3xl"
//                     src="https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dHJhZGluZ3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60"
//                     alt="news_image"
//                   />
//                 </div>
//                 <div className="px-2">
//                   <div>
//                     <h1 className="my-5 text-xl font-semibold text-justify">
//                       The Lindsell Train Investment Trust Plc - Mongthly Report
//                       as at 31 August 2023
//                     </h1>
//                     <p className="text-sm font-semibold text-gray-500">
//                       Author Name : Jakir Js
//                     </p>
//                   </div>
//                   <div className="my-5 flex items-center">
//                     <div className="w-10 h-10 bg-gray-200 rounded-full flex items-center justify-center">
//                       <img className="p-2" src={earthIcon} alt="earth" />
//                     </div>
//                     <div>
//                       <h5 className="mx-5 font-bold text-md">Market News</h5>
//                     </div>
//                   </div>
//                   <div>
//                     <p className="my-5 text-justify">
//                       Lorem ipsum dolor sit amet, consectetur adipisicing elit.
//                       Commodi reprehenderit odio dolores vel. Est vel
//                       praesentium maiores hic sequi consequatur.
//                     </p>
//                   </div>
//                   <div className="flex items-center justify-center mt-8 pb-[100px]">
//                     <a
//                       href="https://react-icons.github.io/react-icons/search?q=earth"
//                       target="_blank"
//                       rel="noreferrer"
//                     >
//                       <button className="px-10 py-3 bg-gray-200 rounded-full font-bold">
//                         Read full article
//                       </button>
//                     </a>
//                   </div>
//                 </div>
//               </div>
//             </Sheet.Scroller>
//           </Sheet.Content>
//         </Sheet.Container>
//         <Sheet.Backdrop />
//       </Sheet>
//     </>
//   );
// }

// export default NewsModalsheet;

import React from 'react';
import Sheet from 'react-modal-sheet';
import earthIcon from '../../../assets/img/earth.png';
import { useGetSpecificNewsQuery } from '../../../features/news/newsApiSlice';
import Loader from '../../Loader/Loader';

interface NewsModalsheetProps {
  onClose: () => void;
  news: any;
}

const NewsModalsheet: React.FC<NewsModalsheetProps> = ({ onClose, news }) => {
  const {
    data: specificNewsData,
    isLoading: isLoadingSpecificNews,
    isSuccess: isSuccessSpecificNews,
    isError: isErrorSpecificNews,
    error: errorSpecificNews,
  } = useGetSpecificNewsQuery({ symbolname: news?.symbols });

  if (isLoadingSpecificNews) {
    return <p>loading..</p>;
  }

  console.log('any type', specificNewsData?.data?.news);

  const {
    author = '',
    headline,
    source,
    symbols,
    url,
  } = specificNewsData?.data?.news[0];

  const handleCloseModal = () => {
    onClose();
  };

  return (
    <>
      <Sheet isOpen onClose={handleCloseModal}>
        <Sheet.Container>
          <Sheet.Header />
          <Sheet.Content>
            <Sheet.Scroller>
              <div className="px-5 h-screen">
                <div>
                  <img
                    className="rounded-3xl"
                    src="https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dHJhZGluZ3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60"
                    alt="news_image"
                  />
                </div>
                <div className="px-2">
                  <div>
                    <h1 className="my-5 text-xl font-semibold text-justify">
                      {headline}
                    </h1>
                    <p className="text-sm font-semibold text-gray-500">
                      {author || 'hello'}
                    </p>
                  </div>
                  <div className="my-5 flex items-center">
                    <div className="w-10 h-10 bg-gray-200 rounded-full flex items-center justify-center">
                      <img className="p-2" src={earthIcon} alt="earth" />
                    </div>
                    <div>
                      <h5 className="mx-5 font-bold text-md">Market News</h5>
                    </div>
                  </div>
                  <div>
                    <p className="my-5 text-justify">{headline}</p>
                  </div>
                  <div className="flex items-center justify-center mt-8 pb-[100px]">
                    <a href={url} target="_blank" rel="noreferrer">
                      <button className="px-10 py-3 bg-gray-200 rounded-full font-bold">
                        Read full article
                      </button>
                    </a>
                  </div>
                </div>
              </div>
            </Sheet.Scroller>
          </Sheet.Content>
        </Sheet.Container>
        <Sheet.Backdrop />
      </Sheet>
    </>
  );
};

export default NewsModalsheet;
