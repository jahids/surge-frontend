/* eslint-disable react-hooks/rules-of-hooks */
import { useCookies } from 'react-cookie';

export const getdbId = () => {
  const [cookies] = useCookies();
  return cookies?.dbid; // Access the 'dbid' cookie
};
export const getemail = () => {
  const [cookies] = useCookies();
  return cookies?.email; // Access the 'dbid' cookie
};
