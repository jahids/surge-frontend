import { useEffect, useState } from 'react';
import { useGetAllStockQuery } from '../../features/stock/allStockApiSlice';
import Loader from '../Loader/Loader';
import AssetsList from './AssetsList/AssetsList';
import AssetsSearch from './AssetsSearch/AssetsSearch';
import DoneBtn from './DoneBtn/DoneBtn';
import animationloader from '../../assets/img/skeletonloader.json';
import CustomLottie from '../../Utils/CustomLottie';
import { instance } from '../../lib/AxiosInstance';

const AllAssets = () => {

  const dataLimit = 12;
  const [loading, setLoading] = useState(true);

  const [assetList, setAssetList] = useState<null | any[]>();

  useEffect(() => {
    const dbCall = async () => {
      const { data: { data } } = await instance.get(`/stock?limit=${dataLimit}`);
      setAssetList(data);
      setLoading(false);
    }
    dbCall();
  }, []);

  const assetSearch = async (text: string) => {
    const { data: { data } } = await instance.get(`/stock?limit=15&item=${text}`);
    console.log(`search result  : `, data);
    setAssetList(data);
  }

  const handleSearch = (text: string) => {
    console.log(`search for this = `, text);
  }

  // if (loading) {
  //   return <Loader />;
  //   // return <CustomLottie animationData = {animationloader} />
  // }
  return (
    loading ? null : <div className="p-5">
      <section>
        <AssetsSearch searchHandler={assetSearch} />
      </section>
      <section className="mt-4">
        {assetList?.map((item: any) => (
          <div key={Math.random()}>
            {/* <SingleStockItem key={Math.random()} data={item} /> */}
            <AssetsList key={Math.random()} data={item} />
          </div>
        ))}
      </section>
    </div>
  );
};

export default AllAssets;
