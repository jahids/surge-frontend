import AssetsList from './AssetsList/AssetsList';
import AssetsSearch from './AssetsSearch/AssetsSearch';
import DoneBtn from './DoneBtn/DoneBtn';

const AllAssets = () => {
  return (
    <div className="p-5">
      <section>
        <AssetsSearch />
      </section>
      <section>
        <AssetsList />
      </section>
      <section className="">
        <DoneBtn />
      </section>
    </div>
  );
};

export default AllAssets;
