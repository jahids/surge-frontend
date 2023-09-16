/* eslint-disable no-unused-vars */
/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable @typescript-eslint/no-unused-vars */
import axios from 'axios';
import { useEffect } from 'react';

const Datapage = () => {
  useEffect(() => {
    const apicall = async () => {
      try {
        const apidata = await axios.get(`api/data`, {
          withCredentials: true,
        });

        console.log('api data ', apidata);
      } catch (error) {
        console.log(error);
      }
    };
    apicall();
  }, []);

  return (
    <>
      <h2>private page all data show</h2>
    </>
  );
};

export default Datapage;
