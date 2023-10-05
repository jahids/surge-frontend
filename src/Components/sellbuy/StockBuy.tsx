/* eslint-disable */
// import React, { useEffect, useState } from 'react';
// import { useForm } from 'react-hook-form';
// import { MdOutlineArrowBackIos } from 'react-icons/md';
// import { Link, useLocation, useNavigate, useParams } from 'react-router-dom';
// import { notionalToQty, qtyToNotional } from '../../Utils/converter';
// import GifPicker, { TenorImage } from 'gif-picker-react';
// type FormData = {
//   orderType: string;
//   limitPrice: number;
//   quantity: number;
// };
// const TENOR_API_KEY = 'AIzaSyDnZRuJZLLnuminKP4zkIqPPT10noYsDzo';
// function StockBuy() {
//   const navigate = useNavigate();
//   const { symbol: shareSymbol } = useParams();
//   const { handleSubmit, control, watch, setValue } = useForm<FormData>();
//   const [selectedOption, setSelectedOption] = useState('market'); // Default to 'Market'
//   const [singleSharePrice, setSingleSharePrice] = useState(0);
//   const [buyingPrice, setBuyingPrice] = useState('');
//   const [buyingQuantity, setBuyingQuantity] = useState('');
//   const [limitPrice, setLimitPrice] = useState('');
//   const [balance, setBalance] = useState(50000);
//   const [symbol, setSymbol] = useState(shareSymbol);
//   const [post, setPost] = useState('');
//   const [available, setAvailable] = useState(234234);
//   const [gifSelected, setGifSelected] = useState(null);
//   const [isGifPickerVisible, setIsGifPickerVisible] = useState(false);

//   const toggleGifPicker = e => {
//     e.preventDefault();
//     setIsGifPickerVisible(!isGifPickerVisible);
//   };

//   const handleGifClick = (selectedGif: any) => {
//     setGifSelected(selectedGif);
//     setIsGifPickerVisible(false); // Close the GIF picker
//   };
//   console.log('--->', gifSelected?.url);

//   const selected = watch('orderType', selectedOption);
//   const { state } = useLocation();
//   console.log('state ✔✔✔', state?.data?.logo);

//   useEffect(() => {
//     if (state?.data || state?.data?.data) {
//       const stockData = state?.data || state?.data?.data;
//       console.log("stock buy tsx",stockData);

//       setSingleSharePrice(stockData?.price?.price);
//       setAvailable(stockData?.price.volume);
//       console.log('🎈', state);
//     }
//   }, []);

//   const onSubmit = (ev: any) => {
//     ev.preventDefault();

//     const orderData = {
//       symbol: shareSymbol,
//       singlePrice: singleSharePrice,
//       quantity: buyingQuantity,
//       totalPrice: buyingPrice,
//       limitPrice: limitPrice,
//       post: post,
//       type: selectedOption,
//       _data: state?.data,
//       gif : gifSelected?.url
//     };
//     console.log(`🎗🎀🎁`, orderData);
//     navigate('/order-review', { state: orderData });
//   };
//   const handlePriceChange = (ev: any) => {
//     const value = ev.target?.value ?? 0;
//     // console.log(`ev`, ev.target.value);
//     const qty = notionalToQty(singleSharePrice, value, balance);
//     setBuyingPrice(value);
//     setBuyingQuantity(qty.toString());
//   };

//   const handleQuantityChange = (ev: any) => {
//     const value = ev.target?.value ?? 0;
//     // console.log(`ev`, ev.target.value);
//     const notionalValue = qtyToNotional(singleSharePrice, value, balance);
//     setBuyingQuantity(value);
//     setBuyingPrice(notionalValue.toString());
//   };
//   const handleToggle = () => {
//     setSelectedOption(selectedOption === 'market' ? 'limit' : 'market');
//     setValue('limitPrice', 0);
//     setValue('quantity', 0);
//   };

//   // console.log(`🔥`,shar);
//   return (
//     <div className=''>

