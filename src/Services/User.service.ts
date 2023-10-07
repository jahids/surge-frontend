/* eslint-disable react-hooks/rules-of-hooks */
import { useSelector } from 'react-redux';
import { instance } from '../lib/AxiosInstance';

export interface IFriendListItem {
  alpaca_id: string;
  name: string;
  created_at: string;
  city: string;
  email: string;
  dbId: string;
  pfp: string;
  following: [string];
}
const defaultImg = `https://www.gravatar.com/avatar/00000000000000000000000000000000?d=retro&f=y`;

export const getUserList = async () => {
  try {
    const {
      data: { data: result },
    } = await instance.get(`/social/people`);
    console.log(`💎💍`, result);
    const filteredResult: [IFriendListItem] = result.map((v: any) => {
      const item: IFriendListItem = {
        alpaca_id: v.id as string,
        name: (v?.identity.given_name +
          ' ' +
          v?.identity.family_name) as string,
        created_at: (v.created_at as string).split('T')[0],
        city: v?.contact.city as string,
        email: v?.contact.email_address as string,
        dbId: v.dbId,
        pfp: v?.pfp || defaultImg,
        following: v.following,
      };
      return item;
    });

    return filteredResult;
  } catch (error) {
    // console.log(`🎈`,error);
    return null;
  }
  //filter data
};

export const getSelfData = async () => {
  try {
    const { data } = await instance.get(`/accounts`);
    return data;
  } catch (error) {
    return null;
  }
};

export const getDbUserList = async (search: string) => {
  const {
    data: { data },
  } = await instance(`/social/db-people?search=${search}`);
  return data;
};

export const getSingleUser = async (userId: string) => {
  try {
    const { data } = await instance.get(`/accounts/combined/${userId}`);
    return data;
  } catch (error) {
    return null;
  }
};

export function getDbData() {
  const dbData = useSelector(state => state.db);
  return dbData;
}

const stockSymbols = [
  'AAPL',
  'MSFT',
  'AMZN',
  'GOOGL',
  'FB',
  'TSLA',
  'BRK.B',
  'JPM',
  'JNJ',
  'V',
  'PG',
  'KO',
  'PFE',
  'WMT',
  'DIS',
  'NFLX',
  'NVDA',
  'IBM',
  'MCD',
  'ORAN',
];

// Function to get a random stock symbol
export function getRandomStockSymbol() {
  const randomIndex = Math.floor(Math.random() * stockSymbols.length);
  return stockSymbols[randomIndex];
}

export const getUserFriendList = async (limit = 3) => {
  const {
    data: {
      data: { following },
    },
  } = await instance.get(`/social/friend-list?limit=${limit}`);

  return following;
};
