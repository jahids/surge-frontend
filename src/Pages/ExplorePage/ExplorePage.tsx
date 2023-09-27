/* eslint-disable  */
import BottomNav from '../../Components/BottomNav/BottomNav';
import React, { useEffect, useState } from 'react';
import { truncateText } from '../../Utils/converter';
import Loader from '../../Components/Loader/Loader';
import { useGetallNewsQuery } from '../../features/news/newsApiSlice';
import Tindercard from '../../Components/explore/TinderCard';
import { useGetAllStockQuery } from '../../features/stock/allStockApiSlice';
import { instance } from '../../lib/AxiosInstance';
import { BsFillArrowRightCircleFill } from 'react-icons/bs';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
// import './News.css';

const ExplorePage = () => {
  const [isOpen, setOpen] = useState<boolean>(false);
  const [selectedNews, setSelectedNews] = useState<NewsItem | null>(null);
  const [getcategory, setcategory] = useState([]);
  const navigate = useNavigate()


  useEffect(() => {

    const loaddata = async() => {
      try {
        const {data : requestData} = await  instance.get(`/categories`)
        const apiresponse = requestData?.data
        setcategory(apiresponse)
        console.log("categoried data", apiresponse);
        
      } catch (error) {
        console.log('error', error);
        
      }
    }
    loaddata()
  }, [])
  
  

  const {
    data: allStockData,
    isLoading: isAllStockLoading,
    isSuccess: isAllStockSuccess,
    isError: isAllStockError,
  } = useGetAllStockQuery({ limit: 30 });

console.log("data ->", allStockData);


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

  const handleCardClick = (item : any) => {
    console.log("item", item?.symbols);
    navigate('/tinder', {state : item})
    // setSelectedNews(news);
    // setOpen(true);
  };
  return (
    <div className="mt-10">
    <h1 className="text-2xl font-bold mb-2">All Categories</h1>
    <p className="text-sm text-gray-400 mb-5">
      Explore the latest categories
    </p>
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 m-2">
      {getcategory.map((item, index) => (
        <motion.div
          key={index}
          className="relative group"
          // whileHover={{ scale: 1.05 }}
          style={{ width: "180px", height: "150px" }} // Set fixed dimensions
        >
          <div
            className="card_item p-4 rounded-lg bg-purple-600 opacity-70  text-white shadow-md hover:shadow-lg cursor-pointer transition-transform duration-300 transform hover:scale-105 h-full"
            onClick={() => handleCardClick(item)}
          >
            <p className="text-xl  font-medium mb-2">
              {truncateText(item.category, 10) || "Other"}
            </p>
          </div>
          <button
            onClick={() => handleCardClick(item)}
            className="text-white hover:underline flex items-center justify-center absolute bottom-2 left-0 right-0"
            style={{ margin: "0 auto" }}
          >
            View Details{" "}
            <BsFillArrowRightCircleFill className="ml-2" />
          </button>
        </motion.div>
      ))}
    </div>
    <BottomNav/>
  </div>
  );
};

export default ExplorePage;
