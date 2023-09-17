import './appStarting.css';
import baseImageTwo from '../../assets/starting-img/base-image-2.png';
import quoteOne from '../../assets/starting-img/quote-1.png';
import quoteTwo from '../../assets/starting-img/quote-2.png';
import quoteThree from '../../assets/starting-img/quote-3.png';
import quoteFour from '../../assets/starting-img/quote-4.png';
import quoteFive from '../../assets/starting-img/quote-5.png';
import quoteSix from '../../assets/starting-img/quote-6.png';
import quoteSeven from '../../assets/starting-img/quote-7.png';
import quoteEight from '../../assets/starting-img/quote-8.png';
import quoteNine from '../../assets/starting-img/quote-9.png';
import quoteTen from '../../assets/starting-img/quote-10.png';

const AppStarting = () => {
  return (
    <div className="landing-animation">
      <img className="base" src={baseImageTwo} alt="Base" />
      <div className="slider bg-red-400">
        <div className="slide-track">
          <div className="slide">
            <img src={quoteOne} alt="quote-1" height="300" />
          </div>
          <div className="slide">
            <img src={quoteTwo} alt="quote-2" height="300" />
          </div>
          <div className="slide">
            <img src={quoteThree} alt="quote-3" height="300" />
          </div>
          <div className="slide">
            <img src={quoteFour} alt="quote-4" height="300" />
          </div>
          <div className="slide">
            <img src={quoteFive} alt="quote-5" height="300" />
          </div>
        </div>
      </div>

      <div className="back-slider bg-green-400">
        <div className="back-slide-track">
          <div className="slide">
            <img src={quoteSix} alt="quote-6" height="300" />
          </div>
          <div className="slide">
            <img src={quoteSeven} alt="quote-7" height="300" />
          </div>
          <div className="slide">
            <img src={quoteEight} alt="quote-8" height="300" />
          </div>
          <div className="slide">
            <img src={quoteNine} alt="quote-9" height="300" />
          </div>
          <div className="slide">
            <img src={quoteTen} alt="quote-10" height="300" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AppStarting;
