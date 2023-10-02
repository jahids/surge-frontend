/* eslint-disable  */
import { FC, useEffect, useState } from 'react';
import { instance } from '../../../lib/AxiosInstance';
import { useNavigate } from 'react-router-dom';
import animationloader from '../../../assets/img/skeletonloader.json';
import Lottie from 'lottie-react';
import { round2Places, truncateText } from '../../../Utils/converter';
import { watchlistLoader } from '../../../lib/AllLoder';
import TextImage from '../../TextImage/TextImage';
const defaultlogo = `https://images2.imgbox.com/52/06/7xFpAH04_o.png`;



export const SingleWatchlistItem = ({ symbolName }: { symbolName: string }) => {
    // console.log(`symbolName 🔥🔥`, symbolName);
    const navigate = useNavigate();
    const [symbolData, setSymbolData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [marketparcentage, setMarketParcentage] = useState<any>();
    useEffect(() => {
        const dbCall = async () => {
            const { data: symbolInfo } = await instance.get(`symbol?name=${symbolName}`);
            const { price: { yahoo: { regularMarketChangePercent
            } } } = symbolInfo;

            setSymbolData(symbolInfo);
            setLoading(false);
            setMarketParcentage(round2Places(regularMarketChangePercent || Math.random() * 100))
            // setMarketParcentage(parseFloat(regularMarketChangePercent).toPrecision(3) || Math.random() * 100);

        };
        dbCall();
    }, [symbolName]);


    return (

        symbolData ?
            <>
                <>
                    <div
                        onClick={() => navigate('/buy-stock', { state: symbolName })}
                        className="flex items-center justify-between mb-4"
                    >
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
                                <p className="font-bold">
                                    {truncateText(symbolData?.name, 20)}
                                </p>
                                <p className="text-gray-400 text-sm">
                                    {symbolName}
                                </p>
                            </div>
                        </div>

                        <div>
                            <div>
                                <button
                                    className={
                                        marketparcentage! < 0
                                            ? 'bg-red-200 py-2 px-2 rounded-full text-red-800 text-xs font-semibold'
                                            : 'bg-green-200 py-2 px-2 rounded-full text-green-800 text-xs font-semibold'
                                    }
                                >
                                    {`${marketparcentage || '3.98'}%`}
                                </button>
                            </div>
                        </div>

                    </div>
                </>
            </> : null
    );
}


export default SingleWatchlistItem;
