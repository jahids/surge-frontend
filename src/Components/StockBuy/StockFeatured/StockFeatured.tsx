import './StockFeatured.css';
import technology from '../../../assets/img/technology.png';
import virtualReality from '../../../assets/img/virtual_reality.png';

const StockFeatured = () => {
  return (
    <div className="my-10">
      <p className="text-xl font-bold">Featured in</p>
      <p className="text-sm text-gray-400">Discover Other assets like -</p>
      {/* --- featured card start --- */}
      <div className="card_wrapper mt-5 max-h-full flex overflow-x-auto">
        <div className="card_item flex-col items-baseline p-5 rounded-3xl bg-[#F5F5F5] mr-[20px] shadow-sm">
          <img
            className="w-[80px] h-auto mx-auto"
            src={technology}
            alt="technology"
          />
          <p className="font-bold text-sm text-center mt-2">Technology</p>
        </div>
        <div className="card_item flex-col items-baseline p-5 rounded-3xl bg-yellow-200 mr-[20px] shadow-sm">
          <img
            className="w-[80px] h-auto mx-auto"
            src={virtualReality}
            alt="technology"
          />
          <p className="font-bold text-sm text-center mt-2">Virtual Reality</p>
        </div>
      </div>
      {/* --- featured card end --- */}
    </div>
  );
};

export default StockFeatured;
