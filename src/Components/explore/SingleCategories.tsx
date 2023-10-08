/* eslint-disable react/jsx-key */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { instance } from '../../lib/AxiosInstance';
import TextImage from '../TextImage/TextImage';
import { truncateText } from '../../Utils/converter';
import SingleCategoriesItem from './SingleCategoriesItem';
import BackButton from '../globalBackButton/BackButton';
import Loader from '../Loader/Loader';

function SingleCategories() {
  const { state } = useLocation();
  const [loading, setloading] = useState(true);
  console.log('item state', state);

  const [extradata, setextradata] = useState(null);

  useEffect(() => {
    const findExtraDes = async () => {
      try {
        const response = await instance.get(
          `categories?name=${state || 'Shell Companies'}`
        );
        setextradata(response?.data?.data?.symbols);
        console.log('💥🤯💥🤯', response?.data);
        setloading(false);
      } catch (error) {
        console.log('error', error);
        setloading(false);
      }
    };

    findExtraDes();
  }, [extradata?.length]);

  console.log('extra dta', extradata);

  if (loading) {
    return <Loader />;
  }
  return (
    <div className="mt-5 m-5">
      <div className="mt-5 mb-2">
        <BackButton />
      </div>

      {extradata?.length > 0 &&
        extradata?.map((item, index) => <SingleCategoriesItem data={item} />)}
    </div>
  );
}

export default SingleCategories;
