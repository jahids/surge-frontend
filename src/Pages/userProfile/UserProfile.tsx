/* eslint-disable  */
import React, { useEffect, useState } from 'react';
import { FaUser } from 'react-icons/fa'; // Import the User icon from React Icons
import BackButton from '../../Components/globalBackButton/BackButton';
import { AiFillPlusCircle } from 'react-icons/ai';
import { BsFillCheckCircleFill } from 'react-icons/bs';
import { useParams } from 'react-router-dom';
import { instance } from '../../lib/AxiosInstance';
import Trades from '../../Components/userprofileComponent/Trades';
import BottomNav from '../../Components/BottomNav/BottomNav';
// import { ShimmerText  } from "react-shimmer-effects";
import Loader from '../../Components/Loader/Loader';
import UserPost from '../../Components/userprofileComponent/UserPost';
import TextImage from '../../Components/TextImage/TextImage';
import { date } from 'yup';
import { getDbData } from '../../Services/User.service';
const defaultimage = "https://images.unsplash.com/photo-1621416894569-0f39ed31d247?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8Yml0Y29pbnxlbnwwfHwwfHx8MA%3D%3D&w=1000&q=80"

const UserProfile = () => {
  const [activeTab, setActiveTab] = useState(1);
  const [isPlusIcon, setIsPlusIcon] = useState(true);
  const [dbdata, setdbdata] = useState([])
  const [alpacadata, setalpacadata] = useState([])
  const [tradesdata, settradesdata] = useState([])
  const [marketvalue, setmarketvalue] = useState('')
  const [porfoliodata, setporfoliodata] = useState([])
  const { id } = useParams();
  console.log('id found', id);
  const [postiondataloader, setpostiondataloader] = useState(true)
  const [userpostdata, setuserpostdata] = useState([]);

  const [isFollowing, setIsFollowing] = useState(false);

  const _dbData = getDbData();
  useEffect(() => {
    const loadData = async () => {
      try {

        const { data } = await instance.get(`accounts/cached/${id}`);
        const { data: portfoliodata } = await instance(`portfolio?dbId=${id}`)
        const { data: positonsdata } = await instance(`portfolio/open-positions?dbId=${id}`)
        console.log('🍗🍖', portfoliodata?.data?.market_value);
        console.log('✔😒✔', positonsdata);
        setmarketvalue(portfoliodata?.data?.market_value)
        setporfoliodata(positonsdata?.data)
        const OwnData = data?.data?.db;
        const apiData = data?.data?.alpaca;
        // setdbdata(_dbData);
        console.log(`👩‍💻👩‍💻👩‍💻👨‍💻🏜`, OwnData);
        console.log(`🥭🥭🥭🥭🥭`, _dbData);

        const searchId = OwnData?.following?.includes(id);
        setIsPlusIcon(searchId);


        setdbdata(OwnData);
        setalpacadata(apiData)
        setpostiondataloader(false)
        // console.log('user proifle data', data);
      } catch (error) {
        console.log('error', error);
        setpostiondataloader(false)
      }
    };
    loadData();
  }, []);


  const handleTabClick = (tabNumber: number) => {
    if (tabNumber === 2) {
      const trades = async () => {
        try {
          const { data } = await instance(`portfolio/trade-activity?dbId=${id}`)
          settradesdata(data?.data)

        } catch (error) {
          console.log('🍗🍖', error);
        }
      }
      trades()
    }

    if (tabNumber === 3) {
      const trades = async () => {
        try {
          const { data: postData } = await instance.get(`social/post/user/${id}`)
          console.log('postdata', postData);
          setuserpostdata(postData?.data)
          // settradesdata(data?.data)

        } catch (error) {
          console.log('🍗🍖', error);
        }
      }
      trades()
    }
    setActiveTab(tabNumber);


  };

  const handleClickcion = () => {
    setIsPlusIcon(prevState => !prevState);
    instance.get(`/social/new-following/${id}`).catch(er => {
      console.log(er);
      setIsPlusIcon(prevState => !prevState);
    });
  };

  console.log('tradesdata', marketvalue);

  if (postiondataloader) {
    return <Loader />
  }
  return (
    <div className="container">
      <div className='px-4'>

        <BackButton />
      </div>
      <section className="flex py-4 px-4">

        {/* <div className="stats__img-holder w-20 h-20 rounded-full border border-gray-200">
          {
            dbdata?.pfp ? <img
              src={dbdata?.pfp || defaultimage}
              alt="User Profile"
              className="w-full h-full rounded-full object-cover"
            /> :
              <TextImage width={'80px'} height={'80px'} textSize={'2rem'} text={dbdata?.name} />
          }
        </div> */}
        <div className="avatar">
          <div className="w-20 rounded-full">
            {dbdata?.pfp ? <img src={dbdata?.pfp} /> : <TextImage width={'80px'} height={'80px'} textSize={'2rem'} text={dbdata?.name} />}
          </div>
        </div>

        <div className="flex-row  ml-4 mt-3">
          <h1 className="text-xl font-bold ">{dbdata?.name}</h1>
          <span className="text-base text-gray-500 mb-2">
            <span className="text-black font-bold"> {dbdata?.following?.length || 0} </span>
            following
          </span>
        </div>
      </section>
      <section className="description py-4 px-4">
        <h2 className="description__title text-xl font-semibold">About</h2>
        <p className="text-gray-600">
          {dbdata?.about_me || '💕'}
        </p>
      </section>
      <section className=" py-4 px-4 flex gap-4 justify-around">
        <button
          onClick={handleClickcion}
          className="py-2 rounded-full text-xl font-extrabold bg-indigo-700 w-full text-white px-6 flex items-center justify-center"
        >
          {isPlusIcon ? (
            <>
              <AiFillPlusCircle className="text-xl text-white mr-2" />
              <span>Follow</span>
            </>
          ) : (
            <>
              <BsFillCheckCircleFill className=" text-white  text-xl mr-2" />
              <span>Following</span>
            </>
          )}
        </button>
      </section>

      <section>
        <div className="my-8 m-2">
          <ul className="grid grid-flow-col text-center text-gray-500 bg-gray-100 rounded-full p-1">
            <li
              className=""
              onClick={() => handleTabClick(1)}
              aria-hidden="true"
            >
              <p
                // href="#tab1"
                className={`${activeTab === 1
                  ? 'flex justify-center bg-indigo-700 rounded-full shadow text-white py-2 transition-[.5s]'
                  : 'flex justify-center py-2 '
                  }`}
              >
                Portfolio
              </p>
            </li>
            <li
              className=""
              onClick={() => handleTabClick(2)}
              aria-hidden="true"
            >
              <p
                // href="#tab2"
                className={`${activeTab === 2
                  ? 'flex justify-center bg-indigo-700  rounded-full shadow text-white py-2 transition-[.5s] '
                  : 'flex justify-center py-2 '
                  }`}
              >
                Trades
              </p>
            </li>

            <li
              className=""
              onClick={() => handleTabClick(3)}
              aria-hidden="true"
            >
              <p
                // href="#tab3"
                className={`${activeTab === 3
                  ? 'flex justify-center bg-indigo-700  rounded-full shadow text-white py-2 transition-[.5s] '
                  : 'flex justify-center py-2 '
                  }`}
              >
                Posts
              </p>
            </li>
          </ul>
        </div>
        <div>
          {activeTab === 1 && <>
            {/* <div>
            <h1>Market value is {marketvalue}</h1>
          </div> */}
            <div className="mt-8 m-2">
              <div className="bg-gray-100 p-5 rounded-2xl">
                <div className="flex text-xl justify-center  items-center text-center font-bold">
                  Portfolio Value : <span className='font-bold text-2xl text-indigo-700 ml-2'>${marketvalue?.toFixed(2)}</span>
                </div>
                <p className="mt-3 text-sm">

                </p>
              </div>
            </div>
            {
              porfoliodata?.length > 0 && porfoliodata?.map((item) => (<Trades type={"portfolio"} data={item} />))
            }
          </>}
          {activeTab === 2 && tradesdata?.length > 0 && tradesdata?.map((item) => (<Trades type={"trade"} data={item} />))}
          {activeTab === 3 && userpostdata?.length > 0 && userpostdata?.map((item) => (<UserPost data={item} />))}
        </div>
      </section>

    </div>
  );
};

export default UserProfile;