//       {/* top code added */}
//       <div className="flex">
//   <div className="flex-1  p-4">
//   <div><Link onClick={() => navigate(-1)}>
//         <div className="py-4 w-[30px]">
//           <MdOutlineArrowBackIos className="text-[30px] text-gray-500" />
//         </div>
//       </Link></div>
//   </div>
//   <div className="flex-none justify-center items-center mt-5 p-4 text-xl font-bold">
//   {selectedOption === 'market' ? 'Market' : 'Limit'}
//   </div>
//   <div className="flex-1   p-4">
//   <div className='flex mt-5 justify-end items-end '>
//         <label
//                 className={`toggle ${
//                   selectedOption === 'market'
//                     ? 'toggle-primary'
//                     : 'toggle-secondary'
//                 }`}
//               >
//                 <input
//                   type="checkbox"
//                   className="toggle"
//                   checked={selectedOption === 'limit'}
//                   onChange={handleToggle}
//                 />
//                 <span className="toggle-mark"></span>

//               </label>
//         </div>
//   </div>
// </div>
//       {/* top code end */}

//       <div className="p-5">
//         <div className="flex justify-between ">
//           <div>
//             <h2 className="text-2xl font-bold">BUY {symbol}</h2>
//             <span className="text-gray-600 block">
//               Stock price ${singleSharePrice}
//             </span>
//             <span className="text-gray-600"> available {available} </span>
//           </div>
//           <div>
//             <div className="flex space-x-2">
//             <div className="bg-gray-100 rounded-full">
//             <img
//               className="w-12 h-12 rounded-full object-contain"
//               src={state?.data?.logo}
//               alt="revance"
//             />
//           </div>
//             </div>
//           </div>
//         </div>

//         <div className="App">
//           {isGifPickerVisible && (
//             <GifPicker
//               tenorApiKey={TENOR_API_KEY}
//               onGifClick={handleGifClick}
//             />
//           )}
//         </div>

//         <form onSubmit={ev => onSubmit(ev)}>
//           <div className="py-5 flex flex-col justify-center items-center">
//             <input
//               value={buyingQuantity}
//               onChange={handleQuantityChange}
//               placeholder="Quantity"
//               className="w-full text-5xl bg-gray-100 font-extrabold m-5 text-center rounded-lg py-3 px-4 focus:outline-none focus:ring-2 focus:ring-blue-200 transition duration-300 ease-in-out transform hover:scale-105"
//               type="number"
//             />

//             <input
//               value={buyingPrice}
//               onChange={handlePriceChange}
//               placeholder="$Total"
//               className="w-full text-5xl bg-gray-100 font-extrabold m-5 text-center rounded-lg py-3 px-4 focus:outline-none focus:ring-2 focus:ring-blue-200 transition duration-300 ease-in-out transform hover:scale-105"
//               type="number"
//             />

//             {selected === 'limit' ? (
//               <input
//                 value={limitPrice}
//                 onChange={ev => setLimitPrice(ev.target.value)}
//                 placeholder="Limit Price"
//                 className="w-full text-5xl bg-gray-100 font-extrabold m-5 text-center rounded-lg py-3 px-4 focus:outline-none focus:ring-2 focus:ring-blue-200 transition duration-300 ease-in-out transform hover:scale-105"
//                 type="number"
//               />
//             ) : null}
//           </div>

//           <div className="flex justify-center">
//             {/* <div> */}
//             <textarea
//               value={post}
//               onChange={ev => setPost(ev.target.value)}
//               className="w-[100%] mb-5 bg-gray-100 text-xl font-extrabold  text-center rounded-lg py-3 px-4 focus:outline-none focus:ring-2 focus:ring-blue-200 transition duration-300 ease-in-out transform hover:scale-105"
//               placeholder="Share"
//             ></textarea>
//           </div>

//           {/* gi=f */}

