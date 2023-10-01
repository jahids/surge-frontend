import React from 'react';
import styles from './UserPost.module.css'; // Import the CSS module
import { truncateText } from '../../Utils/converter';

function UserPost({ data }: any) {
  return (
    <ul className={styles.cards}>
      <li>
        <p className={styles.card}>
          <img
            src={data?.links || 'https://i.imgur.com/2DhmtJ4.jpg'}
            className={styles.card__image}
            alt=""
          />
          <div className={styles.card__overlay}>
            <div className={styles.card__header}>
              <svg
                className={styles.card__arc}
                xmlns="http://www.w3.org/2000/svg"
              >
                <path />
              </svg>
              <img
                className={styles.card__thumb}
                src={
                  data?.symbol[0]?.logo ||
                  'https://static2.finnhub.io/file/publicdatany/finnhubimage/stock_logo/950671851426.svg'
                }
                alt=""
              />
              <div className={styles.card__headerText}>
                <h1>{data?.symbol[0].symbol}</h1>
                {/* <span className="bg-green-400 text-xs font-medium mr-3 px-5 py-1 rounded-full">
                  {truncateText(data?.symbol[0]?.name, 30)}
                </span> */}
                {/* <span className="bg-green-400 text-xs font-medium block  px-2 py-1 rounded-full">
                  {data?.symbol[0].name}
                </span> */}
                <br />
                <span
                  className={`${
                    data?.order_side === 'buy' ? 'bg-green-400' : 'bg-red-400'
                  } text-xs font-medium mr-3 px-5 py-1 rounded-full`}
                >
                  {data?.order_side}
                </span>
                <span className="bg-green-400 text-xs font-medium mr-3 px-5 py-1 rounded-full">
                  {data?.order_type || 'limit'}
                </span>

                {/* <span className={styles.card__status}>3 hours ago</span> */}
              </div>
            </div>
            <p className={styles.card__description}>{data?.text}</p>
          </div>
        </p>
      </li>
    </ul>
  );
}

export default UserPost;
