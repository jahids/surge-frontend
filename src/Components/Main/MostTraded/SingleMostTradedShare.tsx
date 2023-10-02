import tesla from '../../../assets/movers-img/tesla.png';
import apple from '../../../assets/movers-img/apple.png';
import { Link } from 'react-router-dom';
import TextImage from '../../TextImage/TextImage';
import { useEffect, useState } from 'react';
import { instance } from '../../../lib/AxiosInstance';
import { round2Places } from '../../../Utils/converter';
const loss = "bg-red-200 py-2 px-2 rounded-full text-red-500 text-xs font-semibold";
const gain = "bg-green-200 py-2 px-2 rounded-full text-green-500 text-xs font-semibold";



const SingleMostTradedShare = ({ symbolName }: { symbolName: string }) => {
    console.log(`🎁🎇🎉`, symbolName);
    const [symbolData, setSymbolData] = useState();

    const [change, setChange] = useState<any>();
    useEffect(() => {
        const dbCall = async () => {
            try {
                const { data } = await instance.get(`/symbol?name=${symbolName}`);

                const mpc = data?.price?.yahoo?.regularMarketChangePercent || 0.00;
                setChange(round2Places(mpc));

                setSymbolData(data);
                console.log(`🔥🏬🏬`, data);
            } catch (error) {
                console.log(error);
            }
        };
        dbCall();
    }, [change]);

    return (
        <div className="mt-2">
            {/* --- top movers company --- */}
            <div className="flex items-center justify-between mb-4">
                <div className="flex items-center">
                    <div>
                        {
                            symbolData?.logo ? <img
                                className="w-12 h-12 p-1 rounded-full bg-gray-100 object-contain"
                                src={symbolData?.logo}
                                alt=""
                            /> : <TextImage text={symbolName} />
                        }
                    </div>
                    <div className="mx-5">
                        <p className="font-bold"> {symbolName} </p>
                        <p className="text-gray-400 text-sm">{symbolName}</p>
                    </div>
                </div>
                <div>
                    <div>
                        <button className={change < 0 ? loss : gain}>
                            {change < 0 ? '' : '+'}{change}%
                        </button>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default SingleMostTradedShare;