//           <div className="show-gif flex justify-center">
//             {gifSelected ? (
//               <div
//                 onClick={e => toggleGifPicker(e)}
//                 className="w-full mb-5 bg-gray-100 text-xl font-extrabold  text-center rounded-lg py-3 px-4 focus:outline-none focus:ring-2 focus:ring-blue-200 transition duration-300 ease-in-out transform hover:scale-105"
//               >
//                 <img
//                   src={gifSelected?.url}
//                   className="gif-preview w-20 h-20 mx-auto rounded-md"
//                   alt="Selected GIF"
//                 />
//               </div>
//             ) : (
//               <div
//                 onClick={e => toggleGifPicker(e)}
//                 className="w-[100%] mb-5 bg-gray-100 text-xl font-extrabold  text-center rounded-lg py-5 px-4 focus:outline-none focus:ring-2 focus:ring-blue-200 transition duration-300 ease-in-out transform hover:scale-105"
//               >
//                 <h2>Selected GIF</h2>
//               </div>
//             )}
//           </div>

//           {/* gif end */}
//           <div className="mt-5 text-center  absulate">
//             <button
//               type="submit"
//               className="bg-blue-500 w-full text-white py-2 px-4 rounded-lg font-semibold hover:bg-blue-300 focus:outline-none focus:bg-blue-300"
//             >
//               Review
//             </button>
//           </div>
//         </form>
//       </div>
//     </div>
//   );
// }

// export default StockBuy;

// added new page

import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { MdOutlineArrowBackIos } from 'react-icons/md';
import { Link, useLocation, useNavigate, useParams } from 'react-router-dom';
import { notionalToQty, qtyToNotional } from '../../Utils/converter';
import GifPicker, { TenorImage } from 'gif-picker-react';
import BackButton from '../globalBackButton/BackButton';
import { instance } from '../../lib/AxiosInstance';
import TextImage from '../TextImage/TextImage';
import Loader from '../Loader/Loader';
import { useSelector } from 'react-redux';
type FormData = {
  orderType: string;
  limitPrice: number;
  quantity: number;
};
const TENOR_API_KEY = 'AIzaSyDnZRuJZLLnuminKP4zkIqPPT10noYsDzo';

