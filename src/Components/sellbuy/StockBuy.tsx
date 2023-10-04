/* eslint-disable */
import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { MdOutlineArrowBackIos } from 'react-icons/md';
import { Link, useLocation, useNavigate, useParams } from 'react-router-dom';
import { notionalToQty, qtyToNotional } from '../../Utils/converter';
import GifPicker, { TenorImage } from 'gif-picker-react';
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
  const [selectedOption, setSelectedOption] = useState('market'); // Default to 'Market'
  const [singleSharePrice, setSingleSharePrice] = useState(0);
  const [buyingPrice, setBuyingPrice] = useState('');
  const [buyingQuantity, setBuyingQuantity] = useState('');
  const [limitPrice, setLimitPrice] = useState('');
  const [balance, setBalance] = useState(50000);
  const [symbol, setSymbol] = useState(shareSymbol);
  const [post, setPost] = useState('');
  const [available, setAvailable] = useState(234234);
  const [gifSelected, setGifSelected] = useState(null);
  const [isGifPickerVisible, setIsGifPickerVisible] = useState(false);

  const toggleGifPicker = e => {
    e.preventDefault();
    setIsGifPickerVisible(!isGifPickerVisible);
  };

  const handleGifClick = (selectedGif: any) => {
    setGifSelected(selectedGif);
    setIsGifPickerVisible(false); // Close the GIF picker
  };
  console.log('--->', gifSelected?.url);

  const selected = watch('orderType', selectedOption);
  const { state } = useLocation();
  console.log('state ✔✔✔', state?.data?.logo);

  useEffect(() => {
    if (state?.data || state?.data?.data) {
      const stockData = state?.data || state?.data?.data;
      console.log("stock buy tsx",stockData);
      
      setSingleSharePrice(stockData?.price?.price);
      setAvailable(stockData?.price.volume);
      console.log('🎈', state);
    }
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
      gif : gifSelected?.url
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
    setBuyingQuantity(value);
    setBuyingPrice(notionalValue.toString());
  };
  const handleToggle = () => {
    setSelectedOption(selectedOption === 'market' ? 'limit' : 'market');
    setValue('limitPrice', 0);
    setValue('quantity', 0);
  };

  // console.log(`🔥`,shar);
  return (
    <div className=''>
    

      {/* top code added */}
      <div className="flex">
  <div className="flex-1  p-4">
  <div><Link onClick={() => navigate(-1)}>
        <div className="py-4 w-[30px]">
          <MdOutlineArrowBackIos className="text-[30px] text-gray-500" />
        </div>
      </Link></div>
  </div>
  <div className="flex-none justify-center items-center mt-5 p-4 text-xl font-bold">
  {selectedOption === 'market' ? 'Market' : 'Limit'}
  </div>
  <div className="flex-1   p-4">
  <div className='flex mt-5 justify-end items-end '>
        <label
                className={`toggle ${
                  selectedOption === 'market'
                    ? 'toggle-primary'
                    : 'toggle-secondary'
                }`}
              >
                <input
                  type="checkbox"
                  className="toggle"
                  checked={selectedOption === 'limit'}
                  onChange={handleToggle}
                />
                <span className="toggle-mark"></span>
              
              </label>
        </div>
  </div>
</div>
      {/* top code end */}

      <div className="p-5">
        <div className="flex justify-between ">
          <div>
            <h2 className="text-2xl font-bold">BUY {symbol}</h2>
            <span className="text-gray-600 block">
              Stock price ${singleSharePrice}
            </span>
            <span className="text-gray-600"> available {available} </span>
          </div>
          <div>
            <div className="flex space-x-2">
            <div className="bg-gray-100 rounded-full">
            <img
              className="w-12 h-12 rounded-full object-contain"
              src={state?.data?.logo}
              alt="revance"
            />
          </div>
            </div>
          </div>
        </div>

        <div className="App">
          {isGifPickerVisible && (
            <GifPicker
              tenorApiKey={TENOR_API_KEY}
              onGifClick={handleGifClick}
            />
          )}
        </div>

        <form onSubmit={ev => onSubmit(ev)}>
          <div className="py-5 flex flex-col justify-center items-center">
            <input
              value={buyingQuantity}
              onChange={handleQuantityChange}
              placeholder="Quantity"
              className="w-full text-5xl bg-gray-100 font-extrabold m-5 text-center rounded-lg py-3 px-4 focus:outline-none focus:ring-2 focus:ring-blue-200 transition duration-300 ease-in-out transform hover:scale-105"
              type="number"
            />

            <input
              value={buyingPrice}
              onChange={handlePriceChange}
              placeholder="$Total"
              className="w-full text-5xl bg-gray-100 font-extrabold m-5 text-center rounded-lg py-3 px-4 focus:outline-none focus:ring-2 focus:ring-blue-200 transition duration-300 ease-in-out transform hover:scale-105"
              type="number"
            />

            {selected === 'limit' ? (
              <input
                value={limitPrice}
                onChange={ev => setLimitPrice(ev.target.value)}
                placeholder="Limit Price"
                className="w-full text-5xl bg-gray-100 font-extrabold m-5 text-center rounded-lg py-3 px-4 focus:outline-none focus:ring-2 focus:ring-blue-200 transition duration-300 ease-in-out transform hover:scale-105"
                type="number"
              />
            ) : null}
          </div>

          <div className="flex justify-center">
            {/* <div> */}
            <textarea
              value={post}
              onChange={ev => setPost(ev.target.value)}
              className="w-[100%] mb-5 bg-gray-100 text-xl font-extrabold  text-center rounded-lg py-3 px-4 focus:outline-none focus:ring-2 focus:ring-blue-200 transition duration-300 ease-in-out transform hover:scale-105"
              placeholder="Share"
            ></textarea>
          </div>

          {/* gi=f */}

          <div className="show-gif flex justify-center">
            {gifSelected ? (
              <div
                onClick={e => toggleGifPicker(e)}
                className="w-full mb-5 bg-gray-100 text-xl font-extrabold  text-center rounded-lg py-3 px-4 focus:outline-none focus:ring-2 focus:ring-blue-200 transition duration-300 ease-in-out transform hover:scale-105"
              >
                <img
                  src={gifSelected?.url}
                  className="gif-preview w-20 h-20 mx-auto rounded-md"
                  alt="Selected GIF"
                />
              </div>
            ) : (
              <div
                onClick={e => toggleGifPicker(e)}
                className="w-[100%] mb-5 bg-gray-100 text-xl font-extrabold  text-center rounded-lg py-5 px-4 focus:outline-none focus:ring-2 focus:ring-blue-200 transition duration-300 ease-in-out transform hover:scale-105"
              >
                <h2>Selected GIF</h2>
              </div>
            )}
          </div>

          {/* gif end */}
          <div className="mt-5 text-center  absulate">
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
