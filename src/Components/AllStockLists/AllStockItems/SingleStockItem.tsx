/* eslint-disable  */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import { useEffect, useState } from 'react';
import { round2Places, truncateText } from '../../../Utils/converter';
import { instance } from '../../../lib/AxiosInstance';
import { useNavigate } from 'react-router-dom';
import TextImage from '../../TextImage/TextImage';
const defaultlogo = `https://images2.imgbox.com/52/06/7xFpAH04_o.png`;


function SingleStockItem({ data }: any) {
  // console.log("user protfolio", data);

  const [extradata, setextradata] = useState(null);
  const [marketparcentage, setmarketparcentage] = useState<any>(null);
  console.log('data', data);

  const navigate = useNavigate();




  useEffect(() => {
    const findExtraDes = async () => {
      try {
        const response = await instance.get(`symbol?name=${data?.symbol}`);
        // const response2 = await instance.get(`movers-stats/${data?.symbol}`);

        setextradata(response?.data);
        // setmarketparcentage(response2?.data?.data?.change);
        const dt = (response?.data.data.price.yahoo.regularMarketChangePercent || '0.00');
        console.log(`🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥`, round2Places(dt));
        setmarketparcentage(round2Places(dt))


        // setmarketparcentage();

        console.log(`✨Res 1🎊`, response?.data);
        // console.log('🎁 Res 2🎎', response2?.data);
      } catch (error) {
        console.log('error', error);
      }
    };

    findExtraDes();
  }, []);

  // console.log("extradta", extradata);

  return (
    <>
      <>
        <div
          onClick={() => navigate('/buy-stock', { state: data?.symbol })}
          className="flex items-center justify-between mb-4"
        >
          <div className="flex items-center">
            <div>
              {/* <img
                className="w-12 h-12 p-1 rounded-full bg-gray-100 object-contain"
                src={extradata?.logo || defaultlogo}
                alt=""
              /> */}
              {
                extradata?.logo ? <img
                  className="w-12 h-12 p-1 rounded-full bg-gray-100 object-contain"
                  src={extradata?.logo}
                  alt=""
                /> : <TextImage text={data?.symbol} />
              }
            </div>
            <div className="mx-5">
              <p className="font-bold">
                {truncateText(data?.name, 23) || extradata?.name}
              </p>
              <p className="text-gray-400 text-sm">
                {data?.symbol}
                {/* {truncateText(extradata?.name, 15)} */}
              </p>
            </div>
          </div>

          <div>

            <div>
              <button className="bg-green-200 py-2 px-2 rounded-full text-green-500 text-xs font-semibold">
                {`${marketparcentage || '0.00'}%`}
              </button>
            </div>
          </div>
        </div>
      </>
    </>
  );
}

export default SingleStockItem;
