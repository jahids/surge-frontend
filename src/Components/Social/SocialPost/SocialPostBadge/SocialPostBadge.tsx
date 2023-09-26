import { useEffect, useState } from "react";
import { instance } from "../../../../lib/AxiosInstance";

const SocialPostBadge = ({order_id,buyer_id,dbPrice} : any) => {

  const [symbol,setSymbol] = useState('');
  const [price,setPrice] = useState(dbPrice ?? 0);


  useEffect(()=>{
    const dbCall = async ()=>{
          const {data : {data}} = await instance.get(`/social/order?user_id=${buyer_id}&order_id=${order_id}`);
          console.log(data);
          setSymbol(data.symbol);
          if(data.filled_avg_price){

            setPrice(data.filled_avg_price);
          }
      };
    dbCall();
  },[order_id,buyer_id]);
  return (
    <div className="mt-5 bg-gray-100 p-3 rounded-lg">
      <div className="flex items-center space-x-2">
        <div className="object-cover">
          <img
            className="w-7 h-7 rounded-full"
            src="https://s3.amazonaws.com/cdn.designcrowd.com/blog/100-Famous-Brand%20Logos-From-The-Most-Valuable-Companies-of-2020/apple-logo.png"
            alt=""
          />
        </div>
        <div>
          <p className="text-sm">Bought</p>
          <p className="text-sm">
        
            <span className="font-bold">{symbol}</span> at ${price}
          </p>
        </div>
      </div>
    </div>
  );
};

export default SocialPostBadge;
