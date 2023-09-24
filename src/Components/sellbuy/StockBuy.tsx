/* eslint-disable */
import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { MdOutlineArrowBackIos } from 'react-icons/md';
import { Link, useLocation, useNavigate, useParams } from 'react-router-dom';
import { notionalToQty, qtyToNotional } from '../../Utils/converter';

type FormData = {
  orderType: string;
  limitPrice: number;
  quantity: number;
};

function StockBuy() {
  const navigate = useNavigate();

  const {symbol : shareSymbol} = useParams();
  const { handleSubmit, control, watch, setValue } = useForm<FormData>();
  const [selectedOption, setSelectedOption] = useState('market'); // Default to 'Market'
  const [singleSharePrice, setSingleSharePrice] = useState(0);
  const [buyingPrice, setBuyingPrice] = useState('');
  const [buyingQuantity, setBuyingQuantity] = useState('');
  const [limitPrice, setLimitPrice] = useState('');
  const [balance, setBalance] = useState(45);
  const [symbol, setSymbol] = useState(shareSymbol);

  const [post,setPost] = useState('');

  const [available, setAvailable] = useState(234234);

  const selected = watch('orderType', selectedOption);

  const {state} = useLocation();

  useEffect(()=>{
    if(state?.data){

      const stockData = state.data;

      setSingleSharePrice(stockData?.price?.price);
      setAvailable(stockData?.price.volume);
      console.log('🎈',state);
    }
  },[]);

  const onSubmit = (ev: any) => {
    ev.preventDefault();


    const orderData = {
        symbol : shareSymbol,
        singlePrice : singleSharePrice,
        quantity : buyingQuantity,
        totalPrice : buyingPrice,
        limitPrice : limitPrice,
        post : post,
        type : selectedOption,
        _data : state?.data
    };
    console.log(`🎗🎀🎁`,orderData);

    // console.log(`per share price : ${singleSharePrice}`);

    // console.log('buying quantity: ', buyingQuantity);
    // console.log('buying price : ', buyingPrice);
    // console.log(`limit price:`, limitPrice);
    // console.log(`🎉 post=`,post);
    // console.log(`type=`,selectedOption);
    

    navigate('/order-review', { state: orderData });
  };

  //   const handleOptionChange = (option: string) => {
  //     setSelectedOption(option);
  //     setValue('limitPrice', 0);
  //     setValue('quantity', 0);
  //   };

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

  const isReviewButtonDisabled = () => {
    if (selected === 'limit') {
      // Check if all limit fields are filled
      return !watch('limitPrice') || !watch('quantity') || !watch('price');
    } else {
      // Check if all market fields are filled
      return !watch('marketPrice') || !watch('quantity');
    }
  };

  // console.log(`🔥`,shar);
  return (
    <div>
      <Link onClick={() => navigate(-1)}>
        <div className="py-4 w-[30px]">
          <MdOutlineArrowBackIos className="text-[30px] text-gray-500" />
        </div>
      </Link>

      <div className="bg-gray-100 p-5">
        <div className="flex justify-between mx-5">
          <div>
            <h2 className="text-2xl font-bold">BUY {symbol}</h2>
            <span className="text-gray-600">
              Stock price ${singleSharePrice}
            </span>
          </div>
          <div>
            <div className="flex space-x-2">
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
                {selectedOption === 'market' ? 'Market' : 'Limit'}
              </label>
            </div>
          </div>
        </div>

        <form onSubmit={ev => onSubmit(ev)}>
          <div className="py-5 flex flex-col justify-center items-center">
            <input
              value={buyingQuantity}
              onChange={handleQuantityChange}
              placeholder="Quantity"
              className="w-1/2 text-5xl font-extrabold m-5 text-center border border-gray-300 rounded-lg py-2 px-4 focus:outline-none focus:border-blue-500"
              type="number"
              // min={0}
            />

            <input
              value={buyingPrice}
              onChange={handlePriceChange}
              placeholder="Price"
              className="w-1/2 text-5xl font-extrabold m-5 text-center border border-gray-300 rounded-lg py-2 px-4 focus:outline-none focus:border-blue-500"
              type="number"
            />

            {selected === 'limit' ? (
              <input
                value={limitPrice}
                onChange={ev => setLimitPrice(ev.target.value)}
                placeholder="Limit Price"
                className="w-1/2 text-5xl font-extrabold m-5 text-center border border-gray-300 rounded-lg py-2 px-4 focus:outline-none focus:border-blue-500"
                type="number"
              />
            ) : null}
            <span className="text-gray-600"> {available} available</span>
          </div>

          <div className="flex justify-center">
            {/* <div> */}
            <textarea style={{width:'80%'}} value={post} onChange={(ev) => setPost(ev.target.value)} className="textarea" placeholder="Share your thoughts"></textarea>
              {/* <span>gif</span> */}
            {/* </div> */}
            {/* <div>
              <span>public</span>
            </div> */}
          </div>
          <div className="mt-5 text-center">
            <button
              //disabled={!isReviewButtonDisabled}
              type="submit"
              className="bg-blue-200 text-blue-800 py-2 px-4 rounded-lg font-semibold hover:bg-blue-300 focus:outline-none focus:bg-blue-300"
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
