import { instance } from '../lib/AxiosInstance';

export interface IFriendListItem {
  alpaca_id: string;
  name: string;
  created_at: string;
  city: string;
  email: string;
  dbId: string;
  following: [string];
}

export const getUserList = async () => {
  try {
    const {
      data: { data: result },
    } = await instance.get(`/social/people`);
    // console.log(result);
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

export const getSingleUser = async (userId: string) => {
  try {
    const { data } = await instance.get(`/accounts/combined/${userId}`);
    return data;
  } catch (error) {
    return null;
  }
};
