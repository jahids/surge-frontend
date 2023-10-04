/* eslint-disable */
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
