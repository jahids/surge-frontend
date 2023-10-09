import Lottie from 'lottie-react';
// import loader from '../../assets/img/loader.json';
import stockgif from '../../assets/img/stockgif.json';
import phonestock from '../../assets/img/phonestock.json';
import { Link } from 'react-router-dom';
import surgelogo from '../../assets/img/surge.png';

const AppStarting = () => {
  return (
    <div>
      <Link to="/">
        <div className="mt-6 ml-10">
          <img
            style={{ marginLeft: '-19px' }}
            className="w-[120px] "
            src={surgelogo}
            alt="company_logo"
          />
        </div>
      </Link>
      <section>
        <h1
          // style={{ lineHeight: '1.5', color: 'rgb(33 206 153)' }}
          className="ml-10 mt-8 text-4xl text-center font-bold text-indigo-600 "
        >
          Search Socially Your <br /> Stocks here
        </h1>

        <p
          style={{
            lineHeight: '1.5',
            // textAlign: 'center',
            // textJustify: 'inter-word',
          }}
          className="line-clamp-3 mt-8 text-center"
        >
          {/* win socially Trade win / lose fund have fun */}
          Win socially. Trade smartly. Have fun!
        </p>
      </section>
      <div className="flex items-center justify-center mt-10 ">
        <div>
          <Lottie animationData={phonestock} loop={true} />
        </div>
      </div>

      <section className="flex justify-center items-center gap-6 mb-4 align-center  bottom-0 fixed  w-full">
        <Link to="/login">
          <button
            type="button"
            className="py-4 px-10 focus:outline-none text-white btn-active btn-primary hover:bg-indigo-800 focus:ring-4 focus:ring-indigo-200 font-medium rounded-lg text-sm  mb-2 dark:bg-indigo-600 dark:hover:bg-indigo-700 dark:focus:ring-indigo-200"
          >
            Sign in
          </button>
        </Link>
        <Link to="/registration">
          <button
            type="button"
            className="py-4 px-10  focus:outline-none text-white   btn-active btn-primary  hover:bg-indigo-800 focus:ring-4 focus:ring-indigo-200 font-medium rounded-lg text-sm  mb-2 dark:bg-indigo-600 dark:hover:bg-indigo-700 dark:focus:ring-indigo-200"
          >
            Sign Up
          </button>
        </Link>
      </section>
    </div>
  );
};

export default AppStarting;

// <div className="landing_animation">
//   <img className="base_img" src={baseImageTwo} alt="Baseimage" />
//   <div className="slider_container">
//     <div className="slide_track">
//       <div className="slide_item">
//         <img src={quoteOne} alt="quote-1" height={300} />
//       </div>
//       <div className="slide_item">
//         <img src={quoteTwo} alt="quote-2" height={300} />
//       </div>
//       <div className="slide_item">
//         <img src={quoteThree} alt="quote-3" height={300} />
//       </div>
//       <div className="slide_item">
//         <img src={quoteFour} alt="quote-4" height={300} />
//       </div>
//       <div className="slide_item">
//         <img src={quoteFive} alt="quote-5" height={300} />
//       </div>
//     </div>
//   </div>

//   <div className="back_slider">
//     <div className="back_slide_track">
//       <div className="">
//         <img src={quoteSix} alt="quote-6" />
//       </div>
//       <div className="">
//         <img src={quoteSeven} alt="quote-7" />
//       </div>
//       <div className="">
//         <img src={quoteEight} alt="quote-8" />
//       </div>
//       <div className="">
//         <img src={quoteNine} alt="quote-9" />
//       </div>
//       <div className="">
//         <img src={quoteTen} alt="quote-10" />
//       </div>
//     </div>
//   </div>
// </div>