function StockBuy() {
  const navigate = useNavigate();
  const { symbol: shareSymbol } = useParams();
  const { handleSubmit, control, watch, setValue } = useForm<FormData>();
  const balancedata = useSelector((state: RootState) => state.balance)
console.log("stockbuy balance😉😉😉", balancedata?.available_to_invest);
  const [selectedOption, setSelectedOption] = useState(''); // Default to 'Market'
  const [singleSharePrice, setSingleSharePrice] = useState(0);
  const [buyingPrice, setBuyingPrice] = useState('');
  const [buyingQuantity, setBuyingQuantity] = useState('');
  const [limitPrice, setLimitPrice] = useState('');
  const [balance, setBalance] = useState(balancedata?.available_to_invest);
  const [symbol, setSymbol] = useState(shareSymbol);
  const [post, setPost] = useState('');
  const [available, setAvailable] = useState(234234);
  const [gifSelected, setGifSelected] = useState(null);
  const [isGifPickerVisible, setIsGifPickerVisible] = useState(false);
  const [extradata, setextradata] = useState([]);
  const [loading, setLoading] = useState(true);

  const [stockData, setStockData] = useState();

  

  const toggleGifPicker = e => {
    e.preventDefault();
    setIsGifPickerVisible(!isGifPickerVisible);
  };

  const handleGifClick = (selectedGif: any) => {
    setGifSelected(selectedGif);
    setIsGifPickerVisible(false); // Close the GIF picker
  };
  // console.log('--->', gifSelected?.url);

  const selected = watch('orderType', selectedOption);
  const { state } = useLocation();
  console.log('state ✔✔✔', state);

  useEffect(() => {
    // if (state?.data || state?.data?.data) {
    let stockData = state?.data;
    if (state?.data?.data) {
      stockData = state?.data?.data;
      // stockData = stockData.data;
    }
    console.log("stock buy tsx", stockData);
    setStockData(stockData);
    instance.get(`/symbol/history?name=${stockData?.symbol}`).then((res) => {
      const data = res.data?.data;
      // console.log(`extra data `, data);
      setLoading(false);
      setextradata(data)
    });
    setSingleSharePrice(stockData?.price?.price);
    setAvailable(stockData?.price.volume);
    // console.log('🎈', state);
    // }
  }, []);

  const onSubmit = (ev: any) => {
    ev.preventDefault();

    const orderData = {
      symbol: shareSymbol,
      singlePrice: singleSharePrice,
      quantity: buyingQuantity,
      totalPrice: buyingPrice,
      limitPrice: limitPrice,
      post: post,
      type: selectedOption,
      _data: state?.data,
      gif: gifSelected?.url
    };
    console.log(`🎗🎀🎁`, orderData);
    navigate('/order-review', { state: orderData });
  };
  const handlePriceChange = (ev: any) => {
    const value = ev.target?.value ?? 0;
    // console.log(`ev`, ev.target.value);
    const qty = notionalToQty(singleSharePrice, value, balance);
    setBuyingPrice(value);
    setBuyingQuantity(qty.toString());
  };

  const handleQuantityChange = (ev: any) => {
    const value = ev.target?.value ?? 0;
    // console.log(`ev`, ev.target.value);
    const notionalValue = qtyToNotional(singleSharePrice, value, balance);
    // console.log(`ev😒😒`, notionalValue);
    setBuyingQuantity(value);
    setBuyingPrice(notionalValue.toString());
  };
  const handleToggle = (value) => {
    console.log("check option value", selectedOption)
    // setSelectedOption(selectedOption === 'market' ? 'limit' : 'market');
    setSelectedOption((prev)=> value == 'limit' ? 'limit' : 'market' );
    setValue('limitPrice', 0);
    setValue('quantity', 0);
  };

  // console.log("extra data", extradata);


  if (loading) {
    return <Loader />
  }

  return (

    <div>
      <div className='m-3'>
        <BackButton />
      </div>

      <div className="m-3">
        <section className="flex  items-center rounded-full">
          <div className="">
            {
              stockData?.logo ?
                <img
                  className="h-16 w-16 rounded-full"
                  src={stockData?.logo}
                  alt=""
                /> :
                <TextImage text={stockData?.symbol} />
            }
          </div>
          <div className='ml-2'>
            <h2 className="text-2xl font-bold">{stockData?.name || stockData?.price?.yahoo?.longName}</h2>

            <div className='flex flex-row gap-2 items-center mt-1 align-center' >

              <div className=''>{symbol}</div>
              <div className="text-sm badge bg-indigo-700 text-white py-2">{stockData?.ysector || stockData?.sector?.shift()}</div>

            </div>
          </div>
        </section>

        <h1 className="text-3xl font-bold mt-5 ml-2">
          ${singleSharePrice}
          <span className="text-red-600 text-base font-bold"> {parseFloat(stockData?.price?.yahoo?.regularMarketChange).toFixed(2)}</span>
          <span className="text-red-600 text-base font-bold">( {parseFloat(stockData?.price?.yahoo?.regularMarketChangePercent).toFixed(2)}%)</span>
        </h1>

        {/* requrment */}
        <section className="mt-8 bg-gray-100 rounded-2xl p-3 py-3 ">
          {/* <hr style={{boxShadow: 'rgb(199, 219, 232) 1px 1px 1px 0px inset, rgba(288, 255, 211, 0.5) 0px 1px 0px 1px inset'}} className="bg-gray-100" /> */}
          <div className="flex justify-between mx-5 mt-2 font-bold">
            <span>open</span>
            <span>High</span>
            <span>Low</span>
            <span>Vol</span>
          </div>
          <hr style={{ boxShadow: 'rgb(199, 219, 232) 1px 1px 1px 0px inset, rgba(288, 255, 211, 0.5) 0px 1px 0px 1px inset' }} className="bg-gray-100 mt-2" />
          <div className="flex justify-between mx-5 mt-2 font-bold">
            <span>{extradata?.OpenPrice}</span>
            <span>{extradata?.HighPrice}</span>
            <span>{extradata?.LowPrice}</span>
            <span>{extradata?.Volume}</span>
          </div>
          {/* <hr style={{boxShadow: 'rgb(199, 219, 232) 1px 1px 1px 0px inset, rgba(288, 255, 211, 0.5) 0px 1px 0px 1px inset'}} className="bg-red-300" /> */}
        </section>
        <div className="bg-gray-200 py-3 mt-4 rounded-lg">
          <div className="flex justify-between items-center">
            <span className="font-bold ml-5 block">Available to Invest</span>
            <span className="font-bold mr-5 text-right block">
              {balancedata?.available_to_invest}
            </span>
          </div>
        </div>
        {/* requrment end */}

        {/* <section className="mt-5 ">
        <h2>Key Stats</h2>
      <div className="mt-10 mb-5 flex justify-between items-center gap-5">
          <div 
              className="bg-gray-100 border py-4 border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 ">
           <span>hdf</span>
          </div>
          <div 
              className="bg-gray-50 border py-6  border-gray-300 text-gray-900 text-sm rounded-3xl focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 ">
           <span>hdf</span>
          </div>
          </div>
      </section> */}

        <div className="App">
          {isGifPickerVisible && (
            <GifPicker
              tenorApiKey={TENOR_API_KEY}
              onGifClick={handleGifClick}
            />
          )}
        </div>

        <form onSubmit={ev => onSubmit(ev)}>
          <section>
            <div className="mt-10 mb-5 flex justify-between items-center gap-5">
              <div>
                <select
                  //  checked={selectedOption === 'limit'}
                  onChange={(e)=>handleToggle(e.target.value)}
                  className="bg-gray-100 border py-4 font-bold border-gray-100 text-center text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full  p-12    ">
                  <option selected>Choose option</option>
                  <option value="limit">Limit</option>
                  <option value="market">Market</option>
                </select>
              </div>
              <div>
                <input
                  value={buyingQuantity}
                  onChange={handleQuantityChange}
                  placeholder="Quantity"

                  className="bg-gray-100 border py-4 text-center border-gray 100 text-gray-900 text-sm rounded-lg block w-full p-2.5 "
                  type="number"

                />
              </div>
            </div>
          </section>

          <section>
            <div className="mt-10 mb-5 flex justify-between items-center gap-5">
              <div>
                <input
                  value={buyingPrice}
                  max={balancedata?.available_to_invest}
                  onChange={handlePriceChange}
                  placeholder="$Total"

                  className="bg-gray-100 border py-4 text-center border-gray-100 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
                  type="number"

                />
              </div>
              <div>

                <input
                  value={limitPrice}
                  disabled={selectedOption == "market"}
                  onChange={ev => setLimitPrice(ev.target.value)}
                  placeholder="Limit Price"

                  className="bg-gray-100 border py-4 text-center border-gray-100 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                  type="number"
                />

              </div>
            </div>

          </section>

          <section className='mt-16 mb-5'>
            <div className="flex items-center justify-center  ">
              <div className='w-full' dir="ltr">
                <input
                  value={post}
                  onChange={ev => setPost(ev.target.value)}
                  style={{ boxShadow: 'rgb(199, 219, 232) 1px 1px 1px 0px inset, rgba(288, 255, 211, 0.5) 0px 1px 0px 1px inset' }} className="rounded-s-lg py-7 w-full  bg-gray-100 text-center" />
              </div>


              {/* gif */}
              {gifSelected ? (
                <div onClick={e => toggleGifPicker(e)} dir="rtl">
                  <img className="rounded-s-lg py-7 bg-gray-100 text-center gif-preview w-40 h-20 mx-auto rounded-md" src={gifSelected?.url} style={{ boxShadow: 'rgb(199, 219, 232) 1px 1px 1px 0px inset, rgba(288, 255, 211, 0.5) 0px 1px 0px 1px inset' }} />
                </div>
              ) : (
                <div onClick={e => toggleGifPicker(e)} className='w-1/2' dir="rtl">
                  <div className="rounded-s-lg py-7 bg-gray-100 text-center gif-preview mx-auto rounded-md" style={{ boxShadow: 'rgb(199, 219, 232) 1px 1px 1px 0px inset, rgba(288, 255, 211, 0.5) 0px 1px 0px 1px inset' }} ><span className='font-bold'>Selecte Gif</span></div>
                </div>
              )}

            </div>

            {/* </div> */}
          </section>

          <div className="mt-10 text-center  ">
            <button

              type="submit"
              className="bg-blue-500 w-full text-white py-2 px-4 rounded-lg font-semibold hover:bg-blue-300 focus:outline-none focus:bg-blue-300"
            >
              Review
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default StockBuy;
