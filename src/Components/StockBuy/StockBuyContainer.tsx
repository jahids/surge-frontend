import News from '../Main/News/News';
import StockAbout from './StockAbout/StockAbout';
import StockBuyButton from './StockBuyButton/StockBuyButton';
import StockBuyChart from './StockBuyChart/StockBuyChart';
import StockBuyHeader from './StockBuyHeader/StockBuyHeader';
import StockCurrentPrice from './StockCurrentPrice/StockCurrentPrice';
import StockFeatured from './StockFeatured/StockFeatured';
import StockTopBtn from './StockTopBtn/StockTopBtn';

const StockBuyContainer = () => {
  return (
    <div className="px-5 pb-10 relative">
      <section>
        <StockTopBtn />
      </section>
      <section>
        <StockBuyHeader />
      </section>
      <section>
        <StockBuyChart />
      </section>
      <section>
        <StockAbout />
      </section>
      <section>
        <StockCurrentPrice />
      </section>
      <section>
        <News />
      </section>
      <section>
        <StockFeatured />
      </section>
      <section className="fixed bottom-0 right-0 mb-10 mr-5">
        <StockBuyButton />
      </section>
    </div>
  );
};

export default StockBuyContainer;
