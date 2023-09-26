import { useState } from 'react';
import axios, { AxiosInstance, AxiosResponse, AxiosError } from 'axios';

interface ApiResponse<T> {
  data: T | null;
  loading: boolean;
  error: string | null;
}

const useApi = (): [AxiosInstance, ApiResponse<any>] => {
  const api = axios.create({
    baseURL: '/api', // Use the hardcoded base URL
    timeout: 10000,
    withCredentials: true,
  });

  const [response, setResponse] = useState<ApiResponse<any>>({
    data: null,
    loading: false,
    error: null,
  });

  api.interceptors.request.use(config => {
    setResponse({ data: null, loading: true, error: null });
    return config;
  });

  api.interceptors.response.use(
    (res: AxiosResponse<any>) => {
      setResponse({ data: res.data, loading: false, error: null });
      return res.data;
    },
    (error: AxiosError) => {
      setResponse({
        data: null,
        loading: false,
        error: error?.response?.data || 'Error occured',
      });
      return Promise.reject(error);
    }
  );

  return [api, response];
};

export default useApi;

// //

// //   const [api, response] = useApi<{ message: string }>();
// // useEffect(() => {
// //     const singleItemCall = async () => {
// //       try {
// //         const data = await api.get(`/symbol?name=${'ORAN'}`);
// //         // Depending on your use case, you may want to setState or perform other actions
// //         // setState(data.someValue); // Uncomment and implement as needed
// //       } catch (error) {
// //         console.log('error', error);
// //       }
// //     };

// //     singleItemCall();
// //   }, []); // Include api and state in the dependency array

// //   console.log('my data response', response);

// {
//   /* <div>
// {response.loading && <div>Loading...</div>}
// {response.error && <div>Error: {response.error}</div>}
// {response.data && <div>Data: {response.data.message}</div>}
// </div> */
// }

// new
