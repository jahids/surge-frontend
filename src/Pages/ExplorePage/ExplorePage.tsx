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
import Lottie from 'lottie-react';
// import './News.css';
import loader from '../../assets/img/loader.json';
import Biotechnologygif from '../../assets/img/biotexh.json';
import BanksRegionalgif from '../../assets/img/bank.json';
import AssetManagementgif from '../../assets/img/assetmanagement.json';
import MedicalDevicesgif from '../../assets/img/Medical Devices.json';
import ShellCompaniesgif from '../../assets/img/sellcompany.json';
import BackButton from '../../Components/globalBackButton/BackButton';
import Categories from '../../Components/explore/Categories';
import Investor from '../../Components/explore/Investor';
import TopMovers from '../../Components/Main/TopMovers/TopMovers';
import CustomLottie from '../../Utils/CustomLottie';
import { investorcard } from '../../Utils/Skeleton';
import AllStocks from '../../Components/Main/AllStocks/AllStocks';
import MostTraded from '../../Components/Main/MostTraded/MostTraded';
import TopinvestorShimmer from '../../Components/ShimmerLoaders/investorShimmer/TopinvestorShimmer';
import { getDbData } from '../../Services/User.service';
import TextImage from '../../Components/TextImage/TextImage';

interface ICategories {
  category: string;
  lottie: any;
}

interface Iinvestor {
  name: string;
  username: string;
  parcentage: number;
  image: string

}


const ExplorePage = () => {
  const userDbData = getDbData();
  const [isOpen, setOpen] = useState<boolean>(false);
  const [selectedNews, setSelectedNews] = useState<NewsItem | null>(null);
  const [getcategory, setcategory] = useState([]);
  const [investorinfo, setinvestorinfo] = useState([]);
  const [loader, setloader] = useState(true);

  const navigate = useNavigate()


  const categories: ICategories[] = [
    { category: "Bio Technology", lottie: Biotechnologygif },
    { category: "Banks Regional", lottie: BanksRegionalgif },
    { category: "Asset Management", lottie: AssetManagementgif },
    { category: "Shell Companies", lottie: ShellCompaniesgif },
    { category: "Medical Devices", lottie: MedicalDevicesgif },
  ]

  const premiumInvestor: Iinvestor[] = [
    { name: "helowin", username: "@dlfk", parcentage: 324, image: "https://cdn-icons-png.flaticon.com/512/187/187488.png" },
    { name: "df", username: "@dlfk", parcentage: 324, image: "https://cdn-icons-png.flaticon.com/512/187/187488.png" },
    { name: "adf", username: "@dlfk", parcentage: 324, image: "https://cdn-icons-png.flaticon.com/512/187/187488.png" },
    { name: "akdfadfja", username: "@dlfk", parcentage: 324, image: "https://cdn-icons-png.flaticon.com/512/187/187488.png" },
  ]
  useEffect(() => {

    const loaddata = async () => {
      try {
        const { data: requestData } = await instance.get(`/categories-name/?limit=${26}`)
        const { data: investordata } = await instance.get(`/user/top-investors?limit=${5}`)
        console.log("investor data", investordata?.data);
        setinvestorinfo(investordata?.data)
        const apiresponse = requestData?.data
        setloader(false)
        setcategory(apiresponse)
        console.log("categoried data", apiresponse);
        setloader(false)
      } catch (error) {
        console.log('error', error);

      }
    }
    loaddata()
  }, [])




  const handleCardClick = (item: any) => {
    console.log("item", item?.symbols);
    navigate('/tinder', { state: item })
    // setSelectedNews(news);
    // setOpen(true);
  };
  // if (isAllStockLoading) {
  //   return <Loader />;
  //   // return <CustomLottie animationData = {animationloader} />
  // }
  return (
    //style={{height : "calc(80 dvh)", border : "5px solid red", overflow : "scroll"}}
    <div >
      {/* <div className='px-5'><BackButton /></div>
       */}
      <div className="ml-5 mt-8">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-5">
            <div
              onClick={() => navigate('/profile')}
              className="w-8 h-8 rounded-full bg-gray-300 flex items-center justify-center"
            >
              {
                userDbData?.pfp ? <img className='rounded-full h-8 w-8' src={userDbData?.pfp} /> : <TextImage text={userDbData?.name} />
              }
            </div>
            <div>
              <p className="text-3xl font-bold">Explore</p>
            </div>
          </div>
          <div>
            {/* <div className="flex items-center justify-center w-10 h-10 bg-gray-200 rounded-full">
            <BiSolidMessageRounded className="text-2xl" />
          </div> */}
          </div>
        </div>
      </div>

      {/* all category */}

      {/* <AllStocks/> */}
      <section className=" mt-2 m-5">
        <AllStocks />
      </section>

      <div className=" mt-2 m-5">
        {/* <h1 className="text-2xl font-bold ">All Categories</h1>
        <p className="text-sm text-gray-400 mb-5">
          Explore the latest categories
        </p> */}
        {/* <Categories categorie={categories} /> */}

        {/* investment */}
        <h1 className="text-2xl font-bold mt-5">Top Investors</h1>
        <p className="text-sm text-gray-400 mb-5">
          Follow to see their moves and insights so you can learn from their approach
        </p>
        {
          loader ? <TopinvestorShimmer /> :
            <Investor Investordata={investorinfo} />
        }
        <TopMovers />

        <section >
          <MostTraded />
        </section>
        <BottomNav />
        AllStocks</div>
    </div>

  );
};

export default ExplorePage;
