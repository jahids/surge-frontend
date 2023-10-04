import { useEffect, useState } from 'react';
import { useGetAllStockQuery } from '../../features/stock/allStockApiSlice';



import AssetsList from '../../Components/AllAssets/AssetsList/AssetsList';
import Loader from '../../Components/Loader/Loader';
import AssetsSearch from '../../Components/AllAssets/AssetsSearch/AssetsSearch';
import BackButton from '../../Components/globalBackButton/BackButton';
import { instance } from '../../lib/AxiosInstance';
import SingleWatchlistItem from '../../Components/Main/WatchList/SingleWatchlistItem';
import { useNavigate } from 'react-router-dom';


const UserFullWatchList = () => {
    const [isAllStockLoading, setIsAllStockLoading] = useState(true);
    const [watchItems, setWatchItems] = useState<undefined | null | any[]>();
    useEffect(() => {
        const dbCall = async () => {
            const { data } = await instance.get(`/watchlist`);
            console.log(`userFullWatchList =>`, data);
            if (data?.data) {
                setWatchItems(data.data);
                setIsAllStockLoading(false);
            }
        };
        dbCall();
    }, [watchItems?.length]);

    const navigate = useNavigate();

    if (isAllStockLoading) {
        return <Loader />;
        // return <CustomLottie animationData = {animationloader} />
    }
    return (
        <div className="p-5">
            <div className='flex w-100vw justify-between'>
                <BackButton py={'py-2'} />
                <button onClick={() => navigate(`/assets`)} className="text-4xl text-gray-500">+</button>
            </div>
            <section>
                <div className="mt-2" >
                    <h1 className="text-3xl font-bold">Watchlist</h1>
                    <p className="mt-1 text-sm text-gray-400">
                        Start tracking your next opportunity
                    </p>
                </div>
            </section>
            <section className="mt-4">
                {watchItems?.map((item: any) => (
                    <div key={Math.random()}>
                        <SingleWatchlistItem symbolName={item} />
                    </div>
                ))}
            </section>
        </div>
    );
};

export default UserFullWatchList;
