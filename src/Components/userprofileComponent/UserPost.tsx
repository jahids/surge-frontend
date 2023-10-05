/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/alt-text */
import React from 'react';
import styles from './UserPost.module.css'; // Import the CSS module
import { truncateText } from '../../Utils/converter';
import { useNavigate } from 'react-router';
import { Link } from 'react-router-dom';

function UserPost({ data }: any) {
  console.log('like comment 🍴🍴🍴🥉', data);
  const navigate = useNavigate();
  return (
  // <ul className={styles.cards}>
  //   <li>
  //     <p className={styles.card}>
  //       <img
  //         src={data?.links || 'https://i.imgur.com/2DhmtJ4.jpg'}
  //         className={styles.card__image}
  //         alt=""
  //       />
  //       <div className={styles.card__overlay}>
  //         <div className={styles.card__header}>
  //           <svg
  //             className={styles.card__arc}
  //             xmlns="http://www.w3.org/2000/svg"
  //           >
  //             <path />
  //           </svg>
  //           <img
  //             className={styles.card__thumb}
  //             src={
  //               data?.symbol[0]?.logo ||
  //               'https://static2.finnhub.io/file/publicdatany/finnhubimage/stock_logo/950671851426.svg'
  //             }
  //             alt=""
  //           />
  //           <div className={styles.card__headerText}>
  //             <h1>{data?.symbol[0].symbol}</h1>
  //             {/* <span className="bg-green-400 text-xs font-medium mr-3 px-5 py-1 rounded-full">
  //               {truncateText(data?.symbol[0]?.name, 30)}
  //             </span> */}
  //             {/* <span className="bg-green-400 text-xs font-medium block  px-2 py-1 rounded-full">
  //               {data?.symbol[0].name}
  //             </span> */}
  //             <br />
  //             <span
  //               className={`${
  //                 data?.order_side === 'buy' ? 'bg-green-400' : 'bg-red-400'
  //               } text-xs font-medium mr-3 px-5 py-1 rounded-full`}
  //             >
  //               {data?.order_side}
  //             </span>
  //             <span className="bg-green-400 text-xs font-medium mr-3 px-5 py-1 rounded-full">
  //               {data?.order_type || 'limit'}
  //             </span>

    //             {/* <span className={styles.card__status}>3 hours ago</span> */}
    //           </div>
    //         </div>
    //         <p className={styles.card__description}>{data?.text}</p>
    //       </div>
    //     </p>
    //   </li>
    // </ul>
    <Link to={`/post/${data?._id}`} state={{ userId: data?.user[0]._id }}>
      <div
        // onClick={() => {
        //   // to={`/post/${postData._id}`}
        //   // state={{ userId: postData?.user[0]._id }}
        //   navigate(`/post/${data?._id}`);
        // }}

        className=" mt-3 mb-2 bg-white-500 shadow-md p-2 m-5 rounded-lg "
      >
        <div className="mt-5  bg-gray-100  p-3 rounded-lg">
          <div className="flex items-center space-x-2">
            <div className="object-cover">
              <img
                className="w-7 h-7 rounded-full"
                src={
                  data?.symbol[0]?.logo ||
                  'https://static2.finnhub.io/file/publicdatany/finnhubimage/stock_logo/950671851426.svg'
                }
              />
            </div>
            <div>
              {/* <p className="text-sm">{state?.sell === true ? 'Sell' : 'Buy'}</p> */}
              <p className="text-sm">{'bougth'}</p>
              <p className="text-sm">
                <span className="font-bold">{data?.symbol[0].name}</span> at $
                {'3423'}
              </p>
            </div>
          </div>
        </div>

        <div style={{ width: '90%', margin: '0px auto', marginTop: '8px' }}>
          <img style={{ borderRadius: '12px' }} src={data?.links || ''} />
        </div>

        <div className="mt-5">
          <p className="text-md text-justify">{data?.text}</p>
        </div>
      </div>
    </Link>
  );
}

export default UserPost;
