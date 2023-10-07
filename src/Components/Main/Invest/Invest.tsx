/* eslint-disable  */
import { BsBellFill } from 'react-icons/bs';
import circular_economy from '../../../assets/main/circular-economy.png';
import { Link, useNavigate } from 'react-router-dom';
import axios, { AxiosError, AxiosResponse } from 'axios';
import React, { useCallback, useEffect, useState } from 'react';
import {
  usePlaidLink,
  PlaidLinkOnSuccess,
  PlaidLinkOnEvent,
  PlaidLinkOnExit,
  PlaidLinkOptions,
} from 'react-plaid-link';
import { instance } from '../../../lib/AxiosInstance';
import ReactApexChart from 'react-apexcharts';
import { getSingleUser } from '../../../Services/User.service';
import { getdbId } from '../../../Services/Cookie.service';
import PortfolioPage from '../../../Pages/Portfolio/PortfolioPage';
import TextImage from '../../TextImage/TextImage';


const Invest = ({ selfData }: any) => {
  const [token, setToken] = useState<string | null>(null);
  const navigate = useNavigate();
  // const [achcheck, setachcheck] = useState('')

  const pfp = selfData?.db?.pfp;

  console.log(`💚💛💚 : `, selfData?.db)
  const achcheck = selfData?.db?.ach;


  const dbId: string = getdbId()
  // useEffect(() => {
  //   const dataCall = async () => {
  //     const { data: myData } = await getSingleUser(dbId);
  //     const {
  //       db: { ach },
  //     } = myData;
  //     // setName(identity.given_name + ' ' + identity.family_name);
  //     console.log(`⚽`, ach);
  //     // setachcheck(ach)
  //   };
  //   dataCall();
  // }, []);


  // get a link_token from your API when component mounts
  React.useEffect(() => {
    const createLinkToken = async () => {
      instance
        .get(`/plaid/link_token`)
        .then(res => {
          setToken(res.data.link_token);
          console.log(`🎽🎽🛶🎿`, res.data);
        })
        .catch(er => console.log(er));
    };
    createLinkToken();
  }, []);




  const onSuccess = useCallback<PlaidLinkOnSuccess>((publicToken, metadata) => {
    try {
      instance
        .post(`/plaid/exchange_token`, {
          token: publicToken,
          bank_name: metadata.institution?.name,
        })
        .then(res => {
          console.log(res.data);
          window.location.reload();
        })
        .catch(er => console.log(er));
    } catch (error) { }
  }, []);

  const config: PlaidLinkOptions = {
    token,
    onSuccess,
    // onEvent,
    // onExit,
  };

  const {
    open,
    ready,
  } = usePlaidLink(config);


  const chartData = {
    series: [
      {
        name: 'Sparkline Chart',
        data: [30, 40, 25, 50, 49, 21, 70, 51, 60, 28, 60, 40],
      },
    ],
    options: {
      chart: {
        type: 'line',
        sparkline: {
          enabled: true,
        },
      },
      xaxis: {
        categories: [
          'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun',
          'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec',
        ],
      },
      colors: ['#008FFB'],
    },
  };

  // console.log("🔥🔥🔥🔥🔥🔥🔥achcheck", achcheck);

  // if (achcheck) {
  //   return <PortfolioPage pagecheck={true} />;
  // }
  return (
    <div>
      {/* --- INVEST --- */}
      <div className="flex items-center justify-between py-8">
        {/* --- invest left part start --- */}
        <div className="">
          <Link to="/profile">
            {/* <div className="w-8 h-8 bg-[#dfe0e2] flex items-center justify-center rounded-full">
              <div>
                <small className="font-bold">PH</small>
              </div>
            </div> */}
            <div className="avatar">
              <div className="w-8 rounded-full">
                {pfp ? <img src={pfp} /> : <TextImage width={'32px'} height={'32px'} textSize={'0.9rem'} text={selfData?.db?.name || "Test User"} />}
              </div>
            </div>
          </Link>
          {/* <div>
            <p className="text-3xl font-bold">Invest</p>
          </div> */}
        </div>
        {/* --- invest left part end --- */}

        {/* --- invest right part start --- */}
        <div className="flex items-center">
          <Link to="/notification">
            <div className="w-10 h-10 bg-[#dfe0e2] flex items-center justify-center rounded-full">
              <BsBellFill className="text-xl" />
            </div>
          </Link>
        </div>
        {/* --- invest right part end --- */}
      </div>
      {/* --- INVEST --- */}

      {/* ---  ENABLE CARD --- */}

      {achcheck ?
        (
          <>
            <PortfolioPage pagecheck={true} />
          </>
        )
        :
        (
          <div className="bg-[#ECECEC] rounded-2xl flex items-center justify-between p-4 space-x-3 shadow">
            <div className="">
              <div>
                <small>
                  Help us know you <br /> better so you can start <br /> investing
                </small>
              </div>
              <div>
                {/* <button
             onClick={() => navigate('/plaid')} */}
                <button onClick={() => open()} disabled={!ready}
                  className="bg-[#fff] mt-2 rounded-full px-3 py-2 text-xs font-bold"
                >
                  Enable investing
                </button>
              </div>
            </div>
            <div className="">
              <img
                className="w-[90px] h-auto"
                src={circular_economy}
                alt="circular_economy"
              />
            </div>
          </div>
        )

      }
    </div>
  );
};

export default Invest;


