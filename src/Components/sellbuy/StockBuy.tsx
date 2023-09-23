import React, { useState } from 'react';
import { useForm, Controller } from 'react-hook-form';
import { MdOutlineArrowBackIos } from 'react-icons/md';
import Sheet from 'react-modal-sheet';
import { Link, useNavigate } from 'react-router-dom';

type FormData = {
  orderType: string;
  limitPrice: number;
  quantity: number;
};

function StockBuy() {
  const navigate = useNavigate();
  const { handleSubmit, control, watch, setValue } = useForm<FormData>();
  const [selectedOption, setSelectedOption] = useState('market'); // Default to 'Market'

  const selected = watch('orderType', selectedOption);

  const onSubmit = (data: FormData) => {
    console.log(data);
    navigate('/order-review', { state: data });
  };

  //   const handleOptionChange = (option: string) => {
  //     setSelectedOption(option);
  //     setValue('limitPrice', 0);
  //     setValue('quantity', 0);
  //   };

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

  return (
    <div>
      <Link onClick={() => navigate(-1)}>
        <div className="py-4 w-[30px]">
          <MdOutlineArrowBackIos className="text-[30px] text-gray-500" />
        </div>
      </Link>
      <div className="bg-gray-100 p-5 mt-5">
        <div className="flex justify-between mx-5">
          <div>
            <h2 className="text-2xl font-bold">BUY CFLX</h2>
            <span className="text-gray-600">Stock price $453</span>
          </div>
          <div>
            {/* <h2 className="text-xl font-semibold">Toggle</h2> */}
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
              {/* <label>
                      <input
                        type="radio"
                        name="orderType"
                        value="market"
                        onChange={() => handleOptionChange('market')}
                        checked={selectedOption === 'market'}
                      />
                      Market
                    </label>
                    <label>
                      <input
                        type="radio"
                        name="orderType"
                        value="limit"
                        onChange={() => handleOptionChange('limit')}
                        checked={selectedOption === 'limit'}
                      />
                      Limit
                    </label> */}
            </div>
          </div>
        </div>

        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="py-5 flex flex-col justify-center items-center">
            {selected === 'limit' ? (
              <>
                <Controller
                  name="limitPrice"
                  control={control}
                  render={({ field }) => (
                    <input
                      {...field}
                      placeholder="Limit Price"
                      className="w-1/2 text-5xl font-extrabold m-5 text-center border border-gray-300 rounded-lg py-2 px-4 focus:outline-none focus:border-blue-500"
                      type="number"
                    />
                  )}
                />
                <Controller
                  name="quantity"
                  control={control}
                  render={({ field }) => (
                    <input
                      {...field}
                      placeholder="Quantity"
                      className="w-1/2 text-5xl font-extrabold m-5 text-center border border-gray-300 rounded-lg py-2 px-4 focus:outline-none focus:border-blue-500"
                      type="number"
                    />
                  )}
                />
                <Controller
                  name="price"
                  control={control}
                  render={({ field }) => (
                    <input
                      {...field}
                      placeholder="Price"
                      className="w-1/2 text-5xl font-extrabold m-5 text-center border border-gray-300 rounded-lg py-2 px-4 focus:outline-none focus:border-blue-500"
                      type="number"
                    />
                  )}
                />
              </>
            ) : (
              <>
                <Controller
                  name="marketPrice"
                  control={control}
                  render={({ field }) => (
                    <input
                      {...field}
                      placeholder="Market Price"
                      className="w-1/2 text-5xl font-extrabold m-5 text-center border border-gray-300 rounded-lg py-2 px-4 focus:outline-none focus:border-blue-500"
                      type="number"
                    />
                  )}
                />
                <Controller
                  name="quantity"
                  control={control}
                  render={({ field }) => (
                    <input
                      {...field}
                      placeholder="Quantity"
                      className="w-1/2 text-5xl font-extrabold m-5 text-center border border-gray-300 rounded-lg py-2 px-4 focus:outline-none focus:border-blue-500"
                      type="number"
                    />
                  )}
                />
              </>
            )}
            <span className="text-gray-600">100,089 available</span>
          </div>

          <div className="flex justify-between">
            <div>
              <span className="p-1">msg</span>
              <span>gif</span>
            </div>
            <div>
              <span>public</span>
            </div>
          </div>
          <div className="mt-5 text-center">
            <button
              disabled={isReviewButtonDisabled}
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
