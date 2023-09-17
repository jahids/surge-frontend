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
    <div className="landing_animation">
      <img className="base_img" src={baseImageTwo} alt="Baseimage" />
      <div className="slider_container">
        <div className="slide_track">
          <div className="slide_item">
            <img src={quoteOne} alt="quote-1" height={300} />
          </div>
          <div className="slide_item">
            <img src={quoteTwo} alt="quote-2" height={300} />
          </div>
          <div className="slide_item">
            <img src={quoteThree} alt="quote-3" height={300} />
          </div>
          <div className="slide_item">
            <img src={quoteFour} alt="quote-4" height={300} />
          </div>
          <div className="slide_item">
            <img src={quoteFive} alt="quote-5" height={300} />
          </div>
        </div>
      </div>

      <div className="back_slider">
        <div className="back_slide_track">
          <div className="">
            <img src={quoteSix} alt="quote-6" />
          </div>
          <div className="">
            <img src={quoteSeven} alt="quote-7" />
          </div>
          <div className="">
            <img src={quoteEight} alt="quote-8" />
          </div>
          <div className="">
            <img src={quoteNine} alt="quote-9" />
          </div>
          <div className="">
            <img src={quoteTen} alt="quote-10" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AppStarting;
