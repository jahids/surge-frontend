/* eslint-disable react-hooks/rules-of-hooks */
import axios from 'axios';
// import { useCookies } from 'react-cookie';

// // const AxiosInstance = () => {
// const [cookies] = useCookies(['mytoken']);

// Create an Axios instance
export const instance = axios.create({
  baseURL: '/api',
  timeout: 10000, // Adjust the timeout as needed
  withCredentials: true,
  // headers: {
  //   'X-Custom-Header': 'foobar',
  //   Authorization: `Bearer ${cookies.mytoken || ''}`,
  // },
});

//   return instance;
// };

// export default AxiosInstance;
